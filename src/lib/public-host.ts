/** The public domain shows a holding page. The Vercel address keeps the full shop. */
export function isComingSoonHost(host: string | null | undefined): boolean {
  const bare = (host ?? "").split(",")[0]?.trim().split(":")[0]?.toLowerCase() ?? "";
  return bare === "www.happybowlpets.com" || bare === "happybowlpets.com";
}
