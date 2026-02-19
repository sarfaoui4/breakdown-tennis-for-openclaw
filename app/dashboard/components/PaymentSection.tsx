'use client'

import { useState } from 'react'

interface PaymentSectionProps {
  videoId: string
}

export default function PaymentSection({ videoId }: PaymentSectionProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handlePay = async (type: 'basic' | 'premium') => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          videoId: videoId,
          analysisType: type,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors de la création du paiement')
      }

      // Redirection vers Stripe Checkout
      window.location.href = data.url
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold mb-4">💳 Finaliser votre commande</h3>
      <p className="text-gray-300 mb-6">
        Votre vidéo a été uploadée avec succès ! Choisissez une option d'analyse ci-dessous.
      </p>

      {error && (
        <div className="p-4 bg-red-900/30 border border-red-700 rounded-lg text-red-200 mb-6">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Basic */}
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
          <h4 className="text-xl font-bold mb-2">Analyse Basique</h4>
          <div className="text-3xl font-bold mb-4">19,99€</div>
          <ul className="text-sm text-gray-300 space-y-2 mb-6">
            <li>✅ Analyse vidéo complète</li>
            <li>✅ Commentaires détaillés</li>
            <li>✅ Conseils d'amélioration</li>
            <li>⏱️ Délai: 24-48h</li>
          </ul>
          <button
            onClick={() => handlePay('basic')}
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all disabled:opacity-50"
          >
            {loading ? 'Traitement...' : 'Payer et analyser'}
          </button>
        </div>

        {/* Premium */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-orange-500 rounded-xl p-6 relative">
          <div className="absolute -top-3 right-4 px-3 py-1 bg-orange-500 text-white text-sm rounded-full">
            Recommandé
          </div>
          <h4 className="text-xl font-bold mb-2">Analyse Premium</h4>
          <div className="text-3xl font-bold mb-4">49,99€</div>
          <ul className="text-sm text-gray-300 space-y-2 mb-6">
            <li>✅ Tout inclus Basique</li>
            <li>✅ Analyse comparative</li>
            <li>✅ Session Zoom 30min</li>
            <li>✅ Support prioritaire</li>
            <li>⏱️ Délai: 12-24h</li>
          </ul>
          <button
            onClick={() => handlePay('premium')}
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all disabled:opacity-50"
          >
            {loading ? 'Traitement...' : 'Payer et analyser'}
          </button>
        </div>
      </div>
    </div>
  )
}
