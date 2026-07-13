import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-1.5 text-sm text-muted">
      {items.map((item, i) => (
        <span key={item.label} className="inline-flex items-center gap-1.5">
          {item.href ? (
            <Link href={item.href} className="transition-colors hover:text-[color:var(--fg)]">
              {item.label}
            </Link>
          ) : (
            <span className="font-medium text-[color:var(--fg)]">{item.label}</span>
          )}
          {i < items.length - 1 && <ChevronRight className="h-3.5 w-3.5 opacity-60" />}
        </span>
      ))}
    </nav>
  );
}
