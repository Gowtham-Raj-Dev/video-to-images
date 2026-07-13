import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Zap,
  FileArchive,
  UploadCloud,
  Cpu,
  Lock,
  Sparkles,
} from "lucide-react";
import { TOOLS } from "@/lib/tools";
import { ToolCard } from "@/components/ToolCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Faq } from "@/components/Faq";
import { CtaBanner } from "@/components/CtaBanner";

const HOME_FAQS = [
  { q: "Is Frame Studio really free?", a: "Yes. Every tool in the suite is completely free with no signup, no trials and no hidden limits. Just open a tool and use it." },
  { q: "Are my files uploaded to a server?", a: "No. All processing happens locally in your browser using the HTML5 canvas and WebAssembly. Your files never leave your device." },
  { q: "What is the maximum file size?", a: "Because everything runs on your machine, limits depend on your device's memory. Most computers handle large videos and images comfortably." },
  { q: "Will there be watermarks on my output?", a: "Never. Frame Studio produces clean, professional output with no branding added to your files." },
  { q: "Which browsers are supported?", a: "Any modern browser — Chrome, Edge, Firefox, Safari and Brave. The video engine works best in Chromium-based browsers." },
];

const STATS = [
  { value: "7", label: "Pro tools" },
  { value: "0", label: "Uploads to servers" },
  { value: "100%", label: "Processed locally" },
  { value: "0", label: "Watermarks added" },
];

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center bg-[color:var(--bg)]">
      {/* HERO */}
      <section className="relative w-full overflow-hidden border-b border-[color:var(--border)]">
        <div className="pointer-events-none absolute inset-0 grid-bg" aria-hidden="true" />
        <div className="container-px relative py-20 sm:py-20 lg:py-22">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <span className="badge">
              <Sparkles className="h-3.5 w-3.5" /> The complete media suite
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-[4rem]">
              Process video & images <span className="gradient-text">privately</span>, right in your browser.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted text-pretty">
              A professional suite of browser-based tools to extract frames, compress, crop and resize your media. No servers, no waiting, no watermarks.
            </p>
            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
              <Link href="/tools" className="btn btn-primary h-12 px-7 text-base">
                Explore the toolkit <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/video-to-frame" className="btn btn-ghost h-12 px-7 text-base">
                <UploadCloud className="h-4 w-4" /> Try Video to Frame
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-muted">
              {["Free forever", "100% private", "No watermarks", "No signup"].map((t) => (
                <li key={t} className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-accent" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="w-full border-b border-[color:var(--border)] bg-[color:var(--bg)]">
        <div className="container-px py-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col items-center text-center">
                <span className="font-display text-3xl font-bold tracking-tight">{s.value}</span>
                <span className="mt-1 text-xs font-medium uppercase tracking-widest text-muted">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section id="tools" className="container-px w-full scroll-mt-20 py-20 sm:py-24">
        <SectionHeading
          eyebrow="The toolkit"
          title="A tool for every media task"
          description="Seven fast, private, browser-based tools to convert, compress, crop and resize your videos and images."
        />
        <div className="mx-auto mt-14 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TOOLS.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      {/* WHY CHOOSE / FEATURES */}
      <section id="features" className="w-full scroll-mt-20 border-y border-[color:var(--border)] surface-alt">
        <div className="container-px py-20 sm:py-24">
          <SectionHeading
            eyebrow="Why Frame Studio"
            title="Built for privacy, speed and quality"
            description="No accounts, no uploads and no compromises — every tool is engineered to run entirely on your device."
          />
          <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3">
            {[
              { icon: Lock, title: "Private by design", desc: "Your files are processed locally and never uploaded. What happens on your device stays on your device." },
              { icon: Zap, title: "Instant & offline-capable", desc: "No upload or download bottlenecks. Once loaded, tools work at native speed — even without a connection." },
              { icon: Cpu, title: "Powered by the browser", desc: "HTML5 canvas and WebAssembly FFmpeg deliver desktop-grade processing with nothing to install." },
            ].map((f) => (
              <div key={f.title} className="card p-8">
                <span className="icon-tile mb-5 h-12 w-12">
                  <f.icon className="h-6 w-6" />
                </span>
                <h3 className="font-display text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section className="container-px w-full py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="section-eyebrow">Enterprise privacy</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              Your files never leave your device.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted text-pretty">
              Unlike converters that force you to upload large files to their servers, Frame Studio uses standard browser APIs to read and process media directly on your machine. That means total privacy and dramatically less waiting — there are simply no upload bottlenecks.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Zero server round-trips for maximum confidentiality",
                "No queues — processing starts the instant you're ready",
                "Clean, watermark-free, ready-to-use output every time",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/10 text-accent">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </span>
                  <span className="leading-relaxed text-[color:var(--fg)]">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card relative overflow-hidden p-8 shadow-card">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
            <div className="relative flex items-center gap-3">
              <span className="icon-tile h-11 w-11"><Shield className="h-5 w-5" /></span>
              <span className="font-display text-lg font-bold">Local engine</span>
            </div>
            <div className="relative mt-8 space-y-4">
              {[UploadCloud, Zap, FileArchive].map((Ic, i) => (
                <div key={i} className="flex items-center gap-4 rounded-xl border border-[color:var(--border)] bg-[color:var(--bg-alt)] p-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[color:var(--card)] text-accent">
                    <Ic className="h-5 w-5" />
                  </span>
                  <div className="h-2 flex-1 rounded-full bg-[color:var(--border)]" style={{ maxWidth: `${90 - i * 18}%` }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="w-full scroll-mt-20 border-y border-[color:var(--border)] surface-alt">
        <div className="container-px py-20 sm:py-24">
          <SectionHeading
            eyebrow="How it works"
            title="From file to finished in three steps"
            description="Every Frame Studio tool follows the same effortless flow."
          />
          <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-3">
            {[
              { n: "01", t: "Choose a tool", d: "Pick from seven native media utilities built for a specific job." },
              { n: "02", t: "Drop your media", d: "Add a file securely — it's processed on your device, never uploaded." },
              { n: "03", t: "Export instantly", d: "Process natively and download the result in a single click." },
            ].map((s) => (
              <div key={s.n} className="card p-6">
                <span className="font-display text-4xl font-bold text-accent/15">{s.n}</span>
                <h3 className="mt-2 font-display text-lg font-bold">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="container-px w-full scroll-mt-20 py-20 sm:py-24">
        <SectionHeading eyebrow="FAQ" title="Common questions" />
        <div className="mt-14">
          <Faq items={HOME_FAQS} />
        </div>
      </section>

      <CtaBanner secondary={{ label: "Contact us", href: "/contact" }} />
    </div>
  );
}
