# Versions de Tennis Breakdown

## v1.0.0-mvp (Stable)
- **Date** : 2026-02-13 à 2026-02-19
- **Commit** : `9f3aa10` (fix Stripe API version 2026-01-28.clover)
- **Caractéristiques** :
  - Landing page noir/orange avec pricing (19.99€ / 49.99€)
  - Authentification Supabase (login/register)
  - Dashboard client (historique analyses, upload)
  - Upload vidéo (simulation, pas de stockage réel)
  - Paiement Stripe Checkout intégré
  - Admin panel (orders, analyses)
  - Webhook Stripe
  - Mode démo pour pages auth (bientôt disponible)
- **Status** : ✅ Fonctionnel, déployé sur Vercel
- **Variables requises** :
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - `SUPABASE_SERVICE_ROLE_KEY`
  - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
  - `STRIPE_SECRET_KEY`
  - `STRIPE_WEBHOOK_SECRET`

## v1.1.0-lead (Non stable)
- **Date** : 2026-02-19 à 2026-02-20
- **Commit** : `fcbe125` à `354fd21`
- **Ajouts** :
  - Page /lead avec capture email
  - Génération PDF du guide gratuit "10 erreurs techniques"
  - API route /api/lead/download
- **Problèmes** :
  - Build failures sur Vercel
  - Complexification
  - Variables perdues
  - Redéploiements多次
- **Status** : ⚠️ Instable, en cours de fixation

## Dernière version stable : v1.0.0-mvp (commit 9f3aa10)
