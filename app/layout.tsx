import "./globals.css";

import type { Metadata } from "next";
import { headers } from "next/headers";
import localFont from "next/font/local";
import Header from "@/components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Flirtpool",
    default: "Flirtpool",
  },
  description: "Flirtpool",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") || "";
  const isAndroid = /andorid/i.test(userAgent);

  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header isAndroid={isAndroid} />
        <main className="flex-1 pt-16">{children}</main>
      </body>
    </html>
  );
}
