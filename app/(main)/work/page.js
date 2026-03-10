// app/(main)/work/page.js — Portfolio/Work Page (Full SEO Optimized)

import ClientWork from './_client';

// ===========================================
// BASE URL
// ===========================================
const BASE_URL = 'https://www.digitalfootprint.gr';

// ===========================================
// METADATA (FULLY OPTIMIZED FOR SEO)
// ===========================================
export const metadata = {
  // ✅ TITLE - Portfolio keyword + Number + Brand
  title: 'Portfolio - 50+ Έργα Κατασκευής Ιστοσελίδων & E-Shop | Digital Footprint',
  
  // ✅ DESCRIPTION - What they'll see + Credibility + CTA
  description:
    'Δείτε το portfolio μας με 50+ completed projects: ιστοσελίδες, e-shop, web apps για Ελληνικές επιχειρήσεις. ✓ E-commerce ✓ Εταιρικά sites ✓ Startups. Case studies & αποτελέσματα.',
  
  // ✅ KEYWORDS - Portfolio-specific
  keywords: [
    // Portfolio keywords
    'portfolio web design',
    'έργα κατασκευής ιστοσελίδων',
    'παραδείγματα ιστοσελίδων',
    'portfolio κατασκευή e-shop',
    'web design examples greece',
    
    // Project type keywords
    'e-commerce portfolio',
    'εταιρικές ιστοσελίδες παραδείγματα',
    'wordpress websites examples',
    'custom web development projects',
    
    // Industry keywords
    'ιστοσελίδες για εστιατόρια',
    'ιστοσελίδες για ξενοδοχεία',
    'e-shop ρούχα',
    'ιστοσελίδες για επιχειρήσεις',
    
    // Location
    'web design portfolio αθήνα',
    'web agency greece portfolio',
  ].join(', '),
  
  // ✅ AUTHORS
  authors: [{ name: 'Digital Footprint', url: BASE_URL }],
  creator: 'Digital Footprint',
  publisher: 'Digital Footprint',
  
  // ✅ CANONICAL URL
  alternates: {
    canonical: `${BASE_URL}/work`,
  },
  
  // ✅ OPEN GRAPH
  openGraph: {
    title: 'Portfolio Κατασκευής Ιστοσελίδων | Digital Footprint - 50+ Projects',
    description:
      'Δείτε 50+ completed projects: ιστοσελίδες, e-shop, web apps. Real case studies με αποτελέσματα.',
    url: `${BASE_URL}/work`,
    siteName: 'Digital Footprint',
    locale: 'el_GR',
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/images/ogpicture.png`,
        secureUrl: `${BASE_URL}/images/ogpicture.png`,
        width: 1200,
        height: 630,
        alt: 'Digital Footprint Portfolio - Έργα Κατασκευής Ιστοσελίδων',
        type: 'image/png',
      },
    ],
  },
  
  // ✅ TWITTER CARD
  twitter: {
    card: 'summary_large_image',
    site: '@digitalfootprint',
    creator: '@digitalfootprint',
    title: 'Portfolio Web Design | Digital Footprint - 50+ Projects',
    description:
      'Δείτε το portfolio μας: ιστοσελίδες, e-shop, web apps. 50+ completed projects.',
    images: {
      url: `${BASE_URL}/images/ogpicture.png`,
      alt: 'Digital Footprint Portfolio',
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
// STRUCTURED DATA: PORTFOLIO PAGE
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
      name: 'Portfolio',
      item: `${BASE_URL}/work`,
    },
  ],
};

// Collection Page Schema
const collectionPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': `${BASE_URL}/work/#collection`,
  name: 'Portfolio - Έργα Κατασκευής Ιστοσελίδων',
  description: 'Συλλογή από 50+ completed web development projects',
  url: `${BASE_URL}/work`,
  isPartOf: {
    '@id': `${BASE_URL}/#website`,
  },
  about: {
    '@type': 'Thing',
    name: 'Web Development Projects',
  },
  creator: {
    '@type': 'Organization',
    name: 'Digital Footprint',
    url: BASE_URL,
  },
  inLanguage: 'el-GR',
};

// Portfolio Items Schema (Update with your REAL projects!)
const portfolioItemsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Digital Footprint Portfolio',
  description: 'Λίστα με τα web development projects μας',
  numberOfItems: 9,
  itemListElement: [
    // ===========================================
    // PROJECT 1: Architects
    // ===========================================
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'CreativeWork',
        name: 'Architects Studio Website',
        description: 'Εταιρική ιστοσελίδα για αρχιτεκτονικό γραφείο με portfolio έργων και minimal design.',
        image: `${BASE_URL}/images/portfolio/architects.jpg`,
        url: `${BASE_URL}/work#architects`,
        creator: {
          '@type': 'Organization',
          name: 'Digital Footprint',
        },
        dateCreated: '2024',
        genre: 'Corporate Website',
        keywords: 'architects website, αρχιτεκτονικό γραφείο ιστοσελίδα',
      },
    },
    // ===========================================
    // PROJECT 2: Clothing E-Shop
    // ===========================================
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'CreativeWork',
        name: 'Clothing E-Shop',
        description: 'Ολοκληρωμένο e-shop για κατάστημα ρούχων με WooCommerce, διαχείριση αποθέματος και online πληρωμές.',
        image: `${BASE_URL}/images/portfolio/clothing.jpg`,
        url: `${BASE_URL}/work#clothing`,
        creator: {
          '@type': 'Organization',
          name: 'Digital Footprint',
        },
        dateCreated: '2024',
        genre: 'E-Commerce',
        keywords: 'clothing e-shop, e-shop ρούχα, woocommerce',
      },
    },
    // ===========================================
    // PROJECT 3: EatPlay
    // ===========================================
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'CreativeWork',
        name: 'EatPlay Restaurant & Entertainment',
        description: 'Ιστοσελίδα για χώρο εστίασης και ψυχαγωγίας με online κρατήσεις και menu.',
        image: `${BASE_URL}/images/portfolio/eatplay.jpg`,
        url: `${BASE_URL}/work#eatplay`,
        creator: {
          '@type': 'Organization',
          name: 'Digital Footprint',
        },
        dateCreated: '2024',
        genre: 'Restaurant Website',
        keywords: 'restaurant website, εστιατόριο ιστοσελίδα, online κρατήσεις',
      },
    },
    // ===========================================
    // PROJECT 4: Escape Room
    // ===========================================
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'CreativeWork',
        name: 'Escape Room Booking Website',
        description: 'Ιστοσελίδα για escape room με online booking system και παρουσίαση δωματίων.',
        image: `${BASE_URL}/images/portfolio/escape-room.jpg`,
        url: `${BASE_URL}/work#escape-room`,
        creator: {
          '@type': 'Organization',
          name: 'Digital Footprint',
        },
        dateCreated: '2024',
        genre: 'Entertainment Website',
        keywords: 'escape room website, online booking, κρατήσεις online',
      },
    },
    // ===========================================
    // PROJECT 5: Kaiser Omnia
    // ===========================================
    {
      '@type': 'ListItem',
      position: 5,
      item: {
        '@type': 'CreativeWork',
        name: 'Kaiser Omnia',
        description: 'Premium εταιρική ιστοσελίδα με custom design και animations.',
        image: `${BASE_URL}/images/portfolio/kaiser-omnia.jpg`,
        url: `${BASE_URL}/work#kaiser-omnia`,
        creator: {
          '@type': 'Organization',
          name: 'Digital Footprint',
        },
        dateCreated: '2024',
        genre: 'Corporate Website',
        keywords: 'corporate website, εταιρική ιστοσελίδα, premium design',
      },
    },
    // ===========================================
    // PROJECT 6: NY Construction
    // ===========================================
    {
      '@type': 'ListItem',
      position: 6,
      item: {
        '@type': 'CreativeWork',
        name: 'NY Construction',
        description: 'Ιστοσελίδα για κατασκευαστική εταιρεία με portfolio έργων και φόρμα επικοινωνίας.',
        image: `${BASE_URL}/images/portfolio/ny-construction.jpg`,
        url: `${BASE_URL}/work#ny-construction`,
        creator: {
          '@type': 'Organization',
          name: 'Digital Footprint',
        },
        dateCreated: '2024',
        genre: 'Construction Website',
        keywords: 'construction website, κατασκευαστική εταιρεία, τεχνική εταιρεία',
      },
    },
    // ===========================================
    // PROJECT 7: Property Hall
    // ===========================================
    {
      '@type': 'ListItem',
      position: 7,
      item: {
        '@type': 'CreativeWork',
        name: 'Property Hall Real Estate',
        description: 'Ιστοσελίδα για μεσιτικό γραφείο με καταχωρήσεις ακινήτων, φίλτρα αναζήτησης και property listings.',
        image: `${BASE_URL}/images/portfolio/propertyhall.jpg`,
        url: `${BASE_URL}/work#propertyhall`,
        creator: {
          '@type': 'Organization',
          name: 'Digital Footprint',
        },
        dateCreated: '2024',
        genre: 'Real Estate Website',
        keywords: 'real estate website, μεσιτικό γραφείο, ακίνητα',
      },
    },
    // ===========================================
    // PROJECT 8: Shahin Yavari
    // ===========================================
    {
      '@type': 'ListItem',
      position: 8,
      item: {
        '@type': 'CreativeWork',
        name: 'Shahin Yavari Portfolio',
        description: 'Personal portfolio website για επαγγελματία με showcase έργων και CV.',
        image: `${BASE_URL}/images/portfolio/shahin-yavari.jpg`,
        url: `${BASE_URL}/work#shahin-yavari`,
        creator: {
          '@type': 'Organization',
          name: 'Digital Footprint',
        },
        dateCreated: '2024',
        genre: 'Personal Portfolio',
        keywords: 'personal portfolio, προσωπική ιστοσελίδα, cv website',
      },
    },
    // ===========================================
    // PROJECT 9: UltraChamp
    // ===========================================
    {
      '@type': 'ListItem',
      position: 9,
      item: {
        '@type': 'CreativeWork',
        name: 'UltraChamp Fitness',
        description: 'Ιστοσελίδα για γυμναστήριο/fitness center με προγράμματα, τιμοκατάλογο και online εγγραφές.',
        image: `${BASE_URL}/images/portfolio/ultrachamp.jpg`,
        url: `${BASE_URL}/work#ultrachamp`,
        creator: {
          '@type': 'Organization',
          name: 'Digital Footprint',
        },
        dateCreated: '2024',
        genre: 'Fitness Website',
        keywords: 'gym website, γυμναστήριο ιστοσελίδα, fitness',
      },
    },
  ],
};

