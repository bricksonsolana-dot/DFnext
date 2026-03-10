// app/(main)/services/page.js — Services Page (Full SEO Optimized)

import ClientServices from './_client';

// ===========================================
// BASE URL
// ===========================================
const BASE_URL = 'https://www.digitalfootprint.gr';

// ===========================================
// METADATA (FULLY OPTIMIZED FOR SEO)
// ===========================================
export const metadata = {
  // ✅ TITLE - Service keyword + Location + Brand
  title: 'Υπηρεσίες Κατασκευής Ιστοσελίδων & E-Shop | Digital Footprint Αθήνα',
  
  // ✅ DESCRIPTION - Services + Benefits + CTA
  description:
    'Ολοκληρωμένες υπηρεσίες web development: Κατασκευή ιστοσελίδων, e-shop, UI/UX design, SEO & digital marketing. ✓ Από €499 ✓ Παράδοση 10-15 ημέρες. Δωρεάν προσφορά!',
  
  // ✅ KEYWORDS - Service-specific
  keywords: [
    // Primary service keywords
    'υπηρεσίες κατασκευής ιστοσελίδων',
    'κατασκευή ιστοσελίδας',
    'κατασκευή e-shop',
    'κατασκευή eshop',
    'web development services',
    
    // Specific services
    'ui ux design',
    'σχεδιασμός ιστοσελίδων',
    'seo υπηρεσίες',
    'seo ιστοσελίδας',
    'digital marketing',
    
    // Location
    'web agency αθήνα',
    'κατασκευή e-shop αθήνα',
    'web design αθήνα',
    
    // Long-tail
    'κατασκευή ιστοσελίδας wordpress',
    'κατασκευή ιστοσελίδας τιμές',
    'responsive web design',
    'mobile friendly ιστοσελίδα',
  ].join(', '),
  
  // ✅ AUTHORS
  authors: [{ name: 'Digital Footprint', url: BASE_URL }],
  creator: 'Digital Footprint',
  publisher: 'Digital Footprint',
  
  // ✅ CANONICAL URL
  alternates: {
    canonical: `${BASE_URL}/services`,
  },
  
  // ✅ OPEN GRAPH
  openGraph: {
    title: 'Υπηρεσίες Κατασκευής Ιστοσελίδων & E-Shop | Digital Footprint',
    description:
      'Web development, e-commerce, UI/UX design, SEO & digital marketing. Από €499, παράδοση σε 10-15 ημέρες. Ζητήστε δωρεάν προσφορά!',
    url: `${BASE_URL}/services`,
    siteName: 'Digital Footprint',
    locale: 'el_GR',
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/images/ogpicture.png`,
        secureUrl: `${BASE_URL}/images/ogpicture.png`,
        width: 1200,
        height: 630,
        alt: 'Digital Footprint - Υπηρεσίες Κατασκευής Ιστοσελίδων',
        type: 'image/png',
      },
    ],
  },
  
  // ✅ TWITTER CARD
  twitter: {
    card: 'summary_large_image',
    site: '@digitalfootprint',
    creator: '@digitalfootprint',
    title: 'Υπηρεσίες Web Development | Digital Footprint Αθήνα',
    description:
      'Κατασκευή ιστοσελίδων, e-shop, UI/UX, SEO. Από €499, γρήγορη παράδοση.',
    images: {
      url: `${BASE_URL}/images/ogpicture.png`,
      alt: 'Digital Footprint Services',
    },
  },
  
  // ✅ ROBOTS
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

// ===========================================
// STRUCTURED DATA: SERVICES PAGE
// ===========================================

// Breadcrumb Schema
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
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Υπηρεσίες',
      item: `${BASE_URL}/services`,
    },
  ],
};

// Service Catalog Schema (Detailed)
const servicesCatalogJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE_URL}/services/#service-catalog`,
  name: 'Υπηρεσίες Web Development',
  description: 'Ολοκληρωμένες υπηρεσίες κατασκευής ιστοσελίδων, e-shop, UI/UX design και SEO',
  provider: {
    '@type': 'Organization',
    name: 'Digital Footprint',
    url: BASE_URL,
  },
  areaServed: {
    '@type': 'Country',
    name: 'Ελλάδα',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Development Services',
    itemListElement: [
      // Service 1: Website Development
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          '@id': `${BASE_URL}/services/#website-development`,
          name: 'Κατασκευή Ιστοσελίδων',
          description: 'Custom website development με modern technologies. Responsive design, SEO-optimized, γρήγορη φόρτωση. Από landing pages έως πολυσέλιδες εταιρικές ιστοσελίδες.',
          image: `${BASE_URL}/images/services/website-development.jpg`,
          provider: {
            '@type': 'Organization',
            name: 'Digital Footprint',
          },
          serviceType: 'Web Development',
          areaServed: 'GR',
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '499',
          priceCurrency: 'EUR',
          minPrice: '499',
          maxPrice: '4999',
          description: 'Ανάλογα με τις απαιτήσεις του project',
        },
      },
      // Service 2: E-Commerce / E-Shop
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          '@id': `${BASE_URL}/services/#ecommerce`,
          name: 'Κατασκευή E-Shop',
          description: 'Ολοκληρωμένες e-commerce λύσεις με WooCommerce, Shopify ή custom platforms. Διαχείριση προϊόντων, πληρωμές, αποστολές, inventory management.',
          image: `${BASE_URL}/images/services/ecommerce.jpg`,
          provider: {
            '@type': 'Organization',
            name: 'Digital Footprint',
          },
          serviceType: 'E-Commerce Development',
          areaServed: 'GR',
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '999',
          priceCurrency: 'EUR',
          minPrice: '999',
          maxPrice: '9999',
          description: 'Ανάλογα με τον αριθμό προϊόντων και τις λειτουργίες',
        },
      },
      // Service 3: UI/UX Design
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          '@id': `${BASE_URL}/services/#ui-ux-design`,
          name: 'UI/UX Design',
          description: 'User interface & user experience design. Wireframes, prototypes, design systems. Εστίαση στην εμπειρία χρήστη και τις μετατροπές.',
          image: `${BASE_URL}/images/services/ui-ux-design.jpg`,
          provider: {
            '@type': 'Organization',
            name: 'Digital Footprint',
          },
          serviceType: 'UI/UX Design',
          areaServed: 'GR',
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '399',
          priceCurrency: 'EUR',
          minPrice: '399',
          description: 'Ανάλογα με το scope του project',
        },
      },
      // Service 4: SEO
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          '@id': `${BASE_URL}/services/#seo`,
          name: 'SEO Optimization',
          description: 'Search engine optimization για υψηλότερες θέσεις στο Google. Technical SEO, on-page optimization, keyword research, content strategy, link building.',
          image: `${BASE_URL}/images/services/seo.jpg`,
          provider: {
            '@type': 'Organization',
            name: 'Digital Footprint',
          },
          serviceType: 'SEO Services',
          areaServed: 'GR',
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '299',
          priceCurrency: 'EUR',
          minPrice: '299',
          description: 'Μηνιαία συνδρομή ή one-time audit',
        },
      },
      // Service 5: Digital Marketing
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          '@id': `${BASE_URL}/services/#digital-marketing`,
          name: 'Digital Marketing',
          description: 'Google Ads, Facebook/Instagram Ads, email marketing, social media management. Στρατηγικές που φέρνουν αποτελέσματα.',
          image: `${BASE_URL}/images/services/digital-marketing.jpg`,
          provider: {
            '@type': 'Organization',
            name: 'Digital Footprint',
          },
          serviceType: 'Digital Marketing',
          areaServed: 'GR',
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '399',
          priceCurrency: 'EUR',
          minPrice: '399',
          description: 'Μηνιαία διαχείριση + ad spend',
        },
      },
      // Service 6: Hosting & Support
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          '@id': `${BASE_URL}/services/#hosting-support`,
          name: 'Hosting & Συντήρηση',
          description: 'Managed web hosting, SSL certificates, backups, security monitoring, updates, technical support 24/7.',
          image: `${BASE_URL}/images/services/hosting.jpg`,
          provider: {
            '@type': 'Organization',
            name: 'Digital Footprint',
          },
          serviceType: 'Web Hosting',
          areaServed: 'GR',
        },
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '29',
          priceCurrency: 'EUR',
          minPrice: '29',
          description: 'Μηνιαία συνδρομή',
          unitText: 'MONTH',
        },
      },
    ],
  },
};

