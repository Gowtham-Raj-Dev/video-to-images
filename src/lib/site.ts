const IS_PROD = process.env.NODE_ENV === "production";

export const SITE = {
  name: "Frame Studio",
  shortName: "Frame Studio",
  tagline: "Convert, compress, crop & resize video and images — right in your browser.",
  description:
    "A professional suite of browser-based tools to extract frames, compress, crop and resize your videos and images. 100% private, no uploads, no watermarks, no signup.",
  url: IS_PROD ? "https://videotoimages.codelove.in" : "http://localhost:3000",
  basePath: "",
  creator: "Gowtham",
  brand: "CodeLove",
  brandUrl: "https://codelove.in",
  email: "support@codelove.in",
  twitter: "@codelove",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Tools", href: "/tools" },
  { label: "Features", href: "/#features" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_LINKS = {
  Product: [
    { label: "All Tools", href: "/tools" },
    { label: "Features", href: "/#features" },
    { label: "How it works", href: "/#how-it-works" },
    { label: "FAQ", href: "/#faq" },
  ],
  Company: [
    { label: "Contact", href: "/contact" },
    { label: "CodeLove", href: "https://codelove.in" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
} as const;
