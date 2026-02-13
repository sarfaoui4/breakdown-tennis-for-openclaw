-- Tennis Breakdown – Supabase Schema
-- À exécuter dans Supabase Studio (SQL Editor)

-- Table des commandes
CREATE TABLE IF NOT EXISTS orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  video_url TEXT NOT NULL,
  price_id TEXT NOT NULL,
  stripe_session_id TEXT,
  status TEXT DEFAULT 'pending',
  comment_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index pour les requêtes
CREATE INDEX idx_orders_user_id ON orders(user_id);
CREATE INDEX idx_orders_status ON orders(status);

-- Row Level Security (RLS)
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Policy : un utilisateur ne voit que ses propres commandes
CREATE POLICY "Users can view own orders" ON orders
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own orders" ON orders
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Function pour update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger sur updated_at
CREATE TRIGGER update_orders_updated_at
  BEFORE UPDATE ON orders
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Buckets Storage (à créer via l'API Supabase, pas en SQL)
--uploads (vidéos client) – policy : authentifié upload, lecture owner
--comments (vidéos commentées) – policy : admin upload, lecture owner
