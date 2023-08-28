import "./globals.css";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";

const worksans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZooTools Challenge",
  description: "A simple web app built for ZooTools application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={worksans.className}>{children}</body>
    </html>
  );
}
