#!/usr/bin/env python3
import re
p='data.js'
t=open(p,encoding='utf-8').read()
def esc(s):
    return s.replace('\u00b7','\\u00b7').replace('\u2019','\\u2019').replace('\u2014','\\u2014').replace('\u2192','\\u2192').replace('\u201c','\\u201c').replace('\u201d','\\u201d')
def rep(old,new,count=1):
    global t
    if old in t:
        t=t.replace(old,new,count); return
    o2,n2=esc(old),esc(new)
    assert o2 in t, 'MISSING: '+old[:100]
    t=t.replace(o2,n2,count)

# ---- SAFETY -> warning only (Jose's directive Aug 24) ----
m=re.search(r"safetyBasis: '.*?',\n", t, re.S)
assert m
t=t.replace(m.group(0), "safetyBasis: '<strong>HSE REPORTING SUSPENDED FROM THIS DASHBOARD BY DIRECTION OF THE VP OF CONSTRUCTION (Aug 24): no KPI pack has been issued since the JUNE close.</strong> See the warning panel - no safety figures will be published here until the reporting duty is met.',\n")

# ---- electricalByLine ----
rep("hoy: '2026-08-22', inicio: '2026-08-24',\n cableHasta: '2026-08-22',",
    "hoy: '2026-08-24', inicio: '2026-08-24',\n cableHasta: '2026-08-24',")
rep("L1: { harness: 95, boxes: 93, homerun: 33523, trunk: 4601, connInv: 0, connBox: 0, connMV: 0 },",
    "L1: { harness: 134, boxes: 93, homerun: 33523, trunk: 4786, connInv: 0, connBox: 0, connMV: 0 },")
rep("{ d: '21 ago', v: 3610, hr: 3610, tr: 0 },\n { d: '22 ago', v: 0, hr: 0, tr: 0 }\n ]",
    "{ d: '21 ago', v: 3610, hr: 3610, tr: 0 },\n { d: '22 ago', v: 0, hr: 0, tr: 0 },\n { d: '24 ago', v: 185, hr: 0, tr: 185 }\n ]")
rep("{ d: '22 ago', l: 25, s: 75 }\n ]", "{ d: '22 ago', l: 25, s: 75 },\n { d: '24 ago', l: 39, s: 117 }\n ]")
rep("harnessNota: 'Acumulado 95 de 4.972 conjuntos (1,9%).",
    "harnessNota: 'Acumulado 134 de 4.972 conjuntos (2,7%). <strong>24 ago: RECORD - 39 lineas / 117 strings en A2 (16.890 ft de cable de harness, consumo, nunca pies de puerta); 5.000 zip ties entregados en campo.</strong>")
rep("zonas: {\n A: { modLeft: 421, rows: 0 }, C: { modLeft: 900, rows: 0 }, E: { modLeft: 116, rows: 0 },\n EW: { modLeft: 206, rows: 0 }, F: { modLeft: 27018, rows: 176 }, B: { modLeft: 7199, rows: 21 },\n G: { modLeft: 18486, rows: 210 }, D: { modLeft: 7774, rows: 136, piles: 993 }\n }",
    "zonas: {\n A: { modLeft: 421, rows: 0 }, C: { modLeft: 900, rows: 0 }, E: { modLeft: 116, rows: 0 },\n EW: { modLeft: 206, rows: 0 }, F: { modLeft: 22923, rows: 146 }, B: { modLeft: 7199, rows: 21 },\n G: { modLeft: 18486, rows: 180 }, D: { modLeft: 7774, rows: 136, piles: 993 }\n }")

# ---- zones (trackers) ----
rep("{ zone: 'Zone F', contractor: '<strong>United 497</strong> · ECCS 97', scope: 595, installed: 419, released: 0, releasedGS: 0, remaining: 176, done: 70.4, wipRows: 0, wipStep: null, wipEquiv: 0, earnedPct: 70.4, status: 'Critical', note: '<strong>419 of 595 (70.4%)</strong> - United 317 cum, an ELEVENTH straight day at exactly 30/day, plus ECCS 102 (its F share closed). The metronome has not varied by a row; on this pace United closes F around Aug 28. United’s modules, however, moved off F to Zone B on Aug 21.' },",
    "{ zone: 'Zone F', contractor: '<strong>United 497</strong> · ECCS 97', scope: 595, installed: 449, released: 0, releasedGS: 0, remaining: 146, done: 75.5, wipRows: 0, wipStep: null, wipEquiv: 0, earnedPct: 75.5, status: 'Critical', note: '<strong>449 of 595 (75.5%)</strong> - United 347 cum after Monday’s 30 (the metronome returned after its Saturday off), plus ECCS 102 (its F share closed). On this pace United closes F around Aug 29-31. <strong>The F1/F2 bearing remediation has been executed; the correction report, QA reinspection and release are owed before those rows stand clean.</strong>' },")
