import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { generateMeta } from "@/page/model/model";

/* Connect the fonts start*/
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const citynova = localFont({
  src: "../shared/fonts/a_citynova_bold.ttf",
  display: "block",
  variable: "--font-citynova",
});
/* Connect the fonts end*/

export async function generateMetadata() {
  const data = await generateMeta();
  return data;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${citynova.variable}`}>
      <body>{children}</body>
    </html>
  );
}
