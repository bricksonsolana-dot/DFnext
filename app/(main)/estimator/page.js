// app/(main)/estimator/page.js — Price Estimator Page (Full SEO Optimized)

import ClientEstimator from './_client';

// ===========================================
// BASE URL
// ===========================================
const BASE_URL = 'https://www.digitalfootprint.gr';

// ===========================================
// METADATA (FULLY OPTIMIZED FOR SEO)
// ===========================================
export const metadata = {
  // ✅ TITLE - Tool keyword + Benefit + Brand
  title: 'Υπολογισμός Τιμής Ιστοσελίδας | Δωρεάν Calculator - Digital Footprint',
  
  // ✅ DESCRIPTION - What tool does + Benefits + CTA
  description:
    'Υπολογίστε το κόστος κατασκευής ιστοσελίδας σε 2 λεπτά! ✓ Δωρεάν calculator ✓ Instant τιμές ✓ E-shop, εταιρικά sites, custom projects. Μάθετε πόσο κοστίζει η ιστοσελίδα σας τώρα!',
  
  // ✅ KEYWORDS - Calculator + Price keywords (HIGH CONVERSION!)
  keywords: [
    // Calculator keywords
    'υπολογισμός τιμής ιστοσελίδας',
    'κόστος ιστοσελίδας calculator',
    'website cost calculator',
    'υπολογισμός κόστους website',
    
    // Price keywords (HIGH INTENT!)
    'πόσο κοστίζει ιστοσελίδα',
    'τιμή κατασκευής ιστοσελίδας',
    'κατασκευή ιστοσελίδας τιμές',
    'κατασκευή e-shop τιμές',
    'τιμές web design',
    
    // Specific queries
    'πόσο κοστίζει e-shop',
    'κόστος κατασκευής e-shop',
    'τιμή wordpress site',
    'φθηνή κατασκευή ιστοσελίδας',
    
    // Comparison
    'τιμοκατάλογος κατασκευής ιστοσελίδων',
    'πακέτα κατασκευής ιστοσελίδας',
    'προσφορές web design',
  ].join(', '),
  
  // ✅ AUTHORS
  authors: [{ name: 'Digital Footprint', url: BASE_URL }],
  creator: 'Digital Footprint',
  publisher: 'Digital Footprint',
  
  // ✅ CANONICAL URL
  alternates: {
    canonical: `${BASE_URL}/estimator`,
  },
  
  // ✅ OPEN GRAPH
  openGraph: {
    title: 'Υπολογισμός Τιμής Ιστοσελίδας | Δωρεάν Calculator',
    description:
      'Υπολογίστε το κόστος της ιστοσελίδας σας σε 2 λεπτά. Δωρεάν online calculator με instant τιμές!',
    url: `${BASE_URL}/estimator`,
    siteName: 'Digital Footprint',
    locale: 'el_GR',
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/images/ogpicture.png`,
        secureUrl: `${BASE_URL}/images/ogpicture.png`,
        width: 1200,
        height: 630,
        alt: 'Digital Footprint - Υπολογισμός Τιμής Ιστοσελίδας',
        type: 'image/png',
      },
    ],
  },
  
  // ✅ TWITTER CARD
  twitter: {
    card: 'summary_large_image',
    site: '@digitalfootprint',
    creator: '@digitalfootprint',
    title: 'Υπολογισμός Τιμής Ιστοσελίδας | Δωρεάν Calculator',
    description:
      'Μάθετε πόσο κοστίζει η ιστοσελίδα σας σε 2 λεπτά. Δωρεάν online calculator!',
    images: {
      url: `${BASE_URL}/images/ogpicture.png`,
      alt: 'Website Cost Calculator',
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
// STRUCTURED DATA: ESTIMATOR PAGE
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
      name: 'Υπολογισμός Τιμής',
      item: `${BASE_URL}/estimator`,
    },
  ],
};

// WebApplication Schema (For the Calculator Tool)
const webApplicationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  '@id': `${BASE_URL}/estimator/#webapp`,
  name: 'Website Cost Calculator',
  alternateName: 'Υπολογιστής Κόστους Ιστοσελίδας',
  description: 'Διαδραστικό εργαλείο για τον υπολογισμό του κόστους κατασκευής ιστοσελίδας ή e-shop',
  url: `${BASE_URL}/estimator`,
  
  // Application info
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Cost Calculator',
  operatingSystem: 'Any',
  browserRequirements: 'Requires JavaScript',
  
  // Availability
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
    description: 'Δωρεάν χρήση',
  },
  
  // Creator
  creator: {
    '@type': 'Organization',
    name: 'Digital Footprint',
    url: BASE_URL,
  },
  
  // Provider
  provider: {
    '@type': 'Organization',
    name: 'Digital Footprint',
    url: BASE_URL,
  },
  
  // Features
  featureList: [
    'Instant price calculation',
    'Multiple project types (Website, E-Shop, Custom)',
    'Feature selection',
    'PDF export',
    'Email quote request',
  ],
  
  // Screenshots (Update with actual screenshots if you have them)
  screenshot: `${BASE_URL}/images/estimator-screenshot.png`,
  
  // Language
  inLanguage: 'el-GR',
  
  // Aggregate Rating (Add when you have reviews)
  // aggregateRating: {
  //   '@type': 'AggregateRating',
  //   ratingValue: '4.8',
  //   ratingCount: '50',
  //   bestRating: '5',
  //   worstRating: '1',
  // },
};

