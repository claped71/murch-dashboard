#!/usr/bin/env python3
# Sep 2 basis update + narrative refresh for data.js
import re, sys

s = open('data.js', encoding='utf-8').read()
orig = s

def sub1(pat, rep, n=1, flags=0):
    global s
    s2, c = re.subn(pat, (rep if callable(rep) else (lambda m: rep)), s, count=n, flags=flags)
    if c == 0:
        print('MISS:', pat[:90]); sys.exit(1)
    s = s2

def subs(pat, rep):
    global s
    s = s.replace(pat, rep)

# ---------- control ----------
sub1(r"asOf: 'Sep 1, 2026[^']*'",
     r"asOf: 'Sep 2, 2026 \\u2014 daily executive report of Wed Sep 2 \\u00b7 crews 203 (EHS: 322 days without accident, 177,057.5 h)'")
sub1(r"asOfISO: '2026-09-01'", "asOfISO: '2026-09-02'")
sub1(r"piles: \{ installed: 30261, total: 31352, gate: '2026-07-28', gateLabel: 'Jul 28', required: 1091",
     "piles: { installed: 30331, total: 31352, gate: '2026-07-28', gateLabel: 'Jul 28', required: 1021")

# trackers control line: rebuild the moving fields
sub1(r"trackers: \{ installed: 2221, released: 296, releasedGS: 730, total: 2486, gate: '2026-08-30', gateLabel: 'Aug 30 \\u2014 MISSED', required: 265, capacity: 97",
     "trackers: { installed: 2243, released: 296, releasedGS: 730, total: 2486, gate: '2026-08-30', gateLabel: 'Aug 30 \\u2014 MISSED', required: 243, capacity: 97")
sub1(r"byCrew: '<strong>ECCS completed 22 rows Tuesday.*?', wipRows: 21, wipEquivalent: 9\.5, earnedEquivalent: 2230\.5, earnedPct: 89\.7",
     "byCrew: '<strong>ECCS completed 22 rows again on Wednesday \\u2014 the THIRD consecutive 22-row day, filed \\u201cZonas G y E\\u201d and assigned to Zone G (234 of 256) pending the E-side split.</strong> ECCS is the sole racking contractor and holds all 243 remaining rows \\u2014 <strong>and goes OFF SITE Sep 4-8: at 22/day the 243 rows are 11 working days, so the replacement gate date cannot honestly sit earlier than mid-September without a second crew.</strong> Manuel confirmed to United (Sep 2) that 40 rows in G2 and 40 in B are ready; the joint walk is Wednesday. The 4 E15 rows stay HELD OUT and the 449-vs-243 divergence still goes to Manuel.', wipRows: 21, wipEquivalent: 9.5, earnedEquivalent: 2252.5, earnedPct: 90.6", flags=re.S)
sub1(r"earnedBasis: '<strong>Second consecutive ladder conversion.*?releaseBasis:",
     "earnedBasis: '<strong>Third consecutive 22-row completion day (Sep 2, \\u201cZonas G y E\\u201d).</strong> Open register carried at the last reported snapshot \\u2014 21 rows / 9.5 row-equivalents (ECCS 5 in G at step 2, Workforce 16 in B5) \\u2014 pending a fresh WIP count; earned 90.6% beside the 90.2% gate. The 4 E15 rows are excluded pending reconciliation; United\\u2019s F1/F2 bearing correction report and QA release are still owed on its closed contract.', releaseBasis:", flags=re.S)

sub1(r"modules: \{ installed: 138909, total: 171470, gate: '2026-09-06', gateLabel: 'Sep 6', required: 8140",
     "modules: { installed: 142965, total: 171470, gate: '2026-09-06', gateLabel: 'Sep 6', required: 9502")
sub1(r"electrical: \{ installed: 49484, total: 269748, gate: '2026-09-18', gateLabel: 'Sep 18', required: 14684, capacity: 4735, name: 'LV Electrical', unit: 'lf/day', earnedPct: 16\.9",
     "electrical: { installed: 56895, total: 269748, gate: '2026-09-18', gateLabel: 'Sep 18', required: 15204, capacity: 7411, name: 'LV Electrical', unit: 'lf/day', earnedPct: 18.4")
