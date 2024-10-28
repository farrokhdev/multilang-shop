import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../globals.css";

import path from "path";
import { Header } from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";
import { darkThemeBg, darkthemeText } from "@/styles/global";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { cookies } from "next/headers";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const inter = Inter({ subsets: ["latin"] });
const yekan = localFont({ src: "../../assets/fonts/Yekan/Yekan.woff" });
// const vazir = localFont({ src: "../assets/fonts/Vazir/Vazir.woff" });
// const iranSans = localFont({
//   src: "../assets/fonts/iranian-Sans/iranian-sans.woff",
// });

const shabnam = localFont({
  src: [
    {
      path: "../../assets/fonts/Shabnam/Shabnam-Bold-WOL.woff",
      weight: "600",
      style: "bold",
    },
    {
      path: "../../assets/fonts/Shabnam/Shabnam-Medium-WOL.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Shabnam/Shabnam-Light-WOL.woff",
      weight: "400",
      style: "light",
    },
    {
      path: "../../assets/fonts/Shabnam/Shabnam-Thin-WOL.woff",
      weight: "300",
      style: "thin",
    },
  ],
  variable: "--Shabnam",
});

export const metadata: Metadata = {
  title: "Lama Dev E-Commerce Application",
  description: "A complete e-commerce application with Next.js and Wix",
};

const rtlLocales = ["fa", "ar", "he"]; // Define your RTL locales here

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  // Check if the locale is RTL
  const isRTL = rtlLocales.includes(locale);

  return (
    <html lang={locale}>
      <body
        dir={isRTL ? "rtl" : "ltr"} // Set direction dynamically
        className={`${
          isRTL ? shabnam.variable : inter.className
        } ${darkThemeBg} ${darkthemeText}`}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
