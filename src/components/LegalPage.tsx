export interface LegalSection {
  heading: string;
  body: string[];
}

export function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <div className="flex w-full flex-col items-center">
      <section className="w-full border-b border-[color:var(--border)] surface-alt">
        <div className="container-px py-14 sm:py-16">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-muted">Legal</p>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
            <p className="mt-4 text-sm text-muted">Last updated: {updated}</p>
          </div>
        </div>
      </section>

      <section className="container-px w-full py-14 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <p className="text-base leading-relaxed text-muted">{intro}</p>
          <div className="mt-10 space-y-10">
            {sections.map((s, i) => (
              <div key={s.heading}>
                <h2 className="font-display text-xl font-bold tracking-tight">
                  <span className="mr-2 text-muted">{i + 1}.</span>
                  {s.heading}
                </h2>
                <div className="mt-3 space-y-3">
                  {s.body.map((p, j) => (
                    <p key={j} className="text-sm leading-relaxed text-muted">{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
