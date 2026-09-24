import type { Product } from "./catalog";

const LABEL =
  "Follow the package label. Not a veterinary diagnosis or a substitute for vet care. These statements have not been evaluated by the FDA.";

/** New US-warehouse Doba listings. Prices are Doba's published example retail:
 *  round(per-sale dollars / margin). Nothing here replaces an existing SKU. */
export const MORE_PRODUCTS: Product[] = [
  {
    slug: "cordless-dual-45",
    sku: "HB-FNT-45",
    name: "Cordless Dual-Tank Fountain 4.5 L",
    tagline: "Dual-tank cordless fountain for dogs and cats. US warehouse.",
    description:
      "The warehouse cordless fountain: 4.5 L, dual-tank filtration, made to come apart for cleaning. This photo is that unit. It is not the 2 L stainless fountain or the Cheerble D1.",
    details: [
      "Cordless dog and cat water fountain, 4.5 L dual tank (Doba D01027HESPV)",
      "Ships from a US warehouse. Doba example: up to $28.13 per sale (35% margin)",
      "Filters that come with this fountain are for this model — not the 2 L 8-pack",
    ],
    price: 80,
    category: "hydration",
    species: "both",
    image: "/products/cordless-dual-45.jpg",
    capacity: "4.5 L",
    related: ["cheerble-d1-4l", "quiet-stainless-2l", "stainless-xl"],
    warehouseUrl:
      "https://www.doba.com/product/cgQlVTBSzJbC/dropshipping-cordless-dog-cat-water-fountain-45l-dual-tank-filtration-automatic-pet-water-dispenser-with-easy-cleaning.html",
  },
  {
    slug: "cheerble-d1-4l",
    sku: "HB-FNT-D1",
    name: "Cheerble D1 Pro Fountain 4 L",
    tagline: "Pumpless, battery, stainless tray. 4 L / 135 oz, for dogs.",
    description:
      "The Cheerble Elfin D1 Pro the warehouse ships: wireless, pumpless MagDrive, stainless tray, 4 L / 135 oz. This photo is that fountain. Filters for it are the Cheerble E1+/D1 pack, not the round 2 L cartridges.",
    details: [
      "Cheerble D1 Pro, battery operated, 4 L / 135 oz (Doba D01027H85T7)",
      "Stainless tray; ships from a US warehouse",
      "Doba example: up to $33.68 per sale (34% margin)",
    ],
    price: 99,
    category: "hydration",
    species: "dogs",
    image: "/products/cheerble-d1-4l.jpg",
    capacity: "4 L",
    material: "Stainless steel tray",
    related: ["cordless-dual-45", "cordless-elfin", "quiet-stainless-2l"],
    warehouseUrl:
      "https://www.doba.com/product/KtCsVaTORovc/dropshipping-cheerble-pumpless-dog-water-elfin-fountain-wireless-pet-fountain-battery-operated-4l135-oz-d1-pro-automatic-water-dispenser-for-dogs-magdrive-technology-stainless-steel-tray-no-cleaning-hassle.html",
  },
  {
    slug: "moda-filters-3",
    sku: "HB-FLT-MP3",
    name: "Moda-Pure Fountain Filters, 3 Pack",
    tagline: "Replacement filters for the Pet Life Moda-Pure fountain only.",
    description:
      "Three replacement filters for the Pet Life Moda-Pure fountain. This photo is that 3-pack. They do not fit the 2 L stainless fountain, the 7 L PawHut, the cordless 4.5 L, or the Cheerble D1.",
    details: [
      "Pet Life Moda-Pure replacement filters, 3 pack (Doba D0102HAX2YV)",
      "US warehouse. Doba example: up to $5.77 per sale (29% margin)",
      "Only for the Moda-Pure fountain — we do not sell that fountain (the margin on the fountain itself was too thin to price fairly)",
    ],
    price: 20,
    category: "filters",
    species: "both",
    image: "/products/moda-filters-3.jpg",
    related: ["cordless-dual-45", "quiet-stainless-2l", "cheerble-d1-4l"],
    warehouseUrl:
      "https://www.doba.com/product/WQvPKaDEFcVr/dropshipping-pet-life-moda-pure-filtered-dog-and-cat-fountain---replacement-filters---3-pack.html",
  },
  {
    slug: "bone-pad-bed",
    sku: "HB-BED-BONE",
    name: "Orthopedic Dog Bed",
    tagline: "Memory-foam dog bed. The photo is the warehouse listing.",
    description:
      "The warehouse orthopedic dog bed for large dogs. Doba lists it as gray/beige, 35D memory foam with TPU and polyester, 43 × 26 × 2 in, about 3 lb. This photo is the image on that listing — what you see is what the warehouse shows.",
    details: [
      "Orthopedic dog bed, memory foam (Doba D0102HGM67W)",
      "Listed spec: gray/beige, 43 × 26 × 2 in, about 3 lb",
      "US warehouse. Doba example: up to $32.19 per sale (45% margin)",
    ],
    price: 72,
    category: "beds",
    species: "dogs",
    image: "/products/bone-pad-bed.jpg",
    material: "35D memory foam",
    related: ["brown-bolster", "elevated-mesh", "lounge-cot-beige"],
    warehouseUrl:
      "https://www.doba.com/product/bYVECtSyJcDn/dropshipping-orthopedic-dog-bed-with-memory-foam-support-for-large-dogs.html",
  },
  {
    slug: "brown-bolster",
    sku: "HB-BED-BOL",
    name: "Brown Bolster Bed",
    tagline: "Memory foam, raised sides, washable cover. Brown.",
    description:
      "The brown bolster bed the warehouse ships for large breeds: memory foam, raised sides, washable cover. This photo is that bed, on the white background they use.",
    details: [
      "Orthopedic dog bed, raised sides, washable cover, brown (Doba D01027H6UYA)",
      "US warehouse. Doba example: up to $7.87 per sale (25% margin)",
      "Large breeds; photo is the warehouse item",
    ],
    price: 31,
    category: "beds",
    species: "dogs",
    image: "/products/brown-bolster.jpg",
    material: "Memory foam",
    related: ["bone-pad-bed", "elevated-mesh", "travel-nest"],
    warehouseUrl:
      "https://www.doba.com/product/NbevDirqOoVF/dropshipping-orthopedic-dog-bed-for-large-breeds-memory-foam-pet-bed-with-raised-sides-washable-cover-brown.html",
  },
  {
    slug: "pig-ears-25",
    sku: "HB-TRT-PIG",
    name: "Bonez Pig Ears, 25 Count",
    tagline: "25 whole pig ears, about 4 lb. Dogs. Supervise the chew.",
    description:
      "The Bonez bag the warehouse ships: 25 whole pig ears, about 4 lb. This photo is that labeled bag. A chew, not a meal. Stay with your dog while they work on one.",
    details: [
      "Bonez pig ear dog treats, 25 per bag, about 4 lb (Doba D01027H87TW)",
      "US warehouse. Doba example: up to $12 per sale (21% margin)",
      "Dogs only. Supervise. Not for pets that gulp chews whole.",
    ],
    price: 57,
    category: "treats",
    species: "dogs",
    image: "/products/pig-ears-25.jpg",
    related: ["calming-chews", "denta-bone", "corn-chew"],
    warehouseUrl:
      "https://www.doba.com/product/CfeKDtTBJcvV/dropshipping-bonez-pig-ear-dog-treat-25-per-bag.html",
  },
  {
    slug: "calm-powder",
    sku: "HB-WEL-PWD",
    name: "Calming Powder for Dogs",
    tagline: "Warehouse powder for dogs. Follow the label. Not a vet visit.",
    description:
      "The calming powder the US warehouse lists for dogs. The photo is that pouch. We are not repeating the listing's anxiety claims as our own — read the label and ask your vet if you are unsure.",
    details: [
      "Calming powder for dogs (Doba D0102XF1252)",
      "US warehouse. Doba example: up to $20.34 per sale (55% margin)",
      LABEL,
    ],
    price: 37,
    category: "wellness",
    species: "dogs",
    image: "/products/calm-powder.jpg",
    related: ["calm-drops-60", "calming-chews", "joint-liquid"],
    warehouseUrl:
      "https://www.doba.com/product/IdQHbecOGFVg/dropshipping-calming-powder-for-dogs-reduces-anxiety-stress-and-promotes-relaxation.html",
  },
  {
    slug: "calm-drops-60",
    sku: "HB-WEL-DRP",
    name: "Calming Comfort Drops, 60 mL",
    tagline: "Welsdom 60 mL drops for cats and dogs. Not CBD.",
    description:
      "Welsdom Calming Comfort Drops, 60 mL, listed for cats and dogs. This photo is that bottle. It is not a CBD product. Follow the label.",
    details: [
      "Welsdom Pets Calming Comfort Drops, 60 mL (Doba D01027X3NIX)",
      "US warehouse. Doba example: up to $15.01 per sale (67% margin)",
      LABEL,
    ],
    price: 22,
    category: "wellness",
    species: "both",
    image: "/products/calm-drops-60.jpg",
    capacity: "60 mL",
    related: ["calm-powder", "calming-chews", "cbd2heal-dogs"],
    warehouseUrl:
      "https://www.doba.com/product/qVKZDRiUhFvb/dropshipping-welsdom-pets-calming-comfort-drops---60ml-natural-relaxation-supplement-for-cats-dogs-reduces-anxiety-stress-supports-mental-well-being-digestive-health.html",
  },
  {
    slug: "detox-powder",
    sku: "HB-WEL-DTX",
    name: "Welsdom Detox Powder, 120 g",
    tagline: "Bacon-flavored powder for cats and dogs. Follow the label.",
    description:
      "The Welsdom 120 g powder the warehouse lists for cats and dogs, bacon flavored. This photo is that pouch. The listing mentions liver and immune support — that is their wording, not a promise from us.",
    details: [
      "Welsdom Pets detox powder, 120 g, cats and dogs (Doba D01027X3NGT)",
      "US warehouse. Doba example: up to $11.57 per sale (57% margin)",
      LABEL,
    ],
    price: 20,
    category: "wellness",
    species: "both",
    image: "/products/detox-powder.jpg",
    capacity: "120 g",
    related: ["calm-powder", "skin-chews", "joint-liquid"],
    warehouseUrl:
      "https://www.doba.com/product/bqCkDGmtiFve/dropshipping-welsdom-pets-detox-powder-for-cats-dogs-natural-liver-support-immune-boost-bacon-flavored-supplement-120g.html",
  },
  {
    slug: "cbd2heal-dogs",
    sku: "HB-WEL-CBD",
    name: "CBD2HEAL Dog Tincture, 1000 mg",
    tagline: "The bottle in the photo. Dog tincture. US ship-from. Not a medicine.",
    description:
      "CBD2HEAL dog tincture. The warehouse photo is their 1000 mg bottle (bacon and original are both listed as flavors; the picture shows the bacon 1000 mg bottle). Doba's published example for this listing is up to $113.55 per sale (87% margin) — our price is that example retail, not a markup past it. The same listing also names 150, 250, 500, 2000, and 4000 mg. This order is the bottle in the photo.",
    details: [
      "CBD Oil Tincture for Dogs, CBD2HEAL, photo is the 1000 mg bottle (Doba D010275I40T)",
      "Doba says it ships from the United States (Amazon multi-channel). Supplier text calls the formula a Canadian brand — we are not hiding that",
      "Doba example: up to $113.55 per sale (87% margin). Our $131 is that example retail",
      "Dogs. Not for people. Not a veterinary treatment. " + LABEL,
    ],
    price: 131,
    category: "wellness",
    species: "dogs",
    image: "/products/cbd2heal-dogs.jpg",
    capacity: "1000 mg",
    related: ["calm-drops-60", "calm-powder", "calming-chews"],
    warehouseUrl:
      "https://www.doba.com/product/VhFDKQqdeCba/dropshipping-cbd-oil-tincture-for-dogs-cbd2heal.html",
  },
  {
    slug: "tartar-foam",
    sku: "HB-CAR-FOAM",
    name: "Tartar Oral Foam, 60 mL",
    tagline: "Daily mouth foam for dogs and cats. Not a dental cleaning.",
    description:
      "The 60 mL oral foam the warehouse ships for dogs and cats. This photo is that bottle. It is a different item from the Yegbong oral spray we do not list. It does not replace a dental visit.",
    details: [
      "Pet oral foam, 60 mL, dogs and cats (Doba D01027HKP8U)",
      "US warehouse. Doba example: up to $8.12 per sale (39% margin)",
      "Follow the label. Not a substitute for a veterinary dental.",
    ],
    price: 21,
    category: "care",
    species: "both",
    image: "/products/tartar-foam.jpg",
    capacity: "60 mL",
    related: ["paw-balm-15", "oat-shampoo", "denta-twist"],
    warehouseUrl:
      "https://www.doba.com/product/POeWbrtocJvB/dropshipping-pet-oral-foam-cleansing-spray-60ml-daily-teeth-care-foam-for-dogs-cats-gentle-tartar-stain-reducing-oral-foam-fresh-breath-pet-mouth-care-foam.html",
  },
  {
    slug: "paw-balm-15",
    sku: "HB-CAR-PAW",
    name: "YEGBONG Paw Balm, 15 g",
    tagline: "15 g paw balm. Dogs and cats. Not the Furry Balm jar.",
    description:
      "The YEGBONG 15 g paw balm the warehouse ships. This photo is that tube. It is not the BeNat Furry Balm already in the shop, and not the paw cream we pulled because it was unavailable.",
    details: [
      "YEGBONG pet paw care balm, 15 g (Doba D01027H0IQG)",
      "US warehouse. Doba example: up to $6.37 per sale (64% margin)",
      "External use. Follow the label. Stop if the skin reacts.",
    ],
    price: 10,
    category: "care",
    species: "both",
    image: "/products/paw-balm-15.jpg",
    capacity: "15 g",
    related: ["furry-balm", "oat-shampoo", "tartar-foam"],
    warehouseUrl:
      "https://www.doba.com/product/TlCdDIgrNPVB/dropshipping-yegbong-pet-paw-care-balm-15-g.html",
  },
  {
    slug: "benat-towel",
    sku: "HB-CAR-TWL",
    name: "BeNat Bath Towel, Green",
    tagline: "Microfiber drying towel with two hand pockets. Green.",
    description:
      "The green BeNat microfiber dog towel the warehouse ships, with the double hand-drop pockets, sized for small and medium dogs. This photo is that towel.",
    details: [
      "BeNat microfiber dog bath towel, green, double hand pockets (Doba D0102HX8BQP)",
      "US warehouse. Doba example: up to $3.30 per sale (37% margin)",
      "Small and medium dogs",
    ],
    price: 9,
    category: "care",
    species: "dogs",
    image: "/products/benat-towel.jpg",
    material: "Microfiber",
    related: ["oat-shampoo", "grooming-bundle", "bath-brush"],
    warehouseUrl:
      "https://www.doba.com/product/TeDMbEPUNCqF/dropshipping-benat-pets-dog-bath-towel-double-drop-pocket-design.html",
  },
  {
    slug: "moo-cifier",
    sku: "HB-PLY-MOO",
    name: "Moo-cifier Puppy Toy",
    tagline: "Pet Life plush and rubber teether for newborn puppies.",
    description:
      "The Pet Life Moo-cifier: plush, squeaker, and a rubber teething end for newborn puppies. This photo is that toy. Supervise. Not a childcare pacifier, and not for power chewers.",
    details: [
      "Pet Life Moo-cifier (Doba D0102HAXIPG)",
      "US warehouse. Doba example: up to $4.88 per sale (29% margin)",
      "Newborn puppies and smaller dogs. Supervise.",
    ],
    price: 17,
    category: "play",
    species: "dogs",
    image: "/products/moo-cifier.jpg",
    related: ["giraffe-cow", "foxy-tail", "tri-chew"],
    warehouseUrl:
      "https://www.doba.com/product/AoqpQrbWlcVj/dropshipping-pet-life-moo-cifier-plush-squeaking-and-rubber-teething-newborn-puppy-dog-toy.html",
  },
  {
    slug: "giraffe-cow",
    sku: "HB-PLY-GIR",
    name: "Giraffe-Cow Puppy Toy",
    tagline: "Pet Life plush and rubber teether. Same line as the Moo-cifier.",
    description:
      "The Pet Life Giraffe-Cow: plush body, squeaker, rubber teething end, for newborn puppies. This photo is that toy, not the Moo-cifier.",
    details: [
      "Pet Life Giraffe-Cow (Doba D0102HAX26G)",
      "US warehouse. Doba example: up to $4.88 per sale (29% margin)",
      "Newborn puppies and smaller dogs. Supervise.",
    ],
    price: 17,
    category: "play",
    species: "dogs",
    image: "/products/giraffe-cow.jpg",
    related: ["moo-cifier", "dura-chew", "broom-lick"],
    warehouseUrl:
      "https://www.doba.com/product/BUDmQabOCcVk/dropshipping-pet-life-giraffe-cow-plush-squeaking-and-rubber-teething-newborn-puppy-dog-toy.html",
  },
  {
    slug: "dura-chew",
    sku: "HB-PLY-DUR",
    name: "Extra-Long Dura-Chew",
    tagline: "Reinforced plush tug toy. Water-resistant shell.",
    description:
      "The Pet Life extra-long Dura-Chew: reinforced stitching, a water-resistant plush shell, made to tug. This photo is that toy. No plush is indestructible — take it away if the stuffing shows.",
    details: [
      "Pet Life Extra Long Dura-Chew (Doba D0102H7LTXG)",
      "US warehouse. Doba example: up to $4.88 per sale (29% margin)",
      "Dogs. Supervise tug and chew.",
    ],
    price: 17,
    category: "play",
    species: "dogs",
    image: "/products/dura-chew.jpg",
    related: ["foxy-tail", "dumbbell-float", "sling-away"],
    warehouseUrl:
      "https://www.doba.com/product/TJDMVRnOSPbW/dropshipping-pet-life-extra-long-dura-chew-reinforce-stitched-durable-water-resistant-plush-chew-tugging-dog-toy.html",
  },
  {
    slug: "foxy-tail",
    sku: "HB-PLY-FOX",
    name: "Foxy-Tail Plush",
    tagline: "Quilted plush fox. Squeak, chew, tug.",
    description:
      "The Pet Life Foxy-Tail: a quilted plush animal for squeak, chew, and tug. This photo is that toy.",
    details: [
      "Pet Life Foxy-Tail (Doba D0102H7L4NW)",
      "US warehouse. Doba example: up to $4.88 per sale (29% margin)",
      "Dogs. Supervise. Retire it if it tears.",
    ],
    price: 17,
    category: "play",
    species: "dogs",
    image: "/products/foxy-tail.jpg",
    related: ["dura-chew", "moo-cifier", "fish-catnip"],
    warehouseUrl:
      "https://www.doba.com/product/TdqhDGEcSPbY/dropshipping-pet-life-foxy-tail-quilted-plush-animal-squeak-chew-tug-dog-toy.html",
  },
  {
    slug: "fish-catnip",
    sku: "HB-PLY-FSH",
    name: "Fish Catnip Plush",
    tagline: "Pet Life fish plush with catnip. For cats.",
    description:
      "The Pet Life durable fish plush with catnip. This photo is that toy. It is not the fish-shaped toothbrush we pulled (that one ships from China).",
    details: [
      "Pet Life fish catnip cat toy (Doba D0102H7L4LU)",
      "US warehouse. Doba example: up to $4.88 per sale (29% margin)",
      "Cats. Catnip toys are for play, not a supplement.",
    ],
    price: 17,
    category: "play",
    species: "cats",
    image: "/products/fish-catnip.jpg",
    related: ["cat-tunnel", "foxy-tail", "broom-lick"],
    warehouseUrl:
      "https://www.doba.com/product/ajqDvEHfyYVs/dropshipping-pet-life-durable-fish-plush-kitty-catnip-cat-toy.html",
  },
  {
    slug: "dumbbell-float",
    sku: "HB-PLY-DUM",
    name: "Dumbbell Float Toy",
    tagline: "Pet Life floating fetch dumbbell for dogs.",
    description:
      "The Pet Life dumbbell: a water-floating chew and fetch toy. This photo is that toy. Rinse after the lake. Supervise.",
    details: [
      "Pet Life dumbbell float toy (Doba D0102H7L4JU)",
      "US warehouse. Doba example: up to $4.88 per sale (29% margin)",
      "Dogs. Fetch and float. Not a life jacket.",
    ],
    price: 17,
    category: "play",
    species: "dogs",
    image: "/products/dumbbell-float.jpg",
    related: ["dura-chew", "ball-launcher", "sling-away"],
    warehouseUrl:
      "https://www.doba.com/product/fMvYVRGfzPqh/dropshipping-pet-life-dumbbell-durable-water-floating-chew-and-fetch-dog-toy.html",
  },
  {
    slug: "open-road-seat",
    sku: "HB-TRV-SEAT",
    name: "Open Road Seat Cover",
    tagline: "Pet Life single-seat cover for dogs, cats, and kids.",
    description:
      "The Pet Life Open Road cover: one seat, meant to keep a dog, cat, or child from the upholstery. This photo is that cover, already shown with a puppy in the front seat. It is a seat cover, not a crash-tested harness.",
    details: [
      "Pet Life Open Road single-seat cover (Doba D0102H703AY)",
      "US warehouse. Doba example: up to $11.41 per sale (33% margin)",
      "Dogs, cats, and children per the warehouse listing. Still buckle a real harness for the drive.",
    ],
    price: 35,
    category: "accessories",
    species: "both",
    image: "/products/open-road-seat.jpg",
    related: ["rolling-carrier", "squeeze-scoop", "travel-bowl-set"],
    warehouseUrl:
      "https://www.doba.com/product/fdbYvzniaJVP/dropshipping-pet-life-open-road-mess-free-single-seated-safety-car-seat-cover-protector-for-dog-cats-and-children.html",
  },
  {
    slug: "squeeze-scoop",
    sku: "HB-TRV-SCP",
    name: "Mini Squeeze-N-Scoop",
    tagline: "Lightweight scooper with a bag holder. Dogs and cats.",
    description:
      "The Pet Life Mini Squeeze-N-Scoop: a small travel scooper with a waste-bag holder. This photo is that tool.",
    details: [
      "Pet Life Mini Squeeze-N-Scoop (Doba D0102H7LTIW)",
      "US warehouse. Doba example: up to $4.88 per sale (29% margin)",
      "Dogs and cats. Bags are not included unless the warehouse packs them — the listing is the scooper.",
    ],
    price: 17,
    category: "accessories",
    species: "both",
    image: "/products/squeeze-scoop.jpg",
    related: ["open-road-seat", "pee-pads", "travel-bowl-set"],
    warehouseUrl:
      "https://www.doba.com/product/fWqRbGHSNJVz/dropshipping-pet-life-mini-squeeze-n-scoop-cat-and-dog-lightweight-travel-pooper-scooper-w-waste-bag-holder.html",
  },
  {
    slug: "rolling-carrier",
    sku: "HB-TRV-ROLL",
    name: "Rolling Carrier, Grey",
    tagline: "Wheeled carrier for pets under 25 lb, plus a folding bowl.",
    description:
      "The grey rolling carrier the warehouse lists: telescopic handle, shoulder strap, and one folding bowl, for pets under 25 lb. The listing says airline approved — each airline still sets its own rules, so check before you fly. This photo is that carrier.",
    details: [
      "Rolling cat and dog carrier, grey, pets under 25 lb, 1 folding bowl (Doba D0102HQA02G)",
      "US warehouse. Doba example: up to $14.10 per sale (27% margin)",
      "About 7.4 lb empty. Confirm the airline's carrier rules yourself.",
    ],
    price: 52,
    category: "accessories",
    species: "both",
    image: "/products/rolling-carrier.jpg",
    related: ["open-road-seat", "travel-nest", "collapsi-pad"],
    warehouseUrl:
      "https://www.doba.com/product/iJqcKoNRsPvb/dropshipping-cat-carrier-with-wheels-airline-approved-rolling-pet-carrier-with-telescopic-handle-and-shoulder-strap-dog-carrier-with-wheels-for-pets-under-25-lbs-with-1-folding-bowl-grey.html",
  },
];
