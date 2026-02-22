// components/navigation.js
'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';
import { useTranslation } from './language-provider';
import { useTheme } from 'next-themes';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [phase, setPhase] = useState('visible');
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const { lang, toggleLang, t } = useTranslation();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const handleLangSwap = () => {
    if (phase !== 'visible') return;

    setPhase('fading');

    setTimeout(() => {
      setPhase('hidden');
      toggleLang();

      setTimeout(() => {
        setPhase('building');

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

  const getItemStyle = (index) => {
    const fadeDelay = index * 40;
    const buildDelay = index * 80;

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

  const getLogoStyle = (delayOffset = 0) => {
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
          transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delayOffset}ms`,
        };
      default:
        return { opacity: 1 };
    }
  };

  const getRightStyle = (index) => {
    const fadeDelay = index * 60;
    const buildDelay = 300 + index * 100;

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

  const getDividerStyle = () => {
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
  };

  // Theme-aware check
  const isLight = mounted && theme === 'light';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] px-4 md:px-8 py-4 transition-all duration-300 ${
          isScrolled 
            ? isLight 
              ? 'bg-background/90 backdrop-blur-xl border-b border-border' 
              : 'bg-background/80 backdrop-blur-xl border-b border-border'
            : 'bg-transparent'
        }`}
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
            <span 
              className="font-heading font-bold text-2xl text-accent" 
              style={getLogoStyle(0)}
            >
              [DF]
            </span>
            <span
              className="hidden md:inline font-heading font-medium text-foreground"
              style={getLogoStyle(100)}
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
                className="relative group font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-cursor="hover"
              >
                <span
                  className="inline-block"
                  style={getItemStyle(index)}
                >
                  {link.name}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Right Side - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-3 border border-border text-muted-foreground hover:text-foreground hover:border-accent transition-colors duration-300"
                data-cursor="hover"
                aria-label="Toggle theme"
              >
                <span className="inline-block" style={getRightStyle(0)}>
                  {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                </span>
              </button>
            )}

            {/* Language Toggle */}
            <button
              onClick={handleLangSwap}
              disabled={phase !== 'visible'}
              className="px-4 py-3 border border-border text-sm font-mono text-muted-foreground hover:text-foreground hover:border-accent transition-colors duration-300 min-w-14 text-center disabled:pointer-events-none"
              data-cursor="hover"
              data-testid="language-toggle"
            >
              <span className="inline-block" style={getRightStyle(1)}>
                {lang === 'el' ? 'EN' : 'GR'}
              </span>
            </button>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="flex items-center gap-2 px-6 py-3 border border-border text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors duration-300"
              data-cursor="hover"
              data-testid="nav-cta-button"
            >
              <span className="inline-block whitespace-nowrap" style={getRightStyle(2)}>
                {t('nav.cta')}
              </span>
              <span style={getRightStyle(3)}>
                <ArrowRight size={16} />
              </span>
            </Link>
          </div>

          {/* Mobile */}
          <div className="lg:hidden flex items-center gap-3">
            {/* Theme Toggle - Mobile */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 border border-border text-muted-foreground hover:text-foreground transition-colors"
                data-cursor="hover"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}

            {/* Language Toggle - Mobile */}
            <button
              onClick={handleLangSwap}
              disabled={phase !== 'visible'}
              className="px-3 py-2 border border-border text-xs font-mono text-muted-foreground hover:text-foreground transition-colors min-w-10 text-center disabled:pointer-events-none"
              data-cursor="hover"
            >
              <span className="inline-block" style={getRightStyle(0)}>
                {lang === 'el' ? 'EN' : 'GR'}
              </span>
            </button>

            {/* Menu Toggle */}
            <button
              className="p-2 text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              data-cursor="hover"
              data-testid="mobile-menu-toggle"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[99] bg-background flex flex-col items-center justify-center lg:hidden"
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
                    className="font-heading text-3xl text-foreground hover:text-accent transition-colors"
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
                  className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-semibold"
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