import type { Product } from "./catalog";

const CBD_NOTE =
  "Warehouse listing — not a substitute for veterinary care. These statements have not been evaluated by the FDA.";

export const EXTRA_PRODUCTS: Product[] = [
  {
    slug: "orthopedic-38",
    sku: "HB-BED-38",
    name: "Orthopedic Sofa Bed 38\"",
    tagline: "Egg-crate foam sofa, washable cover, waterproof lining. Brown, 38 × 28 × 6.5 in.",
    description:
      "The warehouse orthopedic sofa for large dogs: supportive egg-crate foam, a washable removable cover, and a waterproof lining on the bottom. Brown. 38 × 28 × 6.5 in. This photo is that bed.",
    details: [
      "Egg-crate foam sofa bed, brown, 38 × 28 × 6.5 in (Doba D01027HYFBG)",
      "Washable removable cover and waterproof lining",
      "Large dogs; US warehouse",
    ],
    price: 89,
    category: "beds",
    species: "dogs",
    image: "/products/orthopedic-38.jpg",
    exploring: true,
    material: "Egg-crate foam + fabric",
    related: ["elevated-mesh", "dog-sofa-grey", "lounge-cot-beige"],
    warehouseUrl:
      "https://www.doba.com/product/bqQkVJZMyoDK/dropshipping-dog-bed-orthopedic-dog-sofa-for-large-dogssupportive-foam-pet-cushions-bed-with-washable-removable-cover-egg-crate-foam-waterproof-lining-bottom-brown-38-28-65-inch.html",
  },
  {
    slug: "elevated-mesh",
    sku: "HB-BED-MESH",
    name: "Elevated Mesh Cot XL",
    tagline: "VEVOR raised Teslin-mesh cot, steel frame, XL, gray.",
    description:
      "The warehouse ships the VEVOR elevated dog cot in XL gray: a steel frame and breathable Teslin mesh hammock for indoor or outdoor cooling. This photo is that cot.",
    details: [
      "VEVOR elevated cot, XL, gray Teslin mesh, steel frame (Doba D0102X3YK7A)",
      "Indoor and outdoor; raised off the ground for airflow",
      "Large dogs; US warehouse",
    ],
    price: 79,
    category: "beds",
    species: "dogs",
    image: "/products/elevated-mesh.jpg",
    material: "Steel + Teslin mesh",
    related: ["canopy-cot", "lounge-cot-beige", "orthopedic-38"],
    warehouseUrl:
      "https://www.doba.com/product/rWePqJkyVYbL/dropshipping-elevated-dog-bed-for-large-dogs-portable-raised-dog-cot-with-steel-metal-frame-and-breathable-teslin-mesh-indoor-outdoor-pet-cooling-raised-hammock-bed-xl-gray.html",
  },
  {
    slug: "lounge-cot-beige",
    sku: "HB-BED-LOUNGE",
    name: "Lounge Cot Beige L",
    tagline: "VEVOR foldable bunk lounge, 600D Oxford and Dutch velvet, wheels, L, beige.",
    description:
      "The warehouse VEVOR elevated lounge in L beige: 600D Oxford with Dutch velvet, a foldable bunk, side storage bags, wheels, and a carry bag. For cats and dogs. This photo is that lounge.",
    details: [
      "VEVOR elevated lounge, L, beige (Doba D01027RS1C2)",
      "600D Oxford + Dutch velvet; wheels, side bags, carry bag",
      "Cats and dogs; US warehouse",
    ],
    price: 109,
    category: "beds",
    species: "both",
    image: "/products/lounge-cot.jpg",
    material: "600D Oxford + Dutch velvet",
    related: ["elevated-mesh", "dog-sofa-grey", "travel-nest"],
    warehouseUrl:
      "https://www.doba.com/product/pIQWeKCqkFDE/dropshipping-vevor-elevated-lounge-pet-bed-foldable-bunk-dog-bed-with-600d-oxford-cloth-and-dutch-velvet-portable-raised-cot-with-wheels-side-storage-bags-and-carry-bag-for-cats-dogs-l-beige.html",
  },
  {
    slug: "dog-sofa-grey",
    sku: "HB-BED-SOFA",
    name: "Grey Sofa Bed",
    tagline: "Elevated chenille sofa, pine legs, washable cover. Light grey. Up to 55 lb.",
    description:
      "The warehouse elevated sofa in light grey: chenille cover, foam cushion, pine legs rated to 55 lb. Overall 39.4 × 24.4 × 12.6 in. Seat 32.3 × 21.3 in. For medium and large dogs up to 21.7 in body length. This photo is that sofa.",
    details: [
      "Light grey chenille sofa, pine legs, 39.4 × 24.4 × 12.6 in (Doba D0108X319AV)",
      "Washable cover; supports up to 55 lb / 21.7 in body length",
      "Medium and large dogs; simple assembly",
    ],
    price: 129,
    category: "beds",
    species: "dogs",
    image: "/products/dog-sofa.jpg",
    material: "Chenille + pine + foam",
    related: ["orthopedic-38", "lounge-cot-beige", "fleece-nest"],
    warehouseUrl:
      "https://www.doba.com/product/MKQtVekNFPvN/dropshipping-elevated-dog-sofa-bed-cat-couch-with-cushion-washable-cover-wooden-legs-for-medium-large-dogs-light-grey.html",
  },
  {
    slug: "travel-nest",
    sku: "HB-BED-NEST",
    name: "Travel-Nest Bed",
    tagline: "Pet Life Travel-Nest — folding travel bed for cats and dogs.",
    description:
      "The warehouse ships the Pet Life Travel-Nest: a folding travel bed for cats and dogs. Packs down for the car or a weekend bag. This photo is that bed.",
    details: [
      "Pet Life Travel-Nest folding travel bed (Doba D0102HAX9D7)",
      "Cats and dogs; folds for travel",
      "US warehouse, about 2 business days to process",
    ],
    price: 38,
    category: "beds",
    species: "both",
    image: "/products/travel-nest.jpg",
    exploring: true,
    related: ["collapsi-pad", "travel-bowl-set", "fleece-nest"],
    warehouseUrl:
      "https://www.doba.com/product/WhqyegViSPvD/dropshipping-pet-life-travel-nest-folding-travel-cat-and-dog-bed.html",
  },
  {
    slug: "collapsi-pad",
    sku: "HB-BED-PAD",
    name: "Collapsi-Pad House",
    tagline: "Pet Life Collapsi-Pad — folding travel house with inner mat.",
    description:
      "The warehouse Pet Life Collapsi-Pad: a folding lightweight travel house with an inner mat. For cats and small dogs on the road. This photo is that pad and house.",
    details: [
      "Pet Life Collapsi-Pad folding travel house with inner mat (Doba D0102HAXA2U)",
      "Lightweight; folds flat",
      "Cats and small dogs; US warehouse",
    ],
    price: 42,
    category: "beds",
    species: "both",
    image: "/products/collapsi-pad.jpg",
    related: ["travel-nest", "fleece-nest", "travel-bowl-set"],
    warehouseUrl:
      "https://www.doba.com/product/BkbpKAqNfYDo/dropshipping-pet-life-collapsi-pad-folding-lightweight-travel-pet-house-with-inner-mat.html",
  },
  {
    slug: "fleece-nest",
    sku: "HB-BED-FLEECE",
    name: "Fleece Nest Cushion",
    tagline: "Soft warm fleece doughnut nest for puppies, small dogs, and cats.",
    description:
      "The warehouse fleece nest: a round, raised-rim cushion in cream plush. Medium size for a cat, puppy, or small dog. This photo is that nest.",
    details: [
      "Soft warm fleece doughnut nest, medium",
      "Raised rim; cats, puppies, and small dogs",
      "Machine-wash the cover if the warehouse listing says so",
    ],
    price: 28,
    category: "beds",
    species: "both",
    image: "/products/fleece-nest.jpg",
    related: ["travel-nest", "orthopedic-38", "cat-tree-60"],
    warehouseUrl:
      "https://www.doba.com/product/VbqgvfRQweDd/dropshipping-pet-dog-bed-soft-warm-fleece-puppy-cat-bed-dog-cozy-nest-sofa-bed-cushion-m-size.html",
  },
  {
    slug: "canopy-cot",
    sku: "HB-BED-CANOPY",
    name: "Canopy Cooling Cot",
    tagline: "Raised outdoor cot with removable UV canopy, 42 × 30 × 37 in.",
    description:
      "The warehouse elevated cot with a removable sun canopy: breathable mesh, cooling pad, and a storage bag. 42 × 30 × 37 in. Camping and backyard. This photo is that cot.",
    details: [
      "Elevated cot with removable UV canopy, 42 × 30 × 37 in (Doba D0102X3JG9U)",
      "Cooling pad and storage bag in the box",
      "Outdoor dogs; US warehouse",
    ],
    price: 68,
    category: "beds",
    species: "dogs",
    image: "/products/canopy-cot.jpg",
    related: ["elevated-mesh", "lounge-cot-beige", "travel-nest"],
    warehouseUrl:
      "https://www.doba.com/product/cLKabOuQkJvC/dropshipping-elevated-dog-bed-with-removable-canopy-portable-outside-raised-pet-cot-with-cooling-pad-storage-bag-42-x-30-x-37.html",
  },
  {
    slug: "oat-shampoo",
    sku: "HB-CARE-OAT",
    name: "Oat Shampoo Bar",
    tagline: "BeNat Pets all-natural oat shampoo bar, 5.8 oz.",
    description:
      "The warehouse ships the BeNat Pets oat shampoo bar: 5.8 oz, all-natural, for dogs and cats. A bar, not a bottle. This photo is that bar.",
    details: [
      "BeNat Pets all-natural oat shampoo bar, 5.8 oz (Doba D0102HX8BGX)",
      "Bar soap — not a liquid bottle",
      "Dogs and cats; US warehouse, about 1 business day to process",
    ],
    price: 16,
    category: "care",
    species: "both",
    image: "/products/oat-shampoo.jpg",
    exploring: true,
    material: "Oat soap bar",
    related: ["grooming-bundle", "furry-balm", "dry-mousse"],
    warehouseUrl:
      "https://www.doba.com/product/ZLqwDGcWleVb/dropshipping-benat-pets-all-natural-pet-shampoo-bar-oat-58-oz.html",
  },
  {
    slug: "grooming-bundle",
    sku: "HB-CARE-BUNDLE",
    name: "Grooming 3-Pack",
    tagline: "BeNat soap bar, furry balm, and microfiber bath towel.",
    description:
      "The warehouse BeNat 3-pack: the pet soap bar, the 0.9 oz furry balm, and the double-pocket bath towel. Three boxes, sold together. This photo is those three pieces.",
    details: [
      "BeNat 3-pack: soap bar + pet balm + bath towel (Doba D0102HX8BQJ)",
      "Same bar and balm sold on their own pages",
      "Dogs and cats; US warehouse",
    ],
    price: 36,
    category: "care",
    species: "both",
    image: "/products/grooming-bundle.jpg",
    related: ["oat-shampoo", "furry-balm", "bath-brush"],
    warehouseUrl:
      "https://www.doba.com/product/fYqgVnoNNKvQ/dropshipping-benat-pets-3-pack-pet-grooming-bundle-pet-soap-bar-pet-balm-bath-towel.html",
  },
  {
    slug: "furry-balm",
    sku: "HB-CARE-BALM",
    name: "Furry Pet Balm",
    tagline: "BeNat Pets furry pet balm, 0.9 oz, for dry pads and noses.",
    description:
      "The warehouse BeNat Furry Pet Balm: 0.9 oz tin of organic moisturizer for dry, cracked paw pads, noses, and snouts. This photo is that tin.",
    details: [
      "BeNat Pets Furry Pet Balm, 0.9 oz (Doba D0102HX8BGT)",
      "For dry pads, noses, and snouts",
      "Dogs and cats; US warehouse",
    ],
    price: 14,
    category: "care",
    species: "both",
    image: "/products/furry-balm.jpg",
    related: ["paw-cream", "oat-shampoo", "grooming-bundle"],
    warehouseUrl:
      "https://www.doba.com/product/avqMVEJtdKbF/dropshipping-benat-pets-furry-pet-balm-09-oz.html",
  },
  {
    slug: "dry-mousse",
    sku: "HB-CARE-MOUSSE",
    name: "Dry-Clean Mousse",
    tagline: "Yegbong wash-free dry cleaning mousse for cats and dogs.",
    description:
      "The warehouse Yegbong dry-cleaning mousse: a waterless wash for odor and coat on young cats and dogs. This photo is that bottle.",
    details: [
      "Yegbong pet dry-cleaning mousse, wash-free (Doba D0102X3VSPY)",
      "For odor and coat between baths",
      "Cats and dogs; not a substitute for a full bath when one is needed",
    ],
    price: 18,
    category: "care",
    species: "both",
    image: "/products/dry-mousse.jpg",
    related: ["oat-shampoo", "paw-cream", "groom-glove"],
    warehouseUrl:
      "https://www.doba.com/product/oGCbDikYPJVv/dropshipping-yegbong-pet-dry-cleaning-mousse-wash-for-young-cats-and-dogs-wash-free-to-odor-and-smooth-hair-cleaning.html",
  },
  {
    slug: "paw-cream",
    sku: "HB-CARE-PAW",
    name: "Paw Care Cream",
    tagline: "Yegbong moisturizing cream for pads on dogs and cats.",
    description:
      "The warehouse Yegbong paw cream: a deep moisturizer for the soles and pads of dogs and cats. This photo is that tube.",
    details: [
      "Yegbong pet paw care cream for dogs and cats (Doba D01027H770W)",
      "For dry, cracked pads",
      "US warehouse",
    ],
    price: 16,
    category: "care",
    species: "both",
    image: "/products/paw-cream.jpg",
    related: ["furry-balm", "dry-mousse", "oat-shampoo"],
    warehouseUrl:
      "https://www.doba.com/product/ebCWvRrMcYqA/dropshipping-yegbong-pet-paw-care-cream-for-dogs-and-cats-deep-moisturizing-foot-care-cream-for-soles-and-pads.html",
  },
  {
    slug: "groom-glove",
    sku: "HB-CARE-GLOVE",
    name: "Grooming Glove",
    tagline: "2-in-1 right-hand mitt: groom one side, lift hair on the other.",
    description:
      "The warehouse glove is a single right-hand mitt. One side is a silicone grooming brush; the other lifts loose hair off fur and furniture. For cats and dogs. This photo is that glove.",
    details: [
      "Single right-hand mitt, about 6.3 × 9.45 in (Doba D01027H1N1A)",
      "Double-sided: grooming nubs on one side, hair remover on the other",
      "Dogs and cats; rinse and reuse",
    ],
    price: 18,
    category: "care",
    species: "both",
    image: "/products/groom-glove.jpg",
    related: ["steam-brush", "bath-brush", "oat-shampoo"],
    warehouseUrl:
      "https://www.doba.com/product/NmQWvnrpLobp/dropshipping-pet-hair-remover-glove-gentle-pet-grooming-glove-brush-deshedding-glove.html",
  },
  {
    slug: "steam-brush",
    sku: "HB-CARE-STEAM",
    name: "Steam Grooming Brush",
    tagline: "3-in-1 USB steam brush: spray, massage comb, and cleaning head.",
    description:
      "The warehouse 3-in-1 steam brush: a USB-rechargeable steamer comb for cats and dogs. Add warm water, press the button, about an hour per charge (150 mAh). This photo is that brush.",
    details: [
      "3-in-1 USB steam brush for cats and dogs (Doba D0102HQP96A)",
      "Spray head, massage comb, cleaning brush; ~1 hour per charge",
      "Cats and dogs; US warehouse",
    ],
    price: 28,
    category: "care",
    species: "both",
    image: "/products/steam-brush.jpg",
    related: ["groom-glove", "bath-brush", "dry-mousse"],
    warehouseUrl:
      "https://www.doba.com/product/jkvbCsNiwYVF/dropshipping-3-in-1-cat-grooming-steam-brush-hair-brush-with-steamer-pet-massage-comb-cleaning-brush-for-cats-dogs-usb-rechargeable.html",
  },
  {
    slug: "bath-brush",
    sku: "HB-CARE-BATH",
    name: "Bath Massage Brush",
    tagline: "Soft rubber bath comb for shampoo and a soapy massage.",
    description:
      "The warehouse bath brush: a soothing rubber comb for dogs and cats in the tub. Holds shampoo in the palm well. This photo is that brush.",
    details: [
      "Soft rubber bath and massage comb",
      "Use with the oat shampoo bar or any pet wash",
      "Dogs and cats",
    ],
    price: 14,
    category: "care",
    species: "both",
    image: "/products/bath-brush.jpg",
    related: ["oat-shampoo", "groom-glove", "grooming-bundle"],
    warehouseUrl:
      "https://www.doba.com/product/LACbFzQjUeDT/dropshipping-dog-bath-brush-pet-bath-comb-brush-soothing-massage-rubber-comb.html",
  },
  {
    slug: "chicken-chips",
    sku: "HB-TRT-CHICKEN",
    name: "Chicken Jerky Strips",
    tagline: "Grain-free chicken jerky, 300 g, for small and large dogs.",
    description:
      "The warehouse chicken jerky: all-natural, grain-free, high-protein strips, 300 gram bag. Training and everyday chews. Supervise. This photo is those strips.",
    details: [
      "Chicken jerky dog treats, 300 g, grain-free (Doba D0102HRMCUT)",
      "High-protein dried strips for small and large dogs",
      "A treat, not a meal. Supervise any chew.",
    ],
    price: 18,
    category: "treats",
    species: "dogs",
    image: "/products/chicken-chips.jpg",
    exploring: true,
    related: ["calcium-bones", "triple-rawhide", "frog-dispenser"],
    warehouseUrl:
      "https://www.doba.com/product/DbqAVrwNuKvU/dropshipping-chicken-jerky-dog-treats-all-natural-and-organic-healthy-snacks-for-large-small-dogs-grain-free-and-high-protein-human-grade-pet-chews-300-gram.html",
  },
  {
    slug: "calcium-bones",
    sku: "HB-TRT-BONE",
    name: "Calcium Chicken Bones",
    tagline: "Chicken-wrapped calcium bones, rawhide-free, grain-free.",
    description:
      "The warehouse calcium bones wrapped in chicken: rawhide-free chew treats, grain-free, for small and large dogs. This photo is those bones.",
    details: [
      "Chicken-wrapped calcium bones, rawhide-free (Doba D0102HRMCU2)",
      "Grain-free training chews for small and large dogs",
      "Supervise any chew; not a meal",
    ],
    price: 16,
    category: "treats",
    species: "dogs",
    image: "/products/calcium-bones.jpg",
    related: ["chicken-chips", "triple-rawhide", "denta-bone"],
    warehouseUrl:
      "https://www.doba.com/product/DiqybgjSMevt/dropshipping-dog-calcium-bones-wrapped-chicken-rawhide-free-chew-treats-pet-healthy-dried-snacks-grain-free-organic-meat-chews-for-training-small-large-dogs.html",
  },
  {
    slug: "triple-rawhide",
    sku: "HB-TRT-TRIPLE",
    name: "Triple-Flavor Rawhide",
    tagline: "Duck and chicken rawhide sticks, grain-free, long-lasting.",
    description:
      "The warehouse triple-flavor rawhide: duck and chicken wrapped sticks for small and large dogs. Long-lasting chew. Supervise. This photo is those sticks.",
    details: [
      "Triple-flavor rawhide, duck and chicken (Doba D0102XTKTIJ)",
      "Grain-free long-lasting chews",
      "Supervise; not for dogs who gulp whole chews",
    ],
    price: 22,
    category: "treats",
    species: "dogs",
    image: "/products/triple-rawhide.jpg",
    related: ["calcium-bones", "chicken-chips", "denta-twist"],
    warehouseUrl:
      "https://www.doba.com/product/YNCZbzDUVeqv/dropshipping-triple-flavor-dog-rawhide-treats-duck-chicken-human-grade-meat-natural-organic-pet-dried-snacks-grain-free-long-lasting-chews-for-large-small-dogs-best-sticks-for-healthy-teeth.html",
  },
  {
    slug: "cat-chicken-treats",
    sku: "HB-TRT-CATCHKN",
    name: "Cat Chicken Treats",
    tagline: "Dried chicken snacks sized for cats.",
    description:
      "The warehouse cat chicken treats: dried chicken pieces for cats, not the 300 g dog jerky bag. This photo is that cat bag.",
    details: [
      "Dried chicken treats formulated for cats",
      "Not the 300 g dog jerky strips",
      "A snack, not a meal",
    ],
    price: 24,
    category: "treats",
    species: "cats",
    image: "/products/cat-chicken.jpg",
    related: ["chicken-chips", "cat-tunnel", "cat-fish-brush"],
    warehouseUrl:
      "https://www.doba.com/product/hGKPvcModoqQ/dropshipping-cat-chicken-treats-dried-chicken-snacks-for-cats.html",
  },
  {
    slug: "cbd-relief",
    sku: "HB-TRT-CBD-R",
    name: "CBD Relief Treats",
    tagline: "Full-spectrum CBD dog treats for relief, bacon.",
    description:
      "The warehouse full-spectrum CBD dog treats labeled for relief, bacon flavor. Same pouch you see here. Not a medicine.",
    details: [
      "Full-spectrum CBD dog treats for relief, bacon",
      CBD_NOTE,
      "Dogs only; US warehouse",
    ],
    price: 32,
    category: "treats",
    species: "dogs",
    image: "/products/cbd-relief.jpg",
    related: ["cbd-calm", "cbd-bacon", "hemp-joint-120"],
    warehouseUrl:
      "https://www.doba.com/product/DTQvVbyNgKqm/dropshipping-cbd-dog-treats-full-spectrum-cbd-for-relief-bacon.html",
  },
  {
    slug: "cbd-calm",
    sku: "HB-TRT-CBD-C",
    name: "CBD Calm Treats",
    tagline: "Full-spectrum CBD dog treats for calm, bacon.",
    description:
      "The warehouse full-spectrum CBD dog treats labeled for calm, bacon flavor. Same pouch you see here. Not a medicine.",
    details: [
      "Full-spectrum CBD dog treats for calm, bacon",
      CBD_NOTE,
      "Dogs only; US warehouse",
    ],
    price: 32,
    category: "treats",
    species: "dogs",
    image: "/products/cbd-calm.jpg",
    related: ["cbd-relief", "calming-chews", "cbd-bacon"],
    warehouseUrl:
      "https://www.doba.com/product/VaKyqpioEebQ/dropshipping-cbd-dog-treats-full-spectrum-cbd-for-calm-bacon.html",
  },
  {
    slug: "cbd-bacon",
    sku: "HB-TRT-CBD-B",
    name: "CBD Bacon Treats",
    tagline: "Full-spectrum CBD dog treats, bacon.",
    description:
      "The warehouse full-spectrum CBD bacon dog treats — the everyday CBD pouch, not the Relief or Calm SKU. This photo is that pouch.",
    details: [
      "Full-spectrum CBD dog treats, bacon",
      CBD_NOTE,
      "Not the Relief or Calm SKU — check the pouch name",
    ],
    price: 32,
    category: "treats",
    species: "dogs",
    image: "/products/cbd-bacon.jpg",
    related: ["cbd-relief", "cbd-calm", "chicken-chips"],
    warehouseUrl:
      "https://www.doba.com/product/vkFgDymireba/dropshipping-cbd-dog-treats-full-spectrum-cbd-bacon.html",
  },
  {
    slug: "calming-chews",
    sku: "HB-TRT-CALM",
    name: "Welsdom Calming Chews",
    tagline: "The Welsdom calming-chew pouch, US warehouse.",
    description:
      "The warehouse pouch is Welsdom calming chews for dogs. This photo is that pouch — the same bag, front and back.",
    details: [
      "Natural dog calming chews, 30 count (Doba D0102XF1XSP)",
      "US warehouse, about 1–3 days in transit",
      CBD_NOTE,
    ],
    price: 26,
    category: "treats",
    species: "dogs",
    image: "/products/calming-chews.jpg",
    related: ["cbd-calm", "hemp-oil-drops", "slow-meal-mat"],
    warehouseUrl:
      "https://www.doba.com/product/dCQHvbPEKFDW/dropshipping-natural-dog-calming-chews-for-anxiety-relief-behavior-support---tasty-safe.html",
  },
  {
    slug: "hemp-joint-120",
    sku: "HB-WEL-HEMP120",
    name: "Hemp Hip & Joint 120",
    tagline: "120 USA-made soft chews with glucosamine, chondroitin, MSM, and hemp oil.",
    description:
      "The warehouse hemp hip-and-joint bag: 120 soft treats made in the USA with glucosamine, chondroitin, MSM, and hemp oil. This photo is that pouch.",
    details: [
      "120 USA-made soft chews — glucosamine, chondroitin, MSM, hemp oil (Doba D010277HQ5X)",
      "Dogs; Daily Snipes / warehouse listing",
      CBD_NOTE,
    ],
    price: 38,
    category: "wellness",
    species: "dogs",
    image: "/products/hemp-joint.jpg",
    exploring: true,
    related: ["glucosamine-120", "joint-muscle-chew", "cbd-relief"],
    warehouseUrl:
      "https://www.doba.com/product/VnedbayNKQvD/dropshipping-hemp-hip-and-joint-supplement-for-dogs-glucosamine-for-dogs-joint-pain-relief-chews-with-chondroitin-msm-hemp-oil-mobility-support-canine-cartilage-health-120-soft-treats-made-in-usa.html",
  },
  {
    slug: "glucosamine-120",
    sku: "HB-WEL-GLU120",
    name: "Glucosamine Chews 120",
    tagline: "Hip and joint chews with chondroitin, hemp oil, and MSM. 120 count.",
    description:
      "The warehouse 120-count glucosamine chew for dogs — chondroitin, hemp oil, MSM. A different bag from the hemp-joint 120. This photo is that bag.",
    details: [
      "120 glucosamine chews with chondroitin, hemp oil, MSM",
      "Dogs; not the tablet bottle",
      CBD_NOTE,
    ],
    price: 36,
    category: "wellness",
    species: "dogs",
    image: "/products/glucosamine-120.jpg",
    related: ["hemp-joint-120", "glucosamine-tabs", "joint-liquid"],
    warehouseUrl:
      "https://www.doba.com/product/MlCeFLKqYQVG/dropshipping-glucosamine-for-dogs-hip-and-joint-supplement-for-dogs-with-arthritis-chews-with-chondroitin-hemp-oil-msm-canine-joint-pain-relief-health-mobility-support-for-large-breeds-120-soft-treats.html",
  },
  {
    slug: "glucosamine-tabs",
    sku: "HB-WEL-TABS",
    name: "Joint Tablets",
    tagline: "Glucosamine, turmeric, chondroitin, MSM, boswellia tablets for dogs.",
    description:
      "The warehouse tablet bottle: glucosamine, turmeric, chondroitin, MSM, and boswellia for dogs. Tablets, not soft chews. US warehouse. This photo is that bottle.",
    details: [
      "Glucosamine turmeric tablets with chondroitin, MSM, boswellia (Doba D0102HAV7C6)",
      "Tablets — not the 120 soft-chew bags",
      "Dogs; US warehouse, Amazon MCF, 1–3 days",
    ],
    price: 34,
    category: "wellness",
    species: "dogs",
    image: "/products/glucosamine-tabs.jpg",
    related: ["glucosamine-120", "hemp-joint-120", "joint-liquid"],
    warehouseUrl:
      "https://www.doba.com/product/cgbQKGCEfFqH/dropshipping-dog-hip-and-joint-supplement-with-glucosamine-turmeric-for-dogs-chondroitin-msm-boswellia-tablets-for-mobility-agility-limping-pain-inflammation-relief-for-senior-dogs.html",
  },
  {
    slug: "joint-liquid",
    sku: "HB-WEL-OIL",
    name: "Welsdom Joint Oil",
    tagline: "Welsdom joint nutritional oil, 120 ml, for dogs and cats.",
    description:
      "The warehouse 120 ml joint oil for dogs and cats (Welsdom). Measuring cup in the box — small-dog dose is 2 ml. This photo is that bottle.",
    details: [
      "Welsdom joint nutritional supplement oil, 120 ml (Doba D0102XFBEE8)",
      "Dogs and cats; measuring cup included (2 ml small-dog dose)",
      "US warehouse, 1–2 days to process",
    ],
    price: 24,
    category: "wellness",
    species: "both",
    image: "/products/joint-liquid.jpg",
    related: ["yegbong-drops", "hemp-oil-drops", "glucosamine-tabs"],
    warehouseUrl:
      "https://www.doba.com/product/mgCMDZJOnKbO/dropshipping-joint-nutritional-supplement-for-dogs-and-cats-supports-mobility-and-healthy-joints.html",
  },
  {
    slug: "joint-muscle-chew",
    sku: "HB-WEL-MUSCLE",
    name: "Welsdom Joint & Muscle Chews",
    tagline: "The Welsdom joint-and-muscle pouch, 30 chews.",
    description:
      "The warehouse pouch is Welsdom Joint & Muscle Chews for dogs. This photo is that pouch, front and back.",
    details: [
      "Welsdom joint and muscle chews, 30 count (Doba D0102XF1XIJ)",
      "Dogs; ships from the US warehouse",
      "Follow the label; not a vet substitute",
    ],
    price: 28,
    category: "wellness",
    species: "dogs",
    image: "/products/joint-muscle.jpg",
    related: ["hemp-joint-120", "glucosamine-120", "skin-chews"],
    warehouseUrl:
      "https://www.doba.com/product/IdCabqYOFKDB/dropshipping-joint-and-muscle-chew-for-dogs-natural-supplement-for-mobility-and-joint-health.html",
  },
  {
    slug: "hemp-oil-drops",
    sku: "HB-WEL-HEMPOIL",
    name: "Hemp Oil Drops",
    tagline: "Omega hemp oil drops for dogs — skin, coat, and joints.",
    description:
      "The warehouse hemp oil for dogs: an omega hemp oil dropper, not the CBD treat pouches. This photo is that bottle.",
    details: [
      "Omega hemp oil drops for dogs",
      "Skin, coat, and joint support oil — not a treat pouch",
      CBD_NOTE,
    ],
    price: 29,
    category: "wellness",
    species: "dogs",
    image: "/products/hemp-oil.jpg",
    related: ["joint-liquid", "yegbong-drops", "cbd-calm"],
    warehouseUrl:
      "https://www.doba.com/product/FRDjVQwtqKbf/dropshipping-optimavitality-omega-hemp-oil-for-dogs-supports-skin-coat-joint-health-and-overall-wellness.html",
  },
  {
    slug: "skin-chews",
    sku: "HB-WEL-SKIN",
    name: "Welsdom Skin Health Chews",
    tagline: "Welsdom skin chews, bacon, 30 count.",
    description:
      "The warehouse pouch is Welsdom Skin Health Chews, bacon flavor, 30 chews (120 g). This photo is that pouch, front and back.",
    details: [
      "Welsdom Skin Health Chews, 30 count, bacon (Doba D0102XFB09J)",
      "Dogs; ships from a US warehouse",
      "Follow the label; not a vet substitute",
    ],
    price: 26,
    category: "wellness",
    species: "dogs",
    image: "/products/skin-chews.jpg",
    related: ["hemp-oil-drops", "joint-muscle-chew", "oat-shampoo"],
    warehouseUrl:
      "https://www.doba.com/product/mHKZqUcFBCvh/dropshipping-omega-canine-coat-skin-chews-skin-coat-chewables-for-dogs-120-soft-chews-fish-oil.html",
  },
  {
    slug: "yegbong-drops",
    sku: "HB-WEL-YEGBONG",
    name: "Yegbong Soothing Drops",
    tagline: "Yegbong 60 ml dropper — the bottle the warehouse ships.",
    description:
      "The warehouse bottle is Yegbong Pet Soothing Drops, 60 ml / 2 fl oz, with a dropper. This photo is that box and bottle. Follow the label. Not a vet substitute.",
    details: [
      "Yegbong Pet Soothing Drops, 60 ml dropper (Doba D01027H5E7G)",
      "For cats and dogs",
      "US warehouse; follow the printed label",
    ],
    price: 22,
    category: "wellness",
    species: "both",
    image: "/products/yegbong-drops.jpg",
    related: ["joint-liquid", "hemp-oil-drops", "eye-drops"],
    warehouseUrl:
      "https://www.doba.com/product/FmKeqwWiiJbB/dropshipping-yegbong-pet-bee-venom-oil-joint-care-for-cats-and-dogs-s-joint-for-pets-pet-care-water.html",
  },
  {
    slug: "denta-twist",
    sku: "HB-PLAY-TWIST",
    name: "Denta-Twist Chew",
    tagline: "Pet Life Denta-Twist — TPR dental chew toy.",
    description:
      "The warehouse Pet Life Denta-Twist: a TPR dental chew with a twisted, ridged body. Dogs. Warehouse color may vary. This photo is that toy.",
    details: [
      "Pet Life Denta-Twist TPR dental chew (Doba D0102HAXILU)",
      "Ridged twist for gums; dogs",
      "Supervise any chew. Color from the warehouse may vary.",
    ],
    price: 16,
    category: "play",
    species: "dogs",
    image: "/products/denta-twist.jpg",
    material: "TPR rubber",
    related: ["denta-bone", "tri-chew", "frog-dispenser"],
    warehouseUrl:
      "https://www.doba.com/product/rYvdCZVBqoDb/dropshipping-pet-life-denta-twist-tpr-durable-dental-chew-toy.html",
  },
  {
    slug: "denta-bone",
    sku: "HB-PLAY-DBONE",
    name: "Denta-Bone Chew",
    tagline: "Pet Life Denta-Bone — TPR treat-dispensing dental bone.",
    description:
      "The warehouse Pet Life Denta-Bone: a TPR bone with treat tunnels and dental ridges. Dogs. This photo is that bone.",
    details: [
      "Pet Life Denta-Bone TPR treat-dispensing dental toy (Doba D0102HAXIHU)",
      "Fill the tunnels; ridges for gums",
      "Dogs; supervise any chew",
    ],
    price: 16,
    category: "play",
    species: "dogs",
    image: "/products/denta-bone.jpg",
    material: "TPR rubber",
    related: ["denta-twist", "frog-dispenser", "calcium-bones"],
    warehouseUrl:
      "https://www.doba.com/product/WeVMCrqoIYvA/dropshipping-pet-life-denta-bone-tpr-treat-dispensing-and-dental-cleaning-durable-dog-toy.html",
  },
  {
    slug: "sling-away",
    sku: "HB-PLAY-SLING",
    name: "Sling-Away Launcher",
    tagline: "Pet Life Sling-Away — jute-and-TPR treat flinger, 12.6 in.",
    description:
      "The warehouse Pet Life Sling-Away: a 12.59 × 4.9 × 3.26 in TPR and jute treat launcher with a squeaker. Load treats, fling, dog chases. Blue, green, or red from the warehouse. This photo is that toy.",
    details: [
      "Pet Life Sling-Away TPR + jute, 12.59 × 4.9 × 3.26 in (Doba D0102H7L487)",
      "Treat-dispensing flinger with squeaker",
      "Dogs; warehouse color is blue, green, or red. Supervise.",
    ],
    price: 18,
    category: "play",
    species: "dogs",
    image: "/products/sling-away.jpg",
    material: "TPR + jute",
    related: ["ball-launcher", "soccer-ball", "denta-twist"],
    warehouseUrl:
      "https://www.doba.com/product/ZaVRvHGRNcqQ/dropshipping-pet-life-sling-away-treat-dispensing-launcher-with-natural-jute-squeak-rubberized-dog-toy.html",
  },
  {
    slug: "broom-lick",
    sku: "HB-PLAY-BROOM",
    name: "Broom-Lick Toy",
    tagline: "Pet Life Broom-Lick — plush and jute rope squeaker for cats and dogs.",
    description:
      "The warehouse Pet Life Broom-Lick: a plush head on a jute rope with a squeaker. For cats and dogs. This photo is that toy.",
    details: [
      "Pet Life Broom-Lick plush + jute rope squeaker (Doba D0102HAXIQA)",
      "Cats and dogs; a toy, not a chew for power chewers",
      "Supervise; remove if stuffing comes out",
    ],
    price: 14,
    category: "play",
    species: "both",
    image: "/products/broom-lick.jpg",
    related: ["sling-away", "cat-fish-brush", "tri-chew"],
    warehouseUrl:
      "https://www.doba.com/product/AfbyQgvAlcVS/dropshipping-pet-life-broom-lick-plush-and-jute-rope-squeaking-newborn-cat-and-dog-toy.html",
  },
  {
    slug: "soccer-ball",
    sku: "HB-PLAY-SOCCER",
    name: "Soccer Fetch Ball",
    tagline: "Rubber soccer-style fetch ball for dogs.",
    description:
      "The warehouse soccer-style fetch ball: a rubber ball printed like a football, for chase and chew. Dogs. This photo is that ball.",
    details: [
      "Rubber soccer-style fetch ball",
      "Dogs; outdoor fetch and gentle chew",
      "Supervise; not for heavy chewers who shred balls",
    ],
    price: 16,
    category: "play",
    species: "dogs",
    image: "/products/soccer-ball.jpg",
    related: ["sling-away", "ball-launcher", "corn-chew"],
    warehouseUrl:
      "https://www.doba.com/product/iMKpqaSiVeDg/dropshipping-squeaky-football-branch-fetch-and-play-latex-rubber-dog-toy-ball.html",
  },
  {
    slug: "corn-chew",
    sku: "HB-PLAY-CORN",
    name: "Corn Chew Toy",
    tagline: "Squeaky simulation-corn chew for dogs.",
    description:
      "The warehouse corn chew: a squeaky simulation-corn toy for dogs. This photo is that toy.",
    details: [
      "Squeaky simulation-corn dog chew",
      "Dogs; a toy, not food",
      "Supervise any chew",
    ],
    price: 15,
    category: "play",
    species: "dogs",
    image: "/products/corn-chew.jpg",
    related: ["soccer-ball", "denta-twist", "frog-dispenser"],
    warehouseUrl:
      "https://www.doba.com/product/isCPKHefRFDS/dropshipping-pet-dog-voice-toy-gritty-teeth-resistant-dog-toy-pet-simulation-corn-toy.html",
  },
  {
    slug: "cat-tunnel",
    sku: "HB-PLAY-TUNNEL",
    name: "3-Way Cat Tunnel",
    tagline: "Pet Life Kitting-Go-Seek — collapsible 3-way tunnel.",
    description:
      "The warehouse item is the Pet Life 3-way Kitting-Go-Seek tunnel: a collapsible passage for cats. This photo is that tunnel.",
    details: [
      "Pet Life 3-way collapsible cat tunnel (Doba D0102H703TU)",
      "Cats and kittens",
      "Folds for storage",
    ],
    price: 22,
    category: "play",
    species: "cats",
    image: "/products/cat-tunnel.jpg",
    related: ["sisal-scratcher", "scratch-post", "cat-tree-60"],
    warehouseUrl:
      "https://www.doba.com/product/akqMVzHWsobC/dropshipping-cat-tunnel-toy-bed-with-cushion-mat-with-pop-up-collapsible-2-way-tube-and-scratching-ball.html",
  },
  {
    slug: "sisal-scratcher",
    sku: "HB-PLAY-SISAL",
    name: "L-Sisal Scratcher",
    tagline: "L-shaped sisal board with hanging ball for cats.",
    description:
      "The warehouse L-shaped sisal scratcher with a hanging ball — one base for scratching, tapping, and pouncing. This photo is that board.",
    details: [
      "L-shaped sisal scratching board with hanging ball (Doba D01027RZ8CP)",
      "Cats; sits on the floor",
      "Not a full cat tree",
    ],
    price: 24,
    category: "play",
    species: "cats",
    image: "/products/sisal-scratch.jpg",
    related: ["scratch-post", "cat-tunnel", "cat-tree-60"],
    warehouseUrl:
      "https://www.doba.com/product/QFCtKBPMvebf/dropshipping-l-shaped-sisal-cat-scratching-board-with-hanging-ball---scratching-tapping-and-pouncing-one-base-meets-the-three-major-instincts-of-cats.html",
  },
  {
    slug: "scratch-post",
    sku: "HB-PLAY-POST",
    name: "Sisal Scratch Post",
    tagline: "Upright sisal post with a hanging toy for indoor cats.",
    description:
      "The warehouse upright sisal scratching post with a hanging toy. A post, not the 60 in cat tree. This photo is that post.",
    details: [
      "Upright sisal scratching post with hanging toy",
      "Indoor cats; smaller than the 60 in tree",
      "Place on a level floor",
    ],
    price: 32,
    category: "play",
    species: "cats",
    image: "/products/scratch-post.jpg",
    related: ["sisal-scratcher", "cat-tree-60", "cat-tunnel"],
    warehouseUrl:
      "https://www.doba.com/product/DTFHvctNLJbo/dropshipping-cat-scratching-post-mushroom-cat-scratcher-with-sisal-ropes-interactive-track-ball-toy.html",
  },
  {
    slug: "cat-fish-brush",
    sku: "HB-PLAY-FISH",
    name: "Fish Catnip Brush",
    tagline: "Fish-shaped silicone toothbrush with catnip for cats.",
    description:
      "The warehouse fish-shaped cat toothbrush: eco-friendly silicone with catnip, for chewing and a bit of dental work. Cats only. This photo is that fish.",
    details: [
      "Fish-shaped silicone toothbrush with catnip",
      "Cats; a chew toy, not a meal",
      "Supervise",
    ],
    price: 12,
    category: "play",
    species: "cats",
    image: "/products/cat-fish.jpg",
    related: ["cat-tunnel", "oral-foam", "broom-lick"],
    warehouseUrl:
      "https://www.doba.com/product/jIqGVRDvwcvl/dropshipping-cat-toothbrush-fish-shape-with-catnip-pet-eco-friendly-silicone-molar-stick-teeth-cleaning-toy-for-cats.html",
  },
  {
    slug: "pine-stairs",
    sku: "HB-ACC-STAIRS",
    name: "Pine Pet Step",
    tagline: "One low pine step, 11.8 × 10.2 × 3.9 in, natural wood and grey.",
    description:
      "The warehouse step is a single low pine pet step, 11.8 in long, 10.2 in wide, 3.9 in high, natural wood and grey. For cats and small dogs. This photo is that step — not a tall staircase.",
    details: [
      "Pine pet step, 11.8 × 10.2 × 3.9 in, natural wood and grey (Doba D01027HV99W)",
      "Cats and small dogs; not the car stairs and not a 3-step tower",
      "Sits against a low sofa or bed",
    ],
    price: 36,
    category: "accessories",
    species: "both",
    image: "/products/pine-stairs.jpg",
    material: "Pine + carpet",
    related: ["folding-ramp", "car-stairs", "orthopedic-38"],
    warehouseUrl:
      "https://www.doba.com/product/jdCSqyWnEYDN/dropshipping-3-step-wooden-carpeted-non-slip-pet-stairs-ramp-for-cats-and-small-dogs.html",
  },
  {
    slug: "folding-ramp",
    sku: "HB-ACC-RAMP",
    name: "Folding Pet Ramp",
    tagline: "Foldable ramp, four heights from 15 to 19 in, with side rails.",
    description:
      "The warehouse folding pet ramp: four height settings from 15 to 19 inches, side rails, for small to large pets onto a bed or sofa. This photo is that ramp.",
    details: [
      "Folding pet ramp, heights 15–19 in, side rails (Doba D0102X3T1QW)",
      "Dogs and cats; indoor furniture",
      "Not the aluminum 4-step car stairs",
    ],
    price: 58,
    category: "accessories",
    species: "both",
    image: "/products/folding-ramp.jpg",
    material: "Wood + non-slip",
    related: ["pine-stairs", "car-stairs", "orthopedic-38"],
    warehouseUrl:
      "https://www.doba.com/product/hGQyqSupwYDo/dropshipping-dog-ramp-folding-pet-ramp-for-bed-adjustable-dog-ramp-for-small-large-old-dogs-cats-wooden-pet-ramp.html",
  },
  {
    slug: "car-stairs",
    sku: "HB-ACC-CAR",
    name: "Car Folding Stairs",
    tagline: "Wide 4-step folding stairs for car, SUV, and truck.",
    description:
      "The warehouse folding car stairs: a wide 4-step portable ladder with a non-slip surface for car, SUV, and truck. Lightweight aluminum. This photo is those stairs.",
    details: [
      "Wide 4-step folding dog car stairs, non-slip, supports up to 400 lb",
      "Car, SUV, truck; not the pine indoor stairs",
      "Dogs; check the warehouse weight rating on the box",
    ],
    price: 79,
    category: "accessories",
    species: "dogs",
    image: "/products/car-stairs.jpg",
    material: "Lightweight metal",
    related: ["folding-ramp", "pine-stairs", "travel-bowl-set"],
    warehouseUrl:
      "https://www.doba.com/product/ZcKaFjPNCeDJ/dropshipping-dog-stair-for-cars-wide-4-step-dog-car-steps-folding-dog-car-ramp-with-nonslip-surface-portable-pet-steps-lightweight-aluminum.html",
  },
  {
    slug: "pee-pads",
    sku: "HB-ACC-PADS",
    name: "Washable Pee Pads",
    tagline: "Qeils 2-pack, 36 × 41 in, reusable and leakproof.",
    description:
      "The warehouse pads are the Qeils washable 2-pack: 36 × 41 in reusable puppy pads, leakproof, non-slip. Not a disposable roll. This photo is that 2-pack.",
    details: [
      "Qeils washable pee pads, 2-pack, 36 × 41 in (Doba D0102HQEXNY)",
      "Reusable, leakproof, non-slip — floor, crate, or whelping",
      "Not disposable training pads",
    ],
    price: 28,
    category: "accessories",
    species: "both",
    image: "/products/pee-pads.jpg",
    related: ["dirty-doormat", "travel-bowl-set", "collapsi-pad"],
    warehouseUrl:
      "https://www.doba.com/product/saVFCYISkoDL/dropshipping-puppy-pee-pads-super-absorbent-disposable-pet-training-pads.html",
  },
  {
    slug: "dirty-doormat",
    sku: "HB-ACC-MAT",
    name: "Dirty Dog Doormat",
    tagline: "DGS Dirty Dog absorbent doormat — warehouse color may vary.",
    description:
      "The warehouse DGS Dirty Dog doormat: a thick microfiber mat that pulls water and dirt off paws. Warehouse color includes almond, mocha, silver grey, and others. This photo is that mat.",
    details: [
      "DGS Pet Products Dirty Dog doormat, machine-washable microfiber",
      "Warehouse color varies (almond, mocha, silver grey, and more)",
      "Dogs and cats at the door; US warehouse",
    ],
    price: 48,
    category: "accessories",
    species: "both",
    image: "/products/dirty-mat.jpg",
    related: ["pee-pads", "paw-cream", "groom-glove"],
    warehouseUrl:
      "https://www.doba.com/product/TbemvVARWoDa/dropshipping-dgs-pet-products-dirty-dog-doormat-runner-almond-60-x-30-x-2.html",
  },
  {
    slug: "cat-tree-60",
    sku: "HB-ACC-TREE",
    name: "60-Inch Cat Tree",
    tagline: "5-level grey cat tree, about 60 in, sisal posts, condo, hammock.",
    description:
      "The warehouse 5-level cat tree in grey, about 60 inches: sisal scratch posts, a condo, hammock, and perches. Indoor cats. This photo is that tree.",
    details: [
      "About 60 in, 5-level, grey, sisal posts, condo, hammock",
      "Indoor cats; not the small L-sisal board",
      "Assemble on a level floor; use the anti-tip strap if included",
    ],
    price: 89,
    category: "accessories",
    species: "cats",
    image: "/products/cat-tree.jpg",
    related: ["scratch-post", "sisal-scratcher", "cat-tunnel"],
    warehouseUrl:
      "https://www.doba.com/product/RnCwqtkchYVy/dropshipping-cat-tree-for-indoor-cats-602-inch-tall-5-level-modern-grey-sisal-scratch-posts-cat-condo-with-hammock-cat-tower-for-large-breeds.html",
  },
  {
    slug: "eye-drops",
    sku: "HB-ACC-EYE",
    name: "Pet Eye Drops",
    tagline: "Yegbong eye-cleaning drops for cats and dogs.",
    description:
      "The warehouse Yegbong eye drops: a gentle eye-cleaning wash for cats and dogs, including tear-stain care on the label. This photo is that bottle.",
    details: [
      "Yegbong pet eye drops for cats and dogs",
      "Cleaning wash — not a prescription",
      "Follow the warehouse label; not a vet substitute",
    ],
    price: 16,
    category: "accessories",
    species: "both",
    image: "/products/eye-drops.jpg",
    related: ["oral-foam", "yegbong-drops", "paw-cream"],
    warehouseUrl:
      "https://www.doba.com/product/cRCWVMpteYvu/dropshipping-yegbong-pet-eye-drops-cats-and-dogs-eye-cleaning-care-pet-eye-wash-tear-stain-r.html",
  },
  {
    slug: "oral-foam",
    sku: "HB-ACC-ORAL",
    name: "Oral Care Foam",
    tagline: "Yegbong oral spray for dogs — breath and tooth care on the label.",
    description:
      "The warehouse Yegbong oral spray: a no-brush foam/spray for a dog's mouth. Label talks about breath and yellow teeth — it is a cleaner, not a dental procedure. This photo is that bottle.",
    details: [
      "Yegbong pet oral spray for dogs (Doba D0102X3ZX5Y)",
      "A cleaner, not a veterinary dental",
      "Dogs; follow the warehouse label",
    ],
    price: 18,
    category: "accessories",
    species: "dogs",
    image: "/products/oral-foam.jpg",
    related: ["denta-twist", "cat-fish-brush", "eye-drops"],
    warehouseUrl:
      "https://www.doba.com/product/frCyDQMfZYqH/dropshipping-yegbong-pet-oral-spray---dog-care-cleans-pets-oral-cavity-eliminates-bad-breath-and-yellow-teeth-convenient-care.html",
  },
];
