import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import PaymentCheckout from './components/PaymentCheckout'

export default async function PaymentsPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth/login')
  }

  // Fetch user's orders
  const { data: orders } = await supabase
    .from('orders')
    .select(`
      *,
      matches (*)
    `)
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })

  // Fetch user's analyses
  const { data: analyses } = await supabase
    .from('analyses')
    .select(`
      *,
      matches (*)
    `)
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Paiements & Analyses</h1>
        <p className="text-gray-600">
          Gérez vos paiements, achetez des analyses et suivez vos commandes.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column: Payment checkout */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Acheter une analyse</h2>
            <PaymentCheckout userId={user.id} />
          </div>

          {/* Recent orders */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Mes commandes récentes</h2>
              <Link 
                href="/dashboard/payments/history" 
                className="text-green-600 hover:text-green-700 font-medium"
              >
                Voir tout
              </Link>
            </div>
            
            {orders && orders.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 text-gray-600 font-medium">Date</th>
                      <th className="text-left py-3 px-4 text-gray-600 font-medium">Match</th>
                      <th className="text-left py-3 px-4 text-gray-600 font-medium">Type</th>
                      <th className="text-left py-3 px-4 text-gray-600 font-medium">Montant</th>
                      <th className="text-left py-3 px-4 text-gray-600 font-medium">Statut</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.slice(0, 5).map((order) => (
                      <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4">
                          {new Date(order.created_at).toLocaleDateString('fr-FR')}
                        </td>
                        <td className="py-3 px-4">
                          {order.matches?.player1} vs {order.matches?.player2}
                        </td>
                        <td className="py-3 px-4">
                          <span className={`px-3 py-1 rounded-full text-sm ${
                            order.analysis_type === 'premium' 
                              ? 'bg-purple-100 text-purple-800' 
                              : 'bg-green-100 text-green-800'
                          }`}>
                            {order.analysis_type === 'premium' ? 'Premium' : 'Basique'}
                          </span>
                        </td>
                        <td className="py-3 px-4 font-medium">
                          {(order.amount / 100).toFixed(2)} €
                        </td>
                        <td className="py-3 px-4">
                          <span className={`px-3 py-1 rounded-full text-sm ${
                            order.status === 'paid'
                              ? 'bg-green-100 text-green-800'
                              : order.status === 'pending'
                              ? 'bg-yellow-100 text-yellow-800'
                              : order.status === 'refunded'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {order.status === 'paid' ? 'Payé' : 
                             order.status === 'pending' ? 'En attente' :
                             order.status === 'refunded' ? 'Remboursé' :
                             order.status === 'disputed' ? 'Contesté' : order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-12">
                <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <p className="text-gray-500">Aucune commande pour le moment</p>
                <p className="text-gray-400 text-sm mt-2">Achetez votre première analyse ci-dessus</p>
              </div>
            )}
          </div>
        </div>

        {/* Right column: Stats & pending analyses */}
        <div>
          {/* Payment stats */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-xl font-semibold mb-6">Statistiques de paiement</h3>
            <div className="space-y-6">
              <div>
                <p className="text-gray-500 text-sm mb-1">Total dépensé</p>
                <p className="text-3xl font-bold text-gray-900">
                  {orders && orders.length > 0 
                    ? `${(orders.filter(o => o.status === 'paid').reduce((sum, o) => sum + o.amount, 0) / 100).toFixed(2)} €`
                    : '0,00 €'
                  }
                </p>
              </div>
              <div>
                <p className="text-gray-500 text-sm mb-1">Analyses achetées</p>
                <p className="text-3xl font-bold text-gray-900">
                  {analyses ? analyses.length : 0}
                </p>
              </div>
              <div>
                <p className="text-gray-500 text-sm mb-1">En attente de traitement</p>
                <p className="text-3xl font-bold text-yellow-600">
                  {analyses ? analyses.filter(a => a.status === 'pending').length : 0}
                </p>
              </div>
            </div>
          </div>

          {/* Pending analyses */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-semibold mb-6">Analyses en cours</h3>
            {analyses && analyses.filter(a => a.status === 'pending').length > 0 ? (
              <div className="space-y-4">
                {analyses
                  .filter(a => a.status === 'pending')
                  .slice(0, 3)
                  .map((analysis) => (
                    <div key={analysis.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-medium text-gray-900">
                            {analysis.matches?.player1} vs {analysis.matches?.player2}
                          </p>
                          <p className="text-sm text-gray-500">
                            {analysis.type === 'premium' ? 'Analyse Premium' : 'Analyse Basique'}
                          </p>
                        </div>
                        <span className="text-green-600 font-bold">
                          {(analysis.price / 100).toFixed(2)} €
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Traitement sous 24h</span>
                      </div>
                    </div>
                  ))}
                {analyses.filter(a => a.status === 'pending').length > 3 && (
                  <Link 
                    href="/dashboard/analyses" 
                    className="block text-center text-green-600 hover:text-green-700 font-medium py-2"
                  >
                    Voir toutes les analyses ({analyses.filter(a => a.status === 'pending').length})
                  </Link>
                )}
              </div>
            ) : (
              <div className="text-center py-8">
                <svg className="w-12 h-12 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-500">Aucune analyse en cours</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}