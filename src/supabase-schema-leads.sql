-- Création de la table leads pour le lead magnet
CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  source VARCHAR(100) DEFAULT 'lead_magnet_guide',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  notified_at TIMESTAMPTZ,
  CONSTRAINT leads_email_unique UNIQUE (email)
);

-- Index pour performances
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);

-- Row Level Security (RLS) - désactivé pour permettre l'insertion via service_role
-- Si activé, il faut une politique INSERT
ALTER TABLE leads DISABLE ROW LEVEL SECURITY;

-- Politique pour允许 INSERT (si RLS activé)
-- CREATE POLICY "Allow insert for service role" ON leads FOR INSERT WITH CHECK (true);
-- CREATE POLICY "Allow select for service role" ON leads FOR SELECT USING (true);