sub1(r"mv: \{ pct: 77\.3, gate: '2026-09-14', gateLabel: 'Sep 14', name: 'MV Collection', unit: '%', earnedPct: 77\.3",
     "mv: { pct: 77.8, gate: '2026-09-14', gateLabel: 'Sep 14', name: 'MV Collection', unit: '%', earnedPct: 77.8")

# set control line
sub1(r"set: \{ pct: 51\.6, .*?\},\n", "set: { pct: 52.5, gate: '2026-09-25', gateLabel: 'Sep 25', name: 'Substation (SET)', unit: '%', earnedPct: 52.5, planToDate: 45, planAnchor: { iso: '2026-08-24', pct: 45 }, binding: 'MV terminations: back to a 2-person crew Wednesday \\u2014 +9 for 33 of 264, deficit 44 against the 11/day control. The promised 12-15/day crew has still not produced at rate', projected: 'not rate-driven \\u2014 erection converting; the exposure is electrical (21.6%) and the termination deficit (44)', pill: 'SE CREW 19 (AB POWER 17 + 2 ON TERMINATIONS)', laborWeights: { civil: 20, structural: 20, electrical: 60 }, laborPct: 45.3, basis: 'SE tracker Sep 2 cut: <strong>52.5% overall \\u2014 civil 95.4, structural 66.5, electrical 21.6 \\u00b7 45 days to energization</strong>. Against the plan advanced from the Aug 24 anchor (45%) to 100% at the Sep 25 gate, plan-today is ~60.5% \\u2014 <strong>SET is ~8.0 points BEHIND plan</strong>. <strong>MV terminations remain the failure inside the success: +9 Wednesday with only 2 people on the front \\u2014 cumulative 33 of 264 against 77 expected, a DEFICIT OF 44.</strong> <strong>Weighted by labour content (civil 20 / structural 20 / electrical 60, provisional pending Jose\\u2019s sign-off) SET reads 45.3%.</strong>' },\n", flags=re.S)

sub1(r"safetyDaysLtiFree: 321,", "safetyDaysLtiFree: 322,")
sub1(r"safetyBasis: '[^']*'",
     "safetyBasis: 'Bethany Valdez (EHS Site Manager), Sep 2 headcount email: 322 days without accident, 177,057.5 hours worked, 581.5 hours lost to bad weather. Man-hour register maintained from subcontractor daily returns; zero recordables, zero lost-time injuries and zero restricted-work cases to date.'")

# lvDaily append
sub1(r"\{ day: 'Sep 1', value: 1550 \}\n \] \},", "{ day: 'Sep 1', value: 1550 }, { day: 'Sep 2', value: 7411 }\n ] },")

