import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LumynXR – Immersive XR Experiences",
  description:
    "Step into the future with LumynXR, the revolutionary mixed reality headset that seamlessly blends the digital and physical worlds.",
  metadataBase: new URL("https://www.lumynxr.com"),
  openGraph: {
    title: "LumynXR – Immersive XR Experiences",
    description:
      "Experience cutting-edge mixed reality with LumynXR’s powerful headset, blending digital and physical worlds.",
    url: "https://www.lumynxr.com",
    siteName: "LumynXR",
    images: [
      {
        url: "https://lumynxr-cdn.azureedge.net/images/images/OG.png",
        width: 1200,
        height: 630,
        alt: "LumynXR Headset",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LumynXR – Immersive XR Experiences",
    description:
      "Experience cutting-edge mixed reality with LumynXR’s powerful headset, blending digital and physical worlds.",
    images: ["https://lumynxr-cdn.azureedge.net/images/images/OG.png"],
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
