import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  // Basic SEO
  title: "OneCard — Jinja SSS | Smart Student Management System",
  description:
    "One permanent card. Instant fee checks. Automated attendance. Total control. OneCard powers Jinja Senior Secondary School with 29,560+ students managed.",
  keywords: [
    "OneCard",
    "Jinja SSS",
    "student management",
    "school card system",
    "QR code student card",
    "fee verification",
    "attendance tracking",
    "Jinja Senior Secondary School",
    "Herman Software Solutions",
  ],
  authors: [{ name: "Herman Software Solutions" }],
  creator: "Herman Software Solutions",
  publisher: "Jinja Senior Secondary School",

  // PWA Manifest
  manifest: "/manifest.json",

  // Canonical URL
  alternates: {
    canonical: "https://onecard-system-six.vercel.app",
  },

  // Favicon
  icons: {
    icon: "/favicon.svg",
  },

  // Open Graph (Facebook, WhatsApp, LinkedIn)
  openGraph: {
    type: "website",
    locale: "en_UG",
    url: "https://onecard-system-six.vercel.app",
    siteName: "OneCard — Jinja SSS",
    title: "OneCard — Jinja SSS | Smart Student Management System",
    description:
      "One permanent card. Instant fee checks. Automated attendance. Total control. 29,560+ students managed at Jinja Senior Secondary School.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "OneCard — Smarter School Management",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "OneCard — Jinja SSS | Smart Student Management",
    description:
      "One permanent card. Instant fee checks. Automated attendance. Total control. 29,560+ students managed.",
    images: ["/og-image.svg"],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // App Links
  appLinks: {
    web: {
      url: "https://onecard-system-six.vercel.app",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
        <Script src="/console-message.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
