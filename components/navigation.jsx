'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useTranslation } from './language-provider';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const { lang, toggleLang, t } = useTranslation();

  const navBg = useTransform(
    scrollY,
    [0, 50],
    ['rgba(10, 10, 10, 0)', 'rgba(10, 10, 10, 0.85)']
  );

  const navBlur = useTransform(
    scrollY,
    [0, 50],
    ['blur(0px)', 'blur(20px)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: t('nav.work'), path: '/work' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.about'), path: '/about' },
    { name: 'Blog', path: '#' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-[100] px-4 md:px-8 py-4"
        style={{
          backgroundColor: navBg,
          backdropFilter: navBlur,
          WebkitBackdropFilter: navBlur,
        }}
        data-testid="main-navigation"
      >
        <div className="max-w-[1800px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2"
            data-cursor="hover"
            data-testid="logo-link"
          >
            <span className="font-heading font-bold text-2xl text-ag-accent">[DF]</span>
            <span className="hidden md:inline font-heading font-medium text-white">DigitalFootprint</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="relative group font-body text-sm text-ag-body hover:text-white transition-colors"
                data-cursor="hover"
                data-testid={`nav-link-${link.name.toLowerCase().replace(/\s/g, '-')}`}
              >
                {link.name}
                <motion.span
                  className="absolute bottom-0 left-0 h-[1px] bg-ag-accent"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  style={{ originX: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
          </div>

          {/* Right Side: Language Toggle + CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Toggle — sharp style matching CTA */}
            <button
              onClick={toggleLang}
              className="px-4 py-3 border border-ag-border text-sm font-mono text-ag-body hover:text-white hover:border-ag-accent transition-all duration-300"
              data-cursor="hover"
              data-testid="language-toggle"
            >
              {lang === 'el' ? 'EN' : 'GR'}
            </button>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="flex items-center gap-2 px-6 py-3 border border-ag-border text-sm font-medium text-white hover:bg-ag-accent hover:text-ag-bg hover:border-ag-accent transition-all duration-300"
              data-cursor="hover"
              data-testid="nav-cta-button"
            >
              {t('nav.cta')}
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Mobile: Language Toggle + Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            {/* Language Toggle — mobile */}
            <button
              onClick={toggleLang}
              className="px-3 py-2 border border-ag-border text-xs font-mono text-ag-body hover:text-white transition-colors"
              data-cursor="hover"
            >
              {lang === 'el' ? 'EN' : 'GR'}
            </button>

            {/* Menu Button */}
            <button
              className="p-2"
              onClick={() => setIsOpen(!isOpen)}
              data-cursor="hover"
              data-testid="mobile-menu-toggle"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[99] bg-ag-bg flex flex-col items-center justify-center lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            data-testid="mobile-menu"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.path}
                    className="font-heading text-3xl text-white hover:text-ag-accent transition-colors"
                    data-cursor="hover"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-ag-accent text-ag-bg font-semibold"
                  data-cursor="hover"
                  onClick={() => setIsOpen(false)}
                >
                  {t('nav.cta')}
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}