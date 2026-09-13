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

PLANTS.push({
  "name": "Variegated Dogwood",
  "scientificName": "Cornus alba 'Elegantissima'",
  "origin": "Siberia and northern China (species)",
  "propagation": "Hardwood cuttings in winter; layering",
  "type": "Deciduous shrub — white-edged leaves, red winter stems",
  "idealTemp": "Cool-climate tough; hardy zones 3–7",
  "soilType": "Adaptable; likes moisture, tolerates clay",
  "fertilizer": "Light compost in spring",
  "sunlight": "Sun",
  "water": "Medium",
  "toxicity": [
    "Human Safe",
    "Pet Safe"
  ],
  "uses": [
    "Decorative"
  ],
  "pruning": {
    "seasons": [
      "Winter",
      "Spring"
    ],
    "methods": [
      "Thin",
      "Cut Back"
    ],
    "frequency": "Renewal-thin every late winter",
    "tools": "Loppers; bypass pruners",
    "lastPruned": "",
    "notes": "The brightest red winter bark is on young wood — each late winter cut a third of the oldest, dullest stems right to the ground. Every few years the whole shrub can be coppiced to 8–12 in. to fully renew it; light shaping any time in summer."
  },
  "pests": "Tolerant overall — occasional scale, aphids, and leaf spot; canker can appear on stressed old stems (prune them out).",
  "log": [
    {
      "date": "2026-09-13",
      "entry": "Added to the garden book — cream-edged leaves over red stems"
    }
  ],
  "photo": "images/variegated-dogwood.jpg"
});

PLANTS.push({
  "name": "Feather Reed Grass",
  "scientificName": "Calamagrostis × acutiflora 'Karl Foerster'",
  "origin": "Garden hybrid of European and Asian species",
  "propagation": "Division in spring (sterile — it won't self-seed)",
  "type": "Cool-season ornamental grass, strict upright clumps",
  "idealTemp": "Hardy zones 4–9; grows in cool weather",
  "soilType": "Adaptable, even heavy clay; likes some moisture",
  "fertilizer": "None needed",
  "sunlight": "Sun",
  "water": "Medium",
  "toxicity": [
    "Human Safe",
    "Pet Safe"
  ],
  "uses": [
    "Decorative"
  ],
  "pruning": {
    "seasons": [
      "Winter",
      "Spring"
    ],
    "methods": [
      "Cut Back",
      "Shear"
    ],
    "frequency": "One hard cut-back a year, late winter",
    "tools": "Hedge shears; tie the clump into a sheaf first",
    "lastPruned": "",
    "notes": "Leave the wheat-gold plumes standing all winter — they are the show. In late winter, before new green emerges, tie the clump like a sheaf and shear it down to 4–6 in. in one clean cut."
  },
  "pests": "Essentially pest- and disease-free; a little rust only in wet, airless corners.",
  "log": [
    {
      "date": "2026-09-13",
      "entry": "Added to the garden book — plumes going gold by the brick wall"
    }
  ],
  "photo": "images/feather-reed-grass.jpg"
});

PLANTS.push({
  "name": "Honeysuckle Vine",
  "scientificName": "Lonicera — likely coral honeysuckle (L. sempervirens)",
  "origin": "Eastern North America (coral honeysuckle)",
  "propagation": "Softwood cuttings; layering where a stem touches soil",
  "type": "Twining woody vine, trained on a trellis; red berries in fall",
  "idealTemp": "Hardy zones 4–9",
  "soilType": "Average, well-drained",
  "fertilizer": "Light feed in spring; too much means leaves over flowers",
  "sunlight": "Sun",
  "water": "Medium",
  "toxicity": [],
  "uses": [
    "Decorative"
  ],
  "pruning": {
    "seasons": [
      "Spring",
      "Summer"
    ],
    "methods": [
      "Thin",
      "Cut Back"
    ],
    "frequency": "Light shaping after the main bloom; renew in late winter",
    "tools": "Bypass pruners",
    "lastPruned": "",
    "notes": "Blooms mostly on new growth — a light trim after the big flush keeps it tidy and encourages rebloom. Every few late winters, thin the oldest woody stems at the base to renew; untangle rather than shear so the trellis stays open."
  },
  "pests": "Aphids cluster on new tips (hose them off); powdery mildew when airflow is poor. The red berries are for the birds — mildly toxic to people and pets, so no snacking.",
  "log": [
    {
      "date": "2026-09-13",
      "entry": "Added to the garden book — berries ripening red on the trellis"
    }
  ],
  "photo": "images/honeysuckle.jpg"
});

