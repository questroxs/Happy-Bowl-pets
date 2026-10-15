/** Dropshipper notes stay on the Vercel reference host only. Every other host is the customer shop. */
export function bareHost(host: string | null | undefined): string {
  return (host ?? "").split(",")[0]?.trim().split(":")[0]?.toLowerCase() ?? "";
}

export function isSupplierHost(host: string | null | undefined): boolean {
  return bareHost(host) === "happybowlpets.vercel.app";
}
