'use strict';
// Murch dashboard data - update THIS file for daily changes
// CACHE BUSTER: Jul 28, 2026 (Tue) EOD — FULL JUL 28 CAPTURE: piles +100 (ECCS, Zone E; United EOD count owed) -> 26,836 (85.6%); trackers +30 (ECCS, E) -> 881 (35.4%); modules +3,100 (WF 1,700 + Brumont 1,400, C) -> 33,880 (19.8%). WF racking 20 EW rows @95%. All State = inverter installer (5 stations A+C, serials logged). ECCS elec: 14 LBD today (111/418), E-W supports A3 100% / A5 90%; CABLE PULL STARTS Jul 29 (Luis) — Area A LV-cabled next week = Mike-visit goal. SET: piers 7/17; AB Powers 21.7% (civil 65.6/struct 10.8/elec 5.7). NEW CRITICAL: MV coupling procurement 40-wk leads — emergency plan (Jose). Saturdays MANDATORY all subs. Rates: piles 502 / trackers 57 / modules 4,047 / LV 6,105.
// Note: assetVersion, assetBase, asset(), and assetFallback() are defined in index.html's inline script
// Duplicate declarations have been removed to fix SyntaxError: Identifier 'assetVersion' has already been declared
window.MURCH_DATA = {
    control: {
      asOf: 'Jul 28, 2026',
      piles:    { installed: 26836, total: 31352, gate: '2026-07-28', gateLabel: 'Jul 28', required: 4516, capacity: null, name: 'Piles', unit: 'piles/day' },
      trackers: { installed: 881, released: 606, total: 2486, gate: '2026-08-30', gateLabel: 'Aug 30', required: 57, capacity: 48, name: 'Trackers incl. purlins', unit: 'rows/day' },
      modules:  { installed: 33880, total: 171470, gate: '2026-09-06', gateLabel: 'Sep 6', required: 4047, capacity: null, name: 'Modules', unit: 'mod/day' },
      electrical: { installed: 0, total: 274720, gate: '2026-09-18', gateLabel: 'Sep 18', required: 6105, capacity: null, name: 'LV Electrical', unit: 'lf/day' },
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
      { day: 'Jul 20', total: 192, src: 'site board' }
    ],
    manpowerMixToday: { day: 'Jul 20, 2026', total: 192, mix: [
      { trade: 'Trackers & Piling', people: 97, color: '#0c5f43' },
      { trade: 'Module Installation', people: 51, color: '#168a5b' },
      { trade: 'Electrical & SET', people: 14, color: '#2769a8' },
      { trade: 'Civil & Fencing', people: 11, color: '#b96f18' },
      { trade: 'GreenSol EPC', people: 19, color: '#66716d' }
    ] },
    contractorScore: [
      { date: 'Jul 28 Tue', contractor: 'ECCS', trade: 'Trackers + Piles', output: 30, resource: '53 people zone E — 30 trackers + 100 piles (Zone E now 8,112 / 95.9%)', perUnit: 30, criterion: 57, critLabel: '57 rows/day required — stuck at 30 for a third week; Jose pressed for the step-up' },
      { date: 'Jul 28 Tue', contractor: 'Workforce', trade: 'Modules + Racking', output: 1700, resource: '29 people modules (1,700, zone C) + 19 people racking (20 EW rows to 95%)', perUnit: 1700, criterion: 2000, critLabel: '2,000 mod/day target — 1,700; the 20 EW rows close once the last 5% (final components) lands' },
      { date: 'Jul 28 Tue', contractor: 'Brumont', trade: 'Modules', output: 1400, resource: '15 people · zone C', perUnit: 1400, criterion: 2000, critLabel: '2,000 mod/day target — 1,400; re-man to 18 people still pending' },
      { date: 'Jul 28 Tue', contractor: 'All State', trade: 'Inverters', output: 5, resource: '5 inverter stations installed Mon-Tue: A 01/02/03 + C 05/06 — Zones A and C complete, serials logged', perUnit: 5, criterion: 23, critLabel: '23 stations total — 5 set (100% piling/welding/unloading/welding per station tracker); LV/MV terminations pending' },
      { date: 'Jul 28 Tue', contractor: 'ECCS (electrical)', trade: 'LV', output: 14, resource: '14 LBDs installed today (+17 Saturday -> 111/418); E-W supports A3 100% / A5 90%; cable pull starts Jul 29', perUnit: 14, criterion: 0, critLabel: 'First LV week: supports first, then cable — Area A cabled in LV next week is the client-visit goal' },
      { date: 'Jul 28 Tue', contractor: 'United', trade: 'Piles', output: 0, resource: 'Zone G crews worked — EOD pile count NOT reported yet (owed)', perUnit: 0, criterion: 80, critLabel: 'Output owed: Manuel confirmed crews working; number to be captured next update' },
      { date: 'Jul 27 Mon', contractor: 'ALL SUBS', trade: 'All fronts', output: 0, resource: 'WEATHER DAY — rain; site production stopped on every front (piles, trackers, modules, ITS)', perUnit: 0, criterion: 0, critLabel: 'Zero-production weather day — documented; Jose: Saturdays now MANDATORY for all subs' }
    ],
    scope: [
      { title: 'EPC Management', metric: 'Turnkey', note: 'Project management, safety, QC, contractor deliverables, owner reporting, permitting support, and trade coordination through completion.' },
      { title: 'Civil and Environmental', metric: 'G released', note: 'Rosario Week 26 email says Area G is released for pile driving and material distribution; Area G cut/fill starts after basin completion.' },
      { title: 'Mechanical BOS', metric: '31,352 piles · 2,486 trackers', note: 'Pile driving (26,836 executed, 85.6%), GameChange SAT tracker assembly incl. purlins (881 done, 35.4% — 606 QA-released, 275 pending Quality), and module placement (33,880 executed, 19.8%). D&F pre-drilling complete (7,694/7,694).' },
      { title: 'Electrical BOS', metric: 'ITS plowing on site', note: 'MV collection, HDD, plowing, grounding, DC string and combiner wiring, LV/AC works, inverter installation, SCADA, and testing. Joshua Spalding reported the ITS plowing machine arrived on June 19.' },
      { title: 'Procurement', metric: '171,470 modules', note: 'Panels, racking, purlins, actuators, controllers, cables, inverter stations, combiner boxes, and SET equipment.' },
      { title: 'Commissioning', metric: 'PIS Oct 16', note: 'Cold commissioning, energization, tracker testing, inverter start-up, PR test path, punch list, COD, and substantial completion.' }
    ],
    photos: [
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
      { src: 'https://claped71.github.io/murch-dashboard/assets/recent/thumb-recent-15.jpg?v=20260708-cb-install', fallbackSrc: 'https://claped71.github.io/murch-dashboard/assets/recent/recent-15.jpg', date: 'June 19, 2026', title: 'ITS MV boring operation', note: 'Excavator and crew supporting the ITS medium-voltage boring scope at the wooded crossing workfront.' },
      { src: 'https://claped71.github.io/murch-dashboard/assets/recent/thumb-recent-19.jpg?v=20260708-cb-install', fallbackSrc: 'https://claped71.github.io/murch-dashboard/assets/recent/recent-19.jpg', date: 'June 19, 2026', title: 'SET foundation formwork', note: 'Substation foundation and containment formwork under construction, documenting current SET civil progress.' },
      { src: 'https://claped71.github.io/murch-dashboard/assets/recent/thumb-recent-24.jpg?v=20260708-cb-install', fallbackSrc: 'https://claped71.github.io/murch-dashboard/assets/recent/recent-24.jpg', date: 'June 24, 2026', title: 'Civil/fence workfront conditions', note: 'Field view of civil and fencing workfront conditions supporting Area E/F/G release sequencing.' },
      { src: 'https://claped71.github.io/murch-dashboard/assets/recent/thumb-recent-14.jpg?v=20260708-cb-install', fallbackSrc: 'https://claped71.github.io/murch-dashboard/assets/recent/recent-14.jpg', date: 'June 19, 2026', title: 'Racking workfront beside access road', note: 'Installed pile and racking lines beside stabilized access, documenting active mechanical workfront conditions.' },
      { src: 'https://claped71.github.io/murch-dashboard/assets/recent/thumb-recent-26.jpg?v=20260708-cb-install', fallbackSrc: 'https://claped71.github.io/murch-dashboard/assets/recent/recent-26.jpg', date: 'July 1, 2026', title: 'Control-building access platform fabrication', note: 'Factory photo of access platform/stair components for the control-building package.' }
    ],
    weeklyPlan: [
      { area: '<u>Tracker assembly & QA release</u><span style="background:#b53030;color:#fff;padding:1px 6px;border-radius:3px;font-size:10px;font-weight:700;margin-left:6px">CRITICAL</span>',
        target: '881 / 2,486 done (35.4%) — 606 released, 275 pending QA. ECCS stuck at 30/day; 20 EW rows @95% (WF). Week ask >= 330 rows.',
        minimum: '>= 57/day for Aug 30 (running 30 — Jose pressed ECCS for the step-up).',
        gate: 'QA release cadence keeping pace with the build rate (606 released Jul 27) + United racking ramp (~1.5 wks to full rate).',
        owners: 'ECCS \u00b7 Workforce \u00b7 United | Daniel Morilla | Audelio Zuniga' },
      { area: '<u>Pile production — B / F / G</u><span style="background:#b53030;color:#fff;padding:1px 6px;border-radius:3px;font-size:10px;font-weight:700;margin-left:6px">CRITICAL</span>',
        target: '26,836 / 31,352 (85.6%) — 4,516 left. Close E (344) and F (11); B 214; hold G 300+/day (2,479); D (1,468) to open.',
        minimum: '>= 502/day from Jul 29 holds ~Aug 7 (Jul 28 logged only 100 — ECCS; United count owed).',
        gate: '2 United rigs pending repair verification + Zone G change-order signature. Latnovva closed out — United carries ALL remaining pile scope.',
        owners: 'United | Audelio Zuniga | Manuel Ramirez' },
      { area: '<u>Module installation ramp</u><span style="background:#b53030;color:#fff;padding:1px 6px;border-radius:3px;font-size:10px;font-weight:700;margin-left:6px">CRITICAL</span>',
        target: '33,880 / 171,470 (19.8%) — Jul 28: 3,100. Week ask holds: >= 23,400; SATURDAYS NOW MANDATORY (Jose).',
        minimum: '>= 4,047/day for Sep 6 — re-man Brumont (15 -> 18) and hold Workforce at 29+ people.',
        gate: 'QA-released tracker rows (~1.3-day buffer) + crew size.',
        owners: 'Workforce / Brumont | Audelio Zuniga | Daniel Morilla' },
      { area: '<u>LV electrical — START</u><span style="background:#b53030;color:#fff;padding:1px 6px;border-radius:3px;font-size:10px;font-weight:700;margin-left:6px">CRITICAL</span>',
        target: 'CABLE PULL STARTS Jul 29 (Luis). Jul 28: LBDs 111/418 (+14), E-W supports A3 100% / A5 90%, 17 boxes. GOAL: Area A LV-cabled next week for the Mike/client visit.',
        minimum: '>= 6,105 lf/day from Jul 29 to hold Sep 18 (0 lf on the clock).',
        gate: 'AIR CONFIRMED to Chemik Jul 28 — arrival dates owed (fabrication done next week). Crew stand-up + E-W routing review (Unistrut) before standardizing.',
        owners: 'ECCS \u00b7 East Carolina \u00b7 Self-Perform | Luis Romero | Clara Lopez' },
      { area: '<u>GameChange deliveries</u>',
        target: 'BOM confirmed COMPLETE minus 16 purple tubes (Shreeya, Jul 27) — land them Wed Jul 29.',
        minimum: 'Claim PL-3295-094-HT (1 purple bundle) unanswered in the Jul 27 reply; re-sign corrected BOL + upload ~21 missing PODs.',
        gate: 'None on material — crew ramp caps assembly, not tubes.',
        owners: 'GameChange (Shreeya Devkota) | Manuel Ramirez | Karina Mucino' },
      { area: '<u>SET & inverter foundations</u>',
        target: 'SET 21.7% (AB Powers Jul 28); piers 7/17 — all 17 this week. Zones A+C inverter stations ALL SET by All State (5/23). Station pile-sets 21/23 — close 10-D and 16-F.',
        minimum: 'All 23 foundations ready before the end-July inverter arrivals.',
        gate: 'Breakers + structural steel (in fabrication); Michael Power scope transfer.',
        owners: 'AB Power / Michael Power / Dig It | Axel Cano | Joshua Spalding' },
      { area: '<u>MV plowing & HDD</u>',
        target: 'MV bores 17/20 \u00b7 segments 36/46 \u00b7 DC ducts 2/14 — two drills; close >= 2 MV bores + 5 segments this week.',
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
      { title: 'SET tracker', metric: '21.7% overall', note: 'Jul 28 AB Powers tracker: overall 21.7% (civil 65.6%, structural 10.8%, electrical 5.7%) — piers 7 of 17 complete. Control building on site since Jul 7. Jul 12 (Sun): transformer-foundation containment berm complete at the substation. Jul 12: all 18 inverter stations available on site have their base plates welded.' }
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
      { name: 'LATNOVVA — CLOSED OUT', scope: 13954, installed: 13954, remaining: 0, done: 100.0, zones: 'Completed A, C, EW + B/E shares (final 13,954 piles)', status: 'Complete', note: 'Latnovva FINISHED its project activities (Jose, Jul 28) — its remaining scope is TRANSFERRED to United Services. Final credited installation: 13,954 piles. No further Latnovva progress data expected.' },
      { name: 'ECCS / Area E control', scope: 4434, installed: 4358, remaining: 76, done: 98.3, zones: 'Area E shared tracker workfront', status: 'On Track', note: "Area-based control allocation used only so dashboard totals reconcile with Audelio's July 6 official installed-production basis." },
      { name: 'United', scope: 12964, installed: 8524, remaining: 4440, done: 65.8, zones: 'Zones D + F + G + ALL scope transferred from Latnovva (B/E remainders)', status: 'Active', note: 'Jul 28 workbook: 8,524 piles — Zone F 7,647 (99.9%, 11 from close) + Zone G 877 (26.1%) + Zone D 0. United now carries ALL remaining pile scope (4,440) after the Latnovva transfer, incl. Zone B 214 and the non-ECCS Zone E remainder. 3 rig breakdowns Sat (2 pending repair confirmation); Zone F racking material separation started.' },
      { name: 'Project Total', scope: 31352, installed: 26836, remaining: 4516, done: 85.6, zones: "All zones | Construction Manager report", status: 'Critical', note: "Total executed: 26,836 (85.6%) — Jul 28 workbook roll-up 26,736 + 100 field-reported Jul 28 (ECCS, Zone E). United's Jul 28 pile count still owed ('siguen trabajando'). Latnovva closed out (scope transferred to United)." }
    ],
    zones: [
      { zone: 'Zone A', contractor: 'Latnovva', scope: 3834, installed: 3834, remaining: 0, done: 100.0, status: 'Complete', note: 'Jul 8 PROGRESS table: Zone A pile installation complete.' },
      { zone: 'Zone C', contractor: 'Latnovva', scope: 2946, installed: 2946, remaining: 0, done: 100.0, status: 'Complete', note: 'July 6 Const. Management workbook; zone complete.' },
      { zone: 'Zone E', contractor: 'ECCS / United (ex-Latnovva share)', scope: 8456, installed: 8112, remaining: 344, done: 95.9, status: 'Active', note: 'Jul 28: +100 piles (ECCS) on the workbook-reconciled base -> 8,112 (95.9%), 344 to close.' },
      { zone: 'Zone EW', contractor: 'Latnovva', scope: 846, installed: 846, remaining: 0, done: 100.0, status: 'Complete', note: 'Jul 8 workbook: Zone EW complete at 846 of 846.' },
      { zone: 'Zone B', contractor: 'United (transferred from Latnovva)', scope: 2788, installed: 2574, remaining: 214, done: 92.3, status: 'Active', note: 'Jul 28 workbook roll-up: 2,574 (92.3%) — block map fully reconciled (prior field self-report 2,623 re-mapped).' },
      { zone: 'Zone D', contractor: 'United', scope: 1468, installed: 0, remaining: 1468, done: 0, status: 'Material Hold', note: '2nd-50% work. Jul 21: office trailers relocated off Zone D — the occupied area is released and demolition of the Zone D concrete slab can proceed ahead of the pile workfront.' },
      { zone: 'Zone F', contractor: 'United', scope: 7658, installed: 7647, remaining: 11, done: 99.9, status: 'Active', note: 'Jul 28 workbook roll-up: 7,647 (99.9%) — only 11 piles from zone close; the block map had F well ahead of the field self-reports. CB/TP electrical piles stay outside the 31,352.' },
      { zone: 'Zone G', contractor: 'United', scope: 3356, installed: 877, remaining: 2479, done: 26.1, status: 'Active', note: 'STARTED Jul 21 (22); then 63 / 192 / 364 / 236 — 877 total (26.1%). Jul 25 run cut by 3 rig breakdowns (2 open into Monday). FULL Zone G start needs only the SIGNED CHANGE ORDER (ChO) — chase signature. ECCS also completed 1 inverter foundation in Zone G Jul 21. United holds full mechanical in F & G. Area G released for pile driving; cut/fill after basin completion.' }
    ],
    production: [
      { name: 'Project pile installation', remaining: '4,793 piles', target: 'Floor 502/day holds ~Aug 7 (4,516 remain)', latest: 'Jul 28: 100 (ECCS, Zone E); United count owed. Jul 27: 0 (weather)', cumulative: '26,836 / 31,352 executed (85.6%) — workbook roll-up 26,736 + 100 field (Jul 28)', status: 'Critical', note: 'Workbook roll-up is the controlling basis; field logs add the daily deltas. Latnovva closed out — United carries all remaining pile scope; finish projects ~Aug 7 at 502/day.' },
      { name: 'Pile delivery / site stock', remaining: '3,009 piles undelivered', target: 'Receipts must exceed the install burn to zone close', latest: 'Jul 28 workbook: 28,343 piles delivered (90.4% of 31,352)', cumulative: '28,343 delivered; 1,507 available above the 26,836 executed', status: 'On Track', note: 'Stock = delivered minus executed. Delivery is not the constraint.' },
      { name: 'Drill and backfill', remaining: '0 pre-drills', target: 'Scope closed — no gate to piling', latest: 'All units closed in the official workbook', cumulative: '7,694 / 7,694 complete (100.0%)', status: 'Complete', note: 'July 6 Construction Management progress source shows drill-and-backfill complete.' },
      { name: 'Civil grading / cut-fill', remaining: 'Complete', target: '— No approved daily target in source', latest: 'Rosario Jul 23: cut/fill 100% complete (finished Jul 17)', cumulative: '100% complete — Rosario Jul 23 (Lounsbury)', status: 'Complete', note: 'Complete Jul 17 (Lounsbury). Area G cut/fill starts after G basins.' },
      { name: 'Internal roads', remaining: '28% of scope', target: '— No approved daily target in source', latest: 'Rosario Jul 23 civil progress (Topland)', cumulative: '72% complete — target end Jul 31', status: 'Active', note: 'Topland; roads still control logistics access.' },
      { name: 'Tracker completion incl. purlins', remaining: '1,605 to build · 1,880 to QA-release', target: '57 completed rows/day now required for Aug 30', latest: 'Jul 28: 30 (ECCS, E) + 20 EW rows to 95% (WF racking)', note: 'Row counts complete only with purlins. Released split (Maurin Jul 27): 606 released / 275 pending on 881 built; workbook reconciliation open.', cumulative: '881 done (35.4%): 606 QA-released + 275 pending Quality / 2,486 total', status: 'Critical' },
      { name: 'ITS HDD boring', remaining: '3 of 20 MV bores · 12 of 14 DC bores', target: 'Minimum 1 completed bore/day', latest: 'Jul 24: MV 17/20 (5,162 ft) · DC 2/14 (391 LF), 1 in progress', cumulative: '17 / 20 MV bores (85%, 5,162 ft) + 2 / 14 DC bores (391 LF)', status: 'Watch', note: 'Two drills since Jul 24 — one DC, one MV wetlands; EGLE ruled the last MV bores stay bores.' },
      { name: 'ITS MV plowing', remaining: '10 of 46 segments', target: 'Minimum 1 completed segment/day', latest: 'Jul 24: 0 new segments — 36/46 holds', cumulative: '36 / 46 segments complete (76.6%); 120,738 ft installed', status: 'On Track', note: 'Plowing leads the electrical sequence; crews shifted to the bores.' },
      { name: 'SET construction', remaining: '78.3% of overall scope', target: '— No approved daily progress target in source', latest: 'Jul 28: Zones A AND C inverter stations ALL SET by All State (5 of 23, serials logged; pending LV/MV terminations); piers 7/17', cumulative: '21.7% overall (civil 65.6%, structural 10.8%, electrical 5.7%) per the Jul 28 AB Powers tracker', status: 'Critical', note: 'TRANSFORMER SET Jul 24; piers 7/17. Breakers + structural steel (fabrication) now controlling; AB Power plan gaps -> Michael Power.' },
      { name: 'Panel delivery', remaining: '14,230 modules to deliver', target: '— No approved daily delivery target in source', latest: '— Latest daily receipt not reported', cumulative: '157,240 / 171,470 delivered (91.7%)', status: 'On Track', note: '123,360 modules on site above the 33,880 executed — no constraint.' },
      { name: 'Module installation', remaining: '140,690 modules', target: '4,047 modules/day required for Sep 6', latest: 'Jul 28: 3,100 (WF 1,700 + Brumont 1,400, zone C)', cumulative: '33,880 modules field-reported (19.8%) — workbook carries 29,526, closing on the field basis', status: 'Critical', note: 'Four days near 3,000+; record 3,601. Gap to 3,908/day = Brumont re-man (14 -> 18) + Saturdays.' }
    ],
    dailyProductionHistory: [
      { task: 'Pile installation', period: 'Jun 18-Jul 28 measured days', minimum: '502 piles/day floor holds ~Aug 7 (4,516 left over 9 working days from Jul 29)', above: 0, below: 31, latest: 'Jul 28: 100 (ECCS, Zone E) — United count owed', note: 'Mon Jul 27 lost to rain — zero piles. Jul 28 workbook re-base: 26,736 executed (85.3%), F only 11 from close. 2 United rigs pending repair verification; Latnovva closed out; ~Aug 7 finish needs 502/day.', daily: [{ day: 'Jun 18', value: 20, target: 1022, unit: 'piles' }, { day: 'Jun 19', value: 79, target: 1022, unit: 'piles' }, { day: 'Jun 22', value: 251, target: 1022, unit: 'piles' }, { day: 'Jun 23', value: 101, target: 1022, unit: 'piles' }, { day: 'Jun 25', value: 370, target: 1022, unit: 'piles' }, { day: 'Jun 26', value: 340, target: 1022, unit: 'piles' }, { day: 'Jun 29', value: 261, target: 1022, unit: 'piles' }, { day: 'Jun 30', value: 234, target: 1022, unit: 'piles' }, { day: 'Jul 1', value: 252, target: 1022, unit: 'piles' }, { day: 'Jul 2', value: 274, target: 1022, unit: 'piles' }, { day: 'Jul 3', value: 134, target: 1022, unit: 'piles' }, { day: 'Jul 6', value: 307, target: 1022, unit: 'piles' }, { day: 'Jul 7', value: 399, target: 1022, unit: 'piles' }, { day: 'Jul 8', value: 646, target: 1022, unit: 'piles' }, { day: 'Jul 9', value: 669, target: 1022, unit: 'piles' }, { day: 'Jul 10', value: 680, target: 1022, unit: 'piles' }, { day: 'Jul 11', value: 680, target: 1022, unit: 'piles' }, { day: 'Jul 13', value: 608, target: 1022, unit: 'piles' }, { day: 'Jul 14', value: 695, target: 1022, unit: 'piles' }, { day: 'Jul 15', value: 481, target: 1022, unit: 'piles' }, { day: 'Jul 16', value: 504, target: 1022, unit: 'piles' }, { day: 'Jul 17', value: 472, target: 1022, unit: 'piles' }, { day: 'Jul 18', value: 608, target: 1022, unit: 'piles' }, { day: 'Jul 20', value: 622, target: 1022, unit: 'piles' }, { day: 'Jul 21', value: 253, target: 1176, unit: 'piles' }, { day: 'Jul 22', value: 202, target: 1419, unit: 'piles' }, { day: 'Jul 23', value: 284, target: 1419, unit: 'piles' }, { day: 'Jul 24', value: 364, target: 1349, unit: 'piles' }, { day: 'Jul 25', value: 236, target: 1677, unit: 'piles' }, { day: 'Jul 27', value: 0, target: 2397, unit: 'piles' }, { day: 'Jul 28', value: 100, target: 462, unit: 'piles' }] },
      { task: 'Tracker production control (incl. purlin completion)', period: 'Jun 17-Jul 28', minimum: '57 rows/day (required for Aug 30)', above: 4, below: 26, latest: 'Jul 28: 30 (ECCS, E); WF racking 20 EW rows @95%', note: 'Row counts complete only with purlins installed. Released split (Maurin Jul 27): 606 released / 275 pending on 881 built.', daily: [{ day: 'Jun 17', value: 15, target: 50, unit: 'units' }, { day: 'Jun 18', value: 35, target: 50, unit: 'units' }, { day: 'Jun 19', value: 26, target: 50, unit: 'units' }, { day: 'Jun 20', value: 31, target: 50, unit: 'units' }, { day: 'Jun 21', value: 0, target: 50, unit: 'units' }, { day: 'Jun 22', value: 48, target: 50, unit: 'units' }, { day: 'Jun 23', value: 31, target: 50, unit: 'units' }, { day: 'Jun 24', value: 0, target: 50, unit: 'units' }, { day: 'Jun 25', value: 57, target: 50, unit: 'units' }, { day: 'Jun 26', value: 26, target: 50, unit: 'units' }, { day: 'Jun 29', value: 29, target: 50, unit: 'units' }, { day: 'Jun 30', value: 30, target: 50, unit: 'units' }, { day: 'Jul 1', value: 51, target: 50, unit: 'units' }, { day: 'Jul 7', value: 29, target: 50, unit: 'units' }, { day: 'Jul 8', value: 0, target: 50, unit: 'units' }, { day: 'Jul 9', value: 0, target: 50, unit: 'units' }, { day: 'Jul 10', value: 0, target: 50, unit: 'units' }, { day: 'Jul 13', value: 29, target: 50, unit: 'units' }, { day: 'Jul 14', value: 49, target: 50, unit: 'units' }, { day: 'Jul 15', value: 35, target: 50, unit: 'units' }, { day: 'Jul 16', value: 35, target: 50, unit: 'units' }, { day: 'Jul 17', value: 25, target: 50, unit: 'units' }, { day: 'Jul 18', value: 0, target: 50, unit: 'units' }, { day: 'Jul 20', value: 21, target: 50, unit: 'units' }, { day: 'Jul 21', value: 25, target: 51, unit: 'units' }, { day: 'Jul 22', value: 39, target: 51, unit: 'units' }, { day: 'Jul 23', value: 28, target: 51, unit: 'units' }, { day: 'Jul 24', value: 30, target: 52, unit: 'units' }, { day: 'Jul 27', value: 0, target: 55, unit: 'units' }, { day: 'Jul 28', value: 30, target: 56, unit: 'units' }] },
      { task: 'Module installation', period: 'Jul 3-Jul 28 field start', minimum: '4,047 modules/day (required for Sep 6)', above: 0, below: 20, latest: 'Jul 28: 3,100 (Workforce 1,700 + Brumont 1,400, zone C)', note: 'Four straight days near 3,000+; record 3,601 (Jul 20). Brumont re-man 14 -> 18 is the gap to 3,908.', daily: [{ day: 'Jul 3', value: 234, target: 3738, unit: 'modules' }, { day: 'Jul 6', value: 780, target: 3738, unit: 'modules' }, { day: 'Jul 7', value: 156, target: 3738, unit: 'modules' }, { day: 'Jul 8', value: 936, target: 3738, unit: 'modules' }, { day: 'Jul 9', value: 1308, target: 3738, unit: 'modules' }, { day: 'Jul 10', value: 1802, target: 3738, unit: 'modules' }, { day: 'Jul 11', value: 517, target: 3738, unit: 'modules' }, { day: 'Jul 13', value: 2922, target: 3738, unit: 'modules' }, { day: 'Jul 14', value: 2335, target: 3738, unit: 'modules' }, { day: 'Jul 15', value: 780, target: 3738, unit: 'modules' }, { day: 'Jul 16', value: 858, target: 3738, unit: 'modules' }, { day: 'Jul 17', value: 2226, target: 3738, unit: 'modules' }, { day: 'Jul 18', value: 0, target: 3738, unit: 'modules' }, { day: 'Jul 20', value: 3601, target: 3738, unit: 'modules' }, { day: 'Jul 21', value: 3082, target: 3754, unit: 'modules' }, { day: 'Jul 22', value: 2887, target: 3776, unit: 'modules' }, { day: 'Jul 23', value: 3456, target: 3776, unit: 'modules' }, { day: 'Jul 24', value: 3134, target: 3785, unit: 'modules' }, { day: 'Jul 27', value: 0, target: 3908, unit: 'modules' }, { day: 'Jul 28', value: 3100, target: 4020, unit: 'modules' }] },
      { task: 'ITS MV plowing', period: 'Jun 17-Jul 17', minimum: '1 completed segment/day', above: 11, below: 16, latest: 'Jul 28: 0 segments — crews on MVHB-11 + pipe fusing', note: 'Plowing holds 36/46 (120,738 ft) — crews shifted to the DC/wetland bores.', daily: [{ day: 'Jun 17', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 18', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 19', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 20', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 21', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 22', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 23', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 24', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 25', value: 3, target: 1, unit: 'seg' }, { day: 'Jun 26', value: 4, target: 1, unit: 'seg' }, { day: 'Jun 27', value: 1, target: 1, unit: 'seg' }, { day: 'Jun 28', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 29', value: 2, target: 1, unit: 'seg' }, { day: 'Jun 30', value: 5, target: 1, unit: 'seg' }, { day: 'Jul 1', value: 0, target: 1, unit: 'seg' }, { day: 'Jul 2', value: 1, target: 1, unit: 'seg' }, { day: 'Jul 6', value: 0, target: 1, unit: 'seg' }, { day: 'Jul 7', value: 0, target: 1, unit: 'seg' }, { day: 'Jul 8', value: 5, target: 1, unit: 'seg' }, { day: 'Jul 9', value: 2, target: 1, unit: 'seg' }, { day: 'Jul 10', value: 5, target: 1, unit: 'seg' }, { day: 'Jul 11', value: 1, target: 1, unit: 'seg' }, { day: 'Jul 13', value: 2, target: 1, unit: 'seg' }, { day: 'Jul 14', value: 2, target: 1, unit: 'seg' }, { day: 'Jul 15', value: 3, target: 1, unit: 'seg' }, { day: 'Jul 16', value: 0, target: 1, unit: 'seg' }, { day: 'Jul 17', value: 0, target: 1, unit: 'seg' }, { day: 'Jul 27', value: 0, target: 1, unit: 'seg' }, { day: 'Jul 28', value: 0, target: 1, unit: 'seg' }] },
      { task: 'ITS HDD boring', period: 'Jul 2-Jul 20 measured days', minimum: '1 completed bore/day', above: 4, below: 10, latest: 'Jul 28: MVHB-11 in progress + pipe fusing; 17/20 MV holds', note: 'Two drills since Jul 24 — one on DC ducts, one on MV wetland bores.', daily: [{ day: 'Jul 2', value: 1, target: 1, unit: 'bores' }, { day: 'Jul 6', value: 0, target: 1, unit: 'bores' }, { day: 'Jul 7', value: 0, target: 1, unit: 'bores' }, { day: 'Jul 8', value: 1, target: 1, unit: 'bores' }, { day: 'Jul 9', value: 1, target: 1, unit: 'bores' }, { day: 'Jul 10', value: 1, target: 1, unit: 'bores' }, { day: 'Jul 11', value: 1, target: 1, unit: 'bores' }, { day: 'Jul 13', value: 2, target: 1, unit: 'bores' }, { day: 'Jul 14', value: 0, target: 1, unit: 'bores' }, { day: 'Jul 15', value: 0, target: 1, unit: 'bores' }, { day: 'Jul 16', value: 0, target: 1, unit: 'bores' }, { day: 'Jul 17', value: 0, target: 1, unit: 'bores' }, { day: 'Jul 20', value: 1, target: 1, unit: 'bores' }, { day: 'Jul 27', value: 0, target: 1, unit: 'bores' }, { day: 'Jul 28', value: 0, target: 1, unit: 'bores' }] }
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
      { activity: 'GameChange material delivery sequence', contractor: 'GameChange / NTG / Landstar', start: '2026-06-17', end: '2026-07-16', status: 'Critical', progress: 90, baseline: 55, note: 'TUBES RESOLVED — Shreeya CONFIRMED Jul 27: all BOM material delivered as of Jul 24 except 16 purple tubes, committed Wed Jul 29. OPEN CLAIM: purple bundle missing from PL-3295-094-HT (Manuel, Jul 24) — NOT addressed in the Jul 27 reply. NEW ADMIN Jul 27: GameChange requests the corrected BOL re-signed and ~21 missing PODs uploaded (load list provided). Workbook Jul 24: tubes 20,908 of 28,869 delivered (72.4%) — pre-Friday-trucks cut. Prior open items: POD pending on PL-3295-084-HT; GameChange trucks staging on public roads (Road Commission monitoring, fines passed to GameChange). Site pile stock: 28,343 delivered vs 26,736 executed (Jul 28 workbook) — 1,607-pile buffer. Receiving cap 14 pile + 8 racking loads/day; loads count as scheduled until POD/site receipt.' },
      { activity: 'United Zone F mobilization and pile-spot marking', contractor: 'United', start: '2026-06-15', end: '2026-06-21', status: 'Complete', progress: 100, baseline: 0, note: 'Completed on schedule: marking, mobilization and onboarding closed; United began ramming Jun 22 and has produced daily since.' },
      { activity: 'Overall pile installation acceleration', contractor: 'All pile contractors', start: '2026-06-22', end: '2026-07-28', status: 'Critical', progress: 85.3, baseline: 48.4, note: '4,793 piles remain (block-map 22,900 + 3,659 field) — Jul 28 gate out of reach; ~Aug 7 finish needs 502/day. Jul 25 (Sat): 236 (all Zone G; 3 rig breakdowns). Rig repairs, weather recovery and Saturday work are the escalated levers — United now carries all remaining pile scope (Latnovva closed out).' },
      { activity: 'Tracker assembly incl. purlin install', contractor: 'ECCS', start: '2026-06-08', end: '2026-08-30', status: 'At Risk', progress: 35.4, baseline: 0, note: 'Jul 28: 30 rows (ECCS, Zone E) + Workforce racking 20 EW rows to 95% — 881 done / 606 QA-released / 275 pending QA. United racking crew ramping (30 people arrived this week). Workbook reconciliation closing: Jul 28 cut shows 715 pre-assembled / 567 complete vs the 851 field basis. QA release cadence is the controlling item for the module front.' },
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
      { label: 'Jul 20 current', week: 'W30', people: 192, color: '#0c5f43', offset: 168 }
    ],
    actualResources: [
      { contractor: 'ECCS', people: 60, label: '60 · tracker installation' },
      { contractor: 'WORKFORCE', people: 34, label: '34 · module installation' },
      { contractor: 'UNITED', people: 24, label: '24 · F Area piling' },
      { contractor: 'BRUMONT', people: 17, label: '17 · module installation' },
      { contractor: 'LATNOVVA', people: 13, label: '13 · B Area piling' },
      { contractor: 'GREENSOL', people: 12, label: '12 · EPC management' },
      { contractor: 'ITS', people: 9, label: '9 · electrical MV/HDD' },
      { contractor: 'GREENSOL CONSTRUCTION', people: 7, label: '7 · site supervision' },
      { contractor: 'TOPLAND', people: 6, label: '6 · civil & roads' },
      { contractor: 'ABPOWER', people: 5, label: '5 · electrical systems' },
      { contractor: 'LOUNSBURY', people: 3, label: '3 · civil earthworks' },
      { contractor: 'ECS', people: 2, label: '2 · environmental support' },
      { contractor: 'DIG IT', people: 0, label: '0 · SET foundations (off site)' },
      { contractor: 'HI-TECH', people: 0, label: '0 · substation & QI (off site)' },
      { contractor: 'HURRICANE', people: 0, label: '0 · fencing (off site)' },
      { contractor: 'SWCA', people: 0, label: '0 · environmental (off site)' },
      { contractor: 'WESTWOOD', people: 0, label: '0 · civil consulting (off site)' }
    ],
    todayFieldSnapshot: {
      date: 'Jul 20, 2026',
      total: 192,
      rows: [
        { contractor: 'ECCS', people: 60, category: 'tracker', note: 'Tracker structural installation + QA — Zones C1/C2 releasing today, the controlling front' },
        { contractor: 'WORKFORCE', people: 34, category: 'module', note: 'Module installation crew, primary — ramped to 34' },
        { contractor: 'UNITED', people: 24, category: 'pile', note: 'Zone F pile driving — 24 crew, 4 of 6 rigs (2 damaged)' },
        { contractor: 'BRUMONT', people: 17, category: 'module', note: 'Module installation crew, secondary' },
        { contractor: 'LATNOVVA', people: 13, category: 'pile', note: 'Zone B pile driving — 2 rigs' },
        { contractor: 'GREENSOL (EPC Team)', people: 12, category: 'epc', note: 'Project management and EPC oversight' },
        { contractor: 'ITS', people: 9, category: 'electrical', note: 'Electrical: MV plowing / HDD — DC cable-duct bores started Jul 23' },
        { contractor: 'GREENSOL CONSTRUCTION', people: 7, category: 'epc', note: 'Self-perform site supervision, QA and rework' },
        { contractor: 'TOPLAND', people: 6, category: 'civil', note: 'Internal roads' },
        { contractor: 'ABPOWER', people: 5, category: 'electrical', note: 'Substation (SET) and inverter-station works' },
        { contractor: 'LOUNSBURY', people: 3, category: 'civil', note: 'Civil earthworks / Area G basins' },
        { contractor: 'ECS', people: 2, category: 'civil', note: 'Environmental controls / sediment basins' },
        { contractor: 'DIG IT', people: 0, category: 'electrical', note: 'No crew on site today' },
        { contractor: 'HI-TECH', people: 0, category: 'electrical', note: 'No crew on site today' },
        { contractor: 'HURRICANE', people: 0, category: 'civil', note: 'No fencing crew on site today' },
        { contractor: 'SWCA', people: 0, category: 'support', note: 'No crew on site today' },
        { contractor: 'WESTWOOD', people: 0, category: 'support', note: 'No crew on site today' },
        { contractor: 'KALAMAZOO', people: 0, category: 'support', note: 'No crew on site today' }
      ]
    },
    equipmentNotes: [
      { contractor: 'GreenSol', equipment: 'Site trucks and laptops for management/QC field use; no heavy equipment assigned.', output: 'Daily site walk, safety audits, and progress verification.' },
      { contractor: 'GreenSol Construction', equipment: 'Hand tools and site vehicles supporting self-perform labor.', output: 'Supporting active workfronts; no heavy equipment assigned.' },
      { contractor: 'ECS', equipment: 'No crew or equipment on site today.', output: 'Not applicable.' },
      { contractor: 'Hurricane', equipment: 'Standard fencing install tools (post drivers, hand tools).', output: 'Fence ~95% complete (Rosario Jul 23): A–F done, Zone G remainder + gates remaining.' },
      { contractor: 'Topland', equipment: 'Grading/road equipment (grader, roller).', output: 'Internal roads scope; Area F access blocked ~10 AM by a concrete pour.' },
      { contractor: 'Lounsbury', equipment: 'Earthwork equipment (excavator, dozer) for cut/fill and basin work.', output: 'Cut/fill 100% complete (Jul 17); Area G basin closeout continuing (basins 83%).' },
      { contractor: 'ECCS', equipment: 'Tracker structural installation crew; equipment count varies by workfront.', output: 'Jul 24 (Fri): 53 people — 30 trackers Zone E. Jul 23: 54 people — 28 trackers + 62 tracker piles Zone E.' },
      { contractor: 'United', equipment: '6 ramming machines — 3 breakdowns Sat (1 fixed, 2 open into Monday).', output: 'Jul 25 (Sat): 236 piles ALL Zone G + 19 CB + 3 TP electrical — 32 people, 14 pull tests; Zone F racking material separation started. Jul 24: 364 (all G, ~91/rig).' },
      { contractor: 'Latnovva', equipment: 'DEMOBILIZED — activities finished.', output: 'CLOSED OUT (Jul 28): final 13,954 piles; remaining scope transferred to United. No further reports expected.' },
      { contractor: 'Workforce', equipment: 'TWO crews: module installation (16) + tracker racking (15).', output: 'Jul 24 (Fri): 1,730 modules Zone C + racking crew installing dampers/actuators on mounted rows. Jul 23: 1,456 modules + 17 tracker rows advanced to 50% in EW (~9 row-equiv).' },
      { contractor: 'Brumont', equipment: 'Module installation tools; 14-person crew (lost 4 Jul 24).', output: 'Jul 24 (Fri): 1,404 modules Zone C — 14 people. Jul 23: 2,000 modules (18 people), on target for the 2nd straight day.' },
      { contractor: 'ITS', equipment: 'TWO HDD drills (2nd larger unit arrived Jul 23) + MV cable-plowing machine.', output: 'Jul 24: 36/46 plow segments (120,738 ft), 17/20 MV bores (5,162 ft), 2/14 DC bores (391 LF); crews 11-12.' },
      { contractor: 'AB Power', equipment: 'SET / electrical installation equipment.', output: 'Supporting control-building and SET electrical scope.' },
      { contractor: 'Dig It', equipment: 'SET pier formwork and foundation equipment (AB Power subcontractor).', output: 'Through Jul 24: 6 of 17 substation piers COMPLETE incl. concrete (5/17 Jul 23, 6/17 Jul 24); plan 3-4 piers/day.' },
      { contractor: 'Hi Tech', equipment: 'Electrical / substation support equipment; Quality Inspector coordination.', output: 'SET / substation grounding and commissioning support scope.' },
      { contractor: 'Westwood', equipment: 'No crew or equipment on site today.', output: 'Not applicable.' },
      { contractor: 'SWCA', equipment: 'No crew or equipment on site today.', output: 'Not applicable.' }
    ],
    resourcePlan: [
      { label: 'Total site resources', actual: 191, target: 105, targetLabel: 'Acceleration peak 95-105', note: 'Includes field labor plus management/QC/HSE; actual is the Jul 13 on-site field snapshot (191) tracking current crew allocation.' },
      { label: 'Tracker / piling crew', actual: 85, target: 85, targetLabel: 'ECCS (50) + United (35, incl. ex-Latnovva scope)', note: 'Tracker (50) and piling (35) combined: 85 personnel dedicated to structural and piling scope.' },
      { label: 'Module crew Phase 1', actual: 26, committed: 26, target: 22, targetLabel: '22 by Jul 7', note: 'Workforce is producing at 26 with the rolling start; primary module crew on site.' },
      { label: 'Module full-field crew', actual: 41, committed: 41, target: 40, targetLabel: '40 by Jul 13+', note: 'Workforce (26) + Brumont (15) = 41 installers on site — full-field module gate achieved.' },
      { label: 'Electrical & SET crew', actual: 27, committed: 27, target: 25, targetLabel: '25 electrical + SET', note: 'ITS (14) + ABPOWER (5) + DIG IT (4) + HI-TECH (4) = 27 electrical and SET-related personnel.' },
      { label: 'Greensol site team', actual: 20, target: 20, targetLabel: '13 staff + 7 labor', note: 'GREENSOL (13) + GREENSOL CONSTRUCTION (7) = 20 EPC team members on site.' },
      { label: 'Civil & environmental crew', actual: 18, committed: 18, target: 15, targetLabel: '15 civil/environmental', note: 'HURRICANE (3) + TOPLAND (7) + LOUNSBURY (3) + WESTWOOD (1) + ECS (2) + SWCA (2) = 18 civil and environmental support.' }
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
      { name: 'Mechanical Completion', target: 'Sep 25, 2026', forecast: 'Sep 20-25, 2026', status: 'High', note: 'Re-cascaded dates (trackers Aug 30, modules Sep 6, LV/DC Sep 18) put MC back on the Sep 25 target — achievable only if the Jul 28 pile gate (~736/day required) holds and the module crew reaches full-field rate.' },
      { name: 'Provisional Interconnection', target: 'Oct 16, 2026', forecast: 'Oct 12-16, 2026', status: 'High', note: 'With MC forecast Sep 20-25 and pre-commissioning complete by Oct 15, the Oct 16 PIS target is feasible without renegotiation — protect the SET/inverter path. Jul 24: main power transformer SET on its foundation — the key PIS equipment item is on site; breakers/structural steel now controlling.' },
      { name: 'Commercial Operation Date', target: 'Nov 9, 2026', forecast: 'Nov 5-9, 2026', status: 'Watch', note: 'The re-cascaded MC/PIS dates restore limited float to COD; feasible if the pile gate and module ramp hold.' },
      { name: 'Substantial Completion', target: 'Nov 30, 2026', forecast: 'Nov 30, 2026', status: 'Watch', note: 'Still achievable if COD is protected and outdoor work closes before weather stop.' }
    ],
    risks: [
      { title: 'Mon Jul 27 lost to weather — zero production on every front; recovery required Tue-Sat', level: 'Critical', owner: 'All subcontractors / Audelio Zuniga / Manuel Ramirez / Jose Romero', note: 'Rain stopped the site Monday Jul 27: 0 piles, 0 tracker rows, 0 modules, 0 ITS — a full blank production day with every mechanical gate already Critical. The only work completed was unloading inverter #1 onto its pile foundation; the second inverter offload was canceled by the weather and must be rescheduled with the crane. The lost day is recoverable ONLY by raising the Tue-Sat rates: piles >= 502/day (holds ~Aug 7), trackers >= 57/day, modules >= 4,047/day, LV start 6,105 lf/day for Sep 18. Document the lost day in the daily report (weather record + force majeure file) and confirm the 2 United rigs pending repair are ready for Tuesday start.' },
      { title: 'MV coupling procurement — 40-week lead times; emergency plan demanded', level: 'Critical', owner: 'Axel Cano / Procurement / Jose Romero / German Dominguez', note: 'Jose (Jul 27, WhatsApp): the couplings carry impossible lead times — of 10 suppliers contacted, 2 have not answered and NONE improves ~40 weeks. Jose: \'this is a matter of gravity — without these materials the project cannot be finished; I need an emergency plan NOW, even if they must be brought from Europe.\' Axel is working supplier options; an emergency sourcing plan (incl. European supply and air freight) is owed to project management.' },
      { title: 'Chemik E-W cable routing — design review opened before standardizing the mount', level: 'Watch', owner: 'Engineering / Audelio Zuniga / Luis Romero / Chemik', note: 'Audelio (Jul 27): the east-west tension cable as currently installed (1) creates a pinch point resting on two bolts — constant friction on a cable tensioned for the life of the system; (2) contacts the pile steel because the hangers pass under the cable with ~2 in of extra travel — wind movement means continuous chafe and wear risk; (3) runs directly under the charging module, interfering where it crosses the north-south cable; and (4) wastes the clean routing space between the charging module and the first panel. Unistrut re-routing proposals were sent to engineering for review. Installation CAN continue under current conditions with no impact on progress — but the routing decision should close before the E-W mount is standardized across the field.' },
      { title: 'Chemik LV cable/harness delivery is the new critical path to energization', level: 'Critical', owner: 'Luis Romero Montero / Clara Lopez / Chemik (Felix A. Perez) / Joshua Spalding', note: 'AIR CONFIRMED: Luis Romero formally confirmed the air shipment to Chemik Jul 28 (\'Ok con el envio aereo\') — Chemik owes arrival dates; fabrication of ALL elements finishes next week and pallet configuration is switching to air. Background (Jul 17 thread): sea transit would land Sep 11-18 — incompatible with Sep 25. Only 18% of the 3-string harness has shipped by air; the remainder (800+800) is not built until Jul 24 and is insufficient to complete Area A. Air shipments in transit: PL_260706 (ETA Jul 16), PL_260601 and PL_260709 (ETA Jul 23) — none contain harness. Jul 21 packing-list reconciliation (Clara/Chemik): PL_260715 jumper quantities do not match; the 72 DB boxes on PL_260609 shipped without listed brackets (Chemik says integrated in the boxes — confirming); PL_260714 correct. No new shipment-status update from Chemik — chase. Luis Romero (Construction Director) has demanded the final shipments move by AIR so all material lands before end of August; without it the LV pull cannot start in earnest and the required rate jumps to ~12,000-17,000 lf/day over a compressed window. This now gates DC/LV, pre-commissioning and the Oct 16 PIS. PROJECT DECISION (Jul 17): ALL remaining Chemik packages are to be AIR-FREIGHTED — sea transport is off the table as it cannot meet the milestones.' },
      { title: 'SET scope and deliveries at risk — AB Power has no work plan; scope moving to a third party', level: 'Critical', owner: 'Axel Cano / Audelio Zuniga / AB Power / Michael Power / Procurement', note: 'Jul 17 procurement review: AB Power has presented neither a SET work plan nor a material-delivery plan. Greensol is removing partial scope from AB Power (deduct + fee) and bringing in a third party (Michael Power), plus self-buying the missing material list (BUS-connectors flagged urgent). Portico steel structure arriving Jul 16-17 (next-week arrival not yet confirmed). Oil-pit grating (tramex) is being procured separately to close the SET payment milestone 100% and avoid Heelstone payment objections.' },
      { title: 'SCADA and field instrumentation slipping — recovery plan owed', level: 'Critical', owner: 'SCADA supplier / Clara Lopez / Joshua Spalding', note: 'Jul 17 review: a SCADA delay was reported. The FAT can proceed without the servers in the first week of August, but the field boxes and meteo stations will not ship until the first week of September — a risk to zonal energization and the Oct 16 PIS. A recovery plan has been requested and is still owed; the team intends to hold the FAT and press for firm dates.' },
      { title: 'Tracker and pile scope adjustments from the Jul 17 review', level: 'Watch', owner: 'Luis Romero / Audelio Zuniga / Workforce / United', note: 'The remaining 10 MW of tracker assembly is being PULLED from Workforce (capability concern) — reassignment pending (United now holds full mechanical in Zones F & G). Missing piles: Plan B is to double smaller-section site piles or reinforce with concrete while Axel chases supply. EGLE will not allow swapping the remaining HDD bores for plowing; the last 4 bores continue with ~100 ft extensions each past the wetland.' },
      { title: 'Pile finish ~Aug 7 now rides entirely on United — Latnovva closed out, scope transferred', level: 'Critical', owner: 'United / Audelio Zuniga / Manuel Ramirez', note: 'LATNOVVA HAS FINISHED its activities on the project (Jose, Jul 28) — final 13,954 piles credited, and all remaining Latnovva scope is TRANSFERRED to United Services, which is already running Zone G. United now carries the full remainder: G 2,479, D 1,468, B 214, the non-ECCS Zone E balance and the last 11 in F (4,516 total left project-wide). Pile stock is comfortable (1,607-unit buffer on 28,343 delivered). Levers: repair confirmation on the 2 rigs down since Sat Jul 25, the Zone G change-order signature, and Saturday work. Jose (Jul 22): "We are drastically reducing pile production — we are now heading to Aug 7." The ~Aug 7 finish needs 502/day on the 26,836 executed basis.' },
      { title: 'Trackers remain the controlling front: 30 rows/day vs 57 required', level: 'Critical', owner: 'ECCS / Daniel Morilla / Manuel Ramirez / United / Workforce', note: 'ECCS logged 28 + 30 completed rows Jul 23-24 (Zone E) — the best back-to-back days since Jul 14, but barely half the 53/day required for Aug 30. The SECOND Workforce crew (racking) is also producing trackers — 17 EW rows to 50% Jul 23, dampers/actuators Jul 24 — reported on the scoreboard and credited to the cumulative as the rows close. 881 done / 606 released / 275 pending (Maurin QA split Jul 27 — A 311, C 222, E 73). Manuel (Jul 23): United is now receiving racking people — expect a step-up in ~1.5 weeks; Workforce racking ran 17 rows at 50% (EW) Jul 23 and dampers/actuators Jul 24; Jose pressed the team Jul 23 to repeat the mechanical recovery on the electrical side. Torque tubes are no longer the constraint (all 9 trucks landed Jul 24). Workbook Jul 28: 715 pre-assembled / 567 complete — closing on the 851 field basis.' },
      { title: 'QA release cadence now feeds the module front — Heelstone log and Area F documents still open', level: 'High', owner: 'Maurin Moure / Daniel Morilla (QA/QC) / ECCS / Manuel Ramirez', note: 'Maurin Moure\'s Jul 27 QA report clears the tracker release backlog: 606 rows released / 275 pending on 881 built (A 311, C 222, E 73 — E1/E2 only), and pile inspections stand at 26,439 = 98.5% of the current executed. The released buffer ahead of modules is ~160 rows (~3 days at the required module rate) — QA release cadence must now keep pace with the build rate. Module release today lands ~35% per inspections even though installation on the inspected areas is complete. Still open: Heelstone approvals frozen at the Jul 6/13 snapshot (6,682 piles / 107 trackers); refreshed defect count owed (242 as of Jul 6); and some Area F zones were released internally without the subcontractor submitting quality documents — those documents must be recovered.' },
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
