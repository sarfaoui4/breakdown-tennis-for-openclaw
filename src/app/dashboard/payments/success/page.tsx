'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [session, setSession] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!sessionId) return
    // Fetch session details from Stripe if needed
    // For now, just show success message
    setLoading(false)
  }, [sessionId])

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="text-white">Chargement...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
      <div className="bg-[#1a1a1a] border border-[#ff5722] rounded-2xl p-8 max-w-lg w-full text-center">
        <div className="mb-6">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto" />
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">Paiement réussi !</h1>
        <p className="text-gray-400 mb-6">
          Merci pour votre commande. Votre analyse sera traitée sous 24h.
        </p>
        {sessionId && (
          <p className="text-sm text-gray-500 mb-6">
            ID Session : {sessionId}
          </p>
        )}
        <div className="space-y-3">
          <Link
            href="/dashboard"
            className="block w-full bg-[#ff5722] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#e64a19] transition-colors"
          >
            Retour au dashboard
          </Link>
          <Link
            href="/dashboard/analyses"
            className="block w-full border border-gray-600 text-gray-300 py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            Voir mes analyses
          </Link>
        </div>
      </div>
    </div>
  )
}
