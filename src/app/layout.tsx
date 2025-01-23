import type { Metadata } from "next";
import "./globals.css";
import { ABCFavorit } from "./_components/Fonts";

export const metadata: Metadata = {
  title: "Taehoon's Portfolio",
  description: "Creative Developer",
  openGraph: {
    title: "Taehoon's Portfolio",
    description: "Creative Developer",
    url: "https://ethn1ee.github.io",
    siteName: "Taehoon's Portfolio",
    images: [
      {
        url: "https://ethn1ee.github.io/taehoon.png",
        width: 800,
        height: 800,
        alt: "Taehoon's Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Creative Developer" />
        <meta property="og:title" content="Taehoon's Portfolio" />
        <meta property="og:description" content="Creative Developer" />
        <meta property="og:url" content="https://ethn1ee.github.io" />
        <meta
          property="og:image"
          content="https://ethn1ee.github.io/taehoon.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@your_twitter_handle" />
        <meta name="twitter:title" content="Taehoon's Portfolio" />
        <meta name="twitter:description" content="Creative Developer" />
        <meta
          name="twitter:image"
          content="https://ethn1ee.github.io/taehoon.png"
        />
      </head>
      <body className={`${ABCFavorit.normal.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
