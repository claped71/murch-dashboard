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

# ---- pvFieldTests: testing is live now ----
D = rep(D, u'"asOf": "Oct 17, 2026 — PV field-test supervision register, daily report issued by the field-test supervisor"',
           u'"asOf": "Register Oct 17, 2026 — plus the site coordination of Oct 24: energised testing is now running against it"')
D = rep(D, u'"headline": "IV curve 0 of 419 — BLOCKED ON IRRADIANCE, not on crews. Polarity 315 of 419 (75.2%), 11B closed at 110 of 110; 12B holds 101 of the 104 open records."',
           u'"headline": "Testing is live: polarity moving onto 12B, VLF starts 12A then 12B, partial discharge closing on 11A. IV curve still 0 of 419, irradiance-blocked."')
D = rep(D, u'{ "t": "VLF + battery bank", "scope": 4, "done": 1, "open": 3, "pct": 25.0, "unit": "circuits" }',
           u'{ "t": "VLF + battery bank — 11A delivered, 12A starts Oct 25", "scope": 4, "done": 1, "open": 3, "pct": 25.0, "unit": "circuits" }')

# ---- commissioning: the live test sequence ----
D = rep(D, u'"asOf": "Oct 21 — SET MC ACHIEVED Oct 20 · RTE Nov 10",',
           u'"asOf": "Oct 24 — energised testing running · SET MC achieved Oct 20 · RTE Nov 10",')
D = rep(D, u'"blockers": "<strong>Oct 21 RULING',
           u'"blockers": "<strong>Oct 24 \\u2014 ENERGISED TESTING HAS STARTED AND THE SEQUENCE IS SET. Partial discharge on sections A and C (11A) finishes Oct 24, '
           u'and closing it RELEASES THE REST OF THE PLANT FOR WORK. VLF begins Oct 25 on 12A (sections F and G), then moves to 12B (sections B and D, section E for '
           u'inverter 15 only, section F for inverters 16 and 17 only). The testing contractor was asked to prioritise 11A and 11B.</strong> '
           u'<strong>VLF ON 11A IS ALREADY DONE AND DELIVERED TO THE OWNER \\u2014 so the register\\u2019s 1 of 4 is CORRECT and is not another reporting gap. '
           u'11B\\u2019s VLF state is not stated and should be asked for directly.</strong> '
           u'<strong>Polarity finishes first thing at E19 and E20 (inverters 14 and 15) and then moves to zone B, inverters 7 and 8 \\u2014 that is straight onto 12B, '
           u'which carries 101 of the 104 open polarity records and had INV-07, 08, 10, 16 and 17 all at zero. The right front.</strong> '
           u'<strong>COORDINATION: the testing subcontractor has asked to be told in advance of energised work so it can warn its own crews before the emergency group '
           u'is used. With live MV on site that is a safety interface, not an administrative courtesy.</strong> '
           u'<strong>Oct 21 RULING')

# ---- procurement: modules out of the pending table ----
i = D.index(u"  { item: 'Modules to finish installation',")
j = D.index(u"\n", i) + 1
D = D[:i] + D[j:]
D = rep(D, u' received: [\n',
           u' received: [\n'
           u"  { item: 'Modules \\u2014 the last 988 (Owner supply)', date: 'Installed Oct 24', "
           u"releases: 'Module installation CLOSED at 171,470 of 171,470 \\u2014 the last open module scope on the project, all of it in Area D' },\n")

