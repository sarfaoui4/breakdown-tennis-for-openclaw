import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { supabase } from '@/lib/supabaseClient';

export async function POST(request: NextRequest) {
  try {
    // Récupérer l'utilisateur depuis la session Supabase (cookies)
    const supabaseClient = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    const { data: { user } } = await supabaseClient.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Lire le body : { offer: 'match' | 'performance' | 'elite' }
    const { offer } = await request.json();

    // Mapping des price IDs (à confirmer avec les env vars)
    const priceMap: Record<string, string> = {
      match: process.env.STRIPE_PRICE_ANALYSIS_BASIC!,
      performance: process.env.STRIPE_PRICE_ANALYSIS_PREMIUM!,
      elite: process.env.STRIPE_PRICE_ANALYSIS_PREMIUM! // à ajuster si prix différent
    };

    const priceId = priceMap[offer];
    if (!priceId) {
      return NextResponse.json({ error: 'Invalid offer' }, { status: 400 });
    }

    // Créer la session Stripe Checkout
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${request.headers.get('origin')}/dashboard?success=true`,
      cancel_url: `${request.headers.get('origin')}/dashboard?canceled=true`,
      customer_email: user.email || undefined,
      metadata: {
        user_id: user.id,
        offer: offer
      }
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error: any) {
    console.error('Checkout error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
