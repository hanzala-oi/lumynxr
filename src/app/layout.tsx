import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',    // Optional: for Tailwind use
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
      <body
        className={`${dmSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
