import type { Metadata } from "next";
import { Mail, MessageSquare, ShieldCheck, Clock } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Frame Studio",
  description: "Get in touch with the Frame Studio team. Questions, feedback and feature requests are always welcome.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="flex w-full flex-col items-center">
      <section className="w-full border-b border-[color:var(--border)] surface-alt">
        <div className="container-px py-16 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <span className="badge"><MessageSquare className="h-3.5 w-3.5" /> We'd love to hear from you</span>
            <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl">
              Get in touch
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted text-pretty">
              Have a question, found a bug, or want to request a feature? Send us a message and we'll get back to you.
            </p>
          </div>
        </div>
      </section>

      <section className="container-px w-full py-16 sm:py-20">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_1.3fr]">
          {/* Info */}
          <div className="flex flex-col gap-4">
            {[
              { icon: Mail, title: "Email us", desc: SITE.email, href: `mailto:${SITE.email}` },
              { icon: Clock, title: "Response time", desc: "We usually reply within 1–2 business days." },
              { icon: ShieldCheck, title: "Your privacy", desc: "Tools run locally — we never see or store your files." },
            ].map((c) => (
              <div key={c.title} className="card flex items-start gap-4 p-5">
                <span className="icon-tile h-11 w-11 shrink-0"><c.icon className="h-5 w-5" /></span>
                <div>
                  <h3 className="text-sm font-bold">{c.title}</h3>
                  {c.href ? (
                    <a href={c.href} className="mt-1 block text-sm text-accent">{c.desc}</a>
                  ) : (
                    <p className="mt-1 text-sm text-muted">{c.desc}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
