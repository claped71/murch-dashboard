#!/usr/bin/env python3
import re
p='data.js'
lines=open(p,encoding='utf-8').read().split('\n')

def esc(s):
    return s.replace('\u00b7','\\u00b7').replace('\u2019','\\u2019').replace('\u2014','\\u2014').replace('\u2192','\\u2192')

def repl_line(marker, newline):
    m=esc(marker)
    hits=[i for i,l in enumerate(lines) if m in l]
    assert len(hits)==1, f'{len(hits)} hits for {marker[:60]}'
    lines[hits[0]]=esc(newline)

def sub_in_line(marker, old, new):
    m=esc(marker)
    hits=[i for i,l in enumerate(lines) if m in l]
    assert len(hits)==1, f'{len(hits)} hits for {marker[:60]}'
    o=esc(old)
    assert o in lines[hits[0]], 'old not in line: '+old[:60]
    lines[hits[0]]=lines[hits[0]].replace(o, esc(new))

def insert_after(marker, newline):
    m=esc(marker)
    hits=[i for i,l in enumerate(lines) if m in l]
    assert len(hits)==1, f'{len(hits)} hits for {marker[:60]}'
    lines.insert(hits[0]+1, esc(newline))

# SAFETY
sub_in_line("safetyBasis:", "safetyBasis: '286 recordable-free days at the June close (Bethany Valdez, EHS Site Manager) plus 42 days to Aug 11. Two August first aids, neither recordable: Aug 4 (ankle, tall grass) and <strong>Aug 7 - torque-tube strike, RATED SERIOUS</strong> (notification 20260807_ACC_001). July KPIs still being compiled.',",
 "safetyBasis: '<strong>HSE PUBLICATION SUSPENDED ON THIS DASHBOARD (Jose Romero, VP of Construction, Aug 24): no HSE KPI pack has been issued since the JUNE close.</strong> No safety figure will be published here until the reporting duty is met - see the warning panel in the Health & Safety section.',")

# electricalByLine
repl_line("hoy: '2026-08-22', inicio: '2026-08-24',", " hoy: '2026-08-24', inicio: '2026-08-24',")
repl_line("cableHasta: '2026-08-22',", " cableHasta: '2026-08-24',")
repl_line("L1: { harness: 95, boxes: 93, homerun: 33523, trunk: 4601,",
 " L1: { harness: 134, boxes: 93, homerun: 33523, trunk: 4786, connInv: 0, connBox: 0, connMV: 0 },")
repl_line("{ d: '22 ago', v: 0, hr: 0, tr: 0 }",
 " { d: '22 ago', v: 0, hr: 0, tr: 0 },")
insert_after("{ d: '22 ago', v: 0, hr: 0, tr: 0 },",
 " { d: '24 ago', v: 185, hr: 0, tr: 185 }")
repl_line("{ d: '22 ago', l: 25, s: 75 }",
 " { d: '22 ago', l: 25, s: 75 },")
insert_after("{ d: '22 ago', l: 25, s: 75 },",
 " { d: '24 ago', l: 39, s: 117 }")
sub_in_line("harnessNota:", "Acumulado 95 de 4.972 conjuntos (1,9%).",
 "Acumulado 134 de 4.972 conjuntos (2,7%). <strong>24 ago: RECORD - 39 lineas / 117 strings en A2 (16.890 ft de cable de harness - consumo, nunca pies de puerta); 5.000 zip ties entregados en campo.</strong>")
sub_in_line("F: { modLeft: 27018, rows: 176 }", "F: { modLeft: 27018, rows: 176 }", "F: { modLeft: 22923, rows: 146 }")
sub_in_line("G: { modLeft: 18486, rows: 210 }", "G: { modLeft: 18486, rows: 210 }", "G: { modLeft: 18486, rows: 180 }")

