import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cornerstone | Global Logistics Control Center",
  description: "Premium cross-border logistics platform. Your shipment. Across borders. Always in sight.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable} antialiased h-full`}>
      <body className="min-h-full bg-background text-foreground selection:bg-primary selection:text-primary-foreground font-sans flex flex-col">
        {children}
      </body>
    </html>
  );
}
