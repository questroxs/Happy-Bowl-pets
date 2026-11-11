import { randomBytes } from "node:crypto";
import { env } from "./env.server";
import { sendShopNote } from "./order-notice.server";

function welcomeCode(): string {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const bytes = randomBytes(6);
  let tail = "";
  for (let i = 0; i < 6; i += 1) tail += alphabet[bytes[i]! % alphabet.length];
  return `HB25-${tail}`;
}

export async function savePromoEmail(email: string): Promise<{ ok: true; code: string } | { ok: false }> {
  const code = welcomeCode();
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
    `25% off code for a first order.\n\nEmail: ${email}\nCode: ${code}\n`,
  );
  if (!sent && !stored) return { ok: false };
  return { ok: true, code };
}
