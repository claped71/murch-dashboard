'use strict';
// Murch dashboard data - update THIS file for daily changes
// CACHE BUSTER: Force rebuild on Jul 9, 2026 at 12:50 UTC
// Note: assetVersion, assetBase, asset(), and assetFallback() are defined in index.html's inline script
// Duplicate declarations have been removed to fix SyntaxError: Identifier 'assetVersion' has already been declared
window.MURCH_DATA = {
    control: {
      asOf: 'Jul 9, 2026 (field)',
      piles:    { installed: 19274, total: 31352, gate: '2026-07-28', gateLabel: 'Jul 28', required: 711, capacity: 560, name: 'Piles', unit: 'piles/day' },
      trackers: { installed: 535, released: 235, total: 2486, gate: '2026-08-30', gateLabel: 'Aug 30', required: 43, capacity: 48, name: 'Trackers incl. purlins', unit: 'rows/day' },
      modules:  { installed: 3180, total: 171470, gate: '2026-09-06', gateLabel: 'Sep 6', required: 3366, capacity: 5531, name: 'Modules', unit: 'mod/day' },
      mc:       { target: 'Sep 25', forecast: 'Sep 20-25', name: 'Mechanical Completion' }
    },
    manpowerHistory: [
      { day: 'Jun 17', total: 136, src: 'field actual' },
      { day: 'Jun 25', total: 149, src: 'workbook' },
      { day: 'Jun 26', total: 134, src: 'workbook' },
      { day: 'Jun 29', total: 146, src: 'workbook' },
      { day: 'Jun 30', total: 148, src: 'official' },
      { day: 'Jul 7', total: 170, src: 'field report' },
      { day: 'Jul 9', total: 193, src: 'site board' }
    ],
    manpowerMixToday: { day: 'Jul 9', total: 193, mix: [
      { trade: 'Mechanical', people: 126, color: '#168a5b' },
      { trade: 'Electrical', people: 30, color: '#2769a8' },
      { trade: 'Greensol EPC', people: 20, color: '#66716d' },
      { trade: 'Civil / Env', people: 14, color: '#b96f18' },
      { trade: 'Support', people: 3, color: '#8a4dbf' }
    ] },
    contractorScore: [
      { date: 'Jul 9', contractor: 'LATNOVVA', trade: 'Piles', output: 150, resource: '16 people · 2 rigs — 3rd rig did NOT start', perUnit: 75, criterion: 80, critLabel: '80 piles/rig-day' },
      { date: 'Jul 9', contractor: 'ECCS', trade: 'Trackers', output: 0, resource: '46 people · 12 rows at 75% in C · 1 inverter station driven in E', perUnit: 0, criterion: 48, critLabel: '48 rows/day' },
      { date: 'Jul 9', contractor: 'Brumont', trade: 'Modules', output: 840, resource: '18 people · zone A', perUnit: 840, criterion: 2000, critLabel: '2,000 mod/day by Jul 10' },
      { date: 'Jul 9', contractor: 'Workforce', trade: 'Modules', output: 468, resource: 'ONLY 6 people — most of the crew left site', perUnit: 468, criterion: 2000, critLabel: '2,000 mod/day by Jul 10' },
      { date: 'Jul 8', contractor: 'United', trade: 'Piles', output: 490, resource: '23 people · 7 rigs · +1 inverter pile', perUnit: 70, criterion: 80, critLabel: '80 piles/rig-day' },
      { date: 'Jul 8', contractor: 'LATNOVVA', trade: 'Piles', output: 150, resource: '19 people · 2 rigs (3rd on site Jul 9) · B6', perUnit: 75, criterion: 80, critLabel: '80 piles/rig-day' },
      { date: 'Jul 8', contractor: 'ECCS', trade: 'Trackers', output: 0, resource: '45 people · 13 rows at 75% in C', perUnit: 0, criterion: 48, critLabel: '48 rows/day' },
      { date: 'Jul 8', contractor: 'Workforce', trade: 'Modules', output: 780, resource: '20 people · zone A', perUnit: 780, criterion: 2000, critLabel: '2,000 mod/day by Jul 10' },
      { date: 'Jul 8', contractor: 'Brumont', trade: 'Modules', output: 156, resource: '18 people · zone A (new crew)', perUnit: 156, criterion: 2000, critLabel: '2,000 mod/day by Jul 10' },
      { date: 'Jul 6', contractor: 'Workforce', trade: 'Modules', output: 780, resource: '17 people', perUnit: 780, criterion: 2000, critLabel: '2,000 mod/day by Jul 10' }
    ],
    scope: [
      { title: 'EPC Management', metric: 'Turnkey', note: 'Project management, safety, QC, contractor deliverables, owner reporting, permitting support, and trade coordination through completion.' },
      { title: 'Civil and Environmental', metric: 'G released', note: 'Rosario Week 26 email says Area G is released for pile driving and material distribution; Area G cut/fill starts after basin completion.' },
      { title: 'Mechanical BOS', metric: '31,352 piles · 2,486 trackers', note: 'Pile driving (19,274 installed, 61.5% — Jul 8 basis), GameChange SAT tracker assembly incl. purlins (535 done — 235 QA-released, 300 pending Quality), and module placement. D&F pre-drilling complete (7,694/7,694).' },
      { title: 'Electrical BOS', metric: 'ITS plowing on site', note: 'MV collection, HDD, plowing, grounding, DC string and combiner wiring, LV/AC works, inverter installation, SCADA, and testing. Joshua Spalding reported the ITS plowing machine arrived on June 19.' },
      { title: 'Procurement', metric: '171,470 modules', note: 'Panels, racking, purlins, actuators, controllers, cables, inverter stations, combiner boxes, and SET equipment.' },
      { title: 'Commissioning', metric: 'PIS Oct 16', note: 'Cold commissioning, energization, tracker testing, inverter start-up, PR test path, punch list, COD, and substantial completion.' }
    ],
    photos: [
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
      { area: '<u>Pile production acceleration — Zones B / F / D-G</u><span style="background:#b53030;color:#fff;padding:1px 6px;border-radius:3px;font-size:10px;font-weight:700;margin-left:6px">CRITICAL</span>', target: '12,078 piles remain to the Jul 28 gate. Jul 8: 640 — first day above capacity. Latnovva 3rd rig expected Jul 9 → 10-rig fleet ≈ 715-720/day, at last matching the required rate. July 7 output was 396 piles (United 380 with 7 rigs; Latnovva 16 with one machine — unacceptable).', minimum: '>= 711 piles/day now required to hold Jul 28 (12,078 piles over 17 remaining working days) — above the 560/day stated capacity; at 560/day the gate lands ~Aug 4', gate: 'Area F hard soil, rig availability, and daily pile-stock re-feed. United reports 7 ramming machines; Latnovva had one damaged rig and one rig being assembled.', owners: 'LATNOVVA / United | Audelio Zuniga | Manuel Ramirez | Joshua Spalding' },
      { area: '<u>GameChange tracker-material deliveries</u>', target: 'Confirm POD/site receipt for the Jul 7 eleven-load sequence and close out remaining loads through Jul 16. Sufficient purlin units are on site — delivery is no longer a restriction on tracker completion.', minimum: 'From Jul 7 receive up to 14 pile loads/day plus 8 racking loads/day if appointments and offloading resources hold.', gate: 'Tracker material receipts remain a project gate, but daily production is controlled through completed tracker rows, not a separate purlin daily log.', owners: 'GameChange (Shreeya Devkota) | Manuel Ramirez | Karina Mucino' },
      { area: '<u>Module installation ramp — Area A</u><span style="background:#b53030;color:#fff;padding:1px 6px;border-radius:3px;font-size:10px;font-weight:700;margin-left:6px">CRITICAL</span>', target: 'Module erection is underway but far too slow: only 156 modules on July 7 (936 cumulative field-reported). Modules must finish Sep 6 — one week after tracker completion.', minimum: 'Reach >= 2,000 modules/day by Friday Jul 10; the acceleration plan requires 5,531/day full-field from mid-July', gate: 'QA-released complete tracker rows + measured module-spacing QC control (Golden Row slot-tolerance finding) + crew ramp on schedule.', owners: 'Workforce | Audelio Zuniga | Daniel Morilla (QA/QC) | Manuel Ramirez' },
      { area: 'Tracker assembly and completed row release', target: 'July 7 output was 29 tracker units. 535 trackers are done — 235 QA-released, 300 pending Quality approval. Clear the 300-row QA release backlog while recovering to the 48 units/day build rate.', minimum: '>= 48 tracker units/day sustained all week and ramp toward 40 completed rows/day', gate: 'Complete tracker kits allocated by block and same-week QA turnover of finished rows.', owners: 'ECCS | Audelio Zuniga | Manuel Ramirez' },
      { area: 'Civil Area F/G release and internal roads', target: 'Finish Area G basins, then start Area G cut/fill. Rosario Ruiz reported Area G released for pile driving and material distribution.', minimum: 'Daily confirmed grading production in Area G after basin closeout; roads remain the controlling logistics constraint', gate: 'Civil access, fencing gates, and drainage release ahead of the mechanical fronts.', owners: 'Lounsbury / Hurricane / Topland | Rosario Ruiz | Audelio Zuniga' },
      { area: 'Electrical MV plowing and HDD closeout', target: 'Sustain plowing production (30 of 46 segments remaining) and continue closing the remaining 10 bores.', minimum: '>= 1 plow segment/day and >= 1 completed bore/day with measured footage reporting', gate: 'Crossing approvals, access continuity, and equipment availability. July 6 daily production was 0 ft for boring and plowing.', owners: 'ITS | Angel Urbina | Joshua Spalding' },
      { area: 'SET control building and inverter foundations', target: 'Control building received and set on its foundation the night of Jul 7 (gate met). Complete inverter pile foundations before the end-July arrival of the 23 inverter units.', minimum: '100% control-building foundation accepted; inverter foundations released ahead of first delivery', gate: 'Procurement acceleration on SET items still committed after the Jul 10 gate.', owners: 'AB Power / SET team | Axel Cano | Joshua Spalding | Karina Mucino' },
      { area: 'LV aerial-system readiness', target: 'Receive the first Chemik pre-tailored cable reels on Jul 7 and start East Carolina plus self-perform crews immediately behind released module blocks.', minimum: '>= 1 first-batch cable package received and >= 1 LV block package released by Jul 7', gate: 'Released module areas and East Carolina plus self-perform crew readiness.', owners: 'East Carolina / Greensol Self-Perform | Angel Urbina | Luis Romero | Karina Mucino' }
    ],
    civilKpis: [
      { title: 'Civil field progress', metric: 'Week 26', note: 'Rosario Ruiz Week 26 email dated July 3 and sent July 6 controls the latest civil workfront note.' },
      { title: 'Area G release', metric: 'Released', note: 'Rosario reports that once Area G basins are finished, cut/fill will start there; Area G is also released for pile driving and material distribution.' },
      { title: 'SET tracker', metric: '23 complete / 3 in progress', note: 'Jul 8 SET tracker: 23 complete, 3 in progress, 237 pending (~8.9% by activity count); steel-structures advance certified this period. Jul 6 discipline split: civil 33.8%, structural 1.9%, electrical 2.3%.' }
    ],
    civilActivities: [
      { activity: 'Earthworks cut / fill', company: 'Lounsbury', done: 61, remaining: 39, status: 'Active', note: 'Latest quantified percentage remains Week 24. Rosario Week 26 adds that Area G cut/fill starts after the Area G basins are finished.' },
      { activity: 'Perimeter fence', company: 'Hurricane', done: 95.6, remaining: 4.4, status: 'On Track', note: 'Rosario Jul 9 quantity sheet (area-weighted): Areas A, B, C, D, E, EW and F are 100% complete; Zone G is at 71.1%. Overall ~95.6% — only the G remainder and gates are left.' },
      { activity: 'Sediment basins / environmental controls', company: 'Lounsbury / ECS', done: 47, remaining: 53, status: 'At Risk', note: 'Latest quantified percentage remains Week 24. Rosario Week 26 states Area G basins must finish before Area G cut/fill starts.' },
      { activity: 'Internal roads', company: 'Topland', done: 63.8, remaining: 36.2, status: 'Active', note: 'Rosario Jul 9 quantity sheet: 10,696 of 16,755 lf done-equivalent (63.8%, weighted by layer). Major recovery from the 35% Week 24 baseline — roads are easing as the logistics constraint.' },
      { activity: 'PS foundations', company: 'United', done: 51.3, remaining: 48.7, status: 'Active', note: 'Rosario Jul 9 sheet: 51.3% weighted across the 23 power stations — consistent with 114/230 inverter piles complete. Work planned through August 10.' },
      { activity: 'Foundation SET', company: 'AB Power', done: 8.7, remaining: 91.3, status: 'Active', note: 'July 6 SET workbook shows overall substation progress at 8.7%; civil progress is 33.8%, structural progress is 1.9%, and electrical progress is 2.3%.' }
    ],
    contractors: [
      { name: 'LATNOVVA / assigned areas', scope: 19260, installed: 13142, remaining: 6118, done: 68.2, zones: 'Zones A, B, C, D, G, EW + shared Area E control', status: 'Watch', note: "Area-based control allocation only; it is not a new manpower or subcontractor headcount report." },
      { name: 'ECCS / Area E control', scope: 4434, installed: 4066, remaining: 368, done: 91.7, zones: 'Area E shared tracker workfront', status: 'On Track', note: "Area-based control allocation used only so dashboard totals reconcile with Audelio's July 6 official installed-production basis." },
      { name: 'United', scope: 7658, installed: 2066, remaining: 5592, done: 27.0, zones: 'Zone F', status: 'Active', note: 'Jul 8: 490 piles plus 1 inverter pile with 7 rigs (70/rig-day) — best United day yet; 2,066 installed in Zone F.' },
      { name: 'Project Total', scope: 31352, installed: 19274, remaining: 12078, done: 61.5, zones: "All zones | Construction Manager report", status: 'Critical', note: "Audelio / Construction Manager July 6 Delivery/Mechanical workbook is the official installed-production basis." }
    ],
    zones: [
      { zone: 'Zone A', contractor: 'Latnovva', scope: 3834, installed: 3834, remaining: 0, done: 100.0, status: 'Complete', note: 'Jul 8 PROGRESS table: Zone A pile installation complete.' },
      { zone: 'Zone C', contractor: 'Latnovva', scope: 2946, installed: 2946, remaining: 0, done: 100.0, status: 'Complete', note: 'July 6 Const. Management workbook; zone complete.' },
      { zone: 'Zone E', contractor: 'ECCS / Latnovva', scope: 8456, installed: 8012, remaining: 444, done: 94.7, status: 'Active', note: 'Jul 8 PROGRESS pile-installation table: 8,012 installed.' },
      { zone: 'Zone EW', contractor: 'Latnovva', scope: 846, installed: 846, remaining: 0, done: 100.0, status: 'Complete', note: 'Jul 8 workbook: Zone EW complete at 846 of 846.' },
      { zone: 'Zone B', contractor: 'Latnovva', scope: 2788, installed: 1570, remaining: 1218, done: 56.3, status: 'Active', note: 'Jul 8: Latnovva installed 150 piles in B6 — strong recovery from the 16-pile day; 1,570 installed (56.3%).' },
      { zone: 'Zone D', contractor: 'TBD / Latnovva', scope: 1468, installed: 0, remaining: 1468, done: 0, status: 'Material Hold', note: '2nd-50% work; no start before June 22 material arrivals.' },
      { zone: 'Zone F', contractor: 'United', scope: 7658, installed: 2066, remaining: 5592, done: 27.0, status: 'Active', note: 'Jul 8: 490 piles + 1 inverter pile with 7 rigs. 2,066 installed (27.0%); hard-soil risk being beaten by rate.' },
      { zone: 'Zone G', contractor: 'Latnovva', scope: 3356, installed: 0, remaining: 3356, done: 0, status: 'Active', note: 'Assigned to Latnovva. Rosario Ruiz Week 26 email says Area G is released for pile driving and material distribution; civil cut/fill starts after Area G basins are finished.' }
    ],
    production: [
      { name: 'Project pile installation', remaining: '12,078 piles', target: '~711 piles/day required for Jul 28 (560/day stated capacity)', latest: 'Jul 9 partial: Latnovva 150 (2 rigs — 3rd rig did NOT start); +1 inverter station driven in E, 1 more in progress in B; United report pending', cumulative: '19,274 / 31,352 installed (61.5%) — official Jul 8 evening workbook; Jul 9 total pending United report', status: 'Critical', note: 'July 7 official output was 399 piles. United held 54 piles/rig-day; Latnovva produced 16 piles with a single machine — an unacceptable rate that must be escalated. Holding Jul 28 requires ~711/day over the 17 remaining working days. Jul 8 output of 640 breaks the 560 capacity line for the first time. The 3rd Latnovva rig DID NOT work Jul 9 (still 2 rigs, 75/rig-day) — per the same-day rule this must be escalated now; the 9-rig fleet at ~72/rig-day gives ~650/day vs ~711 required. Areas A, C and EW COMPLETE; B 1,570 (56.3%); E 8,012 (94.7%); F 2,066 (27.0%).' },
      { name: 'Pile delivery / site stock', remaining: '5,843 piles undelivered', target: 'Receipts must exceed 560 piles/day burn', latest: 'Jul 6 workbook: delivered piles increased to 25,509', cumulative: '25,509 delivered; 6,235 available above installed', status: 'Watch', note: 'Available stock equals delivered piles less officially installed piles (19,274 per the Jul 8 evening workbook). The buffer covers about 11.1 production days at the acceleration-capacity assumption.' },
      { name: 'Drill and backfill', remaining: '0 pre-drills', target: 'Maintain no drill/backfill gate to piling', latest: 'All remaining units closed in refreshed workbook', cumulative: '7,694 / 7,694 complete (100.0%)', status: 'On Track', note: 'July 6 Construction Management progress source shows drill-and-backfill complete.' },
      { name: 'Civil grading / cut-fill', remaining: '39% of scope', target: '— No approved daily target in source', latest: 'Week 26 email: Area G cut/fill starts after basins finish', cumulative: '61% complete through latest quantified civil baseline', status: 'On Track', note: 'Current percentage follows Rosario Ruiz civil baseline; Week 26 adds Area G release for pile driving and material distribution.' },
      { name: 'Internal roads', remaining: '65% of scope', target: '— No approved daily target in source', latest: '— Daily quantity not reported', cumulative: '35% complete through latest quantified civil baseline', status: 'Critical', note: 'Current percentage follows Rosario Ruiz civil baseline for Areas A-B-C-E; roads continue to control logistics access.' },
      { name: 'Tracker completion incl. purlins', remaining: '1,951 to build · 2,251 to QA-release', target: '48 completed tracker rows/day acceleration target', latest: 'Jul 9: 0 rows completed — second straight zero day; 12 rows at 75% in Zone C', cumulative: '535 done (21.5%): 235 QA-released + 300 pending Quality · 493 rows pre-assembled / 2,486 total', status: 'Critical', note: 'Purlins are installed together with the trackers (delivery no longer a restriction). 535 trackers are physically done, of which Quality has released 235; the 300-row QA backlog is the immediate module-workfront lever. Best-estimate completion for all trackers is August 30.' },
      { name: 'Torque tube installation', remaining: '25,327 tubes', target: '— No approved daily target in source', latest: '— Daily installed quantity not reported', cumulative: '3,542 / 28,869 installed (12.3%)', status: 'Critical', note: 'June 23 Construction Manager workbook cumulative quantity.' },
      { name: 'ITS HDD boring', remaining: '10 of 20 bores', target: 'Minimum 1 completed bore/day', latest: 'Week Jul 3-9: 315 ft (78.8 ft/day avg)', cumulative: '11 / 20 bores complete (55%); 3,869.2 ft installed; 1 in progress, 8 pending', status: 'Watch', note: 'Jul 9 ITS workbook. Nine bores left; boring remains the slower ITS front.' },
      { name: 'ITS MV plowing', remaining: '30 of 46 segments', target: 'Minimum 1 completed segment/day', latest: 'Week Jul 3-9: 18,018 ft plowed (4,505 ft/day avg) — best week yet', cumulative: '21 / 46 segments complete (44.7%); 61,146 ft installed; 1 in progress', status: 'On Track', note: 'Jul 9 ITS workbook: +5 segments and +18,018 ft in the Jul 3-9 week. Plowing pace now supports the electrical sequence; keep closing the 24 pending segments.' },
      { name: 'SET construction', remaining: '91.3% of overall scope', target: '— No approved daily progress target in source', latest: 'Jul 8 tracker: 23 complete, 3 in progress, 237 pending', cumulative: '~8.9% by activity count; steel-structures advance certified this period', status: 'Critical', note: 'Jul 8 SET tracker — two more activities closed since Jul 6. Jul 6 discipline split: civil 33.8%, structural 1.9%, electrical 2.3%.' },
      { name: 'Panel delivery', remaining: '14,230 modules to deliver', target: '— No approved daily delivery target in source', latest: '— Latest daily receipt not reported', cumulative: '157,240 / 171,470 delivered (91.7%)', status: 'On Track', note: 'June 23 Construction Manager workbook cumulative delivery quantity.' },
      { name: 'Module installation', remaining: '168,290 modules', target: '5,531 modules/day acceleration target', latest: 'Jul 9: 1,308 modules — Brumont 840 + Workforce 468 (crew fell to 6 people)', cumulative: '3,180 modules field-reported, pending official workbook incorporation', status: 'Critical', note: 'Jul 9: 1,308 modules — best day yet and rising, but Workforce lost most of its crew (6 people worked the full day; Brumont carried the output with 840). Still below the ~3,366/day now required. Modules must finish one week after tracker completion: Aug 30 trackers -> Sep 6 module finish. Module work requires fully released tracker rows.' }
    ],
    dailyProductionHistory: [
      { task: 'Pile installation', period: 'Jun 18-Jul 8 measured days', minimum: '560 piles/day', above: 1, below: 13, latest: 'Jul 8: 640 piles — first day above the 560 line', note: 'July 8: United 490 piles + 1 inverter (7 rigs, 70/rig-day) and Latnovva 150 in B6. First day above capacity since acceleration began; ~711/day still required for Jul 28. Official cumulative 19,274 (61.5%).', daily: [{ day: 'Jun 18', value: 20, target: 560, unit: 'piles' }, { day: 'Jun 19', value: 79, target: 560, unit: 'piles' }, { day: 'Jun 22', value: 251, target: 560, unit: 'piles' }, { day: 'Jun 23', value: 101, target: 560, unit: 'piles' }, { day: 'Jun 25', value: 370, target: 560, unit: 'piles' }, { day: 'Jun 26', value: 340, target: 560, unit: 'piles' }, { day: 'Jun 29', value: 261, target: 560, unit: 'piles' }, { day: 'Jun 30', value: 234, target: 560, unit: 'piles' }, { day: 'Jul 1', value: 252, target: 560, unit: 'piles' }, { day: 'Jul 2', value: 274, target: 560, unit: 'piles' }, { day: 'Jul 3', value: 134, target: 560, unit: 'piles' }, { day: 'Jul 6', value: 307, target: 560, unit: 'piles' }, { day: 'Jul 7', value: 399, target: 560, unit: 'piles' }, { day: 'Jul 8', value: 640, target: 560, unit: 'piles' }] },
      { task: 'Tracker production control (incl. purlin completion)', period: 'Jun 17-Jul 7', minimum: '48 tracker units/day', above: 4, below: 10, latest: 'Jul 7: 29 tracker units (ECCS)', note: 'Purlin installation is integrated into this tracker control metric: a row counts once its purlins are installed. Total done is 535 rows — 235 released by Quality and 300 pending QA approval — after 29 units on July 7, still below the 48/day target.', daily: [{ day: 'Jun 17', value: 15, target: 48, unit: 'units' }, { day: 'Jun 18', value: 35, target: 48, unit: 'units' }, { day: 'Jun 19', value: 26, target: 48, unit: 'units' }, { day: 'Jun 20', value: 31, target: 48, unit: 'units' }, { day: 'Jun 21', value: 0, target: 48, unit: 'units' }, { day: 'Jun 22', value: 48, target: 48, unit: 'units' }, { day: 'Jun 23', value: 31, target: 48, unit: 'units' }, { day: 'Jun 24', value: 0, target: 48, unit: 'units' }, { day: 'Jun 25', value: 57, target: 48, unit: 'units' }, { day: 'Jun 26', value: 26, target: 48, unit: 'units' }, { day: 'Jun 29', value: 29, target: 48, unit: 'units' }, { day: 'Jun 30', value: 30, target: 48, unit: 'units' }, { day: 'Jul 1', value: 51, target: 48, unit: 'units' }, { day: 'Jul 7', value: 29, target: 48, unit: 'units' }, { day: 'Jul 8', value: 0, target: 48, unit: 'units' }, { day: 'Jul 9', value: 0, target: 48, unit: 'units' }] },
      { task: 'Module installation', period: 'Jul 3-Jul 7 field start', minimum: '5,531 modules/day', above: 0, below: 3, latest: 'Jul 7: 156 modules — far below the ramp', note: 'Workforce reported only 156 modules on July 7 — far below the ramp requirement. Cumulative 936 field-reported; modules must finish by Sep 6, one week after tracker completion.', daily: [{ day: 'Jul 3', value: 234, target: 5531, unit: 'modules' }, { day: 'Jul 6', value: 780, target: 5531, unit: 'modules' }, { day: 'Jul 7', value: 156, target: 5531, unit: 'modules' }, { day: 'Jul 8', value: 936, target: 5531, unit: 'modules' }, { day: 'Jul 9', value: 1308, target: 5531, unit: 'modules' }] },
      { task: 'ITS MV plowing', period: 'Jun 17-Jul 6', minimum: '1 completed segment/day', above: 6, below: 11, latest: 'Jul 6: 16 cumulative segments complete', note: 'The July 6 ITS workbook confirms plowing at 16 of 46 segments and 43,128 ft installed.', daily: [{ day: 'Jun 17', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 18', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 19', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 20', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 21', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 22', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 23', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 24', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 25', value: 3, target: 1, unit: 'seg' }, { day: 'Jun 26', value: 4, target: 1, unit: 'seg' }, { day: 'Jun 27', value: 1, target: 1, unit: 'seg' }, { day: 'Jun 28', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 29', value: 2, target: 1, unit: 'seg' }, { day: 'Jun 30', value: 5, target: 1, unit: 'seg' }, { day: 'Jul 1', value: 0, target: 1, unit: 'seg' }, { day: 'Jul 2', value: 1, target: 1, unit: 'seg' }, { day: 'Jul 6', value: 0, target: 1, unit: 'seg' }] }
    ],
    successors: [
      { activity: 'Tracker structural assembly', dependency: 'Completed piles by zone/block; final tracker finish after final pile finish', impact: 'Can overlap piling only in released areas. Final tracker structure cannot finish before the revised late-July pile forecast; the August 30 tracker-completion estimate requires 40 completed rows/day.', mitigation: 'Prioritize tracker crews into released workfronts and maintain linked finish-to-finish controls.' },
      { activity: 'Tracker completion incl. purlins', dependency: 'Completed tracker structure; purlins installed concurrently (sufficient units on site)', impact: 'Purlin delivery is no longer a restriction. Tracker completion is now controlled by assembly production only, with a best-estimate finish of August 30 for all trackers.', mitigation: 'Hold >= 48 tracker units/day, ramp toward 40 completed rows/day, and keep same-week QA turnover of finished rows.' },
      { activity: 'Module installation', dependency: 'Completed tracker rows with both Purlin types installed; final module finish after final purlin finish', impact: 'Module release is controlled by completed, QA-released tracker rows (purlins installed with the trackers). Final module completion is required one week after the August 30 tracker completion — by September 6.', mitigation: 'Mobilize a controlled module crew only against fully released rows and maintain a block-level tracker/purlin/module constraint log.' },
      { activity: 'DC string wiring / combiner work', dependency: 'Modules set and accessible rows', impact: 'Crews trail module installation block-by-block; with modules finishing Sep 6, DC/LV closes by Sep 18. Fragmented workfronts increase crew moves and testing discontinuity.', mitigation: 'Sequence electrical crews by completed inverter block; use partial completion packages and clean turnover boundaries.' },
      { activity: 'Commissioning and MC', dependency: 'Continuous mechanical completion by zone', impact: 'On the re-cascaded dates (trackers Aug 30, modules Sep 6, LV/DC Sep 18) the Sep 25 MC target is achievable with limited float; pre-commissioning Sep 14 - Oct 15 protects the Oct 16 PIS.', mitigation: 'Convert on-site purlin stock into completed tracker rows at >= 48 units/day, hold the Jul 28 pile gate, ramp modules to full-field rate, and prepare weekend/OT acceleration.' }
    ],
    schedule: [
      { activity: 'D&F Pre-Drilling', contractor: 'Kalamazoo Excavating', start: '2026-05-06', end: '2026-06-30', status: 'Complete', note: 'The June 30 Construction Management PROGRESS sheet shows 7,694 of 7,694 drill-and-backfill units complete.' },
      { activity: 'Current pile delivery burn', contractor: 'ECCS / LATNOVVA / United', start: '2026-06-16', end: '2026-07-08', status: 'Watch', note: 'Jul 8 evening workbook: 19,274 officially installed and 25,509 delivered, leaving a 6,235-pile buffer, about 11.1 days at the 560/day acceleration capacity.' },
      { activity: 'June 23 recorded delivery wave', contractor: 'GameChange / Logistics', start: '2026-06-23', end: '2026-06-23', status: 'Confirmed', note: 'The refreshed official workbook records 658 additional delivered piles and receipt lines for 21,672 tracker purlins, 20,251 purlin strips, 640 row tubes, and 2,760 heavy squeeze splices.' },
      { activity: 'June 24 scheduled delivery wave', contractor: 'GameChange / Logistics', start: '2026-06-24', end: '2026-06-24', status: 'Critical', note: 'Shreeya scheduled 6 trucks: 90 Light Green posts, 7,956 tracker purlins, 5,520 heavy splices, 7,840 saddle brackets, and 272 row tubes. Count as pending until POD/site receipt.' },
      { activity: 'June 30 confirmed delivery sequence', contractor: 'GameChange / NTG / Landstar', start: '2026-06-30', end: '2026-06-30', status: 'Critical', note: 'Shreeya confirmed 12 timed loads for June 30 from 7:00 am to 2:30 pm. MRSU8536763 is a carryover from June 29 after late loading in Los Angeles. Count as scheduled/confirmed until POD/site receipt is logged.' },
      { activity: 'July 2 confirmed delivery sequence', contractor: 'GameChange / NTG / Landstar', start: '2026-07-02', end: '2026-07-02', status: 'Critical', note: 'Shreeya confirmed 9 named loads for July 2. Count as scheduled until POD/site receipt, material type, and actual quantities are logged.' },
      { activity: 'July 3 confirmed delivery sequence', contractor: 'GameChange / NTG', start: '2026-07-03', end: '2026-07-03', status: 'Critical', note: 'Shreeya confirmed 6 named NTG loads for July 3: TCLU1477450, YMMU6239469, EITU9400207, TXGU6059112, TRHU8675801, and TRHU6565282. The email shows a blank 10:45 appointment line; confirm whether it was used.' },
      { activity: 'July 7 confirmed delivery sequence', contractor: 'GameChange / NTG / Landstar', start: '2026-07-07', end: '2026-07-07', status: 'Confirmed', note: 'Shreeya confirmed 11 timed loads for July 7: PL-3295-053-HT, PL-3295-001-RE-PE, EGSU1103910, TEMU8513957, BEAU4969180, YMMU6191811, MSDU5016566, SEGU4551269, PL-3295-022-RE-HA, PL-3295-019-RE-HA, and PL-3295-023-RE-HA. Confirm POD/site receipt in the next delivery log.' },
      { activity: 'July 8 confirmed delivery sequence', contractor: 'GameChange / NTG / Landstar', start: '2026-07-08', end: '2026-07-08', status: 'Critical', note: 'Shreeya (Jul 7 email) confirmed 10 timed loads for July 8, 07:00-13:45: PL-3295-068-HT and PL-3295-059-HT (Landstar), PL-3295-011-RE-HA, PL-3295-021-RE-HA, PL-3295-006-RE-PS, YMMU6190311, TEMU8513957, YMMU7018591, PL-3295-002-JZ-Murch, and PL-3295-005-RE-HA (NTG). Count as scheduled until POD/site receipt is logged.' },
      { activity: 'Delivery receiving-cap control', contractor: 'GameChange / Greensol Logistics', start: '2026-06-23', end: '2026-07-08', status: 'Critical', note: "Manuel's latest delivery position allows up to 14 pile loads/day plus 8 racking loads/day after the July 3 and July 6 piles-only priority, still subject to appointment discipline and POD/site receipt." },
      { activity: 'United Zone F mobilization and pile-spot marking', contractor: 'United', start: '2026-06-15', end: '2026-06-21', status: 'Mobilizing', note: 'United replaces JB Solar for Zone F. Complete pile-spot marking, crew and equipment mobilization, safety onboarding, access readiness, and workfront release before ramming.' },
      { activity: 'United Zone F pile ramming start', contractor: 'United', start: '2026-06-22', end: '2026-06-22', status: 'Critical', note: 'United starts pile ramming on June 22, subject to the delayed pile delivery, completed marking, access, and released workfronts.' },
      { activity: 'Overall pile installation acceleration', contractor: 'All pile contractors', start: '2026-06-22', end: '2026-07-28', status: 'Critical', note: '12,078 piles remain on the Jul 8 evening workbook (19,274 installed, 61.5%): holding July 28 now requires ~711 piles/day, above the stated 560/day capacity. July 7 output was 396 (United 380 with 7 rigs; Latnovva an unacceptable 16 with one machine) — additional/stronger rigs and Latnovva escalation are the remaining levers.' },
      { activity: 'Tracker assembly incl. purlin install', contractor: 'ECCS', start: '2026-06-08', end: '2026-08-30', status: 'At Risk', note: '535 trackers done — 235 QA-released plus 300 pending Quality approval (Jul 7: 29 units by ECCS, below the 48/day target); 493 rows pre-assembled. Purlins are installed together with the trackers — delivery is no longer a restriction and purlin work finishes with tracker completion. Best-estimate completion for all trackers is August 30.' },
      { activity: 'ITS HDD boring', contractor: 'ITS', start: '2026-06-12', end: '2026-08-15', status: 'Active', note: 'Ten of 20 bores are complete with 3,554.2 ft installed through the July 6 ITS workbook. July 6 daily log shows 0 ft boring.' },
      { activity: 'ITS MV cable plowing', contractor: 'ITS', start: '2026-06-25', end: '2026-08-15', status: 'Active', note: 'July 6 ITS workbook confirms 16 of 46 plow segments complete and 43,128 ft installed; July 6 daily log shows 0 ft plowing.' },
      { activity: 'Control building foundation and delivery gate', contractor: 'AB Power / SET team', start: '2026-06-20', end: '2026-07-10', status: 'Critical', note: 'July 6 SET tracker still shows 8.7% overall progress. The control building was delivered and set on its foundation the night of July 7 — the July 10 required-on-site gate is met.' },
      { activity: 'SET equipment required-on-site gate', contractor: 'SET team / Procurement / Suppliers', start: '2026-06-24', end: '2026-07-10', status: 'Critical', note: 'July 6 SET supply tracker still shows the transformer still in fabrication (control building now on site, installed Jul 7); several electrical items remain committed after the July 10 required-on-site gate and require procurement acceleration.' },
      { activity: 'Inverter foundation readiness', contractor: 'EPC / Civil / Electrical', start: '2026-06-20', end: '2026-07-25 provisional', status: 'Critical', note: 'Jul 8 workbook: 114 of 230 inverter piles complete (49.6%) across 11 of 23 stations; tension piles 53 of 615; substation control-house piles 10/10. All inverter pile foundations must be ready before the 23 units arrive at the end of July.' },
      { activity: 'Inverter Installation', contractor: 'EPC / OEM', start: '2026-07-27', end: '2026-09-15', status: 'Confirmed', note: '23 x 4.2 MW units. Installation is separated from the SET/control-building scope and depends on completed inverter pile foundations before first delivery.' },
      { activity: 'Purlin and racking deliveries (record)', contractor: 'GameChange / Logistics', start: '2026-06-17', end: '2026-07-16', status: 'Confirmed', note: 'Sufficient purlin units have been received on site to install purlins along with the trackers, so purlin delivery is no longer a project restriction. Remaining rolling loads through the July 16 final planned date are tracked for record only.' },
      { activity: 'Workforce module crew mobilization', contractor: 'Workforce', start: '2026-06-29', end: '2026-07-06', status: 'Critical', note: 'Workforce is expected to land June 29 with approximately 22 workers. Use this as mobilization/ramp only; module erection starts only against purlin-complete, QA-released rows.' },
      { activity: 'Final module installation completion', contractor: 'Workforce', start: '2026-07-03', end: '2026-09-06', status: 'Critical', note: 'Modules must finish one week after tracker completion: Aug 30 trackers -> Sep 6 module finish. Cumulative 936 modules field-reported through July 7 (156 on Jul 7 — far below the ramp); full-field production depends on released tracker rows and the module crew ramp.' },
      { activity: 'DC Wire / LV Installation', contractor: 'East Carolina + Self-Perform', start: '2026-07-07', end: '2026-09-18', status: 'Critical', note: 'Aerial messenger-wire-supported harness / BLA-style installation from tracker rows to the junction boxes. Crews work immediately behind released module blocks; with modules finishing Sep 6, LV/DC closes about two weeks later, by Sep 18.' },
      { activity: 'Electrical Pre-Commissioning', contractor: 'EPC + OEMs', start: '2026-09-14', end: '2026-10-15', status: 'Planned', note: 'Zonal energization after inverter, MV/HDD, tracker, module, and DC/LV turnover by block. Runs Sep 14 - Oct 15 so all zones are energized ahead of the Oct 16 PIS target.' }
    ],
    fieldResourceSnapshots: [
      { label: 'Jun 17 actual', week: 'W25', people: 136, color: '#b53030', offset: -18 },
      { label: 'Jun 30 official', week: 'W27', people: 148, color: '#2769a8', offset: 18 },
      { label: 'Jul 6 field', week: 'W28', people: 70, color: '#168a5b', offset: 48 },
      { label: 'Jul 7 field', week: 'W28', people: 170, color: '#8a4dbf', offset: 78 },
      { label: 'Jul 9 board', week: 'W28', people: 193, color: '#b96f18', offset: 108 }
    ],
    actualResources: [
      { contractor: 'ECCS', people: 46, label: '46' },
      { contractor: 'United', people: 23, label: '23 · 7 rigs' },
      { contractor: 'Brumont', people: 20, label: '20' },
      { contractor: 'Latnovva', people: 19, label: '19 · 3 rigs' },
      { contractor: 'Workforce', people: 18, label: '18' },
      { contractor: 'GreenSol', people: 14, label: '14' },
      { contractor: 'ITS', people: 13, label: '13' },
      { contractor: 'AB Power', people: 9, label: '9' },
      { contractor: 'GS Constr.', people: 6, label: '6' },
      { contractor: 'Topland', people: 6, label: '6' },
      { contractor: 'Dig It', people: 4, label: '4' },
      { contractor: 'Hi Tech', people: 4, label: '4' },
      { contractor: 'Hurricane', people: 3, label: '3' },
      { contractor: 'Lounsbury', people: 3, label: '3' },
      { contractor: 'ECS', people: 2, label: '2' },
      { contractor: 'Kalamazoo', people: 2, label: '2' },
      { contractor: 'SWCA', people: 1, label: '1' },
      { contractor: 'Westwood', people: 0, label: '0' }
    ],
    todayFieldSnapshot: {
      date: 'Jul 9, 2026',
      total: 193,
      rows: [
        { contractor: 'ECCS', people: 46, category: 'pile', note: 'Tracker structural / mechanical crew' },
        { contractor: 'United', people: 23, category: 'pile', note: 'Pile driving crew, Zone F — 7 rigs' },
        { contractor: 'Brumont', people: 20, category: 'module', note: 'Module installation crew, Zone A (2nd crew)' },
        { contractor: 'GreenSol (EPC Team)', people: 20, category: 'epc', note: '14 staff + 6 self-perform labor' },
        { contractor: 'Latnovva', people: 19, category: 'pile', note: 'Pile driving crew, Zone B — 3 rigs on site (3rd commissioned Jul 9)' },
        { contractor: 'Workforce', people: 18, category: 'module', note: 'Module installation crew, Zone A' },
        { contractor: 'ITS', people: 13, category: 'electrical', note: 'MV plowing / HDD electrical crew' },
        { contractor: 'AB Power', people: 9, category: 'electrical', note: 'SET / electrical crew' },
        { contractor: 'Topland', people: 6, category: 'civil', note: 'Civil / roads crew' },
        { contractor: 'Dig It', people: 4, category: 'electrical', note: 'Electrical / SET support crew' },
        { contractor: 'Hi Tech', people: 4, category: 'electrical', note: 'Electrical / SET support crew' },
        { contractor: 'Hurricane', people: 3, category: 'civil', note: 'Civil / fence crew' },
        { contractor: 'Lounsbury', people: 3, category: 'civil', note: 'Civil / grading crew' },
        { contractor: 'ECS', people: 2, category: 'civil', note: 'Environmental controls crew' },
        { contractor: 'Kalamazoo Excavation', people: 2, category: 'support', note: 'Excavation support crew' },
        { contractor: 'SWCA', people: 1, category: 'support', note: 'Environmental monitor' },
        { contractor: 'Westwood', people: 0, category: 'support', note: 'No crew on site' }
      ]
    },
    equipmentNotes: [
      { contractor: 'GreenSol', equipment: 'Site trucks and laptops for management/QC field use; no heavy equipment assigned.', output: 'Daily site walk, safety audits, and progress verification.' },
      { contractor: 'GreenSol Construction', equipment: 'Hand tools and site vehicles supporting self-perform labor.', output: 'Supporting active workfronts; no heavy equipment assigned.' },
      { contractor: 'ECS', equipment: 'No crew or equipment on site today.', output: 'Not applicable.' },
      { contractor: 'Hurricane', equipment: 'Standard fencing install tools (post drivers, hand tools).', output: 'Fence ~95.6% complete (Jul 9 sheet): A-F done, Zone G at 71.1%, gates remaining.' },
      { contractor: 'Topland', equipment: 'Grading/road equipment (grader, roller).', output: 'Internal roads scope; Area F access blocked ~10 AM by a concrete pour.' },
      { contractor: 'Lounsbury', equipment: 'Earthwork equipment (excavator, dozer) for cut/fill and basin work.', output: 'Area G basin closeout continuing ahead of cut/fill start.' },
      { contractor: 'ECCS', equipment: 'Pile-driving / tracker structural crew; rig count not separately reported today.', output: 'Largest crew on site; July 7: 29 trackers mounted plus 1 inverter pile driven.' },
      { contractor: 'United', equipment: '7 ramming machines / pile-driving rigs.', output: 'Zone F pile driving; July 7: 380 piles plus 1 inverter pile.' },
      { contractor: 'Latnovva', equipment: '3 ramming machines on site (3rd commissioned Jul 9).', output: 'Jul 8: 150 piles with 2 rigs (75/rig-day); 3-rig output expected from Jul 9.' },
      { contractor: 'Workforce', equipment: 'Module installation hand tools / torque equipment.', output: 'Jul 8: 780 modules (with Brumont, 936 total on the day; 1,872 cumulative).' },
      { contractor: 'Brumont', equipment: 'Module installation tools; 20-person crew.', output: 'On site since Jul 8: 156 modules on day one (Zone A).' },
      { contractor: 'ITS', equipment: 'HDD boring rig and MV cable-plowing machine.', output: 'Jul 9 workbook: 21/46 plow segments (61,146 ft) and 11/20 bores (3,869 ft) complete.' },
      { contractor: 'AB Power', equipment: 'SET / electrical installation equipment.', output: 'Supporting control-building and SET electrical scope.' },
      { contractor: 'Dig It', equipment: 'Trenching / electrical support equipment.', output: 'SET / electrical support scope.' },
      { contractor: 'Hi Tech', equipment: 'Electrical / SET support equipment.', output: 'SET / electrical support scope.' },
      { contractor: 'Crane Crew', equipment: '1 mobile crane.', output: 'Installing the control building today (SET scope).' },
      { contractor: 'Westwood', equipment: 'No crew or equipment on site today.', output: 'Not applicable.' },
      { contractor: 'SWCA', equipment: 'No crew or equipment on site today.', output: 'Not applicable.' }
    ],
    resourcePlan: [
      { label: 'Total site resources', actual: 193, target: 105, targetLabel: 'Acceleration peak 95-105', note: 'Includes field labor plus management/QC/HSE; actual is the Jul 9 on-site whiteboard count (193) from the Jul 1 Delivery/Mechanical workbook.' },
      { label: 'Tracker / purlin crew', actual: 47, target: 45, targetLabel: '38 avg / 40-45 peak', note: 'ECCS visible field resources are compared with the tracker/purlin acceleration target.' },
      { label: 'Module crew Phase 1', actual: 0, committed: 22, target: 22, targetLabel: '22 by Jul 7', note: 'Workforce is expected to land June 29 with about 22 workers for the rolling start.' },
      { label: 'Module full-field crew', actual: 0, committed: 22, target: 40, targetLabel: '40 by Jul 13+', note: 'Phase 2 reinforcement adds 18 workers to reach the full-field module gate.' },
      { label: 'Greensol site team', actual: 24, target: 24, targetLabel: '15 staff + 9 labor', note: 'User-provided fixed Greensol site staffing basis.' }
    ],
    mechanicalManpowerLoad: [
      { week: 'Jun 22', pile: 9, tracker: 16, module: 0, management: 13, total: 38 },
      { week: 'Jun 29', pile: 10, tracker: 28, module: 0, management: 13, total: 51 },
      { week: 'Jul 6', pile: 10, tracker: 35, module: 0, management: 13, total: 58 },
      { week: 'Jul 13', pile: 10, tracker: 42, module: 22, management: 13, total: 87 },
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
      { title: 'Pile delivery buffer improved, but July 7 loads still need POD confirmation', level: 'Watch', owner: 'GameChange / Shreeya Devkota / Karina Mucino / Manuel Ramirez / Audelio Zuniga', note: 'The Jul 8 evening workbook shows 6,235 piles available above installed production, about 11.1 days at the 560-pile/day acceleration capacity. Shreeya confirmed 11 named loads for July 7; treat them as scheduled until POD/site receipt, material type, and actual quantities are confirmed.' },
      { title: 'Jul 9 is the proof day: 10-rig fleet must hold ~711 piles/day with ZERO margin', level: 'Critical', owner: 'Audelio Zuniga / United / Latnovva / Manuel Ramirez', note: 'Jul 8 delivered 640 piles — first day above the 560 capacity line (United 490 at 70/rig-day; Latnovva 150 with 2 rigs at 75/rig-day; both near the 80/day criterion). PROOF-DAY RESULT (Jul 9): the third Latnovva rig DID NOT start — still 2 rigs, 150 piles (75/rig-day). Per the same-day rule this is now an ESCALATION: demand the rig commissioning date in writing and add Saturday work to recover the lost margin. The 9-rig fleet at ~72/rig-day (~650/day) cannot hold Jul 28 without the 10th rig or overtime.' },
      { title: 'QA release backlog controls module workfront', level: 'Critical', owner: 'Daniel Morilla (QA/QC) / ECCS / Manuel Ramirez', note: '300 done tracker rows are awaiting Quality approval on top of the 235 already released. Clearing this QA backlog immediately unlocks module workfront — at the current 156-modules/day output, released rows are not yet the binding constraint, but they will be as the module crew ramps.' },
      { title: 'SET foundation, delivery dates, and equipment commitments all need closure', level: 'Critical', owner: 'Axel Cano / AB Power / Karina Mucino / Joshua Spalding / Project Management', note: 'July 6 SET tracker shows 8.7% overall progress. The control building was delivered and set on its foundation the night of July 7 — the July 10 gate is met. Transformer and structural steel remain in fabrication, and several electrical items show committed dates after the July 10 required-on-site gate.' },
      { title: 'ITS plowing must sustain weekly progress', level: 'Watch', owner: 'ITS / Audelio Zuniga / Angel Urbina', note: 'July 6 ITS workbook confirms 16 of 46 plow segments complete and 43,128 ft plowed, but the July 6 daily log shows 0 ft for both plowing and boring. Keep daily LF and segment reporting active while closing the remaining 10 bores.' },
      { title: 'Area G civil release must convert into workfront access', level: 'Critical', owner: 'Rosario Ruiz / Audelio Zuniga / Lounsbury', note: 'Rosario Ruiz Week 26 email says Area G is released for pile driving and material distribution. Civil cut/fill in Area G starts after basin completion; this needs to convert quickly into mechanical access.' }
    ]
  };

// ---- Jul 7 field-snapshot render patch (runs after main dashboard script) ----
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
        if (ctxP) ctxP.textContent = 'Total headcount by crew from today\u2019s on-site tracking board. GreenSol management and self-perform labor are combined into a single EPC-team bar; subcontractor crews are shown individually, largest to smallest. Machine and equipment detail is in the table below.';
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
      var catColors = { epc: '#0c5f43', pile: '#2769a8', module: '#168a5b', electrical: '#8a4dbf', civil: '#b96f18', set: '#b53030', support: '#9aa39d' };
      var catLabels = { epc: 'GreenSol EPC team', pile: 'Pile / tracker structural', module: 'Module installation', electrical: 'Electrical / SET', civil: 'Civil / earthworks', set: 'Substation crane', support: 'Support / no crew' };
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
      var legendCats = ['epc', 'pile', 'module', 'electrical', 'civil', 'set', 'support'];
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
