# Déploiement Tennis Breakdown – Vercel

## Prérequis
- Dépôt Git (GitHub, GitLab, etc.)
- Compte Vercel
- Clés Supabase et Stripe

## Étapes

### 1. Remplir les variables d’environnement
Dans `client/.env.local` (local) et plus tard dans Vercel (production) :
```
NEXT_PUBLIC_SUPABASE_URL=ton_url_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=ta_cle_anon_supabase
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

### 2. Commit & push
```bash
cd tennis-breakdown
git add -A
git commit -m "MVP Tennis Breakdown – landing, pricing, upload, demo mode"
git push origin master
```

### 3. Créer le projet Vercel
- Va sur https://vercel.com/new
- Importe le dépôt `tennis-breakdown`
- Vercel détecte automatiquement Next.js (racine du projet = `client/` grâce à `vercel.json`)
- Dans “Environment Variables”, ajoute les mêmes clés que dans `.env.local` (sans le préfixe `NEXT_PUBLIC_` si tu ne veux pas les exposer au client ; garde `NEXT_PUBLIC_` pour celles qui doivent être publiques)
- Déploie

### 4. Vérifier
- Ouvre l’URL produite par Vercel
- Check les routes `/`, `/pricing`, `/upload`, `/login`, `/signup`, `/dashboard`
- Si besoin, ajuste le code et recommitte pour itérer

## Notes
- Les pages `/login` et `/signup` sont en mode démo (message “bientôt disponible”). Une fois les clés Supabase renseignées, tu peux réactiver les formulaires en remplaçant le contenu de ces pages par les versions fonctionnelles (voir `client/app/login/page.tsx` et `signup/page.tsx` d’origine).
- Le dashboard protégé nécessite Supabase + `getServerClient` (dans `client/lib/supabase/server.ts`).

## Support
Si le build échoue, vérifie les logs Vercel et assure-toi que `vercel.json` est bien à la racine du dépôt.