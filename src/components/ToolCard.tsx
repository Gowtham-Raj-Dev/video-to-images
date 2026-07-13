import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Tool } from "@/lib/tools";

export function ToolCard({ tool }: { tool: Tool }) {
  const Icon = tool.icon;
  return (
    <Link
      href={`/${tool.slug}`}
      className="card card-hover group flex h-full flex-col p-6"
    >
      <div className="flex items-center justify-between">
        <span className={`flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-sm ${tool.color}`}>
          <Icon className="h-6 w-6" />
        </span>
        <div className="flex items-center gap-1.5">
          <span className="chip text-[11px]">{tool.category}</span>
          {tool.popular && <span className="badge">Popular</span>}
        </div>
      </div>

      <h3 className="mt-5 font-display text-lg font-bold tracking-tight">{tool.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{tool.short}</p>

      <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent">
        Open tool
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
