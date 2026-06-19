"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Zap, Lock, Image, Globe, Gift } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  const [tab, setTab] = useState<"img" | "vid">("img");
  useEffect(() => {
    // Remove loading class if still present
    setTimeout(() => {
      document.body.classList.remove('loading');
    }, 100);
  }, []);

  return (
    <div className="gwr-landing">
      <style>{css}</style>

      <Header />

      {/* HERO */}
      <section className="hero" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <div className="hero-badge"><span className="dot" /> 100% local · No upload · No sign-up</div>
          <h1>Free Gemini<br /><span className="gradient-text">Watermark Remover</span></h1>
          <p className="sub">
            Free online Gemini watermark cleaner for images, logos, and star overlays.
            No upload, no sign-up — 100% local, private processing.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="/image">Remove watermarks now</a>
            <a className="btn btn-ghost" href="#how">Learn how it works</a>
          </div>
          <div className="stats">
            <span><span className="check">✓</span> Runs in your browser — no upload</span>
            <span><span className="check">✓</span> ~1s per 1MP image</span>
            <span><span className="check">✓</span> Pixel-exact restoration</span>
          </div>
          {/* TOOL NAVIGATION GRID */}
          <div className="tool-nav" id="tool">
            <a href="/image" className="tool-card img-card">
              <div className="icon-wrap" style={{ width: '80px', height: '80px', borderRadius: '20px', background: 'rgba(66,133,244,0.12)', display: 'grid', placeItems: 'center', color: 'var(--brand)', marginBottom: '24px' }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text)', marginBottom: '12px' }}>Image Remover</h3>
              <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: 1.6, marginBottom: '24px' }}>
                Clean watermarks, logos, and overlays from a single JPG, PNG, or WebP image. Ultra-fast and 100% private.
              </p>
              <div className="btn btn-primary" style={{ marginTop: 'auto', pointerEvents: 'none' }}>Open Image Tool</div>
            </a>

            <a href="/multi-image" className="tool-card img-card">
              <div className="icon-wrap" style={{ width: '80px', height: '80px', borderRadius: '20px', background: 'rgba(66,133,244,0.12)', display: 'grid', placeItems: 'center', color: 'var(--brand)', marginBottom: '24px' }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><path d="M7 3v18"></path><path d="M11 3v18"></path><path d="M15 3v18"></path></svg>
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text)', marginBottom: '12px' }}>Multi Image Remover</h3>
              <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: 1.6, marginBottom: '24px' }}>
                Process dozens of images at once using parallel worker threads. Download all results sequentially.
              </p>
              <div className="btn btn-primary" style={{ marginTop: 'auto', pointerEvents: 'none' }}>Open Multi Image Tool</div>
            </a>

            <a href="/video" className="tool-card vid-card">
              <div className="icon-wrap" style={{ width: '80px', height: '80px', borderRadius: '20px', background: 'rgba(155,114,203,0.12)', display: 'grid', placeItems: 'center', color: 'var(--brand-2)', marginBottom: '24px' }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text)', marginBottom: '12px' }}>Video Remover</h3>
              <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: 1.6, marginBottom: '24px' }}>
                Seamlessly erase Gemini watermarks from a single video file. No uploads required.
              </p>
              <div className="btn btn-primary" style={{ marginTop: 'auto', background: 'var(--brand-2)', pointerEvents: 'none', border: 'none' }}>Open Video Tool</div>
            </a>

            <a href="/multi-video" className="tool-card vid-card">
              <div className="icon-wrap" style={{ width: '80px', height: '80px', borderRadius: '20px', background: 'rgba(155,114,203,0.12)', display: 'grid', placeItems: 'center', color: 'var(--brand-2)', marginBottom: '24px' }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text)', marginBottom: '12px' }}>Multi Video Remover</h3>
              <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: 1.6, marginBottom: '24px' }}>
                Process multiple videos sequentially with ultra-fast alpha blending. Save hours of manual work.
              </p>
              <div className="btn btn-primary" style={{ marginTop: 'auto', background: 'var(--brand-2)', pointerEvents: 'none', border: 'none' }}>Open Multi Video Tool</div>
            </a>
          </div>
        </div>
      </section >

      {/* FEATURES */}
      < section id="features" >
        <div className="wrap sec-head">
          <span className="eyebrow">Reverse alpha blending</span>
          <h2>Pixel-accurate restoration</h2>
          <p>
            No AI repainting or guesswork. We mathematically reverse the watermark's alpha blend to
            recover the exact original pixels underneath — lossless and clean.
          </p>
          <div style={{ marginTop: 24 }}><a className="btn btn-primary" href="/image">Try it free</a></div>
        </div>
      </section >

      {/* HOW IT WORKS */}
      < section id="how" style={{ background: "var(--bg-soft)" }
      }>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">How it works</span>
            <h2>How to remove a Gemini watermark online</h2>
          </div>
          <div className="steps">
            <div className="step"><div className="num">1</div><h3>Upload photos</h3><p>Add JPG, PNG or WebP files — single or in bulk. Nothing leaves your device.</p></div>
            <div className="step"><div className="num">2</div><h3>Auto-remove watermark</h3><p>In-browser processing detects and strips the Gemini logo &amp; star overlay automatically.</p></div>
            <div className="step"><div className="num">3</div><h3>Download clean images</h3><p>Save individual PNGs or grab everything at once as a ZIP archive.</p></div>
          </div>
        </div>
      </section >

      {/* TOOLKIT */}
      < section id="toolkit" >
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Complete toolkit</span>
            <h2>Complete Google Gemini watermark removal toolkit</h2>
          </div>
          <div className="grid">
            {toolkit.map((t) => {
              const IconComponent = t.icon;
              return (
                <div className="card" key={t.title}>
                  <div className="emoji" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '46px', height: '46px', borderRadius: '12px', background: t.bgColor, color: t.color }}>
                    <IconComponent size={22} />
                  </div>
                  <h3>{t.title}</h3>
                  <p>{t.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section >

      {/* FAQ */}
      < section id="faq" >
        <div className="wrap">
          <div className="sec-head"><span className="eyebrow">FAQ</span><h2>Frequently asked questions</h2></div>
          <div className="faq">
            {faqs.map((f, i) => (
              <details key={f.q} open={i === 0}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section >

      {/* CTA */}
      < section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta-band">
            <h2>Ready to remove Gemini watermarks for free?</h2>
            <p>Open source, browser-local, no sign-up. Start in seconds.</p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="/image">Remove Image watermarks now</a>
              <a className="btn btn-primary" href="/video">Remove Video watermarks now</a>
            </div>
          </div>
        </div>
      </section >

      <Footer />
    </div >
  );
}

const toolkit = [
  { icon: Sparkles, color: "var(--brand-2)", bgColor: "rgba(168, 85, 247, 0.1)", title: "Multiple variants", desc: "Logo, star overlay and Nano Banana watermark support." },
  { icon: Zap, color: "var(--brand-3)", bgColor: "rgba(244, 63, 94, 0.1)", title: "Bulk parallel processing", desc: "Clean dozens of images at once with worker threads." },
  { icon: Lock, color: "var(--accent)", bgColor: "rgba(34, 197, 94, 0.1)", title: "Browser-local", desc: "Zero uploads. Your images never touch a server." },
  { icon: Image, color: "var(--brand)", bgColor: "rgba(59, 130, 246, 0.1)", title: "Multi-format", desc: "JPG, PNG, WebP in — PNG or ZIP out." },
  { icon: Globe, color: "var(--brand-2)", bgColor: "rgba(168, 85, 247, 0.1)", title: "Cross-platform", desc: "Works on any modern browser, any OS." },
  { icon: Gift, color: "var(--brand-3)", bgColor: "rgba(244, 63, 94, 0.1)", title: "Free & open source", desc: "No paywall, no account, ever." },
];

const faqs = [
  { q: "Is it really free?", a: "Yes — completely free and open source. No account, no subscription, no hidden limits." },
  { q: "Are my images uploaded anywhere?", a: "No. All processing runs locally in your browser. Your images never leave your device." },
  { q: "How does the removal work?", a: "It reverses the watermark's alpha blending mathematically to restore the exact original pixels, rather than repainting with AI." },
  { q: "Can I process many images at once?", a: "Yes. Bulk parallel processing handles batches and lets you download them all as a ZIP." },
  { q: "Which watermark variants are supported?", a: "The Gemini logo, the star overlay, and the Nano Banana variant are all covered." },
  { q: "Does it support videos?", a: "Video removal is in beta and processes the overlay frame-by-frame, also fully in-browser." },
  { q: "What formats can I use?", a: "JPG, PNG and WebP inputs are supported, with PNG or ZIP outputs." },
];

const css = `
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
`;

