// app/services/page.js

'use client';
import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { useTranslation } from '@/components/language-provider';

/* ═══════════════════════════════════════════════════════
   HELPERS
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
          text={`${t('cta.line1')}\n${t('cta.line2')}\n${t('cta.line3')}`}
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

function AnimatedHeadline({ text, className = '', delay = 0.3 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const lines = text.split('\n');

  let globalWordIndex = 0;

  return (
    <div ref={ref} className={`perspective-1000 ${className}`}>
      {lines.map((line, lineIndex) => (
        <div key={lineIndex} className="overflow-visible block pb-[0.1em]">
          {line
            .split(' ')
            .filter((w) => w)
            .map((word, wordIndex) => {
              const currentIndex = globalWordIndex++;
              return (
                <motion.span
                  key={wordIndex}
                  className="inline-block mr-[0.25em]"
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
   STATIC DATA — images don't change per language
   ═══════════════════════════════════════════════════════ */

const serviceImages = [
  '/images/services/WebsiteDevelopment.jpg',
  '/images/services/E-Commerce.png',
  'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
  '/images/services/BrandIdentity.jpg',
  'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=800',
  '/images/services/support.jpg',
];

const serviceIds = [
  'web-development',
  'ecommerce',
  'ui-ux-design',
  'brand-identity',
  'digital-marketing',
  'support',
];

/* ═══════════════════════════════════════════════════════
   SERVICE BLOCK
   ═══════════════════════════════════════════════════════ */

function ServiceBlock({ service, image, serviceId, index }) {
  const { t } = useTranslation();
  const isEven = index % 2 === 0;
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section
      ref={ref}
      className={`py-24 md:py-32 ${index % 2 === 0 ? 'bg-background' : 'bg-card'}`}
      data-testid={`service-${serviceId}`}
    >
      <div className="max-w-[1800px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className={`order-2 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
            <FadeUp>
              <span className="font-mono text-xs text-accent tracking-wider block mb-4">
                {service.number}
              </span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-heading text-h2 text-foreground mb-2">
                {service.title}
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="font-body text-xl text-accent mb-6">
                {service.subtitle}
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <p className="font-body text-ag-body leading-relaxed mb-8">
                {service.desc}
              </p>
            </FadeUp>
            <FadeUp delay={0.4}>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check size={16} className="text-accent shrink-0" />
                    <span className="font-body text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </FadeUp>
            <FadeUp delay={0.5}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-body text-accent group"
                data-cursor="hover"
              >
                <span className="relative">
                  {t('servicesPage.askUs')}
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-ag-accent" />
                </span>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </FadeUp>
          </div>

          {/* Image with Parallax */}
          <FadeUp
            delay={0.2}
            className={`order-1 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <motion.img
                src={image}
                alt={service.title}
                className="w-full h-[120%] object-cover"
                style={{ y: imageY }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ag-bg/30 to-transparent pointer-events-none" />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════ */

export default function ServicesPage() {
  const { t } = useTranslation();

  // Get translated data
  const servicesItems = t('servicesPage.items');
  const pricingTiers = t('servicesPage.tiers');

  return (
    <main className="bg-background" data-testid="services-page">
      {/* ── HERO ── */}
      <section className="pt-32 pb-24 md:pb-32" data-testid="services-hero">
        <div className="max-w-[1800px] mx-auto px-4 md:px-8">
          <FadeUp>
            <span className="font-mono text-xs text-ag-muted tracking-wider block mb-4">
              {t('servicesPage.heroLabel')}
            </span>
          </FadeUp>
          <AnimatedHeadline
            text={t('servicesPage.title')}
            className="font-heading text-h1 text-foreground mb-8"
          />
          <FadeUp delay={0.6}>
            <p className="font-body text-xl text-ag-body max-w-2xl">
              {t('servicesPage.subtitle')}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── SERVICE BLOCKS ── */}
      {Array.isArray(servicesItems) &&
        servicesItems.map((service, index) => (
          <ServiceBlock
            key={serviceIds[index] || index}
            service={service}
            image={serviceImages[index]}
            serviceId={serviceIds[index] || `service-${index}`}
            index={index}
          />
        ))}

      {/* ── PRICING ── */}
      <section className="py-24 md:py-32 bg-card" data-testid="pricing-section">
        <div className="max-w-[1800px] mx-auto px-4 md:px-8">
          <FadeUp>
            <span className="font-mono text-xs text-ag-muted tracking-wider block mb-4">
              {t('servicesPage.pricingLabel')}
            </span>
            <h2 className="font-heading text-h2 text-foreground mb-4">
              {t('servicesPage.pricingTitle')}
            </h2>
            <p className="font-body text-ag-body max-w-2xl mb-16">
              {t('servicesPage.pricingSubtitle')}
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Array.isArray(pricingTiers) &&
              pricingTiers.map((tier, index) => (
                <FadeUp key={tier.name} delay={index * 0.1}>
                  <div
                    className={`p-8 border transition-colors ${
                      tier.highlighted
                        ? 'border-ag-accent bg-background'
                        : 'border-ag-border hover:border-ag-accent/30'
                    }`}
                  >
                    {tier.highlighted && (
                      <span className="font-mono text-xs text-accent tracking-wider block mb-4">
                        {t('servicesPage.mostPopular')}
                      </span>
                    )}
                    <h3 className="font-heading text-2xl text-foreground mb-2">
                      {tier.name}
                    </h3>
                    <p className="font-body text-sm text-ag-body mb-6">
                      {tier.desc}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <Check size={14} className="text-accent shrink-0" />
                          <span className="font-body text-sm text-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className={`block text-center py-3 font-heading font-medium transition-all ${
                        tier.highlighted
                          ? 'bg-ag-accent text-ag-bg hover:opacity-90'
                          : 'border border-ag-border text-foreground hover:bg-ag-accent hover:text-ag-bg hover:border-ag-accent'
                      }`}
                      data-cursor="hover"
                    >
                      {t('servicesPage.getStarted')}
                    </Link>
                  </div>
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