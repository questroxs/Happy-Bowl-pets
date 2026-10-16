create table if not exists site_visits (
  id integer primary key,
  total integer not null default 0
);

insert into site_visits (id, total)
values (1, 0)
on conflict (id) do nothing;
