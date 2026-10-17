import type { Metadata } from "next";
import { OG_IMAGE, SITE } from "@/lib/site";
import type { Tool } from "@/lib/tools";

const ORG_ID = `${SITE.brandUrl}/#organization`;
const WEBSITE_ID = `${SITE.url}/#website`;

/** Absolute URL for a site path. No trailing slash, matching the static export (`/tools` -> `tools.html`). */
export function absoluteUrl(path: string): string {
  return path === "/" ? SITE.url : `${SITE.url}${path}`;
}

/**
 * Metadata for one page: its own title and description, a self-referencing
 * canonical, and Open Graph / Twitter tags that describe that page.
 *
 * `openGraph` and `twitter` are replaced (not merged) when a page sets them,
 * so everything the root layout provides is repeated here.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const socialTitle = `${title} | ${SITE.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      siteName: SITE.name,
      locale: "en_US",
      title: socialTitle,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [OG_IMAGE],
    },
  };
}

/* ------------------------------------------------------------------ */
/*  JSON-LD builders — every value mirrors content visible on the page */
/* ------------------------------------------------------------------ */

/** Site-wide graph: the WebSite and its publisher, CodeLove. */
export function siteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: SITE.brand,
        url: SITE.brandUrl,
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE.url,
        name: SITE.name,
        alternateName: [`${SITE.name} by ${SITE.brand}`, `${SITE.brand} Video to Images`, "videotoimages.codelove.in"],
        description: SITE.description,
        inLanguage: "en",
        publisher: { "@id": ORG_ID },
      },
    ],
  };
}

function breadcrumbNode(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

function faqNode(faqs: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return { "@context": "https://schema.org", ...breadcrumbNode(items) };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return { "@context": "https://schema.org", ...faqNode(faqs) };
}

/** Tool page graph: the web app itself, its visible steps, its visible FAQ and its breadcrumb trail. */
export function toolJsonLd(tool: Tool) {
  const path = `/${tool.slug}`;
  const url = absoluteUrl(path);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": `${url}#app`,
        name: tool.name,
        url,
        description: tool.description,
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Any",
        browserRequirements: "Requires JavaScript and a modern web browser.",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        featureList: tool.features.map((f) => f.title),
        isPartOf: { "@id": WEBSITE_ID },
        publisher: { "@id": ORG_ID },
      },
      {
        "@type": "HowTo",
        name: `How to use ${tool.name}`,
        step: tool.steps.map((s, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: s.title,
          text: s.desc,
        })),
      },
      faqNode(tool.faqs),
      breadcrumbNode([
        { name: "Home", path: "/" },
        { name: "Tools", path: "/tools" },
        { name: tool.name, path },
      ]),
    ],
  };
}
