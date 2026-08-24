#!/usr/bin/env python3
import re, sys
p='data.js'
t=open(p, encoding='utf-8').read()
orig=t
def rep(old,new,count=1):
    global t
    assert old in t, 'MISSING: '+old[:90]
    t=t.replace(old,new,count)

# 1. cache buster header
rep("// CACHE BUSTER: Aug 24, 2026 (rev c) - HARNESS DAILY SERIES ADDED (electricalByLine.harnessDiario + harnessScope + harnessNota) at Jose's request, with a LIVE RECONCILIATION against lineas.L1.harness on electrical-control.html section 6b. Harness is counted in CONJUNTOS/assemblies, never in linear feet. Basis remains Sat Aug 22 EOD; cable gate unchanged at 38,124 lf / 13.9%.",
"// CACHE BUSTER: Aug 24, 2026 (rev d) - MONDAY AUG 24 FIELD CUT APPLIED (WhatsApp export 15:48, partial day): trackers +60 (ECCS 30 Zone G + United 30 Area F) -> 2,002 (80.5%); modules +4,095 United Area F -> 113,445 (66.2%); LV +185 ft trunk -> 38,309 lf; HARNESS RECORD 39 lines / 117 strings -> 134 cum. Piles: unquantified minimal red-pile work in D - executed basis unchanged. Brumont filed no Monday report by the export time.")

# 2. control block
rep("asOf: 'Aug 22, 2026',\n piles:", "asOf: 'Aug 24, 2026 (15:48 field cut - partial day)',\n piles:")
rep("trackers: { installed: 1942, released: 296, releasedGS: 559, total: 2486, gate: '2026-08-30', gateLabel: 'Aug 30', required: 91, capacity: 97,",
    "trackers: { installed: 2002, released: 296, releasedGS: 559, total: 2486, gate: '2026-08-30', gateLabel: 'Aug 30', required: 97, capacity: 97,")
# byCrew string
m=re.search(r"byCrew: '<strong>Saturday Aug 22 closed NO rows on any crew\.</strong>.*?', wipRows: 16", t, re.S)
assert m
t=t.replace(m.group(0), "byCrew: '<strong>Monday Aug 24: 60 rows - production RESTARTED on two crews.</strong> ECCS 251 left of 1,811 @ 50/day (closed 30 in Zone G, 50 people, plus TP 21 and LBD 21 in E) \\u00b7 United 150 of 497 @ 30/day (closed 30 in Area F - the 30/day metronome returns) \\u00b7 Workforce 83 of 177 @ 17/day (<strong>no Monday report - the 16 tubed B5 rows are still open and the board cut it to 9</strong>). Per-crew requirement is over the 5 working days left to Aug 30.', wipRows: 16")
rep("wipEquivalent: 7.2, earnedEquivalent: 1949.2, earnedPct: 78.4,", "wipEquivalent: 7.2, earnedEquivalent: 2009.2, earnedPct: 80.8,")
rep("modules: { installed: 109350, total: 171470, gate: '2026-09-06', gateLabel: 'Sep 6', required: 5177,",
    "modules: { installed: 113445, total: 171470, gate: '2026-09-06', gateLabel: 'Sep 6', required: 5275,")
rep("electrical: { installed: 38124, total: 274720, gate: '2026-09-18', gateLabel: 'Sep 18', required: 10288, capacity: 4735,",
    "electrical: { installed: 38309, total: 274720, gate: '2026-09-18', gateLabel: 'Sep 18', required: 10746, capacity: 4735,")
rep("{ day: 'Aug 21', value: 3610 }, { day: 'Aug 22', value: 0 }\n ] },",
    "{ day: 'Aug 21', value: 3610 }, { day: 'Aug 22', value: 0 }, { day: 'Aug 24', value: 185 }\n ] },")
