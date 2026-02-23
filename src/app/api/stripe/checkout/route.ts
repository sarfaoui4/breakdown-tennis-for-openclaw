import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@/lib/supabase/server';

// Créer l'instance Stripe au runtime
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
});

export async function POST(req: NextRequest) {
  try {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { videoId, analysisType, priceId, quantity = 1 } = await req.json();

    const priceConfig = {
      basic: process.env.STRIPE_PRICE_ANALYSIS_BASIC,
      premium: process.env.STRIPE_PRICE_ANALYSIS_PREMIUM,
    };

    const selectedPriceId = priceId || priceConfig[analysisType as keyof typeof priceConfig];

    if (!selectedPriceId) {
      return NextResponse.json({ error: 'Invalid analysis type or price ID missing' }, { status: 400 });
    }

    const { data: video, error: videoError } = await supabase
      .from('videos')
      .select('*')
      .eq('id', videoId)
      .single();

    if (videoError || !video) {
      return NextResponse.json({ error: 'Video not found' }, { status: 404 });
    }

    const baseUrl = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';
    const successUrl = `${baseUrl}/dashboard/payments/success?session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${baseUrl}/dashboard/payments/cancel`;

    const checkoutSession = await stripe.checkout.sessions.create({
      customer_email: user.email,
      line_items: [
        {
          price: selectedPriceId,
          quantity,
        },
      ],
      mode: 'payment',
      metadata: {
        userId: user.id,
        videoId,
        analysisType: analysisType || (priceId ? 'custom' : 'basic'),
      },
      success_url: successUrl,
      cancel_url: cancelUrl,
    });

    return NextResponse.json({ sessionId: checkoutSession.id, url: checkoutSession.url });
  } catch (error: any) {
    console.error('Stripe checkout error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
