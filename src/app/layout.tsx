import type { Metadata, Viewport } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.fcbussigny.ch"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0a0a0a" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="sm:overscroll-y-none" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          crossOrigin=""
          href="/assets/fonts/virage-web/Virage-NarrowUltraboldItalic.woff2"
        />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          crossOrigin=""
          href="/assets/fonts/virage-web/Virage-Regular.woff2"
        />
        {/* eslint-disable-next-line @next/next/no-css-tags -- feuilles du site statique reprises telles quelles */}
        <link rel="stylesheet" href="/assets/css/base.css" />
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/assets/css/fonts.css" />
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/assets/css/fcb.css" />
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="relative overscroll-y-none virage_8d64fc34-module__cMrc6q__className">
        {children}
        <Script src="/assets/js/fcb.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
