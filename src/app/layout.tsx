"use client";
import ResponsiveAppBar from "../components/appbar/navbar";
import MUIThemeProvider from "../../theme/themeProvider";
import "./globals.css";
import { Inter } from "next/font/google";
import { Footer } from "../components/home";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MUIThemeProvider>
      <head>
        <link rel="icon" href="/icon.ico" />
      </head>
      <title>Saajan's Website</title>
      <html lang="en">
        <body className={inter.className}>
          <ResponsiveAppBar />
          {children}
          <Footer />
        </body>
      </html>
    </MUIThemeProvider>
  );
}
