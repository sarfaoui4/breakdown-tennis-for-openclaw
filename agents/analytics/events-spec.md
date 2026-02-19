# Spécification Événements Tracking - Tennis Breakdown

## 📋 Vue d'ensemble

**Objectif:** Document de référence pour implémenter le tracking analytics sur le site Tennis Breakdown (React app sur Vercel).

**Stack technique:**
- **Analytics:** Google Analytics 4 (GA4)
- **Tag Management:** Google Tag Manager (GTM)
- **Database:** Supabase (pour storage leads/customers)
- **Email:** SendGrid ou Mailchimp (pour tracking email)
- **Payments:** Stripe (pour tracking achats)
- **Hosting:** Vercel (pour analytics intégré optionnel)

**Priorité events:**
- 🔴 CRITIQUE: Form submits, purchases, lead capture
- 🟡 IMPORTANT: CTA clicks, page views, scroll, time on page
- 🟢 NICE-TO-HAVE: Video tracking, custom user properties, advanced funnels

---

## 🗺️ Architecture Tracking

### Data Flow
```
Site React (client-side)
  ↓
Google Tag Manager (container)
  ↓
GTM Tags:
  - GA4 (analytics principal)
  - Facebook Pixel (ads attribution)
  - Custom HTML tags (autres services)
  ↓
Data destinations:
  - GA4 (reporting)
  - Google Ads (remarketing)
  - Facebook Ads (conversions)
  - Supabase (first-party backup)
```

### Implementation Method
1. **GTM** injecté via script dans `public/index.html` ou `pages/_document.js` (Next.js)
2. **dataLayer** pushes pour événements custom
3. **GTM triggers** (click, form submit, scroll) via built-in variables
4. **GTM tags** envoient à GA4 avec `gtag()` ou Measurement Protocol

---

## 📊 Événements Spécifiés

### Page Views (Automatique GA4)
**Configuration:** Activé par défaut dans GA4 ou GTM

```javascript
// Auto: gtag('config', 'G-XXXXXXX', { page_path: '/path' });
// Ou via GTM: Page View tag, trigger "All Pages"
```

**Paramètres obligatoires:**
- `page_location`: URL complète (auto)
- `page_path`: chemin (ex: "/guide")
- `page_title`: titre page (auto ou custom)
- `screen_resolution`: (auto)
- `user_agent`: (auto)

---

## 🔥 Événements Critiques (CRITICAL)

### 1. Guide Download Capture (Form Submit)
**Objectif:** Tracer chaque capture email du guide gratuit

**Trigger:** Soumission formulaire capture (id: `form-guide`)

**Event name:** `generate_lead` (GA4 standard) ou `guide_submit`

```javascript
// Exemple: après soumission réussie
gtag('event', 'generate_lead', {
  'value': 0, // pas de valeur monétaire directe
  'currency': 'EUR',
  'form_id': 'guide_capture',
  'form_name': 'Télécharger le guide gratuit',
  'page_location': window.location.href,
  'page_path': window.location.pathname,
  'email_domain': email.split('@')[1], // optionnel
  'utm_source': getParam('utm_source'), // si présent
  'utm_medium': getParam('utm_medium'),
  'utm_campaign': getParam('utm_campaign')
});
```

**GTM Implementation:**
- Trigger: Form Submission ( formulaires avec ID `form-guide`)
- Variables: Form ID, Form Name, Page URL
- Tag: GA4 Event with parameters above

**Événement alternatif si GA4 standard:**
- `event`: `form_submit`
- `form_type`: `guide_capture`

---

### 2. Purchase / Analyse Completed
**Objectif:** Tracer chaque achat d'analyse vidéo (conversion revenue)

**Trigger:** Paiement réussi après checkout (webhook Stripe ou callback frontend)

**Event name:** `purchase` (GA4 e-commerce standard)

```javascript
// DataLayer push après confirmation paiement
window.dataLayer.push({
  'event': 'purchase',
  'ecommerce': {
    'transaction_id': 'T_123456', // order.id
    'value': 25.00, // order.total
    'currency': 'EUR',
    'tax': 0, // TVA si applicable
    'shipping': 0, // shipping cost si applicable
    'coupon': 'GUIDE15', // si code promo utilisé
    'items': [{
      'item_id': 'analyse_standard', // product variant
      'item_name': 'Analyse Standard',
      'item_category': 'analyse_video',
      'price': 25.00,
      'quantity': 1
    }]
  },
  'user_properties': {
    'lead_source': 'email' // ou 'social', 'organic'
  }
});
```

