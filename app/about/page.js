'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const values = [
  { title: 'Craft', desc: 'Every pixel, every line of code is intentional. We obsess over the details so you don\'t have to.' },
  { title: 'Honesty', desc: 'We tell you what you need to hear, not what you want to hear. Transparency builds trust.' },
  { title: 'Results', desc: 'Beautiful design is nothing without performance. We measure success by your success.' },
  { title: 'Curiosity', desc: 'Technology evolves daily. We stay ahead by never stopping learning and experimenting.' },
];

const timeline = [
  { year: '2017', event: 'Founded in Athens with a team of 2' },
  { year: '2019', event: 'First international client. Team grows to 5.' },
  { year: '2021', event: '50th project delivered. Won Best Digital Agency award.' },
  { year: '2023', event: 'Expanded to 12 team members. Opened new studio.' },
  { year: '2025', event: '120+ projects. Serving clients across Europe.' },
];

function FadeUp({ children, delay = 0, className = '' }) {
  return (
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }} className={className}>
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 md:py-24">
        <motion.span className="font-mono text-label-sm uppercase text-ag-muted block mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          [ ABOUT ]
        </motion.span>
        <motion.h1
          className="font-heading font-bold text-[44px] md:text-h1 lg:text-display text-white mb-8"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          Who We Are.
        </motion.h1>
        <motion.p className="text-ag-body text-lg max-w-[600px] leading-relaxed" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}>
          We are an independent web development & design studio based in Athens. We craft digital experiences with passion and precision.
        </motion.p>
      </section>

      {/* Image + Mission */}
      <section ref={heroRef} className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
            <motion.img
              src="https://images.pexels.com/photos/7172646/pexels-photo-7172646.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Our studio" className="w-full h-full object-cover" style={{ y: imgY }} loading="lazy"
            />
          </div>
          <FadeUp>
            <blockquote className="font-heading font-light text-[28px] md:text-[36px] text-white leading-snug">
              &ldquo;We believe that great design is not about aesthetics alone &mdash; it&apos;s about solving real problems with elegance and purpose.&rdquo;
            </blockquote>
          </FadeUp>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-ag-card py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <FadeUp><h2 className="font-heading font-bold text-h2 text-white mb-16">Our Journey</h2></FadeUp>
          <div className="space-y-8">
            {timeline.map((item, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="flex items-start gap-8 group">
                  <span className="font-mono text-label-sm text-ag-accent w-16 shrink-0 pt-1">{item.year}</span>
                  <div className="border-l border-ag-border pl-8 pb-4 group-hover:border-ag-accent transition-colors">
                    <p className="text-white text-lg">{item.event}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24">
        <FadeUp><h2 className="font-heading font-bold text-h2 text-white mb-16">Our Values</h2></FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="bg-ag-card border border-ag-border rounded-lg p-8 hover:border-ag-accent/30 transition-colors duration-300 h-full">
                <span className="font-mono text-label-sm text-ag-accent block mb-4">0{i + 1}</span>
                <h3 className="font-heading font-medium text-xl text-white mb-3">{v.title}</h3>
                <p className="text-ag-body text-sm leading-relaxed">{v.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center max-w-[1400px] mx-auto px-6 lg:px-12">
        <FadeUp>
          <h2 className="font-heading font-bold text-[32px] md:text-h2 text-white mb-6">Want to work with us?</h2>
          <Link href="/contact">
            <motion.span className="inline-flex items-center gap-2 px-8 py-4 bg-ag-accent text-[#0A0A0A] font-heading font-semibold rounded-full" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              Get in touch <ArrowRight size={18} />
            </motion.span>
          </Link>
        </FadeUp>
      </section>
    </div>
  );
}
