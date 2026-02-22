'use client'

import { useState } from 'react'
import { toast, Toaster } from 'sonner'

export default function LeadMagnetPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/lead/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        toast.success('🎉 Guide envoyé ! Vérifiez votre boîte mail.')
        setEmail('')
        // Option: afficher un bouton de téléchargement direct
        // window.location.href = data.downloadUrl
      } else {
        toast.error(data.error || 'Erreur lors de l\'inscription. Réessayez.')
      }
    } catch (error) {
      toast.error('Erreur réseau. Vérifiez votre connexion.')
    } finally {
      setLoading(false)
    }
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
          <a href="/" className="px-4 py-2 text-gray-300 hover:text-white transition-colors">
            Retour à l'accueil
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6">
            Le Guide Ultime de l'<span className="text-orange-400">Analyse Vidéo Tennis</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Apprenez à analyser vos matchs comme un pro. 30 pages de conseils pratiques,
            exercices et checklists pour progresser durablement.
          </p>

          <div className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 rounded-xl text-lg font-bold shadow-lg">
            📖 Télécharger le guide gratuitement
          </div>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-2">Identifiez vos erreurs</h3>
            <p className="text-gray-400">Apprenez à repérer les 5 erreurs qui freinent 90% des joueurs.</p>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 text-center">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-2">Mesurez votre progression</h3>
            <p className="text-gray-400">Checklist et méthode pour objectiver votre amélioration.</p>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-2">Résultats rapides</h3>
            <p className="text-gray-400">Corrigez vos défauts en 2 semaines avec des exercices ciblés.</p>
          </div>
        </div>

        {/* Form */}
        <div className="max-w-md mx-auto bg-gray-800 border border-gray-700 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Recevez le guide par email
          </h2>
          <p className="text-gray-400 text-center mb-6">
            Entrez votre email et vous recevrez immédiatement le PDF (30 pages).
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Adresse email
              </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="vous@exemple.com"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? '⏳ Envoi en cours...' : '📥 Télécharger le guide'}
            </button>

            <p className="text-xs text-gray-500 text-center mt-4">
              Pas de spam. Vous pouvez vous désabonner à tout moment.
            </p>
          </form>
        </div>

        {/* Preview */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Ce que vous allez découvrir</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            {[
              '📹 Comment filmer comme un pro',
              '❌ Les 5 erreurs à éviter absolument',
              '✅ Checklist d\'analyse détaillée',
              '🎯 Exercices de correction pas à pas',
              '📊 Exemples avant/après réels',
              '🔧 Glossaire technique complet',
              '⚡ Routine d\'analyse en 15 min',
              '💡 Ressources pour aller plus loin'
            ].map((item, i) => (
              <div key={i} className="bg-gray-800 border border-gray-700 rounded-lg p-4 text-gray-300">
                {item}
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-16 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-500 text-sm">
          <p>© 2025 Tennis Breakdown – Tous droits réservés</p>
          <p className="mt-2">
            <a href="/privacy" className="hover:text-white transition-colors">Politique de confidentialité</a>
          </p>
        </div>
      </footer>
    </div>
  )
}
