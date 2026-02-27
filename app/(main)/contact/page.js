// app/(main)/contact/page.js — Server Component (metadata only, renders client component)

export const metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Digital Footprint. Whether you have a project in mind or just want to say hello, we would love to hear from you. Based in Athens, Greece.',
  alternates: {
    canonical: 'https://digitalfootprint.gr/contact',
  },
  openGraph: {
    title: 'Contact Us | Digital Footprint',
    description:
      'Reach out to Digital Footprint for your next web project. Athens-based studio serving clients worldwide.',
    url: 'https://digitalfootprint.gr/contact',
    type: 'website',
  },
};

export { default } from './_client';