# SET control tile -> Aug 24 cut
m=re.search(r"set: \{ pct: 34\.3, gate: '2026-09-25', gateLabel: 'Sep 25', name: 'Substation \(SET\)', unit: '%', earnedPct: 34\.3, planToDate: 45, basis: '.*?' \},", t, re.S)
assert m, 'set tile'
t=t.replace(m.group(0), "set: { pct: 38.9, gate: '2026-09-25', gateLabel: 'Sep 25', name: 'Substation (SET)', unit: '%', earnedPct: 38.9, planToDate: 45, basis: 'SE tracker Aug 24 cut: <strong>38.9% overall - civil 89.6%, structural 36.6%, electrical 13.8%</strong>. <strong>Structural jumped 24.1 \\u2192 36.6 (+12.5) in one cut - the direct return on the night shift opened Aug 21 and Saturday working.</strong> 61 of 187 schedule activities complete; gap to ~45% plan-to-date narrowed 10.7 \\u2192 6.1 points. Remaining Greensol-procured equipment (SP transformer, grounding reactor, ABB metering transformers) still committed by Aug 30. Steel Delivery Complete still logged In Progress at 45 days late; Electromechanical Assembly 100% (planned Aug 17) still Pending.' },")

# 3. contractorScore - prepend Aug 24 rows, drop Aug 21 rows
new_rows = """ { date: 'Aug 24 Mon', contractor: 'United Services (modules)', trade: 'Modules', output: 4095, resource: '65 people - Area F', short: '<strong>4,095 in Area F - F PRODUCES AGAIN after the bearing remediation</strong>', unit: 'modules', perUnit: 63, criterion: 5275, critLabel: 'The best United day on record, and it lands in the zone that was blocked: <strong>a crew has executed the F1/F2 bearing remediation and only the correction report is owed (Maurin, Aug 24)</strong> - QA reinspection and formal release must follow before the block is closed on paper. East installed moves to 27,130; F holds the largest balance at 22,923. Required rises to 5,275/day over 11 working days.' },
 { date: 'Aug 24 Mon', contractor: 'United Services (racking)', trade: 'Trackers', output: 30, resource: 'Zone F crew', short: '30 rows Area F at 100% - <strong>the 30/day metronome returns</strong>', unit: 'rows', perUnit: 30, criterion: 30, critLabel: '347 cum of its 497 F share; Zone F stands 449/595 (75.5%), 150 rows left. At this pace United closes F around Aug 29-31.' },
 { date: 'Aug 24 Mon', contractor: 'ECCS', trade: 'Trackers', output: 30, resource: '50 people', short: '30 rows at 100% in Zone G - <strong>recovering the day-one rate</strong> + TP 21 + LBD 21 in E', unit: 'rows', perUnit: 30, criterion: 50, critLabel: 'Zone G moves 46 \\u2192 76 of 256 (29.7%). 251 rows left of its 1,811 against 50/day required to Aug 30; the 502 undriven G piles still cap the headroom. TP 436/615 \\u00b7 LBD 268/418.' },
 { date: 'Aug 24 Mon', contractor: 'ECCS (electrical)', trade: 'LV / DC', output: 185, resource: '23 people - A2/A3/A4', short: '<strong>HARNESS RECORD 39 lines / 117 strings - but cable again residual: 185 ft of trunk</strong>', unit: 'lf', perUnit: 8, criterion: 10746, critLabel: 'Fernando\\u2019s V2 report: 39 harness lines / 117 strings in A2 (16,890 ft of harness cable - consumption, never gate footage), cum <strong>134 of 4,972 assemblies</strong>. Gate cable: trunk Inv 03-419 100 ft + 03-418 85 ft concluded; <strong>homerun Inv 03-412 (900 ft) is in process and NOT counted</strong>; 03-417\\u2019s 1,850 ft was previously reported and only dressed on the messenger wire today. 5,000 zip ties delivered to the field; 24,000 more land Tuesday. Requirement rises to 10,746 lf/day.' },
 { date: 'Aug 24 Mon', contractor: 'United Services', trade: 'Piles', output: 0, resource: 'Restart crews forming', short: 'Manuel: red-pile work continued in D - <strong>\\u201cser\\u00e1 m\\u00ednimo el avance\\u201d, no quantity filed</strong>', unit: 'piles', perUnit: 0, criterion: 1766, critLabel: 'The restart day produced only minimal, unquantified red-pile driving in Zone D. The executed basis holds at 29,586 until a figure is filed (a reported count is a snapshot, never an estimate). <strong>The constraint set is unchanged: 4 rigs off site, crane at ZERO on the Aug 24 board, Zone D grading still open.</strong> 1,766 remain - about nine rig-days.' },
 { date: 'Aug 24 Mon', contractor: 'GreenSol (civil self-perform)', trade: 'Civil', output: 0, resource: 'Nolberi crew (8)', short: 'Inverter 1-3 trench backfill \\u00b7 <strong>C road crossing ducted and backfilled at Inv 6</strong> \\u00b7 Inv 9/11 penetrations \\u00b7 Zone D parking pad complete', unit: 'items', perUnit: 0, criterion: 1, critLabel: 'Zone A: trench backfill at Inverters 1, 2 and 3. Zone C: the north-south road crossing at Inverter 6 was opened, PVC installed and backfilled the same day. Zone D: gravel lift-and-removal continued and the parking area was completed. Zone E: cabinet penetrations drilled at the four DC cabinets of Inverter 9 and at Inverter 11.' },
"""
idx=t.find("contractorScore: [\n")
assert idx>0
ins=idx+len("contractorScore: [\n")
t=t[:ins]+new_rows+t[ins:]
# drop the Aug 21 rows (keep exactly Aug 24 + Aug 22)
t=re.sub(r"\n \{ date: 'Aug 21 Fri'.*?\},(?=\n)", "", t)

