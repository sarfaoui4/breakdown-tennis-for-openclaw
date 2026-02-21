# Configuration Vercel pour Tennis Breakdown

## Projet Vercel
- Nom : `tennis-breakdown` (ou similaire)
- Framework : Next.js
- Root Directory : `.` (racine du dépôt)
- Build Command : `npm run build`
- Output Directory : `.next`

## Variables d'environnement (Environment Variables)
À configurer dans Vercel > Project Settings > Environment Variables :

### Required
| Key | Type | Description |
|-----|------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Plain | URL du projet Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Plain | Clé anonyme Supabase |
| `SUPABASE_SERVICE_ROLE_KEY` | Plain | Clé service role (admin) |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Plain | Clé publique Stripe |
| `STRIPE_SECRET_KEY` | Plain | Clé secrète Stripe |
| `STRIPE_WEBHOOK_SECRET` | Plain | Secret webhook Stripe |

**Note** : Ces variables doivent être ajoutées pour les environnements Production, Preview, Development.

### Optional (si utilisé)
| Key | Description |
|-----|-------------|
| `STRIPE_PRICE_ANALYSIS_BASIC` | ID du prix Basic (si dynamique) |
| `STRIPE_PRICE_ANALYSIS_PREMIUM` | ID du prix Premium |

## Branche de déploiement (Git)
- **Production** : `main` (ou `master`)
- **Preview** : Toutes les branches (optionnel)

## Webhooks
Vercel doit être configuré pour recevoir les webhooks GitHub :
- Push sur `main` → déclenche build et déploiement automatique

## Domaine personnalisé (optionnel)
- Ajouter un domaine personnalisé dans Project Settings > Domains
- Configurer les enregistrements DNS selon les instructions Vercel

## Dépannage
- **Build échoue** : Vérifier que toutes les env vars sont définies et que `node_modules` n'est pas poussé
- **Erreur 500** : Vérifier les logs Vercel (Functions > Logs) et la console
- **Routes 404** : Vérifier que `vercel.json` est à la racine et que `rootDirectory` est `.`

## Command line (optionnel)
Si tu veux déployer via CLI :
```bash
vercel --prod
```
(Doit avoir `vercel` CLI installé et être connecté)
