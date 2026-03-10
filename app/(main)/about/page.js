// app/(main)/about/page.js — About Page (Full SEO Optimized)

import ClientAbout from './_client';

// ===========================================
// BASE URL
// ===========================================
const BASE_URL = 'https://www.digitalfootprint.gr';

// ===========================================
// METADATA (FULLY OPTIMIZED FOR SEO)
// ===========================================
export const metadata = {
  // ✅ TITLE - About + Brand + Location + USP
  title: 'Σχετικά με εμάς | Digital Footprint - Web Development Studio Αθήνα',
  
  // ✅ DESCRIPTION - Who we are + Experience + Values + CTA
  description:
    'Γνωρίστε την ομάδα του Digital Footprint. Premium web development studio στην Αθήνα με 4 χρόνια εμπειρίας, 50+ completed projects. Εστίαση στην ποιότητα, τα αποτελέσματα και τη μακροχρόνια συνεργασία.',
  
  // ✅ KEYWORDS - About-specific
  keywords: [
    // Brand keywords
    'digital footprint αθήνα',
    'σχετικά με digital footprint',
    'ομάδα digital footprint',
    
    // Company type keywords
    'web agency αθήνα',
    'web development studio',
    'web design team',
    'κατασκευή ιστοσελίδων ομάδα',
    
    // Values keywords
    'επαγγελματική ομάδα web design',
    'experienced web developers',
    'web development company greece',
    
    // Location
    'web studio αθήνα',
    'digital agency αθήνα',
  ].join(', '),
  
  // ✅ AUTHORS
  authors: [{ name: 'Digital Footprint', url: BASE_URL }],
  creator: 'Digital Footprint',
  publisher: 'Digital Footprint',
  
  // ✅ CANONICAL URL
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
  
  // ✅ OPEN GRAPH
  openGraph: {
    title: 'Σχετικά με το Digital Footprint | Web Development Studio Αθήνα',
    description:
      'Premium web development studio με 4 χρόνια εμπειρίας, 50+ projects. Εστίαση στην ποιότητα και τα αποτελέσματα.',
    url: `${BASE_URL}/about`,
    siteName: 'Digital Footprint',
    locale: 'el_GR',
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/images/ogpicture.png`,
        secureUrl: `${BASE_URL}/images/ogpicture.png`,
        width: 1200,
        height: 630,
        alt: 'Digital Footprint Team - Web Development Studio Αθήνα',
        type: 'image/png',
      },
    ],
  },
  
  // ✅ TWITTER CARD
  twitter: {
    card: 'summary_large_image',
    site: '@digitalfootprint',
    creator: '@digitalfootprint',
    title: 'About Digital Footprint | Web Development Studio',
    description:
      '4 χρόνια εμπειρίας, 50+ projects, εστίαση στην ποιότητα.',
    images: {
      url: `${BASE_URL}/images/ogpicture.png`,
      alt: 'Digital Footprint Team',
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
// STRUCTURED DATA: ABOUT PAGE
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
      name: 'Σχετικά με εμάς',
      item: `${BASE_URL}/about`,
    },
  ],
};

// About Page Schema
const aboutPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': `${BASE_URL}/about/#about-page`,
  url: `${BASE_URL}/about`,
  name: 'Σχετικά με το Digital Footprint',
  description: 'Η ιστορία, η ομάδα και οι αξίες του Digital Footprint',
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

// Organization Detailed Schema (For About Page)
const organizationDetailedJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  name: 'Digital Footprint',
  alternateName: 'Digital Footprint Web Studio',
  description: 'Premium web development & design studio βασισμένο στην Αθήνα, Ελλάδα. Εξειδικευόμαστε σε κατασκευή ιστοσελίδων, e-shop και web applications.',
  url: BASE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/icon.png`,
    width: 512,
    height: 512,
  },
  image: `${BASE_URL}/images/ogpicture.png`,
  
  // Founding info
  foundingDate: '2021',
  foundingLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Αθήνα',
      addressCountry: 'GR',
    },
  },
  
  // Team info
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    value: 5,
    minValue: 3,
    maxValue: 10,
  },
  
  // Expertise
  knowsAbout: [
    'Web Development',
    'Web Design',
    'E-Commerce Development',
    'UI/UX Design',
    'SEO Optimization',
    'Digital Marketing',
    'WordPress Development',
    'React Development',
    'Next.js Development',
    'Responsive Design',
    'Mobile-First Design',
  ],
  
  // Mission
  slogan: 'Premium Web Development Studio',
  
  // Values
  nonprofitStatus: false,
  
  // Awards (Update if you have any)
  // award: [
  //   'Best Web Agency Athens 2024',
  //   'Top Rated Web Developer 2023',
  // ],
  
  // Members/Team (Update with real team members)
  member: [
    {
      '@type': 'Person',
      name: 'Founder Name', // Update with real name
      jobTitle: 'Founder & Lead Developer',
      description: 'Full-stack developer με 6+ χρόνια εμπειρίας',
      // image: `${BASE_URL}/images/team/founder.jpg`,
    },
    // Add more team members
  ],
  
  // Contact
  telephone: '+30-694-792-0875',
  email: 'info@digitalfootprint.gr',
  
  // Location
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Αθήνα',
    addressRegion: 'Αττική',
    addressCountry: 'GR',
  },
  
  // Service area
  areaServed: [
    { '@type': 'City', name: 'Αθήνα' },
    { '@type': 'City', name: 'Θεσσαλονίκη' },
    { '@type': 'Country', name: 'Ελλάδα' },
  ],
  
  // Social
  sameAs: [
    'https://www.facebook.com/digitalfootprintgr',
    'https://www.instagram.com/digitalfootprintgr',
    'https://www.linkedin.com/company/digitalfootprintgr',
  ],
  
  // What we offer
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Development Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Κατασκευή Ιστοσελίδων',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Κατασκευή E-Shop',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'UI/UX Design',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'SEO & Digital Marketing',
        },
      },
    ],
  },
};

// FAQ Schema for About Page
const aboutFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Πότε ιδρύθηκε το Digital Footprint;',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Το Digital Footprint ιδρύθηκε το 2021 στην Αθήνα. Από τότε έχουμε ολοκληρώσει 50+ projects για πελάτες σε Ελλάδα και εξωτερικό.',
      },
    },
    {
      '@type': 'Question',
      name: 'Πού βρίσκεται το γραφείο σας;',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Είμαστε βασισμένοι στην Αθήνα, αλλά δουλεύουμε με πελάτες από όλη την Ελλάδα και το εξωτερικό. Η επικοινωνία γίνεται κυρίως online μέσω video calls, email και chat.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ποια είναι η φιλοσοφία σας;',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Πιστεύουμε στην ποιότητα αντί της ποσότητας. Κάθε project το αντιμετωπίζουμε σαν δικό μας. Εστιάζουμε σε modern technologies, clean code και αποτελέσματα που φέρνουν ROI.',
      },
    },
    {
      '@type': 'Question',
      name: 'Πόσο μεγάλη είναι η ομάδα σας;',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Είμαστε μια boutique web studio με 3-10 άτομα ανάλογα με το project load. Η μικρή μας ομάδα εξασφαλίζει προσωπική προσοχή σε κάθε πελάτη και ταχύτερη επικοινωνία.',
      },
    },
  ],
};

// ===========================================
// ABOUT PAGE COMPONENT
// ===========================================
export default function AboutPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationDetailedJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutFaqJsonLd) }}
      />
      
      {/* ============================================= */}
      {/* PAGE CONTENT */}
      {/* ============================================= */}
      <ClientAbout />
    </>
  );
}