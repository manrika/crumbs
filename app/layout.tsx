import type { Metadata } from "next";
import { Truculenta } from "next/font/google";
import "./globals.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";

const truculenta = Truculenta({
  subsets: ["latin"],
  weight: ["900"],
  variable: "--font-truculenta",
});

export const metadata: Metadata = {
  title: "CRUMBS LDN",
  description: "New York Style Fudgy Cookies",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${truculenta.variable} h-full`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
