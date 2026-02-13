# Plan d'Implémentation UI/UX - Tennis Breakdown Dashboard Client

**Agent**: dev-ui (Développeur Frontend UI/UX)
**Date**: 2025-02-13
**Modèle**: StepFun 3.5 Flash
**Statut**: En cours d'analyse

---

## 1. Analyse de l'Existant

### Code Frontend
- **État**: Aucun code frontend existant
- **Conclusion**: À construire from scratch

### Design System
- **Fichier**: `design/DESIGN_SYSTEM.md`
- **Palette**: Noir (#0A0A0A) / Orange (#FF6B35) professionnel
- **Framework**: Tailwind CSS préconisé
- **Typographie**: Inter (Google Fonts)
- **Responsive**: Breakpoints SM/MD/LG/XL/2XL inclus
- **Accessibilité**: Guidelines détaillées (contraste, ARIA, navigation clavier)

### Stack Technique Recommandée
- **Frontend**: Next.js (React) + Tailwind CSS
- **Backend**: Node.js + Express (pour API)
- **Base données**: PostgreSQL
- **Upload vidéo**: S3/Cloudinary
- **Paiements**: Stripe Connect

---

## 2. Composants UI à Développer

### A. Page Paiement (Stripe Connect)
**Priorité**: Critique (Phase 3 du plan)

#### Fonctionnalités Requises
- Intégration Stripe Connect (comme plateforme)
- Support multiples méthodes de paiement (carte, Apple Pay, Google Pay)
- Calcul dynamique des prix selon forfait choisi
- Validation formulaire en temps réel
- Gestion des erreurs et messages utilisateur
- Confirmation de paiement et reçu
- Support pour remises et codes promo (optionnel)

#### Composants Nécessaires
1. **PaymentMethodSelector** - Sélection méthode paiement
2. **CardPaymentForm** - Formulaire carte bancaire
3. **OrderSummary** - Récapitulatif commande
4. **PromoCodeInput** - Champ code promo
5. **PaymentButton** - Bouton paiement avec loading state
6. **PaymentSuccess** - Page confirmation
7. **PaymentError** - Page/affichage erreurs

#### Spécifications UI
- Style: Bouton primaire orange sur fond noir
- Responsive: Adapté mobile (formulaire optimisation)
- Accessibilité: Labels ARIA, focus visible, navigate clavier
- Sécurité: Tokenisation Stripe, jamais stocker données carte

---

### B. Profil Client
**Priorité**: Haute (nécessaire avant dashboard analyse)

#### Fonctionnalités Requises
- Informations personnelles (nom, email, téléphone)
- Historique des commandes/analyses
- Progression tennis (niveau, objectifs)
- Préférences notifications
- Téléchargement analyses précédentes
- Gestion mot de passe

#### Composants Nécessaires
1. **ProfileHeader** - En-tête profil avec avatar
2. **PersonalInfoForm** - Formulaire infos personnelles
3. **OrderHistory** - Liste commandes passées
4. **AnalysisCard** - Carte analyse avec téléchargement
5. **TennisProfile** - Niveau, objectifs, historique
6. **NotificationSettings** - Préférences email/SMS
7. **PasswordChange** - Changement mot de passe

#### Spécifications UI
- Cartes sombres (#1A1A1A) pour sections
- Iônes clairs (blanc/gris) pour lisibilité
- Responsive: Stack sur mobile, grid sur desktop
- Accessibilité: Gestion focus, labels appropriés

---

### C. Upload Vidéo
**Priorité**: Critique (flux principal)

#### Fonctionnalités Requises
- Upload sécurisé avec progression
- Support multi-fichiers (optionnel)
- Validation format (MP4, MOV, AVI)
- Validation taille (< 500MB)
- Prévisualisation vidéo avant upload
- Chargement de vidéos existantes (Google Drive/Dropbox)
- Compression automatique au besoin
- Feedback statut (uploading, processing, complete)

#### Composants Nécessaires
1. **VideoUploader** - Zone drop/file selection
2. **VideoPreview** - Aperçu vidéo avant upload
3. **UploadProgress** - Barre progression animate
4. **FileInfoBadge** - Info fichier (taille, durée)
5. **UploadStatus** - Statut (pending, uploading, processing, done)
6. **AlternativeUpload** - Intégrations Google Drive/Dropbox
7. **VideoDropzone** - Zone drag & drop améliorée

#### Spécifications UI
- Drag & drop avec feedback visuel (bordure orange)
- Barre progression orange qui se remplit
- Badges d'état colorés (orange=en cours, vert=terminé, rouge=erreur)
- Responsive: Full width, mobile-friendly drag area
- Accessibilité: Focusable dropzone, instructions claires

---

### D. Dashboard Analyse
**Priorité**: Haute (valeur ajoutée principale)

#### Fonctionnalités Requises
- Vue d'ensemble des analyses en cours
- Liste vidéos soumises avec statuts
- Visualisation progression tennis (graphiques)
- Recommandations priorisées
- Accès rapide aux analyses complétées
- Notifications nouveau contenu disponible
- Filtres et tri (par date, statut, type)

#### Composants Nécessaires
1. **DashboardHeader** - Welcome + statistiques rapides
2. **StatsOverview** - Cards stats (total, en cours, complétées)
3. **VideoList** - Liste vidéos avec statuts
4. **StatusBadge** - Badge couleur selon statut
5. **ProgressChart** - Graphique progression (Chart.js ou Recharts)
6. **RecentAnalysis** - Analyses récentes en accès rapide
7. **UpcomingRecommendations** - Recommandations futures
8. **NotificationPanel** - Notifications中心

#### Spécifications UI
- Cards sombres avec ombres (shadow-lg)
- Graphiques en orange/blanc sur fond noir
- Badges: orange=processing, green=completed, yellow=pending
- Responsive: Grid adaptatif (1-3 colonnes)
- Accessibilité: Données graphiques en tableaux alternatives

---

## 3. Structure du Projet Recommandée

```
tennis-breakdown/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout principal avec Header/Footer
│   │   ├── page.tsx            # Landing page
│   │   ├── dashboard/
│   │   │   ├── page.tsx        # Dashboard principal
│   │   │   └── components/     # Composants spécifiques dashboard
│   │   ├── profile/
│   │   │   └── page.tsx        # Profil client
│   │   ├── upload/
│   │   │   └── page.tsx        # Upload vidéo
│   │   ├── payment/
│   │   │   ├── page.tsx        # Page paiement
│   │   │   └── success/
│   │   │       └── page.tsx    # Confirmation paiement
│   │   └── analyses/
│   │       └── [id]/
│   │           └── page.tsx    # Détail analyse individuelle
│   ├── components/
│   │   ├── ui/                 # Composants bases (boutons, inputs, cards)
│   │   ├── layout/             # Header, Sidebar, Footer
│   │   ├── payment/            # Composants paiement Stripe
│   │   ├── upload/             # Composants upload vidéo
│   │   ├── dashboard/          # Composants dashboard
│   │   └── profile/            # Composants profil
│   ├── lib/
│   │   ├── stripe/             # Configuration Stripe
│   │   ├── supabase/           # Client Supabase (si utilisé)
│   │   └── utils/              # Fonctions utilitaires
│   ├── styles/
│   │   └── globals.css         # Styles globaux + Tailwind imports
│   └── types/
│       └── index.ts            # Typescript types
├── public/
│   ├── images/
│   └── icons/
├── tailwind.config.js          # Config Tailwind avec couleurs custom
├── postcss.config.js
├── next.config.js
├── package.json
└── README.md
```

---

## 4. Spécifications d'Accessibilité

### Niveaux Critères WCAG 2.1 AA
- **Contraste**: Minimum 4.5:1 pour texte normal, 3:1 pour texte large
- **Navigation clavier**: Ordre logique de tabulation
- **ARIA Labels**: Pour éléments non-textuels
- **Focus visible**: Outline/shadows visibles
- **États hover/focus/active**: Tous disponibles

### Implémentation
1. **Couleurs**: Vérifier contraste avec outils (axe DevTools)
2. **ARIA**: Ajouter `aria-label`, `aria-describedby`, `aria-live`
3. **Keyboard**: Gérer `onKeyDown` sur éléments interactifs
4. **Semantic HTML**: Utiliser `<nav>`, `<main>`, `<section>`, etc.
5. **Skip Links**: Lien "skip to main content" en début de page
6. **Alt Text**: Images descriptives
7. **Form Labels**: Toujours associés explicitement

### Tests
- Navigation complète au clavier (Tab, Shift+Tab)
- Lecture écran (NVDA, VoiceOver)
- Contrast checker intégré au CI

---

## 5. Intégration Stripe Connect

### Configuration Stripe Platform
- **Stripe Account**: Créer compte platform
- **Connect**: Activer Stripe Connect pour marketplace
- **Webhooks**: Configurer endpoints (payment_intent.succeeded, etc.)
- **Dashboard**: Redirect URL après paiement

### Flux Paiement
1. Client sélectionne forfait dans dashboard
2. Redirect vers page paiement sécurisée
3. Stripe Elements collecte données carte (PCI compliant)
4. Création PaymentIntent côté serveur
5. Confirmation automatique côté client
6. Redirect vers page confirmation
7. Webhook notification serveur (fiable)

### Données Nécessaires
- **Forfaits**:
  - Basic: €25 (1 analyse courte)
  - Standard: €35 (1 analyse détaillée)
  - Premium: €50 (3 analyses + suivi)
- **Metadata**: User ID, order ID, analysis ID
- **Connect**: Application fee, destination account (si needed)

### Code Structure
```
lib/stripe/
├── client.ts              # Client Stripe (public key)
├── server/
│   ├── payment-intent.ts  # Création PaymentIntent
│   ├── webhook-handler.ts # Gestion webhooks
│   └── types.ts           # Types Stripe
```

---

## 6. Responsive Design Strategy

### Mobile First
- Développer d'abord mobile, puis étendre (min-width media queries)
- Touch-friendly: Minimum 44x44px pour éléments cliquables
- Grilles: `grid-cols-1` → `md:grid-cols-2` → `lg:grid-cols-3`

### Breakpoints cibles
- **Mobile**: < 768px (1 colonne, stacked)
- **Tablette**: 768px - 1024px (2 colonnes)
- **Desktop**: > 1024px (3 colonnes où applicable)

### Patterns Responsives
- **Navigation**: Menu hamburger sur mobile, sidebar sur desktop
- **Forms**: Full width inputs, stacked labels mobile
- **Cards**: Pleine largeur mobile, multi-colonnes desktop
- **Tables**: Scroll horizontal sur mobile, pleine vue desktop

---

## 7. Workflow de Développement

### Phase 1: Setup & Foundation (Jour 1-2)
1. Initialiser projet Next.js + Tailwind CSS
2. Configurer design system (couleurs, typography dans tailwind.config.js)
3. Créer layout de base avec Header/Footer
4. Mettre en place composants UI de base (Button, Input, Card, Badge)
5. Configurer ESLint, Prettier, TypeScript

### Phase 2: Composants Paiement (Jour 3-5)
1. Intégrer Stripe Elements
2. Développer PaymentMethodSelector, CardPaymentForm
3. Créer OrderSummary avec calcul prix dynamique
4. Implémenter Page Paiement complète
5. Tester avec Stripe test cards
6. Ajouter accessibilité (labels ARIA, focus management)

### Phase 3: Profil Client (Jour 6-8)
1. Page Profil avec en-tête
2. Formulaire PersonalInfoForm
3. OrderHistory avec AnalysisCards
4. NotificationSettings & PasswordChange
5. Tester responsive mobile
6. Validation des formulaires

### Phase 4: Upload Vidéo (Jour 9-11)
1. VideoDropzone avec drag & drop
2. VideoPreview intégration vidéo HTML5
3. UploadProgress bar animée
4. Intégration avec API backend (simulée d'abord)
5. Validation fichiers (type, taille)
6. États de chargement (uploading, processing, complete)

### Phase 5: Dashboard Analyse (Jour 12-14)
1. StatsOverview avec cards métriques
2. VideoList avec StatusBadge colors
3. ProgressChart avec Recharts/Chart.js
4. RecentAnalysis quick access
5. Filtres et recherche
6. Tests responsive à toutes tailles

### Phase 6: Polissage & Intégration (Jour 15-16)
1. Connecter tous les composants aux API réels
2. Gestion des états global (React Context/Redux si besoin)
3. Optimisation performance (images, code splitting)
4. Tests accessibilité complets
5. Audit responsive cross-browser
6. Correction bugs

### Phase 7: Stripe Connect & Testing (Jour 17-18)
1. Configuration Stripe Connect complète
2. Webhooks handling serveur
3. Tests end-to-end paiement
4. Test avec vrais mock data Stripe
5. Monitoring erreurs
6. Documentation API intégration

---

## 8. Détail Composants UI (Spécifications Techniques)

### Composants UI de Base (dans `components/ui/`)

#### Button
```tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
}

// Variants:
// primary: bg-primary hover:bg-primary-dark text-white
// secondary: bg-secondary hover:bg-secondary-dark text-gray-900
// outline: border border-gray-300 hover:border-gray-400 text-gray-700
// ghost: text-primary hover:bg-primary/10
```

#### Input
```tsx
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

// Classes: bg-gray-900 border border-gray-700 text-white
// Focus: ring-2 ring-primary
// Error: border-error
```

#### Card
```tsx
interface CardProps {
  children: React.ReactNode
  title?: string
  subtitle?: string
  actions?: React.ReactNode
  hoverable?: boolean
}

// Classes: bg-card rounded-xl shadow-lg p-6 border border-gray-800
// Hover: hover:bg-card-hover transition-all
```

#### Badge
```tsx
interface BadgeProps {
  children: React.ReactNode
  variant?: 'orange' | 'green' | 'yellow' | 'red' | 'gray'
  size?: 'sm' | 'md'
}

// Utilisé pour statuts: upload, paiement, analyse
```

---

## 9. Tests & Validation

### Tests Unitaires (Jest + React Testing Library)
- Comportement boutons
- Validation formulaires
- Gestion erreurs

### Tests E2E (Playwright/Cypress)
- Flux complet paiement
- Upload vidéo workflow
- Navigation dashboard
- Responsive breakpoints

### Tests Accessibilité (axe DevTools)
- Contraste couleurs
- ARIA compliance
- Keyboard navigation
- Screen reader basics

### Testing Stripe
- Stripe test cards (4242 4242 4242 4242)
- 3D Secure simulation
- Webhook event simulation
- Error scenarios (card declined, etc.)

---

## 10. Prochaines étapes Immédiates

### À faire avant de coder:
1. ✅ Confirmer design system avec client (couleurs ok? additional constraints?)
2. ✅ Choisir stack précise (Next.js App Router? Pages Router?)
3. ⏳ Créer maquettes Figma/Adobe XD si disponibles
4. ⏳ Finaliser spécifications Stripe Connect (exact pricing, webhook endpoints)
5. ⏳ Définir API endpoints backend (à coordonner avec agent dev-backend)

### Premier commit à faire:
- Initialiser projet Next.js
- Configurer Tailwind avec design system colors
- Créer composants UI de base (Button, Input, Card, Badge)
- Commencer composant PaymentMethodSelector avec Stripe Elements

---

## 11. Risques & Atténuation

### Risque 1: Stripe Connect complexité
**Impact**: Élevé - paiement cœur métier
**Atténuation**: Commencer avec Stripe Elements simple (pas Connect d'abord), puis ajouter Connect. Tester exhaustivement en mode test. Documentation Stripe rigoureuse.

### Risque 2: Responsive design laborieux
**Impact**: Moyen - utilisateurs mobiles précieux
**Atténuation**: Développer mobile-first dès le début. Tester sur vraies devices régulièrement. Utiliser devtools responsive mode mais valider sur device réel.

### Risque 3: Accessibilité tardive
**Impact**: Moyen - légal + UX
**Atténuation**: Intégrer accessibilité DÈS la conception. Ajouter assertions dans chaque PR. Former l'équipe aux basics WCAG.

### Risque 4: Upload vidéo complexe
**Impact**: Élevé - fonctionnalité critique
**Atténuation**: Utiliser librairie éprouvée (react-dropzone + Uppy). Tester avec gros fichiers. Simuler backend d'abord avec setTimeout. Monitoring upload errors.

---

## 12. Coordination avec Autres Agents

### Agent Dev-Backend
- **Besoin**: API endpoints pour paiement, upload, profil, analyses
- **Livrable attendu**: API spec (OpenAPI/Swagger) avant dev frontend
- **Sync**: Revue API spec conjoute, définir data contracts

### Agent DevOps
- **Besoin**: Environnement staging, déploiement, certificats HTTPS
- **Livrable**: Infra pour démo début Phase 3

### Agent Marketing
- **Besoin**: Pages landing pour conversion
- **Sync**: Coopérer sur landing page design (mêmes composants UI)

---

## 13. Milestones & Livrables

| Milestone | Livrables | Date Estimée |
|-----------|-----------|--------------|
| Project Setup | Repo Next.js + Tailwind + UI components | J+2 |
| Payment UI | Page paiement complète + Stripe Elements | J+5 |
| Profile UI | Profil client avec infos + historique | J+8 |
| Upload UI | Uploader vidéo fonctionnel (frontend) | J+11 |
| Dashboard UI | Dashboard analyse complet | J+14 |
| Integration | Intégration API + Stripe Connect | J+18 |
| Polishing | Responsive final, accessibilité, tests | J+20 |

---

## 14. Status & Prochain Rapport

**Date dernière mise à jour**: 2025-02-13 17:40 GMT+1

**Status**: analysing existing architecture and design system

**Prochain rapport**: ~15 minutes (vers 17:55 GMT+1)

**Actions complétées**:
- ✅ Lecture AGENTS.md, STRUCTURE.md, PLAN_ACTION.md
- ✅ Analyse design system (DESIGN_SYSTEM.md)
- ✅ Vérification absence code frontend existant
- ✅ Compréhension des 4 composants principaux à développer

**En cours**:
- Finaliser plan détaillé (ce document)
- Préparer recommandations spécifiques par composant

**À venir**:
- Créer composants UI de base dans /src/components/ui/
- Setup Next.js + Tailwind
- Début implémentation PaymentMethodSelector

---

**Fin du rapport initial. Prochaine mise à jour dans ~15 minutes.**
