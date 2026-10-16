import { createServerFn } from "@tanstack/react-start";

const CODE = "0118";

function readCode(input: unknown): string {
  const raw =
    typeof input === "string"
      ? input
      : input && typeof input === "object" && "data" in input && typeof input.data === "string"
        ? input.data
        : input && typeof input === "object" && "code" in input && typeof input.code === "string"
          ? input.code
          : "";
  return raw.replace(/\D/g, "");
}

async function readTotal(bump: boolean): Promise<number> {
  const { getSql } = await import("./db");
  const sql = await getSql();
  await sql`create table if not exists site_visits (
    id integer primary key,
    total integer not null default 0
  )`;
  await sql`insert into site_visits (id, total) values (1, 0) on conflict (id) do nothing`;
  if (bump) await sql`update site_visits set total = total + 1 where id = 1`;
  const rows = await sql<{ total: number | string }>`select total from site_visits where id = 1`;
  return Number(rows[0]?.total ?? 0);
}

export const recordVisit = createServerFn({ method: "POST" }).handler(async () => {
  const { getCookie, setCookie } = await import("@tanstack/react-start/server");
  if (getCookie("hb_visit") === "1") return { ok: true as const };
  await readTotal(true);
  setCookie("hb_visit", "1", {
    path: "/",
    maxAge: 60 * 60 * 24,
    sameSite: "lax",
    httpOnly: true,
  });
  return { ok: true as const };
});

export const revealVisits = createServerFn({ method: "POST" })
  .validator((input: unknown) => readCode(input))
  .handler(async ({ data }) => {
    if (data !== CODE) return { ok: false as const };
    const total = await readTotal(false);
    return { ok: true as const, total };
  });
