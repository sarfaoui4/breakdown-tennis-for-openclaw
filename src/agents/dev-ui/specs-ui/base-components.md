# Spécifications Composants UI de Base - Tennis Breakdown

## Configuration Tailwind CSS

### tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Palette Noire/Orange selon DESIGN_SYSTEM.md
        primary: {
          50: '#FFA87D',
          100: '#FF8B5C',
          200: '#FF7A46',
          300: '#FF6B35',
          400: '#FF5C24',
          500: '#FF4D13',
          600: '#E54410',
          700: '#CC390D',
          800: '#B22F0A',
          900: '#992408',
          950: '#4D1204',
        },
        // Niveaux de noir selon design system
        black: {
          100: '#1A1A1A',
          200: '#2A2A2A',
          300: '#3A3A3A',
          400: '#4A4A4A',
        },
        card: '#1A1A1A',
        'card-hover': '#252525',
        // Autres couleurs d'état
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#3B82F6',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['SF Mono', 'Monaco', 'Menlo', 'Ubuntu Mono', 'monospace'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'glow-orange': '0 0 20px rgba(255, 107, 53, 0.3)',
      },
    },
  },
  plugins: [],
}
```

---

## Composants UI de Base

### 1. Button Component

**Fichier**: `src/components/ui/Button.tsx`

```tsx
import React from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  fullWidth?: boolean
  children: React.ReactNode
}

const variantClasses = {
  primary: 'bg-primary text-white hover:bg-primary/90 focus:ring-primary',
  secondary: 'bg-black-200 text-white hover:bg-black-300 focus:ring-gray-500',
  outline: 'border border-gray-600 bg-transparent text-gray-300 hover:bg-gray-900 hover:border-gray-500 focus:ring-gray-500',
  ghost: 'text-gray-300 hover:text-white hover:bg-black-200 focus:ring-gray-500',
  danger: 'bg-error text-white hover:bg-error/90 focus:ring-error',
}

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading = false, fullWidth = false, disabled, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed',
          variantClasses[variant],
          sizeClasses[size],
          fullWidth && 'w-full',
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4\" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
```

---

### 2. Input Component

**Fichier**: `src/components/ui/Input.tsx`

```tsx
import React from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helperText, leftIcon, rightIcon, id, ...props }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="block text-sm font-medium text-gray-300 mb-2">
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500">{leftIcon}</span>
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              'w-full px-4 py-3 bg-black-100 border rounded-lg text-white placeholder-gray-500 transition-all duration-200',
              'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
              error ? 'border-error focus:ring-error' : 'border-gray-700',
              leftIcon && 'pl-10',
              rightIcon && 'pr-10',
              className
            )}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
            {...props}
          />
          {rightIcon && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <span className="text-gray-500">{rightIcon}</span>
            </div>
          )}
        </div>
        {error && (
          <p id={`${inputId}-error`} className="mt-2 text-sm text-error" role="alert">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={`${inputId}-helper`} className="mt-2 text-sm text-gray-500">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
```

---

### 3. Card Component

**Fichier**: `src/components/ui/Card.tsx`

```tsx
import React from 'react'
import { cn } from '@/lib/utils'

export interface CardProps {
  children: React.ReactNode
  title?: string
  subtitle?: string
  actions?: React.ReactNode
  hoverable?: boolean
  className?: string
}

export const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
  actions,
  hoverable = false,
  className,
}) => {
  return (
    <div
      className={cn(
        'bg-card rounded-xl shadow-lg p-6 border border-gray-800',
        hoverable && 'hover:bg-card-hover transition-all duration-200 cursor-pointer',
        className
      )}
    >
      {(title || subtitle || actions) && (
        <div className="flex items-start justify-between mb-4">
          <div>
            {title && <h3 className="text-xl font-semibold text-white">{title}</h3>}
            {subtitle && <p className="text-sm text-gray-400 mt-1">{subtitle}</p>}
          </div>
          {actions && <div className="flex items-center gap-2">{actions}</div>}
        </div>
      )}
      {children}
    </div>
  )
}

export const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <div className={cn('mb-4', className)}>{children}</div>
)

export const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <div className={cn('text-gray-300', className)}>{children}</div>
)

