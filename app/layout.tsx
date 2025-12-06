import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Provider } from "@/components/ui/provider";
import Navigation from "@/components/Naviagation";
import Footer from "@/components/common/Footer";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import WhatsApp from "@/components/common/WhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kai Insurance Agency | Your Trusted Insurance Partner in Kenya",
  description:
    "Kai Insurance Agency is dedicated to providing accessible and reliable insurance solutions for individuals and businesses in Kenya. Our mission is to simplify the insurance process and ensure everyone has access to the coverage they need.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Provider>
          <Navigation />
          {children}
          <WhatsApp />
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
