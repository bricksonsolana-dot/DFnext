// app/(main)/work/page.js — Server Component (metadata only, renders client component)

export const metadata = {
  title: 'Our Work',
  description:
    'Browse our portfolio of web development projects. From e-commerce stores to agency websites, see how Digital Footprint has helped businesses establish their digital presence.',
  alternates: {
    canonical: 'https://digitalfootprint.gr/work',
  },
  openGraph: {
    title: 'Our Work | Digital Footprint',
    description:
      'Portfolio of web development and design projects by Digital Footprint — Athens, Greece.',
    url: 'https://digitalfootprint.gr/work',
    type: 'website',
  },
};

export { default } from './_client';
