import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Multi Image Watermark Remover | AI Image Cleaner",
  description: "Remove Gemini watermarks from multiple images at once. Free, fast, and 100% locally in your browser. No uploads required.",
  keywords: [
    "free batch image watermark remover",
    "free multi image cleaner",
    "remove Gemini watermarks from multiple images",
    "free bulk image watermark removal"
  ],
  openGraph: {
    title: "Free Multi Image Watermark Remover | AI Image Cleaner",
    description: "Remove Gemini watermarks from multiple images at once. Free, fast, and 100% locally in your browser. No uploads required.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Multi Image Watermark Remover",
    description: "Remove Gemini watermarks from multiple images at once. Free, fast, and 100% locally in your browser.",
  },
  alternates: {
    canonical: "/multi-image",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
