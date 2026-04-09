// app/layout.js
import { Playfair_Display, Montserrat, JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import { headers } from 'next/headers';
import Script from 'next/script';
import './globals.css';
import { ThemeProvider } from '@/components/ui/theme-provider';

// Fonts
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin', 'greek'],
  weight: ['600', '700', '800', '900'],
  variable: '--font-subheading',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-logo-original',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

// Base URL
const BASE_URL = 'https://www.digitalfootprint.gr';

// ===========================================
// METADATA (SEO OPTIMIZED)
// ===========================================
export const metadata = {
  metadataBase: new URL(BASE_URL),
  
  title: {
    default: 'Κατασκευή Ιστοσελίδων & E-Shop Αθήνα | Digital Footprint - Από €499',
    template: '%s | Digital Footprint',
  },
  
  description:
    'Επαγγελματική κατασκευή ιστοσελίδων & e-shop στην Αθήνα. ✓ SEO optimized ✓ Mobile friendly ✓ 50+ projects ✓ Γρήγορη παράδοση σε 10-15 ημέρες. Ζητήστε δωρεάν προσφορά!',
  
  keywords: [
    'κατασκευή ιστοσελίδων',
    'κατασκευή ιστοσελίδων αθήνα',
    'κατασκευή e-shop',
    'κατασκευή eshop',
    'web development αθήνα',
    'web design greece',
    'κατασκευή ιστοσελίδας wordpress',
    'φθηνή ιστοσελίδα',
    'σχεδιασμός ιστοσελίδων',
    'αγορά ιστοσελίδας',
    'ιστοσελίδες ελλάδα',
  ].join(', '),
  
  authors: [{ name: 'Digital Footprint', url: BASE_URL }],
  creator: 'Digital Footprint',
  publisher: 'Digital Footprint',
  
  alternates: {
    canonical: BASE_URL,
  },
  
  openGraph: {
    title: 'Κατασκευή Ιστοσελίδων & E-Shop Αθήνα | Digital Footprint',
    description:
      'Επαγγελματική κατασκευή ιστοσελίδων & e-shop από €499. SEO optimized, mobile friendly, 50+ projects. Ζητήστε δωρεάν προσφορά!',
    url: BASE_URL,
    siteName: 'Digital Footprint',
    images: [
      {
        url: `${BASE_URL}/images/ogpicture.png`,
        width: 1200,
        height: 630,
        alt: 'Digital Footprint - Κατασκευή Ιστοσελίδων & E-Shop Αθήνα',
      },
    ],
    locale: 'el_GR',
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Κατασκευή Ιστοσελίδων & E-Shop | Digital Footprint',
    description:
      'Επαγγελματική κατασκευή ιστοσελίδων & e-shop από €499. 50+ projects, γρήγορη παράδοση.',
    images: [`${BASE_URL}/images/ogpicture.png`],
    creator: '@digitalfootprint',
  },
  
  icons: {
    icon: [
      { url: '/images/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/logo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/images/apple-logo.png',
    shortcut: '/images/logo.png',
  },
  
  manifest: '/manifest.json',
  
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // 🆕 VERIFICATION (Add your codes when you have them)
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE', // Replace after setting up Search Console
    // yandex: 'YOUR_YANDEX_CODE',
    // bing: 'YOUR_BING_CODE',
  },
  
  // 🆕 CATEGORY
  category: 'technology',
  
  // 🆕 OTHER
  other: {
    'geo.region': 'GR-I',
    'geo.placename': 'Athens',
    'geo.position': '37.9838;23.7275',
    'ICBM': '37.9838, 23.7275',
  },
};

// ===========================================
// SCHEMA.ORG STRUCTURED DATA (ENHANCED)
// ===========================================
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
  '@id': `${BASE_URL}/#organization`,
  
  name: 'Digital Footprint',
  alternateName: 'Digital Footprint Web Studio',
  legalName: 'Digital Footprint',
  
  url: BASE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/logo.png`,
    width: 512,
    height: 512,
  },
  image: `${BASE_URL}/images/ogpicture.png`,
  
  description:
    'Premium web development & design studio στην Αθήνα. Κατασκευή ιστοσελίδων, e-shop & web apps. 50+ projects, 4 χρόνια εμπειρίας.',
  
  slogan: 'Premium Web Development Studio',
  
  telephone: '+30-694-792-0875',
  email: 'info@digitalfootprint.gr',
  
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Αθήνα',
    addressLocality: 'Αθήνα',
    addressRegion: 'Αττική',
    postalCode: '10000',
    addressCountry: 'GR',
  },
  
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 37.9838,
    longitude: 23.7275,
  },
  
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+30-694-792-0875',
      email: 'info@digitalfootprint.gr',
      contactType: 'customer service',
      availableLanguage: ['Greek', 'English'],
      areaServed: 'GR',
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    },
    {
      '@type': 'ContactPoint',
      telephone: '+30-694-792-0875',
      contactType: 'sales',
      availableLanguage: ['Greek', 'English'],
    },
  ],
  
  priceRange: '€€',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer',
  
  areaServed: [
    { '@type': 'City', name: 'Αθήνα' },
    { '@type': 'City', name: 'Θεσσαλονίκη' },
    { '@type': 'City', name: 'Πάτρα' },
    { '@type': 'City', name: 'Ηράκλειο' },
    { '@type': 'Country', name: 'Ελλάδα' },
  ],
  
  serviceArea: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 37.9838,
      longitude: 23.7275,
    },
    geoRadius: '500000',
  },
  
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Development Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Κατασκευή Ιστοσελίδων',
          description: 'Custom website development με modern technologies (React, Next.js, WordPress)',
          url: `${BASE_URL}/services`,
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '499',
          priceCurrency: 'EUR',
          minPrice: '499',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Κατασκευή E-Shop',
          description: 'E-commerce solutions με WooCommerce, Shopify ή custom platforms',
          url: `${BASE_URL}/services`,
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '999',
          priceCurrency: 'EUR',
          minPrice: '999',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'UI/UX Design',
          description: 'User interface & experience design για web & mobile',
          url: `${BASE_URL}/services`,
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'SEO Optimization',
          description: 'Search engine optimization & technical SEO',
          url: `${BASE_URL}/services`,
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Web Hosting & Support',
          description: 'Managed hosting, maintenance & ongoing support',
          url: `${BASE_URL}/services`,
        },
      },
    ],
  },
  
  // 🆕 SOCIAL MEDIA LINKS (Update with your actual URLs)
  sameAs: [
    'https://www.facebook.com/digitalfootprintgr',
    'https://www.instagram.com/digitalfootprintgr',
    'https://www.linkedin.com/company/digitalfootprintgr',
    // 'https://twitter.com/digitalfootprint',
    // 'https://www.youtube.com/@digitalfootprint',
  ],
  
  foundingDate: '2021',
  foundingLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Αθήνα',
      addressCountry: 'GR',
    },
  },
  
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    minValue: 1,
    maxValue: 10,
  },
  
  knowsAbout: [
    'Web Development',
    'Web Design',
    'E-Commerce',
    'UI/UX Design',
    'SEO',
    'Digital Marketing',
    'WordPress',
    'React',
    'Next.js',
    'Node.js',
    'JavaScript',
    'TypeScript',
  ],
  
  knowsLanguage: ['Greek', 'English'],
  
  // 🆕 AGGREGATE RATING (Add when you have reviews)
  // aggregateRating: {
  //   '@type': 'AggregateRating',
  //   ratingValue: '4.9',
  //   reviewCount: '25',
  //   bestRating: '5',
  //   worstRating: '1',
  // },
};

// ===========================================
// WEBSITE SCHEMA
// ===========================================
const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  url: BASE_URL,
  name: 'Digital Footprint',
  description: 'Premium Web Development Studio στην Αθήνα',
  publisher: {
    '@id': `${BASE_URL}/#organization`,
  },
  inLanguage: 'el-GR',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

// ===========================================
// ROOT LAYOUT COMPONENT
// ===========================================
export default async function RootLayout({ children }) {
  const nonce = (await headers()).get('x-nonce');

  return (
    <html
      lang="el"
      className={`${playfair.variable} ${montserrat.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* ============================================= */}
        {/* GOOGLE ANALYTICS — loaded via GoogleAnalytics  */}
        {/* component only after cookie consent            */}
        {/* ============================================= */}
        
        {/* ============================================= */}
        {/* PRECONNECT FOR PERFORMANCE */}
        {/* ============================================= */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        
        {/* ============================================= */}
        {/* DNS PREFETCH */}
        {/* ============================================= */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>

      <body className="bg-background text-foreground font-body antialiased">
        {/* ============================================= */}
        {/* STRUCTURED DATA (JSON-LD) */}
        {/* ============================================= */}
        <script
          nonce={nonce}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          nonce={nonce}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        
        {/* ============================================= */}
        {/* MAIN CONTENT */}
        {/* ============================================= */}
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}