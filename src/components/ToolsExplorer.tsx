"use client";

import { useMemo, useState } from "react";
import { Search, Video, Image as ImageIcon, LayoutGrid } from "lucide-react";
import { TOOLS, VIDEO_TOOLS, IMAGE_TOOLS } from "@/lib/tools";
import { ToolCard } from "@/components/ToolCard";

type Filter = "all" | "Video" | "Image";

const FILTERS: { key: Filter; label: string; icon: typeof LayoutGrid; count: number }[] = [
  { key: "all", label: "All tools", icon: LayoutGrid, count: TOOLS.length },
  { key: "Video", label: "Video", icon: Video, count: VIDEO_TOOLS.length },
  { key: "Image", label: "Image", icon: ImageIcon, count: IMAGE_TOOLS.length },
];

export function ToolsExplorer() {
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return TOOLS.filter((t) => {
      const matchesCategory = filter === "all" || t.category === filter;
      const matchesQuery =
        !q ||
        t.name.toLowerCase().includes(q) ||
        t.short.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [filter, query]);

  return (
    <div className="w-full">
      {/* Controls */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="inline-flex rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] p-1">
          {FILTERS.map((f) => {
            const active = filter === f.key;
            const Icon = f.icon;
            return (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors ${
                  active
                    ? "bg-[color:var(--fg)] text-[color:var(--bg)]"
                    : "text-muted hover:text-[color:var(--fg)]"
                }`}
                aria-pressed={active}
              >
                <Icon className="h-4 w-4" />
                {f.label}
                <span className={`text-xs ${active ? "opacity-70" : "opacity-60"}`}>{f.count}</span>
              </button>
            );
          })}
        </div>

        <div className="relative w-full sm:max-w-xs">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search tools…"
            className="cl-input pl-9"
            aria-label="Search tools"
          />
        </div>
      </div>

      {/* Results */}
      {results.length > 0 ? (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((t) => (
            <ToolCard key={t.slug} tool={t} />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-2xl border border-dashed border-[color:var(--border)] bg-[color:var(--bg-alt)] p-12 text-center">
          <p className="font-display text-lg font-bold">No tools found</p>
          <p className="mt-1 text-sm text-muted">
            Nothing matches “{query}”. Try a different search.
          </p>
          <button
            onClick={() => { setQuery(""); setFilter("all"); }}
            className="btn btn-ghost mt-5 h-10 px-5"
          >
            Reset filters
          </button>
        </div>
      )}
    </div>
  );
}
