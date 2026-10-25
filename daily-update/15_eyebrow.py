# -*- coding: utf-8 -*-
# Trims the hero eyebrow to 140 visible characters (the layout rule caps it at ~160).
import io
P = ""
def rd(p):
    with io.open(P+p, encoding='utf-8', newline='') as f: return f.read()
def wr(p, s):
    with io.open(P+p, 'w', encoding='utf-8', newline='') as f: f.write(s)
def rep(s, old, new):
    c=s.count(old); assert c==1, "x%d: %.85r" % (c, old)
    return s.replace(old, new, 1)

H = rd("index.html")
H = rep(H, u'<p class="eyebrow"><strong style="color:#0c6b48">0 recordable &middot; 246,745 h</strong> | Thru <strong>Tue Oct 20</strong> (cable/MV) | <strong style="color:#0c6b48">MODULES 100%</strong> &middot; LV <strong>90.7%</strong> &middot; MV <strong>252/264</strong> &middot; SET EV <strong>99.7%</strong> &middot; PV polarity <strong>315/419</strong> &middot; IV curve <strong>0/419</strong> &middot; project <strong>98.65%</strong></p>',
           u'<p class="eyebrow"><strong style="color:#0c6b48">0 recordable &middot; 246,745 h</strong> | Thru <strong>Tue Oct 20</strong> | <strong style="color:#0c6b48">MODULES 100%</strong> &middot; LV <strong>90.7%</strong> &middot; MV <strong>252/264</strong> &middot; SET <strong>99.7%</strong> &middot; polarity <strong>315/419</strong> &middot; IV <strong>0/419</strong> &middot; project <strong>98.65%</strong></p>')
wr("index.html", H)
print("eyebrow trimmed")
