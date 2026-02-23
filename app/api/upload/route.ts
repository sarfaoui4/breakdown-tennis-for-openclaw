// 📤 API Route pour enregistrement métadonnées vidéo - Tennis Breakdown
// Fichier: app/api/upload/route.ts

import { createClient } from '../../src/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()

    // Vérifier authentification
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      return NextResponse.json({ error: 'Non authentifié' }, { status: 401 })
    }

    // Recevoir les métadonnées (fichier déjà uploadé via signed URL)
    const { filePath, title, description, fileSize, fileName, fileType } = await request.json()

    if (!filePath) {
      return NextResponse.json({ error: 'filePath requis' }, { status: 400 })
    }

    // Créer entrée dans table videos
    const { data: videoData, error: dbError } = await supabase
      .from('videos')
      .insert({
        user_id: user.id,
        title: title || 'Analyse tennis',
        description: description || '',
        file_path: filePath,
        file_name: fileName || filePath.split('/').pop(),
        file_size: fileSize || 0,
        file_type: fileType || 'video/mp4',
        status: 'pending', // pending, processing, analyzed, completed
        price_paid: 0, // À mettre à jour après paiement
        created_at: new Date().toISOString()
      })
      .select()
      .single()

    if (dbError) {
      return NextResponse.json({ error: 'Échec enregistrement' }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      video: videoData,
      message: 'Vidéo enregistrée avec succès'
    })

  } catch (error) {
    console.error('Upload metadata error:', error)
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