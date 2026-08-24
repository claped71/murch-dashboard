#!/usr/bin/env python3
p='data.js'
t=open(p,encoding='utf-8').read()
def esc(s):
    return s.replace('\u00b7','\\u00b7').replace('\u2019','\\u2019').replace('\u2014','\\u2014').replace('\u2192','\\u2192').replace('\u201c','\\u201c').replace('\u201d','\\u201d')
def rep(old,new,count=1):
    global t
    o,n=(old,new) if old in t else (esc(old),esc(new))
    assert o in t, 'MISSING: '+old[:80]
    t=t.replace(o,n,count)

# risk #1
rep("#1 MILESTONE RISK — Trackers: a zero Saturday puts the Aug 30 gate at 91 rows/day. Re-forecast it.",
    "#1 MILESTONE RISK — Trackers: Monday restarts production at 60 rows, but the Aug 30 gate now needs 97/day. Re-forecast it.")
rep("<strong>1,942 of 2,486 (78.1%). Aug 22 closed ZERO rows on every crew, so the requirement is now 91 rows/day over the 6 working days to Aug 30</strong> - the highest daily requirement this activity has ever carried, against a demonstrated best of 97 and a normal day of 46-60.",
    "<strong>2,002 of 2,486 (80.5%). Monday Aug 24 closed 60 rows - ECCS 30 in Zone G and United 30 in F - against the 91 the day required, so the requirement is now 97 rows/day over the 5 working days to Aug 30</strong>, at the very top of the demonstrated range (best 97, normal day 46-60).")
rep("<strong>ECCS halved in Zone G (30 → 16) then did cleanup only on Saturday</strong>; and <strong>United reports racking in F1 and F2 out of tolerance on the bearings</strong>, which is rework on rows already counted complete and is separately blocking modules in those blocks.",
    "<strong>ECCS recovered its day-one G rate on Monday (30)</strong>, but the 502 undriven G piles cap its runway; and <strong>the F1/F2 bearing remediation has been executed and awaits its correction report and QA release</strong> - rework on rows already counted complete.")
# risk #2
rep("#2 — LV: a flat Saturday takes the requirement to 10,288 lf/day, but the quality non-conformity closed in one day",
    "#2 — LV: a harness RECORD (39 lines / 117 strings) but cable again residual - the requirement is now 10,746 lf/day")
rep("<strong>Aug 22 recorded ZERO cable feet.</strong> Cumulative holds at 38,124 lf of 274,720 (13.9%) and the requirement rises to <strong>10,288 lf/day over 23 working days</strong> - against a best-ever day of 3,610.",
    "<strong>Aug 24 recorded 185 ft of trunk - cable again residual</strong> (the 900 ft homerun on Inv 03-412 is in process and not counted). Cumulative 38,309 lf of 274,720 (13.9%) and the requirement rises to <strong>10,746 lf/day over 22 working days</strong> - against a best-ever day of 3,610. <strong>Harness, in contrast, set a record: 39 lines / 117 strings in A2 by 23 people, cumulative 134 of 4,972 assemblies.</strong>")
rep("Crew: the 20-electrician GreenSol self-perform crew is still not on the board - Jose ordered it started again on Aug 22 - and United’s signed LV mobilisation (~Aug 28) has not arrived. Material: the 4,000 zip ties are spent, with 1,000 clips due Monday and 24,000 zip ties Tuesday, so harness output is capped by consumables this week.",
    "Crew: <strong>the GreenSol self-perform crew STARTED Monday with 10 of its 20 electricians</strong> - the rest wait on tools and transport - and United’s signed LV mobilisation (~Aug 28) has not arrived. Material: 5,000 zip ties reached the field Monday, 24,000 more land Tuesday.")
# risk #3
rep("#3 — Piles: day 12. The material excuse is gone, but United turned in 4 rigs and Zone D is still not graded",
    "#3 — Piles: day 13 in effect. Monday produced only minimal unquantified red-pile work in D - rigs, crane and D grading still missing")
rep("1,766 piles remain (G 502, D 993, E 148, B 36, F 11), about nine rig-days. This risk closes when a pile is driven, not before.",
    "1,766 piles remain (G 502, D 993, E 148, B 36, F 11), about nine rig-days. <strong>Monday's restart produced only \\u201cm\\u00ednimo el avance\\u201d with some red piles in D (Manuel) and no quantity was filed - the executed basis holds at 29,586.</strong> This risk closes when a counted pile is driven, not before.")
# risk #6
rep("#6 — Modules: 5,177/day required, and BOTH East balances are now blocked for named reasons",
    "#6 — Modules: 4,095 on Monday - F unblocked and producing; Zone G is now the balance with no front")
