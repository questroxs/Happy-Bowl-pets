import { env } from "./env.server";
import { sendShopNote } from "./order-notice.server";

export async function savePromoEmail(email: string): Promise<{ ok: boolean }> {
  let stored = false;
  if (env("DATABASE_URL")) {
    try {
      const { getSql } = await import("./db");
      const sql = await getSql();
      await sql.query("insert into promo_signups (email) values ($1) on conflict (email) do nothing", [
        email,
      ]);
      stored = true;
    } catch (error) {
      console.error("[promo-db]", error instanceof Error ? error.message : "db failed");
    }
  }

  const sent = await sendShopNote(
    "New promo list signup",
    `Someone asked for Happy Bowl Pets discount codes.\n\nEmail: ${email}\n`,
  );
  return { ok: sent || stored };
}
