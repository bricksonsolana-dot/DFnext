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
      {/* SERVER-RENDERED CONTENT — for Google bots    */}
      {/* ============================================= */}
      <div className="sr-only" aria-hidden="true">

        {/* ── HERO ── */}
        <h1>Ποιοι Είμαστε — Digital Footprint Web Development Studio Αθήνα</h1>
        <p>Who We Are — Digital Footprint Web Development Studio Athens Greece</p>
        <p>Ανεξάρτητο web development studio με έδρα την Αθήνα. Σχεδιάζουμε και αναπτύσσουμε ψηφιακές λύσεις που συνδυάζουν τεχνική αρτιότητα με μετρήσιμα επιχειρηματικά αποτελέσματα.</p>
        <p>Independent web development studio based in Athens. We design and build digital solutions that combine technical excellence with measurable business outcomes.</p>
        <p>Ο μέσος επισκέπτης αποφασίζει σε 3 δευτερόλεπτα. Σχεδιάζουμε για εκείνα τα 3 δευτερόλεπτα, και για κάθε αλληλεπίδραση που ακολουθεί.</p>
        <p>The average visitor decides in 3 seconds. We design for those 3 seconds, and for every interaction that follows.</p>

        {/* ── TECHNOLOGY ── */}
        <h2>Πώς χτίζουμε ιστοσελίδες — Τεχνολογία</h2>
        <h2>How we build websites — Technology</h2>
        <h3>React</h3>
        <p>Component-based αρχιτεκτονική. Modular, επαναχρησιμοποιήσιμη, σχεδιασμένη για κλιμάκωση.</p>
        <p>Component-based architecture. Modular, reusable, built to scale.</p>
        <h3>Next.js</h3>
        <p>Server-side rendering, static generation, άμεση φόρτωση. Απόδοση εκεί που μετράει, κατατάξεις και εμπειρία χρήστη.</p>
        <p>Server-side rendering, static generation, instant page loads. Performance where it matters, rankings and user experience.</p>
        <h3>CMS</h3>
        <p>Χωρίς templates, χωρίς περιορισμούς. Backend σχεδιασμένο γύρω από τις δικές σας ανάγκες διαχείρισης.</p>
        <p>No templates, no restrictions. Backend designed around your content management needs.</p>
        <h3>SEO</h3>
        <p>Structured data, semantic HTML, βελτιστοποιημένα Core Web Vitals. Κάθε project παραδίδεται έτοιμο για την κορυφή των αποτελεσμάτων.</p>
        <p>Structured data, semantic HTML, optimized Core Web Vitals. Every project ships ready to rank.</p>
        <h3>Backend</h3>
        <p>Custom APIs, integrations, business logic, σχεδιασμένα εξ αρχής γύρω από τη δική σας λειτουργική ροή.</p>
        <p>Custom APIs, integrations, business logic, designed from scratch around your workflow.</p>

        {/* ── VALUES ── */}
        <h2>Σε τι πιστεύουμε — Αρχές</h2>
        <h2>What we believe — Principles</h2>
        <h3>Αρτιότητα</h3>
        <p>Κάθε pixel, κάθε γραμμή κώδικα υπηρετεί σκοπό. Δεν παραδίδουμε "αρκετά καλό".</p>
        <h3>Craft</h3>
        <p>Every pixel, every line of code serves a purpose. We don't ship "good enough".</p>
        <h3>Διαφάνεια</h3>
        <p>Λέμε αυτό που χρειάζεται να ακούσετε. Αν κάτι δεν λειτουργεί, θα το επισημάνουμε πριν σας κοστίσει.</p>
        <h3>Transparency</h3>
        <p>We say what needs to be said. If something doesn't work, we'll flag it before it costs you.</p>
        <h3>Αποτέλεσμα</h3>
        <p>Η αισθητική χωρίς απόδοση δεν μας ενδιαφέρει. Η επιτυχία σας είναι το μόνο μέτρο αξιολόγησης.</p>
        <h3>Outcome</h3>
        <p>Design without measurable impact is decorative. We measure our success through yours.</p>
        <h3>Εξέλιξη</h3>
        <p>Η τεχνολογία δεν περιμένει. Ούτε εμείς. Μελετάμε, πειραματιζόμαστε, προσαρμοζόμαστε.</p>
        <h3>Evolution</h3>
        <p>Technology doesn't wait. Neither do we. We study, experiment, adapt.</p>

        {/* ── TEAM ── */}
        <h2>Οι άνθρωποί μας — Ομάδα Web Development</h2>
        <h2>Our people — Web Development Team</h2>
        <h3>Οδυσσέας Στάβερης — Co-Founder, B.Sc. Computer Science</h3>
        <p>Εξειδίκευση σε interactive interfaces, motion design και performance optimization. Πάνω από 3 χρόνια εμπειρίας στο React ecosystem, με εμβάθυνση σε accessibility standards και animation libraries όπως Framer Motion και GSAP.</p>
        <h3>Odysseas Staveris — Co-Founder, B.Sc. Computer Science</h3>
        <p>Specializes in interactive interfaces, motion design, and performance optimization. Over 3 years of experience in the React ecosystem, with deep expertise in accessibility standards and animation libraries such as Framer Motion and GSAP.</p>
        <h3>Γιώργος Σπύρου — Co-Founder, B.Sc. Computer Science</h3>
        <p>Εξειδίκευση σε scalable αρχιτεκτονική, database design και API development για πραγματικές συνθήκες traffic. PostgreSQL, MongoDB, Redis caching, real-time data pipelines, custom RESTful και GraphQL APIs.</p>
        <h3>Giorgos Spyrou — Co-Founder, B.Sc. Computer Science</h3>
        <p>Specializes in scalable architecture, database design, and API development for real-world traffic. PostgreSQL, MongoDB, Redis caching, real-time data pipelines, custom RESTful and GraphQL APIs.</p>

      </div>

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