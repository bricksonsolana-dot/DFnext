import Link from 'next/link';

export const metadata = {
  title: '404 — Σελίδα δεν βρέθηκε | Page Not Found',
  description: 'Η σελίδα που ψάχνεις δεν υπάρχει. The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-6 text-center">
      {/* 404 number */}
      <p className="font-mono text-xs text-ag-accent tracking-[0.3em] uppercase mb-8">
        404 — Error
      </p>

      {/* Bilingual title */}
      <h1 className="font-heading text-5xl md:text-7xl text-foreground mb-3 leading-tight">
        Σελίδα δεν βρέθηκε
      </h1>
      <p className="font-mono text-sm text-ag-muted mb-8 tracking-wider">
        Page Not Found
      </p>

      {/* Divider */}
      <div className="w-12 h-[1px] bg-ag-border mb-8" />

      {/* Subtitle */}
      <p className="font-body text-ag-body max-w-sm mb-2 leading-relaxed">
        Η σελίδα που ψάχνεις δεν υπάρχει ή μετακινήθηκε.
      </p>
      <p className="font-body text-ag-muted text-sm max-w-sm mb-12 leading-relaxed">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-ag-accent text-background font-mono text-xs tracking-widest uppercase px-8 py-4 hover:opacity-90 transition-opacity duration-300"
        >
          ← Αρχική / Home
        </Link>
        <Link
          href="/services"
          className="inline-flex items-center gap-2 border border-ag-border text-foreground font-mono text-xs tracking-widest uppercase px-8 py-4 hover:border-ag-accent hover:text-ag-accent transition-colors duration-300"
        >
          Υπηρεσίες / Services
        </Link>
      </div>
    </main>
  );
}
