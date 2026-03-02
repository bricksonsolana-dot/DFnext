// app/(main)/work/page.js — Server Component (metadata + BreadcrumbList JSON-LD)
import ClientWork from './_client';

export const metadata = {
  title: 'Portfolio — Έργα Κατασκευής Ιστοσελίδων | Digital Footprint',
  description:
    'Δείτε τα projects μας: e-shop, εταιρικές ιστοσελίδες, brand identity & web apps. 50+ ολοκληρωμένα projects σε Ελλάδα και εξωτερικό.',
  alternates: {
    canonical: 'https://www.digitalfootprint.gr/work',
  },
  openGraph: {
    title: 'Portfolio — Έργα Κατασκευής Ιστοσελίδων | Digital Footprint',
    description:
      'Δείτε τα projects μας: e-shop, εταιρικές ιστοσελίδες, brand identity & web apps. 50+ ολοκληρωμένα projects σε Ελλάδα και εξωτερικό.',
    url: 'https://www.digitalfootprint.gr/work',
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
    title: 'Portfolio — Έργα Κατασκευής Ιστοσελίδων | Digital Footprint',
    description:
      'Δείτε τα projects μας: e-shop, εταιρικές ιστοσελίδες, brand identity & web apps. 50+ projects.',
    images: ['https://www.digitalfootprint.gr/images/ogpicture.png'],
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Αρχική', item: 'https://www.digitalfootprint.gr' },
    { '@type': 'ListItem', position: 2, name: 'Έργα μας', item: 'https://www.digitalfootprint.gr/work' },
  ],
};

export default function WorkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ClientWork />
    </>
  );
}