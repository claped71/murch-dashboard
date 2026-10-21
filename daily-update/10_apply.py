# -*- coding: utf-8 -*-
# Oct 21 2026 commissioning-phase update. Anchored edits only; output hashes are
# verified by the workflow against daily-update/expected.sha256 before any commit.
# The data.js cache-buster line is handled by 05_cachebuster.py, which runs first.
import io

def rd(p):
    with io.open(p, encoding='utf-8', newline='') as f:
        return f.read()

def wr(p, s):
    with io.open(p, 'w', encoding='utf-8', newline='') as f:
        f.write(s)

def rep(s, old, new):
    c = s.count(old)
    assert c == 1, 'expected 1 occurrence, got %d for: %.80r' % (c, old)
    return s.replace(old, new)

def span(s, a, b, new):
    assert s.count(a) == 1, 'start anchor not unique: %.80r' % a
    i = s.index(a)
    j = s.index(b, i + len(a))
    return s[:i] + new + s[j:]

# ---------------------------------------------------------------- data.js
D = rd('data.js')

D = rep(D, u'{ "t": "IV curve test", "scope": 419',
           u'{ "t": "IV curve test (irradiance-blocked)", "scope": 419')

D = rep(D,
    u'"IV curve: 0 of 419. Polarity 315 of 419 (75.2%) with 11B applied closed at 110 of 110. 12B carries 101 of the 104 open records on its own."',
    u'"IV curve 0 of 419 — BLOCKED ON IRRADIANCE, not on crews. Polarity 315 of 419 (75.2%), 11B closed at 110 of 110; 12B holds 101 of the 104 open records."')

D = rep(D, u'"forecast": "Nov 4 (last circuit) — Oct 5 schedule update · SET MC Oct 16, RTE Oct 30",',
           u'"forecast": "Nov 4 (last circuit) — SET MC ACHIEVED Oct 20 · RTE Nov 10 (Oct 21 position)",')

D = rep(D, u"target: 'SET MC Oct 5 · RTE Oct 26 (rev Oct 1)'",
           u"target: 'RTE Nov 10 · backfeed sits with the Owner'")

D = rep(D, u"forecast: 'Nov 4, 2026 (last circuit) · SET MC Oct 16'",
           u"forecast: 'Nov 4, 2026 (last circuit) · SET MC ACHIEVED Oct 20'")

D = rep(D, u"forecast: 'Nov 18, 2026 (all circuits) · Ready to Energize Oct 30'",
           u"forecast: 'Ready to Energize Nov 10 · PIS restatement owed'")

D = rep(D, u"mc: 'Oct 26 (RTE, rev Oct 1) · SET MC Oct 5'",
           u"mc: 'RTE Nov 10 · SET MC ACHIEVED Oct 20'")

D = rep(D, u'"asOf": "Oct 16, 2026 — AB Power 97.1%, remainder committed Oct 19"',
           u'"asOf": "Oct 21 — SET MC ACHIEVED Oct 20 · RTE Nov 10"')

D = rep(D, u'"energization": "PIS Nov 21 (Oct 12 update)"',
           u'"energization": "RTE Nov 10 \\u2014 backfeed, Consent to Energize and Test Energy all sit with the Owner and AEP"')

D = rep(D, u'"mc": "MC Oct 19 (Oct 12 update)"', u'"mc": "Construction CLOSED \\u00b7 tests to close MC"')
D = rep(D, u'"mc": "MC Oct 26 (Oct 12 update)"', u'"mc": "Construction CLOSED \\u00b7 tests due Mon Oct 26"')
D = rep(D, u'"mc": "MC Nov 4 (Oct 12 update)"',  u'"mc": "Construction CLOSED \\u00b7 tests due end Oct"')
D = rep(D, u'"mc": "MC Nov 10 (Oct 12 update)"', u'"mc": "MC Nov 10 \\u00b7 waiting on materials"')

# commissioning milestones[] - collapse the seven stale rows onto the Oct 21 sequence
MS = (u'    { "name": "SET mechanical completion", "plan": "Oct 1", "now": "ACHIEVED Oct 20", "note": "4 d after the Oct 5 weekly" },\n'
      u'    { "name": "SET tests complete", "plan": "Oct 15", "now": "reports owed", "note": "register still 0 of 74 received" },\n'
      u'    { "name": "Ready to Energize", "plan": "Oct 15", "now": "Nov 10", "note": "+11 d; matches the backfeed the Owner asked for" },\n'
      u'    { "name": "AEP backfeed", "plan": "\\u2014", "now": "Owner \\u00a74.7", "note": "must coincide with Consent to Energize" },\n'
      u'    { "name": "Consent to Energize", "plan": "\\u2014", "now": "10 BD", "note": "Tax Equity per Darrin; Heelstone by contract" },\n'
      u'    { "name": "SET hot commissioning", "plan": "\\u2014", "now": "4 days", "note": "runs once backfeed is given" },\n'
      u'    { "name": "SCADA point-to-point (Tenaska)", "plan": "\\u2014", "now": "ours", "note": "E2E 3 BD before Test Energy" },\n'
      u'    { "name": "Test Energy to PJM", "plan": "Nov 11", "now": "not viable", "note": "no margin for SET hot commissioning" },\n'
      u'    { "name": "IV curve campaign", "plan": "Oct\\u2013Nov", "now": "BLOCKED", "note": "minimum required irradiance not met" },\n'
      u'    { "name": "Substantial Completion", "plan": "Nov 30", "now": "Dec 9", "note": "9 d past contract; downstream dates owed" }\n'
      u'   ]')
