// 📤 Dashboard - Page d'upload de vidéo
// Fichier: app/dashboard/upload/page.tsx

import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import UploadForm from '@/components/UploadForm' // On va créer ce composant

export default async function UploadPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth/login')
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
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Uploader une vidéo</h2>
          <p className="text-gray-300">
            Envoyez votre vidéo de match pour analyse par nos experts.
          </p>
        </div>

        <div className="max-w-2xl">
          <UploadForm userId={user.id} />
        </div>

        <div className="mt-8 p-4 bg-gray-800 border border-gray-700 rounded-xl">
          <h4 className="font-semibold mb-2">⚠️ Instructions</h4>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>• Format vidéo : MP4, MOV, AVI (max 100MB)</li>
            <li>• Durée recommandée : 1 à 3 heures</li>
            <li>• Qualité : 720p minimum</li>
            <li>• Le paiement sera requis après l'upload</li>
          </ul>
        </div>
      </main>
    </div>
  )
}