# zones (trackers)
repl_line("scope: 595, installed: 419,",
 " { zone: 'Zone F', contractor: '<strong>United 497</strong> \\u00b7 ECCS 97', scope: 595, installed: 449, released: 0, releasedGS: 0, remaining: 146, done: 75.5, wipRows: 0, wipStep: null, wipEquiv: 0, earnedPct: 75.5, status: 'Critical', note: '<strong>449 of 595 (75.5%)</strong> - United 347 cum after Monday\\u2019s 30 (the metronome returned after its Saturday off), plus ECCS 102 (its F share closed). On this pace United closes F around Aug 29-31. <strong>The F1/F2 bearing remediation has been executed; the correction report, QA reinspection and formal release are owed before those rows stand clean.</strong>' },")
repl_line("scope: 256, installed: 46,",
 " { zone: 'Zone G', contractor: 'ECCS 231 \\u00b7 Workforce 25', scope: 256, installed: 76, released: 0, remaining: 180, done: 29.7, wipRows: 0, wipStep: null, wipEquiv: 0, earnedPct: 29.7, status: 'Active', note: '<strong>76 of 256 (29.7%) - Monday\\u2019s 30 recovers the day-one rate</strong> (30 \\u2192 16 \\u2192 0 \\u2192 30, 50 ECCS people). The 502 undriven G piles still cap the headroom, and the pile restart is not yet real - Monday produced only minimal unquantified red-pile work in D.' },")
repl_line("scope: 2486, installed: 1942, released: 296, releasedGS: 559, remaining: 544,",
 " { zone: 'TOTAL', contractor: '<strong>RE-CUT: ECCS 1,811 \\u00b7 United 497 \\u00b7 Workforce 177</strong>', scope: 2486, installed: 2002, released: 296, releasedGS: 559, remaining: 484, done: 80.5, wipRows: 16, wipStep: null, wipEquiv: 7.2, earnedPct: 80.8, status: 'Critical', note: '<strong>Aug 24: 60 rows - production RESTARTED on two crews (ECCS 30 in G, United 30 in F)</strong>, against the 91 the day required; the requirement is now <strong>97/day over the 5 working days to Aug 30</strong> (484 remaining) and the gate still needs a dated re-forecast, not a restatement. Workforce filed nothing again - the 16 tubed B5 rows are on a sixth day open with the crew cut to 9. <strong>The F1/F2 bearing remediation is executed, pending the correction report and QA release</strong>; D\\u2019s 136 rows stay locked behind 993 undriven piles. Client release still 296 - Luis asked Maurin on Monday exactly how many trackers stand released for panels.' },")

# modulesByZone
repl_line("scope: 41990, installed: 14972,",
 " { zone: 'Zone F', contractor: '<strong>United</strong> \\u00b7 EAST', scope: 41990, installed: 19067, remaining: 22923, done: 45.4, status: 'Critical', note: 'EAST \\u2014 United. <strong>Aug 24: +4,095, United\\u2019s best day on record - F is PRODUCING AGAIN after the bearing remediation</strong> (a crew corrected the F1/F2 bearings; the correction report, QA reinspection and formal release are owed - Maurin, Aug 24). Still the largest single balance on the project at 22,923.' },")
repl_line("scope: 171470, installed: 109350,",
 " { zone: 'TOTAL', contractor: 'WEST 1,643 left \\u00b7 <strong>EAST 56,382 left</strong>', scope: 171470, installed: 113445, remaining: 58025, done: 66.2, status: 'Critical', note: '<strong>Aug 24: 4,095 - all United in Area F, its best day on record and the day F unblocked.</strong> Brumont filed no Monday report by the 15:48 export - the West tail holds at 1,643 (A 421, C 900, E 116, EW 206). East balance 56,382: F 22,923 now open, <strong>G 18,486 still has no module front until racking gets there</strong>, B 7,199, D 7,774. 66.2% done; required 5,275/day over 11 working days.' },")

# moduleDivision sides
sub_in_line("side: 'WEST'", "scope: 87958, installed: 84613, remaining: 3345,", "scope: 87958, installed: 86315, remaining: 1643,")
sub_in_line("side: 'EAST'", "scope: 83512, installed: 14065, remaining: 69447,", "scope: 83512, installed: 27130, remaining: 56382,")

