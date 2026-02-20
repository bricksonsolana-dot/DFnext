// components/navigation.js
'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useTranslation } from './language-provider';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [phase, setPhase] = useState('visible'); // 'visible' | 'fading' | 'hidden' | 'building'
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const { lang, toggleLang, t, langKey } = useTranslation();

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

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // ✅ Luxury language swap sequence
  const handleLangSwap = () => {
    if (phase !== 'visible') return; // prevent double-click

    // Phase 1: Fade everything out
    setPhase('fading');

    // Phase 2: Hidden — swap language
    setTimeout(() => {
      setPhase('hidden');
      toggleLang();

      // Phase 3: Rebuild — stagger in
      setTimeout(() => {
        setPhase('building');

        // Phase 4: Fully visible
        setTimeout(() => {
          setPhase('visible');
        }, 800);
      }, 200);
    }, 600);
  };

  const navLinks = [
    { name: t('nav.work'), path: '/work' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.about'), path: '/about' },
    { name: 'Prices', path: '/estimator' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  // ✅ Get element style based on phase with individual delays
  const getItemStyle = (index, total) => {
    const fadeDelay = index * 40; // stagger out
    const buildDelay = index * 80; // stagger in (slower = more luxurious)

    switch (phase) {
      case 'visible':
        return {
          opacity: 1,
          transform: 'translateY(0) scale(1)',
          transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        };
      case 'fading':
        return {
          opacity: 0,
          transform: 'translateY(-8px) scale(0.97)',
          transition: `all 0.5s cubic-bezier(0.55, 0, 1, 0.45) ${fadeDelay}ms`,
        };
      case 'hidden':
        return {
          opacity: 0,
          transform: 'translateY(12px) scale(0.97)',
          transition: 'none',
        };
      case 'building':
        return {
          opacity: 1,
          transform: 'translateY(0) scale(1)',
          transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${buildDelay}ms`,
        };
      default:
        return { opacity: 1 };
    }
  };

  // ✅ Logo style — first to disappear, first to reappear
  const logoStyle = (() => {
    switch (phase) {
      case 'visible':
        return {
          opacity: 1,
          transform: 'translateX(0)',
          transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        };
      case 'fading':
        return {
          opacity: 0,
          transform: 'translateX(-12px)',
          transition: 'all 0.4s cubic-bezier(0.55, 0, 1, 0.45)',
        };
      case 'hidden':
        return {
          opacity: 0,
          transform: 'translateX(-12px)',
          transition: 'none',
        };
      case 'building':
        return {
          opacity: 1,
          transform: 'translateX(0)',
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        };
      default:
        return { opacity: 1 };
    }
  })();

  // ✅ Right side style — buttons fade from right
  const getRightStyle = (index) => {
    const fadeDelay = index * 60;
    const buildDelay = 300 + index * 100; // appear after nav links

    switch (phase) {
      case 'visible':
        return {
          opacity: 1,
          transform: 'translateX(0)',
          transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        };
      case 'fading':
        return {
          opacity: 0,
          transform: 'translateX(12px)',
          transition: `all 0.4s cubic-bezier(0.55, 0, 1, 0.45) ${fadeDelay}ms`,
        };
      case 'hidden':
        return {
          opacity: 0,
          transform: 'translateX(12px)',
          transition: 'none',
        };
      case 'building':
        return {
          opacity: 1,
          transform: 'translateX(0)',
          transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${buildDelay}ms`,
        };
      default:
        return { opacity: 1 };
    }
  };

  // ✅ Divider line style
  const dividerStyle = (() => {
    switch (phase) {
      case 'visible':
        return {
          transform: 'scaleX(1)',
          opacity: isScrolled ? 1 : 0,
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 400ms',
        };
      case 'fading':
        return {
          transform: 'scaleX(0)',
          opacity: 0,
          transition: 'all 0.3s cubic-bezier(0.55, 0, 1, 0.45)',
        };
      case 'hidden':
        return {
          transform: 'scaleX(0)',
          opacity: 0,
          transition: 'none',
        };
      case 'building':
        return {
          transform: isScrolled ? 'scaleX(1)' : 'scaleX(0)',
          opacity: isScrolled ? 1 : 0,
          transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 500ms',
        };
      default:
        return {};
    }
  })();

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
        {/* Bottom border line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px bg-ag-border origin-center"
          style={dividerStyle}
        />

        <div className="max-w-[1800px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2"
            data-cursor="hover"
            data-testid="logo-link"
          >
            <span className="font-heading font-bold text-2xl text-ag-accent" style={logoStyle}>
              [DF]
            </span>
            <span
              className="hidden md:inline font-heading font-medium text-white"
              style={{
                ...logoStyle,
                transitionDelay: phase === 'building' ? '100ms' : '0ms',
              }}
            >
              DigitalFootprint
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={`${link.path}-${index}`}
                href={link.path}
                className="relative group font-body text-sm text-ag-body hover:text-white"
                data-cursor="hover"
              >
                <span
                  className="inline-block"
                  style={getItemStyle(index, navLinks.length)}
                >
                  {link.name}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-ag-accent group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={handleLangSwap}
              disabled={phase !== 'visible'}
              className="px-4 py-3 border border-ag-border text-sm font-mono text-ag-body hover:text-white hover:border-ag-accent transition-colors duration-300 min-w-14 text-center disabled:pointer-events-none"
              data-cursor="hover"
              data-testid="language-toggle"
            >
              <span className="inline-block" style={getRightStyle(0)}>
                {lang === 'el' ? 'EN' : 'GR'}
              </span>
            </button>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="flex items-center gap-2 px-6 py-3 border border-ag-border text-sm font-medium text-white hover:bg-ag-accent hover:text-ag-bg hover:border-ag-accent transition-colors duration-300"
              data-cursor="hover"
              data-testid="nav-cta-button"
            >
              <span className="inline-block whitespace-nowrap" style={getRightStyle(1)}>
                {t('nav.cta')}
              </span>
              <span style={getRightStyle(2)}>
                <ArrowRight size={16} />
              </span>
            </Link>
          </div>

          {/* Mobile */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={handleLangSwap}
              disabled={phase !== 'visible'}
              className="px-3 py-2 border border-ag-border text-xs font-mono text-ag-body hover:text-white transition-colors min-w-10 text-center disabled:pointer-events-none"
              data-cursor="hover"
            >
              <span className="inline-block" style={getRightStyle(0)}>
                {lang === 'el' ? 'EN' : 'GR'}
              </span>
            </button>

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
                  key={`${link.path}-${index}`}
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