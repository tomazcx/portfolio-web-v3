import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { htmlLang, isLocale, localeHref, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { siteUrl } from "@/lib/site";
import { profile, role } from "@/data/profile";
import { Providers } from "../providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GridBackdrop, SkipLink } from "@/components/layout/primitives";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${profile.name} — ${role.en}`,
};

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata(
  props: LayoutProps<"/[lang]">,
): Promise<Metadata> {
  const { lang } = await props.params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: dict.meta.title,
      template: `%s · ${profile.name}`,
    },
    description: dict.meta.description,
    applicationName: profile.name,
    authors: [{ name: profile.name, url: profile.github }],
    creator: profile.name,
    alternates: {
      canonical: localeHref(lang),
      languages: {
        en: "/",
        "pt-BR": "/pt-br",
        "x-default": "/",
      },
    },
    openGraph: {
      type: "profile",
      title: dict.meta.title,
      description: dict.meta.description,
      url: localeHref(lang),
      siteName: profile.name,
      locale: lang === "pt-br" ? "pt_BR" : "en_US",
      alternateLocale: lang === "pt-br" ? "en_US" : "pt_BR",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: [ogImage],
    },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0f" },
    { media: "(prefers-color-scheme: light)", color: "#faf7f2" },
  ],
};

export default async function RootLayout(props: LayoutProps<"/[lang]">) {
  const { lang } = await props.params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);

  const navItems = [
    { id: "about", label: dict.nav.about },
    { id: "experience", label: dict.nav.experience },
    { id: "skills", label: dict.nav.skills },
    { id: "education", label: dict.nav.education },
    { id: "contact", label: dict.nav.contact },
  ];

  return (
    <html
      lang={htmlLang[lang]}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-bg font-sans text-fg">
        <Providers>
          <SkipLink label={dict.a11y.skipToContent} />
          <GridBackdrop />
          <Header
            locale={lang}
            items={navItems}
            labels={{
              menu: dict.nav.menu,
              close: dict.nav.close,
              themeLight: dict.a11y.themeLight,
              themeDark: dict.a11y.themeDark,
            }}
          />
          <main id="main" className="flex-1">
            {props.children}
          </main>
          <Footer dict={dict} />
        </Providers>
      </body>
    </html>
  );
}
