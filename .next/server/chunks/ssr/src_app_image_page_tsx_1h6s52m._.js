module.exports=[73919,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(47352),e=a.i(61664),f=a.i(39353),g=a.i(92378),h=a.i(20238),i=a.i(56283);let j=`
.gwr-landing {
  --bg: #ffffff;
  --bg-soft: #f6f8fc;
  --bg-soft2: #eef2fb;
  --card: #ffffff;
  --border: #e6e8ef;
  --text: #1a1c23;
  --muted: #5b6472;
  --brand: #4285f4;
  --brand-dark: #1a73e8;
  --brand-2: #9b72cb;
  --brand-3: #d96570;
  --accent: #1e8e3e;
  --radius: 16px;
  --max: 1180px;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}
.dark .gwr-landing {
  --bg: #000000;
  --bg-soft: #09090b;
  --bg-soft2: #18181b;
  --card: #09090b;
  --border: #27272a;
  --text: #f4f4f5;
  --muted: #a1a1aa;
  --brand: #3b82f6;
  --brand-dark: #3b82f6;
  --brand-2: #a855f7;
  --brand-3: #f43f5e;
  --accent: #22c55e;
}
.gwr-landing * { box-sizing: border-box; }
.gwr-landing #originalInfo, .gwr-landing #processedInfo { display: none !important; }
.gwr-landing a { color: inherit; text-decoration: none; }
.gwr-landing .wrap { max-width: var(--max); margin: 0 auto; padding: 0 24px; }
.gwr-landing .gradient-text {
  background: linear-gradient(120deg, var(--brand), var(--brand-2), var(--brand-3));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  display: inline-block;
}
.gwr-landing .free-shine {
  background: linear-gradient(120deg, #4285f4 0%, #9b72cb 25%, #d96570 50%, #9b72cb 75%, #4285f4 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  animation: shine-effect 3s linear infinite;
  font-weight: 850;
  display: inline-block;
}
@keyframes shine-effect {
  0% { background-position: 0% center; }
  100% { background-position: 200% center; }
}
.gwr-landing header {
  position: sticky; top: 0; z-index: 50;
  backdrop-filter: blur(14px); background: rgba(255,255,255,0.82);
  border-bottom: 1px solid var(--border);
}
.dark .gwr-landing header {
  background: rgba(0,0,0,0.82);
  border-bottom-color: var(--border);
}
.gwr-landing .nav { display: flex; align-items: center; justify-content: space-between; height: 64px; }
.logo-container { flex: 1; display: flex; justify-content: flex-start; }
.gwr-landing .logo { display: flex; align-items: center; gap: 10px; font-weight: 700; font-size: 15.5px; }
.gwr-landing .logo .mark {
  width: 28px; height: 28px; border-radius: 8px;
  background: conic-gradient(from 200deg, var(--brand), var(--brand-2), var(--brand-3), var(--brand));
  display: grid; place-items: center; color: #fff; font-size: 14px;
}
.gwr-landing .nav-links { display: flex; gap: 24px; font-size: 14px; color: var(--muted); font-weight: 500; justify-content: center; }
.gwr-landing .nav-links a:hover { color: var(--text); }
.gwr-landing .nav-links a.active { color: var(--text); font-weight: 600; }
.gwr-landing .nav-right { flex: 1; display: flex; justify-content: flex-end; align-items: center; gap: 12px; }

.gwr-landing .pill {
  display: inline-flex; align-items: center; gap: 7px;
  border: 1px solid var(--border); padding: 7px 13px; border-radius: 999px;
  font-size: 13px; color: var(--muted); background: var(--bg);
}
.gwr-landing .btn {
  display: inline-flex; align-items: center; gap: 8px; justify-content: center;
  padding: 11px 20px; border-radius: 11px; font-weight: 600; font-size: 14px;
  cursor: pointer; border: 1px solid transparent; transition: .18s ease; white-space: nowrap;
}
.gwr-landing .btn-primary { background: var(--brand-dark); color: #fff; box-shadow: 0 6px 18px rgba(26,115,232,.28); }
.gwr-landing .btn-primary:hover { background: #1763c9; transform: translateY(-1px); box-shadow: 0 10px 24px rgba(26,115,232,.36); }
.gwr-landing .btn-ghost { background: var(--bg); border-color: var(--border); color: var(--text); }
.gwr-landing .btn-ghost:hover { background: var(--bg-soft); }
.gwr-landing .hero { position: relative; padding: 64px 0 36px; text-align: center; overflow: hidden; }
.gwr-landing .hero::before {
  content: ""; position: absolute; inset: -200px 0 auto 0; height: 480px;
  background: radial-gradient(60% 60% at 50% 0%, rgba(66,133,244,.12), transparent 70%); pointer-events: none;
}
.gwr-landing .hero-badge {
  display: inline-flex; align-items: center; gap: 8px; font-size: 13px;
  color: var(--muted); border: 1px solid var(--border); background: var(--bg-soft);
  padding: 6px 14px; border-radius: 999px; margin-bottom: 22px;
}
.gwr-landing .hero-badge .dot { width: 7px; height: 7px; border-radius: 50%; background: var(--accent); }
.gwr-landing h1 { font-size: clamp(34px, 6vw, 58px); line-height: 1.08; letter-spacing: -1.5px; font-weight: 800; margin: 0; }
.gwr-landing .sub { max-width: 660px; margin: 20px auto 0; color: var(--muted); font-size: 18px; }
.gwr-landing .hero-cta { display: flex; gap: 14px; justify-content: center; margin-top: 30px; flex-wrap: wrap; }
.gwr-landing .stats { display: flex; gap: 28px; justify-content: center; margin-top: 26px; flex-wrap: wrap; color: var(--muted); font-size: 14px; }
.gwr-landing .stats span { display: inline-flex; align-items: center; gap: 7px; }
.gwr-landing .check { color: var(--accent); }
.gwr-landing .tool { margin: 44px auto 0; max-width: 940px; }
.gwr-landing .tabs { display: inline-flex; gap: 6px; padding: 5px; background: var(--bg-soft); border: 1px solid var(--border); border-radius: 12px; margin-bottom: 18px; }
.gwr-landing .tab {
  padding: 9px 22px; border-radius: 8px; font-size: 14px; font-weight: 600;
  color: var(--muted); cursor: pointer; border: none; background: transparent; transition: .15s; font-family: inherit;
}
.gwr-landing .tab.active { background: var(--brand-dark); color: #fff; }
.gwr-landing .tab .beta { font-size: 10px; opacity: .85; margin-left: 5px; }
.gwr-landing .dropzone {
  border: 2px dashed #cdd5e6; border-radius: var(--radius);
  background: linear-gradient(180deg, var(--card), var(--bg-soft)); padding: 46px 24px; text-align: center; transition: .2s; cursor: pointer;
}
.dark .gwr-landing .dropzone {
  border-color: var(--border);
  background: linear-gradient(180deg, var(--card), var(--bg-soft));
}
.gwr-landing .dropzone:hover { border-color: var(--brand); background: var(--bg-soft2); }
.gwr-landing .dropzone .icon {
  margin: 0 auto 16px; display: grid; place-items: center; font-size: 26px;
}
.gwr-landing .dropzone h3 { font-size: 19px; }
.gwr-landing .dropzone p { color: var(--muted); font-size: 14px; margin-top: 6px; }
.gwr-landing .formats { display: flex; gap: 8px; justify-content: center; margin-top: 16px; flex-wrap: wrap; }
.gwr-landing .fmt { font-size: 12px; color: var(--muted); border: 1px solid var(--border); padding: 4px 10px; border-radius: 7px; background: var(--bg-soft); }
.gwr-landing .compare { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 28px; }
.gwr-landing .shot { position: relative; border-radius: var(--radius); overflow: hidden; border: 1px solid var(--border); aspect-ratio: 4/3; }
.gwr-landing .shot .label {
  position: absolute; top: 12px; left: 12px; font-size: 12px; font-weight: 600; color:#fff; z-index: 10;
  padding: 5px 11px; border-radius: 7px; backdrop-filter: blur(6px); background: rgba(0,0,0,.42);
}
.gwr-landing .shot.before { background: linear-gradient(135deg, #dbe4f5, #cdd9f0); }
.gwr-landing .shot.after { background: linear-gradient(135deg, #d6efe0, #d2e8f7); }
.dark .gwr-landing .shot.before { background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(59, 130, 246, 0.05)); }
.dark .gwr-landing .shot.after { background: linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(34, 197, 94, 0.05)); }
.gwr-landing .watermark { position: absolute; bottom: 14px; right: 14px; font-size: 13px; font-weight: 700; color: rgba(30,40,60,.55); display: flex; align-items: center; gap: 5px; }
.dark .gwr-landing .watermark { color: rgba(255,255,255,.45); }
.gwr-landing .shot .photo { position:absolute; inset:0; display:grid; place-items:center; color: var(--muted); font-size: 13px; }
.gwr-landing section { padding: 78px 0; }
.gwr-landing .eyebrow { color: var(--brand-dark); font-weight: 700; font-size: 13px; letter-spacing: 1.4px; text-transform: uppercase; }
.gwr-landing .sec-head { text-align: center; max-width: 720px; margin: 0 auto 48px; }
.gwr-landing .sec-head h2 { font-size: clamp(28px, 4vw, 42px); letter-spacing: -1px; margin-top: 12px; font-weight: 800; }
.gwr-landing .sec-head p { color: var(--muted); margin-top: 14px; font-size: 17px; }
.gwr-landing .steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
.gwr-landing .step { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); padding: 28px; box-shadow: 0 1px 3px rgba(16,24,40,.04); }
.gwr-landing .step .num { width: 38px; height: 38px; border-radius: 10px; font-weight: 800; background: rgba(66,133,244,.12); color: var(--brand-dark); display: grid; place-items: center; margin-bottom: 16px; }
.dark .gwr-landing .step .num { background: rgba(59, 130, 246, 0.15); color: #3b82f6; }
.gwr-landing .step h3 { font-size: 18px; }
.gwr-landing .step p { color: var(--muted); font-size: 14px; margin-top: 8px; }
.gwr-landing .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.gwr-landing .card { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); padding: 26px; transition: .2s; box-shadow: 0 1px 3px rgba(16,24,40,.04); }
.gwr-landing .card:hover { border-color: var(--brand); transform: translateY(-3px); box-shadow: 0 12px 28px rgba(16,24,40,.08); }
.gwr-landing .card .emoji { width: 46px; height: 46px; border-radius: 12px; display: grid; place-items: center; font-size: 22px; background: var(--bg-soft2); margin-bottom: 16px; }
.gwr-landing .card h3 { font-size: 17px; }
.gwr-landing .card p { color: var(--muted); font-size: 14px; margin-top: 8px; }
.gwr-landing .flow { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.gwr-landing .flow-card { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); padding: 26px; box-shadow: 0 1px 3px rgba(16,24,40,.04); }
.gwr-landing .flow-card .tag { font-size: 12px; color: var(--brand-dark); font-weight: 700; }
.gwr-landing .flow-card h3 { font-size: 18px; margin-top: 10px; }
.gwr-landing .flow-card p { color: var(--muted); font-size: 14px; margin-top: 8px; }
.gwr-landing .flow-card a { display: inline-flex; gap: 6px; margin-top: 14px; color: var(--brand-dark); font-size: 14px; font-weight: 600; }
.gwr-landing .faq { max-width: 780px; margin: 0 auto; }
.gwr-landing details { background: var(--card); border: 1px solid var(--border); border-radius: 12px; padding: 18px 22px; margin-bottom: 12px; cursor: pointer; }
.gwr-landing details[open] { border-color: var(--brand); }
.gwr-landing summary { font-weight: 600; font-size: 16px; list-style: none; display: flex; justify-content: space-between; align-items: center; }
.gwr-landing summary::-webkit-details-marker { display: none; }
.gwr-landing summary::after { content: "+"; font-size: 22px; color: var(--muted); font-weight: 400; }
.gwr-landing details[open] summary::after { content: "−"; }
.gwr-landing details p { color: var(--muted); font-size: 14.5px; margin-top: 12px; }
.gwr-landing .cta-band { background: linear-gradient(120deg, #1a73e8, #4285f4 55%, #9b72cb); border-radius: 24px; padding: 60px 32px; text-align: center; color: #fff; }
.gwr-landing .cta-band h2 { font-size: clamp(28px, 4vw, 40px); letter-spacing: -1px; font-weight: 800; }
.gwr-landing .cta-band p { color: rgba(255,255,255,.9); margin-top: 14px; font-size: 17px; }
.gwr-landing .cta-band .hero-cta { margin-top: 28px; }
.gwr-landing .cta-band .btn-primary { background: #fff; color: var(--brand-dark); box-shadow: none; }
.gwr-landing .cta-band .btn-primary:hover { background: #f0f3fb; }
.gwr-landing .cta-band .btn-ghost { background: transparent; border-color: rgba(255,255,255,.5); color: #fff; }
.gwr-landing .cta-band .btn-ghost:hover { background: rgba(255,255,255,.12); }
.gwr-landing footer { border-top: 1px solid var(--border); padding: 50px 0 40px; color: var(--muted); background: var(--bg-soft); }
.dark .gwr-landing footer { background: var(--bg-soft); border-top-color: var(--border); }
.gwr-landing .foot { display: flex; justify-content: space-between; gap: 24px; flex-wrap: wrap; align-items: center; }
.gwr-landing .foot-links { display: flex; gap: 22px; font-size: 14px; }
.gwr-landing .foot-links a:hover { color: var(--text); }
.gwr-landing .lang { background: var(--bg); border: 1px solid var(--border); color: var(--muted); padding: 8px 12px; border-radius: 9px; font-size: 13px; }
@media (max-width: 880px) {
  .gwr-landing .nav-right .pill { display: none; }
  .gwr-landing .steps, .gwr-landing .grid, .gwr-landing .flow, .gwr-landing .compare { grid-template-columns: 1fr; }
}
`;a.s(["default",0,function(){return(0,c.useEffect)(()=>{setTimeout(()=>{(0,d.initApp)(),document.body.classList.remove("loading")},100)},[]),(0,b.jsxs)("div",{className:"gwr-landing",children:[(0,b.jsx)("style",{children:j}),(0,b.jsx)(h.default,{activeTab:"img"}),(0,b.jsx)("section",{className:"hero",style:{paddingBottom:0},children:(0,b.jsxs)("div",{className:"wrap",children:[(0,b.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,b.jsxs)("div",{className:"hero-badge",children:[(0,b.jsx)("span",{className:"dot"})," 100% local · No upload · No sign-up"]})}),(0,b.jsxs)("h1",{children:[(0,b.jsx)("span",{className:"free-shine",children:"Free"})," ",(0,b.jsx)("span",{className:"gradient-text",children:"Image"}),(0,b.jsx)("br",{}),"Watermark Remover"]}),(0,b.jsx)("p",{className:"sub",children:"Clean watermarks, logos, and star overlays from a single JPG, PNG, or WebP image. Processing happens entirely on your device."}),(0,b.jsxs)("div",{className:"tabs",style:{marginTop:"24px"},children:[(0,b.jsx)("a",{href:"/image",className:"tab active",children:"Single Image"}),(0,b.jsx)("a",{href:"/multi-image",className:"tab",children:"Multi Images"})]}),(0,b.jsxs)("div",{className:"tool",id:"tool",children:[(0,b.jsxs)("div",{className:"dropzone",id:"uploadArea",children:[(0,b.jsx)("div",{className:"icon",style:{color:"var(--brand)"},children:(0,b.jsxs)("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,b.jsx)("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),(0,b.jsx)("polyline",{points:"17 8 12 3 7 8"}),(0,b.jsx)("line",{x1:"12",y1:"3",x2:"12",y2:"15"})]})}),(0,b.jsx)("h3",{children:"Drag & drop an image here"}),(0,b.jsx)("p",{children:"or click to browse — processing happens 100% on your device"}),(0,b.jsxs)("div",{className:"formats",children:[(0,b.jsx)("span",{className:"fmt",children:"JPG"}),(0,b.jsx)("span",{className:"fmt",children:"PNG"}),(0,b.jsx)("span",{className:"fmt",children:"WebP"})]}),(0,b.jsx)("input",{type:"file",id:"fileInput",accept:"image/jpeg,image/png,image/webp",style:{display:"none"}})]}),(0,b.jsxs)("div",{className:"compare",id:"staticCompare",children:[(0,b.jsxs)("div",{className:"shot before",children:[(0,b.jsx)("span",{className:"label",children:"Before"}),(0,b.jsx)("div",{className:"photo",children:"Original image"}),(0,b.jsx)("span",{className:"watermark",children:"✦ Gemini"})]}),(0,b.jsxs)("div",{className:"shot after",children:[(0,b.jsx)("span",{className:"label",children:"After"}),(0,b.jsx)("div",{className:"photo",children:"Watermark removed"})]})]}),(0,b.jsxs)("div",{id:"singlePreview",style:{display:"none",marginTop:"28px"},children:[(0,b.jsx)("div",{className:"relative w-full flex-1 flex items-center justify-center select-none group min-h-[400px] rounded-[16px] border border-[#e6e8ef] overflow-hidden",style:{backgroundImage:"url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iI2Y5ZmRmZCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjZjJmMmYyIi8+PHJlY3QgeD0iMTAiIHk9IjEwIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiNmMmYyZjIiLz48L3N2Zz4=')"},children:(0,b.jsxs)("div",{id:"comparisonContainer",className:"relative mx-auto w-fit max-w-full",children:[(0,b.jsx)("img",{id:"originalImage",className:"block w-auto h-auto max-w-full max-h-[65vh] object-contain object-right-bottom",draggable:"false"}),(0,b.jsx)("div",{id:"processedOverlay",className:"absolute top-0 left-0 h-full w-[50%] overflow-hidden border-r-[1.5px] border-white shadow-[1px_0_4px_rgba(0,0,0,0.15)] box-content z-10",style:{display:"none"},children:(0,b.jsx)("img",{id:"processedImage",className:"block h-full max-w-none object-contain object-right-bottom",draggable:"false"})}),(0,b.jsx)("div",{id:"sliderHandle",className:"absolute top-0 bottom-0 w-10 -ml-5 z-20 cursor-col-resize flex items-center justify-center group-hover:opacity-100 transition-opacity",style:{left:"50%",display:"none"},children:(0,b.jsx)("div",{className:"absolute w-7 h-7 bg-white rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.2)] flex items-center justify-center border border-[#e6e8ef]",children:(0,b.jsx)("svg",{className:"w-3.5 h-3.5 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,b.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2.5",d:"M8 9l-3 3 3 3m8-6l3 3-3 3"})})})}),(0,b.jsx)("div",{className:"absolute top-3 left-3 backdrop-blur text-xs font-medium px-2 py-0.5 rounded shadow-sm border pointer-events-none z-30",style:{background:"rgba(var(--header-bg-rgb), 0.9)",color:"var(--text)",borderColor:"var(--border)"},children:"Processed"}),(0,b.jsx)("div",{className:"absolute top-3 right-3 backdrop-blur text-xs font-medium px-2 py-0.5 rounded shadow-sm border pointer-events-none z-30",style:{background:"rgba(var(--header-bg-rgb), 0.9)",color:"var(--text)",borderColor:"var(--border)"},children:"Original"})]})}),(0,b.jsx)("div",{id:"originalInfo",style:{display:"none"}}),(0,b.jsx)("div",{id:"processedInfo",style:{display:"none"}}),(0,b.jsxs)("div",{style:{display:"flex",gap:"12px",justifyContent:"center",margin:"24px auto"},children:[(0,b.jsxs)("button",{id:"downloadBtn",className:"btn btn-primary",style:{display:"none"},children:[(0,b.jsx)("svg",{width:"18",height:"18",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,b.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"})}),(0,b.jsx)("span",{children:"Download Result"})]}),(0,b.jsx)("button",{id:"resetBtn",className:"btn btn-ghost",children:"Change File"})]}),(0,b.jsx)("div",{id:"statusMessage",style:{textAlign:"center",marginTop:"12px",fontSize:"14px",color:"var(--muted)"}})]})]})]})}),(0,b.jsx)("section",{className:"seo-content",style:{marginTop:"60px",padding:"60px 0",background:"var(--bg-soft)"},children:(0,b.jsxs)("div",{className:"wrap",children:[(0,b.jsxs)("div",{className:"sec-head",style:{textAlign:"center",marginBottom:"48px",maxWidth:"720px",margin:"0 auto 48px"},children:[(0,b.jsx)("span",{className:"eyebrow",style:{color:"var(--brand-dark)",fontWeight:700,fontSize:"13px",textTransform:"uppercase",letterSpacing:"1.4px"},children:"Why Choose Our Tool"}),(0,b.jsx)("h2",{style:{fontSize:"clamp(28px, 4vw, 42px)",fontWeight:800,marginTop:"12px",letterSpacing:"-1px"},children:"The Best Free Gemini Image Watermark Remover"}),(0,b.jsx)("p",{style:{color:"var(--muted)",marginTop:"14px",fontSize:"17px"},children:"Remove watermarks from your AI-generated images without compromising quality or privacy. Our tool runs directly in your browser, meaning your photos are never uploaded to any server."})]}),(0,b.jsxs)("div",{className:"grid-features",style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 300px), 1fr))",gap:"24px"},children:[(0,b.jsxs)("div",{className:"feature-card",style:{background:"var(--card)",padding:"32px",borderRadius:"20px",boxShadow:"0 4px 24px rgba(0,0,0,0.04)",border:"1px solid var(--border)"},children:[(0,b.jsx)("div",{className:"f-icon",style:{display:"flex",alignItems:"center",justifyContent:"center",width:"48px",height:"48px",borderRadius:"12px",background:"rgba(66, 133, 244, 0.1)",color:"var(--brand)",marginBottom:"20px"},children:(0,b.jsx)(e.Target,{size:24})}),(0,b.jsx)("h3",{style:{fontSize:"18px",fontWeight:700,marginBottom:"12px"},children:"Pixel-Accurate Restoration"}),(0,b.jsx)("p",{style:{color:"var(--muted)",fontSize:"14px",lineHeight:1.6},children:"We don't use AI repainting. Our algorithm mathematically reverses the watermark's alpha blend to recover the exact original pixels underneath."})]}),(0,b.jsxs)("div",{className:"feature-card",style:{background:"var(--card)",padding:"32px",borderRadius:"20px",boxShadow:"0 4px 24px rgba(0,0,0,0.04)",border:"1px solid var(--border)"},children:[(0,b.jsx)("div",{className:"f-icon",style:{display:"flex",alignItems:"center",justifyContent:"center",width:"48px",height:"48px",borderRadius:"12px",background:"rgba(16, 185, 129, 0.1)",color:"var(--success)",marginBottom:"20px"},children:(0,b.jsx)(f.Lock,{size:24})}),(0,b.jsx)("h3",{style:{fontSize:"18px",fontWeight:700,marginBottom:"12px"},children:"100% Secure & Private"}),(0,b.jsx)("p",{style:{color:"var(--muted)",fontSize:"14px",lineHeight:1.6},children:"Since everything happens locally in your browser, your personal images are completely safe and are never sent over the internet."})]}),(0,b.jsxs)("div",{className:"feature-card",style:{background:"var(--card)",padding:"32px",borderRadius:"20px",boxShadow:"0 4px 24px rgba(0,0,0,0.04)",border:"1px solid var(--border)"},children:[(0,b.jsx)("div",{className:"f-icon",style:{display:"flex",alignItems:"center",justifyContent:"center",width:"48px",height:"48px",borderRadius:"12px",background:"rgba(245, 158, 11, 0.1)",color:"var(--warn)",marginBottom:"20px"},children:(0,b.jsx)(g.Zap,{size:24})}),(0,b.jsx)("h3",{style:{fontSize:"18px",fontWeight:700,marginBottom:"12px"},children:"Bulk Processing"}),(0,b.jsx)("p",{style:{color:"var(--muted)",fontSize:"14px",lineHeight:1.6},children:"Drop dozens of JPG, PNG, or WebP images at once. We'll clean them all instantly using parallel processing threads and give you a ZIP file."})]})]})]})}),(0,b.jsx)("section",{className:"how-section",style:{padding:"80px 0",background:"var(--bg)"},children:(0,b.jsxs)("div",{className:"wrap",children:[(0,b.jsxs)("div",{className:"sec-head",style:{textAlign:"center",marginBottom:"48px",maxWidth:"720px",margin:"0 auto 48px"},children:[(0,b.jsx)("span",{className:"eyebrow",style:{color:"var(--brand-dark)",fontWeight:700,fontSize:"13px",textTransform:"uppercase",letterSpacing:"1.4px"},children:"How it works"}),(0,b.jsx)("h2",{style:{fontSize:"clamp(28px, 4vw, 38px)",fontWeight:800,letterSpacing:"-1px",marginTop:"12px"},children:"How to Remove Image Watermarks Online"})]}),(0,b.jsxs)("div",{className:"steps-container",style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 280px), 1fr))",gap:"24px"},children:[(0,b.jsxs)("div",{className:"step-box",style:{padding:"28px",border:"1px solid var(--border)",background:"var(--card)",borderRadius:"16px",boxShadow:"0 1px 3px rgba(16,24,40,.04)"},children:[(0,b.jsx)("div",{style:{width:"38px",height:"38px",borderRadius:"10px",background:"rgba(66,133,244,.12)",color:"var(--brand-dark)",display:"grid",placeItems:"center",fontWeight:800,marginBottom:"16px"},children:"1"}),(0,b.jsx)("h3",{style:{fontSize:"18px",fontWeight:700,marginBottom:"8px"},children:"Upload Photos"}),(0,b.jsx)("p",{style:{color:"var(--muted)",fontSize:"14px"},children:"Drag and drop your JPG, PNG, or WebP file into the workspace above. Bulk uploads are supported."})]}),(0,b.jsxs)("div",{className:"step-box",style:{padding:"28px",border:"1px solid var(--border)",background:"var(--card)",borderRadius:"16px",boxShadow:"0 1px 3px rgba(16,24,40,.04)"},children:[(0,b.jsx)("div",{style:{width:"38px",height:"38px",borderRadius:"10px",background:"rgba(66,133,244,.12)",color:"var(--brand-dark)",display:"grid",placeItems:"center",fontWeight:800,marginBottom:"16px"},children:"2"}),(0,b.jsx)("h3",{style:{fontSize:"18px",fontWeight:700,marginBottom:"8px"},children:"Auto Processing"}),(0,b.jsx)("p",{style:{color:"var(--muted)",fontSize:"14px"},children:"In-browser processing instantly detects and strips the Gemini logo, star overlay, or Nano Banana watermark."})]}),(0,b.jsxs)("div",{className:"step-box",style:{padding:"28px",border:"1px solid var(--border)",background:"var(--card)",borderRadius:"16px",boxShadow:"0 1px 3px rgba(16,24,40,.04)"},children:[(0,b.jsx)("div",{style:{width:"38px",height:"38px",borderRadius:"10px",background:"rgba(66,133,244,.12)",color:"var(--brand-dark)",display:"grid",placeItems:"center",fontWeight:800,marginBottom:"16px"},children:"3"}),(0,b.jsx)("h3",{style:{fontSize:"18px",fontWeight:700,marginBottom:"8px"},children:"Download Result"}),(0,b.jsx)("p",{style:{color:"var(--muted)",fontSize:"14px"},children:"Once finished, instantly download your crisp, watermark-free images as PNGs or grab them all in a ZIP archive."})]})]})]})}),(0,b.jsx)(i.default,{})]})}])}];

//# sourceMappingURL=src_app_image_page_tsx_1h6s52m._.js.map