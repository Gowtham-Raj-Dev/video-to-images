import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Video Watermark Remover | AI Video Cleaner",
  description: "Remove Gemini watermarks from a single video easily, free, and 100% locally in your browser. No uploads required.",
  keywords: [
    "video watermark remover",
    "remove Gemini watermark from video",
    "AI video cleaner",
    "free video tool"
  ],
  openGraph: {
    title: "Free Video Watermark Remover | AI Video Cleaner",
    description: "Remove Gemini watermarks from a single video easily, free, and 100% locally in your browser. No uploads required.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Video Watermark Remover",
    description: "Remove Gemini watermarks from a single video easily, free, and 100% locally in your browser.",
  },
  alternates: {
    canonical: "/video",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
