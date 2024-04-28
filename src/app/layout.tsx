import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "",
    template: "%s ¦ Codeevaluation",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="backgroundColor: lightblue">Header</header>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}
