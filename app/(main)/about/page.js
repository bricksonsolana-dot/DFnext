// app/(main)/about/page.js — Server Component (metadata only, renders client component)

export const metadata = {
  title: 'About Us',
  description:
    'Learn about Digital Footprint, a premium web development & design studio in Athens, Greece. Discover our story, values, and the team behind your next digital project.',
  alternates: {
    canonical: 'https://digitalfootprint.gr/about',
  },
  openGraph: {
    title: 'About Us | Digital Footprint',
    description:
      'Learn about Digital Footprint, a premium web development & design studio in Athens, Greece.',
    url: 'https://digitalfootprint.gr/about',
    type: 'website',
  },
};

export { default } from './_client';
