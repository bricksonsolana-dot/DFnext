// app/not-found.js — Custom 404 page (Server Component, returns HTTP 404)
import Link from 'next/link';

export const metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-ag-accent text-sm tracking-widest uppercase mb-4">404</p>
      <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">Page Not Found</h1>
      <p className="text-ag-muted max-w-md mb-10 text-base md:text-lg">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-8 py-4 bg-ag-accent text-background font-heading font-semibold rounded-full text-sm hover:opacity-90 transition-opacity"
      >
        Back to Home
      </Link>
    </main>
  );
}