PLANTS.push({
  "name": "Variegated Maiden Grass",
  "scientificName": "Miscanthus sinensis 'Variegatus'",
  "origin": "East Asia",
  "propagation": "Division in spring",
  "type": "Warm-season ornamental grass, arching cream-striped blades",
  "idealTemp": "Hardy zones 5–9; hits stride in summer heat",
  "soilType": "Average, well-drained",
  "fertilizer": "None to light — rich soil makes it flop",
  "sunlight": "Sun",
  "water": "Medium",
  "toxicity": [
    "Human Safe",
    "Pet Safe"
  ],
  "uses": [
    "Decorative"
  ],
  "pruning": {
    "seasons": [
      "Winter",
      "Spring"
    ],
    "methods": [
      "Cut Back"
    ],
    "frequency": "One cut-back a year in late winter",
    "tools": "Hedge shears and gloves — the blades are sharp",
    "lastPruned": "",
    "notes": "Let the fountain of foliage stand through winter, then cut the whole clump to 4–6 in. in late winter before new shoots emerge. When the center hollows out after some years, lift and divide in spring."
  },
  "pests": "Trouble-free; flops open in shade or overly rich soil. Wear gloves — the blade edges cut.",
  "log": [
    {
      "date": "2026-09-13",
      "entry": "Added to the garden book — cream-striped fountain by the trellis"
    }
  ],
  "photo": "images/variegated-miscanthus.jpg"
});

PLANTS.push({
  "name": "Limelight Hydrangea",
  "scientificName": "Hydrangea paniculata 'Limelight'",
  "origin": "Species from China and Japan; Dutch-bred cultivar",
  "propagation": "Softwood cuttings in early summer",
  "type": "Deciduous flowering shrub — lime panicles aging to cream",
  "idealTemp": "Hardy zones 3–8; one of the toughest hydrangeas",
  "soilType": "Average, well-drained; far less fussy than mophead types",
  "fertilizer": "Light balanced feed in spring; overfeeding flops the heads",
  "sunlight": "Sun",
  "water": "Medium",
  "toxicity": [],
  "uses": [
    "Decorative"
  ],
  "pruning": {
    "seasons": [
      "Winter",
      "Spring"
    ],
    "methods": [
      "Cut Back",
      "Deadhead"
    ],
    "frequency": "Once, in late winter or early spring",
    "tools": "Bypass pruners; loppers for the framework",
    "lastPruned": "",
    "notes": "Blooms on new wood — cut back by about a third in late winter to a sturdy framework and you get fewer but bigger heads on stems strong enough to hold them. The dried heads can stand all winter; snip whenever you like."
  },
  "pests": "Few problems — occasional aphids or leaf spot. Keep pets from chewing any hydrangea; the leaves and buds are mildly toxic if eaten.",
  "log": [
    {
      "date": "2026-09-13",
      "entry": "Added to the garden book — lime heads glowing against the brick"
    }
  ],
  "photo": "images/limelight-hydrangea.jpg"
});

PLANTS.push({
  "name": "White Shrub Rose",
  "scientificName": "Rosa — white cluster-flowered landscape rose",
  "origin": "Garden hybrid",
  "propagation": "Softwood or hardwood cuttings",
  "type": "Repeat-blooming shrub rose, double white clusters",
  "idealTemp": "Hardy zones 4–9",
  "soilType": "Rich, well-drained; steady moisture",
  "fertilizer": "Feed in spring and after each bloom flush",
  "sunlight": "Sun",
  "water": "Medium",
  "toxicity": [
    "Human Safe",
    "Pet Safe"
  ],
  "uses": [
    "Decorative"
  ],
  "pruning": {
    "seasons": [
      "Spring",
      "Summer"
    ],
    "methods": [
      "Deadhead",
      "Thin",
      "Cut Back"
    ],
    "frequency": "Main prune in early spring; deadhead all season",
    "tools": "Bypass pruners; rose gauntlets",
    "lastPruned": "",
    "notes": "In early spring, as buds swell, cut back by about a third, remove dead and crossing canes, and open the center for airflow — always cutting to an outward-facing bud. Deadhead spent clusters through summer for repeat bloom, and stop by early fall so the wood hardens for winter."
  },
  "pests": "The usual rose watch: black spot and powdery mildew (morning sun, airflow, water at the base), aphids and Japanese beetles (hose off or hand-pick into soapy water).",
  "log": [
    {
      "date": "2026-09-13",
      "entry": "Added to the garden book — smothered in white clusters"
    }
  ],
  "photo": "images/white-rose.jpg"
});

