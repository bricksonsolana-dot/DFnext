// app/estimator/page.js

'use client';

import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '@/components/language-provider';
import {
  Globe, Search, ShoppingCart, Zap, ArrowRight, ArrowLeft, Check,
  FileText, Image, MessageSquare, BarChart3, Lock, Headphones, RefreshCw,
  Calculator, Mail, Phone, User, Building2, CreditCard, Truck, Calendar,
  Shield, Users, Database, Bell, Bot, MapPin, Layers, Smartphone,
  ChevronRight, ArrowUpRight, Eye, Package, Download, Brush, Palette,
  Clock, Info, Sparkles, HelpCircle, Crown, Diamond, Star,
  ChevronDown, ChevronUp, X, Menu, Minus, Plus, ChevronLeft
} from 'lucide-react';

/* ═══════════════════════════════════════
   LUXURIOUS BACKGROUND (unchanged)
═══════════════════════════════════════ */
function EstimatorBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <motion.div className="absolute w-[800px] h-[800px] rounded-full" style={{ top: '-10%', right: '-15%', background: 'radial-gradient(circle, rgba(212,175,55,0.04) 0%, rgba(212,175,55,0.01) 40%, transparent 70%)' }} animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 12, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }} />
      <motion.div className="absolute w-[600px] h-[600px] rounded-full" style={{ bottom: '-5%', left: '-10%', background: 'radial-gradient(circle, rgba(212,175,55,0.03) 0%, rgba(212,175,55,0.01) 40%, transparent 70%)' }} animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }} transition={{ duration: 15, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }} />
      <motion.div className="absolute w-1 h-1 rotate-45" style={{ top: '20%', left: '20%', background: 'linear-gradient(135deg, rgba(212,175,55,0.3), rgba(212,175,55,0.05))', boxShadow: '0 0 20px rgba(212,175,55,0.1)' }} animate={{ y: [0, -30, 0], x: [0, 10, 0], scale: [1, 2, 1], opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }} />
      <motion.div className="absolute w-1.5 h-1.5 rotate-45" style={{ top: '60%', right: '25%', background: 'linear-gradient(135deg, rgba(212,175,55,0.25), rgba(212,175,55,0.05))', boxShadow: '0 0 15px rgba(212,175,55,0.08)' }} animate={{ y: [0, 20, 0], x: [0, -15, 0], scale: [1, 1.8, 1], opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }} />
      <motion.div className="absolute h-px" style={{ width: '300px', top: '30%', right: '5%', background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.08), transparent)' }} animate={{ opacity: [0.3, 0.7, 0.3], x: [0, -20, 0] }} transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }} />
      <motion.div className="absolute border border-ag-accent/[0.03]" style={{ width: '500px', height: '500px', top: '5%', right: '-10%', borderRadius: '2px' }} animate={{ rotate: [0, 45], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 60, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }} />
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")` }} />
    </div>
  );
}

/* ═══════════════════════════════════════
   DECORATIVE ELEMENTS (unchanged)
═══════════════════════════════════════ */
function GoldDivider({ className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-ag-accent/20 to-transparent" />
      <Diamond size={8} className="text-ag-accent/30" />
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-ag-accent/20 to-transparent" />
    </div>
  );
}

function PremiumBadge({ children, icon: Icon = Crown, variant = 'default' }) {
  const variants = { default: 'bg-gradient-to-r from-ag-accent/10 to-ag-accent/5 border-ag-accent/20 text-ag-accent', highlight: 'bg-gradient-to-r from-ag-accent/20 to-ag-accent/10 border-ag-accent/30 text-ag-accent' };
  return (<span className={`inline-flex items-center gap-1.5 px-3 py-1 border text-[10px] font-mono font-bold tracking-widest uppercase ${variants[variant]}`}>{Icon && <Icon size={10} />}{children}</span>);
}

function FadeUp({ children }) {
  return (<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>);
}