# rackingDivision byCrew
sub_in_line("{ crew: 'ECCS', scope: 1811,", "complete: 1485, remaining: 326, required: 37, demonstrated: 25,", "complete: 1560, remaining: 251, required: 50, demonstrated: 30,")
sub_in_line("{ crew: 'United Services', scope: 497,", "complete: 257, remaining: 240, required: 27, demonstrated: 30,", "complete: 347, remaining: 150, required: 30, demonstrated: 30,")
sub_in_line("{ crew: 'Workforce', scope: 177,", "required: 10,", "required: 17,")

# electricalTotal
repl_line("electricalTotal: {", " electricalTotal: {")
sub_in_line("basis: 'Weighted composite of the four electrical fronts by labour content',", "basis:", "basis:")
lines[[i for i,l in enumerate(lines) if "basis: 'Weighted composite of the four electrical fronts by labour content'" in l][0]-1]=" asOf: 'Aug 24, 2026',"
repl_line("{ name: 'LV / DC installation', weight: 45, gate: 13.9, earned: 12.0,",
 " { name: 'LV / DC installation', weight: 45, gate: 13.9, earned: 12.0, note: '274,720 lf denominator. <strong>Aug 24: 185 ft of trunk (Inv 03-419 + 03-418) - cable again residual - but a HARNESS RECORD: 39 lines / 117 strings in A2, cumulative 134 of 4,972 assemblies.</strong> The 900 ft homerun on Inv 03-412 is in process and not counted; 5,000 zip ties reached the field with 24,000 more due Tuesday. Cumulative cable 38,309 lf (13.9%); required 10,746 lf/day over 22 working days. <strong>The GreenSol self-perform crew started with 10 of its 20 electricians - the rest wait on tools and transport - and United\\u2019s signed LV mobilisation (~Aug 28) is not yet on site.</strong> TP 436/615 \\u00b7 LBD 268/418.' },")

# projectTotal
prj=[i for i,l in enumerate(lines) if l.strip()=="projectTotal: {"]
assert len(prj)==1
i=prj[0]
assert lines[i+1].strip()=="asOf: 'Aug 22, 2026',"
lines[i+1]=" asOf: 'Aug 24, 2026',"
assert lines[i+2].strip()=='gatePct: 74.0,'
lines[i+2]=' gatePct: 75.1,'
assert lines[i+3].strip()=='earnedPct: 75.2,'
lines[i+3]=' earnedPct: 76.4,'
repl_line("{ name: 'Trackers', weight: 22, gate: 78.1, earned: 78.4 },", " { name: 'Trackers', weight: 22, gate: 80.5, earned: 80.8 },")
repl_line("{ name: 'Modules', weight: 26, gate: 63.8, earned: 63.8 },", " { name: 'Modules', weight: 26, gate: 66.2, earned: 66.2 },")
sub_in_line("Weighted physical completion, same weighting as the client report", "<strong>Aug 22 closes at 74.0% gate / 75.2% earned.</strong>", "<strong>Aug 24 closes at 75.1% gate / 76.4% earned - +1.1 gate points in one partial day, the best day since Aug 5: 60 tracker rows lifted trackers 78.1 \\u2192 80.5 and United\\u2019s 4,095 lifted modules 63.8 \\u2192 66.2, while piles, cable and MV stayed flat - which is exactly the shape of the problem.</strong> Previously:")
sub_in_line("Weighted physical completion, same weighting as the client report", "74% overall sits on top of an Aug 30 tracker gate that needs 91 rows/day", "75% overall sits on top of an Aug 30 tracker gate that needs 97 rows/day")

# scope[]
sub_in_line("{ title: 'Mechanical BOS',", "Piles 94.4% \\u00b7 trackers 78.1% \\u00b7 modules 63.8%.", "Piles 94.4% \\u00b7 trackers 80.5% \\u00b7 modules 66.2%.")
sub_in_line("{ title: 'Electrical BOS',", "MV 74.7% \\u00b7 LV 38,124 lf", "MV 74.7% \\u00b7 LV 38,309 lf")

open(p,'w',encoding='utf-8').write('\n'.join(lines))
print('patch3b ok')
