import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DGO × FIFA 2026 | Marketing Activation Deck",
  description: "An idea-first approval deck for DGO’s FIFA PPV marketing engine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable} h-full antialiased dark snap-y snap-mandatory`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground overflow-x-hidden no-scrollbar">
        {children}
      </body>
    </html>
  );
}
