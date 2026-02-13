# Guide de Développement - Tennis Breakdown Client

## Getting Started

### Installation
```bash
cd tennis-breakdown/client
npm install
```

### Développement
```bash
npm run dev
# Ouvrir http://localhost:3000
```

### Build Production
```bash
npm run build
npm start
```

## Structure du Projet

```
client/
├── app/
│   ├── layout.tsx          # Layout racine (Header/Footer global)
│   ├── page.tsx            # Landing page
│   ├── dashboard/
│   │   ├── page.tsx
│   │   └── components/
│   ├── profile/
│   │   └── page.tsx
│   ├── upload/
│   │   └── page.tsx
│   ├── payment/
│   │   ├── page.tsx
│   │   └── success/page.tsx
│   └── analyses/
│       └── [id]/page.tsx
├── components/
│   ├── ui/                 # Composants atomiques (Button, Input, Card, Badge)
│   ├── layout/             # Header, Footer, Sidebar, Navigation
│   ├── payment/            # StripePaymentForm, OrderSummary
│   ├── upload/             # VideoDropzone, UploadProgress
│   ├── dashboard/          # StatsOverview, VideoList, ProgressChart
│   └── profile/            # PersonalInfoForm, OrderHistory
├── lib/
│   ├── stripe/
│   │   ├── client.ts
│   │   └── server/
│   ├── utils.ts            # cn() function
│   └── api/                # API calls abstraction
├── public/
│   ├── images/
│   └── icons/
└── styles/
    └── globals.css
```

## Configuration Tailwind CSS

Le projet utilise Tailwind CSS v4. La configuration est dans `app/globals.css`:

```css
@import "tailwindcss";

@theme {
  /* Couleurs primaires */
  --color-primary-50: #FFA87D;
  --color-primary-100: #FF8B5C;
  --color-primary-200: #FF7A46;
  --color-primary-300: #FF6B35;
  --color-primary-400: #FF5C24;
  --color-primary-500: #FF4D13;
  --color-primary-600: #E54410;
  --color-primary-700: #CC390D;
  --color-primary-800: #B22F0A;
  --color-primary-900: #992408;
  --color-primary-950: #4D1204;

  /* Noirs */
  --color-black-100: #1A1A1A;
  --color-black-200: #2A2A2A;
  --color-black-300: #3A3A3A;

  /* Couleurs de surface */
  --color-card: #1A1A1A;
  --color-card-hover: #252525;

  /* États */
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-error: #EF4444;
  --color-info: #3B82F6;

  /* Fontes */
  --font-sans: 'Inter', sans-serif;
  --font-mono: 'SF Mono', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
}
```

## Composants de Base

### Importation
```tsx
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
```

### Utilisation Exemple
```tsx
<Card title="Mon Compte" subtitle="Informations personnelles">
  <div className="space-y-4">
    <Input
      label="Email"
      type="email"
      value={email}
      onChange={setEmail}
      required
    />
    <Button variant="primary" loading={loading}>
      Enregistrer
    </Button>
  </div>
</Card>
```

## Intégration Stripe

### Installation
```bash
npm install @stripe/stripe-js @stripe/react-stripe-js
```

### Configuration
Dans `lib/stripe/client.ts`:
```typescript
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export { stripePromise }
```

### Utilisation dans Composant
```tsx
'use client'

import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { stripePromise } from '@/lib/stripe/client'

export default function PaymentPage() {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  )
}
```

## API Routes

Créer des endpoints API dans `app/api/[route]/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    // Traitement
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    )
  }
}
```

## Variables d'Environnement

Créer `.env.local`:
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXTAUTH_SECRET=...
NEXTAUTH_URL=http://localhost:3000
```

## Gestion d'État

### React Query (Server State)
```bash
npm install @tanstack/react-query
```

```tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
```

### Zustand (Global State - optionnel)
```bash
npm install zustand
```

## Tests

### Unitaires (Jest + RTL)
```bash
npm install -D jest @testing-library/react @testing-library/jest-dom @types/jest
```

```typescript
// __tests__/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from '@/components/ui/Button'

test('renders button with correct text', () => {
  render(<Button>Click me</Button>)
  expect(screen.getByText('Click me')).toBeInTheDocument()
})
```

### E2E (Playwright)
```bash
npm install -D @playwright/test
npx playwright install
```

## Accessibilité

- Utiliser always `<label>` lié à `<input>` via `htmlFor`
- Ajouter `aria-label` aux boutons icône-only
- `role="alert"` pour messages d'erreur
- Focus visible: `focus:ring-2 focus:ring-primary`
- Navigation clavier: tabindex logique

## Déploiement Vercel

1. Push code sur GitHub
2. Connecter projet à Vercel
3. Ajouter Environment Variables dans Vercel dashboard
4. Déployer automatique à chaque push sur main

## Linting & Formatting

```bash
npm run lint  # Linter ESLint
npx prettier --write .  # Formatter
```

## Troubleshooting

### Port déjà utilisé
```bash
# Trouver et tuer processus
lsof -ti:3000 | xargs kill -9
```

### Module not found
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build error
```bash
npm run clean # si script existe
# ou supprimer .next
rm -rf .next
npm run build
```

---

## Support & Contact

Pour toute question sur le développement UI:
- Consulter DESIGN_SYSTEM.md pour les standards visuels
- Voir specs-ui/base-components.md pour détails techniques
- Plan d'exécution: execution-plan-sprint1.md
