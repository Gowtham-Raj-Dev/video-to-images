(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,28623,e=>{"use strict";let r=(0,e.i(56420).default)("sparkles",[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]]);e.s(["Sparkles",0,r],28623)},2971,56420,13642,e=>{"use strict";var r=e.i(43476),a=e.i(71645);let n=(...e)=>e.filter((e,r,a)=>!!e&&""!==e.trim()&&a.indexOf(e)===r).join(" ").trim(),i=e=>{let r=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,r,a)=>a?a.toUpperCase():r.toLowerCase());return r.charAt(0).toUpperCase()+r.slice(1)};var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let t=(0,a.createContext)({}),s=(0,a.forwardRef)(({color:e,size:r,strokeWidth:i,absoluteStrokeWidth:s,className:d="",children:l,iconNode:c,...g},p)=>{let{size:x=24,strokeWidth:h=2,absoluteStrokeWidth:m=!1,color:b="currentColor",className:f=""}=(0,a.useContext)(t)??{},u=s??m?24*Number(i??h)/Number(r??x):i??h;return(0,a.createElement)("svg",{ref:p,...o,width:r??x??o.width,height:r??x??o.height,stroke:e??b,strokeWidth:u,className:n("lucide",f,d),...!l&&!(e=>{for(let r in e)if(r.startsWith("aria-")||"role"===r||"title"===r)return!0;return!1})(g)&&{"aria-hidden":"true"},...g},[...c.map(([e,r])=>(0,a.createElement)(e,r)),...Array.isArray(l)?l:[l]])}),d=(e,r)=>{let o=(0,a.forwardRef)(({className:o,...t},d)=>(0,a.createElement)(s,{ref:d,iconNode:r,className:n(`lucide-${i(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,o),...t}));return o.displayName=i(e),o};e.s(["default",0,d],56420);let l=d("sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),c=d("moon",[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]]);function g(){let[e,n]=(0,a.useState)("dark");(0,a.useEffect)(()=>{n(localStorage.getItem("theme")||"dark")},[]);let i=()=>{let r="light"===e?"dark":"light";n(r),localStorage.setItem("theme",r),"dark"===r?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")};return(0,r.jsxs)("div",{className:"theme-toggle-wrapper",children:[(0,r.jsx)("span",{className:"theme-toggle-text",onClick:i,children:"Switch Theme"}),(0,r.jsx)("button",{className:"theme-toggle",onClick:i,"aria-label":"Toggle theme",children:"light"===e?(0,r.jsx)(c,{size:20}):(0,r.jsx)(l,{size:20})})]})}let p=d("menu",[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]),x=d("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);e.s(["default",0,function({activeTab:e="none"}){let[n,i]=(0,a.useState)(!1);return(0,r.jsxs)("header",{children:[(0,r.jsxs)("div",{className:"wrap nav desktop-header",children:[(0,r.jsx)("div",{className:"logo-container",children:(0,r.jsxs)("a",{href:"/",className:"logo",children:[(0,r.jsx)("span",{className:"mark",children:"✦"}),(0,r.jsxs)("span",{className:"logo-text",children:["Gemini",(0,r.jsx)("span",{className:"logo-text-extra",children:"WatermarkRemover"})]})]})}),(0,r.jsxs)("nav",{className:"nav-links",children:[(0,r.jsx)("a",{href:"/image",className:"img"===e||"multi-img"===e?"active":"",children:"Image Tool"}),(0,r.jsx)("a",{href:"/video",className:"vid"===e||"multi-vid"===e?"active":"",children:"Video Tool"})]}),(0,r.jsx)("div",{className:"nav-right",children:(0,r.jsx)(g,{})})]}),(0,r.jsxs)("div",{className:"wrap mobile-header",children:[(0,r.jsxs)("div",{className:"mobile-nav-top",children:[(0,r.jsxs)("a",{href:"/",className:"mobile-logo",children:[(0,r.jsx)("span",{className:"mobile-mark",children:"✦"}),(0,r.jsxs)("div",{className:"mobile-logo-text-group",children:[(0,r.jsx)("span",{className:"mobile-logo-title",children:"Gemini"}),(0,r.jsx)("span",{className:"mobile-logo-subtitle",children:"WatermarkRemover"})]})]}),(0,r.jsxs)("div",{className:"mobile-nav-right",style:{display:"flex",gap:"10px",alignItems:"center"},children:[(0,r.jsx)(g,{}),(0,r.jsx)("button",{className:"mobile-menu-toggle",onClick:()=>i(!n),"aria-label":"Toggle menu",children:n?(0,r.jsx)(x,{size:20}):(0,r.jsx)(p,{size:20})})]})]}),n&&(0,r.jsxs)("div",{className:"mobile-nav-dropdown",children:[(0,r.jsx)("div",{className:"dropdown-title",children:"Select Tool"}),(0,r.jsxs)("a",{href:"/image",className:`dropdown-item ${"img"===e||"multi-img"===e?"active":""}`,children:[(0,r.jsx)("div",{className:"dropdown-item-icon img-icon",children:(0,r.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,r.jsx)("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),(0,r.jsx)("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),(0,r.jsx)("polyline",{points:"21 15 16 10 5 21"})]})}),(0,r.jsxs)("div",{className:"dropdown-item-details",children:[(0,r.jsx)("span",{className:"dropdown-item-title",children:"Image Watermark Remover"}),(0,r.jsx)("span",{className:"dropdown-item-desc",children:"Remove watermarks from JPG, PNG, WebP"})]})]}),(0,r.jsxs)("a",{href:"/video",className:`dropdown-item ${"vid"===e||"multi-vid"===e?"active":""}`,children:[(0,r.jsx)("div",{className:"dropdown-item-icon vid-icon",children:(0,r.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,r.jsx)("rect",{x:"2",y:"2",width:"20",height:"20",rx:"2.18",ry:"2.18"}),(0,r.jsx)("line",{x1:"7",y1:"2",x2:"7",y2:"22"}),(0,r.jsx)("line",{x1:"17",y1:"2",x2:"17",y2:"22"}),(0,r.jsx)("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),(0,r.jsx)("line",{x1:"2",y1:"7",x2:"7",y2:"7"}),(0,r.jsx)("line",{x1:"2",y1:"17",x2:"7",y2:"17"}),(0,r.jsx)("line",{x1:"17",y1:"17",x2:"22",y2:"17"}),(0,r.jsx)("line",{x1:"17",y1:"7",x2:"22",y2:"7"})]})}),(0,r.jsxs)("div",{className:"dropdown-item-details",children:[(0,r.jsx)("span",{className:"dropdown-item-title",children:"Video Watermark Remover"}),(0,r.jsx)("span",{className:"dropdown-item-desc",children:"Erase watermarks from MP4, WebM, MOV"})]})]})]})]})]})}],2971),e.s(["default",0,function(){return(0,r.jsx)("footer",{children:(0,r.jsxs)("div",{className:"wrap foot",style:{alignItems:"center"},children:[(0,r.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[(0,r.jsxs)("div",{className:"foot-links",children:[(0,r.jsx)("a",{href:"/image",children:"Image Tool"}),(0,r.jsx)("a",{href:"/video",children:"Video Tool"})]}),(0,r.jsx)("div",{style:{color:"var(--muted, #a1a1aa)",fontSize:"13px",maxWidth:"320px",lineHeight:"1.5"},children:"We do not store your images or videos. All processing is done locally on your device, ensuring your data remains 100% private."})]}),(0,r.jsxs)("div",{style:{textAlign:"center",fontSize:"14px",display:"flex",flexDirection:"column",gap:"14px"},children:[(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"center",gap:"24px",fontWeight:600},children:[(0,r.jsx)("a",{href:"/privacypolicy",style:{color:"var(--muted, #a1a1aa)",transition:"color 0.2s"},onMouseEnter:e=>e.currentTarget.style.color="var(--text, #f4f4f5)",onMouseLeave:e=>e.currentTarget.style.color="var(--muted, #a1a1aa)",children:"Privacy Policy"}),(0,r.jsx)("a",{href:"/termsandconditions",style:{color:"var(--muted, #a1a1aa)",transition:"color 0.2s"},onMouseEnter:e=>e.currentTarget.style.color="var(--text, #f4f4f5)",onMouseLeave:e=>e.currentTarget.style.color="var(--muted, #a1a1aa)",children:"Terms & Conditions"})]}),(0,r.jsx)("div",{style:{color:"var(--muted, #a1a1aa)",fontFamily:'monospace, "Courier New"',fontSize:"13px"},children:"© 2026 codelove.in . All rights reserved."}),(0,r.jsxs)("div",{style:{fontWeight:600,color:"var(--text, #f4f4f5)",display:"flex",alignItems:"center",justifyContent:"center",gap:"6px"},children:[(0,r.jsx)("span",{children:"Developed with"}),(0,r.jsx)("span",{style:{color:"#ef4444",fontSize:"16px"},children:"❤️"}),(0,r.jsx)("span",{style:{color:"#3b82f6",letterSpacing:"-1px"},children:"<>"}),(0,r.jsx)("span",{children:"by"}),(0,r.jsx)("a",{href:"https://gowtham.codelovein/",style:{textDecoration:"underline",textUnderlineOffset:"4px",color:"var(--text, #f4f4f5)"},children:"Gowtham"})]})]})]})})}],13642)},6537,e=>{"use strict";let r=(0,e.i(56420).default)("lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);e.s(["Lock",0,r],6537)},64569,e=>{"use strict";let r=(0,e.i(56420).default)("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);e.s(["Zap",0,r],64569)},52683,e=>{"use strict";var r=e.i(43476),a=e.i(71645),n=e.i(28623),i=e.i(64569),o=e.i(6537),t=e.i(56420);let s=(0,t.default)("image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]),d=(0,t.default)("globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]),l=(0,t.default)("gift",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8",key:"1sqzm4"}],["path",{d:"M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5",key:"kc0143"}],["rect",{x:"3",y:"7",width:"18",height:"4",rx:"1",key:"1hberx"}]]);var c=e.i(2971),g=e.i(13642);let p=[{icon:n.Sparkles,color:"var(--brand-2)",bgColor:"rgba(168, 85, 247, 0.1)",title:"Multiple variants",desc:"Logo, star overlay and Nano Banana watermark support."},{icon:i.Zap,color:"var(--brand-3)",bgColor:"rgba(244, 63, 94, 0.1)",title:"Bulk parallel processing",desc:"Clean dozens of images at once with worker threads."},{icon:o.Lock,color:"var(--accent)",bgColor:"rgba(34, 197, 94, 0.1)",title:"Browser-local",desc:"Zero uploads. Your images never touch a server."},{icon:s,color:"var(--brand)",bgColor:"rgba(59, 130, 246, 0.1)",title:"Multi-format",desc:"JPG, PNG, WebP in — PNG or ZIP out."},{icon:d,color:"var(--brand-2)",bgColor:"rgba(168, 85, 247, 0.1)",title:"Cross-platform",desc:"Works on any modern browser, any OS."},{icon:l,color:"var(--brand-3)",bgColor:"rgba(244, 63, 94, 0.1)",title:"Free & open source",desc:"No paywall, no account, ever."}],x=[{q:"Is it really free?",a:"Yes — completely free and open source. No account, no subscription, no hidden limits."},{q:"Are my images uploaded anywhere?",a:"No. All processing runs locally in your browser. Your images never leave your device."},{q:"How does the removal work?",a:"It reverses the watermark's alpha blending mathematically to restore the exact original pixels, rather than repainting with AI."},{q:"Can I process many images at once?",a:"Yes. Bulk parallel processing handles batches and lets you download them all as a ZIP."},{q:"Which watermark variants are supported?",a:"The Gemini logo, the star overlay, and the Nano Banana variant are all covered."},{q:"Does it support videos?",a:"Video removal is in beta and processes the overlay frame-by-frame, also fully in-browser."},{q:"What formats can I use?",a:"JPG, PNG and WebP inputs are supported, with PNG or ZIP outputs."}],h=`
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
  width: 56px; height: 56px; margin: 0 auto 16px; border-radius: 14px;
  background: rgba(66,133,244,.12); display: grid; place-items: center; font-size: 26px;
}
.dark .gwr-landing .dropzone .icon {
  background: rgba(59, 130, 246, 0.15);
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
.gwr-landing .steps { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr)); gap: 22px; }
.gwr-landing .step { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); padding: 28px; box-shadow: 0 1px 3px rgba(16,24,40,.04); }
.gwr-landing .step .num { width: 38px; height: 38px; border-radius: 10px; font-weight: 800; background: rgba(66,133,244,.12); color: var(--brand-dark); display: grid; place-items: center; margin-bottom: 16px; }
.dark .gwr-landing .step .num { background: rgba(59, 130, 246, 0.15); color: #3b82f6; }
.gwr-landing .step h3 { font-size: 18px; }
.gwr-landing .step p { color: var(--muted); font-size: 14px; margin-top: 8px; }
.gwr-landing .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr)); gap: 20px; }
.gwr-landing .card { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); padding: 26px; transition: .2s; box-shadow: 0 1px 3px rgba(16,24,40,.04); }
.gwr-landing .card:hover { border-color: var(--brand); transform: translateY(-3px); box-shadow: 0 12px 28px rgba(16,24,40,.08); }
.gwr-landing .card .emoji { width: 46px; height: 46px; border-radius: 12px; display: grid; place-items: center; font-size: 22px; background: var(--bg-soft2); margin-bottom: 16px; }
.gwr-landing .card h3 { font-size: 17px; }
.gwr-landing .card p { color: var(--muted); font-size: 14px; margin-top: 8px; }
.gwr-landing .flow { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr)); gap: 20px; }
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
.gwr-landing .tool-nav {
  margin-top: 54px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
  gap: 24px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}
