import Link from "next/link";
import { Logo } from "@/components/Logo";
import { HeartButton } from "@/components/HeartButton";
import { FOOTER_LINKS, SITE } from "@/lib/site";
import { VIDEO_TOOLS, IMAGE_TOOLS } from "@/lib/tools";
import { ShieldCheck, Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)] surface-alt">
      <div className="container-px py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {SITE.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="chip"><ShieldCheck className="h-3.5 w-3.5" /> 100% Private</span>
              <span className="chip"><Zap className="h-3.5 w-3.5" /> No uploads</span>
            </div>
          </div>

          {/* Tool columns */}
          <FooterCol title="Video Tools" links={VIDEO_TOOLS.map((t) => ({ label: t.name, href: `/${t.slug}` }))} />
          <FooterCol title="Image Tools" links={IMAGE_TOOLS.map((t) => ({ label: t.name, href: `/${t.slug}` }))} />
          <FooterCol title="Product" links={[...FOOTER_LINKS.Product]} />
          <FooterCol
            title="Company"
            links={[...FOOTER_LINKS.Company, ...FOOTER_LINKS.Legal]}
          />
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[color:var(--border)] pt-6 text-sm text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p className="inline-flex items-center gap-1.5">
            Built with <HeartButton /> by{" "}
            <a
              href={SITE.brandUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[color:var(--fg)] transition hover:text-accent"
            >
              {SITE.brand}
            </a>
            <span className="hidden sm:inline">· Created by {SITE.creator}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-widest text-[color:var(--fg)]">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => {
          const external = l.href.startsWith("http");
          return (
            <li key={l.href + l.label}>
              {external ? (
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-[color:var(--fg)]"
                >
                  {l.label}
                </a>
              ) : (
                <Link href={l.href} className="text-sm text-muted transition-colors hover:text-[color:var(--fg)]">
                  {l.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
