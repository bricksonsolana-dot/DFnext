// app/(main)/work/page.js — Server Component (metadata + BreadcrumbList JSON-LD)
import ClientWork from './_client';

export const metadata = {
  title: 'Portfolio — Έργα Κατασκευής Ιστοσελίδων | Digital Footprint',
  description:
    'Δείτε τα projects μας: e-shop, εταιρικές ιστοσελίδες, brand identity & web apps. 50+ ολοκληρωμένα projects σε Ελλάδα και εξωτερικό.',
  alternates: {
    canonical: 'https://digitalfootprint.gr/work',
  },
  openGraph: {
    title: 'Portfolio — Έργα Κατασκευής Ιστοσελίδων | Digital Footprint',
    description:
      'Δείτε τα projects μας: e-shop, εταιρικές ιστοσελίδες, brand identity & web apps. 50+ ολοκληρωμένα projects σε Ελλάδα και εξωτερικό.',
    url: 'https://digitalfootprint.gr/work',
    type: 'website',
  },
  twitter: {
    title: 'Portfolio — Έργα Κατασκευής Ιστοσελίδων | Digital Footprint',
    description:
      'Δείτε τα projects μας: e-shop, εταιρικές ιστοσελίδες, brand identity & web apps. 50+ projects.',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Αρχική', item: 'https://digitalfootprint.gr' },
    { '@type': 'ListItem', position: 2, name: 'Έργα μας', item: 'https://digitalfootprint.gr/work' },
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
