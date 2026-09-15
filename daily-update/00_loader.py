#!/usr/bin/env python3
# Decodes and runs the day's apply script (gz+base64, split into daily-update/chunk_N.txt).
import base64, glob, gzip, io, re, sys

files = sorted(glob.glob('daily-update/chunk_*.txt'), key=lambda p: int(re.search(r'chunk_(\d+)', p).group(1)))
if not files:
    sys.stderr.write('no chunks found\n')
    sys.exit(1)
blob = ''.join(io.open(f, encoding='ascii').read() for f in files)
src = gzip.decompress(base64.b64decode(blob)).decode('utf-8')
exec(compile(src, 'daily-update/01_apply.py', 'exec'), {'__name__': '__main__'})
