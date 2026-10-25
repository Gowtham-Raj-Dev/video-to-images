import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageLoader } from "@/components/PageLoader";
import { JsonLd } from "@/components/JsonLd";
import { OG_IMAGE, SITE } from "@/lib/site";
import { siteJsonLd } from "@/lib/seo";
import { ADSENSE_CLIENT, GA_MEASUREMENT_ID } from "@/lib/adsense";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `Video to Images & Free Video Tools | ${SITE.name} by ${SITE.brand}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.creator, url: SITE.brandUrl }],
  creator: SITE.creator,
  publisher: SITE.brand,
  keywords: [
    "video to frame",
    "extract frames from video",
    "video compressor online free",
    "compress video in browser",
    "crop video online",
    "resize video online",
    "image compressor free",
    "crop image online",
    "resize image online",
    "no watermark video tools",
    "frame studio",
    "video to images",
    "video to jpg",
    "video to png",
    "extract images from video",
    "video frame extractor",
    "video to mp3 converter",
    "screenshot from video",
    "codelove",
    "codelove video to images",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_US",
    title: `${SITE.name} — Free Video & Image Tools`,
    description: SITE.description,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Free Video & Image Tools`,
    description: SITE.description,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#080808" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`scroll-smooth ${inter.variable} ${jakarta.variable}`}>
      <head>
        {/* Google AdSense — rendered only once a publisher ID is set in src/lib/adsense.ts */}
        {ADSENSE_CLIENT ? (
          <>
            <meta name="google-adsense-account" content={ADSENSE_CLIENT} />
            <script
              async
              src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
              crossOrigin="anonymous"
            />
          </>
        ) : null}
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <JsonLd data={siteJsonLd()} />
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[color:var(--fg)] focus:px-4 focus:py-2 focus:text-[color:var(--bg)]"
          >
            Skip to content
          </a>
          <PageLoader />
          <Header />
          <main className="flex-1" id="main">{children}</main>
          <Footer />
        </ThemeProvider>
        {/* Google Analytics — only once a measurement ID is set in src/lib/adsense.ts */}
        {GA_MEASUREMENT_ID ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_MEASUREMENT_ID}');`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
