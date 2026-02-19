// Admin - Mark analysis as completed
// Fichier: app/admin/mark-completed/route.ts

import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    // Simple admin check (à remplacer par un vrai système de rôles)
    if (!user || !user.email?.includes('admin')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const formData = await req.formData()
    const analysisId = formData.get('analysisId') as string

    if (!analysisId) {
      return NextResponse.json({ error: 'Missing analysisId' }, { status: 400 })
    }

    // Update analysis status to completed
    const { error } = await supabase
      .from('analyses')
      .update({ status: 'completed', completed_at: new Date().toISOString() })
      .eq('id', analysisId)

    if (error) {
      console.error('Error updating analysis:', error)
      return NextResponse.json({ error: 'Failed to update' }, { status: 500 })
    }

    // Redirect back to admin
    return NextResponse.redirect(new URL('/admin', req.url))
  } catch (error) {
    console.error('Admin mark completed error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}