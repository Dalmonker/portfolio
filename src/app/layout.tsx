/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import "@/styles/globals.scss";
import { AnimationScroll } from "@/components/logics/AnimationScroll";
import NextTopLoader from "nextjs-toploader";
import { LanguageProvider } from "@/context/LanguageContext";

import { Inter, Red_Hat_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-red-hat-display",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
    other: [
      { rel: "icon", url: "/favicon.ico", sizes: "32x32", type: "image/png" },
      { rel: "icon", url: "/favicon.ico", sizes: "16x16", type: "image/png" },
    ],
  },
  openGraph: {
    images: ["/head.png"],
    title: "Portfolio",
    description: "",
    type: "website",
    url: "https://gavrilovichalina.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${inter.variable} ${redHatDisplay.variable} font-red-hat-display overflow-x-hidden`}
      lang="en"
    >
      <body className="relative bg-white">
        <LanguageProvider>
          <NextTopLoader color="#2E4EEC" showSpinner={false} />
          {children}
          <AnimationScroll />
        </LanguageProvider>
      </body>
    </html>
  );
}
