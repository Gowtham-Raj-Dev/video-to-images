import Link from "next/link";
import { ReactNode } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Tool } from "@/lib/tools";
import { getRelated } from "@/lib/tools";
import { SectionHeading } from "@/components/SectionHeading";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Faq } from "@/components/Faq";
import { CtaBanner } from "@/components/CtaBanner";
import { ToolCard } from "@/components/ToolCard";

export function ToolPageLayout({ tool, children }: { tool: Tool; children: ReactNode }) {
  const Icon = tool.icon;
  const related = getRelated(tool.slug);

  return (
    <div className="flex w-full flex-col items-center">
      {/* HERO + WORKSPACE */}
      <section className="w-full border-b border-[color:var(--border)] surface-alt">
        <div className="container-px py-14 sm:py-16">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Tools", href: "/tools" },
                { label: tool.name },
              ]}
            />

            <span className="badge mt-6">
              <Icon className="h-3.5 w-3.5" />
              {tool.category} Tool{tool.popular ? " · Popular" : ""}
            </span>

            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.1] tracking-tight text-balance sm:text-5xl">
              {tool.name}
            </h1>
            <p className="mt-4 text-lg font-medium text-[color:var(--fg)]">{tool.tagline}</p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted text-pretty">
              {tool.description}
            </p>

            <ul className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-muted">
              {["No watermark", "No signup", "100% private"].map((t) => (
                <li key={t} className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-accent" /> {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Workspace */}
          <div id="workspace" className="mx-auto mt-12 w-full max-w-5xl scroll-mt-24">
            {children}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="container-px w-full py-16 sm:py-20">
        <SectionHeading
          align="left"
          eyebrow="Features"
          title={`Everything in the ${tool.name} tool`}
          description="Purpose-built controls that make the job fast, precise and effortless."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tool.features.map((f) => {
            const Fi = f.icon;
            return (
              <div key={f.title} className="card card-hover h-full p-6">
                <span className="icon-tile mb-4 h-11 w-11">
                  <Fi className="h-5 w-5" />
                </span>
                <h3 className="text-base font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="w-full border-y border-[color:var(--border)] surface-alt">
        <div className="container-px py-16 sm:py-20">
          <SectionHeading
            eyebrow="How it works"
            title="Three simple steps"
            description={`Get from file to finished ${tool.name.toLowerCase()} result in seconds.`}
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-3">
            {tool.steps.map((s, i) => (
              <div key={s.title} className="card relative p-6">
                <span className="font-display text-4xl font-bold text-accent/15">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS + FORMATS */}
      <section className="container-px w-full py-16 sm:py-20">
        <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          <div className="card p-8">
            <h3 className="font-display text-xl font-bold">Why you'll love it</h3>
            <ul className="mt-6 space-y-4">
              {tool.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/10 text-accent">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </span>
                  <span className="leading-relaxed text-[color:var(--fg)]">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-8">
            <h3 className="font-display text-xl font-bold">Supported formats</h3>
            <div className="mt-6 space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted">Input</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {tool.inputFormats.map((f) => (
                    <span key={f} className="chip font-bold text-[color:var(--fg)]">{f}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted">Output</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {tool.outputFormats.map((f) => (
                    <span key={f} className="chip border-accent/30 bg-accent/5 font-bold text-accent">{f}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full border-t border-[color:var(--border)] surface-alt">
        <div className="container-px py-16 sm:py-20">
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
          <div className="mt-12">
            <Faq items={tool.faqs} />
          </div>
        </div>
      </section>

      {/* RELATED TOOLS */}
      {related.length > 0 && (
        <section className="container-px w-full py-16 sm:py-20">
          <SectionHeading
            align="left"
            eyebrow="Keep going"
            title="Suggested tools"
            description="Pair this with another tool to finish the job."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((t) => (
              <ToolCard key={t.slug} tool={t} />
            ))}
          </div>
          <div className="mt-8">
            <Link href="/tools" className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
              View all tools <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      )}

      <CtaBanner
        title={`Ready to use ${tool.name}?`}
        description="Free, private and watermark-free. No signup required — just upload and go."
        primary={{ label: "Upload a file", href: "#workspace" }}
        secondary={{ label: "Browse all tools", href: "/tools" }}
      />
    </div>
  );
}
