import type { Metadata } from "next";
import type { ReactNode } from "react";
import { LegalPage } from "@/components/LegalPage";
import { SITE } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Frame Studio handles your data: files are processed locally in your browser and never uploaded. Covers cookies, advertising, hosting and contact.",
  path: "/privacy",
});

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-accent underline underline-offset-4"
    >
      {children}
    </a>
  );
}

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      path="/privacy"
      updated="October 10, 2026"
      intro={`This Privacy Policy explains how ${SITE.name} ("we", "us") handles information when you use our website and browser-based tools. In short: your media files are processed entirely on your own device and are never uploaded to us.`}
      sections={[
        {
          heading: "Your files stay on your device",
          body: [
            "All of our tools — frame extraction, audio extraction, compression, cropping and resizing — run locally in your browser using the HTML5 canvas API and a WebAssembly build of FFmpeg.",
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
          heading: "When you contact us",
          body: [
            "The contact form does not send anything to our servers. It opens a draft in your own email app, and nothing is sent until you choose to send that email.",
            "If you do email us, we receive your email address and whatever you include in the message, and we use them only to reply to you.",
          ],
        },
        {
          heading: "Cookies and local storage",
          body: [
            `${SITE.name}'s own code does not set cookies. Your light or dark theme preference is saved in your browser's local storage so the site looks the same on your next visit; it stays on your device and is not sent to us.`,
            "Advertising partners may set and read cookies of their own, as described in the Advertising section below.",
          ],
        },
        {
          heading: "Advertising",
          body: [
            "We use or may use Google AdSense to show advertisements on this site.",
            "Google and other third-party vendors use cookies to serve ads based on your prior visits to this website or to other websites. Google's use of advertising cookies enables it and its partners to serve ads to you based on your visits to this site and/or other sites on the Internet.",
            <>
              You can opt out of personalised advertising by visiting{" "}
              <ExternalLink href="https://adssettings.google.com">Google Ads Settings</ExternalLink>. You can also opt
              out of third-party vendors' use of cookies for personalised advertising at{" "}
              <ExternalLink href="https://www.aboutads.info">www.aboutads.info</ExternalLink>.
            </>,
            <>
              To learn more, see{" "}
              <ExternalLink href="https://policies.google.com/technologies/partner-sites">
                How Google uses information from sites or apps that use its services
              </ExternalLink>
              .
            </>,
            "Advertising does not change how the tools work: your media files are still processed locally in your browser and are never uploaded to us.",
          ],
        },
        {
          heading: "Hosting and third-party resources",
          body: [
            <>
              This site is hosted on GitHub Pages. Like any web host, GitHub may log technical information such as your
              IP address when your browser requests a page. See the{" "}
              <ExternalLink href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">
                GitHub Privacy Statement
              </ExternalLink>{" "}
              for details.
            </>,
            "The video compressor, crop, resize and video-to-MP3 tools download an open-source processing engine (FFmpeg) from the public unpkg.com CDN when you start a job. That request reveals your IP address to the CDN, as any web request does, but it only brings the engine to your browser — none of your files are sent anywhere.",
          ],
        },
        {
          heading: "Changes to this policy",
          body: [
            "We may update this policy from time to time, for example when a service described here changes. The \"Last updated\" date at the top of this page shows when it was last revised.",
          ],
        },
        {
          heading: "Contact",
          body: [
            <>
              If you have any questions about this policy, contact us at{" "}
              <a href={`mailto:${SITE.email}`} className="font-medium text-accent underline underline-offset-4">
                {SITE.email}
              </a>
              .
            </>,
          ],
        },
      ]}
    />
  );
}
