-- Création de la table videos pour Tennis Breakdown
CREATE TABLE IF NOT EXISTS videos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  match_date TIMESTAMP WITH TIME ZONE,
  file_name TEXT NOT NULL,
  file_path TEXT NOT NULL,
  file_size BIGINT NOT NULL,
  mime_type TEXT NOT NULL,
  status TEXT DEFAULT 'uploaded' CHECK (status IN ('uploaded', 'processing', 'compressed', 'ready', 'failed')),
  compressed_file_path TEXT,
  compression_ratio DECIMAL(5,2),
  processing_time INTEGER,
  storage_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Ajouter des contraintes d'unicité si nécessaire
  UNIQUE(user_id, file_path)
);

-- Créer un index pour les requêtes fréquentes
CREATE INDEX IF NOT EXISTS idx_videos_user_id ON videos(user_id);
CREATE INDEX IF NOT EXISTS idx_videos_status ON videos(status);
CREATE INDEX IF NOT EXISTS idx_videos_created_at ON videos(created_at DESC);

-- Fonction pour mettre à jour updated_at automatiquement
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_videos_updated_at
    BEFORE UPDATE ON videos
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Ajouter des politiques RLS (Row Level Security)
ALTER TABLE videos ENABLE ROW LEVEL SECURITY;

-- Politique: les utilisateurs ne peuvent voir que leurs propres vidéos
CREATE POLICY "Users can view own videos" ON videos
    FOR SELECT USING (auth.uid() = user_id);

-- Politique: les utilisateurs peuvent insérer leurs propres vidéos
CREATE POLICY "Users can insert own videos" ON videos
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Politique: les utilisateurs peuvent mettre à jour leurs propres vidéos
CREATE POLICY "Users can update own videos" ON videos
    FOR UPDATE USING (auth.uid() = user_id);

-- Politique: les utilisateurs peuvent supprimer leurs propres vidéos
CREATE POLICY "Users can delete own videos" ON videos
    FOR DELETE USING (auth.uid() = user_id);

-- Créer une vue pour les statistiques vidéo
CREATE OR REPLACE VIEW video_stats AS
SELECT 
    user_id,
    COUNT(*) as total_videos,
    COUNT(*) FILTER (WHERE status = 'ready') as ready_videos,
    COUNT(*) FILTER (WHERE status = 'processing') as processing_videos,
    COUNT(*) FILTER (WHERE status = 'failed') as failed_videos,
    SUM(file_size) as total_storage_bytes,
    AVG(compression_ratio) as avg_compression_ratio
FROM videos
GROUP BY user_id;