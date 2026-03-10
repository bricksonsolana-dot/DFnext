// app/(main)/page.js — Homepage (Server Component with Full SEO)

// ===========================================
// BASE URL
// ===========================================
const BASE_URL = 'https://www.digitalfootprint.gr';

// ===========================================
// METADATA (FULLY OPTIMIZED FOR SEO)
// ===========================================
export const metadata = {
  // ✅ TITLE - Main keyword + Brand + USP
  title: 'Κατασκευή Ιστοσελίδων & E-Shop Αθήνα | Digital Footprint - Από €500',
  
  // ✅ DESCRIPTION - Keywords + Benefits + CTA (under 160 chars)
  description:
    'Επαγγελματική κατασκευή ιστοσελίδων & e-shop στην Αθήνα. ✓ SEO optimized ✓ Mobile friendly ✓ 50+ projects ✓ Παράδοση σε 10-15 ημέρες. Δωρεάν προσφορά!',
  
  // ✅ KEYWORDS - Primary + Secondary + Long-tail
  keywords: [
    // Primary keywords
    'κατασκευή ιστοσελίδων',
    'κατασκευή ιστοσελίδων αθήνα',
    'κατασκευή e-shop',
    'κατασκευή eshop',
    
    // Secondary keywords
    'web development αθήνα',
    'web design greece',
    'σχεδιασμός ιστοσελίδων',
    'κατασκευή ιστοσελίδας',
    
    // Long-tail keywords
    'κατασκευή ιστοσελίδας wordpress',
    'φθηνή κατασκευή ιστοσελίδας',
    'επαγγελματική ιστοσελίδα',
    'αγορά ιστοσελίδας',
    'ιστοσελίδες για επιχειρήσεις',
    
    // Location-based
    'web designer αθήνα',
    'web agency αθήνα',
    'κατασκευή site αθήνα',
  ].join(', '),
  
  // ✅ AUTHORS
  authors: [{ name: 'Digital Footprint', url: BASE_URL }],
  creator: 'Digital Footprint',
  publisher: 'Digital Footprint',
  
  // ✅ CANONICAL URL (Prevents duplicate content)
  alternates: {
    canonical: BASE_URL,
    languages: {
      'el-GR': BASE_URL,
      // 'en': `${BASE_URL}/en`, // Add if you have English version
    },
  },
  
  // ✅ OPEN GRAPH (Facebook, LinkedIn, etc.)
  openGraph: {
    title: 'Κατασκευή Ιστοσελίδων & E-Shop Αθήνα | Digital Footprint',
    description:
      'Επαγγελματική κατασκευή ιστοσελίδων & e-shop από €500. ✓ SEO optimized ✓ Mobile friendly ✓ 10+ projects. Ζητήστε δωρεάν προσφορά!',
    url: BASE_URL,
    siteName: 'Digital Footprint',
    locale: 'el_GR',
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/images/ogpicture.png`,
        secureUrl: `${BASE_URL}/images/ogpicture.png`,
        width: 1200,
        height: 630,
        alt: 'Digital Footprint - Κατασκευή Ιστοσελίδων & E-Shop Αθήνα',
        type: 'image/png',
      },
      {
        url: `${BASE_URL}/images/ogpicture-square.png`,
        width: 600,
        height: 600,
        alt: 'Digital Footprint Logo',
        type: 'image/png',
      },
    ],
  },
  
  // ✅ TWITTER CARD
  twitter: {
    card: 'summary_large_image',
    site: '@digitalfootprint',
    creator: '@digitalfootprint',
    title: 'Κατασκευή Ιστοσελίδων & E-Shop | Digital Footprint Αθήνα',
    description:
      'Επαγγελματική κατασκευή ιστοσελίδων & e-shop από €499. 50+ projects, γρήγορη παράδοση σε 10-15 ημέρες.',
    images: {
      url: `${BASE_URL}/images/ogpicture.png`,
      alt: 'Digital Footprint - Web Development Studio Αθήνα',
    },
  },
  
  // ✅ ROBOTS
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
  
  // ✅ CATEGORY
  category: 'technology',
  
  // ✅ CLASSIFICATION
  classification: 'Web Development Services',
};

// ===========================================
// STRUCTURED DATA: HOMEPAGE SPECIFIC
// ===========================================

// Professional Service Schema
const professionalServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${BASE_URL}/#professional-service`,
  name: 'Digital Footprint - Κατασκευή Ιστοσελίδων',
  image: `${BASE_URL}/images/ogpicture.png`,
  url: BASE_URL,
  telephone: '+30-694-792-0875',
  email: 'info@digitalfootprint.gr',
  priceRange: '€€',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Αθήνα',
    addressRegion: 'Αττική',
    addressCountry: 'GR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 37.9838,
    longitude: 23.7275,
  },
  areaServed: [
    { '@type': 'City', name: 'Αθήνα' },
    { '@type': 'City', name: 'Θεσσαλονίκη' },
    { '@type': 'Country', name: 'Ελλάδα' },
  ],
  serviceType: [
    'Κατασκευή Ιστοσελίδων',
    'Κατασκευή E-Shop',
    'Web Design',
    'Web Development',
    'SEO Services',
    'UI/UX Design',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Υπηρεσίες Web Development',
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: 'Κατασκευή Ιστοσελίδων',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Basic Website',
              description: 'Επαγγελματική ιστοσελίδα 5-7 σελίδων',
            },
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '499',
              priceCurrency: 'EUR',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Business Website',
              description: 'Ολοκληρωμένη εταιρική ιστοσελίδα με CMS',
            },
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '999',
              priceCurrency: 'EUR',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'E-Commerce / E-Shop',
              description: 'Πλήρες ηλεκτρονικό κατάστημα',
            },
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '1499',
              priceCurrency: 'EUR',
            },
          },
        ],
      },
    ],
  },
};

