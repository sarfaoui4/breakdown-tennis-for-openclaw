// 📦 VERSION MINIMALE - Dashboard simplifié
// Fichier: app/dashboard/page.tsx (remplacement)

import { createClient } from '../../lib/supabase/server'
import { redirect } from 'next/navigation'
import PaymentSection from './components/PaymentSection'
import { Suspense } from 'react'

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth/login')
  }

  // Vérifier si une vidéo vient d'être uploadée (query param uploaded)
  const uploadedVideoId = typeof searchParams.uploaded === 'string' ? searchParams.uploaded : undefined

  // Récupérer les stats (pour l'instant des valeurs fixes)
  const stats = {
    purchased: 0,
    processing: 0,
    completed: 0,
    nextAnalysis: '-'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-white">
      {/* Navigation */}
      <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 w-10 h-10 rounded-lg flex items-center justify-center">
              <span className="font-bold">🎾</span>
            </div>
            <h1 className="text-xl font-bold">Tennis Breakdown Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-300">
              {user.email}
            </span>
            <form action="/auth/signout" method="post">
              <button type="submit" className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-700 transition-colors">
                Déconnexion
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-2">Bienvenue, {user.email?.split('@')[0] || 'Joueur'}!</h2>
          <p className="text-gray-300">
            Voici votre espace personnel pour gérer vos analyses de tennis.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6">
            <h3 className="text-sm font-medium text-gray-300 mb-2">Analyses achetées</h3>
            <div className="text-3xl font-bold">{stats.purchased}</div>
          </div>
          
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6">
            <h3 className="text-sm font-medium text-gray-300 mb-2">En traitement</h3>
            <div className="text-3xl font-bold text-yellow-400">{stats.processing}</div>
          </div>
          
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6">
            <h3 className="text-sm font-medium text-gray-300 mb-2">Terminées</h3>
            <div className="text-3xl font-bold text-green-400">{stats.completed}</div>
          </div>
          
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6">
            <h3 className="text-sm font-medium text-gray-300 mb-2">Prochaine analyse</h3>
            <div className="text-lg">{stats.nextAnalysis}</div>
          </div>
        </div>

        {/* Payment Section (if video just uploaded) */}
        {uploadedVideoId && (
          <div className="mb-12">
            <Suspense fallback={<div>Chargement...</div>}>
              <PaymentSection videoId={uploadedVideoId} />
            </Suspense>
          </div>
        )}

        {/* Quick actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4">Nouvelle analyse</h3>
            <p className="text-gray-400 mb-6">
              Envoyez une nouvelle vidéo pour analyse par notre équipe d'experts.
            </p>
            <a href="/dashboard/upload" className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all">
              Uploader une vidéo
            </a>
          </div>
          
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4">Mes analyses</h3>
            <p className="text-gray-400 mb-6">
              Consultez l'historique et le statut de toutes vos analyses.
            </p>
            <a href="/dashboard/analyses" className="inline-block px-6 py-3 border border-gray-600 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
              Voir mes analyses
            </a>
          </div>
        </div>

        {/* Coming soon */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">🚀 Fonctionnalités à venir</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <div className="bg-orange-500/20 p-3 rounded-lg">
                <span className="text-lg">💳</span>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Paiements en ligne</h4>
                <p className="text-sm text-gray-400">Stripe intégration</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-orange-500/20 p-3 rounded-lg">
                <span className="text-lg">📱</span>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Notifications</h4>
                <p className="text-sm text-gray-400">Email & Telegram</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-orange-500/20 p-3 rounded-lg">
                <span className="text-lg">📊</span>
              </div>
              <div>
                <h4 className="font-semibold mb-1">Statistiques avancées</h4>
                <p className="text-sm text-gray-400">Analytics détaillés</p>
              </div>
            </div>
          </div>
        </div>

        {/* Support */}
        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Besoin d'aide ? Contactez-nous à 
            <a href="mailto:support@tennisbreakdown.com" className="text-orange-400 hover:text-orange-300 ml-1">
              support@tennisbreakdown.com
            </a>
          </p>
        </div>
      </main>
    </div>
  )
}