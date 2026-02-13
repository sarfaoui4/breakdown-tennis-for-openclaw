import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-02-24.acacia', //匹配 votre version dans .env.local (à vérifier)
  typescript: true
});
