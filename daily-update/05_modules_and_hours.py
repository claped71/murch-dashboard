# -*- coding: utf-8 -*-
import io
P = ""
def rd(p):
    with io.open(P+p, encoding='utf-8', newline='') as f: return f.read()
def wr(p, s):
    with io.open(P+p, 'w', encoding='utf-8', newline='') as f: f.write(s)
def rep(s, old, new):
    c=s.count(old); assert c==1, "x%d: %.85r" % (c, old)
    return s.replace(old, new, 1)

D = rd("data.js")

# ---------- cache buster ----------
lines = D.split(u'\n'); i=[k for k,l in enumerate(lines) if l.startswith(u'// CACHE BUSTER ')][0]
lines[i] = (
 u"// CACHE BUSTER 20261028a - MODULES COMPLETE + NEW MAN-HOUR READING + ENERGISED TESTING UNDER WAY. Sources this run are the site WhatsApp group only "
 u"(no new daily report, and the link to the Mac is down so no SharePoint workbooks) - so PRODUCTION QUANTITIES ARE UNCHANGED and the cable/MV basis stays Tue Oct 20. "
 u"(1) MODULES 100%: the Construction Manager posted '100% de paneles instalados' with a field photograph on Oct 24. The 988 that were pending Owner delivery are in. "
 u"Area D 6,786 -> 7,774, TOTAL 170,482 -> 171,470. Modules component 99.4 -> 100, PROJECT 98.49 -> 98.65. The module line moves out of the pending procurement table. "
 u"(2) MAN-HOURS 239,337 -> 246,745 on the EHS banner photographed Oct 23. +7,408 over 7 working days = 1,058 h/day, about 106 people a day at 10 h - UP from the 87 "
 u"implied across Oct 6-15. The site is NOT demobilising; it is staffing up for commissioning. "
 u"(3) ENERGISED TESTING HAS STARTED. Partial discharge on sections A and C (11A) finishing Oct 24, which releases the rest of the plant for work. VLF starts on 12A "
 u"(sections F and G) Oct 25, then 12B (B, D, E inverter 15 only, F inverters 16 and 17 only). VLF on 11A is already DONE AND DELIVERED to the Owner - so the register's "
 u"1 of 4 is CORRECT, not a reporting gap, and 11B's VLF state is not stated. Polarity finishes at E19/E20 (inverters 14 and 15) then moves to zone B (inverters 7 and 8) "
 u"- straight onto 12B, which holds 101 of the 104 open polarity records. "
 u"(4) COORDINATION RISK RECORDED: the testing subcontractor asked to be told in advance of energised work so its crews can be warned before the emergency group is used.")
D = u'\n'.join(lines)

# ---------- control header ----------
D = rep(D, u'"asOfShort": "Oct 20 — United +7,375 lf (cable 90.7%) · falla MV INV9-INV11 en 11B · proyecto 98.5%",',
           u'"asOfShort": "Oct 24 — MÓDULOS 100% · 246,745 h · ensayos en tensión en marcha · proyecto 98.65%",')
D = rep(D, u'"asOfISO": "2026-10-20",', u'"asOfISO": "2026-10-24",')

NEW = (u"<strong>Oct 24 — MODULES ARE DONE. 171,470 of 171,470. The Construction Manager posted the field photograph and the words '100% de paneles instalados'; "
 u"the 988 that had been waiting on Owner delivery are installed. Area D closes at 7,774 of 7,774 and the modules component moves 99.4 → 100. PROJECT 98.49 → 98.65. "
 u"With piles, trackers, modules, civil and the substation all at 100, what is left on this project is 12B's cable and the test and evidence paperwork.</strong> "
 u"<strong>Oct 24 — ENERGISED TESTING IS UNDER WAY, and that changes how the site has to be run. Partial discharge on sections A and C finishes today, which releases "
 u"the rest of the plant for work. VLF starts tomorrow on 12A (sections F and G), then 12B (B, D, E inverter 15 only, F inverters 16 and 17 only). "
 u"VLF on 11A is ALREADY DONE AND DELIVERED to the Owner — so the register's 1 of 4 is correct and is NOT another reporting gap; 11B's VLF state is not stated. "
 u"Polarity finishes first thing at E19/E20 (inverters 14 and 15) and then moves to zone B, inverters 7 and 8 — straight onto 12B, which carries 101 of the 104 "
 u"open polarity records and had five stations at zero.</strong> "
 u"<strong>Oct 23 — MAN-HOURS 246,745 on the banner, up 7,408 from the Oct 15 reading. Over seven working days that is 1,058 h a day, about 106 people at 10 h — "
 u"UP from the 87 implied across Oct 6–15. The site is not winding down; it is staffing up for commissioning.</strong> "
 u"<strong>NO NEW PRODUCTION REPORT THIS RUN. There is no daily report after Oct 20 and the link to the project files is down, so cable, MV terminations and the "
 u"electrical composites are UNCHANGED and still read through Tuesday Oct 20. Only the three items above moved.</strong> ")
D = rep(D, u'"asOf": "<strong>Oct 20 — THE BIGGEST CABLE DAY', u'"asOf": "' + NEW + u'<strong>Oct 20 — THE BIGGEST CABLE DAY')

