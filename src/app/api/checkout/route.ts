import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
});

export async function POST(request: NextRequest) {
  try {
    const { offer, userId, videoId } = await request.json();

    if (!offer || !userId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const priceMap: Record<string, number> = {
      basic: 1999,
      premium: 4999,
    };

    const amount = priceMap[offer];
    if (!amount) {
      return NextResponse.json(
        { error: 'Invalid offer' },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: `Tennis Breakdown - Analyse ${offer === 'basic' ? 'Basique' : 'Premium'}`,
              description: 'Analyse vidéo professionnelle de votre match de tennis',
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${request.nextUrl.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.nextUrl.origin}/?canceled=true`,
      metadata: {
        user_id: userId,
        offer,
        video_id: videoId || '',
      },
    });

    return NextResponse.json({ url: session.url, sessionId: session.id });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