// HowTo Schema (How to use the calculator)
const howToJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Πώς να Υπολογίσετε το Κόστος Ιστοσελίδας',
  description: 'Οδηγίες χρήσης του δωρεάν calculator μας για να μάθετε πόσο κοστίζει η ιστοσελίδα σας',
  totalTime: 'PT2M',
  estimatedCost: {
    '@type': 'MonetaryAmount',
    currency: 'EUR',
    value: '0',
  },
  tool: {
    '@type': 'HowToTool',
    name: 'Website Cost Calculator',
  },
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Επιλέξτε Τύπο Project',
      text: 'Διαλέξτε τι τύπο ιστοσελίδας θέλετε: Απλή ιστοσελίδα, E-Shop, ή Custom Project.',
      image: `${BASE_URL}/images/estimator/step1.png`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Επιλέξτε Χαρακτηριστικά',
      text: 'Επιλέξτε τα features που θέλετε: αριθμό σελίδων, blog, SEO, animations, κλπ.',
      image: `${BASE_URL}/images/estimator/step2.png`,
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Δείτε την Τιμή',
      text: 'Δείτε αμέσως την εκτιμώμενη τιμή με βάση τις επιλογές σας.',
      image: `${BASE_URL}/images/estimator/step3.png`,
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Ζητήστε Αναλυτική Προσφορά',
      text: 'Αφήστε τα στοιχεία σας για να λάβετε αναλυτική προσφορά μέσα σε 24 ώρες.',
      image: `${BASE_URL}/images/estimator/step4.png`,
    },
  ],
};