# ---------- contractorScore: drop Aug 31 rows, prepend Sep 2 rows ----------
i0 = s.index('contractorScore: [')
iend = s.index("],\n scope: [", i0)
block = s[i0:iend]
# remove Aug 31 rows (each row is one " { date: 'Aug 31 Mon', ... },\n" line)
block = re.sub(r"\n \{ date: 'Aug 31 Mon',[^\n]*\},?", "", block)
newrows = """contractorScore: [
 { date: 'Sep 2 Wed', contractor: 'ECCS', trade: 'Trackers', output: 22, resource: '48 mech - Zones G and E', short: '<strong>22 rows at 100% \\u2014 the THIRD consecutive 22-row day (\\u201cZonas G y E\\u201d)</strong>', unit: 'rows', perUnit: 0, criterion: 243, critLabel: '<strong>Cumulative 2,243 of 2,486 \\u2014 243 remain, all ECCS, which goes OFF SITE Sep 4-8.</strong> At 22/day that is 11 working days of work held by one crew; the replacement gate date is still owed. Manuel confirmed 40 G2 + 40 B rows ready for the joint walk with United.' },
 { date: 'Sep 2 Wed', contractor: 'United Services (modules + piles)', trade: 'Modules', output: 3510, resource: '71 mech - Zones G and D', short: '<strong>3,510 modules in Zone G + 70 piles in Zone D \\u2014 the D office-area drive has started</strong>', unit: 'modules', perUnit: 49, criterion: 9502, critLabel: '<strong>Site module total 4,056 against a requirement that rose to 9,502/day over the 3 working days left to Sep 6 \\u2014 nearly double the best day ever recorded.</strong> Zone G goes to 10,626 of 18,486 (57.5%); the 70 D piles are the first production in the D office area (756 of 1,468).' },
 { date: 'Sep 2 Wed', contractor: 'ECCS (electrical)', trade: 'LV / DC', output: 4587, resource: '27 people - E17/E14/E18 + INV-05', short: '<strong>3,083 ft of trunk tensioned in E17/E14/E18 + 1,504 ft of 750 KCMIL INV-05\\u2192LBD402 \\u2014 plus 27 harness lines / 81 strings (11,694 ft) and 139 brackets</strong>', unit: 'lf', perUnit: 170, criterion: 15204, critLabel: 'The trunk front produced a second consecutive day and the harness line held. Cable cumulative 56,895 lf (21.1%) against 15,204 lf/day required over 14 working days to Sep 18.' },
 { date: 'Sep 2 Wed', contractor: 'United Services (LV)', trade: 'LV / DC', output: 56, resource: '12 electricians of 40 required', short: '<strong>56 harness lines of 3 strings in F13/F16 (24,248 ft corrected quantity) + 101 supports in F16/F17/F13 \\u2014 its best LV day, still at 12 of 40 electricians</strong>', unit: 'assemblies', perUnit: 5, criterion: 320, critLabel: 'The front that started Sep 1 with 23 lines posted 56 on day two \\u2014 the rate answer is manpower: 12 of the 40 committed electricians. Angel\\u2019s recovery-rate demand stands.' },
 { date: 'Sep 2 Wed', contractor: 'GreenSol (self-perform)', trade: 'LV / DC', output: 2824, resource: '10 people - Zone E', short: '<strong>2,824 ft of 500 KCMIL homerun + 5 boxes pulled into cabinets (17/18/19/7/10) + 70 hangers, 42 supports and 1,574 ft of messenger wire</strong>', unit: 'lf', perUnit: 282, criterion: 12510, critLabel: 'The self-perform crew moved from harness to homerun pull and cabinet work \\u2014 the first HR footage since Aug 29. Messenger cumulative 6,907 ft.' },
 { date: 'Sep 2 Wed', contractor: 'AB Power', trade: 'Substation', output: 9, resource: '17 SE + 2 MV terminals', short: '<strong>SET 52.5% (civil 95.4 / structural 66.5 / electrical 21.6) \\u2014 terminations +9 to 33 of 264, DEFICIT 44, with the crew back to 2 people</strong>', unit: 'terminations', perUnit: 4, criterion: 11, critLabel: '<strong>+9 is the best termination day yet \\u2014 with 2 people. The committed 12-15/day crew still has not been fielded:</strong> 33 of 264 against 77 the 11/day control expected. Deficit 44 and widening.' },
 { date: 'Sep 2 Wed', contractor: 'Brumont', trade: 'Modules', output: 546, resource: '7 people', short: '546 modules filed against closed Area E \\u2014 carried into Zone B; the E\\u2192B carry now totals 1,744', unit: 'modules', perUnit: 78, criterion: 9502, critLabel: 'Third consecutive E\\u2192B carry day; re-base the ledger with Manuel. Zone B stands at 12,541 of 15,262 (82.2%).' },
"""
block = block.replace('contractorScore: [', newrows.rstrip('\n'))
s = s[:i0] + block + s[iend:]

# ---------- scope metrics ----------
sub1(r"\{ title: 'Mechanical BOS', metric: '31,352 piles \\u00b7 2,486 trackers', note: 'Piles 96\.5% \\u00b7 trackers 89\.3% \\u00b7 modules 81\.0%\.' \}",
     "{ title: 'Mechanical BOS', metric: '31,352 piles \\u00b7 2,486 trackers', note: 'Piles 96.7% \\u00b7 trackers 90.2% \\u00b7 modules 83.4%.' }")
sub1(r"\{ title: 'Electrical BOS', metric: 'MV 77\.3% \\u00b7 LV 49,484 lf'",
     "{ title: 'Electrical BOS', metric: 'MV 77.8% \\u00b7 LV 56,895 lf'")

# ---------- manpower ----------
sub1(r"\{ day: 'Aug 31', total: 230, src: 'EHS headcount \(Bethany\)' \}\n \],",
     "{ day: 'Aug 31', total: 230, src: 'EHS headcount (Bethany)' },\n { day: 'Sep 2', total: 203, src: 'Daily executive report crew figures' }\n ],")
