import { createServerFn } from "@tanstack/react-start";

const CODE = "0118";

export const recordVisit = createServerFn({ method: "POST" }).handler(async () => {
  const { getCookie, setCookie } = await import("@tanstack/react-start/server");
  const { getSql } = await import("./db");
  if (getCookie("hb_visit") === "1") return { ok: true as const };
  const sql = await getSql();
  await sql`update site_visits set total = total + 1 where id = 1`;
  setCookie("hb_visit", "1", {
    path: "/",
    maxAge: 60 * 60 * 24,
    sameSite: "lax",
    httpOnly: true,
  });
  return { ok: true as const };
});

export const revealVisits = createServerFn({ method: "POST" })
  .validator((code: unknown) => (typeof code === "string" ? code.trim() : ""))
  .handler(async ({ data }) => {
    if (data !== CODE) return { ok: false as const };
    const { getSql } = await import("./db");
    const sql = await getSql();
    const rows = await sql<{ total: number | string }>`select total from site_visits where id = 1`;
    return { ok: true as const, total: Number(rows[0]?.total ?? 0) };
  });