**GTM Implementation:**
- Trigger: Custom Event `purchase`
- Tag: GA4 E-commerce Purchase tag
- Paramètres: mappés depuis dataLayer

---

### 3. Checkout Start / Begin Checkout
**Objectif:** Tracer début du processus d'achat

**Event name:** `begin_checkout`

```javascript
// Quand utilisateur clique "Commander" ou arrive sur page checkout
window.dataLayer.push({
  'event': 'begin_checkout',
  'ecommerce': {
    'items': [{
      'item_id': 'analyse_standard',
      'item_name': 'Analyse Standard',
      'price': 25.00,
      'quantity': 1
    }]
  }
});
```

---

### 4. Add to Cart / Select Offer
**Objectif:** Tracer sélection d'une offre (avant checkout)

**Event name:** `add_to_cart`

```javascript
// Quand utilisateur clique sur "Voir offre" ou choisit option
window.dataLayer.push({
  'event': 'add_to_cart',
  'ecommerce': {
    'items': [{
      'item_id': 'analyse_standard',
      'item_name': 'Analyse Standard',
      'price': 25.00,
      'quantity': 1
    }]
  }
});
```

---

## 🟡 Événements Importants (IMPORTANT)

### 5. CTA Button Clicks
**Objectif:** Comprendre quels CTAs fonctionnent

**Event name:** `cta_click`

```javascript
// Sur tout bouton CTA majeur (data-cta="...")
document.querySelectorAll('[data-cta]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const ctaName = btn.getAttribute('data-cta');
    const page = window.location.pathname;

    window.dataLayer.push({
      'event': 'cta_click',
      'cta_name': ctaName,
      'page': page,
      'cta_text': btn.innerText.trim().substring(0, 50),
      'cta_location': btn.getAttribute('data-cta-location') || 'unknown',
      'form_id': btn.closest('form')?.id || null
    });
  });
});
```

**CTA names disponibles:**
- `guide_download` (bouton principal landing page)
- `see_pricing` (bouton "Voir les tarifs")
- `start_analysis` (bouton "Commencer analyse")
- `contact_submit` (formulaire contact)
- `newsletter_subscribe` (footer subscription)
- `social_share_{platform}` (partage réseaux)

---

### 6. Scroll Depth Tracking
**Objectif:** Mesurer engagement lecture (75% scroll = bon signe)

**Event name:** `scroll_depth`

```javascript
// Détection scroll depths (25, 50, 75, 90, 100)
let maxScroll = 0;
window.addEventListener('scroll', () => {
  const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  const depths = [25, 50, 75, 90, 100];

  depths.forEach(depth => {
    if (scrollPercent >= depth && maxScroll < depth) {
      maxScroll = depth;
      window.dataLayer.push({
        'event': 'scroll_depth',
        'percent_scrolled': depth,
        'page': window.location.pathname,
        'vertical_percent': Math.round(scrollPercent)
      });
    }
  });
});
```

---

### 7. Time on Page (Engagement)
**Objectif:** Identifier contenu engageant vs rebond

**Event name:** `time_on_page`

```javascript
// Envoyer événement à intervalles (10s, 30s, 60s)
const timeThresholds = [10, 30, 60, 120]; // seconds
let timeSpent = 0;
const timer = setInterval(() => {
  // Vérifier si page visible (Page Visibility API)
  if (document.visibilityState === 'visible') {
    timeSpent++;
    if (timeThresholds.includes(timeSpent)) {
      window.dataLayer.push({
        'event': 'time_on_page',
        'seconds': timeSpent,
        'page': window.location.pathname,
        'engaged': timeSpent >= 30 // boolean engagement marker
      });
    }
  }
}, 1000);

// Cleanup on page hide
document.addEventListener('visibilitychange', () => {
  if (document.hidden) clearInterval(timer);
});
```

---

### 8. Form Interactions (Non-lead)
**Objectif:** Comprendre abandonment formulaires non-critiques

