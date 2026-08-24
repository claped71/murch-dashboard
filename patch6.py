#!/usr/bin/env python3
import re
p='index.html'
t=open(p,encoding='utf-8').read()
def rep(old,new,count=1):
    global t
    assert old in t, 'MISSING: '+old[:90]
    t=t.replace(old,new,count)

# 1. eyebrow
m=re.search(r'<p class="eyebrow">Van Buren County, MI \| Field production through <strong>Saturday August 22, 2026 EOD</strong>.*?</p>', t, re.S)
assert m
t=t.replace(m.group(0), '<p class="eyebrow">Van Buren County, MI | Field production through <strong>Monday August 24, 2026 (15:48 field cut - partial day)</strong> | Piles 29,586 (94.4%) &middot; trackers 2,002 built (80.5%), 296 client-released &middot; modules 113,445 (66.2%) &middot; LV 38,309 lf (13.9%) &mdash; <strong>PRODUCTION RESTARTED: 60 tracker rows and 4,095 modules (United’s best day, in a Zone F that is producing again after the bearing remediation) and a HARNESS RECORD of 39 lines / 117 strings</strong> &mdash; but cable was again residual (185 ft), the self-perform crew started with 10 of 20 electricians, piles saw only minimal unquantified red-pile work in D, and <strong>the Aug 30 tracker gate now needs 97 rows/day</strong>.</p>')

# 2. management focus
m=re.search(r'<p class="quality-note"><strong>Management focus \(Mon Aug 24, on the Saturday Aug 22 EOD basis\):</strong>.*?</p>', t, re.S)
assert m
t=t.replace(m.group(0), '<p class="quality-note"><strong>Management focus (Mon Aug 24, 15:48 field cut):</strong> Production restarted where it was promised and the day earned <strong>+1.1 gate points - the best day since Aug 5</strong>: 60 tracker rows (ECCS back at 30 in Zone G, United’s 30/day metronome back in F) and <strong>4,095 modules, United’s best day on record, inside the Zone F that was blocked Saturday - the F1/F2 bearing remediation has been executed and only the correction report, QA reinspection and formal release are owed</strong> (get them; those rows were already counted complete once). The electrical front tells the opposite story and it is the one that decides Mechanical Completion: <strong>a harness record of 39 lines / 117 strings</strong> - the second record in three days, with consumables landing - <strong>but 185 ft of gate cable, a self-perform crew that started with 10 of its 20 electricians, and United’s LV crew still not on site (~Aug 28)</strong>. The requirement is now 10,746 lf/day. Three holds did not move at all: <strong>piles (minimal unquantified red-pile work in D; 4 rigs off site, crane at zero, D ungraded)</strong>, the two SET trunk bores at zero recorded feet, and <strong>the Aug 30 tracker gate, which now needs 97 rows/day and should be re-forecast with a dated replacement this week</strong>. New this Monday: the tracker-material contingency list (GameChange leads 3-4 weeks, 4-6 for torque tubes, vs ECCS’s claimed surplus - decide the buy without waiting to confirm the shortage) and Luis’s standing question to QA: exactly how many tracker rows are RELEASED for panels - client acceptance has been frozen at 296 for four weeks.</p>')

# 3. tracker section
rep('<h2>1,942 rows complete (78.1% gate) &middot; <strong>ZERO on Aug 22 vs 91 now required</strong> &middot; ECCS 281 @ 38/day &middot; United 180 @ 27/day &middot; Workforce 83 @ 11/day (crew cut 20 &rarr; 9)</h2>',
    '<h2>2,002 rows complete (80.5% gate) &middot; <strong>60 on Aug 24 vs 97 now required</strong> &middot; ECCS 251 @ 50/day &middot; United 150 @ 30/day &middot; Workforce 83 @ 17/day (crew cut 20 &rarr; 9)</h2>')
rep('<strong>1,942 / 2,486</strong>', '<strong>2,002 / 2,486</strong>')
rep('<small><strong>78.1%.</strong> 100% rows only, purlins in. Drives the Aug 30 gate, the curves and every Client submission.</small>',
    '<small><strong>80.5%.</strong> 100% rows only, purlins in. Drives the Aug 30 gate, the curves and every Client submission.</small>')
