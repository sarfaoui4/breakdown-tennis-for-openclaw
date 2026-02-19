'use client'

import { useState } from 'react'
import { createClient } from '../../lib/supabase/client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const supabase = createClient()

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas')
      setLoading(false)
      return
    }

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      })

      if (error) throw error

      // Inscription réussie
      router.push('/auth/verify-email')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-700">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">Inscription</h1>
          <p className="text-gray-300 mt-2">Créez votre compte Tennis Breakdown</p>
        </div>

        {error && (
          <div className="bg-red-900/30 text-red-200 p-4 rounded-lg mb-6 border border-red-800">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Adresse email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-gray-900 text-white"
              placeholder="votre@email.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
              Mot de passe
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-gray-900 text-white"
              placeholder="••••••••"
              required
              minLength={6}
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
              Confirmer le mot de passe
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-gray-900 text-white"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Inscription en cours...' : "S'inscrire"}
          </button>
        </form>

        <div className="mt-8 text-center space-y-4">
          <p className="text-gray-300">
            Déjà un compte ?{' '}
            <Link href="/auth/login" className="text-orange-500 hover:text-orange-400 font-semibold">
              Se connecter
            </Link>
          </p>
          <Link
            href="/"
            className="inline-block text-gray-500 hover:text-gray-400 text-sm"
          >
            ← Retour à l'accueil
          </Link>
        </div>

        <div className="mt-8 text-sm text-gray-400">
          <p>
            En vous inscrivant, vous acceptez nos{' '}
            <Link href="/terms" className="text-orange-400 hover:underline">
              Conditions d'utilisation
            </Link>{' '}
            et notre{' '}
            <Link href="/privacy" className="text-orange-400 hover:underline">
              Politique de confidentialité
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}