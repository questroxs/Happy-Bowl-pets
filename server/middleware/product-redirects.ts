/** Permanent redirects for retired product URLs. */
const REDIRECTS: Record<string, string> = {
  "/product/detox-powder": "/product/mobility-powder",
  "/product/slow-meal-mat": "/product/dog-water-bottle-food-container",
};

export default (event: { url: URL }) => {
  const path = event.url.pathname.replace(/\/+$/, "");
  const target = REDIRECTS[path];
  if (!target) return;
  return new Response(null, { status: 301, headers: { Location: target + event.url.search } });
};
