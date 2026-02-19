# Workflow d'Onboarding - Réception des Nouveaux Clients

## Vue d'ensemble

Ce document décrit le processus complet d'onboarding des nouveaux clients Tennis Breakdown, de la première inscription à la livraison de l'analyse.

---

## Étape 1: Capture du Lead

**Source:** Landing page, formulaire d'inscription

**Données collectées:**
```
- Prénom (obligatoire)
- Email (obligatoire)
- Niveau tennis (optionnel)
- Objectifs (optionnel)
- Source acquisition (tracking UTM)
```

**Action immédiate:**
- Création d'un lead dans le CRM
- Génération d'un `LeadID` unique
- Déclenchement: **Email 1 - Bienvenue**

**Temps réponse cible:** < 1 minute

---

## Étape 2: Accueil et Instructions (Email 1)

**Trigger:** Lead créé

**Contenu principal:**
- Message de bienvenue personnalisé
- Instructions claires pour l'upload vidéo
- Lien upload sécurisé (72h validity)
- Questions complémentaires à répondre

**Objectif:** Engager le lead et obtenir une vidéo dans les 72h

**Taux de conversion cible:** 40% upload dans les 72h

**Suivi:** Si pas d'upload après 24h → relance automatique (Email 1b)

---

## Étape 3: Upload Vidéo

**Méthode:** Portail sécurisé (Google Drive/Form/Upload)

**Exigences techniques:**
```
- Format: MP4, AVI, MOV
- Durée: 3-5 minutes
- Taille max: 500MB
- Vue: arrière préférée, avant acceptable
- Éclairage: suffisant
- Stabilité: éviter fondu/zoom excessif
```

**Processus d'upload:**
1. Client accède au lien sécurisé
2. Remplit le formulaire avec questions
3. Upload fichier vidéo
4. Soumission → validation automatique

**Validation automatique:**
- ✅ Format fichier valide
- ✅ Taille acceptable
- ✅ Durée dans la plage
- ❌ Si problème → rejet immédiat avec explications

**Création ticket:**
- Génération `TicketID` unique
- Statut initial: "Reçu - En attente de vérification"
- Chargement fichier sur stockage sécurisé

---

## Étape 4: Confirmation Réception (Email 2)

**Trigger:** Upload réussi et validé

**Délai:** Immédiat (automatique)

**Contenu:**
- Accusé réception avec détails (nom fichier, taille)
- Numéro de ticket
- Lien de suivi pour le client
- Délai estimé (5-7 jours)
- Calme et attentes

**Objectif:** Rassurer le client, fixer les attentes

---

## Étape 5: Vérification Initiale (Agent Réception)

**Durée:** 1-2 heures après réception

**Tâches:**
- [ ] Vérifier qualité vidéo (angle, éclairage, son)
- [ ] Valider durée et format
- [ ] Vérifier présence des réponses aux questions
- [ ] Ajouter tags métier (niveau, type jeu, etc.)
- [ ] Si problème → contacter client (Email 5 - Demande complément)

**Statuts possibles:**
```
✅ En attente d'analyse (standard)
⚠️ En attente de clarification (questions incomplètes)
❌ Invalide (mauvais format, trop court) → Notification client
```

---

## Étape 6: File d'Attente Analyse

**Queue système:** Ticket placé dans file d'attente par ordre de réception

**Priorisation possible:**
- Niveau pro/avancé → priorité plus élevée
- Urgence expresse (option payante)
- Ancienneté ticket (FIFO par défaut)

**Notification:** Si file > 48h, envoyer update delay (Email 3b)

---

## Étape 7: Analyse par Sami (Agent Analyser)

**Durée:** 3-4 jours par ticket

**Processus:**
1. Sami reçoit notification + vidéo
2. Téléchargement et visionnage
3. Prise de notes techniques
4. Génération annotations vidéo (logiciel type Kinovea/Hudl)
5. Rédaction recommandations
6. Création programme exercices

**Livrables générés:**
```
📹 Vidéo annotée (fichier MP4 avec overlays)
📋 Programme PDF (exercices + progressions)
📊 Rapport technique (points forts/faibles)
🎯 Fiche de suivi (tracking progression)
```

---

## Étape 8: Marquage "Prêt"

**Trigger:** Sami marque ticket comme "Prêt pour livraison"

**Actions automatiques:**
- Génération fichiers finaux (compression, upload)
- Création liens de téléchargement (30j validity)
- Préparation email livraison (Email 4)
- Notification Agent Réception

---

## Étape 9: Livraison (Email 4)

**Délai:** Après validation Sami

**Contenu:**
- Annonce de livraison
- Liens téléchargement (expiration 30j)
- Instructions d'utilisation
- FAQ rapide
- Invitation feedback

**Suivi tracking:**
- Ouverture email (tracking pixel)
- Clic liens téléchargement
- Si pas d'ouverture après 5 jours → Rappel (Email 6)

**Marquage ticket:** "Livré"

---

## Étape 10: Suivi Post-Livraison

**Jour 7:** Email feedback (Email 5)
- Questionnaire court (3 questions)
- Offre guide bonus

**Jour 14:** Si fichiers non téléchargés → Rappel (Email 6)

