import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Les 3 erreurs les plus courantes au tennis (et comment les corriger) | Tennis Breakdown",
  description: "Identifiez et corrigez les 3 erreurs que font 90% des joueurs amateurs. Conseils pratiques avec exemples vidéo.",
  keywords: ["erreurs tennis", "corriger erreurs tennis", "conseils tennis", "technique tennis"],
}

export default function ArticleErreursTennis() {
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
          <h1 className="text-4xl font-bold mb-4">Les 3 erreurs les plus courantes au tennis (et comment les corriger)</h1>
          <p className="text-gray-400 mb-8">
            Publié le 21 février 2025 • 6 min de lecture
          </p>

          <p className="mb-6">
            Que vous soyez débutant ou intermédiaire, il est fort probable que vous commettez l'une de ces 3 erreurs. 
            La bonne nouvelle ? Elles sont faciles à corriger une fois identifiées !
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">Erreur #1 : La préparation trop tardive</h2>
          <p className="mb-6">
            <strong>Symptôme</strong> : Vous êtes toujours en retard sur la balle, vous sentez que vous courez après.
          </p>
          <p className="mb-6">
            <strong>Cause</strong> : Le bras arrière ne démarre pas assez tôt. Beaucoup de joueurs attendent que la balle 
            rebondisse sur leur côté avant de commencer le geste.
          </p>
          <p className="mb-6">
            <strong>Correction</strong> : Déclenchez votre préparation <strong>avant que la balle ne rebondisse</strong>. 
            Comptez "un, deux" dans votre tête : "un" = balle adverse touche le sol, "deux" = vous commencez votre geste.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">Erreur #2 : Regarder la cible au lieu de la balle</h2>
          <p className="mb-6">
            <strong>Symptôme</strong> : La balle Frappe le cadre de la raquette (tamis) ou le cordage, pas le "sweet spot".
          </p>
          <p className="mb-6">
            <strong>Cause</strong> : Vous regardez où vous voulez envoyer la balle au moment du contact, au lieu de suivre la balle jusqu'au point de contact.
          </p>
          <p className="mb-6">
            <strong>Correction</strong> : "Maintenir le focus sur la balle jusqu'au contact". Pete Sampras disait : 
            "La balle ne ment pas". Regardez la balle jusqu'à ce qu'elle touche les cordes. C'est difficile au début 
            mais avec de la conscience, ça devient automatique.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">Erreur #3 : Finition prématurée</h2>
          <p className="mb-6">
            <strong>Symptôme</strong> : Votre geste s'arrête net après le contact. Vous perdez en puissance et en profondeur.
          </p>
          <p className="mb-6">
            <strong>Cause</strong> : La tension musculaire. Vous "cassez" le geste au lieu de le poursuivre.
          </p>
          <p className="mb-6">
            <strong>Correction</strong> : Imaginez que vous frappez <strong>deux balles</strong> avec le même geste. 
            Le follow-through doit être naturel et prolongé. C'est comme un whip : l'énergie se libère à la fin du mouvement.
          </p>

          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 my-8">
            <h3 className="text-xl font-bold mb-3">🎥 Besoin d'une analyse vidéo ?</h3>
            <p className="mb-4">
              Filmez-vous et recevez une analyse détaillée point par point avec corrections précises.
            </p>
            <a href="/pricing" className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
              Découvrir nos tarifs
            </a>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-orange-400">Comment s'analyser soi-même ?</h2>
          <p className="mb-6">
            La meilleure façon d'identifier vos erreurs est de vous filmer. Placez votre téléphone sur un trépied 
            sur le côté du court et enregistrez un set complet. Ensuite, regardez la vidéo en cherchant spécifiquement 
            ces 3 erreurs.
          </p>
          <p className="mb-6">
            Vous pouvez aussi faire appel à nos experts pour une analyse professionnelle. Nous décortiquons chaque point 
            et vous fournissons des recommandations précises pour progresser rapidement.
          </p>

          <p className="mb-6">
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
