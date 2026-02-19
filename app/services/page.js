'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Globe, ShoppingCart, Palette, PenTool, TrendingUp, Headphones } from 'lucide-react';
import { useTranslation } from '@/components/language-provider';

const icons = [Globe, ShoppingCart, Palette, PenTool, TrendingUp, Headphones];

function FadeUp({ children, delay = 0, className = '' }) {
  return <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }} className={className}>{children}</motion.div>;
}

export default function ServicesPage() {
  const { t } = useTranslation();
  const servicesItems = t('servicesPage.items');
  const tiersData = t('servicesPage.tiers');

  return (
    <div className="pt-24">
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 md:py-24">
        <motion.h1 className="font-heading font-bold text-[44px] md:text-h1 lg:text-display text-white mb-8" initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>{t('servicesPage.title')}</motion.h1>
        <motion.p className="text-ag-body text-lg max-w-[600px] leading-relaxed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>{t('servicesPage.subtitle')}</motion.p>
      </section>

      {Array.isArray(servicesItems) && servicesItems.map((service, i) => {
        const Icon = icons[i] || Globe;
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
                    {Array.isArray(service.features) && service.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-ag-body"><span className="w-1 h-1 bg-ag-accent rounded-full shrink-0" />{f}</li>
                    ))}
                  </ul>
                </FadeUp>
              </div>
            </div>
          </section>
        );
      })}

      <section className="py-24 max-w-[1400px] mx-auto px-6 lg:px-12">
        <FadeUp><h2 className="font-heading font-bold text-h2 text-white mb-4">{t('servicesPage.investmentTitle')}</h2></FadeUp>
        <FadeUp delay={0.1}><p className="text-ag-body text-lg mb-16 max-w-[500px]">{t('servicesPage.investmentSubtitle')}</p></FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.isArray(tiersData) && tiersData.map((tier, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className={`border rounded-lg p-8 h-full flex flex-col ${i === 1 ? 'border-ag-accent bg-ag-card' : 'border-ag-border bg-ag-card'}`}>
                {i === 1 && <span className="font-mono text-[10px] text-ag-accent uppercase tracking-wider mb-4">{t('servicesPage.mostPopular')}</span>}
                <h3 className="font-heading font-bold text-2xl text-white mb-3">{tier.name}</h3>
                <p className="text-ag-body text-sm leading-relaxed mb-8 flex-1">{tier.desc}</p>
                <div className="mb-6">
                  <span className="text-ag-muted text-sm">{t('servicesPage.startingFrom')}</span>
                  <div className="font-heading font-bold text-3xl text-white">&euro;{tier.from}</div>
                </div>
                <Link href="/contact">
                  <motion.span className={`inline-flex items-center justify-center gap-2 w-full py-3 rounded-full font-heading font-medium text-sm transition-all ${i === 1 ? 'bg-ag-accent text-[#0A0A0A]' : 'border border-ag-border text-white hover:bg-ag-accent hover:text-[#0A0A0A] hover:border-transparent'}`} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    {t('servicesPage.getStarted')} <ArrowRight size={16} />
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
