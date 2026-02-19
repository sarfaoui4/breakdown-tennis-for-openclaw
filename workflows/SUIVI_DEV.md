# 🏗️ SUIVI DEV - Tennis Breakdown

**Date de lancement** : 12 février 2026  
**Objectif** : MVP interface noir/orange avec dashboard client + paiements fonctionnels  
**Échéance** : 7 jours (19 février 2026)

## 📋 Équipe
| Agent | Rôle | Statut | Dernière mise à jour |
|-------|------|--------|---------------------|
| **Designer** | Thème noir/orange + design system | 🟡 EN COURS | Lancement |
| **Frontend** | Dashboard client + auth | 🟡 EN COURS | Lancement |
| **Paiements** | Stripe Connect + checkout | 🟡 EN COURS | Lancement |

## 🎯 Tickets (Jira-like)

### 📁 DESIGN (Priorité haute)
- [ ] **D-001** : Analyser l'ancien design noir/orange
- [ ] **D-002** : Créer design system Tailwind (couleurs, typographie, composants)
- [ ] **D-003** : Maquette page d'accueil
- [ ] **D-004** : Maquette dashboard client
- [ ] **D-005** : Maquette page upload vidéo
- [ ] **D-006** : Maquette interface admin

### 📁 FRONTEND (Dépend de D-002)
- [ ] **F-001** : Intégrer Supabase Auth (login/register)
- [ ] **F-002** : Page dashboard principal (statistiques)
- [ ] **F-003** : Page historique des analyses
- [ ] **F-004** : Page détails analyse (vidéo + commentaires)
- [ ] **F-005** : Interface upload vidéo améliorée
- [ ] **F-006** : Composants réutilisables (cards, tables, etc.)

### 📁 PAIEMENTS (Dépend de F-001)
- [ ] **P-001** : Configurer Stripe Connect (compte/test)
- [ ] **P-002** : Intégrer Stripe Elements dans Next.js
- [ ] **P-003** : Page checkout pour paiement analyse
- [ ] **P-004** : Webhooks gestion statuts paiement
- [ ] **P-005** : Dashboard admin transactions
- [ ] **P-006** : Système remboursements/disputes

## 🔗 Dépendances
```
Design → Frontend → Paiements
    ↓        ↓         ↓
D-002 →   F-001   →   P-002
```

## 📅 Calendrier
| Jour | Design | Frontend | Paiements |
|------|--------|----------|-----------|
| **J1** | D-001, D-002 | Setup projet | P-001 |
| **J2** | D-003, D-004 | F-001 (Auth) | P-002 |
| **J3** | D-005, D-006 | F-002, F-003 | P-003 |
| **J4** | Revu + ajustements | F-004, F-005 | P-004 |
| **J5** | Finalisation design | F-006 + intégration | P-005 |
| **J6** | Documentation | Tests + bugfixes | P-006 |
| **J7** | Livraison finale | Livraison finale | Livraison finale |

## 🚀 Points de Sync
- **Quotidien** : 10h00 GMT+1 (briefing 15min)
- **Démonstrations** : J3 et J6
- **Review design** : J2 (Sami valide direction)

## 📊 Métriques Succès
- ✅ Design noir/orange appliqué sur tout le site
- ✅ Dashboard client fonctionnel (auth + historique)
- ✅ Checkout Stripe fonctionnel (test mode)
- ✅ Interface admin pour voir transactions
- ✅ Site responsive mobile/desktop

## 📁 Structure Dossiers
```
tennis-breakdown/workflows/SUIVI_DEV.md  (ce fichier)
breakdown-tennis-for-openclaw/           (code source)
tennis-breakdown/design/                 (assets design)
tennis-breakdown/docs/                   (documentation)
```

## 📝 Notes
- **Communication** : Utiliser ce fichier pour updates
- **Blockers** : Mentionner immédiatement dans notes ci-dessous
- **Validation** : Sami valide chaque étape majeure

---

## 📌 Notes Journalières

### J1 - 12 février 2026
- **09:00** : Lancement des 3 agents
- **Designer** : Commence analyse ancien design
- **Frontend** : Setup projet + préparation auth
- **Paiements** : Configuration Stripe Connect

**Prochain check** : 13 février 10h00 GMT+1