PLANTS.push({
  "name": "Ninebark",
  "scientificName": "Physocarpus opulifolius — dark-leaved ('Diabolo' type)",
  "origin": "North America",
  "propagation": "Softwood cuttings",
  "type": "Deciduous shrub, deep burgundy lobed foliage; peeling winter bark",
  "idealTemp": "Hardy zones 3–7",
  "soilType": "Adaptable, well-drained; drought tolerant once established",
  "fertilizer": "Little to none",
  "sunlight": "Sun",
  "water": "Low",
  "toxicity": [
    "Human Safe",
    "Pet Safe"
  ],
  "uses": [
    "Decorative"
  ],
  "pruning": {
    "seasons": [
      "Spring",
      "Summer"
    ],
    "methods": [
      "Thin",
      "Cut Back"
    ],
    "frequency": "Thin right after its early-summer bloom",
    "tools": "Loppers; bypass pruners",
    "lastPruned": "",
    "notes": "Blooms on old wood — prune just after the white button flowers finish. Take a few of the oldest stems to the ground each year to renew and show the peeling bark. If it outgrows its spot it shrugs off a full cut to the base in late winter (at the cost of that year's flowers)."
  },
  "pests": "Tough as nails; powdery mildew on crowded new growth is the one real issue — thin for airflow. Full sun keeps the burgundy darkest.",
  "log": [
    {
      "date": "2026-09-13",
      "entry": "Added to the garden book — near-black foliage in full sun"
    }
  ],
  "photo": "images/ninebark.jpg"
});

PLANTS.push({
  "name": "Orange Coneflower",
  "scientificName": "Echinacea hybrid — 'Sombrero'-type orange",
  "origin": "North American prairie species; modern garden hybrid",
  "propagation": "Division in spring; hybrids don't come true from seed",
  "type": "Herbaceous perennial",
  "idealTemp": "Hardy zones 4–9",
  "soilType": "Average, well-drained",
  "fertilizer": "A little compost in spring at most",
  "sunlight": "Sun",
  "water": "Low",
  "toxicity": [
    "Human Safe",
    "Pet Safe"
  ],
  "uses": [
    "Medicinal",
    "Decorative"
  ],
  "pruning": {
    "seasons": [
      "Summer",
      "Autumn"
    ],
    "methods": [
      "Deadhead",
      "Cut Back"
    ],
    "frequency": "Deadhead through summer; cut down in late winter",
    "tools": "Snips",
    "lastPruned": "",
    "notes": "Deadhead spent cones back to a lower bud and the flowers keep coming. Leave the last seed heads standing through winter — goldfinches work them for months — then cut the stems to the basal rosette in late winter."
  },
  "pests": "Few troubles; rots in winter-wet soil. Aster yellows (green, deformed blooms) is the one to act on — remove the plant.",
  "log": [
    {
      "date": "2026-09-13",
      "entry": "Added to the garden book — young plant, first flame-orange cones"
    }
  ],
  "photo": "images/orange-coneflower.jpg"
});

PLANTS.push({
  "name": "Japanese Spirea",
  "scientificName": "Spiraea japonica — gold/red-tipped ('Double Play' type)",
  "origin": "Japan, China, Korea",
  "propagation": "Softwood cuttings",
  "type": "Compact deciduous shrub; new growth flames gold to red, pink corymbs",
  "idealTemp": "Hardy zones 4–8",
  "soilType": "Average, well-drained; unfussy",
  "fertilizer": "Light feed in spring",
  "sunlight": "Sun",
  "water": "Medium",
  "toxicity": [
    "Human Safe",
    "Pet Safe"
  ],
  "uses": [
    "Decorative"
  ],
  "pruning": {
    "seasons": [
      "Spring",
      "Summer"
    ],
    "methods": [
      "Shear",
      "Deadhead",
      "Cut Back"
    ],
    "frequency": "Shear after the first bloom; hard prune late winter as needed",
    "tools": "Hedge shears",
    "lastPruned": "",
    "notes": "Blooms on new wood — shear off the spent flower heads after the first flush and it usually reblooms with a fresh blaze of colored new growth. Every late winter it can be cut back hard, even to 6 in., to stay dense and compact."
  },
  "pests": "Sturdy; occasional aphids or leaf spot. Can self-seed — shearing the spent blooms prevents it.",
  "log": [
    {
      "date": "2026-09-13",
      "entry": "Added to the garden book — pink heads over flame-tipped leaves"
    }
  ],
  "photo": "images/japanese-spirea.jpg"
});

