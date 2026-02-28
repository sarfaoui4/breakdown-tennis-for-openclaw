import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Comment améliorer son service au tennis : 5 exercices efficaces | Tennis Breakdown",
  description: "Améliorez votre service grâce à 5 exercices simples à pratiquer. Techniques de grip, toss, et fluidité pour plus de puissance et de précision.",
  keywords: ["service tennis", "ameliorer service tennis", "exercices service", "technique service tennis", "puissance service"],
}

export default function ArticleServiceTennis() {
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
          <h1 className="text-4xl font-bold mb-4">Comment améliorer son service au tennis : 5 exercices efficaces</h1>
          <p className="text-gray-400 mb-8">
            Publié le 28 février 2025 • 8 min de lecture
          </p>

          <p className="mb-6">
            Le service est le coup le plus important du tennis. C'est le seul coup que vous contrôlez entièrement, 
            sans subir l'influence de l'adversaire. Pourtant, beaucoup de joueurs amateurs négligent ce fondamental.
          </p>

          <p className="mb-6">
            Dans cet article, je vais vous partager <strong>5 exercices pratiques</strong> que vous pouvez faire 
            seul(e) sur le court pour améliorer significativement votre service.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">1. Le toss sans raquette</h2>
          <p className="mb-6">
            <strong>Objectif</strong> : Maîtriser la hauteur et le placement de la balle.
          </p>
          <p className="mb-6">
            <strong>Exercice</strong> : Sans raquette, lancez la balle en l'air devant vous. Idéalement, la balle doit 
            atteindre une hauteur légèrement supérieure à votre tête et retomber à environ 15-20 cm devant votre pied avant.
          </p>
          <p className="mb-6">
            <strong>Répétitions</strong> : 20 lancers. Concentrez-vous sur la fluidité. Pas de篮.
          </p>
          <p className="mb-6">
            <strong>Astuce</strong> : Utilisez votre main opposée (gauche si vous êtes droitier) pour guider le toss. 
            Ce doit être un mouvement naturel, pas une poussée verticale.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">2. Le "shadow swing" à genoux</h2>
          <p className="mb-6">
            <strong>Objectif</strong> : Travailler la séquence de mouvement sans la balle.
          </p>
          <p className="mb-6">
            <strong>Exercice</strong> : À genoux sur le court (ou assis sur un banc), effectuez le geste complet du service 
            (trophée rotation, point de contact, follow-through).
          </p>
          <p className="mb-6">
            <strong>Focus</strong> : La fluidité. La séquence doit être : toss → montée de la raquette → rotation de l'épaule → 
            contact → follow-through. Aucune à-coup.
          </p>
          <p className="mb-6">
            <strong>Répétitions</strong> : 30 swings lents.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">3. Service avec cible</h2>
          <p className="mb-6">
            <strong>Objectif</strong> : Améliorer la précision.
          </p>
          <p className="mb-6">
            <strong>Exercice</strong> : Placez une cible (un isinstance, un coin de service box, ou même un petit tapis) dans la zone que vous visez. 
            Commencez en zone "T" (côtéildeur opposé) puis en zone "body" (face).
          </p>
          <p className="mb-6">
            <strong>Progression</strong> :
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>10 services sur la même cible, objectif : 80% de réussite</li>
            <li>Alterner entre deux cibles (T et body)</li>
            <li>Ajouter le service extérieur (slice)</li>
          </ul>
          <p className="mb-6">
            <strong>Important</strong> : Priorisez la précision avant la puissance. Un service précis vaut mieux qu'un service puissant hors zone.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">4. Le "trophy pose" hold</h2>
          <p className="mb-6">
            <strong>Objectif</strong> : Renforcer la stabilité et la position au point de contact.
          </p>
          <p className="mb-6">
            <strong>Exercice</strong> : Une fois que vous avez frappé, maintenez la position "trophy pose" (raquette pointant vers le ciel, 
            épaules tournées, pieds bien ancrés) pendant 3 secondes.
          </p>
          <p className="mb-6">
            <strong>Pourquoi</strong> : Cela vous oblige à garder l'équilibre et à finir proprement votre geste. Si vous tombez immédiatement, 
            cela indique un déséquilibre au moment du contact.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">5. Service avec élastique</h2>
          <p className="mb-6">
            <strong>Objectif</strong> : Améliorer la vitesse de bras et la sensation de lâcher.
          </p>
          <p className="mb-6">
            <strong>Matériel</strong> : Un élastique de résistance fixé à un poteau ou à un partenaire.
          </p>
          <p className="mb-6">
            <strong>Exercice</strong> : Tenez l'élastique comme une raquette et simulez le service. La résistance force votre bras à accélérer 
            et à "lâcher" au bon moment pour générer de la vitesse.
          </p>
          <p className="mb-6">
            <strong>Répétitions</strong> : 20 swings par bras.
          </p>

          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 my-8">
            <h3 className="text-xl font-bold mb-3">🎥 Besoin d'une analyse vidéo de votre service ?</h3>
            <p className="mb-4">
              Filmez-vous en conditions réelles et recevez une analyse détaillée avec corrections personnalisées.
            </p>
            <a href="/pricing" className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
              Voir nos tarifs
            </a>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">Conclusion</h2>
          <p className="mb-6">
            Améliorer son service demande de la répétition et de la conscience. Intégrez ces 5 exercices dans votre routine 
            d'entraînement (15-20 minutes par session) et vous verrez des progrès rapides.
          </p>
          <p className="mb-6">
            N'oubliez pas : le service est un coup technique avant d'être un coup de force. La fluidité prime sur la puissance.
          </p>
          <p className="mb-6">
            Bonne pratique !
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
