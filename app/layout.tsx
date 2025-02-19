import type React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/general/navbar";
import Footer from "@/components/general/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nicks-tutoring-hub.com"),
  title: {
    default: "Nick's Tutoring Hub - Professional Academic Writing Services",
    template: "%s | Nick's Tutoring Hub",
  },
  description:
    "Expert academic writing services including dissertations, resumes, editing, and proofreading. Quality academic support for students worldwide.",
  keywords: [
    "academic writing",
    "dissertation help",
    "resume writing",
    "editing services",
    "proofreading",
    "tutoring",
    "student support",
    "thesis writing",
    "essay help",
  ],
  authors: [{ name: "Nick", url: "https://nicks-tutoring-hub.com/about" }],
  creator: "Nick",
  publisher: "Nick's Tutoring Hub",
  alternates: {
    canonical: "https://nicks-tutoring-hub.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nicks-tutoring-hub.com",
    title: "Nick's Tutoring Hub - Professional Academic Writing Services",
    description:
      "Expert academic writing services including dissertations, resumes, editing, and proofreading. Quality academic support for students worldwide.",
    siteName: "Nick's Tutoring Hub",
    images: [
      {
        url: "https://nicks-tutoring-hub.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nick's Tutoring Hub - Professional Academic Writing Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nick's Tutoring Hub - Professional Academic Writing Services",
    description:
      "Expert academic writing services including dissertations, resumes, editing, and proofreading. Quality academic support for students worldwide.",
    creator: "@nickstutoringhub",
    images: ["https://nicks-tutoring-hub.com/twitter-image.jpg"],
  },
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
  viewport: "width=device-width, initial-scale=1",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
