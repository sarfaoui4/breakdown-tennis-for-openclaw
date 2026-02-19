// 📊 Dashboard - Page Mes Analyses
// Fichier: app/dashboard/analyses/page.tsx

import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default async function AnalysesPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth/login')
  }

  // Récupérer les analyses de l'utilisateur
  const { data: analyses, error } = await supabase
    .from('analyses')
    .select(`
      id,
      type,
      status,
      price,
      currency,
      created_at,
      videos (title, file_path)
    `)
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-white">
      {/* Navigation */}
      <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="flex items-center gap-4">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 w-10 h-10 rounded-lg flex items-center justify-center">
                <span className="font-bold">🎾</span>
              </div>
              <h1 className="text-xl font-bold">Tennis Breakdown Dashboard</h1>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-300">{user.email}</span>
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
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">Mes Analyses</h2>
            <p className="text-gray-300">
              Historique et statut de vos analyses vidéo.
            </p>
          </div>
          <Link
            href="/dashboard/upload"
            className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all"
          >
            + Nouvelle analyse
          </Link>
        </div>

        {error && (
          <div className="p-4 bg-red-900/30 border border-red-700 rounded-lg text-red-200 mb-6">
            Erreur lors du chargement des analyses : {error.message}
          </div>
        )}

        {!analyses || analyses.length === 0 ? (
          <div className="text-center py-12 bg-gray-800 border border-gray-700 rounded-2xl">
            <div className="text-6xl mb-4">📹</div>
            <h3 className="text-xl font-semibold mb-2">Aucune analyse pour le moment</h3>
            <p className="text-gray-400 mb-6">
              Commencez par uploader votre première vidéo !
            </p>
            <Link
              href="/dashboard/upload"
              className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all"
            >
              Uploader une vidéo
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {analyses.map((analysis: any) => (
              <div key={analysis.id} className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      {analysis.videos?.title || 'Vidéo sans titre'}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {new Date(analysis.created_at).toLocaleDateString('fr-FR', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                  <StatusBadge status={analysis.status} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Type :</span>
                    <div className="font-medium capitalize">{analysis.type}</div>
                  </div>
                  <div>
                    <span className="text-gray-400">Prix :</span>
                    <div className="font-medium">
                      {(analysis.price / 100).toFixed(2)} {analysis.currency?.toLowerCase()}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-400">Statut :</span>
                    <div className="font-medium">{analysis.status}</div>
                  </div>
                </div>

                {analysis.status === 'completed' && (
                  <div className="mt-4 p-4 bg-green-900/20 border border-green-700 rounded-lg">
                    <p className="text-green-300 text-sm">
                      ✅ Votre analyse est prête ! Consultez les commentaires sous la vidéo.
                    </p>
                  </div>
                )}

                {analysis.status === 'pending' && (
                  <div className="mt-4 p-4 bg-yellow-900/20 border border-yellow-700 rounded-lg">
                    <p className="text-yellow-300 text-sm">
                      ⏳ Votre analyse est en cours de traitement. Vous serez notifié par email.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    pending: 'bg-yellow-900 text-yellow-200',
    processing: 'bg-blue-900 text-blue-200',
    completed: 'bg-green-900 text-green-200',
    paid: 'bg-green-900 text-green-200',
    failed: 'bg-red-900 text-red-200',
  }

  const defaultStyle = 'bg-gray-700 text-gray-200'

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${styles[status] || defaultStyle}`}>
      {status === 'pending' ? 'En attente' :
       status === 'processing' ? 'En traitement' :
       status === 'completed' ? 'Terminé' :
       status === 'paid' ? 'Payé' :
       status === 'failed' ? 'Échoué' : status}
    </span>
  )
}
