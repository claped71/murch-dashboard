'use strict';
// Murch dashboard data - update THIS file for daily changes
// CACHE BUSTER: Jul 13, 2026 (evening) — Jul 13 production + weekly plan by area rewritten for the week of Jul 13-18
// Note: assetVersion, assetBase, asset(), and assetFallback() are defined in index.html's inline script
// Duplicate declarations have been removed to fix SyntaxError: Identifier 'assetVersion' has already been declared
window.MURCH_DATA = {
    control: {
      asOf: 'Jul 13, 2026',
      piles:    { installed: 21838, total: 31352, gate: '2026-07-28', gateLabel: 'Jul 28', required: 732, capacity: 560, name: 'Piles', unit: 'piles/day' },
      trackers: { installed: 564, released: 235, total: 2486, gate: '2026-08-30', gateLabel: 'Aug 30', required: 47, capacity: 48, name: 'Trackers incl. purlins', unit: 'rows/day' },
      modules:  { installed: 8421, total: 171470, gate: '2026-09-06', gateLabel: 'Sep 6', required: 3469, capacity: 5531, name: 'Modules', unit: 'mod/day' },
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
      { day: 'Jul 13', total: 191, src: 'current field snapshot' }
    ],
    manpowerMixToday: { day: 'Jul 13, 2026', total: 191, mix: [
      { trade: 'Trackers & Piling', people: 85, color: '#0c5f43' },
      { trade: 'Module Installation', people: 41, color: '#168a5b' },
      { trade: 'Electrical & SET', people: 27, color: '#2769a8' },
      { trade: 'Civil & Fencing', people: 18, color: '#b96f18' },
      { trade: 'GreenSol EPC', people: 20, color: '#66716d' }
    ] },
    contractorScore: [
      { date: 'Jul 13 Mon', contractor: 'United', trade: 'Piles', output: 536, resource: '23 people · 8 rigs on site, 2 broken (6 running) — zone F', perUnit: 89, criterion: 80, critLabel: '80 piles/rig-day — ABOVE criterion' },
      { date: 'Jul 13 Mon', contractor: 'LATNOVVA', trade: 'Piles', output: 72, resource: '14 people · 2 rigs, 1 broken (1 running) — zone B', perUnit: 72, criterion: 80, critLabel: '80 piles/rig-day — fleet down to a single rig; repairs are the lever' },
      { date: 'Jul 13 Mon', contractor: 'ECCS', trade: 'Trackers', output: 29, resource: '54 people · zone C · plus 4 inverter piles driven in zone E', perUnit: 29, criterion: 48, critLabel: '48 rows/day — Jose: this must at least double; Brumont enters C on Wednesday with only 13 released rows' },
      { date: 'Jul 13 Mon', contractor: 'Brumont', trade: 'Modules', output: 1858, resource: '18 people · zone A', perUnit: 1858, criterion: 2000, critLabel: '2,000 mod/day target — best single-crew day to date' },
      { date: 'Jul 13 Mon', contractor: 'Workforce', trade: 'Modules', output: 1064, resource: '28 people incl. administrative · zone A', perUnit: 1064, criterion: 2000, critLabel: '2,000 mod/day target — combined crews hit a record 2,922 modules on Jul 13' },
      { date: 'Jul 11 Sat', contractor: 'United', trade: 'Piles', output: 446, resource: '23 people · 6 rigs (2 damaged) — Saturday crew', perUnit: 74, criterion: 80, critLabel: '80 piles/rig-day' },
      { date: 'Jul 11 Sat', contractor: 'LATNOVVA', trade: 'Piles', output: 234, resource: '16 people · 2 rigs (3rd still out) — Saturday crew', perUnit: 117, criterion: 80, critLabel: '80 piles/rig-day — ABOVE criterion, best rig-day rate yet' },
      { date: 'Jul 11 Sat', contractor: 'Brumont', trade: 'Modules', output: 517, resource: '18 people · zone A — Saturday crew', perUnit: 517, criterion: 2000, critLabel: '2,000 mod/day target' }
    ],
    scope: [
      { title: 'EPC Management', metric: 'Turnkey', note: 'Project management, safety, QC, contractor deliverables, owner reporting, permitting support, and trade coordination through completion.' },
      { title: 'Civil and Environmental', metric: 'G released', note: 'Rosario Week 26 email says Area G is released for pile driving and material distribution; Area G cut/fill starts after basin completion.' },
      { title: 'Mechanical BOS', metric: '31,352 piles · 2,486 trackers', note: 'Pile driving (21,838 executed, 69.7%), GameChange SAT tracker assembly incl. purlins (564 done, 22.7% — 235 QA-released, 329 pending Quality), and module placement (8,421 executed, 4.9%). D&F pre-drilling complete (7,694/7,694).' },
      { title: 'Electrical BOS', metric: 'ITS plowing on site', note: 'MV collection, HDD, plowing, grounding, DC string and combiner wiring, LV/AC works, inverter installation, SCADA, and testing. Joshua Spalding reported the ITS plowing machine arrived on June 19.' },
      { title: 'Procurement', metric: '171,470 modules', note: 'Panels, racking, purlins, actuators, controllers, cables, inverter stations, combiner boxes, and SET equipment.' },
      { title: 'Commissioning', metric: 'PIS Oct 16', note: 'Cold commissioning, energization, tracker testing, inverter start-up, PR test path, punch list, COD, and substantial completion.' }
    ],
    photos: [
      { src: 'https://claped71.github.io/murch-dashboard/assets/recent/thumb-recent-33.jpg?v=20260712-berm', fallbackSrc: 'https://claped71.github.io/murch-dashboard/assets/recent/recent-33.jpg', date: 'July 12, 2026', title: 'Transformer-foundation containment berm complete — Substation', note: 'Geotagged Jul 12, 13:24 (Lawrence, MI): substation containment berm and main power transformer foundation complete — ready ahead of the transformer delivery (unit still in fabrication).' },
      { src: 'https://claped71.github.io/murch-dashboard/assets/recent/thumb-recent-30.jpg?v=20260710-jul9-photos', fallbackSrc: 'https://claped71.github.io/murch-dashboard/assets/recent/recent-30.jpg', date: 'July 9, 2026', title: 'Inverter pile ramming — Area E', note: 'Ramming rig driving inverter-station foundation piles in Area E; 12 of 23 stations now have piles complete.' },
      { src: 'https://claped71.github.io/murch-dashboard/assets/recent/thumb-recent-31.jpg?v=20260710-jul9-photos', fallbackSrc: 'https://claped71.github.io/murch-dashboard/assets/recent/recent-31.jpg', date: 'July 9, 2026', title: 'First modules installed — Area A', note: 'Installed module rows in Area A alongside bare trackers awaiting panels; module production hit a record 1,308 on July 9.' },
      { src: 'https://claped71.github.io/murch-dashboard/assets/recent/thumb-recent-32.jpg?v=20260710-jul9-photos', fallbackSrc: 'https://claped71.github.io/murch-dashboard/assets/recent/recent-32.jpg', date: 'July 9, 2026', title: 'Greensol self-perform rework — damper change, Area A', note: 'Greensol personnel replacing tracker dampers in Area A as part of the QA rework program ahead of module release.' },
      { src: 'https://claped71.github.io/murch-dashboard/assets/recent/thumb-recent-28.jpg?v=20260708-cb-install', fallbackSrc: 'https://claped71.github.io/murch-dashboard/assets/recent/recent-28.jpg', date: 'July 7, 2026', title: 'Control building set at substation', note: 'Axel Cano: substation control building delivered and installed on its foundation the night of July 7 — the July 10 required-on-site gate is met.' },
      { src: 'https://claped71.github.io/murch-dashboard/assets/recent/thumb-recent-21.jpg?v=20260708-cb-install', fallbackSrc: 'https://claped71.github.io/murch-dashboard/assets/recent/recent-21.jpg', date: 'June 25, 2026', title: 'Golden Row installation', note: 'Golden Row tracker/racking installation shared by Audelio Zuniga, documenting the first representative mechanical completion sequence ahead of module release.' },
      { src: 'https://claped71.github.io/murch-dashboard/assets/recent/thumb-recent-20.jpg?v=20260708-cb-install', fallbackSrc: 'https://claped71.github.io/murch-dashboard/assets/recent/recent-20.jpg', date: 'June 25, 2026', title: 'Golden Row field crew', note: 'Crew installing the Golden Row tracker/racking assembly; this is a project photo, not a table screenshot.' },
      { src: 'https://claped71.github.io/murch-dashboard/assets/recent/thumb-recent-23.jpg?v=20260708-cb-install', fallbackSrc: 'https://claped71.github.io/murch-dashboard/assets/recent/recent-23.jpg', date: 'June 25, 2026', title: 'ITS MV plowing workfront', note: 'MV cable/plowing workfront activity, supporting the ITS production sequence by installed footage and completed segments.' },
      { src: 'https://claped71.github.io/murch-dashboard/assets/recent/thumb-recent-1.jpg?v=20260708-cb-install', fallbackSrc: 'https://claped71.github.io/murch-dashboard/assets/recent/recent-1.jpg', date: 'June 19, 2026', title: 'ITS plowing machine arrival', note: 'ITS plowing machine staged for the medium-voltage cable scope.' },
      { src: 'https://claped71.github.io/murch-dashboard/assets/recent/thumb-recent-15.jpg?v=20260708-cb-install', fallbackSrc: 'https://claped71.github.io/murch-dashboard/assets/recent/recent-15.jpg', date: 'June 19, 2026', title: 'ITS MV boring operation', note: 'Excavator and crew supporting the ITS medium-voltage boring scope at the wooded crossing workfront.' },
      { src: 'https://claped71.github.io/murch-dashboard/assets/recent/thumb-recent-19.jpg?v=20260708-cb-install', fallbackSrc: 'https://claped71.github.io/murch-dashboard/assets/recent/recent-19.jpg', date: 'June 19, 2026', title: 'SET foundation formwork', note: 'Substation foundation and containment formwork under construction, documenting current SET civil progress.' },
      { src: 'https://claped71.github.io/murch-dashboard/assets/recent/thumb-recent-24.jpg?v=20260708-cb-install', fallbackSrc: 'https://claped71.github.io/murch-dashboard/assets/recent/recent-24.jpg', date: 'June 24, 2026', title: 'Civil/fence workfront conditions', note: 'Field view of civil and fencing workfront conditions supporting Area E/F/G release sequencing.' },
      { src: 'https://claped71.github.io/murch-dashboard/assets/recent/thumb-recent-14.jpg?v=20260708-cb-install', fallbackSrc: 'https://claped71.github.io/murch-dashboard/assets/recent/recent-14.jpg', date: 'June 19, 2026', title: 'Racking workfront beside access road', note: 'Installed pile and racking lines beside stabilized access, documenting active mechanical workfront conditions.' },
      { src: 'https://claped71.github.io/murch-dashboard/assets/recent/thumb-recent-26.jpg?v=20260708-cb-install', fallbackSrc: 'https://claped71.github.io/murch-dashboard/assets/recent/recent-26.jpg', date: 'July 1, 2026', title: 'Control-building access platform fabrication', note: 'Factory photo of access platform/stair components for the control-building package.' },
      { src: 'https://claped71.github.io/murch-dashboard/assets/recent/thumb-recent-27.jpg?v=20260708-cb-install', fallbackSrc: 'https://claped71.github.io/murch-dashboard/assets/recent/recent-27.jpg', date: 'July 1, 2026', title: 'Control-building platform detail', note: 'Additional factory view of control-building access-platform details supporting the SET delivery gate.' }
    ],
    weeklyPlan: [
      { area: '<u>Tracker completion and QA release — Zones C / A / F</u><span style="background:#b53030;color:#fff;padding:1px 6px;border-radius:3px;font-size:10px;font-weight:700;margin-left:6px">CRITICAL</span>', target: 'THE controlling front this week. 564 rows done (235 QA-released, 329 pending) of 2,486. ECCS restarted Monday with 29 rows in Zone C using 54 people after three zero days. Brumont enters Zone C on Wednesday Jul 15 against only 13 QA-released rows — barely a day and a half of module workfront. Break the QA freeze (nothing released Jul 10-13: rows driven but not levelled/aligned) and convert Zone C rows into released workfront ahead of the module crew.', minimum: '>= 47 completed rows/day required to hold Aug 30 (1,922 rows / 41 working days). Jose has directed ECCS to at least double the 29 and reinforce crews. QA: release A6 and A7 on Jul 14 and post Zone F progress this week.', gate: 'QA turnover of finished rows, not assembly. OPEN ACTION: some Area F zones were released internally without the subcontractor submitting quality documents — recover those documents this week.', owners: 'ECCS | Daniel Morilla (QA/QC) | Audelio Zuniga | Manuel Ramirez' },
      { area: '<u>Pile production — rig availability, Zones B / F</u><span style="background:#b53030;color:#fff;padding:1px 6px;border-radius:3px;font-size:10px;font-weight:700;margin-left:6px">CRITICAL</span>', target: '9,514 piles remain to the Jul 28 gate (21,838 of 31,352 executed, 69.7%). Five straight production days above the 560 line (646, 669, 680, 680, 608), but the fleet is degrading: United is running 6 of 8 rigs and Latnovva 1 of 2, which cut Latnovva to 72 piles on Monday. Get the broken rigs back this week or the gate slips.', minimum: '>= 732 piles/day (9,514 over 13 remaining working days, Mon-Sat) — above the 560/day stated capacity. Every 608-day instead of 732 pushes Jul 28 further out; at 560/day the gate lands ~Aug 4.', gate: 'Rig repairs are the binding constraint — 2 United units and 1 Latnovva unit down. Material is no longer a restriction: 28,343 piles delivered, a 6,505-unit buffer (~8.9 days at the required rate).', owners: 'United / LATNOVVA | Audelio Zuniga | Manuel Ramirez | Joshua Spalding' },
      { area: '<u>Module installation ramp — Zone A into Zone C</u><span style="background:#b53030;color:#fff;padding:1px 6px;border-radius:3px;font-size:10px;font-weight:700;margin-left:6px">CRITICAL</span>', target: 'Record Monday: 2,922 modules (Brumont 1,858 + Workforce 1,064) with 41 installers — the first day above the 2,000 line. 8,421 of 171,470 executed (4.9%). Jose set the bar at more than 3,000/day from this week. Brumont moves into Zone C on Wednesday.', minimum: '>= 3,000 modules/day with both crews this week; ~3,469/day required to hold the Sep 6 finish, ramping toward the 5,531/day full-field rate.', gate: 'QA-released tracker rows — with only 13 released in Zone C, the crews will outrun the workfront within days. Module-spacing QC control (Golden Row slot-tolerance finding) stays in force.', owners: 'Workforce / Brumont | Audelio Zuniga | Daniel Morilla (QA/QC) | Manuel Ramirez' },
      { area: 'GameChange tracker-material deliveries', target: 'Shreeya Devkota confirmed 7 loads for Jul 14 (4 Landstar, 2 NTG, 1 RE-HA) on 45-minute slots from 07:00. Close out the remaining loads through the Jul 16 final tracker-material date and confirm POD/site receipt for each.', minimum: 'Receive up to 14 pile loads/day plus 8 racking loads/day if appointments and offloading resources hold; log receipts against the delivery control.', gate: 'Purlin stock is sufficient and pile stock is comfortable — receipts are an administrative gate, not a production restriction. Loads count as scheduled until POD/site receipt.', owners: 'GameChange (Shreeya Devkota) | Manuel Ramirez | Karina Mucino' },
      { area: 'SET, inverter foundations and inverter arrival', target: 'SET at 11.8% overall (civil 44.9%, structural 5.7%). Containment berm and transformer foundation complete Jul 12; base plates welded on all 18 inverter stations delivered. Close the last 4 inverter pile foundations — D10, E12, F16, G20 (194 of 230 piles, 84.3%) — before the end-July arrival of the 23 inverter units.', minimum: 'All 23 inverter foundations released before first delivery; keep the SET civil rate that took overall progress from 8.7% to 11.8% in a week.', gate: 'Transformer and structural steel remain in fabrication — the controlling items for energization. Several electrical items still show committed dates after the Jul 10 required-on-site gate.', owners: 'AB Power / SET team | Axel Cano | Joshua Spalding | Karina Mucino' },
      { area: 'LV aerial-system kick-off', target: 'Jose called the LV kick-off meeting for Jul 14: confirm the resources and the work plan for the aerial messenger-wire harness scope. Crews (East Carolina + Greensol self-perform) start immediately behind released module blocks.', minimum: 'Kick-off held Jul 14 with named crews, cable-reel receipts and a block-by-block start sequence agreed; first LV block package released behind the Zone A module front.', gate: 'Released module blocks and crew readiness. LV/DC must close by Sep 18 to protect the Sep 25 MC target.', owners: 'East Carolina / Greensol Self-Perform | Angel Urbina | Luis Romero | Karina Mucino' },
      { area: 'Electrical MV plowing and HDD closeout', target: 'ITS is ahead of the electrical sequence: 31 of 46 plow segments complete (102,174 ft, +9,078 ft on Jul 13) and 16 of 20 bores closed (5,444.2 ft) after HB-17 and HB-18. Close the last 4 bores and keep segments falling on MV11A (5/10) and MV12A (9/13).', minimum: '>= 1 plow segment/day and >= 1 completed bore/day with measured footage reporting.', gate: 'Crossing approvals, access continuity and equipment availability. Keep the daily LF reporting cadence — Jul 13 logged 0 ft bored.', owners: 'ITS | Angel Urbina | Joshua Spalding' },
      { area: 'Civil Area G release and internal roads', target: 'Finish Area G basins, then start Area G cut/fill — Area G is released for pile driving and material distribution and is the next pile workfront (3,356 piles, 0 installed). Perimeter fence at 95.6% (only Zone G and gates remain); internal roads at 65.9%.', minimum: 'Daily confirmed grading production in Area G after basin closeout; roads must keep easing as the logistics constraint.', gate: 'Basin completion controls Area G cut/fill; civil access, gates and drainage must stay ahead of the mechanical fronts.', owners: 'Lounsbury / Hurricane / Topland | Rosario Ruiz | Audelio Zuniga' }
    ],
    civilKpis: [
      { title: 'Civil field progress', metric: 'Week 26', note: 'Rosario Ruiz Week 26 email dated July 3 and sent July 6 controls the latest civil workfront note.' },
      { title: 'Area G release', metric: 'Released', note: 'Rosario reports that once Area G basins are finished, cut/fill will start there; Area G is also released for pile driving and material distribution.' },
      { title: 'SET tracker', metric: '11.8% overall', note: 'Jul 13 SET tracker: overall progress 11.8% (civil 44.9%, structural 5.7%) — up from 8.7% on Jul 6. Control building on site since Jul 7. Jul 12 (Sun): transformer-foundation containment berm complete at the substation. Jul 12: all 18 inverter stations available on site have their base plates welded.' }
    ],
    civilActivities: [
      { activity: 'Earthworks cut / fill', company: 'Lounsbury', done: 61, remaining: 39, status: 'Active', note: 'Latest quantified percentage remains Week 24. Rosario Week 26 adds that Area G cut/fill starts after the Area G basins are finished.' },
      { activity: 'Perimeter fence', company: 'Hurricane', done: 95.6, remaining: 4.4, status: 'On Track', note: 'Rosario Jul 9 quantity sheet (area-weighted): Areas A, B, C, D, E, EW and F are 100% complete; Zone G is at 71.1%. Overall ~95.6% — only the G remainder and gates are left.' },
      { activity: 'Sediment basins / environmental controls', company: 'Lounsbury / ECS', done: 47, remaining: 53, status: 'At Risk', note: 'Latest quantified percentage remains Week 24. Rosario Week 26 states Area G basins must finish before Area G cut/fill starts.' },
      { activity: 'Internal roads', company: 'Topland', done: 65.9, remaining: 34.1, status: 'Active', note: 'Rosario Jul 10 quantity sheet: 65.9% lf done-equivalent (up from 63.8%). Major recovery from the 35% Week 24 baseline — roads are easing as the logistics constraint.' },
      { activity: 'PS foundations', company: 'United', done: 84.3, remaining: 15.7, status: 'Active', note: 'Jul 13 workbook: 194 of 230 inverter piles complete (84.3%) — 19 of 23 stations closed, plus 4 more piles driven in zone E on Jul 13. Pending stations: D10, E12, F16, G20. Work planned through August 10.' },
      { activity: 'Foundation SET', company: 'AB Power', done: 11.8, remaining: 88.2, status: 'Active', note: 'Jul 13 SET workbook: overall substation progress 11.8% (up from 8.7% on Jul 6); civil 44.9%, structural 5.7%. Containment berm and transformer foundation complete Jul 12.' }
    ],
    contractors: [
      { name: 'LATNOVVA / assigned areas', scope: 19260, installed: 13298, remaining: 5962, done: 69.0, zones: 'Zones A, B, C, D, G, EW + shared Area E control', status: 'Watch', note: "Area-based control allocation only; it is not a new manpower or subcontractor headcount report." },
      { name: 'ECCS / Area E control', scope: 4434, installed: 4066, remaining: 368, done: 91.7, zones: 'Area E shared tracker workfront', status: 'On Track', note: "Area-based control allocation used only so dashboard totals reconcile with Audelio's July 6 official installed-production basis." },
      { name: 'United', scope: 7658, installed: 4474, remaining: 3184, done: 58.4, zones: 'Zone F', status: 'Active', note: 'Executed: 4,474 in Zone F (58.4%) — 3,492 Jul 13 workbook + 446 Sat + 536 Mon field. Jul 13: 536 piles with 6 of 8 rigs running (89/rig-day).' },
      { name: 'Project Total', scope: 31352, installed: 21838, remaining: 9514, done: 69.7, zones: "All zones | Construction Manager report", status: 'Critical', note: "Total executed: 21,838 — Audelio's Jul 13 workbook (20,550, official basis, block-map roll-up through Jul 10) plus 1,288 field-reported piles since (Sat Jul 11: United 446 F / Latnovva 234 B; Mon Jul 13: United 536 F / Latnovva 72 B), pending workbook incorporation." }
    ],
    zones: [
      { zone: 'Zone A', contractor: 'Latnovva', scope: 3834, installed: 3834, remaining: 0, done: 100.0, status: 'Complete', note: 'Jul 8 PROGRESS table: Zone A pile installation complete.' },
      { zone: 'Zone C', contractor: 'Latnovva', scope: 2946, installed: 2946, remaining: 0, done: 100.0, status: 'Complete', note: 'July 6 Const. Management workbook; zone complete.' },
      { zone: 'Zone E', contractor: 'ECCS / Latnovva', scope: 8456, installed: 8012, remaining: 444, done: 94.7, status: 'Active', note: 'Jul 8 PROGRESS pile-installation table: 8,012 installed.' },
      { zone: 'Zone EW', contractor: 'Latnovva', scope: 846, installed: 846, remaining: 0, done: 100.0, status: 'Complete', note: 'Jul 8 workbook: Zone EW complete at 846 of 846.' },
      { zone: 'Zone B', contractor: 'Latnovva', scope: 2788, installed: 1726, remaining: 1062, done: 61.9, status: 'Active', note: 'Executed: 1,726 (61.9%) — Jul 13 workbook 1,420 + 234 Sat + 72 Mon field. Latnovva is down to a single working rig here; the damaged units are the production lever.' },
      { zone: 'Zone D', contractor: 'TBD / Latnovva', scope: 1468, installed: 0, remaining: 1468, done: 0, status: 'Material Hold', note: '2nd-50% work; no start before June 22 material arrivals.' },
      { zone: 'Zone F', contractor: 'United', scope: 7658, installed: 4474, remaining: 3184, done: 58.4, status: 'Active', note: 'Executed: 4,474 (58.4%) — 3,492 Jul 13 workbook + 446 Sat + 536 Mon field. Zone F closing fast; United carries the pile programme with 6 of 8 rigs running.' },
      { zone: 'Zone G', contractor: 'Latnovva', scope: 3356, installed: 0, remaining: 3356, done: 0, status: 'Active', note: 'Assigned to Latnovva. Rosario Ruiz Week 26 email says Area G is released for pile driving and material distribution; civil cut/fill starts after Area G basins are finished.' }
    ],
    production: [
      { name: 'Project pile installation', remaining: '9,514 piles', target: '~732 piles/day required for Jul 28 (560/day stated capacity)', latest: 'Jul 13 (Mon): 608 piles — fifth straight production day above 560 (United 536 in F at 89/rig-day; Latnovva 72 in B on a single working rig)', cumulative: '21,838 / 31,352 executed (69.7%) — 20,550 Jul 13 workbook + 1,288 field-reported (Sat 680 + Mon 608)', status: 'Critical', note: 'The Jul 13 workbook block-map roll-up (20,550) still carries field production only through Jul 10, so Saturday and Monday output is added on top. Rate is holding above capacity — 646, 669, 680, 680, 608 — but Latnovva is down to one working rig of two and United to six of eight. Holding Jul 28 needs ~732/day over 13 working days (Mon-Sat); rig repairs are now the single biggest lever.' },
      { name: 'Pile delivery / site stock', remaining: '3,009 piles undelivered', target: 'Receipts must exceed 560 piles/day burn', latest: 'Jul 13 workbook: 28,343 piles delivered (90.4% of 31,352)', cumulative: '28,343 delivered; 6,505 available above the 21,838 executed', status: 'On Track', note: 'Available stock equals delivered piles less executed piles — 6,505 units, about 8.9 days at the 732/day required rate. Delivery is no longer the pile-programme constraint.' },
      { name: 'Drill and backfill', remaining: '0 pre-drills', target: 'Scope closed — no gate to piling', latest: 'All units closed in the official workbook', cumulative: '7,694 / 7,694 complete (100.0%)', status: 'Complete', note: 'July 6 Construction Management progress source shows drill-and-backfill complete.' },
      { name: 'Civil grading / cut-fill', remaining: '39% of scope', target: '— No approved daily target in source', latest: 'Week 26 email: Area G cut/fill starts after basins finish', cumulative: '61% complete through latest quantified civil baseline', status: 'On Track', note: 'Current percentage follows Rosario Ruiz civil baseline; Week 26 adds Area G release for pile driving and material distribution.' },
      { name: 'Internal roads', remaining: '34.1% of scope', target: '— No approved daily target in source', latest: 'Rosario Jul 10 quantity sheet (lf-weighted)', cumulative: '65.9% complete — matches Civil Progress Control', status: 'Active', note: 'Current percentage follows Rosario Ruiz civil baseline for Areas A-B-C-E; roads continue to control logistics access.' },
      { name: 'Tracker completion incl. purlins', remaining: '1,922 to build · 2,251 to QA-release', target: '47 completed rows/day now required for Aug 30 (48/day acceleration target)', latest: 'Jul 13 (Mon): 29 rows in zone C with 54 people — first output after three zero days, still 18 short of the required rate', note: 'Purlin installation is integrated into this tracker control metric: a row counts once its purlins are installed. Total done is 564 rows — 235 released by Quality and 329 pending QA approval, and QA released nothing between Jul 10 and Jul 13 (A6 and A7 due Jul 14). Brumont moves into zone C on Wednesday against only 13 released rows there. Trackers are the controlling risk for the module front.', cumulative: '564 done (22.7%): 235 QA-released + 329 pending Quality · 594 rows pre-assembled / 2,486 total', status: 'Critical' },
      { name: 'ITS HDD boring', remaining: '4 of 20 bores', target: 'Minimum 1 completed bore/day', latest: 'Jul 13 (Mon): HB-17 and HB-18 closed — 16 / 20 complete (80%); 0 ft bored on the day', cumulative: '16 / 20 bores complete (80%); 5,444.2 ft installed', status: 'Watch', note: 'Jul 13 ITS tracker: 16 done / 0 in progress / 4 pending. Two bores closed since Saturday; boring is catching up with plowing.' },
      { name: 'ITS MV plowing', remaining: '15 of 46 segments', target: 'Minimum 1 completed segment/day', latest: 'Jul 13 (Mon): +2 segments and 9,078 ft plowed on MV12A — 31 / 46 complete (67.4%)', cumulative: '31 / 46 segments complete; 102,174 ft installed', status: 'On Track', note: 'Jul 13 ITS tracker: 31 done / 0 in progress / 15 pending. Line status: MV11A 5/10, MV11B 9/12, MV12A 9/13, MV12B 8/11. Plowing comfortably leads the electrical sequence.' },
      { name: 'SET construction', remaining: '88.2% of overall scope', target: '— No approved daily progress target in source', latest: 'Jul 12 (Sun): transformer-foundation containment berm complete; all 18 available inverter stations have base plates welded', cumulative: '11.8% overall (civil 44.9%, structural 5.7%) per the Jul 13 SET tracker', status: 'Critical', note: 'Overall SET progress up from 8.7% (Jul 6) to 11.8% (Jul 13), driven by civil. Transformer and structural steel remain in fabrication — the controlling items for energization.' },
      { name: 'Panel delivery', remaining: '14,230 modules to deliver', target: '— No approved daily delivery target in source', latest: '— Latest daily receipt not reported', cumulative: '157,240 / 171,470 delivered (91.7%)', status: 'On Track', note: 'Jul 13 Construction Manager workbook cumulative delivery quantity; 148,819 modules on site above the 8,421 executed.' },
      { name: 'Module installation', remaining: '163,049 modules', target: '5,531 modules/day acceleration target', latest: 'Jul 13 (Mon): 2,922 modules — new record (Brumont 1,858 + Workforce 1,064), first day above the 2,000 line', cumulative: '8,421 modules field-reported, pending official workbook incorporation', status: 'Critical', note: 'Record day on Jul 13 with 41 installers on the board, up from the 1,802 Jul 10 record. Now within striking distance of the ~3,469/day required. The binding constraint has shifted to QA-released tracker rows: only 13 are released in zone C, where Brumont starts Wednesday. Modules must finish one week after tracker completion: Aug 30 trackers -> Sep 6 module finish.' }
    ],
    dailyProductionHistory: [
      { task: 'Pile installation', period: 'Jun 18-Jul 13 measured days', minimum: '560 piles/day', above: 5, below: 13, latest: 'Jul 13 (Mon): 608 piles — fifth straight day above 560 (United 536 / Latnovva 72)', note: 'Five consecutive production days above the 560 line: 646, 669, 680, 680, 608. Jul 13 came from United alone at 89/rig-day (6 of 8 rigs); Latnovva is down to one working rig and contributed 72. ~732/day required for Jul 28; cumulative 20,550 official + 1,288 field (Sat 680, Mon 608) pending workbook.', daily: [{ day: 'Jun 18', value: 20, target: 560, unit: 'piles' }, { day: 'Jun 19', value: 79, target: 560, unit: 'piles' }, { day: 'Jun 22', value: 251, target: 560, unit: 'piles' }, { day: 'Jun 23', value: 101, target: 560, unit: 'piles' }, { day: 'Jun 25', value: 370, target: 560, unit: 'piles' }, { day: 'Jun 26', value: 340, target: 560, unit: 'piles' }, { day: 'Jun 29', value: 261, target: 560, unit: 'piles' }, { day: 'Jun 30', value: 234, target: 560, unit: 'piles' }, { day: 'Jul 1', value: 252, target: 560, unit: 'piles' }, { day: 'Jul 2', value: 274, target: 560, unit: 'piles' }, { day: 'Jul 3', value: 134, target: 560, unit: 'piles' }, { day: 'Jul 6', value: 307, target: 560, unit: 'piles' }, { day: 'Jul 7', value: 399, target: 560, unit: 'piles' }, { day: 'Jul 8', value: 646, target: 560, unit: 'piles' }, { day: 'Jul 9', value: 669, target: 560, unit: 'piles' }, { day: 'Jul 10', value: 680, target: 560, unit: 'piles' }, { day: 'Jul 11', value: 680, target: 560, unit: 'piles' }, { day: 'Jul 13', value: 608, target: 560, unit: 'piles' }] },
      { task: 'Tracker production control (incl. purlin completion)', period: 'Jun 17-Jul 13', minimum: '48 tracker units/day', above: 4, below: 11, latest: 'Jul 13 (Mon): 29 rows in zone C — production restarted after three zero days, still short of the 47/day now required', note: 'Purlin installation is integrated into this tracker control metric: a row counts once its purlins are installed. Total done is 564 rows — 235 released by Quality and 329 pending QA approval, with no QA releases between Jul 10 and Jul 13. ECCS ran 54 people for 29 rows; Jose has directed the rate to at least double before Brumont enters zone C on Wednesday against 13 released rows.', daily: [{ day: 'Jun 17', value: 15, target: 48, unit: 'units' }, { day: 'Jun 18', value: 35, target: 48, unit: 'units' }, { day: 'Jun 19', value: 26, target: 48, unit: 'units' }, { day: 'Jun 20', value: 31, target: 48, unit: 'units' }, { day: 'Jun 21', value: 0, target: 48, unit: 'units' }, { day: 'Jun 22', value: 48, target: 48, unit: 'units' }, { day: 'Jun 23', value: 31, target: 48, unit: 'units' }, { day: 'Jun 24', value: 0, target: 48, unit: 'units' }, { day: 'Jun 25', value: 57, target: 48, unit: 'units' }, { day: 'Jun 26', value: 26, target: 48, unit: 'units' }, { day: 'Jun 29', value: 29, target: 48, unit: 'units' }, { day: 'Jun 30', value: 30, target: 48, unit: 'units' }, { day: 'Jul 1', value: 51, target: 48, unit: 'units' }, { day: 'Jul 7', value: 29, target: 48, unit: 'units' }, { day: 'Jul 8', value: 0, target: 48, unit: 'units' }, { day: 'Jul 9', value: 0, target: 48, unit: 'units' }, { day: 'Jul 10', value: 0, target: 48, unit: 'units' }, { day: 'Jul 13', value: 29, target: 48, unit: 'units' }] },
      { task: 'Module installation', period: 'Jul 3-Jul 13 field start', minimum: '5,531 modules/day', above: 0, below: 8, latest: 'Jul 13 (Mon): 2,922 modules — record day (Brumont 1,858 + Workforce 1,064)', note: 'Module output broke through the 2,000 line for the first time: 2,922 on Jul 13 with 41 installers, well above the previous 1,802 record. Cumulative 8,421 field-reported against the ~3,469/day now required; modules must finish by Sep 6, one week after tracker completion. Released tracker rows — not crew size — are now the constraint.', daily: [{ day: 'Jul 3', value: 234, target: 5531, unit: 'modules' }, { day: 'Jul 6', value: 780, target: 5531, unit: 'modules' }, { day: 'Jul 7', value: 156, target: 5531, unit: 'modules' }, { day: 'Jul 8', value: 936, target: 5531, unit: 'modules' }, { day: 'Jul 9', value: 1308, target: 5531, unit: 'modules' }, { day: 'Jul 10', value: 1802, target: 5531, unit: 'modules' }, { day: 'Jul 11', value: 517, target: 5531, unit: 'modules' }, { day: 'Jul 13', value: 2922, target: 5531, unit: 'modules' }] },
      { task: 'ITS MV plowing', period: 'Jun 17-Jul 13', minimum: '1 completed segment/day', above: 9, below: 12, latest: 'Jul 13 (Mon): 2 segments closed — 31 of 46 cumulative; 9,078 ft plowed on MV12A', note: 'Jul 13 ITS tracker: 31 of 46 segments complete (67.4%), 0 in progress. 102,174 ft installed. MV11A 5/10, MV11B 9/12, MV12A 9/13, MV12B 8/11.', daily: [{ day: 'Jun 17', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 18', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 19', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 20', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 21', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 22', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 23', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 24', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 25', value: 3, target: 1, unit: 'seg' }, { day: 'Jun 26', value: 4, target: 1, unit: 'seg' }, { day: 'Jun 27', value: 1, target: 1, unit: 'seg' }, { day: 'Jun 28', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 29', value: 2, target: 1, unit: 'seg' }, { day: 'Jun 30', value: 5, target: 1, unit: 'seg' }, { day: 'Jul 1', value: 0, target: 1, unit: 'seg' }, { day: 'Jul 2', value: 1, target: 1, unit: 'seg' }, { day: 'Jul 6', value: 0, target: 1, unit: 'seg' }, { day: 'Jul 7', value: 0, target: 1, unit: 'seg' }, { day: 'Jul 8', value: 5, target: 1, unit: 'seg' }, { day: 'Jul 9', value: 2, target: 1, unit: 'seg' }, { day: 'Jul 10', value: 5, target: 1, unit: 'seg' }, { day: 'Jul 11', value: 1, target: 1, unit: 'seg' }, { day: 'Jul 13', value: 2, target: 1, unit: 'seg' }] },
      { task: 'ITS HDD boring', period: 'Jul 2-Jul 13 measured days', minimum: '1 completed bore/day', above: 3, below: 4, latest: 'Jul 13 (Mon): HB-17 and HB-18 closed — 16 of 20 cumulative (80%)', note: 'Jul 13 ITS tracker: 16 done / 0 in progress / 4 pending. 5,444.2 ft installed; 0 ft bored on Jul 13 itself. Boring has closed the gap on plowing.', daily: [{ day: 'Jul 2', value: 1, target: 1, unit: 'bores' }, { day: 'Jul 6', value: 0, target: 1, unit: 'bores' }, { day: 'Jul 7', value: 0, target: 1, unit: 'bores' }, { day: 'Jul 8', value: 1, target: 1, unit: 'bores' }, { day: 'Jul 9', value: 1, target: 1, unit: 'bores' }, { day: 'Jul 10', value: 1, target: 1, unit: 'bores' }, { day: 'Jul 11', value: 1, target: 1, unit: 'bores' }, { day: 'Jul 13', value: 2, target: 1, unit: 'bores' }] }
    ],
    successors: [
      { activity: 'Tracker structural assembly', dependency: 'Completed piles by zone/block; final tracker finish after final pile finish', impact: 'Can overlap piling only in released areas. Final tracker structure cannot finish before the revised late-July pile forecast; the August 30 tracker-completion estimate requires 40 completed rows/day.', mitigation: 'Prioritize tracker crews into released workfronts and maintain linked finish-to-finish controls.' },
      { activity: 'Tracker completion incl. purlins', dependency: 'Completed tracker structure; purlins installed concurrently (sufficient units on site)', impact: 'Purlin delivery is no longer a restriction. Tracker completion is now controlled by assembly production only, with a best-estimate finish of August 30 for all trackers.', mitigation: 'Hold >= 48 tracker units/day, ramp toward 40 completed rows/day, and keep same-week QA turnover of finished rows.' },
      { activity: 'Module installation', dependency: 'Completed tracker rows with both Purlin types installed; final module finish after final purlin finish', impact: 'Module release is controlled by completed, QA-released tracker rows (purlins installed with the trackers). Final module completion is required one week after the August 30 tracker completion — by September 6.', mitigation: 'Mobilize a controlled module crew only against fully released rows and maintain a block-level tracker/purlin/module constraint log.' },
      { activity: 'DC string wiring / combiner work', dependency: 'Modules set and accessible rows', impact: 'Crews trail module installation block-by-block; with modules finishing Sep 6, DC/LV closes by Sep 18. Fragmented workfronts increase crew moves and testing discontinuity.', mitigation: 'Sequence electrical crews by completed inverter block; use partial completion packages and clean turnover boundaries.' },
      { activity: 'Commissioning and MC', dependency: 'Continuous mechanical completion by zone', impact: 'On the re-cascaded dates (trackers Aug 30, modules Sep 6, LV/DC Sep 18) the Sep 25 MC target is achievable with limited float; pre-commissioning Sep 14 - Oct 15 protects the Oct 16 PIS.', mitigation: 'Convert on-site purlin stock into completed tracker rows at >= 48 units/day, hold the Jul 28 pile gate, ramp modules to full-field rate, and prepare weekend/OT acceleration.' }
    ],
    schedule: [
      { activity: 'D&F Pre-Drilling', contractor: 'Kalamazoo Excavating', start: '2026-05-06', end: '2026-06-30', status: 'Complete', progress: 100, baseline: 0, note: 'The June 30 Construction Management PROGRESS sheet shows 7,694 of 7,694 drill-and-backfill units complete.' },
      { activity: 'GameChange material delivery sequence', contractor: 'GameChange / NTG / Landstar', start: '2026-06-17', end: '2026-07-16', status: 'Critical', progress: 90, baseline: 55, note: 'Single consolidated delivery line through the July 16 final tracker-material date. Site pile stock: 28,343 delivered vs 21,838 executed — 6,505-pile buffer (~8.9 days at the 732/day required rate). Receiving cap 14 pile + 8 racking loads/day; loads count as scheduled until POD/site receipt. Purlin stock sufficient — delivery is not a production restriction.' },
      { activity: 'United Zone F mobilization and pile-spot marking', contractor: 'United', start: '2026-06-15', end: '2026-06-21', status: 'Complete', progress: 100, baseline: 0, note: 'Completed on schedule: marking, mobilization and onboarding closed; United began ramming Jun 22 and has produced daily since.' },
      { activity: 'Overall pile installation acceleration', contractor: 'All pile contractors', start: '2026-06-22', end: '2026-07-28', status: 'Critical', progress: 69.7, baseline: 48.4, note: '9,514 piles remain (20,550 official Jul 13 workbook + 1,288 field: Sat 680, Mon 608): holding July 28 requires ~732 piles/day vs 560 stated capacity. FIVE straight production days above the line (646, 669, 680, 680, 608). Rig repairs (United 2 down) and the 3rd Latnovva rig are the escalated levers.' },
      { activity: 'Tracker assembly incl. purlin install', contractor: 'ECCS', start: '2026-06-08', end: '2026-08-30', status: 'At Risk', progress: 22.7, baseline: 0, note: 'Jul 13: 29 rows completed in Zone C with 54 people after three zero days — 564 done / 235 QA-released / 329 pending QA (no releases Jul 10-13; A6 and A7 due Jul 14). Required rate is now 47 rows/day. Completing and releasing the C rows is the controlling item for the module front — German: piles are no longer the problem; trackers and panels must take the rhythm.' },
      { activity: 'ITS HDD boring', contractor: 'ITS', start: '2026-06-12', end: '2026-08-15', status: 'Active', progress: 80, baseline: 0, note: 'Jul 13 ITS tracker: 16 of 20 bores complete (80%), 0 in progress, 4 pending — HB-17 and HB-18 closed on Jul 13. 5,444.2 ft installed.' },
      { activity: 'ITS MV cable plowing', contractor: 'ITS', start: '2026-06-25', end: '2026-08-15', status: 'Active', progress: 67.4, baseline: 0, note: 'Jul 13 ITS tracker: 31 of 46 segments complete (67.4%) — +2 since Saturday; 102,174 ft installed, 9,078 ft plowed on Jul 13 (MV12A).' },
      { activity: 'Control building foundation and delivery gate', contractor: 'AB Power / SET team', start: '2026-06-20', end: '2026-07-10', status: 'Complete', progress: 100, baseline: 0, note: 'GATE MET: control building delivered and set on its foundation the night of July 7, three days ahead of the July 10 required-on-site date.' },
      { activity: 'SET equipment required-on-site gate', contractor: 'SET team / Procurement / Suppliers', start: '2026-06-24', end: '2026-07-10', status: 'Critical', note: 'Jul 13 SET tracker: overall 11.8% (civil 44.9%, structural 5.7%). Control building on site; Jul 12: transformer-foundation containment berm complete — foundation ready for the main power transformer, which is still in fabrication. Several electrical items remain committed after the Jul 10 gate — procurement acceleration still needed.' },
      { activity: 'Inverter foundation readiness', contractor: 'EPC / Civil / Electrical', start: '2026-06-20', end: '2026-07-25 provisional', status: 'Critical', progress: 84.3, baseline: 0, note: 'Jul 13 workbook: inverter piling complete at 19 of 23 stations (194/230 piles, 84.3%, incl. 4 piles driven in E on Jul 13) — pending D10, E12, F16, G20. Base-plate welding complete on all 18 inverter stations delivered to site (Axel Cano, Jul 12) — the remainder wait on inverter deliveries. Prior status: pending B08, D10, E12, F17, G19, G20. On pace ahead of the end-July arrival of the 23 units.' },
      { activity: 'Inverter Installation', contractor: 'EPC / OEM', start: '2026-07-27', end: '2026-09-15', status: 'Confirmed', progress: 0, baseline: 0, note: '23 x 4.2 MW units. Installation is separated from the SET/control-building scope and depends on completed inverter pile foundations before first delivery.' },
      { activity: 'Workforce module crew mobilization', contractor: 'Workforce', start: '2026-06-29', end: '2026-07-06', status: 'Complete', progress: 100, baseline: 0, note: 'Module crews mobilized and producing (Workforce + Brumont, 38 installers on the Jul 9 board); manning stability is tracked in the risks section.' },
      { activity: 'Final module installation completion', contractor: 'Workforce', start: '2026-07-03', end: '2026-09-06', status: 'Critical', progress: 4.9, baseline: 0, note: 'Modules must finish one week after tracker completion: Aug 30 trackers -> Sep 6 module finish. 8,421 modules executed through Jul 13 (record 2,922 on Jul 13); ~3,469/day now required — full-field production depends on released tracker rows and the module crew ramp.' },
      { activity: 'DC Wire / LV Installation', contractor: 'East Carolina + Self-Perform', start: '2026-07-07', end: '2026-09-18', status: 'Critical', progress: 0, baseline: 0, note: 'Aerial messenger-wire-supported harness / BLA-style installation from tracker rows to the junction boxes. Crews work immediately behind released module blocks; with modules finishing Sep 6, LV/DC closes about two weeks later, by Sep 18.' },
      { activity: 'Electrical Pre-Commissioning', contractor: 'EPC + OEMs', start: '2026-09-14', end: '2026-10-15', status: 'Planned', progress: 0, baseline: 0, note: 'Zonal energization after inverter, MV/HDD, tracker, module, and DC/LV turnover by block. Runs Sep 14 - Oct 15 so all zones are energized ahead of the Oct 16 PIS target.' }
    ],
    fieldResourceSnapshots: [
      { label: 'Jun 17 actual', week: 'W25', people: 136, color: '#b53030', offset: -18 },
      { label: 'Jun 30 official', week: 'W27', people: 148, color: '#2769a8', offset: 18 },
      { label: 'Jul 6 field', week: 'W28', people: 70, color: '#168a5b', offset: 48 },
      { label: 'Jul 7 field', week: 'W28', people: 170, color: '#8a4dbf', offset: 78 },
      { label: 'Jul 9 board', week: 'W28', people: 191, color: '#b96f18', offset: 108 },
      { label: 'Jul 13 current', week: 'W29', people: 191, color: '#0c5f43', offset: 138 }
    ],
    actualResources: [
      { contractor: 'ECCS', people: 50, label: '50 · tracker installation' },
      { contractor: 'WORKFORCE', people: 26, label: '26 · module installation' },
      { contractor: 'UNITED', people: 21, label: '21 · F Area piling' },
      { contractor: 'BRUMONT', people: 15, label: '15 · module installation' },
      { contractor: 'LATNOVVA', people: 14, label: '14 · B Area piling' },
      { contractor: 'ITS', people: 14, label: '14 · electrical MV/HDD' },
      { contractor: 'GREENSOL', people: 13, label: '13 · EPC management' },
      { contractor: 'GREENSOL CONSTRUCTION', people: 7, label: '7 · site supervision' },
      { contractor: 'TOPLAND', people: 7, label: '7 · civil & roads' },
      { contractor: 'ABPOWER', people: 5, label: '5 · electrical systems' },
      { contractor: 'DIG IT', people: 4, label: '4 · SET foundations (AB sub)' },
      { contractor: 'HI-TECH', people: 4, label: '4 · substation & QI' },
      { contractor: 'HURRICANE', people: 3, label: '3 · fencing contractor' },
      { contractor: 'LOUNSBURY', people: 3, label: '3 · civil earthworks' },
      { contractor: 'ECS', people: 2, label: '2 · environmental support' },
      { contractor: 'SWCA', people: 2, label: '2 · environmental compliance' },
      { contractor: 'WESTWOOD', people: 1, label: '1 · civil consulting' }
    ],
    todayFieldSnapshot: {
      date: 'Jul 13, 2026',
      total: 191,
      rows: [
        { contractor: 'ECCS', people: 50, category: 'tracker', note: 'Tracker structural installation — all blocks' },
        { contractor: 'WORKFORCE', people: 26, category: 'module', note: 'Module installation crew, primary' },
        { contractor: 'UNITED', people: 21, category: 'pile', note: 'F Area pile driving — 6 ramming machines (2 damaged)' },
        { contractor: 'BRUMONT', people: 15, category: 'module', note: 'Module installation crew, secondary' },
        { contractor: 'LATNOVVA', people: 14, category: 'pile', note: 'B Area pile driving — 3 ramming machines' },
        { contractor: 'ITS', people: 14, category: 'electrical', note: 'Electrical: MV plowing and HDD boring' },
        { contractor: 'GREENSOL (EPC Team)', people: 13, category: 'epc', note: 'Project management and EPC oversight' },
        { contractor: 'GREENSOL CONSTRUCTION', people: 7, category: 'epc', note: 'Self-perform site supervision and QA' },
        { contractor: 'TOPLAND', people: 7, category: 'civil', note: 'Civil / internal roads preparation' },
        { contractor: 'ABPOWER', people: 5, category: 'electrical', note: 'Electrical systems and SET support' },
        { contractor: 'DIG IT', people: 4, category: 'electrical', note: 'SET foundations (subcontractor of ABPOWER)' },
        { contractor: 'HI-TECH', people: 4, category: 'electrical', note: 'Substation grounding and Quality Inspector' },
        { contractor: 'HURRICANE', people: 3, category: 'civil', note: 'Perimeter fencing — 95.6% complete' },
        { contractor: 'LOUNSBURY', people: 3, category: 'civil', note: 'Civil earthworks / basin closeout' },
        { contractor: 'ECS', people: 2, category: 'civil', note: 'Environmental controls / sediment basins' },
        { contractor: 'SWCA', people: 2, category: 'civil', note: 'Environmental compliance monitoring' },
        { contractor: 'WESTWOOD', people: 1, category: 'civil', note: 'Civil / environmental consulting' }
      ]
    },
    equipmentNotes: [
      { contractor: 'GreenSol', equipment: 'Site trucks and laptops for management/QC field use; no heavy equipment assigned.', output: 'Daily site walk, safety audits, and progress verification.' },
      { contractor: 'GreenSol Construction', equipment: 'Hand tools and site vehicles supporting self-perform labor.', output: 'Supporting active workfronts; no heavy equipment assigned.' },
      { contractor: 'ECS', equipment: 'No crew or equipment on site today.', output: 'Not applicable.' },
      { contractor: 'Hurricane', equipment: 'Standard fencing install tools (post drivers, hand tools).', output: 'Fence ~95.6% complete (Jul 9 sheet): A-F done, Zone G at 71.1%, gates remaining.' },
      { contractor: 'Topland', equipment: 'Grading/road equipment (grader, roller).', output: 'Internal roads scope; Area F access blocked ~10 AM by a concrete pour.' },
      { contractor: 'Lounsbury', equipment: 'Earthwork equipment (excavator, dozer) for cut/fill and basin work.', output: 'Area G basin closeout continuing ahead of cut/fill start.' },
      { contractor: 'ECCS', equipment: 'Tracker structural installation crew; equipment count varies by workfront.', output: 'Largest crew on site; assembling and installing tracker rows; July 7: 29 trackers completed.' },
      { contractor: 'United', equipment: '8 ramming machines on site — 2 broken (rig repairs escalated).', output: 'Jul 13 (Mon): 536 piles in Zone F with 23 people (89/rig-day on the 6 running rigs).' },
      { contractor: 'Latnovva', equipment: '2 ramming machines on site — 1 broken, leaving a single working rig (escalated).', output: 'Jul 13 (Mon): 72 piles in Zone B with 14 people — output collapsed with the fleet down to one rig.' },
      { contractor: 'Workforce', equipment: 'Module installation hand tools / torque equipment.', output: 'Jul 13 (Mon): 1,064 modules in Zone A with 28 people incl. administrative staff.' },
      { contractor: 'Brumont', equipment: 'Module installation tools; 18-person crew.', output: 'Jul 13 (Mon): 1,858 modules in Zone A — best single-crew day; moves into Zone C on Wednesday.' },
      { contractor: 'ITS', equipment: 'HDD boring rig and MV cable-plowing machine.', output: 'Jul 13 ITS tracker: 31/46 plow segments (102,174 ft) and 16/20 bores (80%) complete.' },
      { contractor: 'AB Power', equipment: 'SET / electrical installation equipment.', output: 'Supporting control-building and SET electrical scope.' },
      { contractor: 'Dig It', equipment: 'Trenching / electrical support equipment (AB Power subcontractor).', output: 'SET foundation and electrical support scope.' },
      { contractor: 'Hi Tech', equipment: 'Electrical / substation support equipment; Quality Inspector coordination.', output: 'SET / substation grounding and commissioning support scope.' },
      { contractor: 'Westwood', equipment: 'No crew or equipment on site today.', output: 'Not applicable.' },
      { contractor: 'SWCA', equipment: 'No crew or equipment on site today.', output: 'Not applicable.' }
    ],
    resourcePlan: [
      { label: 'Total site resources', actual: 191, target: 105, targetLabel: 'Acceleration peak 95-105', note: 'Includes field labor plus management/QC/HSE; actual is the Jul 13 on-site field snapshot (191) tracking current crew allocation.' },
      { label: 'Tracker / piling crew', actual: 85, target: 85, targetLabel: 'ECCS (50) + United (21) + Latnovva (14)', note: 'Tracker (50) and piling (35) combined: 85 personnel dedicated to structural and piling scope.' },
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
      { name: 'Provisional Interconnection', target: 'Oct 16, 2026', forecast: 'Oct 12-16, 2026', status: 'High', note: 'With MC forecast Sep 20-25 and pre-commissioning complete by Oct 15, the Oct 16 PIS target is feasible without renegotiation — protect the SET/inverter path.' },
      { name: 'Commercial Operation Date', target: 'Nov 9, 2026', forecast: 'Nov 5-9, 2026', status: 'Watch', note: 'The re-cascaded MC/PIS dates restore limited float to COD; feasible if the pile gate and module ramp hold.' },
      { name: 'Substantial Completion', target: 'Nov 30, 2026', forecast: 'Nov 30, 2026', status: 'Watch', note: 'Still achievable if COD is protected and outdoor work closes before weather stop.' }
    ],
    risks: [
      { title: 'Rig availability, not delivery, now caps pile production', level: 'Critical', owner: 'United / LATNOVVA / Audelio Zuniga / Manuel Ramirez', note: 'Pile stock is comfortable — 28,343 delivered vs 21,838 executed, a 6,505-unit buffer (~8.9 days at the required 732/day). The constraint is mechanical: United is running 6 of 8 rigs and Latnovva 1 of 2, and Latnovva output fell to 72 piles on Jul 13 as a result. Every day at 608 instead of 732 pushes the Jul 28 gate further out; repairs and the replacement rig are the recovery levers.' },
      { title: 'Trackers remain the controlling front: 29 rows vs 47 required', level: 'Critical', owner: 'ECCS / Daniel Morilla / Manuel Ramirez', note: 'ECCS restarted tracker production on Jul 13 with 29 rows in Zone C using 54 people — 18 short of the 47 completed rows/day now required for Aug 30, and it followed three zero days. Meanwhile module crews set a 2,922 record. Brumont enters Zone C on Wednesday against only 13 QA-released rows there — roughly a day and a half of module workfront. Jose has directed ECCS to at least double the rate and reinforce crews; without it the module ramp starves within two weeks.' },
      { title: 'QA release backlog now binds the module front — and Area F was released without sub documents', level: 'Critical', owner: 'Daniel Morilla (QA/QC) / ECCS / Manuel Ramirez', note: '329 completed tracker rows await Quality approval on top of the 235 released, and nothing was released between Jul 10 and Jul 13 (rows were driven but not levelled/aligned). A6 and A7 are due for release Jul 14 and Area F progress is expected this week. Open item flagged by QA: some Area F zones were released internally without the subcontractor submitting quality documents — those documents must be recovered. With modules at 2,922/day, released rows are now the binding constraint.' },
      { title: 'SET foundation, delivery dates, and equipment commitments all need closure', level: 'Critical', owner: 'Axel Cano / AB Power / Karina Mucino / Joshua Spalding / Project Management', note: 'Jul 13 SET tracker shows 11.8% overall progress (civil 44.9%, structural 5.7%), up from 8.7% on Jul 6. The control building is set and the transformer-foundation containment berm was completed Jul 12. Transformer and structural steel remain in fabrication, and several electrical items show committed dates after the July 10 required-on-site gate.' },
      { title: 'ITS is ahead of the electrical sequence — keep the reporting cadence', level: 'On Track', owner: 'ITS / Audelio Zuniga / Angel Urbina', note: 'Jul 13 ITS tracker: 31 of 46 plow segments complete (102,174 ft) and 16 of 20 bores closed (5,444.2 ft). Plowing added 9,078 ft on Jul 13. Only 4 bores and 15 segments remain; the LV kick-off meeting Jose called for Jul 14 should confirm crews and work plan for the follow-on scope.' },
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
        if (ctxP) ctxP.textContent = 'Total headcount by crew from today\u2019s on-site tracking board. GreenSol management and self-perform labor are combined into a single EPC-team bar; subcontractor crews are shown individually, largest to smallest. Scope breakdown: Trackers & Piling (85), Module Installation (41), Electrical & SET (27), Civil & Fencing (18), GreenSol EPC (20).';
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
      ctx.fillText(snapshot.total + ' people on site \u2014 ' + snapshot.date, 4, 24);
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