**Event name:** `form_interaction`

```javascript
// Pour tout formulaire non-capture-lead (contact, newsletter footer)
document.querySelectorAll('form:not(#form-guide)').forEach(form => {
  // Track when form is displayed
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      window.dataLayer.push({
        'event': 'form_display',
        'form_id': form.id || 'unknown',
        'form_purpose': form.getAttribute('data-form-purpose') || 'contact'
      });
    }
  }, { threshold: 0.5 });
  observer.observe(form);

  // Track field focus/blur
  form.querySelectorAll('input, textarea, select').forEach(field => {
    field.addEventListener('focus', () => {
      window.dataLayer.push({
        'event': 'form_field_focus',
        'form_id': form.id,
        'field_name': field.name,
        'field_type': field.type
      });
    });
  });
});
```

---

## 🟢 Événements Optionnels (NICE-TO-HAVE)

### 9. PDF Download Tracking
**Objectif:** Voir qui télécharge le guide (post-capture)

```javascript
// Si téléchargement PDF depuis page merci ou email
const trackPDFDownload = (pdfName) => {
  window.dataLayer.push({
    'event': 'file_download',
    'file_name': pdfName,
    'file_type': 'pdf',
    'file_size': 'unknown', // si on connaît la taille
    'page': window.location.pathname,
    'download_method': 'direct_link' | 'email_click'
  });
};

// Exemple: clic sur lien PDF
document.querySelectorAll('a[href$=".pdf"]').forEach(link => {
  link.addEventListener('click', (e) => {
    trackPDFDownload(link.href.split('/').pop());
  });
});
```

---

### 10. Video Tracking (si vidéos sur site)
**Objectif:** Engagement vidéo (heatmaps, completion)

```javascript
// YouTube/Vimeo embed tracking via API
// Ou vidéos locales (<video> tags)
const videos = document.querySelectorAll('video');
videos.forEach(video => {
  video.addEventListener('play', () => {
    window.dataLayer.push({
      'event': 'video_play',
      'video_title': video.getAttribute('data-title') || 'unknown',
      'video_duration': video.duration
    });
  });

  video.addEventListener('timeupdate', () => {
    const percent = (video.currentTime / video.duration) * 100;
    if (percent >= 25 && !video.dataset.tracked25) {
      video.dataset.tracked25 = true;
      window.dataLayer.push({ event: 'video_progress', percent: 25 });
    }
    if (percent >= 50 && !video.dataset.tracked50) {
      video.dataset.tracked50 = true;
      window.dataLayer.push({ event: 'video_progress', percent: 50 });
    }
    if (percent >= 90 && !video.dataset.tracked90) {
      video.dataset.tracked90 = true;
      window.dataLayer.push({ event: 'video_progress', percent: 90 });
    }
  });

  video.addEventListener('ended', () => {
    window.dataLayer.push({ event: 'video_complete' });
  });
});
```

---

### 11. Outbound Link Clicks
**Objectif:** Track clics vers réseaux sociaux, sites externes

```javascript
document.querySelectorAll('a[href^="http"]:not([href*="tennis-breakdown"])').forEach(link => {
  link.addEventListener('click', (e) => {
    const url = new URL(link.href);
    window.dataLayer.push({
      'event': 'outbound_click',
      'link_url': link.href,
      'link_domain': url.hostname,
      'link_text': link.innerText.trim().substring(0, 50)
    });
  });
});
```

---

### 12. Newsletter Footer Subscription
**Objectif:** Tracers inscriptions newsletter footer (non-guide)

```javascript
const footerForm = document.querySelector('#newsletter-footer');
if (footerForm) {
  footerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = footerForm.querySelector('input[type="email"]').value;

    window.dataLayer.push({
      'event': 'newsletter_signup',
      'email_domain': email.split('@')[1],
      'page': window.location.pathname
    });

    // Submit form normally (fetch API)
    submitNewsletter(email);
  });
}
```

---

## 📱 User Properties & Audiences

### User Properties (GA4)
Définir propriétés utilisateur pour segmentation:

