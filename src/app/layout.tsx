import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "AQUATEC",
  description: "Desentupidora Aquatec. Rápido, sem quebrar nada",
  icons: '/logo.png'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
