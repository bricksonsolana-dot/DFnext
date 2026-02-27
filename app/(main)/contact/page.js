// app/(main)/contact/page.js — Server Component (metadata + BreadcrumbList JSON-LD)
import ClientContact from './_client';

export const metadata = {
  title: 'Επικοινωνία | Digital Footprint — Κατασκευή Ιστοσελίδων Αθήνα',
  description:
    'Επικοινωνήστε μαζί μας για την κατασκευή της ιστοσελίδας σας. Τηλ: +30 6947920875. Αθήνα, Ελλάδα. Απαντάμε εντός 24 ωρών.',
  keywords:
    'web developer αθήνα, κατασκευή ιστοσελίδων αθήνα επικοινωνία, web studio αθήνα τηλέφωνο, digital footprint αθήνα',
  alternates: {
    canonical: 'https://digitalfootprint.gr/contact',
  },
  openGraph: {
    title: 'Επικοινωνία | Digital Footprint — Κατασκευή Ιστοσελίδων Αθήνα',
    description:
      'Επικοινωνήστε μαζί μας για την κατασκευή της ιστοσελίδας σας. Αθήνα, Ελλάδα. Απαντάμε εντός 24 ωρών.',
    url: 'https://digitalfootprint.gr/contact',
    type: 'website',
  },
  twitter: {
    title: 'Επικοινωνία | Digital Footprint — Κατασκευή Ιστοσελίδων Αθήνα',
    description:
      'Τηλ: +30 6947920875. Αθήνα, Ελλάδα. Απαντάμε εντός 24 ωρών.',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Αρχική', item: 'https://digitalfootprint.gr' },
    { '@type': 'ListItem', position: 2, name: 'Επικοινωνία', item: 'https://digitalfootprint.gr/contact' },
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
