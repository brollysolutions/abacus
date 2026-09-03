import { Inter, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { BUSINESS } from "@/lib/business";

/* The reference page loads these two families from Google Fonts.
   next/font self-hosts them instead — same faces, no third-party
   request — and exposes them to globals.css as CSS variables. */
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata = {
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