# ---- risks: energised testing to the top, modules risk retired ----
D = rep(D, u' risks: [\n {\n  "headline": "MV cable fault between INV9 and INV11',
 u' risks: [\n {\n  "headline": "Energised testing is live across the plant \\u2014 the site is now a coordination problem, not a production one",\n'
 u'  "title": "Site coordination, Oct 24, 2026 \\u2014 partial discharge, VLF and polarity all running at once.",\n'
 u'  "note": "<strong>Partial discharge on sections A and C closes Oct 24 and releases the rest of the plant. VLF starts Oct 25 on 12A (F and G), then 12B '
 u'(B, D, E for inverter 15 only, F for inverters 16 and 17 only). Polarity finishes at E19/E20 then moves to zone B, inverters 7 and 8.</strong> '
 u'<strong>THE EXPOSURE IS NOT SCHEDULE, IT IS THE INTERFACE. Live MV sections, a testing contractor and installation crews are now working the same areas on the same '
 u'days. The testing sub has already asked to be notified in advance so it can warn its people BEFORE the emergency group is used \\u2014 which means the current '
 u'notice path is the emergency group, and that is the wrong instrument.</strong> '
 u'<strong>ACTION: fix a single daily energisation notice naming the sections going live the next day, issued to every contractor on site before the shift, '
 u'and keep the emergency group for emergencies. This costs nothing and it is the one control that prevents the incident this phase is exposed to.</strong>",\n'
 u'  "level": "critical",\n  "owner": "Commissioning + EHS"\n },\n'
 u' {\n  "headline": "MV cable fault between INV9 and INV11')

D = rep(D, u'"headline": "Modules: 988 pending delivery', u'"headline": "RETIRED Oct 24 \\u2014 modules complete. Prior: 988 pending delivery')
wr("data.js", D)

# ---------------- index.html ----------------
H = rd("index.html")
H = rep(H, u'| Thru <strong>Tue Oct 20</strong> | LV <strong>90.7%</strong>',
           u'| Thru <strong>Tue Oct 20</strong> (cable/MV) | <strong style="color:#0c6b48">MODULES 100%</strong> &middot; LV <strong>90.7%</strong>')
H = rep(H, u'&middot; project <strong>98.5%</strong></p>', u'&middot; project <strong>98.65%</strong></p>')
H = rep(H, u'<strong style="color:#0c6b48">0 recordable &middot; 239,337 h</strong>',
           u'<strong style="color:#0c6b48">0 recordable &middot; 246,745 h</strong>')
H = rep(H, u'<summary>Oct 20 &middot; producci&oacute;n, falla MV y permisos</summary>',
           u'<summary>Oct 24 &middot; m&oacute;dulos 100% y ensayos en tensi&oacute;n</summary>')
H = rep(H, u'          <li><strong>20 oct &mdash; EL MAYOR D&Iacute;A DE CABLE DESDE SEPTIEMBRE',
 u'          <li><strong>24 oct &mdash; M&Oacute;DULOS AL 100%: 171,470 de 171,470.</strong> El CM lo ha publicado con foto de campo. '
 u'Los 988 que esperaban entrega del Owner est&aacute;n instalados; el &aacute;rea D cierra en 7,774 de 7,774. '
 u'<strong>Con pilotes, trackers, m&oacute;dulos, civil y SET al 100%, lo que queda es el cable del 12B y el papeleo de ensayos.</strong> Proyecto <strong>98.65%</strong>.</li>\n'
 u'          <li><strong>ENSAYOS EN TENSI&Oacute;N EN MARCHA.</strong> Descargas parciales en A y C (11A) terminan hoy y <strong>liberan el resto de la planta</strong>. '
 u'Ma&ntilde;ana VLF en 12A (F y G) y despu&eacute;s 12B (B, D, E s&oacute;lo INV15, F s&oacute;lo INV16/17). '
 u'La VLF del 11A <strong>ya est&aacute; hecha y entregada al cliente</strong>, as&iacute; que el 1 de 4 del registro es correcto, no una laguna. '
 u'Polaridades acaban en E19/E20 (INV14 y 15) y pasan a la zona B (INV7 y 8): justo al 12B, que concentra 101 de los 104 registros abiertos.</li>\n'
 u'          <li><strong>20 oct &mdash; EL MAYOR D&Iacute;A DE CABLE DESDE SEPTIEMBRE')
H = rep(H, u'data.js?v=20261027b', u'data.js?v=20261028a')
wr("index.html", H)
print("pass 2 OK")
