import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Coins, Cpu, Gift, Info, Lock, Mail, User, Zap } from "lucide-react";
import { IMAGE_TOOLS, TOOLS, VIDEO_TOOLS } from "@/lib/tools";
import { NETWORK_LINKS, SITE } from "@/lib/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "Frame Studio is a free set of video and image tools from CodeLove that run in your browser. Learn how it works, who builds it and how it is funded.",
  path: "/about",
});

const PRINCIPLES = [
  { icon: Lock, title: "Private by design", desc: "Your videos and images are processed locally on your device. We never receive, see or store them." },
  { icon: Gift, title: "Free to use", desc: "Every tool is free, with no signup and no watermark added to your output." },
  { icon: Cpu, title: "Nothing to install", desc: "Everything runs in a modern browser — Chrome, Edge, Firefox, Safari or Brave." },
];

const HOW_IT_WORKS = [
  "Image tools and frame extraction use your browser's built-in HTML5 canvas.",
  "Video compression, cropping, resizing and MP3 extraction use FFmpeg compiled to WebAssembly.",
  "Results are created on your device and downloaded straight from your browser.",
];

const TOOL_GROUPS = [
  { title: "Video tools", tools: VIDEO_TOOLS },
  { title: "Image tools", tools: IMAGE_TOOLS },
];

const linkClass = "font-medium text-accent underline underline-offset-4";

export default function AboutPage() {
  const sisterSites = NETWORK_LINKS.filter((l) => l.href !== SITE.brandUrl);

  return (
    <div className="flex w-full flex-col items-center">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />

      {/* Hero */}
      <section className="w-full border-b border-[color:var(--border)] surface-alt">
        <div className="container-px py-16 sm:py-20">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
            <span className="badge mt-6"><Info className="h-3.5 w-3.5" /> About</span>
            <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl">
              About {SITE.name}
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted text-pretty">
              Free video and image tools that run in your browser — built so your files never have to leave your device.
            </p>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="container-px w-full py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="section-eyebrow">What we do</span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              Everyday media jobs, done in your browser.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted text-pretty">
              {SITE.name} is a free set of video and image tools. You can extract frames from a video, save a video's audio as an MP3, and compress, crop or resize videos and images — with no software to install and no account to create.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted text-pretty">
              Most online converters upload your file to a server, process it there and send the result back. {SITE.name} does the work on your own device instead, so your files are never uploaded to us and there is no upload queue to wait in.
            </p>
          </div>
          <div className="card p-8">
            <div className="flex items-center gap-3">
              <span className="icon-tile h-11 w-11"><Zap className="h-5 w-5" /></span>
              <h3 className="font-display text-lg font-bold">How it works</h3>
            </div>
            <ul className="mt-6 space-y-4">
              {HOW_IT_WORKS.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/10 text-accent">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </span>
                  <span className="leading-relaxed text-[color:var(--fg)]">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="w-full border-y border-[color:var(--border)] surface-alt">
        <div className="container-px py-16 sm:py-20">
          <SectionHeading
            eyebrow="What we stand for"
            title="Private, free and simple"
            description="Three rules every tool on the site follows."
          />
          <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
            {PRINCIPLES.map((p) => (
              <div key={p.title} className="card p-8">
                <span className="icon-tile mb-5 h-12 w-12">
                  <p.icon className="h-6 w-6" />
                </span>
                <h3 className="font-display text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The tools */}
      <section className="container-px w-full py-16 sm:py-20">
        <SectionHeading
          eyebrow="The toolkit"
          title={`${TOOLS.length} tools, one job each`}
          description="Every tool has its own page with step-by-step instructions and answers to common questions."
        />
        <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
          {TOOL_GROUPS.map((group) => (
            <div key={group.title} className="card p-8">
              <h3 className="font-display text-xl font-bold">{group.title}</h3>
              <ul className="mt-6 space-y-4">
                {group.tools.map((t) => (
                  <li key={t.slug} className="text-sm leading-relaxed">
                    <Link href={`/${t.slug}`} className="font-semibold text-[color:var(--fg)] transition-colors hover:text-accent">
                      {t.name}
                    </Link>
                    <span className="block text-muted">{t.short}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Who, funding, contact */}
      <section className="w-full border-t border-[color:var(--border)] surface-alt">
        <div className="container-px py-16 sm:py-20">
          <SectionHeading eyebrow="Behind the site" title="Who we are" />
          <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
            <div className="card p-8">
              <span className="icon-tile mb-5 h-12 w-12"><User className="h-6 w-6" /></span>
              <h3 className="font-display text-lg font-bold">Who builds it</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {SITE.name} is built and maintained by {SITE.creator} as part of{" "}
                <a href={SITE.brandUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>{SITE.brand}</a>
                , which also runs{" "}
                {sisterSites.map((l, i) => (
                  <span key={l.href}>
                    {i > 0 && (i === sisterSites.length - 1 ? " and " : ", ")}
                    <a href={l.href} target="_blank" rel="noopener noreferrer" className={linkClass}>{l.label}</a>
                  </span>
                ))}
                .
              </p>
            </div>
            <div className="card p-8">
              <span className="icon-tile mb-5 h-12 w-12"><Coins className="h-6 w-6" /></span>
              <h3 className="font-display text-lg font-bold">How it is funded</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                The tools are free. To cover hosting and development we use or may use advertising through Google AdSense. Ads do not change how the tools work, and our{" "}
                <Link href="/privacy" className={linkClass}>Privacy Policy</Link> explains advertising cookies and how to opt out.
              </p>
            </div>
            <div className="card p-8">
              <span className="icon-tile mb-5 h-12 w-12"><Mail className="h-6 w-6" /></span>
              <h3 className="font-display text-lg font-bold">Get in touch</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Found a bug or have an idea for a tool? Email{" "}
                <a href={`mailto:${SITE.email}`} className={linkClass}>{SITE.email}</a> or use the{" "}
                <Link href="/contact" className={linkClass}>contact page</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Try the tools"
        description="Free, private and watermark-free. No signup required — pick a tool and get started."
        secondary={{ label: "Contact us", href: "/contact" }}
      />
    </div>
  );
}
