'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useScroll, useTransform, useInView, animate, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '@/components/language-provider';

/* ===== HELPERS ===== */
function FadeUp({ children, delay = 0, className = '' }) {
  return (
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }} className={className}>
      {children}
    </motion.div>
  );
}

function SectionLabel({ text }) {
  return (
    <motion.span className="font-mono text-label-sm uppercase text-ag-muted block mb-8" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
      {text}
    </motion.span>
  );
}

function Counter({ from = 0, to, duration = 2 }) {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true });
  useEffect(() => {
    if (isInView && nodeRef.current) {
      const node = nodeRef.current;
      const controls = animate(from, to, { duration, ease: [0.16, 1, 0.3, 1], onUpdate: (v) => { node.textContent = Math.round(v); } });
      return () => controls.stop();
    }
  }, [isInView, from, to, duration]);
  return <span ref={nodeRef}>{from}</span>;
}

/* ===== DATA ===== */
const portfolioProjects = [
  { id: 1, name: 'Flavor Restaurant', category: 'Web Design', image: 'https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxkYXJrJTIwdGVjaCUyMHdvcmtzcGFjZXxlbnwwfHx8YmxhY2t8MTc3MTUxODk0OXww&ixlib=rb-4.1.0&q=85', size: 'large' },
  { id: 2, name: 'TechStart Platform', category: 'E-Commerce', image: 'https://images.pexels.com/photos/7172646/pexels-photo-7172646.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', size: 'small' },
  { id: 3, name: 'Artisan Coffee Co.', category: 'Brand Identity', image: 'https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', size: 'small' },
  { id: 4, name: 'Urban Hotel Athens', category: 'Hotel', image: 'https://images.unsplash.com/photo-1640346876473-f76a73c71539?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHw0fHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMGRhcmt8ZW58MHx8fGJsYWNrfDE3NzE1MTg5NTN8MA&ixlib=rb-4.1.0&q=85', size: 'large' },
  { id: 5, name: 'Olympus Fitness', category: 'Corporate', image: 'https://images.pexels.com/photos/28428591/pexels-photo-28428591.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', size: 'full' },
];

