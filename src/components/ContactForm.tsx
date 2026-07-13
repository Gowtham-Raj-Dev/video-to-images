"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { SITE } from "@/lib/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    const subject = encodeURIComponent(form.subject || "Frame Studio enquiry");
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="card flex flex-col items-center p-10 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-2xl bg-green-500/10 text-green-500">
          <CheckCircle2 className="h-8 w-8" />
        </span>
        <h3 className="mt-5 font-display text-xl font-bold">Thanks for reaching out!</h3>
        <p className="mt-2 max-w-sm text-sm text-muted">
          Your email client should have opened with your message ready to send. If not, email us directly at{" "}
          <a href={`mailto:${SITE.email}`} className="font-medium text-accent">{SITE.email}</a>.
        </p>
        <button onClick={() => setSent(false)} className="btn btn-ghost mt-6 h-11 px-6">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name">
          <input required value={form.name} onChange={update("name")} className="cl-input" placeholder="Jane Doe" />
        </Field>
        <Field label="Email">
          <input required type="email" value={form.email} onChange={update("email")} className="cl-input" placeholder="you@example.com" />
        </Field>
      </div>
      <div className="mt-5">
        <Field label="Subject">
          <input value={form.subject} onChange={update("subject")} className="cl-input" placeholder="How can we help?" />
        </Field>
      </div>
      <div className="mt-5">
        <Field label="Message">
          <textarea required value={form.message} onChange={update("message")} rows={5} className="cl-input resize-y" placeholder="Tell us a bit more…" />
        </Field>
      </div>
      <button type="submit" className="btn btn-primary mt-6 h-12 w-full text-base">
        Send message <Send className="h-4 w-4" />
      </button>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-[color:var(--fg)]">{label}</span>
      {children}
    </label>
  );
}
