-- VICE CODEX Phase 3: Secure Write-Only Feedback Inbox & Activity Log (Supabase RLS)
-- Safe & idempotent: run once in Supabase Dashboard -> SQL Editor -> Run.
-- SECURITY: Public visitors can ONLY insert new feedback/events.
-- Nobody can read or modify vc_feedback / vc_events with the public key!
-- Only the site owner (via Supabase Secret / service_role key in local private dashboard or GitHub Secrets) can read/manage them.

-- 1. User Feedback & Optimization Suggestions (Public INSERT-ONLY)
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
create policy "Public insert feedback" on public.vc_feedback
  for insert
  with check (char_length(message) between 2 and 2000 and status = 'new');

-- 2. Real-Time Activity & Login/Comment Event Log (Public INSERT-ONLY)
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
create policy "Public insert events" on public.vc_events
  for insert
  with check (event_type in ('feedback', 'comment', 'login', 'register', 'post', 'chat'));
