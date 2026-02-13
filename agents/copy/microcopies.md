# Micro-copies UI - Tennis Breakdown

**Document de référence pour toutes les copies d'interface utilisateur**

---

## Philosophie de copy

### Ton & Voice
- **Professionnel mais accessible** : Expertise sans jargon excessif
- **Encourageant et motivant** : Le tennis est un sport exigeant, on doit pousser l'utilisateur à progresser
- **Clair et concis** : Messages directs, pas de fioritures
- **Tonique** : Utiliser des verbes d'action, des formulations dynamiques
- **Positif** : Même les messages d'erreur doivent être constructifs

### Style
- **Français** (langue principale)
- **Formel mais chaleureux** : Tu / Vous selon le contexte (ici plutôt "vous" pour le B2C)
- **Genre neutre autant que possible** ou adaptation selon le public
- **Emojis parcimonieux** : uniquement pour ajouter de la personnalité (dashboard, confirmation)
- **Guillemets français** : « ... » préférés aux "..."

---

## Design System Contexte

- **Couleurs principales** : Noir (#0A0A0A) / Orange (#FF6B35)
- **Couleurs d'état** : Succès (Vert #10B981), Erreur (Rouge #EF4444), Avertissement (Orange #F59E0B), Info (Bleu #3B82F6)
- **Typographie** : Inter (polaire, lisible)
- **Échelle** : Hiérarchie claire (h1 → h2 → h3 → body → caption)

---

## 1. Navigation & En-têtes

### Nom de marque
- **Nom complet** : Tennis Breakdown
- **Slogan** : Analyse détaillée de vos matchs de tennis
- **Tagline (option)** : Votre progression, jeu par jeu

### Navigation principale
- **Tableau de bord** (Dashboard)
- **Historique** (History)
- **Analyses** (Analyses)
- **Upload vidéo** (Upload vidéo) – avec badge "Nouveau"
- **Joueurs** (Joueurs)
- **Statistiques** (Statistiques)

### Navigation secondaire
- **Support** (Support)
- **Documentation** (Documentation)

### Utilisateur (menu dropdown)
- **Profil** (Profil)
- **Paramètres** (Paramètres)
- **Se déconnecter** (Se déconnecter)

### Titres de page
- Dashboard : `Bienvenue, [Prénom] 👋` / `Votre espace Tennis Breakdown`
- Login : `Connexion`
- Register : `Inscription`
- Verify Email : `Vérifiez votre email`
- Payments : `Paiements & Analyses`
- Admin : `Tennis Breakdown Admin` / `Dashboard d'administration`

---

## 2. Messages système (toasts, notifications)

### Succès (couleur: vert)
- `Opération réussie !`
- `Votre analyse a été enregistrée.`
- `Paiement confirmé. Merci !`
- `Email de vérification envoyé.`
- `Profil mis à jour avec succès.`
- `Vidéo uploadée avec succès.`

### Erreur (couleur: rouge)
- `Une erreur est survenue.`
- `Échec de l'opération. Veuillez réessayer.`
- `Accès refusé.`
- `Email ou mot de passe incorrect.`
- `Votre session a expiré. Veuillez vous reconnecter.`
- `Paiement échoué. Vérifiez vos informations.`
- `Fichier trop volumineux. Maximum 500 MB.`
- `Format de vidéo non supporté. (MP4, MOV, AVI acceptés)`

### Avertissement (couleur: orange/ambre)
- `Attention : cette action est irréversible.`
- `Votre abonnement expire dans 3 jours.`
- `Votre analyse est en attente de paiement.`
- `Espace de stockage presque plein.`

### Info (couleur: bleu)
- `Nouvelle fonctionnalité disponible !`
- `Votre analyse sera traitée sous 24h.`
- `Un email de confirmation a été envoyé.`
- `Mise à jour en cours...`

### Chargement / En cours
- `Chargement en cours...`
- `Traitement en cours...`
- `Envoi en cours...`
- `Analyse en cours de traitement`
- `Connexion en cours...`
- `Inscription en cours...`
- `Initialisation du paiement...`

---

## 3. Boutons & CTAs (Call To Action)

### Primaires (orange, pleine opacité)
- `Commencer` (CTA principal - landing page)
- `Essayer gratuitement` (CTA secondaire - landing page)
- `Se connecter` (formulaire login)
- `S'inscrire` (formulaire register)
- `Uploader une vidéo` (dashboard)
- `Procéder au paiement` (checkout)
- `Voir mes analyses` (dashboard)
- `Voir tout l'historique` (historique)
- `Mettre à niveau` (sidebar upgrade)
- `Attribuer à Sami` (admin)
- `Publier l'analyse` (admin)

### Secondaires (bordure grise, fond transparent ou clair)
- `Voir tout` (liens d'action)
- `Analyser` (action sur un match)
- `Rejouer` (relecture vidéo)
- `Retour à l'accueil` (navigation)
- `Retour à la connexion` (navigation)

### Tertiaires / liens
- `← Retour` (retour arrière)
- `Voir la démo` (optionnel)
- `En savoir plus`
- `Lire la documentation`

### Groupes d'actions particulières
- `Voir` / `Éditer` / `Supprimer` (actions CRUD)
- `Télécharger` / `Partager`

---

## 4. Formulaires

### Labels génériques
- `Adresse email`
- `Mot de passe`
- `Confirmer le mot de passe`
- `Nom complet` (optionnel)
- `Prénom` / `Nom` (optionnel)
- `Type d'analyse` (Basic / Premium)
- ` Vidéo à analyser` (upload)

### Placeholders
- `votre@email.com`
- `••••••••`
- `Rechercher...`
- `Filtrer par statut...`

### Helpers / indices
- `Minimum 6 caractères`
- `En vous inscrivant, vous acceptez nos Conditions d'utilisation et notre Politique de confidentialité.`
- `Astuce : Vérifiez votre dossier de courrier indésirable si vous ne voyez pas l'email dans quelques minutes.`

### Validation (erreurs de champ)
- `L'email est requis.`
- `Le format d'email est invalide.`
- `Le mot de passe est requis.`
- `Les mots de passe ne correspondent pas.`
- `Le mot de passe doit contenir au moins 6 caractères.`
- `Ce champ est obligatoire.`
- `Veuillez accepter les conditions.`

---

## 5. Messages d'état & états vides

### Chargement
- `Chargement du dashboard...`
- `Récupération de vos analyses...`
- `Vos données sont en train de charger...`

### Aucune donnée
- `Aucune analyse trouvée`
- `Aucune commande pour le moment`
- `Aucun match enregistré`
- `Historique vide – commencez par votre première analyse !`
- `Aucune analyse en cours – bon moment pour en commander une !`

### Limite de quota
- `Analyses restantes` (statut sidebar)
- `5/10 analyses utilisées`
- `Renouvellement dans 7 jours`
- `Espace de stockage presque plein`

---

## 6. Tableaux & Listes

### En-têtes de colonnes (tableaux)
- `Analyse`
- `Joueurs`
- `Tournoi`
- `Statut`
- `Date`
- `Actions`
- `Score`
- `Durée`
- `Statistiques` (Aces, DF, BP)

### Filtres (tabs)
- `Toutes` (all)
- `En attente` (pending)
- `Terminées` (completed)
- `Échouées` (failed)

### Badges de statut (couleur de fond + texte)
- `Terminée` – vert, fond vert-20
- `En cours` / `En traitement` – bleu, fond bleu-20
- `En attente` – orange, fond orange-20
- `Échouée` – rouge, fond rouge-20
- `Payé` – vert, fond vert-100 / texte vert-800
- `En attente` (paiement) – jaune, fond jaune-100 / texte jaune-800
- `Remboursé` – rouge, fond rouge-100 / texte rouge-800
- `Basique` – vert, fond vert-100 / texte vert-800
- `Premium` – violet, fond violet-100 / texte violet-800

---

## 7. Confirmations & Alertes (modales)

### Suppression
- `Êtes-vous sûr de vouloir supprimer cet élément ?`
- `Cette action est irréversible.`
- Boutons : `Annuler` / `Supprimer`

### Déconnexion
- `Voulez-vous vraiment vous déconnecter ?`
- Boutons : `Rester connecté` / `Se déconnecter`

### Paiement
- `Confirmer le paiement de XX,XX € ?`
- `Vous serez redirigé vers Stripe.`
- Boutons : `Annuler` / `Confirmer le paiement`

### Upload vidéo
- `Uploader « nom_fichier.mp4 » ?`
- `Temps de traitement estimé : 24h (Basique) ou 12h (Premium)`
- Boutons : `Annuler` / `Uploader`

---

## 8. Tooltips & Aides contextuelles

- `Cliquez pour accéder à votre tableau de bord`
- `Consultez l'historique de vos analyses`
- `Déposez votre vidéo ici ou cliquez pour parcourir`
- `Formats acceptés : MP4, MOV, AVI (max 500 MB)`
- `Mode silencieux lors de l'upload`
- `Prix par analyse`
- `Délai de traitement moyen`

---

## 9. Footer & Mention légales

- `© 2026 Tennis Breakdown. Tous droits réservés.`
- `Service d'analyse vidéo de tennis professionnel`
- `Mentions légales` / `Politique de confidentialité` / `Conditions d'utilisation`
- `Contact : support@tennisbreakdown.com`

---

## 10. Erreurs spécifiques

### Connexion / Auth
- `Email ou mot de passe incorrect.`
- `Compte non vérifié. Vérifiez votre email.`
- `Trop de tentatives. Réessayez dans quelques minutes.`
- `Session expirée. Veuillez vous reconnecter.`
- `Compte désactivé. Contactez le support.`

### Upload vidéo
- `Échec de l'upload. Vérifiez votre connexion.`
- `Fichier non trouvé.`
- `Type de fichier non autorisé.`
- `La taille du fichier dépasse la limite autorisée.`
- `Upload en cours... XX%`

### Paiement
- `Carte refusée. Vérifiez vos informations.`
- `Paiement annulé par l'utilisateur.`
- `Erreur Stripe : [détail technique]`
- `Commande non trouvée.`

### API / Serveur
- `Serveur indisponible. Veuillez réessayer plus tard.`
- `Timeout. L'opération prend trop de temps.`
- `Service temporairement indisponible.`

---

## 11. Texte incitatif (empty states, onboarding)

### Dashboard vide (nouvel utilisateur)
- `Bienvenue dans votre espace Tennis Breakdown !`
- `Commencez par uploader votre première vidéo pour recevoir une analyse experte.`
- `Votre première analyse vous attend !`

### Historique vide
- `Aucune analyse pour le moment.`
- `Votre historique apparaîtra ici une fois vos analyses terminées.`
- `C'est le moment idéal pour analyser votre dernier match !`

### Page pricing (landing)
- *Voir section 3 – CTAs pour les boutons*

---

## 12. Texte des emails (schémas)

### Confirmation de commande
```
Sujet : Commande confirmée - Tennis Breakdown

Bonjour [Prénom],

Votre analyse [Basique/Premium] a été commandée avec succès.

Détails :
- Match : [Joueur1] vs [Joueur2]
- Prix : XX,XX €
- Délai estimé : 24h (Basique) ou 12h (Premium)

Vous recevrez un email lorsque l'analyse sera prête.

L'équipe Tennis Breakdown
```

### Analyse prête
```
Sujet : Votre analyse est prête !

Bonjour [Prénom],

Votre analyse est maintenant disponible !

Consultez-la dès maintenant dans votre dashboard :
[Lien]

Bonne progression !
```

### Rappel de renouvellement
```
Sujet : Votre forfait d'analyses arrive à échéance

Bonjour [Prénom],

Votre crédit d'analyses sera bientôt épuisé (dans 7 jours).

Renouvelez maintenant pour continuer à recevoir des analyses de qualité.
```

---

## 13. Règles de cohérence

### Majuscules
- **Titres** : Capitaliser chaque mot (Title Case) sauf articles courts
- **Boutons** : Phrase en minuscules sauf première lettre
- **Messages** : Phrase en minuscules, ponctuation finale

### Ponctuation
- Toujours terminer les phrases par un point (sauf boutons courts)
- Point d'exclamation seulement pour les messages positifs/succès (avec modération)
- Pas de point sur les labels de formulaire

### Nombres
- Format français : `19,99€` (virgule comme séparateur décimal)
- Espace insécable entre nombre et devise : `19,99€` (pas obligatoire en web)
- Pour les dates : `13 févr. 2026` ou `13/02/2026`

### Genre
- Privilégier le neutre ou le masculin générique (ex: « utilisateur » inclut toutes les personnes)
- Quand c'est possible, formuler à l'infinitif ou au passif

---

## 14. Checklist d'implémentation

- [ ] Tous les boutons ont un texte clair et actionnable
- [ ] Les messages d'erreur expliquent ce qui s'est passé et comment corriger
- [ ] Les placeholders sont informatifs et pas redondants
- [ ] Les états vides sont engageants et orientés vers l'action
- [ ] Les confirmations préviennent clairement des conséquences
- [ ] Les tooltips sont courts (< 100 caractères)
- [ ] La hiérarchie typographique est respectée
- [ ] Tonalité uniforme sur toute l'application
- [ ] Utilisation cohérente des couleurs d'état
- [ ] Accessibilité : contrastes vérés, labels ARIA

---

## 15. A/B Testing Suggestions (optionnel)

- **CTA principal** : `Essayer gratuitement` vs `Commencer`
- **Pricing** : `49,99€` vs `50€` (arrondi psychologique)
- **Upload** : `Uploader une vidéo` vs `Envoyer ma vidéo` (plus user-friendly)
- **Confirmation email** : `Vérifiez votre email` vs `Activez votre compte`

---

## Notes de version

**v1.0** – 2026-02-13 – Version initiale basée sur l'audit des composants existants (dashboard, auth, payments, admin).

---

*Document maintenu par l'équipe Copy – Tennis Breakdown*
