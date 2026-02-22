'use client'

import { useState } from 'react'
import { toast, Toaster } from 'sonner'

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'premium' | null>(null)

  const handleChoosePlan = async (plan: 'basic' | 'premium') => {
    setSelectedPlan(plan)
    // Rediriger vers l'inscription avec le plan en paramètre
    window.location.href = `/auth/register?plan=${plan}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 text-white">
      <Toaster position="top-center" richColors />

      {/* Navigation */}
      <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 w-10 h-10 rounded-lg flex items-center justify-center">
              <span className="font-bold">🎾</span>
            </div>
            <h1 className="text-2xl font-bold">Tennis Breakdown</h1>
          </div>
          <div className="flex gap-4">
            <a href="/auth/login" className="px-4 py-2 text-gray-300 hover:text-white transition-colors">
              Connexion
            </a>
            <a href="/auth/register" className="px-4 py-2 bg-orange-500 text-white hover:bg-orange-600 rounded-lg font-medium transition-colors">
              Inscription
            </a>
          </div>
        </div>
      </nav>

      {/* Main */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Des tarifs <span className="text-orange-400">simples et transparents</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choisissez l'analyse qui correspond à vos besoins. Pas de frais cachés, satisfaction garantie 7 jours.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-2">Analyse Basique</h3>
            <div className="text-4xl font-bold mb-6">
              19,99€ <span className="text-lg font-normal text-gray-400">/analyse</span>
            </div>
            <ul className="space-y-3 text-gray-300 mb-8">
              <li>✅ Analyse vidéo complète</li>
              <li>✅ Commentaires détaillés (timestampés)</li>
              <li>✅ Conseils d'amélioration personnalisés</li>
              <li>✅ Livraison sous 24-48h</li>
              <li>❌ Analyse comparative</li>
              <li>❌ Session Zoom</li>
              <li>❌ Support prioritaire</li>
            </ul>
            <button
              onClick={() => handleChoosePlan('basic')}
              className="w-full py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 rounded-lg font-semibold transition-all"
            >
              Commencer avec Basique
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 border-2 border-orange-500 rounded-2xl p-8 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-orange-500 rounded-full text-sm font-bold">
              Recommandé
            </div>
            <h3 className="text-2xl font-bold mb-2">Analyse Premium</h3>
            <div className="text-4xl font-bold mb-6">
              49,99€ <span className="text-lg font-normal text-gray-400">/analyse</span>
            </div>
            <ul className="space-y-3 text-gray-300 mb-8">
              <li>✅ Tout inclus dans Basique</li>
              <li>✅ Analyse comparative (vs pros)</li>
              <li>✅ Session Zoom 30min avec expert</li>
              <li>✅ Support prioritaire (24h)</li>
              <li>✅ Révisions illimitées 7 jours</li>
              <li>✅ Délai express 12-24h</li>
              <li>✅ Accès archive analyses</li>
            </ul>
            <button
              onClick={() => handleChoosePlan('premium')}
              className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-lg font-semibold transition-all"
            >
              Choisir Premium
            </button>
          </div>
        </div>

        {/* Guarantee & FAQ */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Notre garantie</h2>
            <p className="text-gray-300 text-center">
              Si vous n'êtes pas satisfait de l'analyse, nous vous remboursons intégralement sous 7 jours.
              Aucune question posée.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-6">Questions fréquentes</h2>
          <div className="space-y-4">
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">Comment ça fonctionne ?</h3>
              <p className="text-gray-300">
                1. Vous commandez une analyse et uploadez votre vidéo.<br/>
                2. Notre expert tennis analyse chaque point.<br/>
                3. Vous recevez une vidéo commentée + PDF détaillé sous 24-48h.
              </p>
            </div>
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">Quels formats de vidéo acceptez-vous ?</h3>
              <p className="text-gray-300">
                MP4, MOV, AVI. Jusqu'à 2GB. Idéalement 720p minimum, 1 heure max.
              </p>
            </div>
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-2">Puis-je modifier mon analyse après réception ?</h3>
              <p className="text-gray-300">
                Oui, avec le plan Premium vous avez 7 jours pour demander des révisions (illimitées).
                Avec le plan Basic, une révision gratuite incluse.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-16 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-500 text-sm">
          <p>© 2025 Tennis Breakdown. Tous droits réservés.</p>
          <p className="mt-2">
            <a href="/privacy" className="hover:text-white transition-colors">Politique de confidentialité</a>
          </p>
        </div>
      </footer>
    </div>
  )
}
