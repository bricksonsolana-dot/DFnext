// app/(main)/estimator/page.js — Server Component (metadata only, renders client component)

export const metadata = {
  title: 'Project Estimator',
  description:
    'Get an instant price estimate for your web project. Use our interactive estimator to configure your website type, features, and timeline — tailored to your budget.',
  alternates: {
    canonical: 'https://digitalfootprint.gr/estimator',
  },
  openGraph: {
    title: 'Project Estimator | Digital Footprint',
    description:
      'Instantly estimate the cost of your web project with our interactive pricing tool.',
    url: 'https://digitalfootprint.gr/estimator',
    type: 'website',
  },
};

export { default } from './_client';