function MobileBottomSheet({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50" onClick={onClose} />
          <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 300 }} className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-ag-accent/20 max-h-[85vh] flex flex-col" style={{ borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}>
            <div className="flex items-center justify-center pt-3 pb-1"><div className="w-10 h-1 bg-ag-border/50 rounded-full" /></div>
            <div className="flex items-center justify-between px-4 py-3 border-b border-ag-border/30">
              <span className="font-heading font-semibold text-sm text-foreground">{title}</span>
              <button onClick={onClose} className="w-8 h-8 flex items-center justify-center text-ag-muted"><X size={18} /></button>
            </div>
            <div className="flex-1 overflow-y-auto overscroll-contain px-4 py-4">{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ═══════════════════════════════════════
   STATIC DATA — icons & prices (language-independent)
═══════════════════════════════════════ */
const websiteTypesMeta = [
  { id: "onepage", basePrice: 700, icon: FileText, popular: false, includedFeatureIcons: [Smartphone, Mail, MapPin, Lock] },
  { id: "multipage", basePrice: 1500, icon: Globe, popular: true, includedFeatureIcons: [Smartphone, Mail, MapPin, Lock, FileText, Search, BarChart3, Shield] },
  { id: "eshop-small", basePrice: 3000, icon: ShoppingCart, popular: false, includedFeatureIcons: [Smartphone, Lock, FileText, ShoppingCart, Mail, MapPin, Search, BarChart3, Shield] },
  { id: "eshop-large", basePrice: 4000, icon: Database, popular: false, includedFeatureIcons: [Smartphone, Lock, FileText, Search, BarChart3, Eye] },
  { id: "webapp", basePrice: 5000, icon: Zap, popular: false, includedFeatureIcons: [Smartphone, Lock, Users, BarChart3, Database, Zap] },
];

const categoryIcons = { appearance: Palette, marketing: BarChart3, communication: MessageSquare, branding: Brush, store: ShoppingCart, payments: CreditCard, shipping: Truck, usermgmt: Users, security: Shield, integrations: Layers, advanced: Zap };
const categoryShowFor = { appearance: ["onepage","multipage","eshop-small","eshop-large","webapp"], marketing: ["onepage","multipage","eshop-small","eshop-large","webapp"], communication: ["onepage","multipage","eshop-small","eshop-large","webapp"], branding: ["onepage","multipage","eshop-small","eshop-large","webapp"], store: ["eshop-small","eshop-large"], payments: ["eshop-small","eshop-large"], shipping: ["eshop-small","eshop-large"], usermgmt: ["webapp"], security: ["eshop-large","webapp"], integrations: ["multipage","eshop-large","webapp"], advanced: ["webapp"] };

const allFeaturesMeta = [
  { id: "responsive-design", price: 0, icon: Smartphone, category: "appearance", showFor: ["onepage","multipage","eshop-small","eshop-large","webapp"], includedIn: ["onepage","multipage","eshop-small","eshop-large","webapp"] },
  { id: "cms", price: 300, icon: FileText, category: "appearance", showFor: ["onepage","multipage","eshop-small","eshop-large"], includedIn: ["multipage","eshop-small","eshop-large"] },
  { id: "custom-animations", price: 150, priceMax: 300, icon: Zap, category: "appearance", showFor: ["onepage","multipage","eshop-small","eshop-large","webapp"] },
  { id: "blog", price: 200, priceMax: 400, icon: FileText, category: "appearance", showFor: ["onepage","multipage","eshop-small","eshop-large"] },
  { id: "multilang", price: 300, priceMax: 500, icon: Globe, category: "appearance", showFor: ["onepage","multipage","eshop-small","eshop-large","webapp"] },
  { id: "gallery", price: 150, priceMax: 300, icon: Image, category: "appearance", showFor: ["onepage","multipage","eshop-small","eshop-large"] },
  { id: "copywriting", price: 50, priceMax: 150, icon: FileText, category: "appearance", showFor: ["onepage","multipage","eshop-small","eshop-large"] },
  { id: "light-dark-mode", price: 150, priceMax: 200, icon: FileText, category: "appearance", showFor: ["onepage","multipage","eshop-small","eshop-large"] },
  { id: "seo-basic", price: 100, priceMax: 200, icon: Search, category: "marketing", showFor: ["onepage","multipage","eshop-small","eshop-large","webapp"], includedIn: ["multipage","eshop-small"] },
  { id: "analytics", price: 100, priceMax: 150, icon: BarChart3, category: "marketing", showFor: ["onepage","multipage","eshop-small","eshop-large","webapp"], includedIn: ["multipage","eshop-small","eshop-large"] },
  { id: "seo-advanced", price: 200, priceMax: 400, icon: Search, category: "marketing", showFor: ["multipage","eshop-small","eshop-large","webapp"], includedIn: ["eshop-large"] },
  { id: "speed", price: 150, priceMax: 250, icon: Zap, category: "marketing", showFor: ["onepage","multipage","eshop-small","eshop-large","webapp"] },
  { id: "skroutz", price: 200, priceMax: 350, icon: BarChart3, category: "marketing", showFor: ["eshop-small","eshop-large"] },
  { id: "google-ads-setup", price: 150, priceMax: 300, icon: BarChart3, category: "marketing", showFor: ["onepage","multipage","eshop-small","eshop-large"] },
  { id: "contact-form", price: 0, icon: Mail, category: "communication", showFor: ["onepage","multipage","eshop-small","eshop-large"], includedIn: ["onepage","multipage","eshop-small","eshop-large"] },
  { id: "google-maps", price: 0, icon: MapPin, category: "communication", showFor: ["onepage","multipage","eshop-small","eshop-large"], includedIn: ["onepage","multipage","eshop-small","eshop-large"] },
  { id: "chat", price: 200, priceMax: 300, icon: MessageSquare, category: "communication", showFor: ["onepage","multipage","eshop-small","eshop-large","webapp"] },
  { id: "chatbot", price: 200, priceMax: 500, icon: Bot, category: "communication", showFor: ["multipage","eshop-small","eshop-large","webapp"] },
  { id: "booking", price: 300, priceMax: 600, icon: Calendar, category: "communication", showFor: ["onepage","multipage","eshop-small","eshop-large"] },
  { id: "email-marketing", price: 100, priceMax: 200, icon: Mail, category: "communication", showFor: ["multipage","eshop-small","eshop-large"] },
  { id: "logo", price: 150, priceMax: 400, icon: Brush, category: "branding", showFor: ["onepage","multipage","eshop-small","eshop-large","webapp"] },
  { id: "brand-identity", price: 400, priceMax: 800, icon: Palette, category: "branding", showFor: ["onepage","multipage","eshop-small","eshop-large","webapp"] },
  { id: "shopping-cart", price: 0, icon: ShoppingCart, category: "store", showFor: ["eshop-small","eshop-large"], includedIn: ["eshop-small","eshop-large"] },
  { id: "coupons", price: 100, priceMax: 200, icon: CreditCard, category: "store", showFor: ["eshop-small","eshop-large"] },
  { id: "wishlist", price: 100, priceMax: 150, icon: Eye, category: "store", showFor: ["eshop-small","eshop-large"], includedIn: ["eshop-large"] },
  { id: "reviews", price: 100, priceMax: 150, icon: MessageSquare, category: "store", showFor: ["eshop-small","eshop-large"] },
  { id: "filters", price: 200, priceMax: 350, icon: Search, category: "store", showFor: ["eshop-small","eshop-large"] },
  { id: "bank-gr", price: 200, priceMax: 400, icon: CreditCard, category: "payments", showFor: ["eshop-small","eshop-large"] },
  { id: "paypal-stripe", price: 100, priceMax: 200, icon: CreditCard, category: "payments", showFor: ["eshop-small","eshop-large"] },
  { id: "cod", price: 100, icon: Package, category: "payments", showFor: ["eshop-small","eshop-large"] },
  { id: "courier-acs", price: 200, priceMax: 400, icon: Truck, category: "shipping", showFor: ["eshop-small","eshop-large"] },
  { id: "courier-elta", price: 200, priceMax: 400, icon: Truck, category: "shipping", showFor: ["eshop-small","eshop-large"] },
  { id: "courier-speedex", price: 200, priceMax: 400, icon: Truck, category: "shipping", showFor: ["eshop-small","eshop-large"] },
  { id: "user-auth", price: 0, icon: Users, category: "usermgmt", showFor: ["webapp"], includedIn: ["webapp"] },
  { id: "admin-dashboard", price: 0, icon: BarChart3, category: "usermgmt", showFor: ["webapp"], includedIn: ["webapp"] },
  { id: "social-login", price: 200, priceMax: 300, icon: Users, category: "usermgmt", showFor: ["webapp"] },
  { id: "user-dashboard", price: 300, priceMax: 600, icon: BarChart3, category: "usermgmt", showFor: ["webapp"] },
  { id: "roles", price: 300, priceMax: 800, icon: Shield, category: "usermgmt", showFor: ["webapp"] },
  { id: "ssl-certificate", price: 0, icon: Lock, category: "security", showFor: ["eshop-large","webapp"], includedIn: ["eshop-large","webapp"] },
  { id: "2fa", price: 150, priceMax: 200, icon: Lock, category: "security", showFor: ["eshop-large","webapp"] },
  { id: "gdpr-full", price: 150, priceMax: 300, icon: Shield, category: "security", showFor: ["eshop-large","webapp"] },
  { id: "backup", price: 100, icon: Download, category: "security", showFor: ["eshop-large","webapp"], isYearly: true },
  { id: "erp", price: 800, priceMax: 2000, icon: Database, category: "integrations", showFor: ["eshop-large","webapp"] },
  { id: "crm", price: 400, priceMax: 800, icon: Users, category: "integrations", showFor: ["multipage","eshop-large","webapp"] },
  { id: "custom-api", price: 500, priceMax: 2000, icon: Database, category: "integrations", showFor: ["eshop-large","webapp"] },
  { id: "realtime-notifs", price: 400, priceMax: 700, icon: Bell, category: "advanced", showFor: ["webapp"] },
  { id: "search-engine", price: 400, priceMax: 800, icon: Search, category: "advanced", showFor: ["webapp","eshop-large"] },
  { id: "file-upload", price: 200, priceMax: 400, icon: Download, category: "advanced", showFor: ["webapp"] },
];

const supportPlansMeta = [
  { id: "none", monthlyPrice: 0, icon: RefreshCw, recommended: false },
  { id: "basic", monthlyPrice: 80, icon: Headphones, recommended: true },
  { id: "premium", monthlyPrice: 200, icon: Crown, recommended: false },
];

const stepIcons = [Layers, Sparkles, Shield, Mail];

/* ═══════════════════════════════════════
   STEP DOTS & INDICATOR (unchanged visuals)
═══════════════════════════════════════ */
function MobileStepDots({ current, total }) {
  return (<div className="flex items-center gap-2">{Array.from({ length: total }).map((_, i) => (<div key={i} className={`h-1 rounded-full transition-all duration-500 ${i === current ? 'w-6 bg-gradient-to-r from-ag-accent to-ag-accent/70' : i < current ? 'w-2 bg-ag-accent/40' : 'w-2 bg-ag-border/40'}`} />))}</div>);
}

function DesktopStepIndicator({ current, onNavigate, canNavigateTo, labels }) {
  return (
    <div className="hidden md:flex items-center gap-1 w-full max-w-2xl mx-auto">
      {labels.map((label, i) => {
        const isActive = i === current; const isCompleted = i < current; const clickable = canNavigateTo(i);
        return (
          <div key={i} className="flex items-center flex-1 last:flex-none">
            <button onClick={() => clickable && onNavigate(i)} disabled={!clickable} className={`flex items-center gap-2 text-xs font-mono tracking-widest whitespace-nowrap transition-all duration-300 ${clickable ? "cursor-pointer" : "cursor-default"} ${isActive ? "text-foreground" : isCompleted ? "text-ag-accent" : "text-ag-muted"}`}>
              <span className={`w-8 h-8 flex items-center justify-center text-xs font-bold flex-shrink-0 transition-all duration-300 ${isActive ? "bg-gradient-to-br from-ag-accent to-ag-accent/80 text-ag-bg shadow-[0_0_20px_rgba(212,175,55,0.15)]" : ""} ${isCompleted ? "bg-ag-accent/15 text-ag-accent border border-ag-accent/30" : ""} ${!isActive && !isCompleted ? "bg-card text-ag-muted border border-ag-border/50" : ""}`}>
                {isCompleted ? <Check size={12} strokeWidth={3} /> : i + 1}
              </span>
              <span>{label}</span>
            </button>
            {i < labels.length - 1 && (<div className={`flex-1 h-px mx-2 transition-all duration-500 ${isCompleted ? "bg-gradient-to-r from-ag-accent/40 to-ag-accent/10" : "bg-ag-border/30"}`} />)}
          </div>
        );
      })}
    </div>
  );
}

/* ═══════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════ */
export default function EstimatorPage() {
  const { t } = useTranslation();

  const [showEstimator, setShowEstimator] = useState(false);
  const [step, setStep] = useState(0);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [selectedSupport, setSelectedSupport] = useState(null);
  const [activeCat, setActiveCat] = useState("appearance");
  const [contactForm, setContactForm] = useState({ name: "", email: "", phone: "", company: "", notes: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showMobileIncluded, setShowMobileIncluded] = useState(false);
  const [showMobileSummary, setShowMobileSummary] = useState(false);
  const [showMobileCatPicker, setShowMobileCatPicker] = useState(false);  
  const [honeypotTriggered, setHoneypotTriggered] = useState(false);


  // Translation helpers
  const et = (key) => t(`estimator.${key}`);
  const typeT = (typeId) => t(`estimator.websiteTypes.${typeId}`);
  const catT = (catId) => t(`estimator.categories.${catId}`);
  const featT = (featId) => t(`estimator.features.${featId}`);
  const supportT = (planId) => t(`estimator.supportPlans.${planId}`);
  const stepLabels = et('stepLabels');

  // Build translated data
  const websiteTypes = useMemo(() => websiteTypesMeta.map(meta => {
    const tr = typeT(meta.id);
    return { ...meta, name: tr?.name || meta.id, desc: tr?.desc || '', timeEstimate: tr?.timeEstimate || '', idealFor: tr?.idealFor || '', includedFeatureNames: tr?.includedFeatures || [] };
  }), [t]);

  const allCategories = useMemo(() => Object.keys(categoryIcons).map(id => {
    const tr = catT(id);
    return { id, name: tr?.name || id, icon: categoryIcons[id], showFor: categoryShowFor[id], description: tr?.description || '' };
  }), [t]);

  const allFeatures = useMemo(() => allFeaturesMeta.map(meta => {
    const tr = featT(meta.id);
    return { ...meta, name: tr?.name || meta.id, desc: tr?.desc || '' };
  }), [t]);

  const supportPlans = useMemo(() => supportPlansMeta.map(meta => {
    const tr = supportT(meta.id);
    return { ...meta, name: tr?.name || meta.id, desc: tr?.desc || '', features: tr?.features || [] };
  }), [t]);

  const relevantCategories = useMemo(() => {
    if (!selectedType) return [];
    return allCategories.filter((cat) => cat.showFor.includes(selectedType));
  }, [selectedType, allCategories]);

  const visibleFeatures = useMemo(() => {
    if (!selectedType) return [];
    return allFeatures.filter((f) => f.category === activeCat && f.showFor.includes(selectedType));
  }, [activeCat, selectedType, allFeatures]);

  const selectedTypeData = websiteTypes.find((t) => t.id === selectedType);
  const selectedTypeMeta = websiteTypesMeta.find((t) => t.id === selectedType);

  const priceCalc = useMemo(() => {
    const meta = websiteTypesMeta.find((t) => t.id === selectedType);
    if (!meta) return { total: 0, monthly: 0, base: 0, featuresCost: 0 };
    const base = meta.basePrice;
    const featuresCost = selectedFeatures.reduce((sum, fId) => {
      const feature = allFeaturesMeta.find((f) => f.id === fId);
      if (!feature) return sum;
      if (feature.isMonthly || feature.isYearly) return sum;
      if (feature.includedIn?.includes(selectedType || "")) return sum;
      return sum + (feature.price || 0);
    }, 0);
    const total = base + featuresCost;
    const support = supportPlansMeta.find((s) => s.id === selectedSupport);
    const monthly = support?.monthlyPrice || 0;
    return { total, monthly, base, featuresCost };
  }, [selectedType, selectedFeatures, selectedSupport]);

  const canProceed = useCallback(() => {
    switch (step) { case 0: return !!selectedType; case 1: return true; case 2: return !!selectedSupport; case 3: return !!(contactForm.name && contactForm.email); default: return false; }
  }, [step, selectedType, selectedSupport, contactForm]);

  const canNavigateTo = useCallback((targetStep) => targetStep < step, [step]);
  const goNext = () => { if (canProceed() && step < 3) setStep(step + 1); };
  const goBack = () => { if (step > 0) setStep(step - 1); };

  const handleReset = () => {
    setStep(0); setSelectedType(null); setSelectedFeatures([]);
    setSelectedSupport(null); setActiveCat("appearance");
    setContactForm({ name: "", email: "", phone: "", company: "", notes: "" });
    setIsSubmitted(false); setHoneypotTriggered(false);
    window.__estimatorFormLoadTime = null;
  };
  
  const handleBackToLanding = () => { handleReset(); setShowEstimator(false); };

  const toggleFeature = (featureId) => { setSelectedFeatures((prev) => prev.includes(featureId) ? prev.filter((f) => f !== featureId) : [...prev, featureId]); };

 
  const handleSubmit = async () => {
    if (!contactForm.name || !contactForm.email) return;

    // ── Honeypot Check ──
    const honeypotField = document.querySelector('input[name="company_url"]');
    if (honeypotField && honeypotField.value) {
      setHoneypotTriggered(true);
      setIsSubmitted(true);
      return;
    }

    // ── Timing Check (bots submit in < 3 seconds) ──
    if (window.__estimatorFormLoadTime && (Date.now() - window.__estimatorFormLoadTime) < 3000) {
      setHoneypotTriggered(true);
      setIsSubmitted(true);
      return;
    }

    setIsSubmitting(true);
    const typeData = selectedTypeData;
    const supportData = supportPlans.find((s) => s.id === selectedSupport);
    const selectedFeatureNames = selectedFeatures.map((fId) => {
      const f = allFeatures.find((x) => x.id === fId);
      if (!f) return null;
      const isIncl = allFeaturesMeta.find(m => m.id === fId)?.includedIn?.includes(selectedType || "");
      return isIncl ? `${f.name} (included)` : `${f.name} (+€${allFeaturesMeta.find(m=>m.id===fId)?.price})`;
    }).filter(Boolean);
    const includedFeatureNames = allFeatures.filter((f) => {
      const m = allFeaturesMeta.find(x=>x.id===f.id);
      return m?.showFor.includes(selectedType) && m?.includedIn?.includes(selectedType) && !selectedFeatures.includes(f.id);
    }).map((f) => `${f.name} (included)`);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `New Estimator - ${typeData?.name || 'Unknown'}`,
          from_name: contactForm.name,
          name: contactForm.name,
          email: contactForm.email,
          phone: contactForm.phone || 'N/A',
          company: contactForm.company || 'N/A',
          notes: contactForm.notes || 'None',
          'Website Type': typeData?.name || 'N/A',
          'Base Price': `€${selectedTypeMeta?.basePrice?.toLocaleString("el-GR") || 0}`,
          'Time': typeData?.timeEstimate || 'N/A',
          'Included': includedFeatureNames.join(', ') || 'Default',
          'Extras': selectedFeatureNames.join(', ') || 'None',
          'Features Cost': `€${priceCalc.featuresCost.toLocaleString("el-GR")}`,
          'Support': supportData?.name || 'None',
          'Monthly': supportData?.monthlyPrice ? `€${supportData.monthlyPrice}/mo` : '€0',
          'Total': `€${priceCalc.total.toLocaleString("el-GR")}`
        })
      });
      const result = await res.json();
      if (result.success) setIsSubmitted(true);
    } catch {
      // Silent fail
    } finally {
      setIsSubmitting(false);
    }
  };

  const featurePriceLabel = (f) => {
    const meta = allFeaturesMeta.find(m => m.id === f.id);
    const sfx = meta?.isMonthly ? et('step2PerMonth') : meta?.isYearly ? et('step2PerYear') : "";
    if (meta?.priceMax) return `€${meta.price}–${meta.priceMax}${sfx}`;
    return `+€${meta?.price || 0}${sfx}`;
  };

  const activeCatDef = allCategories.find((c) => c.id === activeCat);
  const includedCount = useMemo(() => { if (!selectedType) return 0; return allFeaturesMeta.filter((f) => f.showFor.includes(selectedType) && f.includedIn?.includes(selectedType)).length; }, [selectedType]);
  const extraSelectedCount = useMemo(() => { if (!selectedType) return 0; return selectedFeatures.filter((fId) => { const f = allFeaturesMeta.find((x) => x.id === fId); return f && !f.includedIn?.includes(selectedType); }).length; }, [selectedType, selectedFeatures]);

  // Landing features from translations
  const landingFeatures = et('landingFeatures');
  const landingSteps = et('landingSteps');
  const landingInfoItems = et('landingInfoItems');

  // ─── LANDING PAGE ────────────────────
  const LandingPage = () => (
    <div className="flex-1 flex flex-col">
      <section className="relative pt-10 pb-12 md:pt-24 md:pb-32">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <PremiumBadge icon={Diamond}>{et('landingBadge')}</PremiumBadge>
            <GoldDivider className="my-6 md:my-8 max-w-xs mx-auto" />
            <h1 className="font-heading text-2xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 leading-tight tracking-tight">
              {et('landingTitle1')}<br />
              <span className="bg-gradient-to-r from-ag-accent via-ag-accent/90 to-ag-accent/70 bg-clip-text text-transparent">{et('landingTitle2')}</span>
            </h1>
            <p className="font-body text-ag-body text-sm md:text-lg max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed px-2">{et('landingSubtitle')}</p>
            <motion.button onClick={() => setShowEstimator(true)} className="group relative inline-flex items-center gap-3 px-8 md:px-10 py-3.5 md:py-4 font-heading font-semibold text-sm md:text-base overflow-hidden" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} data-cursor="hover">
              <div className="absolute inset-0 bg-gradient-to-r from-ag-accent via-ag-accent to-ag-accent/90" />
              <div className="absolute inset-0 bg-gradient-to-r from-ag-accent/0 via-white/10 to-ag-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="relative text-ag-bg flex items-center gap-3">{et('landingCta')} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" /></span>
            </motion.button>
            <p className="font-body text-ag-muted text-xs mt-4 flex items-center justify-center gap-2">
              <Diamond size={6} className="text-ag-accent/40" /> {et('landingFootnote')} <Diamond size={6} className="text-ag-accent/40" />
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 md:py-14 border-y border-ag-accent/10">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {Array.isArray(landingFeatures) && landingFeatures.map((item, i) => {
              const icons = [Clock, Layers, CreditCard, Sparkles];
              const LIcon = icons[i];
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group bg-card/50 border border-ag-border/50 p-4 md:p-6 text-center hover:border-ag-accent/20 transition-all duration-500">
                  <div className="w-10 h-10 bg-gradient-to-br from-ag-accent/10 to-ag-accent/5 border border-ag-accent/15 flex items-center justify-center mx-auto mb-2 md:mb-4"><LIcon size={18} className="text-ag-accent" /></div>
                  <h3 className="font-heading text-foreground font-semibold text-xs md:text-sm mb-0.5">{item.title}</h3>
                  <p className="font-body text-ag-body text-[11px] md:text-xs">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10 md:mb-14">
            <PremiumBadge icon={Star} variant="highlight">{et('landingHowBadge')}</PremiumBadge>
            <h2 className="font-heading text-xl md:text-3xl font-bold text-foreground mt-4 md:mt-6 mb-2">{et('landingHowTitle')}</h2>
            <GoldDivider className="mt-6 max-w-md mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 gap-4 md:gap-8">
            <div className="bg-card/50 border border-ag-border/50 p-5 md:p-8">
              <h3 className="font-heading text-sm font-semibold text-foreground mb-5 flex items-center gap-2">
                <div className="w-7 h-7 bg-gradient-to-br from-ag-accent/15 to-ag-accent/5 border border-ag-accent/20 flex items-center justify-center"><HelpCircle size={14} className="text-ag-accent" /></div>
                {et('landingStepsTitle')}
              </h3>
              <div className="space-y-4">
                {Array.isArray(landingSteps) && landingSteps.map((s, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="font-mono text-lg font-bold text-ag-accent/30">{s.n}</span>
                    <span className="font-heading text-foreground text-sm">{s.t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card/50 border border-ag-border/50 p-5 md:p-8">
              <h3 className="font-heading text-sm font-semibold text-foreground mb-5 flex items-center gap-2">
                <div className="w-7 h-7 bg-gradient-to-br from-ag-accent/15 to-ag-accent/5 border border-ag-accent/20 flex items-center justify-center"><Info size={14} className="text-ag-accent" /></div>
                {et('landingInfoTitle')}
              </h3>
              <div className="space-y-2">
                {Array.isArray(landingInfoItems) && landingInfoItems.map((info, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-ag-body">
                    <div className="w-3.5 h-3.5 bg-ag-accent/10 border border-ag-accent/15 flex items-center justify-center flex-shrink-0"><Check size={7} strokeWidth={3} className="text-ag-accent" /></div>
                    {info}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center mt-10 md:mt-16">
            <motion.button onClick={() => setShowEstimator(true)} className="group relative inline-flex items-center gap-3 px-8 py-3.5 font-heading font-semibold text-sm overflow-hidden" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <div className="absolute inset-0 bg-gradient-to-r from-ag-accent via-ag-accent to-ag-accent/90" />
              <span className="relative text-ag-bg flex items-center gap-3"><Calculator size={16} /> {et('landingStartCta')} <ArrowRight size={16} /></span>
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <div className="min-h-screen bg-background pt-24 relative flex flex-col" data-testid="estimator-page">
      <EstimatorBackground />

      {/* TOP BAR */}
      <div className="border-b border-ag-accent/10 relative z-10 backdrop-blur-sm bg-background/80">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-3 md:py-4 flex items-center justify-between">
          <Link href="/services" className="flex items-center gap-1.5 text-ag-body hover:text-foreground transition-colors text-sm group" data-cursor="hover">
            <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
            <span className="hidden sm:inline">{et('topBarServices')}</span>
          </Link>
          <div className="flex items-center gap-2 text-foreground">
            <div className="w-7 h-7 md:w-8 md:h-8 bg-gradient-to-br from-ag-accent/15 to-ag-accent/5 border border-ag-accent/20 flex items-center justify-center"><Diamond size={12} className="text-ag-accent" /></div>
            <span className="font-heading font-bold text-sm tracking-wide">{et('topBarTitle')}</span>
          </div>
          {showEstimator ? (
            <button onClick={handleBackToLanding} className="flex items-center gap-1 text-ag-muted hover:text-ag-body transition-colors text-xs" data-cursor="hover">
              <X size={14} /><span className="hidden sm:inline">{et('topBarClose')}</span>
            </button>
          ) : <div className="w-12" />}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {!showEstimator ? (
          <motion.div key="landing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="flex-1 flex flex-col"><LandingPage /></motion.div>
        ) : (
          <motion.div key="estimator" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="flex-1 flex flex-col">

            {/* ═══ MOBILE LAYOUT ═══ */}
            <div className="md:hidden flex-1 flex flex-col relative">
              <div className="sticky top-[73px] z-30 bg-background/95 backdrop-blur-md border-b border-ag-accent/10 px-4 py-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <MobileStepDots current={step} total={4} />
                    <span className="font-mono text-[10px] text-ag-muted tracking-wider uppercase ml-1">{Array.isArray(stepLabels) ? stepLabels[step] : ''}</span>
                  </div>
                  {step >= 1 && !isSubmitted && (
                    <button onClick={() => setShowMobileSummary(true)} className="flex items-center gap-1.5 bg-gradient-to-r from-ag-accent/10 to-ag-accent/5 border border-ag-accent/20 px-3 py-1.5">
                      <Diamond size={10} className="text-ag-accent" />
                      <span className="font-heading font-bold text-sm text-foreground">€{priceCalc.total.toLocaleString("el-GR")}</span>
                      <ChevronUp size={12} className="text-ag-accent/60" />
                    </button>
                  )}
                </div>
              </div>

              <MobileBottomSheet isOpen={showMobileSummary} onClose={() => setShowMobileSummary(false)} title={et('mobileSummaryTitle')}>
                <div className="text-center mb-4">
                  <div className="font-mono text-[10px] text-ag-accent/50 tracking-[0.2em] uppercase mb-1">{et('mobileSummaryEstimate')}</div>
                  <div className="font-heading text-4xl font-bold text-foreground">€{priceCalc.total.toLocaleString("el-GR")}</div>
                  {priceCalc.monthly > 0 && <div className="text-ag-accent text-sm mt-1">+ €{priceCalc.monthly}{et('step2PerMonth')}</div>}
                </div>
                <GoldDivider className="my-4" />
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between"><span className="text-ag-body">{et('mobileSummaryBase')}</span><span className="text-foreground font-mono">€{priceCalc.base.toLocaleString("el-GR")}</span></div>
                  <div className="flex justify-between"><span className="text-ag-body">{et('priceBarFeatures')}</span><span className="text-ag-accent font-mono">+€{priceCalc.featuresCost.toLocaleString("el-GR")}</span></div>
                  <div className="flex justify-between"><span className="text-ag-body">{et('step3Type')}</span><span className="text-foreground">{selectedTypeData?.name}</span></div>
                  {selectedSupport && <div className="flex justify-between"><span className="text-ag-body">{et('step3Support')}</span><span className="text-foreground">{supportPlans.find(s => s.id === selectedSupport)?.name}</span></div>}
                </div>
                <div className="mt-4 p-3 bg-ag-surface/30 border border-ag-border/30 text-center">
                  <div className="font-mono text-[10px] text-ag-muted">{et('mobileSummaryInstallments')} €{Math.round(priceCalc.total / 6).toLocaleString("el-GR")}{et('step2PerMonth')} × 6</div>
                  <div className="font-mono text-[10px] text-ag-muted mt-1">{et('step3InstallmentNote')}</div>
                </div>
              </MobileBottomSheet>

              <MobileBottomSheet isOpen={showMobileIncluded} onClose={() => setShowMobileIncluded(false)} title={`${et('mobileIncludedTitle')} ${selectedTypeData?.name || ''}`}>
                <div className="space-y-2">
                  {selectedTypeData?.includedFeatureNames.map((name, i) => {
                    const FIcon = selectedTypeMeta?.includedFeatureIcons[i] || Check;
                    return (
                      <div key={i} className="flex items-center gap-3 p-3 bg-ag-accent/[0.04] border border-ag-accent/10">
                        <div className="w-5 h-5 bg-ag-accent/15 border border-ag-accent/25 flex items-center justify-center"><Check size={10} strokeWidth={3} className="text-ag-accent" /></div>
                        <FIcon size={14} className="text-ag-accent/70" />
                        <span className="text-sm text-foreground">{name}</span>
                      </div>
                    );
                  })}
                </div>
              </MobileBottomSheet>

              <MobileBottomSheet isOpen={showMobileCatPicker} onClose={() => setShowMobileCatPicker(false)} title={et('mobileCategoriesTitle')}>
                <div className="space-y-1">
                  {relevantCategories.map((cat) => {
                    const CatIcon = cat.icon;
                    const count = allFeaturesMeta.filter((f) => f.category === cat.id && selectedType && f.showFor.includes(selectedType) && selectedFeatures.includes(f.id) && !f.includedIn?.includes(selectedType)).length;
                    return (
                      <button key={cat.id} onClick={() => { setActiveCat(cat.id); setShowMobileCatPicker(false); }} className={`w-full text-left flex items-center justify-between p-3 transition-all ${activeCat === cat.id ? "bg-ag-accent/10 border-l-2 border-ag-accent" : "border-l-2 border-transparent"}`}>
                        <div className="flex items-center gap-3">
                          <CatIcon size={16} className={activeCat === cat.id ? "text-ag-accent" : "text-ag-body"} />
                          <div>
                            <div className={`text-sm font-medium ${activeCat === cat.id ? "text-ag-accent" : "text-foreground"}`}>{cat.name}</div>
                            <div className="text-[11px] text-ag-muted">{cat.description}</div>
                          </div>
                        </div>
                        {count > 0 && <span className="bg-ag-accent text-ag-bg text-[10px] w-5 h-5 flex items-center justify-center font-mono font-bold">{count}</span>}
                      </button>
                    );
                  })}
                </div>
              </MobileBottomSheet>

              {/* Mobile Content Area */}
              <div className="flex-1 px-4 py-4 pb-24 overflow-y-auto">
                <AnimatePresence mode="wait">
                  {step === 0 && (
                    <FadeUp key="m-step0">
                      <h2 className="font-heading text-lg font-bold text-foreground mb-1">{et('step0MobileTitle')}</h2>
                      <p className="font-body text-ag-body text-xs mb-4">{et('step0MobileSubtitle')}</p>
                      <div className="space-y-2.5">
                        {websiteTypes.map((type) => {
                          const Icon = type.icon; const isSel = selectedType === type.id;
                          return (
                            <button key={type.id} onClick={() => { setSelectedType(type.id); setSelectedFeatures([]); const fc = allCategories.find((c) => c.showFor.includes(type.id)); setActiveCat(fc?.id || "appearance"); }}
                              className={`w-full text-left flex items-center gap-3.5 p-3.5 border transition-all duration-300 ${isSel ? "border-ag-accent/40 bg-gradient-to-r from-ag-accent/[0.06] to-transparent" : "border-ag-border/30 bg-card/30"}`}>
                              <div className={`w-8 h-8 flex items-center justify-center flex-shrink-0 border transition-all ${isSel ? "bg-gradient-to-br from-ag-accent to-ag-accent/80 border-ag-accent" : "bg-card border-ag-border/40"}`}>
                                {isSel ? <Check size={14} strokeWidth={3} className="text-ag-bg" /> : <Icon size={16} className="text-ag-body/60" />}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                  <span className="font-heading text-sm font-semibold text-foreground">{type.name}</span>
                                  {type.popular && <Crown size={10} className="text-ag-accent" />}
                                </div>
                                <div className="font-body text-[11px] text-ag-body mt-0.5 line-clamp-1">{type.desc}</div>
                              </div>
                              <div className="text-right flex-shrink-0">
                                <div className="font-mono text-sm font-semibold text-ag-accent">€{type.basePrice.toLocaleString("el-GR")}</div>
                                <div className="font-mono text-[10px] text-ag-muted">{type.timeEstimate}</div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                      {selectedTypeData && (
                        <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={() => setShowMobileIncluded(true)} className="w-full mt-4 flex items-center justify-between p-3 border border-ag-accent/15 bg-ag-accent/[0.04]">
                          <div className="flex items-center gap-2"><Check size={14} className="text-ag-accent" /><span className="text-xs text-foreground font-medium">{selectedTypeData.includedFeatureNames.length} {et('step0FeaturesIncluded')}</span></div>
                          <ChevronRight size={14} className="text-ag-accent/60" />
                        </motion.button>
                      )}
                    </FadeUp>
                  )}

                  {step === 1 && (
                    <FadeUp key="m-step1">
                      <div className="flex items-center justify-between mb-3">
                        <h2 className="font-heading text-lg font-bold text-foreground">{et('step1Title')}</h2>
                        <span className="font-mono text-[10px] text-ag-accent">{extraSelectedCount} {et('step1Extra')}</span>
                      </div>
                      <div className="flex gap-1.5 overflow-x-auto pb-3 -mx-4 px-4 scrollbar-none mb-3">
                        {relevantCategories.map((cat) => {
                          const CatIcon = cat.icon; const isAct = activeCat === cat.id;
                          const count = allFeaturesMeta.filter((f) => f.category === cat.id && selectedType && f.showFor.includes(selectedType) && selectedFeatures.includes(f.id) && !f.includedIn?.includes(selectedType)).length;
                          return (
                            <button key={cat.id} onClick={() => setActiveCat(cat.id)} className={`flex items-center gap-1.5 px-3 py-2 whitespace-nowrap text-xs font-medium border transition-all flex-shrink-0 ${isAct ? "border-ag-accent/30 bg-ag-accent/10 text-ag-accent" : "border-ag-border/30 bg-card/30 text-ag-body"}`}>
                              <CatIcon size={12} />{cat.name}
                              {count > 0 && <span className="bg-ag-accent text-ag-bg text-[9px] w-4 h-4 flex items-center justify-center font-mono font-bold">{count}</span>}
                            </button>
                          );
                        })}
                      </div>
                      <div className="space-y-2">
                        {visibleFeatures.length === 0 && <div className="text-center py-8 text-ag-muted text-sm">{et('step1NoFeatures')}</div>}
                        {visibleFeatures.map((feature) => {
                          const meta = allFeaturesMeta.find(m => m.id === feature.id);
                          const isSel = selectedFeatures.includes(feature.id); const FIcon = meta?.icon || Check;
                          const isIncl = meta?.includedIn?.includes(selectedType || "") || false;
                          return (
                            <button key={feature.id} onClick={() => { if (!isIncl) toggleFeature(feature.id); }}
                              className={`w-full text-left flex items-center gap-3 p-3 border transition-all ${isIncl ? "border-ag-accent/20 bg-ag-accent/[0.04] cursor-default" : isSel ? "border-ag-accent/30 bg-ag-accent/[0.06]" : "border-ag-border/30 bg-card/30 active:bg-card/60"}`}>
                              <div className={`w-5 h-5 flex items-center justify-center flex-shrink-0 border transition-all ${isIncl ? "bg-ag-accent/15 border-ag-accent/30" : isSel ? "bg-ag-accent border-ag-accent" : "border-ag-body/30"}`}>
                                {(isSel || isIncl) && <Check size={10} strokeWidth={3} className={isIncl ? "text-ag-accent" : "text-ag-bg"} />}
                              </div>
                              <FIcon size={15} className={isIncl || isSel ? "text-ag-accent flex-shrink-0" : "text-ag-body/60 flex-shrink-0"} />
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-1.5">
                                  <span className="text-sm text-foreground font-medium truncate">{feature.name}</span>
                                  {isIncl && <span className="font-mono text-[8px] bg-ag-accent/10 text-ag-accent border border-ag-accent/15 px-1 py-0.5">INCL</span>}
                                </div>
                              </div>
                              <div className="flex-shrink-0">
                                {isIncl ? <span className="font-mono text-[11px] text-ag-accent">✓</span> : <span className="font-mono text-[11px] text-ag-accent/80">{featurePriceLabel(feature)}</span>}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </FadeUp>
                  )}

                  {step === 2 && (
                    <FadeUp key="m-step2">
                      <h2 className="font-heading text-lg font-bold text-foreground mb-1">{et('step2MobileTitle')}</h2>
                      <p className="font-body text-ag-body text-xs mb-4">{et('step2Subtitle')}</p>
                      <div className="space-y-3">
                        {supportPlans.map((plan) => {
                          const meta = supportPlansMeta.find(m => m.id === plan.id);
                          const PlanIcon = meta?.icon || RefreshCw; const isSel = selectedSupport === plan.id;
                          return (
                            <button key={plan.id} onClick={() => setSelectedSupport(plan.id)} className={`w-full text-left relative p-4 border transition-all ${isSel ? "border-ag-accent/40 bg-gradient-to-r from-ag-accent/[0.06] to-transparent" : "border-ag-border/30 bg-card/30"}`}>
                              {isSel && <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ag-accent/40 to-transparent" />}
                              <div className="flex items-start gap-3">
                                <div className={`w-8 h-8 flex items-center justify-center border flex-shrink-0 transition-all ${isSel ? "bg-gradient-to-br from-ag-accent to-ag-accent/80 border-ag-accent" : "bg-card border-ag-border/40"}`}>
                                  {isSel ? <Check size={14} strokeWidth={3} className="text-ag-bg" /> : <PlanIcon size={14} className="text-ag-body/60" />}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2">
                                    <span className="font-heading text-sm font-semibold text-foreground">{plan.name}</span>
                                    {meta?.recommended && <Star size={10} className="text-ag-accent" />}
                                  </div>
                                  <p className="text-[11px] text-ag-body mt-0.5">{plan.desc}</p>
                                  <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2">
                                    {plan.features.map((f, i) => (<span key={i} className="text-[10px] text-ag-muted flex items-center gap-1"><Check size={7} strokeWidth={3} className="text-ag-accent/50" />{f}</span>))}
                                  </div>
                                </div>
                                <div className="text-right flex-shrink-0">
                                  <div className="font-mono text-base font-bold text-ag-accent">{meta?.monthlyPrice === 0 ? "€0" : `€${meta?.monthlyPrice}`}</div>
                                  {meta?.monthlyPrice > 0 && <div className="font-mono text-[10px] text-ag-muted">{et('step2PerMonth')}</div>}
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </FadeUp>
                  )}

                  {step === 3 && !isSubmitted && (
                  <FadeUp key="m-step3">
                      <div ref={(el) => { if (el && !window.__estimatorFormLoadTime) window.__estimatorFormLoadTime = Date.now(); }} />
                      <h2 className="font-heading text-lg font-bold text-foreground mb-1">{et('step3MobileTitle')}</h2>
                      <p className="font-body text-ag-body text-xs mb-4">{et('step3MobileSubtitle')}</p>
                     
                          {/* Honeypot fields — invisible to humans */}
                          <div
                            aria-hidden="true"
                            style={{
                              position: 'absolute',
                              left: '-9999px',
                              top: '-9999px',
                              opacity: 0,
                              height: 0,
                              width: 0,
                              overflow: 'hidden',
                            }}
                          >
                            <label htmlFor="est_company_url">Website URL</label>
                            <input
                              type="url"
                              id="est_company_url"
                              name="company_url"
                              tabIndex={-1}
                              autoComplete="off"
                              placeholder="https://yourwebsite.com"
                            />
                          </div>
                          <input
                            type="checkbox"
                            name="botcheck"
                            style={{ display: 'none' }}
                            tabIndex={-1}
                          /> 
                      <div className="p-3 border border-ag-accent/20 bg-ag-accent/[0.04] mb-4 flex items-center justify-between">
                        <div>
                          <div className="font-mono text-[10px] text-ag-accent/50 tracking-wider">{et('step3Cost')}</div>
                          <div className="font-heading text-xl font-bold text-foreground">€{priceCalc.total.toLocaleString("el-GR")}</div>
                        </div>
                        {priceCalc.monthly > 0 && (
                          <div className="text-right">
                            <div className="font-mono text-[10px] text-ag-muted">{et('step3Support').toUpperCase()}</div>
                            <div className="font-heading text-base font-bold text-ag-accent">€{priceCalc.monthly}/μο</div>
                          </div>
                        )}
                      </div>
                      <div className="space-y-3">
                        <div><label className="font-mono text-[10px] text-ag-accent/50 mb-1 block tracking-wider">{et('step3Name').toUpperCase()} *</label><input type="text" value={contactForm.name} onChange={(e) => setContactForm((p) => ({ ...p, name: e.target.value }))} placeholder={et('step3Name')} className="w-full bg-background/50 border border-ag-border/40 px-3 py-2.5 text-foreground placeholder:text-ag-muted/40 focus:border-ag-accent/40 focus:outline-none text-sm" data-testid="input-name" /></div>
                        <div><label className="font-mono text-[10px] text-ag-accent/50 mb-1 block tracking-wider">{et('step3Email').toUpperCase()} *</label><input type="email" value={contactForm.email} onChange={(e) => setContactForm((p) => ({ ...p, email: e.target.value }))} placeholder="email@example.com" className="w-full bg-background/50 border border-ag-border/40 px-3 py-2.5 text-foreground placeholder:text-ag-muted/40 focus:border-ag-accent/40 focus:outline-none text-sm" data-testid="input-email" /></div>
                        <div className="grid grid-cols-2 gap-3">
                          <div><label className="font-mono text-[10px] text-ag-accent/50 mb-1 block tracking-wider">{et('step3Phone').toUpperCase()}</label><input type="tel" value={contactForm.phone} onChange={(e) => setContactForm((p) => ({ ...p, phone: e.target.value }))} placeholder="69..." className="w-full bg-background/50 border border-ag-border/40 px-3 py-2.5 text-foreground placeholder:text-ag-muted/40 focus:border-ag-accent/40 focus:outline-none text-sm" /></div>
                          <div><label className="font-mono text-[10px] text-ag-accent/50 mb-1 block tracking-wider">{et('step3Company').toUpperCase()}</label><input type="text" value={contactForm.company} onChange={(e) => setContactForm((p) => ({ ...p, company: e.target.value }))} placeholder={et('step3Optional')} className="w-full bg-background/50 border border-ag-border/40 px-3 py-2.5 text-foreground placeholder:text-ag-muted/40 focus:border-ag-accent/40 focus:outline-none text-sm" /></div>
                        </div>
                        <div><label className="font-mono text-[10px] text-ag-accent/50 mb-1 block tracking-wider">{et('step3Notes').toUpperCase()}</label><textarea value={contactForm.notes} onChange={(e) => setContactForm((p) => ({ ...p, notes: e.target.value }))} rows={3} placeholder="..." className="w-full bg-background/50 border border-ag-border/40 px-3 py-2.5 text-foreground placeholder:text-ag-muted/40 focus:border-ag-accent/40 focus:outline-none text-sm resize-none" /></div>
                      </div>
                    </FadeUp>
                  )}

                  {step === 3 && isSubmitted && (
                    <FadeUp key="m-success">
                      <div className="text-center py-10">
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", duration: 0.6 }} className="w-16 h-16 bg-gradient-to-br from-ag-accent/15 to-ag-accent/5 border border-ag-accent/25 flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(212,175,55,0.1)]"><Check size={28} className="text-ag-accent" /></motion.div>
                        <h2 className="font-heading text-xl font-bold text-foreground mb-2">{et('successTitle')}</h2>
                        <p className="font-body text-ag-body text-sm mb-1">{et('successReply')}</p>
                        <p className="text-ag-accent text-sm font-medium mb-4">{contactForm.email}</p>
                        <GoldDivider className="my-4 max-w-[150px] mx-auto" />
                        <div className="bg-card/50 border border-ag-accent/20 p-4 inline-block mb-6">
                          <div className="font-heading text-2xl font-bold text-foreground">€{priceCalc.total.toLocaleString("el-GR")}</div>
                          {priceCalc.monthly > 0 && <div className="text-ag-accent text-xs mt-1">+ €{priceCalc.monthly}{et('step2PerMonth')}</div>}
                        </div>
                        <div className="flex items-center justify-center gap-4">
                          <button onClick={handleReset} className="text-ag-body text-sm flex items-center gap-1"><RefreshCw size={14} /> {et('successNewEstimate')}</button>
                          <Link href="/" className="text-ag-accent text-sm flex items-center gap-1">{et('successHome')} <ArrowUpRight size={14} /></Link>
                        </div>
                      </div>
                    </FadeUp>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Bottom Nav */}
              {!isSubmitted && (
                <div className="fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-t border-ag-accent/15 px-4 py-3 safe-bottom">
                  <div className="flex items-center gap-3">
                    {step > 0 && (<button onClick={goBack} className="w-10 h-10 flex items-center justify-center border border-ag-border/40 bg-card/50 text-ag-body"><ChevronLeft size={18} /></button>)}
                    {step < 3 ? (
                      <button onClick={goNext} disabled={!canProceed()} className="flex-1 h-10 relative overflow-hidden font-heading font-semibold text-sm disabled:opacity-30 disabled:cursor-not-allowed">
                        <div className="absolute inset-0 bg-gradient-to-r from-ag-accent via-ag-accent to-ag-accent/90" />
                        <span className="relative text-ag-bg flex items-center justify-center gap-2">{step === 2 ? et('navSummary') : et('navNext')} <ChevronRight size={16} /></span>
                      </button>
                    ) : (
                      <button onClick={handleSubmit} disabled={!contactForm.name || !contactForm.email || isSubmitting} className="flex-1 h-10 relative overflow-hidden font-heading font-semibold text-sm disabled:opacity-30 disabled:cursor-not-allowed" data-testid="submit-btn">
                        <div className="absolute inset-0 bg-gradient-to-r from-ag-accent via-ag-accent to-ag-accent/90" />
                        <span className="relative text-ag-bg flex items-center justify-center gap-2">
                          {isSubmitting ? <><div className="w-4 h-4 border-2 border-ag-bg/30 border-t-ag-bg rounded-full animate-spin" /> {et('step3Submitting')}</> : <><Diamond size={14} /> {et('step3Submit')} <ArrowRight size={16} /></>}
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* ═══ DESKTOP LAYOUT ═══ */}
            <main className="hidden md:block max-w-6xl mx-auto px-8 py-12 relative z-10 w-full">
              <div className="mb-10">
                <DesktopStepIndicator current={step} onNavigate={setStep} canNavigateTo={canNavigateTo} labels={Array.isArray(stepLabels) ? stepLabels : []} />
              </div>

              {/* Desktop Price Bar */}
              {step >= 1 && !isSubmitted && (
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-ag-accent/5 via-ag-accent/[0.02] to-ag-accent/5" />
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ag-accent/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ag-accent/10 to-transparent" />
                  <div className="relative bg-card/80 backdrop-blur-sm border border-ag-accent/15 p-6">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-6">
                        <div>
                          <div className="font-mono text-[10px] text-ag-accent/60 mb-1.5 tracking-[0.2em] uppercase flex items-center gap-1.5"><Diamond size={8} /> {et('priceBarLabel')}</div>
                          <div className="text-3xl font-heading font-bold text-foreground tracking-tight">€{priceCalc.total.toLocaleString("el-GR")}</div>
                        </div>
                        {priceCalc.monthly > 0 && (
                          <div className="pl-6 border-l border-ag-accent/15">
                            <div className="font-mono text-[10px] text-ag-muted mb-1.5 tracking-[0.15em] uppercase">{et('priceBarMonthly')}</div>
                            <div className="text-xl font-heading font-bold text-ag-accent">€{priceCalc.monthly}<span className="text-sm font-normal text-ag-accent/60">/μο</span></div>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-4 font-mono text-xs text-ag-muted">
                        {priceCalc.featuresCost > 0 && <span className="text-ag-body">{et('priceBarFeatures')}: <span className="text-ag-accent">+€{priceCalc.featuresCost.toLocaleString("el-GR")}</span></span>}
                        <span className="bg-ag-accent/5 border border-ag-accent/10 px-2.5 py-1 text-ag-accent/70 text-[10px] tracking-wider">{et('priceBarVariance')}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* D STEP 0 */}
              {step === 0 && (
                <FadeUp>
                  <div className="mb-10">
                    <PremiumBadge icon={Layers}>{et('step0Badge')}</PremiumBadge>
                    <h1 className="font-heading text-3xl font-bold text-foreground mt-4 mb-2 tracking-tight">{et('step0Title')}</h1>
                    <p className="font-body text-ag-body text-sm">{et('step0Subtitle')}</p>
                    <GoldDivider className="mt-6 max-w-sm" />
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {websiteTypes.map((type, idx) => {
                      const Icon = type.icon; const isSel = selectedType === type.id;
                      return (
                        <motion.button key={type.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: idx * 0.08 }}
                          onClick={() => { setSelectedType(type.id); setSelectedFeatures([]); const fc = allCategories.find((c) => c.showFor.includes(type.id)); setActiveCat(fc?.id || "appearance"); }}
                          className={`group relative text-left p-6 border transition-all duration-500 ${isSel ? "border-ag-accent/40 bg-gradient-to-b from-ag-accent/[0.06] to-ag-accent/[0.02] shadow-[0_0_30px_rgba(212,175,55,0.06)]" : "border-ag-border/40 bg-card/50 hover:border-ag-accent/15"}`}
                          data-cursor="hover" data-testid={`type-${type.id}`}>
                          {isSel && <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ag-accent/40 to-transparent" />}
                          {type.popular && <span className="absolute top-3 right-3 font-mono text-[10px] font-bold bg-gradient-to-r from-ag-accent/15 to-ag-accent/5 text-ag-accent px-2.5 py-1 border border-ag-accent/20 tracking-widest flex items-center gap-1"><Crown size={8} /> {et('step0Popular')}</span>}
                          <div className={`w-10 h-10 flex items-center justify-center border transition-all duration-500 ${isSel ? "bg-gradient-to-br from-ag-accent/15 to-ag-accent/5 border-ag-accent/25" : "bg-ag-surface/30 border-ag-border/30"}`}><Icon size={20} className={isSel ? "text-ag-accent" : "text-ag-body"} /></div>
                          <h3 className="font-heading text-foreground font-semibold mt-4 mb-1.5 text-base">{type.name}</h3>
                          <p className="font-body text-ag-body text-xs leading-relaxed mb-4">{type.desc}</p>
                          <div className="flex items-center justify-between pt-4 border-t border-ag-border/30">
                            <span className="font-mono text-sm font-semibold text-ag-accent">{et('step0From')} €{type.basePrice.toLocaleString("el-GR")}</span>
                            <span className="font-mono text-ag-muted text-xs flex items-center gap-1"><Clock size={10} />{type.timeEstimate}</span>
                          </div>
                          <p className="font-body text-[11px] text-ag-muted mt-2.5 italic">{et('step0IdealFor')}: {type.idealFor}</p>
                          {isSel && <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute top-3 left-3 w-6 h-6 bg-gradient-to-br from-ag-accent to-ag-accent/80 flex items-center justify-center shadow-[0_0_10px_rgba(212,175,55,0.2)]"><Check size={12} strokeWidth={3} className="text-ag-bg" /></motion.div>}
                        </motion.button>
                      );
                    })}
                  </div>
                  {selectedTypeData && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-8 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-ag-accent/30 via-ag-accent/10 to-transparent" />
                      <div className="bg-card/50 border border-ag-accent/15 p-6">
                        <h3 className="font-heading text-sm font-semibold text-foreground mb-5 flex items-center gap-2.5">
                          <div className="w-6 h-6 bg-ag-accent/10 border border-ag-accent/20 flex items-center justify-center"><Check size={12} className="text-ag-accent" /></div>
                          {et('step0IncludedIn')} {selectedTypeData.name}:
                        </h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
                          {selectedTypeData.includedFeatureNames.map((name, i) => {
                            const FI = selectedTypeMeta?.includedFeatureIcons[i] || Check;
                            return (
                              <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: i * 0.05 }} className="flex items-center gap-2.5 font-body text-sm text-foreground/80 py-2 px-3 bg-gradient-to-r from-ag-accent/[0.04] to-transparent border border-ag-accent/10">
                                <div className="w-4 h-4 bg-ag-accent/15 border border-ag-accent/30 flex items-center justify-center flex-shrink-0"><Check size={8} strokeWidth={3} className="text-ag-accent" /></div>
                                <FI size={14} className="text-ag-accent/70 flex-shrink-0" />
                                <span className="text-xs">{name}</span>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </FadeUp>
              )}

              {/* D STEP 1 */}
              {step === 1 && (
                <FadeUp>
                  <div className="mb-8">
                    <PremiumBadge icon={Sparkles}>{et('step1Badge')}</PremiumBadge>
                    <h1 className="font-heading text-3xl font-bold text-foreground mt-4 mb-1 tracking-tight">{et('step1Title')}</h1>
                    <p className="font-body text-ag-body text-sm">{et('step1Subtitle')}</p>
                    <GoldDivider className="mt-5 max-w-sm" />
                  </div>
                  <div className="flex gap-6">
                    <div className="w-60 flex-shrink-0">
                      <div className="sticky top-24 space-y-1 bg-card/30 border border-ag-border/30 p-2">
                        {relevantCategories.map((cat) => {
                          const CI = cat.icon;
                          const countS = allFeaturesMeta.filter((f) => f.category === cat.id && selectedType && f.showFor.includes(selectedType) && selectedFeatures.includes(f.id) && !f.includedIn?.includes(selectedType)).length;
                          const countI = allFeaturesMeta.filter((f) => f.category === cat.id && selectedType && f.showFor.includes(selectedType) && (f.includedIn?.includes(selectedType) || false)).length;
                          const isA = activeCat === cat.id;
                          return (
                            <button key={cat.id} onClick={() => setActiveCat(cat.id)} className={`w-full text-left flex items-center justify-between gap-2 px-3 py-2.5 text-sm transition-all duration-300 ${isA ? "bg-gradient-to-r from-ag-accent/10 to-ag-accent/[0.03] text-ag-accent border-l-2 border-ag-accent" : "text-ag-body hover:text-foreground border-l-2 border-transparent"}`} data-cursor="hover">
                              <div className="flex items-center gap-2.5 min-w-0"><CI size={15} className="flex-shrink-0" /><span className="truncate text-xs">{cat.name}</span></div>
                              <div className="flex items-center gap-1">
                                {countI > 0 && <span className="bg-ag-accent/15 text-ag-accent text-[10px] w-4 h-4 flex items-center justify-center font-mono font-bold">{countI}</span>}
                                {countS > 0 && <span className="bg-ag-accent text-ag-bg text-[10px] w-4 h-4 flex items-center justify-center font-mono font-bold shadow-[0_0_6px_rgba(212,175,55,0.2)]">{countS}</span>}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      {activeCatDef && (
                        <div className="mb-5 pb-5 border-b border-ag-accent/10">
                          <h2 className="font-heading text-foreground font-semibold text-base mb-0.5">{activeCatDef.name}</h2>
                          {activeCatDef.description && <p className="font-body text-ag-muted text-xs">{activeCatDef.description}</p>}
                        </div>
                      )}
                      <div className="space-y-2.5">
                        {visibleFeatures.length === 0 && <div className="text-center py-12 text-ag-muted text-sm">{et('step1NoFeatures')}</div>}
                        {visibleFeatures.map((feature, idx) => {
                          const meta = allFeaturesMeta.find(m => m.id === feature.id);
                          const isSel = selectedFeatures.includes(feature.id); const FI = meta?.icon || Check; const isIncl = meta?.includedIn?.includes(selectedType || "") || false;
                          return (
                            <motion.button key={feature.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: idx * 0.03 }}
                              onClick={() => { if (!isIncl) toggleFeature(feature.id); }}
                              className={`group w-full text-left flex items-center gap-4 p-4 border transition-all duration-300 ${isIncl ? "border-ag-accent/20 bg-gradient-to-r from-ag-accent/[0.04] to-transparent cursor-default" : isSel ? "border-ag-accent/30 bg-gradient-to-r from-ag-accent/[0.06] to-ag-accent/[0.02] shadow-[0_0_15px_rgba(212,175,55,0.04)]" : "border-ag-border/30 bg-card/30 hover:border-ag-accent/15"}`}
                              data-cursor={isIncl ? "default" : "hover"}>
                              <div className={`w-5 h-5 flex items-center justify-center flex-shrink-0 border transition-all duration-300 ${isIncl ? "bg-ag-accent/15 border-ag-accent/30" : isSel ? "bg-gradient-to-br from-ag-accent to-ag-accent/80 border-ag-accent shadow-[0_0_8px_rgba(212,175,55,0.15)]" : "bg-transparent border-ag-body/30"}`}>
                                {(isSel || isIncl) && <Check size={11} strokeWidth={3} className={isIncl ? "text-ag-accent" : "text-ag-bg"} />}
                              </div>
                              <FI size={18} className={`transition-colors flex-shrink-0 ${isIncl || isSel ? "text-ag-accent" : "text-ag-body/60"}`} />
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <span className="font-body text-sm text-foreground font-medium">{feature.name}</span>
                                  {isIncl && <span className="font-mono text-[10px] bg-gradient-to-r from-ag-accent/10 to-ag-accent/5 text-ag-accent border border-ag-accent/15 px-1.5 py-0.5 tracking-wider">{et('step0Included')}</span>}
                                  {(meta?.isMonthly || meta?.isYearly) && !isIncl && <span className="font-mono text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/20 px-1.5 py-0.5">{meta?.isMonthly ? et('step1Monthly') : et('step1Yearly')}</span>}
                                </div>
                                <div className="font-body text-xs text-ag-body mt-0.5">{feature.desc}</div>
                              </div>
                              <div className="text-right flex-shrink-0">{isIncl ? <div className="font-mono text-xs text-ag-accent font-medium">✓ €0</div> : <div className="font-mono text-sm text-ag-accent/80">{featurePriceLabel(feature)}</div>}</div>
                            </motion.button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ag-accent/15 to-transparent" />
                    <div className="p-4 bg-card/30 border border-ag-border/30">
                      <div className="flex items-center justify-between font-mono text-sm">
                        <div className="flex items-center gap-4"><span className="text-ag-accent flex items-center gap-1.5"><Diamond size={8} />{includedCount} {et('step1Included')}</span><span className="text-ag-body">+ {extraSelectedCount} {et('step1Extra')}</span></div>
                        <span className="font-bold bg-gradient-to-r from-ag-accent to-ag-accent/80 bg-clip-text text-transparent">+€{priceCalc.featuresCost.toLocaleString("el-GR")}</span>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              )}

              {/* D STEP 2 */}
              {step === 2 && (
                <FadeUp>
                  <div className="mb-10">
                    <PremiumBadge icon={Shield}>{et('step2Badge')}</PremiumBadge>
                    <h1 className="font-heading text-3xl font-bold text-foreground mt-4 mb-2 tracking-tight">{et('step2Title')}</h1>
                    <p className="font-body text-ag-body text-sm">{et('step2Subtitle')}</p>
                    <GoldDivider className="mt-6 max-w-sm" />
                  </div>
                  <div className="grid sm:grid-cols-3 gap-5">
                    {supportPlans.map((plan, idx) => {
                      const meta = supportPlansMeta.find(m => m.id === plan.id);
                      const PI = meta?.icon || RefreshCw; const isSel = selectedSupport === plan.id;
                      return (
                        <motion.button key={plan.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: idx * 0.1 }}
                          onClick={() => setSelectedSupport(plan.id)}
                          className={`group relative text-left p-6 border transition-all duration-500 flex flex-col ${isSel ? "border-ag-accent/40 bg-gradient-to-b from-ag-accent/[0.06] to-ag-accent/[0.02] shadow-[0_0_30px_rgba(212,175,55,0.06)]" : "border-ag-border/40 bg-card/50 hover:border-ag-accent/15"}`}
                          data-cursor="hover" data-testid={`support-${plan.id}`}>
                          {isSel && <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ag-accent/40 to-transparent" />}
                          {meta?.recommended && <span className="absolute top-3 right-3 font-mono text-[10px] font-bold bg-gradient-to-r from-ag-accent/15 to-ag-accent/5 text-ag-accent px-2.5 py-1 border border-ag-accent/20 tracking-widest flex items-center gap-1"><Star size={8} /> {et('step2Recommended')}</span>}
                          <div className={`w-10 h-10 flex items-center justify-center border transition-all ${isSel ? "bg-gradient-to-br from-ag-accent/15 to-ag-accent/5 border-ag-accent/25" : "bg-ag-surface/30 border-ag-border/30"}`}><PI size={18} className={isSel ? "text-ag-accent" : "text-ag-body"} /></div>
                          <h3 className="font-heading text-foreground font-semibold mt-4 mb-1.5">{plan.name}</h3>
                          <p className="font-body text-ag-body text-xs leading-relaxed mb-5">{plan.desc}</p>
                          <ul className="space-y-2 mb-5 flex-1">
                            {plan.features.map((f, i) => <li key={i} className="flex items-start gap-2.5 text-xs text-ag-body"><div className="w-3.5 h-3.5 bg-ag-accent/10 border border-ag-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5"><Check size={7} strokeWidth={3} className="text-ag-accent" /></div>{f}</li>)}
                          </ul>
                          <div className="pt-4 border-t border-ag-border/30">
                            <span className="font-mono font-bold text-xl text-ag-accent">{meta?.monthlyPrice === 0 ? "€0" : `€${meta?.monthlyPrice}`}</span>
                            {meta?.monthlyPrice > 0 && <><span className="text-ag-accent/50 text-sm font-mono">{et('step2PerMonth')}</span><span className="font-mono text-xs text-ag-muted block mt-1">€{(meta.monthlyPrice * 12).toLocaleString("el-GR")}{et('step2PerYear')}</span></>}
                          </div>
                          {isSel && <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute top-3 left-3 w-6 h-6 bg-gradient-to-br from-ag-accent to-ag-accent/80 flex items-center justify-center shadow-[0_0_10px_rgba(212,175,55,0.2)]"><Check size={12} strokeWidth={3} className="text-ag-bg" /></motion.div>}
                        </motion.button>
                      );
                    })}
                  </div>
                </FadeUp>
              )}

              {/* D STEP 3 */}
              {step === 3 && !isSubmitted && (
                <FadeUp>
                <div ref={(el) => { if (el && !window.__estimatorFormLoadTime) window.__estimatorFormLoadTime = Date.now(); }} />
                  <div className="mb-10">
                    <PremiumBadge icon={Crown}>{et('step3Badge')}</PremiumBadge>
                    <h1 className="font-heading text-3xl font-bold text-foreground mt-4 mb-2 tracking-tight">{et('step3Title')}</h1>
                    <p className="font-body text-ag-body text-sm">{et('step3Subtitle')}</p>
                    <GoldDivider className="mt-6 max-w-sm" />
                  </div>
                  <div className="grid lg:grid-cols-5 gap-6">
                    <div className="lg:col-span-2 space-y-4">
                      <div className="relative overflow-hidden bg-card/50 border border-ag-border/40 p-6">
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-ag-accent/20 via-ag-accent/5 to-transparent" />
                        <h3 className="font-heading text-sm font-semibold text-foreground mb-5 flex items-center gap-2"><Diamond size={12} className="text-ag-accent" /> {et('step3YourChoices')}</h3>
                        <div className="space-y-3 font-body text-sm">
                          <div className="flex justify-between py-2.5 border-b border-ag-border/20"><span className="text-ag-body">{et('step3Type')}</span><span className="text-foreground font-medium">{selectedTypeData?.name || "—"}</span></div>
                          <div className="py-2.5 border-b border-ag-border/20"><div className="flex justify-between mb-1"><span className="text-ag-body">{et('step3Extras')}</span><span className="font-mono text-ag-accent text-xs">{priceCalc.featuresCost > 0 ? `+€${priceCalc.featuresCost.toLocaleString("el-GR")}` : "—"}</span></div></div>
                          <div className="flex justify-between py-2.5 border-b border-ag-border/20"><span className="text-ag-body">{et('step3Support')}</span><span className="text-foreground font-medium">{supportPlans.find((s) => s.id === selectedSupport)?.name || "—"}</span></div>
                          <div className="flex justify-between py-2.5"><span className="text-ag-body">{et('step3Time')}</span><span className="text-foreground font-medium flex items-center gap-1.5"><Clock size={11} className="text-ag-accent/50" />{selectedTypeData?.timeEstimate || "—"}</span></div>
                        </div>
                      </div>
                      <div className="relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-ag-accent/[0.06] via-ag-accent/[0.02] to-transparent" />
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-ag-accent/30 via-ag-accent/15 to-transparent" />
                        <div className="relative bg-card/30 border border-ag-accent/20 p-6 text-center">
                          <div className="font-mono text-[10px] text-ag-accent/60 mb-2 tracking-[0.2em] uppercase flex items-center justify-center gap-1.5"><Diamond size={8} /> {et('step3Estimate')}</div>
                          <div className="font-heading text-4xl font-bold text-foreground mb-1 tracking-tight">€{priceCalc.total.toLocaleString("el-GR")}</div>
                          {priceCalc.monthly > 0 && <div className="text-ag-accent text-sm font-medium">+ €{priceCalc.monthly}{et('step2PerMonth')}</div>}
                          <GoldDivider className="my-4 max-w-[200px] mx-auto" />
                          <div className="text-xs text-ag-body">{et('step3Installments')}: <span className="text-ag-accent font-semibold">€{Math.round(priceCalc.total / 6).toLocaleString("el-GR")}/μο</span> ×6</div>
                          <div className="font-mono text-[10px] text-ag-muted mt-1">{et('step3InstallmentNote')}</div>
                        </div>
                      </div>
                    </div>
                    <div className="lg:col-span-3 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ag-accent/15 to-ag-accent/20" />
                      <div className="bg-card/50 border border-ag-border/40 p-6">
                        <h3 className="font-heading text-sm font-semibold text-foreground mb-5 flex items-center gap-2"><div className="w-6 h-6 bg-ag-accent/10 border border-ag-accent/15 flex items-center justify-center"><Mail size={12} className="text-ag-accent" /></div> {et('step3ContactTitle')}</h3>
                        {/* Honeypot fields — invisible to humans */}
<div
  aria-hidden="true"
  style={{
    position: 'absolute',
    left: '-9999px',
    top: '-9999px',
    opacity: 0,
    height: 0,
    width: 0,
    overflow: 'hidden',
  }}
>
  <label htmlFor="est_d_company_url">Website URL</label>
  <input
    type="url"
    id="est_d_company_url"
    name="company_url"
    tabIndex={-1}
    autoComplete="off"
    placeholder="https://yourwebsite.com"
  />
</div>
<input
  type="checkbox"
  name="botcheck"
  style={{ display: 'none' }}
  tabIndex={-1}
/>
                        <div className="space-y-4">
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div><label className="font-mono text-[10px] text-ag-accent/50 mb-1.5 block tracking-[0.15em] uppercase">{et('step3Name')} *</label><div className="relative group"><User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-ag-body/40 group-focus-within:text-ag-accent/60 transition-colors" /><input type="text" value={contactForm.name} onChange={(e) => setContactForm((p) => ({ ...p, name: e.target.value }))} placeholder={et('step3Name')} className="w-full bg-background/50 border border-ag-border/40 pl-9 pr-3 py-2.5 text-foreground placeholder:text-ag-muted/40 focus:border-ag-accent/40 focus:shadow-[0_0_15px_rgba(212,175,55,0.05)] focus:outline-none text-sm" data-testid="input-name" /></div></div>
                            <div><label className="font-mono text-[10px] text-ag-accent/50 mb-1.5 block tracking-[0.15em] uppercase">{et('step3Email')} *</label><div className="relative group"><Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-ag-body/40 group-focus-within:text-ag-accent/60 transition-colors" /><input type="email" value={contactForm.email} onChange={(e) => setContactForm((p) => ({ ...p, email: e.target.value }))} placeholder="email@example.com" className="w-full bg-background/50 border border-ag-border/40 pl-9 pr-3 py-2.5 text-foreground placeholder:text-ag-muted/40 focus:border-ag-accent/40 focus:shadow-[0_0_15px_rgba(212,175,55,0.05)] focus:outline-none text-sm" data-testid="input-email" /></div></div>
                          </div>
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div><label className="font-mono text-[10px] text-ag-accent/50 mb-1.5 block tracking-[0.15em] uppercase">{et('step3Phone')}</label><div className="relative group"><Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-ag-body/40 group-focus-within:text-ag-accent/60 transition-colors" /><input type="tel" value={contactForm.phone} onChange={(e) => setContactForm((p) => ({ ...p, phone: e.target.value }))} placeholder="69..." className="w-full bg-background/50 border border-ag-border/40 pl-9 pr-3 py-2.5 text-foreground placeholder:text-ag-muted/40 focus:border-ag-accent/40 focus:outline-none text-sm" /></div></div>
                            <div><label className="font-mono text-[10px] text-ag-accent/50 mb-1.5 block tracking-[0.15em] uppercase">{et('step3Company')}</label><div className="relative group"><Building2 size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-ag-body/40 group-focus-within:text-ag-accent/60 transition-colors" /><input type="text" value={contactForm.company} onChange={(e) => setContactForm((p) => ({ ...p, company: e.target.value }))} placeholder={et('step3Optional')} className="w-full bg-background/50 border border-ag-border/40 pl-9 pr-3 py-2.5 text-foreground placeholder:text-ag-muted/40 focus:border-ag-accent/40 focus:outline-none text-sm" /></div></div>
                          </div>
                          <div><label className="font-mono text-[10px] text-ag-accent/50 mb-1.5 block tracking-[0.15em] uppercase">{et('step3Notes')}</label><textarea value={contactForm.notes} onChange={(e) => setContactForm((p) => ({ ...p, notes: e.target.value }))} rows={4} placeholder="..." className="w-full bg-background/50 border border-ag-border/40 px-3 py-2.5 text-foreground placeholder:text-ag-muted/40 focus:border-ag-accent/40 focus:outline-none text-sm resize-none" /></div>
                          <motion.button onClick={handleSubmit} disabled={!contactForm.name || !contactForm.email || isSubmitting} className="group relative w-full py-3.5 font-heading font-semibold text-sm overflow-hidden disabled:opacity-30 disabled:cursor-not-allowed" data-cursor="hover" data-testid="submit-btn" whileHover={{ scale: contactForm.name && contactForm.email && !isSubmitting ? 1.005 : 1 }}>
                            <div className="absolute inset-0 bg-gradient-to-r from-ag-accent via-ag-accent to-ag-accent/90" />
                            <div className="absolute inset-0 bg-gradient-to-r from-ag-accent/0 via-white/10 to-ag-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                            <span className="relative text-ag-bg flex items-center justify-center gap-2">
                              {isSubmitting ? <><div className="w-4 h-4 border-2 border-ag-bg/30 border-t-ag-bg rounded-full animate-spin" /> {et('step3Submitting')}</> : <><Diamond size={14} /> {et('step3SendRequest')} <ArrowRight size={16} /></>}
                            </span>
                          </motion.button>
                          <p className="text-[11px] text-ag-muted text-center flex items-center justify-center gap-1.5"><Diamond size={6} className="text-ag-accent/30" /> {et('step3Disclaimer')} <Diamond size={6} className="text-ag-accent/30" /></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              )}

              {/* D SUCCESS */}
              {step === 3 && isSubmitted && (
                <FadeUp>
                  <div className="max-w-md mx-auto text-center py-20">
                    <motion.div initial={{ scale: 0, rotate: -45 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring", duration: 0.7 }} className="w-20 h-20 bg-gradient-to-br from-ag-accent/15 to-ag-accent/5 border border-ag-accent/25 flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(212,175,55,0.1)]"><Check size={32} className="text-ag-accent" /></motion.div>
                    <PremiumBadge icon={Sparkles} variant="highlight">{et('successBadge')}</PremiumBadge>
                    <h2 className="font-heading text-2xl font-bold text-foreground mt-4 mb-3 tracking-tight">{et('successTitle')}</h2>
                    <p className="text-ag-body text-sm mb-1">{et('successReply')} <span className="text-ag-accent font-medium">{contactForm.email}</span></p>
                    <GoldDivider className="my-6 max-w-[200px] mx-auto" />
                    <div className="relative overflow-hidden inline-block"><div className="absolute inset-0 bg-gradient-to-br from-ag-accent/[0.06] to-transparent" /><div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ag-accent/30 to-transparent" /><div className="relative bg-card/50 border border-ag-accent/20 p-6"><span className="font-mono text-[10px] text-ag-accent/50 block mb-1.5 tracking-[0.2em] uppercase">{et('successEstimate')}</span><span className="font-heading text-3xl font-bold text-foreground">€{priceCalc.total.toLocaleString("el-GR")}</span>{priceCalc.monthly > 0 && <span className="text-ag-accent text-xs block mt-1.5">+ €{priceCalc.monthly}/μο</span>}</div></div>
                    <div className="flex items-center justify-center gap-6 mt-8">
                      <button onClick={handleReset} className="group text-ag-body hover:text-foreground transition-all text-sm flex items-center gap-1.5"><RefreshCw size={14} className="group-hover:rotate-180 transition-transform duration-500" /> {et('successNewEstimate')}</button>
                      <div className="w-px h-4 bg-ag-border/30" />
                      <Link href="/" className="group text-ag-accent hover:text-foreground transition-all text-sm flex items-center gap-1.5">{et('successHome')} <ArrowUpRight size={14} /></Link>
                    </div>
                  </div>
                </FadeUp>
              )}

              {/* Desktop Nav */}
              {!isSubmitted && (
                <div className="flex items-center justify-between mt-12 pt-6 border-t border-ag-accent/10">
                  <button onClick={goBack} disabled={step === 0} className="group flex items-center gap-2 text-ag-body hover:text-foreground transition-all disabled:opacity-15 text-sm" data-cursor="hover">
                    <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" /> {et('navBack')}
                  </button>
                  <div className="font-mono text-[10px] text-ag-accent/40 tracking-[0.15em] uppercase flex items-center gap-2"><Diamond size={6} /> {et('navStep')} {step + 1}/4 <Diamond size={6} /></div>
                  {step < 3 && (
                    <motion.button onClick={goNext} disabled={!canProceed()} className="group relative flex items-center gap-2 px-6 py-2.5 font-heading font-semibold text-sm overflow-hidden disabled:opacity-25 disabled:cursor-not-allowed" data-cursor="hover" whileHover={{ scale: canProceed() ? 1.02 : 1 }}>
                      <div className="absolute inset-0 bg-gradient-to-r from-ag-accent via-ag-accent to-ag-accent/90" />
                      <div className="absolute inset-0 bg-gradient-to-r from-ag-accent/0 via-white/10 to-ag-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                      <span className="relative text-ag-bg flex items-center gap-2">{step === 2 ? et('navSummary') : et('navNext')} <ChevronRight size={16} /></span>
                    </motion.button>
                  )}
                  {step === 3 && <div className="w-20" />}
                </div>
              )}
            </main>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="border-t border-ag-accent/10 mt-auto py-3 md:py-4 text-sm relative z-10 backdrop-blur-sm bg-background/80">
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-10 md:h-12">
          <p className="font-body text-ag-muted/60 leading-none text-[10px] md:text-xs">{et('footerNote')}</p>
          <Link href="/" className="group font-mono text-ag-body/60 hover:text-foreground transition-all flex items-center gap-1.5 leading-none text-xs" data-cursor="hover">
            <Diamond size={6} className="text-ag-accent/30 hidden md:block" />
            DigitalFootprint
            <ArrowUpRight size={12} />
          </Link>
        </div>
      </footer>
    </div>
  );
}