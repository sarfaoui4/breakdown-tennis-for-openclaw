-- Table orders
create table if not exists orders (
  id uuid default gen_random_uuid() primary key,
  stripe_session_id text unique not null,
  user_id text not null,
  offer text not null,
  video_id uuid references videos(id),
  status text default 'pending',
  amount integer,
  currency text,
  payment_intent text,
  created_at timestamp with time zone default now()
);

-- Table videos
create table if not exists videos (
  id uuid default gen_random_uuid() primary key,
  user_id text not null,
  storage_path text not null,
  status text default 'pending',
  offer text,
  uploaded_at timestamp with time zone default now()
);

-- Bucket Storage: uploads (créer via Supabase UI ou API)
-- insert into storage.buckets (id, name, public) values ('uploads', 'uploads', false);
