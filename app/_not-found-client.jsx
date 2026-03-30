'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { LanguageProvider, useTranslation } from '@/components/language-provider';
import CustomCursor from '@/components/custom-cursor';

function NotFoundContent() {
  const { lang, toggleLang } = useTranslation();

  const text = {
    el: {
      label: '— Σφάλμα 404',
      subtitle: 'Η σελίδα που ψάχνεις δεν υπάρχει ή μετακινήθηκε.',
      cta: 'Επιστροφή στην αρχική',
      ctaSecondary: 'Δες τις υπηρεσίες',
    },
    en: {
      label: '— Error 404',
      subtitle: "The page you're looking for doesn't exist or has been moved.",
      cta: 'Back to home',
      ctaSecondary: 'View our services',
    },
  };

  const c = text[lang] ?? text.el;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">

      {/* Minimal nav header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex items-center justify-between">
        <Link href="/" data-cursor="hover">
          <span className="font-logo-original font-bold text-2xl text-ag-accent">[DF]</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/"
            data-cursor="hover"
            className="font-mono text-xs text-ag-muted hover:text-foreground transition-colors duration-300 tracking-wider hidden md:block"
          >
            {lang === 'el' ? 'Αρχική' : 'Home'}
          </Link>
          <Link
            href="/services"
            data-cursor="hover"
            className="font-mono text-xs text-ag-muted hover:text-foreground transition-colors duration-300 tracking-wider hidden md:block"
          >
            {lang === 'el' ? 'Υπηρεσίες' : 'Services'}
          </Link>
          <Link
            href="/contact"
            data-cursor="hover"
            className="font-mono text-xs text-ag-muted hover:text-foreground transition-colors duration-300 tracking-wider hidden md:block"
          >
            {lang === 'el' ? 'Επικοινωνία' : 'Contact'}
          </Link>
          <button
            onClick={toggleLang}
            data-cursor="hover"
            className="font-mono text-xs text-ag-muted hover:text-ag-accent transition-colors duration-300 tracking-wider border border-ag-border px-3 py-2 hover:border-ag-accent"
          >
            {lang === 'el' ? 'EN' : 'EL'}
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">

        {/* Ghost background text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
          <span className="font-heading font-bold leading-none text-foreground/[0.03]" style={{ fontSize: '30vw' }}>
            404
          </span>
        </div>

        <div className="relative z-10 max-w-xl">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-xs text-ag-accent tracking-[0.25em] uppercase mb-8"
          >
            {c.label}
          </motion.p>

          {/* Big 404 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-7xl md:text-9xl text-foreground leading-none mb-6"
          >
            404
          </motion.h1>

          {/* Accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-12 h-[1px] bg-ag-accent mx-auto mb-8 origin-left"
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="font-body text-ag-body text-lg leading-relaxed mb-12"
          >
            {c.subtitle}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/"
              data-cursor="hover"
              className="inline-flex items-center gap-3 bg-ag-accent text-background font-mono text-xs tracking-widest uppercase px-10 py-4 hover:opacity-90 transition-opacity duration-300"
            >
              ← {c.cta}
            </Link>
            <Link
              href="/services"
              data-cursor="hover"
              className="inline-flex items-center gap-3 border border-ag-border text-foreground font-mono text-xs tracking-widest uppercase px-10 py-4 hover:border-ag-accent hover:text-ag-accent transition-colors duration-300"
            >
              {c.ctaSecondary}
            </Link>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

export default function NotFoundClient() {
  return (
    <LanguageProvider>
      <CustomCursor />
      <NotFoundContent />
    </LanguageProvider>
  );
}
