import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Tennis pour débutants : par où commencer ? Guide 2025 | Tennis Breakdown",
  description: "Vous commencez le tennis ? Guide complet pour bien débuter : équipement, règles, premiers cours, erreurs à éviter. Progresser rapidement avec les bonnes bases.",
  keywords: ["tennis débutant", "commencer tennis", "premier cours tennis", "équipement tennis débutant", "bases tennis"],
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
            Publié le 18 mars 2025 • 12 min de lecture
          </p>

          <p className="mb-6">
            Se lancer dans le tennis peut sembler intimidant. Nouveau sport, nouvelles règles, équipement à choisir, 
            technique à apprendre... Par où commencer ? 
          </p>
          <p className="mb-6">
            Ce guide est conçu spécialement pour les débutants. Il vous donne les étapes clés pour bien démarrer, éviter 
            les erreurs courantes, et progresser rapidement tout en vous faisant plaisir.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">1. Trouver un club et un professeur</h2>
          <p className="mb-6">
            La première étape est de trouver un club ou une académie près de chez vous. Privilégiez ceux qui proposent 
            des courscollectifs pour débutants (groupes de 4-6 personnes idéalement).
          </p>
          <p className="mb-6">
            <strong>Pourquoi un cours collectif ?</strong> C'est plus économique, plus ludique, et vous pouvez aprender 
            en observant les autres. Les cours particuliers sont excellents pour corriger des défauts précis, mais en 
            début de parcours, le collectif suffit amplement.
          </p>
          <p className="mb-6">
            Demandez à faire un <strong>cours d'essai gratuit</strong>. C'est standard dans la plupart des clubs. 
            Profitez-en pour observer l'ambiance, la qualité des terrains, et surtout la pédagogie du moniteur.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">2. Choisir sa première raquette</h2>
          <p className="mb-6">
            Pas besoin d'investir 300€ tout de suite ! Pour débuter, une raquette entre 100€ et 180€ est largement suffisante.
          </p>
          <p className="mb-6">
            <strong>Caractéristiques recommandées pour débuter :</strong>
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Poids :</strong> 260-290g (léger pour éviter la fatigue)</li>
            <li><strong>Tamis :</strong> 100-110 sq in (grand sweet spot = plus de tolérance)</li>
            <li><strong>Équilibre :</strong> Head light ou neutre (plus maniable)</li>
            <li><strong>Rigidité :</strong> 65-68 RA (confortable pour le bras)</li>
            <li><strong>Profil :</strong> 24mm+ (puissance)</li>
            <li><strong>Cordage :</strong> Synthétique multi-filaments ( softer, confortable)</li>
            <li><strong>Tension :</strong> 22-24 kgs (pour débuter, pas besoin de tensions basses)</li>
          </ul>
          <p className="mb-6">
            Beaucoup de marques proposent des modèles "débutants" ou "juniors" (adultes de petite taille). N'hésitez pas 
            à demander conseil au magasin. Expliquez que vous débutez, ils sauront vous orienter.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">3. Les bases techniques à apprendre en priorité</h2>

          <h3 className="text-xl font-bold mt-8 mb-3">① La prise de raquette (grip)</h3>
          <p className="mb-6">
            Commencez par la <strong>prise continentale</strong>. C'est la plus polyvalente, utilisée pour le service, 
            le retour, et les volées. Ensuite, vous apprendrez l'<strong>Eastern</strong> (coup droit) et le <strong>Western</strong> 
            (pour plus de topspin). Mais ne vous embrouillez pas dès le départ : maîtriser la continentale est déjà énorme.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">② Le coup droit</h3>
          <p className="mb-6">
            Les points clés :
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Position de base : pieds écartés à la largeur des épaules, genoux fléchis</li>
            <li>Préparation : la raquette part derrière, le bras arrière se plie</li>
            <li>Contact : devant le corps, au niveau de la hanche avant</li>
            <li>Suivi : prolonger le geste vers la cible, finish au-dessus de l'épaule</li>
          </ul>

          <h3 className="text-xl font-bold mt-8 mb-3">③ Le revers</h3>
          <p className="mb-6">
            Deux techniques : <strong>revers à une main</strong> (classique, plus de variété) ou <strong>revers à deux mains</strong> 
            (plus stable, plus facile pour débuter). 
          </p>
          <p className="mb-6">
            La plupart des débutants commencent avec un revers à deux mains. C'est plus simple à coordonner et ça donne 
            immédiatement plus de contrôle. Ensuite, vous pourrez essayer le one-handed si l'envie vous vient.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">④ Le service</h3>
          <p className="mb-6">
            La technique la plus complexe. Ne vous attendez pas à réussir du premier coup. Le service se travaille pendant 
            des mois, voire des années.
          </p>
          <p className="mb-6">
            Concentrez-vous d'abord sur <strong>l' tossing</strong> (lancer) : constant et devant. Ensuite, le geste de 
            frappe. Enfin, le follow-through. Les cours collectifs vous apprendront la progression "trophy pose" et le 
            "scratch serve". 
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">⑤ Le retour de service</h3>
          <p className="mb-6">
            Une fois le service acquis, apprenez à : 
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Anticiper la trajectoire</li>
            <li>Préparez-vous tôt (takeback court mais efficace)</li>
            <li>Fraiser ou frapper plat selon l'occasion</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">4. Éviter les erreurs des débutants</h2>

          <h3 className="text-xl font-bold mt-8 mb-3">❌ Frapper trop fort</h3>
          <p className="mb-6">
            Le tout-puissant : on veut smasher chaque balle. Résultat ? 80% des coups sortent. Au début, cherchez 
            la <strong>régularité</strong> et le <strong>contrôle</strong>. Faites-vous la main. La puissance viendra 
            avec la technique.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">❌ Sautiller sur place</h3>
          <p className="mb-6">
            Beaucoup de débutants sautent inutilement avant de frapper. Restez <strong> grounded</strong>, genoux fléchis, 
            et poussez dans le sol au moment du contact. Le rebond naturel du corps fait le reste.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">❌ Regarder la cible au lieu de la balle</h3>
          <p className="mb-6">
            Si vous regardez où vous voulez envoyer la balle, vous la manquez. Concentrez-vous sur la balle jusqu'au 
            contact. Vos yeux suivent la balle jusqu'à la rencontre avec les cordes. Simple, mais efficace.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">5. Combien de cours par semaine ?</h2>
          <p className="mb-6">
            <strong>Idéal minimum :</strong> 1 heure par semaine en cours collectif + 1 heure de jeu libre (avec un 
            partenaire).
          </p>
          <p className="mb-6">
            <strong>Pour progresser plus vite :</strong> 2 cours par semaine + 2 sessions de jeu. 
          </p>
          <p className="mb-6">
            N'oubliez pas : le tennis se joue, pas seulement s'enseigne. Plus vous jouez, plus vous intériorisez les gestes.
          </p>

          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 my-8">
            <h3 className="text-xl font-bold mb-3">📹 Analysez votre jeu dès le début</h3>
            <p className="mb-4">
              Filmez-vous ! Un smartphone sur un trépied et c'est réglé. En regardant vos matchs ou séances, vous 
              identifierez vos erreurs plus facilement. Nos analyses vidéo pour débutants vous donnent des conseils 
              personnalisés pour progresser plus vite.
            </p>
            <a href="/pricing" className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
              Voir nos formules analyses
            </a>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">6. Et après ?</h2>
          <p className="mb-6">
            Après 3-6 mois de pratique régulière, vous aurez une base solide. Vous pourrez alors envisager :
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Participer à des tournois "débutants" ou "challenge"</li>
            <li>Intégrer une équipe dans un club</li>
            <li>Prendre des cours particuliers pour affiner votre jeu</li>
            <li>Faire une analyse vidéo approfondie</li>
          </ul>

          <p className="mb-6">
            Le tennis est un sport pour la vie. Prenez votre temps, savourez chaque progression, et n'oubliez pas : 
            même les plus grands ont commencé par zéro.
          </p>

          <p className="mb-6 text-orange-400 font-bold">
            À vous de jouer !
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
