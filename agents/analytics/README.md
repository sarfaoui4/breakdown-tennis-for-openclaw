# 📊 Analytics Agents - Tennis Breakdown

Bienvenue dans le module analytics de Tennis Breakdown. Ce dossier contient toute la documentation pour implémenter, comprendre et utiliser le système de tracking et d'analyse du site.

---

## 📚 Documents Disponibles

### 1. [**KPI Proposals**](kpi-proposals.md)
**Quoi:** Liste exhaustive des indicateurs de performance à suivre
**Pour qui:** Direction, marketing, produit
**Contenu:**
- 20+ KPI structurés (stratégiques, opérationnels, marketing)
- Formules de calcul précises
- Objectifs réalistes (M1, M6)
- Priorités par phase d'implémentation
- Templates de reporting

**Commencez ici** si vous ne savez pas quels metrics suivre.

---

### 2. [**Dashboard Overview**](dashboard.md)
**Quoi:** Structure complète du dashboard et métriques à afficher
**Pour qui:** Équipe opérationnelle, analystes
**Contenu:**
- Vue d'ensemble des métriques principales
- Pages à tracer et leur importance
- Tunnel de conversion détaillé
- Events utilisateur à implémenter
- Stack technique recommandé
- Structure Looker Studio (pages du dashboard)
- Priorités d'implementation (semaine 1-4)
- Benchmarks et objectifs
- Sections RGPD et debugging

**À lire** une fois les KPI choisis, pour comprendre l'implémentation.

---

### 3. [**Events Specification**](events-spec.md)
**Quoi:** Documentation technique pour développeurs
**Pour qui:** Développeurs, tech lead
**Contenu:**
- Architecture tracking (GTM + GA4)
- Spécifications complètes de 12+ événements
- Code JavaScript prêt à copier-coller
- Implementation GTM (triggers, tags, variables)
- Setup RGPD (consent management)
- Integration Supabase (backup first-party)
- Email marketing webhooks
- QA checklist complète
- Troubleshooting guide
- Timeline 4 semaines d'implémentation

**À lire** par l'équipe tech pour implémenter le tracking.

---

## 🎯 Quick Start Guide (Par Rôle)

### Pour le Fondateur / Business
1. Lisez [KPI Proposals](kpi-proposals.md)
2. Identify 5-7 KPI principaux à suivre immédiatement
3. Comprenez objectifs M1 (50 clients, CAC <€18)
4. Planifiez revues hebdo/mensuelles (templates inclus)

---

### Pour le Marketing / Growth
1. Lisez [KPI Proposals](kpi-proposals.md) (sections Marketing KPI)
2. Lisez [Dashboard](dashboard.md) (section Tunnel de Conversion)
3. Configurez GA4 + Looker Studio (section Stack Technique)
4. Commencez à tracker campagnes avec UTM parameters
5. Mettez en place reporting hebdomadaire (template included)

---

### Pour le Développeur / Tech
1. Lisez [Events Specification](events-spec.md) de bout en bout
2. Créez property GA4, container GTM
3. Implement GTM script dans le site React
4. Suivez timeline 4 semaines dans Events Spec
5. Testez chaque événement en GTM Preview + GA4 DebugView
6. Validez avec marketing team les données remontées

---

## 📊 Stack Recommandé (Outils)

| Outil | Rôle | Coût | Échéance installation |
|-------|------|------|----------------------|
| Google Analytics 4 | Analytics principal | Gratuit | Week 1 Day 1 |
| Google Tag Manager | Tag management | Gratuit | Week 1 Day 1 |
| Google Looker Studio | Dashboarding | Gratuit | Week 1 Day 3 |
| Supabase | Backup leads/orders | Free→€25/mois | Week 2 |
| Hotjar | Heatmaps/recordings | Free→€39/mois | Week 3 (optionnel) |
| SendGrid/Mailchimp | Email marketing | Free→€15/mois | Week 1 |
| Google Search Console | SEO tracking | Gratuit | Week 2 |

---

## 🎯 Priorités Implementation (4 semaines)

### Semaine 1: Foundation
- GA4 + GTM setup
- Page view tracking
- Basic dashboard (Looker Studio)
- UTM standards

### Semaine 2: Core Conversions
- Guide form tracking (CRITICAL)
- Purchase tracking (Stripe integration)
- CTA button tracking
- Checkout funnel

### Semaine 3: Engagement Tracking
- Scroll depth
- Time on page
- Video tracking (if applicable)
- Custom user properties

### Semaine 4: Integration
- Supabase backup
- Email webhooks
- Consent management (RGPD)
- Hotjar
- Search Console

---

## 📈 Métriques à Suivre Quotidiennement (Dashboard)

### Tile 1: Sessions Today
- Objectif: 15-30/jour (M1), 50-100/jour (M6)
- Source: GA4 real-time