.gwr-landing .tool-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 48px 32px;
  background: linear-gradient(180deg, var(--card), var(--bg-soft));
  border: 2px solid transparent;
  border-radius: 24px;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  position: relative;
  overflow: hidden;
}
.gwr-landing .tool-card.img-card:hover {
  border-color: var(--brand);
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(66,133,244,0.12);
}
.gwr-landing .tool-card.vid-card:hover {
  border-color: var(--brand-2);
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(155,114,203,0.12);
}
@media (max-width: 640px) {
  .gwr-landing .tool-nav {
    margin-top: 36px;
    gap: 16px;
  }
  .gwr-landing .tool-card {
    padding: 32px 20px;
    border-radius: 16px;
  }
  .gwr-landing .cta-band {
    padding: 40px 20px;
    border-radius: 16px;
  }
}
@media (max-width: 880px) {
  .gwr-landing .nav-right .pill { display: none; }
}
`;e.s(["default",0,function(){let[e,n]=(0,a.useState)("img");return(0,a.useEffect)(()=>{setTimeout(()=>{document.body.classList.remove("loading")},100)},[]),(0,r.jsxs)("div",{className:"gwr-landing",children:[(0,r.jsx)("style",{children:h}),(0,r.jsx)(c.default,{}),(0,r.jsx)("section",{className:"hero",style:{paddingBottom:0},children:(0,r.jsxs)("div",{className:"wrap",children:[(0,r.jsxs)("div",{className:"hero-badge",children:[(0,r.jsx)("span",{className:"dot"})," 100% local · No upload · No sign-up"]}),(0,r.jsxs)("h1",{children:["Free Gemini",(0,r.jsx)("br",{}),(0,r.jsx)("span",{className:"gradient-text",children:"Watermark Remover"})]}),(0,r.jsx)("p",{className:"sub",children:"Free online Gemini watermark cleaner for images, logos, and star overlays. No upload, no sign-up — 100% local, private processing."}),(0,r.jsxs)("div",{className:"hero-cta",children:[(0,r.jsx)("a",{className:"btn btn-primary",href:"/image",children:"Remove watermarks now"}),(0,r.jsx)("a",{className:"btn btn-ghost",href:"#how",children:"Learn how it works"})]}),(0,r.jsxs)("div",{className:"stats",children:[(0,r.jsxs)("span",{children:[(0,r.jsx)("span",{className:"check",children:"✓"})," Runs in your browser — no upload"]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("span",{className:"check",children:"✓"})," ~1s per 1MP image"]}),(0,r.jsxs)("span",{children:[(0,r.jsx)("span",{className:"check",children:"✓"})," Pixel-exact restoration"]})]}),(0,r.jsxs)("div",{className:"tool-nav",id:"tool",children:[(0,r.jsxs)("a",{href:"/image",className:"tool-card img-card",children:[(0,r.jsx)("div",{className:"icon-wrap",style:{width:"80px",height:"80px",borderRadius:"20px",background:"rgba(66,133,244,0.12)",display:"grid",placeItems:"center",color:"var(--brand)",marginBottom:"24px"},children:(0,r.jsxs)("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,r.jsx)("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),(0,r.jsx)("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),(0,r.jsx)("polyline",{points:"21 15 16 10 5 21"})]})}),(0,r.jsx)("h3",{style:{fontSize:"24px",fontWeight:800,color:"var(--text)",marginBottom:"12px"},children:"Image Remover"}),(0,r.jsx)("p",{style:{color:"var(--muted)",fontSize:"15px",lineHeight:1.6,marginBottom:"24px"},children:"Clean watermarks, logos, and overlays from a single JPG, PNG, or WebP image. Ultra-fast and 100% private."}),(0,r.jsx)("div",{className:"btn btn-primary",style:{marginTop:"auto",pointerEvents:"none"},children:"Open Image Tool"})]}),(0,r.jsxs)("a",{href:"/multi-image",className:"tool-card img-card",children:[(0,r.jsx)("div",{className:"icon-wrap",style:{width:"80px",height:"80px",borderRadius:"20px",background:"rgba(66,133,244,0.12)",display:"grid",placeItems:"center",color:"var(--brand)",marginBottom:"24px"},children:(0,r.jsxs)("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,r.jsx)("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),(0,r.jsx)("path",{d:"M7 3v18"}),(0,r.jsx)("path",{d:"M11 3v18"}),(0,r.jsx)("path",{d:"M15 3v18"})]})}),(0,r.jsx)("h3",{style:{fontSize:"24px",fontWeight:800,color:"var(--text)",marginBottom:"12px"},children:"Multi Image Remover"}),(0,r.jsx)("p",{style:{color:"var(--muted)",fontSize:"15px",lineHeight:1.6,marginBottom:"24px"},children:"Process dozens of images at once using parallel worker threads. Download all results sequentially."}),(0,r.jsx)("div",{className:"btn btn-primary",style:{marginTop:"auto",pointerEvents:"none"},children:"Open Multi Image Tool"})]}),(0,r.jsxs)("a",{href:"/video",className:"tool-card vid-card",children:[(0,r.jsx)("div",{className:"icon-wrap",style:{width:"80px",height:"80px",borderRadius:"20px",background:"rgba(155,114,203,0.12)",display:"grid",placeItems:"center",color:"var(--brand-2)",marginBottom:"24px"},children:(0,r.jsxs)("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,r.jsx)("rect",{x:"2",y:"2",width:"20",height:"20",rx:"2.18",ry:"2.18"}),(0,r.jsx)("line",{x1:"7",y1:"2",x2:"7",y2:"22"}),(0,r.jsx)("line",{x1:"17",y1:"2",x2:"17",y2:"22"}),(0,r.jsx)("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),(0,r.jsx)("line",{x1:"2",y1:"7",x2:"7",y2:"7"}),(0,r.jsx)("line",{x1:"2",y1:"17",x2:"7",y2:"17"}),(0,r.jsx)("line",{x1:"17",y1:"17",x2:"22",y2:"17"}),(0,r.jsx)("line",{x1:"17",y1:"7",x2:"22",y2:"7"})]})}),(0,r.jsx)("h3",{style:{fontSize:"24px",fontWeight:800,color:"var(--text)",marginBottom:"12px"},children:"Video Remover"}),(0,r.jsx)("p",{style:{color:"var(--muted)",fontSize:"15px",lineHeight:1.6,marginBottom:"24px"},children:"Seamlessly erase Gemini watermarks from a single video file. No uploads required."}),(0,r.jsx)("div",{className:"btn btn-primary",style:{marginTop:"auto",background:"var(--brand-2)",pointerEvents:"none",border:"none"},children:"Open Video Tool"})]}),(0,r.jsxs)("a",{href:"/multi-video",className:"tool-card vid-card",children:[(0,r.jsx)("div",{className:"icon-wrap",style:{width:"80px",height:"80px",borderRadius:"20px",background:"rgba(155,114,203,0.12)",display:"grid",placeItems:"center",color:"var(--brand-2)",marginBottom:"24px"},children:(0,r.jsxs)("svg",{width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,r.jsx)("rect",{x:"2",y:"2",width:"20",height:"20",rx:"2.18",ry:"2.18"}),(0,r.jsx)("line",{x1:"7",y1:"2",x2:"7",y2:"22"}),(0,r.jsx)("line",{x1:"17",y1:"2",x2:"17",y2:"22"}),(0,r.jsx)("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),(0,r.jsx)("line",{x1:"2",y1:"7",x2:"7",y2:"7"}),(0,r.jsx)("line",{x1:"2",y1:"17",x2:"7",y2:"17"}),(0,r.jsx)("line",{x1:"17",y1:"17",x2:"22",y2:"17"}),(0,r.jsx)("line",{x1:"17",y1:"7",x2:"22",y2:"7"})]})}),(0,r.jsx)("h3",{style:{fontSize:"24px",fontWeight:800,color:"var(--text)",marginBottom:"12px"},children:"Multi Video Remover"}),(0,r.jsx)("p",{style:{color:"var(--muted)",fontSize:"15px",lineHeight:1.6,marginBottom:"24px"},children:"Process multiple videos sequentially with ultra-fast alpha blending. Save hours of manual work."}),(0,r.jsx)("div",{className:"btn btn-primary",style:{marginTop:"auto",background:"var(--brand-2)",pointerEvents:"none",border:"none"},children:"Open Multi Video Tool"})]})]})]})}),(0,r.jsx)("section",{id:"features",children:(0,r.jsxs)("div",{className:"wrap sec-head",children:[(0,r.jsx)("span",{className:"eyebrow",children:"Reverse alpha blending"}),(0,r.jsx)("h2",{children:"Pixel-accurate restoration"}),(0,r.jsx)("p",{children:"No AI repainting or guesswork. We mathematically reverse the watermark's alpha blend to recover the exact original pixels underneath — lossless and clean."}),(0,r.jsx)("div",{style:{marginTop:24},children:(0,r.jsx)("a",{className:"btn btn-primary",href:"/image",children:"Try it free"})})]})}),(0,r.jsx)("section",{id:"how",style:{background:"var(--bg-soft)"},children:(0,r.jsxs)("div",{className:"wrap",children:[(0,r.jsxs)("div",{className:"sec-head",children:[(0,r.jsx)("span",{className:"eyebrow",children:"How it works"}),(0,r.jsx)("h2",{children:"How to remove a Gemini watermark online"})]}),(0,r.jsxs)("div",{className:"steps",children:[(0,r.jsxs)("div",{className:"step",children:[(0,r.jsx)("div",{className:"num",children:"1"}),(0,r.jsx)("h3",{children:"Upload photos"}),(0,r.jsx)("p",{children:"Add JPG, PNG or WebP files — single or in bulk. Nothing leaves your device."})]}),(0,r.jsxs)("div",{className:"step",children:[(0,r.jsx)("div",{className:"num",children:"2"}),(0,r.jsx)("h3",{children:"Auto-remove watermark"}),(0,r.jsx)("p",{children:"In-browser processing detects and strips the Gemini logo & star overlay automatically."})]}),(0,r.jsxs)("div",{className:"step",children:[(0,r.jsx)("div",{className:"num",children:"3"}),(0,r.jsx)("h3",{children:"Download clean images"}),(0,r.jsx)("p",{children:"Save individual PNGs or grab everything at once as a ZIP archive."})]})]})]})}),(0,r.jsx)("section",{id:"toolkit",children:(0,r.jsxs)("div",{className:"wrap",children:[(0,r.jsxs)("div",{className:"sec-head",children:[(0,r.jsx)("span",{className:"eyebrow",children:"Complete toolkit"}),(0,r.jsx)("h2",{children:"Complete Google Gemini watermark removal toolkit"})]}),(0,r.jsx)("div",{className:"grid",children:p.map(e=>{let a=e.icon;return(0,r.jsxs)("div",{className:"card",children:[(0,r.jsx)("div",{className:"emoji",style:{display:"flex",alignItems:"center",justifyContent:"center",width:"46px",height:"46px",borderRadius:"12px",background:e.bgColor,color:e.color},children:(0,r.jsx)(a,{size:22})}),(0,r.jsx)("h3",{children:e.title}),(0,r.jsx)("p",{children:e.desc})]},e.title)})})]})}),(0,r.jsx)("section",{id:"faq",children:(0,r.jsxs)("div",{className:"wrap",children:[(0,r.jsxs)("div",{className:"sec-head",children:[(0,r.jsx)("span",{className:"eyebrow",children:"FAQ"}),(0,r.jsx)("h2",{children:"Frequently asked questions"})]}),(0,r.jsx)("div",{className:"faq",children:x.map((e,a)=>(0,r.jsxs)("details",{open:0===a,children:[(0,r.jsx)("summary",{children:e.q}),(0,r.jsx)("p",{children:e.a})]},e.q))})]})}),(0,r.jsx)("section",{style:{paddingTop:0},children:(0,r.jsx)("div",{className:"wrap",children:(0,r.jsxs)("div",{className:"cta-band",children:[(0,r.jsx)("h2",{children:"Ready to remove Gemini watermarks for free?"}),(0,r.jsx)("p",{children:"Open source, browser-local, no sign-up. Start in seconds."}),(0,r.jsxs)("div",{className:"hero-cta",children:[(0,r.jsx)("a",{className:"btn btn-primary",href:"/image",children:"Remove Image watermarks now"}),(0,r.jsx)("a",{className:"btn btn-primary",href:"/video",children:"Remove Video watermarks now"})]})]})})}),(0,r.jsx)(g.default,{})]})}],52683)}]);