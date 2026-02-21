# Design System - Tennis Breakdown

## Palette de Couleurs

### Couleurs Principales (Noir/Orange Professionnel)
- **Noir Principal**: `#0A0A0A` - Fond principal, texte, éléments structurants
- **Noir Clair**: `#1A1A1A` - Surfaces, cartes, sidebar
- **Noir Moyen**: `#2A2A2A` - Bordures, séparateurs
- **Orange Primaire**: `#FF6B35` - Accents, boutons primaires, CTA
- **Orange Secondaire**: `#FF8B5C` - Hover, accents secondaires
- **Orange Clair**: `#FFA87D` - Fond léger, highlights
- **Blanc**: `#FFFFFF` - Texte sur fond noir
- **Gris Clair**: `#E5E5E5` - Texte secondaire
- **Gris Moyen**: `#A0A0A0` - Texte tertiaire, labels
- **Gris Foncé**: `#404040` - Désactivé, inactif

### Couleurs d'État
- **Succès**: `#10B981` (Vert émeraude)
- **Alerte**: `#F59E0B` (Orange ambré)
- **Erreur**: `#EF4444` (Rouge)
- **Info**: `#3B82F6` (Bleu)

## Typographie

### Polices
- **Police Principale**: Inter (via Google Fonts)
- **Police de Code**: 'SF Mono', 'Monaco', 'Menlo', 'Ubuntu Mono', monospace

### Échelle Typographique
- **h1**: `text-4xl lg:text-5xl font-bold` - Titres principaux
- **h2**: `text-3xl font-bold` - Titres de section
- **h3**: `text-2xl font-semibold` - Sous-titres
- **h4**: `text-xl font-semibold` - Titres de cartes
- **h5**: `text-lg font-medium` - Sous-titres de cartes
- **Body Large**: `text-lg` - Texte important
- **Body Regular**: `text-base` - Texte principal
- **Body Small**: `text-sm` - Labels, métadonnées
- **Caption**: `text-xs` - Petits textes, légendes

## Espacement (Spacing Scale)

### Échelle 4px
- `0`: `0`
- `1`: `4px` (0.25rem)
- `2`: `8px` (0.5rem)
- `3`: `12px` (0.75rem)
- `4`: `16px` (1rem)
- `5`: `20px` (1.25rem)
- `6`: `24px` (1.5rem)
- `8`: `32px` (2rem)
- `10`: `40px` (2.5rem)
- `12`: `48px` (3rem)
- `16`: `64px` (4rem)
- `20`: `80px` (5rem)

## Bordures

### Rayons (Border Radius)
- **None**: `rounded-none` - 0px
- **SM**: `rounded-sm` - 2px
- **Base**: `rounded` - 4px
- **MD**: `rounded-md` - 6px
- **LG**: `rounded-lg` - 8px
- **XL**: `rounded-xl` - 12px
- **2XL**: `rounded-2xl` - 16px
- **Full**: `rounded-full` - 9999px

### Épaisseurs (Border Width)
- **Default**: `border` - 1px
- **Medium**: `border-2` - 2px
- **Thick**: `border-4` - 4px

## Ombres

### Niveaux d'ombres
- **Shadow SM**: `shadow-sm` - Ombre légère pour les cartes
- **Shadow Base**: `shadow` - Ombre standard
- **Shadow MD**: `shadow-md` - Ombre moyenne pour les composants
- **Shadow LG**: `shadow-lg` - Ombre forte pour les modales
- **Shadow XL**: `shadow-xl` - Ombre très marquée
- **Shadow 2XL**: `shadow-2xl` - Ombre maximale
- **Shadow Inner**: `shadow-inner` - Ombre intérieure

## Composants

### Boutons
#### Bouton Primaire
```jsx
<button className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
  Action Primaire
</button>
```

#### Bouton Secondaire
```jsx
<button className="bg-secondary hover:bg-secondary-dark text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
  Action Secondaire
</button>
```

#### Bouton Outline
```jsx
<button className="border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
  Action Outline
</button>
```

#### Bouton Ghost
```jsx
<button className="text-primary hover:bg-primary/10 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
  Action Ghost
</button>
```

### Cartes
#### Carte Standard
```jsx
<div className="bg-card rounded-xl shadow-lg p-6 border border-gray-800">
  <!-- Contenu -->
</div>
```

#### Carte Interactive
```jsx
<div className="bg-card hover:bg-card-hover rounded-xl shadow-lg p-6 border border-gray-800 transition-all duration-200 cursor-pointer">
  <!-- Contenu -->
</div>
```

### Navigation
#### Header Principal
- Fond: `bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60`
- Texte: `text-white`
- Liens: `text-gray-300 hover:text-white transition-colors`

#### Sidebar
- Fond: `bg-gray-900`
- Liens actifs: `bg-primary/10 text-primary border-l-4 border-primary`
- Liens hover: `bg-gray-800 text-white`

### Formulaire
#### Input Standard
```jsx
<input className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
```

#### Label
```jsx
<label className="block text-sm font-medium text-gray-300 mb-2">
  Label
</label>
```

#### Validation
- Succès: `border-success focus:ring-success`
- Erreur: `border-error focus:ring-error`

## Utilitaires

### Classes Personnalisées
- `.glass`: Effet glassmorphism
- `.gradient-primary`: Dégradé principal
- `.text-gradient`: Texte avec dégradé
- `.hover-lift`: Effet de levée au hover

### Animations
- Transitions: `transition-all duration-200`
- Hover scale: `hover:scale-105`
- Fade in: `animate-fadeIn`

## Responsive Design

### Breakpoints
- **SM**: `640px` (mobile)
- **MD**: `768px` (tablette)
- **LG**: `1024px` (desktop)
- **XL**: `1280px` (large desktop)
- **2XL**: `1536px` (extra large)

### Classes Responsives
- Grid: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Padding: `p-4 md:p-6 lg:p-8`
- Texte: `text-sm md:text-base lg:text-lg`

## Guidelines d'Accessibilité

### Contraste
- Texte sur fond noir: Minimum 4.5:1
- Texte sur fond orange: Minimum 7:1
- Éléments interactifs: État visible au focus

### Navigation Clavier
- Tous les éléments interactifs doivent être focusables
- Indicateurs de focus visibles
- Ordre logique de tabulation

### ARIA Labels
- Utiliser `aria-label` pour les icônes décoratives
- `aria-expanded` pour les menus déroulants
- `aria-current="page"` pour les liens actifs

## Implémentation

### Installation
```bash
# Tailwind CSS avec configuration personnalisée
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

### Configuration Tailwind
Voir `tailwind.config.js` pour la configuration complète avec les couleurs personnalisées et les extensions.

### Composants React
Tous les composants sont disponibles dans `components/` avec des variantes prédéfinies.