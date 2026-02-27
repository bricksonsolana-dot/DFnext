// app/(main)/services/page.js — Server Component (metadata only, renders client component)

export const metadata = {
  title: 'Services',
  description:
    'Explore our web development, UI/UX design, e-commerce, and SEO services. Digital Footprint builds high-performance websites tailored to your business goals.',
  alternates: {
    canonical: 'https://digitalfootprint.gr/services',
  },
  openGraph: {
    title: 'Services | Digital Footprint',
    description:
      'Web development, UI/UX design, e-commerce, and SEO services by Digital Footprint — Athens, Greece.',
    url: 'https://digitalfootprint.gr/services',
    type: 'website',
  },
};

export { default } from './_client';
