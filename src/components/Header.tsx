"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { NAV_LINKS } from "@/lib/site";
import { TOOLS } from "@/lib/tools";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors bg-[color:var(--card)] ${
        scrolled
          ? "border-[color:var(--border)]"
          : "border-transparent"
      }`}
    >
      <div className="container-px flex h-16 items-center justify-between gap-4">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          <Link href="/" className="nav-link">Home</Link>

          {/* Tools mega menu */}
          <div className="group relative">
            <button className="nav-link inline-flex items-center gap-1 outline-none">
              Tools
              <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
            </button>
            <div className="invisible absolute left-1/2 top-full w-[840px] -translate-x-[30%] pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
              <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] p-4 shadow-card">
                <div className="grid grid-cols-3 gap-3">
                  {TOOLS.map((t) => {
                    const Icon = t.icon;
                    return (
                      <Link
                        key={t.slug}
                        href={`/${t.slug}`}
                        className="flex items-start gap-3 rounded-lg p-3 transition-all hover:bg-[color:var(--bg-alt)] hover:ring-1 hover:ring-[color:var(--border)]"
                      >
                        <div className={`mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-md text-white shadow-sm ${t.color}`}>
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <span className="block text-sm font-semibold text-[color:var(--fg)]">{t.name}</span>
                          <span className="mt-0.5 block text-xs text-muted line-clamp-2">{t.short}</span>
                        </div>
                      </Link>
                    );
                  })}
                  <a
                    href="https://videotogif.codelove.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 rounded-lg border border-accent/20 bg-accent/5 p-3 transition-colors hover:border-accent/40 hover:bg-accent/10"
                  >
                    <div className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-md bg-gradient-to-br from-cyan-400 to-blue-500 text-white shadow-sm shadow-accent/20">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="block text-sm font-semibold text-accent">Video to GIF <span className="ml-1 text-[10px]">✨ New</span></span>
                      <span className="mt-0.5 block text-xs text-muted line-clamp-2">Convert MP4, MOV, AVI into high-quality GIFs.</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {NAV_LINKS.filter((l) => !["Home", "Tools"].includes(l.label)).map((l) => (
            <Link key={l.href} href={l.href} className="nav-link">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/video-to-frame" className="btn btn-primary hidden h-9 px-4 text-xs sm:inline-flex">
            Get Started <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-lg border border-[color:var(--border)] text-[color:var(--fg)] lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-[color:var(--border)] bg-[color:var(--bg)] px-5 py-6 lg:hidden">
          <nav className="flex flex-col gap-1">
            <Link href="/" className="mobile-link">Home</Link>
            <Link href="/tools" className="mobile-link">All Tools</Link>
            <Link href="/#features" className="mobile-link">Features</Link>
            <Link href="/#how-it-works" className="mobile-link">How it works</Link>
            <Link href="/#faq" className="mobile-link">FAQ</Link>
            <Link href="/contact" className="mobile-link">Contact</Link>
          </nav>

          <p className="mt-6 mb-2 px-1 text-xs font-bold uppercase tracking-widest text-muted">All Tools</p>
          <div className="grid grid-cols-1 gap-1">
            {TOOLS.map((t) => (
              <MobileTool key={t.slug} slug={t.slug} name={t.name} short={t.short} Icon={t.icon} color={t.color} />
            ))}
            <a
              href="https://videotogif.codelove.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl p-2.5 hover:bg-[color:var(--bg-alt)]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 text-white shadow-sm">
                <Sparkles className="h-4 w-4" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-accent">Video to GIF <span className="ml-1 text-[10px]">✨ New</span></span>
                <span className="block truncate text-xs text-muted">Convert video to high-quality GIFs.</span>
              </span>
            </a>
          </div>

          <Link href="/video-to-frame" className="btn btn-primary mt-6 h-12 w-full text-base">
            Get Started <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </header>
  );
}

function MobileTool({
  slug,
  name,
  short,
  Icon,
  color,
}: {
  slug: string;
  name: string;
  short: string;
  Icon: typeof TOOLS[number]["icon"];
  color: string;
}) {
  return (
    <Link href={`/${slug}`} className="flex items-center gap-3 rounded-xl p-2.5 hover:bg-[color:var(--bg-alt)]">
      <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white shadow-sm ${color}`}>
        <Icon className="h-4 w-4" />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold">{name}</span>
        <span className="block truncate text-xs text-muted">{short}</span>
      </span>
    </Link>
  );
}
