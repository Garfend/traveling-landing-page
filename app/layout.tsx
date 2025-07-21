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
    title: "Wanderlust Chronicles - Discover the World One Page at a Time",
    description: "A breathtaking travel memoir that guides your wanderlust with real stories, secrets, and soul from 25 countries worldwide.",
    keywords: "travel book, travel memoir, wanderlust, travel guide, adventure stories, local secrets, travel tips",
    authors: [{name: "Sarah Mitchell"}],
    openGraph: {
        title: "Wanderlust Chronicles - Discover the World One Page at a Time",
        description: "A breathtaking travel memoir that guides your wanderlust with real stories, secrets, and soul from 25 countries worldwide.",
        type: "website",
        locale: "en_US",
    },
    icons: {
        icon: "/travel-icon.svg",
        shortcut: "/travel-icon.svg",
        apple: "/travel-icon.svg",
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
