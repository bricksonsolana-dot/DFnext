// app/(main)/services/page.js — Server Component (metadata + BreadcrumbList JSON-LD)
import ClientServices from './_client';

export const metadata = {
  title: 'Υπηρεσίες Κατασκευής Ιστοσελίδων | Digital Footprint Αθήνα',
  description:
    'Web development, e-commerce, UI/UX design & SEO στην Αθήνα. Κατασκευή ιστοσελίδας, responsive design, βελτιστοποίηση για Google. Ζητήστε προσφορά.',
  keywords:
    'κατασκευή ιστοσελίδας, e-commerce ελλάδα, ux design αθήνα, seo ιστοσελίδα, web agency αθήνα, κατασκευή e-shop αθήνα, κατασκευή eshop',
  alternates: {
    canonical: 'https://digitalfootprint.gr/services',
  },
  openGraph: {
    title: 'Υπηρεσίες Κατασκευής Ιστοσελίδων | Digital Footprint Αθήνα',
    description:
      'Web development, e-commerce, UI/UX design & SEO στην Αθήνα. Κατασκευή ιστοσελίδας, responsive design, βελτιστοποίηση για Google.',
    url: 'https://digitalfootprint.gr/services',
    type: 'website',
  },
  twitter: {
    title: 'Υπηρεσίες Κατασκευής Ιστοσελίδων | Digital Footprint Αθήνα',
    description:
      'Web development, e-commerce, UI/UX design & SEO στην Αθήνα. Ζητήστε προσφορά.',
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Αρχική', item: 'https://digitalfootprint.gr' },
    { '@type': 'ListItem', position: 2, name: 'Υπηρεσίες', item: 'https://digitalfootprint.gr/services' },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ClientServices />
    </>
  );
}
