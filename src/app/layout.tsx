import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CV Bugar Nusantara Jaya",
  description:
    "Website resmi CV Bugar Nusantara Jaya sedang dalam pembangunan. Segera hadir dengan informasi lengkap seputar perusahaan dan portofolio bisnis kami di bidang Fitness, Wellness, Sport, dan Education.",
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