// Breadcrumb Schema (Homepage)
const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Αρχική',
      item: BASE_URL,
    },
  ],
};

// WebPage Schema
const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${BASE_URL}/#webpage`,
  url: BASE_URL,
  name: 'Κατασκευή Ιστοσελίδων & E-Shop Αθήνα | Digital Footprint',
  description:
    'Επαγγελματική κατασκευή ιστοσελίδων & e-shop στην Αθήνα. SEO optimized, mobile friendly, 50+ projects.',
  inLanguage: 'el-GR',
  isPartOf: {
    '@id': `${BASE_URL}/#website`,
  },
  about: {
    '@id': `${BASE_URL}/#organization`,
  },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/images/ogpicture.png`,
  },
  datePublished: '2021-01-01',
  dateModified: new Date().toISOString().split('T')[0],
};

// FAQ Schema (Powerful for SEO - Shows in Google)
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Πόσο κοστίζει η κατασκευή μιας ιστοσελίδας;',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Η τιμή κατασκευής ιστοσελίδας ξεκινά από €499 για μια basic επαγγελματική ιστοσελίδα. Για e-shop οι τιμές ξεκινούν από €999. Η τελική τιμή εξαρτάται από τις απαιτήσεις του project, τον αριθμό σελίδων και τις επιπλέον λειτουργίες.',
      },
    },
    {
      '@type': 'Question',
      name: 'Πόσο χρόνο χρειάζεται για την κατασκευή ιστοσελίδας;',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Μια βασική ιστοσελίδα παραδίδεται σε 10-15 εργάσιμες ημέρες. Ένα e-shop χρειάζεται 3-4 εβδομάδες. Custom web applications μπορεί να χρειαστούν 6-8 εβδομάδες ανάλογα με την πολυπλοκότητα.',
      },
    },
    {
      '@type': 'Question',
      name: 'Περιλαμβάνεται SEO στην κατασκευή;',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ναι! Όλες οι ιστοσελίδες μας είναι SEO-optimized από την αρχή. Περιλαμβάνουν σωστή δομή headings, meta tags, schema markup, optimized images, γρήγορη φόρτωση και mobile-first design. Επίσης προσφέρουμε ongoing SEO services.',
      },
    },
    {
      '@type': 'Question',
      name: 'Προσφέρετε hosting και συντήρηση;',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ναι, προσφέρουμε πακέτα managed hosting και συντήρησης. Αναλαμβάνουμε updates, backups, security monitoring και technical support. Μπορείτε επίσης να διαχειριστείτε μόνοι σας το hosting αν προτιμάτε.',
      },
    },
    {
      '@type': 'Question',
      name: 'Μπορώ να διαχειρίζομαι μόνος μου το περιεχόμενο;',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Απολύτως! Όλες οι ιστοσελίδες μας έρχονται με εύχρηστο CMS (Content Management System). Θα σας εκπαιδεύσουμε πώς να προσθέτετε/επεξεργάζεστε περιεχόμενο, εικόνες και προϊόντα χωρίς τεχνικές γνώσεις.',
      },
    },
    {
      '@type': 'Question',
      name: 'Δουλεύετε με πελάτες εκτός Αθήνας;',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ναι! Δουλεύουμε με πελάτες σε όλη την Ελλάδα και το εξωτερικό. Η επικοινωνία γίνεται μέσω video calls, email και chat. Έχουμε πελάτες σε Θεσσαλονίκη, Πάτρα, Ηράκλειο, Κύπρο και άλλες χώρες.',
      },
    },
  ],
};

// ===========================================
// HOMEPAGE COMPONENT
// ===========================================
export default function HomePage() {
  return (
    <>
      {/* ============================================= */}
      {/* STRUCTURED DATA (JSON-LD) */}
      {/* ============================================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      
      {/* ============================================= */}
      {/* PAGE CONTENT (Your existing client component) */}
      {/* ============================================= */}
      <HomePageClient />
    </>
  );
}

// ===========================================
// IMPORT CLIENT COMPONENT
// ===========================================
import HomePageClient from './_client';