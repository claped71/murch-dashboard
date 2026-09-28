import sys
d=open('data.js',encoding='utf8').read()
def R(o,n):
    global d
    c=d.count(o)
    if c!=1: sys.exit('anchor x%d: %s'%(c,o[:80]))
    d=d.replace(o,n)
R("// CACHE BUSTER 20260928d - ","// CACHE BUSTER 20260928e - Photo gallery (Jose, Sep 28): SET utility-interconnection poles ERECTED over the weekend of Sep 26-27, crew working on the structure; image cropped to keep equipment branding out of frame and served from the Owner report (photo-79). PRIOR 20260928d - ")
R(" photos: [\n", " photos: [\n  { src: 'https://claped71.github.io/murch-project-report/assets/photo-79.webp', fallbackSrc: 'https://claped71.github.io/murch-project-report/assets/photo-79.webp', date: 'September 28, 2026', title: '<strong>SUBSTATION — UTILITY INTERCONNECTION POLES ERECTED</strong> — field photo, weekend Sep 26–27', note: 'The utility-interconnection poles delivered on Saturday are up: erected over the weekend, ahead of the Monday Sep 28 plan, with the crew working on the structure from an aerial lift. Cropped before publishing to keep equipment branding out of frame.' },\n")
R("{ component: 'Mechanical', pct: 61.2, note: '", "{ component: 'Mechanical', pct: 61.2, note: '<strong>Sep 26–27 (weekend): the utility-interconnection poles are ERECTED — ahead of the Monday Sep 28 plan (Jose, field photo).</strong> ")
open('data.js','w',encoding='utf8').write(d)
h=open('index.html',encoding='utf8').read()
assert h.count('data.js?v=20260928d')==1
open('index.html','w',encoding='utf8').write(h.replace('data.js?v=20260928d','data.js?v=20260928e'))
print('ok')