export const CardFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <div className={cn('mt-4 pt-4 border-t border-gray-800', className)}>{children}</div>
)
```

---

### 4. Badge Component

**Fichier**: `src/components/ui/Badge.tsx`

```tsx
import React from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps {
  children: React.ReactNode
  variant?: 'orange' | 'green' | 'yellow' | 'red' | 'gray'
  size?: 'sm' | 'md'
  className?: string
}

const variantClasses = {
  orange: 'bg-primary/20 text-primary border border-primary/30',
  green: 'bg-success/20 text-success border border-success/30',
  yellow: 'bg-warning/20 text-warning border border-warning/30',
  red: 'bg-error/20 text-error border border-error/30',
  gray: 'bg-gray-800 text-gray-300 border border-gray-700',
}

const sizeClasses = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-sm',
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'gray',
  size = 'sm',
  className,
}) => {
  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-full',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </span>
  )
}
```

---

### 5. utility function (cn)

**Fichier**: `src/lib/utils.ts`

```typescript
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

**Package dependencies**:
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "next": "^14.0.0",
    "tailwindcss": "^3.3.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0",
    "@stripe/stripe-js": "^2.2.0",
    "@stripe/react-stripe-js": "^2.4.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/node": "^20.0.0",
    "typescript": "^5.0.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0"
  }
}
```

---

## 6. Exemple Intégration Stripe (Composant Paiement)

**Fichier**: `src/components/payment/StripePaymentForm.tsx`

```tsx
'use client'

import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { useState } from 'react'

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: '#ffffff',
      fontFamily: 'Inter, sans-serif',
      fontSize: '16px',
      '::placeholder': {
        color: '#a0a0a0',
      },
    },
    invalid: {
      color: '#ef4444',
    },
  },
}

interface StripePaymentFormProps {
  amount: number
  onSuccess: (paymentIntentId: string) => void
  onError: (error: Error) => void
}

