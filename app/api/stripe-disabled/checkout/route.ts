import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe/server'
import { createClient } from '@/lib/supabase/server'

export async function POST(req: NextRequest) {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { videoId, analysisType, priceId, quantity = 1 } = await req.json()

    // Validate analysis type and price
    const priceConfig = {
      basic: process.env.STRIPE_PRICE_ANALYSIS_BASIC,
      premium: process.env.STRIPE_PRICE_ANALYSIS_PREMIUM,
    }

    const selectedPriceId = priceId || priceConfig[analysisType as keyof typeof priceConfig]

    if (!selectedPriceId) {
      return NextResponse.json({ error: 'Invalid analysis type or price ID missing' }, { status: 400 })
    }

    // Fetch video from database to get the public URL
    const { data: video, error: videoError } = await supabase
      .from('videos')
      .select('file_path')
      .eq('id', videoId)
      .eq('user_id', user.id) // Ensure ownership
      .single()

    if (videoError || !video) {
      console.error('Video fetch error:', videoError)
      return NextResponse.json({ error: 'Video not found or access denied' }, { status: 404 })
    }

    // Build public URL for the video
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
    const videoUrl = `${supabaseUrl}/storage/v1/object/public/tennis-videos/${video.file_path}`

    // Create order in database - matching Supabase schema
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .insert({
        user_id: user.id,
        video_url: videoUrl,
        price_id: selectedPriceId,
        status: 'pending',
      })
      .select()
      .single()

    if (orderError) {
      console.error('Order creation error:', orderError)
      return NextResponse.json({ error: 'Failed to create order' }, { status: 500 })
    }

    // Create analysis record linking order only
    // Note: video_id column not yet present in Supabase schema, using order_id only
    const { error: analysisError } = await supabase
      .from('analyses')
      .insert({
        user_id: user.id,
        order_id: order.id,
        type: analysisType,
        status: 'pending',
      })

    if (analysisError) {
      console.error('Analysis creation error:', analysisError)
      // Don't fail the checkout if analysis creation fails, but log it
      // Consider implementing retry logic or manual fix later
    }

    // Create Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'sepa_debit'],
      line_items: [
        {
          price: selectedPriceId,
          quantity,
        },
      ],
      mode: 'payment',
      success_url: `${req.nextUrl.origin}/dashboard/payments/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.nextUrl.origin}/dashboard/payments/cancel`,
      metadata: {
        userId: user.id,
        videoId: videoId,
        analysisType: analysisType || 'unknown',
        orderId: order.id,
      },
      customer_email: user.email,
      billing_address_collection: 'required',
      shipping_address_collection: {
        allowed_countries: ['FR', 'BE', 'CH', 'LU', 'MC'], // European countries
      },
      allow_promotion_codes: true,
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Checkout error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}