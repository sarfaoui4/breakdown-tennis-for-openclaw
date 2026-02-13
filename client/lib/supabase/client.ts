import { createClient as supabaseCreateClient } from '@supabase/supabase-js';

export const getSupabaseClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    // Return a dummy instance that will throw at runtime, but allows build to pass
    return supabaseCreateClient('http://localhost', 'dummy-key');
  }

  return supabaseCreateClient(supabaseUrl, supabaseAnonKey);
};