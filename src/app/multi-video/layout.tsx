import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Multi Video Watermark Remover | AI Video Cleaner",
  description: "Remove Gemini watermarks from multiple videos at once. Free, fast, and 100% locally in your browser. No uploads required.",
  keywords: [
    "free batch video watermark remover",
    "free multi video cleaner",
    "remove Gemini watermarks from multiple videos",
    "free bulk video watermark removal"
  ],
  openGraph: {
    title: "Free Multi Video Watermark Remover | AI Video Cleaner",
    description: "Remove Gemini watermarks from multiple videos at once. Free, fast, and 100% locally in your browser. No uploads required.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Multi Video Watermark Remover",
    description: "Remove Gemini watermarks from multiple videos at once. Free, fast, and 100% locally in your browser.",
  },
  alternates: {
    canonical: "/multi-video",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
