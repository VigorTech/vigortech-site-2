import "./globals.css";
import type { Metadata } from "next";
import { Lato, Poppins } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-lato",
});
const poppinsBold = Poppins({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-poppins-bold",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${poppins.variable} ${lato.variable} ${poppinsBold.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