/* ===== PORTFOLIO CARD ===== */
function PortfolioCard({ project, index, viewText }) {
  const cardRef = useRef(null);
  const shineRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    cardRef.current.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) scale3d(1.02, 1.02, 1.02)`;
    if (shineRef.current) shineRef.current.style.background = `radial-gradient(circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%, rgba(255,255,255,0.08) 0%, transparent 60%)`;
  }, []);
  const handleMouseLeave = useCallback(() => { if (cardRef.current) { cardRef.current.style.transition = 'transform 0.5s ease-out'; cardRef.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)'; } setIsHovered(false); }, []);
  const handleMouseEnter = useCallback(() => { if (cardRef.current) cardRef.current.style.transition = 'none'; setIsHovered(true); }, []);
  const spanClass = project.size === 'large' ? 'col-span-12 md:col-span-7' : project.size === 'full' ? 'col-span-12' : 'col-span-12 md:col-span-5';

  return (
    <motion.div className={spanClass} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}>
      <div ref={cardRef} data-cursor="view" className="relative rounded-lg overflow-hidden bg-ag-card border border-ag-border" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} style={{ transition: 'transform 0.5s ease-out' }}>
        <div ref={shineRef} className="absolute inset-0 z-10 pointer-events-none" />
        <div className="relative aspect-[16/10] overflow-hidden">
          <img src={project.image} alt={project.name} className={`w-full h-full object-cover transition-transform duration-[600ms] ${isHovered ? 'scale-[1.08]' : 'scale-100'}`} loading="lazy" />
          <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 flex items-center justify-center ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <span className="font-mono text-xs text-white tracking-wider uppercase">{viewText}</span>
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-heading font-medium text-lg text-white">{project.name}</h3>
          <span className="font-mono text-[11px] text-ag-muted uppercase tracking-wider">{project.category}</span>
        </div>
      </div>
    </motion.div>
  );
}

/* ===== HERO ===== */
function HeroSection() {
  const { t } = useTranslation();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const words = [
    { text: t('hero.line1'), accent: false },
    { text: t('hero.line2'), accent: true },
    { text: t('hero.line3'), accent: false },
  ];
  const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } } };
  const wordVariants = { hidden: { y: 80, opacity: 0, rotateX: -15 }, visible: { y: 0, opacity: 1, rotateX: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } };

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute top-[40%] left-0 right-0 h-[1px] bg-ag-border" />
      {[0, 1, 2].map((i) => (
        <motion.div key={i} className="absolute border border-ag-border opacity-20" style={{ width: [80, 120, 60][i], height: [120, 80, 100][i], top: ['20%', '60%', '35%'][i], right: ['10%', '5%', '22%'][i] }} animate={{ rotate: 360 }} transition={{ duration: [25, 30, 20][i], repeat: Infinity, ease: 'linear' }} />
      ))}
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 w-full grid grid-cols-12 gap-4 pt-24">
        <div className="hidden lg:flex col-span-2 items-center justify-center">
          <span className="font-mono text-[11px] text-ag-muted tracking-[0.12em] uppercase -rotate-90 whitespace-nowrap">{t('hero.verticalLabel')}</span>
        </div>
        <div className="col-span-12 lg:col-span-8">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" style={{ perspective: 1000 }}>
            {words.map((word, i) => (
              <motion.div key={i} variants={wordVariants} className={`text-[44px] sm:text-[56px] md:text-h1 lg:text-display font-heading font-bold ${word.accent ? 'text-ag-accent italic' : 'text-white'}`}>{word.text}</motion.div>
            ))}
          </motion.div>
          <motion.p className="mt-8 text-ag-body text-base md:text-body-lg max-w-[520px] font-body leading-relaxed" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.9 }}>
            {t('hero.subtitle')}
          </motion.p>
          <motion.div className="flex flex-wrap items-center gap-6 mt-10" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 1.1 }}>
            <Link href="/work">
              <motion.span className="inline-flex items-center gap-2 px-8 py-4 bg-ag-accent text-[#0A0A0A] font-heading font-semibold rounded-full text-sm" whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(232,255,61,0.3)' }} whileTap={{ scale: 0.98 }}>
                {t('hero.ctaPrimary')} <ArrowRight size={16} />
              </motion.span>
            </Link>
            <Link href="/about" className="text-white text-sm font-body group inline-flex items-center gap-1 relative">
              {t('hero.ctaSecondary')} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300" />
            </Link>
          </motion.div>
        </div>
        <motion.div className="hidden lg:flex col-span-2 flex-col items-center justify-end pb-12" style={{ opacity: scrollIndicatorOpacity }}>
          <span className="font-mono text-[11px] text-ag-muted tracking-widest mb-4">{t('hero.scroll')}</span>
          <div className="relative w-[1px] h-10 bg-ag-border">
            <motion.div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-ag-accent rounded-full" animate={{ y: [0, 32, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ===== MARQUEE ===== */
function MarqueeSection() {
  const items = ['WEB DEVELOPMENT', 'UI/UX DESIGN', 'E-COMMERCE', 'BRAND IDENTITY', 'DIGITAL MARKETING', 'CUSTOM SOLUTIONS'];
  return (
    <div className="marquee-container h-14 bg-ag-card border-y border-ag-border overflow-hidden flex items-center">
      <div className="marquee-track flex animate-marquee whitespace-nowrap">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center shrink-0">
            {items.map((item, i) => (
              <span key={i} className="font-mono text-[13px] text-ag-muted flex items-center"><span className="mx-4">{item}</span><span className="text-ag-accent">&#10022;</span></span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ===== PORTFOLIO ===== */
function PortfolioSection() {
  const { t } = useTranslation();
  return (
    <section className="py-24 md:py-32 max-w-[1400px] mx-auto px-6 lg:px-12">
      <SectionLabel text={t('portfolio.label')} />
      <FadeUp>
        <h2 className="font-heading font-bold text-[32px] md:text-h2 text-white mb-12 md:mb-16">{t('portfolio.heading1')}<br />{t('portfolio.heading2')}</h2>
      </FadeUp>
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        {portfolioProjects.map((project, i) => <PortfolioCard key={project.id} project={project} index={i} viewText={t('portfolio.viewProject')} />)}
      </div>
      <FadeUp delay={0.2}>
        <div className="mt-12 text-center">
          <Link href="/work" className="inline-flex items-center gap-3 text-ag-body hover:text-white transition-colors group">
            <span>{t('portfolio.viewAll')}</span><span className="text-ag-muted">{t('portfolio.projectCount')}</span><ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </FadeUp>
    </section>
  );
}

/* ===== SERVICES ===== */
function ServicesSection() {
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const servicesData = t('services.items');

  return (
    <section className="py-24 md:py-32 bg-ag-card">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <SectionLabel text={t('services.label')} />
        <FadeUp><h2 className="font-heading font-bold text-[32px] md:text-h2 text-white mb-12 md:mb-16">{t('services.heading1')}<br />{t('services.heading2')}</h2></FadeUp>
        <div>
          {Array.isArray(servicesData) && servicesData.map((service, i) => (
            <FadeUp key={i} delay={i * 0.05}>
              <div className="relative border-b border-ag-border" onMouseEnter={() => setHoveredIndex(i)} onMouseLeave={() => setHoveredIndex(null)}>
                <div className="flex items-center justify-between py-6 md:py-8">
                  <div className="flex items-center gap-4 md:gap-12">
                    <span className="font-mono text-label-sm text-ag-muted w-8">{service.num}</span>
                    <motion.h3 className="font-heading font-medium text-xl md:text-[36px] lg:text-[40px]" animate={{ color: hoveredIndex === i ? '#E8FF3D' : '#FFFFFF' }} transition={{ duration: 0.3 }}>{service.name}</motion.h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <motion.span className="hidden md:block text-sm text-ag-body max-w-[300px]" initial={{ opacity: 0 }} animate={{ opacity: hoveredIndex === i ? 1 : 0 }} transition={{ duration: 0.3 }}>{service.desc}</motion.span>
                    <motion.div animate={{ x: hoveredIndex === i ? 8 : 0 }} transition={{ duration: 0.3 }}><ArrowRight size={20} className="text-ag-body" /></motion.div>
                  </div>
                </div>
                <motion.div className="absolute bottom-0 left-0 right-0 h-[1px] bg-ag-accent origin-left" initial={{ scaleX: 0 }} animate={{ scaleX: hoveredIndex === i ? 1 : 0 }} transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }} />
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== ABOUT TEASER ===== */
function AboutTeaser() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 max-w-[1400px] mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <FadeUp>
          <div className="relative overflow-hidden rounded-lg aspect-[4/5]">
            <motion.img src="https://images.pexels.com/photos/28428584/pexels-photo-28428584.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Studio" className="w-full h-full object-cover" style={{ y: imageY }} loading="lazy" />
          </div>
        </FadeUp>
        <div>
          <SectionLabel text={t('aboutTeaser.label')} />
          <FadeUp><h2 className="font-heading font-bold text-[32px] md:text-h2 text-white mb-6">{t('aboutTeaser.heading1')}<br />{t('aboutTeaser.heading2')}<br />{t('aboutTeaser.heading3')}</h2></FadeUp>
          <FadeUp delay={0.1}><p className="text-ag-body text-base leading-relaxed mb-8">{t('aboutTeaser.body')}</p></FadeUp>
          <FadeUp delay={0.2}>
            <Link href="/about" className="inline-flex items-center gap-2 text-white font-heading font-medium group">
              {t('aboutTeaser.learnMore')} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ===== STATS ===== */
function StatsSection() {
  const { t } = useTranslation();
  const statsData = t('stats');
  return (
    <section className="py-24 md:py-32 border-y border-ag-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {Array.isArray(statsData) && statsData.map((stat, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="text-center lg:text-left">
                <div className="font-heading font-bold text-[48px] md:text-[64px] lg:text-[80px] text-white leading-none">
                  <Counter from={0} to={stat.value} duration={2} /><span className="text-ag-accent">{stat.suffix}</span>
                </div>
                <span className="font-mono text-label-sm uppercase text-ag-muted mt-2 block">{stat.label}</span>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== PROCESS ===== */
function ProcessSection() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const stepsData = t('process.steps');

  return (
    <section className="py-24 md:py-32 max-w-[1400px] mx-auto px-6 lg:px-12" ref={ref}>
      <SectionLabel text={t('process.label')} />
      <FadeUp><h2 className="font-heading font-bold text-[32px] md:text-h2 text-white mb-12 md:mb-16">{t('process.heading')}</h2></FadeUp>
      <div className="relative">
        <div className="hidden lg:block absolute top-[20px] left-0 right-0 h-[1px] bg-ag-border">
          <motion.div className="h-full bg-ag-accent origin-left" initial={{ scaleX: 0 }} animate={{ scaleX: isInView ? 1 : 0 }} transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-6">
          {Array.isArray(stepsData) && stepsData.map((step, i) => (
            <motion.div key={i} className="relative group" initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}>
              <motion.div className="w-10 h-10 rounded-full border-2 border-ag-border bg-[#0A0A0A] flex items-center justify-center mb-5 relative z-10 group-hover:border-ag-accent transition-colors duration-300" initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}} transition={{ duration: 0.4, delay: 0.5 + i * 0.2, type: 'spring' }}>
                <span className="font-mono text-[10px] text-ag-muted group-hover:text-ag-accent transition-colors">{step.num}</span>
              </motion.div>
              <div className="group-hover:-translate-y-1 transition-transform duration-300">
                <h4 className="font-heading font-medium text-base text-white mb-2">{step.title}</h4>
                <p className="text-sm text-ag-body leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== TESTIMONIALS ===== */
function TestimonialsSection() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  const testimonialsData = t('testimonials.items');
  const itemsLen = Array.isArray(testimonialsData) ? testimonialsData.length : 0;

  const startAutoplay = useCallback(() => { intervalRef.current = setInterval(() => { setCurrentIndex((p) => (p + 1) % itemsLen); }, 5000); }, [itemsLen]);
  const stopAutoplay = useCallback(() => { if (intervalRef.current) clearInterval(intervalRef.current); }, []);
  useEffect(() => { if (itemsLen > 0) { startAutoplay(); return stopAutoplay; } }, [startAutoplay, stopAutoplay, itemsLen]);

  if (!Array.isArray(testimonialsData) || itemsLen === 0) return null;
  const current = testimonialsData[currentIndex];

  return (
    <section className="py-24 md:py-32 bg-ag-card">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <SectionLabel text={t('testimonials.label')} />
        <FadeUp><h2 className="font-heading font-bold text-[32px] md:text-h2 text-white mb-12 md:mb-16">{t('testimonials.heading1')}<br />{t('testimonials.heading2')}</h2></FadeUp>
        <div className="relative min-h-[200px]" onMouseEnter={stopAutoplay} onMouseLeave={startAutoplay}>
          <AnimatePresence mode="wait">
            <motion.div key={currentIndex} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} className="relative max-w-3xl">
              <span className="absolute -top-8 -left-2 font-heading font-bold text-[100px] md:text-[120px] text-ag-surface leading-none select-none">&ldquo;</span>
              <blockquote className="relative z-10">
                <p className="text-base md:text-lg text-[#CCCCCC] italic font-body leading-relaxed mb-8">{current.quote}</p>
                <div>
                  <span className="font-heading font-medium text-white block">{current.name}</span>
                  <span className="font-mono text-[11px] text-ag-muted uppercase tracking-wider">{current.role}, {current.company}</span>
                </div>
              </blockquote>
            </motion.div>
          </AnimatePresence>
          <div className="flex gap-2 mt-10">
            {testimonialsData.map((_, i) => (
              <button key={i} onClick={() => setCurrentIndex(i)} className="h-1.5 rounded-full transition-all duration-300" style={{ width: i === currentIndex ? 32 : 8, backgroundColor: i === currentIndex ? '#E8FF3D' : '#2A2A2A' }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== CTA ===== */
function CTASection() {
  const { t } = useTranslation();
  const words = [t('cta.line1'), t('cta.line2'), t('cta.line3')];
  const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } };
  const wordVariants = { hidden: { y: 60, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } };

  return (
    <section className="py-24 md:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#111111_0%,#0A0A0A_70%)]" />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
          {words.map((word, i) => <motion.div key={i} variants={wordVariants} className="font-heading font-bold text-[36px] md:text-[56px] lg:text-h1 text-white leading-tight">{word}</motion.div>)}
        </motion.div>
        <FadeUp delay={0.5}><p className="text-ag-body text-base md:text-lg mt-8 mb-10">{t('cta.subtitle')}</p></FadeUp>
        <FadeUp delay={0.6}>
          <Link href="/contact">
            <motion.span className="inline-flex items-center gap-2 px-10 py-5 bg-ag-accent text-[#0A0A0A] font-heading font-semibold rounded-full text-base md:text-lg" whileHover={{ scale: 1.02, boxShadow: '0 0 60px rgba(232,255,61,0.3)' }} whileTap={{ scale: 0.98 }}>
              {t('cta.button')} <ArrowRight size={20} />
            </motion.span>
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}

/* ===== PAGE ===== */
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
