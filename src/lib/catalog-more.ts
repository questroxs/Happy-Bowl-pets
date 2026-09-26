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
  {
    slug: "wheel-puzzle",
    sku: "HB-ML-WHL",
    name: "Dog Puzzle Feeder",
    tagline: "Round slow-feeder with eight covered wells. The photo is that bowl.",
    description:
      "A PP puzzle bowl for dogs: teal rim, yellow ring, eight orange lids, and a center well. It is not the Pet Life Roto Paw already in the shop. This photo is the warehouse bowl.",
    details: [
      "Dog puzzle food feeder, 8 rotating wells plus a center (Doba D0102HGW48W)",
      "9.52 × 9.52 × 1.61 in, PP. US warehouse",
      "Doba example: up to $30.04 per sale (61% margin)",
    ],
    price: 49,
    category: "mealtime",
    species: "dogs",
    image: "/products/wheel-puzzle.jpg",
    material: "PP",
    related: ["puzzle-feeder", "slow-meal-mat", "elevated-station"],
    warehouseUrl:
      "https://www.doba.com/product/YQbcKqSUoPvz/dropshipping-dog-puzzle-food-feeder-slow-feeding-bowl-interactive-toy-dog-treat-dispensing-toy.html",
  },
  {
    slug: "blue-bolster-bed",
    sku: "HB-BED-BLU",
    name: "Blue Bolster Bed",
    tagline: "Plush bolster for dogs and cats. Washable cover. US warehouse.",
    description:
      "The blue plush bolster in the photo, shown with a small dog already in it. Anti-slip bottom, removable washable cover. The listing prints two size lines — both are quoted below. It is not the brown bolster or the orthopedic pad.",
    details: [
      "Plush bed for dogs and cats, blue, artificial fiber and linen (Doba D01027RMUTJ)",
      "Listed sizes: 27.56 × 17.72 × 8.86 in and 24.4 × 15.8 × 7.9 in",
      "US warehouse. Doba example: up to $22.95 per sale (47% margin)",
    ],
    price: 49,
    category: "beds",
    species: "both",
    image: "/products/blue-bolster-bed.jpg",
    material: "Artificial fiber, linen",
    related: ["brown-bolster", "bone-pad-bed", "fold-cat-cave"],
    warehouseUrl:
      "https://www.doba.com/product/KBehCFJqAQvg/dropshipping-blue-bolster-bed.html",
  },
  {
    slug: "fold-cat-cave",
    sku: "HB-BED-CAVE",
    name: "Foldable Cat Cave",
    tagline: "Grey cave with a removable cushion. Cats and small dogs.",
    description:
      "The grey foldable cave in the photo, with the zippered cushion beside it. The warehouse title also names kittens and rabbits. Anti-slip, water-resistant bottom. This photo is that cave — including the supplier caption already printed on it.",
    details: [
      "Foldable cat cave, cats or small dogs (Doba D01027HZAH7)",
      "15.70 × 15.70 × 14.10 in, about 1.99 lb, PP-cotton fill",
      "US warehouse. Doba example: up to $47.89 per sale (53% margin)",
    ],
    price: 90,
    category: "beds",
    species: "both",
    image: "/products/fold-cat-cave.jpg",
    related: ["blue-bolster-bed", "rattan-chaise", "travel-nest"],
    warehouseUrl:
      "https://www.doba.com/product/KvFjVoTBMYbP/dropshipping-foldable-cat-cave.html",
  },
  {
    slug: "remote-dual-45",
    sku: "HB-FNT-R45",
    name: "Remote Dual-Tank Fountain 4.5 L",
    tagline: "Milky dual-tank fountain. The warehouse example price, not a markup.",
    description:
      "The milky 4.5 L dual-tank fountain in the photo, with three cats around it. The listing calls it a wireless remote-control fountain and says the design avoids a chewed power cord. The warehouse photo still shows a white cord on the floor beside this unit — you are buying the fountain in the photo, not the cordless 4.5 L already in the shop ($80).",
    details: [
      "4.5 L / 1.2 gal water tank, 2 L / 0.53 gal wastewater tank (Doba D01027HK9A7)",
      "Listed size 24 × 28 × 23 cm. US warehouse. In stock",
      "Doba example: up to $72.36 per sale (37% margin). Our $196 is that example",
    ],
    price: 196,
    category: "hydration",
    species: "both",
    image: "/products/remote-dual-45.jpg",
    capacity: "4.5 L",
    related: ["cordless-dual-45", "cheerble-d1-4l", "quiet-stainless-2l"],
    warehouseUrl:
      "https://www.doba.com/product/YJFGVrtQBPDg/dropshipping-pet-water-fountain.html",
  },
  {
    slug: "yegbong-lav-100",
    sku: "HB-CAR-Y100",
    name: "Lavender Shampoo & Conditioner, 100 ml",
    tagline: "The bottle in the photo. Doba lists it as YEGBONG Pet Shampoo, 100 ml.",
    description:
      "YEGBONG 100 ml bottle. The warehouse title says Pet Shampoo. The bottle and box in the photo read PET SHAMPOO & CONDITIONER, lavender, 100 ml / 3.38 fl oz. External use. Keep it out of eyes. This is not the oat shampoo bar.",
    details: [
      "YEGBONG, 100 ml, dogs and cats (Doba D01027H497W)",
      "About 5.12 × 1.62 × 1.62 in, 0.29 lb. A spec line says China — that is manufacture, not the ship-from",
      "Ships from a US warehouse. Doba example: up to $6.37 per sale (64% margin)",
    ],
    price: 10,
    category: "care",
    species: "both",
    image: "/products/yegbong-lav-100.jpg",
    capacity: "100 ml",
    related: ["oat-shampoo", "crystal-shampoo", "paw-balm-15"],
    warehouseUrl:
      "https://www.doba.com/product/GoeUVMZUQcvK/dropshipping-yegbong-pet-shampoo-100-ml.html",
  },
  {
    slug: "crystal-shampoo",
    sku: "HB-CAR-CRYS",
    name: "Memory Lane Shampoo, 16 oz",
    tagline: "Merci Collective crystal-infused shampoo. Dogs and cats.",
    description:
      "The bottle in the photo: Merci Collective Memory Lane, labeled soap-free aloe and oatmeal with cucumber and ripe melon, 16 fl oz. The box beside it holds a crystal vial. We are not repeating the box's claim that crystals restore youth. External use. Follow the label.",
    details: [
      "Crystal Infused Luxury Pet Shampoo, 16 fl oz, dogs and cats (Doba D0102HIJFYW)",
      "US warehouse, in stock. The photo is this bottle and box",
      "Doba example: up to $13.26 per sale (47% margin)",
    ],
    price: 28,
    category: "care",
    species: "both",
    image: "/products/crystal-shampoo.jpg",
    capacity: "16 fl oz",
    related: ["yegbong-lav-100", "oat-shampoo", "paw-balm-15"],
    warehouseUrl:
      "https://www.doba.com/product/sLVMQRWfGcqu/dropshipping-crystal-infused-luxury-pet-shampoo.html",
  },
  {
    slug: "pupx-glitter",
    sku: "HB-PLY-GLIT",
    name: "PUP-X Glitter Ball, 2 Pack",
    tagline: "SodaPup green glitter balls. Medium. Made in the USA.",
    description:
      "The retail card in the photo: two green SodaPup PUP-X balls, marked medium, floats, fits ball launchers, made in the USA. The warehouse title also says treat dispenser. Gentle to moderate chewers — not the nylon bone for aggressive chewers.",
    details: [
      "SodaPup PUP-X green glitter ball, 2 pack (Doba D01027E5712)",
      "US warehouse. Doba example: up to $3.41 per sale (26% margin)",
      "Different from the glow-in-the-dark 2-pack",
    ],
    price: 13,
    category: "play",
    species: "dogs",
    image: "/products/pupx-glitter.jpg",
    related: ["pupx-glow-2", "pupx-glow-4", "ball-launcher"],
    warehouseUrl:
      "https://www.doba.com/product/TZQWCUcGieDa/dropshipping-green-glitter-ball-2-pack-dog-toy-soft-pup-x-rubber-floating-fetch-ball-with-treat-dispenser-usa-made.html",
  },
  {
    slug: "herbal-harmony",
    sku: "HB-WEL-HH30",
    name: "Herbal Harmony Drops, 30 ml",
    tagline: "Welsdom 30 ml bacon drops for dogs and cats. Not CBD.",
    description:
      "Welsdom Herbal Harmony Advanced Suspension, 30 ml, bacon flavour, labeled for dogs and cats. The warehouse title is a generic herbal-calming-drops line; the bottle in the photo reads Herbal Harmony. This is not CBD and it is not the 60 ml calming drops. The label makes stress and immune claims — those are the label's words, not ours.",
    details: [
      "Welsdom Herbal Harmony Advanced Suspension, 30 ml (Doba D0102XFBEP2)",
      "Ships from a US warehouse. Doba example: up to $20.11 per sale (78% margin)",
      LABEL,
    ],
    price: 26,
    category: "wellness",
    species: "both",
    image: "/products/herbal-harmony.jpg",
    capacity: "30 ml",
    related: ["immune-suspension", "calm-drops-60", "detox-powder"],
    warehouseUrl:
      "https://www.doba.com/product/hsKZDtPiHebk/dropshipping-herbal-calming-drops-for-dogs-and-cats-natural-anxiety-and-stress-relief-pet-relaxation-aid-travel-and-home-use.html",
  },
  {
    slug: "pupx-glow-4",
    sku: "HB-PLY-GLOW4",
    name: "PUP-X Glow Ball, 4 in",
    tagline: "Glow-in-the-dark treat ball. The pale ball in the photo.",
    description:
      "The pale SodaPup PUP-X ball in the photo, with a star-shaped opening. The warehouse lists it as a 4 inch glow-in-the-dark treat dispenser that floats, made in the USA, for medium and large dogs. Not the 2-pack on a card.",
    details: [
      "PUP-X glow treat ball, 4 in (Doba D01027R8SQJ)",
      "US warehouse, in stock. Doba example: up to $4.46 per sale (26% margin)",
      "Different from the glow 2-pack and the green glitter 2-pack",
    ],
    price: 17,
    category: "play",
    species: "dogs",
    image: "/products/pupx-glow-4.jpg",
    related: ["pupx-glow-2", "pupx-glitter", "ball-launcher"],
    warehouseUrl:
      "https://www.doba.com/product/eUFkQjJUCKvo/dropshipping-pup-x-glow.html",
  },
  {
    slug: "usa-k9-magnum",
    sku: "HB-PLY-K9",
    name: "USA-K9 Magnum Black Ball",
    tagline: "The black ball in the photo. The title and the color do not match.",
    description:
      "The photo is a black USA-K9 Magnum rubber ball. The warehouse title says Stars and Stripes, red. The color line and this photo say Magnum Black, about 3 inches, for dogs around 30–65 lb, with a treat cavity, made in the USA. You are buying the black ball in the photo.",
    details: [
      "USA-K9 Magnum, listed large, 3 in diameter (Doba D01027PE3F6)",
      "US warehouse, in stock. Doba example: up to $4.20 per sale (26% margin)",
      "Not the pink skull chew",
    ],
    price: 16,
    category: "play",
    species: "dogs",
    image: "/products/usa-k9-magnum.jpg",
    related: ["skull-chew", "tough-bone", "dura-chew"],
    warehouseUrl:
      "https://www.doba.com/product/EDFYKbuEMeVw/dropshipping-usa-k9.html",
  },
  {
    slug: "rattan-chaise",
    sku: "HB-BED-CHA",
    name: "Rattan Pet Chaise",
    tagline: "Black chaise. The warehouse example price, not a markup.",
    description:
      "The black chaise in the photo, with a pug on the same sofa. Eucalyptus, flannel, and foam. Overall 29.9 × 17.7 × 16.9 in. The listing's weight capacity is 33 lb — cats and small dogs, not a large dog. Our price is Doba's published example. The supplier note says Amazon shipping and prohibited on Walmart; that is their channel note, not a limit on this shop.",
    details: [
      "Rattan pet sofa, black (Doba D01027RMCST)",
      "29.9 × 17.7 × 16.9 in, weight capacity 33 lb",
      "US warehouse, in stock. Doba example: up to $137.59 per sale (47% margin). Our $293 is that example",
    ],
    price: 293,
    category: "beds",
    species: "both",
    image: "/products/rattan-chaise.jpg",
    material: "Eucalyptus, flannel, foam",
    related: ["fold-cat-cave", "blue-bolster-bed", "lounge-cot-beige"],
    warehouseUrl:
      "https://www.doba.com/product/DKewFdoWLCbt/dropshipping-rattan-chaise.html",
  },
  {
    slug: "immune-suspension",
    sku: "HB-WEL-IM60",
    name: "Immune Suspension, 60 ml",
    tagline: "Welsdom 60 ml bacon drops for dogs and cats. Not CBD.",
    description:
      "Welsdom Immune Suspension, 60 ml, bacon flavour, labeled for dogs and cats, with a measuring cup in the photo. It is not CBD and it is not the 30 ml Herbal Harmony bottle. The box makes relaxation and immune claims and calls itself a veterinary health product — follow the package. We are not repeating those claims.",
    details: [
      "Welsdom Immune Suspension, 60 ml (Doba D0102XF1TPP)",
      "US warehouse. Doba example: up to $14.65 per sale (55% margin)",
      LABEL,
    ],
    price: 27,
    category: "wellness",
    species: "both",
    image: "/products/immune-suspension.jpg",
    capacity: "60 ml",
    related: ["herbal-harmony", "detox-powder", "calm-drops-60"],
    warehouseUrl:
      "https://www.doba.com/product/dSeyVEccmQDK/dropshipping-immune-suspension-for-dogs-and-cats-natural-immune-support-liquid-boost-pet-health-and-wellness.html",
  },
  {
    slug: "moo-born",
    sku: "HB-PLY-MOOB",
    name: "Moo-Born Plush",
    tagline: "Pet Life cow with a yellow teether ring. Not the Moo-Cifier.",
    description:
      "The pale yellow Pet Life cow in the photo, with a blue nose and a yellow teether ring. It is a different toy from the Moo-Cifier already in the shop. The listing prints two size lines.",
    details: [
      "Pet Life Moo-Born plush (Doba D0102HAXIQV)",
      "Listed sizes include 4 × 3 × 1.5 in and 8.66 × 5.12 × 1.4 in",
      "US warehouse. Doba example: up to $4.88 per sale (29% margin)",
    ],
    price: 17,
    category: "play",
    species: "both",
    image: "/products/moo-born.jpg",
    related: ["moo-cifier", "totty-chew", "giraffe-cow"],
    warehouseUrl:
      "https://www.doba.com/product/WLqUKgvAdcbS/dropshipping-pet-life-moo-born.html",
  },
  {
    slug: "totty-chew",
    sku: "HB-PLY-TOT",
    name: "Totty-Chew Bear",
    tagline: "Pink Pet Life bear with an orange rubber middle.",
    description:
      "The pink Pet Life bear in the photo: plush head and feet, orange rubber midsection. The listing also names blue — this order is the pink toy in the photo. Dogs and cats.",
    details: [
      "Pet Life Totty-Chew (Doba D0102HAXILG)",
      "US warehouse. Doba example: up to $4.88 per sale (29% margin)",
      "Plush plus rubber. Supervise chewing",
    ],
    price: 17,
    category: "play",
    species: "both",
    image: "/products/totty-chew.jpg",
    related: ["moo-born", "moo-cifier", "bone-teether"],
    warehouseUrl:
      "https://www.doba.com/product/BDbYFTDTvJqV/dropshipping-pet-life-totty-chew.html",
  },
  {
    slug: "bone-teether",
    sku: "HB-PLY-BONE",
    name: "Bone Teether",
    tagline: "Red and blue Pet Life bone. Floats.",
    description:
      "The red and blue Pet Life bone in the photo. The warehouse lists it as a floating chew and fetch teether.",
    details: [
      "Pet Life bone teether (Doba D0102H7L4CU)",
      "7.87 × 2.9 × 2.36 in. US warehouse",
      "Doba example: up to $4.88 per sale (29% margin)",
    ],
    price: 17,
    category: "play",
    species: "dogs",
    image: "/products/bone-teether.jpg",
    related: ["dumbbell-float", "tough-bone", "totty-chew"],
    warehouseUrl:
      "https://www.doba.com/product/ZQqjDGESzPbN/dropshipping-pet-life-bone-shaped-durable-chew-and-fetch-teether-dog-toy.html",
  },
  {
    slug: "bubble-vogue",
    sku: "HB-TRV-BUB",
    name: "Bubble Vogue Carrier",
    tagline: "Quilted Pet Life carrier. The beige one in the photo.",
    description:
      "Pet Life Bubble Vogue, the beige quilted carrier in the photo. The listing also names pink, grey, gold, and black — this order is the carrier in the photo. A current spec line reads 16 × 12 × 4 in.",
    details: [
      "Pet Life Bubble Vogue carrier (Doba D0102HAXAPA)",
      "US warehouse, in stock. Dogs and cats",
      "Doba example: up to $17.51 per sale (23% margin)",
    ],
    price: 76,
    category: "accessories",
    species: "both",
    image: "/products/bubble-vogue.jpg",
    related: ["mesh-sling", "rolling-carrier", "open-road-seat"],
    warehouseUrl:
      "https://www.doba.com/product/gMqmQrVQfcbD/dropshipping-bubble-vogue.html",
  },
  {
    slug: "mesh-sling",
    sku: "HB-TRV-SLING",
    name: "Mesh Shoulder Sling",
    tagline: "Red and black sling for a small dog or cat.",
    description:
      "The red and black mesh shoulder sling in the photo, puppy beside it. The warehouse artwork on that photo repeats a drawstring badge — we left the picture as the warehouse shipped it. For small dogs and cats. Ships from the United States.",
    details: [
      "Hands-free pet sling, adjustable strap (Doba D0102H2LQZW)",
      "US warehouse, in stock. Doba example: up to $15.47 per sale (47% margin)",
      "The photo is red and black mesh",
    ],
    price: 33,
    category: "accessories",
    species: "both",
    image: "/products/mesh-sling.jpg",
    related: ["bubble-vogue", "rolling-carrier", "open-road-seat"],
    warehouseUrl:
      "https://www.doba.com/product/QAVDecsqGPvl/dropshipping-mesh-sling.html",
  },
  {
    slug: "tough-bone",
    sku: "HB-PLY-TBN",
    name: "Nylon Chew Bone",
    tagline: "Speckled SodaPup nylon bone for aggressive chewers.",
    description:
      "The speckled nylon bone in the photo. SodaPup lists it for aggressive chewers and made in the USA. It is not the soft PUP-X fetch balls.",
    details: [
      "SodaPup nylon chew bone (Doba D01027RWE2P)",
      "US warehouse, in stock. Doba example: up to $2.88 per sale (26% margin)",
      "Aggressive chewers. Still supervise",
    ],
    price: 11,
    category: "play",
    species: "dogs",
    image: "/products/tough-bone.jpg",
    related: ["usa-k9-magnum", "skull-chew", "bone-teether"],
    warehouseUrl:
      "https://www.doba.com/product/oSeaKQPtbFqn/dropshipping-sodapup-nylon-bone.html",
  },
  {
    slug: "pupx-glow-2",
    sku: "HB-PLY-GLOW2",
    name: "PUP-X Glow Ball, 2 Pack",
    tagline: "Two pale green glow balls. Medium. Not the glitter pack.",
    description:
      "The card in the photo: two pale green SodaPup PUP-X balls marked GLOWS, medium, floats, fits ball launchers, made in the USA. A different card from the green glitter 2-pack.",
    details: [
      "PUP-X glow-in-the-dark fetch ball, 2 pack (Doba D01027RUUP2)",
      "US warehouse. Doba example: up to $3.41 per sale (26% margin)",
      "Card says medium",
    ],
    price: 13,
    category: "play",
    species: "dogs",
    image: "/products/pupx-glow-2.jpg",
    related: ["pupx-glitter", "pupx-glow-4", "ball-launcher"],
    warehouseUrl:
      "https://www.doba.com/product/pLQsFgcFweqt/dropshipping-pup-x-glow-2-pack.html",
  },
  {
    slug: "skull-chew",
    sku: "HB-PLY-SKULL",
    name: "Skull Chew with Rope",
    tagline: "Pink skull and a red-and-white rope. The toy in the photo.",
    description:
      "The pink skull in the photo, with a red-and-white rope. The warehouse lists it large, about 8.25 oz, for dogs around 30–65 lb, made in the USA.",
    details: [
      "USA-K9 / SodaPup skull chew with rope (Doba D01027E57QJ)",
      "US warehouse, in stock. Doba example: up to $4.46 per sale (26% margin)",
      "Not the black Magnum ball",
    ],
    price: 17,
    category: "play",
    species: "dogs",
    image: "/products/skull-chew.jpg",
    related: ["usa-k9-magnum", "tough-bone", "dura-chew"],
    warehouseUrl:
      "https://www.doba.com/product/aJeQKwPRhFbu/dropshipping-usa-k9-skull.html",
  },
];
