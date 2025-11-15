import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FloatingWhatsAppButton } from "./_components/floaitng-whatsapp-button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://oxygeni.com.br"),
  title: {
    default: "Oxygeni HUB",
    template: "%s | Oxygeni HUB",
  },
  description:
    "Ecossistema de inovação, tecnologia e aprendizagem aplicada da Oxygeni.",
  openGraph: {
    type: "website",
    url: "https://oxygeni.com.br",
    siteName: "Oxygeni HUB",
    title: "Oxygeni HUB",
    description:
      "Ambientes de inovação, laboratórios e experiências imersivas em tecnologia.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oxygeni HUB",
    description:
      "Ecossistema de inovação, tecnologia e aprendizagem aplicada da Oxygeni.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