sub1(r"manpowerMixToday: \{ day: 'Aug 31, 2026', total: 230, mix: \[.*?\] \},",
     """manpowerMixToday: { day: 'Sep 2, 2026', total: 203, mix: [
 { trade: 'Trackers & Piling', people: 119, color: '#0c5f43' },
 { trade: 'Module Installation', people: 16, color: '#168a5b' },
 { trade: 'Electrical & SET', people: 68, color: '#2769a8' },
 { trade: 'Survey & Crane', people: 0, color: '#b96f18' },
 { trade: 'GreenSol EPC', people: 0, color: '#66716d' },
 { trade: 'Support / environmental', people: 0, color: '#9aa3a0' }
 ] },""", flags=re.S)
sub1(r"manpowerNote: '[^']*',",
     "manpowerNote: '<strong>Sep 2: 203 on the daily executive report crew basis (no EHS board in the register for the day).</strong> ECCS 75 (48 mech + 27 elec), United 83 (71 mech + 12 elec), AB Power 19 (17 SE + 2 terminations), GreenSol self-perform 10, Workforce 9, Brumont 7 \\u2014 sums exactly to 203. <strong>The reading: mechanical strength holds while the two committed electrical ramps are still short \\u2014 United fields 12 of 40 electricians and the termination crew is back to 2 people.</strong> Survey and crane remain absent; ITS filed nothing.',")

sub1(r"todayFieldSnapshot: \{.*?\n \},\n", """todayFieldSnapshot: {
 date: 'Sep 2, 2026 (report basis \\u2014 crew figures)',
 total: 203,
 rows: [
 { contractor: 'UNITED', people: 83, category: 'pile', note: '<strong>71 mechanical + 12 electrical. 3,510 modules in Zone G and the FIRST 70 PILES in the Zone D office area; electrical posted 56 harness lines (24,248 ft corrected) + 101 supports \\u2014 best LV day, still 12 of 40 electricians.</strong>' },
 { contractor: 'ECCS', people: 75, category: 'tracker', note: '<strong>48 mech + 27 elec. 22 rows COMPLETE \\u2014 third consecutive 22-row day; 243 remain, off site Sep 4-8.</strong> Electrical: 4,587 ft (trunk tensioned E17/E14/E18 + 750 KCMIL INV-05\\u2192LBD402), 27 harness lines / 81 strings, 139 brackets.' },
 { contractor: 'AB POWER', people: 19, category: 'electrical', note: '<strong>17 on the SE (SET 51.6 \\u2192 52.5%) + 2 on MV terminations \\u2014 +9 to 33 of 264 (deficit 44); the 12-15/day crew is still not fielded.</strong>' },
 { contractor: 'GREENSOL SP', people: 10, category: 'epc', note: '<strong>2,824 ft of 500 KCMIL homerun + 5 boxes pulled into cabinets + 70 hangers, 42 supports, 1,574 ft messenger.</strong> The self-perform crew switched from harness to the HR pull.' },
 { contractor: 'WORKFORCE', people: 9, category: 'module', note: 'On the report at 9 with no production quantity filed \\u2014 a tenth silent day; its 16 B5 rows stay parked.' },
 { contractor: 'BRUMONT', people: 7, category: 'module', note: '546 modules filed against closed Area E, carried into Zone B \\u2014 the E\\u2192B carry now totals 1,744; re-base with Manuel.' },
 { contractor: 'ITS', people: 0, category: 'support', note: '<strong>NOTHING FILED for a second day \\u2014 the Bore-09 stuck-pipe recovery remains unreported.</strong>' }
 ],
 note: 'Source: <strong>Wednesday Sep 2 daily executive report crew figures</strong> (United 83, ECCS 75, AB Power 19, GreenSol self-perform 10, Workforce 9, Brumont 7 = 203). '
 + '<strong>Read the crews against the output: mechanical delivered \\u2014 22 rows, 4,056 modules, 70 D piles \\u2014 while the two committed electrical ramps stay short: United 12 of 40 electricians, terminations back to 2 people.</strong>'
 },
""", flags=re.S)

open('data.js','w',encoding='utf-8').write(s)
print('pass1 OK, bytes', len(s))
