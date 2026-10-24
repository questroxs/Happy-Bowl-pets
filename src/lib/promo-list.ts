import { createServerFn } from "@tanstack/react-start";

export function cleanPromoEmail(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const email = value.trim().toLowerCase();
  if (email.length < 6 || email.length > 120) return null;
  if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)) return null;
  return email;
}

export const joinPromoList = createServerFn({ method: "POST" })
  .validator((data: { email?: string }) => ({
    email: cleanPromoEmail(data?.email) ?? "",
  }))
  .handler(async ({ data }) => {
    if (!data.email) return { ok: false as const };
    try {
      const { savePromoEmail } = await import("./promo-list.server.ts");
      return await savePromoEmail(data.email);
    } catch (error) {
      console.error("[promo]", error instanceof Error ? error.message : "save failed");
      return { ok: false as const };
    }
  });
