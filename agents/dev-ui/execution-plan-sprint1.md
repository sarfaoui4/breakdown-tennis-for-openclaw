# Plan d'Exécution Détaillé - Sprint 1 UI

**Objectif**: Mettre en place la foundation UI complète avec composants de base, puis développer le Dashboard Client avec les 4 composants principaux.

---

## Sprint 0: Setup & Configuration (Jour 1)

### Tâches Setup
- [ ] Initialiser projet Next.js 14 (App Router)
  ```bash
  npx create-next-app@latest tennis-breakdown-client --typescript --tailwind --app
  ```
- [ ] Configurer tailwind.config.js avec couleurs custom (DESIGN_SYSTEM.md)
- [ ] Installer dependencies CLI: `clsx`, `tailwind-merge`, `lucide-react`
- [ ] Configurer TypeScript strict mode
- [ ] Setup ESLint + Prettier
- [ ] Créer dossier structure: `/src/components/ui`, `/src/components/layout`, `/src/lib/utils.ts`
- [ ] Ajouter fonts Inter dans `layout.tsx` (Google Fonts)
- [ ] Créer composants UI de base (Button, Input, Card, Badge selon specs)
- [ ] Vérifier design system: couleurs OK sur composants test

### Livrable Jour 1
- Repo Next.js fonctionnel
- Composants UI de base opérationnels
- Exemple page test avec tous composants
- Tailwind config avec palette noir/orange

---

## Sprint 1: Composants Paiement (Jour 2-3)

### Prérequis
- Compte Stripe test créé (à demander à agent Marketing/DevOps)
- Stripe publishable key disponible

### Jour 2: Stripe Integration Setup
- [ ] Installer Stripe packages: `@stripe/stripe-js`, `@stripe/react-stripe-js`
- [ ] Créer `src/lib/stripe/client.ts` (Stripe instance)
- [ ] Créer composant `PaymentMethodSelector` (simple boutons radio: carte, autres)
- [ ] Créer `CardPaymentForm` avec Stripe Elements (CardElement)
- [ ] Style CardElement: fond noir, texte blanc selon DESIGN_SYSTEM

### Jour 3: Page Paiement Complète
- [ ] Créer page `/app/payment/page.tsx`
- [ ] Ajouter `OrderSummary` avec calcul dynamique forfaits
  - Basic: €25
  - Standard: €35
  - Premium: €50
- [ ] Implémenter `PromoCodeInput` (optionnel si temps)
- [ ] Créer API route: `/app/api/create-payment-intent/route.ts`
- [ ] Tester avec Stripe test cards:
  - 4242 4242 4242 4242 (succès)
  - 4000 0000 0000 0002 (refusé)
- [ ] Ajouter states loading/success/error
- [ ] Page confirmation: `/app/payment/success/page.tsx`

### Checklist Paiement
- [ ] Responsive mobile (formulaire stack)
- [ ] Accessibilité: labels ARIA sur CardElement
- [ ] Navigation clavier OK
- [ ] Focus visible sur tous éléments
- [ ] Loading spinner pendant traitement
- [ ] Messages erreur clairs

### Livrable Sprint 1
- Paiement fonctionnel avec Stripe Elements (test mode)
- Page paiement responsive
- API create-payment-intent
- Page confirmation

---

## Sprint 2: Profil Client (Jour 4-5)

### Jour 4: Profil Foundation
- [ ] Créer page `/app/profile/page.tsx`
- [ ] Layout avec `ProfileHeader` (avatar + nom + email)
- [ ] Onglets: Informations, Historique, Préférences
- [ ] Composant `PersonalInfoForm` (nom, email, téléphone)
- [ ] Validation email/téléphone (format)
- [ ] Sauvegarde automatique ou bouton "Enregistrer"
- [ ] Message feedback succès/erreur

