import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyCTA from "@/components/StickyCTA";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shot Visuals | Premium Reel Shoots & Cinematic Editing Agency",
  description: "Professional reel shoots in Hyderabad and premium post-production editing services across India. We edit high-retention viral content for creators and brands.",
  keywords: ["video editing agency", "reel shoot hyderabad", "instagram reels editor", "shorts editor india", "cinematic video editing"],
  authors: [{ name: "Shot Visuals Team" }],
  openGraph: {
    title: "Shot Visuals | Premium Reel Shoots & Cinematic Editing Agency",
    description: "Professional reel shoots in Hyderabad and premium post-production editing services across India.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      style={{ colorScheme: "dark" }}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            {/* Global Navigation header */}
            <Navbar />
            
            {/* Page content view */}
            <main className="flex-1">
              {children}
            </main>

            {/* Global page footer */}
            <Footer />
            
            {/* Floating actions */}
            <WhatsAppButton />
            <StickyCTA />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}


