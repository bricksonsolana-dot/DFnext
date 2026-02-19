'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useTranslation } from './language-provider';

function NavLink({ href, label }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link href={href} className="relative py-2" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <span className={`text-sm font-body transition-colors duration-300 ${isHovered ? 'text-white' : 'text-ag-body'}`}>{label}</span>
      <motion.div className="absolute bottom-0 left-0 right-0 h-[1px] bg-ag-accent origin-left" initial={{ scaleX: 0 }} animate={{ scaleX: isHovered ? 1 : 0 }} transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }} />
    </Link>
  );
}

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { lang, toggleLang, t } = useTranslation();

  const navLinks = [
    { href: '/work', label: t('nav.work') },
    { href: '/about', label: t('nav.about') },
    { href: '/services', label: t('nav.services') },
    { href: '/contact', label: t('nav.contact') },
  ];

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav className="fixed top-0 left-0 right-0 z-[100] px-6 lg:px-12" initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
        <motion.div
          className="absolute inset-0"
          animate={{ backgroundColor: hasScrolled ? 'rgba(10, 10, 10, 0.85)' : 'rgba(10, 10, 10, 0)', backdropFilter: hasScrolled ? 'blur(20px)' : 'blur(0px)' }}
          transition={{ duration: 0.3 }}
          style={{ WebkitBackdropFilter: hasScrolled ? 'blur(20px)' : 'blur(0px)' }}
        />
        <div className="relative flex items-center justify-between h-20 max-w-[1400px] mx-auto">
          <Link href="/" className="relative z-10">
            <span className="font-heading font-bold text-xl text-ag-accent">df<span className="text-ag-accent">.</span></span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => <NavLink key={link.href} href={link.href} label={link.label} />)}
          </div>

          <div className="hidden md:flex items-center gap-4 relative z-10">
            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className="px-3 py-1.5 text-xs font-mono border border-ag-border rounded-full text-ag-body hover:text-white hover:border-ag-body transition-all duration-300"
            >
              {lang === 'el' ? 'EN' : 'GR'}
            </button>
            <Link href="/contact">
              <motion.span className="inline-block px-6 py-3 text-sm font-body font-medium border border-ag-border rounded-full transition-all duration-300 hover:bg-ag-accent hover:text-[#0A0A0A] hover:border-transparent" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                {t('nav.cta')}
              </motion.span>
            </Link>
          </div>

          <div className="flex md:hidden items-center gap-3 relative z-10">
            <button onClick={toggleLang} className="px-2 py-1 text-xs font-mono text-ag-body border border-ag-border rounded">
              {lang === 'el' ? 'EN' : 'GR'}
            </button>
            <button className="p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu">
              <div className="flex flex-col gap-1.5">
                <motion.div className="w-6 h-[1.5px] bg-white origin-center" animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 6 : 0 }} />
                <motion.div className="w-6 h-[1.5px] bg-white" animate={{ opacity: isMenuOpen ? 0 : 1 }} />
                <motion.div className="w-6 h-[1.5px] bg-white origin-center" animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -6 : 0 }} />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div className="fixed inset-0 z-[99] bg-[#0A0A0A] flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div key={link.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ delay: i * 0.1 }}>
                  <Link href={link.href} className="text-4xl font-heading font-medium text-white hover:text-ag-accent transition-colors" onClick={() => setIsMenuOpen(false)}>{link.label}</Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <Link href="/contact" className="mt-4 inline-block px-8 py-4 bg-ag-accent text-[#0A0A0A] font-heading font-medium rounded-full" onClick={() => setIsMenuOpen(false)}>{t('nav.cta')}</Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
