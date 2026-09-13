/*
 * Garden Book — plant data
 * ------------------------
 * Add one object per plant. Every field is optional: anything you leave
 * out renders as a blank line on the printed sheet, ready to fill in by hand.
 *
 * Example entry (uncomment and edit):
 *
 * PLANTS.push({
 *   name: "Rosemary",
 *   scientificName: "Salvia rosmarinus",
 *   photo: "images/rosemary.jpg",          // path or URL; omit for an empty photo box
 *   origin: "Mediterranean",
 *   propagation: "Cuttings",
 *   type: "Evergreen shrub",
 *   idealTemp: "55–80 °F",
 *   soilType: "Sandy, well-drained",
 *   fertilizer: "Light feed in spring",
 *   sunlight: "Sun",                        // "Sun" | "Part Shade" | "Shade"
 *   water: "Low",                           // "Low" | "Medium" | "High"
 *   toxicity: ["Human Safe", "Pet Safe"],   // any of: "Human Safe", "Pet Safe"
 *   uses: ["Edible", "Spice", "Tea"],       // any of: Edible, Medicinal, Decorative,
 *                                           //         Spice, Dye, Tea, Repellant, Other
 *   pruning: {
 *     seasons: ["Spring", "Summer"],        // any of: Spring, Summer, Autumn, Winter
 *     methods: ["Pinch", "Cut Back"],       // any of: Pinch, Deadhead, Thin,
 *                                           //         Cut Back, Shear, Limb Up
 *     frequency: "After flowering",
 *     tools: "Bypass pruners",
 *     lastPruned: "",
 *     notes: "Never cut into bare wood — it won't regrow."
 *   },
 *   pests: "Aphids — rinse off; spider mites in dry spells.",
 *   log: [
 *     { date: "3/14", entry: "Potted up into terracotta" },
 *   ]
 * });
 */

const PLANTS = [];

PLANTS.push({
  name: "Butterfly Bush",
  scientificName: "Buddleja davidii",
  // photo: "images/butterfly-bush.jpg",  // add the photo file to images/ to show it here
  origin: "Central China; naturalized widely",
  propagation: "Softwood cuttings in summer; self-seeds readily",
  type: "Deciduous flowering shrub (compact/dwarf form)",
  idealTemp: "60–85 °F; hardy zones 5–9, dies back in cold winters",
  soilType: "Average, well-drained; tolerates poor soil, hates wet feet",
  fertilizer: "Little needed — a light spring feed at most; overfeeding cuts blooms",
  sunlight: "Sun",
  water: "Low",
  toxicity: ["Human Safe", "Pet Safe"],
  uses: ["Decorative"],
  pruning: {
    seasons: ["Spring", "Summer"],
    methods: ["Deadhead", "Cut Back"],
    frequency: "Hard prune once each spring; deadhead all summer",
    tools: "Bypass pruners; loppers for thick old stems",
    lastPruned: "",
    notes: "Blooms on new wood — cut all stems back to 12–18 in. in early spring once buds swell (never in autumn; frost can kill fresh cuts). Through summer, deadhead spent purple spikes just above a leaf pair to keep new panicles coming and stop it self-seeding."
  },
  pests: "Largely trouble-free. Spider mites in hot, dry spells (rinse foliage, insecticidal soap); occasional aphids and Japanese beetles. Root rot in soggy soil — drainage is the real safeguard.",
  log: [
    { date: "2026-09-13", entry: "Added to the garden book — in full purple bloom" }
  ]
});
