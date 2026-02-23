'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useTranslation } from '@/components/language-provider';

function FloatingInput({ label, error, registration, type = 'text', as = 'input' }) {
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const Tag = as;
  return (
    <div className="relative">
      <Tag
        {...registration}
        type={type}
        className={`w-full bg-transparent border-b-2 pb-3 pt-6 text-foreground text-base font-body outline-none transition-all duration-300 ${error ? 'border-red-500' : focused ? 'border-ag-accent shadow-[0_2px_0_0_rgba(232,255,61,0.3)]' : 'border-ag-border'} ${as === 'textarea' ? 'min-h-[120px] resize-none' : ''}`}
        onFocus={() => setFocused(true)}
        onBlur={(e) => { setFocused(false); setHasValue(e.target.value.length > 0); }}
        onChange={(e) => { registration.onChange(e); setHasValue(e.target.value.length > 0); }}
      />
      <label className={`absolute left-0 transition-all duration-300 pointer-events-none font-body ${focused || hasValue ? 'top-0 text-xs text-ag-accent' : 'top-6 text-base text-ag-body'}`}>{label}</label>
      {error && <p className="text-red-400 text-xs mt-1">{error.message}</p>}
    </div>
  );
}

export default function ContactPage() {
  const { t, lang } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const contactSchema = z.object({
    name: z.string().min(2, t('contactPage.validation.nameRequired')),
    email: z.string().email(t('contactPage.validation.emailInvalid')),
    phone: z.string().optional(),
    message: z.string().min(10, t('contactPage.validation.messageMin')),
    budget: z.string().optional(),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError('');
    const payload = {
      access_key: '418a01f6-fb93-43bd-a1f1-9f808aa3815a',
      subject: 'New Contact Form Submission - DigitalFootprint',
      from_name: data.name,
      name: data.name,
      email: data.email,
      phone: data.phone || 'Not provided',
      budget: data.budget || 'Not specified',
      message: data.message,
    };
    console.log('Web3Forms payload:', payload);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await res.json();
      console.log('Web3Forms response:', res.status, result);
      if (result.success) { setIsSubmitted(true); } else { setSubmitError(result.message || 'Something went wrong.'); }
    } catch (error) {
      console.error('Web3Forms error:', error);
      setSubmitError('Network error. Please try again.');
    } finally { setIsSubmitting(false); }
  };
  return (
    <div className="pt-24">
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 md:py-24">
        <motion.h1 className="font-heading font-bold text-[44px] md:text-h1 lg:text-display text-foreground mb-8" initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>{t('contactPage.title')}</motion.h1>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <h2 className="font-heading font-medium text-2xl text-foreground mb-8">{t('contactPage.infoTitle')}</h2>
            <div className="space-y-6 mb-12">
              {[
                { icon: Mail, text: t('contactPage.email') },
                { icon: Phone, text: t('contactPage.phone') },
                { icon: MapPin, text: t('contactPage.location') },
                { icon: Clock, text: t('contactPage.hours') },
              ].map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-ag-border flex items-center justify-center"><Icon size={16} className="text-ag-accent" /></div>
                  <span className="text-ag-body">{text}</span>
                </div>
              ))}
            </div>
            <div className="bg-card border border-ag-border rounded-lg p-6">
              <p className="text-ag-body text-sm leading-relaxed">{t('contactPage.responseNote')}</p>
            </div>
            <div className="mt-8 rounded-lg overflow-hidden border border-ag-border aspect-[16/9] bg-ag-surface flex items-center justify-center">
              <div className="text-center"><MapPin size={32} className="text-ag-muted mx-auto mb-2" /><span className="text-ag-muted text-sm font-mono">{t('contactPage.location')}</span></div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center text-center py-20">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}>
                    <CheckCircle size={64} className="text-ag-accent mb-6" />
                  </motion.div>
                  <h3 className="font-heading font-bold text-2xl text-foreground mb-3">{t('contactPage.form.successTitle')}</h3>
                  <p className="text-ag-body">{t('contactPage.form.successText')}</p>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  <FloatingInput label={t('contactPage.form.name')} error={errors.name} registration={register('name')} />
                  <FloatingInput label={t('contactPage.form.email')} error={errors.email} registration={register('email')} type="email" />
                  <FloatingInput label={t('contactPage.form.phone')} error={errors.phone} registration={register('phone')} type="tel" />
            <div className="relative">
              <label className="block text-xs text-ag-accent mb-2 font-body">
                {t('contactPage.form.budget')}
              </label>
              <select 
                {...register('budget')} 
                className="w-full bg-transparent border-b-2 border-ag-border pb-3 pt-2 text-foreground text-base font-body outline-none focus:border-ag-accent transition-all appearance-none"
              >
                <option value="" className="bg-card text-foreground">
                  {t('contactPage.form.selectRange')}
                </option>
                <option value="2500-5000" className="bg-card text-foreground">
                  &euro;2,500 - &euro;5,000
                </option>
                <option value="5000-10000" className="bg-card text-foreground">
                  &euro;5,000 - &euro;10,000
                </option>
                <option value="10000-25000" className="bg-card text-foreground">
                  &euro;10,000 - &euro;25,000
                </option>
                <option value="25000+" className="bg-card text-foreground">
                  &euro;25,000+
                </option>
              </select>
            </div>
                  {submitError && <p className="text-red-400 text-sm">{submitError}</p>}
                  <motion.button type="submit" disabled={isSubmitting} className="inline-flex items-center gap-2 px-8 py-4 bg-ag-accent text-background font-heading font-semibold rounded-full text-sm disabled:opacity-50 disabled:cursor-not-allowed" whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(232,255,61,0.3)' }} whileTap={{ scale: 0.98 }}>
                    {isSubmitting ? <motion.div className="w-5 h-5 border-2 border-background border-t-transparent rounded-full" animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }} /> : <>{t('contactPage.form.submit')} <ArrowRight size={16} /></>}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
