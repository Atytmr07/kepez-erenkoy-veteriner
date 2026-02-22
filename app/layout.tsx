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

import { siteConfig } from "@/data/config";

export const metadata: Metadata = {
  title: `Antalya Veteriner Kliniği - ${siteConfig.name}`,
  description: siteConfig.description,
  openGraph: {
    title: `Antalya Veteriner Kliniği - ${siteConfig.name}`,
    description: siteConfig.description,
    images: ["https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=1470&auto=format&fit=crop"],
    url: "https://kepezerenkoyveteriner.com",
    siteName: siteConfig.name,
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Antalya Veteriner Kliniği - ${siteConfig.name}`,
    description: siteConfig.description,
    images: ["https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?q=80&w=1470&auto=format&fit=crop"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
