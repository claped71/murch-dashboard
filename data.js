'use strict';
// Murch dashboard data - update THIS file for daily changes
// CACHE BUSTER: Jul 30, 2026 (Thu) EOD - piles 27,834 (88.8%) / trackers 946 built (38.1%), 296 CLIENT-released / modules 40,147 (23.4%). Jul 30 field: ECCS 30 rows Zone E + 120 piles Zone E; WF panels 1,749 (E3/E4) + Brumont 1,409 (E1) = 3,158 modules; ECCS-elec 22 LBDs -> 78/419; WF racking 0 rows closed (EW). UNITED AND LATNOVVA FILED NO PRODUCTION LOG - 64 people on the board, output missing not zero. TRACKER RELEASE RE-BASED to the CLIENT-approved column (296), superseding 606. Modules: DELIVERY COMPLETE 171,470/171,470.
// Note: assetVersion, assetBase, asset(), and assetFallback() are defined in index.html's inline script
// Duplicate declarations have been removed to fix SyntaxError: Identifier 'assetVersion' has already been declared
window.MURCH_DATA = {
    control: {
      asOf: 'Jul 30, 2026',
      piles:    { installed: 27834, total: 31352, gate: '2026-07-28', gateLabel: 'Jul 28', required: 3518, capacity: null, name: 'Piles', unit: 'piles/day' },
      trackers: { installed: 946, released: 296, releasedGS: 492, total: 2486, gate: '2026-08-30', gateLabel: 'Aug 30', required: 59, capacity: 48, name: 'Trackers incl. purlins', unit: 'rows/day', wipRows: 130, wipEquivalent: 45.9, earnedEquivalent: 991.9, earnedPct: 39.9, earnedBasis: '5-step weighted ladder (adopted Jul 30, 2026)', releaseBasis: 'RELEASED = CLIENT-approved (Heelstone) per the Jul 30 QA sheet. Greensol-approved is carried separately as releasedGS.' },
      modules:  { installed: 40147, total: 171470, gate: '2026-09-06', gateLabel: 'Sep 6', required: 4104, capacity: null, name: 'Modules', unit: 'mod/day' },
      electrical: { installed: 0, total: 274720, gate: '2026-09-18', gateLabel: 'Sep 18', required: 6243, capacity: null, name: 'LV Electrical', unit: 'lf/day', earnedPct: 1.9, earnedBasis: 'weighted composite of the LV control line (cable 55%, boxes 10%, supports 10%, terminations 20%, testing 5%)' },
      mv:       { pct: 59.7, gate: '2026-09-14', gateLabel: 'Sep 14', name: 'MV Collection', unit: '%', earnedPct: 59.7, basis: 'weighted composite: plowing 45%, MV bores 25%, DC ducts 15%, MV terminations 15%' },
      set:      { pct: 23.7, gate: '2026-09-25', gateLabel: 'Sep 25', name: 'Substation (SET)', unit: '%', earnedPct: 23.7, planToDate: 44, basis: 'AB Powers tracker Jul 30: civil 73.1%, structural 10.8%, electrical 6.0%; piers 11 of 17, all 17 due Tue Aug 4' },
      mc:       { target: 'Sep 25', forecast: 'Sep 20-25', name: 'Mechanical Completion' }
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
    manpowerNote: 'Jul 30 site board = 253 (Jul 29: 248). ECCS 66 (53 trackers + 13 LV) - United 55 - Workforce 48 - GreenSol 20 (carried forward, card left blank on the board) - Brumont 19 - ITS 13 - Latnovva 9 - ABPower 8 - Dig It 5 - Topland 4 - Hi Tech 3 - Kalamazoo 2 - SWCA 1. Crane 2 is equipment, not headcount. PRODUCTION WAS FILED FOR ONLY ~135 OF THE 253 PEOPLE ON SITE: United (55) and Latnovva (9) were both present and filed no log, and ABPower, Dig It, Topland, Hi Tech, Kalamazoo and SWCA filed nothing at all. Missing output is a reporting failure, not a zero-production day.',
    contractorScore: [
      { date: 'Jul 30 Thu', contractor: 'ECCS', trade: 'Trackers', output: 30, resource: '53 people zone E - 30 rows closed at 100% plus 28 rows at step 3 of 5 (19.6 row-equivalents); also 120 piles in Zone E', perUnit: 30, criterion: 59, critLabel: '59 rows/day required for Aug 30 - back to 30 after the 35 of Jul 29, roughly half the required rate. Zone E now 409 rows built and STILL ZERO client-released.' },
      { date: 'Jul 30 Thu', contractor: 'Workforce', trade: 'Modules', output: 1749, resource: '29 people - zones E3 and E4', perUnit: 1749, criterion: 2000, critLabel: '2,000 mod/day target - 1,749, best Workforce day of the week. The whole output went into Zone E, which has no QA release of any kind.' },
      { date: 'Jul 30 Thu', contractor: 'Brumont', trade: 'Modules', output: 1409, resource: '14 people - zone E1 (board shows 19)', perUnit: 1409, criterion: 2000, critLabel: '2,000 mod/day target - 1,409. Board carries 19 Brumont people against 14 in the daily block; 5 unaccounted.' },
      { date: 'Jul 30 Thu', contractor: 'United', trade: 'Piles + Racking', output: 0, resource: 'NO PRODUCTION LOG FILED - 55 people on the site board', perUnit: 0, criterion: 500, critLabel: 'NOT A ZERO-PRODUCTION DAY - A REPORTING FAILURE. 55 people were on site per the headcount board and no output was reported for Zone G piles or the Zone F racking ramp. Chase the daily log.' },
      { date: 'Jul 30 Thu', contractor: 'Latnovva', trade: 'Piles', output: 0, resource: 'NO PRODUCTION LOG FILED - 9 people on the site board', perUnit: 0, criterion: 0, critLabel: 'NOT A ZERO-PRODUCTION DAY - A REPORTING FAILURE. 9 people on the board and nothing filed. Zone B remains 36 piles from close.' },
      { date: 'Jul 30 Thu', contractor: 'Workforce (racking)', trade: 'Trackers', output: 0, resource: '14 people - closing pending EW rows and distributing material in Zone B; 20 EW rows still at step 3 of 5 (14.0 row-equivalents)', perUnit: 0, criterion: 59, critLabel: 'THIRD CONSECUTIVE DAY WITH NO ROW CLOSED on the same 20 Zone EW rows. These rows sit at step 3 of 5 - dampers and actuators outstanding - and are the cheapest available movement on the tracker gate.' },
      { date: 'Jul 30 Thu', contractor: 'ECCS (electrical)', trade: 'LV', output: 22, resource: '12 field + 3 administrative - 22 LBDs installed (3 people); N-S supports 100% in A1/A3/A5, E-W supports 100% in A6/A7, messenger wire A3 completed to 100%, MW N-S laying 100%, MW E-W Area A5 50%', perUnit: 22, criterion: 0, critLabel: 'LBDs now 78 of 419 (18.6%), up from 56. Still ZERO measured cable footage against 6,243 lf/day required for Sep 18. All the support and messenger-wire completions earn nothing until the take-off carries a quantity for them.' },
      { date: 'Jul 30 Thu', contractor: 'ITS', trade: 'MV / HDD', output: 1, resource: '13 people - pipe fusing and drilling MVHB-12', perUnit: 1, criterion: 1, critLabel: 'One DC duct bore closed (DC now 3 of 14, 647 lf). MVHB-12 is deliberately being drilled slowly to avoid a frack-out and is estimated to close Sunday - correct practice, not lost production. MV bores hold 17/20 and plow segments hold 36/46 for a third day.' },
      { date: 'Jul 29 Wed', contractor: 'ECCS', trade: 'Trackers', output: 35, resource: '53 people zone E - 35 rows closed at 100% + 34 rows at step 3 of 5 (23.8 row-equivalents)', perUnit: 35, criterion: 58, critLabel: '58 rows/day required - best ECCS day since Jul 14 but still 40% under rate' },
      { date: 'Jul 29 Wed', contractor: 'United', trade: 'Piles + Racking', output: 361, resource: '55 people - 361 piles all Zone G (now 1,577 / 47.0%); racking: 82 rows at step 1 of 5 in Zone F = 12.3 row-equivalents', perUnit: 361, criterion: 500, critLabel: 'Hard Zone G ground caps the rate. First United racking quantity: 82 F rows opened at step 1 - no rows CLOSED, so zero credit against the gate' },
      { date: 'Jul 29 Wed', contractor: 'Latnovva', trade: 'Piles', output: 178, resource: '11 people, 2 rigs: 178 piles Zone B covering Jul 28-29 + 8 tension piles Zone A', perUnit: 89, criterion: 0, critLabel: 'Reported again one day after the Jul 28 closeout - the closeout still needs confirming. Zone B is 36 piles from complete' },
      { date: 'Jul 29 Wed', contractor: 'Workforce', trade: 'Modules', output: 1709, resource: '29 people - zone C', perUnit: 1709, criterion: 2000, critLabel: '2,000 mod/day target - 1,709; Zone C closed at its workbook scope' },
      { date: 'Jul 29 Wed', contractor: 'Brumont', trade: 'Modules', output: 1400, resource: '15 people - zones C and E', perUnit: 1400, criterion: 2000, critLabel: '2,000 mod/day target - 1,400 for the third day running' },
      { date: 'Jul 29 Wed', contractor: 'Workforce (racking)', trade: 'Trackers', output: 0, resource: '15 people - 20 Zone EW rows at step 3 of 5; no row closed', perUnit: 0, criterion: 58, critLabel: 'PERCENTAGE WENT BACKWARDS: the same 20 EW rows logged 95% on Jul 28 and 75% on Jul 29. RESOLVED: step reporting adopted Jul 30' },
      { date: 'Jul 29 Wed', contractor: 'ECCS (electrical)', trade: 'LV', output: 25, resource: '12 people - 25 LBDs (19 Area A + 6 Area C)', perUnit: 25, criterion: 0, critLabel: 'AREA A LBD SCOPE CLOSED (50/50). LBD control re-based at 56 of 419 on Jul 29, superseding 111/418' },
      { date: 'Jul 29 Wed', contractor: 'ITS', trade: 'MV / HDD', output: 0, resource: '13 people - MVHB-11 drilling + pipe fusing', perUnit: 0, criterion: 1, critLabel: 'No bore or plow segment closed; MV holds 17/20 and segments 36/46' }
    ],
    scope: [
      { title: 'EPC Management', metric: 'Turnkey', note: 'Project management, safety, QC, contractor deliverables, owner reporting, permitting support, and trade coordination through completion.' },
      { title: 'Civil and Environmental', metric: 'G released', note: 'Rosario Week 26 email says Area G is released for pile driving and material distribution; Area G cut/fill starts after basin completion.' },
      { title: 'Mechanical BOS', metric: '31,352 piles · 2,486 trackers', note: 'Pile driving (27,834 executed, 88.8%), GameChange SAT tracker assembly incl. purlins (946 done, 38.1% — 296 client-released, 492 Greensol-approved), and module placement (40,147 executed, 23.4%). D&F pre-drilling complete (7,694/7,694).' },
      { title: 'Electrical BOS', metric: 'ITS plowing on site', note: 'MV collection, HDD, plowing, grounding, DC string and combiner wiring, LV/AC works, inverter installation, SCADA, and testing. Joshua Spalding reported the ITS plowing machine arrived on June 19.' },
      { title: 'Procurement', metric: '171,470 modules DELIVERED', note: 'MODULE DELIVERY COMPLETE — the full 171,470-module quantity is on site with nothing pending. Tracker BOM also complete as of Jul 24 except 16 purple torque tubes (short shipment, site receipt not yet confirmed). Outstanding procurement is now Chemik LV hardware and the substation structural steel.' },
      { title: 'Commissioning', metric: 'PIS Oct 16', note: 'Cold commissioning, energization, tracker testing, inverter start-up, PR test path, punch list, COD, and substantial completion.' }
    ],
    photos: [
      { src: 'https://claped71.github.io/murch-dashboard/assets/recent/thumb-recent-45.jpg?v=20260729-inverterset', fallbackSrc: 'https://claped71.github.io/murch-dashboard/assets/recent/recent-45.jpg', date: 'July 29, 2026', title: 'Another inverter station craned onto its welded pile foundation', note: 'Jul 29, 13:25: a further prefabricated inverter/PCS station being lowered onto its welded steel pile foundation, with completed tracker rows and the delivery truck behind it. The protective shipping wrap stays on per the supplier marking until LV/MV termination. Confirmed since: the AB Powers matrix now shows 13 of 23 stations set and welded (A 01/02/03, C 05/06, E 04/09/11/12/13/14/15, F 23). Station 10-D is the only one with nothing started. ZERO stations are terminated.' },
      { src: 'https://claped71.github.io/murch-dashboard/assets/recent/thumb-recent-44.jpg?v=20260729-pierF5', fallbackSrc: 'https://claped71.github.io/murch-dashboard/assets/recent/recent-44.jpg', date: 'July 29, 2026', title: 'Substation pier F5 — anchor-bolt template set and backfill under way', note: 'Geotagged Jul 29, 19:04 (N 42° 12\' 37", W 86° 0\' 57", Lawrence MI): pier F5 (4 of 4 in its group) with the anchor-bolt template bolted down and the excavator backfilling around the completed pier, work continuing into the evening. Dig It (AB Power sub) under Axel Cano holds the 3-4 piers/day plan; the pier front reached 11 of 17 on Jul 30, with all 17 planned complete by Tuesday Aug 4. Note the yellow gas-line markers running the length of the trench.' },
      { src: 'https://claped71.github.io/murch-dashboard/assets/recent/thumb-recent-43.jpg?v=20260728-inverters', fallbackSrc: 'https://claped71.github.io/murch-dashboard/assets/recent/recent-43.jpg', date: 'July 28, 2026', title: 'Inverter stations SET — Zones A and C complete (now 13 of 23 project-wide)', note: 'Geotagged Jul 28, 10:06 (N 42° 12\' 27", W 86° 2\' 4", Lawrence MI): Inverter station 02 set on its pile foundation between completed module rows in Zone A. All Zone A stations were installed Tue morning (01, 02, 03 photographed 09:06-10:40) and Zone C closed the same day — Inverter 05 at 11:55 and Inverter 06 at 14:36 (crane still on the pad). Zones A and C inverter stations were the first complete; the project now stands at 13 of 23 set and welded — all pending LV and MV terminations; protective covers stay on per the supplier marking until termination work.' },
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
      { area: '<u>Tracker assembly & QA release</u><span style="background:#b53030;color:#fff;padding:1px 6px;border-radius:3px;font-size:10px;font-weight:700;margin-left:6px">CRITICAL</span>',
        target: '946 / 2,486 done (38.1%) — 296 CLIENT-released, 492 Greensol-approved. ECCS 30 Jul 30 + 28 rows at step 3; United opened 82 F rows at 20%; 20 EW rows at 75%. Week ask >= 330 rows.',
        minimum: '>= 58/day for Aug 30 (running 35 — best since Jul 14, still 40% short).',
        gate: 'QA release STALLED at 606 while 310 built rows wait — the release backlog, not the build rate, now caps the module front. 136 rows open in WIP (50.1 equiv, step basis) — convert E and EW first (both at step 3 of 5).',
        owners: 'ECCS \u00b7 Workforce \u00b7 United | Daniel Morilla | Audelio Zuniga' },
      { area: '<u>Pile production — B / F / G</u><span style="background:#b53030;color:#fff;padding:1px 6px;border-radius:3px;font-size:10px;font-weight:700;margin-left:6px">CRITICAL</span>',
        target: '27,834 / 31,352 (88.8%) — 3,518 left. Close B (36), F (11) and E (224); G 400+/day on hard ground (1,779); D opens ~Aug 5-7.',
        minimum: '>= 455/day from Jul 30 holds ~Aug 7 (Jul 29: 539 — FIRST day over the required rate since the weather stop).',
        gate: 'Pile stock buffer down to 629 (from 1,168) — receipts must resume. Zone G change-order signature still owed; Latnovva back with 2 rigs in B.',
        owners: 'United | Audelio Zuniga | Manuel Ramirez' },
      { area: '<u>Module installation ramp</u><span style="background:#b53030;color:#fff;padding:1px 6px;border-radius:3px;font-size:10px;font-weight:700;margin-left:6px">CRITICAL</span>',
        target: '40,147 / 171,470 (23.4%) — Jul 30: 3,158. Zone C closed on its workbook scope; Zone E front opened. Week ask holds: >= 23,400; SATURDAYS MANDATORY (Jose).',
        minimum: '>= 4,104/day for Sep 6 — 43 filed installers at 73.4 mod each; need ~56. Hold Workforce at 29+ people; a third crew is the only path to the rate.',
        gate: 'QA-released rows: only 73 released in E (~5,700 modules) against 379 built — under a 2-day buffer once C is done.',
        owners: 'Workforce / Brumont | Audelio Zuniga | Daniel Morilla' },
      { area: '<u>LV electrical — START</u><span style="background:#b53030;color:#fff;padding:1px 6px;border-radius:3px;font-size:10px;font-weight:700;margin-left:6px">CRITICAL</span>',
        target: 'Jul 29: 25 LBDs (19 A + 6 C) -> AREA A LBDs COMPLETE (50/50); cumulative now 78/419 (18.6%) after +22 on Jul 30. Supports: N-S 100% in A1/A3/A5, E-W 100% in A6/A7; messenger wire A3 70%. NO cable footage logged on the Jul 29 pull start. GOAL: Area A LV-cabled for the Mike/client visit.',
        minimum: '>= 6,243 lf/day from Jul 30 to hold Sep 18 (still 0 lf on the clock).',
        gate: 'AIR CONFIRMED to Chemik Jul 28 — arrival dates owed (fabrication done next week). Crew stand-up + E-W routing review (Unistrut) before standardizing.',
        owners: 'ECCS \u00b7 East Carolina \u00b7 Self-Perform | Luis Romero | Clara Lopez' },
      { area: '<u>GameChange deliveries</u>',
        target: 'BOM confirmed COMPLETE minus 16 purple tubes (Shreeya, Jul 27) — due Wed Jul 29; no site receipt reported. Pile stock buffer is the live delivery issue: 629 units.',
        minimum: 'Claim PL-3295-094-HT (1 purple bundle) unanswered in the Jul 27 reply; re-sign corrected BOL + upload ~21 missing PODs.',
        gate: 'None on material — crew ramp caps assembly, not tubes.',
        owners: 'GameChange (Shreeya Devkota) | Manuel Ramirez | Karina Mucino' },
      { area: '<u>SET & inverter foundations</u>',
        target: 'SET 23.7% (AB Powers Jul 30); PIERS 11/17, all 17 due Tue Aug 4 — backfilled Jul 29; all 17 this week. Another station craned onto its piers Jul 29 (no count filed — tally holds 5/23). Station pile-sets 21/23 — close 10-D and 16-F.',
        minimum: 'All 23 foundations ready before the end-July inverter arrivals.',
        gate: 'Breakers + structural steel (in fabrication); Michael Power scope transfer.',
        owners: 'AB Power / Michael Power / Dig It | Axel Cano | Joshua Spalding' },
      { area: '<u>MV plowing & HDD</u>',
        target: 'MV bores 17/20 \u00b7 segments 36/46 \u00b7 DC ducts 2/14 — MVHB-11 open two days, 0 segments Jul 28-29; close >= 2 MV bores + 5 segments this week.',
        minimum: '>= 1 bore + 1 segment/day.',
        gate: 'Wetland access — EGLE ruled the last bores stay bores.',
        owners: 'ITS | Angel Urbina | Joshua Spalding' },
      { area: '<u>Civil Area G & roads</u>',
        target: 'Internal roads 72% — FINISH by the Jul 31 target; G basins 83% then start G cut/fill; fence 95%.',
        minimum: 'Daily grading in Area G after basin closeout.',
        gate: 'Basin completion controls the G cut/fill start.',
        owners: 'Lounsbury / Hurricane / Topland | Rosario Ruiz | Audelio Zuniga' }
    ],
    civilKpis: [
      { title: 'Civil field progress', metric: 'Week 26', note: 'Rosario Ruiz Week 26 email dated July 3 and sent July 6 controls the latest civil workfront note.' },
      { title: 'Area G release', metric: 'Released', note: 'Rosario reports that once Area G basins are finished, cut/fill will start there; Area G is also released for pile driving and material distribution.' },
      { title: 'SET tracker', metric: '23.7% overall', note: 'Jul 30 AB Powers tracker: overall 23.7% (civil 73.1%, structural 10.8%, electrical 6.0%) — piers 11 of 17 complete; pier F5 anchor-bolt template set and backfilled Jul 29 evening (Dig It). Control building on site since Jul 7. Jul 12 (Sun): transformer-foundation containment berm complete at the substation. Jul 12: all 18 inverter stations available on site have their base plates welded.' }
    ],
    civilActivities: [
      { activity: 'Earthworks cut / fill', company: 'Lounsbury', done: 100, remaining: 0, status: 'Complete', note: 'Rosario Jul 23: Earthworks cut/fill 100% COMPLETE (Lounsbury; Apr 1 – Jul 17). Area G cut/fill starts after the Area G basins are finished.' },
      { activity: 'Perimeter fence', company: 'Hurricane', done: 95, remaining: 5, status: 'On Track', note: 'Rosario Jul 23: G-SET perimeter fence 95% (Hurricane; started Apr 2, end TBD) — Areas A–F 100% complete, only the Zone G remainder and gates left.' },
      { activity: 'Sediment basins / environmental controls', company: 'Lounsbury / ECS', done: 83, remaining: 17, status: 'On Track', note: 'Rosario Jul 23: Sediment basins 83% (Lounsbury; Mar 26 – target Jul 24) — up from 47%. Area G basins must finish before Area G cut/fill starts.' },
      { activity: 'Internal roads', company: 'Topland', done: 72, remaining: 28, status: 'Active', note: 'Rosario Jul 23: Internal roads 72% (Topland; May 26 – target Jul 31) — up from 65.9%. Continued recovery from the 35% Week 24 baseline; roads easing as the logistics constraint.' },
      { activity: 'PS foundations', company: 'United', done: 86, remaining: 14, status: 'Active', note: 'Rosario Jul 23: PS foundations 86% (United; Jun 8 – target Jul 24). Jul 22: 22 of 23 inverter foundations complete, 1 remaining (Jul 17 workbook had 190 of 230 inverter piles). WELDING PROCEDURE received Jul 21 (Daniel Morilla) — clears qualified welding to proceed.' },
      { activity: 'Foundation SET', company: 'AB Power', done: 21.7, remaining: 76.3, status: 'Active', note: 'Jul 30 AB Powers tracker: overall 23.7%; civil 73.1%, structural 10.8%, electrical 6.0%; PIERS 11 OF 17, all 17 due Tue Aug 4 (Axel, Jul 28). Containment berm and transformer foundation complete Jul 12. PIERS: 6 of 17 COMPLETE incl. concrete (Jul 24 — 3 added Jul 23, 1 more Jul 24), by Dig It (AB Power sub) under Axel Cano; plan holds 3-4/day. MILESTONE Jul 24: MAIN POWER TRANSFORMER set on its foundation. AB Power SET scope at risk — no work or delivery plan (Jul 17 review); partial scope moving to Michael Power.' }
    ],
    contractors: [
      { name: 'Latnovva — BACK ON SITE', scope: 14168, installed: 14132, remaining: 36, done: 99.7, zones: 'A, C, EW complete + Zone B closeout (+ B/E shares)', status: 'Active', note: 'REVERSAL: declared finished Jul 28, then reported again Jul 29 — 11 people and 2 rigs driving 178 piles in Zone B over Jul 28-29, plus 8 tension piles in Zone A. Cumulative 14,132. Zone B is 36 piles from complete; the Jul 28 closeout and the scope transfer to United both need re-confirming.' },
      { name: 'ECCS / Area E control', scope: 4434, installed: 4358, remaining: 76, done: 98.3, zones: 'Area E shared tracker workfront', status: 'On Track', note: "Area-based control allocation used only so dashboard totals reconcile with Audelio's July 6 official installed-production basis." },
      { name: 'United', scope: 12750, installed: 9224, remaining: 3526, done: 72.3, zones: 'Zones D + F + G + the non-ECCS Zone E remainder', status: 'Active', note: 'Jul 29: 55 people (up from 44), 361 piles all Zone G -> 9,224. Racking crew opened 82 Zone F rows at 20% — first United tracker quantity, no rows closed yet. Carries 3,526 remaining piles: G 1,779, D 1,468, E 268 and the last 11 in F. Zone D opens ~Aug 5-7.' },
      { name: 'Project Total', scope: 31352, installed: 27714, remaining: 3638, done: 88.4, zones: "All zones | Construction Manager report", status: 'Critical', note: "Total executed: 27,834 (88.8%) — Jul 28 workbook roll-up 26,736 + 1,098 field-reported over Jul 28-30. Jul 30 added only ECCS 120 in Zone E: UNITED AND LATNOVVA FILED NO LOG despite 64 people between them on the site board, so this total is short by whatever those two crews drove. 3,518 remain." }
    ],
    zones: [
      { zone: 'Zone A', contractor: 'ECCS (assembly complete)', scope: 311, installed: 311, released: 296, releasedGS: 310, remaining: 0, done: 100.0, wipRows: 0, wipStep: null, wipEquiv: 0, earnedPct: 100.0, status: 'Complete', note: 'Assembly complete. Greensol has approved 310 of 311; the CLIENT has accepted 296 (95.5%). Zone A is the only zone carrying any client acceptance at all.' },
      { zone: 'Zone C', contractor: 'ECCS (assembly complete)', scope: 227, installed: 226, released: 0, releasedGS: 182, remaining: 1, done: 99.6, wipRows: 0, wipStep: null, wipEquiv: 0, earnedPct: 99.6, status: 'At Risk', note: 'RE-BASED Jul 30: the client column on the QA sheet reads ZERO for Zone C. Greensol has approved 182 of 227; Heelstone has accepted none. Zone C is fully moduled (14,950) - so all 227 rows carry modules with no client acceptance, and 45 of them have no Greensol release either. Damper change-out is the stated blocker.' },
      { zone: 'Zone E', contractor: 'ECCS', scope: 674, installed: 409, released: 0, releasedGS: 0, remaining: 265, done: 60.7, wipRows: 28, wipStep: 3, wipEquiv: 19.6, earnedPct: 63.6, status: 'Critical', note: 'Jul 30: 30 rows closed plus 28 at step 3 of 5, against the 59/day requirement. RELEASE IS ZERO — the Jul 30 QA sheet shows no Greensol and no client approval anywhere in Zone E, yet 409 rows are built and the ENTIRE Jul 30 module output (3,158 across E1/E3/E4) went in here. About 81 rows in E now carry modules with no release of any kind.' },
      { zone: 'Zone EW', contractor: 'Workforce (racking)', scope: 67, installed: 0, released: 0, releasedGS: 0, remaining: 67, done: 0, wipRows: 20, wipStep: 3, wipEquiv: 14.0, earnedPct: 20.9, status: 'Critical', note: 'THIRD CONSECUTIVE DAY WITH NO ROW CLOSED. The same 20 rows have sat at step 3 of 5 since Jul 28 — dampers and actuators outstanding. 14 people on Jul 30, on closeout and Zone B material distribution. These are the cheapest rows on the board to convert.' },
      { zone: 'Zone F', contractor: 'United (racking ramp)', scope: 595, installed: 0, released: 0, releasedGS: 0, remaining: 595, done: 0, wipRows: 82, wipStep: 1, wipEquiv: 12.3, earnedPct: 2.1, status: 'Mobilizing', note: 'Carried forward from Jul 29 — 82 rows at step 1 of 5. UNITED FILED NO Jul 30 LOG despite 55 people on the site board, so no movement can be credited either way.' },
      { zone: 'Zone B', contractor: 'United (transferred)', scope: 220, installed: 0, released: 0, remaining: 220, done: 0, wipRows: 0, wipStep: null, wipEquiv: 0, earnedPct: 0, status: 'Pending', note: 'Piles now 98.7% (only 36 left after Latnovva returned) — the zone is effectively released for assembly, but no tracker crew is assigned to it yet. Sequenced behind the F ramp.' },
      { zone: 'Zone G', contractor: 'United', scope: 256, installed: 0, released: 0, remaining: 256, done: 0, wipRows: 0, wipStep: null, wipEquiv: 0, earnedPct: 0, status: 'Pending', note: 'Piling front active (47.0%, hard ground) — tracker assembly follows pile completion by block.' },
      { zone: 'Zone D', contractor: 'United', scope: 136, installed: 0, released: 0, remaining: 136, done: 0, wipRows: 0, wipStep: null, wipEquiv: 0, earnedPct: 0, status: 'Pending', note: 'Piling opens ~Aug 5-7 (slab demolition finished); tracker assembly follows.' },
      { zone: 'TOTAL', contractor: 'All tracker crews', scope: 2486, installed: 946, released: 296, releasedGS: 492, remaining: 1540, done: 38.1, wipRows: 130, wipStep: null, wipEquiv: 45.9, earnedPct: 39.9, status: 'Critical', note: '946 built (38.1%) · RELEASE RE-BASED Jul 30 to the CLIENT-approved column: 296 accepted by Heelstone (11.9%), 492 approved by Greensol, 650 built rows with no client acceptance · 130 rows in progress worth 45.9 row-equivalents -> 991.9 earned (39.9%) · 59 completed rows/day required for Aug 30.' }
    ],

    pilesByZone: [
      { zone: 'Zone A', contractor: 'Latnovva', scope: 3834, installed: 3834, remaining: 0, done: 100.0, status: 'Complete', note: 'Zone complete. Jul 29: 8 tension piles driven here — tension piles sit outside the 31,352 tracker-pile scope.' },
      { zone: 'Zone C', contractor: 'Latnovva', scope: 2946, installed: 2946, remaining: 0, done: 100.0, status: 'Complete', note: 'Zone complete.' },
      { zone: 'Zone EW', contractor: 'Latnovva', scope: 846, installed: 846, remaining: 0, done: 100.0, status: 'Complete', note: 'Zone complete.' },
      { zone: 'Zone F', contractor: 'United', scope: 7658, installed: 7647, remaining: 11, done: 99.9, status: 'Active', note: 'Only 11 piles from zone close (Jul 28 workbook reconciliation).' },
      { zone: 'Zone E', contractor: 'ECCS / United', scope: 8456, installed: 8232, remaining: 224, done: 97.4, status: 'Active', note: 'Jul 30: +120 (ECCS) — 224 to close.' },
      { zone: 'Zone B', contractor: 'Latnovva', scope: 2788, installed: 2752, remaining: 36, done: 98.7, status: 'Active', note: 'Jul 29: +178 (Latnovva back on site, 2 rigs, covers Jul 28-29). Only 36 piles from zone close.' },
      { zone: 'Zone G', contractor: 'United', scope: 3356, installed: 1577, remaining: 1779, done: 47.0, status: 'Critical', note: 'Jul 29: +361 (55 people, up from 44). Ground VERY HARD — as Zone F at its start — capping the rate. Signed ChO still owed for full release.' },
      { zone: 'Zone D', contractor: 'United', scope: 1468, installed: 0, remaining: 1468, done: 0, status: 'Ready', note: 'Slab demolition FINISHED (Jul 28) — piling opens ~Aug 5-7.' },
      { zone: 'TOTAL', contractor: 'All pile crews', scope: 31352, installed: 27834, remaining: 3518, done: 88.8, status: 'Critical', note: '27,834 executed (88.8%) — ONLY ECCS reported piles on Jul 30 (+120 Zone E). United and Latnovva filed no log despite 64 people on the site board, so the Zone G and Zone B fronts have no Jul 30 figure. 3,518 remain; ~500/day over the 7 working days to Aug 7.' }
    ],
    modulesByZone: [
      { zone: 'Zone A', contractor: 'Workforce', scope: 22360, installed: 19860, remaining: 2500, done: 88.8, status: 'Active', note: 'Workbook-mapped 19,860 — closing behind the released tracker rows.' },
      { zone: 'Zone C', contractor: 'Workforce / Brumont', scope: 14950, installed: 14950, remaining: 0, done: 100.0, status: 'Complete', note: 'Field-logged modules reached the workbook zone scope on Jul 29 — C treated as closed. The C/E split of the Jul 29 output (WF 1,709 zone C + Brumont 1,400 zones C and E) is an ESTIMATE: 930 booked to C to close it, 2,179 to E. Confirm with the next workbook cut.' },
      { zone: 'Zone E', contractor: 'Workforce + Brumont', scope: 52234, installed: 5337, remaining: 46897, done: 10.2, status: 'Critical', note: 'Jul 30: +3,158 (Workforce 1,749 in E3/E4 + Brumont 1,409 in E1), the entire day\'s module output. ZERO tracker rows in Zone E are released by Greensol or by the client, so all ~81 rows now carrying modules here are unreleased.' },
      { zone: 'Zone F', contractor: 'Follows released rows', scope: 44642, installed: 0, remaining: 44642, done: 0, status: 'Pending', note: 'Opens behind the United racking ramp.' },
      { zone: 'Zone D', contractor: 'Sequenced', scope: 14898, installed: 0, remaining: 14898, done: 0, status: 'Pending', note: 'Follows Zone D piling (~Aug 5-7) and tracker assembly.' },
      { zone: 'Zone G', contractor: 'Sequenced', scope: 14924, installed: 0, remaining: 14924, done: 0, status: 'Pending', note: 'Follows the Zone G pile (47.0%) and tracker fronts.' },
      { zone: 'Zone B', contractor: 'Sequenced', scope: 7436, installed: 0, remaining: 7436, done: 0, status: 'Pending', note: 'Follows Zone B tracker assembly.' },
      { zone: 'Zone EW', contractor: 'Sequenced', scope: 26, installed: 0, remaining: 26, done: 0, status: 'Pending', note: 'Workbook carries EW module scope within Zone E; 26-module residual vs the 171,470 project total.' },
      { zone: 'TOTAL', contractor: 'All module crews', scope: 171470, installed: 40147, remaining: 131323, done: 23.4, status: 'Critical', note: '40,147 executed (23.4%) — 4,104/day over the 32 working days to Sep 6. Jul 30 was 3,158, all of it in unreleased Zone E rows.' }
    ],
    mvProgress: {
      asOf: 'Jul 30, 2026',
      basis: 'Weighted composite of the MV collection scope by labour content',
      compositePct: 59.7,
      gateLabel: 'Sep 14 — pre-commissioning start',
      components: [
        { component: 'MV cable plowing', scope: '46 segments', done: 36, pct: 78.3, weight: 45, contribution: 35.22, note: '120,738 ft installed. THIRD straight day with no segment closed — 10 pending, crews on the bores.' },
        { component: 'MV HDD bores', scope: '20 bores', done: 17, pct: 85.0, weight: 25, contribution: 21.25, note: '5,162 ft. MVHB-12 now in progress and estimated to close Sunday — ITS have deliberately slowed it to avoid a frack-out, which is correct practice on a wetland crossing. 2 pending after it. EGLE ruled the last bores stay bores.' },
        { component: 'DC duct bores', scope: '14 locations', done: 3, pct: 21.4, weight: 15, contribution: 3.21, note: '647 lf — one bore closed on Jul 30 (+256 lf). 11 pending. Second drill assigned here since Jul 24.' },
        { component: 'MV terminations', scope: '138 connections', done: 0, pct: 0, weight: 15, contribution: 0, note: 'Follows inverter and substation readiness. MV couplings carry a ~40-week lead — emergency plan still owed.' }
      ],
      note: 'MV was previously invisible in the project roll-up: the gate strip carried piles, trackers, modules and LV only, so 36 plowed segments and 17 completed bores earned nothing at project level. At 59.7% MV is the most advanced electrical front by some distance. The exposure is the 138 terminations at zero and the coupling lead time.'
    },
    setProgress: {
      asOf: 'Jul 30, 2026 (AB Powers tracker)',
      compositePct: 23.7,
      planToDatePct: 44,
      gateLabel: 'Sep 25 — Mechanical Completion',
      components: [
        { component: 'Civil', pct: 73.1, note: 'Up 7.5 points on Jul 30. Transformer foundation and containment berm complete Jul 12; PIERS 11 OF 17, with all 17 planned complete by Tuesday Aug 4.' },
        { component: 'Structural', pct: 10.8, note: 'Structural steel still in fabrication — now a controlling item.' },
        { component: 'Electrical', pct: 6.0, note: 'Breakers awaited; several committed dates fall after the gate.' }
      ],
      milestones: 'Control building set Jul 7 · containment berm Jul 12 · MAIN POWER TRANSFORMER set Jul 24 · PIERS 11 OF 17 (64.7%) as of Jul 30, all 17 due Tue Aug 4.',
      note: 'Still the single worst variance on the project: 23.7% executed against roughly 44% plan-to-date on the linear baseline to Sep 25. Civil moved 65.6 to 73.1 on the pier run while STRUCTURAL DID NOT MOVE AT ALL - that is the whole substation story. Once all 17 piers close on Aug 4 every substation foundation is finished and the only outstanding item is the steel, whose delivery programme Greensol formally rejected on Jul 30 as incompatible with an operational substation in the third week of September.'
    },
    electricalTotal: {
      asOf: 'Jul 30, 2026',
      basis: 'Weighted composite of the four electrical fronts by labour content',
      gatePct: 16.7,
      earnedPct: 23.3,
      components: [
        { name: 'LV / DC installation', weight: 45, gate: 0.0, earned: 1.9, note: '274,720 lf of cable, 419 boxes. 78 boxes mounted (+22 on Jul 30); still zero measured cable footage.' },
        { name: 'MV collection', weight: 22, gate: 59.7, earned: 59.7, note: 'Plowing 36/46, MV bores 17/20, DC ducts 3/14, terminations 0/138.' },
        { name: 'Inverter stations', weight: 18, gate: 0.0, earned: 32.2, note: '13 of 23 set and welded per the AB Powers matrix; ZERO terminated, which is the gate measure.' },
        { name: 'Substation (SET)', weight: 15, gate: 23.7, earned: 23.7, note: 'Civil 73.1%, structural 10.8%, electrical 6.0%; piers 11 of 17.' }
      ],
      note: 'One electrical total across all four fronts: 16.7% on completed units, 23.3% including verified work in progress. MV carries almost the whole figure — strip it out and the other three fronts together stand at about 3 points of the 100. This is the number to watch against the Oct 16 interconnection date.'
    },
    projectTotal: {
      asOf: 'Jul 30, 2026',
      gatePct: 50.4,
      earnedPct: 51.7,
      weights: { piles: 28, trackers: 22, modules: 26, electrical: 14, civil: 10 },
      components: [
        { name: 'Piles', weight: 28, gate: 88.8, earned: 88.8 },
        { name: 'Trackers', weight: 22, gate: 38.1, earned: 39.9 },
        { name: 'Modules', weight: 26, gate: 23.4, earned: 23.4 },
        { name: 'Electrical (LV + MV + inverters + SET)', weight: 14, gate: 16.7, earned: 23.3 },
        { name: 'Civil (excl. substation)', weight: 10, gate: 87.2, earned: 87.2 }
      ],
      note: 'Weighted physical completion, same weighting as the client report so the two documents always agree. RE-BASED Jul 30: the electrical component now covers all four electrical fronts (LV/DC, MV collection, inverter stations, substation) instead of LV cable alone, and civil excludes the substation to avoid double counting it — civil is now the mean of the five remaining civil activities (87.2%). The total moved from 46.1% to 49.4% on Jul 30 because MV collection was not counted anywhere in the previous roll-up; the Jul 30 production day and the electrical refresh take it to 50.4% / 51.7%.'
    },
    earnedMethod: {
      adopted: 'Jul 30, 2026',
      title: 'How progress is assigned to multi-step scopes',
      rule: 'THREE INSTRUMENTS, chosen by the shape of the scope — not one method forced onto everything. (1) ATOMIC UNITS — piles and modules. A pile is driven or it is not; a module is placed or it is not. Count units. NO ladder: adding one would only create room for optimism on work that has no intermediate state worth crediting. (2) MULTI-STEP SINGLE DELIVERABLES — tracker rows and inverter stations. One unit passes through several verifiable physical states before it is usable, and the intermediate states carry real installed material and labour. Use a FIXED WEIGHTED STEP LADDER and report the step reached, never an estimated percentage. (3) SCOPES ALREADY BROKEN INTO COMPONENT LINES — LV/DC. The take-off already measures cable, box mounting, supports, terminations and testing separately in their own units, so a ladder would double count. Instead WEIGHT THE COMPONENT LINES by labour content into one composite percentage. In every case the completion gate keeps counting finished units only; the earned measure sits beside it and never moves a date.',
      scopes: [
        { scope: 'Piles', instrument: 'Atomic unit count', gate: '27,834 / 31,352 = 88.8%', earned: 'n/a — no intermediate state', note: 'Driven or not driven. Pull tests and inspection are QA gates, not construction steps.' },
        { scope: 'Modules', instrument: 'Atomic unit count', gate: '40,147 / 171,470 = 23.4%', earned: 'n/a — no intermediate state', note: 'Placed and torqued or not placed.' },
        { scope: 'Tracker rows', instrument: '5-step weighted ladder', gate: '946 / 2,486 = 38.1%', earned: '991.9 equivalents = 39.9%', note: 'See trackerWip. 136 rows open across three zones.' },
        { scope: 'Inverter stations', instrument: '5-step weighted ladder', gate: '0 of 23 terminated = 0.0%', earned: '7.40 equivalents = 32.2% (13 of 23 set and welded)', note: 'See inverterProgress. Delivery and setting carry real value ahead of terminations.' },
        { scope: 'LV / DC', instrument: 'Weighted component composite', gate: '0 / 274,720 lf = 0.0%', earned: '1.3% (up to 3.8% once supports are quantified)', note: 'See lvComposite. Cable-only denomination hides the box and support work — but the composite confirms LV has barely started.' }
      ]
    },
    inverterProgress: {
      asOf: 'Jul 30, 2026',
      basis: 'AB Powers inverter matrix (authoritative) mapped onto the 5-step weighted ladder',
      totalStations: 23,
      stationsSet: 13,
      gatePct: 0.0,
      equivalents: 7.40,
      earnedPct: 32.2,
      matrixPct: 72.8,
      steps: [
        { step: 1, name: 'Foundation ready \u2014 station piles driven and base plates welded', weight: 10, cumulative: 10 },
        { step: 2, name: 'Station delivered and staged on site', weight: 15, cumulative: 25 },
        { step: 3, name: 'Station set and anchored on its foundation', weight: 25, cumulative: 50 },
        { step: 4, name: 'LV / DC terminations complete', weight: 25, cumulative: 75 },
        { step: 5, name: 'MV terminations, grounding and megger checks complete', weight: 25, cumulative: 100 }
      ],
      standing: [
        { step: 3, label: 'Set and anchored, inverter welded', stations: 13, detail: 'A 01/02/03 \u00b7 C 05/06 \u00b7 E 04/09/11/12/13/14/15 \u00b7 F 23 \u2014 serials logged on the AB Powers matrix', pct: 50, equiv: 6.50 },
        { step: 1, label: 'Piling and welding plate done, inverter not unloaded', stations: 6, detail: 'B 07/08 \u00b7 F 16/18/21/22 \u2014 matrix shows these at 50% of its own four-step scale', pct: 10, equiv: 0.60 },
        { step: 1, label: 'Piling done, welding plate pending', stations: 3, detail: 'G 19/20 \u00b7 F 17 \u2014 matrix 25%', pct: 10, equiv: 0.30 },
        { step: 0, label: 'Nothing started', stations: 1, detail: 'Station 10-D \u2014 Area D has not opened for piling', pct: 0, equiv: 0 }
      ],
      note: 'THE AB POWERS MATRIX IS NOW THE SOURCE for this scope and it reconciles exactly to the field count of 13 of 23 stations set. Read its 72.8% carefully: the matrix runs piling / welding plate / inverter unloading / inverter welding at 25 points each, so its 100% means MECHANICALLY SET AND WELDED, which is only step 3 of the five that make a station usable plant. Mapped onto the full ladder the same evidence gives 7.40 station-equivalents, 32.2%. THE GATE MEASURE IS STATIONS FULLY TERMINATED AND THAT NUMBER IS STILL ZERO of 23, with Mechanical Completion on Sep 25. Movement since Jul 29 is real and large \u2014 5 set to 13 set \u2014 but not one termination has started.',
      dataToConfirm: 'The matrix does not report a staged/delivered state, so the 9 stations short of set are credited at foundation-only. Confirm with Axel Cano how many of them are physically on site: each one that is staged rather than merely founded adds 5 points of a station-equivalent. The Jul 12 count of 18 staged is stale and must not be reused.'
    },
    lvComposite: {
      asOf: 'Jul 30, 2026',
      basis: 'Weighted composite of the LV control line by labour content (adopted Jul 30, 2026)',
      gateUnit: 'lf of cable',
      gateInstalled: 0,
      gateTotal: 274720,
      gatePct: 0.0,
      earnedPctFirm: 1.9,
      earnedPctWithSupports: 3.8,
      components: [
        { component: 'Homerun cable (inverter feeders)', scope: '229,435 lf', weight: 46, executedPct: 0, contribution: 0, note: 'Bulk of the pull. Nothing placed — the Jul 29 start produced no measured footage.' },
        { component: 'Chemik trunk cable', scope: '40,313 lf', weight: 8, executedPct: 0, contribution: 0, note: 'Material-gated on the air shipments; Chemik still owes arrival dates.' },
        { component: 'Harness (3/2/1-string)', scope: '4,972 lf', weight: 1, executedPct: 0, contribution: 0, note: 'Only 18% of the 3-string harness has shipped.' },
        { component: 'LBD / box mounting', scope: '419 boxes', weight: 10, executedPct: 18.6, contribution: 1.86, note: '78 boxes mounted — 22 added on Jul 30 by a 3-person crew, on top of the 56 in the Jul 29 ECCS control sheet (Area A complete at 50/50). The area and inverter allocation of the Jul 30 additions has not been filed. The only LV component with real progress.' },
        { component: 'Aerial supports and messenger wire', scope: 'QUANTITY NOT YET IN THE TAKE-OFF', weight: 10, executedPct: null, contribution: null, note: 'Jul 30: N-S supports 100% in A1/A3/A5, E-W supports 100% in A6/A7, messenger wire A3 completed to 100%, MW N-S laying 100%, MW E-W Area A5 at 50%. ALL OF IT EARNS NOTHING because the take-off carries no unit quantity for this component. Owed by Luis Romero / Clara Lopez, and now the cheapest available correction on the whole electrical total. NOTE the sub-area labels are not stable between daily reports (A2/A4 on Jul 29, A6/A7 on Jul 30) — a fixed area list with a denominator is needed before any support percentage is published.' },
        { component: 'Box connections / terminations', scope: '1,676 connections', weight: 12, executedPct: 0, contribution: 0, note: 'Follows the pull.' },
        { component: 'Inverter connections', scope: '838 connections', weight: 8, executedPct: 0, contribution: 0, note: 'Follows station setting and the pull.' },
        { component: 'Megger LV and MV connections', scope: '1,676 + 138', weight: 5, executedPct: 0, contribution: 0, note: 'Test and terminate before energization.' }
      ],
      note: 'The LV gate is denominated purely in linear feet of cable, so every box mounted, every support set and every foot of messenger wire installed to date reports as ZERO progress. That is wrong as a measure of work done, and the composite fixes it by weighting the control-line components by labour content. But the honest result is uncomfortable and worth stating plainly: the composite lifts LV from 0.0% only to 1.9% — or about 3.8% once the support work is quantified. Giving this scope an equivalent progress does not improve the picture, it confirms it. With 6,243 lf/day required from Jul 30 to hold Sep 18 and not one measured foot of cable placed, LV/DC is the largest single exposure on the energization path, ahead of trackers and modules.',
      weightNote: 'Weights sum to 100 and are apportioned by labour content, not by quantity — 274,720 lf of cable pull carries far more man-hours than 419 box mountings. They need Jose sign-off before the composite goes into any certification, and should be frozen for the project once agreed.'
    },
    trackerWip: {
      asOf: 'Jul 30, 2026',
      basis: 'STEP LADDER (adopted Jul 30, 2026 by Jose Romero)',
      completedRows: 946,
      openRows: 130,
      equivalents: 45.9,
      equivalentsAsReported: 52.6,
      earnedPct: 39.9,
      gatePct: 38.1,
      items: [
        { zone: 'Zone E', contractor: 'ECCS', rows: 28, stepReached: 3, stepName: 'Purlins (both types) installed', pctStep: 70, equiv: 19.6, pctReported: 75, note: 'Reported alongside the 30 rows closed at 100% on Jul 30. Steps 4 and 5 outstanding. Still reported as a percentage rather than a step — the field instruction has not landed yet.' },
        { zone: 'Zone EW', contractor: 'Workforce (racking)', rows: 20, stepReached: 3, stepName: 'Purlins (both types) installed', pctStep: 70, equiv: 14.0, pctReported: 75, note: 'Dampers and actuators (step 4) are the outstanding work. THIRD CONSECUTIVE DAY WITH NO ROW CLOSED on these same 20 rows — 95% on Jul 28, 75% on Jul 29, no closure on Jul 30 with 14 people on the crew. At step 3 of 5 they are the cheapest movement available on the Aug 30 gate.' },
        { zone: 'Zone F', contractor: 'United (racking)', rows: 82, stepReached: 1, stepName: 'Bearings / saddles set on piles', pctStep: 15, equiv: 12.3, pctReported: 20, note: 'Carried forward from Jul 29 — United filed no Jul 30 log despite 55 people on the site board, so nothing can be credited or advanced here.' }
      ],
      steps: [
        { step: 1, name: 'Bearings / saddles set on piles', weight: 15, cumulative: 15 },
        { step: 2, name: 'Torque tube installed and spliced', weight: 30, cumulative: 45 },
        { step: 3, name: 'Purlins (both types) installed', weight: 25, cumulative: 70 },
        { step: 4, name: 'Damper, actuator and drive line', weight: 20, cumulative: 90 },
        { step: 5, name: 'Torque, alignment and punch closed', weight: 10, cumulative: 100 }
      ],
      rule: 'TWO MEASURES, NEVER MIXED. (1) GATE / CONTRACT MEASURE — a tracker row counts at 100% only, purlins included: 946 of 2,486 (38.1%). This is the only figure that drives the Aug 30 gate, the S-curves, the module release and any client or Heelstone submission. Partial rows earn NOTHING here. (2) PRODUCTIVITY MEASURE — row-equivalents earned per subcontractor per day, so a day of genuine work never scores as zero: 130 rows are open across three zones, worth 45.9 row-equivalents on the step ladder, putting earned progress at 39.9% against the 38.1% gate figure. Report both, labelled, side by side.',
      reportingRule: 'ADOPTED Jul 30, 2026 (Jose): partial tracker rows are reported by STEP REACHED, not by a percentage. Each daily block gives, per zone, the number of rows sitting at each step of the 5-step ladder; the equivalents are derived from the fixed weights above. Every step is a physically verifiable state a superintendent can confirm in one pass, so the figure is auditable and cannot drift backwards. A row leaves this register the moment it is credited complete — no double counting. QA release is NOT a step: release is a separate gate applied only to finished rows. On the ladder the current 130 open rows are worth 45.9 equivalents against 52.6 under the old free-text percentages — that 12% gap is the optimism the previous method carried.'
    },
    production: [
      { name: 'Project pile installation', remaining: '3,518 piles', target: 'Floor ~500/day holds ~Aug 7 (3,518 remain, 7 working days)', latest: 'Jul 30: 120 REPORTED (ECCS, Zone E) â United and Latnovva filed NO log. Jul 29: 539', cumulative: '27,834 / 31,352 executed (88.8%) â workbook roll-up 26,736 + 1,098 field (Jul 28-30)', status: 'Critical', note: 'THE Jul 30 FIGURE IS INCOMPLETE. United (55 people) and Latnovva (9 people) were both on the site headcount board and neither filed a production log, so the Zone G and Zone B fronts have no Jul 30 number. Treat 120 as reported output, not as the day’s production. Chase both logs before reading any trend into this day.' },
      { name: 'Pile delivery / site stock', remaining: '3,009 piles undelivered', target: 'Receipts must exceed the install burn to zone close', latest: 'Jul 28 workbook: 28,343 piles delivered (90.4% of 31,352)', cumulative: '28,343 delivered; 509 available above the 27,834 executed', status: 'Watch', note: 'Stock = delivered minus executed. The buffer is down to 509 — about one day of production at the required rate. No receipt has been reported since the Jul 28 workbook. Receipts must resume immediately or delivery, not crew, decides the ~Aug 7 finish.' },
      { name: 'Drill and backfill', remaining: '0 pre-drills', target: 'Scope closed — no gate to piling', latest: 'All units closed in the official workbook', cumulative: '7,694 / 7,694 complete (100.0%)', status: 'Complete', note: 'July 6 Construction Management progress source shows drill-and-backfill complete.' },
      { name: 'Civil grading / cut-fill', remaining: 'Complete', target: '— No approved daily target in source', latest: 'Rosario Jul 23: cut/fill 100% complete (finished Jul 17)', cumulative: '100% complete — Rosario Jul 23 (Lounsbury)', status: 'Complete', note: 'Complete Jul 17 (Lounsbury). Area G cut/fill starts after G basins.' },
      { name: 'Internal roads', remaining: '28% of scope', target: '— No approved daily target in source', latest: 'Rosario Jul 23 civil progress (Topland)', cumulative: '72% complete — target end Jul 31', status: 'Active', note: 'Topland; roads still control logistics access.' },
      { name: 'Tracker completion incl. purlins', remaining: '1,540 to build Â· 2,190 to client release', target: '59 completed rows/day now required for Aug 30', latest: 'Jul 30: 30 (ECCS, E) + 28 E rows at step 3; WF racking closed nothing in EW for a third day; United filed no log', note: 'RELEASE RE-BASED Jul 30 to the CLIENT-approved column of the QA sheet: 296 rows accepted by Heelstone, 492 approved by Greensol, 946 built. The 606 previously published was the QA sheet’s executed column, not a release. Client acceptance exists only in Zone A. Separately tracked (trackerWip): 130 open rows worth 45.9 row-equivalents, earned 39.9% against this 38.1% gate.', cumulative: '946 done (38.1%): 296 client-released Â· 492 Greensol-approved / 2,486 total', status: 'Critical' },
      { name: 'ITS HDD boring', remaining: '3 of 20 MV bores · 11 of 14 DC bores', target: 'Minimum 1 completed bore/day', latest: 'Jul 30: one DC duct bore closed (+256 lf); MVHB-12 in progress, estimated Sunday — 13 people', cumulative: '17 / 20 MV bores (85%, 5,162 ft) + 3 / 14 DC bores (21.4%, 647 LF)', status: 'Watch', note: 'MVHB-12 is being drilled deliberately slowly to avoid a frack-out on the wetland crossing — correct practice, and the reason MV bores have held at 17/20 for three days. Two drills since Jul 24; EGLE ruled the last MV bores stay bores.' },
      { name: 'ITS MV plowing', remaining: '10 of 46 segments', target: 'Minimum 1 completed segment/day', latest: 'Jul 30: 0 new segments — 36/46 holds for a third straight day (crews on MVHB-12 and pipe fusing)', cumulative: '36 / 46 segments complete (76.6%); 120,738 ft installed', status: 'Watch', note: 'Plowing leads the electrical sequence but has not moved since Jul 27; the whole ITS crew is on the bores.' },
      { name: 'SET construction', remaining: '76.3% of overall scope', target: '— No approved daily progress target in source', latest: 'Jul 30: PIERS 11 OF 17, all 17 planned complete by Tuesday Aug 4; inverter stations 13 of 23 set and welded (AB Powers matrix)', cumulative: '23.7% overall (civil 73.1%, structural 10.8%, electrical 6.0%) per the Jul 30 AB Powers tracker', status: 'Critical', note: 'Civil moved 65.6 to 73.1 on the pier run while STRUCTURAL DID NOT MOVE. Once the last 6 piers close on Aug 4 every substation foundation is complete and the only outstanding item is the steel — whose delivery programme Greensol formally rejected on Jul 30 as incompatible with an operational substation in week 3 of September.' },
      { name: 'Panel delivery', remaining: 'NONE — delivery complete', target: '— Scope closed, no further deliveries due', latest: 'Module deliveries CLOSED — full BOM quantity received on site', cumulative: '171,470 / 171,470 delivered (100.0%)', status: 'Complete', note: 'MODULE DELIVERY IS COMPLETE. The full 171,470-module quantity is on site; there are no pending module deliveries. 131,323 modules stand in stock above the 40,147 executed, so material is not a constraint on the module front at any point between here and the Sep 6 gate — the constraint is QA release and crew size.' },
      { name: 'Module installation', remaining: '131,323 modules', target: '4,104 modules/day required for Sep 6', latest: 'Jul 30: 3,158 (Workforce 1,749 in E3/E4 + Brumont 1,409 in E1) â ALL of it in Zone E', cumulative: '40,147 modules field-reported (23.4%)', status: 'Critical', note: 'Best day of the week and still 946 short of rate. The 43 people who filed output installed 73.4 modules each, UP from 70.7 on Jul 29 â productivity is improving and the crew is simply too small. At today’s measured rate the gate needs about 56 installers; the site board carries 67 people across Workforce and Brumont, so the shortfall may be an allocation problem rather than a recruitment one.' }
    ],
    dailyProductionHistory: [
      { task: 'Pile installation', period: 'Jun 18-Jul 28 measured days', minimum: '~500 piles/day floor holds ~Aug 7 (3,518 left over 7 working days from Jul 31)', above: 1, below: 32, latest: 'Jul 30: 120 REPORTED (ECCS, Zone E) — United and Latnovva filed no log', note: 'THIS DAY IS INCOMPLETE, NOT A COLLAPSE. Only ECCS filed piles. United (55 people) and Latnovva (9) were both on the headcount board and reported nothing, so Zone G and Zone B have no Jul 30 figure. Do not read a trend from this point until the logs arrive. E now 224 from close; F 11 from close; D opens ~Aug 5-7.', daily: [{ day: 'Jun 18', value: 20, target: 1022, unit: 'piles' }, { day: 'Jun 19', value: 79, target: 1022, unit: 'piles' }, { day: 'Jun 22', value: 251, target: 1022, unit: 'piles' }, { day: 'Jun 23', value: 101, target: 1022, unit: 'piles' }, { day: 'Jun 25', value: 370, target: 1022, unit: 'piles' }, { day: 'Jun 26', value: 340, target: 1022, unit: 'piles' }, { day: 'Jun 29', value: 261, target: 1022, unit: 'piles' }, { day: 'Jun 30', value: 234, target: 1022, unit: 'piles' }, { day: 'Jul 1', value: 252, target: 1022, unit: 'piles' }, { day: 'Jul 2', value: 274, target: 1022, unit: 'piles' }, { day: 'Jul 3', value: 134, target: 1022, unit: 'piles' }, { day: 'Jul 6', value: 307, target: 1022, unit: 'piles' }, { day: 'Jul 7', value: 399, target: 1022, unit: 'piles' }, { day: 'Jul 8', value: 646, target: 1022, unit: 'piles' }, { day: 'Jul 9', value: 669, target: 1022, unit: 'piles' }, { day: 'Jul 10', value: 680, target: 1022, unit: 'piles' }, { day: 'Jul 11', value: 680, target: 1022, unit: 'piles' }, { day: 'Jul 13', value: 608, target: 1022, unit: 'piles' }, { day: 'Jul 14', value: 695, target: 1022, unit: 'piles' }, { day: 'Jul 15', value: 481, target: 1022, unit: 'piles' }, { day: 'Jul 16', value: 504, target: 1022, unit: 'piles' }, { day: 'Jul 17', value: 472, target: 1022, unit: 'piles' }, { day: 'Jul 18', value: 608, target: 1022, unit: 'piles' }, { day: 'Jul 20', value: 622, target: 1022, unit: 'piles' }, { day: 'Jul 21', value: 253, target: 1176, unit: 'piles' }, { day: 'Jul 22', value: 202, target: 1419, unit: 'piles' }, { day: 'Jul 23', value: 284, target: 1419, unit: 'piles' }, { day: 'Jul 24', value: 364, target: 1349, unit: 'piles' }, { day: 'Jul 25', value: 236, target: 1677, unit: 'piles' }, { day: 'Jul 27', value: 0, target: 2397, unit: 'piles' }, { day: 'Jul 28', value: 439, target: 462, unit: 'piles' }, { day: 'Jul 29', value: 539, target: 464, unit: 'piles' }, { day: 'Jul 30', value: 120, target: 503, unit: 'piles' }] },
      { task: 'Tracker production control (incl. purlin completion)', period: 'Jun 17-Jul 29', minimum: '59 rows/day (required for Aug 30)', above: 4, below: 28, latest: 'Jul 30: 30 (ECCS, E) — 28 more rows at step 3; Workforce racking closed nothing in EW for a third day', note: 'Row counts complete only with purlins installed. Release re-based Jul 30 to the client column: 296 accepted of 946 built.', daily: [{ day: 'Jun 17', value: 15, target: 50, unit: 'units' }, { day: 'Jun 18', value: 35, target: 50, unit: 'units' }, { day: 'Jun 19', value: 26, target: 50, unit: 'units' }, { day: 'Jun 20', value: 31, target: 50, unit: 'units' }, { day: 'Jun 21', value: 0, target: 50, unit: 'units' }, { day: 'Jun 22', value: 48, target: 50, unit: 'units' }, { day: 'Jun 23', value: 31, target: 50, unit: 'units' }, { day: 'Jun 24', value: 0, target: 50, unit: 'units' }, { day: 'Jun 25', value: 57, target: 50, unit: 'units' }, { day: 'Jun 26', value: 26, target: 50, unit: 'units' }, { day: 'Jun 29', value: 29, target: 50, unit: 'units' }, { day: 'Jun 30', value: 30, target: 50, unit: 'units' }, { day: 'Jul 1', value: 51, target: 50, unit: 'units' }, { day: 'Jul 7', value: 29, target: 50, unit: 'units' }, { day: 'Jul 8', value: 0, target: 50, unit: 'units' }, { day: 'Jul 9', value: 0, target: 50, unit: 'units' }, { day: 'Jul 10', value: 0, target: 50, unit: 'units' }, { day: 'Jul 13', value: 29, target: 50, unit: 'units' }, { day: 'Jul 14', value: 49, target: 50, unit: 'units' }, { day: 'Jul 15', value: 35, target: 50, unit: 'units' }, { day: 'Jul 16', value: 35, target: 50, unit: 'units' }, { day: 'Jul 17', value: 25, target: 50, unit: 'units' }, { day: 'Jul 18', value: 0, target: 50, unit: 'units' }, { day: 'Jul 20', value: 21, target: 50, unit: 'units' }, { day: 'Jul 21', value: 25, target: 51, unit: 'units' }, { day: 'Jul 22', value: 39, target: 51, unit: 'units' }, { day: 'Jul 23', value: 28, target: 51, unit: 'units' }, { day: 'Jul 24', value: 30, target: 52, unit: 'units' }, { day: 'Jul 27', value: 0, target: 55, unit: 'units' }, { day: 'Jul 28', value: 30, target: 56, unit: 'units' }, { day: 'Jul 29', value: 35, target: 57, unit: 'units' }, { day: 'Jul 30', value: 30, target: 59, unit: 'units' }] },
      { task: 'Module installation', period: 'Jul 3-Jul 29 field start', minimum: '4,104 modules/day (required for Sep 6)', above: 0, below: 22, latest: 'Jul 30: 3,158 (Workforce 1,749 in E3/E4 + Brumont 1,409 in E1)', note: 'Six straight days near 3,000+; best of the week and still 946 short of rate. 73.4 modules per person filed, up from 70.7 — the constraint is crew size, not productivity. Every module on Jul 30 went into Zone E, which has no QA release.', daily: [{ day: 'Jul 3', value: 234, target: 3738, unit: 'modules' }, { day: 'Jul 6', value: 780, target: 3738, unit: 'modules' }, { day: 'Jul 7', value: 156, target: 3738, unit: 'modules' }, { day: 'Jul 8', value: 936, target: 3738, unit: 'modules' }, { day: 'Jul 9', value: 1308, target: 3738, unit: 'modules' }, { day: 'Jul 10', value: 1802, target: 3738, unit: 'modules' }, { day: 'Jul 11', value: 517, target: 3738, unit: 'modules' }, { day: 'Jul 13', value: 2922, target: 3738, unit: 'modules' }, { day: 'Jul 14', value: 2335, target: 3738, unit: 'modules' }, { day: 'Jul 15', value: 780, target: 3738, unit: 'modules' }, { day: 'Jul 16', value: 858, target: 3738, unit: 'modules' }, { day: 'Jul 17', value: 2226, target: 3738, unit: 'modules' }, { day: 'Jul 18', value: 0, target: 3738, unit: 'modules' }, { day: 'Jul 20', value: 3601, target: 3738, unit: 'modules' }, { day: 'Jul 21', value: 3082, target: 3754, unit: 'modules' }, { day: 'Jul 22', value: 2887, target: 3776, unit: 'modules' }, { day: 'Jul 23', value: 3456, target: 3776, unit: 'modules' }, { day: 'Jul 24', value: 3134, target: 3785, unit: 'modules' }, { day: 'Jul 27', value: 0, target: 3908, unit: 'modules' }, { day: 'Jul 28', value: 3100, target: 4020, unit: 'modules' }, { day: 'Jul 29', value: 3109, target: 4047, unit: 'modules' }, { day: 'Jul 30', value: 3158, target: 4104, unit: 'modules' }] },
      { task: 'ITS MV plowing', period: 'Jun 17-Jul 17', minimum: '1 completed segment/day', above: 11, below: 17, latest: 'Jul 30: 0 segments — 13 people on MVHB-12 + pipe fusing', note: 'Plowing holds 36/46 (120,738 ft) — three straight days with no segment closed; the whole ITS crew is on the bores.', daily: [{ day: 'Jun 17', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 18', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 19', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 20', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 21', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 22', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 23', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 24', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 25', value: 3, target: 1, unit: 'seg' }, { day: 'Jun 26', value: 4, target: 1, unit: 'seg' }, { day: 'Jun 27', value: 1, target: 1, unit: 'seg' }, { day: 'Jun 28', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 29', value: 2, target: 1, unit: 'seg' }, { day: 'Jun 30', value: 5, target: 1, unit: 'seg' }, { day: 'Jul 1', value: 0, target: 1, unit: 'seg' }, { day: 'Jul 2', value: 1, target: 1, unit: 'seg' }, { day: 'Jul 6', value: 0, target: 1, unit: 'seg' }, { day: 'Jul 7', value: 0, target: 1, unit: 'seg' }, { day: 'Jul 8', value: 5, target: 1, unit: 'seg' }, { day: 'Jul 9', value: 2, target: 1, unit: 'seg' }, { day: 'Jul 10', value: 5, target: 1, unit: 'seg' }, { day: 'Jul 11', value: 1, target: 1, unit: 'seg' }, { day: 'Jul 13', value: 2, target: 1, unit: 'seg' }, { day: 'Jul 14', value: 2, target: 1, unit: 'seg' }, { day: 'Jul 15', value: 3, target: 1, unit: 'seg' }, { day: 'Jul 16', value: 0, target: 1, unit: 'seg' }, { day: 'Jul 17', value: 0, target: 1, unit: 'seg' }, { day: 'Jul 27', value: 0, target: 1, unit: 'seg' }, { day: 'Jul 28', value: 0, target: 1, unit: 'seg' }, { day: 'Jul 29', value: 0, target: 1, unit: 'seg' }, { day: 'Jul 30', value: 0, target: 1, unit: 'seg' }] },
      { task: 'ITS HDD boring', period: 'Jul 2-Jul 20 measured days', minimum: '1 completed bore/day', above: 4, below: 11, latest: 'Jul 30: one DC duct bore CLOSED (DC now 3/14, 647 lf); MVHB-12 in progress, estimated Sunday', note: 'MVHB-12 is being drilled slowly on purpose to avoid a frack-out on the wetland crossing. MV bores hold 17/20.', daily: [{ day: 'Jul 2', value: 1, target: 1, unit: 'bores' }, { day: 'Jul 6', value: 0, target: 1, unit: 'bores' }, { day: 'Jul 7', value: 0, target: 1, unit: 'bores' }, { day: 'Jul 8', value: 1, target: 1, unit: 'bores' }, { day: 'Jul 9', value: 1, target: 1, unit: 'bores' }, { day: 'Jul 10', value: 1, target: 1, unit: 'bores' }, { day: 'Jul 11', value: 1, target: 1, unit: 'bores' }, { day: 'Jul 13', value: 2, target: 1, unit: 'bores' }, { day: 'Jul 14', value: 0, target: 1, unit: 'bores' }, { day: 'Jul 15', value: 0, target: 1, unit: 'bores' }, { day: 'Jul 16', value: 0, target: 1, unit: 'bores' }, { day: 'Jul 17', value: 0, target: 1, unit: 'bores' }, { day: 'Jul 20', value: 1, target: 1, unit: 'bores' }, { day: 'Jul 27', value: 0, target: 1, unit: 'bores' }, { day: 'Jul 28', value: 0, target: 1, unit: 'bores' }, { day: 'Jul 29', value: 0, target: 1, unit: 'bores' }, { day: 'Jul 30', value: 1, target: 1, unit: 'bores' }] }
    ],
    successors: [
      { activity: 'Tracker structural assembly', dependency: 'Completed piles by zone/block; final tracker finish after final pile finish', impact: 'Can overlap piling only in released areas. Final tracker structure cannot finish before the revised late-July pile forecast; the August 30 tracker-completion estimate requires 40 completed rows/day.', mitigation: 'Prioritize tracker crews into released workfronts and maintain linked finish-to-finish controls.' },
      { activity: 'Tracker completion incl. purlins', dependency: 'Completed tracker structure; purlins installed concurrently (sufficient units on site)', impact: 'Purlins are not the restriction, and the RED TORQUE TUBE outage is resolved — GameChange delivered ALL 9 tube trucks Fri Jul 24; only 16 purple tubes remain (Wed Jul 29) plus one missing purple bundle claimed on PL-3295-094-HT. Tracker completion is now controlled by assembly crew ramp (United racking ~1.5 wks from full rate) and QA release, best-estimate finish August 30.', mitigation: 'Hold >= 48 tracker units/day, ramp toward 40 completed rows/day, and keep same-week QA turnover of finished rows.' },
      { activity: 'Module installation', dependency: 'Completed tracker rows with both Purlin types installed; final module finish after final purlin finish', impact: 'Module release is controlled by completed, QA-released tracker rows (purlins installed with the trackers). Final module completion is required one week after the August 30 tracker completion — by September 6.', mitigation: 'Mobilize a controlled module crew only against fully released rows and maintain a block-level tracker/purlin/module constraint log.' },
      { activity: 'DC string wiring / combiner work', dependency: 'Modules set and accessible rows', impact: 'Crews trail module installation block-by-block, but the binding constraint is now Chemik LV material: bulk production ~Aug 7, sea 5-6 wks (mid-late Sept) — too late for Sep 25. Only 18% of 3-string harness shipped.', mitigation: 'Air-freight the final Chemik shipments to land before end of August (Luis Romero escalation Jul 17); sequence electrical crews by completed inverter block; use partial completion packages.' },
      { activity: 'Commissioning and MC', dependency: 'Continuous mechanical completion by zone', impact: 'On the re-cascaded dates (trackers Aug 30, modules Sep 6, LV/DC Sep 18) the Sep 25 MC target is achievable with limited float; pre-commissioning Sep 14 - Oct 15 protects the Oct 16 PIS.', mitigation: 'Convert on-site purlin stock into completed tracker rows at >= 48 units/day, hold the Jul 28 pile gate, ramp modules to full-field rate, and prepare weekend/OT acceleration.' }
    ],
    schedule: [
      { activity: 'D&F Pre-Drilling', contractor: 'Kalamazoo Excavating', start: '2026-05-06', end: '2026-06-30', status: 'Complete', progress: 100, baseline: 0, note: 'The June 30 Construction Management PROGRESS sheet shows 7,694 of 7,694 drill-and-backfill units complete.' },
      { activity: 'GameChange material delivery sequence', contractor: 'GameChange / NTG / Landstar', start: '2026-06-17', end: '2026-07-16', status: 'Critical', progress: 90, baseline: 55, note: 'TUBES RESOLVED — Shreeya CONFIRMED Jul 27: all BOM material delivered as of Jul 24 except 16 purple tubes, committed Wed Jul 29. OPEN CLAIM: purple bundle missing from PL-3295-094-HT (Manuel, Jul 24) — NOT addressed in the Jul 27 reply. NEW ADMIN Jul 27: GameChange requests the corrected BOL re-signed and ~21 missing PODs uploaded (load list provided). Workbook Jul 24: tubes 20,908 of 28,869 delivered (72.4%) — pre-Friday-trucks cut. Prior open items: POD pending on PL-3295-084-HT; GameChange trucks staging on public roads (Road Commission monitoring, fines passed to GameChange). Site pile stock: 28,343 delivered vs 27,834 executed (Jul 30 basis) — buffer down to 509 piles, about one day of production; receipts must resume this week. Receiving cap 14 pile + 8 racking loads/day; loads count as scheduled until POD/site receipt.' },
      { activity: 'United Zone F mobilization and pile-spot marking', contractor: 'United', start: '2026-06-15', end: '2026-06-21', status: 'Complete', progress: 100, baseline: 0, note: 'Completed on schedule: marking, mobilization and onboarding closed; United began ramming Jun 22 and has produced daily since.' },
      { activity: 'Overall pile installation acceleration', contractor: 'All pile contractors', start: '2026-06-22', end: '2026-07-28', status: 'Critical', progress: 88.4, baseline: 48.4, note: '3,518 piles remain (27,834 executed — workbook roll-up 26,736 + 1,098 field logs Jul 28-29); ~Aug 7 finish needs 455/day over 8 working days. Jul 29: 539 — United 361 Zone G (55 people) + Latnovva 178 Zone B (back on site, 2 rigs, covers Jul 28-29) — the first day over the required rate since the weather stop. Zone B is 36 from close. Levers: pile stock buffer down to 629, the Zone G ChO signature, and Saturday work.' },
      { activity: 'Tracker assembly incl. purlin install', contractor: 'ECCS', start: '2026-06-08', end: '2026-08-30', status: 'At Risk', progress: 38.9, baseline: 0, note: 'Jul 29: 35 rows closed (ECCS, Zone E — best since Jul 14) plus 34 rows at 75%; United opened its first 82 Zone F rows at 20%; Jul 30: ECCS closed 30 more and the Workforce EW rows went a third day without a closure. 946 done / 296 CLIENT-released / 492 Greensol-approved — the release basis was re-based Jul 30 to the client column, and client acceptance exists only in Zone A. Release, not build rate, controls the module front.' },
      { activity: 'ITS HDD boring', contractor: 'ITS', start: '2026-06-12', end: '2026-08-15', status: 'Active', progress: 85, baseline: 0, note: 'Jul 30 ITS control: MV 17 of 20 bores complete (85%, 5,162 ft), MVHB-12 in progress and estimated Sunday (slowed deliberately to avoid a frack-out), 2 pending; DC cable-duct bores 3 of 14 COMPLETE (647 LF). Second, larger drill on site — two rigs from Jul 24 (one DC, one MV wetlands). EGLE denied swapping the remaining bores for plowing (Jul 17) — the last continue with ~100 ft extensions each past the wetland.' },
      { activity: 'ITS MV cable plowing', contractor: 'ITS', start: '2026-06-25', end: '2026-08-15', status: 'Active', progress: 76.6, baseline: 0, note: 'Jul 15 ITS tracker: 36 of 46 segments complete (76.6%) — +3 on Jul 15 (MV11A-S01/S02, MV11B-S02); 120,738 ft installed, 11,586 ft plowed on Jul 15.' },
      { activity: 'Control building foundation and delivery gate', contractor: 'AB Power / SET team', start: '2026-06-20', end: '2026-07-10', status: 'Complete', progress: 100, baseline: 0, note: 'GATE MET: control building delivered and set on its foundation the night of July 7, three days ahead of the July 10 required-on-site date.' },
      { activity: 'SET equipment required-on-site gate', contractor: 'SET team / Procurement / Suppliers', start: '2026-06-24', end: '2026-07-10', status: 'Critical', progress: 50, baseline: 0, note: 'MAJOR RECOVERY Jul 24: the MAIN POWER TRANSFORMER arrived and was SET on its foundation (15:33, crane set onto the completed berm/foundation ready since Jul 12) — the largest item of the missed Jul 10 gate is closed 14 days late. BREAKERS are still awaited and several electrical items remain committed after the gate. Control building on site since Jul 7. Jul 24 SET tracker: overall 20.0% (civil 59.3%, structural 11.3%, electrical 5.2%). Jul 17 review: AB Power presented no SET work plan or material-delivery plan — Greensol pulling partial scope to a third party (Michael Power) and self-procuring materials; portico steel arriving Jul 16-17; oil-pit grating (tramex) procured to close the payment milestone.' },
      { activity: 'Substation (SET) construction', contractor: 'AB Power / Michael Power / SET team', start: '2026-06-01', end: '2026-09-25', status: 'Critical', progress: 21.7, baseline: 0, note: 'SUBSTATION PIERS — 7 of 17 COMPLETE (Axel, Jul 28); executed by Dig It (AB Power sub) under Axel Cano; plan holds 3-4 piers/day. Jul 30 AB Powers tracker: 23.7% overall (civil 73.1%, structural 10.8%, electrical 6.0%) against a ~44% plan-to-date on the linear baseline to the Sep 25 MC — closing but still the lagging critical path. MILESTONE Jul 24: MAIN POWER TRANSFORMER set on its foundation. Breakers and structural steel remain in fabrication (now the controlling items for energization); AB Power has presented no work or delivery plan and Greensol is pulling partial scope to Michael Power. Inverter steel-pile welding procedure received Jul 21 (Daniel Morilla).' },
      { activity: 'Inverter foundation readiness', contractor: 'EPC / Civil / Electrical', start: '2026-06-20', end: '2026-07-25 provisional', status: 'Critical', progress: 95.7, baseline: 0, note: 'Jul 22 field (Manuel/ECCS): another inverter foundation completed in Zone G — 22 of 23 stations complete (95.7%), only 1 remaining. Welding procedure for the inverter steel-pile foundations received Jul 21 (Daniel Morilla) — qualified welding cleared to proceed. Base-plate welding complete on all 18 stations delivered (Axel, Jul 12). On pace ahead of the end-July arrival of the 23 units.' },
      { activity: 'Inverter Installation' /*earned 26.3*/, contractor: 'EPC / OEM', start: '2026-07-27', end: '2026-09-15', status: 'Confirmed', progress: 26.3, baseline: 0, note: '23 x 4.2 MW units. Installation is separated from the SET/control-building scope and depends on completed inverter pile foundations before first delivery.' },
      { activity: 'Workforce module crew mobilization', contractor: 'Workforce', start: '2026-06-29', end: '2026-07-06', status: 'Complete', progress: 100, baseline: 0, note: 'Module crews mobilized and producing (Workforce + Brumont, 38 installers on the Jul 9 board); manning stability is tracked in the risks section.' },
      { activity: 'Final module installation completion', contractor: 'Workforce', start: '2026-07-03', end: '2026-09-06', status: 'Critical', progress: 21.6, baseline: 0, note: 'Modules must finish one week after tracker completion: Aug 30 trackers -> Sep 6 module finish. 30,780 modules executed through Jul 24 (Jul 23: 3,456; Jul 24: 3,134; record 3,601 Jul 20); ~3,908/day now required — four straight days near 3,000+; the gap closes with Brumont re-manning and Saturday work.' },
      { activity: 'DC Wire / LV Installation', contractor: 'East Carolina + Self-Perform', start: '2026-07-07', end: '2026-09-18', status: 'Critical', progress: 1.3, baseline: 0, note: 'Aerial messenger-wire harness / BLA-style install from tracker rows to junction boxes. Total pull 274,720 lf (0% done). Jul 21: United drove the FIRST LV support piles — 13 combiner-box (CB) + 32 tensioning/messenger-wire (TP) piles in Zone F (tracked separately from the 31,352 tracker piles). NOW MATERIAL-GATED: Chemik LV cable/harness finishes production ~Aug 7; sea transit 5-6 wks lands it mid-late Sept, incompatible with Sep 25 MC. Greening escalating for AIR freight to land material before end of August. Cable-pull kick-off Jul 21 on partial air deliveries.' },
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
        { contractor: 'UNITED', people: 55, category: 'pile', note: 'Up from 44 — split between Zone G pile driving (361, hard ground) and the Zone F racking ramp (82 rows opened at 20%).' },
        { contractor: 'WORKFORCE', people: 48, category: 'module', note: 'TWO crews. Manuel reported 29 on modules (1,709, Zone C) + 15 on racking (20 EW rows at 75%) = 44; the board carries 48 — 4-person variance to reconcile.' },
        { contractor: 'GREENSOL', people: 20, category: 'epc', note: 'Board braces GREENSOL and GREENSOL CONSTRUCTION into a single count of 20 — EPC management, QA/QC, safety and self-perform site supervision combined.' },
        { contractor: 'BRUMONT', people: 15, category: 'module', note: 'Module installation, secondary crew — 1,400 across Zones C and E, opening the Zone E module front. Re-man to 18 still pending.' },
        { contractor: 'ITS', people: 13, category: 'electrical', note: 'MV plowing and HDD — MVHB-11 drilling plus pipe fusing; no bore or segment closed for a second day.' },
        { contractor: 'LATNOVVA', people: 10, category: 'pile', note: 'BACK ON SITE after the Jul 28 closeout — 2 rigs, 178 piles Zone B over Jul 28-29. Manuel reported 11, the board carries 10.' },
        { contractor: 'ABPOWER', people: 8, category: 'electrical', note: 'Substation (SET) and inverter-station works — SET 23.7% overall; piers 11/17; 13 of 23 inverter stations set.' },
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
      { contractor: 'ITS', equipment: 'TWO HDD drills + MV cable-plowing machine; 13 people.', output: 'Jul 29: MVHB-11 drilling continues and pipe fusing — no bore or segment closed. Holds 36/46 plow segments (120,738 ft), 17/20 MV bores (5,162 ft), 2/14 DC bores (391 LF).' },
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
      { label: 'Module full-field crew', actual: 48, committed: 48, target: 40, targetLabel: '40 by Jul 13+', note: 'Workforce modules (33) + Brumont (15) = 48 installers — above the full-field gate, yet output is 3,158/day against 4,104 required. The 43 installers who filed output did 73.4 modules each — up from 70.7 — so the crew is too small, not slow: about 56 installers are needed at the current measured rate.' },
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
      { name: 'Mechanical Completion', target: 'Sep 25, 2026', forecast: 'Sep 20-25, 2026', status: 'High', note: 'Re-cascaded dates (trackers Aug 30, modules Sep 6, LV/DC Sep 18) keep MC on the Sep 25 target. Piles are now the least of the three (455/day, and Jul 29 beat rate); the exposure is trackers at 35 vs 59/day with client release re-based to 296 of 946 built, modules at 3,158 vs 4,104/day, and LV still at 0 lf against 6,243/day.' },
      { name: 'Provisional Interconnection', target: 'Oct 16, 2026', forecast: 'Oct 12-16, 2026', status: 'High', note: 'With MC forecast Sep 20-25 and pre-commissioning complete by Oct 15, the Oct 16 PIS target is feasible without renegotiation — protect the SET/inverter path. Jul 24: main power transformer SET on its foundation — the key PIS equipment item is on site; breakers/structural steel now controlling.' },
      { name: 'Commercial Operation Date', target: 'Nov 9, 2026', forecast: 'Nov 5-9, 2026', status: 'Watch', note: 'The re-cascaded MC/PIS dates restore limited float to COD; feasible if the pile gate and module ramp hold.' },
      { name: 'Substantial Completion', target: 'Nov 30, 2026', forecast: 'Nov 30, 2026', status: 'Watch', note: 'Still achievable if COD is protected and outdoor work closes before weather stop.' }
    ],
    risks: [
      { title: 'MODULES ARE RUNNING AHEAD OF QA RELEASE — about 650 built rows carry modules with no client acceptance', level: 'Critical', owner: 'Daniel Morilla / Manuel Ramirez / ECCS / Maurin Moure', note: 'The Jul 30 QA sheet re-bases tracker release onto the CLIENT-approved column: 296 rows accepted by Heelstone, 492 approved by Greensol, 946 built. Client acceptance exists ONLY in Zone A (296 of 311). Zone C reads ZERO in the client column despite being fully moduled at 14,950, and Zone E reads zero in BOTH columns while carrying 409 built rows. Mapping modules onto rows at roughly 66 modules per row (Zone C basis), about 619 rows are now under modules: 311 in A, 227 in C and about 81 in E. That leaves roughly 127 rows with modules and no Greensol release, and about 323 with modules and no client acceptance. On Jul 29 the same figure was about 78 rows — ONE DAY of production entirely inside unreleased Zone E quadrupled it. ACTION: ask Daniel for a zone-level modules-installed versus released reconciliation so this stops being a derived number. NOTE this reframes the combined racking-plus-module release proposal launched to the client on Jul 30: it is no longer only a productivity measure, it is the mechanism that would regularise work already standing.' },
      { title: 'MV coupling procurement — 40-week lead times; emergency plan demanded', level: 'Critical', owner: 'Axel Cano / Procurement / Jose Romero / German Dominguez', note: 'Jose (Jul 27, WhatsApp): the couplings carry impossible lead times — of 10 suppliers contacted, 2 have not answered and NONE improves ~40 weeks. Jose: \'this is a matter of gravity — without these materials the project cannot be finished; I need an emergency plan NOW, even if they must be brought from Europe.\' Axel is working supplier options; an emergency sourcing plan (incl. European supply and air freight) is owed to project management.' },
      { title: 'Chemik E-W cable routing — design review opened before standardizing the mount', level: 'Watch', owner: 'Engineering / Audelio Zuniga / Luis Romero / Chemik', note: 'Audelio (Jul 27): the east-west tension cable as currently installed (1) creates a pinch point resting on two bolts — constant friction on a cable tensioned for the life of the system; (2) contacts the pile steel because the hangers pass under the cable with ~2 in of extra travel — wind movement means continuous chafe and wear risk; (3) runs directly under the charging module, interfering where it crosses the north-south cable; and (4) wastes the clean routing space between the charging module and the first panel. Unistrut re-routing proposals were sent to engineering for review. Installation CAN continue under current conditions with no impact on progress — but the routing decision should close before the E-W mount is standardized across the field.' },
      { title: 'Chemik LV cable/harness delivery is the new critical path to energization', level: 'Critical', owner: 'Luis Romero Montero / Clara Lopez / Chemik (Felix A. Perez) / Joshua Spalding', note: 'AIR CONFIRMED: Luis Romero formally confirmed the air shipment to Chemik Jul 28 (\'Ok con el envio aereo\') — Chemik owes arrival dates; fabrication of ALL elements finishes next week and pallet configuration is switching to air. Background (Jul 17 thread): sea transit would land Sep 11-18 — incompatible with Sep 25. Only 18% of the 3-string harness has shipped by air; the remainder (800+800) is not built until Jul 24 and is insufficient to complete Area A. Air shipments in transit: PL_260706 (ETA Jul 16), PL_260601 and PL_260709 (ETA Jul 23) — none contain harness. Jul 21 packing-list reconciliation (Clara/Chemik): PL_260715 jumper quantities do not match; the 72 DB boxes on PL_260609 shipped without listed brackets (Chemik says integrated in the boxes — confirming); PL_260714 correct. No new shipment-status update from Chemik — chase. Luis Romero (Construction Director) has demanded the final shipments move by AIR so all material lands before end of August; without it the LV pull cannot start in earnest and the required rate jumps to ~12,000-17,000 lf/day over a compressed window. This now gates DC/LV, pre-commissioning and the Oct 16 PIS. PROJECT DECISION (Jul 17): ALL remaining Chemik packages are to be AIR-FREIGHTED — sea transport is off the table as it cannot meet the milestones.' },
      { title: 'SET scope and deliveries at risk — AB Power has no work plan; scope moving to a third party', level: 'Critical', owner: 'Axel Cano / Audelio Zuniga / AB Power / Michael Power / Procurement', note: 'Jul 17 procurement review: AB Power has presented neither a SET work plan nor a material-delivery plan. Greensol is removing partial scope from AB Power (deduct + fee) and bringing in a third party (Michael Power), plus self-buying the missing material list (BUS-connectors flagged urgent). Portico steel structure arriving Jul 16-17 (next-week arrival not yet confirmed). Oil-pit grating (tramex) is being procured separately to close the SET payment milestone 100% and avoid Heelstone payment objections.' },
      { title: 'SCADA and field instrumentation slipping — recovery plan owed', level: 'Critical', owner: 'SCADA supplier / Clara Lopez / Joshua Spalding', note: 'Jul 17 review: a SCADA delay was reported. The FAT can proceed without the servers in the first week of August, but the field boxes and meteo stations will not ship until the first week of September — a risk to zonal energization and the Oct 16 PIS. A recovery plan has been requested and is still owed; the team intends to hold the FAT and press for firm dates.' },
      { title: 'Tracker and pile scope adjustments from the Jul 17 review', level: 'Watch', owner: 'Luis Romero / Audelio Zuniga / Workforce / United', note: 'The remaining 10 MW of tracker assembly is being PULLED from Workforce (capability concern) — reassignment pending (United now holds full mechanical in Zones F & G). Missing piles: Plan B is to double smaller-section site piles or reinforce with concrete while Axel chases supply. EGLE will not allow swapping the remaining HDD bores for plowing; the last 4 bores continue with ~100 ft extensions each past the wetland.' },
      { title: 'PILE PRODUCTION UNMEASURABLE ON Jul 30 — United and Latnovva filed no log with 64 people on site', level: 'Critical', owner: 'Audelio Zuniga / Manuel Ramirez / United / Latnovva / Helena / Bethany', note: 'Only ECCS filed piles on Jul 30 (120 in Zone E). United (55 people) and Latnovva (9) both appear on the site headcount board and neither submitted a production log, so the Zone G and Zone B fronts have no figure for the day. This is a reporting failure, not a zero-production day, and the published 27,834 is short by whatever those crews drove. Across the whole board, output was filed for only about 135 of the 253 people on site — ABPower, Dig It, Topland, Hi Tech, Kalamazoo and SWCA also reported nothing, and Workforce and Brumont are each 5 people short between the board and their daily blocks. SEPARATELY the stock buffer is now the harder constraint: 28,343 delivered against 27,834 executed leaves 509 piles, roughly one day of production, with no receipt reported since the Jul 28 workbook. 3,518 remain and about 500/day is needed to hold ~Aug 7.' },
      { title: 'Trackers: client release is the controlling front — 296 accepted against 946 built, and the damper change-out is blocking further release', level: 'Critical', owner: 'ECCS / Daniel Morilla / Manuel Ramirez / United / Workforce', note: 'Jul 30: ECCS closed 30 rows in Zone E (59/day required for Aug 30) and the Workforce racking crew closed NOTHING in Zone EW for a third consecutive day, with 14 people on it — those 20 rows have sat at step 3 of 5 since Jul 28 and are the cheapest movement available on the gate. United filed no log at all despite 55 people on the site board. THE BINDING CONSTRAINT IS THE DAMPER CHANGE-OUT: Daniel Morilla reported Jul 30 that the client will not release rows until dampers are changed and correct, which forces crews back into zones already worked and leaves whole blocks of C1, C2, C4 and C5 tagged pending-for-damper. Manuel disputes that installation is the problem, calling it slow but not defective. COUNTER-MEASURE IN PLAY: Manuel proposed merging the racking and module QA releases into a single inspection, with mechanical assuming full responsibility for racking and removing/reinstalling modules at no QA cost if a defect appears; Daniel put it to the client on Jul 30 and the answer is outstanding.' },
      { title: 'QA cut is stale and the Heelstone log has finally moved — but the pile sheet still reads 27/07', level: 'High', owner: 'Daniel Morilla / Maurin Moure (QA/QC) / ECCS / Manuel Ramirez', note: 'Daniel posted the pile release sheet on Jul 30 as updated, but its own header still reads UPDATE 27/07/26 — the cut has not advanced. On it: 26,736 executed, 24,751 approved by Greensol (92.58%), 6,836 approved by Heelstone (25.57%), 242 refusals and main defects. GOOD NEWS: the Heelstone approval log is no longer frozen — piles moved 6,682 to 6,836 and trackers 107 to 296, the first movement since the Jul 6/13 snapshot. OPEN: a genuine post-27/07 pile cut; Zone B on the sheet shows 102.76% approved against its own total and needs reconciling; Zone G shows zero approved with 779 inspections pending against 1,577 driven; and some Area F zones were released internally without the subcontractor submitting quality documents, which must be recovered.' },
      { title: 'SET: foundations are advancing but the structural steel programme was formally rejected', level: 'Critical', owner: 'Axel Cano / AB Power / Luis Romero Montero / Joshua Spalding / Project Management', note: 'Jul 30 AB Powers tracker: 23.7% overall against roughly 44% plan-to-date. Civil moved 65.6 to 73.1 on the pier run while STRUCTURAL DID NOT MOVE AT ALL, and that is the whole substation story. PIERS 11 OF 17, with all 17 planned complete by Tuesday Aug 4. Inverter stations reached 13 of 23 set and welded. On Jul 30 Greensol formally rejected the AB Powers substation structure schedule: the delivery dates do not leave time for assembly, testing and commissioning before the substation must be operational in the third week of September, and they contradict a telephone commitment of a first delivery the following week. An urgent revised fabrication, galvanizing and delivery programme has been demanded. LEVERAGE: once the last 6 piers close, every substation foundation is finished and the only outstanding item is the steel — time the follow-up to land immediately after Aug 4.' },
      { title: 'ITS holding on the bores — one DC duct closed, MVHB-12 slowed deliberately to avoid a frack-out', level: 'Watch', owner: 'ITS / Audelio Zuniga / Angel Urbina', note: 'Jul 30: one DC cable-duct bore closed, taking DC to 3 of 14 (647 lf). MV bores hold at 17 of 20 and plow segments at 36 of 46 for a third consecutive day, with all 13 ITS people on MVHB-12 and pipe fusing. MVHB-12 is estimated to close Sunday and IS BEING DRILLED SLOWLY ON PURPOSE to avoid a frack-out on the wetland crossing — that is correct practice, not lost production, and it is the answer if the Owner questions three days at zero bores. EGLE has already refused to allow the remaining HDD bores to be swapped for plowing, so the wetland crossings must be completed as bores. MV composite now 59.7%.' },
      { title: 'Area G civil release must convert into workfront access', level: 'Critical', owner: 'Rosario Ruiz / Audelio Zuniga / Lounsbury', note: 'Rosario Ruiz Week 26 email says Area G is released for pile driving and material distribution. Civil cut/fill in Area G starts after basin completion; this needs to convert quickly into mechanical access.' }
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
