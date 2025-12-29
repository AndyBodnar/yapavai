import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header, Footer, StickyMobileCTA } from "@/components/layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yavapaiwastesolutions.com"),
  title: {
    default: "Yavapai Waste Solutions | Dumpster Rental Quad Cities AZ",
    template: "%s | Yavapai Waste Solutions",
  },
  description:
    "Reliable dumpster rental and waste disposal services in the Quad Cities, AZ. Roll-off dumpsters, commercial waste, and construction cleanup. Call (928) 713-2710.",
  keywords: [
    "dumpster rental quad cities",
    "waste disposal quad cities az",
    "roll-off dumpster",
    "construction cleanup",
    "quad cities dumpster",
  ],
  authors: [{ name: "Yavapai Waste Solutions" }],
  creator: "Yavapai Waste Solutions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yavapaiwastesolutions.com",
    siteName: "Yavapai Waste Solutions",
    title: "Yavapai Waste Solutions | Dumpster Rental Quad Cities AZ",
    description:
      "Reliable dumpster rental and waste disposal services in the Quad Cities, AZ. Call (928) 713-2710.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yavapai Waste Solutions | Dumpster Rental Quad Cities AZ",
    description:
      "Reliable dumpster rental and waste disposal services in the Quad Cities, AZ.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen pt-16 pb-20 md:pb-0">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
