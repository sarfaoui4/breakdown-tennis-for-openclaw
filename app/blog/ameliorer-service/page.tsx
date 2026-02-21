import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Comment améliorer votre service en 5 étapes simples | Tennis Breakdown",
  description: "Découvrez les 5 étapes concrètes pour améliorer votre service au tennis et gagner en puissance et en précision.",
  keywords: ["service tennis", "améliorer service", "technique tennis", "conseils tennis"],
}

export default function ArticleAmeliorerService() {
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
          <h1 className="text-4xl font-bold mb-4">Comment améliorer votre service en 5 étapes simples</h1>
          <p className="text-gray-400 mb-8">
            Publié le 21 février 2025 • 8 min de lecture
          </p>

          <p className="mb-6">
            Le service est l'un des coups les plus importants au tennis. C'est le seul coup que vous contrôlez entièrement, 
            et c'est souvent le début de chaque point. Pourtant, beaucoup de joueurs amateurs négligent leur service 
            et perdent des points gratuits.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">Étape 1 : La prise de raquette</h2>
          <p className="mb-6">
            La prise de raquette influence directement la puissance et la précision de votre service. 
            Pour un service plat ou lifté, utilisez une prise <strong>Continental</strong> (comme pour le revers à une main).
          </p>
          <p className="mb-6">
            <strong>Exercice</strong> : Tenez votre raquette comme un marteau. Le dos de la raquette doit être parallèle à votre avant-bras.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">Étape 2 : Le positionnement des pieds</h2>
          <p className="mb-6">
            Vos pieds déterminent l'équilibre et la direction de votre service. Positionnez-vous :
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Pied avant (gauche pour droitier) pointé vers la cible (filet ou zone de service)</li>
            <li>Pied arrière à environ 45° et légèrement en retrait</li>
            <li>Écart des pieds : environ largeur des épaules</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">Étape 3 : Le mouvement de balancier (toss)</h2>
          <p className="mb-6">
            Le toss (lancer de balle) est crucial. Une balle lancée au mauvais endroit = service raté.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Lancez la balle <strong>devant vous</strong>, pas au-dessus de la tête</li>
            <li>Hauteur : légèrement au-dessus du bras tendu maximum</li>
            <li>Mouvement fluide, sans à-coups</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">Étape 4 : Le point de contact</h2>
          <p className="mb-6">
            Frappez la balle au point le plus haut possible, avec la raquette légèrement en avant du corps.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Contact à pleine extension du bras</li>
            <li>Frappe "en coup franc" : la raquette frôle la balle de bas en haut pour générer de la puissance</li>
            <li>Tête de raquette orientée vers la cible</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">Étape 5 : La finition (follow-through)</h2>
          <p className="mb-6">
            Ne stoppez pas le geste après le contact. Poursuivez le mouvement naturellement vers le bas et l'avant.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Le brassard (épaule) doit continuer à tourner</li>
            <li>Le pied avant se stabilise</li>
            <li>Position de recovery prête pour le retour</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">Exercice d'entraînement</h2>
          <p className="mb-6">
            Pour intégrer ces 5 étapes, pratiquez chaque séance 10-15 minutes de service en vous concentrant sur UNE seule étape à la fois.
            Filmez-vous de côté pour analyser votre geste. C'est là que notre service d'analyse vidéo peut vous aider !
          </p>

          <div className="bg-orange-500/10 border border-orange-500 rounded-xl p-6 my-8">
            <h3 className="text-xl font-bold mb-3">Besoin d'une analyse personnalisée ?</h3>
            <p className="mb-4">
              Envoyez une vidéo de votre service et recevez une analyse détaillée avec corrections précisées.
            </p>
            <a href="/pricing" className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
              Voir nos tarifs
            </a>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">Conclusion</h2>
          <p className="mb-6">
            Améliorer son service demande de la patience et de la répétition. En suivant ces 5 étapes et en vous filmant régulièrement, 
            vous verrez des progrès rapides. N'hésitez pas à faire appel à un expert pour valider votre technique.
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
