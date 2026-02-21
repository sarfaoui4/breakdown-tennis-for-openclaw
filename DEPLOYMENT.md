# Tennis Breakdown - Guide de Déploiement et d'Opérations

## Objectif
Déployer rapidement et de façon fiable l'application Tennis Breakdown sur Vercel, avec toutes les configurations nécessaires.

## Version Stable Actuelle
- **Tag** : `v1.0.0-mvp`
- **Commit** : `9f3aa10` (avec correctifs jusqu'à `d232894` trigger)
- **Branche de déploiement** : `main` (ou `mvp-stable`)
- **Caractéristiques** :
  - Landing page noir/orange avec pricing (19.99€ / 49.99€)
  - Auth Supabase (login, register, verify)
  - Dashboard client (upload, analyses, paiements)
  - Stripe Checkout intégré
  - Admin panel
  - **Pas** de lead magnet / guide gratuit

## Prérequis
1. Compte Vercel avec accès au projet `tennis-breakdown` (ou similaire)
2. Variables d'environnement configurées (voir plus bas)
3. Dépôt Git lié au projet Vercel ( GitHub → Vercel )
4. Fichier `vercel.json` à la racine avec configuration Next.js

## Variables d'environnement Vercel

### Obligatoires
| Variable | Type | Description | Exemple |
|----------|------|-------------|---------|
| `NEXT_PUBLIC_SUPABASE_URL` | Plain | URL projet Supabase | `https://tzdypqpexlwugehsscec.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Plain | Clé anonyme Supabase | `sb_publishable_Z_jj4unnBnxVz4HpJn9SkA_xsgAPLKL` |
| `SUPABASE_SERVICE_ROLE_KEY` | Plain | Clé admin Supabase | `eyJhbGci...` |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Plain | Clé publique Stripe | `pk_test_...` |
| `STRIPE_SECRET_KEY` | Plain | Clé secrète Stripe | `sk_test_...` |
| `STRIPE_WEBHOOK_SECRET` | Plain | Secret webhook Stripe | `whsec_...` |

### Optionnelles (si utilisé)
- `STRIPE_PRICE_ANALYSIS_BASIC` : ID du prix Basic (si dynamique)
- `STRIPE_PRICE_ANALYSIS_PREMIUM` : ID du prix Premium

**Important** : Ajouter ces variables pour tous les environnements (Production, Preview, Development).

## Workflow de Déploiement

### 1. Préparer la branche stable
```bash
git checkout mvp-stable   # ou main si on a推
git pull origin mvp-stable
```

### 2. Vérifier le build local
```bash
npm ci
npm run build
npm run dev &  # optionnel, pour tester local
```
Vérifier que :
- Pas d'erreur de build
- Landing page s'affiche (noir/orange)
- `/dashboard` redirige vers `/auth/login`
- `/auth/register` fonctionne
- Pages pricing visibles

### 3. Valider les variables locales
Vérifier que `.env.local` contient toutes les clés (ne pas commiter !).

### 4. Déclencher le déploiement Vercel
Deux options :

**A. Via push Git (automatique)**
```bash
git add .
git commit -m "deploy: timestamp"
git push origin mvp-stable:main   # ou main → main
```
Vercel détecte le push et build automatiquement.

**B. Via CLI Vercel (manuel)**
```bash
npx vercel --prod
```
(Nécessite `vercel` CLI configuré)

### 5. Surveiller le déploiement
- Dashboard Vercel : voir le statut du build
- URL de préview : `https://breakdown-tennis-for-openclaw.vercel.app`
- Tester les routes après déploiement

### 6. Post-déploiement
- Vérifier les logs Vercel (Functions > Logs) pour les erreurs
- Tester un flux complet : inscription → upload → paiement (carte test Stripe 4242...)
- Vérifier les webhooks Stripe (dashboard Stripe → Developers → Webhooks)

## Dépannage

### Build échoue sur Vercel
- Vérifier que **toutes** les variables d'environnement sont définies dans Vercel
- Vérifier que `vercel.json` est présent et correct
- Regarder les logs de build dans Vercel (Deployments > View Build Details)

### Erreur 500 en production
- Vérifier les logs Fonctions (Serverless Functions)
- Souvent un problème de variables manquantes ou mal formatées
- Vérifier que `node_modules` n'est pas poussé (`.gitignore` doit l'exclure)

### Pages 404
- Vérifier que `rootDirectory` dans `vercel.json` est `.` (racine)
- Vérifier que le build a produit `.next` avec les pages
- Vérifier que la branche déployée est la bonne

### Webhook Stripe ne déclenche pas
- Vérifier que l' endpoint `/api/stripe/webhook` est accessible (pas d'auth)
- Vérifier que le signing secret `STRIPE_WEBHOOK_SECRET` est correct
- Dans Stripe Dashboard, vérifier les tentatives de livraison (échecs/succès)

## Références

### Fichiers clés
- `vercel.json` : configuration Vercel (framework, buildCommand, rootDirectory)
- `next.config.js` : configuration Next.js (dotenv, webpack alias)
- `.env.local` : variables locales (ne pas commiter)
- `DEPLOY.md` : notes de déploiement historiques
- `WORKFLOW_DEPLOIEMENT.md` : workflow API Vercel

### Commandes utiles
```bash
# Nettoyer et rebuild
rm -rf .next node_modules/.cache
npm ci && npm run build

# Tester le build de production localement
npm run build && npm start

# Voir les variables d'environnement (attention aux secrets)
node -e "require('dotenv').config({path:'.env.local'}); console.log(Object.keys(process.env).filter(k=>k.includes('SUPABASE')||k.includes('STRIPE')))"
```

## Agents Recommandés

Pour automatiser, créer les agents suivants avec le skill `openclaw` :

1. **DeployAgent** : exécute le workflow de déploiement (build, test, push, surveillance)
2. **MonitorAgent** : surveille l'URL production et remonte les erreurs (codes 5xx)
3. **TestAgent** : exécute des tests E2E simulés sur l'instance déployée
4. **NotifierAgent** : envoie un résumé par email/Slack après chaque déploiement

---

**Dernière mise à jour** : 2026-02-20
**Par** : Claude Assistant
**Pour** : Sami – Tennis Breakdown