```javascript
// Après identification (lead capturé ou login)
gtag('set', 'user_properties', {
  'user_type': 'lead' | 'customer' | 'returning',
  'lead_source': 'organic' | 'social' | 'paid' | 'direct',
  'utm_campaign': 'launch_guide', // si capturé via campagne
  'first_touch_channel': 'instagram', // premier canal d'acquisition
  'customer_tier': 'basic' | 'standard' | 'premium', // si client
  'days_since_first_visit': 0, // calculé dynamiquement
  'has_purchased': true // après achat
});
```

### Custom Dimensions (GA4)
Créer dimensions custom dans GA4 admin:
1. lead_source (string)
2. page_type (landing, guide, pricing, about, blog, checkout)
3. content_category (if blog: technique, mental, training)
4. device_type (mobile, desktop, tablet)
5. user_status (new, returning, lead, customer)

---

## 🎯 Conversion Goals Setup (GA4)

### Mark as Conversions
Ces événements doivent être marqués comme "Conversions" dans GA4 admin:

1. ✅ `generate_lead` (ou `guide_submit`) - capture email guide
2. ✅ `purchase` - achat analyse vidéo (déjà conversion par défaut)
3. ✅ `begin_checkout` - début checkout (optionnel si besoin)
4. ✅ `file_download` - téléchargement PDF (si guidé via lien direct)

**Setup:**
- Admin GA4 → Events → Find event → Toggle "Mark as conversion"

---

## 🔗 Integration with Supabase (First-Party Backup)

**Pourquoi:** Stocker leads/customers indépendamment de GA4 (data ownership, backup)

```javascript
// Après capture email (form submit)
const submitToSupabase = async (email, name, utmData) => {
  const { data, error } = await supabase
    .from('leads')
    .insert({
      email: email,
      name: name,
      source: utmData.utm_source || 'direct',
      medium: utmData.utm_medium || 'none',
      campaign: utmData.utm_campaign || 'organic',
      page_path: window.location.pathname,
      captured_at: new Date().toISOString(),
      optin_status: 'pending', // until double opt-in confirmed
      user_agent: navigator.userAgent,
      ip_address: null // Récupérer via Supabase function si besoin (privacy)
    });

  if (error) console.error('Supabase insert error:', error);
  return data;
};
```

**Supabase Tables Required:**
```sql
-- leads
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  source VARCHAR(100),
  medium VARCHAR(100),
  campaign VARCHAR(255),
  page_path VARCHAR(500),
  captured_at TIMESTAMPTZ DEFAULT NOW(),
  optin_status VARCHAR(50) DEFAULT 'pending',
  double_optin_at TIMESTAMPTZ,
  user_agent TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- customers (achats)
CREATE TABLE customers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID REFERENCES leads(id),
  email VARCHAR(255) UNIQUE NOT NULL,
  first_purchase_at TIMESTAMPTZ,
  total_spent DECIMAL(10,2) DEFAULT 0,
  orders_count INTEGER DEFAULT 0,
  last_purchase_at TIMESTAMPTZ,
  status VARCHAR(50) DEFAULT 'active',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- orders
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id UUID REFERENCES customers(id),
  transaction_id VARCHAR(255) UNIQUE NOT NULL,
  items JSONB, -- {item_id, item_name, price, quantity}
  subtotal DECIMAL(10,2),
  tax DECIMAL(10,2) DEFAULT 0,
  shipping DECIMAL(10,2) DEFAULT 0,
  total DECIMAL(10,2),
  currency VARCHAR(3) DEFAULT 'EUR',
  status VARCHAR(50),
  stripe_payment_intent_id VARCHAR(255),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- analytics_events (backup first-party)
CREATE TABLE analytics_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_name VARCHAR(255) NOT NULL,
  user_anonymous_id VARCHAR(255), -- GA4 client_id
  user_id VARCHAR(255), -- après identification
  event_params JSONB,
  page_location VARCHAR(1000),
  page_path VARCHAR(500),
  device_category VARCHAR(50),
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

---

## 🔄 Double Opt-In Workflow (GDPR)

**Étapes:**
1. User submit form → data capturée dans Supabase (`optin_status: 'pending'`)
2. Envoyer email avec lien de confirmation unique (track `double_optin_sent`)
3. User clique lien → callback met à jour `optin_status: 'confirmed'` (track `double_optin_confirmed`)
4. Uniquement après confirmation, ajouter à liste SendGrid/Mailchimp

**Events à tracer:**
- `double_optin_sent` { email_domain, form_type }
- `double_optin_clicked` { link_id, user_agent }
- `double_optin_confirmed` { user_id (si déjà), lead_id }

---

## 📊 Email Marketing Integration

### SendGrid/Mailchimp Events to Track

**Via Webhooks:**
```javascript
// SendGrid Event Webhook vers endpoint
// Événements: processed, delivered, open, click, bounce, spamreport, unsubscribe

