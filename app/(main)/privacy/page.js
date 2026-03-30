import PrivacyClient from './_client';

const BASE_URL = 'https://www.digitalfootprint.gr';

export const metadata = {
  title: 'Πολιτική Απορρήτου | Privacy Policy',
  description:
    'Πολιτική απορρήτου και προστασίας δεδομένων της Digital Footprint. Μάθετε πώς συλλέγουμε και χρησιμοποιούμε τα δεδομένα σας σύμφωνα με τον GDPR.',
  alternates: {
    canonical: `${BASE_URL}/privacy`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return <PrivacyClient />;
}
