import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function HomePage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (user) {
    redirect('/dashboard')
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Analyse détaillée des <span className="text-green-600">matchs de tennis</span>
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
          Découvrez les statistiques avancées, les tendances et les insights cachés des plus grands matchs de tennis.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/auth/register"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Commencer gratuitement
          </Link>
          <Link
            href="/auth/login"
            className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Se connecter
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Pourquoi Tennis Breakdown ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Statistiques avancées</h3>
            <p className="text-gray-600">
              Accédez à des métriques détaillées comme le pourcentage de premiers services, les points gagnants, les fautes directes, et bien plus.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Visualisations interactives</h3>
            <p className="text-gray-600">
              Des graphiques et diagrammes interactifs pour comprendre les tendances du match et les moments clés.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Base de données exhaustive</h3>
            <p className="text-gray-600">
              Des milliers de matchs analysés, des tournois du Grand Chelem aux rencontres ATP 250.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-12 text-center text-white mb-16">
        <h2 className="text-3xl font-bold mb-6">Prêt à révolutionner votre analyse du tennis ?</h2>
        <p className="text-xl mb-8 opacity-90">
          Rejoignez des milliers d&apos;amateurs et de professionnels qui utilisent déjà Tennis Breakdown.
        </p>
        <Link
          href="/auth/register"
          className="bg-white text-green-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-lg text-lg transition-colors inline-block"
        >
          S&apos;inscrire gratuitement
        </Link>
      </section>
    </div>
  )
}