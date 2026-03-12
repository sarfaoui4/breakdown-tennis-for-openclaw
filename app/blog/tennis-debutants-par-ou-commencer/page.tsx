import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Tennis pour débutants : par où commencer ? Guide complet | Tennis Breakdown",
  description: "Vous commencez le tennis ? Ce guide pas-à-pas vous explique tout : équipement minimum, règles de base, premier cours, erreurs à éviter et comment progresser vite.",
  keywords: ["tennis débutant", "commencer tennis", "premier pas tennis", "équipement tennis débutant", "règles tennis simples", "progresser tennis débutant"],
}

export default function ArticleTennisDebutants() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-white">
      {/* Navigation */}
      <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 w-10 h-10 rounded-lg flex items-center justify-center">
              <span className="font-bold">🎾</span>
            </div>
            <a href="/" className="text-xl font-bold">Tennis Breakdown</a>
          </div>
          <a href="/pricing" className="px-4 py-2 bg-orange-500 text-white hover:bg-orange-600 rounded-lg font-medium transition-colors">
            Voir les tarifs
          </a>
        </div>
      </nav>

      {/* Article */}
      <main className="max-w-3xl mx-auto px-6 py-16">
        <article className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-4">Tennis pour débutants : par où commencer ?</h1>
          <p className="text-gray-400 mb-8">
            Mis à jour le 12 mars 2025 • 10 min de lecture
          </p>

          <p className="mb-6">
            Vous avez décidé de vous mettre au tennis ? Félicitations ! C'est un sport fantastique qui offre 
            une excellente condition physique, des rencontres, et un plaisir de jeu qui dure toute une vie.
          </p>
          <p className="mb-6">
            Mais par où commencer ? Équipement, règles, premier cours, progression... Ce guide complet vous 
            accompagne pas à pas pour démarrer sereusement et éviter les erreurs des débutants.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">1. L'équipement minimum pour débuter</h2>
          <p className="mb-6">
            Inutile de dépenser une fortune au début. Voici le strict minimum :
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">🎾 Une raquette adaptée</h3>
          <p className="mb-6">
            Voir notre article dédié <a href="/blog/choisir-raquette-guide-2025" className="text-orange-400 hover:underline">"Comment choisir sa raquette"</a> pour les détails.
            En résumé pour un débutant :
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Poids :</strong> 260-280g</li>
            <li><strong>Tamis :</strong> 105-115 cm² (grand sweet spot)</li>
            <li><strong>Plan de cordage :</strong> 16x19 (facilite la puissance)</li>
            <li><strong>Modèle économique :</strong> Wilson Ultra 108, Babolat Pure Drive Lite, Head Ti.S6+</li>
          </ul>
          <p className="mb-6">
            <strong>Budget :</strong> 80-150€ d'occasion ou 120-180€ neuf. Pas besoin de plus pour commencer.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">👟 Des chaussures de tennis</h3>
          <p className="mb-6">
            Les chaussures de tennis ont une semelle spécifique (non-marking) et un bon support latéral. 
            Vous pouvez trouver des modèles entry-level à partir de 60-80€. Pour votre premier mois, 
            des baskets souples et non-abrasives peuvent suffire (à vérifier avec votre club).
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">👕 Tenue confortable</h3>
          <p className="mb-6">
            Un T-shirt technique, un short/jupette, et des chaussettes adaptées. Pas besoin de marque, 
            privilégiez le confort et la respirabilité.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">🎒 Sac et accessoires</h3>
          <p className="mb-6">
            Un sac pour transporter votre raquette, 2-3 balles (premier prix), une bouteille d'eau, une serviette.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">2. Les règles du tennis en 5 minutes</h2>
          <p className="mb-6">
            Pas besoin de tout savoir pour commencer. Voici l'essentiel :
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">🎯 Objectif</h3>
          <p className="mb-6">
            Gagner des points en frappant la balle de manière à ce que votre adversaire ne puisse pas la renvoyer 
            dans le court. Un point se gagne généralement en 1 à 4 coups.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">📊 Score</h3>
          <p className="mb-6">
            <strong>Un jeu :</strong> 0, 15, 30, 40, jeu. À 40-40 c'est l'égalité (deuce). Pour gagner un jeu, 
            il faut 2 points d'avance (ex:advantage puis jeu).<br/>
            <strong>Un set :</strong> premier à 6 jeux, avec 2 jeux d'avance (6-4, 7-5, ou tie-break à 6-6).<br/>
            <strong>Un match :</strong> meilleur de 3 sets (femmes) ou 5 sets (hommes en Grand Chelem).
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">⚖️ Règles de base à respecter</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>La balle doit rebondir une fois dans le court adverse avant d'être renvoyée.</li>
            <li>Si la balle tape la ligne, elle est dedans.</li>
            <li>Si vous touchez la balle avec votre corps/raquette avant qu'elle ne rebondisse, c'est une faute.</li>
            <li>En simple, vous jouez sur tout le court (les doubles utilisent des couloirs extérieurs).</li>
            <li>Le serveur change à chaque point (alternance).</li>
          </ul>

          <p className="mb-6">
            Ne vous stressez pas avec les règles dès le début. Vous les apprendrez naturellement en jouant. 
            L'important est de s'amuser !
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">3. Premier cours : à quoi s'attendre ?</h2>
          <p className="mb-6">
            Si vous prenez un cours avec un coach (fortement recommandé), voici le déroulement typique :
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">Session 1 (découverte)</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Prise en main de la raquette (grip, placement doigts)</li>
            <li>Exercices de frappe avec des balles douces (mousses) contre un mur ou avec le coach</li>
            <li>Déplacement : apprendre à se déplacer latéralement</li>
            <li>Premiers échanges sur le court (très court distance)</li>
            <li>Rappels des règles de base</li>
          </ul>

          <h3 className="text-xl font-bold mt-8 mb-3">Les 2-3 premières semaines</h3>
          <p className="mb-6">
            Vous allez travailler :
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Le fond de main (grip)</strong> : continental pour le service/volée, eastern/western pour le fond de court.</li>
            <li><strong>La position de base</strong> : prêt, raquette devant, poids du corps sur la balle des pieds.</li>
            <li><strong>Le split-step</strong> : petit saut au moment où l'adversaire frappe pour être réactif.</li>
            <li><strong>Les fondamentaux</strong> : revers, coup droit, service (très basique d'abord).</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">4. Erreurs à éviter absolument (débutants)</h2>

          <h3 className="text-xl font-bold mt-8 mb-3">❌ Prendre une raquette trop lourde ou trop technique</h3>
          <p className="mb-6">
            C'est l'erreur n°1. Une raquette inadaptée vous donne de mauvaises sensations et vous décourage. 
            Mieux vaut une raquette pardonner qui vous permet de faire des coups corrects, qu'une raquette de pro 
            qui vous fait rater tout.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">❌ Chercher la puissance avant la technique</h3>
          <p className="mb-6">
            Beaucoup de débutants veulent frapper fort tout de suite. Résultat : ils crispent le bras, 
            perdent le contrôle, et développent de mauvais gestes. Priorisez la régularité, le placement, 
            et la fluidité. La puissance viendra ensuite naturellement.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">❌ Ne pas se filmmer</h3>
          <p className="mb-6">
            C'est dommage ! Vous pensez faire un geste correct, mais la vidéo révèle des défauts énormes. 
            Dès votre 2e-3e séance, filmez-vous de côté pour 5 minutes. Corrigez ce que vous voyez. 
            Répétez. Notre service d'analyse vidéo peut vous aider à identifier rapidement les points à corriger.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">❌ Jouer trop vite en match</h3>
          <p className="mb-6">
            Les débutants veulent jouer des matchs tout de suite, et c'est bien ! Mais attention à ne pas 
            sauter les étapes. Jouez d'abord des points d'entraînement (on se renvoie la balle tranquillement), 
            puis des jeux sans stress, avant de chercher la compétition. La technique doit être installée.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">❌ Négliger le placement des pieds</h3>
          <p className="mb-6">
            Beaucoup pensent que c'est le bras qui fait le coup. C'est FAUX. C'est le placement des pieds et 
            la rotation du corps qui génèrent la puissance. Travaillez vos déplacements avec des exercices 
            spécifiques (cône, shadow swings).
          </p>

          <div className="bg-orange-500/10 border border-orange-500 rounded-xl p-6 my-8">
            <h3 className="text-xl font-bold mb-3">🎥 Besoin d'un regard extérieur ?</h3>
            <p className="mb-4">
              Filmez votre séance et recevez une analyse détaillée avec corrections étape par étape. 
              Idéal pour démarrer sur de bonnes bases et éviter les mauvaises habitudes.
            </p>
            <a href="/pricing" className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
              Voir nos formules
            </a>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">5. Comment progresser rapidement</h2>

          <h3 className="text-xl font-bold mt-8 mb-3">📅 Fréquence des séances</h3>
          <p className="mb-6">
            Minimum 1x par semaine, idéalement 2x. La régularité est plus importante que l'intensité. 
            2 séances de 1h sont bien mieux qu'une seule séance de 3h.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">🎯 Structurer une séance</h3>
          <p className="mb-6">
            <strong>Échauffement (10')</strong> : footing léger, étirements dynamiques, shadow swings.<br/>
            <strong>Fondamentaux (30')</strong> : travail d'un ou deux coups spécifiques avec le coach ou contre un mur.<br/>
            <strong>Jeu / match (15')</strong> : mettre en application, prendre du plaisir.<br/>
            <strong>Rangements / étirements (5')</strong>
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">📹 Se filmer régulièrement</h3>
          <p className="mb-6">
            Toutes les 2-3 semaines, filmez-vous en situation réelle (échanges, service). Comparez avec vos vidéos précédentes 
            pour constater la progression. C'est extrêmement motivant et instructif.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">🧠 Lire/w regarder du contenu tennis</h3>
          <p className="mb-6">
            Comprendre la technique, la tactique, le mental. Suivez des chaînes YouTube spécialisées, 
            lisez des articles comme celui-ci. La théorie accélère l'apprentissage pratique.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">6. Trouver un club / des partenaires</h2>
          <p className="mb-6">
            Recherchez un club près de chez vous avec une ambiance débutante-friendly. Beaucoup proposent 
            des cours collectifs à prix abordable (25-40€/mois). C'est le meilleur moyen de rencontrer 
            des partenaires de votre niveau et progresser ensemble.
          </p>
          <p className="mb-6">
            Sinon, des applications comme "Playtomic" permettent de réserver des courts et trouver des joueurs 
            près de chez vous.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">7. Timeline de progression réaliste</h2>
          <p className="mb-6">
            <strong>1er mois</strong> : vous apprenez à tenir la raquette, à frapper la balle (pas toujours au centre), à vous déplacer. Échanges de 3-4 coups possibles.<br/>
            <strong>3-6 mois</strong> : échanges réguliers de 10-15 coups, service en cours d'apprentissage, premiers points tactiques. Vous pouvez jouer un match complet (sets).<br/>
            <strong>1 an</strong> : technique installée, matchs réguliers, classement probable aux alentours de 30/5 à 30/3 selon l'investissement.<br/>
            <strong>2 ans+</strong> : progression continue, peut-être 30/1 ou 5/6, jeu varié.
          </p>
          <p className="mb-6">
            Chaque individu avance à son rythme. Ne vous comparez pas aux autres,comparez-vous à vous-même d'il y a 
            1 mois, 3 mois, 1 an. La seule compétition valable est contre votre ancien vous.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">Conclusion</h2>
          <p className="mb-6">
            Commencer le tennis est simple : équipement basique, règles essentielles, premier cours. Le plus difficile 
            est de rester régulier et motivé sur la durée. Fixez-vous des objectifs petits mais atteignables, 
            entourez-vous de joueurs positifs, et surtout : prenez du plaisir !
          </p>
          <p className="mb-6">
            Le tennis est un sport pour la vie. Vous pouvez jouer à 8 ans comme à 80 ans. Alors Lancez-vous, 
            et n'hésitez pas à faire appel à des experts (coachs, analyse vidéo) pour accélérer votre courbe de progression.
          </p>
          <p className="mb-6">
            <strong>Bienvenue dans la grande famille du tennis ! 🎾</strong>
          </p>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-16 py-8">
        <div className="max-w-4xl mx-auto px-6 text-center text-gray-500 text-sm">
          <p>© 2025 Tennis Breakdown. Tous droits réservés.</p>
          <p className="mt-2">
            <a href="/privacy" className="hover:text-white transition-colors">Politique de confidentialité</a>
          </p>
        </div>
      </footer>
    </div>
  )
}
