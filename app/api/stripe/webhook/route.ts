import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { stripe } from '../../lib/stripe/server'
import { createClient } from '../../lib/supabase/server'
import { headers } from 'next/headers'

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(req: NextRequest) {
  const body = await req.text()
  const signature = headers().get('stripe-signature')!

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  const supabase = await createClient()

  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object as Stripe.Checkout.Session
      const userId = session.metadata?.userId
      const matchId = session.metadata?.matchId
      const analysisType = session.metadata?.analysisType

      if (session.payment_status === 'paid') {
        // Update order status in database
        await supabase.from('orders').update({
          status: 'paid',
          stripe_session_id: session.id,
          payment_intent_id: session.payment_intent as string,
          paid_at: new Date().toISOString(),
        }).eq('id', session.metadata?.orderId)

        // Create analysis record
        await supabase.from('analyses').insert({
          user_id: userId,
          match_id: matchId,
          type: analysisType,
          status: 'pending',
          order_id: session.metadata?.orderId,
          price: session.amount_total ? session.amount_total / 100 : 0,
          currency: session.currency?.toUpperCase() || 'EUR',
        })
      }
      break

    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object as Stripe.PaymentIntent
      console.log('PaymentIntent was successful:', paymentIntent.id)
      break

    case 'charge.refunded':
      const charge = event.data.object as Stripe.Charge
      // Update order status to refunded
      await supabase.from('orders').update({
        status: 'refunded',
        refunded_at: new Date().toISOString(),
      }).eq('stripe_payment_intent_id', charge.payment_intent as string)
      break

    case 'charge.dispute.created':
      const dispute = event.data.object as Stripe.Dispute
      // Update order status to disputed
      await supabase.from('orders').update({
        status: 'disputed',
        disputed_at: new Date().toISOString(),
      }).eq('stripe_payment_intent_id', dispute.payment_intent as string)
      break

    default:
      console.log(`Unhandled event type ${event.type}`)
  }

  return NextResponse.json({ received: true })
}