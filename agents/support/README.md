# Support Client Tennis Breakdown

Ce dossier contient tous les documents nécessaires à l'intégration et l'exploitation du support client intégré (chat widget + FAQ).

## 📁 Fichiers

| Fichier | Description |
|---------|-------------|
| `faq.md` | Base de connaissances complète avec questions/réponses organisées par catégories |
| `chat-widget-config.md` | Spécifications UX/UI du widget de chat : flux conversationnel, menus, messages |
| `integration-guide.md` | Guide d'intégration technique pour développeurs (React, backend, déploiement) |
| `parse-faq.js` | Script Node.js pour convertir `faq.md` en `faq.json` lisible par le frontend |
| `faq.json` | (Généré) Format structuré JSON pour consumption par l'API/le widget |

---

## 🚀 Mise en route rapide

### 1. Générer le JSON
```bash
cd tennis-breakdown/agents/support
node parse-faq.js
```
→ Génère `faq.json` dans le même dossier

### 2. Copier vers le projet frontend
```bash
# Exemple
cp faq.json ../../frontend/src/data/
```

### 3. Intégrer le widget
Suivre les étapes dans `integration-guide.md` (section React/Vue/Angular)

---

## 📋 Structure de la FAQ

### Catégories
1. **📤 Upload vidéo** → Procédure, formats, durée, problèmes
2. **💳 Paiement** → Tarifs, moyens, sécurité, factures, remboursements
3. **⏱️ Délais analyse** → Durées, suivi, retards, accélération
4. **🔧 Support technique** → Connexion, mot de passe, historique, partage, qualité vidéo
5. **❓ Questions générales** → Présentation, surfaces, multi-joueurs, débutants

Chaque question contient :
- `id` : identifiant unique
- `question` : texte de la question
- `answer` : réponse formatée (markdown supporté)
- `keywords` : mots-clés pour recherche

---

## 🎯 Objectifs de performance

| Métrique | Cible |
|----------|-------|
| Taux résolution chat sans humain | > 85% |
| Temps réponse moyen (bot) | < 1s |
| Satisfaction CSAT chat | > 4.5/5 |
| Taux transfert humain | < 15% |
| Disponibilité widget | 99.9% |

---

## 🔄 Maintenance

### Ajouter/modifier une question

1. Éditer `faq.md` dans la section correspondante
2. Régénérer le JSON : `node parse-faq.js`
3. Redéployer le frontend
4. Vérifier que les keywords sont appropriés
5. Mettre à jour la date de génération dans `faq.json.meta`

### Ajouter une catégorie

1. Dans `faq.md`, ajouter section `## N. NOUVELLE CATÉGORIE`
2. Ajouter bouton dans `chat-widget-config.md` (menu principal)
3. Mettre à jour `integration-guide.js` si nécessaire
4. Régénérer le JSON

---

## 📊 Analytics

Événements à tracker (Google Analytics/Matomo) :

```js
// Ouverture widget
gtag('event', 'chat_widget_open', { category: 'support' });

// Clic catégorie
gtag('event', 'chat_category_click', {
  category: 'support',
  label: 'upload'
});

// Clic question
gtag('event', 'chat_question_click', {
  category: 'support',
  label: 'upload_procedure'
});

// Transfert humain
gtag('event', 'chat_human_transfer', {
  category: 'support',
  label: 'hors_scope'
});
```

---

## 🐛 Debug

### Widget ne s'affiche pas
- Vérifier que `faq.json` est bien chargé (Network tab)
- Vérifier console JS pour erreurs
- Vérifier CSS z-index (doit être > 1000)

### Questions non reconnues
- Vérifier `keywords` dans `faq.json`
- Tester correspondance insensible à la casse
- Ajouter variantes dans `keywords` si besoin

### Transfert humain non envoyé
- Vérifier endpoint `/api/chat/transfer` (Network)
- Vérifier emails sortants backend
- Vérifier logs serveur `logs/chat-transfer.log`

---

## 📞 Escalade

### Quand transférer à un humain ?

- Question hors scope FAQ (ex: réclamation, problème de compte spécifique)
- Client mécontent/insatisfait après 2 réponses bot
- Demande de remboursement/annulation complexe
- Question légale/contractuelle

### Procédure transfert
1. Bot détecte besoin (pattern ou user触发 via bouton "Humain")
2. POST `/api/chat/transfer` avec sessionId + message
3. Email automatique à support@tennisbreakdown.com
4. Bot répond : "Un conseiller vous répond sous 2h"
5. Notifier utilisateur par email quand réponse humaine disponible

---

## 📝 Historique des versions

| Date | Version | Modifications |
|------|---------|---------------|
| 2025-02-13 | 1.0 | Version initiale - FAQ complète + config widget + guide intégration |

---

## 👥 Contacts

- **Support client** : support@tennisbreakdown.com
- **Technique** : dev@tennisbreakdown.com
- **Product owner** : sami@tennisbreakdown.com

---

*Dernière mise à jour : 13 février 2025*
