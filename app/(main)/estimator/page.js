// app/(main)/estimator/page.js — Server Component (metadata only, renders client component)

export const metadata = {
  title: 'Κόστος Κατασκευής Ιστοσελίδας | Εκτιμητής Τιμής — Digital Footprint',
  description:
    'Υπολογίστε το κόστος της ιστοσελίδας σας online. One page, εταιρική ιστοσελίδα ή e-shop — λάβετε εκτίμηση τιμής σε 2 λεπτά, χωρίς δέσμευση.',
  alternates: {
    canonical: 'https://digitalfootprint.gr/estimator',
  },
  openGraph: {
    title: 'Κόστος Κατασκευής Ιστοσελίδας | Εκτιμητής Τιμής — Digital Footprint',
    description:
      'Υπολογίστε το κόστος της ιστοσελίδας σας online. One page, εταιρική ιστοσελίδα ή e-shop — λάβετε εκτίμηση τιμής σε 2 λεπτά, χωρίς δέσμευση.',
    url: 'https://digitalfootprint.gr/estimator',
    type: 'website',
  },
  twitter: {
    title: 'Κόστος Κατασκευής Ιστοσελίδας | Εκτιμητής Τιμής — Digital Footprint',
    description:
      'Υπολογίστε το κόστος της ιστοσελίδας σας. One page, εταιρική ή e-shop — εκτίμηση σε 2 λεπτά.',
  },
};

export { default } from './_client';
