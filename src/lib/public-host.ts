/** Dropshipper notes stay on the Vercel reference host only. Every other host is the customer shop. */
export function bareHost(host: string | null | undefined): string {
  return (host ?? "").split(",")[0]?.trim().split(":")[0]?.toLowerCase() ?? "";
}

export function isSupplierHost(host: string | null | undefined): boolean {
  const names = String(host ?? "")
    .split(",")
    .map((part) => bareHost(part))
    .filter(Boolean);
  if (names.some((name) => name === "happybowlpets.com" || name === "www.happybowlpets.com")) return false;
  return names.includes("happybowlpets.vercel.app");
}