app.post('/webhooks/sendgrid', (req, res) => {
  const events = req.body;
  events.forEach(event => {
    // Push to GTM DataLayer via Measurement Protocol? Ou stocker Supabase
    // Ou log GA4 directement: gtag('event', 'email_event', {...})
  });
  res.status(200).end();
});
```

**Événements Email (GA4 custom):**
- `email_sent` { campaign_name, email_domain }
- `email_delivered` { same }
- `email_opened` { same, open_time_after_sent_hours }
- `email_clicked` { same, link_url }
- `email_bounced` { reason }
- `email_unsubscribed` { reason }

---

## 🛡️ Privacy & Consent (RGPD)

### Consent Management
- **Cookie banner** avec options:
  - [x] Necessary (always on)
  - [ ] Analytics (opt-in)
  - [ ] Marketing (opt-in)

```javascript
// GTM Consent Mode
window.dataLayer.push({
  'event': 'gtm.js',
  'gtm.start': new Date().getTime(),
  'gtm.uniqueEventId': 0,
  'gtm.consent': 'default' // ou 'granted' si opt-in
});

// Update consent si user change
function updateConsent(analyticsConsent, marketingConsent) {
  window.dataLayer.push({
    'event': 'consent_update',
    'analytics_consent': analyticsConsent, // 'granted' | 'denied'
    'marketing_consent': marketingConsent // 'granted' | 'denied'
  });
}
```

### Anonymisation
GA4 settings:
- `anonymize_ip`: true (par défaut dans GA4)
- `allow_ad_personalization_signals`: false (si pas de ads)
- `allow_google_signals`: false (si pas besoin)

---

## 🧪 Testing & QA Checklist

### Before Launch
- [ ] GTM container published
- [ ] GA4 property created, measurement ID correct
- [ ] All CRITICAL events fire (test locally with GTM Preview)
- [ ] Purchase event includes correct values (test with Stripe test mode)
- [ ] UTM parameters preserved throughout funnel
- [ ] Form tracking works (test submit, verify in GA4 DebugView)
- [ ] Scroll depth triggers at correct percentages
- [ ] Time on page events fire at 10s, 30s, 60s
- [ ] Consent mode respects user choices
- [ ] Mobile tracking works (test on actual device)

### After Launch (Daily for Week 1)
- [ ] GA4 real-time shows active users
- [ ] Events arriving in GA4 (DebugView → Realtime)
- [ ] No 404 errors in GTM Preview (tags firing correctly)
- [ ] No duplicate events
- [ ] Purchase revenue matches Stripe dashboard (reconciliation)
- [ ] Form submit events >0 per day
- [ ] UTM campaign data populating in GA4 Acquisition reports

---

## 📈 Reporting Frequency

### Daily (Team Standup)
- Sessions (real-time vs target)
- Form submits (yesterday)
- Purchases (yesterday)
- Any anomalies (spikes/drops >20%)

### Weekly (Analytics Report - see dashboard.md)
- Full funnel metrics
- Channel performance
- Top pages
- Email marketing stats
- Social media traffic
- Actions & insights

### Monthly (Deep Dive)
- Cohort analysis (LTV)
- Attribution modeling
- SEO positions
- Competitive analysis
- Forecasting
- Budget reallocation decisions

---

## 🐛 Troubleshooting Common Issues

### Events not firing
- Check GTM Preview mode: tag trigger conditions?
- Console errors: `dataLayer.push` typo?
- Network tab: requests to `www.google-analytics.com/g/collect`?
- Ad blockers: test in incognito with extensions disabled

### Duplicate events
- Check if both GA4 config + GTM tag adding
- Ensure `event` parameter unique per push
- Use `gtag('config', ...)` once only

### Purchase value incorrect
- Verify `ecommerce.value` is number, not string
- Check currency matches GA4 property
- Ensure all items included (multiple products)

### UTM lost after navigation
- Use sessionStorage to persist UTM across pages
- Or implement cookie persistence:
```javascript
function persistUTM() {
  const params = new URLSearchParams(window.location.search);
  ['utm_source','utm_medium','utm_campaign','utm_term','utm_content'].forEach(key => {
    const value = params.get(key);
    if (value) {
      sessionStorage.setItem(key, value);
    }
  });
}
```

---

## 🎯 Attribution Models

### Default (Last Non-Direct Click)
- Traitera "direct" comme priorité inférieure à tout autre canal
- Si user arrive via direct après avoir cliqué sur social → social crédité

### Data-Driven Attribution (Google)
- Requiert minimum 600 conversions/mois (orders) pour activer
- Répartit crédit entre tous touchpoints
- Préférable si volume suffisant

**Changement d'attribution dans GA4:**
Admin → Attribution → Attribution models → Select model

---

## 🔄 Data Refresh & Latency

- **GA4 standard reports:** 24-48h latency
- **DebugView (Realtime):** ~10s latency
- **BigQuery export (if enabled):** Streaming (minutes)
- **Looker Studio:** 12h cache default (configurable à 1-2h)

**Recommendation:** Use real-time for QA, daily for monitoring, weekly/monthly for strategic decisions.

---

## 📞 Vendors & Costs

| Outil | Usage | Coût/mois |
|-------|-------|-----------|
| Google Analytics 4 | Analytics principal | Gratuit |
| Google Tag Manager | Tag management | Gratuit |
| Google Looker Studio | Dashboarding | Gratuit |
| Google Search Console | SEO tracking | Gratuit |
| Supabase | Database (leads, orders) | Free tier OK, puis $25+ |
| Hotjar | Heatmaps, recordings | Free 2000 scans/mois, puis €39+ |
| SendGrid/Mailchimp | Email marketing | Free tier OK, puis $15-30 |
| Ahrefs/SEMrush | SEO keyword tracking | €99-199+ (optionnel) |

**Total initial:** €0-50/mois
**Total scale (1000+ visites/mois):** €100-200/mois

---

## 🚀 Implementation Timeline (4 weeks)

### Week 1: Foundation
- [ ] GA4 property created + GTM container
- [ ] GTM script added to site
- [ ] Page view tracking working
- [ ] Base dashboard in Looker Studio
- [ ] UTM parameter standards documented

### Week 2: Core Events
- [ ] Guide form submit tracking
- [ ] Purchase tracking (Stripe integration)
- [ ] Checkout begin tracking
- [ ] CTA click tracking (all major buttons)
- [ ] Test all events in GTM Preview + GA4 DebugView

### Week 3: Advanced
- [ ] Scroll depth tracking
- [ ] Time on page tracking
- [ ] Video tracking (if applicable)
- [ ] Outbound link tracking
- [ ] Custom user properties (after lead capture)

### Week 4: Integration & Optimization
- [ ] Supabase backup integration
- [ ] Email marketing webhooks
- [ ] Consent management (RGPD)
- [ ] Hotjar installation
- [ ] Search Console integration
- [ ] Documentation & training

---

## 📚 Documentation & Resources

### Official Docs
- [GA4 Events](https://support.google.com/analytics/answer/9267735)
- [GA4 Ecommerce](https://support.google.com/analytics/answer/10096180)
- [GTM Triggers](https://support.google.com/tagmanager/answer/7679319)
- [GTM Variables](https://support.google.com/tagmanager/answer/6107160)

### Implementation Guides
- [GTM + GA4 Setup for Beginners](https://www.simoahava.com/gtm-tips/)
- [Ecommerce Tracking with Stripe](https://www.analyticsmania.com/post/stripe-google-analytics-4/)
- [Scroll Depth Tracking in GTM](https://www.analyticsmania.com/post/scroll-depth-tracking-google-tag-manager/)

### Testing Tools
- [GA4 DebugView](https://support.google.com/analytics/answer/7201382)
- [GTM Preview](https://support.google.com/tagmanager/answer/6107056)
- [Chrome GA Debugger Extension](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna)

---

*Document version: 1.0*
*Last updated: 2026-02-13*
*By: Analytics Subagent*