# ---------- man-hours ----------
D = rep(D, u'"safetyHours": { "value": 239337, "asOf": "Oct 15, 2026", "asOfISO": "2026-10-15", "source": "site safety banner, EHS", "prev": { "value": 231471, "asOf": "Oct 5, 2026", "asOfISO": "2026-10-05" },',
           u'"safetyHours": { "value": 246745, "asOf": "Oct 23, 2026", "asOfISO": "2026-10-23", "source": "site safety banner, EHS", "prev": { "value": 239337, "asOf": "Oct 15, 2026", "asOfISO": "2026-10-15" },')
D = rep(D, u'   { "d": "Oct 15", "c": 239337, "src": "site safety banner" }\n  ],',
           u'   { "d": "Oct 15", "c": 239337, "src": "site safety banner" },\n'
           u'   { "d": "Oct 23", "c": 246745, "src": "site safety banner" }\n  ],')
D = rep(D, u'"impliedHeadcount": 87,', u'"impliedHeadcount": 106,')
D = rep(D, u'"impliedNote": "7,866 man-hours between the two reported readings over 9 working days (Mon-Sat) at 10 h/day = 87 people per day across Oct 6-15. The headcount board has not been issued since Sep 17, when it read 202; this is the site demobilising into close-out, and it is the only current headcount the reported data supports." },',
           u'"impliedNote": "7,408 man-hours between the Oct 15 and Oct 23 banner readings over 7 working days (Mon-Sat) at 10 h/day = about 106 people a day across Oct 16-23. THAT IS UP FROM THE 87 IMPLIED ACROSS OCT 6-15, NOT DOWN \\u2014 the site is staffing up for commissioning and energised testing, not demobilising into close-out as the previous reading suggested. The headcount board itself has not been issued since Sep 17, when it read 202, so this remains the only current headcount the reported data supports." },')

D = rep(D, u'"safetyBasis": "Site safety banner photographed Oct 15, 2026: 239,337 safe man-work hours without recordable accidents (up from 231,471 at Oct 5).',
           u'"safetyBasis": "Site safety banner photographed Oct 23, 2026: 246,745 safe man-work hours without recordable accidents (up from 239,337 at Oct 15).')

# ---------- modules complete ----------
D = rep(D, u'"installed": 170482,', u'"installed": 171470,')
D = rep(D, u'"gateLabel": "Sep 6 — MISSED · 988 pending delivery",', u'"gateLabel": "Sep 6 — MISSED · installation COMPLETE Oct 24",')
D = rep(D, u'"required": 988,', u'"required": 0,')
D = rep(D, u'"note": "Piles 100% · trackers 100% (punch list only) · modules 99.4% (988 pending delivery)."',
           u'"note": "Piles 100% · trackers 100% (punch list only) · modules 100% (complete Oct 24)."')
D = rep(D, u"{ zone: 'Zone D', contractor: '<strong>United</strong> \\u00b7 EAST', scope: 7774, installed: 6786, remaining: 988, done: 87.3, status: 'At Risk', note: '<strong>Oct 9: t",
           u"{ zone: 'Zone D', contractor: '<strong>United</strong> \\u00b7 EAST', scope: 7774, installed: 7774, remaining: 0, done: 100.0, status: 'Complete', note: '<strong>Oct 24: COMPLETE \\u2014 7,774 of 7,774. The 988 modules that had been waiting on Owner delivery are installed; the Construction Manager posted the field photograph and \\u201c100% de paneles instalados\\u201d. This was the last open module scope on the project.</strong> <strong>Oct 9: t")
D = rep(D, u"{ zone: 'TOTAL', contractor: 'All areas installed · <strong>988 pending delivery</strong> (Owner supply)', scope: 171470, installed: 170482, remaining: 988, done: 99.4,",
           u"{ zone: 'TOTAL', contractor: '<strong>ALL AREAS COMPLETE</strong> \\u00b7 171,470 of 171,470 (Oct 24)', scope: 171470, installed: 171470, remaining: 0, done: 100.0,")
D = rep(D, u"status: 'At Risk', note: '<strong>170,482 of 171,470 (99.4%)",
           u"status: 'Complete', note: '<strong>Oct 24 \\u2014 MODULE INSTALLATION IS COMPLETE: 171,470 of 171,470. The Construction Manager posted the field photograph and the words \\u201c100% de paneles instalados\\u201d. The 988 that had been pending Owner delivery are in, all of them in Area D.</strong> <strong>PRIOR: 170,482 of 171,470 (99.4%)")

# ---------- project total ----------
D = rep(D, u'"name": "Modules",\n   "weight": 26,\n   "gate": 99.4,\n   "earned": 99.4',
           u'"name": "Modules",\n   "weight": 26,\n   "gate": 100,\n   "earned": 100')
D = rep(D, u'"earnedPct": 98.49,', u'"earnedPct": 98.65,')
D = rep(D, u'"asOf": "Oct 13, 2026 (executed through Mon Oct 12; piles and trackers complete; modules held at the CM count — 988 pending delivery, all in Area D, re-confirmed on th',
           u'"asOf": "Oct 24, 2026 (piles, trackers, MODULES, civil and the substation all complete; cable and MV executed through Tue Oct 20. PRIOR basis: Oct 13, modules held at the CM count — 988 pending delivery, all in Area D, re-confirmed on th')
D = rep(D, u'"modLeft": 988,', u'"modLeft": 0,')

wr("data.js", D)
print("pass 1 OK")
