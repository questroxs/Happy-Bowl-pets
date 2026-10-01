import { createHmac, timingSafeEqual } from "node:crypto";

const DEFAULT_TOLERANCE_SEC = 300;

export function stripeSignatureHeader(
  payload: string,
  secret: string,
  timestamp = Math.floor(Date.now() / 1000),
): string {
  const signed = `${timestamp}.${payload}`;
  const digest = createHmac("sha256", secret).update(signed, "utf8").digest("hex");
  return `t=${timestamp},v1=${digest}`;
}

export function verifyStripeSignature(
  payload: string,
  header: string | null,
  secret: string,
  nowSec = Math.floor(Date.now() / 1000),
  toleranceSec = DEFAULT_TOLERANCE_SEC,
): boolean {
  if (!header || !secret) return false;
  let timestamp = Number.NaN;
  const signatures: string[] = [];
  for (const part of header.split(",")) {
    const eq = part.indexOf("=");
    if (eq < 0) continue;
    const key = part.slice(0, eq).trim();
    const value = part.slice(eq + 1).trim();
    if (key === "t") timestamp = Number(value);
    if (key === "v1" && value) signatures.push(value);
  }
  if (!Number.isFinite(timestamp) || signatures.length === 0) return false;
  if (Math.abs(nowSec - timestamp) > toleranceSec) return false;
  const expected = createHmac("sha256", secret)
    .update(`${timestamp}.${payload}`, "utf8")
    .digest("hex");
  const expectedBuf = Buffer.from(expected, "utf8");
  return signatures.some((signature) => {
    const actual = Buffer.from(signature, "utf8");
    return actual.length === expectedBuf.length && timingSafeEqual(actual, expectedBuf);
  });
}
