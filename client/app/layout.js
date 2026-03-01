import "./globals.css";
import LordIconInit from "@/lib/LordIconInit";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_TAGLINE,
  SITE_URL,
} from "@/lib/constants";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "web design",
    "web development",
    "digital agency",
    "Next.js",
    "React",
    "SEO",
    "UI/UX",
    "full-stack",
    "brand identity",
    "case studies",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Build Brand Fast!`,
    description: SITE_TAGLINE,
    images: [
      {
        url: "/logo_packages/og-image.png",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Build Brand Fast!`,
    description: SITE_TAGLINE,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      { url: "/logo_packages/favicon.ico", sizes: "any" },
      { url: "/logo_packages/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/logo_packages/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/logo_packages/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/logo_packages/site.webmanifest",
  alternates: {
    canonical: SITE_URL,
  },
};

export const viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="msapplication-config" content="/logo_packages/browserconfig.xml" />
        <link rel="mask-icon" href="/logo_packages/safari-pinned-tab.svg" color="#000000" />
      </head>
      <body className="antialiased">
        <LordIconInit />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
