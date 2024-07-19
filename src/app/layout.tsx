import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Dashboard } from "@/components/global";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Components",
  description: "Components for react",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Dashboard>{children}</Dashboard>
      </body>
    </html>
  );
}
