import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeScript } from "@/components/ThemeScript";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Yuvraj Bhavsar — Software Engineer Portfolio",
  description:
    "Software Engineer portfolio of Yuvraj Bhavsar. Full-stack development, enterprise APIs, cloud data systems, and production-ready web applications.",
  keywords: [
    "Yuvraj Bhavsar",
    "Software Engineer",
    "Full-Stack Developer",
    "Spring Boot",
    "Next.js",
    "AWS",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body className={`${plusJakarta.variable} antialiased`}>
        <ThemeScript />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
