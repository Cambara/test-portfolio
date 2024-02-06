import type { Metadata } from "next";
import React from "react";
import Analytics from './components/Analytics';
import "./globals.css";

export const metadata: Metadata = {
  title: "Ana Rocha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <Analytics />
      <body>
        {children}
      </body>
    </html>
  );
}
