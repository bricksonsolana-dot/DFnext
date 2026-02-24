'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '@/components/language-provider';
import Image from 'next/image';

/* ═══════════════════════════════════════════════════════
   HELPERS — matched to old project's Animations.js
   ═══════════════════════════════════════════════════════ */

function FadeUp({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * AnimatedHeadline — word-by-word with 3D rotateX
 * Matched to old project exactly.
 *
 * @param {Array} lines - [{ text: string, accent?: boolean }]
 */
function AnimatedHeadline({ lines, className = '', delay = 0.3 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  let globalWordIndex = 0;

  return (
    <div ref={ref} className={`perspective-1000 ${className}`}>
      {lines.map((line, lineIndex) => (
        <div key={lineIndex} className="overflow-hidden block">
          {line.text
            .split(' ')
            .filter((w) => w)
            .map((word, wordIndex) => {
              const currentIndex = globalWordIndex++;
              return (
                <motion.span
                  key={wordIndex}
                  className={`inline-block mr-[0.25em] ${
                    line.accent ? 'text-ag-accent italic' : ''
                  }`}
                  initial={{ y: 80, opacity: 0, rotateX: -15 }}
                  animate={
                    isInView
                      ? { y: 0, opacity: 1, rotateX: 0 }
                      : { y: 80, opacity: 0, rotateX: -15 }
                  }
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                    delay: delay + currentIndex * 0.15,
                  }}
                >
                  {word}
                </motion.span>
              );
            })}
        </div>
      ))}
    </div>
  );
}

/**
 * Counter — requestAnimationFrame with easeOut
 * Matched to old project exactly.
 */
function Counter({ from = 0, to, duration = 2, suffix = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    let raf;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(from + (to - from) * easeOut));
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ═══════════════════════════════════════════════════════
   HERO — matched to old project
   - scrollY opacity+y on entire content
   - Noise texture
   - Exact floating rectangle sizes
   - 1+10+1 grid with vertical label + scroll indicator
   - Word-by-word AnimatedHeadline
   - Sharp rectangle CTAs
   ═══════════════════════════════════════════════════════ */

function HeroSection() {
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const y = useTransform(scrollY, [0, 300], [0, 50]);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="hero-section"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Horizontal line */}
        <div className="absolute top-[40%] left-0 right-0 h-[1px] bg-ag-border" />

        {/* Floating rectangles — exact old sizes */}
        <motion.div
          className="absolute top-[20%] right-[15%] w-32 h-48 border border-ag-border/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-[25%] left-[10%] w-24 h-36 border border-ag-border/20"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute top-[60%] right-[25%] w-16 h-24 border border-ag-border/25"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* ── Main Content — fades on scroll ── */}
      <motion.div
        className="relative z-10 max-w-[1800px] w-full mx-auto px-4 md:px-8 pt-24"
        style={{ opacity, y }}
      >
        <div className="grid grid-cols-12 gap-4 items-center min-h-[80vh]">
          {/* LEFT col — Vertical Label */}
          <div className="hidden lg:flex col-span-1 items-center justify-center">
            <span
              className="font-mono text-xs text-ag-muted tracking-[0.15em] whitespace-nowrap"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              {t('hero.verticalLabel')}
            </span>
          </div>

          {/* CENTER col — Content */}
          <div className="col-span-12 lg:col-span-10 space-y-8">
            <AnimatedHeadline
              lines={[
                { text: t('hero.line1'), accent: false },
                { text: t('hero.line2'), accent: true },
                { text: t('hero.line3'), accent: false },
              ]}
              className="font-heading text-hero font-medium"
            />

            <FadeUp delay={0.9}>
              <p className="font-body text-lg md:text-xl text-ag-body max-w-xl">
                {t('hero.subtitle')}
              </p>
            </FadeUp>

            <FadeUp delay={1.1}>
              <div className="flex flex-wrap gap-4 pt-4">
                {/* Primary CTA — sharp rectangle */}
                <Link
                  href="/work"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-ag-accent text-ag-bg font-heading font-semibold hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(232,255,61,0.3)] transition-all group"
                  data-cursor="hover"
                  data-testid="hero-cta-primary"
                >
                  {t('hero.ctaPrimary')}
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>

                {/* Secondary CTA — underline reveal */}
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-8 py-4 font-body text-foreground group"
                  data-cursor="hover"
                  data-testid="hero-cta-secondary"
                >
                  <span className="relative">
                    {t('hero.ctaSecondary')}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-ag-accent group-hover:w-full transition-all duration-300" />
                  </span>
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </FadeUp>
          </div>

          {/* RIGHT col — Scroll Indicator */}
          <div className="hidden lg:flex col-span-1 items-center justify-center">
            <motion.div
              className="flex flex-col items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <span className="font-mono text-xs text-ag-muted tracking-wider">
                {t('hero.scroll')}
              </span>
              <div className="relative w-[1px] h-10 bg-ag-border">
                <motion.div
                  className="absolute top-0 left-0 w-[3px] h-[3px] -ml-[1px] rounded-full bg-ag-accent"
                  animate={{ y: [0, 30, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   MARQUEE — matched to old project
   - framer-motion x animation (not CSS)
   - Duplicated content for seamless loop
   ═══════════════════════════════════════════════════════ */

function MarqueeSection() {
  const items = [
    'WEB DEVELOPMENT',
    'UI/UX DESIGN',
    'E-COMMERCE',
    'BRAND IDENTITY',
    'DIGITAL MARKETING',
    'CUSTOM SOLUTIONS',
  ];

  const marqueeContent = [...items, ...items, ...items].map((item, index) => (
    <span key={index} className="flex items-center">
      <span className="font-mono text-[11px] tracking-[0.25em] text-ag-muted/60 whitespace-nowrap uppercase">
        {item}
      </span>
      <span className="mx-8 md:mx-12">
        <span className="block w-[3px] h-[3px] bg-ag-accent/40 rotate-45" />
      </span>
    </span>
  ));

  return (
    <div
      className="relative w-full py-5 bg-transparent border-y border-ag-border/30 overflow-hidden"
      data-testid="marquee-section"
    >
      {/* ✅ FIXED: Theme-aware edge fades */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* Subtle top highlight */}
      <div className="absolute top-0 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-ag-accent/10 to-transparent" />

      <motion.div
        className="flex items-center"
        animate={{ x: ['0%', '-33.333%'] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 40,
            ease: 'linear',
          },
        }}
      >
        {marqueeContent}
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   PORTFOLIO — matched to old project
   - Card wraps with <Link> to /work/slug
   - 3D tilt + shine effect
   - Always-visible info + hover overlay info
   - showAll prop
   ═══════════════════════════════════════════════════════ */

// ✅ Portfolio Projects Data — κάθε project είναι ένα μοναδικό visual world
const portfolioProjects = [
    {
    id: 1,
    slug: 'UltraChamp',
    title: 'UltraChamp',
    category: 'SPORTS',
    size: 'large',
    image: '/images/projects/UltraChamp.jpg',  // ← ΠΡΟΣΘΗΚΗ
    accent: '#ffffff',
    year: '2024',
    demoUrl: 'UltraChamp',  // ← ΠΡΟΣΘΗΚΗ
  },

  {
    id: 2,
    slug: 'kaiser-omnia',
    title: 'Kaiser Omnia',
    category: 'Construction / Brand Identity',
    size: 'small',
    image: '/images/projects/kaiser-omnia.jpg',  // ← ΠΡΟΣΘΗΚΗ
    accent: '#c4a35a',
    year: '2024',
    demoUrl: '/kaiser-omnia',  // ← ΠΡΟΣΘΗΚΗ
  },

  {
    id: 3,
    slug: 'EatPlay',
    title: 'Foxhouse Restaurant',
    category: 'Web Design',
    size: 'small',
    image: '/images/projects/EatPlay.jpg',  // ← ΠΡΟΣΘΗΚΗ
    accent: '#64b5f6',
    year: '2026',
    demoUrl: '/EatPlay',  // ← ΠΡΟΣΘΗΚΗ
  },
      {
    id: 4,
    slug: 'Clothing',
    title: 'Maison Noire',
    category: 'E-Commerce / Brand Identity',
    size: 'large',
    image: '/images/projects/clothing.jpg',  // ← ΠΡΟΣΘΗΚΗ
    accent: '#a35617',
    year: '2025',
    demoUrl: '/Clothing',  // ← ΠΡΟΣΘΗΚΗ
  },
  {
    id: 5,
    slug: 'kaiser-omnia-tm',
    title: 'Kaiser-Omnia',
    category: 'Web Design',
    size: 'full',
    image: '/images/projects/construction.jpg',  // ← ΠΡΟΣΘΗΚΗ
    accent: '#a78bfa',
    year: '2023',
    demoUrl: '/kaiser-omnia-tm',  // ← ΠΡΟΣΘΗΚΗ
  },
];



// ═══════════════════════════════════════
// PORTFOLIO CARD — Prestige Edition
// ═══════════════════════════════════════

function PortfolioCard({ project, index }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [shine, setShine] = useState({ x: 50, y: 50 });
  const { t } = useTranslation();

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    cardRef.current.style.transform = `perspective(1000px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg) scale3d(1.02, 1.02, 1.02)`;
    setShine({ x: (x + 0.5) * 100, y: (y + 0.5) * 100 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (cardRef.current) {
      cardRef.current.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
      cardRef.current.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) scale3d(1,1,1)';
    }
    setIsHovered(false);
    setShine({ x: 50, y: 50 });
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (cardRef.current) cardRef.current.style.transition = 'none';
    setIsHovered(true);
  }, []);

  const sizeClasses = {
    large: 'col-span-12 md:col-span-7',
    small: 'col-span-12 md:col-span-5',
    full: 'col-span-12',
  };

  return (
    <motion.div
      className={sizeClasses[project.size]}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={project.demoUrl || `/work/${project.slug}`}
        ref={cardRef}
        className="relative block group overflow-hidden"
        style={{
          transform: 'perspective(1000px) rotateY(0) rotateX(0) scale3d(1,1,1)',
          transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          aspectRatio: project.size === 'full' ? '21 / 9' : '16 / 10',
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        data-cursor="view"
        data-testid={`portfolio-card-${project.slug}`}
      >
        {/* IMAGE AREA - 16:9 aspect για screenshots */}
        <div className="absolute inset-0 bg-neutral-900">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-center transition-all duration-700 ease-out"
            style={{
              transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            }}
            sizes={
              project.size === 'full' 
                ? '100vw' 
                : project.size === 'large' 
                  ? '(max-width: 768px) 100vw, 66vw' 
                  : '(max-width: 768px) 100vw, 33vw'
            }
          />

          {/* Dark overlay on hover */}
          <div 
            className="absolute inset-0 transition-all duration-500 pointer-events-none"
            style={{
              backgroundColor: isHovered ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0)',
            }}
          />

          {/* Shine effect */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-500"
            style={{
              opacity: isHovered ? 0.6 : 0,
              background: `radial-gradient(600px circle at ${shine.x}% ${shine.y}%, ${project.accent}12 0%, transparent 60%)`,
            }}
          />
        </div>

        {/* Year badge - top right */}
        <div 
          className="absolute top-6 right-6 md:top-8 md:right-8 transition-all duration-500 pointer-events-none z-10"
          style={{
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'translateY(0)' : 'translateY(-10px)',
          }}
        >
          <span 
            className="font-mono text-[10px] tracking-[0.2em] px-2 py-1 backdrop-blur-sm"
            style={{
              color: project.accent,
              backgroundColor: 'rgba(0,0,0,0.6)',
              border: `1px solid ${project.accent}40`,
            }}
          >
            {project.year}
          </span>
        </div>


        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
          {/* Accent line */}
          <div
            className="h-px mb-4"
            style={{
              width: isHovered ? '48px' : '0px',
              backgroundColor: project.accent,
              opacity: 0.6,
              transition: 'width 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          />

          {/* Category - πάνω από τον τίτλο */}
          <span
            className="font-mono text-[10px] tracking-[0.2em] uppercase block mb-1.5"
            style={{
              color: project.accent,
              opacity: isHovered ? 0.8 : 0.5,
              transition: 'opacity 0.6s ease',
            }}
          >
            {project.category}
          </span>

          {/* Title */}
          <h3
            className="font-heading text-2xl md:text-3xl transition-colors duration-300"
            style={{
              color: isHovered ? '#fff' : 'rgba(255,255,255,0.85)',
            }}
          >
            {project.title}
          </h3>
        </div>

        {/* Border glow */}
        <div
          className="absolute inset-0 pointer-events-none transition-all duration-500"
          style={{
            boxShadow: isHovered
              ? `inset 0 0 0 1px ${project.accent}40`
              : 'inset 0 0 0 1px transparent',
          }}
        />
      </Link>
    </motion.div>
  );
}


// ═══════════════════════════════════════
// PORTFOLIO SECTION
// ═══════════════════════════════════════

function PortfolioSection({ showAll = false }) {
  const { t } = useTranslation();
  const displayedProjects = showAll ? portfolioProjects : portfolioProjects.slice(0, 5);

  return (
    <section className="py-24 md:py-32 bg-background" data-testid="portfolio-section">
      <div className="max-w-[1800px] mx-auto px-4 md:px-8">
        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-mono text-xs text-ag-muted tracking-wider block mb-4">
              {t('portfolio.label')}
            </span>
            <h2 className="font-heading text-h2 text-foreground mb-12 md:mb-16">
              {t('portfolio.heading1')}
              <br />
              {t('portfolio.heading2')}
            </h2>
          </motion.div>
        )}

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {displayedProjects.map((project, index) => (
            <PortfolioCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {!showAll && (
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-6 group"
              data-cursor="hover"
              data-testid="view-all-projects"
            >
              <span className="relative font-body text-ag-body group-hover:text-foreground transition-colors duration-500">
                {t('portfolio.viewAll')}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-ag-accent group-hover:w-full transition-all duration-700 ease-out" />
              </span>
              <span className="font-mono text-[11px] text-ag-muted/50 tracking-wider">
                {t('portfolio.projectCount')}
              </span>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   SERVICES — matched to old project
   - AnimatePresence for description reveal
   - Mobile description expansion
   - border-t on container
   ═══════════════════════════════════════════════════════ */

function ServiceRow({ service, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative border-b border-ag-border cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-cursor="hover"
      data-testid={`service-row-${service.num}`}
    >
      <div className="py-6 md:py-8 px-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Number */}
        <span className="font-mono text-xs text-ag-muted">{service.num}</span>

        {/* Title */}
        <motion.h3
          className={`font-heading text-2xl md:text-4xl flex-1 md:ml-8 transition-colors duration-300 ${
              isHovered ? 'text-accent' : 'text-foreground'
            }`}
          transition={{ duration: 0.3 }}
        >
          {service.name}
        </motion.h3>

        {/* Description + Arrow */}
        <div className="flex items-center gap-8">
          <AnimatePresence>
            {isHovered && (
              <motion.p
                className="hidden md:block font-body text-sm text-ag-body max-w-xs"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {service.desc}
              </motion.p>
            )}
          </AnimatePresence>

          <motion.div
            animate={{ x: isHovered ? 8 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowRight className="text-ag-body" size={20} />
          </motion.div>
        </div>
      </div>

      {/* Mobile Description */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="md:hidden px-4 pb-6"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <p className="font-body text-sm text-ag-body">{service.desc}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hover Line */}
      <motion.div
        className="absolute bottom-0 left-0 h-[1px] bg-ag-accent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        style={{ originX: 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

function ServicesSection() {
  const { t } = useTranslation();
  const servicesData = t('services.items');

  return (
    <section className="py-24 md:py-32 bg-card" data-testid="services-section">
      <div className="max-w-[1800px] mx-auto px-4 md:px-8">
        <FadeUp>
          <span className="font-mono text-xs text-muted-foreground tracking-wider block mb-4">
            {t('services.label')}
          </span>
          <h2 className="font-heading text-h2 text-foreground mb-12 md:mb-16">
            {t('services.heading1')}
            <br />
            {t('services.heading2')}
          </h2>
        </FadeUp>

        <div className="border-t border-border">
          {Array.isArray(servicesData) &&
            servicesData.map((service, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <ServiceRow service={service} index={i} />
              </FadeUp>
            ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   ABOUT TEASER — matched to old project
   - aspect-[4/3] (was 4/5)
   - Gradient overlay on image
   - Two content paragraphs
   - Underline reveal link
   ═══════════════════════════════════════════════════════ */

function AboutTeaser() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

return (
  <section ref={sectionRef} className="py-32 md:py-48 bg-background overflow-hidden" data-testid="about-teaser">
    <div className="max-w-[1800px] mx-auto px-4 md:px-8">
      
      {/* Top decorative line */}
      <FadeUp>
        <div className="w-24 h-[1px] bg-ag-accent mb-16" />
      </FadeUp>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left side - Large heading */}
        <div className="lg:col-span-7 space-y-8">
          <FadeUp>
            <span className="font-mono text-xs text-ag-muted tracking-[0.3em] uppercase">
              {t('aboutTeaser.label')}
            </span>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-[1.1]">
              {t('aboutTeaser.heading1')}
              <br />
              <span className="text-ag-accent">{t('aboutTeaser.heading2')}</span>
              <br />
              {t('aboutTeaser.heading3')}
            </h2>
          </FadeUp>
        </div>

        {/* Right side - Body text and CTA */}
        <div className="lg:col-span-5 lg:pt-24 space-y-8">
          <FadeUp delay={0.2}>
            <p className="font-body text-lg md:text-xl text-ag-body leading-relaxed">
              {t('aboutTeaser.body')}
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <Link
              href="/about"
              className="inline-flex items-center gap-3 font-body text-foreground group"
              data-cursor="hover"
              data-testid="about-learn-more"
            >
              <span className="relative text-lg">
                {t('aboutTeaser.learnMore')}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-ag-accent group-hover:w-full transition-all duration-500" />
              </span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-2 transition-transform duration-300"
              />
            </Link>
          </FadeUp>
        </div>
      </div>

      {/* Bottom decorative elements */}
      <FadeUp delay={0.4}>
        <div className="mt-24 flex items-center gap-8">
          <div className="flex-1 h-[1px] bg-gradient-to-r from-ag-accent/50 to-transparent" />
          <span className="font-mono text-xs text-ag-muted tracking-widest">EST. 2024</span>
          <div className="flex-1 h-[1px] bg-gradient-to-l from-ag-accent/50 to-transparent" />
        </div>
      </FadeUp>

    </div>
  </section>
);
}

/* ═══════════════════════════════════════════════════════
   STATS — matched to old project
   - bg-background, NO border-y
   - Counter with suffix separated via span
   ═══════════════════════════════════════════════════════ */

function StatsSection() {
  const { t } = useTranslation();
  const statsData = t('stats');

  return (
    <section className="py-24 md:py-32 bg-background" data-testid="stats-section">
      <div className="max-w-[1800px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {Array.isArray(statsData) &&
            statsData.map((stat, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="text-center md:text-left">
                  <div className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-foreground">
                    <Counter from={0} to={stat.value} duration={2} />
                    {stat.suffix && (
                      <span className="text-ag-accent">{stat.suffix}</span>
                    )}
                  </div>
                  <p className="font-mono text-xs text-ag-muted tracking-wider uppercase mt-4">
                    {stat.label}
                  </p>
                </div>
              </FadeUp>
            ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   PROCESS — matched to old project
   - Desktop: horizontal timeline with circle + inner dot
   - Circle: w-6 h-6, inner dot w-2 h-2 bg-ag-accent
   - Step number in accent color, content centered
   - Mobile: bordered card stack
   - Line at top-12
   ═══════════════════════════════════════════════════════ */

function ProcessSection() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const stepsData = t('process.steps');

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-card overflow-hidden"
      data-testid="process-section"
    >
      <div className="max-w-[1800px] mx-auto px-4 md:px-8">
        <FadeUp>
          <span className="font-mono text-xs text-ag-muted tracking-wider block mb-4">
            {t('process.label')}
          </span>
          <h2 className="font-heading text-h2 text-foreground mb-12 md:mb-16">
            {t('process.heading')}
          </h2>
        </FadeUp>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting Line */}
          <div className="absolute top-12 left-0 right-0 h-[1px] bg-ag-border">
            <motion.div
              className="h-full bg-ag-accent origin-left"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          <div className="grid grid-cols-5 gap-4">
            {Array.isArray(stepsData) &&
              stepsData.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative pt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
                >
                  {/* Circle with inner dot */}
                  <motion.div
                    className="absolute top-[38px] left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-2 border-ag-border bg-card flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.5 + index * 0.15, duration: 0.3 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-ag-accent" />
                  </motion.div>

                  {/* Content — centered */}
                  <div className="text-center pt-12 px-2 group cursor-default">
                    <span className="font-mono text-xs text-ag-accent block mb-2">
                      {step.num}
                    </span>
                    <h3 className="font-heading text-lg text-foreground mb-2 group-hover:text-ag-accent transition-colors">
                      {step.title}
                    </h3>
                    <p className="font-body text-sm text-ag-body">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>

        {/* Mobile: Vertical bordered cards */}
        <div className="lg:hidden space-y-8">
          {Array.isArray(stepsData) &&
            stepsData.map((step, index) => (
              <FadeUp key={index} delay={index * 0.1}>
                <div className="flex gap-6 items-start p-6 border border-ag-border hover:border-ag-accent/30 transition-colors">
                  <span className="font-mono text-xs text-ag-accent shrink-0">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="font-heading text-xl text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="font-body text-sm text-ag-body">{step.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   TESTIMONIALS — matched to old project
   - Draggable carousel with useMotionValue + useSpring
   - Large quote text (text-xl md:text-2xl lg:text-3xl)
   - Large quote mark (text-[120px] md:text-[180px])
   - Centered dots, h-2
   ═══════════════════════════════════════════════════════ */

function TestimonialsSection() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const testimonialsData = t('testimonials.items');
  const itemsLen = Array.isArray(testimonialsData) ? testimonialsData.length : 0;

  // Auto-advance
  useEffect(() => {
    if (isDragging || itemsLen === 0) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % itemsLen);
    }, 5000);

    return () => clearInterval(interval);
  }, [isDragging, itemsLen]);

  // Update x position based on activeIndex
  useEffect(() => {
    if (!containerRef.current) return;
    const width = containerRef.current.offsetWidth;
    x.set(-activeIndex * width);
  }, [activeIndex, x]);

  const handleDragEnd = (event, info) => {
    const threshold = 50;
    if (info.offset.x < -threshold && activeIndex < itemsLen - 1) {
      setActiveIndex(activeIndex + 1);
    } else if (info.offset.x > threshold && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
    setIsDragging(false);
  };

  if (itemsLen === 0) return null;

  return (
    <section
      className="py-24 md:py-32 bg-card overflow-hidden"
      data-testid="testimonials-section"
    >
      <div className="max-w-[1800px] mx-auto px-4 md:px-8">
        <FadeUp>
          <span className="font-mono text-xs text-ag-muted tracking-wider block mb-4">
            {t('testimonials.label')}
          </span>
          <h2 className="font-heading text-h2 text-foreground mb-12 md:mb-16">
            {t('testimonials.heading1')}
            <br />
            {t('testimonials.heading2')}
          </h2>
        </FadeUp>

        {/* Draggable Carousel */}
        <div ref={containerRef} className="relative overflow-hidden">
          <motion.div
            className="flex"
            style={{ x: springX }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
            dragElastic={0.1}
          >
            {testimonialsData.map((testimonial, index) => (
              <div
                key={index}
                className="min-w-full px-4 md:px-12"
                data-testid={`testimonial-${index}`}
              >
                <div className="relative max-w-4xl mx-auto">
                  {/* Large Quote Mark */}
                  <span className="absolute -top-8 -left-4 font-heading text-[120px] md:text-[180px] text-ag-surface leading-none select-none">
                    &ldquo;
                  </span>

                  {/* Quote — larger text to match old project */}
                  <blockquote className="relative z-10 font-body text-xl md:text-2xl lg:text-3xl text-foreground/90 italic leading-relaxed mb-8 pl-8 md:pl-12">
                    {testimonial.quote}
                  </blockquote>

                  {/* Author */}
                  <div className="pl-8 md:pl-12">
                    <p className="font-heading text-lg text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="font-mono text-xs text-ag-muted tracking-wider uppercase">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dots — centered, h-2 */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'w-8 bg-ag-accent'
                  : 'w-2 bg-ag-border hover:bg-ag-body'
              }`}
              data-cursor="hover"
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   CTA — matched to old project
   - Decorative rotated rectangles
   - AnimatedHeadline (word-by-word)
   - Sharp rectangle button (no rounded-full)
   - py-32 md:py-48
   ═══════════════════════════════════════════════════════ */

function CTASection() {
  const { t } = useTranslation();

  return (
    <section
      className="relative py-32 md:py-48 overflow-hidden bg-gradient-to-b from-card to-background"
      data-testid="cta-section"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-border/20 rotate-45 opacity-30" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-border/20 rotate-12 opacity-20" />
      </div>

      <div className="relative max-w-[1800px] mx-auto px-4 md:px-8 text-center">
        <AnimatedHeadline
          lines={[
            { text: t('cta.line1'), accent: false },
            { text: t('cta.line2'), accent: false },
            { text: t('cta.line3'), accent: false },
          ]}
          className="font-heading text-h1 md:text-display text-foreground mb-8"
        />

        <FadeUp delay={0.8}>
          <p className="font-body text-lg text-ag-body max-w-xl mx-auto mb-12">
            {t('cta.subtitle')}
          </p>
        </FadeUp>

        <FadeUp delay={1}>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-ag-accent text-background font-heading font-semibold text-lg hover:scale-105 transition-transform group"
            data-cursor="hover"
            data-testid="cta-button"
          >
            {t('cta.button')}
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════ */

export default function Home() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <PortfolioSection />
      <ServicesSection />
      <AboutTeaser />
      <StatsSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}