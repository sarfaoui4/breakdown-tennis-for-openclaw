import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-01-28.clover',
  typescript: true,
})

export type StripeConnectAccount = Stripe.Account
export type StripeCheckoutSession = Stripe.Checkout.Session
export type StripeCustomer = Stripe.Customer
export type StripePaymentIntent = Stripe.PaymentIntent