'use client'

import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { createClient } from '@/lib/supabase/client'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

interface PaymentCheckoutProps {
  userId: string
}

export default function PaymentCheckout({ userId }: PaymentCheckoutProps) {
  const [loading, setLoading] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'premium'>('basic')

  const handleCheckout = async () => {
    setLoading(true)
    try {
      const supabase = createClient()
      
      // Créer une session de checkout Stripe
      const response = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          planType: selectedPlan,
        }),
      })

      const { sessionId } = await response.json()
      
      const stripe = await stripePromise
      if (!stripe) {
        throw new Error('Stripe non initialisé')
      }

      const { error } = await stripe.redirectToCheckout({ sessionId })
      
      if (error) {
        console.error('Erreur Stripe:', error)
        alert('Erreur lors du paiement: ' + error.message)
      }
    } catch (error) {
      console.error('Erreur checkout:', error)
      alert('Erreur lors de l\'initialisation du paiement')
    } finally {
      setLoading(false)
    }
  }

  const plans = {
    basic: {
      name: 'Analyse Basique',
      price: 19.99,
      features: [
        'Analyse vidéo complète',
        'Commentaires détaillés',
        'Conseils d\'amélioration',
        'Délai: 24-48h',
      ],
    },
    premium: {
      name: 'Analyse Premium',
      price: 49.99,
      features: [
        'Tout inclus dans Basique',
        'Analyse comparative',
        'Plan d\'entraînement personnalisé',
        'Session Zoom de 30min',
        'Délai: 12-24h',
        'Support prioritaire',
      ],
    },
  }

  const selectedPlanData = plans[selectedPlan]

  return (
    <div className="space-y-6">
      {/* Sélection du plan */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          onClick={() => setSelectedPlan('basic')}
          className={`p-6 rounded-xl border-2 transition-all ${
            selectedPlan === 'basic'
              ? 'border-green-500 bg-green-50'
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <div className="text-left">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Basique</h3>
            <div className="mb-4">
              <span className="text-3xl font-bold text-gray-900">19,99€</span>
              <span className="text-gray-500"> / analyse</span>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Analyse vidéo complète
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Commentaires détaillés
              </li>
            </ul>
          </div>
        </button>

        <button
          onClick={() => setSelectedPlan('premium')}
          className={`p-6 rounded-xl border-2 transition-all ${
            selectedPlan === 'premium'
              ? 'border-purple-500 bg-purple-50'
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <div className="text-left">
            <div className="flex items-center mb-2">
              <h3 className="text-xl font-semibold text-gray-900 mr-2">Premium</h3>
              <span className="px-2 py-1 text-xs font-semibold bg-purple-100 text-purple-800 rounded-full">
                Recommandé
              </span>
            </div>
            <div className="mb-4">
              <span className="text-3xl font-bold text-gray-900">49,99€</span>
              <span className="text-gray-500"> / analyse</span>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center">
                <svg className="w-4 h-4 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Tout inclus dans Basique
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Session Zoom de 30min
              </li>
            </ul>
          </div>
        </button>
      </div>

      {/* Détails du plan sélectionné */}
      <div className="bg-gray-50 rounded-xl p-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">
          {selectedPlanData.name} - {selectedPlanData.price.toFixed(2)}€
        </h4>
        <ul className="space-y-3">
          {selectedPlanData.features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Bouton de paiement */}
      <button
        onClick={handleCheckout}
        disabled={loading}
        className={`w-full py-4 px-6 rounded-xl text-lg font-semibold transition-all ${
          selectedPlan === 'premium'
            ? 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800'
            : 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800'
        } text-white disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {loading ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
            Initialisation du paiement...
          </div>
        ) : (
          `Procéder au paiement - ${selectedPlanData.price.toFixed(2)}€`
        )}
      </button>

      {/* Sécurité */}
      <div className="text-center text-sm text-gray-500">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span>Paiement 100% sécurisé par Stripe</span>
        </div>
        <p>Garantie satisfait ou remboursé sous 14 jours</p>
      </div>
    </div>
  )
}