# The Garden Book 🌿

A printable plant journal website — inspired by classic "Plant Profile" printables, with an added **Pruning** section.

## Pages

- **Plant Profiles** — one sheet per plant: photo, general information (name, scientific name, origin, propagation, type, ideal temp, soil type, fertilizer), sunlight / water / toxicity checkboxes, plant uses, **pruning** (best season, method, frequency, tools, last pruned, notes), plant log, and pests/diseases & treatment.
- **Watering Schedule** — weekly tick-box watering chart.
- **Weekly Planner** — day-by-day garden planner with a task checklist.

Every sheet is print-ready: use the **Print sheets** button (each sheet lands on its own page).

## Adding plants

Plant names, photos, and details go in [`plants.js`](plants.js) — push one object per plant onto the `PLANTS` array (a documented example is in the file). Put photo files in an `images/` folder and reference them by path. With no plants added, the site shows the blank template.

## Viewing online (GitHub Pages)

The included workflow (`.github/workflows/pages.yml`) deploys the site to GitHub Pages on every push to the default branch. If the site isn't live yet, enable it once under **Settings → Pages → Source: GitHub Actions**.
