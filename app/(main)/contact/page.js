// app/(main)/contact/page.js — Contact Page (Full SEO Optimized)

import ClientContact from './_client';

// ===========================================
// BASE URL
// ===========================================
const BASE_URL = 'https://www.digitalfootprint.gr';

// ===========================================
// METADATA (FULLY OPTIMIZED FOR SEO)
// ===========================================
export const metadata = {
  // ✅ TITLE - Action keyword + Brand + CTA
  title: 'Επικοινωνία | Digital Footprint - Ζητήστε Δωρεάν Προσφορά Ιστοσελίδας',
  
  // ✅ DESCRIPTION - Contact info + Response time + CTA
  description:
    'Επικοινωνήστε μαζί μας για δωρεάν προσφορά κατασκευής ιστοσελίδας. ✓ Τηλ: +30 694 792 0875 ✓ Email: info@digitalfootprint.gr ✓ Απαντάμε σε 24 ώρες. Ζητήστε προσφορά τώρα!',
  
  // ✅ KEYWORDS - Contact-specific
  keywords: [
    // Contact keywords
    'επικοινωνία digital footprint',
    'τηλέφωνο digital footprint',
    'email digital footprint',
    
    // Action keywords
    'προσφορά ιστοσελίδας',
    'δωρεάν προσφορά web design',
    'ζητήστε προσφορά ιστοσελίδα',
    'κατασκευή ιστοσελίδας προσφορά',
    
    // Service keywords
    'web design επικοινωνία',
    'κατασκευή ιστοσελίδων επικοινωνία',
    
    // Location
    'web designer αθήνα επικοινωνία',
    'web agency αθήνα τηλέφωνο',
  ].join(', '),
  
  // ✅ AUTHORS
  authors: [{ name: 'Digital Footprint', url: BASE_URL }],
  creator: 'Digital Footprint',
  publisher: 'Digital Footprint',
  
  // ✅ CANONICAL URL
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
  
  // ✅ OPEN GRAPH
  openGraph: {
    title: 'Επικοινωνία | Digital Footprint - Δωρεάν Προσφορά',
    description:
      'Επικοινωνήστε μαζί μας για δωρεάν προσφορά. Τηλ: +30 694 792 0875. Απαντάμε σε 24 ώρες.',
    url: `${BASE_URL}/contact`,
    siteName: 'Digital Footprint',
    locale: 'el_GR',
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/images/ogpicture.png`,
        secureUrl: `${BASE_URL}/images/ogpicture.png`,
        width: 1200,
        height: 630,
        alt: 'Digital Footprint - Επικοινωνήστε μαζί μας',
        type: 'image/png',
      },
    ],
  },
  
  // ✅ TWITTER CARD
  twitter: {
    card: 'summary_large_image',
    site: '@digitalfootprint',
    creator: '@digitalfootprint',
    title: 'Επικοινωνία | Digital Footprint',
    description:
      'Ζητήστε δωρεάν προσφορά. Τηλ: +30 694 792 0875. Απαντάμε σε 24 ώρες.',
    images: {
      url: `${BASE_URL}/images/ogpicture.png`,
      alt: 'Digital Footprint Contact',
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
// STRUCTURED DATA: CONTACT PAGE
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
      name: 'Επικοινωνία',
      item: `${BASE_URL}/contact`,
    },
  ],
};

// Contact Page Schema
const contactPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${BASE_URL}/contact/#contact-page`,
  url: `${BASE_URL}/contact`,
  name: 'Επικοινωνία - Digital Footprint',
  description: 'Επικοινωνήστε με το Digital Footprint για δωρεάν προσφορά κατασκευής ιστοσελίδας',
  inLanguage: 'el-GR',
  isPartOf: {
    '@id': `${BASE_URL}/#website`,
  },
  about: {
    '@type': 'Organization',
    name: 'Digital Footprint',
  },
  mainEntity: {
    '@id': `${BASE_URL}/#organization`,
  },
};

// Local Business Contact Schema (Very Important for Local SEO!)
const localBusinessContactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${BASE_URL}/#local-business`,
  name: 'Digital Footprint',
  
  // Contact Information
  telephone: '+30-694-792-0875',
  email: 'info@digitalfootprint.gr',
  
  // URLs
  url: BASE_URL,
  
  // Contact Points (Different ways to reach you)
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+30-694-792-0875',
      contactType: 'customer service',
      email: 'info@digitalfootprint.gr',
      availableLanguage: ['Greek', 'English'],
      contactOption: ['TollFree', 'HearingImpairedSupported'],
      areaServed: {
        '@type': 'Country',
        name: 'Ελλάδα',
      },
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
      email: 'info@digitalfootprint.gr',
      availableLanguage: ['Greek', 'English'],
      areaServed: 'GR',
    },
    {
      '@type': 'ContactPoint',
      contactType: 'technical support',
      email: 'support@digitalfootprint.gr',
      availableLanguage: ['Greek', 'English'],
    },
  ],
  
  // Address
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Αθήνα',
    addressRegion: 'Αττική',
    postalCode: '10000',
    addressCountry: {
      '@type': 'Country',
      name: 'GR',
    },
  },
  
  // Geo Location (Athens center)
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 37.9838,
    longitude: 23.7275,
  },
  
  // Opening Hours
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  
  // How to pay
  paymentAccepted: ['Cash', 'Credit Card', 'Bank Transfer', 'PayPal'],
  currenciesAccepted: 'EUR',
  priceRange: '€€',
  
  // Service area
  areaServed: [
    { '@type': 'City', name: 'Αθήνα' },
    { '@type': 'City', name: 'Θεσσαλονίκη' },
    { '@type': 'City', name: 'Πάτρα' },
    { '@type': 'City', name: 'Ηράκλειο' },
    { '@type': 'City', name: 'Λάρισα' },
    { '@type': 'Country', name: 'Ελλάδα' },
    { '@type': 'Country', name: 'Κύπρος' },
  ],
  
  // Social
  sameAs: [
    'https://www.facebook.com/digitalfootprintgr',
    'https://www.instagram.com/digitalfootprintgr',
    'https://www.linkedin.com/company/digitalfootprintgr',
    'https://wa.me/306947920875', // WhatsApp link
  ],
  
  // Action - Very Important!
  potentialAction: {
    '@type': 'CommunicateAction',
    target: [
      {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/contact`,
        actionPlatform: [
          'http://schema.org/DesktopWebPlatform',
          'http://schema.org/MobileWebPlatform',
        ],
      },
      {
        '@type': 'EntryPoint',
        urlTemplate: 'mailto:info@digitalfootprint.gr',
        actionPlatform: 'http://schema.org/DesktopWebPlatform',
      },
      {
        '@type': 'EntryPoint',
        urlTemplate: 'tel:+306947920875',
        actionPlatform: 'http://schema.org/MobileWebPlatform',
      },
    ],
  },
};

// FAQ Schema for Contact Page
const contactFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Πώς μπορώ να επικοινωνήσω μαζί σας;',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Μπορείτε να επικοινωνήσετε μαζί μας με πολλούς τρόπους: Τηλέφωνο στο +30 694 792 0875, email στο info@digitalfootprint.gr, WhatsApp, ή συμπληρώνοντας τη φόρμα επικοινωνίας σε αυτή τη σελίδα.',
      },
    },
    {
      '@type': 'Question',
      name: 'Πόσο γρήγορα απαντάτε;',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Απαντάμε σε όλα τα μηνύματα εντός 24 ωρών τις εργάσιμες ημέρες. Για επείγοντα θέματα, καλέστε μας απευθείας στο τηλέφωνο.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ποιες είναι οι ώρες λειτουργίας σας;',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Τα γραφεία μας είναι ανοιχτά Δευτέρα έως Παρασκευή, 09:00-18:00. Εκτός ωραρίου, αφήστε μας μήνυμα και θα σας απαντήσουμε την επόμενη εργάσιμη.',
      },
    },
    {
      '@type': 'Question',
      name: 'Η προσφορά είναι δωρεάν;',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ναι! Η αρχική συνάντηση/κλήση και η προσφορά είναι εντελώς δωρεάν και χωρίς καμία δέσμευση. Θα συζητήσουμε τις ανάγκες σας και θα σας στείλουμε αναλυτική προσφορά.',
      },
    },
    {
      '@type': 'Question',
      name: 'Δουλεύετε με πελάτες εκτός Αθήνας;',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ναι! Δουλεύουμε με πελάτες σε όλη την Ελλάδα και το εξωτερικό. Η επικοινωνία γίνεται online μέσω Zoom/Google Meet, email και τηλέφωνο. Έχουμε πελάτες σε Θεσσαλονίκη, Πάτρα, Κύπρο και άλλες χώρες.',
      },
    },
  ],
};

// Action Schema - For Google to show "Call" button in search
const callActionJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${BASE_URL}/contact/#webpage`,
  name: 'Επικοινωνία - Digital Footprint',
  url: `${BASE_URL}/contact`,
  potentialAction: [
    {
      '@type': 'CommunicateAction',
      name: 'Τηλεφωνήστε μας',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'tel:+306947920875',
        actionPlatform: 'http://schema.org/MobileWebPlatform',
      },
    },
    {
      '@type': 'CommunicateAction',
      name: 'Στείλτε Email',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'mailto:info@digitalfootprint.gr',
      },
    },
    {
      '@type': 'CommunicateAction',
      name: 'WhatsApp',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://wa.me/306947920875',
        actionPlatform: 'http://schema.org/MobileWebPlatform',
      },
    },
  ],
};

// ===========================================
// CONTACT PAGE COMPONENT
// ===========================================
export default function ContactPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessContactJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactFaqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(callActionJsonLd) }}
      />
      
      {/* ============================================= */}
      {/* PAGE CONTENT */}
      {/* ============================================= */}
      <ClientContact />
    </>
  );
}