"use client";

import React, { useEffect, useState } from "react";
import { Video, Lock, Sparkles } from "lucide-react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./video.css";

export default function VideoPreview() {
  const [isEngineLoading, setIsEngineLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      import("../../video-app.js").then((module) => {
        module.initVideoApp();
        setIsEngineLoading(false);
      }).catch(err => {
        console.error("Failed to load video engine", err);
        setIsEngineLoading(false);
      });
    }, 100);
  }, []);

  return (
    <div className="gwr-landing">
      <style>{css}</style>

      <Header activeTab="vid" />

      {/* HERO FOR VIDEO */}
      <section className="hero" style={{ paddingBottom: '30px', paddingTop: '60px' }}>
        <div className="wrap">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="hero-badge"><span className="dot" /> 100% local · No upload · No sign-up</div>
          </div>
          <h1><span className="free-shine">Free</span> <span className="gradient-text">Video</span><br />Watermark Remover</h1>
          <p className="sub">
            Erase Gemini watermarks, logos, and overlays from a single MP4, WebM, or MOV video.
            Processing happens rapidly and entirely on your device.
          </p>
          <div className="tabs" style={{ marginTop: '24px' }}>
            <a href="/video" className="tab active">Single Video</a>
            <a href="/multi-video" className="tab">Multi Videos</a>
          </div>
          <div className="hero-cta" style={{ display: 'none' }}></div>
        </div>
      </section>

      {/* VIDEO APP SHELL */}
      <div className="shell video-preview-shell" style={{ paddingTop: 0 }}>
        <main className="layout">
          <section className="workspace" aria-label="Video Comparison">
            <div className="panel">
              <div className="panel-head"><span>Before / After Comparison</span><span id="progressText" style={{ color: "var(--brand-dark)", fontSize: '13px' }}>Waiting for video</span></div>
              <div id="comparePlayer" className="compare-player">
                <div className="compare-pane" style={{ background: "transparent" }}>
                  <video id="originalVideo" loop playsInline preload="metadata" style={{ borderRadius: "8px 0 0 0" }}></video>
                  <span className="badge">Before</span>
                  <div id="originalEmpty" className="empty">Select or drop a video</div>
                </div>
                <div className="compare-pane" style={{ background: "transparent", borderLeft: "1.5px solid var(--border)" }}>
                  <video id="processedVideo" loop playsInline preload="metadata" muted style={{ borderRadius: "0 8px 0 0" }}></video>
                  <span id="afterBadge" className="badge" hidden>After</span>
                  <div id="processedEmpty" className="empty">Comparison will be shown here</div>
                </div>
              </div>
              <div className="compare-controls">
                <button id="playPauseBtn" className="play-toggle" type="button" data-playing="false" aria-label="Play" disabled></button>
                <input id="scrubber" type="range" min="0" max="1000" defaultValue="0" aria-label="Play Progress" disabled />
                <span id="timeLabel" className="time-label">0:00</span>
              </div>
            </div>


          </section>

          <aside className="side" aria-label="Processing Settings">
            <div id="dropzone" className="dropzone" data-dragging="false" role="button" tabIndex={0} style={{ padding: "32px 24px", opacity: isEngineLoading ? 0.6 : 1, pointerEvents: isEngineLoading ? 'none' : 'auto' }}>
              <div className="icon" style={{ color: 'var(--brand)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
              </div>
              <strong>Select Video File</strong>
              <span className="muted" style={{ display: "block", marginTop: 6 }}>MP4, WebM, MOV. Best results with 10-sec samples.</span>
              <input id="fileInput" type="file" accept="video/mp4,video/webm,video/quicktime,video/*" hidden disabled={isEngineLoading} />
            </div>

            <div className="panel">
              <div className="panel-head">Auto Processing</div>
              <div className="controls">
                <div className="progress" aria-label="Processing Progress"><span id="progressBar" style={{ width: isEngineLoading ? '100%' : '0%', background: isEngineLoading ? 'var(--border)' : '' }}></span></div>
                <div id="status" className="status" data-tone="info">
                  {isEngineLoading ? "Loading..." : "Ready to process"}
                </div>
                <div className="actions" style={{ marginTop: 8 }}>
                  <button id="detectBtn" type="button" className="btn btn-ghost" style={{ display: "none" }}>Detect</button>
                  <button id="resetBtn" type="button" className="btn btn-ghost" style={{ width: "100%", gridColumn: "span 2", padding: "8px", fontSize: "13px" }}>Reset</button>
                  <button id="processBtn" className="btn btn-primary" type="button" style={{ gridColumn: "span 2", marginTop: 4, width: "100%" }}>Auto Clean & Export</button>
                  <a id="downloadBtn" className="btn btn-primary" style={{ gridColumn: "span 2", background: "var(--accent)", display: "none" }} aria-disabled="true">Download Result</a>
                </div>
                <div className="internal-controls" hidden>
                  <span id="alphaGainValue">1.00</span>
                  <input id="alphaGain" type="range" min="0.25" max="1.35" step="0.05" />
                  <input id="adaptiveAlpha" type="checkbox" />
                  <input id="highQualityCleanup" type="checkbox" />
                  <select id="denoiseBackend">
                    <option value="none">Off</option>
                    <option value="canvas-edge-denoise">Canvas Edge Denoise</option>
                    <option value="canvas-edge-band-denoise">Canvas Edge Band Denoise</option>
                    <option value="canvas-edge-core-denoise">Canvas Edge Core Denoise</option>
                    <option value="canvas-footprint-polish">Canvas Footprint Polish</option>
                    <option value="canvas-temporal-delta-stabilize">Canvas Temporal Delta Stabilize</option>
                    <option value="canvas-temporal-match-delta-stabilize">Canvas Temporal Match Delta Stabilize</option>
                    <option value="canvas-temporal-stabilize">Canvas Temporal Stabilize</option>
                    <option value="canvas-texture-repair">Canvas Texture Repair</option>
                    <option value="allenk-fdncnn-browser-spike">AI FDnCNN ONNX</option>
                  </select>
                  <button id="relocatedReviewPresetBtn" type="button">Relocated Review Preset</button>
                  <span id="edgeDenoiseStrengthValue">0.25</span>
                  <input id="edgeDenoiseStrength" type="range" min="0" max="1" step="0.05" />
                  <span id="residualCleanupValue">1.50</span>
                  <input id="residualCleanup" type="range" min="0" max="1.80" step="0.05" />
                  <input id="sampleCount" type="number" min="1" max="24" step="1" />
                  <input id="videoBitrateMbps" type="number" min="1" max="80" step="0.5" />
                  <input id="allowLowConfidence" type="checkbox" />
                </div>
              </div>
              <div className="note" style={{ fontSize: "12px" }}>Video track will be re-encoded locally. Original audio track is passed through.</div>
            </div>

            <div className="panel" style={{ display: 'none' }}>
              <div className="panel-head">Details</div>
              <div id="metadata" style={{ fontSize: "13px" }}></div>
              <div id="detection" style={{ fontSize: "13px", display: "none" }}></div>
            </div>
          </aside>
        </main>
      </div>

      {/* SEO & FEATURES SECTION */}
      <section className="seo-content" style={{ marginTop: '60px', padding: '60px 0', background: 'var(--bg-soft)' }}>
        <div className="wrap">
          <div className="sec-head" style={{ textAlign: 'center', marginBottom: '48px', maxWidth: '720px', margin: '0 auto 48px' }}>
            <span className="eyebrow" style={{ color: 'var(--brand-dark)', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1.4px' }}>Why Choose Our Tool</span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, marginTop: '12px', letterSpacing: '-1px' }}>The Best Free Gemini Video Watermark Remover</h2>
            <p style={{ color: 'var(--muted)', marginTop: '14px', fontSize: '17px' }}>
              Remove watermarks from your AI-generated videos without compromising quality or privacy. Our tool runs directly in your browser, ensuring your files are never uploaded to any server.
            </p>
          </div>

          <div className="grid-features" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '24px' }}>
            <div className="feature-card" style={{ background: 'var(--card)', padding: '32px', borderRadius: '20px', boxShadow: '0 4px 24px rgba(0,0,0,0.04)', border: '1px solid var(--border)' }}>
              <div className="f-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(155, 114, 203, 0.1)', color: 'var(--brand-2)', marginBottom: '20px' }}>
                <Video size={24} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px' }}>Frame-by-Frame Precision</h3>
              <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: 1.6 }}>Our advanced algorithm analyzes every single frame of your video, meticulously removing the Gemini or Veo watermark while preserving the underlying details.</p>
            </div>

            <div className="feature-card" style={{ background: 'var(--card)', padding: '32px', borderRadius: '20px', boxShadow: '0 4px 24px rgba(0,0,0,0.04)', border: '1px solid var(--border)' }}>
              <div className="f-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.1)', color: 'var(--success)', marginBottom: '20px' }}>
                <Lock size={24} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px' }}>100% Secure &amp; Private</h3>
              <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: 1.6 }}>Since everything happens locally in your browser using modern WebAssembly and WebGL, your personal videos are never sent over the internet.</p>
            </div>

            <div className="feature-card" style={{ background: 'var(--card)', padding: '32px', borderRadius: '20px', boxShadow: '0 4px 24px rgba(0,0,0,0.04)', border: '1px solid var(--border)' }}>
              <div className="f-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(66, 133, 244, 0.1)', color: 'var(--brand)', marginBottom: '20px' }}>
                <Sparkles size={24} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px' }}>High-Quality Export</h3>
              <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: 1.6 }}>We maintain the original resolution and audio track of your video, ensuring the exported, watermark-free result is ready for professional use.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-section" style={{ padding: '80px 0', background: 'var(--bg)' }}>
        <div className="wrap">
          <div className="sec-head" style={{ textAlign: 'center', marginBottom: '48px', maxWidth: '720px', margin: '0 auto 48px' }}>
            <span className="eyebrow" style={{ color: 'var(--brand-dark)', fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1.4px' }}>How it works</span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 800, letterSpacing: '-1px', marginTop: '12px' }}>How to Remove Video Watermarks Online</h2>
          </div>
          <div className="steps-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '24px' }}>
            <div className="step-box" style={{ padding: '28px', border: '1px solid var(--border)', background: 'var(--card)', borderRadius: '16px', boxShadow: '0 1px 3px rgba(16,24,40,.04)' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(66,133,244,.12)', color: 'var(--brand-dark)', display: 'grid', placeItems: 'center', fontWeight: 800, marginBottom: '16px' }}>1</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>Upload Video</h3>
              <p style={{ color: 'var(--muted)', fontSize: '14px' }}>Drag and drop your MP4, WebM, or MOV file into the workspace above.</p>
            </div>
            <div className="step-box" style={{ padding: '28px', border: '1px solid var(--border)', background: 'var(--card)', borderRadius: '16px', boxShadow: '0 1px 3px rgba(16,24,40,.04)' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(66,133,244,.12)', color: 'var(--brand-dark)', display: 'grid', placeItems: 'center', fontWeight: 800, marginBottom: '16px' }}>2</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>Auto Processing</h3>
              <p style={{ color: 'var(--muted)', fontSize: '14px' }}>Click &quot;Auto Clean &amp; Export&quot;. Our tool will process each frame directly in your browser.</p>
            </div>
            <div className="step-box" style={{ padding: '28px', border: '1px solid var(--border)', background: 'var(--card)', borderRadius: '16px', boxShadow: '0 1px 3px rgba(16,24,40,.04)' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(66,133,244,.12)', color: 'var(--brand-dark)', display: 'grid', placeItems: 'center', fontWeight: 800, marginBottom: '16px' }}>3</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>Download Result</h3>
              <p style={{ color: 'var(--muted)', fontSize: '14px' }}>Once finished, instantly download your crisp, watermark-free video file.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

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
.gwr-landing a { color: inherit; text-decoration: none; }
.gwr-landing .wrap { max-width: var(--max); margin: 0 auto; padding: 0 24px; }
.gwr-landing .gradient-text {
  background: linear-gradient(120deg, var(--brand), var(--brand-2), var(--brand-3));
  -webkit-background-clip: text; background-clip: text; color: transparent;
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
.gwr-landing .logo { display: flex; align-items: center; gap: 10px; font-weight: 700; font-size: 15.5px; letter-spacing: -0.3px; }
.gwr-landing .logo .mark {
  width: 28px; height: 28px; border-radius: 8px;
  background: conic-gradient(from 200deg, var(--brand), var(--brand-2), var(--brand-3), var(--brand));
  display: grid; place-items: center; color: #fff; font-size: 14px;
}
.gwr-landing .nav-links { display: flex; gap: 24px; font-size: 14px; color: var(--muted); font-weight: 500; justify-content: center; }
.gwr-landing .nav-links a:hover { color: var(--text); }
.gwr-landing .nav-links a.active { color: var(--text); font-weight: 600; }
.gwr-landing .nav-right { flex: 1; display: flex; justify-content: flex-end; align-items: center; gap: 12px; }

.gwr-landing .btn {
  display: inline-flex; align-items: center; gap: 8px; justify-content: center;
  padding: 12px 22px; border-radius: 12px; font-weight: 600; font-size: 15px;
  cursor: pointer; border: 1px solid transparent; transition: all .2s ease; white-space: nowrap;
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
.gwr-landing .dropzone h3 { font-size: 19px; margin: 0; }
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
.gwr-landing footer { border-top: 1px solid var(--border); padding: 50px 0 40px; color: var(--muted); background: var(--bg-soft); }
.dark .gwr-landing footer { background: var(--bg-soft); border-top-color: var(--border); }
.gwr-landing .foot { display: flex; justify-content: space-between; gap: 24px; flex-wrap: wrap; align-items: center; }
.gwr-landing .foot-links { display: flex; gap: 22px; font-size: 14px; }
.gwr-landing .foot-links a:hover { color: var(--text); }
.gwr-landing .lang { background: var(--bg); border: 1px solid var(--border); color: var(--muted); padding: 8px 12px; border-radius: 9px; font-size: 13px; font-family: inherit; }
.dark .gwr-landing .lang { background: var(--bg); border-color: var(--border); color: var(--text); }

@media (max-width: 880px) {
  /* No display none for nav-links on mobile */
}

/* Enhancements for side panel controls */
.gwr-landing .panel { box-shadow: 0 8px 24px rgba(0,0,0,0.04); border: 1px solid var(--border); border-radius: 16px; overflow: hidden; background: var(--card); }
.dark .gwr-landing .panel { box-shadow: none; }
.gwr-landing .panel-head { background: var(--bg-soft); border-bottom: 1px solid var(--border); padding: 14px 20px; font-weight: 700; }
.gwr-landing .compare-controls { background: var(--bg-soft); border-top: 1px solid var(--border); }
.gwr-landing .feature-card { transition: transform 0.2s ease, box-shadow 0.2s ease; }
.gwr-landing .feature-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.08); }
.gwr-landing .step-box { transition: all 0.2s ease; }
.gwr-landing .step-box:hover { background: var(--bg-soft2); box-shadow: 0 4px 16px rgba(0,0,0,0.05); }
.gwr-landing .queue-item { display: flex; align-items: center; justify-content: space-between; padding: 12px 16px; border: 1px solid var(--border); border-radius: 12px; background: var(--bg-soft); cursor: pointer; transition: all 0.2s; }
.dark .gwr-landing .queue-item { background: var(--bg-soft2); }
.gwr-landing .queue-item:hover { border-color: var(--brand); background: var(--bg); }
.gwr-landing .queue-item.active { border-color: var(--brand); background: rgba(66,133,244,0.05); box-shadow: inset 2px 0 0 var(--brand); }
.gwr-landing .queue-item .info { display: flex; align-items: center; gap: 12px; font-size: 14px; font-weight: 500; }
.gwr-landing .queue-item .status-badge { font-size: 12px; font-weight: 600; padding: 4px 10px; border-radius: 6px; background: var(--bg); border: 1px solid var(--border); color: var(--muted); }
.gwr-landing .queue-item .status-badge.processing { color: var(--brand); border-color: rgba(66,133,244,0.3); background: rgba(66,133,244,0.05); }
.gwr-landing .queue-item .status-badge.done { color: var(--accent); border-color: rgba(34,197,94,0.3); background: rgba(34,197,94,0.05); }
`;
