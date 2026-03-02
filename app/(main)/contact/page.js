// app/(main)/contact/page.js — Server Component (metadata + BreadcrumbList JSON-LD)
import ClientContact from './_client';

export const metadata = {
  title: 'Επικοινωνία | Digital Footprint — Κατασκευή Ιστοσελίδων Αθήνα',
  description:
    'Επικοινωνήστε μαζί μας για την κατασκευή της ιστοσελίδας σας. Τηλ: +30 6947920875. Αθήνα, Ελλάδα. Απαντάμε εντός 24 ωρών.',
  keywords:
    'web developer αθήνα, κατασκευή ιστοσελίδων αθήνα επικοινωνία, web studio αθήνα τηλέφωνο, digital footprint αθήνα',
  alternates: {
    canonical: 'https://www.digitalfootprint.gr/contact',
  },
  openGraph: {
    title: 'Επικοινωνία | Digital Footprint — Κατασκευή Ιστοσελίδων Αθήνα',
    description:
      'Επικοινωνήστε μαζί μας για την κατασκευή της ιστοσελίδας σας. Αθήνα, Ελλάδα. Απαντάμε εντός 24 ωρών.',
    url: 'https://www.digitalfootprint.gr/contact',
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
    title: 'Επικοινωνία | Digital Footprint — Κατασκευή Ιστοσελίδων Αθήνα',
    description:
      'Τηλ: +30 6947920875. Αθήνα, Ελλάδα. Απαντάμε εντός 24 ωρών.',
    images: ['https://www.digitalfootprint.gr/images/ogpicture.png'],
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Αρχική', item: 'https://www.digitalfootprint.gr' },
    { '@type': 'ListItem', position: 2, name: 'Επικοινωνία', item: 'https://www.digitalfootprint.gr/contact' },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ClientContact />
    </>
  );
}