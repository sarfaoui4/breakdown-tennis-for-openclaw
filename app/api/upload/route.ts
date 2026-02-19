// 📤 API Route pour upload vidéo - Tennis Breakdown
// Fichier: app/api/upload/route.ts

import { createClient } from '../../lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()
    
    // Vérifier authentification
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      return NextResponse.json({ error: 'Non authentifié' }, { status: 401 })
    }

    const formData = await request.formData()
    const file = formData.get('video') as File
    const title = formData.get('title') as string
    const description = formData.get('description') as string

    if (!file) {
      return NextResponse.json({ error: 'Aucun fichier vidéo' }, { status: 400 })
    }

    // Vérifier type fichier
    if (!file.type.startsWith('video/')) {
      return NextResponse.json({ error: 'Format vidéo requis' }, { status: 400 })
    }

    // Limite taille (100MB)
    const maxSize = 100 * 1024 * 1024
    if (file.size > maxSize) {
      return NextResponse.json({ error: 'Fichier trop volumineux (max 100MB)' }, { status: 400 })
    }

    // Générer nom unique
    const fileExt = file.name.split('.').pop()
    const fileName = `${crypto.randomUUID()}.${fileExt}`
    const filePath = `videos/${user.id}/${fileName}`

    // Upload vers Supabase Storage
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('tennis-videos')
      .upload(filePath, file)

    if (uploadError) {
      return NextResponse.json({ error: 'Échec upload' }, { status: 500 })
    }

    // Créer entrée dans table videos
    const { data: videoData, error: dbError } = await supabase
      .from('videos')
      .insert({
        user_id: user.id,
        title: title || 'Analyse tennis',
        description: description || '',
        file_path: filePath,
        file_name: file.name,
        file_size: file.size,
        file_type: file.type,
        status: 'pending', // pending, processing, analyzed, completed
        price_paid: 0, // À mettre à jour après paiement
        created_at: new Date().toISOString()
      })
      .select()
      .single()

    if (dbError) {
      // Rollback: supprimer le fichier uploadé
      await supabase.storage.from('tennis-videos').remove([filePath])
      return NextResponse.json({ error: 'Échec enregistrement' }, { status: 500 })
    }

    // TODO: Notifier Sami via email/Telegram
    // TODO: Déclencher webhook pour traitement

    return NextResponse.json({
      success: true,
      video: videoData,
      message: 'Vidéo uploadée avec succès'
    })

  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}

// GET: Liste des vidéos de l'utilisateur
export async function GET(request: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    return NextResponse.json({ error: 'Non authentifié' }, { status: 401 })
  }

  const { data: videos, error } = await supabase
    .from('videos')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })

  if (error) {
    return NextResponse.json({ error: 'Erreur base de données' }, { status: 500 })
  }

  return NextResponse.json({ videos })
}