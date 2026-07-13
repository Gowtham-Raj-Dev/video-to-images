import type { Metadata } from "next";
import { Sparkles, ShieldCheck, Zap, Ban } from "lucide-react";
import { TOOLS } from "@/lib/tools";
import { ToolsExplorer } from "@/components/ToolsExplorer";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "All Tools — Free Browser-Based Video & Image Toolkit",
  description:
    "Browse the full Frame Studio toolkit: extract frames, compress, crop and resize videos and images — all free, private and processed in your browser.",
  alternates: { canonical: "/tools" },
};

const HIGHLIGHTS = [
  { icon: ShieldCheck, label: "100% private" },
  { icon: Zap, label: "Instant, on-device" },
  { icon: Ban, label: "No watermarks" },
];

export default function ToolsPage() {
  return (
    <div className="flex w-full flex-col items-center">
      {/* Hero */}
      <section className="relative w-full overflow-hidden border-b border-[color:var(--border)] surface-alt">
        <div className="pointer-events-none absolute inset-0 grid-bg" aria-hidden="true" />
        <div className="container-px relative py-16 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <span className="badge"><Sparkles className="h-3.5 w-3.5" /> {TOOLS.length} free tools</span>
            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl">
              The complete media toolkit
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted text-pretty">
              Every tool runs entirely in your browser — no uploads, no signup, no waiting. Filter by category or search to find the right one.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-muted">
              {HIGHLIGHTS.map((h) => (
                <span key={h.label} className="inline-flex items-center gap-1.5">
                  <h.icon className="h-4 w-4 text-accent" /> {h.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section className="container-px w-full py-14 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <ToolsExplorer />
        </div>
      </section>

      <CtaBanner secondary={{ label: "Contact us", href: "/contact" }} />
    </div>
  );
}
