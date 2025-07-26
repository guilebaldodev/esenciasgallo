import type { Metadata } from "next";
import "./globals.css";
import {  playfar_display } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Esencias Gallo",
  description: "Catálogo en línea de perfumes y esencias aromáticas.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfar_display.className}`}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}