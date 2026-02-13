import { stripe } from './stripe'
import { StripeCheckoutSession } from './stripe'

export interface CreateCheckoutSessionParams {
  customerEmail?: string
  customerId?: string
  priceId: string
  quantity?: number
  successUrl: string
  cancelUrl: string
  metadata?: Record<string, string>
}

export interface CheckoutSessionResponse {
  sessionId: string
  clientSecret?: string
  url?: string
}

/**
 * Crée une session de checkout simple (sans Connect pour le MVP)
 */
export async function createCheckoutSession(
  params: CreateCheckoutSessionParams
): Promise<CheckoutSessionResponse> {
  const {
    customerEmail,
    customerId,
    priceId,
    quantity = 1,
    successUrl,
    cancelUrl,
    metadata = {},
  } = params

  try {
    // Récupérer le prix
    const price = await stripe.prices.retrieve(priceId)
    if (!price.unit_amount) {
      throw new Error('Price must have a unit amount')
    }

    // Créer ou récupérer le customer Stripe
    let stripeCustomerId = customerId
    if (!stripeCustomerId && customerEmail) {
      const customers = await stripe.customers.list({
        email: customerEmail,
        limit: 1,
      })
      if (customers.data.length > 0) {
        stripeCustomerId = customers.data[0].id
      } else {
        const customer = await stripe.customers.create({
          email: customerEmail,
        })
        stripeCustomerId = customer.id
      }
    }

    // Créer la session de checkout (mode payment)
    const session: StripeCheckoutSession = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      customer: stripeCustomerId,
      customer_email: customerEmail,
      line_items: [
        {
          price: priceId,
          quantity,
        },
      ],
      mode: 'payment',
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata,
    })

    return {
      sessionId: session.id,
      url: session.url || undefined,
    }
  } catch (error) {
    console.error('Error creating checkout session:', error)
    throw error
  }
}

/**
 * Récupère une session de checkout par son ID
 */
export async function getCheckoutSession(
  sessionId: string
): Promise<StripeCheckoutSession> {
  return await stripe.checkout.sessions.retrieve(sessionId)
}

/**
 * Crée une session de checkout pour un abonnement
 */
export async function createSubscriptionCheckoutSession(
  params: CreateCheckoutSessionParams & {
    trialDays?: number
  }
): Promise<CheckoutSessionResponse> {
  const {
    customerEmail,
    customerId,
    priceId,
    successUrl,
    cancelUrl,
    metadata = {},
    trialDays,
  } = params

  try {
    const price = await stripe.prices.retrieve(priceId)
    if (!price.unit_amount) {
      throw new Error('Price must have a unit amount')
    }

    let stripeCustomerId = customerId
    if (!stripeCustomerId && customerEmail) {
      const customers = await stripe.customers.list({
        email: customerEmail,
        limit: 1,
      })
      if (customers.data.length > 0) {
        stripeCustomerId = customers.data[0].id
      } else {
        const customer = await stripe.customers.create({
          email: customerEmail,
        })
        stripeCustomerId = customer.id
      }
    }

    const session: StripeCheckoutSession = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      customer: stripeCustomerId,
      customer_email: customerEmail,
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata,
      ...(trialDays && { subscription_data: { trial_period_days: trialDays } }),
    })

    return {
      sessionId: session.id,
      url: session.url || undefined,
    }
  } catch (error) {
    console.error('Error creating subscription checkout session:', error)
    throw error
  }
}