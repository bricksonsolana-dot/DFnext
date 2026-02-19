'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Globe, ShoppingCart, Palette, PenTool, TrendingUp, Headphones } from 'lucide-react';

const services = [
  { icon: Globe, title: 'Website Development', desc: 'We build fast, responsive, and beautiful websites tailored to your business needs. From corporate sites to complex web applications, every line of code is written with purpose.', features: ['Custom Next.js / React development', 'Responsive & mobile-first design', 'CMS integration (WordPress, Strapi)', 'Performance optimization', 'SEO-friendly architecture'] },
  { icon: ShoppingCart, title: 'E-Commerce Solutions', desc: 'Online stores that convert visitors into customers. We build e-commerce experiences that are both beautiful and functional.', features: ['WooCommerce & Shopify', 'Custom checkout flows', 'Payment gateway integration', 'Inventory management', 'Analytics & tracking'] },
  { icon: Palette, title: 'UI / UX Design', desc: 'User interfaces designed with empathy and data. We create experiences that delight users and drive engagement.', features: ['User research & personas', 'Wireframing & prototyping', 'Design systems', 'Usability testing', 'Accessibility compliance'] },
  { icon: PenTool, title: 'Brand Identity', desc: 'Your brand is more than a logo. We create comprehensive brand identities that communicate your values.', features: ['Logo design', 'Brand guidelines', 'Typography & color systems', 'Stationery design', 'Brand strategy'] },
  { icon: TrendingUp, title: 'Digital Marketing', desc: 'Data-driven strategies that deliver measurable results. We help you reach the right audience at the right time.', features: ['SEO & content strategy', 'Google Ads management', 'Social media campaigns', 'Email marketing', 'Analytics & reporting'] },
  { icon: Headphones, title: 'Ongoing Support', desc: 'We don\'t disappear after launch. Our support team is here to help you grow and evolve your digital presence.', features: ['24/7 monitoring', 'Security updates', 'Content updates', 'Performance monitoring', 'Monthly reports'] },
];

const tiers = [
  { name: 'Starter', desc: 'Perfect for small businesses and startups looking to establish their online presence.', from: '2.500' },
  { name: 'Professional', desc: 'For growing businesses that need a comprehensive digital solution with advanced features.', from: '7.500' },
  { name: 'Enterprise', desc: 'Full-scale digital transformation with custom development, ongoing support, and strategy.', from: '15.000' },
];

function FadeUp({ children, delay = 0, className = '' }) {
  return <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }} className={className}>{children}</motion.div>;
}

export default function ServicesPage() {
  return (
    <div className="pt-24">
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 md:py-24">
        <motion.h1 className="font-heading font-bold text-[44px] md:text-h1 lg:text-display text-white mb-8" initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          Our Services.
        </motion.h1>
        <motion.p className="text-ag-body text-lg max-w-[600px] leading-relaxed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          End-to-end digital solutions crafted with precision. From concept to launch and beyond.
        </motion.p>
      </section>

      {/* Service Sections */}
      {services.map((service, i) => {
        const Icon = service.icon;
        const isEven = i % 2 === 0;
        return (
          <section key={i} className={`py-20 ${i % 2 === 0 ? '' : 'bg-ag-card'}`}>
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${!isEven ? 'lg:[direction:rtl]' : ''}`}>
                <FadeUp className={!isEven ? 'lg:[direction:ltr]' : ''}>
                  <div className="bg-ag-surface border border-ag-border rounded-lg p-12 flex items-center justify-center aspect-[4/3]">
                    <Icon size={80} className="text-ag-accent opacity-60" strokeWidth={1} />
                  </div>
                </FadeUp>
                <FadeUp delay={0.15} className={!isEven ? 'lg:[direction:ltr]' : ''}>
                  <span className="font-mono text-label-sm text-ag-accent block mb-4">0{i + 1}</span>
                  <h2 className="font-heading font-bold text-[28px] md:text-[36px] text-white mb-6">{service.title}</h2>
                  <p className="text-ag-body text-base leading-relaxed mb-8">{service.desc}</p>
                  <ul className="space-y-3">
                    {service.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-ag-body">
                        <span className="w-1 h-1 bg-ag-accent rounded-full shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </FadeUp>
              </div>
            </div>
          </section>
        );
      })}

      {/* Pricing Tiers */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 lg:px-12">
        <FadeUp><h2 className="font-heading font-bold text-h2 text-white mb-4">Investment</h2></FadeUp>
        <FadeUp delay={0.1}><p className="text-ag-body text-lg mb-16 max-w-[500px]">Transparent pricing. No hidden fees. Every project is scoped individually.</p></FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className={`border rounded-lg p-8 h-full flex flex-col ${i === 1 ? 'border-ag-accent bg-ag-card' : 'border-ag-border bg-ag-card'}`}>
                {i === 1 && <span className="font-mono text-[10px] text-ag-accent uppercase tracking-wider mb-4">Most Popular</span>}
                <h3 className="font-heading font-bold text-2xl text-white mb-3">{tier.name}</h3>
                <p className="text-ag-body text-sm leading-relaxed mb-8 flex-1">{tier.desc}</p>
                <div className="mb-6">
                  <span className="text-ag-muted text-sm">Starting from</span>
                  <div className="font-heading font-bold text-3xl text-white">&euro;{tier.from}</div>
                </div>
                <Link href="/contact">
                  <motion.span className={`inline-flex items-center justify-center gap-2 w-full py-3 rounded-full font-heading font-medium text-sm transition-all ${i === 1 ? 'bg-ag-accent text-[#0A0A0A]' : 'border border-ag-border text-white hover:bg-ag-accent hover:text-[#0A0A0A] hover:border-transparent'}`} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    Get Started <ArrowRight size={16} />
                  </motion.span>
                </Link>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>
    </div>
  );
}