k = D.index(u'"name": "SET mechanical completion"')
b = D.rindex(u'{', 0, k)
ls = D.rindex(u'\n', 0, b) + 1
e = D.index(u'"note": "9 d past contract"', k)
end = D.index(u']', e) + 1
D = D[:ls] + MS + D[end:]

D = rep(D,
    u'"headline": "IV curve testing has not started \\u2014 0 of 419 LBD \\u2014 and 12B now carries 101 of the 104 open polarity records alone"',
    u'"headline": "IV curve is blocked on IRRADIANCE, not on crews \\u2014 0 of 419, and the season is closing"')

NOTE = (u'<strong>CAUSE ESTABLISHED Oct 21 (field-test supervisor\\u2019s client portal): the IV curve campaign has not started '
        u'because THE MINIMUM PROJECT-REQUIRED IRRADIANCE HAS NOT BEEN MET. Not crews, not contract, not filing \\u2014 the season, '
        u'in Michigan, in late October, and it does not improve before spring.</strong> '
        u'<strong>It lines up with the planner\\u2019s position that capacity and availability tests will not complete in November '
        u'for lack of irradiance, and with the standing proposal to run about 20 per cent of the IV tests now and the balance in '
        u'spring 2027 with thermography \\u2014 against a contract requiring 100 per cent string sampling. '
        u'THAT GAP NEEDS AN OWNER AGREEMENT AND IT HAS NOT BEEN SOUGHT.</strong> '
        u'<strong>ACTION: settle the sampling position with the Owner now, not in November. Separately, 11B proved an open count '
        u'here can be pure paperwork \\u2014 ask the field before reading 12B\\u2019s 101 as work outstanding.</strong>')
a = u'<strong>ACTION: 11B proves the point'
assert D.count(a) == 1, 'ACTION anchor not unique'
i = D.index(a)
j = D.index(u'</strong>', i) + len(u'</strong>')
D = D[:i] + NOTE + D[j:]

wr('data.js', D)

# ------------------------------------------------------------- index.html
H = rd('index.html')

HERO = (u'<details class="hero-day"><summary>Oct 21 &middot; commissioning</summary><ul>\n'
        u'          <li><strong>MC DE LA SET CONSEGUIDO EL 20 DE OCTUBRE.</strong> Cuatro d&iacute;as despu&eacute;s del 16 que '
        u'marcaba la actualizaci&oacute;n del 5 oct. <strong>Ready to Energize pasa al 10 de noviembre</strong>, que coincide con el '
        u'backfeed que pidi&oacute; el Owner. PIS, COD y SC <strong>pendientes de reemitir</strong> sobre esa fecha.</li>\n'
        u'          <li><strong>LA RUTA CR&Iacute;TICA YA NO ES NUESTRA.</strong> Nuestro: energizaci&oacute;n y hot commissioning '
        u'de la SET tras el backfeed (4 d&iacute;as) y el punto a punto de SCADA con Tenaska. Del Owner y terceros: '
        u'<strong>Consent to Energize</strong> (10 d&iacute;as h&aacute;biles), coordinaci&oacute;n del backfeed con AEP '
        u'(&sect;4.7, del Owner), Day of Operation, el paquete de Test Energy a PJM, el kit de Tenaska, PowerX y B&amp;V. '
        u'<strong>Si PowerX no puede hasta la semana del 16, el retraso es de la utility y del Owner, no nuestro.</strong></li>\n')
H = span(H, u'<details class="hero-day">', u'          <li><strong>16 oct &mdash;', HERO)

IVLI = (u'          <li><strong>CURVA IV: LA CAUSA ES LA IRRADIANCIA, no las cuadrillas.</strong> El portal del supervisor lo dice: '
        u'no se ha alcanzado la irradiancia m&iacute;nima exigida por proyecto. En Michigan, a finales de octubre, eso no mejora hasta '
        u'primavera. Choca con el contrato, que exige muestreo del <strong>100%</strong>, frente a la propuesta de 20% ahora y 80% en '
        u'primavera 2027: <strong>hay que cerrar esa posici&oacute;n con el Owner ya</strong>. Polaridad 315/419; 11B cerrado 110/110; '
        u'12B con 101 de los 104 abiertos.</li>\n')
H = span(H, u'          <li><strong>Ensayos de campo PV', u'        </ul></details>', IVLI)

H = rep(H, u'data.js?v=20261023a', u'data.js?v=20261024b')

H = rep(H,
    u"'<div class=\"mat-num\"><b>' + T.energization.split(' (')[0] + '</b><small>energization (tracker) \\u00b7 RTE Oct 26 (rev Oct 1)</small></div>' +",
    u"'<div class=\"mat-num\"><b>' + T.energization.split(' \\u2014 ')[0] + '</b><small>ready to energize \\u00b7 Oct 21 position</small></div>' +")

wr('index.html', H)
print('applied')
