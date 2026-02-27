// app/layout.js
import { Playfair_Display, Montserrat, JetBrains_Mono , Space_Grotesk} from 'next/font/google';
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

const BASE_URL = 'https://digitalfootprint.gr';

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Digital Footprint - Web Development & Design Studio | Athens, Greece',
    template: '%s | Digital Footprint',
  },
  description:
    'Premium web development & design studio based in Athens, Greece. We build fast, modern websites and web applications that grow your business.',
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: 'Digital Footprint - Web Development & Design Studio | Athens, Greece',
    description:
      'Premium web development & design studio based in Athens, Greece. We build fast, modern websites and web applications that grow your business.',
    url: BASE_URL,
    siteName: 'Digital Footprint',
    images: [
      {
        url: '/images/ogpicture.png',
        width: 1200,
        height: 630,
        alt: 'Digital Footprint - Web Development & Design Studio',
      },
    ],
    locale: 'el_GR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Footprint - Web Development & Design Studio | Athens, Greece',
    description:
      'Premium web development & design studio based in Athens, Greece.',
    images: ['/images/ogpicture.png'],
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
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
  '@type': ['Organization', 'LocalBusiness'],
  name: 'Digital Footprint',
  url: 'https://digitalfootprint.gr',
  logo: 'https://digitalfootprint.gr/icon.png',
  description:
    'Premium web development & design studio based in Athens, Greece.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Athens',
    addressCountry: 'GR',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    url: 'https://digitalfootprint.gr/contact',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="el"
      className={`${playfair.variable} ${montserrat.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground font-body antialiased">
        <script
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
