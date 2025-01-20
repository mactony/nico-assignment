import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Nick's Tutoring Hub - Expert Tutor Services & Academic Writing Support",
  description:
    "TutorHub offers the best platform for tutor services, online classes, projects, dissertations, and other related writing services. Get expert academic support today!",
  keywords:
    "tutor services, online classes, projects, dissertation, writing services, academic support",
  openGraph: {
    title:
      "Nicks Assignments - Expert Tutor Services & Academic Writing Support",
    description:
      "Find top-quality tutor services, online classes, project help, dissertation support, and writing assistance on TutorHub. Boost your academic success!",
    images: [
      {
        url: "https://nico-assignments.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nick's Tutoring Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicks Assignments - Premier Academic Support Services",
    description:
      "Discover expert tutor services, online classes, project assistance, dissertation help, and writing support. Elevate your academic journey with TutorHub!",
    images: ["https://nico-assignments.com/twitter-image.jpg"],
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
        {children}
      </body>
    </html>
  );
}
