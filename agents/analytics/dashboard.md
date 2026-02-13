# Dashboard Analytics - Tennis Breakdown

## 📊 Vue d'ensemble

**Objectif:** Suivre les métriques clés pour optimiser l'acquisition, l'engagement et la conversion des visiteurs de Tennis Breakdown.

**Périmètre tracking:**
- Site web (React app sur Vercel)
- Pages principales: landing, guide, tarifs, comment ça marche
- Formulaires: capture email guide gratuit, demande analyse
- Checkout: analyse vidéo payante

---

## 🎯 Métriques Principales (Overview)

### Trafic & Acquisition
| Métrique | Objectif (Mois 1) | Définition |
|----------|------------------|------------|
| Sessions totales | 500-1000 | Visites uniques (30min d'inactivité) |
| Nouveaux utilisateurs | 70% des sessions | Première visite (cookie) |
| Trafic organique | 30%+ | SEO + contenu |
| Trafic social | 40%+ | Instagram, TikTok, Facebook |
| Trafic direct | 20%+ | Saisie URL, favoris |

### Engagement
| Métrique | Objectif | Définition |
|----------|----------|------------|
| Temps moyen sur site | >2min | Durée totale / sessions |
| Pages vues/session | >2.5 | Profondeur navigation |
| Taux de rebond | <60% | Sessions 1 page sans interaction |
| Scroll depth >75% | >40% | Scrolling à 75% de la page |

### Conversion
| Métrique | Objectif (M1) | Définition |
|----------|---------------|------------|
| Taux conversion guide | 15-25% | Formulaires remplis / visiteurs |
| Leads qualifiés | 100-250 | Emails capturés (double opt-in) |
| Taux conversion analyse | 2-5% | Achats / visiteurs site |
| CAC cible | <€18 | Coût acquisition client |

---

## 📄 Pages à Tracer (Pages Vues)

### Pages Critiques
1. **/** - Landing page principale
2. **/guide** - Page de capture du guide gratuit
3. **/tarifs** - Page des offres d'analyse
4. **/comment-ca-marche** - Processus expliqué
5. **/a-propos** - Présentation Sami/expertise
6. **/contact** - Formulaire contact

### Pages Secondaires (à ajouter)
- Blog articles (SEO)
- Témoignages (social proof)
- FAQ (réduction objections)

**Événements page-specific:**
- `page_view` (automatique GA4)
- `page_leave` (quand navigate vers autre domaine)
- `scroll_depth_25`, `scroll_depth_50`, `scroll_depth_75`, `scroll_depth_100`
- `time_on_page_10s`, `time_on_page_30s`, `time_on_page_60s`

---

## 🔄 Tunnel de Conversion

### Étape 1: Découverte → Capture Email
```
Visite landing page (tous)
  ↓
Scroll >50% de la page
  ↓
Clic sur CTA "Télécharger le guide"
  ↓
Formulaire affiché
  ↓
Submit (email + nom)
  ↓
Double opt-in envoyé
  ↓
Double opt-in confirmé → Lead qualifié
```

**Métriques:**
- `landing_page_impression` (vue)
- `cta_guide_click` (clic bouton)
- `form_displayed` (formulaire visible)
- `form_submit_attempt` (tentative)
- `form_submit_success` (réussite)
- `email_captured` (événement final)
- `double_optin_sent`
- `double_optin_confirmed`

### Étape 2: Nurture → Intérêt pour analyse payante
```
Email sequence reçu (1-5)
  ↓
Clic lien dans email → landing tarifs
  ↓
Scroll page tarifs >50%
  ↓
Clic "Voir offre" ou "Commander"
  ↓
Page checkout affichée
```

**Métriques:**
- `email_open` (taux ouverture)
- `email_click` (taux clic)
- `tarifs_page_view`
- `tarifs_scroll_50`
- `offer_click`
- `checkout_page_view`

### Étape 3: Achat → Client
```
Checkout page
  ↓
Sélection option analyse
  ↓
Submit formulaire contact/vidéo
  ↓
Paiement initié (Stripe)
  ↓
Paiement réussi
  ↓
Email confirmation envoyé
```

**Métriques:**
- `checkout_option_selected` (quelle analyse choisie)
- `checkout_form_start`
- `checkout_form_complete`
- `payment_initiated`
- `payment_success`
- `order_complete`
- `confirmation_email_sent`

---

## 🎯 Événements Utilisateur (User Events)

### Événements Navigation
```javascript
// Automatiques (via GA4 ou équivalent)
- page_view
- page_leave

// Custom
- scroll_depth_25
- scroll_depth_50
- scroll_depth_75
- scroll_depth_100
- time_on_page_10s
- time_on_page_30s
- time_on_page_60s
```

### Événements Engagement
```javascript
// CTA interactions
- cta_click {
    cta_name: "guide_download" | "voir_tarifs" | "commander",
    page: "/" | "/tarifs"
  }

- cta_visibility {
    cta_name: string,
    in_viewport: boolean,
    time_visible_ms: number
  }
```

### Événements Formulaires
```javascript
// Guide gratuit
- form_guide {
    action: "display" | "submit_attempt" | "submit_success" | "submit_error",
    field_count: number,
    validation_errors: object,
    duration_ms: number
  }

// Contact/checkout
- form_checkout {
    action: "display" | "start" | "complete" | "error",
    fields_completed: object,
    abandoned_at: string (field name),
    duration_ms: number
  }
```

### Événements Commerce
```javascript
// Products
- view_item {
    item_id: "analyse_basic" | "analyse_standard" | "analyse_premium",
    item_name: string,
    price: number,
    currency: "EUR"
  }

- add_to_cart {
    item_id: string,
    quantity: 1,
    value: number
  }

- begin_checkout {
    items: array of products,
    total_value: number
  }

- purchase {
    transaction_id: string,
    value: number,
    currency: "EUR",
    items: array,
    tax: number,
    shipping: number
  }

- refund {
    transaction_id: string,
    value: number,
    reason: string
  }
```

### Événements Content
```javascript
// Guide PDF
- pdf_download {
    guide_name: "5_erreurs_techniques",
    format: "PDF",
    click_location: "landing" | "email_thankyou",
    user_id: (si connecté)
  }

// Blog/articles
- article_view {
    article_id: string,
    title: string,
    category: "technique" | "mental" | "entrainement",
    read_time_minutes: number,
    completion_percent: number
  }
```

### Événements Social
```javascript
- social_share {
    platform: "facebook" | "twitter" | "linkedin" | "whatsapp",
    content_type: "guide" | "article" | "testimonial",
    page: string
  }

- social_click {
    platform: string,
    external: boolean
  }
```

### Événements Vidéo (si vidéos sur site)
```javascript
- video_play {
    video_id: string,
    video_title: string,
    duration_seconds: number,
    autoplay: boolean
  }

- video_progress {
    video_id: string,
    current_time: number,
    percent_watched: number
  }

- video_complete {
    video_id: string,
    total_watch_time: number
  }
```

---

## 📈 KPI (Key Performance Indicators)

### Acquisition KPIs
1. **Sessions totales** - Volume trafic
2. **Nouveaux utilisateurs %** - Croissance audience
3. **Trafic par canal** - ROI par source (organic, social, paid, direct, referral)
4. **Coût acquisition (CAC)** - Total marketing spend / nouveaux clients
5. **Taux rebond par landing** - Qualité page d'entrée
6. **Pages vues/session** - Engagement initial

### Lead Generation KPIs
1. **Taux conversion guide** (formulaires / sessions landing)
2. **Coût acquisition lead** (CAC / taux conversion)
3. **Qualité lead** - % double opt-in confirmé
4. **Taux ouverture emails** (>20% bon)
5. **Taux clic emails** (>2% bon)
6. **Lead to MQL** - % leads → intérêt analyse payante

### Sales KPIs
1. **Taux conversion checkout** (achats / sessions checkout)
2. **Panier moyen** - € par commande (objectif: €20-35)
3. **Taux abandon checkout** - Identifier friction
4. **Temps jusqu'à conversion** - Jours entre capture email et achat
5. **Nombre d'analyses par client** - Rétention (objectif >1.7)
6. **Revenue total** - € générés

### Retention & Loyalty KPIs
1. **Taux de retour clients** - % clients qui rachètent
2. **Referral rate** - % clients qui réfèrent (objectif: 1 référé/5 clients)
3. **Customer lifetime value (LTV)** - Revenue moyen sur N mois
4. **LTV:CAC ratio** - Objectif >3:1
5. **Churn rate** - % clients perdus (désabonnements, pas de rachat)

### Content & SEO KPIs
1. **Articles publiés** - Volume production
2. **Trafic article** - Visites par article
3. **Position moyenne mots-clés** - Top 10 cible
4. **Backlinks acquis** - Autorité domaine
5. **Temps sur page article** - Qualité contenu (>3min = bon)
6. **Scroll depth article** - Engagement (>70% = bon)

### Social Media KPIs
1. **Followers par plateforme** - Croissance audience
   - Instagram: objectif 1000-5000 (M1)
   - TikTok: objectif 2000-10000 (M1)
   - Facebook: objectif 500-2000 (M1)
2. **Engagement rate** - (Likes+Comments+Shares) / followers / post (objectif >2%)
3. **Trafic social vers site** - Suivi dans analytics
4. **Social conversions** - Achats provenant réseaux sociaux
5. **Viral coefficient** - Partages organiques
6. **Cost per lead social** - CAC provenant réseaux

### Email Marketing KPIs
1. **Liste taille** - Nombre subscribers (objectif M1: 250)
2. **Open rate** - Taux ouverture emails (>20%)
3. **Click rate** - Taux clic liens (>2%)
4. **Unsubscribe rate** - Taux désabonnement (<1%)
5. **Email → conversion** - % achats provenance emails
6. **Sequence completion** - % finissent séquence 5 jours

---

## 🛠️ Stack Technique Recommandé

### Analytics & Tracking
- **Google Analytics 4** (gratuit, complet) - Principal
- **Google Search Console** (gratuit) - SEO
- **Facebook Pixel** (gratuit) - Social ads attribution
- **Hotjar** (freemium) - Heatmaps, recordings
- **Plausible Analytics** (alternative privacy-friendly, €9/mois)

### Tag Management
- **Google Tag Manager** (gratuit) - Centralise tous tags
  - Avantage: pas besoin de coder chaque événement
  - Déploiement facile via Vercel

### Implementation
```javascript
// Exemple avec GA4 + GTM
// Dans index.html ou composant App
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXX');
</script>
```

### Événements custom via GTM
1. Créer triggers (click sur boutons, form submissions, scroll)
2. Créer variables pour capturer données (page, prix, etc.)
3. Envoyer à GA4 comme custom events

### Base de données & CRM
- **Supabase** (déjà utilisé) - Stocker leads, commandes
  - Table `leads`: email, nom, source, date_capture, optin_status
  - Table `customers`: id, lead_id, first_purchase_date, total_spent
  - Table `orders`: id, customer_id, items, amount, status
  - Table `analytics_events` (optionnel pour analytics first-party)

### Dashboard & Reporting
- **Google Looker Studio** (gratuit) - Visualisation dashboard
  - Connecter àGA4
  - Créer rapports automatisés
  - Sharer avec équipe
- **Alternative**: Métabase (open-source, auto-hébergé)

---

## 📊 Dashboard Structure (Looker Studio)

### Page 1: Executive Summary
- Sessions (vs mois précédent)
- Nouveaux leads (vs objectif)
- Revenue semaine
- CAC moyen
- LTV estimé

### Page 2: Acquisition
- Graphique lignes: Sessions par canal (last 30d)
- Tableau: CAC par canal (paid, organic, social, referral)
- Carte: Trafic par pays/région (France focus)
- Top 10 pages d'entrée

### Page 3: Conversion Funnel
- Funnel visuel: Sessions → Guide submit → Checkout view → Purchase
- Taux conversion par étape
- Drop-offs identifiés
- Temps moyen entre étapes

### Page 4: Content Performance
- Top 10 articles (trafic, temps sur page)
- Scroll depth par page (heatmap-style)
- PDF downloads
- Email CTR par campagne

### Page 5: E-commerce
- Revenue par jour/semaine
- Panier moyen
- Produits les plus vendus
- Taux refund/annulation

### Page 6: Social Media
- Cross-post: Instagram, TikTok, Facebook stats
- Trafic social vers site
- Conversions attribuées social
- Coût par lead social

---

## 🎯 Priorités d'Implementation

### Semaine 1: Foundation (MUST HAVE)
1. ✅ **GA4 + Google Tag Manager** setup
2. ✅ **Page view tracking** automatique
3. ✅ **Form tracking** - guide capture (email submit)
4. ✅ **Checkout tracking** - purchase complete
5. ✅ **Basic UTM parameters** pour campagnes
6. ✅ **Dashboard Looker Studio** avec 5 rapports de base

### Semaine 2: Engagement
1. **Scroll depth tracking** (25/50/75/100%)
2. **Time on page** thresholds
3. **CTA click tracking** (tous boutons principaux)
4. **Video tracking** (si vidéos sur site)
5. **PDF download tracking** (guide)
6. **Error tracking** (form validation errors)

### Semaine 3: Advanced
1. **Email integration** (open/click rates from SendGrid/Mailchimp)
2. **A/B test tracking** (landing page variations)
3. **Hotjar recordings** (user behavior)
4. **Custom dimensions** (user type: new/returning, membership)
5. **Referral tracking** (codes référants)
6. **SEO monitoring** (Search Console → GA4)

### Semaine 4+: Optimization
1. **Remarketing audiences** (cart abandoners, email opens)
2. **Conversion attribution** (first/last click, data-driven)
3. **Predictive metrics** (purchase probability)
4. **Alerting** (drops in conversion >15%)
5. **Export automations** (CSV daily/weekly reports)

---

## 📱 Mobile vs Desktop

### Événements à Segmenter
- Device category (mobile, desktop, tablet)
- Screen resolution
- Browser + version
- Connection type (4G, wifi)

### Métriques à Comparer
| Métrique | Mobile | Desktop |
|----------|--------|---------|
| Sessions % | 60-70% | 30-40% |
| Taux conversion | -10% vs desktop | Baseline |
| Temps sur site | -20% vs desktop | Baseline |
| Scroll depth | -15% vs desktop | Baseline |
| CAC | +20% vs desktop | Baseline |

**Optimisations mobility-first** si taux conversion mobile <50% desktop.

---

## 🔍 SEO Tracking Essentials

### Google Search Console Connectors
- **Queries**: Mots-clés qui amènent trafic
- **Pages**: Landing pages organiques
- **Countries**: Trafic par région
- **Devices**: Mobile vs desktop SEO
- **CTR organique** (impressions → clics)
- **Position moyenne** par mot-clé

### Mot-clés Cibles à Suivre
1. "analyse vidéo tennis" (position TOP 10 objectif)
2. "coaching tennis en ligne"
3. "améliorer technique tennis"
4. "service tennis correction"
5. "revers tennis erreurs"
6. "guide analyse tennis gratuit"

**Outils:** Ahrefs/SEMrush (payants) ou Ubersuggest (gratuit limité) pour tracking positions.

---

## 🏷️ UTM Parameters (Campaign Tracking)

### Structure Standard
```
?utm_source=instagram&utm_medium=social&utm_campaign=launch_guide
?utm_source=google&utm_medium=cpc&utm_campaign=brand_awareness
?utm_source=newsletter&utm_medium=email&utm_campaign=week3_nurture
```

### Sources à Tracer
- **Source:** facebook, instagram, tiktok, google, newsletter, direct, referral
- **Medium:** social, cpc, email, organic, referral
- **Campaign:** launch_guide, acquisition_q1, retention_email1, etc.

### Automatisation
- Créer URL builder avec Google Campaign URL Builder
- Stocker paramètres UTM dans spreadsheet template
- Intégrer dans plan de campagnes marketing

---

## 📈 Benchmarks & Objectifs Réalistes

### Baselines (Premiers mois)
- Trafic: 50-200 sessions/semaine (départ)
- Taux conversion guide: 10-20% (avec bon landing)
- Taux conversion achat: 1-3% (funnel optimisé)
- CAC: €15-25 (début, optimize vers €10-15)
- LTV: €50-70 (clients 1-3 analyses)

### Targets Mois 3
- 500-1000 sessions/semaine
- 250-500 leads
- 25-50 clients payants
- CAC €12-18
- LTV €60-80

### Targets Mois 6
- 1500-3000 sessions/semaine
- 750-1500 leads
- 75-150 clients payants
- CAC €8-12
- LTV €80-100 (références + upsell)

---

## 🔐 Privacy & RGPD Compliance

### Consentement
- **Cookie banner** obligatoire (RGPD)
  - Options: Necessary, Analytics (opt-in), Marketing (opt-in)
  - Enregistrer consentement state dans localStorage
  - Ne pas tracker analytics sans consentement explicite

### Data Minimization
- Anonymiser IP (GA4 makes by default)
- Ne pas collecter données personnelles sensibles
- Stocker uniquement emails/names avec consentement explicite
- Supprimer données après 3 ans si inactivité (ou selon politique)

### Respect Droit à l'Oubli
- Mécanisme pour supprimer lead/customer sur demande
- Supprimer de:
  - Supabase (base de données)
  - GA4 (via user deletion API)
  - SendGrid/Mailchimp (suppression email)
  - Tous backups (procédure documentée)

---

## 🐛 Debug & QA

### Checklist Implementation
- [ ] GA4 property created
- [ ] GTM container installé
- [ ] Page views track correctly (vérifier temps réel GA4)
- [ ] All CTA buttons fire events (test en dev)
- [ ] Form submissions track (success + error)
- [ ] Purchase event includes correct values (price, items)
- [ ] UTM parameters preserved throughout funnel
- [ ] Cross-domain tracking (si multiples domaines)
- [ ] Consent mode intégré (si RGPD)
- [ ] Mobile tracking works

### Test Scenarios
1. **Capture email guide** - Submit → verify event in GA4 real-time
2. **Complete checkout** - Purchase → verify transaction in GA4+ecommerce
3. **Scroll tracking** - Scroll page → verify events fire at 25/50/75/100%
4. **UTM preservation** - Entrer avec UTM → clic CTA → vérifierUTM persiste
5. **Device testing** - Mobile, desktop, tablet

### Debug Tools
- **GA4 DebugView** (dans admin GA4)
- **GTM Preview Mode**
- **Browser console** (console.log pour vérifier dataLayer)
- **Chrome extension: GA Debugger**
- **Google Tag Assistant**

---

## 📋 Weekly/Monthly Reporting Template

### Weekly Report (Lundi)
```
Période: [date début] - [date fin]

1. Trafic
- Sessions: X (+Y% vs semaine précédente)
- Nouveaux utilisateurs: X%
- Top 3 sources: (1) X%, (2) Y%, (3) Z%

2. Leads
- Nouveaux leads: X (vs objectif Y)
- Taux conversion guide: X% (vs objectif Y%)
- CAC semaine: €X

3. Conversions
- Commandes: X (vs objectif Y)
- Revenue: €X (vs objectif €Y)
- Taux conversion checkout: X%

4. Contenu
- Articles publiés: X (cible 2/semaine)
- Trafic blog: X sessions
- Top article: "Title" (X sessions)

5. Social
- Nouveaux followers: X (Instagram, TikTok, FB)
- Engagement rate: X%
- Trafic social vers site: X sessions

6. Actions & Insights
- Ce qui a bien fonctionné:
- Problèmes identifiés:
- Actions next week:
```

### Monthly Report (1er du mois)
```
Mois: [Mois Année]

Executive Summary
- Trafic total: X sessions (+Y% vs mois précédent)
- Leads qualifiés: X (CAC moyen: €X)
- Clients payants: X (Revenue: €X)
- Objectifs atteints: [ ] / [ ]

Deep Dive
1. Acquisition Analysis
   - CAC par canal (tableau)
   - Meilleur canal ROI: [canal]
   - Pire canal: [canal] → ajuster

2. Funnel Conversion
   - Taux conversion par étape (funnel chart)
   - Principal drop-off: [étape]
   - Hypothèse optimisation: [action]

3. Content Performance
   - Top 5 articles (trafic + conversions)
   - Scroll depth benchmarks
   - Articles à optimiser (rebond >70%)

4. Customer Insights
   - LTV: €X
   - Repeat customers: X%
   - Referral rate: X%
   - Churn: X%

5. Channel Deep Dive
   - SEO: positions moyennes, trafic organique
   - Social: followers, engagement, conversions
   - Paid ads: ROAS, CPA

6. Competitive Intelligence
   - Moves concurrents détectés
   - Opportunities identifiées

Financials
- Marketing spend: €X
- Revenue: €X
- Profit: €X
- ROI: X%

Next Month Plan
- Priorité 1: [action]
- Priorité 2: [action]
- Priorité 3: [action]
```

---

## 🎯 Actions Recommandées (Post-Implementation)

### Immediate (Jour 1-3)
1. Deploy GA4 + GTM
2. Verify data collection (real-time)
3. Setup basic dashboard in Looker Studio
4. Share access avec équipe

### Week 1
1. Implement form tracking (all forms)
2. Implement checkout/purchase events
3. Configure UTM tracking standards
4. Document tracking plan (ce fichier)
5. Train team on interpreting dashboard

### Week 2
1. Implement scroll/time tracking
2. Setup Hotjar (heatmaps, recordings)
3. Import Search Console data
4. Create weekly report template

### Week 3
1. Connect email marketing opens/clicks
2. Create custom audiences (cart abandoners)
3. Setup conversion attribution models
4. Audit: junction entre tracking et Supabase

### Week 4+
1. Optimiser funnel basé sur données
2. A/B test landing pages (guided by insights)
3. Refine CAC targets par canal
4. Scale canaux performants, couper canaux non-ROI

---

## 📞 Support & Questions

**Problèmes communs:**
- Events not firing → Check GTM Preview, console errors
- Purchase values missing → Verify dataLayer push format
- Duplicate users → Check user_id consistency
- UTM lost → Ensure cookie persistence throughout session

**Documentation:**
- GA4: https://support.google.com/analytics/
- GTM: https://support.google.com/tagmanager/
- Hotjar: https://help.hotjar.com/
- Vercel Analytics: (si utilisé) https://vercel.com/docs/analytics

---

*Dernière mise à jour: 2026-02-13*
*Par: Analytics Subagent (IA assistant)*
*Pour: Tennis Breakdown*
