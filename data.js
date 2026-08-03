'use strict';
// Murch dashboard data - update THIS file for daily changes
// CACHE BUSTER: Aug 3, 2026 (Mon) - SECOND LATE Aug 1 BLOCK FOLDED IN: Brumont 19 people, 1,000 modules Zone E. Aug 1 modules now 1,780 (Workforce 780 + Brumont 1,000), not 780. Modules 46,063 (26.9%). With the earlier ECCS block, Aug 1 stands at 40 tracker rows, 1,780 modules, 478 lf of FIRST DC cable, and still zero piles from any crew. Trackers 1,026 (41.3%), earned 44.1%. 132 people reported across five crews. TWO OF THE FOUR Aug 1 BLOCKS ARRIVED TWO DAYS LATE - the day was published twice on incomplete data. Weekly plan rewritten for Aug 3-8.
// Note: assetVersion, assetBase, asset(), and assetFallback() are defined in index.html's inline script
// Duplicate declarations have been removed to fix SyntaxError: Identifier 'assetVersion' has already been declared
window.MURCH_DATA = {
    control: {
      asOf: 'Aug 1, 2026',
      piles:    { installed: 28678, total: 31352, gate: '2026-07-28', gateLabel: 'Jul 28', required: 2674, capacity: null, name: 'Piles', unit: 'piles/day' },
      trackers: { installed: 1026, released: 296, releasedGS: 492, total: 2486, gate: '2026-08-30', gateLabel: 'Aug 30', required: 61, capacity: 48, name: 'Trackers incl. purlins', unit: 'rows/day', wipRows: 99, wipEquivalent: 70.6, earnedEquivalent: 1096.6, earnedPct: 44.1, earnedBasis: '5-step weighted ladder (adopted Jul 30, 2026)', releaseBasis: 'RELEASED = CLIENT-approved (Heelstone) per the Jul 30 QA sheet - NO new QA cut was filed on Jul 31, so the release figures are one day stale. Greensol-approved is carried separately as releasedGS.' },
      modules:  { installed: 46063, total: 171470, gate: '2026-09-06', gateLabel: 'Sep 6', required: 4180, capacity: null, name: 'Modules', unit: 'mod/day' },
      electrical: { installed: 478, total: 274720, gate: '2026-09-18', gateLabel: 'Sep 18', required: 6689, capacity: null, name: 'LV Electrical', unit: 'lf/day', earnedPct: 2.7, earnedBasis: 'weighted composite of the LV control line (cable 55%, boxes 10%, supports 10%, terminations 20%, testing 5%)' },
      mv:       { pct: 59.7, gate: '2026-09-14', gateLabel: 'Sep 14', name: 'MV Collection', unit: '%', earnedPct: 59.7, basis: 'weighted composite: plowing 45%, MV bores 25%, DC ducts 15%, MV terminations 15%' },
      set:      { pct: 24.7, gate: '2026-09-25', gateLabel: 'Sep 25', name: 'Substation (SET)', unit: '%', earnedPct: 24.7, planToDate: 45, basis: 'AB Powers tracker Jul 31: civil 76.8%, structural 10.8%, electrical 6.0%; piers 14 of 17 - last 3 drilled Monday, concrete Tuesday' },
      mc:       { target: 'Sep 25', forecast: 'Sep 20-25', name: 'Mechanical Completion' }
    },
    wipReportingRule: {
      adopted: 'Jul 30, 2026 (Jose Romero)',
      rule: 'A REPORTED COUNT OF UNFINISHED TRACKERS IS A SNAPSHOT, NEVER AN INCREMENT. When a subcontractor reports partial rows, that number is a photograph of the total partial rows standing in the project for that crew at that moment. It REPLACES the previous open-row figure for that crew; it is never added to the rows they reported open on earlier days.',
      why: 'Adding successive partial reports double-counts the same physical rows. United reported 82 open rows in Zone F on Jul 29 and 35 on Jul 30 - the correct open figure is 35, not 117 and not 82.',
      watch: 'A snapshot that falls without a matching completion report means rows left the register unaccounted for. United went 82 -> 35 with no rows reported complete: 47 rows are unexplained. Rows are NEVER credited as complete without an explicit completion report, so the gate figure does not move - but the drop must be queried, because it is either unreported completions or a change of counting basis.'
    },
    manpowerHistory: [
      { day: 'Jun 17', total: 136, src: 'field actual' },
      { day: 'Jun 25', total: 149, src: 'workbook' },
      { day: 'Jun 26', total: 134, src: 'workbook' },
      { day: 'Jun 29', total: 146, src: 'workbook' },
      { day: 'Jun 30', total: 148, src: 'official' },
      { day: 'Jul 7', total: 170, src: 'field report' },
      { day: 'Jul 9', total: 191, src: 'site board' },
      { day: 'Jul 13', total: 191, src: 'field snapshot' },
      { day: 'Jul 14', total: 202, src: 'site board' },
      { day: 'Jul 15', total: 209, src: 'site board' },
      { day: 'Jul 16', total: 198, src: 'site board' },
      { day: 'Jul 20', total: 192, src: 'site board' },
      { day: 'Jul 29', total: 248, src: 'site board' },
      { day: 'Jul 30', total: 253, src: 'site board' }
    ],
    manpowerMixToday: { day: 'Jul 30, 2026', total: 253, mix: [
      { trade: 'Trackers & Piling', people: 131, color: '#0c5f43' },
      { trade: 'Module Installation', people: 53, color: '#168a5b' },
      { trade: 'Electrical & SET', people: 42, color: '#2769a8' },
      { trade: 'Civil & Fencing', people: 7, color: '#b96f18' },
      { trade: 'GreenSol EPC', people: 20, color: '#66716d' }
    ] },
    manpowerNote: 'NO HEADCOUNT BOARD FOR Aug 1 - the mix below is the Jul 30 board carried forward. AUG 1 (Saturday) REPORTED HEADCOUNT, after two late blocks landed on Aug 3: ECCS trackers 53 + Workforce modules 29 + Brumont 19 + Workforce racking 19 + ECCS electrical 12 (3 admin, 3 electricians, 6 labour) = 132 PEOPLE ACROSS FIVE CREWS. Only United and Latnovva filed nothing; AB Power was confirmed ABSENT from the substation, which Luis Romero escalated directly - Saturdays are mandatory. The one crew that grew is Workforce racking, 14 to 19 people, and it opened a new front in Zone B.',
    contractorScore: [
      { date: 'Aug 1 Sat', contractor: 'ECCS (electrical)', trade: 'LV', output: 478, resource: '12 people (3 administrative, 3 electricians, 6 labour) - 478 lf of DC cable pulled in Area A1 on LBDs 1-4 of INV-1; 1,083 lf of messenger wire in Area A2 E-W; hangers set on the messenger wire in A1 and A3; 7 LBDs in E1 and E2', perUnit: 478, criterion: 6689, critLabel: 'THE FIRST MEASURED CABLE FOOTAGE ON THE PROJECT. LV has reported zero feet since the scope opened; 478 lf is 7% of the 6,689 lf/day now required for Sep 18, but it proves the front is live and the method works. LBDs to 110 of 419 (26.3%). Everything now depends on turning one crew of 6 labourers into a real cable-pull operation.' },
      { date: 'Aug 1 Sat', contractor: 'Workforce', trade: 'Modules', output: 780, resource: '29 people - zone E', perUnit: 780, criterion: 4214, critLabel: 'A FIFTH of Thursday output and 19% of the required rate. Brumont filed no report at all, so the second module crew is unaccounted for on a mandatory Saturday. One day after the front finally beat its rate, it gave the gain straight back.' },
      { date: 'Aug 1 Sat', contractor: 'Workforce (racking)', trade: 'Trackers', output: 0, resource: '19 people (up from 14) - NEW FRONT IN ZONE B: 11 rows at step 2 of 5 (torque tube installed and spliced), cumulative, confirmed by Manuel as level 2 of the step table = 4.95 row-equivalents. Zone EW rows are being torqued and presented to QA', perUnit: 0, criterion: 63, critLabel: 'NO ROW CLOSED, but two real things happened: the crew grew by 5 and opened Zone B, and the 20 Zone EW rows that had not moved since Jul 28 are now in torque and QA - step 4 complete. Manuel confirmed they CANNOT be counted finished yet. Those 20 rows are the nearest completions on the project.' },
      { date: 'Aug 1 Sat', contractor: 'ECCS', trade: 'Trackers', output: 40, resource: '53 people zone E - 40 rows closed at 100% (report filed late). No open-row snapshot given', perUnit: 40, criterion: 61, critLabel: 'FORTY ROWS FOR A SECOND DAY RUNNING - the only crew on the project closing anything, and it held its Friday rate through the Saturday. Zone E now 489 rows built and STILL ZERO client-released. ECCS owes an open-row count: the last snapshot of 10 is presumed inside these 40, so the WIP register for Zone E is set to zero rather than counted twice.' },
      { date: 'Aug 1 Sat', contractor: 'United', trade: 'Piles + Racking', output: 0, resource: 'NO REPORT FILED - neither the Zone G pile front nor the 68 open Zone F racking rows', perUnit: 0, criterion: 535, critLabel: 'FIFTH working day with no Zone F tracker completed, and now no pile figure either. 935 piles remain in Zone G against 535/day needed to hold ~Aug 7.' },
      { date: 'Aug 1 Sat', contractor: 'Latnovva', trade: 'Piles', output: 0, resource: 'NO REPORT FILED', perUnit: 0, criterion: 0, critLabel: 'Fourth consecutive day without a pile quantity. Zone B has been 36 piles from close since Jul 29 - under one shift - and the tracker crew has now started assembling in that same zone.' },
      { date: 'Aug 1 Sat', contractor: 'Brumont', trade: 'Modules', output: 1000, resource: '19 people - zone E (report filed late)', perUnit: 1000, criterion: 2000, critLabel: 'HALF THE TARGET and less than half its own Friday record of 2,100 with one fewer person - 52.6 modules each against 105 on Jul 31. Still the larger of the two module crews on the day: combined Aug 1 output was 1,780 against 4,103 required.' },
      { date: 'Aug 1 Sat', contractor: 'ITS', trade: 'MV / HDD', output: 0, resource: 'Continuing the MVHB-12 bore and fusing pipe in the substation areas', perUnit: 0, criterion: 1, critLabel: 'FIFTH straight day with no bore and no plow segment closed. MVHB-12 was committed to close Sunday - that commitment lands tomorrow. Plow holds 36/46 with the machine idle.' },
      { date: 'Aug 1 Sat', contractor: 'AB Power', trade: 'SET', output: 0, resource: 'NOBODY ON SITE - Luis Romero raised it directly at 08:49: no AB personnel at the substation on a Saturday', perUnit: 0, criterion: 0, critLabel: 'Piers hold at 14 of 17 with the last three due Monday and Tuesday. The substation is the worst variance on the project and its contractor did not work the mandatory Saturday.' },
      { date: 'Jul 31 Fri', contractor: 'Workforce', trade: 'Modules', output: 2036, resource: '29 people - zone E; the whole Workforce crew filed on modules and no racking crew was reported at all', perUnit: 2036, criterion: 2000, critLabel: 'ABOVE THE 2,000/day target for the first time - 2,036, the best Workforce module day of the project. Combined with Brumont this is the first day the module front has beaten its required rate.' },
      { date: 'Jul 31 Fri', contractor: 'Brumont', trade: 'Modules', output: 2100, resource: '20 people - zone E (re-manned from 14)', perUnit: 2100, criterion: 2000, critLabel: 'ABOVE TARGET - 2,100, the best Brumont day of the project and the first over 2,000. The re-man from 14 to 20 people converted directly into output.' },
      { date: 'Jul 31 Fri', contractor: 'ECCS', trade: 'Trackers', output: 40, resource: '53 people zone E - 40 rows closed at 100% plus 10 rows at step 3 of 5 (7.0 row-equivalents)', perUnit: 40, criterion: 59, critLabel: 'BEST ECCS DAY SINCE Jul 14 - 40 rows against 59 required, and the open-row snapshot fell from 28 to 10, which means the WIP converted into completions rather than vanishing. Zone E now 449 rows built and STILL ZERO client-released.' },
      { date: 'Jul 31 Fri', contractor: 'United', trade: 'Piles + Racking', output: 337, resource: '55 people - 337 piles Zone G plus 7 inverter piles in Zone D; racking: 68 cumulative Zone F rows standing at step 3 of 5 = 47.6 row-equivalents', perUnit: 337, criterion: 430, critLabel: 'BELOW RATE on piles - 337 against 430, down from 507, after three days of climbing. RACKING IS THE REAL PROBLEM: four working days on trackers and NOT ONE ROW CLOSED. Manuel confirmed the cumulative open figure is 68 rows at step 3 - on a four-day basis that is 17 rows/day of partial work against 60 completed rows/day required. Jose put the contract itself on the table over this.' },
      { date: 'Jul 31 Fri', contractor: 'Workforce (racking)', trade: 'Trackers', output: 0, resource: 'NO RACKING CREW REPORTED - all 29 Workforce people filed on modules; the 20 Zone EW rows at step 3 of 5 (14.0 row-equivalents) are carried unchanged', perUnit: 0, criterion: 59, critLabel: 'FOURTH CONSECUTIVE DAY WITH NO ROW CLOSED in Zone EW, and now no crew is even reported on it. These 20 rows have sat two steps from completion since Jul 28 and remain the cheapest movement available on the Aug 30 gate.' },
      { date: 'Jul 31 Fri', contractor: 'Latnovva', trade: 'Piles', output: 0, resource: '11 people, 1 ramming rig - reported as refusal work only, no pile count filed', perUnit: 0, criterion: 0, critLabel: 'A count was filed for the crew but not for the work. Refusal work is real production and must carry a number. Zone B has been 36 piles from close since Jul 29 - well under one shift.' },
      { date: 'Jul 31 Fri', contractor: 'ECCS (electrical)', trade: 'LV', output: 25, resource: '12 field + 3 administrative (Angel Urbina, filed 19:16) - 6 people on supports and messenger wire, 3 on LBDs; MW E-W Area A1 completed to 100%', perUnit: 25, criterion: 0, critLabel: 'BEST LBD DAY SO FAR - 25 installed, taking boxes to 103 of 419 (24.6%) from 78. AND THE LINE THAT MATTERS: the crew reports everything staged and READY TO PULL CABLE on Saturday Aug 1 if weather allows. Cable footage is still ZERO against 6,541 lf/day required for Sep 18, so the first measured foot is the single most important number on the electrical path.' },
      { date: 'Jul 31 Fri', contractor: 'ITS', trade: 'MV / HDD', output: 0, resource: '12 people (Angel Urbina) - pipe fusing and still drilling MVHB-12; the ITS control sheet records 0 ft bored and 0 ft plowed for the day and for the week', perUnit: 0, criterion: 1, critLabel: 'FOURTH straight day with no bore and no plow segment closed. MV bores hold 17/20, segments 36/46 (120,738 ft), DC ducts 3/14. MVHB-12 was estimated to close Sunday - hold ITS to that date.' },
      { date: 'Jul 31 Fri', contractor: 'AB Power / Dig It', trade: 'SET + Inverters', output: 5, resource: 'Substation piers 14 of 17 (+3); five more inverter stations unloaded and welded', perUnit: 5, criterion: 0, critLabel: 'BEST SET DAY IN WEEKS: inverter stations went 13 to 18 of 23 set and welded and the piers advanced to 14 of 17, with the last 3 drilled Monday and concrete Tuesday. Every one of the 18 stations is still ZERO TERMINATED, which is the gate measure.' },
    ],
    scope: [
      { title: 'EPC Management', metric: 'Turnkey', note: 'Management, safety, QC, owner reporting, trade coordination.' },
      { title: 'Civil', metric: 'Area G released', note: 'Cut/fill complete; roads 72%, basins 83%, fence 95%.' },
      { title: 'Mechanical BOS', metric: '31,352 piles \u00b7 2,486 trackers', note: 'Piles 91.5% \u00b7 trackers 41.3% \u00b7 modules 26.9%.' },
      { title: 'Electrical BOS', metric: 'MV 59.7% \u00b7 LV 0 lf', note: 'MV collection, LV/DC pull, 23 inverters, SET, SCADA.' },
      { title: 'Procurement', metric: 'Pile shortfall OPEN', note: 'Modules complete. Open: pile short shipment, 16 tubes, Chemik, SET steel.' },
      { title: 'Commissioning', metric: 'MC Sep 25 \u00b7 PIS Oct 16', note: 'Energization, start-up, PR test, punch, COD.' }
    ],
    photos: [
      { src: 'https://claped71.github.io/murch-dashboard/assets/recent/thumb-recent-45.jpg?v=20260729-inverterset', fallbackSrc: 'https://claped71.github.io/murch-dashboard/assets/recent/recent-45.jpg', date: 'July 29, 2026', title: 'Another inverter station craned onto its welded pile foundation', note: 'Jul 29, 13:25: a further prefabricated inverter/PCS station being lowered onto its welded steel pile foundation, with completed tracker rows and the delivery truck behind it. The protective shipping wrap stays on per the supplier marking until LV/MV termination. Confirmed since: the AB Powers matrix shows 18 of 23 stations set and welded as of Jul 31 (A 01/02/03, C 05/06, E 04/09/11/12/13/14/15, F 16/17/18/21/22/23) after five were unloaded on Jul 31, closing the whole of Zone F in a day. B 07/08 and G 19/20 are due Monday; station 10-D has nothing started. ZERO stations are terminated.' },
      { src: 'https://claped71.github.io/murch-dashboard/assets/recent/thumb-recent-44.jpg?v=20260729-pierF5', fallbackSrc: 'https://claped71.github.io/murch-dashboard/assets/recent/recent-44.jpg', date: 'July 29, 2026', title: 'Substation pier F5 — anchor-bolt template set and backfill under way', note: 'Geotagged Jul 29, 19:04 (N 42° 12\' 37", W 86° 0\' 57", Lawrence MI): pier F5 (4 of 4 in its group) with the anchor-bolt template bolted down and the excavator backfilling around the completed pier, work continuing into the evening. Dig It (AB Power sub) under Axel Cano holds the 3-4 piers/day plan; the pier front reached 14 of 17 on Jul 31, with the last 3 drilled Monday Aug 3 and poured Tuesday Aug 4. Note the yellow gas-line markers running the length of the trench.' },
      { src: 'https://claped71.github.io/murch-dashboard/assets/recent/thumb-recent-43.jpg?v=20260728-inverters', fallbackSrc: 'https://claped71.github.io/murch-dashboard/assets/recent/recent-43.jpg', date: 'July 28, 2026', title: 'Inverter stations SET — Zones A and C complete (now 18 of 23 project-wide)', note: 'Geotagged Jul 28, 10:06 (N 42° 12\' 27", W 86° 2\' 4", Lawrence MI): Inverter station 02 set on its pile foundation between completed module rows in Zone A. All Zone A stations were installed Tue morning (01, 02, 03 photographed 09:06-10:40) and Zone C closed the same day — Inverter 05 at 11:55 and Inverter 06 at 14:36 (crane still on the pad). Zones A and C inverter stations were the first complete; the project now stands at 18 of 23 set and welded — all pending LV and MV terminations; protective covers stay on per the supplier marking until termination work.' },
      { src: 'https://claped71.github.io/murch-dashboard/assets/recent/thumb-recent-41.jpg?v=20260725-transformer', fallbackSrc: 'https://claped71.github.io/murch-dashboard/assets/recent/recent-41.jpg', date: 'July 24, 2026', title: 'MILESTONE — MAIN POWER TRANSFORMER set on its foundation (Substation)', note: 'Geotagged Jul 24, 15:33 (N 42° 12\' 37", W 86° 0\' 58", Lawrence MI): the main power transformer (Pennsylvania Transformer Technology unit) craned onto its completed foundation inside the containment berm — the equipment the whole energization path was waiting on is ON SITE and SET. Foundation and berm were ready since Jul 12. Remaining controlling SET equipment: breakers and structural steel.' },
      { src: 'https://claped71.github.io/murch-dashboard/assets/recent/thumb-recent-42.jpg?v=20260725-pierAN01F5', fallbackSrc: 'https://claped71.github.io/murch-dashboard/assets/recent/recent-42.jpg', date: 'July 24, 2026', title: 'Substation pier AN01-F5 poured — 6 of 17 piers complete incl. concrete', note: 'Geotagged Jul 24, 18:15 (N 42° 12\' 37", W 86° 0\' 58", Lawrence MI): pier AN01-F5 with concrete poured and the anchor-bolt template set — the pier front that stood at 2 of 17 on Jul 22 reached 6 of 17 by Jul 24 (Dig It under Axel Cano, 3-4 piers/day pace holding). In the background, the main power transformer hangs from the crane during its foundation set — both SET milestones landed the same afternoon.' },
      { src: 'https://claped71.github.io/murch-dashboard/assets/recent/thumb-recent-39.jpg?v=20260721-trailers', fallbackSrc: 'https://claped71.github.io/murch-dashboard/assets/recent/recent-39.jpg', date: 'July 21, 2026', title: 'Office trailers relocated — Zone D released for slab demolition', note: 'Relocation confirmation, Jul 21: the office trailer compound has been moved off its Zone D position to the new laydown. The previously occupied area in Zone D is now RELEASED — demolition of the Zone D concrete slab can proceed, opening the path to the Zone D pile workfront (1,468 piles, 0 installed, material-hold pending).' },
      { src: 'https://claped71.github.io/murch-dashboard/assets/recent/thumb-recent-38.jpg?v=20260718-jb-chemik', fallbackSrc: 'https://claped71.github.io/murch-dashboard/assets/recent/recent-38.jpg', date: 'July 18, 2026', title: '72 LV junction boxes received — Chemik, Zone D', note: 'Saturday Jul 18, 09:54 (geotagged Lawrence, MI): first Chemik LV hardware on site — 72 DC junction/disconnect boxes (DB) received and staged in Zone D. Tracked as received material only; the 419-box mounting scope stays at 0 installed until the boxes are set. Leading edge of the material-gated LV pull that kicks off Jul 21.' },
      { src: 'https://claped71.github.io/murch-dashboard/assets/recent/thumb-recent-34.jpg?v=20260714-jul14-photos', fallbackSrc: 'https://claped71.github.io/murch-dashboard/assets/recent/recent-34.jpg', date: 'July 14, 2026', title: 'Module front vs. bare trackers — Zone A into Zone C', note: 'Jul 14 midday: installed module rows on the far block with erected trackers still bare in the foreground — the module crews are chasing the QA-released tracker workfront after Monday’s record 2,922 modules.' },
      { src: 'https://claped71.github.io/murch-dashboard/assets/recent/thumb-recent-35.jpg?v=20260714-jul14-photos', fallbackSrc: 'https://claped71.github.io/murch-dashboard/assets/recent/recent-35.jpg', date: 'July 14, 2026', title: 'Tracker crew on the row — Zone C', note: 'Crew working a tracker row in Zone C, the controlling front. 793 rows done of 2,486 at the time; ECCS restarted Monday with 29 rows and must at least double that rate.' },
      { src: 'https://claped71.github.io/murch-dashboard/assets/recent/thumb-recent-36.jpg?v=20260714-jul14-photos', fallbackSrc: 'https://claped71.github.io/murch-dashboard/assets/recent/recent-36.jpg', date: 'July 14, 2026', title: 'Inverter/PCS station set on foundation', note: 'Prefabricated station landed on its foundation inside the fenced yard, with formwork and rebar set for the adjacent pad — 190 of 230 inverter piles complete (82.6%) ahead of the end-July inverter arrivals.' },
      { src: 'https://claped71.github.io/murch-dashboard/assets/recent/thumb-recent-37.jpg?v=20260714-jul14-photos', fallbackSrc: 'https://claped71.github.io/murch-dashboard/assets/recent/recent-37.jpg', date: 'July 14, 2026', title: 'Underground electrical trench alongside erected trackers', note: 'Open trench with conduit installed beside the access road and erected tracker rows, feeding the LV/DC scope that kicked off Jul 14.' },
      { src: 'https://claped71.github.io/murch-dashboard/assets/recent/thumb-recent-33.jpg?v=20260712-berm', fallbackSrc: 'https://claped71.github.io/murch-dashboard/assets/recent/recent-33.jpg', date: 'July 12, 2026', title: 'Transformer-foundation containment berm complete — Substation', note: 'Geotagged Jul 12, 13:24 (Lawrence, MI): substation containment berm and main power transformer foundation complete — ready ahead of the transformer delivery (unit still in fabrication).' },
      { src: 'https://claped71.github.io/murch-dashboard/assets/recent/thumb-recent-30.jpg?v=20260710-jul9-photos', fallbackSrc: 'https://claped71.github.io/murch-dashboard/assets/recent/recent-30.jpg', date: 'July 9, 2026', title: 'Inverter pile ramming — Area E', note: 'Ramming rig driving inverter-station foundation piles in Area E; 12 of 23 stations now have piles complete.' },
      { src: 'https://claped71.github.io/murch-dashboard/assets/recent/thumb-recent-31.jpg?v=20260710-jul9-photos', fallbackSrc: 'https://claped71.github.io/murch-dashboard/assets/recent/recent-31.jpg', date: 'July 9, 2026', title: 'First modules installed — Area A', note: 'Installed module rows in Area A alongside bare trackers awaiting panels; module production hit a record 1,308 on July 9.' },
      { src: 'https://claped71.github.io/murch-dashboard/assets/recent/thumb-recent-32.jpg?v=20260710-jul9-photos', fallbackSrc: 'https://claped71.github.io/murch-dashboard/assets/recent/recent-32.jpg', date: 'July 9, 2026', title: 'Greensol self-perform rework — damper change, Area A', note: 'Greensol personnel replacing tracker dampers in Area A as part of the QA rework program ahead of module release.' },
      { src: 'https://claped71.github.io/murch-dashboard/assets/recent/thumb-recent-28.jpg?v=20260708-cb-install', fallbackSrc: 'https://claped71.github.io/murch-dashboard/assets/recent/recent-28.jpg', date: 'July 7, 2026', title: 'Control building set at substation', note: 'Axel Cano: substation control building delivered and installed on its foundation the night of July 7 — the July 10 required-on-site gate is met.' },
      { src: 'https://claped71.github.io/murch-dashboard/assets/recent/thumb-recent-21.jpg?v=20260708-cb-install', fallbackSrc: 'https://claped71.github.io/murch-dashboard/assets/recent/recent-21.jpg', date: 'June 25, 2026', title: 'Golden Row installation', note: 'Golden Row tracker/racking installation shared by Audelio Zuniga, documenting the first representative mechanical completion sequence ahead of module release.' },
      { src: 'https://claped71.github.io/murch-dashboard/assets/recent/thumb-recent-23.jpg?v=20260708-cb-install', fallbackSrc: 'https://claped71.github.io/murch-dashboard/assets/recent/recent-23.jpg', date: 'June 25, 2026', title: 'ITS MV plowing workfront', note: 'MV cable/plowing workfront activity, supporting the ITS production sequence by installed footage and completed segments.' },
      { src: 'https://claped71.github.io/murch-dashboard/assets/recent/thumb-recent-1.jpg?v=20260708-cb-install', fallbackSrc: 'https://claped71.github.io/murch-dashboard/assets/recent/recent-1.jpg', date: 'June 19, 2026', title: 'ITS plowing machine arrival', note: 'ITS plowing machine staged for the medium-voltage cable scope.' },
      { src: 'https://claped71.github.io/murch-dashboard/assets/recent/thumb-recent-15.jpg?v=20260708-cb-install', fallbackSrc: 'https://claped71.github.io/murch-dashboard/assets/recent/recent-15.jpg', date: 'June 19, 2026', title: 'ITS MV boring operation', note: 'Excavator and crew supporting the ITS medium-voltage boring scope at the wooded crossing workfront.' }
    ],
    weeklyPlan: [
      { area: '<u>Tracker closure</u><span style="background:#b53030;color:#fff;padding:1px 6px;border-radius:3px;font-size:10px;font-weight:700;margin-left:6px">CRITICAL</span>',
        target: '1,026 / 2,486 (41.3%). Close the 99 open rows — EW 20 first (in torque and QA), then F 68. Week ask >= 366.',
        minimum: '>= 61/day. ECCS is holding 40/day on its own.',
        gate: 'Closing rate: 88 of the 99 open rows sit with the two crews that closed nothing last week.',
        owners: 'ECCS \u00b7 United \u00b7 Workforce | Manuel Ramirez' },
      { area: '<u>Module rate</u><span style="background:#b53030;color:#fff;padding:1px 6px;border-radius:3px;font-size:10px;font-weight:700;margin-left:6px">CRITICAL</span>',
        target: '46,063 / 171,470 (26.9%). Week ask >= 25,100.',
        minimum: '>= 4,180/day. Aug 1 gave 1,780 with both crews on site — 37 modules/person against 84 on Jul 31.',
        gate: 'Saturday productivity, then released rows: Zone E carries none.',
        owners: 'Workforce \u00b7 Brumont | Audelio Zuniga' },
      { area: '<u>LV cable pull</u><span style="background:#b53030;color:#fff;padding:1px 6px;border-radius:3px;font-size:10px;font-weight:700;margin-left:6px">CRITICAL</span>',
        target: 'First 478 lf placed Aug 1. Week ask >= 40,000 lf. Boxes 110 / 419.',
        minimum: '>= 6,689 lf/day.',
        gate: 'Crew size — six labourers on the pull. GreenSol people onto cable this week.',
        owners: 'ECCS \u00b7 Self-perform | Luis Romero \u00b7 Clara Lopez' },
      { area: '<u>Pile close-out</u><span style="background:#b53030;color:#fff;padding:1px 6px;border-radius:3px;font-size:10px;font-weight:700;margin-left:6px">CRITICAL</span>',
        target: '28,678 / 31,352 (91.5%). Close B (36), F (11), E (224); G carries 935. Finish ~Aug 7.',
        minimum: '>= 535/day over 5 working days.',
        gate: 'Filing a number at all — neither pile crew reported on Aug 1.',
        owners: 'United \u00b7 Latnovva | Audelio Zuniga' },
      { area: '<u>Substation &amp; inverters</u><span style="background:#b53030;color:#fff;padding:1px 6px;border-radius:3px;font-size:10px;font-weight:700;margin-left:6px">CRITICAL</span>',
        target: 'Piers 14 / 17 — all 17 poured Tue Aug 4. Last 5 inverters set Monday to complete 23 / 23.',
        minimum: 'Start terminations: 0 of 23 stations terminated.',
        gate: 'Structural steel — the revised delivery programme is still owed. Escalate Aug 4, when every foundation is done.',
        owners: 'AB Power \u00b7 Michael Power | Axel Cano' },
      { area: '<u>MV plowing &amp; HDD</u>',
        target: 'Close MVHB-12 (committed Sunday), then >= 5 of the 10 open plow segments.',
        minimum: '>= 1 bore or 1 segment per day. Five days at zero.',
        gate: 'One crew on the bore — split it and restart the plough.',
        owners: 'ITS | Angel Urbina' },
      { area: '<u>GameChange &mdash; pile shortfall</u>',
        target: 'File the pile shortfall count and colour breakdown to GameChange. Outstanding since Jul 29.',
        minimum: 'Monday. Replacement posts run several weeks.',
        gate: 'Receiving records and the open POD backlog.',
        owners: 'Manuel Ramirez \u00b7 Karina Mucino' },
      { area: '<u>Civil &mdash; Area G &amp; roads</u>',
        target: 'Internal roads 72% — the target date has passed; close them. Basins 83%, then start Area G cut/fill.',
        minimum: 'Daily grading in Area G once the basins close.',
        gate: 'Basin completion. A Week 31 civil cut is owed.',
        owners: 'Topland \u00b7 Lounsbury | Rosario Ruiz' }
    ],
    civilKpis: [
      { title: 'Civil field progress', metric: 'Week 26', note: 'Rosario Ruiz Week 26 email dated July 3 and sent July 6 controls the latest civil workfront note.' },
      { title: 'Area G release', metric: 'Released', note: 'Rosario reports that once Area G basins are finished, cut/fill will start there; Area G is also released for pile driving and material distribution.' },
      { title: 'SET tracker', metric: '24.7% overall', note: 'Jul 31 AB Powers tracker: overall 24.7% (civil 76.8%, structural 10.8%, electrical 6.0%) — PIERS 14 OF 17 complete (+3 on Jul 31); the last 3 are drilled Monday with concrete Tuesday. Structural did not move again. Control building on site since Jul 7. Jul 12 (Sun): transformer-foundation containment berm complete at the substation. Jul 12: all 18 inverter stations available on site have their base plates welded.' }
    ],
    civilActivities: [
      { activity: 'Earthworks cut / fill', company: 'Lounsbury', done: 100, remaining: 0, status: 'Complete', note: 'Rosario Jul 23: Earthworks cut/fill 100% COMPLETE (Lounsbury; Apr 1 – Jul 17). Area G cut/fill starts after the Area G basins are finished.' },
      { activity: 'Perimeter fence', company: 'Hurricane', done: 95, remaining: 5, status: 'On Track', note: 'Rosario Jul 23: G-SET perimeter fence 95% (Hurricane; started Apr 2, end TBD) — Areas A–F 100% complete, only the Zone G remainder and gates left.' },
      { activity: 'Sediment basins / environmental controls', company: 'Lounsbury / ECS', done: 83, remaining: 17, status: 'On Track', note: 'Rosario Jul 23: Sediment basins 83% (Lounsbury; Mar 26 – target Jul 24) — up from 47%. Area G basins must finish before Area G cut/fill starts.' },
      { activity: 'Internal roads', company: 'Topland', done: 72, remaining: 28, status: 'Active', note: 'Rosario Jul 23: Internal roads 72% (Topland; May 26 – target Jul 31) — up from 65.9%. Continued recovery from the 35% Week 24 baseline; roads easing as the logistics constraint.' },
      { activity: 'PS foundations', company: 'United', done: 86, remaining: 14, status: 'Active', note: 'Rosario Jul 23: PS foundations 86% (United; Jun 8 – target Jul 24). Jul 22: 22 of 23 inverter foundations complete, 1 remaining (Jul 17 workbook had 190 of 230 inverter piles). WELDING PROCEDURE received Jul 21 (Daniel Morilla) — clears qualified welding to proceed.' },
      { activity: 'Foundation SET', company: 'AB Power', done: 24.7, remaining: 75.3, status: 'Active', note: 'Jul 31 AB Powers tracker: overall 24.7%; civil 76.8%, structural 10.8%, electrical 6.0%; PIERS 14 OF 17 — last 3 drilled Monday Aug 3, concrete Tuesday Aug 4. Containment berm and transformer foundation complete Jul 12. PIERS: 6 of 17 COMPLETE incl. concrete (Jul 24 — 3 added Jul 23, 1 more Jul 24), by Dig It (AB Power sub) under Axel Cano; plan holds 3-4/day. MILESTONE Jul 24: MAIN POWER TRANSFORMER set on its foundation. AB Power SET scope at risk — no work or delivery plan (Jul 17 review); partial scope moving to Michael Power.' }
    ],
    contractors: [
      { name: 'Latnovva — BACK ON SITE', scope: 14168, installed: 14132, remaining: 36, done: 99.7, zones: 'A, C, EW complete + Zone B closeout (+ B/E shares)', status: 'Active', note: 'REVERSAL: declared finished Jul 28, then reported again Jul 29 — 11 people and 2 rigs driving 178 piles in Zone B over Jul 28-29, plus 8 tension piles in Zone A. Cumulative 14,132. Zone B is 36 piles from complete; the Jul 28 closeout and the scope transfer to United both need re-confirming.' },
      { name: 'ECCS / Area E control', scope: 4554, installed: 4478, remaining: 76, done: 98.3, zones: 'Area E shared tracker workfront', status: 'On Track', note: "Area-based control allocation used only so dashboard totals reconcile with Audelio's July 6 official installed-production basis." },
      { name: 'United', scope: 12630, installed: 10068, remaining: 2562, done: 79.7, zones: 'Zones D + F + G + the non-ECCS Zone E remainder', status: 'Active', note: 'Jul 31: 55 people, 337 piles all Zone G -> 10,068, down from 507 and below the 430/day rate. Also 7 inverter piles in Zone D, which sit outside the 31,352 tracker-pile scope. Racking snapshot: 68 Zone F rows standing at step 3 of 5 (cumulative, confirmed by Manuel) and STILL NOT ONE ROW CLOSED after four working days. Carries 2,562 remaining piles: G 935, D 1,468, E 148 and the last 11 in F. Zone D opens ~Aug 5-7.' },
      { name: 'Project Total', scope: 31352, installed: 28678, remaining: 2674, done: 91.5, zones: "All zones | Construction Manager report", status: 'Critical', note: "Total executed: 28,678 (91.5%) — Jul 28 workbook roll-up 26,736 + 1,942 field-reported over Jul 28-31. AUG 1: NO PILE FIGURE FROM ANY CREW on a mandatory Saturday. Jul 31 = 337 (United, all Zone G). 2,674 remain; ~535/day over the 5 working days to Aug 7. STOCK POSITION NOW OPEN — GameChange is chasing a reported pile short shipment (Jul 29)." }
    ],
    zones: [
      { zone: 'Zone A', contractor: 'ECCS (assembly complete)', scope: 311, installed: 311, released: 296, releasedGS: 310, remaining: 0, done: 100.0, wipRows: 0, wipStep: null, wipEquiv: 0, earnedPct: 100.0, status: 'Complete', note: 'Assembly complete. Greensol has approved 310 of 311; the CLIENT has accepted 296 (95.5%). Zone A is the only zone carrying any client acceptance at all.' },
      { zone: 'Zone C', contractor: 'ECCS (assembly complete)', scope: 227, installed: 226, released: 0, releasedGS: 182, remaining: 1, done: 99.6, wipRows: 0, wipStep: null, wipEquiv: 0, earnedPct: 99.6, status: 'At Risk', note: 'RE-BASED Jul 30: the client column on the QA sheet reads ZERO for Zone C. Greensol has approved 182 of 227; Heelstone has accepted none. Zone C is fully moduled (14,950) - so all 227 rows carry modules with no client acceptance, and 45 of them have no Greensol release either. Damper change-out is the stated blocker.' },
      { zone: 'Zone E', contractor: 'ECCS', scope: 674, installed: 489, released: 0, releasedGS: 0, remaining: 185, done: 72.6, wipRows: 0, wipStep: null, wipEquiv: 0, earnedPct: 72.6, status: 'Critical', note: 'Aug 1: another 40 rows closed — two 40-row days running, the only crew on the project delivering completions. Zone E is now 72.6% built. NO OPEN-ROW SNAPSHOT was filed with the Aug 1 block, so the register is set to zero rather than carrying the 10 from Jul 31, which are presumed inside the 40 credited complete. RELEASE IS STILL ZERO in both columns against 489 built rows; roughly 156 rows in E carry modules with no release of any kind.' },
      { zone: 'Zone EW', contractor: 'Workforce (racking)', scope: 67, installed: 0, released: 0, releasedGS: 0, remaining: 67, done: 0, wipRows: 20, wipStep: 4, wipEquiv: 18.0, earnedPct: 26.9, status: 'Critical', note: 'THEY MOVED. After five days frozen at step 3, Manuel confirmed on Aug 1 that the 20 Zone EW rows are being TORQUED AND PRESENTED TO QA — step 4 (damper, actuator, drive line) is complete and they sit at 90% on the ladder. He was explicit that they CANNOT yet be counted finished. These are the nearest 20 completions on the project and the single cheapest movement available on the Aug 30 gate.' },
      { zone: 'Zone F', contractor: 'United (racking ramp)', scope: 595, installed: 0, released: 0, releasedGS: 0, remaining: 595, done: 0, wipRows: 68, wipStep: 3, wipEquiv: 47.6, earnedPct: 8.0, status: 'Critical', note: 'Jul 31 SNAPSHOT: 68 rows standing at step 3 of 5 — Manuel confirmed this is the CUMULATIVE open figure for United, not a daily increment (31 rows advanced to step 3 on the day). Purlins in, dampers, actuators and torque outstanding. FOUR WORKING DAYS AND NOT ONE ROW CLOSED: 68 partial rows over four days is about 17 rows/day of partial work against 60 completed rows/day required. Jose has put the subcontract itself on the table if the assembly procedure does not change on Monday.' },
      { zone: 'Zone B', contractor: 'Workforce (racking)', scope: 220, installed: 0, released: 0, remaining: 220, done: 0, wipRows: 11, wipStep: 2, wipEquiv: 4.95, earnedPct: 2.3, status: 'Active', note: 'NEW FRONT OPENED Aug 1. Workforce racking grew 14 to 19 people and moved into Zone B: 11 rows at step 2 of 5 on a cumulative basis, confirmed by Manuel as level 2 of the step table — torque tubes installed and spliced, purlins still to come. Zone B piles are 98.7% complete with 36 left, so the zone is effectively released for assembly.' },
      { zone: 'Zone G', contractor: 'United', scope: 256, installed: 0, released: 0, remaining: 256, done: 0, wipRows: 0, wipStep: null, wipEquiv: 0, earnedPct: 0, status: 'Pending', note: 'Piling front active (47.0%, hard ground) — tracker assembly follows pile completion by block.' },
      { zone: 'Zone D', contractor: 'United', scope: 136, installed: 0, released: 0, remaining: 136, done: 0, wipRows: 0, wipStep: null, wipEquiv: 0, earnedPct: 0, status: 'Pending', note: 'Piling opens ~Aug 5-7 (slab demolition finished); tracker assembly follows.' },
      { zone: 'TOTAL', contractor: 'All tracker crews', scope: 2486, installed: 1026, released: 296, releasedGS: 492, remaining: 1460, done: 41.3, wipRows: 99, wipStep: null, wipEquiv: 70.6, earnedPct: 44.1, status: 'Critical', note: '1,026 built (41.3%) — ECCS closed 40 on Aug 1, its second 40-row day running; United and Workforce closed nothing · RELEASE UNCHANGED at 296 accepted by Heelstone (11.5%) and 492 approved by Greensol, both stale since Jul 30; 730 built rows carry no client acceptance · 99 rows in progress worth 70.6 row-equivalents -> 1,096.6 earned (44.1%) · 61 completed rows/day required for Aug 30. OPEN ROWS: F 68 at step 3, EW 20 at step 4 (torque and QA), B 11 at step 2 — 88 of the 99 sit with the two crews that have closed nothing. Open rows are a SNAPSHOT per crew, never cumulative.' }
    ],

    pilesByZone: [
      { zone: 'Zone A', contractor: 'Latnovva', scope: 3834, installed: 3834, remaining: 0, done: 100.0, status: 'Complete', note: 'Zone complete. Jul 29: 8 tension piles driven here — tension piles sit outside the 31,352 tracker-pile scope.' },
      { zone: 'Zone C', contractor: 'Latnovva', scope: 2946, installed: 2946, remaining: 0, done: 100.0, status: 'Complete', note: 'Zone complete.' },
      { zone: 'Zone EW', contractor: 'Latnovva', scope: 846, installed: 846, remaining: 0, done: 100.0, status: 'Complete', note: 'Zone complete.' },
      { zone: 'Zone F', contractor: 'United', scope: 7658, installed: 7647, remaining: 11, done: 99.9, status: 'Active', note: 'Only 11 piles from zone close (Jul 28 workbook reconciliation).' },
      { zone: 'Zone E', contractor: 'ECCS / United', scope: 8456, installed: 8232, remaining: 224, done: 97.4, status: 'Active', note: 'Jul 31: no piles — the full 53-person ECCS crew was on tracker assembly. 224 to close.' },
      { zone: 'Zone B', contractor: 'Latnovva', scope: 2788, installed: 2752, remaining: 36, done: 98.7, status: 'Active', note: 'NO PILE COUNT FILED for a third consecutive day. Latnovva reported 11 people and 1 rig on refusal work on Jul 31 with no quantity. Zone B has been 36 piles from close since Jul 29 — well under one shift.' },
      { zone: 'Zone G', contractor: 'United', scope: 3356, installed: 2421, remaining: 935, done: 72.1, status: 'Active', note: 'Jul 31: +337 (55 people) — below the 430/day rate after the 507 of Jul 30, but the zone has still gone 47.0% to 72.1% in three days. 935 piles left; at the Jul 29-31 average of 402/day Zone G closes in the first week of August. Signed ChO still owed for full release.' },
      { zone: 'Zone D', contractor: 'United', scope: 1468, installed: 0, remaining: 1468, done: 0, status: 'Ready', note: 'Slab demolition FINISHED (Jul 28) — piling opens ~Aug 5-7.' },
      { zone: 'TOTAL', contractor: 'All pile crews', scope: 31352, installed: 28678, remaining: 2674, done: 91.5, status: 'Critical', note: '28,678 executed (91.5%) — AUG 1: NO PILE REPORT FROM ANY CREW. Neither United nor Latnovva filed on a mandatory Saturday, so the front shows zero for the day. 2,674 remain; 535/day over the 5 working days to Aug 7, up from 446 because a working day was consumed with nothing recorded. MATERIAL POSITION NOW OPEN: GameChange is chasing the exact quantity and colour breakdown of piles the site team reported SHORT SHIPPED (Jul 29), with a replacement lead time of several weeks. Until that count is filed, the pile-delivery-complete position cannot be relied on.' }
    ],
    modulesByZone: [
      { zone: 'Zone A', contractor: 'Workforce', scope: 22360, installed: 19860, remaining: 2500, done: 88.8, status: 'Active', note: 'Workbook-mapped 19,860 — closing behind the released tracker rows.' },
      { zone: 'Zone C', contractor: 'Workforce / Brumont', scope: 14950, installed: 14950, remaining: 0, done: 100.0, status: 'Complete', note: 'Field-logged modules reached the workbook zone scope on Jul 29 — C treated as closed. The C/E split of the Jul 29 output (WF 1,709 zone C + Brumont 1,400 zones C and E) is an ESTIMATE: 930 booked to C to close it, 2,179 to E. Confirm with the next workbook cut.' },
      { zone: 'Zone E', contractor: 'Workforce + Brumont', scope: 52234, installed: 11253, remaining: 40981, done: 21.5, status: 'Critical', note: 'Aug 1: +1,780 (Workforce 780 with 29 people, Brumont 1,000 with 19) — both blocks filed late. ZERO tracker rows in Zone E are released by Greensol or by the client, so all ~171 rows now carrying modules here are unreleased, against 489 built.' },
      { zone: 'Zone F', contractor: 'Follows released rows', scope: 44642, installed: 0, remaining: 44642, done: 0, status: 'Pending', note: 'Opens behind the United racking ramp.' },
      { zone: 'Zone D', contractor: 'Sequenced', scope: 14898, installed: 0, remaining: 14898, done: 0, status: 'Pending', note: 'Follows Zone D piling (~Aug 5-7) and tracker assembly.' },
      { zone: 'Zone G', contractor: 'Sequenced', scope: 14924, installed: 0, remaining: 14924, done: 0, status: 'Pending', note: 'Follows the Zone G pile (47.0%) and tracker fronts.' },
      { zone: 'Zone B', contractor: 'Sequenced', scope: 7436, installed: 0, remaining: 7436, done: 0, status: 'Pending', note: 'Follows Zone B tracker assembly.' },
      { zone: 'Zone EW', contractor: 'Sequenced', scope: 26, installed: 0, remaining: 26, done: 0, status: 'Pending', note: 'Workbook carries EW module scope within Zone E; 26-module residual vs the 171,470 project total.' },
      { zone: 'TOTAL', contractor: 'All module crews', scope: 171470, installed: 46063, remaining: 125407, done: 26.9, status: 'Critical', note: '46,063 executed (26.9%) — 4,180/day over the 30 working days to Sep 6. Aug 1 delivered 1,780 (Workforce 780 + Brumont 1,000), 43% of the required rate: 48 installers at 37 modules each against 84 on Jul 31. Saturday productivity, not absence, is the story — both crews were on site.' }
    ],
    mvProgress: {
      asOf: 'Jul 31, 2026',
      basis: 'Weighted composite of the MV collection scope by labour content',
      compositePct: 59.7,
      gateLabel: 'Sep 14 — pre-commissioning start',
      components: [
        { component: 'MV cable plowing', scope: '46 segments', done: 36, pct: 78.3, weight: 45, contribution: 35.22, note: '120,738 ft installed. FOURTH straight day with no segment closed — the ITS control sheet records 0 ft plowed for the day AND for the week. 10 segments pending; crews are all on MVHB-12.' },
        { component: 'MV HDD bores', scope: '20 bores', done: 17, pct: 85.0, weight: 25, contribution: 21.25, note: '5,462 ft. MVHB-12 still in progress on Jul 31 with 0 ft recorded for the day — ITS have deliberately slowed it to avoid a frack-out, which is correct practice on a wetland crossing, and they committed to closing it Sunday. Hold them to that date. 2 pending after it. EGLE ruled the last bores stay bores.' },
        { component: 'DC duct bores', scope: '14 locations', done: 3, pct: 21.4, weight: 15, contribution: 3.21, note: '647 lf — unchanged on Jul 31. 11 pending (4 of the original 14 cancelled). Second drill assigned here since Jul 24.' },
        { component: 'MV terminations', scope: '138 connections', done: 0, pct: 0, weight: 15, contribution: 0, note: 'Follows inverter and substation readiness. MV couplings carry a ~40-week lead — emergency plan still owed.' }
      ],
      note: 'MV was previously invisible in the project roll-up: the gate strip carried piles, trackers, modules and LV only, so 36 plowed segments and 17 completed bores earned nothing at project level. At 59.7% MV is the most advanced electrical front by some distance. The exposure is the 138 terminations at zero and the coupling lead time.'
    },
    setProgress: {
      asOf: 'Jul 31, 2026 (AB Powers tracker)',
      compositePct: 24.7,
      planToDatePct: 45,
      gateLabel: 'Sep 25 — Mechanical Completion',
      components: [
        { component: 'Civil', pct: 76.8, note: 'Up another 3.7 points on Jul 31. Transformer foundation and containment berm complete Jul 12; PIERS 14 OF 17 — the last 3 are drilled Monday Aug 3 with concrete Tuesday Aug 4.' },
        { component: 'Structural', pct: 10.8, note: 'Structural steel still in fabrication — now a controlling item.' },
        { component: 'Electrical', pct: 6.0, note: 'Breakers awaited; several committed dates fall after the gate.' }
      ],
      milestones: 'Control building set Jul 7 · containment berm Jul 12 · MAIN POWER TRANSFORMER set Jul 24 · PIERS 14 OF 17 (82.4%) as of Jul 31, last 3 drilled Mon Aug 3 and poured Tue Aug 4.',
      note: 'Still the single worst variance on the project: 24.7% executed against roughly 45% plan-to-date on the linear baseline to Sep 25. Civil has now moved 65.6 to 73.1 to 76.8 in two days on the pier run while STRUCTURAL HAS NOT MOVED ONCE - that is the whole substation story. Piers stand at 14 of 17 and close Tuesday Aug 4; on that day every substation foundation is finished and the ONLY outstanding item is the steel, whose delivery programme Greensol formally rejected on Jul 30 as incompatible with an operational substation in the third week of September. Time the escalation to land Aug 4, when the answer to any AB Power counter-argument is that Greensol has removed every civil excuse.'
    },
    electricalTotal: {
      asOf: 'Aug 1, 2026',
      basis: 'Weighted composite of the four electrical fronts by labour content',
      gatePct: 16.9,
      earnedPct: 25.4,
      components: [
        { name: 'LV / DC installation', weight: 45, gate: 0.2, earned: 2.7, note: '274,720 lf of cable, 419 boxes. 478 lf PULLED on Aug 1 in Area A1 — the first measured footage on the project — and 110 boxes mounted (+7).' },
        { name: 'MV collection', weight: 22, gate: 59.7, earned: 59.7, note: 'Plowing 36/46, MV bores 17/20, DC ducts 3/14, terminations 0/138 — unchanged for a fourth day.' },
        { name: 'Inverter stations', weight: 18, gate: 0.0, earned: 40.9, note: '18 of 23 set and welded per the AB Powers matrix (+5 on Jul 31); ZERO terminated, which is the gate measure. Last 5 due Monday.' },
        { name: 'Substation (SET)', weight: 15, gate: 24.7, earned: 24.7, note: 'Civil 76.8%, structural 10.8%, electrical 6.0%; piers 14 of 17.' }
      ],
      note: 'One electrical total across all four fronts: 16.9% on completed units, 25.4% including verified work in progress. The number barely moved on Aug 1, but the composition changed: the LV gate came off ZERO for the first time with 478 lf pulled. MV, inverters and the substation all stood still — ITS a fifth day at zero, and AB Power absent from the substation entirely. MV carries almost the whole figure — strip it out and the other three fronts together stand at about 3 points of the 100. This is the number to watch against the Oct 16 interconnection date.'
    },
    projectTotal: {
      asOf: 'Aug 1, 2026',
      gatePct: 52.8,
      earnedPct: 54.6,
      weights: { piles: 28, trackers: 22, modules: 26, electrical: 14, civil: 10 },
      components: [
        { name: 'Piles', weight: 28, gate: 91.5, earned: 91.5 },
        { name: 'Trackers', weight: 22, gate: 41.3, earned: 44.1 },
        { name: 'Modules', weight: 26, gate: 26.9, earned: 26.9 },
        { name: 'Electrical (LV + MV + inverters + SET)', weight: 14, gate: 16.9, earned: 25.4 },
        { name: 'Civil (excl. substation)', weight: 10, gate: 87.2, earned: 87.2 }
      ],
      note: 'Weighted physical completion, same weighting as the client report so the two documents always agree. RE-BASED Jul 30: the electrical component now covers all four electrical fronts (LV/DC, MV collection, inverter stations, substation) instead of LV cable alone, and civil excludes the substation to avoid double counting it — civil is now the mean of the five remaining civil activities (87.2%). The total moved from 46.1% to 49.4% on Jul 30 because MV collection was not counted anywhere in the previous roll-up. Jul 31 added 1.3 points of gate progress, the largest single day of the project. Aug 1 added 0.7 once both late blocks landed — 40 tracker rows and 1,780 modules: 52.8% gate, 54.6% earned. Seven weeks remain to Mechanical Completion.'
    },
    earnedMethod: {
      adopted: 'Jul 30, 2026',
      title: 'How progress is assigned to multi-step scopes',
      rule: 'THREE INSTRUMENTS, chosen by the shape of the scope — not one method forced onto everything. (1) ATOMIC UNITS — piles and modules. A pile is driven or it is not; a module is placed or it is not. Count units. NO ladder: adding one would only create room for optimism on work that has no intermediate state worth crediting. (2) MULTI-STEP SINGLE DELIVERABLES — tracker rows and inverter stations. One unit passes through several verifiable physical states before it is usable, and the intermediate states carry real installed material and labour. Use a FIXED WEIGHTED STEP LADDER and report the step reached, never an estimated percentage. (3) SCOPES ALREADY BROKEN INTO COMPONENT LINES — LV/DC. The take-off already measures cable, box mounting, supports, terminations and testing separately in their own units, so a ladder would double count. Instead WEIGHT THE COMPONENT LINES by labour content into one composite percentage. In every case the completion gate keeps counting finished units only; the earned measure sits beside it and never moves a date.',
      scopes: [
        { scope: 'Piles', instrument: 'Atomic unit count', gate: '28,678 / 31,352 = 91.5%', earned: 'n/a — no intermediate state', note: 'Driven or not driven. Pull tests and inspection are QA gates, not construction steps.' },
        { scope: 'Modules', instrument: 'Atomic unit count', gate: '46,063 / 171,470 = 26.9%', earned: 'n/a — no intermediate state', note: 'Placed and torqued or not placed.' },
        { scope: 'Tracker rows', instrument: '5-step weighted ladder', gate: '1,026 / 2,486 = 41.3%', earned: '1,096.6 equivalents = 44.1%', note: 'See trackerWip. 99 rows open across three zones at three different steps.' },
        { scope: 'Inverter stations', instrument: '5-step weighted ladder', gate: '0 of 23 terminated = 0.0%', earned: '9.40 equivalents = 40.9% (18 of 23 set and welded)', note: 'See inverterProgress. Delivery and setting carry real value ahead of terminations.' },
        { scope: 'LV / DC', instrument: 'Weighted component composite', gate: '478 / 274,720 lf = 0.2%', earned: '2.7% (up to 5.2% once supports are quantified)', note: 'See lvComposite. Cable-only denomination hides the box and support work — but the composite confirms LV has barely started.' }
      ]
    },
    inverterProgress: {
      asOf: 'Jul 31, 2026',
      basis: 'AB Powers inverter matrix (authoritative) mapped onto the 5-step weighted ladder',
      totalStations: 23,
      stationsSet: 18,
      gatePct: 0.0,
      equivalents: 9.40,
      earnedPct: 40.9,
      matrixPct: 67.9,
      steps: [
        { step: 1, name: 'Foundation ready \u2014 station piles driven and base plates welded', weight: 10, cumulative: 10 },
        { step: 2, name: 'Station delivered and staged on site', weight: 15, cumulative: 25 },
        { step: 3, name: 'Station set and anchored on its foundation', weight: 25, cumulative: 50 },
        { step: 4, name: 'LV / DC terminations complete', weight: 25, cumulative: 75 },
        { step: 5, name: 'MV terminations, grounding and megger checks complete', weight: 25, cumulative: 100 }
      ],
      standing: [
        { step: 3, label: 'Set and anchored, inverter welded', stations: 18, detail: 'A 01/02/03 \u00b7 C 05/06 \u00b7 E 04/09/11/12/13/14/15 \u00b7 F 16/17/18/21/22/23 \u2014 serials logged on the AB Powers matrix; ALL of Zone F closed on Jul 31', pct: 50, equiv: 9.00 },
        { step: 1, label: 'Piling and welding plate done, inverter not unloaded', stations: 2, detail: 'B 07/08 \u2014 matrix shows these at 50% of its own four-step scale', pct: 10, equiv: 0.20 },
        { step: 1, label: 'Piling done, welding plate pending', stations: 2, detail: 'G 19/20 \u2014 matrix 25%', pct: 10, equiv: 0.20 },
        { step: 0, label: 'Nothing started', stations: 1, detail: 'Station 10-D \u2014 Area D has not opened for piling', pct: 0, equiv: 0 }
      ],
      note: 'THE AB POWERS MATRIX IS NOW THE SOURCE for this scope and it reconciles exactly to the field count of 18 of 23 stations set. Read its 67.9% carefully: the matrix runs piling / welding plate / inverter unloading / inverter welding at 25 points each, so its 100% means MECHANICALLY SET AND WELDED, which is only step 3 of the five that make a station usable plant. Mapped onto the full ladder the same evidence gives 9.40 station-equivalents, 40.9%. THE GATE MEASURE IS STATIONS FULLY TERMINATED AND THAT NUMBER IS STILL ZERO of 23, with Mechanical Completion on Sep 25. Movement is real and fast \u2014 5 set on Jul 29, 13 on Jul 30, 18 on Jul 31, with the last 5 due Monday and the whole of Zone F closed in one day \u2014 but not one termination has started, and terminations are gated by the LV/DC pull that has produced zero measured footage.',
      dataToConfirm: 'DISCREPANCY TO CLOSE: All State reported 17 inverters installed and welded by AB Power on Jul 31, while the AB Powers matrix and Axel Cano both carry 18. One station is either welded-but-unlogged or logged-but-unwelded; the matrix is held as the source pending Axel confirming. The matrix does not report a staged/delivered state, so the 5 stations short of set are credited at foundation-only. Confirm with Axel Cano how many of them are physically on site: each one that is staged rather than merely founded adds 5 points of a station-equivalent. The Jul 12 count of 18 staged is stale and must not be reused.'
    },
    lvComposite: {
      asOf: 'Aug 1, 2026 (Angel Urbina)',
      basis: 'Weighted composite of the LV control line by labour content (adopted Jul 30, 2026)',
      gateUnit: 'lf of cable',
      gateInstalled: 478,
      gateTotal: 274720,
      gatePct: 0.2,
      earnedPctFirm: 2.7,
      earnedPctWithSupports: 5.2,
      components: [
        { component: 'Homerun cable (inverter feeders)', scope: '229,435 lf', weight: 46, executedPct: 0.2, contribution: 0.10, note: 'THE PULL HAS STARTED. 478 lf placed in Area A1 on LBDs 1-4 of INV-1 on Aug 1 — the first measured cable footage recorded on this project. It is 0.2% of the homerun scope and 7% of one day at the required rate, but the method is now proven in the field.' },
        { component: 'Chemik trunk cable', scope: '40,313 lf', weight: 8, executedPct: 0, contribution: 0, note: 'Material-gated on the air shipments; Chemik still owes arrival dates.' },
        { component: 'Harness (3/2/1-string)', scope: '4,972 lf', weight: 1, executedPct: 0, contribution: 0, note: 'Only 18% of the 3-string harness has shipped.' },
        { component: 'LBD / box mounting', scope: '419 boxes', weight: 10, executedPct: 26.3, contribution: 2.63, note: '110 boxes mounted — +7 on Aug 1 in Areas E1 and E2, after +25 on Jul 31 and +22 on Jul 30. Area A complete at 50/50. The crew split its day between boxes, messenger wire and the first cable pull, which is why the box rate fell.' },
        { component: 'Aerial supports and messenger wire', scope: 'QUANTITY NOT YET IN THE TAKE-OFF', weight: 10, executedPct: null, contribution: null, note: 'Aug 1: 1,083 lf of messenger wire installed in Area A2 E-W, and hangers set on the messenger wire in Areas A1 and A3 — all of it still earning NOTHING because the take-off carries no quantity for this component. Angel is now reporting messenger wire in linear feet, so the quantity exists in the field and only the take-off denominator is missing. Jul 31: MW E-W Area A1 completed to 100%. Jul 30: N-S supports 100% in A1/A3/A5, E-W supports 100% in A6/A7, messenger wire A3 100%, MW N-S 100%, MW E-W Area A5 at 50%. ALL OF IT EARNS NOTHING because the take-off carries no unit quantity for this component. Owed by Luis Romero / Clara Lopez, and now the cheapest available correction on the whole electrical total. NOTE the sub-area labels are not stable between daily reports (A2/A4 on Jul 29, A6/A7 on Jul 30) — a fixed area list with a denominator is needed before any support percentage is published.' },
        { component: 'Box connections / terminations', scope: '1,676 connections', weight: 12, executedPct: 0, contribution: 0, note: 'Follows the pull.' },
        { component: 'Inverter connections', scope: '838 connections', weight: 8, executedPct: 0, contribution: 0, note: 'Follows station setting and the pull.' },
        { component: 'Megger LV and MV connections', scope: '1,676 + 138', weight: 5, executedPct: 0, contribution: 0, note: 'Test and terminate before energization.' }
      ],
      note: 'The LV gate is denominated purely in linear feet of cable, so every box mounted, every support set and every foot of messenger wire installed to date reports as ZERO progress. That is wrong as a measure of work done, and the composite fixes it by weighting the control-line components by labour content. The gate is no longer zero: 478 lf were placed on Aug 1, the first measured footage on the project. The composite now reads 2.7% — or about 5.2% once the support work is quantified. Giving this scope an equivalent progress does not improve the picture, it confirms it. With 6,689 lf/day required from Aug 2 to hold Sep 18 and 478 lf placed so far, LV/DC is the largest single exposure on the energization path, ahead of trackers and modules.',
      weightNote: 'Weights sum to 100 and are apportioned by labour content, not by quantity — 274,720 lf of cable pull carries far more man-hours than 419 box mountings. They need Jose sign-off before the composite goes into any certification, and should be frozen for the project once agreed.'
    },
    trackerWip: {
      asOf: 'Aug 1, 2026',
      basis: 'STEP LADDER (adopted Jul 30, 2026 by Jose Romero)',
      completedRows: 1026,
      openRows: 99,
      equivalents: 70.6,
      equivalentsAsReported: 75.6,
      earnedPct: 44.1,
      gatePct: 41.3,
      items: [
        { zone: 'Zone B', contractor: 'Workforce (racking)', rows: 11, stepReached: 2, stepName: 'Torque tube installed and spliced', pctStep: 45, equiv: 4.95, pctReported: 45, note: 'NEW FRONT Aug 1. Workforce racking grew 14 to 19 people and opened Zone B: 11 rows with torque tubes installed and spliced, reported cumulatively and confirmed by Manuel as level 2 of the step table. Purlins, dampers and torque all still to come, so these are the furthest from completion of any open rows — but the front is open and Zone B piles are 98.7% done.' },
        { zone: 'Zone EW', contractor: 'Workforce (racking)', rows: 20, stepReached: 4, stepName: 'Damper, actuator and drive line', pctStep: 90, equiv: 18.0, pctReported: 90, note: 'ADVANCED Aug 1 after five days frozen. Manuel confirmed the rows are being TORQUED AND PRESENTED TO QA, which places step 4 complete and step 5 in progress — 90% on the ladder. He was explicit that they cannot be counted finished. These are the nearest 20 completions on the project.' },
        { zone: 'Zone F', contractor: 'United (racking)', rows: 68, stepReached: 3, stepName: 'Purlins (both types) installed', pctStep: 70, equiv: 47.6, pctReported: 75, note: 'CARRIED UNCHANGED — United filed no report on Aug 1, and a missing report is not evidence of movement. Jul 31 SNAPSHOT: 68 rows at step 3 of 5, confirmed by Manuel as the CUMULATIVE open figure for United, of which 31 advanced to step 3 that day — so the snapshot rule is being applied correctly and the number is auditable. Four working days on trackers and NOT ONE ROW CLOSED. The whole 68 sits two steps from completion: dampers, actuators, torque and punch. This is the single largest block of nearly-finished rows on the project.' }
      ],
      steps: [
        { step: 1, name: 'Bearings / saddles set on piles', weight: 15, cumulative: 15 },
        { step: 2, name: 'Torque tube installed and spliced', weight: 30, cumulative: 45 },
        { step: 3, name: 'Purlins (both types) installed', weight: 25, cumulative: 70 },
        { step: 4, name: 'Damper, actuator and drive line', weight: 20, cumulative: 90 },
        { step: 5, name: 'Torque, alignment and punch closed', weight: 10, cumulative: 100 }
      ],
      rule: 'TWO MEASURES, NEVER MIXED. (1) GATE / CONTRACT MEASURE — a tracker row counts at 100% only, purlins included: 1,026 of 2,486 (41.3%). This is the only figure that drives the Aug 30 gate, the S-curves, the module release and any client or Heelstone submission. Partial rows earn NOTHING here. (2) PRODUCTIVITY MEASURE — row-equivalents earned per subcontractor per day, so a day of genuine work never scores as zero: 99 rows are open across three zones, worth 70.6 row-equivalents on the step ladder, putting earned progress at 44.1% against the 41.3% gate figure. They sit at THREE DIFFERENT STEPS — EW at 4, F at 3, B at 2 — purlins in, dampers and actuators outstanding. OPEN-ROW COUNTS ARE SNAPSHOTS PER CREW, never cumulative across days. Report both, labelled, side by side.',
      reportingRule: 'ADOPTED Jul 30, 2026 (Jose): partial tracker rows are reported by STEP REACHED, not by a percentage. Each daily block gives, per zone, the number of rows sitting at each step of the 5-step ladder; the equivalents are derived from the fixed weights above. Every step is a physically verifiable state a superintendent can confirm in one pass, so the figure is auditable and cannot drift backwards. A row leaves this register the moment it is credited complete — no double counting. AND (Jose, Jul 30) A REPORTED COUNT OF UNFINISHED ROWS IS A SNAPSHOT OF THE TOTAL PARTIAL ROWS STANDING FOR THAT CREW, NOT AN INCREMENT: it replaces the previous open figure and is never added to earlier days. QA release is NOT a step: release is a separate gate applied only to finished rows. On the ladder the current 99 open rows are worth 70.6 equivalents against 75.6 under the old free-text percentages — that 12% gap is the optimism the previous method carried.'
    },
    production: [
      { name: 'Project pile installation', remaining: '2,674 piles', target: 'Floor 535/day holds ~Aug 7 (2,674 remain, 5 working days)', latest: 'Aug 1: NO REPORT from any pile crew. Jul 31: 337', cumulative: '28,678 / 31,352 executed (91.5%) — workbook roll-up 26,736 + 1,942 field (Jul 28-31)', status: 'Critical', note: 'NOTHING FILED ON A MANDATORY SATURDAY. Neither United nor Latnovva reported a pile figure on Aug 1, so a working day was consumed with no record and the required rate jumped from 446 to 535/day over the 5 working days left to Aug 7. Zone G carries 935 and Zone B has been 36 from close since Jul 29 — under one shift. MATERIAL IS ALSO A QUESTION, NOT A CERTAINTY: GameChange wrote on Jul 29 asking for the exact quantity and colour breakdown of piles the site team reported SHORT SHIPPED, warning that replacement posts take several weeks to produce. File that count Monday.' },
      { name: 'Pile delivery', remaining: 'SHORTFALL QUANTITY NOT YET FILED', target: 'Count and colour breakdown owed to GameChange — same-day request, Jul 29', latest: 'Jul 29: GameChange (Shreeya Devkota) chasing the pile short shipment the site team reported', cumulative: '31,352 delivered per the Jul 24 BOM closeout — now subject to a short-shipment claim', status: 'At Risk', note: 'RE-OPENED. The BOM closeout confirmed Jul 24 recorded the full 31,352-pile quantity as delivered, and that is still the working basis for the 2,674 piles left to drive. But on Jul 29 GameChange asked urgently for the exact shortfall quantity and colour breakdown of piles the SITE TEAM reported as short shipped, in order to determine whether it is a POD discrepancy or a real shipment shortfall — and warned that replacement posts carry a production lead time of SEVERAL WEEKS. Nothing has been filed back. Until the count exists, the pile front cannot be described as material-secure. ACTION: Manuel/Karina to produce the count and colour breakdown Monday. The 16 outstanding purple torque tubes are a separate tracker item.' },
      { name: 'Drill and backfill', remaining: '0 pre-drills', target: 'Scope closed — no gate to piling', latest: 'All units closed in the official workbook', cumulative: '7,694 / 7,694 complete (100.0%)', status: 'Complete', note: 'July 6 Construction Management progress source shows drill-and-backfill complete.' },
      { name: 'Civil grading / cut-fill', remaining: 'Complete', target: '— No approved daily target in source', latest: 'Rosario Jul 23: cut/fill 100% complete (finished Jul 17)', cumulative: '100% complete — Rosario Jul 23 (Lounsbury)', status: 'Complete', note: 'Complete Jul 17 (Lounsbury). Area G cut/fill starts after G basins.' },
      { name: 'Internal roads', remaining: '28% of scope', target: '— No approved daily target in source', latest: 'Rosario Jul 23 civil progress (Topland)', cumulative: '72% complete — target end Jul 31', status: 'Active', note: 'Topland; roads still control logistics access.' },
      { name: 'Tracker completion incl. purlins', remaining: '1,460 to build Â· 2,190 to client release', target: '61 completed rows/day now required for Aug 30', latest: 'Aug 1: 40 rows closed by ECCS in Zone E — a second 40-row day. United and Workforce closed nothing; Workforce opened Zone B (11 at step 2) and moved the EW rows into torque and QA', note: 'RELEASE RE-BASED Jul 30 to the CLIENT-approved column of the QA sheet: 296 rows accepted by Heelstone, 492 approved by Greensol, 1,026 built. The 606 previously published was the QA sheet’s executed column, not a release. Client acceptance exists only in Zone A. NO QA CUT HAS BEEN FILED SINCE Jul 30, so the release figures are two days stale. Separately tracked (trackerWip): 99 open rows worth 70.6 row-equivalents, earned 44.1% against this 41.3% gate, over three zones and three ladder steps. THE 20 ZONE EW ROWS ARE IN TORQUE AND QA — the nearest completions on the project. ECCS owes an open-row snapshot for Zone E; its register is held at zero rather than double-counting rows just credited complete. Open-row counts are a SNAPSHOT per crew, never cumulative.', cumulative: '1,026 done (41.3%): 296 client-released Â· 492 Greensol-approved / 2,486 total', status: 'Critical' },
      { name: 'ITS HDD boring', remaining: '3 of 20 MV bores · 11 of 14 DC bores', target: 'Minimum 1 completed bore/day', latest: 'Aug 1: still on MVHB-12 and fusing pipe in the substation areas — no bore closed. The Sunday commitment on MVHB-12 lands tomorrow', cumulative: '17 / 20 MV bores (85%, 5,462 ft) + 3 / 14 DC bores (21.4%, 647 LF)', status: 'Watch', note: 'MVHB-12 is being drilled deliberately slowly to avoid a frack-out on the wetland crossing — correct practice, and the reason MV bores have held at 17/20 for five days. ITS committed to closing it Sunday. Two drills since Jul 24; EGLE ruled the last MV bores stay bores.' },
      { name: 'ITS MV plowing', remaining: '10 of 46 segments', target: 'Minimum 1 completed segment/day', latest: 'Aug 1: 0 new segments — 36/46 holds for a FIFTH straight day (crew on MVHB-12 and substation pipe fusion)', cumulative: '36 / 46 segments complete (76.6%); 120,738 ft installed', status: 'Watch', note: 'Plowing leads the electrical sequence and has not moved since Jul 27. The ITS control sheet now records zero plowed footage for the whole week. 10 segments remain and the plow machine is idle while the crew finishes the wetland bore.' },
      { name: 'SET construction', remaining: '76.3% of overall scope', target: '— No approved daily progress target in source', latest: 'Aug 1: NO AB POWER CREW ON SITE — raised directly by Luis Romero. Piers hold at 14 of 17, last 3 due Monday/Tuesday; inverter stations 18 of 23, last 5 due Monday', cumulative: '24.7% overall (civil 76.8%, structural 10.8%, electrical 6.0%) per the Jul 31 AB Powers tracker', status: 'Critical', note: 'Civil has moved 65.6 to 73.1 to 76.8 in two days on the pier run while STRUCTURAL HAS NOT MOVED ONCE. Once the last 3 piers close on Aug 4 every substation foundation is complete and the only outstanding item is the steel — whose delivery programme Greensol formally rejected on Jul 30 as incompatible with an operational substation in week 3 of September.' },
      { name: 'Panel delivery', remaining: 'NONE — delivery complete', target: '— Scope closed, no further deliveries due', latest: 'Module deliveries CLOSED — full BOM quantity received on site', cumulative: '171,470 / 171,470 delivered (100.0%)', status: 'Complete', note: 'MODULE DELIVERY IS COMPLETE. The full 171,470-module quantity is on site; there are no pending module deliveries. 125,407 modules stand in stock above the 46,063 executed, so material is not a constraint on the module front at any point between here and the Sep 6 gate — the constraint is QA release and crew size.' },
      { name: 'Module installation', remaining: '125,407 modules', target: '4,180 modules/day required for Sep 6', latest: 'Aug 1: 1,780 (Workforce 780 + Brumont 1,000) — both blocks filed late', cumulative: '46,063 modules field-reported (26.9%)', status: 'Critical', note: 'THE GAIN WAS GIVEN BACK ON THE SATURDAY. Jul 31 beat the rate for the first time at 4,136 with 84 modules per installer; Aug 1 returned 1,780 — 43% of the requirement — with BOTH crews on site and 48 people producing 37 each. So this is not an attendance problem after all: the same crews delivered less than half their Friday productivity on the Saturday, and that is the number to interrogate before adding people. The required rate stands at 4,180/day and rises every day it is not met.' }
    ],
    dailyProductionHistory: [
      { task: 'Pile installation', period: 'Jun 18-Jul 31 measured days', minimum: '535 piles/day floor holds ~Aug 7 (2,674 left over 5 working days from Aug 2)', above: 2, below: 33, latest: 'Aug 1: NO REPORT filed by any pile crew', note: 'A WORKING DAY WITH NO RECORD. Neither United nor Latnovva filed on Saturday. Zone G holds 72.1% with 935 left; Zone B still 36 from close. The required rate jumped 446 to 535/day because the calendar moved and the front did not. E 224 from close; F 11 from close; D opens ~Aug 5-7. MATERIAL IS NO LONGER A CLOSED QUESTION — GameChange is chasing a reported pile short shipment with a several-week replacement lead time.', daily: [{ day: 'Jun 18', value: 20, target: 1022, unit: 'piles' }, { day: 'Jun 19', value: 79, target: 1022, unit: 'piles' }, { day: 'Jun 22', value: 251, target: 1022, unit: 'piles' }, { day: 'Jun 23', value: 101, target: 1022, unit: 'piles' }, { day: 'Jun 25', value: 370, target: 1022, unit: 'piles' }, { day: 'Jun 26', value: 340, target: 1022, unit: 'piles' }, { day: 'Jun 29', value: 261, target: 1022, unit: 'piles' }, { day: 'Jun 30', value: 234, target: 1022, unit: 'piles' }, { day: 'Jul 1', value: 252, target: 1022, unit: 'piles' }, { day: 'Jul 2', value: 274, target: 1022, unit: 'piles' }, { day: 'Jul 3', value: 134, target: 1022, unit: 'piles' }, { day: 'Jul 6', value: 307, target: 1022, unit: 'piles' }, { day: 'Jul 7', value: 399, target: 1022, unit: 'piles' }, { day: 'Jul 8', value: 646, target: 1022, unit: 'piles' }, { day: 'Jul 9', value: 669, target: 1022, unit: 'piles' }, { day: 'Jul 10', value: 680, target: 1022, unit: 'piles' }, { day: 'Jul 11', value: 680, target: 1022, unit: 'piles' }, { day: 'Jul 13', value: 608, target: 1022, unit: 'piles' }, { day: 'Jul 14', value: 695, target: 1022, unit: 'piles' }, { day: 'Jul 15', value: 481, target: 1022, unit: 'piles' }, { day: 'Jul 16', value: 504, target: 1022, unit: 'piles' }, { day: 'Jul 17', value: 472, target: 1022, unit: 'piles' }, { day: 'Jul 18', value: 608, target: 1022, unit: 'piles' }, { day: 'Jul 20', value: 622, target: 1022, unit: 'piles' }, { day: 'Jul 21', value: 253, target: 1176, unit: 'piles' }, { day: 'Jul 22', value: 202, target: 1419, unit: 'piles' }, { day: 'Jul 23', value: 284, target: 1419, unit: 'piles' }, { day: 'Jul 24', value: 364, target: 1349, unit: 'piles' }, { day: 'Jul 25', value: 236, target: 1677, unit: 'piles' }, { day: 'Jul 27', value: 0, target: 2397, unit: 'piles' }, { day: 'Jul 28', value: 439, target: 462, unit: 'piles' }, { day: 'Jul 29', value: 539, target: 464, unit: 'piles' }, { day: 'Jul 30', value: 627, target: 430, unit: 'piles' }, { day: 'Jul 31', value: 337, target: 430, unit: 'piles' }, { day: 'Aug 1', value: 0, target: 446, unit: 'piles' }] },
      { task: 'Tracker production control (incl. purlin completion)', period: 'Jun 17-Jul 31', minimum: '61 rows/day (required for Aug 30)', above: 4, below: 30, latest: 'Aug 1: 40 closed by ECCS (Zone E) — a second 40-row day; United and Workforce closed nothing', note: 'Row counts complete only with purlins installed. 1,026 built after ECCS filed 40 for Aug 1, its second 40-row day running. Release holds at 296 client-accepted — no QA cut since Jul 30. The 20 Zone EW rows are in torque and QA and are the nearest completions available.', daily: [{ day: 'Jun 17', value: 15, target: 50, unit: 'units' }, { day: 'Jun 18', value: 35, target: 50, unit: 'units' }, { day: 'Jun 19', value: 26, target: 50, unit: 'units' }, { day: 'Jun 20', value: 31, target: 50, unit: 'units' }, { day: 'Jun 21', value: 0, target: 50, unit: 'units' }, { day: 'Jun 22', value: 48, target: 50, unit: 'units' }, { day: 'Jun 23', value: 31, target: 50, unit: 'units' }, { day: 'Jun 24', value: 0, target: 50, unit: 'units' }, { day: 'Jun 25', value: 57, target: 50, unit: 'units' }, { day: 'Jun 26', value: 26, target: 50, unit: 'units' }, { day: 'Jun 29', value: 29, target: 50, unit: 'units' }, { day: 'Jun 30', value: 30, target: 50, unit: 'units' }, { day: 'Jul 1', value: 51, target: 50, unit: 'units' }, { day: 'Jul 7', value: 29, target: 50, unit: 'units' }, { day: 'Jul 8', value: 0, target: 50, unit: 'units' }, { day: 'Jul 9', value: 0, target: 50, unit: 'units' }, { day: 'Jul 10', value: 0, target: 50, unit: 'units' }, { day: 'Jul 13', value: 29, target: 50, unit: 'units' }, { day: 'Jul 14', value: 49, target: 50, unit: 'units' }, { day: 'Jul 15', value: 35, target: 50, unit: 'units' }, { day: 'Jul 16', value: 35, target: 50, unit: 'units' }, { day: 'Jul 17', value: 25, target: 50, unit: 'units' }, { day: 'Jul 18', value: 0, target: 50, unit: 'units' }, { day: 'Jul 20', value: 21, target: 50, unit: 'units' }, { day: 'Jul 21', value: 25, target: 51, unit: 'units' }, { day: 'Jul 22', value: 39, target: 51, unit: 'units' }, { day: 'Jul 23', value: 28, target: 51, unit: 'units' }, { day: 'Jul 24', value: 30, target: 52, unit: 'units' }, { day: 'Jul 27', value: 0, target: 55, unit: 'units' }, { day: 'Jul 28', value: 30, target: 56, unit: 'units' }, { day: 'Jul 29', value: 35, target: 57, unit: 'units' }, { day: 'Jul 30', value: 30, target: 59, unit: 'units' }, { day: 'Jul 31', value: 40, target: 59, unit: 'units' }, { day: 'Aug 1', value: 40, target: 60, unit: 'units' }] },
      { task: 'Module installation', period: 'Jul 3-Jul 31 field start', minimum: '4,180 modules/day (required for Sep 6)', above: 1, below: 23, latest: 'Aug 1: 1,780 (Workforce 780 + Brumont 1,000) — both filed late', note: 'ONE DAY ABOVE RATE, THEN 43% OF IT. Jul 31 hit 4,136 against 4,104; Aug 1 returned 1,780 against 4,103 with both crews present — 48 installers at 37 modules each against 84 the day before. Saturday productivity is the variable, not headcount. Every module again went into Zone E, which has no QA release of any kind.', daily: [{ day: 'Jul 3', value: 234, target: 3738, unit: 'modules' }, { day: 'Jul 6', value: 780, target: 3738, unit: 'modules' }, { day: 'Jul 7', value: 156, target: 3738, unit: 'modules' }, { day: 'Jul 8', value: 936, target: 3738, unit: 'modules' }, { day: 'Jul 9', value: 1308, target: 3738, unit: 'modules' }, { day: 'Jul 10', value: 1802, target: 3738, unit: 'modules' }, { day: 'Jul 11', value: 517, target: 3738, unit: 'modules' }, { day: 'Jul 13', value: 2922, target: 3738, unit: 'modules' }, { day: 'Jul 14', value: 2335, target: 3738, unit: 'modules' }, { day: 'Jul 15', value: 780, target: 3738, unit: 'modules' }, { day: 'Jul 16', value: 858, target: 3738, unit: 'modules' }, { day: 'Jul 17', value: 2226, target: 3738, unit: 'modules' }, { day: 'Jul 18', value: 0, target: 3738, unit: 'modules' }, { day: 'Jul 20', value: 3601, target: 3738, unit: 'modules' }, { day: 'Jul 21', value: 3082, target: 3754, unit: 'modules' }, { day: 'Jul 22', value: 2887, target: 3776, unit: 'modules' }, { day: 'Jul 23', value: 3456, target: 3776, unit: 'modules' }, { day: 'Jul 24', value: 3134, target: 3785, unit: 'modules' }, { day: 'Jul 27', value: 0, target: 3908, unit: 'modules' }, { day: 'Jul 28', value: 3100, target: 4020, unit: 'modules' }, { day: 'Jul 29', value: 3109, target: 4047, unit: 'modules' }, { day: 'Jul 30', value: 3158, target: 4104, unit: 'modules' }, { day: 'Jul 31', value: 4136, target: 4104, unit: 'modules' }, { day: 'Aug 1', value: 1780, target: 4103, unit: 'modules' }] },
      { task: 'ITS MV plowing', period: 'Jun 17-Jul 17', minimum: '1 completed segment/day', above: 11, below: 19, latest: 'Aug 1: 0 segments — crew on MVHB-12 and substation pipe fusion', note: 'Plowing holds 36/46 (120,738 ft) — FIVE straight days with no segment closed. 10 segments remain and the plough is idle while the crew finishes the wetland bore.', daily: [{ day: 'Jun 17', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 18', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 19', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 20', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 21', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 22', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 23', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 24', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 25', value: 3, target: 1, unit: 'seg' }, { day: 'Jun 26', value: 4, target: 1, unit: 'seg' }, { day: 'Jun 27', value: 1, target: 1, unit: 'seg' }, { day: 'Jun 28', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 29', value: 2, target: 1, unit: 'seg' }, { day: 'Jun 30', value: 5, target: 1, unit: 'seg' }, { day: 'Jul 1', value: 0, target: 1, unit: 'seg' }, { day: 'Jul 2', value: 1, target: 1, unit: 'seg' }, { day: 'Jul 6', value: 0, target: 1, unit: 'seg' }, { day: 'Jul 7', value: 0, target: 1, unit: 'seg' }, { day: 'Jul 8', value: 5, target: 1, unit: 'seg' }, { day: 'Jul 9', value: 2, target: 1, unit: 'seg' }, { day: 'Jul 10', value: 5, target: 1, unit: 'seg' }, { day: 'Jul 11', value: 1, target: 1, unit: 'seg' }, { day: 'Jul 13', value: 2, target: 1, unit: 'seg' }, { day: 'Jul 14', value: 2, target: 1, unit: 'seg' }, { day: 'Jul 15', value: 3, target: 1, unit: 'seg' }, { day: 'Jul 16', value: 0, target: 1, unit: 'seg' }, { day: 'Jul 17', value: 0, target: 1, unit: 'seg' }, { day: 'Jul 27', value: 0, target: 1, unit: 'seg' }, { day: 'Jul 28', value: 0, target: 1, unit: 'seg' }, { day: 'Jul 29', value: 0, target: 1, unit: 'seg' }, { day: 'Jul 30', value: 0, target: 1, unit: 'seg' }, { day: 'Jul 31', value: 0, target: 1, unit: 'seg' }, { day: 'Aug 1', value: 0, target: 1, unit: 'seg' }] },
      { task: 'ITS HDD boring', period: 'Jul 2-Jul 20 measured days', minimum: '1 completed bore/day', above: 4, below: 13, latest: 'Aug 1: no bore closed; MVHB-12 still open — the Sunday commitment lands tomorrow', note: 'MVHB-12 is being drilled slowly on purpose to avoid a frack-out on the wetland crossing. MV bores hold 17/20 for a fifth day; ITS committed to closing it Sunday.', daily: [{ day: 'Jul 2', value: 1, target: 1, unit: 'bores' }, { day: 'Jul 6', value: 0, target: 1, unit: 'bores' }, { day: 'Jul 7', value: 0, target: 1, unit: 'bores' }, { day: 'Jul 8', value: 1, target: 1, unit: 'bores' }, { day: 'Jul 9', value: 1, target: 1, unit: 'bores' }, { day: 'Jul 10', value: 1, target: 1, unit: 'bores' }, { day: 'Jul 11', value: 1, target: 1, unit: 'bores' }, { day: 'Jul 13', value: 2, target: 1, unit: 'bores' }, { day: 'Jul 14', value: 0, target: 1, unit: 'bores' }, { day: 'Jul 15', value: 0, target: 1, unit: 'bores' }, { day: 'Jul 16', value: 0, target: 1, unit: 'bores' }, { day: 'Jul 17', value: 0, target: 1, unit: 'bores' }, { day: 'Jul 20', value: 1, target: 1, unit: 'bores' }, { day: 'Jul 27', value: 0, target: 1, unit: 'bores' }, { day: 'Jul 28', value: 0, target: 1, unit: 'bores' }, { day: 'Jul 29', value: 0, target: 1, unit: 'bores' }, { day: 'Jul 30', value: 1, target: 1, unit: 'bores' }, { day: 'Jul 31', value: 0, target: 1, unit: 'bores' }, { day: 'Aug 1', value: 0, target: 1, unit: 'bores' }] }
    ],
    successors: [
      { activity: 'Tracker structural assembly', dependency: 'Completed piles by zone/block; final tracker finish after final pile finish', impact: 'Can overlap piling only in released areas. Final tracker structure cannot finish before the revised late-July pile forecast; the August 30 tracker-completion estimate requires 40 completed rows/day.', mitigation: 'Prioritize tracker crews into released workfronts and maintain linked finish-to-finish controls.' },
      { activity: 'Tracker completion incl. purlins', dependency: 'Completed tracker structure; purlins installed concurrently (sufficient units on site)', impact: 'Purlins are not the restriction and the tube outage is resolved except for 16 purple tubes and one claimed bundle. Tracker completion is now controlled by TWO crews that are not closing rows: United carries 68 Zone F rows and Workforce 20 Zone EW rows, with no completion filed by either in five days. QA release is the second gate at 296 accepted of 1,026. Best-estimate finish holds at August 30 only if those 88 rows convert next week.', mitigation: 'Close the 88 open rows held by United and Workforce first — they need only dampers, actuators, torque and punch. Hold >= 61 completed rows/day and keep same-week QA turnover of finished rows.' },
      { activity: 'Module installation', dependency: 'Completed tracker rows with both Purlin types installed; final module finish after final purlin finish', impact: 'The module crews reached the required rate on Jul 31 (4,136 vs 4,104) at 84.4 modules per installer, then delivered 1,780 on Aug 1 with both crews present at 37 each — the rate is achievable at Friday productivity and not at Saturday productivity. RELEASED ROWS remain the second constraint. Zone E carries zero release of any kind and has absorbed the entire output of the last two days. Final module completion is required one week after the August 30 tracker completion — by September 6.', mitigation: 'Hold Workforce at 29 and Brumont at 20; the rate depends on both. Convert the release backlog before the module crews run out of built rows, and maintain a block-level tracker/purlin/module constraint log.' },
      { activity: 'DC string wiring / combiner work', dependency: 'Modules set and accessible rows', impact: 'Crews trail module installation block-by-block, but the binding constraint is now Chemik LV material: bulk production ~Aug 7, sea 5-6 wks (mid-late Sept) — too late for Sep 25. Only 18% of 3-string harness shipped.', mitigation: 'Air-freight the final Chemik shipments to land before end of August (Luis Romero escalation Jul 17); sequence electrical crews by completed inverter block; use partial completion packages.' },
      { activity: 'Commissioning and MC', dependency: 'Continuous mechanical completion by zone', impact: 'On the re-cascaded dates (trackers Aug 30, modules Sep 6, LV/DC Sep 18) the Sep 25 MC target is achievable with limited float; pre-commissioning Sep 14 - Oct 15 protects the Oct 16 PIS.', mitigation: 'Convert the 99 open rows into completions starting with the 20 in torque and QA, close the last 2,674 piles by ~Aug 7, get the module rate back to 4,214/day with BOTH crews, and prepare weekend/OT acceleration. Saturdays remain mandatory and Aug 1 was not worked.' }
    ],
    schedule: [
      { activity: 'D&F Pre-Drilling', contractor: 'Kalamazoo Excavating', start: '2026-05-06', end: '2026-06-30', status: 'Complete', progress: 100, baseline: 0, note: 'The June 30 Construction Management PROGRESS sheet shows 7,694 of 7,694 drill-and-backfill units complete.' },
      { activity: 'GameChange material delivery sequence', contractor: 'GameChange / NTG / Landstar', start: '2026-06-17', end: '2026-07-16', status: 'Critical', progress: 90, baseline: 55, note: 'TUBES RESOLVED — Shreeya CONFIRMED Jul 27: all BOM material delivered as of Jul 24 except 16 purple tubes, committed Wed Jul 29. OPEN CLAIM: purple bundle missing from PL-3295-094-HT (Manuel, Jul 24) — NOT addressed in the Jul 27 reply. NEW ADMIN Jul 27: GameChange requests the corrected BOL re-signed and ~21 missing PODs uploaded (load list provided). Workbook Jul 24: tubes 20,908 of 28,869 delivered (72.4%) — pre-Friday-trucks cut. Prior open items: POD pending on PL-3295-084-HT; GameChange trucks staging on public roads (Road Commission monitoring, fines passed to GameChange). PILE DELIVERY RE-OPENED (Jul 29): GameChange is chasing the exact shortfall quantity and colour breakdown of piles the site team reported SHORT SHIPPED, to establish whether it is a POD discrepancy or a real shortfall — replacement posts carry a production lead time of several weeks and nothing has been filed back. The 31,352 BOM closeout of Jul 24 remains the working basis for the 2,674 piles left to drive, but it can no longer be called secure. Receiving cap 14 pile + 8 racking loads/day; loads count as scheduled until POD/site receipt.' },
      { activity: 'United Zone F mobilization and pile-spot marking', contractor: 'United', start: '2026-06-15', end: '2026-06-21', status: 'Complete', progress: 100, baseline: 0, note: 'Completed on schedule: marking, mobilization and onboarding closed; United began ramming Jun 22 and has produced daily since.' },
      { activity: 'Overall pile installation acceleration', contractor: 'All pile contractors', start: '2026-06-22', end: '2026-07-28', status: 'Critical', progress: 91.5, baseline: 48.4, note: '2,674 piles remain (28,678 executed — workbook roll-up 26,736 + 1,942 field logs Jul 28-31); ~Aug 7 finish needs 535/day over 5 working days. Aug 1: no crew filed. Jul 31: 337 — United, all Zone G, back under rate after 539 and 627. ECCS moved its whole crew to trackers; Latnovva filed refusal work with no count and Zone B is still 36 from close. Levers: the Zone G change-order signature, Saturday work, and now the GameChange pile short-shipment count.' },
      { activity: 'Tracker assembly incl. purlin install', contractor: 'ECCS / United / Workforce', start: '2026-06-08', end: '2026-08-30', status: 'At Risk', progress: 44.1, baseline: 0, note: 'Aug 1: ECCS closed 40 rows in Zone E, its second 40-row day running, while United and Workforce closed nothing; Workforce opened a new front in Zone B (11 rows at step 2) and moved the 20 Zone EW rows into torque and QA. Jul 31: ECCS closed 40 rows in Zone E, its best day since Jul 14, and its open-row snapshot fell 28 to 10 — the WIP converted. United and Workforce closed NOTHING: 68 Zone F rows and 20 Zone EW rows sit at step 3 of 5, four days without a single completion between them. 1,026 done / 296 CLIENT-released / 492 Greensol-approved (no QA cut since Jul 30). Client acceptance exists only in Zone A. Both release AND the two non-closing crews now control the module front.' },
      { activity: 'ITS HDD boring', contractor: 'ITS', start: '2026-06-12', end: '2026-08-15', status: 'Active', progress: 85, baseline: 0, note: 'MV 17 of 20 bores complete (85%, 5,462 ft) — five consecutive days at zero. MVHB-12 still open on Aug 1 and committed to close Sunday Aug 2 (slowed deliberately to avoid a frack-out), 2 pending; DC cable-duct bores 3 of 14 COMPLETE (647 LF). Second, larger drill on site — two rigs from Jul 24 (one DC, one MV wetlands). EGLE denied swapping the remaining bores for plowing (Jul 17) — the last continue with ~100 ft extensions each past the wetland.' },
      { activity: 'ITS MV cable plowing', contractor: 'ITS', start: '2026-06-25', end: '2026-08-15', status: 'Active', progress: 76.6, baseline: 0, note: 'Jul 31 ITS control: 36 of 46 segments complete (76.6%), 120,738 ft installed — unchanged since Jul 27. FOUR consecutive days at zero, and the sheet records 0 ft plowed for the entire week. By line: MV11A 7/10, MV11B 10/12, MV12A 10/13, MV12B 9/11. The plow machine is idle while all 13 ITS people finish MVHB-12.' },
      { activity: 'Control building foundation and delivery gate', contractor: 'AB Power / SET team', start: '2026-06-20', end: '2026-07-10', status: 'Complete', progress: 100, baseline: 0, note: 'GATE MET: control building delivered and set on its foundation the night of July 7, three days ahead of the July 10 required-on-site date.' },
      { activity: 'SET equipment required-on-site gate', contractor: 'SET team / Procurement / Suppliers', start: '2026-06-24', end: '2026-07-10', status: 'Critical', progress: 50, baseline: 0, note: 'MAJOR RECOVERY Jul 24: the MAIN POWER TRANSFORMER arrived and was SET on its foundation (15:33, crane set onto the completed berm/foundation ready since Jul 12) — the largest item of the missed Jul 10 gate is closed 14 days late. BREAKERS are still awaited and several electrical items remain committed after the gate. Control building on site since Jul 7. Jul 24 SET tracker: overall 20.0% (civil 59.3%, structural 11.3%, electrical 5.2%). Jul 17 review: AB Power presented no SET work plan or material-delivery plan — Greensol pulling partial scope to a third party (Michael Power) and self-procuring materials; portico steel arriving Jul 16-17; oil-pit grating (tramex) procured to close the payment milestone.' },
      { activity: 'Substation (SET) construction', contractor: 'AB Power / Michael Power / SET team', start: '2026-06-01', end: '2026-09-25', status: 'Critical', progress: 24.7, baseline: 0, note: 'SUBSTATION PIERS — 14 of 17 COMPLETE (Axel, Jul 31, +3 on the day); the last 3 are drilled Monday Aug 3 with concrete Tuesday Aug 4; executed by Dig It (AB Power sub) under Axel Cano. Jul 31 AB Powers tracker: 24.7% overall (civil 76.8%, structural 10.8%, electrical 6.0%) against a ~45% plan-to-date on the linear baseline to the Sep 25 MC — closing but still the lagging critical path. MILESTONE Jul 24: MAIN POWER TRANSFORMER set on its foundation. Breakers and structural steel remain in fabrication (now the controlling items for energization); AB Power has presented no work or delivery plan and Greensol is pulling partial scope to Michael Power. Inverter steel-pile welding procedure received Jul 21 (Daniel Morilla).' },
      { activity: 'Inverter foundation readiness', contractor: 'EPC / Civil / Electrical', start: '2026-06-20', end: '2026-07-25 provisional', status: 'Critical', progress: 95.7, baseline: 0, note: 'Jul 22 field (Manuel/ECCS): another inverter foundation completed in Zone G — 22 of 23 stations complete (95.7%), only 1 remaining. Welding procedure for the inverter steel-pile foundations received Jul 21 (Daniel Morilla) — qualified welding cleared to proceed. Base-plate welding complete on all 18 stations delivered (Axel, Jul 12). On pace ahead of the end-July arrival of the 23 units.' },
      { activity: 'Inverter Installation' /*earned 40.9*/, contractor: 'EPC / OEM', start: '2026-07-27', end: '2026-09-15', status: 'Confirmed', progress: 40.9, baseline: 0, note: '23 x 4.2 MW units. Jul 31: five more stations unloaded and welded, closing the WHOLE of Zone F in one day — 18 of 23 now set and welded, with the last 5 due Monday. TERMINATIONS ARE STILL ZERO of 23 and that is the gate measure; they are gated by an LV/DC pull that has produced no measured footage.' },
      { activity: 'Workforce module crew mobilization', contractor: 'Workforce', start: '2026-06-29', end: '2026-07-06', status: 'Complete', progress: 100, baseline: 0, note: 'Module crews mobilized and producing (Workforce + Brumont, 38 installers on the Jul 9 board); manning stability is tracked in the risks section.' },
      { activity: 'Final module installation completion', contractor: 'Workforce / Brumont', start: '2026-07-03', end: '2026-09-06', status: 'Critical', progress: 26.9, baseline: 0, note: 'Modules must finish one week after tracker completion: Aug 30 trackers -> Sep 6 module finish. 46,063 executed (26.9%); 4,180/day required over 30 working days. Jul 31 was the first day at or above rate at 4,136; Aug 1 returned 1,780 with both crews present, at 37 modules per installer against 84. The rate is achievable at Friday productivity and unreachable at Saturday productivity.' },
      { activity: 'DC Wire / LV Installation', contractor: 'East Carolina + Self-Perform', start: '2026-07-07', end: '2026-09-18', status: 'Critical', progress: 2.7, baseline: 0, note: 'Aerial messenger-wire harness / BLA-style install from tracker rows to junction boxes. Total pull 274,720 lf (0% done). Jul 21: United drove the FIRST LV support piles — 13 combiner-box (CB) + 32 tensioning/messenger-wire (TP) piles in Zone F (tracked separately from the 31,352 tracker piles). NOW MATERIAL-GATED: Chemik LV cable/harness finishes production ~Aug 7; sea transit 5-6 wks lands it mid-late Sept, incompatible with Sep 25 MC. Greening escalating for AIR freight to land material before end of August. Cable-pull kick-off Jul 21 on partial air deliveries.' },
      { activity: 'Electrical Pre-Commissioning', contractor: 'EPC + OEMs', start: '2026-09-14', end: '2026-10-15', status: 'Planned', progress: 0, baseline: 0, note: 'Zonal energization after inverter, MV/HDD, tracker, module, and DC/LV turnover by block. Runs Sep 14 - Oct 15 so all zones are energized ahead of the Oct 16 PIS target.' }
    ],
    fieldResourceSnapshots: [
      { label: 'Jun 17 actual', week: 'W25', people: 136, color: '#b53030', offset: -18 },
      { label: 'Jun 30 official', week: 'W27', people: 148, color: '#2769a8', offset: 18 },
      { label: 'Jul 6 field', week: 'W28', people: 70, color: '#168a5b', offset: 48 },
      { label: 'Jul 7 field', week: 'W28', people: 170, color: '#8a4dbf', offset: 78 },
      { label: 'Jul 9 board', week: 'W28', people: 191, color: '#b96f18', offset: 108 },
      { label: 'Jul 16', week: 'W29', people: 198, color: '#66716d', offset: 138 },
      { label: 'Jul 20', week: 'W30', people: 192, color: '#66716d', offset: 168 },
      { label: 'Jul 29 current', week: 'W31', people: 248, color: '#0c5f43', offset: 198 }
    ],
    actualResources: [
      { contractor: 'ECCS', people: 65, label: '65 · 53 trackers + 12 LV' },
      { contractor: 'UNITED', people: 55, label: '55 · G piling + F racking' },
      { contractor: 'WORKFORCE', people: 48, label: '48 · modules + racking' },
      { contractor: 'GREENSOL', people: 20, label: '20 · EPC + self-perform' },
      { contractor: 'BRUMONT', people: 15, label: '15 · module installation' },
      { contractor: 'ITS', people: 13, label: '13 · MV plowing / HDD' },
      { contractor: 'LATNOVVA', people: 10, label: '10 · B Area piling' },
      { contractor: 'ABPOWER', people: 8, label: '8 · substation (SET)' },
      { contractor: 'DIG IT', people: 5, label: '5 · SET piers' },
      { contractor: 'TOPLAND', people: 4, label: '4 · internal roads' },
      { contractor: 'HI TECH', people: 3, label: '3 · substation & QI' },
      { contractor: 'KALAMAZOO', people: 2, label: '2 · excavation support' },
      { contractor: 'ECS', people: 0, label: '0 · environmental (off site)' },
      { contractor: 'HURRICANE', people: 0, label: '0 · fencing (off site)' },
      { contractor: 'LOUNSBURY', people: 0, label: '0 · earthworks (off site)' },
      { contractor: 'WESTWOOD', people: 0, label: '0 · civil consulting (off site)' },
      { contractor: 'SWCA', people: 0, label: '0 · environmental (off site)' }
    ],
    todayFieldSnapshot: {
      date: 'Jul 29, 2026',
      total: 248,
      rows: [
        { contractor: 'ECCS', people: 65, category: 'tracker', note: 'Board card reads 53 + 12: 53 on tracker assembly in Zone E (35 rows closed, 34 at 75%) and 12 on LV electrical (25 LBDs, Area A complete). Largest crew on site.' },
        { contractor: 'UNITED', people: 55, category: 'pile', note: 'Up from 44 — split between Zone G pile driving (507 on Jul 30, best day of the project) and the Zone F racking ramp (37 rows standing at step 3 of 5).' },
        { contractor: 'WORKFORCE', people: 48, category: 'module', note: 'TWO crews. Manuel reported 29 on modules (1,709, Zone C) + 15 on racking (20 EW rows at 75%) = 44; the board carries 48 — 4-person variance to reconcile.' },
        { contractor: 'GREENSOL', people: 20, category: 'epc', note: 'Board braces GREENSOL and GREENSOL CONSTRUCTION into a single count of 20 — EPC management, QA/QC, safety and self-perform site supervision combined.' },
        { contractor: 'BRUMONT', people: 15, category: 'module', note: 'Module installation, secondary crew — 1,400 across Zones C and E, opening the Zone E module front. Re-man to 18 still pending.' },
        { contractor: 'ITS', people: 13, category: 'electrical', note: 'MV plowing and HDD — MVHB-11 drilling plus pipe fusing; no bore or segment closed for a second day.' },
        { contractor: 'LATNOVVA', people: 10, category: 'pile', note: 'BACK ON SITE after the Jul 28 closeout — 2 rigs, 178 piles Zone B over Jul 28-29. Manuel reported 11, the board carries 10.' },
        { contractor: 'ABPOWER', people: 8, category: 'electrical', note: 'Substation (SET) and inverter-station works — SET 24.7% overall; piers 14/17; 18 of 23 inverter stations set as of Jul 31.' },
        { contractor: 'DIG IT', people: 5, category: 'electrical', note: 'Substation piers (AB Power sub) — pier F5 anchor template set and backfilled Jul 29 evening; piers 7 of 17.' },
        { contractor: 'TOPLAND', people: 4, category: 'civil', note: 'Internal roads — 72%, target end Jul 31.' },
        { contractor: 'HI TECH', people: 3, category: 'electrical', note: 'Substation grounding / commissioning support and Quality Inspector coordination.' },
        { contractor: 'KALAMAZOO', people: 2, category: 'support', note: 'Excavation support — added to the board (D&F pre-drilling scope closed at 7,694).' },
        { contractor: 'ECS', people: 0, category: 'civil', note: 'No crew on site.' },
        { contractor: 'HURRICANE', people: 0, category: 'civil', note: 'No fencing crew on site — fence 95%, Zone G remainder and gates left.' },
        { contractor: 'LOUNSBURY', people: 0, category: 'civil', note: 'No crew on site — cut/fill complete Jul 17; Area G basins 83%.' },
        { contractor: 'WESTWOOD', people: 0, category: 'support', note: 'No crew on site.' },
        { contractor: 'SWCA', people: 0, category: 'support', note: 'No crew on site (board line left blank).' }
      ],
      note: 'Source: the on-site headcount board photographed Jul 29. The board header still carries 7/23, but every value matches the Jul 29 subcontractor reports — treat it as the Jul 29 record. Two variances against Manuel Ramirez\'s WhatsApp blocks: Workforce 48 on the board vs 43 reported (29 panels + 14 racking), and Brumont 19 vs 14 reported. Board total 253 people, up 5 on Jul 29. THE Jul 30 GAP THAT MATTERS: production was filed for only about 135 of the 253 on site — United (55) and Latnovva (9) were both present and filed nothing, and ABPower, Dig It, Topland, Hi Tech, Kalamazoo and SWCA reported no output at all. Crane 2 is equipment, not headcount. The ECCS LV crew standing up.'
    },
    equipmentNotes: [
      { contractor: 'GreenSol', equipment: 'Site trucks and laptops for management/QC field use; no heavy equipment assigned.', output: 'Daily site walk, safety audits, and progress verification.' },
      { contractor: 'GreenSol Construction', equipment: 'Hand tools and site vehicles supporting self-perform labor.', output: 'Supporting active workfronts; no heavy equipment assigned.' },
      { contractor: 'ECS', equipment: 'No crew or equipment on site today.', output: 'Not applicable.' },
      { contractor: 'Hurricane', equipment: 'Standard fencing install tools (post drivers, hand tools).', output: 'Fence ~95% complete (Rosario Jul 23): A–F done, Zone G remainder + gates remaining.' },
      { contractor: 'Topland', equipment: 'Grading/road equipment (grader, roller).', output: 'Internal roads scope; Area F access blocked ~10 AM by a concrete pour.' },
      { contractor: 'Lounsbury', equipment: 'Earthwork equipment (excavator, dozer) for cut/fill and basin work.', output: 'Cut/fill 100% complete (Jul 17); Area G basin closeout continuing (basins 83%).' },
      { contractor: 'ECCS', equipment: 'Tracker crew (53) + LV electrical crew (12) — two separate fronts.', output: 'Jul 29: 35 tracker rows closed at 100% + 34 rows at 75%, Zone E. LV crew: 25 LBDs (19 Area A, 6 Area C) — Area A LBDs COMPLETE; supports A1/A2/A4 100%, A5 90%, E-W 100%; messenger wire A3 70%. Jul 28: 30 trackers + 100 piles.' },
      { contractor: 'United', equipment: '6 ramming machines; 55 people (up from 44) split between Zone G piling and Zone F racking.', output: 'Jul 29: 361 piles ALL Zone G (Zone G now 1,577 / 47.0%) + first racking quantity — 82 Zone F rows at 20%, no rows closed. Jul 28: 339 piles Zone G.' },
      { contractor: 'Latnovva', equipment: 'BACK ON SITE — 2 ramming machines, 11 people.', output: 'Jul 29: 178 piles Zone B covering Jul 28-29 (Zone B now 2,752 / 98.7%, 36 to close) + 8 tension piles Zone A. Reported one day after the Jul 28 closeout — closeout and scope transfer need re-confirming.' },
      { contractor: 'Workforce', equipment: 'TWO crews: module installation (29) + tracker racking (15).', output: 'Jul 29: 1,709 modules Zone C (best of the week) + racking crew reporting the 20 Zone EW rows at 75% — down from the 95% logged Jul 28, with no row closed.' },
      { contractor: 'Brumont', equipment: 'Module installation tools; 15-person crew (re-man to 18 still pending).', output: 'Jul 29: 1,400 modules across zones C and E — opened the Zone E module front. Third straight day at 1,400 against a 2,000 target.' },
      { contractor: 'ITS', equipment: 'TWO HDD drills + MV cable-plowing machine; 13 people.', output: 'Jul 31: 0 ft bored and 0 ft plowed, and the ITS sheet records the same zeros for the whole week — a fourth consecutive day at zero. Holds 36/46 plow segments (120,738 ft), 17/20 MV bores (5,462 ft), 3/14 DC bores (647 LF). All 13 people on MVHB-12, committed to Sunday.' },
      { contractor: 'AB Power', equipment: 'SET / electrical installation equipment.', output: 'Supporting control-building and SET electrical scope.' },
      { contractor: 'Dig It', equipment: 'SET pier formwork and foundation equipment (AB Power subcontractor); 5 people.', output: 'Jul 29, 19:04: pier F5 anchor-bolt template set and backfill under way (geotagged photo). Piers 7 of 17 complete incl. concrete as of Jul 28; plan holds 3-4 piers/day.' },
      { contractor: 'Hi Tech', equipment: 'Electrical / substation support equipment; Quality Inspector coordination.', output: 'SET / substation grounding and commissioning support scope.' },
      { contractor: 'Westwood', equipment: 'No crew or equipment on site today.', output: 'Not applicable.' },
      { contractor: 'SWCA', equipment: 'No crew or equipment on site today.', output: 'Not applicable.' }
    ],
    resourcePlan: [
      { label: 'Total site resources', actual: 253, target: 105, targetLabel: 'Acceleration peak 95-105', note: 'Jul 30 on-site headcount board: 253 people including field labor plus management, QC and HSE — up 5 on Jul 29 and 2.4x the acceleration-plan peak.' },
      { label: 'Tracker / piling crew', actual: 133, target: 85, targetLabel: 'ECCS (50) + United (35)', note: 'ECCS trackers (53) + United (55, split G piling / F racking) + Latnovva (10, Zone B) + Workforce racking (15) = 133. Three separate crews are now producing tracker rows.' },
      { label: 'Module crew Phase 1', actual: 33, committed: 33, target: 22, targetLabel: '22 by Jul 7', note: 'Workforce module crew — board carries 48 across both Workforce crews, 15 of which are racking. Manuel reported 29 on modules; 4-person variance open.' },
      { label: 'Module full-field crew', actual: 48, committed: 48, target: 40, targetLabel: '40 by Jul 13+', note: 'Jul 31: 49 installers (Workforce 29 + Brumont 20) delivered 4,136 against 4,103 required — the rate was met at 84.4 modules per installer. Aug 1: 48 installers (Workforce 29 + Brumont 19) delivered 1,780 — 37 each. Same crews, same size, less than half the output. The exposure is PRODUCTIVITY ON THE SIXTH DAY, not headcount and not attendance.' },
      { label: 'Electrical & SET crew', actual: 41, committed: 41, target: 25, targetLabel: '25 electrical + SET', note: 'ECCS electrical (12) + ITS (13) + ABPOWER (8) + DIG IT (5) + HI TECH (3) = 41 — the LV crew standing up is most of the +56 jump in total site headcount.' },
      { label: 'Greensol site team', actual: 20, target: 20, targetLabel: '13 staff + 7 labor', note: 'The board braces GREENSOL and GREENSOL CONSTRUCTION into a single count of 20 EPC team members — management, QA/QC, safety and self-perform supervision.' },
      { label: 'Civil & environmental crew', actual: 6, committed: 6, target: 15, targetLabel: '15 civil/environmental', note: 'TOPLAND (4, internal roads) + KALAMAZOO (2) = 6. HURRICANE, LOUNSBURY, ECS, WESTWOOD and SWCA all show zero on the Jul 29 board as the civil scope closes out.' }
    ],
    mechanicalManpowerLoad: [
      { week: 'Jun 22', pile: 9, tracker: 16, module: 0, management: 13, total: 38 },
      { week: 'Jun 29', pile: 10, tracker: 28, module: 0, management: 13, total: 51 },
      { week: 'Jul 6', pile: 10, tracker: 35, module: 0, management: 13, total: 58 },
      { week: 'Jul 13', pile: 35, tracker: 50, module: 41, management: 20, total: 146 },
      { week: 'Jul 20', pile: 10, tracker: 50, module: 37, management: 13, total: 110 },
      { week: 'Jul 27', pile: 10, tracker: 42, module: 40, management: 13, total: 105 },
      { week: 'Aug 3', pile: 0, tracker: 42, module: 40, management: 13, total: 95 },
      { week: 'Aug 10', pile: 0, tracker: 42, module: 40, management: 13, total: 95 },
      { week: 'Aug 17', pile: 0, tracker: 42, module: 40, management: 13, total: 95 },
      { week: 'Aug 24', pile: 0, tracker: 42, module: 40, management: 13, total: 95 },
      { week: 'Sep 7', pile: 0, tracker: 42, module: 40, management: 13, total: 95 },
      { week: 'Sep 14', pile: 0, tracker: 42, module: 40, management: 13, total: 95 },
      { week: 'Sep 21', pile: 0, tracker: 0, module: 40, management: 10, total: 50 },
      { week: 'Sep 28', pile: 0, tracker: 0, module: 40, management: 10, total: 50 },
      { week: 'Oct 5', pile: 0, tracker: 0, module: 0, management: 5, total: 5 }
    ],
    mechanicalManpowerMilestones: [
      { week: 'Jun 22', label: 'Acceleration plan starts', color: '#b53030', row: 0 },
      { week: 'Jul 27', label: 'Piles complete · Jul 28', color: '#66716d', row: 1 },
      { week: 'Aug 24', label: 'Trackers incl. purlins · Aug 30', color: '#168a5b', row: 0 },
      { week: 'Sep 7', label: 'Modules · Sep 6', color: '#2769a8', row: 1 }
    ],
    personnelOutlook: [
      { week: 'W22', date: 'May 25', people: 135 },
      { week: 'W23', date: 'Jun 1', people: 281 },
      { week: 'W24', date: 'Jun 8', people: 281 },
      { week: 'W25', date: 'Jun 15', people: 281 },
      { week: 'W26', date: 'Jun 22', people: 229 },
      { week: 'W27', date: 'Jun 29', people: 228 },
      { week: 'W28', date: 'Jul 6', people: 228 },
      { week: 'W29', date: 'Jul 13', people: 228 },
      { week: 'W30', date: 'Jul 20', people: 310 },
      { week: 'W31', date: 'Jul 27', people: 220 },
      { week: 'W32', date: 'Aug 3', people: 255 },
      { week: 'W33', date: 'Aug 10', people: 255 },
      { week: 'W34', date: 'Aug 17', people: 205 },
      { week: 'W35', date: 'Aug 24', people: 205 },
      { week: 'W36', date: 'Aug 31', people: 205 },
      { week: 'W37', date: 'Sep 7', people: 205 },
      { week: 'W38', date: 'Sep 14', people: 205 },
      { week: 'W39', date: 'Sep 21', people: 155 },
      { week: 'W40', date: 'Sep 28', people: 155 },
      { week: 'W41', date: 'Oct 5', people: 130 },
      { week: 'W42', date: 'Oct 12', people: 130 },
      { week: 'W43', date: 'Oct 19', people: 75 },
      { week: 'W44', date: 'Oct 26', people: 75 },
      { week: 'W45', date: 'Nov 2', people: 75 },
      { week: 'W46', date: 'Nov 9', people: 75 },
      { week: 'W47', date: 'Nov 16', people: 0 }
    ],
    milestones: [
      { name: 'Mechanical Completion', target: 'Sep 25, 2026', forecast: 'Sep 20-25, 2026', status: 'High', note: 'Re-cascaded dates (trackers Aug 30, modules Sep 6, LV/DC Sep 18) keep MC on the Sep 25 target. Modules touched the required rate on Jul 31 and fell back to 780 on Aug 1, so they stay on the exposure list until the rate is held two days running. Piles need 535/day over 5 working days, subject to the GameChange short-shipment count. TRACKERS are the worst: ECCS holds 40/day alone against 61/day required, client release stuck at 296 of 1,026 built. LV finally moved — 478 lf placed against 6,689/day required.' },
      { name: 'Provisional Interconnection', target: 'Oct 16, 2026', forecast: 'Oct 12-16, 2026', status: 'High', note: 'With MC forecast Sep 20-25 and pre-commissioning complete by Oct 15, the Oct 16 PIS target is feasible without renegotiation — protect the SET/inverter path. Jul 24: main power transformer SET on its foundation — the key PIS equipment item is on site; breakers/structural steel now controlling.' },
      { name: 'Commercial Operation Date', target: 'Nov 9, 2026', forecast: 'Nov 5-9, 2026', status: 'Watch', note: 'The re-cascaded MC/PIS dates restore limited float to COD; feasible if the pile gate and module ramp hold.' },
      { name: 'Substantial Completion', target: 'Nov 30, 2026', forecast: 'Nov 30, 2026', status: 'Watch', note: 'Still achievable if COD is protected and outdoor work closes before weather stop.' }
    ],
    risks: [
      { title: 'Tracker closure \u2014 one crew carries the whole front', level: 'Critical', owner: 'Manuel Ramirez | ECCS | United | Workforce', note: 'ECCS closed <strong>40 rows on Aug 1</strong>, a second 40-row day. United and Workforce closed <strong>nothing</strong> and hold <strong>88 of the 99 open rows</strong>. EW 20 are in <strong>torque and QA</strong>; Zone B opened at step 2. 1,460 to build, <strong>61/day</strong> needed for Aug 30.' },
      { title: 'GameChange pile short shipment', level: 'Critical', owner: 'Manuel Ramirez | Karina Mucino', note: 'Quantity and colour breakdown owed to GameChange since Jul 29, still not filed. Replacement posts <strong>several weeks</strong>. Pile delivery is no longer a closed item.' },
      { title: 'Modules running ahead of QA release', level: 'Critical', owner: 'Daniel Morilla | Maurin Moure', note: '<strong>~400 rows</strong> carry modules with no client acceptance. No QA cut since Jul 30 \u2014 release is three days stale. Damper change-out is the stated blocker; the combined racking+module inspection proposal is still unanswered.' },
      { title: 'LV cable pull \u2014 started, but nowhere near the rate', level: 'Critical', owner: 'Luis Romero | Clara Lopez | German Dominguez', note: 'THE PULL BEGAN Aug 1: <strong>478 lf in Area A1</strong>, the first measured footage on the project, against <strong>6,689 lf/day</strong> required for Sep 18. Boxes 110/419. Chemik still owes air arrival dates. German (COO) is calling for GreenSol crews to be put on cable and box mounting \u2014 6 labourers cannot carry this scope.' },
      { title: 'Substation \u2014 AB Power did not work the Saturday', level: 'Critical', owner: 'Axel Cano | Joshua Spalding | Luis Romero', note: '<strong>No AB crew on site Aug 1</strong>, raised directly by Luis. Piers hold 14/17, last 3 due Mon/Tue. Greensol rejected the steel delivery programme Jul 30 and the revised one is owed. After Aug 4 <strong>steel is the only outstanding item</strong> \u2014 time the escalation to that date.' },
      { title: 'MV coupling lead times', level: 'Critical', owner: 'Axel Cano | Procurement', note: '<strong>~40 weeks</strong> from every supplier contacted; emergency sourcing plan still owed. 138 MV terminations sit at zero. Aug 1: Enrique is reported as saying the binding items are the <strong>bus bar and connectors</strong> and that those arrive with margin \u2014 get that in writing with dates.' },
      { title: 'SCADA and field instrumentation', level: 'Critical', owner: 'Clara Lopez | Joshua Spalding', note: 'FAT can run without servers in early August, but field boxes and meteo stations do not ship until early September. Recovery plan requested, not received.' },
      { title: 'AB Power SET scope', level: 'Critical', owner: 'Axel Cano | Audelio Zuniga', note: 'No work plan and no material-delivery plan. Partial scope moving to Michael Power; Greensol self-buying the missing material list.' },
      { title: 'Piles \u2014 a whole Saturday with no record', level: 'High', owner: 'Audelio Zuniga | United | Latnovva', note: 'Aug 1: <strong>no pile figure from any crew</strong>. The required rate jumped <strong>446 to 535/day</strong> over the 5 working days left to Aug 7 purely because the calendar moved. Zone G 935 left; Zone B 36 from close since Jul 29 \u2014 under one shift.' },
      { title: 'QA cut is stale', level: 'High', owner: 'Daniel Morilla | Maurin Moure', note: 'No QA sheet filed Jul 31; pile sheet still headed 27/07. Zone G <strong>0 approved of 3,356</strong>; Area F quality documents still to be recovered.' },
      { title: 'Late and missing daily reports', level: 'High', owner: 'Manuel Ramirez | Audelio Zuniga | Luis Romero', note: 'Aug 1 was published <strong>three times</strong> as later blocks arrived: first as 780 modules and no tracker rows, then +40 rows from ECCS, then +1,000 modules from Brumont \u2014 both two days late. <strong>Only United and Latnovva have still filed nothing</strong>, and AB Power was absent. A missing report is not a zero-production day, and every late block rewrites a day the Owner has already seen.' },
      { title: 'ITS \u2014 fifth day at zero', level: 'Watch', owner: 'Angel Urbina | ITS', note: 'No bore and no segment closed for five days. MVHB-12 slowed deliberately to avoid a frack-out (correct practice) and <strong>committed to close Sunday</strong> \u2014 hold them to it. The plough is idle with <strong>10 segments open</strong>; split the crew Monday.' },
      { title: 'Chemik E-W cable routing', level: 'Watch', owner: 'Audelio Zuniga | Engineering', note: 'Pinch point on two bolts, contact with pile steel, interference under the charging module. Unistrut re-route with engineering. Install continues meanwhile \u2014 decide before standardizing.' },
      { title: 'Area G civil release to workfront', level: 'Watch', owner: 'Rosario Ruiz | Lounsbury', note: 'G released for piling and material distribution; G cut/fill starts after basins (83%). Internal roads target date Jul 31 passed with no closure filed.' }
    ]
  };

// ---- Jul 13 field-snapshot render patch (runs after main dashboard script) ----
(function () {
  function patchFieldResources() {
    try {
      var d = window.MURCH_DATA;
      if (!d || !d.todayFieldSnapshot) return;

      var section = document.getElementById('field-resources');
      if (section) {
        var headings = section.querySelectorAll('.section-heading.compact');
        if (headings[1]) {
          var eyebrow = headings[1].querySelector('.eyebrow');
          var h2 = headings[1].querySelector('h2');
          if (eyebrow) eyebrow.textContent = 'Field snapshot | On-site headcount board, ' + d.todayFieldSnapshot.date;
          if (h2) h2.textContent = 'Subcontractor and GreenSol team resources reported on site';
        }
        var ctxP = section.querySelectorAll('.chart-context')[1];
        if (ctxP) ctxP.textContent = 'Total headcount by crew from today’s on-site tracking board. GreenSol management and self-perform labor are combined into a single EPC-team bar; subcontractor crews are shown individually, largest to smallest. Scope breakdown: Trackers & Piling (97), Module Installation (51), Electrical & SET (14), Civil & Fencing (11), GreenSol EPC (19).';
      }

      var resourceTable = document.querySelector('.resource-table table');
      if (resourceTable && d.equipmentNotes) {
        var thead = resourceTable.querySelector('thead');
        var tbody = resourceTable.querySelector('tbody');
        if (thead) thead.innerHTML = '<tr><th>Company</th><th>Machines / equipment</th><th>Latest reported output</th></tr>';
        if (tbody) tbody.innerHTML = d.equipmentNotes.map(function (row) {
          return '<tr><td data-label="Company"><strong>' + row.contractor + '</strong></td>' +
            '<td data-label="Machines / equipment">' + row.equipment + '</td>' +
            '<td data-label="Latest reported output">' + row.output + '</td></tr>';
        }).join('');
      }

      var canvas = document.getElementById('resourceChart');
      if (!canvas) return;
      var snapshot = d.todayFieldSnapshot;
      var rows = snapshot.rows.slice().sort(function (a, b) { return b.people - a.people; });
      var catColors = { epc: '#0c5f43', tracker: '#0a3d2a', pile: '#2769a8', module: '#168a5b', electrical: '#8a4dbf', civil: '#b96f18', set: '#b53030', support: '#9aa39d' };
      var catLabels = { epc: 'GreenSol EPC team', tracker: 'Tracker installation', pile: 'Pile driving', module: 'Module installation', electrical: 'Electrical / SET', civil: 'Civil / fencing', set: 'Substation', support: 'Support / no crew' };
      var rowH = 30;
      var pad = { left: 190, top: 64, right: 70, bottom: 40 };
      var width = 1120;
      canvas.width = width;
      canvas.height = pad.top + rows.length * rowH + pad.bottom;
      canvas.style.height = 'auto';
      var ctx = canvas.getContext('2d');
      var chartW = width - pad.left - pad.right;
      ctx.clearRect(0, 0, width, canvas.height);
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, width, canvas.height);
      ctx.textAlign = 'left';
      ctx.fillStyle = '#18201f';
      ctx.font = '800 17px system-ui';
      ctx.fillText(snapshot.total + ' people on site — ' + snapshot.date, 4, 24);
      ctx.font = '700 12.5px system-ui';
      ctx.fillStyle = '#66716d';
      ctx.fillText('GreenSol EPC team + subcontractor crews, sorted by headcount', 4, 44);
      var max = 1;
      rows.forEach(function (r) { if (r.people > max) max = r.people; });
      var barMaxW = chartW - 46;
      rows.forEach(function (row, index) {
        var y = pad.top + index * rowH;
        var barW = row.people > 0 ? Math.max(3, (row.people / max) * barMaxW) : 0;
        ctx.textAlign = 'right';
        ctx.font = '750 13px system-ui';
        ctx.fillStyle = '#18201f';
        ctx.fillText(row.contractor, pad.left - 14, y + rowH / 2 + 4);
        ctx.fillStyle = '#eef2ef';
        ctx.fillRect(pad.left, y + 5, barMaxW, rowH - 12);
        ctx.fillStyle = row.people > 0 ? (catColors[row.category] || '#66716d') : '#c7cdc9';
        if (barW > 0) ctx.fillRect(pad.left, y + 5, barW, rowH - 12);
        ctx.textAlign = 'left';
        ctx.font = '800 13px system-ui';
        ctx.fillStyle = '#18201f';
        ctx.fillText(String(row.people), pad.left + Math.max(barW, 3) + 8, y + rowH / 2 + 4);
      });
      var legendCats = ['epc', 'tracker', 'pile', 'module', 'electrical', 'civil', 'set', 'support'];
      var legendY = canvas.height - 12;
      var legendX = pad.left;
      ctx.font = '700 11px system-ui';
      legendCats.forEach(function (cat) {
        var text = catLabels[cat];
        var textW = ctx.measureText(text).width;
        if (legendX + 24 + textW > width - pad.right) { legendX = pad.left; legendY += 16; }
        ctx.fillStyle = catColors[cat];
        ctx.fillRect(legendX, legendY - 9, 10, 10);
        ctx.fillStyle = '#66716d';
        ctx.textAlign = 'left';
        ctx.fillText(text, legendX + 14, legendY);
        legendX += 18 + textW + 14;
      });
    } catch (e) { /* non-fatal: keep default rendering */ }
  }
  if (document.readyState === 'complete') {
    patchFieldResources();
  } else {
    window.addEventListener('load', patchFieldResources);
  }
  window.addEventListener('resize', function () { window.setTimeout(patchFieldResources, 50); });
}());
