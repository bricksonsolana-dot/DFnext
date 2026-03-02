// app/(main)/about/page.js — Server Component (metadata + BreadcrumbList JSON-LD)
import ClientAbout from './_client';

export const metadata = {
  title: 'Ποιοι Είμαστε | Digital Footprint — Web Studio Αθήνα',
  description:
    'Ανεξάρτητο web development studio στην Αθήνα. Σχεδιάζουμε & αναπτύσσουμε ιστοσελίδες που συνδυάζουν τεχνική αρτιότητα με μετρήσιμα επιχειρηματικά αποτελέσματα.',
  alternates: {
    canonical: 'https://www.digitalfootprint.gr/about',
  },
  openGraph: {
    title: 'Ποιοι Είμαστε | Digital Footprint — Web Studio Αθήνα',
    description:
      'Ανεξάρτητο web development studio στην Αθήνα. Σχεδιάζουμε & αναπτύσσουμε ιστοσελίδες που συνδυάζουν τεχνική αρτιότητα με μετρήσιμα επιχειρηματικά αποτελέσματα.',
    url: 'https://www.digitalfootprint.gr/about',
    type: 'website',
    siteName: 'Digital Footprint',
    locale: 'el_GR',
    images: [
      {
        url: 'https://www.digitalfootprint.gr/images/ogpicture.png',
        width: 1200,
        height: 630,
        alt: 'Digital Footprint - Κατασκευή Ιστοσελίδων Αθήνα',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ποιοι Είμαστε | Digital Footprint — Web Studio Αθήνα',
    description:
      'Ανεξάρτητο web development studio στην Αθήνα. Σχεδιάζουμε & αναπτύσσουμε ιστοσελίδες με μετρήσιμα αποτελέσματα.',
    images: ['https://www.digitalfootprint.gr/images/ogpicture.png'],
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Αρχική', item: 'https://www.digitalfootprint.gr' },
    { '@type': 'ListItem', position: 2, name: 'Ποιοι Είμαστε', item: 'https://www.digitalfootprint.gr/about' },
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