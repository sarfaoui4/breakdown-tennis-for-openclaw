# Cahier des Charges – Tennis Breakdown

**Version** : 1.2  
**Date** : 2026-02-13  
**Objectif** : Site de conversion pour service d'analyse vidéo de tennis.

---

## Pages Principales

### Landing Page (`/`)
- Hero: positionnement fort, CTA, image crédible
- Problem → Solution
- Authority: photo + bio Sami
- How It Works (3 étapes simples)
- Pricing (3 offres: Match 39€, Performance 69€, Elite 119€)
- What You Get (liste visuelle)
- Differentiation (not AI, real insight)
- Social Proof (témoignages)
- FAQ
- Final CTA

### Auth (`/login`, `/signup`)
- Supabase Auth
- Redirection vers dashboard

### Dashboard (`/dashboard`)
- Upload vidéo + choix offre → Stripe Checkout
- Historique commandes
- Page "Mon Analyse" (`/analysis/[id]`)

---

## Architecture

- Next.js 14 App Router
- Tailwind (thème noir/orange: `#0A0A0A` / `#FF5722`)
- Supabase (Auth, Storage, PostgreSQL)
- Stripe Checkout + Webhooks

---

## À Faire (Post-MVP)

- Admin pour upload commentaires
- Email notifications
- PDF report generation
- Tests e2e

---

**Design**: Mobile first, vitesse, simplicité.
