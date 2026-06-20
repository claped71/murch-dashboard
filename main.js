'use strict';

(function () {
  const data = {
    scope: [
      { title: 'EPC Management', metric: 'Turnkey', note: 'Project management, safety, QC, contractor deliverables, owner reporting, permitting support, and trade coordination through completion.' },
      { title: 'Civil and Environmental', metric: 'Week 22 update', note: 'Rosario Ruiz report issued June 5: earthworks 60%, fencing 58%, sediment basins 47%, roads 20%, and remaining TBD completion constrained by Areas F/G release.' },
      { title: 'Mechanical BOS', metric: '31,352 piles', note: 'Pile driving, D&F pre-drilling where required, GameChange SAT tracker assembly, purlin install, and module placement.' },
      { title: 'Electrical BOS', metric: '23 inverters', note: 'MV collection, HDD, grounding, DC string and combiner wiring, LV/AC works, inverter installation, SCADA, and testing.' },
      { title: 'Procurement', metric: '171,470 modules', note: 'Panels, racking, purlins, actuators, controllers, cables, inverter stations, combiner boxes, and SET equipment.' },
      { title: 'Commissioning', metric: 'PIS Oct 16', note: 'Cold commissioning, energization, tracker testing, inverter start-up, PR test path, punch list, COD, and substantial completion.' }
    ],
    photos: [
      { src: 'assets/recent/recent-1.jpg', date: 'June 13, 2026', title: 'SET foundation construction', note: 'Newest site photo showing the concrete foundation, reinforcement cages, embedded items, excavation equipment, and active SET civil workfront.' },
      { src: 'assets/recent/recent-2.jpg', date: 'June 12, 2026', title: 'Road and equipment activity', note: 'Recent civil and logistics view showing equipment operating beside the project access road and adjacent work areas.' },
      { src: 'assets/recent/recent-3.jpg', date: 'June 11, 2026', title: 'Tracker actuator installation detail', note: 'Recent mechanical close-up documenting actuator installation, tracker steel connections, cabling, and field quality checks.' },
      { src: 'assets/recent/recent-4.jpg', date: 'June 11, 2026', title: 'Tracker field inspection', note: 'Recent multidisciplinary field inspection of installed tracker rows and mechanical workfront conditions.' },
      { src: 'assets/recent/recent-5.jpg', date: 'June 11, 2026', title: 'Environmental controls and field support', note: 'Recent civil and environmental view showing stabilized access, sediment-control wattles, drainage protection, and field-support facilities.' },
      { src: 'assets/recent/recent-6.jpg', date: 'April 9, 2026', title: 'Truck unloading operation', note: 'Telehandler unloading tracker components from delivery trailer into the staging area.' },
      { src: 'assets/recent/recent-7.jpg', date: 'April 13, 2026', title: 'Racking material storage', note: 'Racking and tracker material staged on site for mechanical installation sequencing.' },
      { src: 'assets/recent/recent-8.jpg', date: 'June 2, 2026', title: 'Access road condition', note: 'Recent civil access-road view supporting logistics, crew movement, and material deliveries.' },
      { src: 'assets/recent/recent-9.jpg', date: 'May 26, 2026', title: 'Pile field progression', note: 'Installed pile rows showing foundation workfront progress and remaining mechanical access.' },
      { src: 'assets/recent/recent-10.jpg', date: 'May 19, 2026', title: 'Tracker assembly', note: 'Mechanical assembly work with equipment placing tracker components on installed piles.' },
      { src: 'assets/recent/recent-11.jpg', date: 'June 2, 2026', title: 'Tracker line and pile workfront', note: 'Recent workfront photo showing installed tracker line conditions and available field access.' },
      { src: 'assets/recent/recent-12.jpg', date: 'April 15, 2026', title: 'Pile ramming operation', note: 'Older mechanical progress record showing pile driving equipment active in the field.' }
    ],
    civilKpis: [
      { title: 'Civil control progress', metric: '14.36%', note: 'Overall civil progress reported in the June 16 master control workbook.' },
      { title: 'Civil weekly pace', metric: '0.68% / 2.95%', note: 'Latest three-week average versus minimum required weekly progress; recovery is required.' },
      { title: 'F / G release dates', metric: 'TBD', note: 'Release dates are required before forecasting completion of remaining TBD civil works.' }
    ],
    civilActivities: [
      { activity: 'Earthworks cut / fill', company: 'Lounsbury', done: 60, remaining: 40, status: 'Active', note: 'Week 22 superintendent update. Started April 1; final date remains TBD and depends on remaining workfront releases.' },
      { activity: 'Perimeter fence', company: 'Hurricane', done: 58, remaining: 42, status: 'Active', note: 'Week 22 superintendent update. Started April 22; final date remains TBD, including Areas F and G.' },
      { activity: 'Sediment basins / environmental controls', company: 'Lounsbury / ECS', done: 47, remaining: 53, status: 'At Risk', note: 'Week 22 superintendent update. Basin work started March 26; final date remains TBD.' },
      { activity: 'Internal roads', company: 'Topland', done: 28.1, remaining: 71.9, status: 'Critical', note: 'June 16 master control reports 5,140 of 18,320 complete. The workbook-required-rate result is invalid because the baseline date is overdue; roads continue to control logistics access.' },
      { activity: 'Inverter foundation piles', company: 'Civil / Survey team', done: 20, remaining: 80, status: 'Critical', note: 'Detailed control records survey/enabling progress at 20%, while Rosario Ruiz confirms that foundation pile ramming remains 0%. Do not interpret the master overview 100% entry as installed foundations.' },
      { activity: 'Current SET civil works', company: 'AB Power', done: 40, remaining: 60, status: 'Active', note: 'AB Power performs the current SET civil works. The latest recorded SET civil progress remains 40%, pending a newer quantified update.' }
    ],
    contractors: [
      { name: 'LATNOVVA', scope: 16400, installed: 8565, remaining: 7835, done: 52.2, zones: 'Zones A, B, C, D, G, EW + 2,185-pile Area E portion', status: 'Watch', note: "LATNOVVA contractual scope includes 2,185 piles in Area E. Installed quantity is shown so contractor totals reconcile with Const. Management's 14,836 installed piles." },
      { name: 'ECCS', scope: 6271, installed: 6271, remaining: 0, done: 100, zones: 'Area E bulk scope', status: 'On Track', note: "ECCS works only in Area E. Its contractual scope is 6,271 piles, which reconciles with LATNOVVA's 2,185-pile Area E portion to the full 8,456-pile Area E total." },
      { name: 'United', scope: 7658, installed: 0, remaining: 7658, done: 0, zones: 'Zone F', status: 'Mobilizing', note: 'United takes over Zone F after JB Solar declined participation. Mobilization and pile-spot marking start June 15; pile ramming starts June 22, subject to pile delivery and workfront release.' },
      { name: 'Project Total', scope: 31352, installed: 14836, remaining: 16516, done: 47.32, zones: "All zones | Construction Manager report", status: 'Critical', note: "Const. Management's Delivery/Mechanical workbook is the official production basis under Construction Manager review." }
    ],
    zones: [
      { zone: 'Zone A', contractor: 'Latnovva', scope: 3834, installed: 3737, remaining: 97, done: 97.5, status: 'On Track', note: 'Nearly complete.' },
      { zone: 'Zone C', contractor: 'Latnovva', scope: 2946, installed: 2723, remaining: 223, done: 92.4, status: 'Active', note: 'June 16 Const. Management workbook.' },
      { zone: 'Zone E', contractor: 'ECCS / Latnovva', scope: 8456, installed: 7376, remaining: 1080, done: 87.2, status: 'Active', note: 'June 16 Const. Management workbook; contractor split remains unreconciled.' },
      { zone: 'Zone EW', contractor: 'Latnovva', scope: 846, installed: 750, remaining: 96, done: 88.7, status: 'Active', note: 'June 16 Const. Management workbook reports first EW production.' },
      { zone: 'Zone B', contractor: 'Latnovva', scope: 2788, installed: 250, remaining: 2538, done: 9, status: 'Active', note: 'The latest official Delivery / Mechanical workbook now records the first 250 installed piles in Zone B.' },
      { zone: 'Zone D', contractor: 'TBD / Latnovva', scope: 1468, installed: 0, remaining: 1468, done: 0, status: 'Material Hold', note: '2nd-50% work; no start before June 22 material arrivals.' },
      { zone: 'Zone F', contractor: 'United', scope: 7658, installed: 0, remaining: 7658, done: 0, status: 'Mobilizing', note: 'United assigned after JB Solar declined participation. Drainage Commissioner partial civil release received June 16: grading and basin work cleared in Zone F; fence excluded from the partial release in Zone G. Mobilization and pile-spot marking continue; pile ramming begins June 22 after material delivery and workfront release.' },
      { zone: 'Zone G', contractor: 'Latnovva', scope: 3356, installed: 0, remaining: 3356, done: 0, status: 'Material Hold', note: 'Assigned to Latnovva. Drainage Commissioner partial civil release received June 16 allows grading and basin work to resume; fence installation in Zone G still requires full Commissioner approval. Pile start depends on June 22 pile delivery.' }
    ],
    production: [
      { name: 'Project pile installation', remaining: '16,516 piles', required: 752, observed: 500, status: 'Critical', note: "The latest official Delivery/Mechanical workbook shows 14,836 installed (47.32%). The estimated recovery need remains approximately 752/day versus the latest five-day rate of 500.2/day and planned post-June 22 capacity of 560/day." },
      { name: 'Pile delivery / site stock', remaining: '15,601 piles undelivered', required: 0, observed: 0, status: 'Critical', note: "15,751 of 31,352 piles delivered. The latest official installed total implies 915 piles remain on site, approximately 1.8 production days at 500.2/day." },
      { name: 'Drill and backfill', remaining: '858 pre-drills', required: 250, observed: 316, status: 'Critical', note: "The June 16 Const. Management daily log shows 6,814 complete and 858 remaining after 316 units on June 15. The PROGRESS summary still shows 1,167 remaining, so the 309-unit difference requires reconciliation." },
      { name: 'Civil grading / cut-fill', remaining: '6,134 cy', required: 198, observed: 1968, status: 'On Track', note: 'ProductionProgress_JS-4.xlsx reports 10,773 of 16,907 cy complete (63.7%). Latest five-day production exceeds the workbook-required rate.' },
      { name: 'Internal roads', remaining: '13,180', required: 0, observed: 366, status: 'Critical', note: 'June 16 master control reports 5,140 of 18,320 complete (28.1%). The workbook-required-rate output is invalid because the baseline finish is overdue.' },
      { name: 'Tracker assembly', remaining: '2,379 trackers', required: 48, observed: 107, status: 'Critical', note: 'June 16 Const. Management workbook reports 107 of 2,486 trackers installed (4.3%), all in Area A. Final tracker completion remains dependent on completed piles and complete purlin kits.' },
      { name: 'Torque tube installation', remaining: '26,736 tubes', required: 0, observed: 2133, status: 'Critical', note: 'June 16 Const. Management workbook reports 2,133 of 28,869 torque tubes installed (7.39%), currently limited to Area A.' },
      { name: 'Purlin installation', remaining: '176,442 purlins', required: 8402, observed: 0, status: 'Critical', note: 'June 16 master control reports zero installed. Required pace is approximately 8,402/day; installation depends on complete tracker structures and confirmed material kits.' },
      { name: 'Panel delivery', remaining: '14,230 modules', required: 0, observed: 0, status: 'On Track', note: 'The June 16 Const. Management workbook reports 157,240 of 171,470 panels delivered (91.7%).' },
      { name: '2nd-50% zones B/D/F/G', remaining: 'Material gate', required: 0, observed: 0, status: 'Material Hold', note: 'Zone B now has first counted installation, but continuity there and startup in D/F/G still depend on the June 15 GameChange plan deliveries being customer-confirmed on site.' },
      { name: 'Tracker material delivery', remaining: '318 / 602 shipment lines', required: 0, observed: 0, status: 'Critical', note: 'The June 15 GameChange delivery plan shows 284 shipment lines customer-confirmed on site (47.2%) and 318 pending. Latest customer-confirmed site record is June 1; 9 additional lines show carrier pickup but no confirmed site receipt.' },
      { name: 'Purlin delivery', remaining: '59,547 Purlin units', required: 0, observed: 0, status: 'Critical', note: 'No Purlin shipment lines are confirmed on site. Planned dated deliveries total 46,080 units from June 17 through July 8; 13,467 Purlins have no planned site-delivery date.' },
      { name: 'Tracker Purlin delivery', remaining: '117,778 units', required: 0, observed: 0, status: 'Critical', note: 'No Tracker Purlin shipment lines are confirmed on site. Planned deliveries start June 23 and continue through July 16.' },
      { name: 'Module installation', remaining: '171,470 modules', required: 5531, observed: 0, status: 'Critical', note: 'June 16 master control reports zero installed and approximately 5,531/day required. The June 11 field discussion indicates that learning-period output is materially below the management need; staffing quantities are intentionally excluded pending reliable personnel records.' }
    ],
    successors: [
      { activity: 'Tracker structural assembly', dependency: 'Completed piles by zone/block; final tracker finish after final pile finish', impact: 'Can overlap piling only in released areas. Final tracker structure cannot finish before the revised July 28 pile forecast; the August 19 tracker forecast remains provisional and requires 40 completed rows/day.', mitigation: 'Prioritize tracker crews into released workfronts and maintain linked finish-to-finish controls.' },
      { activity: 'Purlin installation / tracker completion', dependency: 'Completed tracker structure plus both Purlin types confirmed on site', impact: 'The June 17 Purlin load alone cannot complete tracker rows. The first defensible completion wave is after the first Tracker Purlin delivery planned June 23, subject to complete kits and confirmed receipt.', mitigation: 'Confirm each planned load before release, prioritize complete material kits by block, and track planned versus confirmed arrivals daily.' },
      { activity: 'Module installation', dependency: 'Completed tracker rows with both Purlin types installed; final module finish after final purlin finish', impact: 'The earliest defensible first module wave is after June 23, once both Purlin types are physically received and installed on released rows. Final project module completion cannot precede the July 16 planned final Tracker Purlin delivery and subsequent installation.', mitigation: 'Mobilize a controlled module crew only against fully released rows and maintain a block-level tracker/purlin/module constraint log.' },
      { activity: 'DC string wiring / combiner work', dependency: 'Modules set and accessible rows', impact: 'Electrical DC production will be fragmented by workfront availability, increasing crew moves and testing discontinuity.', mitigation: 'Sequence electrical crews by completed inverter block; use partial completion packages and clean turnover boundaries.' },
      { activity: 'Commissioning and MC', dependency: 'Continuous mechanical completion by zone', impact: 'Unconfirmed post receipts and the incomplete purlin plan consume remaining float and make Sep 25 MC more difficult unless early material waves are converted immediately into finished tracker/module work.', mitigation: 'Lock GameChange delivery dates, obtain a site date for the 13,467 unscheduled Purlins, prepare weekend/OT recovery, and track daily pile burn versus confirmed receipts.' }
    ],
    schedule: [
      { activity: 'D&F Pre-Drilling', contractor: 'Kalamazoo Excavating', start: '2026-05-06', end: '2026-06-20', status: 'Critical', note: "The June 16 Const. Management daily log shows 6,814 complete and 858 remaining after 316 units on June 15. The PROGRESS summary still shows 1,167 remaining; reconcile before closing the lookahead." },
      { activity: 'Current pile stock installation', contractor: 'ECCS / LATNOVVA', start: '2026-06-16', end: '2026-06-18', status: 'Critical', note: "The latest official workbook reports 14,836 of 15,751 delivered piles installed. Implied stock is 915 piles, or approximately 1.8 production days at the latest validated 500.2/day pace." },
      { activity: '2nd-50% post delivery - first planned wave', contractor: 'GameChange / Logistics', start: '2026-06-18', end: '2026-06-22', status: 'Critical', note: 'The June 15 GameChange plan schedules 540 posts June 18, 836 June 19, and 928 June 22. Treat all quantities as planned until customer-confirmed on site.' },
      { activity: 'Potential piling pause', contractor: 'All pile contractors', start: '2026-06-18', end: '2026-06-22', status: 'Critical', note: "The latest official installed total implies a likely stop around June 18 if the remaining 915-pile stock is depleted. Planned June 18-19 post receipts could reduce the interruption, but daily replenishment must be confirmed against pile burn." },
  { activity: 'United Zone F mobilization and pile-spot marking', contractor: 'United', start: '2026-06-15', end: '2026-06-21', status: 'Mobilizing', note: 'United replaces JB Solar for Zone F. Complete pile-spot marking, crew and equipment mobilization, safety onboarding, access readiness, and workfront release before ramming.' },
  { activity: 'United Zone F pile ramming start', contractor: 'United', start: '2026-06-22', end: '2026-06-22', status: 'Critical', note: 'United starts pile ramming on June 22, subject to the delayed pile delivery, completed marking, access, and released workfronts.' },
      { activity: 'Overall pile installation recovery', contractor: 'All pile contractors', start: '2026-06-16', end: '2026-07-28', status: 'Critical', note: "The latest official Delivery/Mechanical workbook leaves 16,516 piles. Seven-machine capacity of 560/day is below the estimated recovery need of 752/day; uninterrupted work from June 22 forecasts completion around July 27-28." },
      { activity: 'Tracker Structural Assembly', contractor: 'ECCS', start: '2026-06-08', end: '2026-08-19 provisional', status: 'At Risk', note: 'Linked recovery forecast at 40 tracker rows/day. Trackers overlap by released block but final completion must remain after the July 28 pile finish.' },
      { activity: 'MV Cable / HDD', contractor: 'ITS Company', start: '2026-06-01', end: '2026-08-15', status: 'Active', note: 'Ongoing as of June 16. Forecast completion mid-August (worst case). MV cable purchased and in transit. Circuits MV-11A/B, MV-12A/B.' },
      { activity: 'Inverter Installation', contractor: 'EPC / OEM', start: '2026-07-01', end: '2026-08-31', status: 'Confirmed', note: '23 x 4.2 MW units to be installed at field before end of August. Pads must cure before delivery.' },
      { activity: 'Purlin delivery sequence', contractor: 'GameChange / Logistics', start: '2026-06-17', end: '2026-07-08 plus unscheduled balance', status: 'Critical', note: 'The June 15 plan contains 59,547 Purlins, but only 46,080 have planned site dates across June 17-July 8. The remaining 13,467 have no planned site-delivery date, and zero Purlin shipment lines are customer-confirmed on site.' },
      { activity: 'Tracker Purlin delivery sequence', contractor: 'GameChange / Logistics', start: '2026-06-23', end: '2026-07-16', status: 'Critical', note: '117,778 Tracker Purlin units planned across eight delivery dates. Zero Tracker Purlin shipment lines are currently confirmed on site.' },
      { activity: 'Module Installation - first wave', contractor: 'Panel Sub', start: '2026-06-24', end: '2026-08-15', status: 'Critical', note: 'The Jun 17 Purlin load alone does not release modules. Start only after both Purlin types are physically received and installed on fully released tracker rows.' },
      { activity: 'Full purlin installation / tracker completion', contractor: 'GameChange / ECCS', start: '2026-06-23', end: '2026-09-18', status: 'Critical', note: 'Final finish must be after tracker structural completion and after all required purlin loads are confirmed on site and installed.' },
      { activity: 'Final module installation completion', contractor: 'Panel Sub', start: '2026-07-01', end: '2026-10-09', status: 'Critical', note: 'Final module completion must occur after final purlin installation. No defensible project finish date exists until the full purlin plan is confirmed.' },
      { activity: 'LV Cable / DC Wiring', contractor: 'Electrical Sub TBD', start: '2026-07-07', end: '2026-10-09', status: 'Critical', note: 'Starts second week of July; completion close to end of module installation. Subcontract not yet awarded — award immediately to protect July 7 start.' },
      { activity: 'SCADA / Commissioning Systems', contractor: 'Electrical Sub TBD', start: '2026-09-15', end: '2026-11-01', status: 'Planned', note: 'SCADA runs as part of the commissioning phase, from electrical pre-commissioning start through end of commissioning (Nov 1).' },
      { activity: 'Electrical Pre-Commissioning', contractor: 'EPC + OEMs', start: '2026-09-15', end: '2026-11-01', status: 'Planned', note: 'Zonal energization after inverter and tracker completion.' }
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
      { name: 'Mechanical Completion', target: 'Sep 25, 2026', forecast: 'Oct 10-15, 2026 provisional', status: 'Critical', note: 'The revised July 28 pile and provisional August 19 tracker forecasts leave no recovery margin; MC still depends on full purlin completion by September 18 and modules by October 9.' },
      { name: 'Provisional Interconnection', target: 'Oct 16, 2026', forecast: 'Oct 20-25, 2026', status: 'Critical', note: 'Depends on revised MC; utility/offtake renegotiation likely required.' },
      { name: 'Commercial Operation Date', target: 'Nov 9, 2026', forecast: 'Nov 5-9, 2026', status: 'High', note: 'Feasible only in optimistic scenario; zero float remains.' },
      { name: 'Substantial Completion', target: 'Nov 30, 2026', forecast: 'Nov 30, 2026', status: 'Watch', note: 'Still achievable if COD is protected and outdoor work closes before weather stop.' }
    ],
    risks: [
      { title: 'May unsafe-condition and behavior closeout', level: 'Critical', owner: 'H&S Manager / Construction Management', note: 'May recorded 26 unsafe conditions, 18 unsafe behaviors, and one first-aid case. Verify corrective-action ownership and closure while maintaining the zero-recordable-accident result.' },
      { title: 'GameChange post deliveries remain planned, not confirmed', level: 'Critical', owner: 'GameChange / Procurement / PM', note: 'The June 15 plan advances the first new post wave to 540 units June 18 and 836 June 19, followed by 928 June 22. Confirm receipt and workfront allocation daily; current stock has fallen to about 915 piles.' },
      { title: 'Installed pile production source locked to Construction Manager report', level: 'Critical', owner: 'Construction Controls / Mechanical Subs / QA/QC', note: "The latest official Delivery/Mechanical workbook shows 14,836 installed piles and is the dashboard's lead production source under Construction Manager review. Keep QA/QC approval quantities separate from installed production." },
      { title: 'Seven-machine pile recovery capacity below required pace', level: 'Critical', owner: 'Construction Mgmt / Pile Contractors', note: 'From June 22, 7 ramming machines averaging 80 piles each provide 560 piles/day, below the June 16 master-required 752/day pace. Uninterrupted production forecasts pile completion around July 27-28; downtime or material interruption will move it later.' },
      { title: 'Zone B production has officially started', level: 'Critical', owner: 'Construction Controls / Field Management', note: 'The latest official Delivery/Mechanical workbook adds the first 250 installed piles in Zone B. Protect continuity there while the remaining 2nd-50% zones still depend on confirmed post receipts.' },
      { title: 'Pre-drilling field/master reconciliation and recovery', level: 'Critical', owner: 'Kalamazoo Excavating / Construction Mgmt', note: "The June 16 Const. Management daily log shows 858 pre-drills remaining, while the same workbook's PROGRESS summary still shows 1,167 remaining. Reconcile the 309-unit difference and protect the June 20 target." },
      { title: 'Module-installation workforce and learning-rate gap', level: 'Critical', owner: 'Construction Mgmt / ECCS / Module Crew', note: 'June 11 field discussion indicates that learning-period output remains below the rate needed for recovery. Confirm reliable staffing records, equipment, workfronts, and the ramp plan before publishing personnel quantities.' },
      { title: 'Heavy rain and SET/civil attendance', level: 'Watch', owner: 'AB Power / Civil Superintendent / Construction Mgmt', note: 'On June 14, heavy rain affected site conditions and AB Power attendance was not confirmed at 8:30 AM; arrival was expected by 10:00 AM. Confirm the full-day production effect before closing the daily report.' },
      { title: 'Civil weekly pace below minimum', level: 'Critical', owner: 'Civil Superintendent / Project Controls', note: 'Civil control reports approximately 0.68% average weekly progress over the latest three weeks versus a minimum required pace of approximately 2.95% per week.' },
      { title: 'Areas F and G civil partial release — fence in G pending full approval', level: 'Watch', owner: 'Project Management / Civil Superintendent', note: 'Drainage Commissioner partial civil release received June 16: grading and temporary or permanent basin work can resume in Zones F and G. Fence installation can continue in Zone F but requires full Commissioner approval before proceeding in Zone G. Integrate the release into the civil lookahead and confirm Zone G fence approval timing.' },
      { title: 'Civil micro-grading control model errors', level: 'Critical', owner: 'Project Controls', note: 'Dashboard_MicroCuts contains #REF!, #VALUE!, and #N/A errors. Repair the micro-grading model before using its forecast or crew-loading outputs.' },
      { title: 'Pile quality release and inspection backlog', level: 'Critical', owner: 'QA/QC Manager / Construction Controls', note: 'The June 8 quality update shows Zone C with 1,800 pending inspections, Zone E with 1,664 pending and all 115 defects, and only 1,486 piles released by Heelstone. Against Const. Management production, Heelstone release is now 10.19%.' },
      { title: 'Purlin delivery plan incomplete and not site-confirmed', level: 'Critical', owner: 'GameChange / PM / Project Controls', note: 'The June 15 plan dates only 46,080 of 59,547 Purlins, leaving 13,467 without a planned site date. Tracker Purlins run June 23-July 16. Zero Purlin and Tracker Purlin shipment lines are customer-confirmed on site; planned dates must not be treated as available material.' },
      { title: 'COD recovery production targets', level: 'Critical', owner: 'Construction Management / All Mechanical Subs', note: 'Protecting November 9 COD requires linked recovery targets: 560 piles/day after June 22 using 7 ramming machines, ≥40 tracker rows/day, ≥2,500 purlins/day, and ≥3,000 modules/day after ramp, supported by continuous materials and QA turnover.' },
      { title: 'First complete tracker/material-kit opportunity', level: 'Critical', owner: 'GameChange / ECCS / PM', note: 'The first 11,520 Purlins are planned June 17, but Tracker Purlins do not begin until June 23. No completed tracker-row or module wave should be released until both material types are confirmed on site, installed, and the workfront is QA-released.' },
      { title: 'LATNOVVA production variance', level: 'Critical', owner: 'PM / LATNOVVA', note: 'The June 16 master workbook shows LATNOVVA at 5,716 installed versus 12,600 planned to date, a 6,884-pile variance and approximately 562/day required to complete its scope.' },
  { title: 'United Zone F readiness and ramming start', level: 'Critical', owner: 'PM / United', note: 'United mobilizes and starts pile-spot marking June 15, then begins pile ramming June 22. Confirm rig count, crew list, marking progress, access, safety onboarding, pile delivery, and workfront release before ramming.' },
      { title: 'DC BOS subcontract not awarded', level: 'Critical', owner: 'PM / Contracts', note: 'Electrical materials are purchased, but wiring/SCADA subcontract not yet awarded. LV cable/DC wiring must start the second week of July (Jul 7); award immediately to protect that mobilization date.' },
      { title: 'Michigan weather window', level: 'Watch', owner: 'Construction Mgmt', note: 'Outdoor work must be substantially complete before Nov 15. Recovery plans should preserve float before late-fall conditions.' }
    ]
  };

  const colors = {
    green: '#168a5b',
    greenDark: '#0c5f43',
    blue: '#2769a8',
    amber: '#b96f18',
    red: '#b53030',
    line: '#dbe3de',
    ink: '#18201f',
    muted: '#66716d'
  };

  function fmt(value) {
    return typeof value === 'number' ? value.toLocaleString('en-US') : value;
  }

  function statusClass(value) {
    return String(value).toLowerCase().replace(/\s+/g, '-');
  }

  function badge(value) {
    return `<span class="badge ${statusClass(value)}">${value}</span>`;
  }

  function renderScope() {
    document.getElementById('scopeGrid').innerHTML = data.scope.map((item) => `
      <article class="scope-card">
        <span class="label">${item.title}</span>
        <strong class="metric">${item.metric}</strong>
        <p>${item.note}</p>
      </article>
    `).join('');
  }

  function renderCivil() {
    document.getElementById('civilKpis').innerHTML = data.civilKpis.map((item) => `
      <article class="scope-card">
        <span class="label">${item.title}</span>
        <strong class="metric">${item.metric}</strong>
        <p>${item.note}</p>
      </article>
    `).join('');
    document.getElementById('civilBody').innerHTML = data.civilActivities.map((row) => `
      <tr>
        <td data-label="Civil activity"><strong>${row.activity}</strong></td>
        <td data-label="Responsible company"><strong>${row.company}</strong></td>
        <td data-label="% Complete">${row.done.toFixed(1)}%</td>
        <td data-label="Status">${badge(row.status)}</td>
      </tr>
    `).join('');
  }

  let photoIndex = 0;
  let heroLayer = 0;
  let photoTimer;

  function renderPhotos() {
    document.getElementById('photoGrid').innerHTML = data.photos.map((photo, index) => `
      <button class="photo-card ${index === photoIndex ? 'active' : ''}" type="button" data-photo-index="${index}" aria-label="Show ${photo.title}">
        <img src="${photo.src}" alt="${photo.title}">
        <span>${photo.date}</span>
      </button>
    `).join('');
    document.querySelectorAll('[data-photo-index]').forEach((button) => {
      button.addEventListener('click', () => setPhoto(Number(button.dataset.photoIndex), true));
    });
    setPhoto(0, false);
    startPhotoRotation();
  }

  function setPhoto(index, restart) {
    photoIndex = (index + data.photos.length) % data.photos.length;
    const photo = data.photos[photoIndex];
    document.getElementById('featuredPhoto').src = photo.src;
    document.getElementById('featuredPhotoDate').textContent = photo.date;
    document.getElementById('featuredPhotoTitle').textContent = photo.title;
    document.getElementById('featuredPhotoNote').textContent = photo.note;
    document.getElementById('heroCaption').textContent = `${photo.title} | ${photo.date}`;

    const slides = document.querySelectorAll('.hero-slide');
    heroLayer = (heroLayer + 1) % slides.length;
    slides[heroLayer].style.backgroundImage = `url("${photo.src}")`;
    slides.forEach((slide, slideIndex) => slide.classList.toggle('active', slideIndex === heroLayer));
    document.querySelectorAll('.photo-card').forEach((button) => {
      button.classList.toggle('active', Number(button.dataset.photoIndex) === photoIndex);
    });
    if (restart) startPhotoRotation();
  }

  function startPhotoRotation() {
    window.clearInterval(photoTimer);
    photoTimer = window.setInterval(() => setPhoto(photoIndex + 1, false), 5200);
  }

  let progressView = 'contractors';

  function renderProgressTable() {
    const head = document.getElementById('progressHead');
    const body = document.getElementById('progressBody');
    const rows = progressView === 'contractors' ? data.contractors : data.zones;

    if (progressView === 'contractors') {
      head.innerHTML = '<tr><th>Contractor</th><th>Scope</th><th>Installed</th><th>Remaining</th><th>% Done</th><th>Status</th><th>Note</th></tr>';
      body.innerHTML = rows.map((row) => `
        <tr>
          <td data-label="Contractor"><strong>${row.name}</strong><br><small>${row.zones}</small></td>
          <td data-label="Scope">${fmt(row.scope)}</td>
          <td data-label="Installed">${fmt(row.installed)}</td>
          <td data-label="Remaining">${fmt(row.remaining)}</td>
          <td data-label="% Done">${row.done.toFixed(1)}%</td>
          <td data-label="Status">${badge(row.status)}</td>
          <td data-label="Note">${row.note}</td>
        </tr>
      `).join('');
    } else {
      head.innerHTML = '<tr><th>Zone</th><th>Contractor</th><th>Scope</th><th>Installed</th><th>Remaining</th><th>% Done</th><th>Status</th><th>Note</th></tr>';
      body.innerHTML = rows.map((row) => `
        <tr>
          <td data-label="Zone"><strong>${row.zone}</strong></td>
          <td data-label="Contractor">${row.contractor}</td>
          <td data-label="Scope">${fmt(row.scope)}</td>
          <td data-label="Installed">${fmt(row.installed)}</td>
          <td data-label="Remaining">${fmt(row.remaining)}</td>
          <td data-label="% Done">${row.done.toFixed(1)}%</td>
          <td data-label="Status">${badge(row.status)}</td>
          <td data-label="Note">${row.note}</td>
        </tr>
      `).join('');
    }
    drawProgressChart(rows);
  }

  function drawProgressChart(rows) {
    const canvas = document.getElementById('progressChart');
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);

    const labels = rows.map((row) => row.name || row.zone);
    const max = Math.max(...rows.map((row) => row.scope));
    const left = 145;
    const top = 34;
    const rowH = Math.min(56, (height - 70) / rows.length);
    const chartW = width - left - 42;

    ctx.font = '700 18px system-ui';
    ctx.fillStyle = colors.ink;
    ctx.fillText(progressView === 'contractors' ? 'Installed vs. remaining piles' : 'Pile progress by zone', 24, 24);

    rows.forEach((row, index) => {
      const y = top + index * rowH + 18;
      const installedW = (row.installed / max) * chartW;
      const totalW = (row.scope / max) * chartW;
      ctx.fillStyle = colors.ink;
      ctx.font = '700 14px system-ui';
      ctx.fillText(labels[index], 24, y + 5);
      ctx.fillStyle = '#dfe8e3';
      ctx.fillRect(left, y - 10, totalW, 22);
      ctx.fillStyle = row.status === 'Critical' ? colors.red : row.status === 'At Risk' ? colors.amber : colors.green;
      ctx.fillRect(left, y - 10, installedW, 22);
      ctx.fillStyle = colors.muted;
      ctx.font = '12px system-ui';
      ctx.fillText(`${row.done.toFixed(1)}%`, left + Math.min(totalW + 8, chartW - 4), y + 5);
    });
  }

  function renderProduction() {
    document.getElementById('productionBody').innerHTML = data.production.map((row) => `
      <tr>
        <td data-label="Contractor / Scope"><strong>${row.name}</strong><br><small>${row.note}</small></td>
        <td data-label="Remaining">${row.remaining}</td>
        <td data-label="Required/day">${fmt(row.required)}</td>
        <td data-label="Observed/day">${fmt(row.observed)}</td>
        <td data-label="Assessment">${badge(row.status)}</td>
      </tr>
    `).join('');
  }

  function renderSuccessors() {
    document.getElementById('successorBody').innerHTML = data.successors.map((row) => `
      <tr>
        <td data-label="Successor activity"><strong>${row.activity}</strong></td>
        <td data-label="Dependency">${row.dependency}</td>
        <td data-label="Impact">${row.impact}</td>
        <td data-label="Mitigation">${row.mitigation}</td>
      </tr>
    `).join('');
  }

  function scheduleDate(date) {
    const match = String(date).match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (!match) return null;
    return Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  }

  function renderTimeline() {
    const day = 24 * 60 * 60 * 1000;
    const start = scheduleDate('2026-05-06');
    const end = scheduleDate('2026-11-15') + day;
    const span = end - start;
    const datedRows = data.schedule.map((row) => ({
      ...row,
      startTime: scheduleDate(row.start),
      endTime: scheduleDate(row.end)
    })).filter((row) => row.startTime !== null && row.endTime !== null);
    const months = [
      ['May 6', '2026-05-06'],
      ['Jun', '2026-06-01'],
      ['Jul', '2026-07-01'],
      ['Aug', '2026-08-01'],
      ['Sep', '2026-09-01'],
      ['Oct', '2026-10-01'],
      ['Nov 15', '2026-11-15']
    ];
    const axis = `
      <div class="timeline-axis" aria-hidden="true">
        <div></div>
        <div class="timeline-axis-track">${months.map(([label, date]) => {
          const position = ((scheduleDate(date) - start) / span) * 100;
          return `<span style="left:${position}%">${label}</span>`;
        }).join('')}</div>
        <div></div>
      </div>
    `;
    const rows = datedRows.map((row) => {
      const clippedStart = Math.max(start, row.startTime);
      const clippedEnd = Math.min(end, row.endTime + day);
      const left = ((clippedStart - start) / span) * 100;
      const width = Math.max(0, ((clippedEnd - clippedStart) / span) * 100);
      const duration = Math.round((row.endTime - row.startTime) / day) + 1;
      const markerClass = duration === 1 ? ' milestone-marker' : '';
      return `
        <div class="timeline-row">
          <div class="timeline-label">${row.activity}</div>
          <div class="track"><span class="bar ${statusClass(row.status)}${markerClass}" style="left:${left}%;width:${width}%" title="${duration} calendar day${duration === 1 ? '' : 's'}"></span></div>
          <div class="timeline-date">${row.start.slice(5, 10)} to ${row.end.slice(5, 10)}<small>${duration} day${duration === 1 ? '' : 's'}</small></div>
        </div>
      `;
    }).join('');
    document.getElementById('timeline').innerHTML = axis + rows;
  }

  function renderSchedule() {
    const filter = document.getElementById('scheduleFilter').value;
    const critical = ['Critical', 'At Risk', 'Watch', 'Material Hold'];
    const active = ['Active', 'Mobilizing', 'Confirmed'];
    const rows = data.schedule.filter((row) => {
      if (filter === 'critical') return critical.includes(row.status);
      if (filter === 'active') return active.includes(row.status);
      if (filter === 'planned') return row.status === 'Planned';
      return true;
    });
    document.getElementById('scheduleBody').innerHTML = rows.map((row) => `
      <tr>
        <td data-label="Activity"><strong>${row.activity}</strong></td>
        <td data-label="Contractor">${row.contractor}</td>
        <td data-label="Window">${row.start} to ${row.end}</td>
        <td data-label="Status">${badge(row.status)}</td>
        <td data-label="Key note">${row.note}</td>
      </tr>
    `).join('');
  }

  function drawPersonnelChart() {
    const canvas = document.getElementById('personnelChart');
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const pad = { left: 72, top: 56, right: 34, bottom: 74 };
    const chartW = width - pad.left - pad.right;
    const chartH = height - pad.top - pad.bottom;
    const rows = data.personnelOutlook;
    const max = 320;
    const points = rows.map((row, index) => ({
      ...row,
      x: pad.left + (index * chartW) / (rows.length - 1),
      y: pad.top + chartH - (row.people / max) * chartH
    }));
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);
    ctx.strokeStyle = colors.line;
    ctx.lineWidth = 1;
    [0, 100, 200, 300].forEach((value) => {
      const y = pad.top + chartH - (value / max) * chartH;
      ctx.beginPath();
      ctx.moveTo(pad.left, y);
      ctx.lineTo(width - pad.right, y);
      ctx.stroke();
      ctx.fillStyle = colors.muted;
      ctx.font = '11px system-ui';
      ctx.textAlign = 'right';
      ctx.fillText(String(value), pad.left - 10, y + 4);
    });
    const baseline = pad.top + chartH;
    const gradient = ctx.createLinearGradient(0, pad.top, 0, baseline);
    gradient.addColorStop(0, 'rgba(15, 118, 110, 0.34)');
    gradient.addColorStop(1, 'rgba(15, 118, 110, 0.04)');
    ctx.beginPath();
    ctx.moveTo(points[0].x, baseline);
    points.forEach((point) => ctx.lineTo(point.x, point.y));
    ctx.lineTo(points[points.length - 1].x, baseline);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.beginPath();
    points.forEach((point, index) => {
      if (index === 0) ctx.moveTo(point.x, point.y);
      else ctx.lineTo(point.x, point.y);
    });
    ctx.strokeStyle = '#0f766e';
    ctx.lineWidth = 5;
    ctx.lineJoin = 'round';
    ctx.stroke();
    points.forEach((point, index) => {
      ctx.beginPath();
      ctx.arc(point.x, point.y, index === 8 ? 7 : 4, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
      ctx.strokeStyle = '#0f766e';
      ctx.lineWidth = index === 8 ? 4 : 3;
      ctx.stroke();
      if (index % 4 === 0 || index === rows.length - 1) {
        ctx.fillStyle = colors.ink;
        ctx.font = '700 11px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText(point.week, point.x, height - 40);
        ctx.fillStyle = colors.muted;
        ctx.font = '10px system-ui';
        ctx.fillText(point.date, point.x, height - 22);
      }
    });
    const peak = points[8];
    ctx.fillStyle = '#b91c1c';
    ctx.font = '800 13px system-ui';
    ctx.textAlign = 'center';
    ctx.fillText('310 people', peak.x, peak.y - 14);
    ctx.fillStyle = colors.ink;
    ctx.font = '700 18px system-ui';
    ctx.textAlign = 'left';
    ctx.fillText('Estimated manpower (people)', 24, 28);
    ctx.fillStyle = colors.muted;
    ctx.font = '12px system-ui';
    ctx.fillText('Weekly planning estimate | May 25-Nov 16, 2026', width - 290, 28);
  }

  function renderMilestones() {
    document.getElementById('milestones').innerHTML = data.milestones.map((row) => `
      <article class="milestone">
        <div class="milestone-header">
          <strong>${row.name}</strong>
          ${badge(row.status)}
        </div>
        <p><strong>Target:</strong> ${row.target} | <strong>Forecast:</strong> ${row.forecast}</p>
        <p>${row.note}</p>
      </article>
    `).join('');
  }

  function renderRisks() {
    document.getElementById('riskGrid').innerHTML = data.risks.map((row) => `
      <article class="risk-card ${statusClass(row.level)}">
        <div class="milestone-header">
          <h3>${row.title}</h3>
          ${badge(row.level)}
        </div>
        <p>${row.note}</p>
        <small><strong>Owner:</strong> ${row.owner}</small>
      </article>
    `).join('');
  }

  function bindEvents() {
    document.getElementById('prevPhoto').addEventListener('click', () => setPhoto(photoIndex - 1, true));
    document.getElementById('nextPhoto').addEventListener('click', () => setPhoto(photoIndex + 1, true));
    document.querySelectorAll('[data-progress-view]').forEach((button) => {
      button.addEventListener('click', () => {
        progressView = button.dataset.progressView;
        document.querySelectorAll('[data-progress-view]').forEach((item) => item.classList.toggle('active', item === button));
        renderProgressTable();
      });
    });
    document.getElementById('scheduleFilter').addEventListener('change', renderSchedule);
    window.addEventListener('resize', () => {
      drawProgressChart(progressView === 'contractors' ? data.contractors : data.zones);
      drawPersonnelChart();
    });
  }

  renderScope();
  renderCivil();
  renderPhotos();
  renderProgressTable();
  renderProduction();
  renderSuccessors();
  renderTimeline();
  renderSchedule();
  drawPersonnelChart();
  renderMilestones();
  renderRisks();
  bindEvents();
}());
