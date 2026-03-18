import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Blog Tennis | Conseils, techniques et analyses | Tennis Breakdown",
  description: "Articles et conseils tennis pour améliorer votre jeu : technique, stratégie, analyse vidéo. Le blog officiel de Tennis Breakdown.",
  keywords: ["blog tennis", "conseils tennis", "technique tennis", "analyse vidéo tennis", "progresser tennis"],
  openGraph: {
    title: "Blog Tennis | Conseils et analyses | Tennis Breakdown",
    description: "Articles experts pour améliorer votre tennis. Techniques, exercices, analyse vidéo.",
    type: "website",
  },
}

const articles = [
  {
    slug: "erreurs-tennis",
    title: "Les 3 erreurs les plus courantes au tennis (et comment les corriger)",
    description: "Identifiez et corrigez les 3 erreurs que font 90% des joueurs amateurs. Conseils pratiques avec exemples vidéo.",
    date: "21 février 2025",
    readTime: "6 min",
    image: "/images/blog/erreurs-tennis.jpg",
  },
  {
    slug: "ameliorer-service-tennis",
    title: "Comment améliorer son service au tennis : 5 exercices efficaces",
    description: "Améliorez votre service grâce à 5 exercices simples à pratiquer. Techniques de grip, toss, et fluidité pour plus de puissance et de précision.",
    date: "28 février 2025",
    readTime: "8 min",
    image: "/images/blog/service-tennis.jpg",
  },
  {
    slug: "technique-revers-complet",
    title: "La technique du revers complet : one-handed vs two-handed",
    description: "Tout savoir sur le revers : one-handed ou two-handed ? Découvrez les avantages, inconvénients et exercices pour maîtriser ce coup fondamental.",
    date: "28 février 2025",
    readTime: "10 min",
    image: "/images/blog/revers-tennis.jpg",
  },
  {
    slug: "analyse-video-guide",
    title: "Comment analyser son jeu vidéo : guide complet",
    description: "Apprenez à filmer et analyser vos matchs et entraînements pour identifier vos points forts et faibles. Méthodologie étape par étape.",
    date: "15 février 2025",
    readTime: "12 min",
    image: "/images/blog/analyse-video.jpg",
  },
  {
    slug: "choisir-raquette-guide-2025",
    title: "Comment choisir sa raquette de tennis ? Guide complet 2025",
    description: "Guide 2025 pour choisir LA raquette idéale selon votre niveau, style de jeu et morphologie. Poids, taille, équilibre, rigidité : tous les critères décryptés.",
    date: "18 mars 2025",
    readTime: "10 min",
    image: "/images/blog/raquette-tennis.jpg",
  },
  {
    slug: "tennis-debutants-par-ou-commencer",
    title: "Tennis pour débutants : par où commencer ?",
    description: "Vous commencez le tennis ? Guide complet pour bien débuter : équipement, règles, premiers cours, erreurs à éviter. Progresser rapidement avec les bonnes bases.",
    date: "18 mars 2025",
    readTime: "12 min",
    image: "/images/blog/debutant-tennis.jpg",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-white">
      {/* Navigation */}
      <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 w-10 h-10 rounded-lg flex items-center justify-center">
              <span className="font-bold">🎾</span>
            </div>
            <Link href="/" className="text-xl font-bold">Tennis Breakdown</Link>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/pricing" className="px-4 py-2 bg-orange-500 text-white hover:bg-orange-600 rounded-lg font-medium transition-colors">
              Voir les tarifs
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            Blog Tennis
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Conseils d'experts, techniques détaillées et analyses pour améliorer votre jeu. 
            Découvrez nos articles écrits par des passionnés de tennis.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden hover:bg-gray-750 hover:border-orange-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/10"
            >
              {/* Image placeholder */}
              <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                <div className="text-6xl opacity-30">
                  {article.slug.includes('erreur') && '🎯'}
                  {article.slug.includes('service') && '🎾'}
                  {article.slug.includes('revers') && '🏸'}
                  {article.slug.includes('analyse') && '📹'}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 text-sm text-gray-400 mb-3">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime} lecture</span>
                </div>

                <h2 className="text-xl font-bold mb-3 group-hover:text-orange-400 transition-colors line-clamp-2">
                  {article.title}
                </h2>

                <p className="text-gray-300 mb-4 line-clamp-3">
                  {article.description}
                </p>

                <div className="flex items-center text-orange-400 font-medium group-hover:translate-x-2 transition-transform">
                  Lire l'article
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-20 bg-gray-800 border border-gray-700 rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Recevez nos conseils tennis</h2>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            Inscrivez-vous à notre newsletter pour recevoir nos derniers articles et conseils d'experts directement dans votre boîte mail.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
              S'inscrire
            </button>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            Pas de spam, uniquement des conseils utiles. Désabonnement à tout moment.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-20 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-500 text-sm">
          <p>© 2025 Tennis Breakdown. Tous droits réservés.</p>
          <p className="mt-2">
            <Link href="/privacy" className="hover:text-white transition-colors">Politique de confidentialité</Link>
            <span className="mx-2">•</span>
            <Link href="/pricing" className="hover:text-white transition-colors">Tarifs</Link>
          </p>
        </div>
      </footer>
    </div>
  )
}
