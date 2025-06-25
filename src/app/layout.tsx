import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/NavBar";

export const metadata: Metadata = {
  title: "Mishita",
  description: "This is my portfolio ",
};
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={inter.className}>
      <Navbar/>
      {children}
      {/* <Navigation /> */}
      </body>
  </html>
  );
}
