import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eco Discover Travel | Kashmir & Ladakh Travel Packages",
  description:
    "Discover Kashmir and Ladakh with Eco Discover Travel. Enjoy eco-friendly travel packages, personalized itineraries, and unforgettable experiences in nature's paradise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
