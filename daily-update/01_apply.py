import sys
s=open('data.js',encoding='utf8').read()
def R(o,n):
    global s
    if s.count(o)!=1: sys.exit('anchor x%d: %s'%(s.count(o),o[:80]))
    s=s.replace(o,n)
R("// CACHE BUSTER 20260928b - ","// CACHE BUSTER 20260928c - Tracker gate card earned measure closed to 100% (2,486 row-equivalents, no open rows) to match the completed ledger. PRIOR 20260928b - ")
R("wipRows: 65, wipEquivalent: 35.9, earnedEquivalent: 2338.9, earnedPct: 94.1, earnedBasis: '","wipRows: 0, wipEquivalent: 0, earnedEquivalent: 2486, earnedPct: 100.0, earnedBasis: '<strong>Sep 28: 2,486 of 2,486 — all rows complete (CM); earned 100%.</strong> PRIOR: ")
open('data.js','w',encoding='utf8').write(s)
h=open('index.html',encoding='utf8').read()
assert h.count('data.js?v=20260928b')==1
open('index.html','w',encoding='utf8').write(h.replace('data.js?v=20260928b','data.js?v=20260928c'))
print('ok')
