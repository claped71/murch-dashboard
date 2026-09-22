# Remove the "Plan activities due through September" table + its note from #plan-tracker (Jose, Sep 22)
import os
p = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'index.html')
s = open(p, encoding='utf-8').read()
def rep(a, b):
    global s
    assert s.count(a) == 1, (s.count(a), a[:80])
    s = s.replace(a, b)
rep('''        <h3 style="margin:18px 0 6px">Plan activities due through September &mdash; status on the executed basis</h3>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Circuit</th><th>Plan activity</th><th>Plan window</th><th>Status</th><th>Evidence (dashboard basis)</th></tr></thead>
            <tbody id="planNearTerm"></tbody>
          </table>
        </div>
        <p class="chart-context" id="planTrackerNote"></p>
''', '')
rep("    document.getElementById('planNearTerm').innerHTML = (P.nearTerm || []).map(", "    if (document.getElementById('planNearTerm')) document.getElementById('planNearTerm').innerHTML = (P.nearTerm || []).map(")
rep("    document.getElementById('planTrackerNote').innerHTML = esc(P.note);", "    if (document.getElementById('planTrackerNote')) document.getElementById('planTrackerNote').innerHTML = esc(P.note);")
open(p, 'w', encoding='utf-8').write(s)
print('ok')
