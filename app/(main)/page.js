// app/(main)/page.js — Server Component (metadata only, renders client component)

export const metadata = {
  title: 'Κατασκευή Ιστοσελίδων Αθήνα | Digital Footprint — Web Development Studio',
  description:
    'Κατασκευή ιστοσελίδων & e-shop στην Αθήνα. Premium web development studio με 50+ projects. Αγοράστε ιστοσελίδα με SEO, responsive design και γρήγορα αποτελέσματα.',
  keywords:
    'κατασκευή ιστοσελίδων, κατασκευή ιστοσελίδων αθήνα, αγορά ιστοσελίδας, web development αθήνα, ιστοσελίδες ελλάδα, web design αθήνα, κατασκευή e-shop, σχεδιασμός ιστοσελίδων',
  alternates: {
    canonical: 'https://digitalfootprint.gr',
  },
  openGraph: {
    title: 'Κατασκευή Ιστοσελίδων Αθήνα | Digital Footprint — Web Development Studio',
    description:
      'Κατασκευή ιστοσελίδων & e-shop στην Αθήνα. Premium web development studio με 50+ projects. Αγοράστε ιστοσελίδα με SEO, responsive design και γρήγορα αποτελέσματα.',
    url: 'https://digitalfootprint.gr',
    type: 'website',
  },
  twitter: {
    title: 'Κατασκευή Ιστοσελίδων Αθήνα | Digital Footprint',
    description:
      'Κατασκευή ιστοσελίδων & e-shop στην Αθήνα. Premium web development studio με 50+ projects.',
  },
};

export { default } from './_client';
