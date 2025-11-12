import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Agentica2026 - The Premier Conference on Agentic AI",
  description: "Join leaders, researchers, and innovators at Agentica2026, the premier conference dedicated to agentic AI and autonomous systems. Summer 2026 in London.",
  keywords: "agentic AI, autonomous AI, artificial intelligence, AI conference, machine learning, London, AI agents, autonomous systems, AI research, technology conference",
  authors: [{ name: "Agentica2026 Team" }],
  openGraph: {
    title: "Agentica2026 - The Premier Conference on Agentic AI",
    description: "Join leaders, researchers, and innovators shaping the future of autonomous AI systems. Summer 2026 in London.",
    url: "https://agentica2026.com",
    siteName: "Agentica2026",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentica2026 - The Premier Conference on Agentic AI",
    description: "Join leaders, researchers, and innovators shaping the future of autonomous AI systems. Summer 2026 in London.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