### Jour 5: Historique & Settings
- [ ] Composant `OrderHistory` (liste orders avec status badge)
- [ ] Composant `AnalysisCard` (pour chaque analyse terminée)
- [ ] Bouton télécharger PDF (lien placeholder)
- [ ] Component `NotificationSettings` (checkboxes email/SMS)
- [ ] Component `PasswordChange` (form avec confirmation)
- [ ] Ajouter `useAuth` context (simulé d'abord)

### Checklist Profil
- [ ] Responsive: stacked sur mobile, 2-col on desktop
- [ ] Edit mode vs view mode (bouton "Modifier")
- [ ] Validation en temps réel (email format, etc.)
- [ ] Loading states lors sauvegarde
- [ ] Accessibilité: champs labelés, boutons avec texte

### Livrable Sprint 2
- Page profil complète
- Toutes sections opérationnelles
- Données persistées (localStorage d'abord, puis DB)

---

## Sprint 3: Upload Vidéo (Jour 6-7)

### Jour 6: Uploader Foundation
- [ ] Créer page `/app/upload/page.tsx`
- [ ] Composant `VideoDropzone` avec react-dropzone
  - Drag & drop area (bordure orange dashed)
  - Click to select file
- [ ] Composant `VideoPreview` (lecteur vidéo HTML5)
- [ ] Composant `FileInfoBadge` (nom, taille, durée)
- [ ] Validation: type MIME (video/*), taille max 500MB
- [ ] Afficher erreurs validation (taille, type)

### Jour 7: Upload Progress & Processing
- [ ] Composant `UploadProgress` (barre horizontale animée orange)
- [ ] Upload mock: use `setTimeout` pour simuler réseau
- [ ] États: idle → uploading → processing → complete/error
- [ ] Support multi-files: upload queue
- [ ] Alternative upload: Google Drive button (placeholder)
- [ ] After upload: redirect vers dashboard

### Checklist Upload
- [ ] Mobile: dropzone full width, facile à toucher
- [ ] Accessibilité: dropzone focusable, instructions text
- [ ] Cancellation upload (bouton annuler)
- [ ] Resume capability (optionnel)
- [ ] Feedback visuel clair étape par étape

### Livrable Sprint 3
- Uploader vidéo fonctionnel (frontend complet)
- Validation intégrée
- Progress bar animée
- Redirect automatique post-upload

---

## Sprint 4: Dashboard Analyse (Jour 8-10)

### Jour 8: Dashboard Layout & Stats
- [ ] Page `/app/dashboard/page.tsx`
- [ ] `DashboardHeader` (welcome message + user)
- [ ] `StatsOverview` avec 3 cards:
  - "En cours" (orange badge)
  - "Terminées" (green badge)
  - "En attente" (yellow badge)
- [ ] Progress chart avec Recharts:
  - BarChart ou LineChart
  - Stats: nombre analyses mois par mois
  - Couleurs: orange/white sur fond noir

### Jour 9: Video List & Status
- [ ] Composant `VideoList` (liste des vidéos soumises)
- [ ] `StatusBadge`组件: orange=processing, green=completed, etc.
- [ ] Filtres: par statut (dropdown), par date
- [ ] `VideoListItem`: nom, date soumission, statut, action
- [ ] Loading skeleton pour list
- [ ] Empty state: "Aucune vidéo soumise"

### Jour 10: Recommendations & Finitions
- [ ] `RecentAnalysis` cards (3 dernières analyses)
- [ ] `UpcomingRecommendations` (prochains exercices suggérés)
- [ ] `NotificationPanel` dropdown (notifications)
- [ ] Responsive grid: 1-col mobile, 2-col tablet, 3-col desktop
- [ ] Refresh automatique toutes les 30s (optionnel)

### Checklist Dashboard
- [ ] Data fetching avec React Query (ou SWR)
- [ ] Error boundary si API down
- [ ] Skeletons pendant chargement
- [ ] Filter & sort functionality
- [ ] Search Vidéos (par nom/date)
- [ ] Export CSV optionnel des stats

### Livrable Sprint 4
- Dashboard complet avec stats filtres
- Video list interactive
- Charts intégrés
- Responsive sur tous devices

---

## Sprint 5: Integration & Polishing (Jour 11-12)

### Jour 11: API Integration
- [ ] Coordonner avec Agent Dev-Backend pour API endpoints:
  - GET `/api/user/profile`
  - POST `/api/user/profile`
  - GET `/api/orders`
  - GET `/api/analyses`
  - POST `/api/upload`
  - GET `/api/upload/status/:id`
- [ ] Implémenter React Query pour toutes requêtes
- [ ] Gestion erreurs globales (error boundary)
- [ ] Cache stratégies (staleTime, cacheTime)
- [ ] Authentification: tokens JWT (context auth)

### Jour 12: Responsive & Accessibilité Final
- [ ] Audit responsive:
  - iPhone SE (375px)
  - iPhone 12 (390px)
  - iPad (768px)
  - Desktop (1024px+)
- [ ] Tests clavier complets
- [ ] Validation WCAG AA avec axe DevTools
- [ ] Alt text sur toutes images/icons
- [ ] Skip links added
- [ ] Focus visible styles renforcés
- [ ] Screen reader test (VoiceOver/NVDA)

---

## Sprint 6: Stripe Connect & Testing (Jour 13-15)

### Jour 13: Stripe Connect Setup
- [ ] Créer Stripe account platform
- [ ] Activer Stripe Connect (Standard ou Express)
- [ ] Configurer webhook endpoint:
  - `payment_intent.succeeded`
  - `payment_intent.payment_failed`
- [ ] Mettre à jour API `/create-payment-intent` avec Connect
- [ ] Ajouter `application_fee_amount` si nécessaire
- [ ] Tester webhooks avec Stripe CLI

### Jour 14: Tests End-to-End
- [ ] E2E flow complet:
  1. Login → Dashboard
  2. Upload vidéo
  3. Paiement → Success
  4. Retour dashboard → voir vidéo en cours
  5. Analyse terminée → télécharger PDF
- [ ] Playwright/Cypress test main flows
- [ ] Tests paiements Stripe cartes test
- [ ] Tests upload gros fichiers (interruption)
- [ ] Tests responsive cross-browser (Chrome, Safari, Firefox)

### Jour 15: Bugfixes & Deploy
- [ ] Correction tous bugs identifiés
- [ ] Performance audit (Lighthouse >90)
- [ ] Optimisation images (next/image)
- [ ] Code splitting review
- [ ] Bundle size < 200KB gzipped
- [ ] Deploy Vercel/Netlify (staging)
- [ ] Smoke tests en staging
- [ ] Documentation README

---

## API Requirements (À transmettre à Agent Dev-Backend)

### Avant Sprint 5, nécessaires:
1. **Auth**: POST `/api/auth/login`, POST `/api/auth/register`, GET `/api/auth/me`
2. **User Profile**: GET/PUT `/api/user/profile`
3. **Upload**: POST `/api/upload` (multipart), GET `/api/upload/:id/status`
4. **Analyses**: GET `/api/analyses` (list), GET `/api/analyses/:id`
5. **Payments**: POST `/api/create-payment-intent`, GET `/api/orders`
6. **Webhook**: POST `/api/webhooks/stripe` (verify signature)

### Format Réponse API (exemple)
```json
{
  "analyses": [
    {
      "id": "string",
      "videoUrl": "string",
      "status": "processing" | "completed" | "failed",
      "submittedAt": "ISO8601",
      "completedAt": "ISO8601?",
      "score": "number?",
      "highlights": ["string"?],
      "downloadUrl": "string?"
    }
  ]
}
```

---

## Communication avec Autres Agents

### Agent Dev-Backend
- **Before**: Discuter API spec, data contracts, auth flow
- **During**: Weekly sync sur endpoints availability
- **After**: Test dev/staging ensemble

### Agent DevOps
- **Before**: Environment needs (Staging, Production URLs)
- **During**: Deploy pipeline setup
- **After**: Monitoring, logging, alerts

### Agent Marketing
- **Before**: Landing page design handoff
- **During**: Analytics tracking (GA4, Pixel)
- **After**: Conversion tracking feedback

---

## Progrès Initial (à jour: 13 févr. 17:45)

### Complété
- ✅ Analyse design system
- ✅ Plan général drafté
- ✅ Spécifications composants UI de base
- ✅ Structure projet définie

### En cours
- ⏳ Setup projet Next.js (attendre confirmation stack)
- ⏳ Création composants ui de base

### À venir (prochain 15 min)
- Élaborer templates spécifiques pour chaque page
- Préparer tests accessibilité checklist
- Communiquer avec agent dev-backend sur API endpoints requis

---

## Next Milestone
**Date**: 2026-02-14 (end of day)
**Goal**: Composants UI de base + Stripe Elements partiellement fonctionnel
**Dependencies**: Stripe keys from DevOps/Marketing agent

---

*Fin du plan d'exécution détaillé. Mise à jour journalière prévue.*
