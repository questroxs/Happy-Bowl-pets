import type { Product } from "./catalog";

const BANNED =
  /\b(doba|warehouse|warehouses|dropship(?:ping|per|ped)?|margin|markup|per sale|wholesale|example retail|example price|supplier)\b/i;

const NOTE =
  /\b(already in the shop|you are buying|this photo|the photo|in the photo|the listing|we pulled|ships from china|this order is|this is that|stand-in|do not fit|does not fit|do not use|we do not sell|not the )\b/i;

const ECONOMICS =
  /\b(doba|per sale|margin|markup|published example|example retail|example price|supplier note|wholesale|dropship|our \$[\d.,]+ is that example|our price is)\b/i;

/** Customer-facing wording. Strips supplier ids, costs, and warehouse talk without changing the item. */
export function customerCopy(input: string): string {
  const chunks = input
    .replace(/\s*\([^)]*(?:Doba|D0[A-Z0-9]{4,}|UPC\s*\d+)[^)]*\)/gi, "")
    .split(/\n+/);

  const kept = chunks
    .flatMap((chunk) => chunk.split(/(?<=[.!?])\s+/))
    .map((sentence) => salvage(sentence))
    .filter(
      (sentence) =>
        sentence &&
        !BANNED.test(sentence) &&
        !NOTE.test(sentence) &&
        !/^(this|the) photo is\b/i.test(sentence) &&
        !/\bthe photo is the product\b/i.test(sentence) &&
        !/\b(white cord|you are buying|already in the shop|not the cordless)\b/i.test(sentence),
    );

  return tidy(kept.join(" "));
}

function salvage(sentence: string): string {
  const stripped = sentence
    .replace(/\s*\([^)]*\b(margin|markup|doba|per sale)\b[^)]*\)/gi, "")
    .replace(/Doba lists it as\s*/gi, "Labeled ")
    .replace(/Doba says it ships from the United States\.?/gi, "Ships from the United States.");
  if (ECONOMICS.test(stripped) || NOTE.test(stripped)) return "";
  let text = applyPhrases(stripped);
  if (!BANNED.test(text)) return cap(tidy(text));

  const bits = text.split(/\s*[;]\s*|\s+[—–-]\s+/);
  const ok = bits
    .map((bit) => applyPhrases(bit))
    .filter((bit) => bit && !BANNED.test(bit) && !ECONOMICS.test(bit) && !NOTE.test(bit));
  return cap(tidy(ok.join(". ")));
}

function applyPhrases(input: string): string {
  let text = input;
  const pairs: Array<[RegExp, string]> = [
    [/Doba(?:'s|’s)?\s+published example[^.]*/gi, ""],
    [/Doba(?:'s|’s)?\s+example:[^.]*/gi, ""],
    [/\bup to \$[\d.,]+\s+per sale(?:\s*\([^)]*\))?/gi, ""],
    [/\(\s*\d+%\s*margin\s*\)/gi, ""],
    [/\bour price is that example retail[^.]*/gi, ""],
    [/\bOur \$[\d.,]+ is that example\b/gi, ""],
    [/\bnot a markup(?: past it)?\b/gi, ""],
    [/—\s*we are not hiding that/gi, ""],
    [/Doba lists it as\s*/gi, "Labeled "],
    [/Doba says it ships from the United States(?:\s*\([^)]*\))?/gi, "Ships from the United States"],
    [/Supplier text calls/gi, "The label calls"],
    [/\bAmazon multi-channel\b/gi, ""],
    [/\bAmazon MCF\b/gi, ""],
    [/\bthe margin on\b[^.)]*/gi, ""],
    [/\bpriced with our margin in\b/gi, ""],
    [/\bover warehouse cost\b/gi, ""],
    [/\bwhat the warehouse shows\b/gi, "what we ship"],
    [/\bwarehouse listing\s*[—–-]\s*/gi, ""],
    [/\bthe warehouse’s own photo\b/gi, "the product photo"],
    [/\bwarehouse’s own photo\b/gi, "product photo"],
    [/\bthe warehouse ships the\b/gi, "we ship the"],
    [/\bthe warehouse ships\b/gi, "we ship"],
    [/\bthe US warehouse lists\b/gi, "we list"],
    [/\bthe warehouse lists\b/gi, "we list"],
    [/\bships from a US warehouse\b/gi, "ships from the US"],
    [/\bfrom a US warehouse\b/gi, "from the US"],
    [/\bfrom the US warehouse\b/gi, "from the US"],
    [/\ba US warehouse\b/gi, "the US"],
    [/\bthe US warehouse\b/gi, "the US"],
    [/\bUS warehouse\b/g, "ships from the US"],
    [/\bwarehouse listing\b/gi, "product"],
    [/\bwarehouse item\b/gi, "item"],
    [/\bwarehouse photo\b/gi, "product photo"],
    [/\bwarehouse’s\b/gi, ""],
    [/\bwarehouses\b/gi, ""],
    [/\bWarehouse color\b/g, "Color"],
    [/\bwarehouse color\b/g, "color"],
    [/\bcolor from the warehouse\b/gi, "color"],
    [/\bThe warehouse\b/g, "Our"],
    [/\bthe warehouse\b/g, "our"],
    [/\bWarehouse\b/g, ""],
    [/\bwarehouse\b/g, ""],
    [/\bdropshipping\b/gi, ""],
    [/\bdropshipper\b/gi, ""],
    [/\bdropship\b/gi, ""],
    [/\bDoba\b/g, ""],
    [/\bmargin\b/gi, ""],
    [/\bmarkup\b/gi, ""],
    [/\bwholesale\b/gi, ""],
  ];
  for (const [pattern, replacement] of pairs) text = text.replace(pattern, replacement);
  return text;
}

function tidy(text: string): string {
  return text
    .replace(/\(\s*\)/g, "")
    .replace(/\s+([,.;:!?])/g, "$1")
    .replace(/([,;:])\s*[,;:]+/g, "$1")
    .replace(/\s{2,}/g, " ")
    .replace(/\s*[—–-]\s*(?=[,.]|$)/g, "")
    .replace(/^[,\s.;:—–-]+/, "")
    .replace(/[,\s;—–-]+$/, "")
    .replace(/\s+([.!?])/g, "$1")
    .replace(/([.!?]){2,}/g, "$1")
    .replace(/\s+\./g, ".")
    .trim();
}

function cap(text: string): string {
  return text.replace(/(^|[.!?]\s+)([a-z])/g, (_match, lead: string, letter: string) => lead + letter.toUpperCase());
}

export function presentProduct(product: Product, supplierNotes: boolean): Product {
  if (supplierNotes) return product;
  const description = customerCopy(product.description);
  const tagline = customerCopy(product.tagline) || description.split(". ")[0] || product.name;
  const details = product.details.map((detail) => customerCopy(detail)).filter(Boolean);
  return {
    ...product,
    tagline,
    description,
    details,
    warehouseUrl: "",
  };
}
