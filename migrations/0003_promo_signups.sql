create table if not exists promo_signups (
  email text primary key,
  created_at timestamptz not null default now()
);