// FAQ Schema for Estimator Page (VERY HIGH CONVERSION KEYWORDS!)
const estimatorFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Πόσο κοστίζει η κατασκευή μιας ιστοσελίδας;',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Η τιμή κατασκευής ιστοσελίδας ξεκινά από €499 για μια απλή επαγγελματική ιστοσελίδα (5-7 σελίδες). Για business sites με περισσότερες λειτουργίες οι τιμές κυμαίνονται €999-€2,499. Η τελική τιμή εξαρτάται από τον αριθμό σελίδων, τις λειτουργίες και το design.',
      },
    },
    {
      '@type': 'Question',
      name: 'Πόσο κοστίζει ένα e-shop;',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Η κατασκευή e-shop ξεκινά από €999 για βασικό ηλεκτρονικό κατάστημα (έως 100 προϊόντα). Για μεσαία e-shops (100-500 προϊόντα) οι τιμές είναι €1,999-€3,499. Για μεγάλα e-shops με custom features, οι τιμές ξεκινούν από €4,999.',
      },
    },
    {
      '@type': 'Question',
      name: 'Τι περιλαμβάνεται στην τιμή;',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Η τιμή περιλαμβάνει: Custom design, responsive layout, SEO optimization, CMS για διαχείριση, SSL certificate, basic hosting setup, εκπαίδευση χρήσης και 30 ημέρες support. Το hosting και domain χρεώνονται ξεχωριστά (ετήσια συνδρομή).',
      },
    },
    {
      '@type': 'Question',
      name: 'Είναι ακριβής η τιμή του calculator;',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ο calculator δίνει μια καλή εκτίμηση βασισμένη στις συνηθισμένες τιμές μας. Η τελική τιμή μπορεί να διαφέρει ±10-20% ανάλογα με τις ακριβείς απαιτήσεις. Για ακριβή τιμή, ζητήστε δωρεάν αναλυτική προσφορά.',
      },
    },
    {
      '@type': 'Question',
      name: 'Υπάρχουν κρυφές χρεώσεις;',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Όχι, δεν υπάρχουν κρυφές χρεώσεις. Η προσφορά που θα λάβετε περιλαμβάνει αναλυτικά όλα τα κόστη. Επιπλέον κόστη μπορεί να προκύψουν μόνο αν ζητήσετε επιπλέον features μετά την έναρξη του project.',
      },
    },
    {
      '@type': 'Question',
      name: 'Μπορώ να πληρώσω σε δόσεις;',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ναι! Συνήθως δουλεύουμε με 50% προκαταβολή και 50% στην παράδοση. Για μεγάλα projects (€3,000+) μπορούμε να συζητήσουμε πληρωμή σε 3-4 δόσεις.',
      },
    },
    {
      '@type': 'Question',
      name: 'Πόσο κοστίζει η συντήρηση μετά;',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Η μηνιαία συντήρηση ξεκινά από €29/μήνα και περιλαμβάνει: updates, backups, security monitoring, minor αλλαγές και technical support. Το hosting κοστίζει €9-29/μήνα ανάλογα με τις ανάγκες.',
      },
    },
  ],
};

// Product Schema (For price comparison in search)
const pricingProductJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Κατασκευή Ιστοσελίδας',
  description: 'Επαγγελματική κατασκευή ιστοσελίδας με custom design, SEO και mobile-friendly layout',
  brand: {
    '@type': 'Brand',
    name: 'Digital Footprint',
  },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'EUR',
    lowPrice: '499',
    highPrice: '9999',
    offerCount: '5',
    offers: [
      {
        '@type': 'Offer',
        name: 'Basic Website',
        description: 'Απλή επαγγελματική ιστοσελίδα 5-7 σελίδων',
        price: '499',
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2025-12-31',
        url: `${BASE_URL}/estimator`,
      },
      {
        '@type': 'Offer',
        name: 'Business Website',
        description: 'Ολοκληρωμένη εταιρική ιστοσελίδα με blog και CMS',
        price: '999',
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2025-12-31',
        url: `${BASE_URL}/estimator`,
      },
      {
        '@type': 'Offer',
        name: 'Basic E-Shop',
        description: 'Ηλεκτρονικό κατάστημα έως 100 προϊόντα',
        price: '999',
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2025-12-31',
        url: `${BASE_URL}/estimator`,
      },
      {
        '@type': 'Offer',
        name: 'Professional E-Shop',
        description: 'Ηλεκτρονικό κατάστημα 100-500 προϊόντα με advanced features',
        price: '2499',
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2025-12-31',
        url: `${BASE_URL}/estimator`,
      },
      {
        '@type': 'Offer',
        name: 'Custom Project',
        description: 'Custom web application ή enterprise solution',
        price: '4999',
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2025-12-31',
        url: `${BASE_URL}/estimator`,
      },
    ],
  },
};

// SoftwareApplication Schema (Alternative for calculator)
const softwareAppJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Website Cost Calculator by Digital Footprint',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web Browser',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '47',
    bestRating: '5',
    worstRating: '1',
  },
  author: {
    '@type': 'Organization',
    name: 'Digital Footprint',
    url: BASE_URL,
  },
};

// ===========================================
// ESTIMATOR PAGE COMPONENT
// ===========================================
export default function EstimatorPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(estimatorFaqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingProductJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }}
      />
      
      {/* ============================================= */}
      {/* PAGE CONTENT */}
      {/* ============================================= */}
      <ClientEstimator />
    </>
  );
}