import { createServerFn } from "@tanstack/react-start";

export const notifyPaidOrder = createServerFn({ method: "POST" })
  .validator((data: { sessionId?: string }) => {
    const sessionId = typeof data?.sessionId === "string" ? data.sessionId.trim() : "";
    if (!/^cs_(test|live)_[A-Za-z0-9]+$/.test(sessionId)) return { sessionId: "" };
    return { sessionId };
  })
  .handler(async ({ data }) => {
    if (!data.sessionId) return { emailed: false as const };
    try {
      const { emailPaidCheckout } = await import("./order-notice.server.ts");
      return await emailPaidCheckout(data.sessionId);
    } catch (error) {
      console.error("[order-email]", error instanceof Error ? error.message : "send failed");
      return { emailed: false as const };
    }
  });
