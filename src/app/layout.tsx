import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "Elliot Architect | Creative Engineering Portfolio",
  description:
    "A cinematic portfolio blending backend systems, security, philosophy, and interactive web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <div className="background-grid" />
        <div className="ambient ambient-one" />
        <div className="ambient ambient-two" />
        <header className="site-header">
          <Link href="/" className="brand">
            Elliot<span className="brand-accent">.sys</span>
          </Link>
          <nav className="site-nav">
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/roadmap">Roadmap</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
