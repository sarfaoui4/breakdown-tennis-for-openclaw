// 🛠️ Admin Panel - Tennis Breakdown
// Fichier: app/admin/page.tsx

import { createClient } from '../../lib/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default async function AdminPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  // Simple admin check: email contains "admin" (à remplacer par un vrai système de rôles)
  if (!user || !user.email?.includes('admin')) {
    redirect('/dashboard')
  }

  // Récupérer toutes les commandes
  const { data: orders } = await supabase
    .from('orders')
    .select(`
      id,
      status,
      created_at,
      stripe_session_id,
      users (email)
    `)
    .order('created_at', { ascending: false })
    .limit(50)

  // Récupérer toutes les analyses
  const { data: analyses } = await supabase
    .from('analyses')
    .select(`
      id,
      status,
      type,
      created_at,
      price,
      currency,
      users (email),
      videos (title, file_path)
    `)
    .order('created_at', { ascending: false })
    .limit(50)

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-gray-800 border-b border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-4">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 w-10 h-10 rounded-lg flex items-center justify-center">
                <span className="font-bold">🎾</span>
              </div>
              <h1 className="text-xl font-bold">Tennis Breakdown Admin</h1>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-300">{user.email}</span>
            <form action="/auth/signout" method="post">
              <button type="submit" className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg border border-gray-600 transition-colors">
                Déconnexion
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-2">Panel d'administration</h2>
          <p className="text-gray-400">
            Gestion des commandes et analyses.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
            <h3 className="text-sm font-medium text-gray-400 mb-2">Commandes totales</h3>
            <div className="text-2xl font-bold">{orders?.length || 0}</div>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
            <h3 className="text-sm font-medium text-gray-400 mb-2">Commandes payées</h3>
            <div className="text-2xl font-bold text-green-400">
              {orders?.filter(o => o.status === 'paid').length || 0}
            </div>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
            <h3 className="text-sm font-medium text-gray-400 mb-2">Analyses en cours</h3>
            <div className="text-2xl font-bold text-yellow-400">
              {analyses?.filter(a => a.status === 'pending' || a.status === 'processing').length || 0}
            </div>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
            <h3 className="text-sm font-medium text-gray-400 mb-2">Analyses terminées</h3>
            <div className="text-2xl font-bold text-blue-400">
              {analyses?.filter(a => a.status === 'completed').length || 0}
            </div>
          </div>
        </div>

        {/* Orders Table */}
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mb-8">
          <h3 className="text-xl font-bold mb-4">Commandes récentes</h3>
          {!orders || orders.length === 0 ? (
            <p className="text-gray-400">Aucune commande.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-2">ID</th>
                    <th className="text-left py-2">Client</th>
                    <th className="text-left py-2">Statut</th>
                    <th className="text-left py-2">Date</th>
                    <th className="text-left py-2">Session Stripe</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order: any) => (
                    <tr key={order.id} className="border-b border-gray-700 last:border-0">
                      <td className="py-2 font-mono text-xs">{order.id.slice(0, 8)}...</td>
                      <td className="py-2">{order.users?.email || 'N/A'}</td>
                      <td className="py-2">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          order.status === 'paid' ? 'bg-green-900 text-green-200' :
                          order.status === 'pending' ? 'bg-yellow-900 text-yellow-200' :
                          'bg-gray-700 text-gray-200'
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="py-2">{new Date(order.created_at).toLocaleDateString('fr-FR')}</td>
                      <td className="py-2 font-mono text-xs">{order.stripe_session_id?.slice(0, 12)}...</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Analyses Table */}
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4">Analyses récentes</h3>
          {!analyses || analyses.length === 0 ? (
            <p className="text-gray-400">Aucune analyse.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-2">ID</th>
                    <th className="text-left py-2">Client</th>
                    <th className="text-left py-2">Vidéo</th>
                    <th className="text-left py-2">Type</th>
                    <th className="text-left py-2">Statut</th>
                    <th className="text-left py-2">Date</th>
                    <th className="text-left py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {analyses.map((analysis: any) => (
                    <tr key={analysis.id} className="border-b border-gray-700 last:border-0">
                      <td className="py-2 font-mono text-xs">{analysis.id.slice(0, 8)}...</td>
                      <td className="py-2">{analysis.users?.email || 'N/A'}</td>
                      <td className="py-2 max-w-xs truncate" title={analysis.videos?.title}>
                        {analysis.videos?.title || 'N/A'}
                      </td>
                      <td className="py-2 capitalize">{analysis.type}</td>
                      <td className="py-2">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          analysis.status === 'completed' ? 'bg-green-900 text-green-200' :
                          analysis.status === 'processing' ? 'bg-blue-900 text-blue-200' :
                          analysis.status === 'pending' ? 'bg-yellow-900 text-yellow-200' :
                          'bg-gray-700 text-gray-200'
                        }`}>
                          {analysis.status}
                        </span>
                      </td>
                      <td className="py-2">{new Date(analysis.created_at).toLocaleDateString('fr-FR')}</td>
                      <td className="py-2">
                        {analysis.status !== 'completed' && (
                          <form action="/admin/mark-completed" method="post" className="inline">
                            <input type="hidden" name="analysisId" value={analysis.id} />
                            <button
                              type="submit"
                              className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs font-medium transition-colors"
                            >
                              Marquer terminé
                            </button>
                          </form>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}