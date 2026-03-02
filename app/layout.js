// app/layout.js
import { Playfair_Display, Montserrat, JetBrains_Mono , Space_Grotesk} from 'next/font/google';
import { headers } from 'next/headers';
import './globals.css';
import { ThemeProvider } from '@/components/ui/theme-provider';

// ← Άλλαξε αυτό
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin', 'greek'],
  weight: ['600', '700', '800', '900'],  // ← Μόνο bold weights
  variable: '--font-subheading',     // ← h2, h3
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

const BASE_URL = 'https://www.digitalfootprint.gr';

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Κατασκευή Ιστοσελίδων Αθήνα | Digital Footprint — Web Development Studio',
    template: '%s | Digital Footprint',
  },
  description:
    'Premium web development studio στην Αθήνα. Κατασκευή ιστοσελίδων, e-shop & web apps που αποφέρουν αποτελέσματα. 50+ projects, 4 χρόνια εμπειρίας.',
  keywords: 'κατασκευή ιστοσελίδων, κατασκευή ιστοσελίδων αθήνα, αγορά ιστοσελίδας, web development αθήνα, ιστοσελίδες ελλάδα, web design αθήνα, κατασκευή e-shop, σχεδιασμός ιστοσελίδων',
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: 'Κατασκευή Ιστοσελίδων Αθήνα | Digital Footprint — Web Development Studio',
    description:
      'Premium web development studio στην Αθήνα. Κατασκευή ιστοσελίδων, e-shop & web apps που αποφέρουν αποτελέσματα. 50+ projects, 4 χρόνια εμπειρίας.',
    url: BASE_URL,
    siteName: 'Digital Footprint',
    images: [
      {
        url: 'https://www.digitalfootprint.gr/images/ogpicture.png',
        width: 1200,
        height: 630,
        alt: 'Digital Footprint - Κατασκευή Ιστοσελίδων Αθήνα',
      },
    ],
    locale: 'el_GR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Κατασκευή Ιστοσελίδων Αθήνα | Digital Footprint',
    description:
      'Premium web development studio στην Αθήνα. Κατασκευή ιστοσελίδων, e-shop & web apps. 50+ projects.',
    images: ['https://www.digitalfootprint.gr/images/ogpicture.png'],
  },
  icons: {
    icon: [
      { url: 'images/icon.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: 'images/apple-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
  name: 'Digital Footprint',
  url: 'https://www.digitalfootprint.gr',
  logo: 'https://www.digitalfootprint.gr/icon.png',
  description: 'Premium web development & design studio βασισμένο στην Αθήνα, Ελλάδα.',
  telephone: '+30-694-792-0875',
  email: 'info@digitalfootprint.gr',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Athens',
    addressRegion: 'Attica',
    addressCountry: 'GR',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+30-694-792-0875',
    email: 'info@digitalfootprint.gr',
    contactType: 'customer service',
    availableLanguage: ['Greek', 'English'],
    url: 'https://www.digitalfootprint.gr/contact',
  },
  priceRange: '€€',
  areaServed: { '@type': 'Country', name: 'Greece' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Development Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Κατασκευή Ιστοσελίδων' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-Commerce Solutions' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'UI/UX Design' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Brand Identity' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital Marketing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ongoing Support' } },
    ],
  },
};

export default async function RootLayout({ children }) {
  const nonce = (await headers()).get('x-nonce');

  return (
    <html
      lang="el"
      className={`${playfair.variable} ${montserrat.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground font-body antialiased">
        <script
          nonce={nonce}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