PLANTS.push({
  "name": "Cream Shrub Rose",
  "scientificName": "Rosa — cream-to-apricot shrub rose",
  "origin": "Garden hybrid",
  "propagation": "Softwood or hardwood cuttings",
  "type": "Repeat-blooming shrub rose, full cream blooms with a gold heart",
  "idealTemp": "Hardy zones 4–9",
  "soilType": "Rich, well-drained; steady moisture",
  "fertilizer": "Feed in spring and after each bloom flush",
  "sunlight": "Sun",
  "water": "Medium",
  "toxicity": [
    "Human Safe",
    "Pet Safe"
  ],
  "uses": [
    "Decorative"
  ],
  "pruning": {
    "seasons": [
      "Spring",
      "Summer"
    ],
    "methods": [
      "Deadhead",
      "Thin",
      "Cut Back"
    ],
    "frequency": "Main prune in early spring; deadhead all season",
    "tools": "Bypass pruners; rose gauntlets",
    "lastPruned": "",
    "notes": "Same rhythm as its white companion: early-spring cut-back by a third to outward-facing buds with the center opened for air, then steady summer deadheading for wave after wave of bloom. Stop deadheading by early fall to let it harden off."
  },
  "pests": "Black spot and mildew are kept off with airflow and base-watering; hose off aphids, hand-pick Japanese beetles.",
  "log": [
    {
      "date": "2026-09-13",
      "entry": "Added to the garden book — cream blooms with a soft gold center"
    }
  ],
  "photo": "images/cream-rose.jpg"
});

PLANTS.push({
  "name": "Yarrow",
  "scientificName": "Achillea millefolium — terracotta/pastel cultivar",
  "origin": "Europe, Asia, and North America",
  "propagation": "Division every few years; can self-seed",
  "type": "Herbaceous perennial with ferny, aromatic foliage",
  "idealTemp": "Hardy zones 3–9",
  "soilType": "Lean and sharply drained; thrives on neglect",
  "fertilizer": "None — rich soil makes it flop",
  "sunlight": "Sun",
  "water": "Low",
  "toxicity": [
    "Human Safe"
  ],
  "uses": [
    "Medicinal",
    "Decorative"
  ],
  "pruning": {
    "seasons": [
      "Summer"
    ],
    "methods": [
      "Deadhead",
      "Cut Back"
    ],
    "frequency": "Deadhead each flush; cut back by half if it sprawls",
    "tools": "Snips",
    "lastPruned": "",
    "notes": "Deadhead faded corymbs to a side bud for repeated waves of bloom in shifting sunset shades. If the clump sprawls in high summer, cut it back by half — it refreshes quickly. Cut to the basal foliage in late fall or early spring."
  },
  "pests": "Nearly indestructible in lean, dry soil; rots in rich wet ground. Mildly toxic to dogs and cats, so discourage grazing.",
  "log": [
    {
      "date": "2026-09-13",
      "entry": "Added to the garden book — peach and amber heads over ferny leaves"
    }
  ],
  "photo": "images/yarrow.jpg"
});

PLANTS.push({
  "name": "Hardy Hibiscus",
  "scientificName": "Hibiscus moscheutos hybrid — dark-leaved rose mallow",
  "origin": "North American wetland species; modern hybrid",
  "propagation": "Division in spring; softwood cuttings",
  "type": "Die-back herbaceous perennial with dinner-plate blooms",
  "idealTemp": "Hardy zones 4–9; loves heat",
  "soilType": "Rich and moist; one of the few that tolerates wet feet",
  "fertilizer": "Feed in spring and again midsummer",
  "sunlight": "Sun",
  "water": "High",
  "toxicity": [
    "Human Safe",
    "Pet Safe"
  ],
  "uses": [
    "Decorative"
  ],
  "pruning": {
    "seasons": [
      "Winter",
      "Spring"
    ],
    "methods": [
      "Cut Back",
      "Pinch",
      "Deadhead"
    ],
    "frequency": "Cut dead stalks in late winter; pinch once in early summer",
    "tools": "Loppers for the woody stalks",
    "lastPruned": "",
    "notes": "It is the last plant to wake in spring — never declare it dead. Cut last year's stalks to about 6 in. in late winter and mark the spot; pinch the new shoots once in early summer for a bushier plant with more dinner-plate blooms. Deadhead to keep it fresh."
  },
  "pests": "Japanese beetles and hibiscus sawfly larvae chew the leaves (hand-pick or use insecticidal soap); keep it well watered — drought stress invites spider mites.",
  "log": [
    {
      "date": "2026-09-13",
      "entry": "Added to the garden book — blush dinner-plate blooms over dark leaves"
    }
  ],
  "photo": "images/hardy-hibiscus.jpg"
});

