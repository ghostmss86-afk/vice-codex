-- VICE CODEX Phase 1 Social & In-Site Account Upgrade (Supabase Free Tier)
-- Safe & idempotent: run once in Supabase Dashboard -> SQL Editor -> Run.

-- 1. Optional In-Site Member Accounts (Username + Salted SHA-256 Hash + Cloud Progress Sync)
create table if not exists public.vc_members (
  username text primary key,
  display_name text not null,
  password_hash text not null,
  platform text not null default 'PS5',
  avatar_color text not null default '#FF5A36',
  progress_json jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

alter table public.vc_members enable row level security;
drop policy if exists "Public read members" on public.vc_members;
drop policy if exists "Public insert members" on public.vc_members;
drop policy if exists "Public update members" on public.vc_members;
create policy "Public read members" on public.vc_members for select using (true);
create policy "Public insert members" on public.vc_members for insert with check (char_length(username) between 2 and 32 and char_length(password_hash) = 64);
create policy "Public update members" on public.vc_members for update using (true) with check (true);

-- 2. Emoji Reactions (fire / like / lol) for Chat Messages & Community Posts
create table if not exists public.reactions (
  target_key text not null,
  emoji text not null,
  count integer not null default 1,
  updated_at timestamptz not null default now(),
  primary key (target_key, emoji)
);

alter table public.reactions enable row level security;
drop policy if exists "Public read reactions" on public.reactions;
drop policy if exists "Public insert reactions" on public.reactions;
drop policy if exists "Public update reactions" on public.reactions;
create policy "Public read reactions" on public.reactions for select using (true);
create policy "Public insert reactions" on public.reactions for insert with check (emoji in ('fire', 'like', 'lol'));
create policy "Public update reactions" on public.reactions for update using (true) with check (true);

-- 3. Add Reply Quotes & Member Badges to Existing Chat Table
alter table public.chat_messages add column if not exists reply_to_author text not null default '';
alter table public.chat_messages add column if not exists reply_to_text text not null default '';
alter table public.chat_messages add column if not exists is_member boolean not null default false;
alter table public.chat_messages add column if not exists platform text not null default '';
alter table public.chat_messages add column if not exists avatar_color text not null default '#F5B041';

-- 4. Allow authors to manage their own posts/comments metadata
alter table public.community_posts add column if not exists is_member boolean not null default false;
alter table public.community_posts add column if not exists platform text not null default '';
