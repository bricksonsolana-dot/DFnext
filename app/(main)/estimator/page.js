// app/estimator/page.js

'use client';

import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
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
   LUXURIOUS BACKGROUND
═══════════════════════════════════════ */
function EstimatorBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full"
        style={{
          top: '-10%',
          right: '-15%',
          background: 'radial-gradient(circle, rgba(212,175,55,0.04) 0%, rgba(212,175,55,0.01) 40%, transparent 70%)',
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          bottom: '-5%',
          left: '-10%',
          background: 'radial-gradient(circle, rgba(212,175,55,0.03) 0%, rgba(212,175,55,0.01) 40%, transparent 70%)',
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 15, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-1 h-1 rotate-45"
        style={{ top: '20%', left: '20%', background: 'linear-gradient(135deg, rgba(212,175,55,0.3), rgba(212,175,55,0.05))', boxShadow: '0 0 20px rgba(212,175,55,0.1)' }}
        animate={{ y: [0, -30, 0], x: [0, 10, 0], scale: [1, 2, 1], opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-1.5 h-1.5 rotate-45"
        style={{ top: '60%', right: '25%', background: 'linear-gradient(135deg, rgba(212,175,55,0.25), rgba(212,175,55,0.05))', boxShadow: '0 0 15px rgba(212,175,55,0.08)' }}
        animate={{ y: [0, 20, 0], x: [0, -15, 0], scale: [1, 1.8, 1], opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute h-px"
        style={{ width: '300px', top: '30%', right: '5%', background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.08), transparent)' }}
        animate={{ opacity: [0.3, 0.7, 0.3], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute border border-ag-accent/[0.03]"
        style={{ width: '500px', height: '500px', top: '5%', right: '-10%', borderRadius: '2px' }}
        animate={{ rotate: [0, 45], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 60, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
      />
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")` }} />
    </div>
  );
}

/* ═══════════════════════════════════════
   LUXURIOUS DECORATIVE ELEMENTS
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
  const variants = {
    default: 'bg-gradient-to-r from-ag-accent/10 to-ag-accent/5 border-ag-accent/20 text-ag-accent',
    highlight: 'bg-gradient-to-r from-ag-accent/20 to-ag-accent/10 border-ag-accent/30 text-ag-accent',
  };
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 border text-[10px] font-mono font-bold tracking-widest uppercase ${variants[variant]}`}>
      {Icon && <Icon size={10} />}
      {children}
    </span>
  );
}

function FadeUp({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════
   MOBILE BOTTOM SHEET
═══════════════════════════════════════ */
function MobileBottomSheet({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-ag-accent/20 max-h-[85vh] flex flex-col"
            style={{ borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}
          >
            <div className="flex items-center justify-center pt-3 pb-1">
              <div className="w-10 h-1 bg-ag-border/50 rounded-full" />
            </div>
            <div className="flex items-center justify-between px-4 py-3 border-b border-ag-border/30">
              <span className="font-heading font-semibold text-sm text-foreground">{title}</span>
              <button onClick={onClose} className="w-8 h-8 flex items-center justify-center text-ag-muted">
                <X size={18} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto overscroll-contain px-4 py-4">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ═══════════════════════════════════════
   DATA (unchanged)
═══════════════════════════════════════ */
const websiteTypes = [
  { id: "onepage", name: "One Page Site", desc: "Μία σελίδα με τα βασικά sections.", basePrice: 700, timeEstimate: "5-10 ημέρες", icon: FileText, popular: false, idealFor: "Freelancers, καφετέριες, δικηγόροι", includedFeatures: [{ name: "Responsive Design", icon: Smartphone }, { name: "Φόρμα Επικοινωνίας", icon: Mail }, { name: "Google Maps", icon: MapPin }, { name: "SSL Certificate", icon: Lock }] },
  { id: "multipage", name: "Εταιρικό Site", desc: "3-8 σελίδες με CMS για εταιρική παρουσία.", basePrice: 1500, timeEstimate: "2-3 εβδομάδες", icon: Globe, popular: true, idealFor: "Εταιρείες, κλινικές, γραφεία", includedFeatures: [{ name: "Responsive Design", icon: Smartphone }, { name: "Φόρμα Επικοινωνίας", icon: Mail }, { name: "Google Maps", icon: MapPin }, { name: "SSL Certificate", icon: Lock }, { name: "CMS", icon: FileText }, { name: "Basic SEO", icon: Search }, { name: "Analytics", icon: BarChart3 }, { name: "GDPR", icon: Shield }] },
  { id: "eshop-small", name: "E-Shop Basic", desc: "Ηλεκτρονικό κατάστημα έως 50 προϊόντα.", basePrice: 3000, timeEstimate: "3-4 εβδομάδες", icon: ShoppingCart, popular: false, idealFor: "Μικρά καταστήματα, handmade", includedFeatures: [{ name: "Responsive Design", icon: Smartphone }, { name: "SSL Certificate", icon: Lock }, { name: "CMS Προϊόντων", icon: FileText }, { name: "Καλάθι", icon: ShoppingCart }, { name: "Φόρμα", icon: Mail }, { name: "Maps", icon: MapPin }, { name: "SEO", icon: Search }, { name: "Analytics", icon: BarChart3 }, { name: "GDPR", icon: Shield }] },
  { id: "eshop-large", name: "E-Shop Pro", desc: "500+ προϊόντα, bulk import, filters.", basePrice: 4000, timeEstimate: "5-8 εβδομάδες", icon: Database, popular: false, idealFor: "Fashion, ηλεκτρονικά, wholesale", includedFeatures: [{ name: "Responsive Design", icon: Smartphone }, { name: "SSL Certificate", icon: Lock }, { name: "CMS Bulk", icon: FileText }, { name: "Advanced SEO", icon: Search }, { name: "Analytics + GTM", icon: BarChart3 }, { name: "Wishlist", icon: Eye }] },
  { id: "webapp", name: "Web App", desc: "Custom εφαρμογή με users, dashboard, API.", basePrice: 5000, timeEstimate: "6-12 εβδομάδες", icon: Zap, popular: false, idealFor: "SaaS, portals, booking", includedFeatures: [{ name: "Responsive Design", icon: Smartphone }, { name: "SSL Certificate", icon: Lock }, { name: "Authentication", icon: Users }, { name: "Dashboard", icon: BarChart3 }, { name: "REST API", icon: Database }, { name: "CI/CD", icon: Zap }] },
];

const allCategories = [
  { id: "appearance", name: "Εμφάνιση", icon: Palette, showFor: ["onepage", "multipage", "eshop-small", "eshop-large", "webapp"], description: "Animations, blog, γλώσσες, gallery." },
  { id: "marketing", name: "Marketing", icon: BarChart3, showFor: ["onepage", "multipage", "eshop-small", "eshop-large", "webapp"], description: "SEO, ads, analytics." },
  { id: "communication", name: "Επικοινωνία", icon: MessageSquare, showFor: ["onepage", "multipage", "eshop-small", "eshop-large", "webapp"], description: "Chat, ραντεβού, newsletter." },
  { id: "branding", name: "Branding", icon: Brush, showFor: ["onepage", "multipage", "eshop-small", "eshop-large", "webapp"], description: "Logo, ταυτότητα." },
  { id: "store", name: "Κατάστημα", icon: ShoppingCart, showFor: ["eshop-small", "eshop-large"], description: "Wishlist, αξιολογήσεις, κουπόνια." },
  { id: "payments", name: "Πληρωμές", icon: CreditCard, showFor: ["eshop-small", "eshop-large"], description: "Τράπεζα, PayPal." },
  { id: "shipping", name: "Αποστολές", icon: Truck, showFor: ["eshop-small", "eshop-large"], description: "ACS, ELTA, Speedex." },
  { id: "usermgmt", name: "Χρήστες", icon: Users, showFor: ["webapp"], description: "Login, ρόλοι, dashboard." },
  { id: "security", name: "Ασφάλεια", icon: Shield, showFor: ["eshop-large", "webapp"], description: "2FA, GDPR, backup." },
  { id: "integrations", name: "APIs", icon: Layers, showFor: ["multipage", "eshop-large", "webapp"], description: "ERP, CRM, API." },
  { id: "advanced", name: "Προχωρημένα", icon: Zap, showFor: ["webapp"], description: "Real-time, search." },
];

const allFeatures = [
  { id: "responsive-design", name: "Responsive Design", price: 0, icon: Smartphone, desc: "Προσαρμογή σε κινητά", category: "appearance", showFor: ["onepage", "multipage", "eshop-small", "eshop-large", "webapp"], includedIn: ["onepage", "multipage", "eshop-small", "eshop-large", "webapp"] },
  { id: "cms", name: "CMS", price: 300, icon: FileText, desc: "Διαχείριση περιεχομένου", category: "appearance", showFor: ["onepage", "multipage", "eshop-small", "eshop-large"], includedIn: ["multipage", "eshop-small", "eshop-large"] },
  { id: "custom-animations", name: "Animations", price: 150, priceMax: 300, icon: Zap, desc: "Scroll effects", category: "appearance", showFor: ["onepage", "multipage", "eshop-small", "eshop-large", "webapp"] },
  { id: "blog", name: "Blog", price: 200, priceMax: 400, icon: FileText, desc: "Άρθρα & νέα", category: "appearance", showFor: ["onepage", "multipage", "eshop-small", "eshop-large"] },
  { id: "multilang", name: "Πολύγλωσσο", price: 300, priceMax: 500, icon: Globe, desc: "GR, EN, +", category: "appearance", showFor: ["onepage", "multipage", "eshop-small", "eshop-large", "webapp"] },
  { id: "gallery", name: "Gallery", price: 150, priceMax: 300, icon: Image, desc: "Portfolio εικόνων", category: "appearance", showFor: ["onepage", "multipage", "eshop-small", "eshop-large"] },
  { id: "copywriting", name: "Κείμενα", price: 50, priceMax: 150, icon: FileText, desc: "Επαγγελματικά κείμενα", category: "appearance", showFor: ["onepage", "multipage", "eshop-small", "eshop-large"] },
  { id: "light-dark-mode", name: "Dark Mode", price: 150, priceMax: 200, icon: FileText, desc: "Light/Dark toggle", category: "appearance", showFor: ["onepage", "multipage", "eshop-small", "eshop-large"] },
  { id: "seo-basic", name: "Basic SEO", price: 100, priceMax: 200, icon: Search, desc: "Meta, sitemap, alt", category: "marketing", showFor: ["onepage", "multipage", "eshop-small", "eshop-large", "webapp"], includedIn: ["multipage", "eshop-small"] },
  { id: "analytics", name: "Analytics", price: 100, priceMax: 150, icon: BarChart3, desc: "GA4 tracking", category: "marketing", showFor: ["onepage", "multipage", "eshop-small", "eshop-large", "webapp"], includedIn: ["multipage", "eshop-small", "eshop-large"] },
  { id: "seo-advanced", name: "Advanced SEO", price: 200, priceMax: 400, icon: Search, desc: "Schema markup", category: "marketing", showFor: ["multipage", "eshop-small", "eshop-large", "webapp"], includedIn: ["eshop-large"] },
  { id: "speed", name: "Speed Boost", price: 150, priceMax: 250, icon: Zap, desc: "Βελτιστοποίηση ταχύτητας", category: "marketing", showFor: ["onepage", "multipage", "eshop-small", "eshop-large", "webapp"] },
  { id: "skroutz", name: "Skroutz", price: 200, priceMax: 350, icon: BarChart3, desc: "Καταχώρηση προϊόντων", category: "marketing", showFor: ["eshop-small", "eshop-large"] },
  { id: "google-ads-setup", name: "Google Ads", price: 150, priceMax: 300, icon: BarChart3, desc: "Στήσιμο ads", category: "marketing", showFor: ["onepage", "multipage", "eshop-small", "eshop-large"] },
  { id: "contact-form", name: "Φόρμα", price: 0, icon: Mail, desc: "Email φόρμα", category: "communication", showFor: ["onepage", "multipage", "eshop-small", "eshop-large"], includedIn: ["onepage", "multipage", "eshop-small", "eshop-large"] },
  { id: "google-maps", name: "Maps", price: 0, icon: MapPin, desc: "Google Maps", category: "communication", showFor: ["onepage", "multipage", "eshop-small", "eshop-large"], includedIn: ["onepage", "multipage", "eshop-small", "eshop-large"] },
  { id: "chat", name: "Live Chat", price: 200, priceMax: 300, icon: MessageSquare, desc: "Κουτί συνομιλίας", category: "communication", showFor: ["onepage", "multipage", "eshop-small", "eshop-large", "webapp"] },
  { id: "chatbot", name: "AI Chatbot", price: 200, priceMax: 500, icon: Bot, desc: "Αυτόματες απαντήσεις", category: "communication", showFor: ["multipage", "eshop-small", "eshop-large", "webapp"] },
  { id: "booking", name: "Ραντεβού", price: 300, priceMax: 600, icon: Calendar, desc: "Online booking", category: "communication", showFor: ["onepage", "multipage", "eshop-small", "eshop-large"] },
  { id: "email-marketing", name: "Newsletter", price: 100, priceMax: 200, icon: Mail, desc: "Mailchimp/Brevo", category: "communication", showFor: ["multipage", "eshop-small", "eshop-large"] },
  { id: "logo", name: "Logo", price: 150, priceMax: 400, icon: Brush, desc: "SVG, PNG, PDF", category: "branding", showFor: ["onepage", "multipage", "eshop-small", "eshop-large", "webapp"] },
  { id: "brand-identity", name: "Brand ID", price: 400, priceMax: 800, icon: Palette, desc: "Πλήρης ταυτότητα", category: "branding", showFor: ["onepage", "multipage", "eshop-small", "eshop-large", "webapp"] },
  { id: "shopping-cart", name: "Καλάθι", price: 0, icon: ShoppingCart, desc: "Checkout", category: "store", showFor: ["eshop-small", "eshop-large"], includedIn: ["eshop-small", "eshop-large"] },
  { id: "coupons", name: "Κουπόνια", price: 100, priceMax: 200, icon: CreditCard, desc: "Κωδικοί έκπτωσης", category: "store", showFor: ["eshop-small", "eshop-large"] },
  { id: "wishlist", name: "Wishlist", price: 100, priceMax: 150, icon: Eye, desc: "Αγαπημένα", category: "store", showFor: ["eshop-small", "eshop-large"], includedIn: ["eshop-large"] },
  { id: "reviews", name: "Reviews", price: 100, priceMax: 150, icon: MessageSquare, desc: "Stars & reviews", category: "store", showFor: ["eshop-small", "eshop-large"] },
  { id: "filters", name: "Φίλτρα", price: 200, priceMax: 350, icon: Search, desc: "Χρώμα, μέγεθος, τιμή", category: "store", showFor: ["eshop-small", "eshop-large"] },
  { id: "bank-gr", name: "Τράπεζα GR", price: 200, priceMax: 400, icon: CreditCard, desc: "Πειραιώς, Alpha, NBG", category: "payments", showFor: ["eshop-small", "eshop-large"] },
  { id: "paypal-stripe", name: "PayPal/Stripe", price: 100, priceMax: 200, icon: CreditCard, desc: "Διεθνείς πληρωμές", category: "payments", showFor: ["eshop-small", "eshop-large"] },
  { id: "cod", name: "Αντικαταβολή", price: 100, icon: Package, desc: "Πληρωμή παραλαβής", category: "payments", showFor: ["eshop-small", "eshop-large"] },
  { id: "courier-acs", name: "ACS", price: 200, priceMax: 400, icon: Truck, desc: "Voucher & tracking", category: "shipping", showFor: ["eshop-small", "eshop-large"] },
  { id: "courier-elta", name: "ELTA", price: 200, priceMax: 400, icon: Truck, desc: "Voucher & tracking", category: "shipping", showFor: ["eshop-small", "eshop-large"] },
  { id: "courier-speedex", name: "Speedex", price: 200, priceMax: 400, icon: Truck, desc: "Voucher & tracking", category: "shipping", showFor: ["eshop-small", "eshop-large"] },
  { id: "user-auth", name: "Auth", price: 0, icon: Users, desc: "Εγγραφή/login", category: "usermgmt", showFor: ["webapp"], includedIn: ["webapp"] },
  { id: "admin-dashboard", name: "Admin Panel", price: 0, icon: BarChart3, desc: "Πίνακας ελέγχου", category: "usermgmt", showFor: ["webapp"], includedIn: ["webapp"] },
  { id: "social-login", name: "Social Login", price: 200, priceMax: 300, icon: Users, desc: "Google/Facebook", category: "usermgmt", showFor: ["webapp"] },
  { id: "user-dashboard", name: "User Panel", price: 300, priceMax: 600, icon: BarChart3, desc: "Περιοχή χρήστη", category: "usermgmt", showFor: ["webapp"] },
  { id: "roles", name: "Ρόλοι", price: 300, priceMax: 800, icon: Shield, desc: "Admin, Editor, User", category: "usermgmt", showFor: ["webapp"] },
  { id: "ssl-certificate", name: "SSL", price: 0, icon: Lock, desc: "HTTPS", category: "security", showFor: ["eshop-large", "webapp"], includedIn: ["eshop-large", "webapp"] },
  { id: "2fa", name: "2FA", price: 150, priceMax: 200, icon: Lock, desc: "Διπλή επαλήθευση", category: "security", showFor: ["eshop-large", "webapp"] },
  { id: "gdpr-full", name: "GDPR", price: 150, priceMax: 300, icon: Shield, desc: "Cookie consent", category: "security", showFor: ["eshop-large", "webapp"] },
  { id: "backup", name: "Backup", price: 100, icon: Download, desc: "Ημερήσιο αντίγραφο", category: "security", showFor: ["eshop-large", "webapp"], isYearly: true },
  { id: "erp", name: "ERP", price: 800, priceMax: 2000, icon: Database, desc: "SoftOne, Entersoft", category: "integrations", showFor: ["eshop-large", "webapp"] },
  { id: "crm", name: "CRM", price: 400, priceMax: 800, icon: Users, desc: "HubSpot, Salesforce", category: "integrations", showFor: ["multipage", "eshop-large", "webapp"] },
  { id: "custom-api", name: "Custom API", price: 500, priceMax: 2000, icon: Database, desc: "Εξωτερικά συστήματα", category: "integrations", showFor: ["eshop-large", "webapp"] },
  { id: "realtime-notifs", name: "Real-time", price: 400, priceMax: 700, icon: Bell, desc: "WebSocket", category: "advanced", showFor: ["webapp"] },
  { id: "search-engine", name: "Search", price: 400, priceMax: 800, icon: Search, desc: "Algolia", category: "advanced", showFor: ["webapp", "eshop-large"] },
  { id: "file-upload", name: "File Storage", price: 200, priceMax: 400, icon: Download, desc: "S3 storage", category: "advanced", showFor: ["webapp"] },
];

const supportPlans = [
  { id: "none", name: "Χωρίς", desc: "Source code & docs.", monthlyPrice: 0, icon: RefreshCw, recommended: false, features: ["Source code", "Documentation", "30d bug fixes"] },
  { id: "basic", name: "Basic Care", desc: "Updates & μικρές αλλαγές.", monthlyPrice: 80, icon: Headphones, recommended: true, features: ["Email support 24h", "Security updates", "Αλλαγές κειμένων", "Monthly backup", "Monitoring"] },
  { id: "premium", name: "Premium", desc: "Priority & content.", monthlyPrice: 200, icon: Crown, recommended: false, features: ["Priority 4h", "Content 2x/μήνα", "Daily backups", "Analytics", "Bug fixes free"] },
];

const steps = [
  { label: "Τύπος", icon: Layers },
  { label: "Features", icon: Sparkles },
  { label: "Support", icon: Shield },
  { label: "Αποστολή", icon: Mail },
];

/* ═══════════════════════════════════════
   MOBILE STEP DOTS
═══════════════════════════════════════ */
function MobileStepDots({ current, total }) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`h-1 rounded-full transition-all duration-500 ${
            i === current
              ? 'w-6 bg-gradient-to-r from-ag-accent to-ag-accent/70'
              : i < current
              ? 'w-2 bg-ag-accent/40'
              : 'w-2 bg-ag-border/40'
          }`}
        />
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════
   DESKTOP STEP INDICATOR
═══════════════════════════════════════ */
function DesktopStepIndicator({ current, onNavigate, canNavigateTo }) {
  return (
    <div className="hidden md:flex items-center gap-1 w-full max-w-2xl mx-auto">
      {steps.map((s, i) => {
        const isActive = i === current;
        const isCompleted = i < current;
        const clickable = canNavigateTo(i);
        return (
          <div key={i} className="flex items-center flex-1 last:flex-none">
            <button
              onClick={() => clickable && onNavigate(i)}
              disabled={!clickable}
              className={`flex items-center gap-2 text-xs font-mono tracking-widest whitespace-nowrap transition-all duration-300 ${clickable ? "cursor-pointer" : "cursor-default"} ${isActive ? "text-foreground" : isCompleted ? "text-ag-accent" : "text-ag-muted"}`}
            >
              <span className={`w-8 h-8 flex items-center justify-center text-xs font-bold flex-shrink-0 transition-all duration-300 ${isActive ? "bg-gradient-to-br from-ag-accent to-ag-accent/80 text-ag-bg shadow-[0_0_20px_rgba(212,175,55,0.15)]" : ""} ${isCompleted ? "bg-ag-accent/15 text-ag-accent border border-ag-accent/30" : ""} ${!isActive && !isCompleted ? "bg-card text-ag-muted border border-ag-border/50" : ""}`}>
                {isCompleted ? <Check size={12} strokeWidth={3} /> : i + 1}
              </span>
              <span>{s.label}</span>
            </button>
            {i < steps.length - 1 && (
              <div className={`flex-1 h-px mx-2 transition-all duration-500 ${isCompleted ? "bg-gradient-to-r from-ag-accent/40 to-ag-accent/10" : "bg-ag-border/30"}`} />
            )}
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
  const [showEstimator, setShowEstimator] = useState(false);
  const [step, setStep] = useState(0);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [selectedSupport, setSelectedSupport] = useState(null);
  const [activeCat, setActiveCat] = useState("appearance");
  const [contactForm, setContactForm] = useState({ name: "", email: "", phone: "", company: "", notes: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Mobile-specific states
  const [showMobileIncluded, setShowMobileIncluded] = useState(false);
  const [showMobileSummary, setShowMobileSummary] = useState(false);
  const [showMobileCatPicker, setShowMobileCatPicker] = useState(false);

  const relevantCategories = useMemo(() => {
    if (!selectedType) return [];
    return allCategories.filter((cat) => cat.showFor.includes(selectedType));
  }, [selectedType]);

  const visibleFeatures = useMemo(() => {
    if (!selectedType) return [];
    return allFeatures.filter((f) => f.category === activeCat && f.showFor.includes(selectedType));
  }, [activeCat, selectedType]);

  const selectedTypeData = websiteTypes.find((t) => t.id === selectedType);

  const priceCalc = useMemo(() => {
    const type = websiteTypes.find((t) => t.id === selectedType);
    if (!type) return { total: 0, monthly: 0, base: 0, featuresCost: 0 };
    const base = type.basePrice;
    const featuresCost = selectedFeatures.reduce((sum, fId) => {
      const feature = allFeatures.find((f) => f.id === fId);
      if (!feature) return sum;
      if (feature.isMonthly || feature.isYearly) return sum;
      if (feature.includedIn?.includes(selectedType || "")) return sum;
      return sum + (feature.price || 0);
    }, 0);
    const total = base + featuresCost;
    const support = supportPlans.find((s) => s.id === selectedSupport);
    const monthly = support?.monthlyPrice || 0;
    return { total, monthly, base, featuresCost };
  }, [selectedType, selectedFeatures, selectedSupport]);

  const canProceed = useCallback(() => {
    switch (step) {
      case 0: return !!selectedType;
      case 1: return true;
      case 2: return !!selectedSupport;
      case 3: return !!(contactForm.name && contactForm.email);
      default: return false;
    }
  }, [step, selectedType, selectedSupport, contactForm]);

  const canNavigateTo = useCallback((targetStep) => targetStep < step, [step]);
  const goNext = () => { if (canProceed() && step < 3) setStep(step + 1); };
  const goBack = () => { if (step > 0) setStep(step - 1); };

  const handleReset = () => {
    setStep(0); setSelectedType(null); setSelectedFeatures([]); setSelectedSupport(null);
    setActiveCat("appearance"); setContactForm({ name: "", email: "", phone: "", company: "", notes: "" }); setIsSubmitted(false);
  };

  const handleBackToLanding = () => { handleReset(); setShowEstimator(false); };

  const toggleFeature = (featureId) => {
    setSelectedFeatures((prev) => prev.includes(featureId) ? prev.filter((f) => f !== featureId) : [...prev, featureId]);
  };

  const handleSubmit = async () => {
    if (!contactForm.name || !contactForm.email) return;
    setIsSubmitting(true);
    const typeData = websiteTypes.find((t) => t.id === selectedType);
    const supportData = supportPlans.find((s) => s.id === selectedSupport);
    const selectedFeatureNames = selectedFeatures.map((fId) => { const f = allFeatures.find((x) => x.id === fId); if (!f) return null; const isIncl = f.includedIn?.includes(selectedType || ""); return isIncl ? `${f.name} (included)` : `${f.name} (+€${f.price})`; }).filter(Boolean);
    const includedFeatureNames = allFeatures.filter((f) => f.showFor.includes(selectedType) && f.includedIn?.includes(selectedType) && !selectedFeatures.includes(f.id)).map((f) => `${f.name} (included)`);
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ access_key: '418a01f6-fb93-43bd-a1f1-9f808aa3815a', subject: `New Estimator - ${typeData?.name || 'Unknown'}`, from_name: contactForm.name, name: contactForm.name, email: contactForm.email, phone: contactForm.phone || 'N/A', company: contactForm.company || 'N/A', notes: contactForm.notes || 'None', 'Website Type': typeData?.name || 'N/A', 'Base Price': `€${typeData?.basePrice?.toLocaleString("el-GR") || 0}`, 'Time': typeData?.timeEstimate || 'N/A', 'Included': includedFeatureNames.join(', ') || 'Default', 'Extras': selectedFeatureNames.join(', ') || 'None', 'Features Cost': `€${priceCalc.featuresCost.toLocaleString("el-GR")}`, 'Support': supportData?.name || 'None', 'Monthly': supportData?.monthlyPrice ? `€${supportData.monthlyPrice}/mo` : '€0', 'Total': `€${priceCalc.total.toLocaleString("el-GR")}` }) });
      const result = await res.json();
      if (result.success) setIsSubmitted(true);
    } catch (e) {} finally { setIsSubmitting(false); }
  };

  const featurePriceLabel = (f) => {
    const sfx = f.isMonthly ? "/μήνα" : f.isYearly ? "/έτος" : "";
    if (f.priceMax) return `€${f.price}–${f.priceMax}${sfx}`;
    return `+€${f.price}${sfx}`;
  };

  const activeCatDef = allCategories.find((c) => c.id === activeCat);
  const includedCount = useMemo(() => { if (!selectedType) return 0; return allFeatures.filter((f) => f.showFor.includes(selectedType) && f.includedIn?.includes(selectedType)).length; }, [selectedType]);
  const extraSelectedCount = useMemo(() => { if (!selectedType) return 0; return selectedFeatures.filter((fId) => { const f = allFeatures.find((x) => x.id === fId); return f && !f.includedIn?.includes(selectedType); }).length; }, [selectedType, selectedFeatures]);

  // ─── LANDING PAGE ────────────────────
  const LandingPage = () => (
    <div className="flex-1 flex flex-col">
      <section className="relative pt-10 pb-12 md:pt-24 md:pb-32">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <PremiumBadge icon={Diamond}>PREMIUM ESTIMATOR</PremiumBadge>
            <GoldDivider className="my-6 md:my-8 max-w-xs mx-auto" />
            <h1 className="font-heading text-2xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 leading-tight tracking-tight">
              Υπολογίστε το κόστος του<br />
              <span className="bg-gradient-to-r from-ag-accent via-ag-accent/90 to-ag-accent/70 bg-clip-text text-transparent">νέου σας website</span>
            </h1>
            <p className="font-body text-ag-body text-sm md:text-lg max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed px-2">
              Προσαρμόστε τις επιλογές σας και λάβετε άμεση εκτίμηση κόστους. Χωρίς δέσμευση, με απόλυτη διαφάνεια.
            </p>
            <motion.button onClick={() => setShowEstimator(true)} className="group relative inline-flex items-center gap-3 px-8 md:px-10 py-3.5 md:py-4 font-heading font-semibold text-sm md:text-base overflow-hidden" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} data-cursor="hover">
              <div className="absolute inset-0 bg-gradient-to-r from-ag-accent via-ag-accent to-ag-accent/90" />
              <div className="absolute inset-0 bg-gradient-to-r from-ag-accent/0 via-white/10 to-ag-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="relative text-ag-bg flex items-center gap-3">Έναρξη Εκτίμησης <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" /></span>
            </motion.button>
            <p className="font-body text-ag-muted text-xs mt-4 flex items-center justify-center gap-2">
              <Diamond size={6} className="text-ag-accent/40" /> Δωρεάν • Απάντηση εντός 24h <Diamond size={6} className="text-ag-accent/40" />
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 md:py-14 border-y border-ag-accent/10">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {[
              { icon: Clock, title: "2 Λεπτά", desc: "Άμεση εκτίμηση" },
              { icon: Layers, title: "Custom", desc: "Δικά σας features" },
              { icon: CreditCard, title: "Δόσεις", desc: "Έως 6 μήνες" },
              { icon: Sparkles, title: "Δωρεάν", desc: "Χωρίς δέσμευση" },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }} className="group bg-card/50 border border-ag-border/50 p-4 md:p-6 text-center hover:border-ag-accent/20 transition-all duration-500">
                <div className="w-10 h-10 bg-gradient-to-br from-ag-accent/10 to-ag-accent/5 border border-ag-accent/15 flex items-center justify-center mx-auto mb-2 md:mb-4">
                  <item.icon size={18} className="text-ag-accent" />
                </div>
                <h3 className="font-heading text-foreground font-semibold text-xs md:text-sm mb-0.5">{item.title}</h3>
                <p className="font-body text-ag-body text-[11px] md:text-xs">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10 md:mb-14">
            <PremiumBadge icon={Star} variant="highlight">HOW IT WORKS</PremiumBadge>
            <h2 className="font-heading text-xl md:text-3xl font-bold text-foreground mt-4 md:mt-6 mb-2">Πώς Λειτουργεί</h2>
            <GoldDivider className="mt-6 max-w-md mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 gap-4 md:gap-8">
            <div className="bg-card/50 border border-ag-border/50 p-5 md:p-8">
              <h3 className="font-heading text-sm font-semibold text-foreground mb-5 flex items-center gap-2">
                <div className="w-7 h-7 bg-gradient-to-br from-ag-accent/15 to-ag-accent/5 border border-ag-accent/20 flex items-center justify-center"><HelpCircle size={14} className="text-ag-accent" /></div>
                4 Βήματα
              </h3>
              <div className="space-y-4">
                {[{ n: "01", t: "Τύπος Site" }, { n: "02", t: "Extra Features" }, { n: "03", t: "Συντήρηση" }, { n: "04", t: "Αποστολή" }].map((s, i) => (
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
                Πληροφορίες
              </h3>
              <div className="space-y-2">
                {["Ενδεικτικές τιμές ±15%", "Χωρίς ΦΠΑ 24%", "Δωρεάν εκτίμηση", "Απάντηση σε 24h", "Δόσεις από €2.000+"].map((info, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-ag-body">
                    <div className="w-3.5 h-3.5 bg-ag-accent/10 border border-ag-accent/15 flex items-center justify-center flex-shrink-0">
                      <Check size={7} strokeWidth={3} className="text-ag-accent" />
                    </div>
                    {info}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center mt-10 md:mt-16">
            <motion.button onClick={() => setShowEstimator(true)} className="group relative inline-flex items-center gap-3 px-8 py-3.5 font-heading font-semibold text-sm overflow-hidden" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <div className="absolute inset-0 bg-gradient-to-r from-ag-accent via-ag-accent to-ag-accent/90" />
              <span className="relative text-ag-bg flex items-center gap-3"><Calculator size={16} /> Ξεκινήστε <ArrowRight size={16} /></span>
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
            <span className="hidden sm:inline">Υπηρεσίες</span>
          </Link>
          <div className="flex items-center gap-2 text-foreground">
            <div className="w-7 h-7 md:w-8 md:h-8 bg-gradient-to-br from-ag-accent/15 to-ag-accent/5 border border-ag-accent/20 flex items-center justify-center">
              <Diamond size={12} className="text-ag-accent" />
            </div>
            <span className="font-heading font-bold text-sm tracking-wide">Estimator</span>
          </div>
          {showEstimator ? (
            <button onClick={handleBackToLanding} className="flex items-center gap-1 text-ag-muted hover:text-ag-body transition-colors text-xs" data-cursor="hover">
              <X size={14} />
              <span className="hidden sm:inline">Κλείσιμο</span>
            </button>
          ) : <div className="w-12" />}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {!showEstimator ? (
          <motion.div key="landing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="flex-1 flex flex-col">
            <LandingPage />
          </motion.div>
        ) : (
          <motion.div key="estimator" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="flex-1 flex flex-col">

            {/* ═══ MOBILE LAYOUT ═══ */}
            <div className="md:hidden flex-1 flex flex-col relative">
              
              {/* Mobile Header — fixed step info + price */}
              <div className="sticky top-[73px] z-30 bg-background/95 backdrop-blur-md border-b border-ag-accent/10 px-4 py-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <MobileStepDots current={step} total={4} />
                    <span className="font-mono text-[10px] text-ag-muted tracking-wider uppercase ml-1">
                      {steps[step].label}
                    </span>
                  </div>
                  {step >= 1 && !isSubmitted && (
                    <button
                      onClick={() => setShowMobileSummary(true)}
                      className="flex items-center gap-1.5 bg-gradient-to-r from-ag-accent/10 to-ag-accent/5 border border-ag-accent/20 px-3 py-1.5"
                    >
                      <Diamond size={10} className="text-ag-accent" />
                      <span className="font-heading font-bold text-sm text-foreground">€{priceCalc.total.toLocaleString("el-GR")}</span>
                      <ChevronUp size={12} className="text-ag-accent/60" />
                    </button>
                  )}
                </div>
              </div>

              {/* Mobile Summary Sheet */}
              <MobileBottomSheet isOpen={showMobileSummary} onClose={() => setShowMobileSummary(false)} title="Σύνοψη Κόστους">
                <div className="text-center mb-4">
                  <div className="font-mono text-[10px] text-ag-accent/50 tracking-[0.2em] uppercase mb-1">Εκτίμηση</div>
                  <div className="font-heading text-4xl font-bold text-foreground">€{priceCalc.total.toLocaleString("el-GR")}</div>
                  {priceCalc.monthly > 0 && <div className="text-ag-accent text-sm mt-1">+ €{priceCalc.monthly}/μήνα</div>}
                </div>
                <GoldDivider className="my-4" />
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between"><span className="text-ag-body">Βάση</span><span className="text-foreground font-mono">€{priceCalc.base.toLocaleString("el-GR")}</span></div>
                  <div className="flex justify-between"><span className="text-ag-body">Features</span><span className="text-ag-accent font-mono">+€{priceCalc.featuresCost.toLocaleString("el-GR")}</span></div>
                  <div className="flex justify-between"><span className="text-ag-body">Τύπος</span><span className="text-foreground">{selectedTypeData?.name}</span></div>
                  {selectedSupport && <div className="flex justify-between"><span className="text-ag-body">Support</span><span className="text-foreground">{supportPlans.find(s => s.id === selectedSupport)?.name}</span></div>}
                </div>
                <div className="mt-4 p-3 bg-ag-surface/30 border border-ag-border/30 text-center">
                  <div className="font-mono text-[10px] text-ag-muted">Δόσεις από €{Math.round(priceCalc.total / 6).toLocaleString("el-GR")}/μήνα × 6</div>
                  <div className="font-mono text-[10px] text-ag-muted mt-1">±15% • Χωρίς ΦΠΑ</div>
                </div>
              </MobileBottomSheet>

              {/* Mobile Included Features Sheet */}
              <MobileBottomSheet isOpen={showMobileIncluded} onClose={() => setShowMobileIncluded(false)} title={`Included στο ${selectedTypeData?.name || ''}`}>
                <div className="space-y-2">
                  {selectedTypeData?.includedFeatures.map((f, i) => {
                    const FIcon = f.icon;
                    return (
                      <div key={i} className="flex items-center gap-3 p-3 bg-ag-accent/[0.04] border border-ag-accent/10">
                        <div className="w-5 h-5 bg-ag-accent/15 border border-ag-accent/25 flex items-center justify-center">
                          <Check size={10} strokeWidth={3} className="text-ag-accent" />
                        </div>
                        <FIcon size={14} className="text-ag-accent/70" />
                        <span className="text-sm text-foreground">{f.name}</span>
                      </div>
                    );
                  })}
                </div>
              </MobileBottomSheet>

              {/* Mobile Category Picker Sheet */}
              <MobileBottomSheet isOpen={showMobileCatPicker} onClose={() => setShowMobileCatPicker(false)} title="Κατηγορίες">
                <div className="space-y-1">
                  {relevantCategories.map((cat) => {
                    const CatIcon = cat.icon;
                    const count = allFeatures.filter((f) => f.category === cat.id && selectedType && f.showFor.includes(selectedType) && selectedFeatures.includes(f.id) && !f.includedIn?.includes(selectedType)).length;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => { setActiveCat(cat.id); setShowMobileCatPicker(false); }}
                        className={`w-full text-left flex items-center justify-between p-3 transition-all ${activeCat === cat.id ? "bg-ag-accent/10 border-l-2 border-ag-accent" : "border-l-2 border-transparent"}`}
                      >
                        <div className="flex items-center gap-3">
                          <CatIcon size={16} className={activeCat === cat.id ? "text-ag-accent" : "text-ag-body"} />
                          <div>
                            <div className={`text-sm font-medium ${activeCat === cat.id ? "text-ag-accent" : "text-foreground"}`}>{cat.name}</div>
                            <div className="text-[11px] text-ag-muted">{cat.description}</div>
                          </div>
                        </div>
                        {count > 0 && (
                          <span className="bg-ag-accent text-ag-bg text-[10px] w-5 h-5 flex items-center justify-center font-mono font-bold">{count}</span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </MobileBottomSheet>

              {/* Mobile Content Area */}
              <div className="flex-1 px-4 py-4 pb-24 overflow-y-auto">
                <AnimatePresence mode="wait">
                  {/* ── M STEP 0 — TYPE ── */}
                  {step === 0 && (
                    <FadeUp key="m-step0">
                      <h2 className="font-heading text-lg font-bold text-foreground mb-1">Τι χρειάζεστε;</h2>
                      <p className="font-body text-ag-body text-xs mb-4">Επιλέξτε τύπο website.</p>
                      <div className="space-y-2.5">
                        {websiteTypes.map((type) => {
                          const Icon = type.icon;
                          const isSel = selectedType === type.id;
                          return (
                            <button
                              key={type.id}
                              onClick={() => {
                                setSelectedType(type.id); setSelectedFeatures([]);
                                const fc = allCategories.find((c) => c.showFor.includes(type.id));
                                setActiveCat(fc?.id || "appearance");
                              }}
                              className={`w-full text-left flex items-center gap-3.5 p-3.5 border transition-all duration-300 ${isSel ? "border-ag-accent/40 bg-gradient-to-r from-ag-accent/[0.06] to-transparent" : "border-ag-border/30 bg-card/30"}`}
                            >
                              {/* Check / number */}
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
                        <motion.button
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          onClick={() => setShowMobileIncluded(true)}
                          className="w-full mt-4 flex items-center justify-between p-3 border border-ag-accent/15 bg-ag-accent/[0.04]"
                        >
                          <div className="flex items-center gap-2">
                            <Check size={14} className="text-ag-accent" />
                            <span className="text-xs text-foreground font-medium">{selectedTypeData.includedFeatures.length} features περιλαμβάνονται</span>
                          </div>
                          <ChevronRight size={14} className="text-ag-accent/60" />
                        </motion.button>
                      )}
                    </FadeUp>
                  )}

                  {/* ── M STEP 1 — FEATURES ── */}
                  {step === 1 && (
                    <FadeUp key="m-step1">
                      {/* Category selector as horizontal pills */}
                      <div className="flex items-center justify-between mb-3">
                        <h2 className="font-heading text-lg font-bold text-foreground">Features</h2>
                        <span className="font-mono text-[10px] text-ag-accent">{extraSelectedCount} extra</span>
                      </div>

                      {/* Horizontal scrollable categories */}
                      <div className="flex gap-1.5 overflow-x-auto pb-3 -mx-4 px-4 scrollbar-none mb-3">
                        {relevantCategories.map((cat) => {
                          const CatIcon = cat.icon;
                          const isAct = activeCat === cat.id;
                          const count = allFeatures.filter((f) => f.category === cat.id && selectedType && f.showFor.includes(selectedType) && selectedFeatures.includes(f.id) && !f.includedIn?.includes(selectedType)).length;
                          return (
                            <button
                              key={cat.id}
                              onClick={() => setActiveCat(cat.id)}
                              className={`flex items-center gap-1.5 px-3 py-2 whitespace-nowrap text-xs font-medium border transition-all flex-shrink-0 ${isAct ? "border-ag-accent/30 bg-ag-accent/10 text-ag-accent" : "border-ag-border/30 bg-card/30 text-ag-body"}`}
                            >
                              <CatIcon size={12} />
                              {cat.name}
                              {count > 0 && <span className="bg-ag-accent text-ag-bg text-[9px] w-4 h-4 flex items-center justify-center font-mono font-bold">{count}</span>}
                            </button>
                          );
                        })}
                      </div>

                      {/* Features list */}
                      <div className="space-y-2">
                        {visibleFeatures.length === 0 && (
                          <div className="text-center py-8 text-ag-muted text-sm">Δεν υπάρχουν features.</div>
                        )}
                        {visibleFeatures.map((feature) => {
                          const isSel = selectedFeatures.includes(feature.id);
                          const FIcon = feature.icon;
                          const isIncl = feature.includedIn?.includes(selectedType || "") || false;
                          return (
                            <button
                              key={feature.id}
                              onClick={() => { if (!isIncl) toggleFeature(feature.id); }}
                              className={`w-full text-left flex items-center gap-3 p-3 border transition-all ${isIncl ? "border-ag-accent/20 bg-ag-accent/[0.04] cursor-default" : isSel ? "border-ag-accent/30 bg-ag-accent/[0.06]" : "border-ag-border/30 bg-card/30 active:bg-card/60"}`}
                            >
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
                                {isIncl ? (
                                  <span className="font-mono text-[11px] text-ag-accent">✓</span>
                                ) : (
                                  <span className="font-mono text-[11px] text-ag-accent/80">{featurePriceLabel(feature)}</span>
                                )}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </FadeUp>
                  )}

                  {/* ── M STEP 2 — SUPPORT ── */}
                  {step === 2 && (
                    <FadeUp key="m-step2">
                      <h2 className="font-heading text-lg font-bold text-foreground mb-1">Συντήρηση</h2>
                      <p className="font-body text-ag-body text-xs mb-4">Ongoing support μετά την παράδοση.</p>
                      <div className="space-y-3">
                        {supportPlans.map((plan) => {
                          const PlanIcon = plan.icon;
                          const isSel = selectedSupport === plan.id;
                          return (
                            <button
                              key={plan.id}
                              onClick={() => setSelectedSupport(plan.id)}
                              className={`w-full text-left relative p-4 border transition-all ${isSel ? "border-ag-accent/40 bg-gradient-to-r from-ag-accent/[0.06] to-transparent" : "border-ag-border/30 bg-card/30"}`}
                            >
                              {isSel && <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ag-accent/40 to-transparent" />}
                              <div className="flex items-start gap-3">
                                <div className={`w-8 h-8 flex items-center justify-center border flex-shrink-0 transition-all ${isSel ? "bg-gradient-to-br from-ag-accent to-ag-accent/80 border-ag-accent" : "bg-card border-ag-border/40"}`}>
                                  {isSel ? <Check size={14} strokeWidth={3} className="text-ag-bg" /> : <PlanIcon size={14} className="text-ag-body/60" />}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2">
                                    <span className="font-heading text-sm font-semibold text-foreground">{plan.name}</span>
                                    {plan.recommended && <Star size={10} className="text-ag-accent" />}
                                  </div>
                                  <p className="text-[11px] text-ag-body mt-0.5">{plan.desc}</p>
                                  <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2">
                                    {plan.features.map((f, i) => (
                                      <span key={i} className="text-[10px] text-ag-muted flex items-center gap-1">
                                        <Check size={7} strokeWidth={3} className="text-ag-accent/50" />{f}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                                <div className="text-right flex-shrink-0">
                                  <div className="font-mono text-base font-bold text-ag-accent">
                                    {plan.monthlyPrice === 0 ? "€0" : `€${plan.monthlyPrice}`}
                                  </div>
                                  {plan.monthlyPrice > 0 && <div className="font-mono text-[10px] text-ag-muted">/μήνα</div>}
                                </div>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </FadeUp>
                  )}

                  {/* ── M STEP 3 — CONTACT ── */}
                  {step === 3 && !isSubmitted && (
                    <FadeUp key="m-step3">
                      <h2 className="font-heading text-lg font-bold text-foreground mb-1">Στοιχεία</h2>
                      <p className="font-body text-ag-body text-xs mb-4">Συμπληρώστε για αποστολή.</p>

                      {/* Compact summary card */}
                      <div className="p-3 border border-ag-accent/20 bg-ag-accent/[0.04] mb-4 flex items-center justify-between">
                        <div>
                          <div className="font-mono text-[10px] text-ag-accent/50 tracking-wider">ΚΟΣΤΟΣ</div>
                          <div className="font-heading text-xl font-bold text-foreground">€{priceCalc.total.toLocaleString("el-GR")}</div>
                        </div>
                        {priceCalc.monthly > 0 && (
                          <div className="text-right">
                            <div className="font-mono text-[10px] text-ag-muted">SUPPORT</div>
                            <div className="font-heading text-base font-bold text-ag-accent">€{priceCalc.monthly}/μο</div>
                          </div>
                        )}
                      </div>

                      <div className="space-y-3">
                        <div>
                          <label className="font-mono text-[10px] text-ag-accent/50 mb-1 block tracking-wider">ΟΝΟΜΑ *</label>
                          <input type="text" value={contactForm.name} onChange={(e) => setContactForm((p) => ({ ...p, name: e.target.value }))} placeholder="Ονοματεπώνυμο" className="w-full bg-background/50 border border-ag-border/40 px-3 py-2.5 text-foreground placeholder:text-ag-muted/40 focus:border-ag-accent/40 focus:outline-none text-sm" data-testid="input-name" />
                        </div>
                        <div>
                          <label className="font-mono text-[10px] text-ag-accent/50 mb-1 block tracking-wider">EMAIL *</label>
                          <input type="email" value={contactForm.email} onChange={(e) => setContactForm((p) => ({ ...p, email: e.target.value }))} placeholder="email@example.com" className="w-full bg-background/50 border border-ag-border/40 px-3 py-2.5 text-foreground placeholder:text-ag-muted/40 focus:border-ag-accent/40 focus:outline-none text-sm" data-testid="input-email" />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="font-mono text-[10px] text-ag-accent/50 mb-1 block tracking-wider">ΤΗΛ</label>
                            <input type="tel" value={contactForm.phone} onChange={(e) => setContactForm((p) => ({ ...p, phone: e.target.value }))} placeholder="69..." className="w-full bg-background/50 border border-ag-border/40 px-3 py-2.5 text-foreground placeholder:text-ag-muted/40 focus:border-ag-accent/40 focus:outline-none text-sm" />
                          </div>
                          <div>
                            <label className="font-mono text-[10px] text-ag-accent/50 mb-1 block tracking-wider">ΕΤΑΙΡΕΙΑ</label>
                            <input type="text" value={contactForm.company} onChange={(e) => setContactForm((p) => ({ ...p, company: e.target.value }))} placeholder="Προαιρετικό" className="w-full bg-background/50 border border-ag-border/40 px-3 py-2.5 text-foreground placeholder:text-ag-muted/40 focus:border-ag-accent/40 focus:outline-none text-sm" />
                          </div>
                        </div>
                        <div>
                          <label className="font-mono text-[10px] text-ag-accent/50 mb-1 block tracking-wider">ΣΗΜΕΙΩΣΕΙΣ</label>
                          <textarea value={contactForm.notes} onChange={(e) => setContactForm((p) => ({ ...p, notes: e.target.value }))} rows={3} placeholder="Πείτε μας..." className="w-full bg-background/50 border border-ag-border/40 px-3 py-2.5 text-foreground placeholder:text-ag-muted/40 focus:border-ag-accent/40 focus:outline-none text-sm resize-none" />
                        </div>
                      </div>
                    </FadeUp>
                  )}

                  {/* ── M SUCCESS ── */}
                  {step === 3 && isSubmitted && (
                    <FadeUp key="m-success">
                      <div className="text-center py-10">
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", duration: 0.6 }} className="w-16 h-16 bg-gradient-to-br from-ag-accent/15 to-ag-accent/5 border border-ag-accent/25 flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(212,175,55,0.1)]">
                          <Check size={28} className="text-ag-accent" />
                        </motion.div>
                        <h2 className="font-heading text-xl font-bold text-foreground mb-2">Καταχωρήθηκε!</h2>
                        <p className="font-body text-ag-body text-sm mb-1">Θα απαντήσουμε στο</p>
                        <p className="text-ag-accent text-sm font-medium mb-4">{contactForm.email}</p>
                        <GoldDivider className="my-4 max-w-[150px] mx-auto" />
                        <div className="bg-card/50 border border-ag-accent/20 p-4 inline-block mb-6">
                          <div className="font-heading text-2xl font-bold text-foreground">€{priceCalc.total.toLocaleString("el-GR")}</div>
                          {priceCalc.monthly > 0 && <div className="text-ag-accent text-xs mt-1">+ €{priceCalc.monthly}/μήνα</div>}
                        </div>
                        <div className="flex items-center justify-center gap-4">
                          <button onClick={handleReset} className="text-ag-body text-sm flex items-center gap-1"><RefreshCw size={14} /> Νέα</button>
                          <Link href="/" className="text-ag-accent text-sm flex items-center gap-1">Αρχική <ArrowUpRight size={14} /></Link>
                        </div>
                      </div>
                    </FadeUp>
                  )}
                </AnimatePresence>
              </div>

              {/* ══ MOBILE FIXED BOTTOM NAV ══ */}
              {!isSubmitted && (
                <div className="fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-t border-ag-accent/15 px-4 py-3 safe-bottom">
                  <div className="flex items-center gap-3">
                    {step > 0 && (
                      <button onClick={goBack} className="w-10 h-10 flex items-center justify-center border border-ag-border/40 bg-card/50 text-ag-body">
                        <ChevronLeft size={18} />
                      </button>
                    )}
                    {step < 3 ? (
                      <button
                        onClick={goNext}
                        disabled={!canProceed()}
                        className="flex-1 h-10 relative overflow-hidden font-heading font-semibold text-sm disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-ag-accent via-ag-accent to-ag-accent/90" />
                        <span className="relative text-ag-bg flex items-center justify-center gap-2">
                          {step === 2 ? "Σύνοψη" : "Επόμενο"}
                          <ChevronRight size={16} />
                        </span>
                      </button>
                    ) : (
                      <button
                        onClick={handleSubmit}
                        disabled={!contactForm.name || !contactForm.email || isSubmitting}
                        className="flex-1 h-10 relative overflow-hidden font-heading font-semibold text-sm disabled:opacity-30 disabled:cursor-not-allowed"
                        data-testid="submit-btn"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-ag-accent via-ag-accent to-ag-accent/90" />
                        <span className="relative text-ag-bg flex items-center justify-center gap-2">
                          {isSubmitting ? (
                            <><div className="w-4 h-4 border-2 border-ag-bg/30 border-t-ag-bg rounded-full animate-spin" /> Αποστολή...</>
                          ) : (
                            <><Diamond size={14} /> Αποστολή <ArrowRight size={16} /></>
                          )}
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
                <DesktopStepIndicator current={step} onNavigate={setStep} canNavigateTo={canNavigateTo} />
              </div>

              {/* Desktop Live Price Bar */}
              {step >= 1 && !isSubmitted && (
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-ag-accent/5 via-ag-accent/[0.02] to-ag-accent/5" />
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ag-accent/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ag-accent/10 to-transparent" />
                  <div className="relative bg-card/80 backdrop-blur-sm border border-ag-accent/15 p-6">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-6">
                        <div>
                          <div className="font-mono text-[10px] text-ag-accent/60 mb-1.5 tracking-[0.2em] uppercase flex items-center gap-1.5"><Diamond size={8} /> Εκτίμηση Κόστους</div>
                          <div className="text-3xl font-heading font-bold text-foreground tracking-tight">€{priceCalc.total.toLocaleString("el-GR")}</div>
                        </div>
                        {priceCalc.monthly > 0 && (
                          <div className="pl-6 border-l border-ag-accent/15">
                            <div className="font-mono text-[10px] text-ag-muted mb-1.5 tracking-[0.15em] uppercase">Μηνιαία</div>
                            <div className="text-xl font-heading font-bold text-ag-accent">€{priceCalc.monthly}<span className="text-sm font-normal text-ag-accent/60">/μο</span></div>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-4 font-mono text-xs text-ag-muted">
                        {priceCalc.featuresCost > 0 && <span className="text-ag-body">Features: <span className="text-ag-accent">+€{priceCalc.featuresCost.toLocaleString("el-GR")}</span></span>}
                        <span className="bg-ag-accent/5 border border-ag-accent/10 px-2.5 py-1 text-ag-accent/70 text-[10px] tracking-wider">±15%</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ── D STEP 0 ── */}
              {step === 0 && (
                <FadeUp>
                  <div className="mb-10">
                    <PremiumBadge icon={Layers}>STEP 01</PremiumBadge>
                    <h1 className="font-heading text-3xl font-bold text-foreground mt-4 mb-2 tracking-tight">Τι τύπο site χρειάζεστε;</h1>
                    <p className="font-body text-ag-body text-sm">Επιλέξτε αυτό που ταιριάζει στην επιχείρησή σας.</p>
                    <GoldDivider className="mt-6 max-w-sm" />
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {websiteTypes.map((type, idx) => {
                      const Icon = type.icon; const isSel = selectedType === type.id;
                      return (
                        <motion.button key={type.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: idx * 0.08 }}
                          onClick={() => { setSelectedType(type.id); setSelectedFeatures([]); const fc = allCategories.find((c) => c.showFor.includes(type.id)); setActiveCat(fc?.id || "appearance"); }}
                          className={`group relative text-left p-6 border transition-all duration-500 ${isSel ? "border-ag-accent/40 bg-gradient-to-b from-ag-accent/[0.06] to-ag-accent/[0.02] shadow-[0_0_30px_rgba(212,175,55,0.06)]" : "border-ag-border/40 bg-card/50 hover:border-ag-accent/15"}`}
                          data-cursor="hover" data-testid={`type-${type.id}`}
                        >
                          {isSel && <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ag-accent/40 to-transparent" />}
                          {type.popular && <span className="absolute top-3 right-3 font-mono text-[10px] font-bold bg-gradient-to-r from-ag-accent/15 to-ag-accent/5 text-ag-accent px-2.5 py-1 border border-ag-accent/20 tracking-widest flex items-center gap-1"><Crown size={8} /> ΔΗΜΟΦΙΛΕΣ</span>}
                          <div className={`w-10 h-10 flex items-center justify-center border transition-all duration-500 ${isSel ? "bg-gradient-to-br from-ag-accent/15 to-ag-accent/5 border-ag-accent/25" : "bg-ag-surface/30 border-ag-border/30"}`}>
                            <Icon size={20} className={isSel ? "text-ag-accent" : "text-ag-body"} />
                          </div>
                          <h3 className="font-heading text-foreground font-semibold mt-4 mb-1.5 text-base">{type.name}</h3>
                          <p className="font-body text-ag-body text-xs leading-relaxed mb-4">{type.desc}</p>
                          <div className="flex items-center justify-between pt-4 border-t border-ag-border/30">
                            <span className="font-mono text-sm font-semibold text-ag-accent">από €{type.basePrice.toLocaleString("el-GR")}</span>
                            <span className="font-mono text-ag-muted text-xs flex items-center gap-1"><Clock size={10} />{type.timeEstimate}</span>
                          </div>
                          <p className="font-body text-[11px] text-ag-muted mt-2.5 italic">Ιδανικό: {type.idealFor}</p>
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
                          Περιλαμβάνονται στο {selectedTypeData.name}:
                        </h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
                          {selectedTypeData.includedFeatures.map((f, i) => { const FI = f.icon; return (
                            <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: i * 0.05 }} className="flex items-center gap-2.5 font-body text-sm text-foreground/80 py-2 px-3 bg-gradient-to-r from-ag-accent/[0.04] to-transparent border border-ag-accent/10">
                              <div className="w-4 h-4 bg-ag-accent/15 border border-ag-accent/30 flex items-center justify-center flex-shrink-0"><Check size={8} strokeWidth={3} className="text-ag-accent" /></div>
                              <FI size={14} className="text-ag-accent/70 flex-shrink-0" />
                              <span className="text-xs">{f.name}</span>
                            </motion.div>
                          ); })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </FadeUp>
              )}

              {/* ── D STEP 1 — FEATURES ── */}
              {step === 1 && (
                <FadeUp>
                  <div className="mb-8">
                    <PremiumBadge icon={Sparkles}>STEP 02</PremiumBadge>
                    <h1 className="font-heading text-3xl font-bold text-foreground mt-4 mb-1 tracking-tight">Extra Features</h1>
                    <p className="font-body text-ag-body text-sm">Προσθέστε ό,τι χρειάζεστε.</p>
                    <GoldDivider className="mt-5 max-w-sm" />
                  </div>
                  <div className="flex gap-6">
                    <div className="w-60 flex-shrink-0">
                      <div className="sticky top-24 space-y-1 bg-card/30 border border-ag-border/30 p-2">
                        {relevantCategories.map((cat) => {
                          const CI = cat.icon;
                          const countS = allFeatures.filter((f) => f.category === cat.id && selectedType && f.showFor.includes(selectedType) && selectedFeatures.includes(f.id) && !f.includedIn?.includes(selectedType)).length;
                          const countI = allFeatures.filter((f) => f.category === cat.id && selectedType && f.showFor.includes(selectedType) && (f.includedIn?.includes(selectedType) || false)).length;
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
                        {visibleFeatures.length === 0 && <div className="text-center py-12 text-ag-muted text-sm">Δεν υπάρχουν features.</div>}
                        {visibleFeatures.map((feature, idx) => {
                          const isSel = selectedFeatures.includes(feature.id); const FI = feature.icon; const isIncl = feature.includedIn?.includes(selectedType || "") || false;
                          return (
                            <motion.button key={feature.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: idx * 0.03 }}
                              onClick={() => { if (!isIncl) toggleFeature(feature.id); }}
                              className={`group w-full text-left flex items-center gap-4 p-4 border transition-all duration-300 ${isIncl ? "border-ag-accent/20 bg-gradient-to-r from-ag-accent/[0.04] to-transparent cursor-default" : isSel ? "border-ag-accent/30 bg-gradient-to-r from-ag-accent/[0.06] to-ag-accent/[0.02] shadow-[0_0_15px_rgba(212,175,55,0.04)]" : "border-ag-border/30 bg-card/30 hover:border-ag-accent/15"}`}
                              data-cursor={isIncl ? "default" : "hover"}
                            >
                              <div className={`w-5 h-5 flex items-center justify-center flex-shrink-0 border transition-all duration-300 ${isIncl ? "bg-ag-accent/15 border-ag-accent/30" : isSel ? "bg-gradient-to-br from-ag-accent to-ag-accent/80 border-ag-accent shadow-[0_0_8px_rgba(212,175,55,0.15)]" : "bg-transparent border-ag-body/30"}`}>
                                {(isSel || isIncl) && <Check size={11} strokeWidth={3} className={isIncl ? "text-ag-accent" : "text-ag-bg"} />}
                              </div>
                              <FI size={18} className={`transition-colors flex-shrink-0 ${isIncl || isSel ? "text-ag-accent" : "text-ag-body/60"}`} />
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <span className="font-body text-sm text-foreground font-medium">{feature.name}</span>
                                  {isIncl && <span className="font-mono text-[10px] bg-gradient-to-r from-ag-accent/10 to-ag-accent/5 text-ag-accent border border-ag-accent/15 px-1.5 py-0.5 tracking-wider">ΠΕΡΙΛΑΜΒΑΝΕΤΑΙ</span>}
                                  {(feature.isMonthly || feature.isYearly) && !isIncl && <span className="font-mono text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/20 px-1.5 py-0.5">{feature.isMonthly ? "ΜΗΝΙΑΙΟ" : "ΕΤΗΣΙΟ"}</span>}
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
                        <div className="flex items-center gap-4"><span className="text-ag-accent flex items-center gap-1.5"><Diamond size={8} />{includedCount} included</span><span className="text-ag-body">+ {extraSelectedCount} extra</span></div>
                        <span className="font-bold bg-gradient-to-r from-ag-accent to-ag-accent/80 bg-clip-text text-transparent">+€{priceCalc.featuresCost.toLocaleString("el-GR")}</span>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              )}

              {/* ── D STEP 2 ── */}
              {step === 2 && (
                <FadeUp>
                  <div className="mb-10">
                    <PremiumBadge icon={Shield}>STEP 03</PremiumBadge>
                    <h1 className="font-heading text-3xl font-bold text-foreground mt-4 mb-2 tracking-tight">Μηνιαία Συντήρηση</h1>
                    <p className="font-body text-ag-body text-sm">Ongoing support μετά την παράδοση.</p>
                    <GoldDivider className="mt-6 max-w-sm" />
                  </div>
                  <div className="grid sm:grid-cols-3 gap-5">
                    {supportPlans.map((plan, idx) => {
                      const PI = plan.icon; const isSel = selectedSupport === plan.id;
                      return (
                        <motion.button key={plan.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: idx * 0.1 }}
                          onClick={() => setSelectedSupport(plan.id)}
                          className={`group relative text-left p-6 border transition-all duration-500 flex flex-col ${isSel ? "border-ag-accent/40 bg-gradient-to-b from-ag-accent/[0.06] to-ag-accent/[0.02] shadow-[0_0_30px_rgba(212,175,55,0.06)]" : "border-ag-border/40 bg-card/50 hover:border-ag-accent/15"}`}
                          data-cursor="hover" data-testid={`support-${plan.id}`}
                        >
                          {isSel && <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ag-accent/40 to-transparent" />}
                          {plan.recommended && <span className="absolute top-3 right-3 font-mono text-[10px] font-bold bg-gradient-to-r from-ag-accent/15 to-ag-accent/5 text-ag-accent px-2.5 py-1 border border-ag-accent/20 tracking-widest flex items-center gap-1"><Star size={8} /> ΠΡΟΤΕΙΝΕΤΑΙ</span>}
                          <div className={`w-10 h-10 flex items-center justify-center border transition-all ${isSel ? "bg-gradient-to-br from-ag-accent/15 to-ag-accent/5 border-ag-accent/25" : "bg-ag-surface/30 border-ag-border/30"}`}><PI size={18} className={isSel ? "text-ag-accent" : "text-ag-body"} /></div>
                          <h3 className="font-heading text-foreground font-semibold mt-4 mb-1.5">{plan.name}</h3>
                          <p className="font-body text-ag-body text-xs leading-relaxed mb-5">{plan.desc}</p>
                          <ul className="space-y-2 mb-5 flex-1">
                            {plan.features.map((f, i) => <li key={i} className="flex items-start gap-2.5 text-xs text-ag-body"><div className="w-3.5 h-3.5 bg-ag-accent/10 border border-ag-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5"><Check size={7} strokeWidth={3} className="text-ag-accent" /></div>{f}</li>)}
                          </ul>
                          <div className="pt-4 border-t border-ag-border/30">
                            <span className="font-mono font-bold text-xl text-ag-accent">{plan.monthlyPrice === 0 ? "€0" : `€${plan.monthlyPrice}`}</span>
                            {plan.monthlyPrice > 0 && <><span className="text-ag-accent/50 text-sm font-mono">/μήνα</span><span className="font-mono text-xs text-ag-muted block mt-1">€{(plan.monthlyPrice * 12).toLocaleString("el-GR")}/έτος</span></>}
                          </div>
                          {isSel && <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute top-3 left-3 w-6 h-6 bg-gradient-to-br from-ag-accent to-ag-accent/80 flex items-center justify-center shadow-[0_0_10px_rgba(212,175,55,0.2)]"><Check size={12} strokeWidth={3} className="text-ag-bg" /></motion.div>}
                        </motion.button>
                      );
                    })}
                  </div>
                </FadeUp>
              )}

              {/* ── D STEP 3 ── */}
              {step === 3 && !isSubmitted && (
                <FadeUp>
                  <div className="mb-10">
                    <PremiumBadge icon={Crown}>FINAL STEP</PremiumBadge>
                    <h1 className="font-heading text-3xl font-bold text-foreground mt-4 mb-2 tracking-tight">Σύνοψη & Αποστολή</h1>
                    <p className="font-body text-ag-body text-sm">Ελέγξτε τις επιλογές σας.</p>
                    <GoldDivider className="mt-6 max-w-sm" />
                  </div>
                  <div className="grid lg:grid-cols-5 gap-6">
                    <div className="lg:col-span-2 space-y-4">
                      <div className="relative overflow-hidden bg-card/50 border border-ag-border/40 p-6">
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-ag-accent/20 via-ag-accent/5 to-transparent" />
                        <h3 className="font-heading text-sm font-semibold text-foreground mb-5 flex items-center gap-2"><Diamond size={12} className="text-ag-accent" /> Οι επιλογές σας</h3>
                        <div className="space-y-3 font-body text-sm">
                          <div className="flex justify-between py-2.5 border-b border-ag-border/20"><span className="text-ag-body">Τύπος</span><span className="text-foreground font-medium">{selectedTypeData?.name || "—"}</span></div>
                          <div className="py-2.5 border-b border-ag-border/20"><div className="flex justify-between mb-1"><span className="text-ag-body">Extras</span><span className="font-mono text-ag-accent text-xs">{priceCalc.featuresCost > 0 ? `+€${priceCalc.featuresCost.toLocaleString("el-GR")}` : "—"}</span></div></div>
                          <div className="flex justify-between py-2.5 border-b border-ag-border/20"><span className="text-ag-body">Support</span><span className="text-foreground font-medium">{supportPlans.find((s) => s.id === selectedSupport)?.name || "—"}</span></div>
                          <div className="flex justify-between py-2.5"><span className="text-ag-body">Χρόνος</span><span className="text-foreground font-medium flex items-center gap-1.5"><Clock size={11} className="text-ag-accent/50" />{selectedTypeData?.timeEstimate || "—"}</span></div>
                        </div>
                      </div>
                      <div className="relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-ag-accent/[0.06] via-ag-accent/[0.02] to-transparent" />
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-ag-accent/30 via-ag-accent/15 to-transparent" />
                        <div className="relative bg-card/30 border border-ag-accent/20 p-6 text-center">
                          <div className="font-mono text-[10px] text-ag-accent/60 mb-2 tracking-[0.2em] uppercase flex items-center justify-center gap-1.5"><Diamond size={8} /> Εκτίμηση</div>
                          <div className="font-heading text-4xl font-bold text-foreground mb-1 tracking-tight">€{priceCalc.total.toLocaleString("el-GR")}</div>
                          {priceCalc.monthly > 0 && <div className="text-ag-accent text-sm font-medium">+ €{priceCalc.monthly}/μήνα</div>}
                          <GoldDivider className="my-4 max-w-[200px] mx-auto" />
                          <div className="text-xs text-ag-body">Δόσεις: <span className="text-ag-accent font-semibold">€{Math.round(priceCalc.total / 6).toLocaleString("el-GR")}/μο</span> ×6</div>
                          <div className="font-mono text-[10px] text-ag-muted mt-1">±15% • Χωρίς ΦΠΑ</div>
                        </div>
                      </div>
                    </div>
                    <div className="lg:col-span-3 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ag-accent/15 to-ag-accent/20" />
                      <div className="bg-card/50 border border-ag-border/40 p-6">
                        <h3 className="font-heading text-sm font-semibold text-foreground mb-5 flex items-center gap-2"><div className="w-6 h-6 bg-ag-accent/10 border border-ag-accent/15 flex items-center justify-center"><Mail size={12} className="text-ag-accent" /></div> Στοιχεία</h3>
                        <div className="space-y-4">
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div><label className="font-mono text-[10px] text-ag-accent/50 mb-1.5 block tracking-[0.15em] uppercase">Ονοματεπώνυμο *</label><div className="relative group"><User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-ag-body/40 group-focus-within:text-ag-accent/60 transition-colors" /><input type="text" value={contactForm.name} onChange={(e) => setContactForm((p) => ({ ...p, name: e.target.value }))} placeholder="Γιώργος" className="w-full bg-background/50 border border-ag-border/40 pl-9 pr-3 py-2.5 text-foreground placeholder:text-ag-muted/40 focus:border-ag-accent/40 focus:shadow-[0_0_15px_rgba(212,175,55,0.05)] focus:outline-none text-sm" data-testid="input-name" /></div></div>
                            <div><label className="font-mono text-[10px] text-ag-accent/50 mb-1.5 block tracking-[0.15em] uppercase">Email *</label><div className="relative group"><Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-ag-body/40 group-focus-within:text-ag-accent/60 transition-colors" /><input type="email" value={contactForm.email} onChange={(e) => setContactForm((p) => ({ ...p, email: e.target.value }))} placeholder="email@example.com" className="w-full bg-background/50 border border-ag-border/40 pl-9 pr-3 py-2.5 text-foreground placeholder:text-ag-muted/40 focus:border-ag-accent/40 focus:shadow-[0_0_15px_rgba(212,175,55,0.05)] focus:outline-none text-sm" data-testid="input-email" /></div></div>
                          </div>
                          <div className="grid sm:grid-cols-2 gap-4">
                            <div><label className="font-mono text-[10px] text-ag-accent/50 mb-1.5 block tracking-[0.15em] uppercase">Τηλ</label><div className="relative group"><Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-ag-body/40 group-focus-within:text-ag-accent/60 transition-colors" /><input type="tel" value={contactForm.phone} onChange={(e) => setContactForm((p) => ({ ...p, phone: e.target.value }))} placeholder="69..." className="w-full bg-background/50 border border-ag-border/40 pl-9 pr-3 py-2.5 text-foreground placeholder:text-ag-muted/40 focus:border-ag-accent/40 focus:outline-none text-sm" /></div></div>
                            <div><label className="font-mono text-[10px] text-ag-accent/50 mb-1.5 block tracking-[0.15em] uppercase">Εταιρεία</label><div className="relative group"><Building2 size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-ag-body/40 group-focus-within:text-ag-accent/60 transition-colors" /><input type="text" value={contactForm.company} onChange={(e) => setContactForm((p) => ({ ...p, company: e.target.value }))} placeholder="Προαιρετικό" className="w-full bg-background/50 border border-ag-border/40 pl-9 pr-3 py-2.5 text-foreground placeholder:text-ag-muted/40 focus:border-ag-accent/40 focus:outline-none text-sm" /></div></div>
                          </div>
                          <div><label className="font-mono text-[10px] text-ag-accent/50 mb-1.5 block tracking-[0.15em] uppercase">Σημειώσεις</label><textarea value={contactForm.notes} onChange={(e) => setContactForm((p) => ({ ...p, notes: e.target.value }))} rows={4} placeholder="Πείτε μας..." className="w-full bg-background/50 border border-ag-border/40 px-3 py-2.5 text-foreground placeholder:text-ag-muted/40 focus:border-ag-accent/40 focus:outline-none text-sm resize-none" /></div>
                          <motion.button onClick={handleSubmit} disabled={!contactForm.name || !contactForm.email || isSubmitting} className="group relative w-full py-3.5 font-heading font-semibold text-sm overflow-hidden disabled:opacity-30 disabled:cursor-not-allowed" data-cursor="hover" data-testid="submit-btn" whileHover={{ scale: contactForm.name && contactForm.email && !isSubmitting ? 1.005 : 1 }}>
                            <div className="absolute inset-0 bg-gradient-to-r from-ag-accent via-ag-accent to-ag-accent/90" />
                            <div className="absolute inset-0 bg-gradient-to-r from-ag-accent/0 via-white/10 to-ag-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                            <span className="relative text-ag-bg flex items-center justify-center gap-2">
                              {isSubmitting ? <><div className="w-4 h-4 border-2 border-ag-bg/30 border-t-ag-bg rounded-full animate-spin" /> Αποστολή...</> : <><Diamond size={14} /> Αποστολή <ArrowRight size={16} /></>}
                            </span>
                          </motion.button>
                          <p className="text-[11px] text-ag-muted text-center flex items-center justify-center gap-1.5"><Diamond size={6} className="text-ag-accent/30" /> Προσφορά εντός 24h • Χωρίς δέσμευση <Diamond size={6} className="text-ag-accent/30" /></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              )}

              {/* ── D SUCCESS ── */}
              {step === 3 && isSubmitted && (
                <FadeUp>
                  <div className="max-w-md mx-auto text-center py-20">
                    <motion.div initial={{ scale: 0, rotate: -45 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring", duration: 0.7 }} className="w-20 h-20 bg-gradient-to-br from-ag-accent/15 to-ag-accent/5 border border-ag-accent/25 flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(212,175,55,0.1)]">
                      <Check size={32} className="text-ag-accent" />
                    </motion.div>
                    <PremiumBadge icon={Sparkles} variant="highlight">ΕΠΙΤΥΧΙΑ</PremiumBadge>
                    <h2 className="font-heading text-2xl font-bold text-foreground mt-4 mb-3 tracking-tight">Καταχωρήθηκε!</h2>
                    <p className="text-ag-body text-sm mb-1">Θα απαντήσουμε στο <span className="text-ag-accent font-medium">{contactForm.email}</span></p>
                    <GoldDivider className="my-6 max-w-[200px] mx-auto" />
                    <div className="relative overflow-hidden inline-block"><div className="absolute inset-0 bg-gradient-to-br from-ag-accent/[0.06] to-transparent" /><div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ag-accent/30 to-transparent" /><div className="relative bg-card/50 border border-ag-accent/20 p-6"><span className="font-mono text-[10px] text-ag-accent/50 block mb-1.5 tracking-[0.2em] uppercase">Εκτίμηση</span><span className="font-heading text-3xl font-bold text-foreground">€{priceCalc.total.toLocaleString("el-GR")}</span>{priceCalc.monthly > 0 && <span className="text-ag-accent text-xs block mt-1.5">+ €{priceCalc.monthly}/μο</span>}</div></div>
                    <div className="flex items-center justify-center gap-6 mt-8">
                      <button onClick={handleReset} className="group text-ag-body hover:text-foreground transition-all text-sm flex items-center gap-1.5"><RefreshCw size={14} className="group-hover:rotate-180 transition-transform duration-500" /> Νέα εκτίμηση</button>
                      <div className="w-px h-4 bg-ag-border/30" />
                      <Link href="/" className="group text-ag-accent hover:text-foreground transition-all text-sm flex items-center gap-1.5">Αρχική <ArrowUpRight size={14} /></Link>
                    </div>
                  </div>
                </FadeUp>
              )}

              {/* Desktop Nav */}
              {!isSubmitted && (
                <div className="flex items-center justify-between mt-12 pt-6 border-t border-ag-accent/10">
                  <button onClick={goBack} disabled={step === 0} className="group flex items-center gap-2 text-ag-body hover:text-foreground transition-all disabled:opacity-15 text-sm" data-cursor="hover">
                    <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" /> Πίσω
                  </button>
                  <div className="font-mono text-[10px] text-ag-accent/40 tracking-[0.15em] uppercase flex items-center gap-2"><Diamond size={6} /> Βήμα {step + 1}/4 <Diamond size={6} /></div>
                  {step < 3 && (
                    <motion.button onClick={goNext} disabled={!canProceed()} className="group relative flex items-center gap-2 px-6 py-2.5 font-heading font-semibold text-sm overflow-hidden disabled:opacity-25 disabled:cursor-not-allowed" data-cursor="hover" whileHover={{ scale: canProceed() ? 1.02 : 1 }}>
                      <div className="absolute inset-0 bg-gradient-to-r from-ag-accent via-ag-accent to-ag-accent/90" />
                      <div className="absolute inset-0 bg-gradient-to-r from-ag-accent/0 via-white/10 to-ag-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                      <span className="relative text-ag-bg flex items-center gap-2">{step === 2 ? "Σύνοψη" : "Επόμενο"} <ChevronRight size={16} /></span>
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
          <p className="font-body text-ag-muted/60 leading-none text-[10px] md:text-xs">* Ενδεικτικές τιμές χωρίς ΦΠΑ.</p>
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