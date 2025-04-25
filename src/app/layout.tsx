import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/langContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lebizli Turkmen",
  description: "Рекламно - производственная компания в Туркменистане",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="lang">
      <head>
        <title>Lebizli Turkmen — рекламно-производственная компания</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Lebizli Turkmen" />
        <meta
          name="description"
          content="Lebizli Turkmen — рекламно-производственная компания в Туркменистане. Мы предлагаем полный цикл производства рекламной продукции: от наружной рекламы до POS-материалов."
        />
        <meta
          name="keywords"
          content="рекламно-производственная компания, наружная реклама, изготовление вывесок, POS-материалы, производство рекламы Туркменистан, брендированная продукция"
        />
        <link rel="canonical" href="https://lebizliturkmen.com" />

        {/* <!-- Favicon --> */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* <!-- OpenGraph --> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Lebizli Turkmen — рекламно-производственная компания"
        />
        <meta
          property="og:description"
          content="Lebizli Turkmen предлагает производство наружной рекламы и брендированной продукции. Надёжность, качество, сроки."
        />
        <meta property="og:image" content="/banners/logo-letters.svg" />
        <meta property="og:url" content="https://lebizliturkmen.com" />

        {/* <!-- Twitter Card --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Lebizli Turkmen — рекламно-производственная компания"
        />
        <meta
          name="twitter:description"
          content="Lebizli Turkmen предлагает полный спектр рекламно-производственных услуг в Туркменистане."
        />
        <meta name="twitter:image" content="/logo-letters.svg" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-R21XWD21WL"
        ></script>
        <script>
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-R21XWD21WL');
    `}
        </script>
        <meta
          name="google-site-verification"
          content="fehIcvCSrpAyzsP6Pmg-C5Kim9juRPYB7XroR8ZzoCQ"
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider> {children}</LanguageProvider>
      </body>
    </html>
  );
}