# 4. daily series appends + headers
rep("{ day: 'Aug 22', value: 0, target: 1766, unit: 'piles' }]", "{ day: 'Aug 22', value: 0, target: 1766, unit: 'piles' }, { day: 'Aug 24', value: 0, target: 1766, unit: 'piles' }]")
rep("{ day: 'Aug 22', value: 0, target: 78, unit: 'units' }]", "{ day: 'Aug 22', value: 0, target: 78, unit: 'units' }, { day: 'Aug 24', value: 60, target: 91, unit: 'units' }]")
rep("{ day: 'Aug 22', value: 768, target: 4838, unit: 'modules' }]", "{ day: 'Aug 22', value: 768, target: 4838, unit: 'modules' }, { day: 'Aug 24', value: 4095, target: 5177, unit: 'modules' }]")
rep("{ day: 'Aug 22', value: 0, target: 1, unit: 'seg' }]", "{ day: 'Aug 22', value: 0, target: 1, unit: 'seg' }, { day: 'Aug 24', value: 0, target: 1, unit: 'seg' }]")
rep("{ day: 'Aug 22', value: 0, target: 1, unit: 'bores' }]", "{ day: 'Aug 22', value: 0, target: 1, unit: 'bores' }, { day: 'Aug 24', value: 0, target: 1, unit: 'bores' }]")

# piles history header
m=re.search(r"latest: '<strong>Aug 22: ZERO - day 12\. Red piles landed Aug 21-22, but United turned in 4 rigs and D still needs grading</strong>'", t)
assert m
t=t.replace(m.group(0), "latest: '<strong>Aug 24: restart day produced only minimal, unquantified red-pile work in D - basis unchanged at 29,586</strong>'")
rep("period: 'Jun 18-Aug 8 measured days', minimum: 'Re-forecast owed - 1,766 remain and the front is STOPPED for red piles', above: 2, below: 51,",
    "period: 'Jun 18-Aug 8 measured days', minimum: 'Re-forecast owed - 1,766 remain; the restart is not yet real (rigs, crane, D grading)', above: 2, below: 52,")
# trackers history header
rep("minimum: '91 rows/day (required for Aug 30)', above: 8, below: 44, latest: '<strong>Aug 22: ZERO rows on every crew</strong> - the requirement is now 91/day over 6 working days against a demonstrated best of 97',",
    "minimum: '97 rows/day (required for Aug 30)', above: 8, below: 45, latest: '<strong>Aug 24: 60 rows (ECCS 30 in G + United 30 in F) - production restarted, still short of the 91 the day required</strong>; the requirement is now 97/day over 5 working days',")
# modules history header
rep("minimum: '5,177 modules/day (required for Sep 6)', above: 9, below: 36, latest: 'Aug 22: 768 - Brumont alone in Area E; required rises to 5,177/day over 12 working days',",
    "minimum: '5,275 modules/day (required for Sep 6)', above: 9, below: 37, latest: '<strong>Aug 24: 4,095 - all United in Area F, its best day on record, with F producing again after the bearing remediation</strong>; required 5,275/day over 11 working days',")

open(p,'w',encoding='utf-8').write(t)
print('patch1 ok, delta chars:', len(t)-len(orig))
