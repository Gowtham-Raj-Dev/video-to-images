import Link from "next/link";
import { Logo } from "@/components/Logo";
import { HeartButton } from "@/components/HeartButton";
import { ContactLinks } from "@/components/ContactLinks";
import { FOOTER_LINKS, GUIDE_LINKS, NETWORK_LINKS, SITE } from "@/lib/site";
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

        {/* CodeLove network */}
        <div className="mt-12 grid gap-10 border-t border-[color:var(--border)] pt-8 lg:grid-cols-[1fr_auto] lg:items-start">
          <div className="grid gap-8">
            <nav aria-label="CodeLove network">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[color:var(--fg)]">CodeLove network</h3>
              <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 sm:grid-cols-3 lg:grid-cols-4">
                {NETWORK_LINKS.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      title={l.title}
                      target="_blank"
                      rel="noopener"
                      className="text-sm text-muted transition-colors hover:text-[color:var(--fg)]"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Guides">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[color:var(--fg)]">Guides</h3>
              <ul className="mt-4 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                {GUIDE_LINKS.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener"
                      className="text-sm text-muted transition-colors hover:text-[color:var(--fg)]"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="max-w-[260px] lg:justify-self-end">
          <a
            href="https://codelove.in"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CodeLove — codelove.in"
            className="block w-fit shrink-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/codelove/codelove-footer-on-light.png"
              alt="CodeLove"
              width={704}
              height={144}
              loading="lazy"
              className="h-12 w-auto [.dark_&]:hidden"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/codelove/codelove-footer-on-dark.png"
              alt="CodeLove"
              width={704}
              height={144}
              loading="lazy"
              className="hidden h-12 w-auto [.dark_&]:block"
            />
          </a>
          {/* What CodeLove is, in one line — same text on every CodeLove site. */}
          <p className="mt-4 text-sm leading-relaxed text-muted">
            CodeLove makes free web tools, apps and games for creators, students and developers — simple to use, no
            hidden fees.
          </p>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-[color:var(--border)] pt-6 text-sm text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p className="inline-flex items-center gap-1.5 flex-wrap justify-center">
            Built with <HeartButton /> by{" "}
            <a
              href="https://gowtham.codelove.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[color:var(--fg)] transition hover:text-accent"
            >
              Gowtham
            </a>
            <span className="text-muted/50 hidden sm:inline">•</span>
            <a
              href="https://codelove.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[color:var(--fg)] transition hover:text-accent"
            >
              CodeLove
            </a>
            <span className="text-muted/50">•</span>
            <ContactLinks className="text-[color:var(--fg)]" />
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
