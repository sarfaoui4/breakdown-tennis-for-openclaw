# Intégration Chat Widget - Guide Rapide

## Fichiers produits

1. **`faq.md`** : Base de connaissances complète avec questions/réponses
2. **`chat-widget-config.md`** : Spécifications UI/UX et flux conversationnel
3. **Ce fichier** : Instructions d'intégration

---

## Étape 1 : Copier les assets

```bash
# Dans votre projet frontend
cp tennis-breakdown/agents/support/faq.json ./public/data/  # à générer
```

### Conversion de faq.md → JSON structuré

Créer un script (Node.js/Python) pour parser `faq.md` et générer :

```json
{
  "categories": [
    {
      "id": "upload",
      "name": "Upload vidéo",
      "icon": "📤",
      "questions": [
        {
          "id": "upload_procedure",
          "question": "Comment uploader ma vidéo ?",
          "answer": "Réponse complète ici...",
          "keywords": ["upload", "envoyer", "vidéo", "fichier"]
        },
        ...
      ]
    },
    ...
  ],
  "welcome": "Bonjour ! ...",
  "menu": ["upload", "payment", "delays", "technical", "general"]
}
```

---

## Étape 2 : Intégration React/Vue/Angular (exemple React)

```jsx
// ChatWidget.jsx
import { useState } from 'react';
import faqData from '../data/faq.json';

const ChatWidget = ({ userId = null }) => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: faqData.welcome, timestamp: Date.now() }
  ]);
  const [currentMenu, setCurrentMenu] = useState('main');

  // Fonction pour afficher sous-menu catégorie
  const showCategory = (catId) => {
    const category = faqData.categories.find(c => c.id === catId);
    const menuText = category.questions.map(q => `[${q.question}]`).join('\n');
    setMessages(prev => [...prev, {
      from: 'bot',
      text: `${category.icon} **${category.name}**\n\n${menuText}\n\n[🔙 Retour]`,
      timestamp: Date.now()
    }]);
    setCurrentMenu(catId);
  };

  // Détection clic sur question dans le texte
  const handleMessageClick = (text) => {
    // Chercher correspondance dans FAQ
    for (const cat of faqData.categories) {
      const match = cat.questions.find(q => text.includes(q.question));
      if (match) {
        setMessages(prev => [...prev, {
          from: 'bot',
          text: match.answer,
          timestamp: Date.now()
        }]);
        return;
      }
    }
    // Fallback : pas trouvé
    setMessages(prev => [...prev, {
      from: 'bot',
      text: "Je n'ai pas cette réponse. Je transfère à un conseiller humain.",
      timestamp: Date.now()
    }]);
    triggerHumanTransfer();
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {open ? (
        <div className="w-80 h-96 bg-white shadow-2xl rounded-lg flex flex-col">
          {/* Header */}
          <div className="bg-green-600 text-white p-3 rounded-t-lg flex justify-between">
            <span>🎾 Tennis Breakdown</span>
            <button onClick={() => setOpen(false)}>×</button>
          </div>

          {/* Corps messages */}
          <div className="flex-1 overflow-y-auto p-3">
            {messages.map((msg, idx) => (
              <div key={idx} className={`mb-2 ${msg.from === 'user' ? 'text-right' : ''}`}>
                <div className={`inline-block p-2 rounded ${msg.from === 'user' ? 'bg-blue-100' : 'bg-gray-100'}`}
                     onClick={() => msg.from === 'bot' && handleMessageClick(msg.text)}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="p-3 border-t">
            <div className="flex gap-1 mb-2">
              {currentMenu === 'main' && faqData.menu.map(catId => (
                <button key={catId} onClick={() => showCategory(catId)} className="text-xs bg-gray-200 px-2 py-1 rounded">
                  {faqData.categories.find(c => c.id === catId).icon}
                </button>
              ))}
            </div>
            <input type="text" placeholder="Écrivez un message..." className="w-full border p-2 rounded" />
          </div>
        </div>
      ) : (
        <button onClick={() => setOpen(true)} className="bg-green-600 text-white p-4 rounded-full shadow-lg">
          🎾
        </button>
      )}
    </div>
  );
};
```

