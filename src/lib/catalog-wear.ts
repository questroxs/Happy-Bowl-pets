import type { Product } from "./catalog";

/** US, in-stock Doba costumes and clothes. Prices are Doba's published example retail:
 *  round(per-sale dollars / margin). The photo is the listing photo with only the backdrop recolored. */
export const WEAR_PRODUCTS: Product[] = [
  {
    slug: "creepy-webs",
    sku: "HB-COS-WEB",
    name: "Creepy Webs Spider Costume",
    tagline: "Pet Life hooded spider costume for dogs. The photo is the warehouse listing.",
    description:
      "The Pet Life Creepy Webs costume the warehouse ships: a hooded spider outfit with webbed legs, for dogs. Sizes run X-small through X-large. This photo is that costume.",
    details: [
      "Pet Life Creepy Webs holiday spider costume (Doba D0102HAXPGY)",
      "Sizes X-small, small, medium, large, and X-large",
      "US warehouse, in stock. Doba example: up to $14.56 per sale (42% margin)",
    ],
    price: 35,
    category: "costumes",
    species: "dogs",
    image: "/products/creepy-webs.jpg",
    sizes: ["XS", "S", "M", "L", "XL"],
    related: ["rodeo-bones", "snowman-hoodie", "inmate-stripes"],
    warehouseUrl:
      "https://www.doba.com/product/gObpCrqtAYDV/dropshipping-pet-life-creepy-webs-holiday-spider-pet-dog-costume.html",
  },
  {
    slug: "rodeo-bones",
    sku: "HB-COS-ROD",
    name: "Rodeo Bones Cowboy Costume",
    tagline: "Pet Life denim cowboy hat and vest for dogs.",
    description:
      "The Pet Life Rodeo Bones cowboy uniform the warehouse ships: denim-blue hat, vest, and neckerchief on the dog in the photo. Sizes run X-small through X-large. This photo is that costume.",
    details: [
      "Pet Life Rodeo Bones cowboy costume (Doba D0102HAXPBV)",
      "Denim blue. Sizes X-small, small, medium, large, and X-large",
      "US warehouse, in stock. Doba example: up to $25.35 per sale (51% margin)",
    ],
    price: 50,
    category: "costumes",
    species: "dogs",
    image: "/products/rodeo-bones.jpg",
    material: "Denim",
    sizes: ["XS", "S", "M", "L", "XL"],
    related: ["creepy-webs", "inmate-stripes", "santa-coat"],
    warehouseUrl:
      "https://www.doba.com/product/BybNeWVjAPDJ/dropshipping-pet-life-rodeo-bones-cowboy-pet-dog-costume-uniform.html",
  },
  {
    slug: "snowman-hoodie",
    sku: "HB-COS-SNO",
    name: "Light-Up Snowman Hoodie",
    tagline: "Pet Life LED snowman hooded sweater. Choose XS, S, M, L, or XL.",
    description:
      "The Pet Life light-up snowman hoodie the warehouse ships: a hooded sweater with a snowman face and lights, polyester and cotton. Choose XS, S, M, L, or XL. This photo is that sweater.",
    details: [
      "Pet Life LED snowman hooded sweater (Doba D0102H70F2V)",
      "Polyester and cotton. Sizes XS, S, M, L, and XL",
      "US warehouse, in stock. Doba example: up to $13.20 per sale (38% margin)",
    ],
    price: 35,
    category: "costumes",
    species: "dogs",
    image: "/products/snowman-hoodie.jpg",
    material: "Polyester and cotton",
    sizes: ["XS", "S", "M", "L", "XL"],
    related: ["santa-coat", "creepy-webs", "inmate-stripes"],
    warehouseUrl:
      "https://www.doba.com/product/ZbVkvmEqgPqY/dropshipping-pet-life-led-lighting-halloween-happy-snowman-hooded-sweater-pet-costume.html",
  },
  {
    slug: "inmate-stripes",
    sku: "HB-COS-INM",
    name: "Striped Inmate Costume",
    tagline: "Pet Life black-and-white striped uniform for dogs.",
    description:
      "The Pet Life striped inmate costume the warehouse ships: a black-and-white uniform with a cap, on the dog in the photo. This photo is that costume.",
    details: [
      "Pet Life striped retro inmate costume (Doba D0102HAXPJY)",
      "Black and white stripes with a matching cap",
      "US warehouse, in stock. Doba example: up to $19.56 per sale (49% margin)",
    ],
    price: 40,
    category: "costumes",
    species: "dogs",
    image: "/products/inmate-stripes.jpg",
    sizes: ["XS", "S", "M", "L", "XL"],
    related: ["rodeo-bones", "creepy-webs", "santa-coat"],
    warehouseUrl:
      "https://www.doba.com/product/ghVtervRAcqF/dropshipping-pet-life-striped-retro-inmate-prisoner-pet-dog-costume-uniform.html",
  },
  {
    slug: "santa-coat",
    sku: "HB-CLT-SAN",
    name: "Santa Coat with Antlers",
    tagline: "Red coat and antlers for dogs and cats. Choose XS, S, M, L, or XL.",
    description:
      "The red Santa coat the warehouse ships, with plaid trim and reindeer antlers, for dogs and cats. Choose XS, S, M, L, or XL. This photo is that coat.",
    details: [
      "Santa coat with reindeer antlers (Doba D0102X3ZC0V)",
      "Sizes XS, S, M, L, and XL",
      "US warehouse, in stock. Doba example: up to $16.75 per sale (50% margin)",
    ],
    price: 34,
    category: "costumes",
    species: "both",
    image: "/products/santa-coat.jpg",
    sizes: ["XS", "S", "M", "L", "XL"],
    related: ["snowman-hoodie", "creepy-webs", "rodeo-bones"],
    warehouseUrl:
      "https://www.doba.com/product/tNQbvnMjUcDA/dropshipping-pet-christmas-clothes-santa-claus-reindeer-antlers-costume-winter-outfit-new-year-coat-for-small-medium-dogs-cats-available-in-smlxl.html",
  },
];
