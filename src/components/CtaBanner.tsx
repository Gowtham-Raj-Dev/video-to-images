import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaBanner({
  title = "Start optimizing your media today",
  description = "Join thousands of creators who rely on Frame Studio for fast, private, watermark-free media processing — right in the browser.",
  primary = { label: "Explore the toolkit", href: "/tools" },
  secondary,
}: {
  title?: string;
  description?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="container-px py-20 sm:py-24">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-4xl border border-[color:var(--border)] bg-[color:var(--fg)] px-8 py-14 text-center sm:px-14 sm:py-16">
        <div className="pointer-events-none absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, var(--bg) 0, transparent 40%), radial-gradient(circle at 80% 80%, var(--bg) 0, transparent 40%)",
          }}
        />
        <div className="relative">
          <h2 className="font-display text-3xl font-bold tracking-tight text-[color:var(--bg)] sm:text-4xl text-balance">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[color:var(--bg)]/70">
            {description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={primary.href}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[color:var(--bg)] px-7 text-sm font-semibold text-[color:var(--fg)] transition-transform hover:-translate-y-0.5"
            >
              {primary.label} <ArrowRight className="h-4 w-4" />
            </Link>
            {secondary && (
              <Link
                href={secondary.href}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-[color:var(--bg)]/25 px-7 text-sm font-semibold text-[color:var(--bg)] transition-colors hover:bg-[color:var(--bg)]/10"
              >
                {secondary.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