PLANTS.push({
  "name": "Rose of Sharon",
  "scientificName": "Hibiscus syriacus — double pale pink ('Blushing Bride' type)",
  "origin": "China and India",
  "propagation": "Softwood cuttings; species self-seeds (doubles far less)",
  "type": "Upright deciduous shrub, late-summer hibiscus blooms",
  "idealTemp": "Hardy zones 5–9; loves heat",
  "soilType": "Average, well-drained; very adaptable",
  "fertilizer": "Light feed in spring",
  "sunlight": "Sun",
  "water": "Low",
  "toxicity": [
    "Human Safe"
  ],
  "uses": [
    "Decorative"
  ],
  "pruning": {
    "seasons": [
      "Winter",
      "Spring"
    ],
    "methods": [
      "Thin",
      "Cut Back"
    ],
    "frequency": "Once, in late winter or early spring",
    "tools": "Bypass pruners; loppers",
    "lastPruned": "",
    "notes": "Blooms on new wood in late summer — prune in late winter: thin crowded interior stems and shorten last year's growth. Cutting harder gives fewer but larger flowers, and it tolerates renovation down to a framework."
  },
  "pests": "Aphids on new tips and Japanese beetles in midsummer. The ASPCA lists Rose of Sharon as mildly toxic to dogs and cats — discourage nibbling.",
  "log": [
    {
      "date": "2026-09-13",
      "entry": "Added to the garden book — pink doubles rising through the black-eyed susans"
    }
  ],
  "photo": "images/rose-of-sharon.jpg"
});

PLANTS.push({
  "name": "Panicle Hydrangea",
  "scientificName": "Hydrangea paniculata — cream cone-flowered cultivar",
  "origin": "China and Japan (species)",
  "propagation": "Softwood cuttings in early summer",
  "type": "Deciduous shrub — big conical cream heads aging to parchment",
  "idealTemp": "Hardy zones 3–8",
  "soilType": "Average, well-drained; adaptable",
  "fertilizer": "Light balanced feed in spring only",
  "sunlight": "Sun",
  "water": "Medium",
  "toxicity": [],
  "uses": [
    "Decorative"
  ],
  "pruning": {
    "seasons": [
      "Winter",
      "Spring"
    ],
    "methods": [
      "Cut Back",
      "Deadhead"
    ],
    "frequency": "Once, in late winter or early spring",
    "tools": "Bypass pruners; loppers",
    "lastPruned": "",
    "notes": "Blooms on new wood — in late winter cut back by a third to a strong framework and thin spindly stems so the cones ride on sturdy wood. Spent heads dry beautifully; leave them for winter or cut for the vase."
  },
  "pests": "Few problems; heads may brown early in hot afternoon sun — deep watering helps. Mildly toxic if pets chew the foliage.",
  "log": [
    {
      "date": "2026-09-13",
      "entry": "Added to the garden book — cream cones fading to parchment"
    }
  ],
  "photo": "images/panicle-hydrangea.jpg"
});

PLANTS.push({
  "name": "Pink Weigela",
  "scientificName": "Weigela florida — green-leaved rebloomer ('Sonic Bloom' type)",
  "origin": "East Asia — China, Korea, Japan",
  "propagation": "Softwood cuttings in early summer",
  "type": "Arching deciduous shrub; pink trumpet flowers spring into fall",
  "idealTemp": "Hardy zones 4–8",
  "soilType": "Average, well-drained; adaptable",
  "fertilizer": "Light balanced feed in early spring",
  "sunlight": "Sun",
  "water": "Medium",
  "toxicity": ["Human Safe", "Pet Safe"],
  "uses": ["Decorative"],
  "pruning": {
    "seasons": ["Spring", "Summer"],
    "methods": ["Thin", "Cut Back"],
    "frequency": "Once a year, right after the big spring bloom",
    "tools": "Bypass pruners; loppers for old stems",
    "lastPruned": "",
    "notes": "The main flush comes on last year's wood, so do the real pruning right after spring bloom — but a rebloomer like this also flowers on new growth, which is why it's showing pink in September. Thin a couple of the oldest stems at the base each year and shorten wayward shoots; avoid fall pruning."
  },
  "pests": "Generally trouble-free; occasional aphids — a strong hose spray handles them. Hummingbirds love the trumpets.",
  "log": [{ "date": "2026-09-13", "entry": "Added to the garden book — reblooming pink among the black-eyed susans" }],
  "photo": "images/pink-weigela.jpg"
});