---

## Étape 3 : Backend endpoints

### GET `/api/chat/faq`
Retourne le JSON complet `faq.json`

### POST `/api/chat/message`
```json
{
  "sessionId": "uuid",
  "userId": "user123",
  "message": "Comment uploader ?"
}
```
Réponse :
```json
{
  "found": true,
  "answer": "Réponse complète...",
  "category": "upload",
  "questionId": "upload_procedure"
}
```
Si `found: false` → notification pour transfert humain

### POST `/api/chat/transfer`
```json
{
  "sessionId": "uuid",
  "userId": "user123",
  "reason": "hors_scope",
  "userMessage": " texte"
}
```
→ Envoi email à support@tennisbreakdown.com avec historique chat
→ Réponse : `{ "transferId": "t123", "eta": "2h" }`

---

## Étape 4 : Personnalisation avec données utilisateur

Si l'utilisateur est connecté :

```js
const user = await fetch('/api/me').then(r => r.json());

const welcomeMsg = user
  ? `Bonjour ${user.prenom} ! 👋\nComment puis-je vous aider ?`
  : faqData.welcome;

// Ajouter contexte dans messages système
const context = {
  userId: user.id,
  plan: user.abonnement, // "mensuel", "pack", etc.
  analysesCount: user.totalAnalyses,
  dernierUpload: user.derniereAnalyse?.date
};
```

---

## Étape 5 : Tests

### Checklist
- [ ] Widget visible sur toutes les pages
- [ ] Ouverture/fermeture fonctionne
- [ ] Tous les boutons de menu répondent
- [ ] Clic sur question → affiche réponse
- [ ] Format markdown (gras, listes) rendu
- [ ] Mobile responsive (taille écran réduite)
- [ ] Scroll automatique vers nouveau message
- [ ] Transfert humain envoie bien notification
- [ ] Sessions persiste après refresh (localStorage)

### Tests utilisateur
1. Ouvrir widget, cliquer chaque catégorie
2. Vérifier chaque question dans chaque sous-menu
3. Tester message libre non FAQ → transfert
4. Vérifier que liens "Espace client" pointent correctement
5. Mobile : tester gestes (scroll, tap)

---

## Étape 6 : Déploiement

```bash
# Build
npm run build

# Vérifier que faq.json est inclus
ls dist/data/faq.json

# Déployer
git add .
git commit -m "feat: intégration chat widget support"
git push origin main
```

---

## Monitoring post-déploiement

### Métriques à suivre
- Widget ouvert / jour (Google Analytics event `chat_widget_open`)
- Catégorie cliquée (event `chat_category_{id}`)
- Question cliquée (event `chat_question_{id}`)
- Transfert humain déclenché (event `chat_transfer`)
- Taux résolution sans humain (questions FAQ / total) > 85%

### Logs serveur (pour debug)
- Fichier `logs/chat-transfer.log`
- Format : `timestamp | sessionId | userId | reason | question`

---

## Support / FAQ déploiement

**Q: Le widget ne s'affiche pas**
→ Vérifier bundle includes `faq.json`, Z-index CSS, pas de JS error console

**Q: Les clics sur questions ne marchent pas**
→ Vérifier `handleMessageClick` détecte bien le texte, parser markdown

**Q: Transfert humain ne reçoit pas email**
→ Vérifier endpoint `/api/chat/transfer` et emails sortants (SendGrid/Mailgun)

**Q: Widget lent à charger**
→ Précharger `faq.json` en `<head>`, lazy-load composant

---

## Contacts

- Support technique déploiement : dev@tennisbreakdown.com
- Questions sur le contenu FAQ : support@tennisbreakdown.com (Sami)
- Bug reports : GitHub Issues (repo interne)
