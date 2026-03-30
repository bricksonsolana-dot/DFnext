'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useTranslation } from './language-provider';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const consent = localStorage.getItem('df-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('df-cookie-consent', 'accepted');
    window.dispatchEvent(new Event('df-cookie-accepted'));
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Dimmed overlay — covers page content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-background/60 backdrop-blur-sm z-40"
          />

          {/* Banner — full width, bottom */}
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-ag-accent/40"
          >
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              {/* Left — text */}
              <div className="flex-1">
                <p className="font-heading text-lg text-foreground mb-1">
                  {t('cookies.title')}
                </p>
                <p className="font-body text-sm text-ag-body leading-relaxed max-w-2xl">
                  {t('cookies.description')}{' '}
                  <Link
                    href="/privacy"
                    className="text-ag-accent underline underline-offset-2 hover:opacity-70 transition-opacity"
                    onClick={handleAccept}
                  >
                    {t('cookies.learnMore')}
                  </Link>
                </p>
              </div>

              {/* Right — single accept button */}
              <div className="flex-shrink-0">
                <button
                  onClick={handleAccept}
                  className="bg-ag-accent text-background font-mono text-xs tracking-widest uppercase px-10 py-4 hover:opacity-90 transition-opacity duration-300 whitespace-nowrap"
                >
                  {t('cookies.accept')}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
