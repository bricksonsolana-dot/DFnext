// app/about/page.js

'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '@/components/language-provider';

/* ═══════════════════════════════════════════════════════
   HELPERS
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

function AnimatedHeadline({ lines, className = '', delay = 0.3 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  let globalWordIndex = 0;

  return (
    <div ref={ref} className={`perspective-1000 ${className}`}>
      {lines.map((line, lineIndex) => (
        <div key={lineIndex} className="overflow-visible block pb-[0.1em]">
          {line.text
            .split(' ')
            .filter((w) => w)
            .map((word, wordIndex) => {
              const currentIndex = globalWordIndex++;
              return (
                <motion.span
                  key={wordIndex}
                  className={`inline-block mr-[0.25em] ${
                    line.accent ? 'text-accent italic' : ''
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

/* ═══════════════════════════════════════════════════════
   STATIC DATA — doesn't change per language
   ═══════════════════════════════════════════════════════ */

const team = [
  {
    name: 'Οδυσσέας Σ.',
    role: 'Co-Founder & CEO',
    image: 'images/about/ody.jpg',
  },
  {
    name: 'Γιώργος Σ.',
    role: 'Co-Founder & Lead Developer',
    image: 'images/about/george.jpg',
  },
];

const clients = [
  'Property Hall',
  'Ultra Champ',
  'Design Co',
  'Innovation Lab',
  'Digital First',
  'Growth Hub',
];

/* ═══════════════════════════════════════════════════════
   CTA SECTION
   ═══════════════════════════════════════════════════════ */

function CTASection() {
  const { t } = useTranslation();

  return (
    <section
      className="relative py-32 md:py-48 overflow-hidden bg-gradient-to-b from-card to-background"
      data-testid="cta-section"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-ag-border/20 rotate-45 opacity-30" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-ag-border/20 rotate-12 opacity-20" />
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
            className="inline-flex items-center gap-3 px-8 py-4 bg-ag-accent text-ag-bg font-heading font-semibold text-lg hover:scale-105 transition-transform group"
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
   ABOUT PAGE
   ═══════════════════════════════════════════════════════ */

export default function AboutPage() {
  const { t } = useTranslation();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Get translated data
  const timelineData = t('about.timeline');
  const valuesData = t('about.values');

  return (
    <main className="bg-background" data-testid="about-page">
      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative min-h-[80vh] flex items-center pt-24"
        data-testid="about-hero"
      >
        <div className="max-w-[1800px] mx-auto px-4 md:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <FadeUp>
                <span className="font-mono text-xs text-ag-muted tracking-wider block mb-4">
                  {t('about.heroLabel')}
                </span>
              </FadeUp>

              <AnimatedHeadline
                lines={[
                  { text: t('about.title1'), accent: false },
                  { text: t('about.title2'), accent: false },
                ]}
                className="font-heading text-h1 text-foreground mb-8"
              />

              <FadeUp delay={0.6}>
                <p className="font-body text-lg text-ag-body leading-relaxed">
                  {t('about.subtitle')}
                </p>
              </FadeUp>
            </div>

            {/* Parallax Image */}
            <FadeUp delay={0.3} className="relative aspect-[4/3] overflow-hidden">
              <motion.img
                src="images/about/About.jpg"
                alt="DigitalFootprint team"
                className="w-full h-full object-cover"
                style={{ y: heroY }}
                loading="lazy"
              />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── MISSION QUOTE ── */}
      <section
        className="py-24 md:py-32 bg-card"
        data-testid="mission-section"
      >
        <div className="max-w-[1800px] mx-auto px-4 md:px-8">
          <FadeUp>
            <blockquote className="font-heading text-2xl md:text-4xl lg:text-5xl text-foreground leading-tight max-w-4xl">
              {t('about.missionQuote')}
            </blockquote>
          </FadeUp>
        </div>
      </section>

      {/* ── STACK / HOW WE BUILD ── */}
      <section
        className="py-24 md:py-32 bg-background"
        data-testid="story-section"
      >
        <div className="max-w-[1800px] mx-auto px-4 md:px-8">
          <FadeUp>
            <span className="font-mono text-xs text-ag-muted tracking-wider block mb-4">
              {t('about.storyLabel')}
            </span>
            <h2 className="font-heading text-h2 text-foreground mb-16">
              {t('about.storyTitle')}
            </h2>
          </FadeUp>

          <div className="space-y-12">
            {Array.isArray(timelineData) &&
              timelineData.map((item, index) => (
                <FadeUp key={item.year} delay={index * 0.1}>
                  <div className="flex items-start gap-8 border-l border-ag-border pl-8 py-4">
                    <span className="font-mono text-2xl text-ag-accent font-bold shrink-0 min-w-[120px]">
                      {item.year}
                    </span>
                    <p className="font-body text-lg text-ag-body">
                      {item.event}
                    </p>
                  </div>
                </FadeUp>
              ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section
        className="py-24 md:py-32 bg-card"
        data-testid="values-section"
      >
        <div className="max-w-[1800px] mx-auto px-4 md:px-8">
          <FadeUp>
            <span className="font-mono text-xs text-ag-muted tracking-wider block mb-4">
              {t('about.valuesLabel')}
            </span>
            <h2 className="font-heading text-h2 text-foreground mb-16">
              {t('about.valuesTitle')}
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Array.isArray(valuesData) &&
              valuesData.map((value, index) => (
                <FadeUp key={value.title} delay={index * 0.1}>
                  <div className="p-8 border border-ag-border hover:border-ag-accent/30 transition-colors group">
                    <h3 className="font-heading text-2xl text-foreground mb-4 group-hover:text-ag-accent transition-colors">
                      {value.title}
                    </h3>
                    <p className="font-body text-ag-body">{value.desc}</p>
                  </div>
                </FadeUp>
              ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section
        className="py-24 md:py-32 bg-background"
        data-testid="team-section"
      >
        <div className="max-w-[1800px] mx-auto px-4 md:px-8">
          <FadeUp>
            <span className="font-mono text-xs text-ag-muted tracking-wider block mb-4">
              {t('about.teamLabel')}
            </span>
            <h2 className="font-heading text-h2 text-foreground mb-16">
              {t('about.teamTitle')}
            </h2>
          </FadeUp>

          <div className="grid grid-cols-2 gap-6 md:gap-8 max-w-2xl mx-auto">
            {team.map((member, index) => (
              <FadeUp key={member.name} delay={index * 0.1}>
                <div className="group" data-cursor="hover">
                  <div className="relative aspect-[3/4] overflow-hidden mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-ag-accent/0 group-hover:bg-ag-accent/10 transition-colors" />
                  </div>
                  <h3 className="font-heading text-lg text-foreground">
                    {member.name}
                  </h3>
                  <p className="font-mono text-xs text-ag-muted tracking-wider">
                    {member.role}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENTS ── */}
      <section
        className="py-24 md:py-32 bg-card"
        data-testid="clients-section"
      >
        <div className="max-w-[1800px] mx-auto px-4 md:px-8">
          <FadeUp>
            <span className="font-mono text-xs text-ag-muted tracking-wider block mb-4">
              {t('about.clientsLabel')}
            </span>
            <h2 className="font-heading text-h2 text-foreground mb-16">
              {t('about.clientsTitle')}
            </h2>
          </FadeUp>

          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
            {clients.map((client, index) => (
              <FadeUp key={client} delay={index * 0.05}>
                <span
                  className="font-heading text-2xl md:text-3xl text-ag-body/40 hover:text-foreground transition-colors cursor-pointer"
                  data-cursor="hover"
                >
                  {client}
                </span>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTASection />
    </main>
  );
}