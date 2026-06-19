import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Image Watermark Remover | AI Image Cleaner",
  description: "Remove Gemini watermarks from a single image easily, free, and 100% locally in your browser. No uploads required.",
  keywords: [
    "image watermark remover",
    "remove Gemini watermark from image",
    "AI image cleaner",
    "free image tool"
  ],
  openGraph: {
    title: "Free Image Watermark Remover | AI Image Cleaner",
    description: "Remove Gemini watermarks from a single image easily, free, and 100% locally in your browser. No uploads required.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Image Watermark Remover",
    description: "Remove Gemini watermarks from a single image easily, free, and 100% locally in your browser.",
  },
  alternates: {
    canonical: "/image",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
