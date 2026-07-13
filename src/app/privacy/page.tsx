import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy — Frame Studio",
  description: "How Frame Studio handles your data. Spoiler: your files are processed locally and never uploaded.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="July 11, 2026"
      intro={`This Privacy Policy explains how ${SITE.name} ("we", "us") handles information when you use our website and browser-based tools. In short: your media files are processed entirely on your own device and are never uploaded to us.`}
      sections={[
        {
          heading: "Your files stay on your device",
          body: [
            "All of our tools — frame extraction, compression, cropping and resizing — run locally in your browser using the HTML5 canvas API and a WebAssembly build of FFmpeg.",
            "We never receive, transmit, store or have access to the videos or images you process. Your files never leave your computer or phone.",
          ],
        },
        {
          heading: "Information we do not collect",
          body: [
            "We do not require accounts, logins or personal details to use any tool.",
            "We do not collect, sell or share the contents of your media files, because we never receive them in the first place.",
          ],
        },
        {
          heading: "Analytics and cookies",
          body: [
            "We may use privacy-friendly, aggregated analytics to understand overall traffic and improve the site. This data is anonymous and cannot identify you or your files.",
            "The site may set functional cookies to remember preferences such as your light or dark theme.",
          ],
        },
        {
          heading: "Third-party resources",
          body: [
            "Some tools download an open-source processing engine (FFmpeg) from a public CDN the first time you use them. This transfers the engine to your browser but does not send any of your files anywhere.",
          ],
        },
        {
          heading: "Contact",
          body: [
            `If you have any questions about this policy, contact us at ${SITE.email}.`,
          ],
        },
      ]}
    />
  );
}
