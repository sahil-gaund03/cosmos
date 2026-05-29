import type { Metadata } from "next";
import { Sora, Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Starfield from "@/components/effects/Starfield";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nexus-cosmos.vercel.app"),
  title: "NEXUS COSMOS | AI-Powered Space Intelligence Operating System",
  description:
    "Track the ISS, explore NASA imagery, and interact with AI-powered astronomy systems. The universe, decoded. A futuristic AI-powered NASA intelligence operating system.",
  keywords: [
    "space",
    "NASA",
    "ISS tracker",
    "astronomy",
    "AI",
    "satellite tracking",
    "rocket launches",
    "solar system",
    "space intelligence",
  ],
  authors: [{ name: "NEXUS COSMOS" }],
  openGraph: {
    title: "NEXUS COSMOS | AI-Powered Space Intelligence Operating System",
    description:
      "Track the ISS, explore NASA imagery, and interact with AI-powered astronomy systems. The universe, decoded. A futuristic AI-powered NASA intelligence operating system.",
    type: "website",
    siteName: "NEXUS COSMOS",
    url: "https://nexus-cosmos.vercel.app/",
    images: [
      {
        url: "/images/hero-earth.png",
        width: 1200,
        height: 630,
        alt: "NEXUS COSMOS Earth Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEXUS COSMOS | AI-Powered Space Intelligence Operating System",
    description:
      "Track the ISS, explore NASA imagery, and interact with AI-powered astronomy systems. The universe, decoded. A futuristic AI-powered NASA intelligence operating system.",
    images: ["/images/hero-earth.png"],
  },
};

export const viewport = {
  themeColor: "#12121c",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${geist.variable} dark scroll-smooth`}
    >
      <head>
        <meta name="google-site-verification" content="u2MdUjL6aTeE_R0wOt9GqkizXZFqRxvQaR6mm8L58TI" />
        {/* Google Analytics (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-G6DWGD9CL5"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-G6DWGD9CL5');
            `,
          }}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-surface text-on-surface antialiased selection:bg-primary selection:text-on-primary">
        {/* Starfield Background */}
        <Starfield />

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="relative z-10">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