// FAQ Schema for Services Page
const servicesFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Τι περιλαμβάνει η κατασκευή ιστοσελίδας;',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Η κατασκευή ιστοσελίδας περιλαμβάνει: Custom design, responsive layout για όλες τις συσκευές, SEO optimization, CMS για εύκολη διαχείριση, SSL certificate, βασικό hosting setup, εκπαίδευση χρήσης και 30 ημέρες support μετά την παράδοση.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ποια πλατφόρμα χρησιμοποιείτε για e-shop;',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Χρησιμοποιούμε κυρίως WooCommerce (WordPress) για ευελιξία και χαμηλό κόστος, Shopify για γρήγορη υλοποίηση, ή custom solutions με React/Next.js για μεγάλα projects. Η επιλογή εξαρτάται από τις ανάγκες σας.',
      },
    },
    {
      '@type': 'Question',
      name: 'Αναλαμβάνετε την συντήρηση της ιστοσελίδας;',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ναι! Προσφέρουμε πακέτα μηνιαίας συντήρησης από €29/μήνα που περιλαμβάνουν: Updates, backups, security monitoring, minor αλλαγές περιεχομένου και technical support.',
      },
    },
    {
      '@type': 'Question',
      name: 'Πόσο κοστίζει το SEO;',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To SEO ξεκινά από €299 για one-time audit και basic optimization. Για ongoing SEO (monthly), οι τιμές ξεκινούν από €399/μήνα και περιλαμβάνουν keyword tracking, content optimization, link building και monthly reports.',
      },
    },
    {
      '@type': 'Question',
      name: 'Μπορώ να δω παραδείγματα δουλειάς σας;',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Φυσικά! Επισκεφθείτε τη σελίδα Portfolio μας για να δείτε 50+ completed projects. Έχουμε δουλέψει με e-shops, εταιρικές ιστοσελίδες, startups, εστιατόρια, ξενοδοχεία και πολλά άλλα.',
      },
    },
  ],
};

// ItemList Schema (for service listing)
const servicesListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Υπηρεσίες Digital Footprint',
  description: 'Λίστα υπηρεσιών web development',
  numberOfItems: 6,
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Κατασκευή Ιστοσελίδων',
      url: `${BASE_URL}/services#website-development`,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Κατασκευή E-Shop',
      url: `${BASE_URL}/services#ecommerce`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'UI/UX Design',
      url: `${BASE_URL}/services#ui-ux-design`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'SEO Optimization',
      url: `${BASE_URL}/services#seo`,
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'Digital Marketing',
      url: `${BASE_URL}/services#digital-marketing`,
    },
    {
      '@type': 'ListItem',
      position: 6,
      name: 'Hosting & Συντήρηση',
      url: `${BASE_URL}/services#hosting-support`,
    },
  ],
};

// ===========================================
// SERVICES PAGE COMPONENT
// ===========================================
export default function ServicesPage() {
  return (
    <>
      {/* ============================================= */}
      {/* STRUCTURED DATA (JSON-LD) */}
      {/* ============================================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesCatalogJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesFaqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesListJsonLd) }}
      />
      
      {/* ============================================= */}
      {/* PAGE CONTENT */}
      {/* ============================================= */}
      <ClientServices />
    </>
  );
}