-- Anonymous add-to-cart events. No personal data, IP, or user agent is stored.
create table if not exists cart_events (
  id serial primary key,
  created_at timestamptz not null default now(),
  anon_id text,
  product_slug text not null,
  variant text,
  quantity integer not null default 1
);

create index if not exists cart_events_created_at_idx on cart_events (created_at);
