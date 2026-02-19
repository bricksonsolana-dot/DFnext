'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { useTranslation } from '@/components/language-provider';

/* ═══════════════════════════════════════════════════════
   HELPERS — matched to old project's Animations.js
   ═══════════════════════════════════════════════════════ */
function CTASection() {
  const { t } = useTranslation();

  return (
    <section
      className="relative py-32 md:py-48 overflow-hidden"
      style={{
        background: 'radial-gradient(circle at center, #111111 0%, #0A0A0A 70%)',
      }}
      data-testid="cta-section"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-ag-border/20 rotate-45 opacity-30" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-ag-border/20 rotate-12 opacity-20" />
      </div>

      <div className="relative max-w-[1800px] mx-auto px-4 md:px-8 text-center">
        <AnimatedHeadline
          text={`${t('cta.line1')}\n${t('cta.line2')}\n${t('cta.line3')}`}
          className="font-heading text-h1 md:text-display text-white mb-8"
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

/**
 * AnimatedHeadline — word-by-word with 3D rotateX
 * Matched to old project exactly.
 */
function AnimatedHeadline({ text, className = '', delay = 0.3 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const lines = text.split('\n');

  let globalWordIndex = 0;

  return (
    <div ref={ref} className={`perspective-1000 ${className}`}>
      {lines.map((line, lineIndex) => (
        <div key={lineIndex} className="overflow-visible block pb-[0.1em]">
          {line.split(' ')
            .filter(w => w)
            .map((word, wordIndex) => {
              const currentIndex = globalWordIndex++;
              return (
                <motion.span
                  key={wordIndex}
                  className="inline-block mr-[0.25em]"
                  initial={{ y: 80, opacity: 0, rotateX: -15 }}
                  animate={isInView ? { y: 0, opacity: 1, rotateX: 0 } : { y: 80, opacity: 0, rotateX: -15 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: delay + currentIndex * 0.15 }}
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
   DATA — matched to old project
   ═══════════════════════════════════════════════════════ */

const services = [
  {
    id: 'web-development',
    number: '01',
    title: 'Website Development',
    subtitle: 'Custom websites με focus στο UX και την απόδοση',
    description: 'Δημιουργούμε websites που δεν είναι απλά όμορφα — είναι γρήγορα, accessible, και optimized για conversions. Από single-page apps έως complex web platforms.',
    features: ['Custom React/Next.js Development', 'Performance Optimization', 'SEO-First Architecture', 'CMS Integration', 'API Development'],
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'ecommerce',
    number: '02',
    title: 'E-Commerce Solutions',
    subtitle: 'Online shops που πουλάνε',
    description: 'Δεν φτιάχνουμε απλά e-shops — φτιάχνουμε πωλητικές μηχανές. WooCommerce, Shopify, ή custom solutions ανάλογα με τις ανάγκες σου.',
    features: ['Shopify / WooCommerce Setup', 'Custom E-Commerce Development', 'Payment Gateway Integration', 'Inventory Management', 'Conversion Optimization'],
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'ui-ux-design',
    number: '03',
    title: 'UI / UX Design',
    subtitle: 'Interfaces που οι χρήστες αγαπούν',
    description: 'Research-driven design με focus στη μετατροπή. Δεν κάνουμε assumptions — κάνουμε testing και iterating μέχρι να βρούμε τη σωστή λύση.',
    features: ['User Research & Testing', 'Wireframing & Prototyping', 'Visual Design', 'Design Systems', 'Micro-interactions'],
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'brand-identity',
    number: '04',
    title: 'Brand Identity',
    subtitle: 'Cohesive brand presence σε κάθε touchpoint',
    description: 'Logos, visual systems, και guidelines που κάνουν το brand σου αναγνωρίσιμο. Από το business card μέχρι το website.',
    features: ['Logo Design', 'Visual Identity System', 'Brand Guidelines', 'Marketing Collateral', 'Social Media Templates'],
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'digital-marketing',
    number: '05',
    title: 'Digital Marketing',
    subtitle: 'Data-driven αποφάσεις',
    description: 'SEO, campaigns, και strategy για measurable results. Δεν υποσχόμαστε νούμερα — τα δείχνουμε.',
    features: ['SEO Optimization', 'Google Ads Management', 'Social Media Marketing', 'Analytics & Reporting', 'Content Strategy'],
    image: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'support',
    number: '06',
    title: 'Ongoing Support',
    subtitle: 'Δεν εξαφανιζόμαστε μετά το launch',
    description: 'Maintenance, updates, και continuous improvement. Είμαστε partners, όχι vendors.',
    features: ['24/7 Monitoring', 'Security Updates', 'Performance Optimization', 'Content Updates', 'Technical Support'],
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const pricingTiers = [
  {
    name: 'Starter',
    description: 'Για μικρές επιχειρήσεις και startups',
    features: ['Single Page Website', 'Basic SEO', 'Mobile Responsive', '1 Month Support'],
  },
  {
    name: 'Professional',
    description: 'Για established businesses',
    features: ['Multi-page Website', 'Advanced SEO', 'CMS Integration', 'E-commerce Ready', '6 Months Support'],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'Για complex projects',
    features: ['Custom Development', 'Full Brand Identity', 'API Integration', 'Analytics Dashboard', '12 Months Support'],
  },
];

/* ═══════════════════════════════════════════════════════
   SERVICE BLOCK — matched to old project
   - Alternating image/content with order classes
   - Real image instead of icon placeholder
   - Check icon for features
   - Underline link with full width underline
   - gradient overlay on image
   ═══════════════════════════════════════════════════════ */

function ServiceBlock({ service, index }) {
  const isEven = index % 2 === 0;

  return (
    <section
      className={`py-24 md:py-32 ${index % 2 === 0 ? 'bg-ag-bg' : 'bg-ag-card'}`}
      data-testid={`service-${service.id}`}
    >
      <div className="max-w-[1800px] mx-auto px-4 md:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center`}>
          {/* Content */}
          <div className={`order-2 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
            <FadeUp>
              <span className="font-mono text-xs text-ag-accent tracking-wider block mb-4">
                {service.number}
              </span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-heading text-h2 text-white mb-2">
                {service.title}
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="font-body text-xl text-ag-accent mb-6">
                {service.subtitle}
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <p className="font-body text-ag-body leading-relaxed mb-8">
                {service.description}
              </p>
            </FadeUp>
            <FadeUp delay={0.4}>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check size={16} className="text-ag-accent shrink-0" />
                    <span className="font-body text-white">{feature}</span>
                  </li>
                ))}
              </ul>
            </FadeUp>
            <FadeUp delay={0.5}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-body text-ag-accent group"
                data-cursor="hover"
              >
                <span className="relative">
                  Ρώτησέ μας
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-ag-accent" />
                </span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeUp>
          </div>

          {/* Image — real image with gradient overlay */}
          <FadeUp delay={0.2} className={`order-1 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ag-bg/30 to-transparent" />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   PAGE — matched to old project exactly
   ═══════════════════════════════════════════════════════ */

export default function ServicesPage() {
  const { t } = useTranslation();

  return (
    <main className="bg-ag-bg" data-testid="services-page">
      {/* ─────────────────────────────────────────────────────
         HERO — matched to old project
         - pt-32 pb-24 md:pb-32
         - AnimatedHeadline word-by-word
         - max-w-2xl for description
         ───────────────────────────────────────────────────── */}
      <section className="pt-32 pb-24 md:pb-32" data-testid="services-hero">
        <div className="max-w-[1800px] mx-auto px-4 md:px-8">
          <FadeUp>
            <span className="font-mono text-xs text-ag-muted tracking-wider block mb-4">
              SERVICES
            </span>
          </FadeUp>
          <AnimatedHeadline
            text="Υπηρεσίες."
            className="font-heading text-h1 text-white mb-8"
          />
          <FadeUp delay={0.6}>
            <p className="font-body text-xl text-ag-body max-w-2xl">
              Από concept μέχρι launch — και μετά. Προσφέρουμε end-to-end 
              digital services που βοηθούν brands να ξεχωρίσουν.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────
         SERVICE BLOCKS — matched to old project
         - Alternating backgrounds (bg-ag-bg / bg-ag-card)
         - Alternating content/image order
         ───────────────────────────────────────────────────── */}
      {services.map((service, index) => (
        <ServiceBlock key={service.id} service={service} index={index} />
      ))}

      {/* ─────────────────────────────────────────────────────
         PRICING — matched to old project
         - bg-ag-card (old df-surface)
         - Sharp border (no rounded-lg)
         - Check icon for features (size 14)
         - Sharp button (no rounded-full)
         - highlighted tier: border-ag-accent bg-ag-bg
         ───────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-ag-card" data-testid="pricing-section">
        <div className="max-w-[1800px] mx-auto px-4 md:px-8">
          <FadeUp>
            <span className="font-mono text-xs text-ag-muted tracking-wider block mb-4">
              PRICING
            </span>
            <h2 className="font-heading text-h2 text-white mb-4">
              Προσέγγιση τιμολόγησης.
            </h2>
            <p className="font-body text-ag-body max-w-2xl mb-16">
              Κάθε project είναι μοναδικό. Αυτά είναι τα starting points — 
              η τελική τιμή εξαρτάται από τις συγκεκριμένες ανάγκες σου.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingTiers.map((tier, index) => (
              <FadeUp key={tier.name} delay={index * 0.1}>
                <div
                  className={`p-8 border transition-colors ${
                    tier.highlighted
                      ? 'border-ag-accent bg-ag-bg'
                      : 'border-ag-border hover:border-ag-accent/30'
                  }`}
                >
                  {tier.highlighted && (
                    <span className="font-mono text-xs text-ag-accent tracking-wider block mb-4">
                      MOST POPULAR
                    </span>
                  )}
                  <h3 className="font-heading text-2xl text-white mb-2">
                    {tier.name}
                  </h3>
                  <p className="font-body text-sm text-ag-body mb-6">
                    {tier.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Check size={14} className="text-ag-accent shrink-0" />
                        <span className="font-body text-sm text-white">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {/* Sharp button — NO rounded-full */}
                  <Link
                    href="/contact"
                    className={`block text-center py-3 font-heading font-medium transition-all ${
                      tier.highlighted
                        ? 'bg-ag-accent text-ag-bg hover:opacity-90'
                        : 'border border-ag-border text-white hover:bg-ag-accent hover:text-ag-bg hover:border-ag-accent'
                    }`}
                    data-cursor="hover"
                  >
                    Get Started
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────
         CTA — matched to old project (sharp button)
         ───────────────────────────────────────────────────── */}
      <CTASection />
    </main>
  );
}