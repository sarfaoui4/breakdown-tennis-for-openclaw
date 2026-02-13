import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { supabaseAdmin } from '@/lib/supabaseClient';

export async function POST(request: NextRequest) {
  try {
    // Récupérer le body brut et la signature
    const body = await request.text();
    const signature = request.headers.get('stripe-signature')!;
    const secret = process.env.STRIPE_WEBHOOK_SECRET!;

    // Vérifier la signature Stripe
    let event;
    try {
      event = stripe.webhooks.constructEvent(body, signature, secret);
    } catch (err: any) {
      console.error('Webhook signature verification failed:', err.message);
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    // Gérer l'événement
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;

      // Récupérer les métadonnées
      const userId = session.metadata?.user_id;
      const offer = session.metadata?.offer;
      const videoUrl = ''; // à remplir plus tard par l'admin

      // Créer la commande dans Supabase (via admin client)
      const { data, error } = await supabaseAdmin
        .from('orders')
        .insert({
          user_id: userId,
          video_url: '', // temporaire, à remplir par l'admin après upload client
          price_id: session.display_items?.[0]?.price?.id || session.line_items?.data[0]?.price?.id || '',
          stripe_session_id: session.id,
          status: 'paid'
        })
        .select()
        .single();

      if (error) {
        console.error('Supabase insert error:', error);
        return NextResponse.json({ error: 'Database error' }, { status: 500 });
      }

      // TODO: envoyer email de confirmation
      console.log(`Order created: ${data.id} for user ${userId}`);
    }

    return NextResponse.json({ received: true });
  } catch (error: any) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