rep("<strong>109,350 of 171,470 (63.8%) after Brumont’s 768 in Area E on Saturday - the only module production on site. Required rises to 5,177/day over 12 working days.</strong>",
    "<strong>113,445 of 171,470 (66.2%) after United’s 4,095 in Area F on Monday - its best day on record, and it lands in the zone that was blocked. Required 5,275/day over 11 working days.</strong>")
rep("<strong>The East, which carries 60,477 of the 62,120 balance, has both of its large blocks blocked for reasons that are now named rather than suspected.</strong> <strong>Zone F (27,018 - 43% of everything left): United reports racking in F1 and F2 OUT OF TOLERANCE ON THE BEARINGS, preventing module installation in those blocks.</strong> That is a quality problem on rows already counted complete, and it explains the zero-module days in F.",
    "<strong>The East carries 56,382 of the 58,025 balance.</strong> <strong>Zone F (22,923): PRODUCING AGAIN - the bearing remediation is executed; the correction report, QA reinspection and formal release are owed before the block closes on paper (Maurin, Aug 24).</strong>")
# production[] tracker row
rep("remaining: '544 to build (ECCS 281 \\u00b7 United 180 \\u00b7 Workforce 83 - RE-CUT basis)', target: '<strong>91 rows/day to Aug 30 (6 working days)</strong>', latest: '<strong>Aug 22: ZERO rows on every crew</strong> - United graded F3, ECCS cleaned up F and E, Workforce filed nothing for a fifth day', cumulative: '1,942 / 2,486 (78.1%) \\u00b7 296 client-released \\u00b7 559 Greensol-released',",
    "remaining: '484 to build (ECCS 251 \\u00b7 United 150 \\u00b7 Workforce 83 - RE-CUT basis)', target: '<strong>97 rows/day to Aug 30 (5 working days)</strong>', latest: '<strong>Aug 24: 60 rows - production restarted</strong> - ECCS 30 in Zone G, United 30 in F; Workforce filed nothing again', cumulative: '2,002 / 2,486 (80.5%) \\u00b7 296 client-released \\u00b7 559 Greensol-released',")
rep("<strong>A zero Saturday puts the requirement at 91 rows/day over the 6 working days left - the highest daily requirement this activity has ever carried, against a demonstrated best of 97 and a normal day of 46-60.</strong>",
    "<strong>Monday's 60 rows still leave the requirement at 97 rows/day over the 5 working days left, against a demonstrated best of 97 and a normal day of 46-60 - the gate needs a dated re-forecast, not a restatement.</strong>")
# production[] modules row
rep("remaining: '62,120 modules', target: '5,177/day \\u2014 Sep 6 (12 working days)', latest: 'Aug 22: 768 - Brumont alone in Area E; United does not work Saturdays', cumulative: '109,350 / 171,470 (63.8%)',",
    "remaining: '58,025 modules', target: '5,275/day \\u2014 Sep 6 (11 working days)', latest: '<strong>Aug 24: 4,095 - all United in Area F, its best day on record</strong>; Brumont filed no Monday report', cumulative: '113,445 / 171,470 (66.2%)',")
rep("<strong>Saturday cost the front the ~3,400 United would have added, and the requirement rises to 5,177/day over 12 working days - above every day the project has ever recorded except two.</strong>",
    "<strong>Monday's 4,095 is United's best day on record and F is producing again after the bearing remediation - but the requirement is 5,275/day over 11 working days, and Zone G (18,486) still has no module front.</strong>")
# field snapshot Brumont note
rep("the East ramp needs 5,177/day.", "the East ramp needs 5,275/day.")
# milestones MC note
rep("Modules reached 63.8%;", "Modules reached 66.2% and trackers 80.5% after Monday's restart (60 rows, 4,095 modules);")
rep("the pile stop is at day 12 with the red piles finally landed but 4 rigs turned in and Zone D still ungraded", "the pile stop is day 13 in effect - Monday produced only minimal unquantified red-pile work in D, with 4 rigs off site and Zone D still ungraded")
rep("trackers closed ZERO on Aug 22 and now need 91/day over 6 working days to Aug 30 - an arithmetic that no longer closes on any demonstrated rate, and the gate should be re-forecast rather than restated", "trackers need 97/day over the 5 working days to Aug 30 - an arithmetic that does not close even after Monday's 60, and the gate should be re-forecast rather than restated")
rep("LV needs 10,288 lf/day against a best-ever 3,610", "LV needs 10,746 lf/day against a best-ever 3,610, with the self-perform crew started at only 10 of its 20 electricians")
# projectTotal note tail
rep("a module rate of 5,177/day with both East balances blocked, and an LV line at 13.9% needing 10,288 lf/day.", "a module rate of 5,275/day with Zone G still without a module front, and an LV line at 13.9% needing 10,746 lf/day.")
open(p,'w',encoding='utf-8').write(t)
print('patch5 ok')
