import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { writeFile, unlink } from 'fs/promises'
import { join } from 'path'
import { tmpdir } from 'os'
import { v4 as uuidv4 } from 'uuid'

// Taille maximale de fichier: 1GB
const MAX_FILE_SIZE = 1024 * 1024 * 1024
const ALLOWED_MIME_TYPES = [
  'video/mp4',
  'video/webm',
  'video/quicktime',
  'video/x-msvideo',
  'video/x-matroska',
  'video/mpeg'
]

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()
    
    // Vérifier l'authentification
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      return NextResponse.json(
        { error: 'Non autorisé' },
        { status: 401 }
      )
    }

    // Obtenir les données du formulaire
    const formData = await request.formData()
    const file = formData.get('file') as File
    const title = formData.get('title') as string || 'Tennis Match Video'
    const description = formData.get('description') as string || ''
    const matchDate = formData.get('matchDate') as string || new Date().toISOString()

    // Valider le fichier
    if (!file) {
      return NextResponse.json(
        { error: 'Aucun fichier fourni' },
        { status: 400 }
      )
    }

    // Vérifier le type MIME
    if (!ALLOWED_MIME_TYPES.includes(file.type)) {
      return NextResponse.json(
        { error: `Type de fichier non supporté. Types autorisés: ${ALLOWED_MIME_TYPES.join(', ')}` },
        { status: 400 }
      )
    }

    // Vérifier la taille
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: `Fichier trop volumineux. Maximum: ${MAX_FILE_SIZE / (1024 * 1024 * 1024)}GB` },
        { status: 400 }
      )
    }

    // Créer un nom de fichier unique
    const fileExtension = file.name.split('.').pop() || 'mp4'
    const fileName = `${uuidv4()}.${fileExtension}`
    const filePath = `${user.id}/${fileName}`

    // Sauvegarder temporairement le fichier
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    
    const tempFilePath = join(tmpdir(), fileName)
    await writeFile(tempFilePath, buffer)

    try {
      // Upload vers Supabase Storage
      const { data: uploadData, error: uploadError } = await supabase
        .storage
        .from('tennis-videos')
        .upload(filePath, buffer, {
          contentType: file.type,
          cacheControl: '3600',
          upsert: false,
        })

      if (uploadError) {
        throw new Error(`Erreur d'upload: ${uploadError.message}`)
      }

      // Enregistrer les métadonnées dans la base de données
      const { data: videoData, error: dbError } = await supabase
        .from('videos')
        .insert({
          user_id: user.id,
          title,
          description,
          match_date: matchDate,
          file_name: fileName,
          file_path: filePath,
          file_size: file.size,
          mime_type: file.type,
          status: 'uploaded',
          storage_url: uploadData?.path
        })
        .select()
        .single()

      if (dbError) {
        // Essayer de supprimer le fichier uploadé en cas d'erreur DB
        await supabase.storage.from('tennis-videos').remove([filePath])
        throw new Error(`Erreur base de données: ${dbError.message}`)
      }

      // Déclencher le traitement asynchrone pour la compression
      // (sera implémenté dans une étape ultérieure)
      await triggerVideoProcessing(videoData.id, filePath)

      return NextResponse.json({
        success: true,
        message: 'Vidéo uploadée avec succès',
        video: videoData,
        processing: true
      })

    } finally {
      // Nettoyer le fichier temporaire
      try {
        await unlink(tempFilePath)
      } catch (cleanupError) {
        console.error('Erreur lors du nettoyage du fichier temporaire:', cleanupError)
      }
    }

  } catch (error: any) {
    console.error('Erreur lors de l\'upload:', error)
    return NextResponse.json(
      { error: error.message || 'Erreur interne du serveur' },
      { status: 500 }
    )
  }
}

async function triggerVideoProcessing(videoId: string, filePath: string) {
  // Cette fonction déclenchera le traitement asynchrone de la vidéo
  // Pour l'instant, on met juste à jour le statut
  const supabase = await createClient()
  
  await supabase
    .from('videos')
    .update({ status: 'processing' })
    .eq('id', videoId)

  console.log(`📹 Déclenchement du traitement pour la vidéo ${videoId}`)
  // Ici, on pourrait déclencher une fonction serverless ou une queue
  // pour le traitement vidéo (compression, etc.)
}

export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient()
    
    // Vérifier l'authentification
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      return NextResponse.json(
        { error: 'Non autorisé' },
        { status: 401 }
      )
    }

    // Récupérer les vidéos de l'utilisateur
    const { data: videos, error } = await supabase
      .from('videos')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })

    if (error) {
      throw new Error(`Erreur base de données: ${error.message}`)
    }

    // Générer les URLs signées pour chaque vidéo
    const videosWithUrls = await Promise.all(
      (videos || []).map(async (video) => {
        const { data: signedUrl } = await supabase
          .storage
          .from('tennis-videos')
          .createSignedUrl(video.file_path, 3600) // URL valide 1 heure

        return {
          ...video,
          signed_url: signedUrl?.signedUrl
        }
      })
    )

    return NextResponse.json({
      success: true,
      videos: videosWithUrls
    })

  } catch (error: any) {
    console.error('Erreur lors de la récupération des vidéos:', error)
    return NextResponse.json(
      { error: error.message || 'Erreur interne du serveur' },
      { status: 500 }
    )
  }
}