export const StripePaymentForm: React.FC<StripePaymentFormProps> = ({
  amount,
  onSuccess,
  onError,
}) => {
  const stripe = useStripe()
  const elements = useElements()
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!stripe || !elements) return

    setLoading(true)

    try {
      // 1. Créer PaymentIntent côté serveur
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, email }),
      })
      const { clientSecret } = await response.json()

      // 2. Confirmer paiement avec carte
      const cardElement = elements.getElement(CardElement)
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement!,
          billing_details: {
            email,
          },
        },
      })

      if (error) {
        onError(error)
      } else if (paymentIntent.status === 'succeeded') {
        onSuccess(paymentIntent.id)
      }
    } catch (err) {
      onError(err as Error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="votre@email.com"
        helperText="Vous recevrez le reçu à cette adresse"
      />

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Carte bancaire
        </label>
        <div className="p-4 bg-black-200 border border-gray-700 rounded-lg">
          <CardElement options={CARD_ELEMENT_OPTIONS} />
        </div>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        fullWidth
        loading={loading}
        disabled={!stripe || !email}
      >
        Payer {amount} €
      </Button>

      <p className="text-xs text-gray-500 text-center">
        🔒 Paiement sécurisé par Stripe. Vos données sont cryptées.
      </p>
    </form>
  )
}
```

---

## 7. Checklist d'Implémentation

### Avant de commencer chaque composant
- [ ] Lire design system et respecter couleurs/typography
- [ ] Vérifier accessibilité: contraste, ARIA labels, focus
- [ ] Penser responsive: mobile-first, breakpoints
- [ ] Prévoir états loading, error, empty, success
- [ ] Implémenter keyboard navigation
- [ ] Ajouter tests unitaires basiques

### Pour chaque composant API
- [ ] Créer interface TypeScript claire
- [ ] Gérer erreurs avec messages user-friendly
- [ ] Ajouter loading states partout
- [ ] Valider inputs (client-side validation)
- [ ] Accessibility: role, aria-*, tabIndex

### Intégration Stripe
- [ ] Utiliser Stripe Elements (PCI compliant)
- [ ] Jamais toucher données carte (tokenization)
- [ ] Tester avec cartes test Stripe
- ] Gérer webhooks côté serveur
- [ ] Logs erreurs pour debug
- [ ] Confirmation email automatique

### Responsive
- [ ] Mobile: < 768px
- [ ] Tablet: 768-1024px
- [ ] Desktop: > 1024px
- [ ] Tester sur devices réels
- [ ] Images responsive (max-w-full, h-auto)
- [ ] Touch targets >= 44x44px

### Performance
- [ ] Code splitting dynamique
- [ ] Images optimisées (WebP, srcset)
- [ ] Lazy loading pour composants lourds
- [ ] Minimize re-renders (React.memo si besoin)
- [ ]Bundle analysis régulier

---

## 8. Maquettes Visuelles (Description Textuelle)

### Page Paiement
```
┌─────────────────────────────────────────────┐
│ Header (Logo + Menu)                        │
├─────────────────────────────────────────────┤
│ Breadcrumb: Dashboard > Paiement           │
│                                              │
│ ┌─────────────────────────────────────┐  │
│ │ Order Summary                       │  │
│ │ • Forfait Premium: 50€             │  │
│ │ • 3 analyses détaillées             │  │
│ │ • Suivi 4 semaines                  │  │
│ │                                     │  │
│ │ Total: 50€                         │  │
│ │ TTC                               │  │
│ └─────────────────────────────────────┘  │
│                                              │
│ ┌─────────────────────────────────────┐  │
│ │ Informations de facturation         │  │
│ │ [Email input]                       │  │
│ └─────────────────────────────────────┘  │
│                                              │
│ ┌─────────────────────────────────────┐  │
│ │ Carte bancaire                      │  │
│ │ [Stripe Elements Card]              │  │
│ └─────────────────────────────────────┘  │
│                                              │
│ [Payer 50€ - Bouton orange]                 │
│ 🔒 Paiement sécurisé                        │
└─────────────────────────────────────────────┘
```

### Dashboard Analyse
```
┌─────────────────────────────────────────────┐
│ Header (Bonjour Prénom, Notifications)      │
├─────────────────────────────────────────────┤
│ Stats: 2 en cours • 5 terminées • 1 en attente│
│                                              │
│ 📊 Graphique progression (Recharts)         │
│                                              │
│ ┌─────────────┐ ┌─────────────┐            │
│ │ Upload      │ │ Analyses    │            │
│ │ nouvelle    │ │ terminées   │            │
│ │ vidéo       │ │ récentes    │            │
│ └─────────────┘ └─────────────┘            │
│                                              │
│ Mes vidéos:                                 │
│ ┌─────────────────────────────────────┐  │
│ │ 🎥 Service après-midi.MP4          │  │
│ │ Statut: 🔄 En analyse              │  │
│ │ Progression: 60%                   │  │
│ └─────────────────────────────────────┘  │
│ ┌─────────────────────────────────────┐  │
│ │ 🎥 Match vendredi.MOV              │  │
│ │ Statut: ✅ Terminé                 │  │
│ │ Disponible: 12 févr.              │  │
│ │ [Télécharger PDF] [Voir vidéo]     │  │
│ └─────────────────────────────────────┘  │
└─────────────────────────────────────────────┘
```

---

## 9. Recommandations Librairies Additionnelles

### UI & Form
- **React Hook Form** + **Zod** pour validation forms
- **React Query** pour gestion état server
- **Zustand** pour state management global (optionnel)

### Upload
- **React Dropzone** pour drag & drop
- **Uppy** pour upload avancé (compression, cloud)

### Charts
- **Recharts** (React-friendly)
- **Chart.js** + react-chartjs-2

### Animations
- **Framer Motion** pour micro-interactions
- **Tailwindcss Animation** pour transitions simples

### Icons
- **Lucide React** (modernes, accessibles)
- **Heroicons** (alternatives)

### Utilities
- **date-fns** pour dates
- **clsx** + **tailwind-merge** pour classes conditionnelles

---

## 10. Architecture d'État

### State Local (Composant)
- Form states (input values)
- UI states (loading, error dans un composant)
- Temporary data

### State Global (Context/Store)
- User profile & auth
- Cart/order (si multi-step payment)
- Upload queue
- Dashboard filters

### Server State (React Query)
- Analyses list
- Order history
- Stripe payment intents
- Upload progress

**Recommandation**: React Query pour données server, Zustand pour auth/user state, local state pour tout le reste.

---

## Fin des spécifications techniques détaillées.

Prochain rapport dans ~15 minutes avec:
- Checklist d'implémentation détaillée
- Exemples additionnels de composants complexes
- Plan de tests détaillé
- Coordination avec autres agents
