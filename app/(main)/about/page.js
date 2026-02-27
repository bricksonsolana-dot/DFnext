// app/(main)/about/page.js — Server Component (metadata + BreadcrumbList JSON-LD)
import ClientAbout from './_client';

export const metadata = {
  title: 'Ποιοι Είμαστε | Digital Footprint — Web Studio Αθήνα',
  description:
    'Ανεξάρτητο web development studio στην Αθήνα. Σχεδιάζουμε & αναπτύσσουμε ιστοσελίδες που συνδυάζουν τεχνική αρτιότητα με μετρήσιμα επιχειρηματικά αποτελέσματα.',
  alternates: {
    canonical: 'https://digitalfootprint.gr/about',
  },
  openGraph: {
    title: 'Ποιοι Είμαστε | Digital Footprint — Web Studio Αθήνα',
    description:
      'Ανεξάρτητο web development studio στην Αθήνα. Σχεδιάζουμε & αναπτύσσουμε ιστοσελίδες που συνδυάζουν τεχνική αρτιότητα με μετρήσιμα επιχειρηματικά αποτελέσματα.',
    url: 'https://digitalfootprint.gr/about',
    type: 'website',
  },
  twitter: {
    title: 'Ποιοι Είμαστε | Digital Footprint — Web Studio Αθήνα',
    description:
      'Ανεξάρτητο web development studio στην Αθήνα. Σχεδιάζουμε & αναπτύσσουμε ιστοσελίδες με μετρήσιμα αποτελέσματα.',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Αρχική', item: 'https://digitalfootprint.gr' },
    { '@type': 'ListItem', position: 2, name: 'Ποιοι Είμαστε', item: 'https://digitalfootprint.gr/about' },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ClientAbout />
    </>
  );
}
