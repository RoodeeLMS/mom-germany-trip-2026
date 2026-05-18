# ทริปเยอรมนีของแม่ 2026 — Website Overview

**Main Plan (10 days):** 14 พ.ย. – 25 พ.ย. 2026, 7-8 ท่าน, FRA in/out, hired van+driver
**Alternative Plans:** 20-day (เยอรมนีครบ) + 30-day (เยอรมนี + 6 ประเทศเพื่อนบ้าน)
**Excluded:** France, Switzerland, Italy (per user request)

## เส้นทาง (3 routes)

| Route | Duration | Countries | Cities | UNESCO | Budget/pp |
|-------|----------|-----------|--------|--------|-----------|
| **Main** | 10 days | 1 (DE) | 11 | 4 | ~135,000 ฿ |
| Grand Germany | 20 days | 1 (DE) | 17-18 | 8-10 | ~225,000 ฿ |
| Grand Tour | 30 days | 7 (DE/AT/CZ/NL/BE/LU/DK) | 28-30 | 15+ | ~340,000 ฿ |

## โครงสร้างเว็บไซต์

### Hub pages (9)
1. `index.html` — Home with countdown, route promo, destination gallery
2. `routes.html` — Compare 10/20/30 day routes
3. `itinerary.html` — 10-day day-by-day (main plan)
4. `itinerary-20day.html` — 20-day day-by-day
5. `itinerary-30day.html` — 30-day day-by-day (5 stages)
6. `towns.html` — Index of all 34 towns (filter by route/country/UNESCO)
7. `sights.html` — Index of 27 iconic landmarks (filter by country/UNESCO)
8. `hotels.html` / `transport.html` / `food.html` / `tips.html` — original 10-day reference pages

### Town pages (34 total)
- **Germany (24)**: Frankfurt, Goslar, Wernigerode, Quedlinburg, Magdeburg, Berlin, Potsdam, Dresden, Rostock, Schwerin, Lübeck, Hamburg, Hannover, Esslingen, Heidelberg, Würzburg, Rothenburg, Nuremberg, Bamberg, Munich, Cologne, Aachen, Trier, Bremen
- **Austria (3)**: Vienna, Salzburg, Hallstatt
- **Czech Republic (2)**: Prague, Český Krumlov
- **Benelux (4)**: Amsterdam, Bruges, Brussels, Luxembourg
- **Denmark (1)**: Copenhagen

Each town page: hero with badges, Wikipedia hero image, quick facts grid, OpenStreetMap iframe, 5-7 must-see sights, half-day walking route, restaurants, photo spots, gallery (4-6 Wikipedia images), practical info, fun facts, useful links

### Sight pages (27 total)
1. Brandenburg Gate, Reichstag, Museum Island, East Side Gallery (Berlin)
2. Sanssouci (Potsdam)
3. Frauenkirche, Zwinger (Dresden)
4. Holstentor, Niederegger (Lübeck)
5. Speicherstadt, Miniatur Wunderland, Elbphilharmonie (Hamburg)
6. Schwerin Palace, Wernigerode Castle
7. Cologne Cathedral, Aachen Cathedral, Porta Nigra (Trier)
8. Heidelberg Castle, Würzburg Residence, Marienplatz (Munich)
9. Hohensalzburg (Salzburg), Schönbrunn (Vienna)
10. Prague Castle, Charles Bridge, Český Krumlov Castle
11. Nyhavn (Copenhagen), Grand-Place (Brussels)

Each sight page: hero with parent-town badge, Wikipedia hero image, overview, quick facts (location/hours/price/time), map, 5-6 things-to-see details, 3-4 image gallery, photo tips, practical info, link to parent town, fun facts, useful links

## ดีไซน์

**Palette (German autumn):**
- Wine red `#7d2828`, Autumn gold `#c9a227`, Forest green `#3d5a3c`, Cream `#faf6ee`

**Typography:** Sarabun (Thai) + Playfair Display (decorative)

**Image system:**
- All landmark photos fetched live from Wikipedia REST API at page load
- `assets/wiki-images.js` reads `data-wiki="Page Title"` attributes
- Sets `upload.wikimedia.org/...` URL as background-image
- Graceful fallback: cream-color tint if fetch fails

**Interactive:**
- Live countdown timer (home)
- Accordion days with expand/collapse all on itinerary pages
- Filterable card grids (towns by country/route, sights by country)
- Sticky responsive nav with hamburger menu
- Deep-linking via URL hash (e.g., `#day6`)

## File Structure

```
Mom Germany trip/
├── index.html              # Home
├── routes.html             # Route comparison hub
├── itinerary.html          # 10-day
├── itinerary-20day.html    # 20-day
├── itinerary-30day.html    # 30-day Grand Tour
├── towns.html              # Towns index (34)
├── sights.html             # Sights index (27)
├── hotels.html / transport.html / food.html / tips.html
├── styles.css              # Shared design system
├── assets/wiki-images.js   # Wikipedia image loader
├── towns/                  # 34 town pages
└── sights/                 # 27 sight pages
```

## Deployment

- Repo: https://github.com/RoodeeLMS/mom-germany-trip-2026
- Live: https://roodeelms.github.io/mom-germany-trip-2026/
- Static HTML — GitHub Pages auto-builds on push to `main`
- No backend, no JS framework, no build step

---

*Latest update: May 2026*