### Tile 2: Leads Captured Today
- Objectif: 1-3/jour (M1), 5-10/jour (M6)
- Source: Supabase count (today)

### Tile 3: Orders Today / Revenue
- Objectif: 0-2/jour, €0-100
- Source: Stripe/Supabase orders

### Tile 4: CAC Estimator
- (Ad spend period / New customers period)
- Alert si >€25

### Tile 5: Top Landing Page Conversion
- Guide capture rate landing page principale
- Target >15%

### Tile 6: Social Traffic (Sessions)
- Somme Instagram + TikTok + Facebook
- Target >40% total sessions

---

## 🔍 Monitoring Cadence

### Daily (5min)
- Trafic, leads, orders (real-time)
- Anomalies detection
- Quick Slack report (template in KPI doc)

### Weekly (30min - Lundi)
- Funnel metrics (full report template)
- Channel performance
- Ad spend review (if applicable)
- Content calendar completion
- Team sync: what's working, what's not

### Monthly (1h - 1er du mois)
- Deep dive report (template in dashboard)
- LTV cohort analysis
- CAC recalibration
- SEO positions review
- Budget reallocation decisions
- OKR review

---

## 🐛 Troubleshooting Quick Reference

| Problème | Vérifier | Solution |
|----------|----------|----------|
| Events not firing | GTM Preview mode | Trigger conditions corrects? |
| Duplicate events | GA4 config + GTM tag | Désactiver double envoi |
| Purchase value wrong | dataLayer format | `ecommerce.value` doit être nombre |
| UTM lost after nav | SessionStorage | Persist UTM dans cookie/sessionStorage |
| No mobile data | Device detection | Vérifier segments GA4 par device |
| Consent blocking | GTM consent mode | Consentement nécessaire pour analytics |
| Data delayed | GA4 processing | Standard reports: 24-48h. Use DebugView for real-time |

---

## 📚 Ressources Externes

### Documentation Officielle
- [GA4 Events](https://support.google.com/analytics/answer/9267735)
- [GTM Triggers](https://support.google.com/tagmanager/answer/7679319)
- [GA4 Ecommerce](https://support.google.com/analytics/answer/10096180)

### Guides Pratiques
- [GTM + GA4 Setup](https://www.simoahava.com/gtm-tips/)
- [Stripe + GA4 Integration](https://www.analyticsmania.com/post/stripe-google-analytics-4/)
- [Scroll Tracking in GTM](https://www.analyticsmania.com/post/scroll-depth-tracking-google-tag-manager/)

### Debug Tools
- [GA4 DebugView](https://support.google.com/analytics/answer/7201382)
- [GTM Preview Mode](https://support.google.com/tagmanager/answer/6107056)
- [Chrome GA Debugger Extension](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna)

---

## 🚀 Prochaines Étapes

### Immediate (Aujourd'hui)
- [ ] Lire [KPI Proposals](kpi-proposals.md) et [Dashboard](dashboard.md)
- [ ] Identify 5 KPI prioritaires (équipe s'accorde)
- [ ] Créer property GA4 + container GTM

### Week 1
- [ ] Implémenter GTM script
- [ ] Vérifier page view tracking
- [ ] Créer basic Looker Studio dashboard
- [ ] Documenter UTM standards

### Week 2
- [ ] Implement form tracking (critical)
- [ ] Implement purchase tracking
- [ ] Test all events in GTM Preview
- [ ] Setup daily Slack report

### Week 3-4
- [ ] Engagement tracking (scroll, time)
- [ ] RGPD consent management
- [ ] Supabase backup integration
- [ ] Full QA and bug fixes

---

## ❓ FAQ

**Q: Quel outil analytics choisir, GA4 ou autre?**
R: GA4 + GTM recommandé (gratuit, complet, supporté). Alternative: Plausible Analytics si privacy-first en priorité.

**Q: Combien de temps avant d'avoir des données?**
R: Événements: temps réel via DebugView. Rapports standard: 24-48h.

**Q: Faut-il implémenter tous les KPI?**
R: Non. Commencer avec 5-7 KPI principaux (voir section Priority dans KPI doc). Ajouter progressivement.

**Q: Comment tracker les conversions sans GA4?**
R: Use Supabase webhooks (first-party backup) + formulaire de calcul Excel. Mais GA4 simplifie énormément.

**Q: RGPD compliant?**
R: Oui, avec consent management (cookie banner + GTM consent mode). Ne pas tracker analytics sans opt-in explicite.

**Q: Coût mensuel?**
R: €0-50 initial, €100-200 à scale. Principalement outils email + SEO tools (optionnels).

---

**Questions?** Consultez les documents spécifiques ou ouvrez une issue dans le repo.

*Module analytics maintenu par:* Analytics Subagent
*Dernière mise à jour:* 2026-02-13
