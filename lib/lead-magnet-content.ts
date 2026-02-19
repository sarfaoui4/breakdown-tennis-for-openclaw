// 📚 Contenu du lead magnet PDF
// Fichier: lib/lead-magnet-content.ts

export interface ErrorSection {
  numero: number;
  titre: string;
  description: string;
  consequences: string[];
  solutions: string[];
  exercice: string;
}

export const leadMagnetContent = {
  titre: "Les 10 erreurs techniques qui bloquent ta progression au tennis",
  sousTitre: "Guide complet pour joueurs débutants et intermédiaires",
  introduction: `
    Tu t'entraînes régulièrement mais tu as l'impression de stagner ? Tu fais des efforts mais tes résultats ne suivent pas ?

    Ce guide gratuit expose les 10 erreurs techniques les plus fréquentes chez les joueurs amateurs. Chaque erreur est accompagnée d'explications détaillées, de conséquences sur ton jeu, et surtout de solutions concrètes que tu peux appliquer dès ta prochaine session.

    Pas de théorie compliquée — juste ce qui fonctionne sur le court.
  `,

  sections: [
    {
      numero: 1,
      titre: "La prise de raquette trop serrée",
      description: "La plupart des joueurs amateurs serrent leur raquette comme si leur vie en dépendait, ce qui rigidifie le bras et réduit considérablement la puissance et le contrôle.",
      consequences: [
        "Perte de puissance (jusqu'à 40%)",
        "Fatigue accélérée de l'avant-bras",
        "Manque de sensation et de contrôle",
        "Risque accru de blessure (tennis elbow)"
      ],
      solutions: [
        "Maintenir une pression modérée ( Like holding a bird )",
        "Relâcher la prise pendant le follow-through",
        "S'entraîner avec un élastique pour ressentir la bonne tension"
      ],
      exercice: "Tiens ta raquette avec ton index et pouce seulement, fais 20 revers sans effort. Augmente progressivement la pression jusqu'à sentir le sweet spot."
    },
    {
      numero: 2,
      titre: "Le geste de revers incomplet",
      description: "Beaucoup croient que le revers est un simple mouvement de bras. En réalité, c'est une rotation complète du corps qui génère la puissance.",
      consequences: [
        "Faiblesse du revers",
        "Manque de profondeur dans les coups",
        "Déséquilibre après le coup",
        "Difficulté à gérer les balles hautes"
      ],
      solutions: [
        "Initier le mouvement avec les épaules, pas les bras",
        "Tourner complètement le thorax vers le filet",
        "Pivoter les pieds pour suivre la balle"
      ],
      exercice: "Place un objet au sol à 45°. frappe 20 revers en visant cet objet sans utiliser tes bras, uniquement la rotation du torse."
    },
    {
      numero: 3,
      titre: "Le placement des pieds sur le service",
      description: "Un stance incorrect au service réduit ton potentiel de vitesse et de précision, et peut causer des douleurs au dos.",
      consequences: [
        "Service faible et imprécis",
        "Contraintes dorsales",
        "Difficulté à varier les effets",
        "Équilibre perturbé"
      ],
      solutions: [
        "Aligner les pieds avec la cible souhaitée",
        "Adopter un stance légèrement ouvert pour plus de rotation",
        "Fléchir les genoux pour élastique"
      ],
      exercice: "Sans raquette, fais 30 services mimant le geste complet en te concentrant sur la position des pieds au point de contact."
    },
    {
      numero: 4,
      titre: "La疲倦 dans le bras pendant le coup droit",
      description: "Trop de joueurs frappent avec le bras seul, épuisant leurs ressources et limitant la durée de leurs matchs.",
      consequences: [
        "Fatigue précoce (dès le 2e set)",
        "Perte de précision en fin de match",
        "Risque de tendinite"
      ],
      solutions: [
        "Utiliser le poids du corps pour générer la puissance",
        "Transfert de poids pied avant/pied arrière",
        "Rotation complète des hanches"
      ],
      exercice: "Fais des coup droits en te tenant sur un seul pied (pied arrière) pour forcer l'engagement des jambes et du corps."
    },
    {
      numero: 5,
      titre: "Le manque de préparation à la volée",
      description: "Au filet, beaucoup attendent que la balle arrive avant de bouger, ce qui les rend lents et vulnérables.",
      consequences: [
        "Volées trop tardives",
        "Mauvaise position par rapport à la balle",
        "Passes ou amorties ratées"
      ],
      solutions: [
        "Préparation précoce (dès que l'adversaire frappe)",
        "Position Split-step (saut léger au moment du contact adverse)",
        "Avancer le pied opposé à la main de volée"
      ],
      exercice: "Avec un partenaire, travaille les volées en te forçant à être déjà en position split-step au moment où la balle part de l'autre côté."
    },
    {
      numero: 6,
      titre: "La mauvaise gestion du temps entre les points",
      description: "Perdre du temps inutilement entre les points entraîne une baisse de concentration et une récupération incomplète.",
      consequences: [
        "Perte de rythme",
        "Fatigue mentale",
        "Stress accumulé"
      ],
      solutions: [
        "Routine entre les points (15-20 secondes max)",
        "Respiration contrôlée",
        "Visualisation du prochain point"
      ],
      exercice: "Chronomètre-toi : 20 secondes max entre chaque point, même en entraînement. Crée une routine simple (serviette, bouteille, respiration)."
    },
    {
      numero: 7,
      titre: "Le trop-plein d'ambition sur les balles courtes",
      description: "Sur les balles courtes, trop de joueurs tentent le coup Winner immédiat, ce qui génère des fautes inutiles.",
      consequences: [
        "Points perdus sur balles faciles",
        "Déséquilibre",
        "Prise de risque non justifiée"
      ],
      solutions: [
        "Approcher la balle et contrôler d'abord",
        "Utiliser la balle courte pour prendre le temps",
        "Préparer le point suivant"
      ],
      exercice: "Sur 20 balles courtes, impose-toi de faire uniquement desisers profonds avant de pouvoir attaquer."
    },
    {
      numero: 8,
      titre: "L'absence de stratégie avant le service",
      description: "Servir sans planification (où, quel effet, quelle zone) réduit ton efficacité de 50% minimum.",
      consequences: [
        "Services prévisibles",
        "Points perdus bêtement",
        "Manque de variation"
      ],
      solutions: [
        "Décider AVANT le toss: zone, effet, vitesse",
        "Varier les zones (T, corps, large)",
        "Utiliser le service comme arme d'attaque"
      ],
      exercice: "Lors de chaque service, annonce à voix haute (ou pense) zones avant le toss: 'T, top spin, 80%'. Vérifie après si t'as exécuté."
    },
    {
      numero: 9,
      titre: "Le non-respect du splitting-step",
      description: "Le split-step (petit saut au moment du contact adverse) est souvent négligé, alors qu'il améliore la réaction de 0.2s environ.",
      consequences: [
        "Départs retardés",
        "Mauvaise position initiale",
        "Points perdus sur réaction lente"
      ],
      solutions: [
        "Saut léger au moment exact du contact adverse",
        "Pieds écartés largeur épaules",
        "Rester sur la plante des pieds"
      ],
      exercice: "Regarde la balle partir de la raquette adverse et saute simultanément. Répète 50 fois en fond de court jusqu'à automatisme."
    },
    {
      numero: 10,
      titre: "L'émotion non maîtrisée après une faute",
      description: "Laisser une faute affecter ton mental te fait perdre plusieurs points en cascade à cause de la perte de concentration.",
      consequences: [
        "Confiance érodée",
        "Répétition des erreurs",
        "Perte de contrôle du match"
      ],
      solutions: [
        "Technique du 'point passé' (oubli immédiat)",
        "Routine de récupération (grip change, respiration)",
        "Se concentrer sur le prochain point uniquement"
      ],
      exercice: "Après une faute, touche une partie précise de ta raquette (ex: le grip) et dis 'prochain point' à voix basse. Force-toi à sourire même si c'est faux."
    }
  ],

  conclusion: `
    Ces 10 erreurs sont toutes corrigeables avec un peu de conscience de soi et de pratique ciblée.

    Prends ce guide comme une feuille de route. Travailles-en une par semaine, et en 10 semaines tu auras transformé ton jeu.

    Et si tu veux une analyse personnalisée de tes matchs avec des recommandations sur mesure, Tennis Breakdown est là pour toi.
  `,

  callToAction: "Besoin d'une analyse vidéo personnalisée ? Découvre notre service d'analyse de matchs par des experts.",
  ctaUrl: "/auth/register",

  footer: "© 2026 Tennis Breakdown - tennis-breakdown.com - Guide gratuit distribué avec l'aimable autorisation de l'auteur."
};
