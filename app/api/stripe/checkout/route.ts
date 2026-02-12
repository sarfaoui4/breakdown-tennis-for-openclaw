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

    const { matchId, analysisType, priceId, quantity = 1 } = await req.json()

    // Validate analysis type and price
    const priceConfig = {
      basic: process.env.STRIPE_PRICE_ANALYSIS_BASIC,
      premium: process.env.STRIPE_PRICE_ANALYSIS_PREMIUM,
    }

    const selectedPriceId = priceId || priceConfig[analysisType as keyof typeof priceConfig]
    
    if (!selectedPriceId) {
      return NextResponse.json({ error: 'Invalid analysis type' }, { status: 400 })
    }

    // Create order in database
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .insert({
        user_id: user.id,
        match_id: matchId,
        analysis_type: analysisType,
        status: 'pending',
        amount: analysisType === 'basic' ? 1500 : 3500, // in cents
        currency: 'eur',
      })
      .select()
      .single()

    if (orderError) {
      console.error('Order creation error:', orderError)
      return NextResponse.json({ error: 'Failed to create order' }, { status: 500 })
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
        matchId,
        analysisType,
        orderId: order.id,
      },
      customer_email: user.email,
      billing_address_collection: 'required',
      shipping_address_collection: {
        allowed_countries: ['FR', 'BE', 'CH', 'LU', 'MC'], // European countries
      },
      custom_text: {
        submit: {
          message: 'Votre analyse sera traitée sous 24h après le paiement.',
        },
      },
      consent_collection: {
        terms_of_service: 'required',
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