import Link from "next/link";
import { SITE } from "@/lib/site";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label={`${SITE.name} — home`}
    >
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-[color:var(--fg)] text-[color:var(--bg)] shadow-sm transition-transform group-hover:scale-105">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="4" width="18" height="16" rx="2.5" stroke="currentColor" strokeWidth="2" />
          <path d="M3 9h18" stroke="currentColor" strokeWidth="2" />
          <path d="M8 4v5M16 4v5" stroke="currentColor" strokeWidth="2" />
          <rect x="9.5" y="12.5" width="5" height="4" rx="1" fill="currentColor" />
        </svg>
      </span>
      <span className="font-display text-[1.05rem] font-bold tracking-tight text-[color:var(--fg)]">
        Frame<span className="text-muted"> Studio</span>
      </span>
    </Link>
  );
}
