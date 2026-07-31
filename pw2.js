const {chromium} = require('playwright');
(async () => {
  const b = await chromium.launch({executablePath:'/opt/pw-browsers/chromium'});
  const p = await b.newPage(); const errs=[];
  p.on('pageerror', e=>errs.push('PAGEERROR: '+e.message));
  await p.goto('http://localhost:8899/index.html', {waitUntil:'domcontentloaded', timeout:45000});
  await p.waitForTimeout(3000);
  const txt = await p.evaluate(()=>document.body.innerText);
  const canv = await p.$$eval('canvas', cs=>cs.length);
  console.log('PAGE ERRORS:', errs.length?errs:'NONE', '| canvases', canv);
  for (const t of ['28,285','90.2','571','58 piles','83 in progress','39.6','35 rows','40,147','296','171,470 / 171,470']) console.log('OK?', t, txt.includes(t));
  for (const t of ['27,834','3,518','509 piles','130 in progress','82 rows']) console.log('STALE', t, txt.includes(t));
  await b.close();
})().catch(e=>{console.log('FATAL',e.message);process.exit(1)});
