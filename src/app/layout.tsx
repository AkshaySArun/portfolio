import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akshay S | AI/ML Engineer & Full-Stack Developer",
  description:
    "Portfolio of Akshay S — AI/ML Engineer & Full-Stack Developer building intelligent, practical software by combining AI, machine learning and modern software engineering.",
  keywords: [
    "Akshay S",
    "AI Engineering",
    "Machine Learning",
    "Full-Stack Developer",
    "Python",
    "Next.js",
    "React",
    "LocalPulse",
    "Software Engineering"
  ],
  authors: [{ name: "Akshay S" }],
  creator: "Akshay S",
  openGraph: {
    title: "Akshay S | AI/ML Engineer & Full-Stack Developer",
    description: "I build intelligent, practical software by combining AI, machine learning and modern software engineering.",
    url: "https://akshaysarun.dev",
    siteName: "AKSHAY S // AI ENGINEERING LAB",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshay S | AI/ML Engineer & Full-Stack Developer",
    description: "I build intelligent, practical software by combining AI, machine learning and modern software engineering.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth dark`}
    >
      <body className="font-sans antialiased bg-[#050508] text-[#f0f0f5]">
        {children}
      </body>
    </html>
  );
}
