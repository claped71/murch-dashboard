# -*- coding: utf-8 -*-
# Replaces the data.js CACHE BUSTER line (line 3) in place. Runs before 10_apply.py.
import io

p = 'data.js'
with io.open(p, encoding='utf-8', newline='') as f:
    lines = f.read().split(u'\n')

hits = [i for i, l in enumerate(lines) if l.startswith(u'// CACHE BUSTER ')]
assert len(hits) == 1, 'expected exactly one cache-buster line, got %d' % len(hits)
i = hits[0]
assert lines[i].startswith(u'// CACHE BUSTER 20261023a'), 'unexpected base cache buster: %.40r' % lines[i]

lines[i] = (u"// CACHE BUSTER 20261024b - COMMISSIONING PHASE UPDATE (Oct 21). "
    u"(1) SET MECHANICAL COMPLETION ACHIEVED OCT 20, four days after the Oct 5 weekly carried it at Oct 16. "
    u"(2) READY TO ENERGIZE Oct 30 -> NOV 10 on the planning manager's Oct 21 position, matching the backfeed date the Owner asked for. "
    u"(3) THE CRITICAL PATH IS NO LONGER OURS. Ours: SET energization + hot commissioning once AEP gives backfeed (4 days), "
    u"SCADA point-to-point with Tenaska. Owner/third party: Consent to Energize (10 BD, Tax Equity per Darrin, Heelstone by contract), "
    u"AEP backfeed coordination (EPCA 4.7 = Owner, must coincide with the Consent), Day of Operation notice, Test Energy package to PJM, "
    u"the Tenaska kit, PowerX tests at the utility substation, B&V works. If PowerX cannot attend until the week of Nov 16 the backfeed "
    u"and Test Energy delay sits with the utility and the Owner, not with us - RECORDED. Test Energy on Nov 11 was not viable regardless: "
    u"no margin for SET hot commissioning and it misses the Tenaska/PJM E2E, 3 BD earlier. The Owner's own sequence is unsettled - "
    u"it asked for an AEP meeting on Oct 20 to understand the new requirements and AEP's backfeed position. "
    u"(4) IV CURVE CAUSE ESTABLISHED: BLOCKED ON IRRADIANCE - the minimum project-required irradiance has not been met. "
    u"Not crews, not paperwork. Same constraint behind the planner's view that capacity/availability tests will not finish in November, "
    u"and it puts the 20%-now / 80%-spring-2027 sampling proposal against a contract requiring 100% - an Owner agreement not yet sought. "
    u"(5) MC checklist: four permits outstanding; revised SPCC plan signed and issued Oct 21; MPC-53 (EGLE HDD) open. "
    u"PIS, COD and SC are NOT restated - the planner has not reissued them off the Nov 10 RTE and they are owed.")

with io.open(p, 'w', encoding='utf-8', newline='') as f:
    f.write(u'\n'.join(lines))
print('cache buster set')