rep('<small>Earned 78.4% beside the 78.1% gate. Use for crew productivity, never for the gate.</small>',
    '<small>Earned 80.8% beside the 80.5% gate. Use for crew productivity, never for the gate.</small>')

# 4. SAFETY SECTION -> warning only
m=re.search(r'<section class="section safety-summary" id="safety">.*?</section>', t, re.S)
assert m
warning = '''<section class="section safety-summary" id="safety">
        <div class="section-heading">
          <p class="eyebrow">Health &amp; Safety | HSE REPORTING FAILURE &mdash; publication suspended by direction of the VP of Construction (Aug 24, 2026)</p>
          <h2 style="color:#a12b2b">NO HSE KPIs HAVE BEEN REPORTED SINCE THE JUNE CLOSE &mdash; serious tracking of safety performance on this project is NOT currently possible</h2>
        </div>
        <div class="table-wrap" style="border-left:6px solid #a12b2b;background:#fdf3f3;border-radius:12px;padding:18px 22px">
          <p style="margin:0 0 10px;font-weight:800;color:#a12b2b;font-size:15px">WARNING TO THE PROJECT HSE FUNCTION &mdash; this section will publish no safety figure, streak, or indicator until the reporting duty is met.</p>
          <p style="margin:0 0 10px">The last audited HSE dataset on this project is the <strong>JUNE monthly close</strong>. As of Aug 24: the <strong>July KPI pack &mdash; promised on Aug 4 and due by the 5th of the following month under the project procedure &mdash; has still not been delivered</strong>, and August is already three weeks deep with none in preparation. The Aug 24 review of the MIOSHA recordkeeping position (VP of Construction’s six-question audit, answered by corporate QHSE) confirms the gap is structural, not administrative:</p>
          <p style="margin:0 0 10px"><strong>&bull; No establishment OSHA 300 log is maintained</strong> for the project, and no 300A annual summary has been posted or filed. <strong>&bull; The OSHA 300 logs of the active subcontractors have never been audited or collected</strong>, so recordability on this site is being asserted, not verified. <strong>&bull; No registry of hours worked per company per day exists</strong> &mdash; without a man-hour denominator, TRIR and DART cannot be computed at all, for any period. <strong>&bull; The investigation of incident 20260807_ACC_001</strong> (torque-tube strike, rated SERIOUS for its mechanism) <strong>remains open 17 days after the event</strong>, with corrective actions unverified. <strong>&bull; Weekend production is running without confirmed safety coverage</strong> &mdash; raised by the VP of Construction on Aug 22 and still unanswered.</p>
          <p style="margin:0">What reopens this section: the July AND August KPI packs delivered and audited; a man-hour registry by company and day, operating; the establishment OSHA 300/300A position formalised in writing against the MIOSHA criterion, with subcontractor logs collected and verified; the ACC_001 investigation closed with evidenced corrective actions; and weekend safety coverage confirmed on the daily board. <strong>Until every one of these stands, no safety statistic from this project should be quoted in any report, internal or client-facing, because none can currently be verified.</strong></p>
        </div>
      </section>'''
t=t.replace(m.group(0), warning)

# 5. LV where-pull-stands
m=re.search(r'<p class="quality-note"><strong>Where the pull stands:</strong>.*?</p>', t, re.S)
assert m
t=t.replace(m.group(0), '<p class="quality-note"><strong>Where the pull stands:</strong> every foot installed to date &mdash; 38,309 lf &mdash; sits on <strong>Line 1 (MV-11A)</strong>: boxes complete, <strong>harness now at 134 assemblies after Monday’s record 39 lines / 117 strings</strong>, trunk 4,786 ft, homerun 33,523 ft. <strong>Monday Aug 24 added only 185 ft of gate cable</strong> (trunk Inv 03-419 and 03-418; the 900 ft homerun on Inv 03-412 is in process and not counted), so the requirement rises to <strong>10,746 lf/day to Sep 18</strong> against a best-ever day of 3,610. <strong>The constraint is unchanged and it is people:</strong> the GreenSol self-perform crew started Monday with 10 of its 20 electricians &mdash; the rest wait on tools and transport &mdash; and United’s signed LV mobilisation (~Aug 28) is not yet on site. Material moved the right way: 5,000 zip ties reached the field Monday and 24,000 more land Tuesday. TP 436/615 &middot; LBD 268/418.</p>')