rep("{ zone: 'Zone G', contractor: 'ECCS 231 · Workforce 25', scope: 256, installed: 46, released: 0, remaining: 210, done: 18.0, wipRows: 0, wipStep: null, wipEquiv: 0, earnedPct: 18.0, status: 'Active', note: '<strong>46 of 256 (18.0%) - but day two halved against day one (30 → 16).</strong> ECCS is working the 85.1% of G that already carries piles; the 502 undriven G piles still cap the headroom, and the Monday pile restart is what lifts it.' },",
    "{ zone: 'Zone G', contractor: 'ECCS 231 · Workforce 25', scope: 256, installed: 76, released: 0, remaining: 180, done: 29.7, wipRows: 0, wipStep: null, wipEquiv: 0, earnedPct: 29.7, status: 'Active', note: '<strong>76 of 256 (29.7%) - Monday’s 30 recovers the day-one rate</strong> (30 → 16 → 0 → 30). ECCS (50 people) is working the 85.1% of G that already carries piles; the 502 undriven G piles still cap the headroom, and the pile restart is still not real - Monday produced only minimal unquantified red-pile work in D.' },")

m=re.search(r"\{ zone: 'TOTAL', contractor: '<strong>RE-CUT: ECCS 1,811 \\u00b7 United 497 \\u00b7 Workforce 177</strong>', scope: 2486, installed: 1942.*?' \},", t, re.S)
assert m, 'zones total'
t=t.replace(m.group(0), "{ zone: 'TOTAL', contractor: '<strong>RE-CUT: ECCS 1,811 \\u00b7 United 497 \\u00b7 Workforce 177</strong>', scope: 2486, installed: 2002, released: 296, releasedGS: 559, remaining: 484, done: 80.5, wipRows: 16, wipStep: null, wipEquiv: 7.2, earnedPct: 80.8, status: 'Critical', note: '<strong>Aug 24: 60 rows - production restarted on two crews (ECCS 30 in G, United 30 in F)</strong>, against the 91 the day required; the requirement is now <strong>97/day over the 5 working days to Aug 30</strong> (484 remaining) and the gate still needs a dated re-forecast, not a restatement. Workforce filed nothing again - the 16 tubed B5 rows are on a sixth day open with the crew cut to 9. <strong>The F1/F2 bearing remediation is executed, pending the correction report and QA release</strong>; D\\u2019s 136 rows stay locked behind 993 undriven piles. Client release still 296 - Luis asked Maurin on Monday exactly how many trackers stand released for panels.' },\n ],", 1)

# ---- modulesByZone ----
rep("{ zone: 'Zone F', contractor: '<strong>United</strong> · EAST', scope: 41990, installed: 14972, remaining: 27018, done: 35.7, status: 'Critical', note: 'EAST — United. <strong>The zero-module days in F are now explained and it is a QUALITY problem, not a front-map one: United reports racking in F1 and F2 OUT OF TOLERANCE ON THE BEARINGS, preventing module installation in those blocks</strong> (Vern Ray, Aug 22). This is the largest single balance on the project - 27,018, 43% of everything left - and it is blocked behind rework on rows already counted complete.' },",
    "{ zone: 'Zone F', contractor: '<strong>United</strong> · EAST', scope: 41990, installed: 19067, remaining: 22923, done: 45.4, status: 'Critical', note: 'EAST — United. <strong>Aug 24: +4,095, United’s best day on record - F is PRODUCING AGAIN after the bearing remediation</strong> (a crew corrected the F1/F2 bearings; the correction report, QA reinspection and release are owed - Maurin, Aug 24). Still the largest single balance on the project at 22,923.' },")
m=re.search(r"\{ zone: 'TOTAL', contractor: 'WEST 1,643 left \\u00b7 <strong>EAST 60,477 left</strong>'.*?' \},", t, re.S)
assert m, 'modules total'
t=t.replace(m.group(0), "{ zone: 'TOTAL', contractor: 'WEST 1,643 left \\u00b7 <strong>EAST 56,382 left</strong>', scope: 171470, installed: 113445, remaining: 58025, done: 66.2, status: 'Critical', note: '<strong>Aug 24: 4,095 - all United in Area F, its best day on record and the day F unblocked.</strong> Brumont filed no Monday report by the 15:48 export - the West tail holds at 1,643 (A 421, C 900, E 116, EW 206). East balance 56,382: F 22,923 now open, <strong>G 18,486 still has no module front until racking gets there</strong>, B 7,199, D 7,774. 66.2% done; required 5,275/day over 11 working days.' },", 1)

