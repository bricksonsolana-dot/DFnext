import TermsClient from './_client';

const BASE_URL = 'https://www.digitalfootprint.gr';

export const metadata = {
  title: 'Όροι Χρήσης | Terms of Service',
  description:
    'Όροι χρήσης και παροχής υπηρεσιών της Digital Footprint. Διαβάστε τους όρους που διέπουν τη συνεργασία μας.',
  alternates: {
    canonical: `${BASE_URL}/terms`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return <TermsClient />;
}
