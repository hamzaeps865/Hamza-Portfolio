import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hamza Niaz | Next.js Full Stack Developer",
  description: "Portfolio of Hamza Niaz, a Next.js Full Stack Developer specializing in React, TypeScript, Tailwind CSS, and scalable web applications.",
  keywords: ["Hamza Niaz", "Full Stack Developer", "Next.js Developer", "React Developer", "TypeScript", "Tailwind CSS", "Web Development", "Software Engineer"],
  authors: [{ name: "Hamza Niaz", url: "https://linkedin.com/in/hamzaniaz865" }],
  creator: "Hamza Niaz",
  openGraph: {
    title: "Hamza Niaz | Next.js Full Stack Developer",
    description: "Portfolio of Hamza Niaz, a Next.js Full Stack Developer specializing in scalable web applications.",
    url: "https://hamzaniaz.com",
    siteName: "Hamza Niaz Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamza Niaz | Next.js Full Stack Developer",
    description: "Portfolio of Hamza Niaz, a Next.js Full Stack Developer specializing in scalable web applications.",
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
    <html lang="en" suppressHydrationWarning className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-background text-foreground relative">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
