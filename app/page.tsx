// 📦 VERSION MINIMALE - Page d'accueil simplifiée
// Fichier: app/page.tsx (remplacement)

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-white">
      {/* Navigation */}
      <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 w-10 h-10 rounded-lg flex items-center justify-center">
              <span className="font-bold">🎾</span>
            </div>
            <h1 className="text-2xl font-bold">Tennis Breakdown</h1>
          </div>
          <div className="flex gap-4">
            <a href="/auth/login" className="px-4 py-2 text-gray-300 hover:text-white transition-colors">
              Connexion
            </a>
            <a href="/auth/register" className="px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg font-medium transition-colors">
              Inscription
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Analyse détaillée de vos <span className="text-orange-400">matchs de tennis</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Envoyez votre vidéo, recevez une analyse professionnelle avec conseils personnalisés pour améliorer votre jeu.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="/auth/register" className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl text-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all">
              Essayer gratuitement
            </a>
            <a href="#pricing" className="px-8 py-4 border border-gray-700 rounded-xl text-lg font-semibold hover:bg-gray-800 transition-colors">
              Voir les tarifs
            </a>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8">
            <div className="bg-orange-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <span className="text-2xl">📹</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Upload facile</h3>
            <p className="text-gray-400">
              Envoyez votre vidéo en quelques clics depuis votre téléphone ou ordinateur.
            </p>
          </div>
          
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8">
            <div className="bg-orange-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Analyse experte</h3>
            <p className="text-gray-400">
              Notre équipe d'experts analyse chaque aspect de votre jeu avec précision.
            </p>
          </div>
          
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8">
            <div className="bg-orange-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <span className="text-2xl">💡</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Conseils personnalisés</h3>
            <p className="text-gray-400">
              Recevez des recommandations spécifiques pour améliorer vos points faibles.
            </p>
          </div>
        </div>

        {/* Pricing */}
        <div id="pricing" className="bg-gray-800 border border-gray-700 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-center mb-10">Tarifs simples</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8">
              <h4 className="text-2xl font-bold mb-4">Analyse Basique</h4>
              <div className="text-4xl font-bold mb-6">19,99€</div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>✅ Analyse vidéo complète</li>
                <li>✅ Commentaires détaillés</li>
                <li>✅ Conseils d'amélioration</li>
                <li>⏱️ Délai: 24-48h</li>
              </ul>
              <a href="/auth/register" className="block w-full py-3 bg-gradient-to-r from-green-600 to-green-700 rounded-lg text-center font-semibold hover:from-green-700 hover:to-green-800 transition-all">
                Commencer
              </a>
            </div>
            
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-orange-500 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <h4 className="text-2xl font-bold">Analyse Premium</h4>
                <span className="ml-3 px-3 py-1 bg-orange-500 text-sm rounded-full">Recommandé</span>
              </div>
              <div className="text-4xl font-bold mb-6">49,99€</div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>✅ Tout inclus dans Basique</li>
                <li>✅ Analyse comparative</li>
                <li>✅ Session Zoom 30min</li>
                <li>✅ Support prioritaire</li>
                <li>⏱️ Délai: 12-24h</li>
              </ul>
              <a href="/auth/register" className="block w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg text-center font-semibold hover:from-orange-600 hover:to-orange-700 transition-all">
                Choisir Premium
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-800 text-gray-400">
          <p>© 2026 Tennis Breakdown. Tous droits réservés.</p>
          <p className="text-sm mt-2">Service d'analyse vidéo de tennis professionnel</p>
        </div>
      </main>
    </div>
  )
}