**Jour 30:** Expiration liens → Notification automatique

**Jour 90:** Email réactivation (Email 7)

---

## Workflow Visuel

```
[Lead Créé]
    ↓
[Email 1: Bienvenue] ──→ (Si 72h sans upload) ──→ [Email 1b: Rappel]
    ↓
[Client upload vidéo] ──→ (Si invalide) ──→ [Email 5: Demande complément]
    ↓
[Validation auto] → [Ticket créé] → [Email 2: Confirmation]
    ↓
[File d'attente] → [Vérif. manuelle si nécessaire]
    ↓
[Traitement Sami] (3-4 jours)
    ↓
[Prêt pour livraison] → [Génération fichiers]
    ↓
[Email 4: Livraison] → [Client download]
    ↓
[J7] → [Email 5: Feedback]
    ↓ (Si pas download J14) → [Email 6: Rappel]
    ↓
[J90] → [Email 7: Réactivation]
    ↓
[Clôture ticket après 30j inactivité]
```

---

## Gestion des Exceptions

### Vidéo Invalide
- Rejet immédiat avec explications
- Email demandant reformulation
- Nouvel lien upload fourni

### Retard Sami (>7 jours)
- Notification interne (Agent Réception)
- Email progress update au client (Email 3a)
- Escalade si >10 jours

### Client non répondant
- Après 3 relances → marquer "Non réactif"
- Archiver après 60 jours

### Demandes urgentes
- Option "Express" (+50%)
- Traitement prioritaire (<24h)
- Notification directe Sami

---

## KPIs de Monitoring

**Métriques temps réel:**
```
- Lead to upload:     objectif < 48h
- Upload to ticket:   objectif < 2h
- Ticket to analyse:  objectif < 24h
- Analyse duration:   objectif 3-4j
- Delivery to open:   objectif < 48h
- Feedback rate:      objectif > 30%
```

**Métriques qualité:**
```
- Taux soumissions valides: >95%
- Satisfaction client: >4.5/5
- Taux réactivation: >15%
- Vidéos perdues: 0%
```

---

## Responsabilités par Étape

| Étape | Responsable | Outils | SLA |
|-------|-------------|--------|-----|
| 1-2 | Marketing / Auto | CRM, Email | <1min |
| 3 | Client + Auto | Upload Portal | 72h |
| 4 | Auto | Email System | <1min |
| 5 | Agent Réception | Dashboard | <2h |
| 6 | Système | Queue Manager | N/A |
| 7 | Sami | Logiciel analyse | 3-4j |
| 8-9 | Auto | File Gen | <24h |
| 10 | Auto | Scheduler | J7-J90 |

---

## Évolutions Futures

**Phase 2 (Amélioration):**
- Pré-analyse automatique (détection baseline qualité vidéo)
- Checklist interactive client (avant upload)
- Chatbot pré-questions

**Phase 3 (Scale):**
- Analyse technique automatique (angles, vitesses)
- Suggestion automatique exercices
- Validation Sami + override possible

**Phase 4 (Autonomie):**
- Bank de templates par niveau
- Auto-assignation tickets selon expertise requise
- Quality scoring automatique

---

## Intégration avec Autres Agents

- **Agent Marketing:** Transfert leads + tracking source
- **Agent Support:** Escalade questions complexes
- **Agent Analyse:** Interface pour Sami
- **Agent Copy:** Templates/coaching contenu

---

## Escalade et Alertes

**Alertes automatiques:**
```
⚠️ Ticket >48h sans début analyse → Notif Agent Réception + Manager
⚠️ Ticket >7j en cours → Notif Sami + offre prioritaire client
⚠️ 3+ tickets invalidés meme client → Contact direct
⚠️ Feedback <3/5 → Investigation qualitative
```

**Escalade manuelle:**
- Agent Réception → Manager si problème récurrent
- Sami → CEO si workload > capacité

---

## Modèles de Documents

**PDF à générer automatiquement:**
1. Devis initial (optionnel)
2. Contrat prestation
3. Reçu/ Facture
4. Rapport final (template avec scores)
5. Certificat d'analyse

**Templates disponibles dans:** `/templates/reception/`

---

## Points de Contact Critiques

1. **Réception vidéo** → Fiabilité storage + backup
2. **Notifications email** → Deliverability monitoring
3. **Tracking client** → Système de logs complet
4. **Expiration liens** → Cleanup automatique
5. **Confidentialité** → Accès restreint fichiers

---

## Checklist de Lancement

Avant de mettre en production, vérifier:

- [ ] Formulaire upload fonctionnel
- [ ] Emails templates validés (A/B test)
- [ ] CRM intégration avec champs nécessaires
- [ ] Système ticketing (Trello/Asana/ClickUp)
- [ ] Storage sécurisé + backup
- [ ] Tracking analytics (Google Analytics + custom)
- [ ] Monitoring alerte (health checks)
- [ ] Procédure escalade définie
- [ ] Documentation interne complète

---

## Contact Support

Pour toute question sur le workflow:
- Agent Réception interne: [Slack/Teams channel]
- Escalade technique: [Dev/DevOps contact]
- Urgence client: [Phone/WhatsApp]
