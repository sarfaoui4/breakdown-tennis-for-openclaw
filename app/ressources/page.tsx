import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Ressources Tennis | Guides & Conseils | Tennis Breakdown",
  description: "Découvrez nos guides complets sur le tennis : technique, équipement, tactique et analyse vidéo. Ressources gratuites pour progresser.",
  keywords: ["ressources tennis", "guides tennis", "conseils tennis", "technique tennis", "équipement tennis"],
}

// Articles定义 - à maintenir manuellement (ou générer depuis fs plus tard)
const articles = [
  {
    slug: 'erreurs-tennis',
    title: 'Les 3 erreurs les plus courantes au tennis (et comment les corriger)',
    description: 'Identifiez et corrigez les 3 erreurs que font 90% des joueurs amateurs. Conseils pratiques avec exemples vidéo.',
    date: '21 février 2025',
    readTime: '6 min',
    image: '🎾',
    category: 'Technique'
  },
  {
    slug: 'analyse-video-guide',
    title: 'Analyse vidéo tennis : guide complet pour progresser',
    description: 'Découvrez comment l\'analyse vidéo peut transformer votre jeu. Guide complet : matériel, méthodes, exemples, et où faire analyser ses matchs.',
    date: '21 février 2025',
    readTime: '10 min',
    image: '📹',
    category: 'Analyse'
  },
  {
    slug: 'ameliorer-service',
    title: 'Comment améliorer votre service en 5 étapes simples',
    description: 'Découvrez les 5 étapes concrètes pour améliorer votre service au tennis et gagner en puissance et en précision.',
    date: '21 février 2025',
    readTime: '8 min',
    image: '🎯',
    category: 'Technique'
  },
  {
    slug: 'choisir-raquette-guide-2025',
    title: 'Comment choisir sa raquette de tennis ? Guide complet 2025',
    description: 'Tout ce qu\'il faut savoir pour sélectionner la raquette idéale selon votre niveau, style de jeu et morphologie. Comparatif, critères et recommandations.',
    date: 'À paraître',
    readTime: '12 min',
    image: '🏸',
    category: 'Équipement',
    comingSoon: true
  },
  {
    slug: 'tennis-debutants-par-ou-commencer',
    title: 'Tennis pour débutants : par où commencer ?',
    description: 'Un guide pas-à-pas pour les nouveaux joueurs : premiers pas, équipement minimum, règles de base, et comment progresser sans perdre de temps.',
    date: 'À paraître',
    readTime: '10 min',
    image: '🌱',
    category: 'Débutants',
    comingSoon: true
  }
]

export default function RessourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-white">
      {/* Navigation */}
      <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 w-10 h-10 rounded-lg flex items-center justify-center">
              <span className="font-bold">🎾</span>
            </div>
            <a href="/" className="text-xl font-bold">Tennis Breakdown</a>
          </div>
          <div className="flex gap-4">
            <a href="/auth/login" className="px-4 py-2 text-gray-300 hover:text-white transition-colors">
              Connexion
            </a>
            <a href="/auth/register" className="px-4 py-2 bg-orange-500 text-white hover:bg-orange-600 rounded-lg font-medium transition-colors">
              Inscription
            </a>
            <a href="/lead" className="px-4 py-2 border border-gray-600 hover:border-orange-500 hover:text-orange-400 rounded-lg transition-colors">
              Guide Gratuit
            </a>
          </div>
        </div>
      </nav>

      {/* Main */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Ressources Tennis</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Guides, conseils et articles pour améliorer votre jeu. Des ressources gratuites et实战 pour joueurs de tous niveaux.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.slug}
              className={`bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden hover:border-orange-500 transition-all ${article.comingSoon ? 'opacity-75' : ''}`}
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">{article.image}</span>
                  <span className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                    {article.category}
                  </span>
                  {article.comingSoon && (
                    <span className="px-3 py-1 bg-orange-500 text-white text-xs rounded-full">
                      Bientôt
                    </span>
                  )}
                </div>
                <h2 className="text-xl font-bold mb-3 leading-tight">
                  {article.comingSoon ? (
                    <span className="text-gray-400">{article.title}</span>
                  ) : (
                    <a href={`/blog/${article.slug}`} className="hover:text-orange-400 transition-colors">
                      {article.title}
                    </a>
                  )}
                </h2>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {article.description}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{article.date}</span>
                  <span>{article.readTime} de lecture</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-orange-500/10 to-orange-500/5 border border-orange-500/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Envie d'une analyse personnalisée ?</h3>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
           Essayez notre service d'analyse vidéo tennis et recevez des recommandations sur mesure pour progresser rapidement.
          </p>
          <a
            href="/auth/register"
            className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all"
          >
            Commencer gratuitement
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-16 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-500 text-sm">
          <p>© 2025 Tennis Breakdown. Tous droits réservés.</p>
          <p className="mt-2">
            <a href="/privacy" className="hover:text-white transition-colors">Politique de confidentialité</a>
          </p>
        </div>
      </footer>
    </div>
  )
}
