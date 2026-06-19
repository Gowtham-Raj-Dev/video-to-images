import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Free Gemini Video Watermark Remover | AI Video Cleaner",
  description: "Remove Gemini and Veo watermarks from videos easily, free, and 100% locally in your browser. No uploads required.",
  keywords: [
    "Gemini watermark remover",
    "remove Gemini watermark",
    "Veo watermark remover",
    "AI video cleaner",
    "remove watermark from image",
    "free watermark remover",
    "local AI tools"
  ],
  openGraph: {
    title: "Free Gemini Watermark Remover | AI Video & Image Cleaner",
    description: "Remove Gemini and Veo watermarks from videos and images easily, free, and 100% locally in your browser. No uploads required.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Gemini Watermark Remover",
    description: "Remove Gemini and Veo watermarks from videos and images easily, free, and 100% locally in your browser.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 'dark';
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
                
                // Clear any rogue service workers from other projects on localhost
                if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
                  navigator.serviceWorker.getRegistrations().then(function(registrations) {
                    for (var i = 0; i < registrations.length; i++) {
                      registrations[i].unregister().then(function(success) {
                        if (success) {
                          console.log('Unregistered rogue service worker');
                        }
                      });
                    }
                  });
                }
              })()
            `,
          }}
        />
      </head>
      <body className={sora.className}>{children}</body>
    </html>
  );
}
