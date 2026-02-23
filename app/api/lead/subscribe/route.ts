import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

const createSupabaseClient = () => {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookies().getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(cookie => cookies().set(cookie.name, cookie.value, cookie.options));
        },
      },
    }
  );
};

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Email invalide' }, { status: 400 })
    }

    // Enregistrer dans Supabase (table leads)
    const supabase = createSupabaseClient()
    const { error: insertError } = await supabase
      .from('leads')
      .insert({ 
        email, 
        source: 'lead_magnet_guide',
        created_at: new Date().toISOString()
      })
      .single()

    if (insertError && insertError.code !== '23505') { // 23505 = unique_violation
      console.error('Lead insert error:', insertError)
    }

    // Retourner succès avec lien vers le guide
    return NextResponse.json({ 
      success: true, 
      message: 'Inscription enregistrée',
      downloadUrl: '/lead-guide.html'
    })
  } catch (error) {
    console.error('Lead subscribe error:', error)
    return NextResponse.json({ error: 'Erreur interne' }, { status: 500 })
  }
}
