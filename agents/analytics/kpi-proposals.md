# KPI Proposals - Tennis Breakdown

## 🎯 Résumé Exécutif

Ce document propose un ensemble de Key Performance Indicators (KPI) adaptés au modèle économique de Tennis Breakdown (analyse vidéo de tennis payante). Les KPI sont organisés par niveau: **Stratégique**, **Opérationnel**, et **Marketing**. Chaque KPI inclut sa définition, formule de calcul, objectif réaliste (premiers 6 mois), et fréquence de monitoring.

**Philosophie:** Commencer simple (5-7 KPI principaux) puis complexifier avec l'expérience.

---

## 📊 KPI Stratégiques (Executive Level)

### 1. Monthly Recurring Revenue (MRR) Equivalent
**Définition:** Revenue mensuel total généré par les analyses (pay-per-use, pas d'abonnement). Utile comme proxy de santé business.

**Formule:**
```
MRR_eq = Sum(orders dans les 30 derniers jours)
```

**Objectif (Mois 1):** €500
**Objectif (Mois 6):** €3000

**Monitoring:** Journalier pour tendance, mensuel pour objectifs

**Segmenter par:** Canal d'acquisition, type d'analyse (basic/standard/premium)

---

### 2. Customer Acquisition Cost (CAC)
**Définition:** Coût moyen pour acquérir un client payant.

**Formule:**
```
CAC = Total Marketing & Sales Spend (période) / Nombre de Nouveaux Clients (période)
```

**Inclus dans spend:**
- Ads (Facebook, Google)
- Contenu (rédacteurs, graphistes)
- Outils marketing (SendGrid, Canva Pro, SEO tools)
- Temps équipe (estimer si applicable)

**Exclus:**
- Coûts fixes (hosting Vercel, Supabase base) - hors acquisition

**Objectif:** <€18 (M1), optimiser vers <€12 (M6)

**Monitoring:** Hebdomadaire (ne pas attendre fin mois)

**Warning:** CAC > LTV/3 = perte sur acquisition → STOP canal

---

### 3. Customer Lifetime Value (LTV)
**Définition:** Revenue total généré par un client sur toute sa relation.

**Formule (prédictif à 6 mois):**
```
LTV_6m = (Average Order Value × Purchase Frequency × 6 mois) × Retention Rate
```

**Plus simple (historique):**
```
LTV_actuel = Total revenue depuis ce client / Nombre de clients cohort
```

**Variables:**
- AOV (Average Order Value): €25-35 (varie selon promo)
- Purchase Frequency: Objectif >1.7 analyses/client (cross-sell/upsell)
- Retention Rate: % clients qui rachètent après 30/60/90 jours

**Objectif (M6):** €60-80

**Monitoring:** Mensuel (quand cohorte suffisante)

---

### 4. LTV:CAC Ratio
**Définition:** Ratio santé business business model.

**Formule:**
```
LTV:CAC = LTV / CAC
```

**Targets:**
- < 1: Perte argent (business non viable)
- 1-3: Marge faible, scaling difficile
- **3-5: Sain** (zone cible Tennis Breakdown)
- >5: Très sain, peut accélérer acquisition

**Objectif (M6):** 4:1

**Monitoring:** Mensuel

**Action:** Si ratio <3, soit réduire CAC, soit augmenter LTV (upsell, rétention)

---

### 5. Payback Period
**Définition:** Nombre de mois pour rentabiliser un client (récupérer CAC).

**Formule:**
```
Payback Period (months) = CAC / (Monthly Revenue per Customer × Gross Margin %)
```

**Exemple:**
- CAC = €15
- Monthly Revenue/Customer = €10 (1 analyse/mois en moyenne)
- Gross Margin = 80% (coûts variables faibles)
- Payback = 15 / (10 × 0.8) = 1.875 mois (~2 mois)

**Objectif:** <3 mois

**Monitoring:** Mensuel

---

### 6. Monthly Active Users (MAU) - Lead Equiv
**Définition:** Nombre d'utilisateurs uniques actifs ce mois (avec au moins 1 événement significatif).

**Équivalent pour Tennis Breakdown:** Leads qualifiés (double opt-in confirmé) + clients payants.

**Formule:**
```
MAU_lead_eq = COUNT(DISTINCT user_id WHERE last_activity_date >= first_day_of_month)
```

**Objectif (M1):** 50
**Objectif (M6):** 500

**Monitoring:** Hebdomadaire (growth trend)

**Segmentation:**
- New MAU (first time this month)
- Returning MAU (active previous month aussi)
- Paid MAU (clients payants)

---

### 7. Conversion Rate (Site → Customer)
**Définition:** Pourcentage de visiteurs qui deviennent clients payants.

**Formule:**
```
Site → Customer CR = (Customers this month / Sessions this month) × 100%
```

**Tunnel simplifié:**
```
Sessions → Landings (90%) → Form Capture (15-25%) → Emails opened (60%) → Checkout viewed (5%) → Purchased (50% of checkout) = 1.35% global

Objectif: 2-3% (M6)
```

**Monitoring:** Mensuel

**Segmentation:**
- Par canal d'acquisition (trafic organique vs social vs paid)
- Par appareil (mobile vs desktop)
- Par source spécifique (Instagram vs TikTok vs Google)

---

## 📈 KPI Opérationnels (Team Level)

### 8. Traffic Volume by Source
**Définition:** Sessions par canal d'acquisition.

**Formule:**
```
Sessions_source = COUNT(sessions WHERE utm_source = 'X') + organic + direct
```

**Canaux:**
- Organic search (SEO)
- Social (Instagram, TikTok, Facebook)
- Paid (Facebook Ads, Google Ads)
- Direct (nom de domaine tapé)
- Referral (sites externes)
- Email (liens dans emails)

**Objectif (M1):**
- Organic: 30% (150 sessions)
- Social: 40% (200 sessions)
- Paid: 15% (75 sessions)
- Direct/Referral: 15%

**Monitoring:** Quotidien (realtime possible)

**Action:** Si paid >50% du total, CAC élevé → investir organic/social

---

### 9. Lead Generation Rate
**Définition:** Nombre de leads (email capturés + double opt-in) par jour/semaine.

**Formule:**
```
Leads/day = COUNT(leads WHERE date_captured = today AND optin_status = 'confirmed')
```

**Objectif:**
- M1: 3-5 leads/day (100-150/mois)
- M6: 10-15 leads/day (300-450/mois)

**Monitoring:** Quotidien (dashboard day-part)

**Metrics dérivées:**
- Lead to MQL rate: % leads qui cliquent checkout page
- MQL to SQL rate: % MQL qui start checkout
- SQL to Customer rate: % checkout → purchase

---

### 10. Email Metrics (Sequence Nurturing)
**Objectif:** Évaluer efficacité email sequence post-capture.

**Métriques:**

#### Open Rate
```
Open Rate = Opens / Emails Sent × 100%
```
**Objectif:** >20% (premier email), >15% (derniers emails)

#### Click Rate
```
Click Rate = Clicks / Opens × 100%  (ou Clicks / Sent)
```
**Objectif:** >3% (Clicks/Sent), >10% (Clicks/Opens)

#### Unsubscribe Rate
```
Unsub Rate = Unsubscribes / Sent × 100%
```
**Objectif:** <0.5% (si >1% revoir contenu)

#### Conversion par Campagne
```
Email → Purchase = Purchases from email / Emails sent × 100%
```
**Objectif:** 0.5-2% (email drive revenue indirect via nurturing)

**Monitoring:** After each email send (weekly)

---

### 11. Funnel Drop-off Points
**Objectif:** Identifier où les utilisateurs quittent le funnel.

**Stages du funnel:**
1. Sessions (100%)
2. Landing page viewed (90%保留)
3. Scroll >50% (60%)
4. CTA guide click (25%)
5. Form display (90% of clicks)
6. Form submit (70% of displays)
7. Double opt-in click (60% of submits)
8. Double optin confirmed (95% of clicks)
9. Open nurture email (60%)
10. Click tariff page (20%)
11. Begin checkout (30% of tariff views)
12. Payment success (50% of checkout starts)

**Point de fuite critique:** Étape 4→5 (CTA to form), 10→11 (tariff to checkout)

**Action:** Optimiser landing page si drop-off >50% à une étape

---

### 12. Time to First Purchase
**Définition:** Nombre de jours entre capture email et premier achat.

**Formule:**
```
Days to purchase = Purchase Date - Lead Capture Date
```

**Objectif (Médiane):** 7-14 jours (après nurture sequence)

**Segments:**
- Quick converting (<3 jours) → forte intent
- Average (7-14 jours) → nurtured well
- Slow (>30 jours) → maybe never → adjust nurture

**Action:** Si médiane >21 jours, optimiser email sequence ou landing offers

---

### 13. Average Order Value (AOV)
**Définition:** Montant moyen par commande.

**Formule:**
```
AOV = Total Revenue (period) / Number of Orders (period)
```

**Prix actuels:**
- Analyse Basic: €15-20 ( promo code)
- Analyse Standard: €25-30
- Analyse Premium: €35-40
- Upsell possible: Analyse approfondie (+€10)

**Objectif:** €28-32 (M6)

**Strategy pour augmenter AOV:**
- Bundle offers (2 analyses = prix réduit)
- Upgrade prompts post-checkout
- Premium tier promotion

---

### 14. Refund / Cancellation Rate
**Définition:** % commandes remboursées ou annulées.

**Formule:**
```
Refund Rate = Refunded Orders / Total Orders × 100%
```

**Politique:** Remboursement sous 7 jours si insatisfait ( garantie)

**Objectif:** <5% (si >10%, problème qualité service)

**Monitoring:** Immédiat après remboursement (alerte)

**Reason codes:**
- "Not satisfied with analysis quality" → revoir processus
- "Changed mind" → normal (early days)
- "Technical issues" → fix bug

---

## 📱 KPI Marketing (Channel-specific)

### 15. SEO Performance
#### Organic Sessions
```
Organic Sessions = Sessions where default_channel_group = "Organic Search"
```
**Objectif:** 100-200/semaine (M6)

#### Keyword Positions
**Target keywords (FR):**
1. "analyse vidéo tennis" → TOP 10
2. "coaching tennis en ligne" → TOP 20
3. "améliorer technique tennis" → TOP 20
4. "service tennis correction" → TOP 30
5. "erreurs revers tennis" → TOP 30

**Monitoring:** Weekly (SEMrush/Ahrefs) or Google Search Console

#### Click-Through Rate (CTR) from SERP
```
CTR = Clicks / Impressions × 100%
```
**Objectif:** >3% pour keywords cibles

---

### 16. Social Media KPI

#### Instagram (Prioritaire)
- **Followers growth:** +50-100/mois (objectif M6: 1000-3000)
- **Engagement rate:** (likes + comments) / followers / post × 100% → >2%
- **Profile clicks:** Clics vers site bio → tracked via UTM `utm_source=instagram`
- **Website sessions from Instagram:** >50% de followers actifs?
- **Conversions from Instagram:** % achats provenance Instagram

#### TikTok
- **Followers growth:** +100-200/mois (objectif M6: 2000-5000)
- **Video views:** >1000 views/vidéo (moyenne)
- **Engagement rate:** >3% (likes+comments+shares / views)
- **Profile visits:** tracked via analytics TikTok (pro)
- **Website sessions from TikTok**
- **Conversions from TikTok**

#### Facebook
- **Page likes:** +50/mois (objectif M6: 500-1000)
- **Post engagement:** >5% (likes+comments+shares / reach)
- **Group membership:** Si groupe créé → +20 membres/semaine
- **Trafic from Facebook** (UTM `utm_source=facebook`)
- **Conversions from Facebook**

---

### 17. Paid Advertising KPI (Facebook/Google)

#### Facebook Ads
- **Impressions:** volume exposition
- **Reach:** utilisateurs uniques vus
- **CPM (Cost per 1000 impressions):** Objectif <€5
- **CTR (Click-through rate):** >1%
- **CPC (Cost per click):** <€0.50
- **CPA (Cost per acquisition):** <€20 (achat) ou <€5 (lead)
- **ROAS (Return on Ad Spend):** Revenue from ads / Ad spend
  - Target ROAS: >3.0 (€3 revenue pour €1 dépensé)

**Campagne types à tracker:**
1. Lead ads (guide gratuit) → CPA <€5
2. Conversion ads (achat direct) → CPA <€20, ROAS >3
3. Retargeting (site visitors) → CPA <€10

#### Google Ads (Search)
- **Impressions**
- **Clicks**
- **CPC** → cible <€0.80
- **CTR** → >3%
- **Conversion rate** (achat)
- **CPA** → <€25 (si test)
- **ROAS** → >2.5

**Keywords à enchérir (début):**
- "analyse vidéo tennis prix"
- "coaching tennis en ligne"
- "corriger technique tennis vidéo"

---

### 18. Content Marketing KPI

#### Blog Articles
- **Articles published/month:** Objectif 8 (2/semaine)
- **Pageviews/article:** Moyenne >100 (M1), >500 (M6)
- **Avg time on page:** >2min30 (bon contenu)
- **Scroll depth 75%:** >40% readers
- **Organic traffic/article:** % venant search
- **Top 10 articles** (80% du trafic blog)

**Formats performants:**
- "How-to" guides (ex: "Comment améliorer son service")
- "Listicles" (ex: "5 erreurs tennis")
- Case studies (ex: "Analyse avant/après")
- FAQ (ex: "Analyse vidéo prix")

---

## 📋 Dashboard Metrics Cheatsheet

### Listes des métriques à afficher dans tableau de bord quotidien:

| Metric | Source | Format | Objectif M1 | Alert Threshold |
|--------|--------|--------|-------------|-----------------|
| Sessions | GA4 | nombre | 500-1000/mois | <50/jour (rush) |
| New Users (%) | GA4 | % | >70% | <50% (problème reach) |
| Leads (confirmed) | Supabase | nombre | 100-150/mois | <3/jour |
| Email Capture Rate | GA4/Supabase | % | 15-25% | <10% |
| Customers (orders) | Stripe/Supabase | nombre | 20-50/mois | 0 depuis 7j |
| Revenue | Stripe | € | €500-1000/mois | <€50/semaine |
| CAC (est.) | Calc manual | € | <€18 | >€25 |
| AOV | Stripe | € | €25-30 | <€20 |
| checkout conversion | GA4 | % | 30% | <20% |
| Site → Purchase CR | GA4 | % | 2-3% | <1% |
| Scroll depth 75% | GA4 | % | >40% | <20% |
| Email open rate | SendGrid | % | >20% | <15% |
| Email click rate | SendGrid | % | >3% | <2% |
| Social traffic sessions | GA4 | nombre | 40% total | <30% total |
| Organic sessions | GA4 | nombre | >30% total | <20% total |
| Pages/session | GA4 | nombre | >2.5 | <2.0 |
| Time on site | GA4 | temps | >2min | <1min |
| Bounce rate | GA4 | % | <60% | >75% |

---

## 🔢 KPI Formules Reference (Calcul Sheet)

### Calculs Intermédiaires

**Conversion Rate (toute étape):**
```
CR_step = (Users at Step N / Users at Step N-1) × 100%
```

**Overall Funnel CR:**
```
Overall_CR = (Customers / Sessions) × 100%
```

**Month-over-Month Growth:**
```
MoM_growth% = ((Current_month_value - Previous_month_value) / Previous_month_value) × 100%
```

**Customer Retention Rate (Cohort):**
```
Retention_cohort_30d = (Customers cohort_day_0 still active day_30) / (Total cohort_day_0) × 100%
```

**Revenue per Visitor (RPV):**
```
RPV = Total Revenue / Sessions
```

**Customer Count Growth:**
```
New_Customers = Customers_end_period - Customers_start_period
```

---

## 📊 Segments Must-Have

1. **By Acquisition Channel:** Compare performance organic vs paid vs social
2. **By Device:** Mobile vs desktop CR differences
3. **By Geography:** France focus, région performance (Île-de-France vs province)
4. **By User Type:** New vs returning leads vs customers
5. **By Product/Analysis Type:** Basic vs Standard vs Premium (conversion, AOV)
6. **By Content Category:** Technique blog vs mental vs training (engagement)
7. **By Time to Purchase:** Fast (<3d), Average (7-14d), Slow (>30d)
8. **By Email Sequence Engagement:** Opened all emails vs none

---

## 🎯 OKR Alignment (Objectives & Key Results)

### Objective 1: Validate Tennis Market Demand
**KR1:** Achieve 50 paying customers in first 30 days
**KR2:** LTV:CAC ratio > 3:1 after 30 days
**KR3:** Customer satisfaction (NPS) > 50 post-purchase

### Objective 2: Build Scalable Acquisition Engine
**KR1:** Organic traffic > 30% of total by month 6
**KR2:** Social media followers: Instagram 2000+, TikTok 5000+, FB 2000+
**KR3:** CAC < €12 by month 6 (down from €18)

### Objective 3: Optimize Funnel Conversion
**KR1:** Site → Lead CR > 20% (from 15%)
**KR2:** Lead → Customer CR > 5% (from 2%)
**KR3:** Checkout abandonment < 30% (from 40%)

### Objective 4: Develop Retention & Referrals
**KR1:** Repeat purchase rate > 25% (customers buying 2nd analysis)
**KR2:** Referral conversions > 10% of new customers (via referral program)
**KR3:** Email sequence engagement: open rate >25%, click rate >5%

---

## 📈 Data-Driven Decisions

### When to Pivot Strategy
- CAC consistently > €25 for >2 weeks → STOP paid, double down organic/social
- Overall CR < 1% after 500 sessions → landing page A/B test urgent
- Organic traffic < 10% after 3 months → SEO content scaling needed
- Mobile CR < 50% of desktop → mobile optimization critical
- Email open rate < 10% → subject line/content revamp
- Refund rate > 10% → quality process review

### When to Scale
- LTV:CAC > 4:1 stable → increase paid ads budget 2x
- ROAS ads > 4:1 → double ad spend
- Social organic engagement > 5% → increase posting frequency
- Funnel fully optimized (CR top quartile) → focus acquisition volume

---

## 🛠️ Calculation Tools

### Google Sheets / Excel Template
Créer un fichier `metrics_calculator.xlsx` avec:
1. **Inputs:**
   - Sessions (by channel)
   - Leads captured (by source)
   - Orders (by source, by product)
   - Revenue (by order)
   - Ad spend (by platform)
   - Content published
   - Social metrics

2. **Auto-calculated KPIs:**
   - All CRs (sessions→lead, lead→order, overall)
   - CAC (by channel)
   - AOV
   - LTV (cohort-based)
   - Growth rates MoM

3. **Charts:**
   - Funnel visualization
   - Revenue trend
   - CAC trend by channel
   - Social followers growth
   - Content performance

### Dashboard Automatisé (Looker Studio)
Connecter Looker Studio à:
- GA4 (trafic, events)
- Search Console (SEO)
- Supabase (leads, orders) via connector
- Spreadsheet (ad spend, social metrics)

Créer 1 dashboard multi-pages comme décrit dans `dashboard.md`

---

## ⏰ Monitoring Cadence

### Daily (5-10min)
- Sessions (realtime vs target)
- Leads captured yesterday
- Orders yesterday
- Any anomalies (spikes/drops)

### Weekly (30min - Lundi morning)
- Full weekly report (template in dashboard.md)
- Funnel metrics deep-dive
- Channel performance review
- Ad spend vs results (if running ads)
- Content calendar completion

### Monthly (1h - 1er du mois)
- Monthly report executive summary
- LTV cohort analysis (premiers clients)
- CAC by channel recalculation
- SEO positions check
- Forecasting (next 3 months)
- Budget allocation decisions

---

## 📊 Reporting Templates

### Daily Standup Message (Slack/Discord)
```
📊 Tennis Breakdown - Daily Metrics [Date]

✅ Good news:
- Sessions: X (vs target Y) [↑/↓ Z%]
- Leads: X (vs target Y)
- Orders: X (€ revenue)

⚠️ Attention needed:
- CAC estimé: €X (cible: <€18)
- [Métrique anormale] went down/up

🎯 Priorités aujourd'hui:
1. [Action based on data]
2. [Action]
```

### Weekly Report (to team/discord)
```
📈 Weekly Analytics - [Semaine dates]

Trafic:
- Sessions: X (+Y% vs last week)
- Sources: Organic Z%, Social A%, Paid B%
- Top pages: / (X visits), /guide (Y visits)

Leads:
- Captured: X (avg/day: Y)
- Capture rate: Z% (target 20%)
- Double opt-in confirmed: X/Y (Z%)

Conversion:
- Orders: X (€ revenue)
- AOV: €Y
- Checkout CR: Z%
- Top product: [name] (X orders)

Email:
- Sent: X, Opens: Y (Z%), Clicks: W (V%)
- Best campaign: [name]

Social:
- New followers: X (IG), Y (TT), Z (FB)
- Engagement rate: [calcul]
- Traffic to site: X sessions

Insights/Actions:
1. [What worked well]
2. [Drop-off identified]
3. [Next week experiments]
```

---

## 🔗 KPI Priority Ranking (First 30 Days)

### Tier 1: MUST TRACK (Day 1)
1. Sessions (total + by source)
2. Lead capture rate
3. Double opt-in confirmed
4. Orders (purchases)
5. Revenue
6. CAC (rough estimate)
7. AOV

### Tier 2: ADD BY WEEK 2
8. Funnel drop-off points
9. Email open/click rates
10. Scroll depth (landing pages)
11. CTA click rates
12. Time on page

### Tier 3: ADD BY WEEK 4
13. Social metrics integration
14. SEO positions
15. Video engagement (if applicable)
16. Referral tracking
17. Cohort retention

### Tier 4: MONTH 2+
18. LTV (quand cohorte >=50)
19. Payback period
20. Segment deep-dives
21. Predictive metrics

---

## 🎯 Success Metrics by Stage

### Pre-Launch (0 customers, building)
- Guide downloads > 10/day (early signups)
- Email list > 50 before first paid article
- Site sessions > 100/week (organic/social)

### Launch Phase (Day 1-30)
- 50 paying customers
- CAC < €25
- LTV > €30 (early indication)
- Site → Purchase CR > 1.5%
- LTV:CAC > 2:1 (early)

### Growth Phase (Month 2-6)
- 500 total customers (cumulative)
- CAC < €15
- LTV > €60
- LTV:CAC > 3:1
- Monthly recurring revenue (MRR eq) > €2000
- Repeat purchase rate > 20%

---

## 📋 Implementation Checklist

### Tracking Setup
- [ ] GA4 property + GTM container
- [ ] Page view tracking
- [ ] UTM parameter capture
- [ ] Form submit tracking (guide)
- [ ] Purchase tracking (Stripe webhook)
- [ ] Scroll depth implementation
- [ ] CTA click tracking
- [ ] Email marketing integration (SendGrid events)
- [ ] Supabase event logging (first-party backup)
- [ ] Consent management (RGPD)

### Dashboarding
- [ ] Looker Studio account
- [ ] GA4 data source connected
- [ ] Supabase connector (or spreadsheet)
- [ ] Executive summary page (5-7 tiles)
- [ ] Funnel page
- [ ] Acquisition channel page
- [ ] Content performance page
- [ ] Social media page
- [ ] Email marketing page
- [ ] Sharing with team

### Reporting Cadence
- [ ] Daily standup message template saved
- [ ] Weekly report template ready
- [ ] Monthly report template ready
- [ ] Alerts setup (GA4 custom alerts for drops >20%)
- [ ] Access given to all stakeholders

---

*Document version: 1.0*
*Last updated: 2026-02-13*
*By: Analytics Subagent*
