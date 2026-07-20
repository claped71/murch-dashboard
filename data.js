'use strict';
// Murch dashboard data - update THIS file for daily changes
// CACHE BUSTER: Jul 20, 2026 (PM) — Saturday Jul 18 production added: +608 piles (United 415 Zone F + Latnovva 193 Zone B); trackers & modules idle Saturday. Executed piles 24,598 (78.5%), required 965/day to Jul 28 (unrecoverable, slips ~early Aug). Trackers 708 hold (Daniel Jul 20: Zones C1 & C2 released today with Client — first since Jul 10); modules 14,620 hold. ITS Bore-10 frac-outs, DC bore restarts Jul 21.
// Note: assetVersion, assetBase, asset(), and assetFallback() are defined in index.html's inline script
// Duplicate declarations have been removed to fix SyntaxError: Identifier 'assetVersion' has already been declared
window.MURCH_DATA = {
    control: {
      asOf: 'Jul 18, 2026',
      piles:    { installed: 24598, total: 31352, gate: '2026-07-28', gateLabel: 'Jul 28', required: 965, capacity: null, name: 'Piles', unit: 'piles/day' },
      trackers: { installed: 708, released: 235, total: 2486, gate: '2026-08-30', gateLabel: 'Aug 30', required: 49, capacity: 48, name: 'Trackers incl. purlins', unit: 'rows/day' },
      modules:  { installed: 14620, total: 171470, gate: '2026-09-06', gateLabel: 'Sep 6', required: 3735, capacity: null, name: 'Modules', unit: 'mod/day' },
      electrical: { installed: 0, total: 274720, gate: '2026-09-18', gateLabel: 'Sep 18', required: 5283, capacity: null, name: 'LV Electrical', unit: 'lf/day' },
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
      { day: 'Jul 16', total: 198, src: 'site board' }
    ],
    manpowerMixToday: { day: 'Jul 16, 2026', total: 198, mix: [
      { trade: 'Trackers & Piling', people: 104, color: '#0c5f43' },
      { trade: 'Module Installation', people: 45, color: '#168a5b' },
      { trade: 'Electrical & SET', people: 18, color: '#2769a8' },
      { trade: 'Civil & Fencing', people: 12, color: '#b96f18' },
      { trade: 'GreenSol EPC', people: 19, color: '#66716d' }
    ] },
    contractorScore: [
      { date: 'Jul 18 Sat', contractor: 'United', trade: 'Piles', output: 415, resource: '24 people · 6 rigs, 2 damaged (4 running) — zone F', perUnit: 104, criterion: 80, critLabel: '80 piles/rig-day — 104/rig on 4 running rigs; best per-rig day in a week, but the only pile crew out Saturday and no trackers/modules' },
      { date: 'Jul 18 Sat', contractor: 'LATNOVVA', trade: 'Piles', output: 193, resource: '2 rigs — zone B (crew started late)', perUnit: 97, criterion: 80, critLabel: '80 piles/rig-day — 97/rig on 2 rigs Saturday' },
      { date: 'Jul 17 Fri', contractor: 'United', trade: 'Piles', output: 368, resource: '24 people · 6 rigs, 2 damaged (4 running) — zone F', perUnit: 92, criterion: 80, critLabel: '80 piles/rig-day — 92/rig on 4 running rigs' },
      { date: 'Jul 17 Fri', contractor: 'ECCS', trade: 'Trackers', output: 25, resource: '60 people · zone C + 19 piles zone E · pulled off ~3pm (Canadian wildfire smoke)', perUnit: 25, criterion: 49, critLabel: '49 rows/day — short day, crew withdrawn for Canadian wildfire smoke (statewide AQ alert)' },
      { date: 'Jul 17 Fri', contractor: 'Brumont', trade: 'Modules', output: 1290, resource: '15 people · zone A', perUnit: 1290, criterion: 2000, critLabel: '2,000 mod/day target — strong recovery day (1,290)' },
      { date: 'Jul 17 Fri', contractor: 'Workforce', trade: 'Modules', output: 936, resource: '28 people · zone A', perUnit: 936, criterion: 2000, critLabel: '2,000 mod/day target — combined crews 2,226 modules on Jul 17' },
      { date: 'Jul 17 Fri', contractor: 'LATNOVVA', trade: 'Piles', output: 85, resource: '13 people · 2 rigs — zone B', perUnit: 43, criterion: 80, critLabel: '80 piles/rig-day — 43/rig on 2 rigs' }
    ],
    scope: [
      { title: 'EPC Management', metric: 'Turnkey', note: 'Project management, safety, QC, contractor deliverables, owner reporting, permitting support, and trade coordination through completion.' },
      { title: 'Civil and Environmental', metric: 'G released', note: 'Rosario Week 26 email says Area G is released for pile driving and material distribution; Area G cut/fill starts after basin completion.' },
      { title: 'Mechanical BOS', metric: '31,352 piles · 2,486 trackers', note: 'Pile driving (24,598 executed, 78.5%), GameChange SAT tracker assembly incl. purlins (708 done, 28.5% — 235 QA-released, 473 pending Quality), and module placement (14,620 executed, 8.5%). D&F pre-drilling complete (7,694/7,694).' },
      { title: 'Electrical BOS', metric: 'ITS plowing on site', note: 'MV collection, HDD, plowing, grounding, DC string and combiner wiring, LV/AC works, inverter installation, SCADA, and testing. Joshua Spalding reported the ITS plowing machine arrived on June 19.' },
      { title: 'Procurement', metric: '171,470 modules', note: 'Panels, racking, purlins, actuators, controllers, cables, inverter stations, combiner boxes, and SET equipment.' },
      { title: 'Commissioning', metric: 'PIS Oct 16', note: 'Cold commissioning, energization, tracker testing, inverter start-up, PR test path, punch list, COD, and substantial completion.' }
    ],
    photos: [
      { src: 'https://claped71.github.io/murch-dashboard/assets/recent/thumb-recent-38.jpg?v=20260718-jb-chemik', fallbackSrc: 'https://claped71.github.io/murch-dashboard/assets/recent/recent-38.jpg', date: 'July 18, 2026', title: '72 LV junction boxes received — Chemik, Zone D', note: 'Saturday Jul 18, 09:54 (geotagged Lawrence, MI): first Chemik LV hardware on site — 72 DC junction/disconnect boxes (DB) received and staged in Zone D. Tracked as received material only; the 419-box mounting scope stays at 0 installed until the boxes are set. Leading edge of the material-gated LV pull that kicks off Jul 21.' },
      { src: 'https://claped71.github.io/murch-dashboard/assets/recent/thumb-recent-34.jpg?v=20260714-jul14-photos', fallbackSrc: 'https://claped71.github.io/murch-dashboard/assets/recent/recent-34.jpg', date: 'July 14, 2026', title: 'Module front vs. bare trackers — Zone A into Zone C', note: 'Jul 14 midday: installed module rows on the far block with erected trackers still bare in the foreground — the module crews are chasing the QA-released tracker workfront after Monday\u2019s record 2,922 modules.' },
      { src: 'https://claped71.github.io/murch-dashboard/assets/recent/thumb-recent-35.jpg?v=20260714-jul14-photos', fallbackSrc: 'https://claped71.github.io/murch-dashboard/assets/recent/recent-35.jpg', date: 'July 14, 2026', title: 'Tracker crew on the row — Zone C', note: 'Crew working a tracker row in Zone C, the controlling front. 708 rows done of 2,486 (235 QA-released); ECCS restarted Monday with 29 rows and must at least double that rate.' },
      { src: 'https://claped71.github.io/murch-dashboard/assets/recent/thumb-recent-36.jpg?v=20260714-jul14-photos', fallbackSrc: 'https://claped71.github.io/murch-dashboard/assets/recent/recent-36.jpg', date: 'July 14, 2026', title: 'Inverter/PCS station set on foundation', note: 'Prefabricated station landed on its foundation inside the fenced yard, with formwork and rebar set for the adjacent pad — 190 of 230 inverter piles complete (82.6%) ahead of the end-July inverter arrivals.' },
      { src: 'https://claped71.github.io/murch-dashboard/assets/recent/thumb-recent-37.jpg?v=20260714-jul14-photos', fallbackSrc: 'https://claped71.github.io/murch-dashboard/assets/recent/recent-37.jpg', date: 'July 14, 2026', title: 'Underground electrical trench alongside erected trackers', note: 'Open trench with conduit installed beside the access road and erected tracker rows, feeding the LV/DC scope that kicked off Jul 14.' },
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
      { area: '<u>Tracker assembly and QA release — Zones C1/C2 / A / F</u><span style="background:#b53030;color:#fff;padding:1px 6px;border-radius:3px;font-size:10px;font-weight:700;margin-left:6px">CRITICAL</span>',
        target: 'THE controlling front for the week — it sets the ceiling on the module crews. 708 rows done (235 QA-released, 473 pending Quality) of 2,486 (28.5%). BREAKTHROUGH: Daniel Morilla confirmed Monday Jul 20 that Zones C1 and C2 release for trackers today with the Client — the first QA releases since Jul 10. Convert the 473-row pending backlog into released workfront this week and keep assembling; the QA-released buffer ahead of Brumont/Workforce is only ~1.3 days, so releases, not assembly, govern the module ramp.',
        minimum: '>= 49 completed rows/day to hold Aug 30 (1,778 rows over 36 working days, Mon-Sat). ECCS has run 25-49 lately — hold and beat it. QA is the real floor: clear the 473-row pending backlog this week now that C1/C2 are unlocking.',
        gate: 'QA turnover of finished rows (now unblocking with C1/C2), not the assembly rate. Carry-over: recover the Area F quality documents for zones released internally without the subcontractor paperwork. Field cumulative (708) still reconciling vs the workbook TRACKER table (583).',
        owners: 'ECCS | Daniel Morilla (QA/QC) | Audelio Zuniga | Manuel Ramirez' },
      { area: '<u>Pile production — rig availability, Zones B / F, open D / G</u><span style="background:#b53030;color:#fff;padding:1px 6px;border-radius:3px;font-size:10px;font-weight:700;margin-left:6px">CRITICAL</span>',
        target: '6,754 piles remain to the Jul 28 gate (24,598 of 31,352 executed, 78.5%). Saturday Jul 18 ran 608 — United 415 (Zone F) + Latnovva 193 (Zone B) — the best per-rig day in a week (104 and 97 per rig), but the Jul 28 gate is unrecoverable at ~560/day fleet capacity and slips to ~early August (~Aug 4-5). Close Zone B (381 left) and drive Zone F (1,154 left); open the released Zone D/G fronts as rigs free up.',
        minimum: 'Holding Jul 28 would need ~965 piles/day (6,754 over 7 working days) — roughly 2x capacity. Realistic floor: get every rig running and sustain the fleet maximum daily (~600-700), targeting ~4,000+ piles this week, then re-baseline the pile finish to early August. Saturdays must be worked — Jul 18 trackers and modules were idle.',
        gate: 'Rig repairs are the binding constraint — United on 4 of 6 (2 damaged), Latnovva on 2. Material is not a restriction: 28,343 piles delivered, a 3,745-unit buffer.',
        owners: 'United / LATNOVVA | Audelio Zuniga | Manuel Ramirez | Joshua Spalding' },
      { area: '<u>Module installation ramp — Zones A / C</u><span style="background:#b53030;color:#fff;padding:1px 6px;border-radius:3px;font-size:10px;font-weight:700;margin-left:6px">CRITICAL</span>',
        target: '14,620 of 171,470 executed (8.5%). No module work Saturday Jul 18 (crews off); last run Jul 17: 2,226 (Brumont 1,290 + Workforce 936), record 2,922 on Jul 13. Ramp both crews as the C1/C2 rows release this week.',
        minimum: '>= 3,735 modules/day required to hold the Sep 6 finish (156,850 over 42 working days), ramping toward the ~5,500/day full-field rate — but capped near ~3,000/day until the QA-released buffer widens past ~1.3 days. Work Saturdays.',
        gate: 'QA-released tracker rows — the C1/C2 release today should widen the ~1.3-day buffer; keep crews only on fully released rows. Golden Row slot-tolerance QC control stays in force.',
        owners: 'Workforce / Brumont | Audelio Zuniga | Daniel Morilla (QA/QC) | Manuel Ramirez' },
      { area: '<u>LV electrical installation — Chemik air-freight gated</u><span style="background:#b53030;color:#fff;padding:1px 6px;border-radius:3px;font-size:10px;font-weight:700;margin-left:6px">CRITICAL</span>',
        target: 'Cable-pull kicked off Tuesday Jul 21 on the first Chemik air deliveries. Total LV pull 274,720 lf (Homerun 229,435 + Chemik trunk 40,313 + harness 4,972), all at 0%. First Chemik hardware landed Jul 18: 72 DC junction/disconnect boxes staged in Zone D (0 of 419 installed). ECCS awarded 11 of 23 inverters; the other 12 pending (decision Wed Jul 22). Start the Chemik trunk on arriving air shipments and stand up the crew.',
        minimum: 'Start Chemik trunk (>= 775 lf/day) on air shipments PL_260601/260709 (ETA Jul 23); ramp homerun (>= ~4,400 lf/day) as cable lands and module blocks release. Finishing the full pull by the Sep 18 DC/LV close needs ~5,300 lf/day.',
        gate: 'ALL remaining Chemik packages must be AIR-FREIGHTED (project decision Jul 17) and on site before end of August — sea transit cannot meet the milestones. Then released module blocks + ECCS / East Carolina crew size.',
        owners: 'ECCS (11 inv) | East Carolina | Greensol Self-Perform | Luis Romero Montero | Joshua Spalding | Clara Lopez' },
      { area: '<u>GameChange tracker-material deliveries</u>',
        target: 'Final tracker-post containers (port arrival pushed to 7/14) — post deliveries complete this week (week of 7/20); node controllers arrived. Track the slip and confirm POD/site receipt for each load.',
        minimum: 'Receive up to 14 pile loads/day plus 8 racking loads/day if appointments and offloading hold; log receipts against the delivery control and flag any post slip to the tracker crews.',
        gate: 'Purlin and pile stock are comfortable; the tracker-post arrival is the item to watch against the Zone C/F assembly front. Loads count as scheduled until POD/site receipt.',
        owners: 'GameChange (Shreeya Devkota) | Manuel Ramirez | Karina Mucino' },
      { area: '<u>SET, inverter foundations and inverter arrival</u>',
        target: 'SET at 11.8% overall (civil 44.9%, structural 5.7%). Close the last 4 inverter pile foundations — D10, E12, F16, G20 (190 of 230 piles, 82.6%) — before the end-July arrival of the 23 inverter units. AB Power has presented no work or material-delivery plan; Greensol is pulling partial scope to Michael Power and self-procuring material.',
        minimum: 'All 23 inverter foundations released before first delivery; hold the SET civil rate that lifted overall progress from 8.7% to 11.8% in a week.',
        gate: 'Transformer and structural steel remain in fabrication — the controlling items for energization. AB Power work-plan and material-delivery gaps must close.',
        owners: 'AB Power / Michael Power / SET team | Axel Cano | Joshua Spalding | Karina Mucino' },
      { area: '<u>Electrical MV plowing and HDD closeout</u>',
        target: 'ITS is ahead of the electrical sequence: 36 of 46 plow segments complete (120,738 ft) and 16 of 20 bores closed (5,026 ft). Bore 10 had repeated frac-outs (Jul 16-17); the plan changed from 30 ft to 40 ft deep and DC bore work restarts Tuesday Jul 21 on the new drill. Close the last 4 bores and the remaining 10 segments.',
        minimum: '>= 1 plow segment/day and >= 1 completed bore/day with measured-footage reporting once the new drill is running (boring logged 0 ft Jul 13-20 through the frac-out — restore the cadence).',
        gate: 'Crossing approvals, drill/equipment availability and access continuity. EGLE denied swapping the last bores for plowing, so the 4 bores continue as bores.',
        owners: 'ITS | Angel Urbina | Joshua Spalding' },
      { area: '<u>Civil Area G release and internal roads</u>',
        target: 'Finish Area G basins, then start Area G cut/fill — Area G is released for pile driving and material distribution and is the next pile workfront (3,356 piles, 0 installed). Perimeter fence at 95.6% (only Zone G and gates remain); internal roads at 65.9%.',
        minimum: 'Daily confirmed grading production in Area G after basin closeout; keep roads easing as the logistics constraint.',
        gate: 'Basin completion controls Area G cut/fill; civil access, gates and drainage must stay ahead of the mechanical fronts.',
        owners: 'Lounsbury / Hurricane / Topland | Rosario Ruiz | Audelio Zuniga' }
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
      { activity: 'PS foundations', company: 'United', done: 82.6, remaining: 17.4, status: 'Active', note: 'Jul 17 workbook: 190 of 230 inverter piles complete (82.6%). Pending stations: D10, E12, F16, G20. Work planned through August 10.' },
      { activity: 'Foundation SET', company: 'AB Power', done: 11.8, remaining: 88.2, status: 'Active', note: 'Jul 13 SET workbook: overall substation progress 11.8% (up from 8.7% on Jul 6); civil 44.9%, structural 5.7%. Containment berm and transformer foundation complete Jul 12. AB Power SET scope at risk — no work or delivery plan (Jul 17 review); partial scope moving to Michael Power, portico steel arriving Jul 16-17.' }
    ],
    contractors: [
      { name: 'LATNOVVA / assigned areas', scope: 15904, installed: 13979, remaining: 1925, done: 87.9, zones: 'Zones A, B, C, D, EW + shared Area E control (Zone G removed Jul 17)', status: 'Watch', note: "Area-based control allocation only; it is not a new manpower or subcontractor headcount report." },
      { name: 'ECCS / Area E control', scope: 4434, installed: 4115, remaining: 319, done: 92.8, zones: 'Area E shared tracker workfront', status: 'On Track', note: "Area-based control allocation used only so dashboard totals reconcile with Audelio's July 6 official installed-production basis." },
      { name: 'United', scope: 11014, installed: 6504, remaining: 4510, done: 59.1, zones: 'Zones F + G', status: 'Active', note: 'Executed: 6,504 piles in Zone F (84.9% of F) — Jul 18 Sat: 415, United ran 4 of 6 rigs (2 damaged). Zone G (3,356 piles) newly transferred from Latnovva Jul 17, 0 started — combined F+G 59.1%. United now holds full mechanical (piles + trackers + modules) in F & G.' },
      { name: 'Project Total', scope: 31352, installed: 24598, remaining: 6754, done: 78.5, zones: "All zones | Construction Manager report", status: 'Critical', note: "Total executed: 24,598 — official block-map 22,900 plus 1,698 field logs not yet mapped (mostly Zone B Latnovva). Jul 18 Sat: 608 (United 415 F + Latnovva 193 B); trackers & modules idle Saturday." }
    ],
    zones: [
      { zone: 'Zone A', contractor: 'Latnovva', scope: 3834, installed: 3834, remaining: 0, done: 100.0, status: 'Complete', note: 'Jul 8 PROGRESS table: Zone A pile installation complete.' },
      { zone: 'Zone C', contractor: 'Latnovva', scope: 2946, installed: 2946, remaining: 0, done: 100.0, status: 'Complete', note: 'July 6 Const. Management workbook; zone complete.' },
      { zone: 'Zone E', contractor: 'ECCS / Latnovva', scope: 8456, installed: 8061, remaining: 395, done: 95.3, status: 'Active', note: 'Jul 17 workbook + Jul 16 field: 8,061 installed (+19 ECCS Fri).' },
      { zone: 'Zone EW', contractor: 'Latnovva', scope: 846, installed: 846, remaining: 0, done: 100.0, status: 'Complete', note: 'Jul 8 workbook: Zone EW complete at 846 of 846.' },
      { zone: 'Zone B', contractor: 'Latnovva', scope: 2788, installed: 2407, remaining: 381, done: 86.3, status: 'Active', note: 'Executed: 2,407 (86.3%) — through Jul 18 Sat (+193 Sat). Block-map still shows 1,457 here; Latnovva self-report leads. Latnovva ran 2 rigs Jul 16.' },
      { zone: 'Zone D', contractor: 'TBD / Latnovva', scope: 1468, installed: 0, remaining: 1468, done: 0, status: 'Material Hold', note: '2nd-50% work; no start before June 22 material arrivals.' },
      { zone: 'Zone F', contractor: 'United', scope: 7658, installed: 6504, remaining: 1154, done: 84.9, status: 'Active', note: 'Executed: 6,504 (84.9%) — through Jul 18 Sat (+415 Sat). United ran 4 of 6 rigs Jul 16 (2 damaged) — rig repairs still the lever.' },
      { zone: 'Zone G', contractor: 'United', scope: 3356, installed: 0, remaining: 3356, done: 0, status: 'Active', note: 'REASSIGNED to United (Jul 17 scope change: United takes full mechanical — piles, trackers, modules — in Zones F & G; Zone G piles removed from Latnovva). 0 started. Area G released for pile driving; civil cut/fill starts after basin completion.' }
    ],
    production: [
      { name: 'Project pile installation', remaining: '6,754 piles', target: '~965 piles/day required for Jul 28 (560/day stated capacity)', latest: 'Jul 18 (Sat): 608 piles — United 415 (Zone F) + Latnovva 193 (Zone B); trackers & modules idle Saturday', cumulative: '24,598 / 31,352 executed (78.5%) — 22,900 official block-map + 1,698 field logs not yet mapped (Zone B Latnovva + Jul 16-18 production)', status: 'Critical', note: 'Executed 24,598 of 31,352 (78.5%). The official block-map roll-up is 22,900; field daily logs add 1,698 piles not yet mapped (mostly Zone B, where Latnovva self-reports lead the block map). Jul 18 (Sat) produced 608 (United 415 Zone F, Latnovva 193 Zone B) — below the 965/day required over 7 working days to Jul 28. United ran 4 of 6 rigs, Latnovva 2; rig repairs remain the single biggest lever. ECCS pulled off site ~3pm Jul 17 due to Canadian (Ontario) wildfire smoke — a statewide Michigan air-quality alert (EGLE) has been in effect since Jul 14; masks distributed and force majeure under evaluation.' },
      { name: 'Pile delivery / site stock', remaining: '3,009 piles undelivered', target: 'Receipts must exceed the 834 piles/day install burn', latest: 'Jul 15 workbook: 28,343 piles delivered (90.4% of 31,352)', cumulative: '28,343 delivered; 3,745 available above the 24,598 executed', status: 'On Track', note: 'Available stock equals delivered piles less executed piles — 3,745 units, about 5.5 days at the 965/day required rate. Delivery is no longer the pile-programme constraint.' },
      { name: 'Drill and backfill', remaining: '0 pre-drills', target: 'Scope closed — no gate to piling', latest: 'All units closed in the official workbook', cumulative: '7,694 / 7,694 complete (100.0%)', status: 'Complete', note: 'July 6 Construction Management progress source shows drill-and-backfill complete.' },
      { name: 'Civil grading / cut-fill', remaining: '39% of scope', target: '— No approved daily target in source', latest: 'Week 26 email: Area G cut/fill starts after basins finish', cumulative: '61% complete through latest quantified civil baseline', status: 'On Track', note: 'Current percentage follows Rosario Ruiz civil baseline; Week 26 adds Area G release for pile driving and material distribution.' },
      { name: 'Internal roads', remaining: '34.1% of scope', target: '— No approved daily target in source', latest: 'Rosario Jul 10 quantity sheet (lf-weighted)', cumulative: '65.9% complete — matches Civil Progress Control', status: 'Active', note: 'Current percentage follows Rosario Ruiz civil baseline for Areas A-B-C-E; roads continue to control logistics access.' },
      { name: 'Tracker completion incl. purlins', remaining: '1,778 to build · 2,251 to QA-release', target: '49 completed rows/day now required for Aug 30', latest: 'Jul 18 (Sat): no tracker work Saturday; last run Jul 17: 25 rows in Zone C', note: 'Purlin installation is integrated into this tracker control metric: a row counts once its purlins are installed. Total done is 708 rows — 235 released by Quality and 473 pending QA approval, still first QA release Jul 20 (Daniel: Zones C1 & C2 released today with Client). RELEASED-TRACKER BUFFER ahead of module installation is only ~68 rows / ~4,700 modules ≈ 1.3 days at the required module rate — razor-thin. NOTE: cumulative under reconciliation — the workbook still shows 213 complete / 367 installed; Maurin walked all rows Jul 14 and Daniel is recounting manually.', cumulative: '708 done (28.5%): 235 QA-released + 473 pending Quality · 715 rows pre-assembled / 2,486 total', status: 'Critical' },
      { name: 'ITS HDD boring', remaining: '4 of 20 bores', target: 'Minimum 1 completed bore/day', latest: 'Jul 20 ITS export: 0 ft bored today/week — 16 / 20 complete (80%); Bore 10 frac-outs (Jul 16-17), DC bore restarts Tue Jul 21', cumulative: '16 / 20 bores complete (80%); 5,026 ft installed', status: 'Watch', note: 'Jul 15 ITS tracker: 16 done / 0 in progress / 4 pending. No boring progress Jul 13-15; the last 4 bores (HB-01, HB-10, HB-11, HB-12) remain. Jul 17 review: EGLE will not accept swapping the remaining bores for plowing; the last 4 continue, extended ~100 ft each (2x100 ft) to clear the wetland.' },
      { name: 'ITS MV plowing', remaining: '10 of 46 segments', target: 'Minimum 1 completed segment/day', latest: 'Jul 20 ITS export: 0 ft plowed today/week — 36 / 46 complete (78.3%)', cumulative: '36 / 46 segments complete; 120,738 ft installed', status: 'On Track', note: 'Jul 15 ITS tracker: 36 done / 0 in progress / 10 pending. Line status: MV11A 7/10, MV11B 10/12, MV12A 10/13, MV12B 9/11. Plowing comfortably leads the electrical sequence.' },
      { name: 'SET construction', remaining: '88.2% of overall scope', target: '— No approved daily progress target in source', latest: 'Jul 12 (Sun): transformer-foundation containment berm complete; all 18 available inverter stations have base plates welded', cumulative: '11.8% overall (civil 44.9%, structural 5.7%) per the Jul 13 SET tracker', status: 'Critical', note: 'Overall SET progress up from 8.7% (Jul 6) to 11.8% (Jul 13), driven by civil. Transformer and structural steel remain in fabrication — the controlling items for energization. Jul 17 procurement review: AB Power has presented no SET work plan and no material-delivery plan; Greensol is pulling partial scope to a third party (Michael Power) and self-buying missing materials (BUS-connectors urgent). Portico steel structure arriving Jul 16-17; oil-pit grating (tramex) procured separately to close the SET payment milestone and avoid Heelstone objections.' },
      { name: 'Panel delivery', remaining: '14,230 modules to deliver', target: '— No approved daily delivery target in source', latest: '— Latest daily receipt not reported', cumulative: '157,240 / 171,470 delivered (91.7%)', status: 'On Track', note: 'Jul 17 Construction Manager workbook cumulative delivery quantity; 142,620 modules on site above the 14,620 executed.' },
      { name: 'Module installation', remaining: '156,850 modules', target: '3,735 modules/day required for Sep 6 (5,531/day full-field capacity)', latest: 'Jul 18 (Sat): no module work; last run Jul 17: 2,226 (Brumont 1,290 + Workforce 936)', cumulative: '14,620 modules field-reported, pending official workbook incorporation', status: 'Critical', note: 'Jul 17: Brumont 1,290 + Workforce 936 (record 2,922 on Jul 13, 2,335 on Jul 14). ~3,735/day now required. The binding constraint is QA-released tracker rows — the released buffer ahead of the module crews is only ~1.3 days. Modules must finish one week after tracker completion: Aug 30 trackers -> Sep 6 module finish.' }
    ],
    dailyProductionHistory: [
      { task: 'Pile installation', period: 'Jun 18-Jul 18 measured days', minimum: '965 piles/day (required for Jul 28)', above: 0, below: 23, latest: 'Jul 18 (Sat): 608 piles — United 415 (Zone F, 4 of 6 rigs) + Latnovva 193 (Zone B, 2 rigs); trackers & modules idle Saturday', note: 'Jul 18 (Sat) produced 608 piles (United 415 Zone F, Latnovva 193 Zone B) — still short of the 965/day single goal. (560/day is nominal crew capacity, not a target.) Executed 24,598 = official block-map 22,900 + 1,698 field logs not yet mapped (Zone B Latnovva self-report + Jul 18 Saturday).', daily: [{ day: 'Jun 18', value: 20, target: 965, unit: 'piles' }, { day: 'Jun 19', value: 79, target: 965, unit: 'piles' }, { day: 'Jun 22', value: 251, target: 965, unit: 'piles' }, { day: 'Jun 23', value: 101, target: 965, unit: 'piles' }, { day: 'Jun 25', value: 370, target: 965, unit: 'piles' }, { day: 'Jun 26', value: 340, target: 965, unit: 'piles' }, { day: 'Jun 29', value: 261, target: 965, unit: 'piles' }, { day: 'Jun 30', value: 234, target: 965, unit: 'piles' }, { day: 'Jul 1', value: 252, target: 965, unit: 'piles' }, { day: 'Jul 2', value: 274, target: 965, unit: 'piles' }, { day: 'Jul 3', value: 134, target: 965, unit: 'piles' }, { day: 'Jul 6', value: 307, target: 965, unit: 'piles' }, { day: 'Jul 7', value: 399, target: 965, unit: 'piles' }, { day: 'Jul 8', value: 646, target: 965, unit: 'piles' }, { day: 'Jul 9', value: 669, target: 965, unit: 'piles' }, { day: 'Jul 10', value: 680, target: 965, unit: 'piles' }, { day: 'Jul 11', value: 680, target: 965, unit: 'piles' }, { day: 'Jul 13', value: 608, target: 965, unit: 'piles' }, { day: 'Jul 14', value: 695, target: 965, unit: 'piles' }, { day: 'Jul 15', value: 481, target: 965, unit: 'piles' }, { day: 'Jul 16', value: 504, target: 965, unit: 'piles' }, { day: 'Jul 17', value: 472, target: 965, unit: 'piles' }, { day: 'Jul 18', value: 608, target: 965, unit: 'piles' }] },
      { task: 'Tracker production control (incl. purlin completion)', period: 'Jun 17-Jul 17', minimum: '49 rows/day (required for Aug 30)', above: 4, below: 19, latest: 'Jul 18 (Sat): no tracker work — crews off Saturday; 708 rows hold (235 released / 473 pending)', note: 'Purlin installation is integrated into this tracker control metric: a row counts once its purlins are installed. Total done is 708 rows — 235 released by Quality and 473 pending QA approval, still first QA release Jul 20 (Daniel: Zones C1 & C2 released today with Client). The released-tracker buffer ahead of modules is only ~1.3 days. Cumulative is under reconciliation — the workbook TRACKER INSTALLATION table shows 583; Maurin walked all rows Jul 14 and Daniel is recounting.', daily: [{ day: 'Jun 17', value: 15, target: 49, unit: 'units' }, { day: 'Jun 18', value: 35, target: 49, unit: 'units' }, { day: 'Jun 19', value: 26, target: 49, unit: 'units' }, { day: 'Jun 20', value: 31, target: 49, unit: 'units' }, { day: 'Jun 21', value: 0, target: 49, unit: 'units' }, { day: 'Jun 22', value: 48, target: 49, unit: 'units' }, { day: 'Jun 23', value: 31, target: 49, unit: 'units' }, { day: 'Jun 24', value: 0, target: 49, unit: 'units' }, { day: 'Jun 25', value: 57, target: 49, unit: 'units' }, { day: 'Jun 26', value: 26, target: 49, unit: 'units' }, { day: 'Jun 29', value: 29, target: 49, unit: 'units' }, { day: 'Jun 30', value: 30, target: 49, unit: 'units' }, { day: 'Jul 1', value: 51, target: 49, unit: 'units' }, { day: 'Jul 7', value: 29, target: 49, unit: 'units' }, { day: 'Jul 8', value: 0, target: 49, unit: 'units' }, { day: 'Jul 9', value: 0, target: 49, unit: 'units' }, { day: 'Jul 10', value: 0, target: 49, unit: 'units' }, { day: 'Jul 13', value: 29, target: 49, unit: 'units' }, { day: 'Jul 14', value: 49, target: 49, unit: 'units' }, { day: 'Jul 15', value: 35, target: 49, unit: 'units' }, { day: 'Jul 16', value: 35, target: 49, unit: 'units' }, { day: 'Jul 17', value: 25, target: 49, unit: 'units' }, { day: 'Jul 18', value: 0, target: 49, unit: 'units' }] },
      { task: 'Module installation', period: 'Jul 3-Jul 17 field start', minimum: '3,735 modules/day (required for Sep 6)', above: 0, below: 13, latest: 'Jul 18 (Sat): no module work — crews off Saturday; 14,620 hold (last run Jul 17: 2,226)', note: 'Jul 17: Brumont 1,290 + Workforce 936. Record 2,922 on Jul 13. Still short of the single goal, 3,735/day required to hold Sep 6. (5,531/day is the full-field capacity, not a target.) Released tracker rows are the constraint — the buffer ahead of the crews is only ~1.3 days.', daily: [{ day: 'Jul 3', value: 234, target: 3735, unit: 'modules' }, { day: 'Jul 6', value: 780, target: 3735, unit: 'modules' }, { day: 'Jul 7', value: 156, target: 3735, unit: 'modules' }, { day: 'Jul 8', value: 936, target: 3735, unit: 'modules' }, { day: 'Jul 9', value: 1308, target: 3735, unit: 'modules' }, { day: 'Jul 10', value: 1802, target: 3735, unit: 'modules' }, { day: 'Jul 11', value: 517, target: 3735, unit: 'modules' }, { day: 'Jul 13', value: 2922, target: 3735, unit: 'modules' }, { day: 'Jul 14', value: 2335, target: 3735, unit: 'modules' }, { day: 'Jul 15', value: 780, target: 3735, unit: 'modules' }, { day: 'Jul 16', value: 858, target: 3735, unit: 'modules' }, { day: 'Jul 17', value: 2226, target: 3735, unit: 'modules' }, { day: 'Jul 18', value: 0, target: 3735, unit: 'modules' }] },
      { task: 'ITS MV plowing', period: 'Jun 17-Jul 17', minimum: '1 completed segment/day', above: 11, below: 14, latest: 'Jul 20 export: 0 new segments — 36 of 46 (frac-outs at Bore 10; DC bore restarts Jul 21)', note: 'Jul 15 ITS tracker: 36 of 46 segments complete (78.3%), 0 in progress. 120,738 ft installed. MV11A 7/10, MV11B 10/12, MV12A 10/13, MV12B 9/11.', daily: [{ day: 'Jun 17', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 18', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 19', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 20', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 21', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 22', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 23', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 24', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 25', value: 3, target: 1, unit: 'seg' }, { day: 'Jun 26', value: 4, target: 1, unit: 'seg' }, { day: 'Jun 27', value: 1, target: 1, unit: 'seg' }, { day: 'Jun 28', value: 0, target: 1, unit: 'seg' }, { day: 'Jun 29', value: 2, target: 1, unit: 'seg' }, { day: 'Jun 30', value: 5, target: 1, unit: 'seg' }, { day: 'Jul 1', value: 0, target: 1, unit: 'seg' }, { day: 'Jul 2', value: 1, target: 1, unit: 'seg' }, { day: 'Jul 6', value: 0, target: 1, unit: 'seg' }, { day: 'Jul 7', value: 0, target: 1, unit: 'seg' }, { day: 'Jul 8', value: 5, target: 1, unit: 'seg' }, { day: 'Jul 9', value: 2, target: 1, unit: 'seg' }, { day: 'Jul 10', value: 5, target: 1, unit: 'seg' }, { day: 'Jul 11', value: 1, target: 1, unit: 'seg' }, { day: 'Jul 13', value: 2, target: 1, unit: 'seg' }, { day: 'Jul 14', value: 2, target: 1, unit: 'seg' }, { day: 'Jul 15', value: 3, target: 1, unit: 'seg' }, { day: 'Jul 16', value: 0, target: 1, unit: 'seg' }, { day: 'Jul 17', value: 0, target: 1, unit: 'seg' }] },
      { task: 'ITS HDD boring', period: 'Jul 2-Jul 17 measured days', minimum: '1 completed bore/day', above: 3, below: 8, latest: 'Jul 20 export: 0 bores closed — 16 of 20 (80%); Bore 10 frac-outs, DC bore restarts Jul 21', note: 'Jul 15 ITS tracker: 16 done / 0 in progress / 4 pending. 5,026 ft installed; 0 ft bored Jul 13-15. The last 4 bores remain.', daily: [{ day: 'Jul 2', value: 1, target: 1, unit: 'bores' }, { day: 'Jul 6', value: 0, target: 1, unit: 'bores' }, { day: 'Jul 7', value: 0, target: 1, unit: 'bores' }, { day: 'Jul 8', value: 1, target: 1, unit: 'bores' }, { day: 'Jul 9', value: 1, target: 1, unit: 'bores' }, { day: 'Jul 10', value: 1, target: 1, unit: 'bores' }, { day: 'Jul 11', value: 1, target: 1, unit: 'bores' }, { day: 'Jul 13', value: 2, target: 1, unit: 'bores' }, { day: 'Jul 14', value: 0, target: 1, unit: 'bores' }, { day: 'Jul 15', value: 0, target: 1, unit: 'bores' }, { day: 'Jul 16', value: 0, target: 1, unit: 'bores' }, { day: 'Jul 17', value: 0, target: 1, unit: 'bores' }] }
    ],
    successors: [
      { activity: 'Tracker structural assembly', dependency: 'Completed piles by zone/block; final tracker finish after final pile finish', impact: 'Can overlap piling only in released areas. Final tracker structure cannot finish before the revised late-July pile forecast; the August 30 tracker-completion estimate requires 40 completed rows/day.', mitigation: 'Prioritize tracker crews into released workfronts and maintain linked finish-to-finish controls.' },
      { activity: 'Tracker completion incl. purlins', dependency: 'Completed tracker structure; purlins installed concurrently (sufficient units on site)', impact: 'Purlin delivery is no longer a restriction. Tracker completion is now controlled by assembly production only, with a best-estimate finish of August 30 for all trackers.', mitigation: 'Hold >= 48 tracker units/day, ramp toward 40 completed rows/day, and keep same-week QA turnover of finished rows.' },
      { activity: 'Module installation', dependency: 'Completed tracker rows with both Purlin types installed; final module finish after final purlin finish', impact: 'Module release is controlled by completed, QA-released tracker rows (purlins installed with the trackers). Final module completion is required one week after the August 30 tracker completion — by September 6.', mitigation: 'Mobilize a controlled module crew only against fully released rows and maintain a block-level tracker/purlin/module constraint log.' },
      { activity: 'DC string wiring / combiner work', dependency: 'Modules set and accessible rows', impact: 'Crews trail module installation block-by-block, but the binding constraint is now Chemik LV material: bulk production ~Aug 7, sea 5-6 wks (mid-late Sept) — too late for Sep 25. Only 18% of 3-string harness shipped.', mitigation: 'Air-freight the final Chemik shipments to land before end of August (Luis Romero escalation Jul 17); sequence electrical crews by completed inverter block; use partial completion packages.' },
      { activity: 'Commissioning and MC', dependency: 'Continuous mechanical completion by zone', impact: 'On the re-cascaded dates (trackers Aug 30, modules Sep 6, LV/DC Sep 18) the Sep 25 MC target is achievable with limited float; pre-commissioning Sep 14 - Oct 15 protects the Oct 16 PIS.', mitigation: 'Convert on-site purlin stock into completed tracker rows at >= 48 units/day, hold the Jul 28 pile gate, ramp modules to full-field rate, and prepare weekend/OT acceleration.' }
    ],
    schedule: [
      { activity: 'D&F Pre-Drilling', contractor: 'Kalamazoo Excavating', start: '2026-05-06', end: '2026-06-30', status: 'Complete', progress: 100, baseline: 0, note: 'The June 30 Construction Management PROGRESS sheet shows 7,694 of 7,694 drill-and-backfill units complete.' },
      { activity: 'GameChange material delivery sequence', contractor: 'GameChange / NTG / Landstar', start: '2026-06-17', end: '2026-07-16', status: 'Critical', progress: 90, baseline: 55, note: 'Consolidated delivery line; final tracker-post containers slipped to a 7/14 port arrival, so post deliveries complete the week of 7/20 (node controllers Monday). Site pile stock: 28,343 delivered vs 24,598 executed — 3,745-pile buffer (~4 days at the ~965/day rate now needed to hold Jul 28). Receiving cap 14 pile + 8 racking loads/day; loads count as scheduled until POD/site receipt.' },
      { activity: 'United Zone F mobilization and pile-spot marking', contractor: 'United', start: '2026-06-15', end: '2026-06-21', status: 'Complete', progress: 100, baseline: 0, note: 'Completed on schedule: marking, mobilization and onboarding closed; United began ramming Jun 22 and has produced daily since.' },
      { activity: 'Overall pile installation acceleration', contractor: 'All pile contractors', start: '2026-06-22', end: '2026-07-28', status: 'Critical', progress: 78.5, baseline: 48.4, note: '6,754 piles remain (official block-map 22,900 + 1,698 field logs not yet mapped): holding July 28 would need ~965 piles/day vs ~560 crew capacity, so the gate is unrecoverable and slips to ~early August (≈ Aug 4-5). Jul 18 Sat: 608 (United 415 + Latnovva 193); United ran 4 of 6 rigs, Latnovva 2 — rig repairs remain the escalated lever; trackers & modules did not work Saturday.' },
      { activity: 'Tracker assembly incl. purlin install', contractor: 'ECCS', start: '2026-06-08', end: '2026-08-30', status: 'At Risk', progress: 28.5, baseline: 0, note: 'Jul 18 Sat: no tracker work (crews off Saturday) — 708 done / 235 QA-released / 473 pending QA (first QA release Jul 20: Zones C1 & C2 with Client). The released buffer ahead of modules is only ~1.3 days. Cumulative under reconciliation vs the workbook TRACKER table (583). Releasing the C rows is the controlling item for the module front.' },
      { activity: 'ITS HDD boring', contractor: 'ITS', start: '2026-06-12', end: '2026-08-15', status: 'Active', progress: 80, baseline: 0, note: 'Jul 15 ITS tracker: 16 of 20 bores complete (80%), 0 in progress, 4 pending — no bores closed Jul 13-15. 5,026 ft installed. EGLE denied swapping the remaining bores for plowing (Jul 17) — the last 4 continue with ~100 ft extensions each past the wetland.' },
      { activity: 'ITS MV cable plowing', contractor: 'ITS', start: '2026-06-25', end: '2026-08-15', status: 'Active', progress: 78.3, baseline: 0, note: 'Jul 15 ITS tracker: 36 of 46 segments complete (78.3%) — +3 on Jul 15 (MV11A-S01/S02, MV11B-S02); 120,738 ft installed, 11,586 ft plowed on Jul 15.' },
      { activity: 'Control building foundation and delivery gate', contractor: 'AB Power / SET team', start: '2026-06-20', end: '2026-07-10', status: 'Complete', progress: 100, baseline: 0, note: 'GATE MET: control building delivered and set on its foundation the night of July 7, three days ahead of the July 10 required-on-site date.' },
      { activity: 'SET equipment required-on-site gate', contractor: 'SET team / Procurement / Suppliers', start: '2026-06-24', end: '2026-07-10', status: 'Critical', note: 'Jul 13 SET tracker: overall 11.8% (civil 44.9%, structural 5.7%). Control building on site; Jul 12: transformer-foundation containment berm complete — foundation ready for the main power transformer, which is still in fabrication. Several electrical items remain committed after the Jul 10 gate. Jul 17 review: AB Power presented no SET work plan or material-delivery plan — Greensol pulling partial scope to a third party (Michael Power) and self-procuring materials; portico steel arriving Jul 16-17; oil-pit grating (tramex) procured to close the payment milestone.' },
      { activity: 'Inverter foundation readiness', contractor: 'EPC / Civil / Electrical', start: '2026-06-20', end: '2026-07-25 provisional', status: 'Critical', progress: 82.6, baseline: 0, note: 'Jul 17 workbook: inverter piling at 190/230 piles (82.6%) — pending D10, E12, F16, G20. Base-plate welding complete on all 18 inverter stations delivered to site (Axel Cano, Jul 12); Jul 16 crews started the remaining piers (Axel). The remainder wait on inverter deliveries. On pace ahead of the end-July arrival of the 23 units.' },
      { activity: 'Inverter Installation', contractor: 'EPC / OEM', start: '2026-07-27', end: '2026-09-15', status: 'Confirmed', progress: 0, baseline: 0, note: '23 x 4.2 MW units. Installation is separated from the SET/control-building scope and depends on completed inverter pile foundations before first delivery.' },
      { activity: 'Workforce module crew mobilization', contractor: 'Workforce', start: '2026-06-29', end: '2026-07-06', status: 'Complete', progress: 100, baseline: 0, note: 'Module crews mobilized and producing (Workforce + Brumont, 38 installers on the Jul 9 board); manning stability is tracked in the risks section.' },
      { activity: 'Final module installation completion', contractor: 'Workforce', start: '2026-07-03', end: '2026-09-06', status: 'Critical', progress: 7.2, baseline: 0, note: 'Modules must finish one week after tracker completion: Aug 30 trackers -> Sep 6 module finish. 14,620 modules executed through Jul 18 (no Sat module work; record 2,922 on Jul 13; last run Jul 17: 2,226); ~3,735/day now required — full-field production depends on released tracker rows (buffer ~1.3 days) and the module crew ramp.' },
      { activity: 'DC Wire / LV Installation', contractor: 'East Carolina + Self-Perform', start: '2026-07-07', end: '2026-09-18', status: 'Critical', progress: 0, baseline: 0, note: 'Aerial messenger-wire harness / BLA-style install from tracker rows to junction boxes. Total pull 274,720 lf (0% done). NOW MATERIAL-GATED: Chemik LV cable/harness finishes production ~Aug 7; sea transit 5-6 wks lands it mid-late Sept, incompatible with Sep 25 MC. Greening escalating for AIR freight to land material before end of August. Cable-pull kick-off Jul 21 on partial air deliveries.' },
      { activity: 'Electrical Pre-Commissioning', contractor: 'EPC + OEMs', start: '2026-09-14', end: '2026-10-15', status: 'Planned', progress: 0, baseline: 0, note: 'Zonal energization after inverter, MV/HDD, tracker, module, and DC/LV turnover by block. Runs Sep 14 - Oct 15 so all zones are energized ahead of the Oct 16 PIS target.' }
    ],
    fieldResourceSnapshots: [
      { label: 'Jun 17 actual', week: 'W25', people: 136, color: '#b53030', offset: -18 },
      { label: 'Jun 30 official', week: 'W27', people: 148, color: '#2769a8', offset: 18 },
      { label: 'Jul 6 field', week: 'W28', people: 70, color: '#168a5b', offset: 48 },
      { label: 'Jul 7 field', week: 'W28', people: 170, color: '#8a4dbf', offset: 78 },
      { label: 'Jul 9 board', week: 'W28', people: 191, color: '#b96f18', offset: 108 },
      { label: 'Jul 16 current', week: 'W29', people: 198, color: '#0c5f43', offset: 138 }
    ],
    actualResources: [
      { contractor: 'ECCS', people: 60, label: '60 · tracker installation' },
      { contractor: 'UNITED', people: 28, label: '28 · F Area piling' },
      { contractor: 'WORKFORCE', people: 28, label: '28 · module installation' },
      { contractor: 'BRUMONT', people: 17, label: '17 · module installation' },
      { contractor: 'LATNOVVA', people: 16, label: '16 · B Area piling' },
      { contractor: 'GREENSOL', people: 12, label: '12 · EPC management' },
      { contractor: 'ITS', people: 9, label: '9 · electrical MV/HDD' },
      { contractor: 'GREENSOL CONSTRUCTION', people: 7, label: '7 · site supervision' },
      { contractor: 'TOPLAND', people: 6, label: '6 · civil & roads' },
      { contractor: 'ABPOWER', people: 6, label: '6 · electrical systems' },
      { contractor: 'DIG IT', people: 3, label: '3 · SET foundations (AB sub)' },
      { contractor: 'LOUNSBURY', people: 3, label: '3 · civil earthworks' },
      { contractor: 'ECS', people: 2, label: '2 · environmental support' },
      { contractor: 'SWCA', people: 1, label: '1 · environmental compliance' },
      { contractor: 'HI-TECH', people: 0, label: '0 · substation & QI (off site)' },
      { contractor: 'HURRICANE', people: 0, label: '0 · fencing (off site)' },
      { contractor: 'WESTWOOD', people: 0, label: '0 · civil consulting (off site)' }
    ],
    todayFieldSnapshot: {
      date: 'Jul 16, 2026',
      total: 198,
      rows: [
        { contractor: 'ECCS', people: 60, category: 'tracker', note: 'Tracker structural installation — Zone C, the controlling front' },
        { contractor: 'UNITED', people: 28, category: 'pile', note: 'Zone F pile driving — crew up to 28, but only 2 of 5 rigs running' },
        { contractor: 'WORKFORCE', people: 28, category: 'module', note: 'Module installation crew, primary (incl. administrative)' },
        { contractor: 'BRUMONT', people: 17, category: 'module', note: 'Module installation crew, secondary — in Zone C' },
        { contractor: 'LATNOVVA', people: 16, category: 'pile', note: 'Zone B pile driving — single working rig, 2nd in repair' },
        { contractor: 'GREENSOL (EPC Team)', people: 12, category: 'epc', note: 'Project management and EPC oversight' },
        { contractor: 'ITS', people: 9, category: 'electrical', note: 'Electrical: MV plowing and HDD boring (crew down 15 -> 9)' },
        { contractor: 'GREENSOL CONSTRUCTION', people: 7, category: 'epc', note: 'Self-perform site supervision, QA and rework' },
        { contractor: 'TOPLAND', people: 6, category: 'civil', note: 'Internal roads — 65.9% complete' },
        { contractor: 'ABPOWER', people: 6, category: 'electrical', note: 'Substation (SET) and inverter-station works' },
        { contractor: 'DIG IT', people: 3, category: 'electrical', note: 'SET foundations (subcontractor of ABPOWER)' },
        { contractor: 'LOUNSBURY', people: 3, category: 'civil', note: 'Civil earthworks / Area G basin closeout' },
        { contractor: 'ECS', people: 2, category: 'civil', note: 'Environmental controls / sediment basins' },
        { contractor: 'SWCA', people: 1, category: 'support', note: 'Environmental compliance' },
        { contractor: 'HI-TECH', people: 0, category: 'electrical', note: 'No crew on site today' },
        { contractor: 'HURRICANE', people: 0, category: 'civil', note: 'No fencing crew on site today' },
        { contractor: 'WESTWOOD', people: 0, category: 'support', note: 'No crew on site today' },
        { contractor: 'KALAMAZOO', people: 0, category: 'support', note: 'No crew on site today' }
      ]
    },
    equipmentNotes: [
      { contractor: 'GreenSol', equipment: 'Site trucks and laptops for management/QC field use; no heavy equipment assigned.', output: 'Daily site walk, safety audits, and progress verification.' },
      { contractor: 'GreenSol Construction', equipment: 'Hand tools and site vehicles supporting self-perform labor.', output: 'Supporting active workfronts; no heavy equipment assigned.' },
      { contractor: 'ECS', equipment: 'No crew or equipment on site today.', output: 'Not applicable.' },
      { contractor: 'Hurricane', equipment: 'Standard fencing install tools (post drivers, hand tools).', output: 'Fence ~95.6% complete (Jul 9 sheet): A-F done, Zone G at 71.1%, gates remaining.' },
      { contractor: 'Topland', equipment: 'Grading/road equipment (grader, roller).', output: 'Internal roads scope; Area F access blocked ~10 AM by a concrete pour.' },
      { contractor: 'Lounsbury', equipment: 'Earthwork equipment (excavator, dozer) for cut/fill and basin work.', output: 'Area G basin closeout continuing ahead of cut/fill start.' },
      { contractor: 'ECCS', equipment: 'Tracker structural installation crew; equipment count varies by workfront.', output: 'Largest crew on site (60, Jul 17); Jul 17: 25 trackers in Zone C + 19 piles Zone E; crew pulled off ~3pm (Canadian wildfire smoke — statewide AQ alert).' },
      { contractor: 'United', equipment: '6 ramming machines on site — 2 damaged (4 running; rig repairs urgent).', output: 'Jul 17 (Fri): 368 piles in Zone F — 24 people, 4 of 6 rigs running (2 damaged).' },
      { contractor: 'Latnovva', equipment: '2 ramming machines on site (both running Jul 16).', output: 'Jul 17 (Fri): 85 piles in Zone B — 13 people, 2 rigs.' },
      { contractor: 'Workforce', equipment: 'Module installation hand tools / torque equipment.', output: 'Jul 17 (Fri): 936 modules in Zone A — 28 people.' },
      { contractor: 'Brumont', equipment: 'Module installation tools; 18-person crew.', output: 'Jul 17 (Fri): 1,290 modules in Zone A — 15 people.' },
      { contractor: 'ITS', equipment: 'HDD boring rig and MV cable-plowing machine.', output: 'Jul 15 ITS tracker: 36/46 plow segments (120,738 ft) and 16/20 bores (80%) complete.' },
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
      { title: 'Chemik LV cable/harness delivery is the new critical path to energization', level: 'Critical', owner: 'Luis Romero Montero / Clara Lopez / Chemik (Felix A. Perez) / Joshua Spalding', note: 'Jul 17 Chemik thread: bulk LV material finishes production ~Aug 7; sea transit is 5-6 weeks, landing it ~Sep 11-18 — incompatible with the Sep 25 completion commitment. Only 18% of the 3-string harness has shipped by air; the remainder (800+800) is not built until Jul 24 and is insufficient to complete Area A. Air shipments in transit: PL_260706 (ETA Jul 16), PL_260601 and PL_260709 (ETA Jul 23) — none contain harness. Luis Romero (Construction Director) has demanded the final shipments move by AIR so all material lands before end of August; without it the LV pull cannot start in earnest and the required rate jumps to ~12,000-17,000 lf/day over a compressed window. This now gates DC/LV, pre-commissioning and the Oct 16 PIS. PROJECT DECISION (Jul 17): ALL remaining Chemik packages are to be AIR-FREIGHTED — sea transport is off the table as it cannot meet the milestones.' },
      { title: 'H&S — Canadian wildfire smoke air-quality alert (easing)', level: 'Watch', owner: 'EHS / H&S Manager / Site Management / Greensol / Luis Romero', note: 'H&S item. Michigan EGLE issued a statewide air-quality alert (Canadian/Ontario wildfire smoke) on Jul 14, extended through Monday Jul 20 and expected to clear after today. On site the event has eased: the only smoke-related stoppage was ECCS pulled off ~3pm Jul 17 (shortening the tracker/Zone E pile day); no further stoppages since, and Saturday Jul 18 crews (United, Latnovva) worked a normal day. Masks remain available; H&S continues to monitor daily AQI. The Jul 17 stoppage stays documented for a potential force-majeure / time-extension claim (Jul 17 procurement acta).' },
      { title: 'SET scope and deliveries at risk — AB Power has no work plan; scope moving to a third party', level: 'Critical', owner: 'Axel Cano / Audelio Zuniga / AB Power / Michael Power / Procurement', note: 'Jul 17 procurement review: AB Power has presented neither a SET work plan nor a material-delivery plan. Greensol is removing partial scope from AB Power (deduct + fee) and bringing in a third party (Michael Power), plus self-buying the missing material list (BUS-connectors flagged urgent). Portico steel structure arriving Jul 16-17 (next-week arrival not yet confirmed). Oil-pit grating (tramex) is being procured separately to close the SET payment milestone 100% and avoid Heelstone payment objections.' },
      { title: 'SCADA and field instrumentation slipping — recovery plan owed', level: 'Critical', owner: 'SCADA supplier / Clara Lopez / Joshua Spalding', note: 'Jul 17 review: a SCADA delay was reported. The FAT can proceed without the servers in the first week of August, but the field boxes and meteo stations will not ship until the first week of September — a risk to zonal energization and the Oct 16 PIS. A recovery plan has been requested and is still owed; the team intends to hold the FAT and press for firm dates.' },
      { title: 'Tracker and pile scope adjustments from the Jul 17 review', level: 'Watch', owner: 'Luis Romero / Audelio Zuniga / Workforce / United', note: 'The remaining 10 MW of tracker assembly is being PULLED from Workforce (capability concern) — reassignment pending (United now holds full mechanical in Zones F & G). Missing piles: Plan B is to double smaller-section site piles or reinforce with concrete while Axel chases supply. EGLE will not allow swapping the remaining HDD bores for plowing; the last 4 bores continue with ~100 ft extensions each past the wetland.' },
      { title: 'Rig availability, not delivery, now caps pile production', level: 'Critical', owner: 'United / LATNOVVA / Audelio Zuniga / Manuel Ramirez', note: 'Pile stock is comfortable — 28,343 delivered vs 24,598 executed, a 3,745-unit buffer (~5.5 days at the required 965/day). The constraint is mechanical: United ran 4 of 6 rigs and Latnovva 2 on Jul 18 Sat (2 United rigs damaged); the day hit 608, but trackers and modules did not work Saturday. At ~560/day capacity only ~3,900 more piles are possible before Jul 28, so the gate is now unrecoverable and slips to ~early August (≈ Aug 4-5); holding Jul 28 would need ~965/day. Rig repairs are the recovery lever and are urgent.' },
      { title: 'Trackers remain the controlling front: 25 rows vs 49 required, and the released buffer is ~1.3 days', level: 'Critical', owner: 'ECCS / Daniel Morilla / Manuel Ramirez', note: 'No tracker work Saturday Jul 18 (crews off); ECCS last logged 25 rows Jul 17 (60 people) — below the 49/day required for Aug 30. The QA-released buffer ahead of the module crews is only ~68 rows / ~4,700 modules ≈ 1.3 days: any tracker-QA miss stalls modules. 708 done / 235 released / 473 pending. QA freeze breaking: Daniel confirmed Monday Jul 20 that Zones C1 and C2 release for trackers today with the Client — the first releases since Jul 10. The field cumulative (708) is under reconciliation against the workbook TRACKER table (583). Hold >= 49/day and convert the 473-row pending backlog into released rows this week.' },
      { title: 'QA release backlog now binds the module front — and Area F was released without sub documents', level: 'Critical', owner: 'Daniel Morilla (QA/QC) / ECCS / Manuel Ramirez', note: '473 completed tracker rows await Quality approval on top of the 235 released, after a freeze Jul 10-18 (rows driven but not levelled/aligned). Daniel confirmed Monday Jul 20 that Zones C1 and C2 release today with the Client — the first releases since Jul 10; crews stay concentrated on tracker QA to clear the A6/A7 backlog and Area F progress. Open item flagged by QA: some Area F zones were released internally without the subcontractor submitting quality documents — those documents must be recovered. The released buffer ahead of modules is only ~1.3 days, so released rows are the binding constraint.' },
      { title: 'SET foundation, delivery dates, and equipment commitments all need closure', level: 'Critical', owner: 'Axel Cano / AB Power / Karina Mucino / Joshua Spalding / Project Management', note: 'Jul 13 SET tracker shows 11.8% overall progress (civil 44.9%, structural 5.7%), up from 8.7% on Jul 6. The control building is set and the transformer-foundation containment berm was completed Jul 12. Transformer and structural steel remain in fabrication, and several electrical items show committed dates after the July 10 required-on-site gate.' },
      { title: 'ITS is ahead of the electrical sequence — keep the reporting cadence', level: 'On Track', owner: 'ITS / Audelio Zuniga / Angel Urbina', note: 'Jul 15 ITS tracker: 36 of 46 plow segments complete (120,738 ft) and 16 of 20 bores closed (5,026 ft). Plowing added 11,586 ft on Jul 15 (MV11A-S01/S02, MV11B-S02); boring logged 0 ft Jul 13-15. Only 4 bores and 10 segments remain; the LV kick-off should confirm crews and work plan for the follow-on scope.' },
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
        if (ctxP) ctxP.textContent = 'Total headcount by crew from today\u2019s on-site tracking board. GreenSol management and self-perform labor are combined into a single EPC-team bar; subcontractor crews are shown individually, largest to smallest. Scope breakdown: Trackers & Piling (92), Module Installation (46), Electrical & SET (30), Civil & Fencing (15), GreenSol EPC (19).';
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