// Image Gallery Schema
const imageGalleryJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  name: 'Digital Footprint Portfolio Gallery',
  description: 'Συλλογή screenshots από τα web development projects μας',
  url: `${BASE_URL}/work`,
  creator: {
    '@type': 'Organization',
    name: 'Digital Footprint',
  },
  about: {
    '@type': 'Thing',
    name: 'Web Design & Development',
  },
};

// FAQ Schema for Portfolio Page
const portfolioFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Μπορώ να δω live demos των έργων σας;',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ναι! Τα περισσότερα projects στο portfolio μας έχουν live demo links. Κάντε κλικ σε οποιοδήποτε project για να δείτε το live site ή το interactive demo.',
      },
    },
    {
      '@type': 'Question',
      name: 'Πόσα projects έχετε ολοκληρώσει;',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Έχουμε ολοκληρώσει πάνω από 50 projects από το 2021, συμπεριλαμβανομένων εταιρικών ιστοσελίδων, e-shops, web applications και custom platforms για πελάτες σε Ελλάδα και εξωτερικό.',
      },
    },
    {
      '@type': 'Question',
      name: 'Σε ποιους κλάδους έχετε εμπειρία;',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Έχουμε εμπειρία σε πολλούς κλάδους: e-commerce/retail, εστίαση, real estate, κατασκευές, fitness, ψυχαγωγία, επαγγελματικές υπηρεσίες, startups και πολλά άλλα.',
      },
    },
    {
      '@type': 'Question',
      name: 'Μπορείτε να φτιάξετε κάτι παρόμοιο για εμένα;',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Απολύτως! Κάθε project είναι custom-made για τις ανάγκες του πελάτη. Επικοινωνήστε μαζί μας για να συζητήσουμε το δικό σας project και να σας δώσουμε δωρεάν προσφορά.',
      },
    },
  ],
};

// ===========================================
// PORTFOLIO PAGE COMPONENT
// ===========================================
export default function WorkPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioItemsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGalleryJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioFaqJsonLd) }}
      />
      
      {/* ============================================= */}
      {/* PAGE CONTENT */}
      {/* ============================================= */}
      <ClientWork />
    </>
  );
}