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
  ],
  authors: [{ name: "Nick" }],
  creator: "Nick",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nicks-tutoring-hub.com",
    title: "Nick's Tutoring Hub",
    description: "Professional Academic Writing Services",
    siteName: "Nick's Tutoring Hub",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nick's Tutoring Hub",
    description: "Professional Academic Writing Services",
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
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
        </ThemeProvider> */}
        <Navbar />
        <main className="">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
