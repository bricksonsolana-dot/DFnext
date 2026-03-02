// app/(main)/services/page.js — Server Component (metadata + BreadcrumbList JSON-LD)
import ClientServices from './_client';

export const metadata = {
  title: 'Υπηρεσίες Κατασκευής Ιστοσελίδων | Digital Footprint Αθήνα',
  description:
    'Web development, e-commerce, UI/UX design & SEO στην Αθήνα. Κατασκευή ιστοσελίδας, responsive design, βελτιστοποίηση για Google. Ζητήστε προσφορά.',
  keywords:
    'κατασκευή ιστοσελίδας, e-commerce ελλάδα, ux design αθήνα, seo ιστοσελίδα, web agency αθήνα, κατασκευή e-shop αθήνα, κατασκευή eshop',
  alternates: {
    canonical: 'https://www.digitalfootprint.gr/services',
  },
  openGraph: {
    title: 'Υπηρεσίες Κατασκευής Ιστοσελίδων | Digital Footprint Αθήνα',
    description:
      'Web development, e-commerce, UI/UX design & SEO στην Αθήνα. Κατασκευή ιστοσελίδας, responsive design, βελτιστοποίηση για Google.',
    url: 'https://www.digitalfootprint.gr/services',
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
    title: 'Υπηρεσίες Κατασκευής Ιστοσελίδων | Digital Footprint Αθήνα',
    description:
      'Web development, e-commerce, UI/UX design & SEO στην Αθήνα. Ζητήστε προσφορά.',
    images: ['https://www.digitalfootprint.gr/images/ogpicture.png'],
  },
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Αρχική', item: 'https://www.digitalfootprint.gr' },
    { '@type': 'ListItem', position: 2, name: 'Υπηρεσίες', item: 'https://www.digitalfootprint.gr/services' },
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