import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import InstallPrompt from './../components/InstallPrompt';
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Barbie Appxd",
  description: "Creacion de la App de barbie",
  manifest: "/manifest.json",
  icons: {
    apple:"/icon.png"
  },
  themeColor:"#000000"

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        {children}
        <InstallPrompt />
        </body>
    </html>
  );
}
