import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-text",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eatsmart : Faites les bons choix pour votre santé",
  description:
    "Scannez vos produits alimentaires en magasin pour évaluer leur qualité nutritionnelle, repérer les additifs et trouver de meilleures options.",
  icons: {
    icon: "/assets_v2/favicon.png",
    apple: "/assets_v2/icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2D5A27",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" dir="ltr" className={`${plusJakartaSans.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
