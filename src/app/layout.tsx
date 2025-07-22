import type { Metadata } from "next";
import {  DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',  
  display: 'swap',
});


export const metadata: Metadata = {
  title: "LumynXR",
  description:
    "Step into the future with LumynXR, the revolutionary mixed reality headset that seamlessly blends the digital and physical worlds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://lumynxr-cdn.azureedge.net" />

        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body
        className={`${dmSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
