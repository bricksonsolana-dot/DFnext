// app/(main)/page.js — Server Component (metadata only, renders client component)

export const metadata = {
  title: 'Digital Footprint - Web Development & Design Studio | Athens, Greece',
  description:
    'Premium web development & design studio based in Athens, Greece. We build fast, modern websites and web applications that help your business grow.',
  alternates: {
    canonical: 'https://digitalfootprint.gr',
  },
  openGraph: {
    title: 'Digital Footprint - Web Development & Design Studio | Athens, Greece',
    description:
      'Premium web development & design studio based in Athens, Greece. We build fast, modern websites and web applications that help your business grow.',
    url: 'https://digitalfootprint.gr',
    type: 'website',
  },
};

export { default } from './_client';
