# Configuration Chat Widget - Tennis Breakdown

## Architecture

### Positionnement
- Fixé en bas à droite de toutes les pages
- Visible sur desktop et mobile
- Icône Tennis Breakdown + bulle de notification

### État initial (fermé)
```
┌──────────────────┐
│  🎾 TENNIS       │
│  BREAKDOWN       │
│                  │
│  ◯ Assistance   │
│    en ligne      │
└──────────────────┘
```

Clic → ouvre la fenêtre de chat

---

## Flux d'ouverture

### Étape 1 : Message de bienvenue (immédiat)
```
Bot: Bonjour ! 👋 Bienvenue chez Tennis Breakdown.
     Je suis votre assistant virtuel.
     Comment puis-je vous aider ?

     ⬇️ Menu rapide ⬇️
     [📤 Upload vidéo]
     [💳 Paiement & tarifs]
     [⏱️ Délais analyse]
     [🔧 Support technique]
     [❓ Autres questions]
```

### Étape 2 : Clique sur catégorie → sous-menu dynamique

**Exemple : Clic sur "📤 Upload vidéo"**
```
Bot: 📤 **Upload vidéo**
     Que souhaitez-vous savoir ?

     [📝 Procédure complète]
     [📹 Formats acceptés]
     [⏱️ Durée recommandée]
     [❌ Problème upload]
     [↩️ Annuler/modifier]
     [🔙 Retour menu]
```

**Exemple : Clic sur "💳 Paiement & tarifs"**
```
Bot: 💳 **Paiement et tarifs**
     Choisissez une question :

     [💰 Liste des tarifs]
     [💳 Moyens de paiement]
     [🔒 Sécurité paiement]
     [📄 Demande facture]
     [💸 Remboursement]
     [⚠️ Frais cachés]
     [🔙 Retour menu]
```

---

## Navigation avancée

### Bouton "Voir toutes les questions" (FAQ complète)
Ouvre une fenêtre avec catégories scrollables :
```
📋 FAQ COMPLÈTE

1️⃣ UPLOAD VIDÉO
   • Comment uploader ?
   • Formats acceptés ?
   • Durée recommandée ?
   • Upload échoué ?
   • Annuler/modifier ?

2️⃣ PAIEMENT
   • Quels tarifs ?
   • Moyens de paiement ?
   • Sécurité ?
   • Facture ?
   • Remboursement ?
   • Frais cachés ?

3️⃣ DÉLAIS
   • Délai standard ?
   • Suivi analyse ?
   • Retard ?
   • Accélérer ?
   • Heure livraison ?

4️⃣ TECHNIQUE
   • Problème connexion
   • Mot de passe oublié
   • Historique analyses
   • Partager analyse
   • Qualité vidéo
   • Supprimer compte

5️⃣ GÉNÉRAL
   • Qu'est-ce que TB ?
   • Surfaces ?
   • Multi-joueurs ?
   • Débutants ?
   • Utilisation vidéos
   • Analystes pros ?
```

Clic sur une question → réponse directe

---

## Réponses chat

### Format standard
```
[Réponse courte 2-3 phrases max]

• Détail 1
• Détail 2
• Détail 3 si besoin

[🔗 Lien utile : "Aller à mon espace client"]
[🔄 Autre question ?]
```

### Exemple complet (upload vidéo)
```
Bot: Pour uploader votre vidéo :

1. Connectez-vous à votre espace client
2. Cliquez sur "Mes Analyses" > "Nouvelle"
3. Glissez-déposez votre fichier ou cliquez pour parcourir

⚠️ Formats acceptés : MP4, MOV, AVI
⚠️ Taille max : 2GB
⚠️ Durée idéale : 30-45 min par set

Vidéo trop lourde ? Utilisez l'outil de compression intégré ( étape 3).

🔗 Aller à l'upload

Besoin d'aide avec un problème spécifique ?
```

---

## Éléments d'interface

### Header (fenêtre chat)
```
🎾 Tennis Breakdown     ┌─┐
                        │×│  Fermer
                        └─┘
[Statut: ● En ligne]
```

### Footer (actions permanentes)
```
┌─────────────────────────────────────────┐
│ 💬 Écrire un message...                │
│                                         │
│ [📋 Toute la FAQ] [👩‍💼 Humain] [🔄↻] │
└─────────────────────────────────────────┘
```

- **📋 Toute la FAQ** : ouvre l'overlay FAQ complète
- **👩‍💼 Humain** : demande de transfert à conseiller
- **🔄↻** : reload/recommencer

