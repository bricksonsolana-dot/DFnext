'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { LanguageProvider } from '@/components/language-provider';
import Navigation from '@/components/navigation';
import CustomCursor from '@/components/custom-cursor';
import { useTranslation } from '@/components/language-provider';

function NotFoundContent() {
  const { lang } = useTranslation();

  const text = {
    el: {
      label: 'Σφάλμα — Σελίδα δεν βρέθηκε',
      subtitle: 'Η σελίδα που ψάχνεις δεν υπάρχει ή μετακινήθηκε.',
      cta: 'Επιστροφή στην αρχική',
      ctaSecondary: 'Δες τις υπηρεσίες',
    },
    en: {
      label: 'Error — Page not found',
      subtitle: "The page you're looking for doesn't exist or has been moved.",
      cta: 'Back to home',
      ctaSecondary: 'View our services',
    },
  };

  const c = text[lang] ?? text.el;

  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center px-6 relative overflow-hidden">

      {/* Large decorative 404 background text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="font-heading font-bold text-[30vw] leading-none text-foreground/[0.03]"
        >
          404
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-xl">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-xs text-ag-accent tracking-[0.25em] uppercase mb-8"
        >
          {c.label}
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-6xl md:text-8xl text-foreground leading-none mb-8"
        >
          404
        </motion.h1>

        {/* Divider */}
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

        {/* CTAs */}
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
  );
}

export default function NotFoundClient() {
  return (
    <LanguageProvider>
      <CustomCursor />
      <Navigation />
      <NotFoundContent />
    </LanguageProvider>
  );
}
