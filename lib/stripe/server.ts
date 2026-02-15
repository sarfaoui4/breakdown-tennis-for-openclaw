import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-09-30' as any,
  // Version stable supportée (alternatives: '2024-06-20', '2023-10-16')
})