# 6. per-line table L1 row
rep('<td data-label="Boxes"><strong>93 / 93 &middot; 100%</strong></td>', '<td data-label="Boxes"><strong>93 / 93 &middot; 100%</strong></td>')
rep('<td data-label="Homerun"><strong>29,913</strong> / 54,644 &middot; 54.7%</td>', '<td data-label="Homerun"><strong>33,523</strong> / 54,644 &middot; 61.4%</td>')
rep('<td data-label="Trunk">1,835 / 8,723 &middot; 21.0%</td>', '<td data-label="Trunk"><strong>4,786</strong> / 8,723 &middot; 54.9%</td>')
rep('<td data-label="Harness"><strong>24</strong> / 1,082 &mdash; 11 lines / 29 strings Aug 19</td>', '<td data-label="Harness"><strong>134</strong> / 1,082 &mdash; RECORD 39 lines / 117 strings Aug 24</td>')
rep('<td data-label="Remaining">31,619</td>', '<td data-label="Remaining">25,058</td>')
rep('<td data-label="Demonstrated">2,410 avg (last 5 reported) &middot; best 4,735</td>', '<td data-label="Demonstrated">2,057 avg (last 5 reported) &middot; best 4,735</td>')

# 7. trend cards: add LV cable + harness
rep("""      // ---- rate trend small multiples ----
      var tg = document.getElementById('trendGrid');
      defs.forEach(function (g) {""",
"""      // ---- rate trend small multiples ----
      var tg = document.getElementById('trendGrid');
      // Electrical daily-production cards (Jose, Aug 24): the electrical installation is the
      // critical scope - chart its daily output beside the three mechanical cards.
      var _eb = D.electricalByLine || {};
      var _hDaily = (_eb.harnessDiario || []).map(function (x) { var n = String(x.d).split(' ')[0]; return { day: 'Aug ' + n, value: x.l }; });
      var trendDefs = defs.concat([
        { c: { name: 'LV / DC cable pull', required: C.electrical.required, capacity: C.electrical.capacity, unit: 'lf' }, daily: (C.electrical.lvDaily || []) },
        { c: { name: 'Harness assemblies', required: 150, capacity: 39, unit: 'assemblies' }, daily: _hDaily }
      ]);
      trendDefs.forEach(function (g) {""")

# 8. sources footer
m=re.search(r'<p>Sources: Live NWS weather for Lawrence, Michigan;.*?</p>', t, re.S)
assert m
t=t.replace(m.group(0), m.group(0)[:-4] + ' Updated Aug 24 with the <strong>Monday Aug 24 field cut (WhatsApp export 15:48)</strong>: Manuel Ramirez (ECCS 30 trackers Zone G + TP 21 + LBD 21; United 30 trackers and 4,095 modules Area F; piles “será mínimo el avance” in D), <strong>Fernando Souza’s ICSS V2 report (39 harness lines / 117 strings in A2; 185 ft of trunk; Inv 03-412 homerun 900 ft in process; 5,000 zip ties delivered)</strong>, Nolberi’s civil report (Inv 1-3 backfill, C road crossing at Inv 6 ducted and backfilled, Zone D parking pad, Inv 9/11 penetrations), and Maurin’s confirmation that <strong>the F1/F2 bearing remediation is executed with the correction report pending</strong>.</p>')

# 9. cache-bust script
rep('<script src="data.js?v=20260824c"></script>', '<script src="data.js?v=20260825a"></script>')

open(p,'w',encoding='utf-8').write(t)
print('patch6 ok')
