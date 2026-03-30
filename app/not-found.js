import NotFoundClient from './_not-found-client';

export const metadata = {
  title: '404 — Σελίδα δεν βρέθηκε | Page Not Found',
  description: 'Η σελίδα που ψάχνεις δεν υπάρχει. The page you are looking for does not exist.',
};

export default function NotFound() {
  return <NotFoundClient />;
}
