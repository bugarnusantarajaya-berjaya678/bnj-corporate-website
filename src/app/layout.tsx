import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://bugarnusantarajaya.com";
const siteName = "CV Bugar Nusantara Jaya";
const siteDescription =
  "CV Bugar Nusantara Jaya adalah holding company yang membangun dan mengembangkan ekosistem bisnis di sektor Fitness, Wellness, Sport, dan Education di Indonesia.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteName,
  description: siteDescription,
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: siteUrl,
    siteName,
    images: [
      {
        url: "/logo-bnj.png",
        width: 786,
        height: 240,
        alt: "Logo CV Bugar Nusantara Jaya",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: ["/logo-bnj.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={inter.className}>
      <body className="min-h-screen bg-white antialiased">{children}</body>
    </html>
  );
}
