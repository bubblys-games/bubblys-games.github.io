import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BackgroundContainer from '@/components/Background';
import FooterContainer from '@/components/Footer';
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bubbly's Symphony: Guardians of the Depths",
  description: "Embark on an underwater adventure with Bubbly and join a global community committed to protecting our oceans.",
  robots: "index, nofollow",
  openGraph: {
    title: "Bubbly's Symphony: Guardians of the Depths",
    description: "Embark on an underwater adventure with Bubbly and join a global community committed to protecting our oceans.",
    url: "https://bubblys.games",
    siteName: "Bubbly's Symphony",
    images: [
      {
        url: "/og-image.png",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="w-full min-h-full">
      <body className={`${inter.className} flex items-center justify-center m-0 p-0 w-full min-h-full`}>
        <div className="max-w-screen-xl h-screen mx-auto p-0 text-center">
          <BackgroundContainer />
          {children}
          <FooterContainer />
        </div>
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-16527790383" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16527790383');
          `}
        </Script>
      </body>
    </html>
  );
}
