import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Ressources Tennis | Articles, guides et conseils | Tennis Breakdown",
  description: "Toutes nos ressources gratuites pour améliorer votre tennis : guides détaillés, articles experts, conseils techniques et analytiques.",
  keywords: ["ressources tennis", "guides tennis", "articles tennis", "conseils tennis", "téléchargement tennis"],
  openGraph: {
    title: "Ressources Tennis | Guides et articles gratuits",
    description: "Découvrez nos guides complets et articles pour progresser au tennis. Contenu expert et gratuit.",
    type: "website",
  },
}

const ressources = [
  {
    slug: "erreurs-tennis",
    title: "Les 3 erreurs les plus courantes au tennis (et comment les corriger)",
    description: "Identifiez et corrigez les 3 erreurs que font 90% des joueurs amateurs. Conseils pratiques avec exemples vidéo.",
    date: "21 février 2025",
    readTime: "6 min",
    icon: "🎯",
    category: "Technique",
  },
  {
    slug: "ameliorer-service-tennis",
    title: "Comment améliorer son service au tennis : 5 exercices efficaces",
    description: "Améliorez votre service grâce à 5 exercices simples à pratiquer. Techniques de grip, toss, et fluidité pour plus de puissance et de précision.",
    date: "28 février 2025",
    readTime: "8 min",
    icon: "🎾",
    category: "Technique",
  },
  {
    slug: "technique-revers-complet",
    title: "La technique du revers complet : one-handed vs two-handed",
    description: "Tout savoir sur le revers : one-handed ou two-handed ? Découvrez les avantages, inconvénients et exercices pour maîtriser ce coup fondamental.",
    date: "28 février 2025",
    readTime: "10 min",
    icon: "🏸",
    category: "Technique",
  },
  {
    slug: "analyse-video-guide",
    title: "Comment analyser son jeu vidéo : guide complet",
    description: "Apprenez à filmer et analyser vos matchs et entraînements pour identifier vos points forts et faibles. Méthodologie étape par étape.",
    date: "15 février 2025",
    readTime: "12 min",
    icon: "📹",
    category: "Analyse",
  },
  {
    slug: "choisir-raquette-guide-2025",
    title: "Comment choisir sa raquette de tennis ? Guide complet 2025",
    description: "Guide 2025 pour choisir LA raquette idéale selon votre niveau, style de jeu et morphologie. Poids, taille, équilibre, rigidité : tous les critères décryptés.",
    date: "18 mars 2025",
    readTime: "10 min",
    icon: "🏃",
    category: "Équipement",
  },
  {
    slug: "tennis-debutants-par-ou-commencer",
    title: "Tennis pour débutants : par où commencer ?",
    description: "Vous commencez le tennis ? Guide complet pour bien débuter : équipement, règles, premiers cours, erreurs à éviter. Progresser rapidement avec les bonnes bases.",
    date: "18 mars 2025",
    readTime: "12 min",
    icon: "🌟",
    category: "Débutants",
  },
]

const categories = ["Tout", "Technique", "Analyse", "Équipement", "Débutants"]

function filteredRessources(selectedCategory: string) {
  if (selectedCategory === "Tout") return ressources
  return ressources.filter(r => r.category === selectedCategory)
}

export default function RessourcesPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const selectedCategory = (searchParams.category as string) || "Tout"
  const filtered = filteredRessources(selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-white">
      <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 w-10 h-10 rounded-lg flex items-center justify-center">
              <span className="font-bold">🎾</span>
            </div>
            <Link href="/" className="text-xl font-bold">Tennis Breakdown</Link>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/blog" className="px-4 py-2 text-gray-300 hover:text-white transition-colors">
              Blog
            </Link>
            <Link href="/pricing" className="px-4 py-2 bg-orange-500 text-white hover:bg-orange-600 rounded-lg font-medium transition-colors">
              Voir les tarifs
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            Ressources Tennis
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Guides, articles et conseils d'experts pour améliorer votre jeu. Contenu 100% gratuit.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <Link
                key={cat}
                href={cat === "Tout" ? "/ressources" : `/ressources?category=${cat}`}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === cat
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((ressource) => (
            <Link
              key={ressource.slug}
              href={`/blog/${ressource.slug}`}
              className="group bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/10"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl">{ressource.icon}</span>
                  <span className="px-3 py-1 bg-gray-900 text-gray-300 text-sm rounded-full">
                    {ressource.category}
                  </span>
                </div>

                <h2 className="text-xl font-bold mb-3 group-hover:text-orange-400 transition-colors line-clamp-2">
                  {ressource.title}
                </h2>

                <p className="text-gray-300 mb-4 line-clamp-3 text-sm">
                  {ressource.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>{ressource.date}</span>
                  <span>{ressource.readTime} lecture</span>
                </div>

                <div className="mt-4 flex items-center text-orange-400 font-medium group-hover:translate-x-2 transition-transform">
                  Lire la suite
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 bg-gray-800 border border-gray-700 rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Recevez nos conseils tennis</h2>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            Inscrivez-vous à notre newsletter pour recevoir nos derniers articles et ressources directement dans votre boîte mail.
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
