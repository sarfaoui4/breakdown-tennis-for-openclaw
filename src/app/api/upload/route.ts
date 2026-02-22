import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const token = formData.get('token') as string;

    if (!file || !token) {
      return NextResponse.json({ error: 'Missing file or token' }, { status: 400 });
    }

    if (token.length < 10) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 403 });
    }

    const fileName = `${token}/${Date.now()}_${file.name}`;
    const { data, error } = await supabase.storage
      .from('uploads')
      .upload(fileName, file, {
        contentType: file.type,
        upsert: false,
      });

    if (error) {
      console.error('Upload error:', error);
      return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
    }

    const { error: insertError } = await supabase
      .from('videos')
      .insert({
        storage_path: data.path,
        user_id: token,
        status: 'pending',
        offer: 'basic',
        uploaded_at: new Date().toISOString(),
      });

    if (insertError) {
      console.error('DB insert error:', insertError);
    }

    return NextResponse.json({ success: true, path: data.path });
  } catch (error) {
    console.error('Upload route error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
