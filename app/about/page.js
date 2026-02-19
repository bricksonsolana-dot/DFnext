'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '@/components/language-provider';

/* ═══════════════════════════════════════════════════════
   HELPERS — matched to old project
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

/* ═══════════════════════════════════════════════════════
   DATA — matched to old project
   ═══════════════════════════════════════════════════════ */

const team = [
  {
    name: 'Αλέξανδρος Κ.',
    role: 'Founder & Creative Director',
    image:
      'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Μαρία Π.',
    role: 'Lead Developer',
    image:
      'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Γιώργος Α.',
    role: 'UI/UX Designer',
    image:
      'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Ελένη Μ.',
    role: 'Project Manager',
    image:
      'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

const values = [
  {
    title: 'Craft',
    description:
      'Κάθε pixel, κάθε γραμμή κώδικα έχει σημασία. Δεν κάνουμε συμβιβασμούς στην ποιότητα.',
  },
  {
    title: 'Honesty',
    description:
      'Λέμε την αλήθεια, ακόμα και όταν δεν είναι αυτό που θέλετε να ακούσετε.',
  },
  {
    title: 'Results',
    description:
      'Ωραία websites που δεν φέρνουν αποτελέσματα δεν μας ενδιαφέρουν.',
  },
  {
    title: 'Curiosity',
    description:
      'Μαθαίνουμε συνεχώς. Οι τεχνολογίες αλλάζουν, εμείς εξελισσόμαστε.',
  },
];

const timeline = [
  {
    year: '2016',
    event: 'Ξεκινήσαμε ως freelancers με ένα laptop και μια ιδέα.',
  },
  {
    year: '2018',
    event:
      'Το πρώτο μας γραφείο στο κέντρο της Αθήνας. 3 άτομα, απεριόριστη ενέργεια.',
  },
  {
    year: '2020',
    event:
      'Pandemic pivot: 100% remote, 200% focused. Καλύτερη δουλειά από ποτέ.',
  },
  {
    year: '2023',
    event: 'Νέο studio, νέα εποχή. 8 άτομα, 120+ projects, 15+ awards.',
  },
];

const clients = [
  'TechCorp',
  'Startup GR',
  'Design Co',
  'Innovation Lab',
  'Digital First',
  'Growth Hub',
];

/* ═══════════════════════════════════════════════════════
   CTA SECTION — matched to old project
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
          lines={[
            { text: t('cta.line1'), accent: false },
            { text: t('cta.line2'), accent: false },
            { text: t('cta.line3'), accent: false },
          ]}
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

/* ═══════════════════════════════════════════════════════
   ABOUT PAGE — matched to old project
   ═══════════════════════════════════════════════════════ */

export default function AboutPage() {
  const { t } = useTranslation();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <main className="bg-ag-bg" data-testid="about-page">
      {/* ═══════════════════════════════════════════════════════
          HERO — matched to old project
          - min-h-[80vh], pt-24
          - 2-column grid: content left, parallax image right
          - AnimatedHeadline word-by-word
          ═══════════════════════════════════════════════════════ */}
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
                  ABOUT US
                </span>
              </FadeUp>

              <AnimatedHeadline
                lines={[
                  { text: 'Ποιοι', accent: false },
                  { text: 'Είμαστε.', accent: false },
                ]}
                className="font-heading text-h1 text-white mb-8"
              />

              <FadeUp delay={0.6}>
                <p className="font-body text-lg text-ag-body leading-relaxed">
                  Είμαστε ένα ανεξάρτητο digital studio με έδρα την Αθήνα. Από
                  το 2016, βοηθάμε brands να αποκτήσουν ψηφιακή παρουσία που
                  ξεχωρίζει — με craft, strategy, και obsessive attention to
                  detail.
                </p>
              </FadeUp>
            </div>

            {/* Parallax Image */}
            <FadeUp delay={0.3} className="relative aspect-[4/3] overflow-hidden">
              <motion.img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="DigitalFootprint team"
                className="w-full h-full object-cover"
                style={{ y: heroY }}
                loading="lazy"
              />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          MISSION — matched to old project
          - bg-ag-card (= old df-surface)
          - Large blockquote
          ═══════════════════════════════════════════════════════ */}
      <section
        className="py-24 md:py-32 bg-ag-card"
        data-testid="mission-section"
      >
        <div className="max-w-[1800px] mx-auto px-4 md:px-8">
          <FadeUp>
            <blockquote className="font-heading text-2xl md:text-4xl lg:text-5xl text-white leading-tight max-w-4xl">
              "Πιστεύουμε ότι το web δεν πρέπει να είναι boring. Κάθε project
              είναι μια ευκαιρία να δημιουργήσουμε κάτι που θα θυμούνται οι
              άνθρωποι."
            </blockquote>
          </FadeUp>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          STORY TIMELINE — matched to old project
          - border-l on each item
          - year in accent, large font-mono
          ═══════════════════════════════════════════════════════ */}
      <section
        className="py-24 md:py-32 bg-ag-bg"
        data-testid="story-section"
      >
        <div className="max-w-[1800px] mx-auto px-4 md:px-8">
          <FadeUp>
            <span className="font-mono text-xs text-ag-muted tracking-wider block mb-4">
              OUR STORY
            </span>
            <h2 className="font-heading text-h2 text-white mb-16">
              Η ιστορία μας.
            </h2>
          </FadeUp>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <FadeUp key={item.year} delay={index * 0.1}>
                <div className="flex items-start gap-8 border-l border-ag-border pl-8 py-4">
                  <span className="font-mono text-2xl text-ag-accent font-bold shrink-0">
                    {item.year}
                  </span>
                  <p className="font-body text-lg text-ag-body">{item.event}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          VALUES — matched to old project
          - 2-column grid (NOT 4)
          - p-8 border cards, NO rounded-lg
          - Title hover turns accent
          ═══════════════════════════════════════════════════════ */}
      <section
        className="py-24 md:py-32 bg-ag-card"
        data-testid="values-section"
      >
        <div className="max-w-[1800px] mx-auto px-4 md:px-8">
          <FadeUp>
            <span className="font-mono text-xs text-ag-muted tracking-wider block mb-4">
              OUR VALUES
            </span>
            <h2 className="font-heading text-h2 text-white mb-16">
              Τι πιστεύουμε.
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <FadeUp key={value.title} delay={index * 0.1}>
                <div className="p-8 border border-ag-border hover:border-ag-accent/30 transition-colors group">
                  <h3 className="font-heading text-2xl text-white mb-4 group-hover:text-ag-accent transition-colors">
                    {value.title}
                  </h3>
                  <p className="font-body text-ag-body">{value.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          TEAM — matched to old project
          - 4-column grid
          - aspect-[3/4] images
          - grayscale → color on hover
          - accent overlay on hover
          ═══════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-ag-bg" data-testid="team-section">
        <div className="max-w-[1800px] mx-auto px-4 md:px-8">
          <FadeUp>
            <span className="font-mono text-xs text-ag-muted tracking-wider block mb-4">
              THE TEAM
            </span>
            <h2 className="font-heading text-h2 text-white mb-16">
              Οι άνθρωποί μας.
            </h2>
          </FadeUp>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
                  <h3 className="font-heading text-lg text-white">
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

      {/* ═══════════════════════════════════════════════════════
          CLIENTS — matched to old project
          - flex wrap centered
          - Large text hover effect
          ═══════════════════════════════════════════════════════ */}
      <section
        className="py-24 md:py-32 bg-ag-card"
        data-testid="clients-section"
      >
        <div className="max-w-[1800px] mx-auto px-4 md:px-8">
          <FadeUp>
            <span className="font-mono text-xs text-ag-muted tracking-wider block mb-4">
              CLIENTS
            </span>
            <h2 className="font-heading text-h2 text-white mb-16">
              Με ποιους συνεργαστήκαμε.
            </h2>
          </FadeUp>

          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
            {clients.map((client, index) => (
              <FadeUp key={client} delay={index * 0.05}>
                <span
                  className="font-heading text-2xl md:text-3xl text-ag-body/40 hover:text-white transition-colors cursor-pointer"
                  data-cursor="hover"
                >
                  {client}
                </span>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}