'use client'

import { useState } from 'react'

interface UploadFormProps {
  userId: string
}

export default function UploadForm({ userId }: UploadFormProps) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(false)

    if (!file) {
      setError('Veuillez sélectionner une vidéo')
      return
    }

    setUploading(true)

    try {
      // 1. Demander une URL signée pour upload direct vers Supabase
      const signResponse = await fetch('/api/upload/signed-url', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fileName: file.name,
          fileType: file.type
        })
      })

      const signData = await signResponse.json()
      if (!signResponse.ok) {
        throw new Error(signData.error || 'Échec génération URL signée')
      }

      // 2. Upload direct vers Supabase Storage via signed URL
      const uploadRes = await fetch(signData.signedUrl, {
        method: 'PUT',
        body: file,
        headers: {
          'Content-Type': file.type
        }
      })

      if (!uploadRes.ok) {
        throw new Error('Upload Supabase échoué')
      }

      // 3. Enregistrer les métadonnées dans la base
      const metaResponse = await fetch('/api/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          filePath: signData.filePath,
          title: title || 'Analyse tennis',
          description: description || '',
          fileSize: file.size,
          fileName: file.name,
          fileType: file.type
        })
      })

      const metaData = await metaResponse.json()
      if (!metaResponse.ok) {
        throw new Error(metaData.error || 'Échec enregistrement vidéo')
      }

      setSuccess(true)
      setTitle('')
      setDescription('')
      setFile(null)
      // Rediriger vers le dashboard avec la nouvelle vidéo
      window.location.href = '/dashboard?uploaded=' + metaData.video.id
    } catch (err: any) {
      console.error('Upload error:', err)
      setError(err.message)
    } finally {
      setUploading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-4 bg-red-900/30 border border-red-700 rounded-lg text-red-200">
          {error}
        </div>
      )}
      {success && (
        <div className="p-4 bg-green-900/30 border border-green-700 rounded-lg text-green-200">
          ✅ Vidéo uploadée avec succès ! Redirection...
        </div>
      )}

      <div>
        <label className="block text-sm font-medium mb-2">Titre de la vidéo</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          placeholder="Ex: Mon match de tennis"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Description (optionnel)</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          placeholder="Détails sur le match, le niveau, les points à améliorer..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Fichier vidéo</label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-700 border-dashed rounded-lg hover:border-orange-500 transition-colors">
          <div className="space-y-1 text-center">
            <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
              <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="flex text-sm text-gray-600 justify-center">
              <label htmlFor="video-upload" className="relative cursor-pointer bg-gray-800 rounded-md font-medium text-orange-400 hover:text-orange-300 focus-within:outline-none">
                <span>Télécharger une vidéo</span>
                <input
                  id="video-upload"
                  name="video"
                  type="file"
                  accept="video/*"
                  className="sr-only"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                  required
                />
              </label>
              <p className="pl-1">ou glisser-déposer</p>
            </div>
            <p className="text-xs text-gray-500">MP4, MOV, AVI jusqu'à 100MB (et + grâce à l'upload direct)</p>
            {file && (
              <p className="text-sm text-orange-400 font-medium">
                {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
              </p>
            )}
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={uploading || !file}
        className="w-full py-3 px-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {uploading ? 'Upload en cours...' : 'Uploader la vidéo'}
      </button>
    </form>
  )
}