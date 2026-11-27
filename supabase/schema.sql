-- VICE CODEX Cloud Social & Real-Time Chat Schema (Supabase Free Tier)
-- Paste and run once in Supabase Dashboard -> SQL Editor -> Run.

create extension if not exists pgcrypto;

-- 1. Global Community Guides / Posts
create table if not exists public.community_posts (
  id text primary key,
  title text not null,
  author text not null,
  category text not null,
  video_url text default '',
  body text not null,
  upvotes integer not null default 1,
  created_at timestamptz not null default now()
);

-- 2. Global Console & PC Squad Cards
create table if not exists public.squad_cards (
  id text primary key,
  game_id text not null,
  platform text not null,
  note text not null,
  created_at timestamptz not null default now()
);

-- 3. Global 4-Channel Real-Time Chat
create table if not exists public.chat_messages (
  id uuid primary key default gen_random_uuid(),
  channel text not null,
  author text not null,
  text text not null,
  created_at timestamptz not null default now()
);

-- 4. Global Video & Guide Comments
create table if not exists public.item_comments (
  id uuid primary key default gen_random_uuid(),
  target_key text not null,
  author text not null,
  text text not null,
  created_at timestamptz not null default now()
);

-- Enable Row Level Security (public read + open community insert/upvote)
alter table public.community_posts enable row level security;
alter table public.squad_cards enable row level security;
alter table public.chat_messages enable row level security;
alter table public.item_comments enable row level security;

create policy "Public read posts" on public.community_posts for select using (true);
create policy "Public insert posts" on public.community_posts for insert with check (char_length(title) between 2 and 120 and char_length(body) between 2 and 2000);
create policy "Public upvote posts" on public.community_posts for update using (true) with check (true);

create policy "Public read squad" on public.squad_cards for select using (true);
create policy "Public insert squad" on public.squad_cards for insert with check (char_length(game_id) between 2 and 40);

create policy "Public read chat" on public.chat_messages for select using (true);
create policy "Public insert chat" on public.chat_messages for insert with check (char_length(text) between 1 and 500);

create policy "Public read comments" on public.item_comments for select using (true);
create policy "Public insert comments" on public.item_comments for insert with check (char_length(text) between 1 and 800);

-- Indexes for fast loading
create index if not exists idx_chat_channel_time on public.chat_messages (channel, created_at desc);
create index if not exists idx_comments_target on public.item_comments (target_key, created_at asc);
