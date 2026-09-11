import gzip,base64,glob,hashlib
parts=[]
for f in sorted(glob.glob('daily-update/chunk*.txt')):
    parts.append(''.join(open(f).read().split()))
blob=''.join(parts)
print('blob',len(blob),hashlib.sha256(blob.encode()).hexdigest()[:16])
exec(compile(gzip.decompress(base64.b64decode(blob)).decode('utf-8'),'sep11_bundle','exec'))
