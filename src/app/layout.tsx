import type { Metadata } from "next";
import MainNavBar from "@/components/main-nav-bar";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lindenhurst Launchpad",
  description: "Lindenhurst Launchpad provides students in the community with an alumni network who are passionate about helping them succeed in high school and beyond.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainNavBar />
        {children}
      </body>
    </html>
  );
}
