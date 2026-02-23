import { createClient } from '../../../../src/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      return NextResponse.json({ error: 'Non authentifié' }, { status: 401 })
    }

    const { fileName, fileType } = await request.json()

    if (!fileName || !fileType) {
      return NextResponse.json({ error: 'fileName et fileType requis' }, { status: 400 })
    }

    // Générer chemin unique
    const fileExt = fileName.split('.').pop()
    const uniqueName = `${crypto.randomUUID()}.${fileExt}`
    const filePath = `videos/${user.id}/${uniqueName}`

    // Obtenir URL signée (upload direct)
    const { data: uploadData, error } = await supabase.storage
      .from('tennis-videos')
      .createSignedUploadUrl(filePath)

    if (error) {
      return NextResponse.json({ error: 'Erreur génération URL' }, { status: 500 })
    }

    return NextResponse.json({
      signedUrl: uploadData.signedUrl,
      filePath: filePath,
      publicUrl: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/tennis-videos/${filePath}`
    })

  } catch (error) {
    console.error('Signed URL error:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
