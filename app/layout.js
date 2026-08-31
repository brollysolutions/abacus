import { Inter, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { BUSINESS } from "@/lib/business";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-nunito",
});

export const metadata = {
  // Every relative URL in page metadata (canonical, og:url, og:image …)
  // is resolved against this. Set once in lib/business.js.
  metadataBase: new URL(BUSINESS.url),
  applicationName: BUSINESS.name,
  authors: [{ name: BUSINESS.name }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: BUSINESS.name,
    url: "/",
  },
};

export const viewport = {
  themeColor: "#16324F",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${nunito.variable}`}>
      <body>{children}</body>
    </html>
  );
}
