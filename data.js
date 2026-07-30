'use strict';
// Murch dashboard data - update THIS file for daily changes
// CACHE BUSTER: Jul 29, 2026 (Wed) EOD — piles 27,714 (88.4%) / trackers 916 (36.8%, 606 released) / modules 36,989 (21.6%). Jul 29 field: United 361 piles G + Latnovva 178 piles B (BACK ON SITE, Jul 28-29) = 539; ECCS 35 rows Zone E; WF 1,709 + Brumont 1,400 modules; ECCS-elec 25 LBDs -> LBD control RE-BASED at 56/419 per the Jul 29 ECCS control sheet (supersedes 111/418); WF racking 20 EW rows at 75%; United 82 F rows at 20%. All three zone views reconcile to control{}.
// Note: assetVersion, assetBase, asset(), and assetFallback() are defined in index.html's inline script
// Duplicate declarations have been removed to fix SyntaxError: Identifier 'assetVersion' has already been declared
window.MURCH_DATA = {
    control: {
      asOf: 'Jul 29, 2026',
      piles:    { installed: 27714, total: 31352, gate: '2026-07-28', gateLabel: 'Jul 28', required: 3638, capacity: null, name: 'Piles', unit: 'piles/day' },
      trackers: { installed: 916, released: 606, total: 2486, gate: '2026-08-30', gateLabel: 'Aug 30', required: 58, capacity: 48, name: 'Trackers incl. purlins', unit: 'rows/day' },
      modules:  { installed: 36989, total: 171470, gate: '2026-09-06', gateLabel: 'Sep 6', required: 4075, capacity: null, name: 'Modules', unit: 'mod/day' },
      electrical: { installed: 0, total: 274720, gate: '2026-09-18', gateLabel: 'Sep 18', required: 6243, capacity: null, name: 'LV Electrical', unit: 'lf/day' },
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
      { day: 'Jul 29', total: 248, src: 'site board' }
    ],
    manpowerMixToday: { day: 'Jul 29, 2026', total: 248, mix: [
      { trade: 'Trackers & Piling', people: 133, color: '#0c5f43' },
      { trade: 'Module Installation', people: 48, color: '#168a5b' },
      { trade: 'Electrical & SET', people: 41, color: '#2769a8' },
      { trade: 'Civil & Fencing', people: 4, color: '#b96f18' },
      { trade: 'GreenSol EPC', people: 22, color: '#66716d' }
    ] },
    contractorScore: [
      { date: 'Jul 29 Wed', contractor: 'ECCS', trade: 'Trackers', output: 35, resource: '53 people zone E — 35 rows closed at 100% + 34 rows at 75% (25.5 row-equivalents); Zone E now 379 / 56.2%', perUnit: 35, criterion: 58, critLabel: '58 rows/day required for Aug 30 — best ECCS day since Jul 14 (30 -> 35) but still 40% under rate; 34 more rows sit at 75% and convert tomorrow' },
      { date: 'Jul 29 Wed', contractor: 'United', trade: 'Piles + Racking', output: 361, resource: '55 people (up from 44) — 361 piles all Zone G (now 1,577 / 47.0%); racking: 82 rows at 20% in Zone F = 16.4 row-equivalents', perUnit: 361, criterion: 500, critLabel: 'Hard Zone G ground still caps the rate, but +22 over Jul 28 on 11 more people. First United racking quantity: 82 F rows opened at 20% — no rows CLOSED, so zero credit against the gate, but 16.4 row-equivalents earned on the productivity measure' },
      { date: 'Jul 29 Wed', contractor: 'Latnovva', trade: 'Piles', output: 178, resource: 'BACK ON SITE — 11 people, 2 rigs: 178 piles Zone B covering Jul 28-29 (Zone B now 2,752 / 98.7%) + 8 tension piles Zone A', perUnit: 89, criterion: 0, critLabel: 'REPORTING AGAIN one day after the Jul 28 closeout — the closeout needs confirming. Zone B is 36 piles from complete, which releases B for tracker assembly' },
      { date: 'Jul 29 Wed', contractor: 'Workforce', trade: 'Modules', output: 1709, resource: '29 people · zone C', perUnit: 1709, criterion: 2000, critLabel: '2,000 mod/day target — 1,709, best Workforce day of the week but the crew has been flat at 29 people' },
      { date: 'Jul 29 Wed', contractor: 'Brumont', trade: 'Modules', output: 1400, resource: '15 people · zones C and E', perUnit: 1400, criterion: 2000, critLabel: '2,000 mod/day target — 1,400 for the third day running; the re-man from 15 to 18 people is still not done' },
      { date: 'Jul 29 Wed', contractor: 'Workforce (racking)', trade: 'Trackers', output: 0, resource: '15 people — the 20 Zone EW rows reported at 75% = 15.0 row-equivalents; no row closed', perUnit: 0, criterion: 58, critLabel: 'PERCENTAGE WENT BACKWARDS: the same 20 EW rows were logged at 95% on Jul 28 and at 75% on Jul 29 — a free-text percentage that lost 20 points with no row closed. This is the case for the 5-step weighted ladder in trackerWip.rule' },
      { date: 'Jul 29 Wed', contractor: 'ECCS (electrical)', trade: 'LV', output: 25, resource: '12 people — 25 LBDs installed (19 Area A + 6 Area C); supports A1/A2/A4 100%, A5 90%, E-W supports 100%; messenger wire Area A3 70%', perUnit: 25, criterion: 0, critLabel: 'AREA A LBD SCOPE CLOSED (50/50). The Jul 29 ECCS control sheet re-bases mounted LBDs at 56 of 419 (13.4%) — it supersedes the 111/418 carried Jul 28. Still zero cable footage logged: the Jul 29 pull start did not produce a quantity' },
      { date: 'Jul 29 Wed', contractor: 'ITS', trade: 'MV / HDD', output: 0, resource: '13 people — MVHB-11 drilling + pipe fusing', perUnit: 0, criterion: 1, critLabel: 'No bore or plow segment closed; MV holds 17/20 and segments 36/46' },
      { date: 'Jul 28 Tue', contractor: 'ECCS', trade: 'Trackers + Piles', output: 30, resource: '53 people zone E — 30 trackers + 100 piles', perUnit: 30, criterion: 57, critLabel: '57 rows/day required — third week stuck at 30; Jose pressed for the step-up' },
      { date: 'Jul 28 Tue', contractor: 'United', trade: 'Piles + Racking', output: 339, resource: '44 people — 339 piles all Zone G; racking crew on saddles/bearings (cabezales) in Zone F', perUnit: 339, criterion: 500, critLabel: 'Zone G ground VERY HARD (as Zone F at start) — rate capped; best day since the weather stop' },
      { date: 'Jul 28 Tue', contractor: 'Workforce', trade: 'Modules + Racking', output: 1700, resource: '29 people modules (1,700, zone C) + racking crew on 20 EW rows', perUnit: 1700, criterion: 2000, critLabel: '2,000 mod/day target — 1,700' },
      { date: 'Jul 28 Tue', contractor: 'Brumont', trade: 'Modules', output: 1400, resource: '15 people · zone C', perUnit: 1400, criterion: 2000, critLabel: '2,000 mod/day target — 1,400; re-man to 18 people still pending' },
      { date: 'Jul 28 Tue', contractor: 'All State', trade: 'Inverters', output: 5, resource: '5 inverter stations installed Mon-Tue: A 01/02/03 + C 05/06 — Zones A and C complete, serials logged', perUnit: 5, criterion: 23, critLabel: '23 stations total — 5 set; LV/MV terminations pending. A further station was photographed being craned onto its piers Jul 29 but All State filed no count' },
      { date: 'Jul 28 Tue', contractor: 'ECCS (electrical)', trade: 'LV', output: 14, resource: '14 LBDs reported (+17 Saturday); E-W supports A3 100% / A5 90%', perUnit: 14, criterion: 0, critLabel: 'Superseded by the Jul 29 ECCS LBD control sheet, which puts the cumulative at 56/419 rather than 111/418' }
    ],
    scope: [
      { title: 'EPC Management', metric: 'Turnkey', note: 'Project management, safety, QC, contractor deliverables, owner reporting, permitting support, and trade coordination through completion.' },
      { title: 'Civil and Environmental', metric: 'G released', note: 'Rosario Week 26 email says Area G is released for pile driving and material distribution; Area G cut/fill starts after basin completion.' },
      { title: 'Mechanical BOS', metric: '31,352 piles · 2,486 trackers', note: 'Pile driving (27,714 executed, 88.4%), GameChange SAT tracker assembly incl. purlins (916 done, 36.8% — 606 QA-released, 310 pending Quality), and module placement (36,989 executed, 21.6%). D&F pre-drilling complete (7,694/7,694).' },
      { title: 'Electrical BOS', metric: 'ITS plowing on site', note: 'MV collection, HDD, plowing, grounding, DC string and combiner wiring, LV/AC works, inverter installation, SCADA, and testing. Joshua Spalding reported the ITS plowing machine arrived on June 19.' },
      { title: 'Procurement', metric: '171,470 modules', note: 'Panels, racking, purlins, actuators, controllers, cables, inverter stations, combiner boxes, and SET equipment.' },
      { title: 'Commissioning', metric: 'PIS Oct 16', note: 'Cold commissioning, energization, tracker testing, inverter start-up, PR test path, punch list, COD, and substantial completion.' }
    ],
    photos: [
      { src: 'https://claped71.github.io/murch-dashboard/assets/recent/thumb-recent-45.jpg?v=20260729-inverterset', fallbackSrc: 'https://claped71.github.io/murch-dashboard/assets/recent/recent-45.jpg', date: 'July 29, 2026', title: 'Another inverter station craned onto its welded pile foundation', note: 'Jul 29, 13:25: a further prefabricated inverter/PCS station being lowered onto its welded steel pile foundation, with completed tracker rows and the delivery truck behind it. The protective shipping wrap stays on per the supplier marking until LV/MV termination. All State filed no Jul 29 count, so the SET station tally holds at 5 of 23 (Zones A and C) until confirmed — station pile-sets stand at 21 of 23, with 10-D and 16-F still open.' },
      { src: 'https://claped71.github.io/murch-dashboard/assets/recent/thumb-recent-44.jpg?v=20260729-pierF5', fallbackSrc: 'https://claped71.github.io/murch-dashboard/assets/recent/recent-44.jpg', date: 'July 29, 2026', title: 'Substation pier F5 — anchor-bolt template set and backfill under way', note: 'Geotagged Jul 29, 19:04 (N 42° 12\' 37", W 86° 0\' 57", Lawrence MI): pier F5 (4 of 4 in its group) with the anchor-bolt template bolted down and the excavator backfilling around the completed pier, work continuing into the evening. Dig It (AB Power sub) under Axel Cano holds the 3-4 piers/day plan; the pier front stood at 7 of 17 on Jul 28. Note the yellow gas-line markers running the length of the trench.' },
      { src: 'https://claped71.github.io/murch-dashboard/assets/recent/thumb-recent-43.jpg?v=20260728-inverters', fallbackSrc: 'https://claped71.github.io/murch-dashboard/assets/recent/recent-43.jpg', date: 'July 28, 2026', title: 'Inverter stations SET — Zones A AND C stations all installed (5 of 23)', note: 'Geotagged Jul 28, 10:06 (N 42° 12\' 27", W 86° 2\' 4", Lawrence MI): Inverter station 02 set on its pile foundation between completed module rows in Zone A. All Zone A stations were installed Tue morning (01, 02, 03 photographed 09:06-10:40) and Zone C closed the same day — Inverter 05 at 11:55 and Inverter 06 at 14:36 (crane still on the pad). Zones A and C inverter stations are now ALL installed — 5 of 23 stations — pending LV and MV terminations; protective covers stay on per the supplier marking until termination work.' },
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
        target: '916 / 2,486 done (36.8%) — 606 released, 310 pending QA. ECCS 35 Jul 29 + 34 rows at 75%; United opened 82 F rows at 20%; 20 EW rows at 75%. Week ask >= 330 rows.',
        minimum: '>= 58/day for Aug 30 (running 35 — best since Jul 14, still 40% short).',
        gate: 'QA release STALLED at 606 while 310 built rows wait — the release backlog, not the build rate, now caps the module front. 136 rows open in WIP (56.9 equiv) — convert E and EW first.',
        owners: 'ECCS \u00b7 Workforce \u00b7 United | Daniel Morilla | Audelio Zuniga' },
      { area: '<u>Pile production — B / F / G</u><span style="background:#b53030;color:#fff;padding:1px 6px;border-radius:3px;font-size:10px;font-weight:700;margin-left:6px">CRITICAL</span>',
        target: '27,714 / 31,352 (88.4%) — 3,638 left. Close B (36 — one day), F (11) and E (344); G 400+/day on hard ground (1,779); D opens ~Aug 5-7.',
        minimum: '>= 455/day from Jul 30 holds ~Aug 7 (Jul 29: 539 — FIRST day over the required rate since the weather stop).',
        gate: 'Pile stock buffer down to 629 (from 1,168) — receipts must resume. Zone G change-order signature still owed; Latnovva back with 2 rigs in B.',
        owners: 'United | Audelio Zuniga | Manuel Ramirez' },
      { area: '<u>Module installation ramp</u><span style="background:#b53030;color:#fff;padding:1px 6px;border-radius:3px;font-size:10px;font-weight:700;margin-left:6px">CRITICAL</span>',
        target: '36,989 / 171,470 (21.6%) — Jul 29: 3,109. Zone C closed on its workbook scope; Zone E front opened. Week ask holds: >= 23,400; SATURDAYS MANDATORY (Jose).',
        minimum: '>= 4,075/day for Sep 6 — re-man Brumont (15 -> 18) and hold Workforce at 29+ people; a third crew is the only path to the rate.',
        gate: 'QA-released rows: only 73 released in E (~5,700 modules) against 379 built — under a 2-day buffer once C is done.',
        owners: 'Workforce / Brumont | Audelio Zuniga | Daniel Morilla' },
      { area: '<u>LV electrical — START</u><span style="background:#b53030;color:#fff;padding:1px 6px;border-radius:3px;font-size:10px;font-weight:700;margin-left:6px">CRITICAL</span>',
        target: 'Jul 29: 25 LBDs (19 A + 6 C) -> AREA A LBDs COMPLETE (50/50); control sheet re-bases the cumulative at 56/419 (13.4%), superseding 111/418. Supports A1/A2/A4 100%, A5 90%, E-W 100%; messenger wire A3 70%. NO cable footage logged on the Jul 29 pull start. GOAL: Area A LV-cabled for the Mike/client visit.',
        minimum: '>= 6,243 lf/day from Jul 30 to hold Sep 18 (still 0 lf on the clock).',
        gate: 'AIR CONFIRMED to Chemik Jul 28 — arrival dates owed (fabrication done next week). Crew stand-up + E-W routing review (Unistrut) before standardizing.',
        owners: 'ECCS \u00b7 East Carolina \u00b7 Self-Perform | Luis Romero | Clara Lopez' },
      { area: '<u>GameChange deliveries</u>',
        target: 'BOM confirmed COMPLETE minus 16 purple tubes (Shreeya, Jul 27) — due Wed Jul 29; no site receipt reported. Pile stock buffer is the live delivery issue: 629 units.',
        minimum: 'Claim PL-3295-094-HT (1 purple bundle) unanswered in the Jul 27 reply; re-sign corrected BOL + upload ~21 missing PODs.',
        gate: 'None on material — crew ramp caps assembly, not tubes.',
        owners: 'GameChange (Shreeya Devkota) | Manuel Ramirez | Karina Mucino' },
      { area: '<u>SET & inverter foundations</u>',
        target: 'SET 21.7% (AB Powers Jul 28); piers 7/17 — pier F5 template set + backfilled Jul 29; all 17 this week. Another station craned onto its piers Jul 29 (no count filed — tally holds 5/23). Station pile-sets 21/23 — close 10-D and 16-F.',
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
      { title: 'SET tracker', metric: '21.7% overall', note: 'Jul 28 AB Powers tracker: overall 21.7% (civil 65.6%, structural 10.8%, electrical 5.7%) — piers 7 of 17 complete; pier F5 anchor-bolt template set and backfilled Jul 29 evening (Dig It). Control building on site since Jul 7. Jul 12 (Sun): transformer-foundation containment berm complete at the substation. Jul 12: all 18 inverter stations available on site have their base plates welded.' }
    ],
    civilActivities: [
      { activity: 'Earthworks cut / fill', company: 'Lounsbury', done: 100, remaining: 0, status: 'Complete', note: 'Rosario Jul 23: Earthworks cut/fill 100% COMPLETE (Lounsbury; Apr 1 – Jul 17). Area G cut/fill starts after the Area G basins are finished.' },
      { activity: 'Perimeter fence', company: 'Hurricane', done: 95, remaining: 5, status: 'On Track', note: 'Rosario Jul 23: G-SET perimeter fence 95% (Hurricane; started Apr 2, end TBD) — Areas A–F 100% complete, only the Zone G remainder and gates left.' },
      { activity: 'Sediment basins / environmental controls', company: 'Lounsbury / ECS', done: 83, remaining: 17, status: 'On Track', note: 'Rosario Jul 23: Sediment basins 83% (Lounsbury; Mar 26 – target Jul 24) — up from 47%. Area G basins must finish before Area G cut/fill starts.' },
      { activity: 'Internal roads', company: 'Topland', done: 72, remaining: 28, status: 'Active', note: 'Rosario Jul 23: Internal roads 72% (Topland; May 26 – target Jul 31) — up from 65.9%. Continued recovery from the 35% Week 24 baseline; roads easing as the logistics constraint.' },
      { activity: 'PS foundations', company: 'United', done: 86, remaining: 14, status: 'Active', note: 'Rosario Jul 23: PS foundations 86% (United; Jun 8 – target Jul 24). Jul 22: 22 of 23 inverter foundations complete, 1 remaining (Jul 17 workbook had 190 of 230 inverter piles). WELDING PROCEDURE received Jul 21 (Daniel Morilla) — clears qualified welding to proceed.' },
      { activity: 'Foundation SET', company: 'AB Power', done: 21.7, remaining: 78.3, status: 'Active', note: 'Jul 28 AB Powers tracker: overall 21.7%; civil 65.6%, structural 10.8%, electrical 5.7%; PIERS 7 of 17 (Axel, Jul 28). Containment berm and transformer foundation complete Jul 12. PIERS: 6 of 17 COMPLETE incl. concrete (Jul 24 — 3 added Jul 23, 1 more Jul 24), by Dig It (AB Power sub) under Axel Cano; plan holds 3-4/day. MILESTONE Jul 24: MAIN POWER TRANSFORMER set on its foundation. AB Power SET scope at risk — no work or delivery plan (Jul 17 review); partial scope moving to Michael Power.' }
    ],
    contractors: [
      { name: 'Latnovva — BACK ON SITE', scope: 14168, installed: 14132, remaining: 36, done: 99.7, zones: 'A, C, EW complete + Zone B closeout (+ B/E shares)', status: 'Active', note: 'REVERSAL: declared finished Jul 28, then reported again Jul 29 — 11 people and 2 rigs driving 178 piles in Zone B over Jul 28-29, plus 8 tension piles in Zone A. Cumulative 14,132. Zone B is 36 piles from complete; the Jul 28 closeout and the scope transfer to United both need re-confirming.' },
      { name: 'ECCS / Area E control', scope: 4434, installed: 4358, remaining: 76, done: 98.3, zones: 'Area E shared tracker workfront', status: 'On Track', note: "Area-based control allocation used only so dashboard totals reconcile with Audelio's July 6 official installed-production basis." },
      { name: 'United', scope: 12750, installed: 9224, remaining: 3526, done: 72.3, zones: 'Zones D + F + G + the non-ECCS Zone E remainder', status: 'Active', note: 'Jul 29: 55 people (up from 44), 361 piles all Zone G -> 9,224. Racking crew opened 82 Zone F rows at 20% — first United tracker quantity, no rows closed yet. Carries 3,526 remaining piles: G 1,779, D 1,468, E 268 and the last 11 in F. Zone D opens ~Aug 5-7.' },
      { name: 'Project Total', scope: 31352, installed: 27714, remaining: 3638, done: 88.4, zones: "All zones | Construction Manager report", status: 'Critical', note: "Total executed: 27,714 (88.4%) — Jul 28 workbook roll-up 26,736 + 978 field-reported over Jul 28-29 (ECCS 100 E; United 339 + 361 G; Latnovva 178 B). 3,638 remain." }
    ],
    zones: [
      { zone: 'Zone A', contractor: 'ECCS (assembly complete)', scope: 311, installed: 311, released: 311, remaining: 0, done: 100.0, status: 'Complete', note: 'Tracker assembly complete and 100% QA-released (incl. purlins). First zone fully closed for modules.' },
      { zone: 'Zone C', contractor: 'ECCS (assembly complete)', scope: 227, installed: 226, released: 222, remaining: 1, done: 99.6, status: 'On Track', note: 'One row open; 222 of 227 QA-released (97.8%) since the Jul 20 C1/C2 client release. Module front active here.' },
      { zone: 'Zone E', contractor: 'ECCS', scope: 674, installed: 379, released: 73, remaining: 295, done: 56.2, status: 'Critical', note: 'Active assembly front — Jul 29: 35 rows closed at 100% (best day since Jul 14) plus 34 rows standing at 75%, against the 58/day project requirement. Released still 73 rows covering E1/E2 only — 306 built rows in E now sit unreleased.' },
      { zone: 'Zone EW', contractor: 'Workforce (racking)', scope: 67, installed: 0, released: 0, remaining: 67, done: 0, status: 'Active', note: 'Jul 29: the same 20 rows reported at 75% after being logged at 95% on Jul 28 — the percentage moved BACKWARDS and no row has closed. 15 people. Rows count only complete incl. purlins.' },
      { zone: 'Zone F', contractor: 'United (racking ramp)', scope: 595, installed: 0, released: 0, remaining: 595, done: 0, status: 'Mobilizing', note: 'Jul 29: FIRST United tracker quantity — 82 rows opened at 20% (saddles/bearings). No row closed yet; ~1.5 wks to full rate.' },
      { zone: 'Zone B', contractor: 'United (transferred)', scope: 220, installed: 0, released: 0, remaining: 220, done: 0, status: 'Pending', note: 'Piles now 98.7% (only 36 left after Latnovva returned) — the zone is effectively released for assembly, but no tracker crew is assigned to it yet. Sequenced behind the F ramp.' },
      { zone: 'Zone G', contractor: 'United', scope: 256, installed: 0, released: 0, remaining: 256, done: 0, status: 'Pending', note: 'Piling front active (47.0%, hard ground) — tracker assembly follows pile completion by block.' },
      { zone: 'Zone D', contractor: 'United', scope: 136, installed: 0, released: 0, remaining: 136, done: 0, status: 'Pending', note: 'Piling opens ~Aug 5-7 (slab demolition finished); tracker assembly follows.' },
      { zone: 'TOTAL', contractor: 'All tracker crews', scope: 2486, installed: 916, released: 606, remaining: 1570, done: 36.8, status: 'Critical', note: '916 built (36.8%) · 606 QA-released (310 pending) · 58 completed rows/day required for the Aug 30 gate — trackers are the critical path for mechanical installation.' }
    ],

    pilesByZone: [
      { zone: 'Zone A', contractor: 'Latnovva', scope: 3834, installed: 3834, remaining: 0, done: 100.0, status: 'Complete', note: 'Zone complete. Jul 29: 8 tension piles driven here — tension piles sit outside the 31,352 tracker-pile scope.' },
      { zone: 'Zone C', contractor: 'Latnovva', scope: 2946, installed: 2946, remaining: 0, done: 100.0, status: 'Complete', note: 'Zone complete.' },
      { zone: 'Zone EW', contractor: 'Latnovva', scope: 846, installed: 846, remaining: 0, done: 100.0, status: 'Complete', note: 'Zone complete.' },
      { zone: 'Zone F', contractor: 'United', scope: 7658, installed: 7647, remaining: 11, done: 99.9, status: 'Active', note: 'Only 11 piles from zone close (Jul 28 workbook reconciliation).' },
      { zone: 'Zone E', contractor: 'ECCS / United', scope: 8456, installed: 8112, remaining: 344, done: 95.9, status: 'Active', note: 'No pile crew in E on Jul 29 (ECCS was on trackers) — 344 to close.' },
      { zone: 'Zone B', contractor: 'Latnovva', scope: 2788, installed: 2752, remaining: 36, done: 98.7, status: 'Active', note: 'Jul 29: +178 (Latnovva back on site, 2 rigs, covers Jul 28-29). Only 36 piles from zone close.' },
      { zone: 'Zone G', contractor: 'United', scope: 3356, installed: 1577, remaining: 1779, done: 47.0, status: 'Critical', note: 'Jul 29: +361 (55 people, up from 44). Ground VERY HARD — as Zone F at its start — capping the rate. Signed ChO still owed for full release.' },
      { zone: 'Zone D', contractor: 'United', scope: 1468, installed: 0, remaining: 1468, done: 0, status: 'Ready', note: 'Slab demolition FINISHED (Jul 28) — piling opens ~Aug 5-7.' },
      { zone: 'TOTAL', contractor: 'All pile crews', scope: 31352, installed: 27714, remaining: 3638, done: 88.4, status: 'Critical', note: '27,714 executed (88.4%) — 455/day over the 8 working days to Aug 7 holds that finish.' }
    ],
    modulesByZone: [
      { zone: 'Zone A', contractor: 'Workforce', scope: 22360, installed: 19860, remaining: 2500, done: 88.8, status: 'Active', note: 'Workbook-mapped 19,860 — closing behind the released tracker rows.' },
      { zone: 'Zone C', contractor: 'Workforce / Brumont', scope: 14950, installed: 14950, remaining: 0, done: 100.0, status: 'Complete', note: 'Field-logged modules reached the workbook zone scope on Jul 29 — C treated as closed. The C/E split of the Jul 29 output (WF 1,709 zone C + Brumont 1,400 zones C and E) is an ESTIMATE: 930 booked to C to close it, 2,179 to E. Confirm with the next workbook cut.' },
      { zone: 'Zone E', contractor: 'Brumont / follows released rows', scope: 52234, installed: 2179, remaining: 50055, done: 4.2, status: 'Active', note: 'MODULE FRONT OPENED Jul 29 (Brumont, zones C and E) — estimated 2,179 modules here. Ceiling is the 73 QA-released E rows (E1/E2 only, ~5,700 modules of capacity) against 379 built rows: release cadence, not crew, caps this front.' },
      { zone: 'Zone F', contractor: 'Follows released rows', scope: 44642, installed: 0, remaining: 44642, done: 0, status: 'Pending', note: 'Opens behind the United racking ramp.' },
      { zone: 'Zone D', contractor: 'Sequenced', scope: 14898, installed: 0, remaining: 14898, done: 0, status: 'Pending', note: 'Follows Zone D piling (~Aug 5-7) and tracker assembly.' },
      { zone: 'Zone G', contractor: 'Sequenced', scope: 14924, installed: 0, remaining: 14924, done: 0, status: 'Pending', note: 'Follows the Zone G pile (47.0%) and tracker fronts.' },
      { zone: 'Zone B', contractor: 'Sequenced', scope: 7436, installed: 0, remaining: 7436, done: 0, status: 'Pending', note: 'Follows Zone B tracker assembly.' },
      { zone: 'Zone EW', contractor: 'Sequenced', scope: 26, installed: 0, remaining: 26, done: 0, status: 'Pending', note: 'Workbook carries EW module scope within Zone E; 26-module residual vs the 171,470 project total.' },
      { zone: 'TOTAL', contractor: 'All module crews', scope: 171470, installed: 36989, remaining: 134481, done: 21.6, status: 'Critical', note: '36,989 executed (21.6%) — 4,075/day over the 33 working days to Sep 6; released tracker rows set the ceiling.' }
    ],
    trackerWip: {
      asOf: 'Jul 29, 2026',
      completedRows: 916,
      openRows: 136,
      equivalentsReported: 56.9,
      equivalentsStepBased: 50.1,
      earnedPctReported: 39.1,
      gatePct: 36.8,
      items: [
        { zone: 'Zone E', contractor: 'ECCS', rows: 34, pctReported: 75, equivReported: 25.5, stepReached: 'Purlins installed (steps 1-3)', pctStep: 70, equivStep: 23.8, note: 'Reported Jul 29 alongside the 35 rows closed at 100%. Expected to convert to complete rows next working day.' },
        { zone: 'Zone EW', contractor: 'Workforce (racking)', rows: 20, pctReported: 75, equivReported: 15.0, stepReached: 'Purlins installed (steps 1-3)', pctStep: 70, equivStep: 14.0, note: 'THE CASE FOR A STEP RULE: these same 20 rows were reported at 95% on Jul 28 and 75% on Jul 29. A free-text percentage moved backwards 20 points with no row closed and no explanation.' },
        { zone: 'Zone F', contractor: 'United (racking)', rows: 82, pctReported: 20, equivReported: 16.4, stepReached: 'Saddles / bearings set (step 1)', pctStep: 15, equivStep: 12.3, note: 'First United racking quantity. Under the current rule this whole day scores as ZERO output for 55 people — the reason a partial measure is needed for productivity analysis.' }
      ],
      steps: [
        { step: 1, name: 'Bearings / saddles set on piles', weight: 15 },
        { step: 2, name: 'Torque tube installed and spliced', weight: 30 },
        { step: 3, name: 'Purlins (both types) installed', weight: 25 },
        { step: 4, name: 'Damper, actuator and drive line', weight: 20 },
        { step: 5, name: 'Torque, alignment and punch closed', weight: 10 }
      ],
      rule: 'TWO MEASURES, NEVER MIXED. (1) GATE / CONTRACT MEASURE — a tracker row counts at 100% only, purlins included: 916 of 2,486 (36.8%). This is the only figure that drives the Aug 30 gate, the S-curves, the module release and any client or Heelstone submission. Partial rows earn NOTHING here. (2) PRODUCTIVITY MEASURE — row-equivalents earned per day per subcontractor, so a day of genuine work never scores as zero: 136 rows are open across three zones, worth 56.9 row-equivalents as reported, which would put earned progress at 39.1% against the 36.8% gate figure. Report both, labelled, side by side.',
      recommendation: 'Replace the free-text foreman percentage with the 5-step weighted ladder above. Each step is a physically verifiable state a superintendent can confirm in one pass, so the percentage becomes auditable and cannot drift backwards the way the EW rows did. On the step ladder the same 136 open rows are worth 50.1 equivalents rather than 56.9 — a 12% haircut on the claim, which is the size of the optimism the free-text number is carrying. Rules: a row leaves the WIP register the moment it is credited as complete (no double counting); WIP is never added to the gate figure or shown to the client as progress; and QA release stays outside the build ladder because release is a separate gate, not a construction step.'
    },
    production: [
      { name: 'Project pile installation', remaining: '3,638 piles', target: 'Floor 455/day holds ~Aug 7 (3,638 remain, 8 working days)', latest: 'Jul 29: 539 (United 361 G + Latnovva 178 B, covering Jul 28-29). Jul 28: 439', cumulative: '27,714 / 31,352 executed (88.4%) — workbook roll-up 26,736 + 978 field (Jul 28-29)', status: 'Critical', note: 'Workbook roll-up is the controlling basis; field logs add the daily deltas. Jul 29 beat the required rate for the first time since the weather stop — but only because Latnovva came back on site with 2 rigs in Zone B, one day after being declared closed out.' },
      { name: 'Pile delivery / site stock', remaining: '3,009 piles undelivered', target: 'Receipts must exceed the install burn to zone close', latest: 'Jul 28 workbook: 28,343 piles delivered (90.4% of 31,352)', cumulative: '28,343 delivered; 629 available above the 27,714 executed', status: 'Watch', note: 'Stock = delivered minus executed. The buffer has fallen from 1,168 to 629 in one day at the current burn — barely 1.4 days of production. Receipts must resume this week or delivery becomes the constraint on the ~Aug 7 finish.' },
      { name: 'Drill and backfill', remaining: '0 pre-drills', target: 'Scope closed — no gate to piling', latest: 'All units closed in the official workbook', cumulative: '7,694 / 7,694 complete (100.0%)', status: 'Complete', note: 'July 6 Construction Management progress source shows drill-and-backfill complete.' },
      { name: 'Civil grading / cut-fill', remaining: 'Complete', target: '— No approved daily target in source', latest: 'Rosario Jul 23: cut/fill 100% complete (finished Jul 17)', cumulative: '100% complete — Rosario Jul 23 (Lounsbury)', status: 'Complete', note: 'Complete Jul 17 (Lounsbury). Area G cut/fill starts after G basins.' },
      { name: 'Internal roads', remaining: '28% of scope', target: '— No approved daily target in source', latest: 'Rosario Jul 23 civil progress (Topland)', cumulative: '72% complete — target end Jul 31', status: 'Active', note: 'Topland; roads still control logistics access.' },
      { name: 'Tracker completion incl. purlins', remaining: '1,570 to build · 1,880 to QA-release', target: '58 completed rows/day now required for Aug 30', latest: 'Jul 29: 35 (ECCS, E) + 34 E rows at 75%; WF racking 20 EW rows at 75%; United 82 F rows at 20%', note: 'Row counts complete only with purlins — partial rows earn nothing here. Separately tracked (trackerWip): 136 open rows across E, EW and F worth 56.9 row-equivalents as reported, which puts earned progress at 39.1% against this 36.8% gate figure. Released still 606 / 310 pending on 916 built — no new QA release logged Jul 29, so the release backlog grew by 35 rows in a day.', cumulative: '916 done (36.8%): 606 QA-released + 310 pending Quality / 2,486 total', status: 'Critical' },
      { name: 'ITS HDD boring', remaining: '3 of 20 MV bores · 12 of 14 DC bores', target: 'Minimum 1 completed bore/day', latest: 'Jul 29: MVHB-11 still drilling + pipe fusing (13 people) — MV holds 17/20 (5,162 ft), DC 2/14 (391 LF)', cumulative: '17 / 20 MV bores (85%, 5,162 ft) + 2 / 14 DC bores (391 LF)', status: 'Watch', note: 'Two drills since Jul 24 — one DC, one MV wetlands; EGLE ruled the last MV bores stay bores.' },
      { name: 'ITS MV plowing', remaining: '10 of 46 segments', target: 'Minimum 1 completed segment/day', latest: 'Jul 29: 0 new segments — 36/46 holds (crews on MVHB-11 and pipe fusing)', cumulative: '36 / 46 segments complete (76.6%); 120,738 ft installed', status: 'On Track', note: 'Plowing leads the electrical sequence; crews shifted to the bores.' },
      { name: 'SET construction', remaining: '78.3% of overall scope', target: '— No approved daily progress target in source', latest: 'Jul 29: a further inverter station photographed being craned onto its piers (no All State count filed — tally holds 5 of 23); substation pier F5 anchor template set and backfilled, piers 7/17', cumulative: '21.7% overall (civil 65.6%, structural 10.8%, electrical 5.7%) per the Jul 28 AB Powers tracker', status: 'Critical', note: 'TRANSFORMER SET Jul 24; piers 7/17. Breakers + structural steel (fabrication) now controlling; AB Power plan gaps -> Michael Power.' },
      { name: 'Panel delivery', remaining: '14,230 modules to deliver', target: '— No approved daily delivery target in source', latest: '— Latest daily receipt not reported', cumulative: '157,240 / 171,470 delivered (91.7%)', status: 'On Track', note: '120,251 modules on site above the 36,989 executed — no constraint.' },
      { name: 'Module installation', remaining: '134,481 modules', target: '4,075 modules/day required for Sep 6', latest: 'Jul 29: 3,109 (WF 1,709 zone C + Brumont 1,400 zones C and E)', cumulative: '36,989 modules field-reported (21.6%) — workbook carries 29,526, closing on the field basis', status: 'Critical', note: 'Five days near 3,000+; record 3,601. Zone C reached its workbook scope and the E front opened. Gap to 4,075/day is still Brumont re-man (15 -> 18) + a third crew + Saturdays.' }
    ],
    dailyProductionHistory: [
      { task: 'Pile installation', period: 'Jun 18-Jul 28 measured days', minimum: '455 piles/day floor holds ~Aug 7 (3,638 left over 8 working days from Jul 30)', above: 1, below: 31, latest: 'Jul 29: 539 — United 361 (G) + Latnovva 178 (B, covers Jul 28-29)', note: 'FIRST day above the required rate since the weather stop: 539 vs 464. Driven by Latnovva returning with 2 rigs in Zone B (36 piles from close) plus United at 55 people in hard Zone G. F 11 from close; D opens ~Aug 5-7. ~Aug 7 finish needs 455/day on the 3,638 remaining.', daily: [{ day: 'Jun 18', value: 20, target: 1022, unit: 'piles' }, { day: 'Jun 19', value: 79, target: 1022, unit: 'piles' }, { day: 'Jun 22', value: 251, target: 1022, unit: 'piles' }, { day: 'Jun 23', value: 101, target: 1022, unit: 'piles' }, { day: 'Jun 25', value: 370, target: 1022, unit: 'piles' }, { day: 'Jun 26', value: 340, target: 1022, unit: 'piles' }, { day: 'Jun 29', value: 261, target: 1022, unit: 'piles' }, { day: 'Jun 30', value: 234, target: 1022, unit: 'piles' }, { day: 'Jul 1', value: 252, target: 1022, unit: 'piles' }, { day: 'Jul 2', value: 274, target: 1022, unit: 'piles' }, { day: 'Jul 3', value: 134, target: 1022, unit: 'piles' }, { day: 'Jul 6', value: 307, target: 1022, unit: 'piles' }, { day: 'Jul 7', value: 399, target: 1022, unit: 'piles' }, { day: 'Jul 8', value: 646, target: 1022, unit: 'piles' }, { day: 'Jul 9', value: 669, target: 1022, unit: 'piles' }, { day: 'Jul 10', value: 680, target: 1022, unit: 'piles' }, { day: 'Jul 11', value: 680, target: 1022, unit: 'piles' }, { day: 'Jul 13', value: 608, target: 1022, unit: 'piles' }, { day: 'Jul 14', value: 695, target: 1022, unit: 'piles' }, { day: 'Jul 15', value: 481, target: 1022, unit: 'piles' }, { day: 'Jul 16', value: 504, target: 1022, unit: 'piles' }, { day: 'Jul 17', value: 472, target: 1022, unit: 'piles' }, { day: 'Jul 18', value: 608, target: 1022, unit: 'piles' }, { day: 'Jul 20', value: 622, target: 1022, unit: 'piles' }, { day: 'Jul 21', value: 253, target: 1176, unit: 'piles' }, { day: 'Jul 22', value: 202, target: 1419, unit: 'piles' }, { day: 'Jul 23', value: 284, target: 1419, unit: 'piles' }, { day: 'Jul 24', value: 364, target: 1349, unit: 'piles' }, { day: 'Jul 25', value: 236, target: 1677, unit: 'piles' }, { day: 'Jul 27', value: 0, target: 2397, unit: 'piles' }, { day: 'Jul 28', value: 439, target: 462, unit: 'piles' }, { day: 'Jul 29', value: 539, target: 464, unit: 'piles' }] },
      { task: 'Tracker production control (incl. purlin completion)', period: 'Jun 17-Jul 29', minimum: '58 rows/day (required for Aug 30)', above: 4, below: 27, latest: 'Jul 29: 35 (ECCS, E) — 34 more rows at 75%; WF racking 20 EW rows at 75%; United 82 F rows at 20%', note: 'Row counts complete only with purlins installed. 606 released / 310 pending on 916 built — no new QA release Jul 29.', daily: [{ day: 'Jun 17', value: 15, target: 50, unit: 'units' }, { day: 'Jun 18', value: 35, target: 50, unit: 'units' }, { day: 'Jun 19', value: 26, target: 50, unit: 'units' }, { day: 'Jun 20', value: 31, target: 50, unit: 'units' }, { day: 'Jun 21', value: 0, target: 50, unit: 'units' }, { day: 'Jun 22', value: 48, target: 50, unit: 'units' }, { day: 'Jun 23', value: 31, target: 50, unit: 'units' }, { day: 'Jun 24', value: 0, target: 50, unit: 'units' }, { day: 'Jun 25', value: 57, target: 50, unit: 'units' }, { day: 'Jun 26', value: 26, target: 50, unit: 'units' }, { day: 'Jun 29', value: 29, target: 50, unit: 'units' }, { day: 'Jun 30', value: 30, target: 50, unit: 'units' }, { day: 'Jul 1', value: 51, target: 50, unit: 'units' }, { day: 'Jul 7', value: 29, target: 50, unit: 'units' }, { day: 'Jul 8', value: 0, target: 50, unit: 'units' }, { day: 'Jul 9', value: 0, target: 50, unit: 'units' }, { day: 'Jul 10', value: 0, target: 50, unit: 'units' }, { day: 'Jul 13', value: 29, target: 50, unit: 'units' }, { day: 'Jul 14', value: 49, target: 50, unit: 'units' }, { day: 'Jul 15', value: 35, target: 50, unit: 'units' }, { day: 'Jul 16', value: 35, target: 50, unit: 'units' }, { day: 'Jul 17', value: 25, target: 50, unit: 'units' }, { day: 'Jul 18', value: 0, target: 50, unit: 'units' }, { day: 'Jul 20', value: 21, target: 50, unit: 'units' }, { day: 'Jul 21', value: 25, target: 51, unit: 'units' }, { day: 'Jul 22', value: 39, target: 51, unit: 'units' }, { day: 'Jul 23', value: 28, target: 51, unit: 'units' }, { day: 'Jul 24', value: 30, target: 52, unit: 'units' }, { day: 'Jul 27', value: 0, target: 55, unit: 'units' }, { day: 'Jul 28', value: 30, target: 56, unit: 'units' }, { day: 'Jul 29', value: 35, target: 57, unit: 'units' }] },
      { task: 'Module installation', period: 'Jul 3-Jul 29 field start', minimum: '4,075 modules/day (required for Sep 6)', above: 0, below: 21, latest: 'Jul 29: 3,109 (Workforce 1,709 zone C + Brumont 1,400 zones C and E)', note: 'Five straight days near 3,000+; record 3,601 (Jul 20). Zone C hit its workbook scope and the Zone E front opened. Brumont re-man 15 -> 18 remains the nearest gap to 4,075.', daily: [{ day: 'Jul 3', value: 234, target: 3738, unit: 'modules' }, { day: 'Jul 6', value: 780, target: 3738, unit: 'modules' }, { day: 'Jul 7', value: 156, target: 3738, unit: 'modules' }, { day: 'Jul 8', value: 936, target: 3738, unit: 'modules' }, { day: 'Jul 9', value: 1308, target: 3738, unit: 'modules' }, { day: 'Jul 10', value: 1802, target: 3738, unit: 'modules' }, { day: 'Jul 11', value: 517, target: 3738, unit: 'modules' }, { day: 'Jul 13', value: 2922, target: 3738, unit: 'modules' }, { day: 'Jul 14', value: 2335, target: 3738, unit: 'modules' }, { day: 'Jul 15', value: 780, target: 3738, unit: 'modules' }, { day: 'Jul 16', value: 858, target: 3738, unit: 'modules' }, { day: 'Jul 17', value: 2226, target: 3738, unit: 'modules' }, { day: 'Jul 18', value: 0, target: 3738, unit: 'modules' }, { day: 'Jul 20', value: 3601, target: 3738, unit: 'modules' }, { day: 'Jul 21', value: 3082, target: 3754, unit: 'modules' }, { day: 'Jul 22', value: 2887, target: 3776, unit: 'modules' }, { day: 'Jul 23', value: 3456, target: 3776, unit: 'modules' }, { day: 'Jul 24', value: 3134, target: 3785, unit: 'modules' }, { day: 'Jul 27', value: 0, target: 3908, unit: 'modules' }, { day: 'Jul 28', value: 3100, target: 4020, unit: 'modules' }, { day: 'Jul 29', value: 3109, target: 4047, unit: 'modules' }] },
      { task: 'ITS MV plowing', period: 'Jun 17-Jul 17', minimum: '1 completed segment/day', above: 11, below: 17, latest: 'Jul 29: 0 segments — 13 people on MVHB-11 + pipe fusing', note: 'Plowing holds 36/46 (120,738 ft) — crews still on the bores and pipe fusing; two straight days with no segment closed.', daily: [{ day: 'Jun 17', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 18', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 19', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 20', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 21', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 22', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 23', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 24', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 25', value: 3, target: 1, unit: 'seg' }, { day: 'Jun 26', value: 4, target: 1, unit: 'seg' }, { day: 'Jun 27', value: 1, target: 1, unit: 'seg' }, { day: 'Jun 28', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 29', value: 2, target: 1, unit: 'seg' }, { day: 'Jun 30', value: 5, target: 1, unit: 'seg' }, { day: 'Jul 1', value: 0, target: 1, unit: 'seg' }, { day: 'Jul 2', value: 1, target: 1, unit: 'seg' }, { day: 'Jul 6', value: 0, target: 1, unit: 'seg' }, { day: 'Jul 7', value: 0, target: 1, unit: 'seg' }, { day: 'Jul 8', value: 5, target: 1, unit: 'seg' }, { day: 'Jul 9', value: 2, target: 1, unit: 'seg' }, { day: 'Jul 10', value: 5, target: 1, unit: 'seg' }, { day: 'Jul 11', value: 1, target: 1, unit: 'seg' }, { day: 'Jul 13', value: 2, target: 1, unit: 'seg' }, { day: 'Jul 14', value: 2, target: 1, unit: 'seg' }, { day: 'Jul 15', value: 3, target: 1, unit: 'seg' }, { day: 'Jul 16', value: 0, target: 1, unit: 'seg' }, { day: 'Jul 17', value: 0, target: 1, unit: 'seg' }, { day: 'Jul 27', value: 0, target: 1, unit: 'seg' }, { day: 'Jul 28', value: 0, target: 1, unit: 'seg' }, { day: 'Jul 29', value: 0, target: 1, unit: 'seg' }] },
      { task: 'ITS HDD boring', period: 'Jul 2-Jul 20 measured days', minimum: '1 completed bore/day', above: 4, below: 11, latest: 'Jul 29: MVHB-11 still in progress + pipe fusing; 17/20 MV holds', note: 'Two drills since Jul 24 — one on DC ducts, one on MV wetland bores. MVHB-11 has been open two days.', daily: [{ day: 'Jul 2', value: 1, target: 1, unit: 'bores' }, { day: 'Jul 6', value: 0, target: 1, unit: 'bores' }, { day: 'Jul 7', value: 0, target: 1, unit: 'bores' }, { day: 'Jul 8', value: 1, target: 1, unit: 'bores' }, { day: 'Jul 9', value: 1, target: 1, unit: 'bores' }, { day: 'Jul 10', value: 1, target: 1, unit: 'bores' }, { day: 'Jul 11', value: 1, target: 1, unit: 'bores' }, { day: 'Jul 13', value: 2, target: 1, unit: 'bores' }, { day: 'Jul 14', value: 0, target: 1, unit: 'bores' }, { day: 'Jul 15', value: 0, target: 1, unit: 'bores' }, { day: 'Jul 16', value: 0, target: 1, unit: 'bores' }, { day: 'Jul 17', value: 0, target: 1, unit: 'bores' }, { day: 'Jul 20', value: 1, target: 1, unit: 'bores' }, { day: 'Jul 27', value: 0, target: 1, unit: 'bores' }, { day: 'Jul 28', value: 0, target: 1, unit: 'bores' }, { day: 'Jul 29', value: 0, target: 1, unit: 'bores' }] }
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
      { activity: 'GameChange material delivery sequence', contractor: 'GameChange / NTG / Landstar', start: '2026-06-17', end: '2026-07-16', status: 'Critical', progress: 90, baseline: 55, note: 'TUBES RESOLVED — Shreeya CONFIRMED Jul 27: all BOM material delivered as of Jul 24 except 16 purple tubes, committed Wed Jul 29. OPEN CLAIM: purple bundle missing from PL-3295-094-HT (Manuel, Jul 24) — NOT addressed in the Jul 27 reply. NEW ADMIN Jul 27: GameChange requests the corrected BOL re-signed and ~21 missing PODs uploaded (load list provided). Workbook Jul 24: tubes 20,908 of 28,869 delivered (72.4%) — pre-Friday-trucks cut. Prior open items: POD pending on PL-3295-084-HT; GameChange trucks staging on public roads (Road Commission monitoring, fines passed to GameChange). Site pile stock: 28,343 delivered vs 27,714 executed (Jul 29 basis) — buffer down to 629 piles, about 1.4 days of production; receipts must resume this week. Receiving cap 14 pile + 8 racking loads/day; loads count as scheduled until POD/site receipt.' },
      { activity: 'United Zone F mobilization and pile-spot marking', contractor: 'United', start: '2026-06-15', end: '2026-06-21', status: 'Complete', progress: 100, baseline: 0, note: 'Completed on schedule: marking, mobilization and onboarding closed; United began ramming Jun 22 and has produced daily since.' },
      { activity: 'Overall pile installation acceleration', contractor: 'All pile contractors', start: '2026-06-22', end: '2026-07-28', status: 'Critical', progress: 88.4, baseline: 48.4, note: '3,638 piles remain (27,714 executed — workbook roll-up 26,736 + 978 field logs Jul 28-29); ~Aug 7 finish needs 455/day over 8 working days. Jul 29: 539 — United 361 Zone G (55 people) + Latnovva 178 Zone B (back on site, 2 rigs, covers Jul 28-29) — the first day over the required rate since the weather stop. Zone B is 36 from close. Levers: pile stock buffer down to 629, the Zone G ChO signature, and Saturday work.' },
      { activity: 'Tracker assembly incl. purlin install', contractor: 'ECCS', start: '2026-06-08', end: '2026-08-30', status: 'At Risk', progress: 36.8, baseline: 0, note: 'Jul 29: 35 rows closed (ECCS, Zone E — best since Jul 14) plus 34 rows at 75%; United opened its first 82 Zone F rows at 20%; the 20 Workforce EW rows were re-reported at 75% after 95% on Jul 28. 916 done / 606 QA-released / 310 pending QA — no new release Jul 29, so the QA backlog is now the controlling item for the module front, not the build rate.' },
      { activity: 'ITS HDD boring', contractor: 'ITS', start: '2026-06-12', end: '2026-08-15', status: 'Active', progress: 85, baseline: 0, note: 'Jul 24 ITS control: MV 17 of 20 bores complete (85%, 5,162 ft), 1 in progress, 2 pending; DC cable-duct bores 2 of 14 COMPLETE (391 LF, both Jul 22), DC03HB-02 in progress. Second, larger drill on site — two rigs from Jul 24 (one DC, one MV wetlands). EGLE denied swapping the remaining bores for plowing (Jul 17) — the last continue with ~100 ft extensions each past the wetland.' },
      { activity: 'ITS MV cable plowing', contractor: 'ITS', start: '2026-06-25', end: '2026-08-15', status: 'Active', progress: 76.6, baseline: 0, note: 'Jul 15 ITS tracker: 36 of 46 segments complete (76.6%) — +3 on Jul 15 (MV11A-S01/S02, MV11B-S02); 120,738 ft installed, 11,586 ft plowed on Jul 15.' },
      { activity: 'Control building foundation and delivery gate', contractor: 'AB Power / SET team', start: '2026-06-20', end: '2026-07-10', status: 'Complete', progress: 100, baseline: 0, note: 'GATE MET: control building delivered and set on its foundation the night of July 7, three days ahead of the July 10 required-on-site date.' },
      { activity: 'SET equipment required-on-site gate', contractor: 'SET team / Procurement / Suppliers', start: '2026-06-24', end: '2026-07-10', status: 'Critical', progress: 50, baseline: 0, note: 'MAJOR RECOVERY Jul 24: the MAIN POWER TRANSFORMER arrived and was SET on its foundation (15:33, crane set onto the completed berm/foundation ready since Jul 12) — the largest item of the missed Jul 10 gate is closed 14 days late. BREAKERS are still awaited and several electrical items remain committed after the gate. Control building on site since Jul 7. Jul 24 SET tracker: overall 20.0% (civil 59.3%, structural 11.3%, electrical 5.2%). Jul 17 review: AB Power presented no SET work plan or material-delivery plan — Greensol pulling partial scope to a third party (Michael Power) and self-procuring materials; portico steel arriving Jul 16-17; oil-pit grating (tramex) procured to close the payment milestone.' },
      { activity: 'Substation (SET) construction', contractor: 'AB Power / Michael Power / SET team', start: '2026-06-01', end: '2026-09-25', status: 'Critical', progress: 21.7, baseline: 0, note: 'SUBSTATION PIERS — 7 of 17 COMPLETE (Axel, Jul 28); executed by Dig It (AB Power sub) under Axel Cano; plan holds 3-4 piers/day. Jul 28 AB Powers tracker: 21.7% overall (civil 65.6%, structural 10.8%, electrical 5.7%) against a ~44% plan-to-date on the linear baseline to the Sep 25 MC — closing but still the lagging critical path. MILESTONE Jul 24: MAIN POWER TRANSFORMER set on its foundation. Breakers and structural steel remain in fabrication (now the controlling items for energization); AB Power has presented no work or delivery plan and Greensol is pulling partial scope to Michael Power. Inverter steel-pile welding procedure received Jul 21 (Daniel Morilla).' },
      { activity: 'Inverter foundation readiness', contractor: 'EPC / Civil / Electrical', start: '2026-06-20', end: '2026-07-25 provisional', status: 'Critical', progress: 95.7, baseline: 0, note: 'Jul 22 field (Manuel/ECCS): another inverter foundation completed in Zone G — 22 of 23 stations complete (95.7%), only 1 remaining. Welding procedure for the inverter steel-pile foundations received Jul 21 (Daniel Morilla) — qualified welding cleared to proceed. Base-plate welding complete on all 18 stations delivered (Axel, Jul 12). On pace ahead of the end-July arrival of the 23 units.' },
      { activity: 'Inverter Installation', contractor: 'EPC / OEM', start: '2026-07-27', end: '2026-09-15', status: 'Confirmed', progress: 0, baseline: 0, note: '23 x 4.2 MW units. Installation is separated from the SET/control-building scope and depends on completed inverter pile foundations before first delivery.' },
      { activity: 'Workforce module crew mobilization', contractor: 'Workforce', start: '2026-06-29', end: '2026-07-06', status: 'Complete', progress: 100, baseline: 0, note: 'Module crews mobilized and producing (Workforce + Brumont, 38 installers on the Jul 9 board); manning stability is tracked in the risks section.' },
      { activity: 'Final module installation completion', contractor: 'Workforce', start: '2026-07-03', end: '2026-09-06', status: 'Critical', progress: 18.0, baseline: 0, note: 'Modules must finish one week after tracker completion: Aug 30 trackers -> Sep 6 module finish. 30,780 modules executed through Jul 24 (Jul 23: 3,456; Jul 24: 3,134; record 3,601 Jul 20); ~3,908/day now required — four straight days near 3,000+; the gap closes with Brumont re-manning and Saturday work.' },
      { activity: 'DC Wire / LV Installation', contractor: 'East Carolina + Self-Perform', start: '2026-07-07', end: '2026-09-18', status: 'Critical', progress: 0, baseline: 0, note: 'Aerial messenger-wire harness / BLA-style install from tracker rows to junction boxes. Total pull 274,720 lf (0% done). Jul 21: United drove the FIRST LV support piles — 13 combiner-box (CB) + 32 tensioning/messenger-wire (TP) piles in Zone F (tracked separately from the 31,352 tracker piles). NOW MATERIAL-GATED: Chemik LV cable/harness finishes production ~Aug 7; sea transit 5-6 wks lands it mid-late Sept, incompatible with Sep 25 MC. Greening escalating for AIR freight to land material before end of August. Cable-pull kick-off Jul 21 on partial air deliveries.' },
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
        { contractor: 'ABPOWER', people: 8, category: 'electrical', note: 'Substation (SET) and inverter-station works — SET 21.7% overall.' },
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
      note: 'Source: the on-site headcount board photographed Jul 29. The board header still carries 7/23, but every value matches the Jul 29 subcontractor reports — treat it as the Jul 29 record. Two variances against Manuel Ramirez\'s WhatsApp blocks: Workforce 48 on the board vs 44 reported (29 modules + 15 racking), and Latnovva 10 vs 11 reported. Board total 248 people, up 56 on the Jul 20 board (192) — the biggest single jump of the project, driven by United +11 and the ECCS LV crew standing up.'
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
      { label: 'Total site resources', actual: 248, target: 105, targetLabel: 'Acceleration peak 95-105', note: 'Jul 29 on-site headcount board: 248 people including field labor plus management, QC and HSE — up 56 on the Jul 20 board (192) and 2.4x the acceleration-plan peak.' },
      { label: 'Tracker / piling crew', actual: 133, target: 85, targetLabel: 'ECCS (50) + United (35)', note: 'ECCS trackers (53) + United (55, split G piling / F racking) + Latnovva (10, Zone B) + Workforce racking (15) = 133. Three separate crews are now producing tracker rows.' },
      { label: 'Module crew Phase 1', actual: 33, committed: 33, target: 22, targetLabel: '22 by Jul 7', note: 'Workforce module crew — board carries 48 across both Workforce crews, 15 of which are racking. Manuel reported 29 on modules; 4-person variance open.' },
      { label: 'Module full-field crew', actual: 48, committed: 48, target: 40, targetLabel: '40 by Jul 13+', note: 'Workforce modules (33) + Brumont (15) = 48 installers — above the full-field gate, yet output is 3,109/day against 4,075 required. Productivity, not headcount, is the gap.' },
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
      { name: 'Mechanical Completion', target: 'Sep 25, 2026', forecast: 'Sep 20-25, 2026', status: 'High', note: 'Re-cascaded dates (trackers Aug 30, modules Sep 6, LV/DC Sep 18) keep MC on the Sep 25 target. Piles are now the least of the three (455/day, and Jul 29 beat rate); the exposure is trackers at 35 vs 58/day with QA release stalled at 606, modules at 3,109 vs 4,075/day, and LV still at 0 lf against 6,243/day.' },
      { name: 'Provisional Interconnection', target: 'Oct 16, 2026', forecast: 'Oct 12-16, 2026', status: 'High', note: 'With MC forecast Sep 20-25 and pre-commissioning complete by Oct 15, the Oct 16 PIS target is feasible without renegotiation — protect the SET/inverter path. Jul 24: main power transformer SET on its foundation — the key PIS equipment item is on site; breakers/structural steel now controlling.' },
      { name: 'Commercial Operation Date', target: 'Nov 9, 2026', forecast: 'Nov 5-9, 2026', status: 'Watch', note: 'The re-cascaded MC/PIS dates restore limited float to COD; feasible if the pile gate and module ramp hold.' },
      { name: 'Substantial Completion', target: 'Nov 30, 2026', forecast: 'Nov 30, 2026', status: 'Watch', note: 'Still achievable if COD is protected and outdoor work closes before weather stop.' }
    ],
    risks: [
      { title: 'THREE reporting inconsistencies opened Jul 29 — LBD cumulative, EW row percentage, and the Latnovva closeout', level: 'High', owner: 'Luis Romero / Manuel Ramirez / Angel Urbina / Audelio Zuniga / Jose Romero', note: 'Three field numbers contradict what was reported the day before, and each one changes a control figure. (1) LBDs: the Jul 29 ECCS control sheet puts mounted LBDs at 56 of 419 (13.4%) — Area A 50/50 COMPLETE, Area C 6/41 — and both its per-area and per-inverter tables reconcile to 56, so the dashboard has been re-based off the 111/418 carried Jul 28. That earlier figure appears to have counted supports or piles alongside boxes; the LV basis needs one agreed definition before the daily LV report is trusted. (2) Zone EW trackers: the same 20 rows were logged at 95% complete Jul 28 and 75% Jul 29 — the percentage went BACKWARDS with no row closed, so what is actually outstanding on those rows is unknown. (3) Latnovva was declared finished and demobilized Jul 28, then reported 11 people, 2 rigs and 178 Zone B piles on Jul 29 — the closeout and the scope transfer to United both have to be re-confirmed, because Zone B is now 36 piles from complete and that changes who closes it.' },
      { title: 'MV coupling procurement — 40-week lead times; emergency plan demanded', level: 'Critical', owner: 'Axel Cano / Procurement / Jose Romero / German Dominguez', note: 'Jose (Jul 27, WhatsApp): the couplings carry impossible lead times — of 10 suppliers contacted, 2 have not answered and NONE improves ~40 weeks. Jose: \'this is a matter of gravity — without these materials the project cannot be finished; I need an emergency plan NOW, even if they must be brought from Europe.\' Axel is working supplier options; an emergency sourcing plan (incl. European supply and air freight) is owed to project management.' },
      { title: 'Chemik E-W cable routing — design review opened before standardizing the mount', level: 'Watch', owner: 'Engineering / Audelio Zuniga / Luis Romero / Chemik', note: 'Audelio (Jul 27): the east-west tension cable as currently installed (1) creates a pinch point resting on two bolts — constant friction on a cable tensioned for the life of the system; (2) contacts the pile steel because the hangers pass under the cable with ~2 in of extra travel — wind movement means continuous chafe and wear risk; (3) runs directly under the charging module, interfering where it crosses the north-south cable; and (4) wastes the clean routing space between the charging module and the first panel. Unistrut re-routing proposals were sent to engineering for review. Installation CAN continue under current conditions with no impact on progress — but the routing decision should close before the E-W mount is standardized across the field.' },
      { title: 'Chemik LV cable/harness delivery is the new critical path to energization', level: 'Critical', owner: 'Luis Romero Montero / Clara Lopez / Chemik (Felix A. Perez) / Joshua Spalding', note: 'AIR CONFIRMED: Luis Romero formally confirmed the air shipment to Chemik Jul 28 (\'Ok con el envio aereo\') — Chemik owes arrival dates; fabrication of ALL elements finishes next week and pallet configuration is switching to air. Background (Jul 17 thread): sea transit would land Sep 11-18 — incompatible with Sep 25. Only 18% of the 3-string harness has shipped by air; the remainder (800+800) is not built until Jul 24 and is insufficient to complete Area A. Air shipments in transit: PL_260706 (ETA Jul 16), PL_260601 and PL_260709 (ETA Jul 23) — none contain harness. Jul 21 packing-list reconciliation (Clara/Chemik): PL_260715 jumper quantities do not match; the 72 DB boxes on PL_260609 shipped without listed brackets (Chemik says integrated in the boxes — confirming); PL_260714 correct. No new shipment-status update from Chemik — chase. Luis Romero (Construction Director) has demanded the final shipments move by AIR so all material lands before end of August; without it the LV pull cannot start in earnest and the required rate jumps to ~12,000-17,000 lf/day over a compressed window. This now gates DC/LV, pre-commissioning and the Oct 16 PIS. PROJECT DECISION (Jul 17): ALL remaining Chemik packages are to be AIR-FREIGHTED — sea transport is off the table as it cannot meet the milestones.' },
      { title: 'SET scope and deliveries at risk — AB Power has no work plan; scope moving to a third party', level: 'Critical', owner: 'Axel Cano / Audelio Zuniga / AB Power / Michael Power / Procurement', note: 'Jul 17 procurement review: AB Power has presented neither a SET work plan nor a material-delivery plan. Greensol is removing partial scope from AB Power (deduct + fee) and bringing in a third party (Michael Power), plus self-buying the missing material list (BUS-connectors flagged urgent). Portico steel structure arriving Jul 16-17 (next-week arrival not yet confirmed). Oil-pit grating (tramex) is being procured separately to close the SET payment milestone 100% and avoid Heelstone payment objections.' },
      { title: 'SCADA and field instrumentation slipping — recovery plan owed', level: 'Critical', owner: 'SCADA supplier / Clara Lopez / Joshua Spalding', note: 'Jul 17 review: a SCADA delay was reported. The FAT can proceed without the servers in the first week of August, but the field boxes and meteo stations will not ship until the first week of September — a risk to zonal energization and the Oct 16 PIS. A recovery plan has been requested and is still owed; the team intends to hold the FAT and press for firm dates.' },
      { title: 'Tracker and pile scope adjustments from the Jul 17 review', level: 'Watch', owner: 'Luis Romero / Audelio Zuniga / Workforce / United', note: 'The remaining 10 MW of tracker assembly is being PULLED from Workforce (capability concern) — reassignment pending (United now holds full mechanical in Zones F & G). Missing piles: Plan B is to double smaller-section site piles or reinforce with concrete while Axel chases supply. EGLE will not allow swapping the remaining HDD bores for plowing; the last 4 bores continue with ~100 ft extensions each past the wetland.' },
      { title: 'Piles beat the required rate for the first time since the weather stop — but the stock buffer is now the constraint', level: 'Critical', owner: 'United / Latnovva / Audelio Zuniga / Manuel Ramirez / Karina Mucino', note: 'Jul 29 delivered 539 piles against a 464 requirement — the first day over rate since the Jul 27 weather stop. United ran 361 in Zone G with 55 people (up from 44), and Latnovva came back on site with 11 people and 2 rigs for 178 in Zone B covering Jul 28-29. Executed 27,714 of 31,352 (88.4%); 3,638 remain and 455/day over the 8 working days to Aug 7 holds that finish. Zone B is 36 piles from complete, F is 11 from complete, E has 344 left, G stands at 1,577 of 3,356 (47.0%) on very hard ground, and D opens ~Aug 5-7. THE NEW BINDING ITEM IS MATERIAL: the site stock buffer has fallen from 1,168 to 629 piles in one day at the current burn — roughly 1.4 days of production against 28,343 delivered. Receipts have to resume this week or delivery, not rigs, decides the Aug 7 date. Still open: the Zone G change-order signature and confirmation of whether Latnovva is in or out.' },
      { title: 'Trackers: QA release, not the build rate, is now the controlling front — 606 released against 916 built', level: 'Critical', owner: 'ECCS / Daniel Morilla / Manuel Ramirez / United / Workforce', note: 'Jul 29: ECCS closed 35 rows in Zone E — the best day since Jul 14 — with 34 more rows standing at 75% that should convert next. United reported its FIRST tracker quantity, 82 Zone F rows opened at 20% (saddles and bearings), and Workforce re-reported the 20 Zone EW rows at 75% after logging them at 95% the day before. Cumulative 916 built of 2,486 (36.8%) against 58/day required for Aug 30. THE BINDING CONSTRAINT HAS MOVED: QA release did not advance on Jul 29 and holds at 606 rows (A 311, C 222, E 73 — E1/E2 only), so 310 built rows are now waiting on Quality while 379 rows stand built in Zone E against only 73 released there. With Zone C modules finished, the released-row buffer in front of the module crews is under two days. Three fronts are now producing rows (ECCS in E, United in F, Workforce in EW) — the release pipeline has to scale with them, not just the assembly rate. MEASUREMENT GAP: 136 partially built rows currently earn NOTHING in the 916 figure, so a day like Jul 29 scores United at zero tracker output for 55 people. Those rows are worth 56.9 row-equivalents as reported (39.1% earned vs the 36.8% gate figure) and 50.1 on a step-weighted ladder. The gate figure must stay 100%-only, but the productivity measure needs the equivalents — and the free-text percentage should be replaced by the 5-step ladder, because the EW rows just moved from 95% to 75% with nothing closed.' },
      { title: 'QA release cadence now feeds the module front — Heelstone log and Area F documents still open', level: 'High', owner: 'Maurin Moure / Daniel Morilla (QA/QC) / ECCS / Manuel Ramirez', note: 'Maurin Moure\'s Jul 27 QA report cleared the paper backlog, but release has not moved since: 606 rows released / 310 pending on 916 built (A 311, C 222, E 73 — E1/E2 only), and pile inspections stand at 26,439 = 95.4% of the 27,714 currently executed (1,275 awaiting inspection). The released buffer ahead of modules is ~160 rows (~3 days at the required module rate) — QA release cadence must now keep pace with the build rate. Module release today lands ~35% per inspections even though installation on the inspected areas is complete. Still open: Heelstone approvals frozen at the Jul 6/13 snapshot (6,682 piles / 107 trackers); refreshed defect count owed (242 as of Jul 6); and some Area F zones were released internally without the subcontractor submitting quality documents — those documents must be recovered.' },
      { title: 'SET foundation, delivery dates, and equipment commitments all need closure', level: 'Critical', owner: 'Axel Cano / AB Power / Karina Mucino / Joshua Spalding / Project Management', note: 'Jul 28 AB Powers tracker shows 21.7% overall (civil 65.6%, structural 10.8%, electrical 5.7%) — piers 7 of 17 complete; Zones A and C inverter stations set by All State with serials logged. MILESTONE Jul 24, 15:33: the MAIN POWER TRANSFORMER was delivered and SET on its foundation (containment berm ready since Jul 12) — the biggest energization item is on site, 14 days after the missed Jul 10 gate. BREAKERS are still awaited, structural steel remains in fabrication, and several electrical items show committed dates after the gate — these are now the controlling SET equipment items.' },
      { title: 'ITS is ahead of the electrical sequence — two drills now running', level: 'On Track', owner: 'ITS / Audelio Zuniga / Angel Urbina', note: 'Jul 24 ITS tracker: 36 of 46 plow segments complete (120,738 ft), 17 of 20 MV bores closed (5,162 ft) and 2 of 14 DC cable-duct bores complete (391 LF, both Jul 22; DC03HB-02 in progress). Borins review (German/Audelio, Jul 27): DC16HB-03 (F-D road crossing) reported COMPLETE by Audelio (workbook still Pending — reconcile); the E-F crossing MUST stay HDD (crosses paved Road 50, no open cut); EW crossings — trench along the alternate route vs aerial crossing under cost comparison; Zone A crossing trenchable at 3 ft without hitting the existing pipe. These are EGLE permits, not drain commissioner. A second, larger drill arrived Jul 23 — from Jul 24 one rig runs the DC ducts and the other the MV wetland bores (Axel). Only 3 MV bores and 10 segments remain; the LV kick-off should confirm crews and work plan for the follow-on scope.' },
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
