-- VICE CODEX Phase 3: Feedback Inbox & Real-Time Activity Log (Supabase Free Tier)
-- Safe & idempotent: run once in Supabase Dashboard -> SQL Editor -> Run.

-- 1. User Feedback & Optimization Suggestions
create table if not exists public.vc_feedback (
  id text primary key,
  category text not null default '功能建议',
  author text not null default '@匿名玩家',
  contact text not null default '',
  message text not null,
  page_url text not null default '',
  status text not null default 'new',
  created_at timestamptz not null default now()
);

alter table public.vc_feedback enable row level security;
drop policy if exists "Public read feedback" on public.vc_feedback;
drop policy if exists "Public insert feedback" on public.vc_feedback;
drop policy if exists "Public update feedback" on public.vc_feedback;
create policy "Public read feedback" on public.vc_feedback for select using (true);
create policy "Public insert feedback" on public.vc_feedback for insert with check (char_length(message) between 2 and 2000);
create policy "Public update feedback" on public.vc_feedback for update using (true) with check (status in ('new', 'adopted', 'done'));

-- 2. Real-Time Activity & Login/Comment Event Log (Powers Admin Dashboard & Daily Email Digest)
create table if not exists public.vc_events (
  id text primary key,
  event_type text not null,
  actor text not null default '@匿名玩家',
  summary text not null,
  meta_json jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

alter table public.vc_events enable row level security;
drop policy if exists "Public read events" on public.vc_events;
drop policy if exists "Public insert events" on public.vc_events;
create policy "Public read events" on public.vc_events for select using (true);
create policy "Public insert events" on public.vc_events for insert with check (event_type in ('feedback', 'comment', 'login', 'register', 'post', 'chat'));
