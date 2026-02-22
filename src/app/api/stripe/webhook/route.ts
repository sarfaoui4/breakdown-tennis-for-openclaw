import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
});

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: NextRequest) {
  const body = await request.text();
  const sig = request.headers.get('stripe-signature');

  if (!sig) {
    return NextResponse.json({ error: 'Missing signature' }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error('Webhook signature verification failed:', err.message);
    return NextResponse.json({ error: 'Webhook signature verification failed' }, { status: 400 });
  }

  // Gérer l'événement checkout.session.completed
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;

    // Récupérer les metadata
    const userId = session.metadata?.user_id;
    const offer = session.metadata?.offer;
    const videoId = session.metadata?.video_id;

    // Créer un enregistrement dans la table orders
    const { error: orderError } = await supabase
      .from('orders')
      .insert({
        stripe_session_id: session.id,
        user_id: userId,
        offer,
        video_id: videoId,
        status: 'paid',
        amount: session.amount_total,
        currency: session.currency,
        payment_intent: session.payment_intent as string,
      });

    if (orderError) {
      console.error('Order insert error:', orderError);
    }

    // TODO: envoyer un email de confirmation (Resend)
    // await sendConfirmationEmail(userId, session.id, offer);
  }

  return NextResponse.json({ received: true });
}
