import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LumynXR",
  description:
    "LumynXR is a high-performance mixed reality headset designed for the future of spatial computing, with enterprise-ready features for cross-industry innovation.",
  metadataBase: new URL("https://www.lumynxr.com"),
  openGraph: {
    title: "LumynXR",
    description:
      "LumynXR is a high-performance mixed reality headset designed for the future of spatial computing, with enterprise-ready features for cross-industry innovation.",
    url: "https://www.lumynxr.com",
    siteName: "LumynXR",
    images: [
      {
        url: "https://lumynxr-cdn.azureedge.net/images/lumynxr_og.png",
        width: 1200,
        height: 630,
        alt: "LumynXR Headset",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LumynXR",
    description:
      "LumynXR is a high-performance mixed reality headset designed for the future of spatial computing, with enterprise-ready features for cross-industry innovation.",
    images: ["https://lumynxr-cdn.azureedge.net/images/lumynxr_og.png"],
  },
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

        {/* Optional extra meta tags for safety */}
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${dmSans.className} antialiased`}>{children}</body>
    </html>
  );
}
