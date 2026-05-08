import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://estetica-calme.vercel.app";

export const metadata: Metadata = {
  title: "Estética Calme - Centro de Estética en Parque Chacabuco y Parque Centenario, CABA",
  description:
    "Centro de estética avanzada en CABA: HIFU facial, Liposonix, Vela Slim, depilación definitiva, microblading, lifting de pestañas y cursos profesionales. Karina González.",
  keywords: [
    "estética",
    "estética avanzada",
    "HIFU facial",
    "Liposonix",
    "depilación definitiva",
    "microblading",
    "lifting de pestañas",
    "Vela Slim",
    "drenaje linfático",
    "cursos de estética",
    "Parque Chacabuco",
    "Parque Centenario",
    "Caballito",
    "CABA",
    "Buenos Aires",
    "Karina González",
  ],
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
    siteName: "Estética Calme",
    title: "Estética Calme - Centro de Estética en Parque Chacabuco y Parque Centenario, CABA",
    description:
      "Tratamientos de precisión para realzar tu belleza natural: HIFU, Liposonix, depilación definitiva, microblading y cursos profesionales. Karina González, CABA.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Estética Calme - Centro de Estética en CABA",
    description:
      "Tratamientos de precisión para realzar tu belleza natural: HIFU, Liposonix, depilación definitiva, microblading y cursos profesionales.",
  },
  metadataBase: new URL(SITE_URL),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Estética Calme",
  description:
    "Centro de estética avanzada en CABA: HIFU facial, Liposonix, Vela Slim, depilación definitiva, microblading, lifting de pestañas y cursos profesionales.",
  url: SITE_URL,
  telephone: "+54-9-11-5765-9672",
  email: "",
  address: [
    {
      "@type": "PostalAddress",
      addressLocality: "Parque Chacabuco",
      addressRegion: "CABA",
      addressCountry: "AR",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Parque Centenario",
      addressRegion: "CABA",
      addressCountry: "AR",
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
  image: `${SITE_URL}/karina.png`,
  priceRange: "$$",
  currenciesAccepted: "ARS",
  paymentAccepted: "Cash, Credit Card",
  areaServed: "Ciudad Autónoma de Buenos Aires",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR" className={`${playfair.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
