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
  photo: "images/butterfly-bush.jpg",  // shows as soon as this file lands in images/
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

PLANTS.push({
  name: "Russian Sage",
  scientificName: "Salvia yangii (Perovskia atriplicifolia)",
  photo: "images/russian-sage.jpg",
  origin: "Steppes of Central Asia — Afghanistan to Tibet",
  propagation: "Softwood cuttings; occasionally self-seeds",
  type: "Woody-based perennial subshrub",
  idealTemp: "Loves heat; hardy zones 4–9",
  soilType: "Lean, sandy or gravelly, sharply drained",
  fertilizer: "None — rich soil makes it flop",
  sunlight: "Sun",
  water: "Low",
  toxicity: ["Human Safe", "Pet Safe"],
  uses: ["Decorative"],
  pruning: {
    seasons: ["Spring"],
    methods: ["Cut Back", "Shear"],
    frequency: "Hard cut-back once each spring; optional mid-summer shear",
    tools: "Bypass pruners",
    lastPruned: "",
    notes: "Blooms on new wood — leave stems standing over winter for hardiness, then cut back to 6–12 in. in early spring when new growth shows at the base. A light shear of spent spikes in mid-summer encourages a second flush."
  },
  pests: "Practically pest-free; deer and rabbit resistant. Wet winter soil is the main killer — drainage over everything.",
  log: [
    { date: "2026-09-13", entry: "Added to the garden book — hazy violet bloom above the drip line" }
  ]
});

PLANTS.push({
  name: "English Lavender",
  scientificName: "Lavandula angustifolia",
  photo: "images/english-lavender.jpg",
  origin: "Mediterranean",
  propagation: "Semi-hardwood cuttings in summer; slow from seed",
  type: "Evergreen woody subshrub (herb)",
  idealTemp: "60–85 °F; hardy zones 5–9",
  soilType: "Lean, gritty, alkaline-leaning; sharp drainage essential",
  fertilizer: "Little to none — lean soil means more fragrance",
  sunlight: "Sun",
  water: "Low",
  toxicity: ["Human Safe"],
  uses: ["Edible", "Tea", "Medicinal", "Decorative", "Repellant"],
  pruning: {
    seasons: ["Spring", "Summer"],
    methods: ["Shear", "Deadhead"],
    frequency: "Shear after each bloom flush; shape once in spring",
    tools: "Hedge shears or snips",
    lastPruned: "",
    notes: "Right after bloom, shear off the spent flower stems plus the top 1–2 in. of foliage to keep the mound dense — but never cut into old bare wood, it won't resprout. Do major shaping in spring once new growth shows."
  },
  pests: "Few pests — the real enemies are winter wet and humidity (root rot, fungal dieback). Gravel mulch beats bark; give it airflow.",
  log: [
    { date: "2026-09-13", entry: "Added to the garden book — edging the lawn in full bloom" }
  ]
});

PLANTS.push({
  name: "Autumn Joy Sedum",
  scientificName: "Hylotelephium 'Herbstfreude' (stonecrop)",
  photo: "images/sedum-autumn-joy.jpg",
  origin: "Garden hybrid; parent species from East Asia",
  propagation: "Division in spring; stem cuttings root very easily",
  type: "Herbaceous succulent perennial",
  idealTemp: "Hardy zones 3–9",
  soilType: "Average, well-drained; thrives in poor soil",
  fertilizer: "None — rich soil causes flopping",
  sunlight: "Sun",
  water: "Low",
  toxicity: ["Human Safe", "Pet Safe"],
  uses: ["Decorative"],
  pruning: {
    seasons: ["Spring", "Winter"],
    methods: ["Pinch", "Cut Back"],
    frequency: "Cut down in late winter; optional pinch in late spring",
    tools: "Snips or fingers",
    lastPruned: "",
    notes: "Leave the bronze seed heads standing all winter — they feed birds and hold frost beautifully — then cut old stems to the base in late winter. If clumps flop open, pinch or cut stems back by half in late May (the 'Chelsea chop') for sturdier, later bloom."
  },
  pests: "Nearly trouble-free; occasional aphids. Overwatering or too much shade causes stem rot and flopping.",
  log: [
    { date: "2026-09-13", entry: "Added to the garden book — pink heads covered in butterflies" }
  ]
});

PLANTS.push({
  name: "Beardtongue",
  scientificName: "Penstemon digitalis (dark-leaved, likely 'Husker Red' or 'Dark Towers')",
  photo: "images/penstemon.jpg",
  origin: "North America — prairies and open woods",
  propagation: "Division in spring, cuttings; self-seeds",
  type: "Semi-evergreen herbaceous perennial",
  idealTemp: "Hardy zones 3–8",
  soilType: "Average, well-drained; dislikes wet clay",
  fertilizer: "Light spring compost at most",
  sunlight: "Sun",
  water: "Low",
  toxicity: ["Human Safe", "Pet Safe"],
  uses: ["Decorative"],
  pruning: {
    seasons: ["Summer", "Spring"],
    methods: ["Deadhead", "Cut Back"],
    frequency: "Cut spent stalks after bloom; tidy in early spring",
    tools: "Bypass pruners",
    lastPruned: "",
    notes: "Once the flower stalks finish and seed heads brown, cut them down to the low basal rosette (or leave some for the birds — it self-seeds). Keep the evergreen rosette over winter and just tidy dead material in early spring."
  },
  pests: "Very little troubles it; root rot in soggy winter soil is the main risk. Deer resistant.",
  log: [
    { date: "2026-09-13", entry: "Added to the garden book — burgundy seed heads after summer bloom" }
  ]
});

PLANTS.push({
  name: "Weigela",
  scientificName: "Weigela florida (dark-foliage cultivar)",
  photo: "images/weigela.jpg",
  origin: "East Asia — China, Korea, Japan",
  propagation: "Softwood cuttings in early summer",
  type: "Deciduous flowering shrub with purple-bronze foliage",
  idealTemp: "Hardy zones 4–8",
  soilType: "Average, well-drained; adaptable",
  fertilizer: "Light balanced feed in early spring if at all",
  sunlight: "Sun",
  water: "Medium",
  toxicity: ["Human Safe", "Pet Safe"],
  uses: ["Decorative"],
  pruning: {
    seasons: ["Spring", "Summer"],
    methods: ["Thin", "Cut Back"],
    frequency: "Once a year, right after the spring bloom",
    tools: "Bypass pruners; loppers for old stems",
    lastPruned: "",
    notes: "Flowers on last year's wood — prune immediately after the main spring bloom, never in fall or winter or you remove next year's flowers. Each year thin two or three of the oldest stems at the base to renew the shrub; full sun keeps the dark leaf color richest."
  },
  pests: "Generally trouble-free; occasional aphids or scale — a strong hose spray or horticultural oil handles both.",
  log: [
    { date: "2026-09-13", entry: "Added to the garden book — wine-dark foliage by the brick corner" }
  ]
});
