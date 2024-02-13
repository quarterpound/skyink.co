import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import { getGenericMetadata } from "@/utils/metadata";

const inter = Inter({ subsets: ["latin"] });
const inter_tight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-tight",
});

export const metadata: Metadata = {
  title: "Skyink",
  description:
    "Create unforgettable gifts with SkyInk's personalized sky maps. Capture special moments with custom star maps designed to reflect your unique story.",
  metadataBase: getGenericMetadata(),
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo-black.png",
        href: "/logo-black.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-whte.png",
        href: "/logo-white.png",
      },
    ],
  },
  alternates: {
    canonical: getGenericMetadata(),
  },
  openGraph: {
    images: [
      {
        url: "/meta.png",
      },
    ],
  },
  twitter: {
    images: [
      {
        url: "/meta.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${inter_tight.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
