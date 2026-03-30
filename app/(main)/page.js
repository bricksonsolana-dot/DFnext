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
      {/* SERVER-RENDERED CONTENT — for Google bots    */}
      {/* sr-only = invisible to users, crawlable      */}
      {/* ============================================= */}
      <div className="sr-only" aria-hidden="true">

        {/* ── HERO ── */}
        <h1>Κατασκευή Ιστοσελίδων και E-Shop στην Αθήνα | Digital Footprint</h1>
        <p>Website Development and E-Shop in Athens | Digital Footprint</p>
        <p>Είμαστε web development studio στην Αθήνα. Σχεδιάζουμε και αναπτύσσουμε custom ιστοσελίδες και e-shop που φέρνουν αποτελέσματα, από κατασκευή ιστοσελίδων μέχρι ολοκληρωμένες ψηφιακές λύσεις.</p>
        <p>We are a custom web development studio based in Athens, Greece. We design and build websites, e-shops and digital products that drive real results for ambitious brands.</p>

        {/* ── PORTFOLIO ── */}
        <h2>Portfolio Ιστοσελίδων και E-Shop στην Αθήνα</h2>
        <h2>Website and E-Shop Portfolio in Athens</h2>

        {/* ── SERVICES ── */}
        <h2>Υπηρεσίες Web Development και E-Commerce</h2>
        <h2>Web Development and E-Commerce Services</h2>
        <h3>Website Development</h3>
        <p>Κατασκευή ιστοσελίδων με Next.js, WordPress ή custom λύσεις. Κάθε site χτίζεται με focus στο UX, την ταχύτητα και τη σωστή αρχιτεκτονική για μέγιστη απόδοση.</p>
        <p>Custom website development with Next.js, WordPress or bespoke solutions. Every site is built for speed, great UX and solid architecture that scales.</p>
        <h3>E-Commerce Solutions</h3>
        <p>Δημιουργία custom e-shop που πουλάει — με WooCommerce ή tailor-made πλατφόρμα. Αυξάνουμε τις online πωλήσεις σου με σωστό UX και optimized checkout.</p>
        <p>Custom e-shop development that drives online sales — with WooCommerce or a tailor-made platform. Optimized checkout flows and seamless shopping experiences.</p>
        <h3>UI / UX Design</h3>
        <p>Σχεδιασμός ιστοσελίδας με γνώμονα το user experience. Δημιουργούμε interfaces που οι χρήστες αγαπούν να χρησιμοποιούν και που μετατρέπουν επισκέπτες σε πελάτες.</p>
        <p>Website design rooted in user experience research. We create interfaces that users love and that turn visitors into customers.</p>
        <h3>Brand Identity</h3>
        <p>Δημιουργία λογοτύπου, visual identity και brand guidelines που χτίζουν αναγνωρισιμότητα. Κάθε brand element σχεδιάζεται για cohesive παρουσία σε κάθε κανάλι.</p>
        <p>Logo design, visual identity and brand guidelines that build recognition. Every element is crafted for a cohesive presence across all channels.</p>
        <h3>Digital Marketing</h3>
        <p>SEO, Google Ads και social media strategy για measurable αποτελέσματα. Αυξάνουμε την οργανική επισκεψιμότητα και φέρνουμε τους σωστούς πελάτες στο site σου.</p>
        <p>SEO, Google Ads and social media strategy for measurable results. We grow your organic traffic and connect you with the right audience.</p>
        <h3>Ongoing Support</h3>
        <p>Συντήρηση ιστοσελίδας και technical support μετά το launch. Δεν εξαφανιζόμαστε — είμαστε εδώ για updates, ασφάλεια και συνεχή βελτιστοποίηση.</p>
        <p>Website maintenance and technical support after launch. We don't disappear — we're here for updates, security and continuous optimization.</p>

        {/* ── ABOUT TEASER ── */}
        <h2>Το website σου είναι το πιο ισχυρό εργαλείο πωλήσεών σου</h2>
        <h2>Your website is your most powerful sales tool</h2>
        <p>Να λειτουργεί ως το πιο ισχυρό εργαλείο προβολής και πωλήσεων σου 24/7. Εμείς σχεδιάζουμε και αναπτύσσουμε ιστοσελίδες που μεταφέρουν άψογα την αξία της επιχείρησής σου, φέρνουν νέους πελάτες και ξεχωρίζουν από τον ανταγωνισμό.</p>
        <p>It must serve as your most effective showcase and sales tool working for you 24/7. We design and build websites that perfectly communicate your value, attract the right clients, and set you apart from the competition.</p>

        {/* ── PROCESS ── */}
        <h2>Πώς φτιάχνουμε την ιστοσελίδα σου</h2>
        <h2>How we build your website</h2>
        <h3>Discovery — Κατανόηση project</h3>
        <p>Κατανοούμε το project, τους στόχους και το κοινό σας. Αναλύουμε τον ανταγωνισμό και εντοπίζουμε ευκαιρίες ανάπτυξης.</p>
        <p>Understanding the project, goals and target audience. We analyse your competition and identify growth opportunities.</p>
        <h3>Strategy — Στρατηγική</h3>
        <p>Σχεδιάζουμε τη στρατηγική, την αρχιτεκτονική και το content plan. Κάθε απόφαση βασίζεται σε data και τους επιχειρηματικούς σας στόχους.</p>
        <p>Planning the strategy, architecture and content roadmap. Every decision is informed by data and your business objectives.</p>
        <h3>Design — Σχεδιασμός</h3>
        <p>Δημιουργούμε wireframes, visual identity και interactive mockups. Σχεδιάζουμε με γνώμονα τη χρηστικότητα και την αισθητική.</p>
        <p>Creating wireframes, visual identity and interactive mockups. We design for both usability and aesthetics.</p>
        <h3>Develop — Ανάπτυξη</h3>
        <p>Χτίζουμε με clean code, σύγχρονες τεχνολογίες και SEO best practices. Κάθε σελίδα είναι responsive και optimized για ταχύτητα.</p>
        <p>Building with clean code, modern technologies and SEO best practices. Every page is responsive and optimised for speed.</p>
        <h3>Launch — Παράδοση</h3>
        <p>Testing, performance optimization και go live. Παρακολουθούμε τα analytics και κάνουμε fine-tuning για τα καλύτερα αποτελέσματα.</p>
        <p>Testing, performance optimisation and going live. We monitor analytics and fine-tune for the best possible results.</p>

        {/* ── TESTIMONIALS ── */}
        <h2>Κριτικές πελατών για τη συνεργασία μας</h2>
        <h2>Client Reviews on Website Development</h2>
        <p>Κατάλαβαν ακριβώς τι χρειαζόμουν πριν προλάβω να το διατυπώσω. Το τελικό αποτέλεσμα ήταν σαν να το έβγαλαν από το μυαλό μου — μόνο που ήταν καλύτερο.</p>
        <p>Είχα δουλέψει με τρία διαφορετικά γραφεία πριν και ειλικρινά ήμουν σκεπτική. Αυτοί με έκαναν να αλλάξω γνώμη. Πραγματικά ακούνε, και φαίνεται στη δουλειά τους.</p>
        <p>Αυτό που ξεχώρισε ήταν η ειλικρίνειά τους. Μου είπαν τι δεν χρειαζόμουν αντί να προσπαθήσουν να μου πουλήσουν παραπάνω.</p>
        <p>They understood exactly what I needed before I could even articulate it. The final result felt like it was pulled straight from my head — only better.</p>
        <p>What stood out was their honesty. They told me what I didn't need instead of trying to upsell me. That kind of integrity earned my trust.</p>

        {/* ── CTA ── */}
        <h2>Έτοιμοι να φτιάξουμε κάτι μαζί;</h2>
        <h2>Ready to build something together?</h2>
        <p>Πες μας για το project σου. Απαντάμε εντός 24 ωρών.</p>
        <p>Tell us about your project. We respond within 24 hours.</p>

      </div>

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