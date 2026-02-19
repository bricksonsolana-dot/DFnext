'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslation } from './language-provider';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative bg-[#0A0A0A] pt-20 pb-8">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-ag-accent to-transparent opacity-40" />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <Link href="/" className="inline-block">
              <span className="font-heading font-bold text-3xl text-ag-accent">df.</span>
            </Link>
            <p className="mt-4 text-ag-body text-sm leading-relaxed max-w-[280px]">{t('footer.tagline')}</p>
            <div className="flex gap-3 mt-6">
              {['Li', 'Ig', 'Gh'].map((label, i) => (
                <motion.a key={i} href="#" className="w-10 h-10 rounded-full border border-ag-border flex items-center justify-center text-ag-body text-xs font-mono hover:bg-ag-accent hover:text-[#0A0A0A] hover:border-transparent transition-all duration-300" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  {label}
                </motion.a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-mono text-label-sm uppercase text-ag-muted mb-6">{t('footer.navTitle')}</h4>
            <div className="flex flex-col gap-3">
              {[
                { href: '/', label: t('footer.home') },
                { href: '/work', label: t('nav.work') },
                { href: '/about', label: t('nav.about') },
                { href: '/services', label: t('nav.services') },
                { href: '/contact', label: t('nav.contact') },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-ag-body hover:text-white transition-colors text-sm">{link.label}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-mono text-label-sm uppercase text-ag-muted mb-6">{t('footer.contactTitle')}</h4>
            <div className="flex flex-col gap-3 text-sm text-ag-body">
              <p>hello@digitalfootprint.gr</p>
              <p>+30 210 1234 567</p>
              <p>{t('contactPage.location')}</p>
            </div>
          </div>
        </div>
        <div className="border-t border-ag-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-ag-muted text-xs font-mono">{t('footer.copyright')}</p>
          <div className="flex gap-4">
            <span className="text-ag-muted text-xs hover:text-ag-body cursor-pointer transition-colors">{t('footer.privacy')}</span>
            <span className="text-ag-muted text-xs">|</span>
            <span className="text-ag-muted text-xs hover:text-ag-body cursor-pointer transition-colors">{t('footer.terms')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