---

## Transitions et états

### Chargement
```
Bot: Un instant, je vérifie...
     [||||||   ]
```

### Pas de réponse trouvée
```
Bot:Je n'ai pas trouvé de réponse exacte
    à votre question.

    Essayez de reformuler ou consultez
    notre FAQ complète.

    [📋 Voir FAQ] [👩‍💼 Parler à un humain]
```

### Transfert à humain
```
Bot:Je transfère votre demande à un
    conseiller humain.

    📧 Un email de confirmation a été
       envoyé.

    ⏱️ Délai de réponse : < 2h ouvrées

    [❌ Annuler transfert]
```

---

## Gestion des variables

### Personnalisation utilisateur connecté
```
Si connecté :
Bot: Bonjour [Prénom] ! 👋

Si non connecté :
Bot: Bonjour ! 👋
```

### Contextualisation selon page visitée
- Sur page tarifs : "Je vois que vous consultez nos tarifs..."
- Sur page upload : "Vous avez besoin d'aide pour uploader ?"
- Sur page analyse : "Votre analyse est-elle prête ?"

---

## Comportements avancés

### Timeout inactivité
- 5 minutes sans interaction → "Vous êtes toujours là ?"
- 10 minutes → fermeture automatique du chat
- historique conservé si on rouvre

### Badge de notification
- Nouveau message humain → bulle rouge avec chiffre
- Nouvelle analyse prête → "Votre analyse est disponible ! 📊"
- Promotion → badge vert avec texte

### Défilement automatique
- Nouvelle réponse → scroll vers bas
- Bouton "↑ Remonter" apparaît après 3 messages

---

## Données à transmettre au backend

### Nouvelle conversation
```json
{
  "sessionId": "uuid",
  "userId": "user123 ou null",
  "page": "/upload|/tarifs|/analyse",
  "referrer": "source",
  "timestamp": "2025-02-13T17:39:00Z",
  "categoryClicked": "upload|paiement|délais|etc",
  "questionSelected": "id_question"
}
```

### Message utilisateur
```json
{
  "sessionId": "uuid",
  "userId": "user123 ou null",
  "message": " texte libre",
  "type": "text|file",
  "timestamp": "2025-02-13T17:40:00Z"
}
```

### Transfert humain
```json
{
  "sessionId": "uuid",
  "userId": "user123 ou null",
  "transferReason": "question_hors_scope|insatisfaction|complexe",
  "userMessage": "dernier message",
  "chatHistory": ["array messages"],
  "priority": "normal|urgent"
}
```

---

## Intégration technique

### HTML structure
```html
<div id="tb-chat-widget" class="fixed bottom-4 right-4 z-50">
  <!-- Bouton toggle -->
  <button id="tb-toggle" class="bg-green-600 text-white p-3 rounded-full shadow-lg">
    🎾 Tennis Breakdown
  </button>

  <!-- Fenêtre chat (cachée par défaut) -->
  <div id="tb-chat-window" class="hidden ...">
    <!-- Header avec statut -->
    <!-- Corps messages -->
    <!-- Footer avec input + boutons FAQ/Humain -->
  </div>
</div>
```

### API endpoints
- `GET /api/chat/faq` → toutes les questions/réponses
- `POST /api/chat/message` → envoi message utilisateur (fallback si pas de correspondance FAQ)
- `POST /api/chat/transfer` → demande transfert humain
- `WS /ws/chat/:sessionId` → messagerie temps réel (pour chat avec humain)

### Stockage local
- `localStorage.tbChatHistory` : historique session
- `localStorage.tbChatClosed` : fenêtre fermée (bool)
- `localStorage.tbLastVisit` : dernière visite

---

## A/B tests à prévoir

1. **Message d'accueil** : version courte vs détaillée
2. **Couleur widget** : vert TB vs bleu neutre
3. **Placement** : bas droite vs bas gauche
4. **Prompt FAQ** : bouton vs suggestion automatique après 10s

---

## Maintenance

### Ajouter nouvelle question
1. Modifier `faq.md` (section correspondante)
2. Ajouter entrée dans sous-menu catégorie
3. Tester en préprod

### Statistiques à collecter
- Nombre d'ouvertures widget / jour
- Questions les plus posées
- Taux transfert humain (< 15% objectif)
- Temps moyen résolution chat
- Satisfaction CSAT chat

### Roadmap
- [ ] Intégrer live chat avec agents réels
- [ ] Menu contextuel selon page
- [ ] Notifications push analyse prête
- [ ] Suggestions automatiques IA
