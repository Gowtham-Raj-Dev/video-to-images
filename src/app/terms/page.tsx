import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service — Frame Studio",
  description: "The terms that govern your use of Frame Studio's free browser-based media tools.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="July 11, 2026"
      intro={`By accessing or using ${SITE.name} (the "Service"), you agree to these Terms of Service. If you do not agree, please do not use the Service.`}
      sections={[
        {
          heading: "Use of the Service",
          body: [
            "Frame Studio provides free, browser-based tools to extract frames from, compress, crop and resize videos and images.",
            "You may use the Service for any lawful purpose. You are solely responsible for the files you process and for ensuring you have the rights to use them.",
          ],
        },
        {
          heading: "No warranty",
          body: [
            "The Service is provided \"as is\" and \"as available\" without warranties of any kind, whether express or implied.",
            "While we work hard to keep the tools reliable, we do not guarantee that processing will be error-free or that output will meet every requirement. Always keep a copy of your original files.",
          ],
        },
        {
          heading: "Limitation of liability",
          body: [
            "To the maximum extent permitted by law, we shall not be liable for any indirect, incidental or consequential damages, or for any loss of data, arising from your use of the Service.",
            "Because all processing happens locally on your device, you retain full control of and responsibility for your files.",
          ],
        },
        {
          heading: "Intellectual property",
          body: [
            "You retain all rights to the media you process. We claim no ownership over your files or output.",
            "The Frame Studio name, branding and website design are the property of their respective owners and may not be copied without permission.",
          ],
        },
        {
          heading: "Changes to these terms",
          body: [
            "We may update these Terms from time to time. Continued use of the Service after changes take effect constitutes acceptance of the revised Terms.",
          ],
        },
        {
          heading: "Contact",
          body: [
            `Questions about these Terms can be sent to ${SITE.email}.`,
          ],
        },
      ]}
    />
  );
}
