# Coordination des agents – Frontend Tennis Breakdown

## Périmètres par agent (ne pas empiéter)

- **dev-components** : `client/components/ui/` et `client/components/*/` (création composants réutilisables)
- **dev-pages** : `client/app/` (pages app) – landing (`page.tsx`), pricing (`pricing/page.tsx`), upload (`upload/page.tsx`), dashboard (`dashboard/page.tsx`)
- **dev-payments** : `client/lib/stripe/` (checkout, webhooks, retour client)
- **dev-auth** : `client/lib/supabase/` (client, middleware, pages auth)
- **dev-ui** (coordinateur) : `client/` architecture globale, thème, design system (tailwind config, globals.css)
- **copy-integration** : injection micro-copies dans composants/pages (modification de textes)
- **support-integration** : `client/components/support/` (chat widget, FAQ intégrée)
- **analytics-integration** : `client/lib/analytics/` et ajout d’événements dans layout/pages

## Règles
- Chaque agent écrit dans son propre dossier d’abord et ne modifie pas les dossiers des autres sans accord.
- dev-ui valide l’architecture et les imports entre dossiers.
- Rendez-vous quotidiens via `progress.json` (mise à jour de `task`, `estimatedMinutes`, `lastUpdate`).