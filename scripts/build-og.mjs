// Builds public/og.png (1200x630 link-preview image). Run: node scripts/build-og.mjs
import { createRequire } from "module";
import { fileURLToPath } from "url";
import fs from "fs";
import path from "path";
const { chromium } = createRequire("/root/projects/naukri-refresh/package.json")("playwright");
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const photo = "data:image/jpeg;base64," + fs.readFileSync(path.join(root, "public/me.jpg")).toString("base64");
const html = `<!doctype html><html><head><style>
body{margin:0;width:1200px;height:630px;background:#0b0b12;font-family:"Helvetica Neue",Arial,sans-serif;color:#fff;overflow:hidden;position:relative}
.g1{position:absolute;left:-200px;top:-200px;width:700px;height:700px;background:radial-gradient(circle,rgba(139,92,246,.55),transparent 65%)}
.g2{position:absolute;right:-150px;bottom:-250px;width:700px;height:700px;background:radial-gradient(circle,rgba(34,211,238,.35),transparent 65%)}
.wrap{position:absolute;inset:0;display:flex;align-items:center;justify-content:space-between;padding:0 80px}
.badge{display:inline-block;border:1px solid rgba(16,185,129,.4);background:rgba(16,185,129,.12);color:#34d399;padding:8px 18px;border-radius:999px;font-size:22px}
h1{font-size:78px;line-height:1.02;margin:26px 0 0;letter-spacing:-2px}
.r{font-size:34px;font-weight:600;margin-top:18px;background:linear-gradient(90deg,#a78bfa,#e879f9,#22d3ee);-webkit-background-clip:text;color:transparent}
.s{font-size:26px;color:#a1a1aa;margin-top:14px}
.u{font-size:22px;color:#71717a;margin-top:34px;font-family:monospace}
.ph{width:330px;height:330px;border-radius:40px;padding:5px;background:conic-gradient(#8b5cf6,#d946ef,#22d3ee,#8b5cf6)}
.ph img{width:100%;height:100%;border-radius:36px;object-fit:cover;display:block}
</style></head><body><div class="g1"></div><div class="g2"></div><div class="wrap"><div>
<span class="badge">● Open to AI Engineer roles</span>
<h1>Om Kumar<br>Bhardwaj</h1>
<div class="r">AI Engineer · Senior Software Engineer</div>
<div class="s">Production LLM agents · Java &amp; Python backends</div>
<div class="u">omkumarbhardwaj.netlify.app</div>
</div><div class="ph"><img src="${photo}"></div></div></body></html>`;
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
await p.setContent(html, { waitUntil: "load" });
await p.screenshot({ path: path.join(root, "public/og.png") });
await b.close();
console.log("wrote public/og.png");
