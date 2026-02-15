import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
  // Version stable supportée. Alternatives: '2024-06-20', '2024-09-30'
})