# ---- moduleDivision sides re-base ----
rep("{ side: 'WEST', zones: 'A · C · E · EW', crews: 'Workforce (20 MW) + Brumont (30 MW)', scope: 87958, installed: 84613, remaining: 3345, mw: 52.3,",
    "{ side: 'WEST', zones: 'A · C · E · EW', crews: 'Workforce (20 MW) + Brumont (30 MW)', scope: 87958, installed: 86315, remaining: 1643, mw: 52.3,")
rep("{ side: 'EAST', zones: 'B · D · F · G', crews: 'United Services (50 MW) + Brumont reinforcement', scope: 83512, installed: 14065, remaining: 69447, mw: 49.7,",
    "{ side: 'EAST', zones: 'B · D · F · G', crews: 'United Services (50 MW) + Brumont reinforcement', scope: 83512, installed: 27130, remaining: 56382, mw: 49.7,")

# ---- rackingDivision byCrew ----
rep("{ crew: 'ECCS', scope: 1811, complete: 1485, remaining: 326, required: 37, demonstrated: 25,",
    "{ crew: 'ECCS', scope: 1811, complete: 1560, remaining: 251, required: 50, demonstrated: 30,")
rep("{ crew: 'United Services', scope: 497, complete: 257, remaining: 240, required: 27, demonstrated: 30,",
    "{ crew: 'United Services', scope: 497, complete: 347, remaining: 150, required: 30, demonstrated: 30,")
rep("{ crew: 'Workforce', scope: 177, complete: 94, remaining: 83, required: 10, demonstrated: 0,",
    "{ crew: 'Workforce', scope: 177, complete: 94, remaining: 83, required: 17, demonstrated: 0,")

# ---- electricalTotal ----
rep("electricalTotal: {\n asOf: 'Aug 22, 2026',", "electricalTotal: {\n asOf: 'Aug 24, 2026',")
m=re.search(r"\{ name: 'LV / DC installation', weight: 45, gate: 13\.9, earned: 12\.0, note: '.*?' \},", t, re.S)
assert m, 'lv comp'
t=t.replace(m.group(0), "{ name: 'LV / DC installation', weight: 45, gate: 13.9, earned: 12.0, note: '274,720 lf denominator. <strong>Aug 24: 185 ft of trunk (Inv 03-419 + 03-418) - cable again residual - but a HARNESS RECORD: 39 lines / 117 strings in A2, cumulative 134 of 4,972 assemblies.</strong> The 900 ft homerun on Inv 03-412 is in process and not counted; 5,000 zip ties reached the field with 24,000 more due Tuesday. Cumulative cable 38,309 lf (13.9%); required 10,746 lf/day over 22 working days. <strong>The self-perform crew started with 10 of its 20 electricians - the rest wait on tools and transport - and United\\u2019s signed LV mobilisation (~Aug 28) is not yet on site.</strong> TP 436/615 \\u00b7 LBD 268/418.' },")

# ---- projectTotal ----
rep("projectTotal: {\n asOf: 'Aug 22, 2026',\n gatePct: 74.0,\n earnedPct: 75.2,", "projectTotal: {\n asOf: 'Aug 24, 2026',\n gatePct: 75.1,\n earnedPct: 76.4,")
rep("{ name: 'Trackers', weight: 22, gate: 78.1, earned: 78.4 },", "{ name: 'Trackers', weight: 22, gate: 80.5, earned: 80.8 },")
rep("{ name: 'Modules', weight: 26, gate: 63.8, earned: 63.8 },", "{ name: 'Modules', weight: 26, gate: 66.2, earned: 66.2 },")
rep("<strong>Aug 22 closes at 74.0% gate / 75.2% earned.</strong>", "<strong>Aug 24 closes at 75.1% gate / 76.4% earned - +1.1 gate points in one partial day, the best day since Aug 5:</strong> 60 tracker rows lifted trackers 78.1 \\u2192 80.5 and United\\u2019s 4,095 lifted modules 63.8 \\u2192 66.2, while piles, cable and MV stayed flat - which is exactly the shape of the problem. Previously:")
rep("74% overall sits on top of an Aug 30 tracker gate that needs 91 rows/day", "75% overall sits on top of an Aug 30 tracker gate that needs 97 rows/day")

# ---- scope[] ----
rep("{ title: 'Mechanical BOS', metric: '31,352 piles · 2,486 trackers', note: 'Piles 94.4% · trackers 78.1% · modules 63.8%.' },",
    "{ title: 'Mechanical BOS', metric: '31,352 piles · 2,486 trackers', note: 'Piles 94.4% · trackers 80.5% · modules 66.2%.' },")
rep("{ title: 'Electrical BOS', metric: 'MV 74.7% · LV 38,124 lf', note:", "{ title: 'Electrical BOS', metric: 'MV 74.7% · LV 38,309 lf', note:")

open(p,'w',encoding='utf-8').write(t)
print('patch3 ok')
