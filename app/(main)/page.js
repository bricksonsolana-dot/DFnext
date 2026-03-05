// app/(main)/page.js

export const metadata = {
  title: 'Κατασκευή Ιστοσελίδων Αθήνα | Digital Footprint — Web Development Studio',
  description:
    'Κατασκευή Ιστοσελίδων & E-shop | Digital Footprint',
  keywords:
    'κατασκευή ιστοσελίδων, κατασκευή ιστοσελίδων αθήνα, αγορά ιστοσελίδας, web development αθήνα, ιστοσελίδες ελλάδα, web design αθήνα, κατασκευή e-shop, σχεδιασμός ιστοσελίδων',
  alternates: {
    canonical: 'https://www.digitalfootprint.gr',  // ✅ Add www
  },
  openGraph: {
    title: 'Κατασκευή Ιστοσελίδων Αθήνα | Digital Footprint — Web Development Studio',
    description:
      'Κατασκευή Ιστοσελίδων & E-shop | Digital Footprint',
    url: 'https://www.digitalfootprint.gr',  // ✅ Add www
    type: 'website',
    siteName: 'Digital Footprint',  // ✅ Add this
    locale: 'el_GR',  // ✅ Add this
    // ✅ ADD THE MISSING IMAGES!
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
    card: 'summary_large_image',  // ✅ Add this
    title: 'Κατασκευή Ιστοσελίδων Αθήνα | Digital Footprint',
    description:
      'Κατασκευή ιστοσελίδων & e-shop στην Αθήνα. Premium web development studio με 50+ projects.',
    // ✅ ADD THE MISSING IMAGE!
    images: ['https://www.digitalfootprint.gr/images/ogpicture.png'],
  },
};

export { default } from './_client';