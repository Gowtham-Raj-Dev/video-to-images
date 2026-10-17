const IS_PROD = process.env.NODE_ENV === "production";

export const SITE = {
  name: "Frame Studio",
  shortName: "Frame Studio",
  tagline: "Convert, compress, crop & resize video and images — right in your browser.",
  description:
    "Free browser-based tools to extract video frames, convert video to MP3, and compress, crop or resize videos and images. Files never leave your device.",
  url: IS_PROD ? "https://videotoimages.codelove.in" : "http://localhost:3000",
  basePath: "",
  creator: "Gowtham",
  brand: "CodeLove",
  brandUrl: "https://codelove.in",
  email: "support@codelove.in",
  twitter: "@codelove",
} as const;

/** Default social share image (1200×630), served from /public. */
export const OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: `${SITE.name} — free video and image tools that run in your browser`,
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
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
} as const;

/** The CodeLove network — the main site plus its sister tools (`title` is the link's hover text). */
export const NETWORK_LINKS: readonly { label: string; href: string; title?: string }[] = [
  { label: "CodeLove", href: "https://codelove.in", title: "CodeLove — main site" },
  { label: "Downloader", href: "https://downloader.codelove.in", title: "Instagram & Pinterest media downloader" },
  { label: "Link in Bio", href: "https://linkinbio.codelove.in" },
  { label: "3D Models", href: "https://models.codelove.in", title: "Free 3D model library" },
  { label: "Video to GIF", href: "https://videotogif.codelove.in", title: "GIF Studio — convert video to GIF" },
  { label: "3D Games", href: "https://games.codelove.in", title: "Free 3D games in your browser" },
];
