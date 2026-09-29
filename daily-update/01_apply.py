import sys
d=open('data.js',encoding='utf8').read()
def R(o,n):
    global d
    c=d.count(o)
    if c!=1: sys.exit('anchor x%d: %s'%(c,o[:80]))
    d=d.replace(o,n)
T="<strong>Sep 28 (Jose): SET civil is COMPLETE except three close-out items due by the end of this week (Sat Oct 3): partial reinstallation of the SET perimeter fence, regrading, and the final rock layer.</strong> "
R("{ circuit: 'SE', activity: 'Civil backfill', start: 'Aug 27', finish: 'Sep 5', status: 'Active', label: 'NEAR COMPLETE', evidence: '",
  "{ circuit: 'SE', activity: 'Civil (backfill and all civil tasks)', start: 'Aug 27', finish: 'Sep 5', status: 'Complete', label: 'COMPLETE · 3 CLOSE-OUT ITEMS BY OCT 3', evidence: '"+T+"PRIOR: ")
R("{ component: 'Civil', pct: 95.6, note: '","{ component: 'Civil', pct: 95.6, note: '"+T)
R("{ activity: 'Foundation SET (composite)', company: 'AB Power', done: 78.6, remaining: 21.4, status: 'Active', note: '","{ activity: 'Foundation SET (composite)', company: 'AB Power', done: 78.6, remaining: 21.4, status: 'Active', note: '"+T)
R("// CACHE BUSTER 20260928f - ","// CACHE BUSTER 20260928g - SET civil (Jose, Sep 28): all civil tasks complete except partial SET perimeter fence reinstallation, regrading and the final rock layer, due by Sat Oct 3; plan-tracker SE civil row closed (was 'Active - near complete'); civil % held at 95.6 (44 of 47, consistent with the three open items). PRIOR 20260928f - ")
open('data.js','w',encoding='utf8').write(d)
h=open('index.html',encoding='utf8').read()
assert h.count('data.js?v=20260928f')==1
open('index.html','w',encoding='utf8').write(h.replace('data.js?v=20260928f','data.js?v=20260928g'))
print('ok')
