# Tickets de Développement – Tennis Breakdown

**Objectif** : Développer les fonctionnalités manquantes pour passer du MVP à la production.

---

## Priorisation

- **P0** : Critique (bloquant pour le lancement)
- **P1** : Important (améliore significativement l'expérience)
- **P2** : Secondaire (nice-to-have)

---

## Tickets

### P0 – Core Fonctionnel

#### T1 – Dashboard avec upload vidéo + Stripe Checkout
- **Description** : Page `/dashboard` protégée, avec formulaire d'upload (drag & drop) et sélection de l'offre (Match/Performance/Elite). Bouton "Payer" qui crée une session Stripe Checkout et redirige.
- **Livrable** : Dashboard fonctionnel, upload vers Supabase Storage, création commande Stripe.
- **Dépendances** : Supabase client configuré, Stripe client configuré, bucket Storage créé.

#### T2 – Route API Stripe – create-checkout-session
- **Description** : Endpoint `POST /api/checkout` qui reçoit l'ID de l'offre, crée une `CheckoutSession` Stripe avec les bons `price_id` et métadonnées (user_id, offre), et retourne l'URL de redirection.
- **Livrable** : endpoint API prêt, testable avec curl.
- **Dépendances** : Stripe secret key dans Vercel env.

#### T3 – Webhook Stripe – handler
- **Description** : Endpoint `POST /api/webhooks/stripe` qui écoute `checkout.session.completed`. Vérifie la signature, crée l'enregistrement dans la table `orders` (status=paid), et envoie un email de confirmation (optionnel).
- **Livrable** : webhook sécurisé, création d'order en BDD.
- **Dépendances** : Table `orders` dans Supabase, Stripe webhook secret.

#### T4 – Page "Mon Analyse" – `/analysis/[id]`
- **Description** : Page protégée qui affiche la vidéo commentée (player + overlay) et le rapport PDF (si généré). Accès réservé au propriétaire de la commande.
- **Livrable** : Page avec lecteur vidéo et zone de texte/téléchargement.
- **Dépendances** : Stockage des vidéos commentées (Supabase Storage), table `orders` avec url de la vidéo commentée.

#### T5 – Admin – upload commentaire expert
- **Description** : Page `/admin` (simple auth par mot de passe ou compte admin) pour téléverser la vidéo commentée et renseigner le texte d'accompagnement. Met à jour l'`order` et stocke la vidéo dans `comments/`.
- **Livrable** : Interface admin fonctionnelle.
- **Dépendances** : Storage bucket `comments`, table `orders` mise à jour.

#### T6 – Supabase – schéma de base de données
- **Description** : Créer les tables nécessaires : `orders` (id, user_id, video_url, price_id, status, comment_url, created_at, updated_at). Configurer RLS pour que chaque utilisateur ne voit que ses orders.
- **Livrable** : Schéma SQL, appliqué via Supabase Studio.
- **Dépendances** : Aucune, mais à faire avant T3/T4.

#### T7 – Supabase – buckets Storage
- **Description** : Créer deux buckets : `uploads` (vidéos des clients) et `comments` (vidéos commentées par l'expert). Configurer les politiques d'accès (upload auth, lecture owner).
- **Livrable** : Buckets créés, politiques RLS en place.
- **Dépendances** : Aucune.

#### T8 – Auth pages – `/login` et `/signup`
- **Description** : Pages d'authentification Supabase (email/mot de passe). Redirection vers dashboard si déjà connecté.
- **Livrable** : Pages fonctionnelles avec gestion d'erreur.
- **Dépendances** : Supabase client configuré.

---

### P1 – Améliorations significatives

#### T9 – Email transactionnel – confirmation de commande
- **Description** : Envoyer un email lorsque l'order passe en `paid` (via webhook). Utiliser Resend ou Postmark.
- **Livrable** : Email envoyé avec récap de la commande.

#### T10 – PDF – génération du rapport
- **Description** : Générer un PDF (avec PDFKit ou Puppeteer) contenant le rapport textuel + captures éventuelles, stocké dans `comments/` et lié à l'order.
- **Livrable** : PDF généré automatiquement.

#### T11 – Tests e2e – Playwright
- **Description** : Scénarios de test pour le parcours complet : landing → signup → dashboard upload → checkout → webhook → admin upload → analysis page.
- **Livrable** : Suite Playwright fonctionnelle.

---

### P2 – Optimisations

#### T12 – SEO – metadata complète
- **Description** : Ajouter Open Graph, Twitter cards, structured data sur toutes les pages.
- **Livrable** : Meilleur referencing.

#### T13 – Analytics – Plausible ou GA4
- **Description** : Intégrer un script analytics pour suivre les conversions.
- **Livrable** : Dashboard analytics opérationnel.

#### T14 – A/B testing – pricing
- **Description** : Tester différents prix/libellés avec un outil simple (ex: Vercel Analytics + redirections).
- **Livrable** : Données de conversion.

---

## Agents suggérés

- **Agent Frontend Dev** : T1, T4, T5, T8 (pages UI)
- **Agent Backend Dev** : T2, T3, T6, T7 (API + DB)
- **Agent DevOps** : T11, T13 (tests + monitoring)
- **Agent Copy/SEO** : T12 (contenu + SEO)

---

**Statut actuel** : Landing page ✅, Déploiement Vercel ✅, En attente du découpage et du lancement des agents.
