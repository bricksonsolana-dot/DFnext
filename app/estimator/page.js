// app/estimator/page.js

'use client';

import React, { useState, useCallback, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Globe, Search, ShoppingCart, Zap, ArrowRight, ArrowLeft, Check,
  FileText, Image, MessageSquare, BarChart3, Lock, Headphones, RefreshCw,
  Calculator, Mail, Phone, User, Building2, CreditCard, Truck, Calendar,
  Shield, Users, Database, Bell, Bot, MapPin, Layers, Smartphone,
  ChevronRight, ArrowUpRight, Eye, Package, Download, Brush, Palette,
} from 'lucide-react';

/* ═══════════════════════════════════════
   FADE UP ANIMATION COMPONENT
═══════════════════════════════════════ */
function EstimatorBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Large square — top right */}
      <motion.div
        className="absolute border border-ag-accent/[0.04]"
        style={{ width: '400px', height: '400px', top: '5%', right: '-5%' }}
        animate={{
          rotate: [0, 90],
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }}
      />

      {/* Medium rectangle — left side */}
      <motion.div
        className="absolute border border-white/[0.03]"
        style={{ width: '250px', height: '180px', top: '30%', left: '-3%' }}
        animate={{
          rotate: [15, -15],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }}
      />

      {/* Small square — center right */}
      <motion.div
        className="absolute border border-ag-accent/[0.06]"
        style={{ width: '120px', height: '120px', top: '55%', right: '10%' }}
        animate={{
          rotate: [45, 135],
          x: [0, -30, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }}
      />

      {/* Tiny square — top left */}
      <motion.div
        className="absolute border border-white/[0.04]"
        style={{ width: '60px', height: '60px', top: '15%', left: '15%' }}
        animate={{
          rotate: [0, 180],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }}
      />

      {/* Large rectangle — bottom left */}
      <motion.div
        className="absolute border border-ag-accent/[0.03]"
        style={{ width: '350px', height: '200px', bottom: '10%', left: '-8%' }}
        animate={{
          rotate: [-10, 10],
          x: [0, 40, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }}
      />

      {/* Medium square — bottom right */}
      <motion.div
        className="absolute border border-white/[0.03]"
        style={{ width: '180px', height: '180px', bottom: '25%', right: '-2%' }}
        animate={{
          rotate: [20, -20],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }}
      />

      {/* Tiny accent dot — floating */}
      <motion.div
        className="absolute w-2 h-2 bg-ag-accent/[0.08] rotate-45"
        style={{ top: '40%', left: '25%' }}
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }}
      />

      {/* Another accent dot */}
      <motion.div
        className="absolute w-1.5 h-1.5 bg-ag-accent/[0.06] rotate-45"
        style={{ top: '70%', right: '30%' }}
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }}
      />

      {/* Subtle gradient orbs */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-[0.015]"
        style={{
          top: '10%',
          right: '5%',
          background: 'radial-gradient(circle, #E8FF3D 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-[0.01]"
        style={{
          bottom: '20%',
          left: '0%',
          background: 'radial-gradient(circle, #E8FF3D 0%, transparent 70%)',
        }}
      />
    </div>
  );
}

function FadeUp({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════
   DATA
═══════════════════════════════════════ */

const websiteTypes = [
  {
    id: "onepage",
    name: "One Page Site",
    desc: "Μία σελίδα με τα βασικά sections.",
    basePrice: 700,
    timeEstimate: "5-10 ημέρες",
    icon: FileText,
    popular: false,
    idealFor: "Freelancers, καφετέριες, δικηγόροι",
    includedFeatures: [
      { name: "Responsive Design", icon: Smartphone },
      { name: "Φόρμα Επικοινωνίας", icon: Mail },
      { name: "Google Maps", icon: MapPin },
      { name: "SSL Certificate", icon: Lock },
    ],
  },
  {
    id: "multipage",
    name: "Εταιρικό Site",
    desc: "3-8 σελίδες με CMS για εταιρική παρουσία.",
    basePrice: 1500,
    timeEstimate: "2-3 εβδομάδες",
    icon: Globe,
    popular: true,
    idealFor: "Εταιρείες, κλινικές, γραφεία",
    includedFeatures: [
      { name: "Responsive Design", icon: Smartphone },
      { name: "Φόρμα Επικοινωνίας", icon: Mail },
      { name: "Google Maps", icon: MapPin },
      { name: "SSL Certificate", icon: Lock },
      { name: "CMS (Διαχείριση Περιεχομένου)", icon: FileText },
      { name: "Basic On-Page SEO", icon: Search },
      { name: "Google Analytics 4", icon: BarChart3 },
      { name: "Cookie Consent (GDPR)", icon: Shield },
    ],
  },
  {
    id: "eshop-small",
    name: "E-Shop Basic",
    desc: "Ηλεκτρονικό κατάστημα με έως 50 προϊόντα.",
    basePrice: 3000,
    timeEstimate: "3-4 εβδομάδες",
    icon: ShoppingCart,
    popular: false,
    idealFor: "Μικρά καταστήματα, handmade",
    includedFeatures: [
      { name: "Responsive Design", icon: Smartphone },
      { name: "SSL Certificate", icon: Lock },
      { name: "CMS Προϊόντων", icon: FileText },
      { name: "Καλάθι Αγορών", icon: ShoppingCart },
      { name: "Φόρμα Επικοινωνίας", icon: Mail },
      { name: "Google Maps", icon: MapPin },
      { name: "Basic On-Page SEO", icon: Search },
      { name: "Google Analytics 4", icon: BarChart3 },
      { name: "Cookie Consent (GDPR)", icon: Shield },
    ],
  },
  {
    id: "eshop-large",
    name: "E-Shop Pro",
    desc: "500+ προϊόντα, bulk import, advanced filters.",
    basePrice: 4000,
    timeEstimate: "5-8 εβδομάδες",
    icon: Database,
    popular: false,
    idealFor: "Fashion, ηλεκτρονικά, wholesale",
    includedFeatures: [
      { name: "Responsive Design", icon: Smartphone },
      { name: "SSL Certificate", icon: Lock },
      { name: "CMS Προϊόντων (Bulk Import)", icon: FileText },
      { name: "Advanced SEO Setup", icon: Search },
      { name: "Google Analytics 4 + GTM", icon: BarChart3 },
      { name: "Wishlist & Comparison", icon: Eye },
    ],
  },
  {
    id: "webapp",
    name: "Web App / Platform",
    desc: "Custom εφαρμογή με users, dashboard, API.",
    basePrice: 5000,
    timeEstimate: "6-12 εβδομάδες",
    icon: Zap,
    popular: false,
    idealFor: "SaaS, portals, booking systems",
    includedFeatures: [
      { name: "Responsive Design", icon: Smartphone },
      { name: "SSL Certificate", icon: Lock },
      { name: "User Authentication", icon: Users },
      { name: "Admin Dashboard", icon: BarChart3 },
      { name: "REST API", icon: Database },
      { name: "Deployment & CI/CD", icon: Zap },
    ],
  },
];

const allCategories = [
  { id: "appearance", name: "Εμφάνιση & Περιεχόμενο", icon: Palette, showFor: ["onepage", "multipage", "eshop-small", "eshop-large", "webapp"], description: "Animations, blog, γλώσσες, gallery." },
  { id: "marketing", name: "Marketing & SEO", icon: BarChart3, showFor: ["onepage", "multipage", "eshop-small", "eshop-large", "webapp"], description: "Google ranking, διαφημίσεις, analytics." },
  { id: "communication", name: "Επικοινωνία & Εργαλεία", icon: MessageSquare, showFor: ["onepage", "multipage", "eshop-small", "eshop-large", "webapp"], description: "Chat, ραντεβού, newsletter." },
  { id: "branding", name: "Design & Branding", icon: Brush, showFor: ["onepage", "multipage", "eshop-small", "eshop-large", "webapp"], description: "Logo, χρώματα, εταιρική ταυτότητα." },
  { id: "store", name: "Λειτουργίες Καταστήματος", icon: ShoppingCart, showFor: ["eshop-small", "eshop-large"], description: "Wishlist, αξιολογήσεις, κουπόνια." },
  { id: "payments", name: "Πληρωμές", icon: CreditCard, showFor: ["eshop-small", "eshop-large"], description: "Τράπεζα, PayPal, αντικαταβολή." },
  { id: "shipping", name: "Αποστολές & Courier", icon: Truck, showFor: ["eshop-small", "eshop-large"], description: "ACS, ELTA, Speedex, DHL." },
  { id: "usermgmt", name: "Χρήστες & Πρόσβαση", icon: Users, showFor: ["webapp"], description: "Εγγραφή, login, ρόλοι, dashboard." },
  { id: "security", name: "Ασφάλεια", icon: Shield, showFor: ["eshop-large", "webapp"], description: "2FA, GDPR, audit log, backup." },
  { id: "integrations", name: "Συνδέσεις & APIs", icon: Layers, showFor: ["multipage", "eshop-large", "webapp"], description: "ERP, CRM, custom API." },
  { id: "advanced", name: "Προχωρημένες Λειτουργίες", icon: Zap, showFor: ["webapp"], description: "Real-time, search, multi-tenant." },
];

const allFeatures = [
  // Appearance
  { id: "responsive-design", name: "Responsive Design", price: 0, icon: Smartphone, desc: "Προσαρμογή σε κινητά και tablet", category: "appearance", showFor: ["onepage", "multipage", "eshop-small", "eshop-large", "webapp"], includedIn: ["onepage", "multipage", "eshop-small", "eshop-large", "webapp"] },
  { id: "cms", name: "CMS (Διαχείριση Περιεχομένου)", price: 300, icon: FileText, desc: "Αλλάζετε κείμενα μόνοι σας", category: "appearance", showFor: ["onepage", "multipage", "eshop-small", "eshop-large"], includedIn: ["multipage", "eshop-small", "eshop-large"] },
  { id: "custom-animations", name: "Animations & Scroll Effects", price: 150, priceMax: 300, icon: Zap, desc: "Εντυπωσιακά εφέ κατά το scroll", category: "appearance", showFor: ["onepage", "multipage", "eshop-small", "eshop-large", "webapp"] },
  { id: "blog", name: "Blog / Νέα & Άρθρα", price: 200, priceMax: 400, icon: FileText, desc: "Δημοσιεύετε άρθρα μόνοι σας", category: "appearance", showFor: ["onepage", "multipage", "eshop-small", "eshop-large"] },
  { id: "multilang", name: "Πολύγλωσσο Site (GR, EN, +)", price: 300, priceMax: 500, icon: Globe, desc: "Site σε πολλές γλώσσες", category: "appearance", showFor: ["onepage", "multipage", "eshop-small", "eshop-large", "webapp"] },
  { id: "gallery", name: "Gallery / Portfolio", price: 150, priceMax: 300, icon: Image, desc: "Παρουσίαση εικόνων με φίλτρα", category: "appearance", showFor: ["onepage", "multipage", "eshop-small", "eshop-large"] },
  { id: "copywriting", name: "Συγγραφή Κειμένων", price: 50, priceMax: 150, icon: FileText, desc: "Επαγγελματικά κείμενα ανά σελίδα", category: "appearance", showFor: ["onepage", "multipage", "eshop-small", "eshop-large"] },

  // Marketing
  { id: "seo-basic", name: "Basic On-Page SEO", price: 100, priceMax: 200, icon: Search, desc: "Meta tags, sitemap, alt texts", category: "marketing", showFor: ["onepage", "multipage", "eshop-small", "eshop-large", "webapp"], includedIn: ["multipage", "eshop-small"] },
  { id: "analytics", name: "Google Analytics 4", price: 100, priceMax: 150, icon: BarChart3, desc: "Tracking επισκεπτών", category: "marketing", showFor: ["onepage", "multipage", "eshop-small", "eshop-large", "webapp"], includedIn: ["multipage", "eshop-small", "eshop-large"] },
  { id: "seo-advanced", name: "Advanced SEO Setup", price: 200, priceMax: 400, icon: Search, desc: "Schema markup, structured data", category: "marketing", showFor: ["multipage", "eshop-small", "eshop-large", "webapp"], includedIn: ["eshop-large"] },
  { id: "speed", name: "Βελτιστοποίηση Ταχύτητας", price: 150, priceMax: 250, icon: Zap, desc: "Γρηγορότερο site = καλύτερο SEO", category: "marketing", showFor: ["onepage", "multipage", "eshop-small", "eshop-large", "webapp"] },
  { id: "skroutz", name: "Skroutz / BestPrice", price: 200, priceMax: 350, icon: BarChart3, desc: "Καταχώρηση προϊόντων", category: "marketing", showFor: ["eshop-small", "eshop-large"] },
  { id: "google-ads-setup", name: "Δημιουργία Google Ads", price: 150, priceMax: 300, icon: BarChart3, desc: "Στήσιμο διαφημίσεων", category: "marketing", showFor: ["onepage", "multipage", "eshop-small", "eshop-large"] },

  // Communication
  { id: "contact-form", name: "Φόρμα Επικοινωνίας", price: 0, icon: Mail, desc: "Βασική φόρμα με email", category: "communication", showFor: ["onepage", "multipage", "eshop-small", "eshop-large"], includedIn: ["onepage", "multipage", "eshop-small", "eshop-large"] },
  { id: "google-maps", name: "Google Maps", price: 0, icon: MapPin, desc: "Χάρτης με τοποθεσία σας", category: "communication", showFor: ["onepage", "multipage", "eshop-small", "eshop-large"], includedIn: ["onepage", "multipage", "eshop-small", "eshop-large"] },
  { id: "chat", name: "Live Chat", price: 200, priceMax: 300, icon: MessageSquare, desc: "Κουτί συνομιλίας", category: "communication", showFor: ["onepage", "multipage", "eshop-small", "eshop-large", "webapp"] },
  { id: "chatbot", name: "AI Chatbot", price: 200, priceMax: 500, icon: Bot, desc: "Αυτόματες απαντήσεις 24/7", category: "communication", showFor: ["multipage", "eshop-small", "eshop-large", "webapp"] },
  { id: "booking", name: "Online Ραντεβού", price: 300, priceMax: 600, icon: Calendar, desc: "Κλείσιμο ραντεβού online", category: "communication", showFor: ["onepage", "multipage", "eshop-small", "eshop-large"] },
  { id: "email-marketing", name: "Newsletter Integration", price: 100, priceMax: 200, icon: Mail, desc: "Mailchimp/Brevo σύνδεση", category: "communication", showFor: ["multipage", "eshop-small", "eshop-large"] },

  // Branding
  { id: "logo", name: "Σχεδιασμός Logo", price: 150, priceMax: 400, icon: Brush, desc: "Logo σε SVG, PNG, PDF", category: "branding", showFor: ["onepage", "multipage", "eshop-small", "eshop-large", "webapp"] },
  { id: "brand-identity", name: "Πλήρης Εταιρική Ταυτότητα", price: 400, priceMax: 800, icon: Palette, desc: "Logo + Colors + Guidelines", category: "branding", showFor: ["onepage", "multipage", "eshop-small", "eshop-large", "webapp"] },

  // Store
  { id: "shopping-cart", name: "Καλάθι Αγορών", price: 0, icon: ShoppingCart, desc: "Checkout system", category: "store", showFor: ["eshop-small", "eshop-large"], includedIn: ["eshop-small", "eshop-large"] },
  { id: "coupons", name: "Κουπόνια & Εκπτώσεις", price: 100, priceMax: 200, icon: CreditCard, desc: "Κωδικοί έκπτωσης", category: "store", showFor: ["eshop-small", "eshop-large"] },
  { id: "wishlist", name: "Wishlist", price: 100, priceMax: 150, icon: Eye, desc: "Αποθήκευση αγαπημένων", category: "store", showFor: ["eshop-small", "eshop-large"], includedIn: ["eshop-large"] },
  { id: "reviews", name: "Αξιολογήσεις Προϊόντων", price: 100, priceMax: 150, icon: MessageSquare, desc: "Stars & reviews", category: "store", showFor: ["eshop-small", "eshop-large"] },
  { id: "filters", name: "Σύνθετα Φίλτρα", price: 200, priceMax: 350, icon: Search, desc: "Χρώμα, μέγεθος, τιμή", category: "store", showFor: ["eshop-small", "eshop-large"] },

  // Payments
  { id: "bank-gr", name: "Ελληνική Τράπεζα", price: 200, priceMax: 400, icon: CreditCard, desc: "Πειραιώς, Alpha, NBG", category: "payments", showFor: ["eshop-small", "eshop-large"] },
  { id: "paypal-stripe", name: "PayPal / Stripe", price: 100, priceMax: 200, icon: CreditCard, desc: "Διεθνείς πληρωμές", category: "payments", showFor: ["eshop-small", "eshop-large"] },
  { id: "cod", name: "Αντικαταβολή", price: 100, icon: Package, desc: "Πληρωμή κατά παραλαβή", category: "payments", showFor: ["eshop-small", "eshop-large"] },

  // Shipping
  { id: "courier-acs", name: "ACS Courier", price: 200, priceMax: 400, icon: Truck, desc: "Voucher & tracking", category: "shipping", showFor: ["eshop-small", "eshop-large"] },
  { id: "courier-elta", name: "ELTA Courier", price: 200, priceMax: 400, icon: Truck, desc: "Voucher & tracking", category: "shipping", showFor: ["eshop-small", "eshop-large"] },
  { id: "courier-speedex", name: "Speedex Courier", price: 200, priceMax: 400, icon: Truck, desc: "Voucher & tracking", category: "shipping", showFor: ["eshop-small", "eshop-large"] },

  // User Management
  { id: "user-auth", name: "User Authentication", price: 0, icon: Users, desc: "Εγγραφή και login", category: "usermgmt", showFor: ["webapp"], includedIn: ["webapp"] },
  { id: "admin-dashboard", name: "Admin Dashboard", price: 0, icon: BarChart3, desc: "Πίνακας ελέγχου", category: "usermgmt", showFor: ["webapp"], includedIn: ["webapp"] },
  { id: "social-login", name: "Google / Facebook Login", price: 200, priceMax: 300, icon: Users, desc: "Social authentication", category: "usermgmt", showFor: ["webapp"] },
  { id: "user-dashboard", name: "User Dashboard", price: 300, priceMax: 600, icon: BarChart3, desc: "Περιοχή χρήστη", category: "usermgmt", showFor: ["webapp"] },
  { id: "roles", name: "Επίπεδα Πρόσβασης", price: 300, priceMax: 800, icon: Shield, desc: "Admin, Editor, User", category: "usermgmt", showFor: ["webapp"] },

  // Security
  { id: "ssl-certificate", name: "SSL Certificate", price: 0, icon: Lock, desc: "HTTPS ασφάλεια", category: "security", showFor: ["eshop-large", "webapp"], includedIn: ["eshop-large", "webapp"] },
  { id: "2fa", name: "Διπλή Επαλήθευση (2FA)", price: 150, priceMax: 200, icon: Lock, desc: "SMS OTP / Authenticator", category: "security", showFor: ["eshop-large", "webapp"] },
  { id: "gdpr-full", name: "Πλήρης GDPR Συμμόρφωση", price: 150, priceMax: 300, icon: Shield, desc: "Cookie consent, privacy", category: "security", showFor: ["eshop-large", "webapp"] },
  { id: "backup", name: "Αυτόματο Backup", price: 100, icon: Download, desc: "Ημερήσιο αντίγραφο", category: "security", showFor: ["eshop-large", "webapp"], isYearly: true },

  // Integrations
  { id: "erp", name: "Σύνδεση ERP", price: 800, priceMax: 2000, icon: Database, desc: "SoftOne, Entersoft κ.ά.", category: "integrations", showFor: ["eshop-large", "webapp"] },
  { id: "crm", name: "Σύνδεση CRM", price: 400, priceMax: 800, icon: Users, desc: "HubSpot, Salesforce", category: "integrations", showFor: ["multipage", "eshop-large", "webapp"] },
  { id: "custom-api", name: "Custom API", price: 500, priceMax: 2000, icon: Database, desc: "Σύνδεση με εξωτερικά συστήματα", category: "integrations", showFor: ["eshop-large", "webapp"] },

  // Advanced
  { id: "realtime-notifs", name: "Real-time Ειδοποιήσεις", price: 400, priceMax: 700, icon: Bell, desc: "WebSocket server", category: "advanced", showFor: ["webapp"] },
  { id: "search-engine", name: "Έξυπνη Αναζήτηση", price: 400, priceMax: 800, icon: Search, desc: "Algolia / Elasticsearch", category: "advanced", showFor: ["webapp", "eshop-large"] },
  { id: "file-upload", name: "Cloud File Storage", price: 200, priceMax: 400, icon: Download, desc: "S3-compatible storage", category: "advanced", showFor: ["webapp"] },
];

const supportPlans = [
  {
    id: "none",
    name: "Χωρίς Συντήρηση",
    desc: "Παράδοση source code, documentation.",
    monthlyPrice: 0,
    icon: RefreshCw,
    recommended: false,
    features: ["Source code παράδοση", "Setup documentation", "30 ημέρες bug fixes"],
  },
  {
    id: "basic",
    name: "Basic Care",
    desc: "Updates, backups, μικρές αλλαγές.",
    monthlyPrice: 80,
    icon: Headphones,
    recommended: true,
    features: ["Email support (24h)", "Security updates", "Αλλαγές κειμένων", "Monthly backup", "Uptime monitoring"],
  },
  {
    id: "premium",
    name: "Premium Care",
    desc: "Priority support, content updates.",
    monthlyPrice: 200,
    icon: Shield,
    recommended: false,
    features: ["Priority support (4h)", "Content updates 2x/μήνα", "Daily backups", "Monthly analytics", "Bug fixes δωρεάν"],
  },
];

const steps = [
  { label: "Τύπος Site", shortLabel: "Τύπος" },
  { label: "Extra Features", shortLabel: "Features" },
  { label: "Συντήρηση", shortLabel: "Support" },
  { label: "Αποστολή", shortLabel: "Αποστολή" },
];

/* ═══════════════════════════════════════
   STEP INDICATOR
═══════════════════════════════════════ */

function StepIndicator({ current, onNavigate, canNavigateTo }) {
  return (
    <div className="flex items-center gap-1 w-full max-w-2xl mx-auto">
      {steps.map((s, i) => {
        const isActive = i === current;
        const isCompleted = i < current;
        const clickable = canNavigateTo(i);
        return (
          <div key={i} className="flex items-center flex-1 last:flex-none">
            <button
              onClick={() => clickable && onNavigate(i)}
              disabled={!clickable}
              className={`
                flex items-center gap-2 text-xs font-mono tracking-wider whitespace-nowrap transition-colors
                ${clickable ? "cursor-pointer" : "cursor-default"}
                ${isActive ? "text-ag-text" : isCompleted ? "text-ag-accent" : "text-ag-muted"}
              `}
            >
              <span
                className={`
                  w-7 h-7 flex items-center justify-center text-xs font-bold flex-shrink-0 transition-all
                  ${isActive ? "bg-ag-accent text-ag-bg" : ""}
                  ${isCompleted ? "bg-ag-accent/20 text-ag-accent border border-ag-accent/30" : ""}
                  ${!isActive && !isCompleted ? "bg-ag-card text-ag-muted border border-ag-border" : ""}
                `}
              >
                {isCompleted ? <Check size={12} strokeWidth={3} /> : i + 1}
              </span>
              <span className="hidden sm:inline">{s.shortLabel}</span>
            </button>
            {i < steps.length - 1 && (
              <div className={`flex-1 h-px mx-2 ${isCompleted ? "bg-ag-accent/30" : "bg-ag-border"}`} />
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
  const [step, setStep] = useState(0);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [selectedSupport, setSelectedSupport] = useState(null);
  const [activeCat, setActiveCat] = useState("appearance");
  const [contactForm, setContactForm] = useState({ name: "", email: "", phone: "", company: "", notes: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    setStep(0);
    setSelectedType(null);
    setSelectedFeatures([]);
    setSelectedSupport(null);
    setActiveCat("appearance");
    setContactForm({ name: "", email: "", phone: "", company: "", notes: "" });
    setIsSubmitted(false);
  };

  const toggleFeature = (featureId) => {
    setSelectedFeatures((prev) =>
      prev.includes(featureId) ? prev.filter((f) => f !== featureId) : [...prev, featureId]
    );
  };

  const handleSubmit = async () => {
    if (!contactForm.name || !contactForm.email) return;
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const featurePriceLabel = (f) => {
    const suffix = f.isMonthly ? "/μήνα" : f.isYearly ? "/έτος" : "";
    if (f.priceMax) return `€${f.price}–€${f.priceMax}${suffix}`;
    return `+€${f.price}${suffix}`;
  };

  const activeCatDef = allCategories.find((c) => c.id === activeCat);

  const includedCount = useMemo(() => {
    if (!selectedType) return 0;
    return allFeatures.filter((f) => f.showFor.includes(selectedType) && f.includedIn?.includes(selectedType)).length;
  }, [selectedType]);

  const extraSelectedCount = useMemo(() => {
    if (!selectedType) return 0;
    return selectedFeatures.filter((fId) => {
      const f = allFeatures.find((x) => x.id === fId);
      return f && !f.includedIn?.includes(selectedType);
    }).length;
  }, [selectedType, selectedFeatures]);

  return (
    <div className="min-h-screen bg-ag-bg pt-24 relative" data-testid="estimator-page">
  <EstimatorBackground />
      {/* TOP BAR */}
      <div className="border-b border-ag-border relative z-10">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <Link href="/services" className="flex items-center gap-2 text-ag-body hover:text-ag-text transition-colors text-sm" data-cursor="hover">
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">Υπηρεσίες</span>
          </Link>
          <div className="flex items-center gap-2 text-ag-text">
            <Calculator size={18} className="text-ag-accent" />
            <span className="font-heading font-bold text-sm">Cost Estimator</span>
          </div>
          {step > 0 ? (
            <button onClick={handleReset} className="flex items-center gap-1.5 text-ag-muted hover:text-ag-body transition-colors text-xs" data-cursor="hover">
              <RefreshCw size={12} />
              Reset
            </button>
          ) : (
            <div className="w-16" />
          )}
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12 relative z-10">
        {/* STEP INDICATOR */}
        <div className="mb-10">
          <StepIndicator current={step} onNavigate={setStep} canNavigateTo={canNavigateTo} />
        </div>

        {/* LIVE PRICE BAR */}
        {step >= 1 && !isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 bg-ag-card border border-ag-border p-4 md:p-5"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-6">
                <div>
                  <div className="font-mono text-xs text-ag-muted mb-1">ΕΚΤΙΜΗΣΗ ΚΟΣΤΟΥΣ</div>
                  <div className="text-2xl md:text-3xl font-heading font-bold text-ag-text">
                    €{priceCalc.total.toLocaleString("el-GR")}
                  </div>
                </div>
                {priceCalc.monthly > 0 && (
                  <div className="pl-6 border-l border-ag-border">
                    <div className="font-mono text-xs text-ag-muted mb-1">ΜΗΝΙΑΙΑ ΣΥΝΤΗΡΗΣΗ</div>
                    <div className="text-lg font-heading font-bold text-ag-accent">
                      €{priceCalc.monthly}/μήνα
                    </div>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-4 font-mono text-xs text-ag-muted">
                {priceCalc.featuresCost > 0 && (
                  <span>Features: +€{priceCalc.featuresCost.toLocaleString("el-GR")}</span>
                )}
                <span className="bg-ag-surface px-2 py-1 text-ag-body">±15%</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* STEP 0 — WEBSITE TYPE */}
        {step === 0 && (
          <FadeUp>
            <div className="mb-8">
              <h1 className="font-heading text-2xl md:text-3xl font-bold text-ag-text mb-2">
                Τι τύπο site χρειάζεστε;
              </h1>
              <p className="font-body text-ag-body text-sm">
                Επιλέξτε αυτό που ταιριάζει στην επιχείρησή σας.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {websiteTypes.map((type) => {
                const Icon = type.icon;
                const isSelected = selectedType === type.id;
                return (
                  <button
                    key={type.id}
                    onClick={() => {
                      setSelectedType(type.id);
                      setSelectedFeatures([]);
                      const firstCat = allCategories.find((c) => c.showFor.includes(type.id));
                      setActiveCat(firstCat?.id || "appearance");
                    }}
                    className={`relative text-left p-5 border transition-all ${
                      isSelected
                        ? "border-ag-accent bg-ag-accent/5"
                        : "border-ag-border bg-ag-card hover:border-ag-body"
                    }`}
                    data-cursor="hover"
                    data-testid={`type-${type.id}`}
                  >
                    {type.popular && (
                      <span className="absolute top-3 right-3 font-mono text-[10px] font-bold bg-ag-accent/10 text-ag-accent px-2 py-0.5 border border-ag-accent/20">
                        ΔΗΜΟΦΙΛΕΣ
                      </span>
                    )}
                    <Icon size={22} className={isSelected ? "text-ag-accent" : "text-ag-body"} />
                    <h3 className="font-heading text-ag-text font-semibold mt-3 mb-1">{type.name}</h3>
                    <p className="font-body text-ag-body text-xs leading-relaxed mb-3">{type.desc}</p>
                    <div className="flex items-center justify-between pt-3 border-t border-ag-border">
                      <span className="text-ag-accent font-mono text-sm font-semibold">
                        από €{type.basePrice.toLocaleString("el-GR")}
                      </span>
                      <span className="font-mono text-ag-muted text-xs">{type.timeEstimate}</span>
                    </div>
                    <p className="font-body text-[11px] text-ag-muted mt-2">Ιδανικό: {type.idealFor}</p>
                    {isSelected && (
                      <div className="absolute top-3 left-3 w-5 h-5 bg-ag-accent flex items-center justify-center">
                        <Check size={12} strokeWidth={3} className="text-ag-bg" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {selectedTypeData && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 bg-ag-card border border-ag-accent/20 p-5"
              >
                <h3 className="font-heading text-sm font-semibold text-ag-text mb-4 flex items-center gap-2">
                  <Check size={16} className="text-ag-accent" />
                  Περιλαμβάνονται στο {selectedTypeData.name}:
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
                  {selectedTypeData.includedFeatures.map((f, i) => {
                    const FIcon = f.icon;
                    return (
                      <div key={i} className="flex items-center gap-2.5 font-body text-sm text-ag-text/80 py-1.5 px-3 bg-ag-accent/5 border border-ag-accent/10">
                        <div className="w-4 h-4 bg-ag-accent/20 border border-ag-accent/40 flex items-center justify-center flex-shrink-0">
                          <Check size={10} strokeWidth={3} className="text-ag-accent" />
                        </div>
                        <FIcon size={14} className="text-ag-accent flex-shrink-0" />
                        <span>{f.name}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </FadeUp>
        )}

        {/* STEP 1 — FEATURES */}
        {step === 1 && (
          <FadeUp>
            <div className="mb-6">
              <h1 className="font-heading text-2xl md:text-3xl font-bold text-ag-text mb-1">Extra Features</h1>
              <p className="font-body text-ag-body text-sm">Προσθέστε ό,τι χρειάζεστε.</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
              {/* Category Sidebar */}
              <div className="lg:w-56 flex-shrink-0">
                <div className="lg:sticky lg:top-24 space-y-1">
                  {relevantCategories.map((cat) => {
                    const CatIcon = cat.icon;
                    const countSelected = allFeatures.filter((f) => {
                      if (f.category !== cat.id) return false;
                      if (!selectedType || !f.showFor.includes(selectedType)) return false;
                      if (!selectedFeatures.includes(f.id)) return false;
                      return !f.includedIn?.includes(selectedType);
                    }).length;
                    const countIncluded = allFeatures.filter((f) => {
                      if (f.category !== cat.id) return false;
                      if (!selectedType || !f.showFor.includes(selectedType)) return false;
                      return f.includedIn?.includes(selectedType) || false;
                    }).length;
                    const isActive = activeCat === cat.id;

                    return (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCat(cat.id)}
                        className={`w-full text-left flex items-center justify-between gap-2 px-3 py-2.5 text-sm font-body transition-all ${
                          isActive
                            ? "bg-ag-accent/10 text-ag-accent border-l-2 border-ag-accent"
                            : "text-ag-body hover:text-ag-text hover:bg-ag-card border-l-2 border-transparent"
                        }`}
                        data-cursor="hover"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <CatIcon size={15} className="flex-shrink-0" />
                          <span className="truncate text-xs">{cat.name}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          {countIncluded > 0 && (
                            <span className="bg-ag-accent/20 text-ag-accent text-[10px] w-4 h-4 flex items-center justify-center font-mono font-bold flex-shrink-0">
                              {countIncluded}
                            </span>
                          )}
                          {countSelected > 0 && (
                            <span className="bg-ag-accent text-ag-bg text-[10px] w-4 h-4 flex items-center justify-center font-mono font-bold flex-shrink-0">
                              {countSelected}
                            </span>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Features List */}
              <div className="flex-1 min-w-0">
                {activeCatDef && (
                  <div className="mb-4 pb-4 border-b border-ag-border">
                    <h2 className="font-heading text-ag-text font-semibold text-base mb-0.5">{activeCatDef.name}</h2>
                    {activeCatDef.description && <p className="font-body text-ag-muted text-xs">{activeCatDef.description}</p>}
                  </div>
                )}

                <div className="space-y-2">
                  {visibleFeatures.length === 0 && (
                    <div className="text-center py-12 text-ag-muted text-sm font-body">
                      Δεν υπάρχουν features σε αυτή την κατηγορία.
                    </div>
                  )}

                  {visibleFeatures.map((feature) => {
                    const isSelected = selectedFeatures.includes(feature.id);
                    const FeatureIcon = feature.icon;
                    const isIncluded = feature.includedIn?.includes(selectedType || "") || false;

                    return (
                      <button
                        key={feature.id}
                        onClick={() => { if (!isIncluded) toggleFeature(feature.id); }}
                        className={`w-full text-left flex items-center gap-4 p-4 border transition-all ${
                          isIncluded
                            ? "border-ag-accent/30 bg-ag-accent/5 cursor-default"
                            : isSelected
                            ? "border-ag-accent/40 bg-ag-accent/5 cursor-pointer"
                            : "border-ag-border bg-ag-card hover:border-ag-body cursor-pointer"
                        }`}
                        data-cursor={isIncluded ? "default" : "hover"}
                      >
                        <div className={`w-5 h-5 flex items-center justify-center flex-shrink-0 border transition-colors ${
                          isIncluded ? "bg-ag-accent/20 border-ag-accent/40" : isSelected ? "bg-ag-accent border-ag-accent" : "bg-transparent border-ag-body"
                        }`}>
                          {(isSelected || isIncluded) && <Check size={12} strokeWidth={3} className={isIncluded ? "text-ag-accent" : "text-ag-bg"} />}
                        </div>

                        <FeatureIcon size={18} className={isIncluded || isSelected ? "text-ag-accent flex-shrink-0" : "text-ag-body flex-shrink-0"} />

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-body text-sm text-ag-text font-medium">{feature.name}</span>
                            {isIncluded && (
                              <span className="font-mono text-[10px] bg-ag-accent/10 text-ag-accent border border-ag-accent/20 px-1.5 py-0.5">
                                ΠΕΡΙΛΑΜΒΑΝΕΤΑΙ
                              </span>
                            )}
                            {(feature.isMonthly || feature.isYearly) && !isIncluded && (
                              <span className="font-mono text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/20 px-1.5 py-0.5">
                                {feature.isMonthly ? "ΜΗΝΙΑΙΟ" : "ΕΤΗΣΙΟ"}
                              </span>
                            )}
                          </div>
                          <div className="font-body text-xs text-ag-body mt-0.5">{feature.desc}</div>
                        </div>

                        <div className="text-right flex-shrink-0">
                          {isIncluded ? (
                            <div className="font-mono text-xs text-ag-accent font-medium">✓ €0</div>
                          ) : (
                            <div className="font-mono text-sm text-ag-accent">{featurePriceLabel(feature)}</div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-ag-card border border-ag-border">
              <div className="flex items-center justify-between font-mono text-sm">
                <div className="flex items-center gap-4">
                  <span className="text-ag-accent">✓ {includedCount} included</span>
                  <span className="text-ag-body">+ {extraSelectedCount} extra επιλεγμένα</span>
                </div>
                <span className="font-bold text-ag-accent">+€{priceCalc.featuresCost.toLocaleString("el-GR")}</span>
              </div>
            </div>
          </FadeUp>
        )}

        {/* STEP 2 — SUPPORT */}
        {step === 2 && (
          <FadeUp>
            <div className="mb-8">
              <h1 className="font-heading text-2xl md:text-3xl font-bold text-ag-text mb-2">Μηνιαία Συντήρηση</h1>
              <p className="font-body text-ag-body text-sm">Θέλετε ongoing υποστήριξη μετά την παράδοση;</p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {supportPlans.map((plan) => {
                const PlanIcon = plan.icon;
                const isSelected = selectedSupport === plan.id;

                return (
                  <button
                    key={plan.id}
                    onClick={() => setSelectedSupport(plan.id)}
                    className={`relative text-left p-5 border transition-all flex flex-col ${
                      isSelected ? "border-ag-accent bg-ag-accent/5" : "border-ag-border bg-ag-card hover:border-ag-body"
                    }`}
                    data-cursor="hover"
                    data-testid={`support-${plan.id}`}
                  >
                    {plan.recommended && (
                      <span className="absolute top-3 right-3 font-mono text-[10px] font-bold bg-ag-accent/10 text-ag-accent px-2 py-0.5 border border-ag-accent/20">
                        ΠΡΟΤΕΙΝΕΤΑΙ
                      </span>
                    )}
                    <PlanIcon size={20} className={isSelected ? "text-ag-accent" : "text-ag-body"} />
                    <h3 className="font-heading text-ag-text font-semibold mt-3 mb-1">{plan.name}</h3>
                    <p className="font-body text-ag-body text-xs leading-relaxed mb-4">{plan.desc}</p>
                    <ul className="space-y-1.5 mb-4 flex-1">
                      {plan.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2 font-body text-xs text-ag-body">
                          <Check size={10} strokeWidth={3} className="text-ag-accent mt-0.5 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-3 border-t border-ag-border">
                      <span className="font-mono text-ag-accent font-bold text-lg">
                        {plan.monthlyPrice === 0 ? "€0" : `€${plan.monthlyPrice}/μήνα`}
                      </span>
                      {plan.monthlyPrice > 0 && (
                        <span className="font-mono text-xs text-ag-muted block mt-0.5">
                          €{(plan.monthlyPrice * 12).toLocaleString("el-GR")}/έτος
                        </span>
                      )}
                    </div>
                    {isSelected && (
                      <div className="absolute top-3 left-3 w-5 h-5 bg-ag-accent flex items-center justify-center">
                        <Check size={12} strokeWidth={3} className="text-ag-bg" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </FadeUp>
        )}

        {/* STEP 3 — SUMMARY & CONTACT */}
        {step === 3 && !isSubmitted && (
          <FadeUp>
            <div className="mb-8">
              <h1 className="font-heading text-2xl md:text-3xl font-bold text-ag-text mb-2">Σύνοψη & Αποστολή</h1>
              <p className="font-body text-ag-body text-sm">Ελέγξτε τις επιλογές σας.</p>
            </div>

            <div className="grid lg:grid-cols-5 gap-6">
              {/* Summary */}
              <div className="lg:col-span-2 space-y-4">
                <div className="bg-ag-card border border-ag-border p-5">
                  <h3 className="font-heading text-sm font-semibold text-ag-text mb-4">Οι επιλογές σας</h3>
                  <div className="space-y-3 font-body text-sm">
                    <div className="flex justify-between py-2 border-b border-ag-border">
                      <span className="text-ag-body">Τύπος</span>
                      <span className="text-ag-text font-medium">{selectedTypeData?.name || "—"}</span>
                    </div>
                    <div className="py-2 border-b border-ag-border">
                      <div className="flex justify-between mb-1">
                        <span className="text-ag-body">Extra Features</span>
                        <span className="font-mono text-ag-accent text-xs">
                          {priceCalc.featuresCost > 0 ? `+€${priceCalc.featuresCost.toLocaleString("el-GR")}` : "—"}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between py-2 border-b border-ag-border">
                      <span className="text-ag-body">Συντήρηση</span>
                      <span className="text-ag-text font-medium">{supportPlans.find((s) => s.id === selectedSupport)?.name || "—"}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-ag-body">Εκτ. Χρόνος</span>
                      <span className="text-ag-text font-medium">{selectedTypeData?.timeEstimate || "—"}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-ag-card border border-ag-accent/20 p-5 text-center">
                  <div className="font-mono text-xs text-ag-muted mb-1">ΕΚΤΙΜΩΜΕΝΟ ΚΟΣΤΟΣ</div>
                  <div className="font-heading text-3xl font-bold text-ag-text mb-1">
                    €{priceCalc.total.toLocaleString("el-GR")}
                  </div>
                  {priceCalc.monthly > 0 && (
                    <div className="font-body text-ag-accent text-sm font-medium">+ €{priceCalc.monthly}/μήνα συντήρηση</div>
                  )}
                  <div className="mt-3 pt-3 border-t border-ag-border space-y-1">
                    <div className="font-body text-xs text-ag-body">
                      ή δόσεις από <span className="text-ag-accent font-semibold">€{Math.round(priceCalc.total / 6).toLocaleString("el-GR")}/μήνα</span> ×6
                    </div>
                    <div className="font-mono text-[11px] text-ag-muted">* Ενδεικτική τιμή ±15%. Χωρίς ΦΠΑ.</div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3 bg-ag-card border border-ag-border p-5">
                <h3 className="font-heading text-sm font-semibold text-ag-text mb-4">Στοιχεία Επικοινωνίας</h3>
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-mono text-xs text-ag-muted mb-1 block">ΟΝΟΜΑΤΕΠΩΝΥΜΟ *</label>
                      <div className="relative">
                        <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-ag-body" />
                        <input
                          type="text"
                          value={contactForm.name}
                          onChange={(e) => setContactForm((p) => ({ ...p, name: e.target.value }))}
                          placeholder="Γιώργος Παπαδόπουλος"
                          className="w-full bg-ag-bg border border-ag-border pl-9 pr-3 py-2.5 text-ag-text placeholder:text-ag-muted focus:border-ag-accent focus:outline-none font-body text-sm"
                          data-testid="input-name"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="font-mono text-xs text-ag-muted mb-1 block">EMAIL *</label>
                      <div className="relative">
                        <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-ag-body" />
                        <input
                          type="email"
                          value={contactForm.email}
                          onChange={(e) => setContactForm((p) => ({ ...p, email: e.target.value }))}
                          placeholder="email@example.com"
                          className="w-full bg-ag-bg border border-ag-border pl-9 pr-3 py-2.5 text-ag-text placeholder:text-ag-muted focus:border-ag-accent focus:outline-none font-body text-sm"
                          data-testid="input-email"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-mono text-xs text-ag-muted mb-1 block">ΤΗΛΕΦΩΝΟ</label>
                      <div className="relative">
                        <Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-ag-body" />
                        <input
                          type="tel"
                          value={contactForm.phone}
                          onChange={(e) => setContactForm((p) => ({ ...p, phone: e.target.value }))}
                          placeholder="69xxxxxxxx"
                          className="w-full bg-ag-bg border border-ag-border pl-9 pr-3 py-2.5 text-ag-text placeholder:text-ag-muted focus:border-ag-accent focus:outline-none font-body text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="font-mono text-xs text-ag-muted mb-1 block">ΕΤΑΙΡΕΙΑ</label>
                      <div className="relative">
                        <Building2 size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-ag-body" />
                        <input
                          type="text"
                          value={contactForm.company}
                          onChange={(e) => setContactForm((p) => ({ ...p, company: e.target.value }))}
                          placeholder="Προαιρετικό"
                          className="w-full bg-ag-bg border border-ag-border pl-9 pr-3 py-2.5 text-ag-text placeholder:text-ag-muted focus:border-ag-accent focus:outline-none font-body text-sm"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="font-mono text-xs text-ag-muted mb-1 block">ΣΗΜΕΙΩΣΕΙΣ</label>
                    <textarea
                      value={contactForm.notes}
                      onChange={(e) => setContactForm((p) => ({ ...p, notes: e.target.value }))}
                      rows={4}
                      placeholder="Πείτε μας λίγα λόγια για το project σας..."
                      className="w-full bg-ag-bg border border-ag-border px-3 py-2.5 text-ag-text placeholder:text-ag-muted focus:border-ag-accent focus:outline-none font-body text-sm resize-none"
                    />
                  </div>
                  <button
                    onClick={handleSubmit}
                    disabled={!contactForm.name || !contactForm.email || isSubmitting}
                    className="w-full bg-ag-accent text-ag-bg py-3 font-heading font-semibold text-sm transition-opacity hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    data-cursor="hover"
                    data-testid="submit-btn"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-ag-bg/30 border-t-ag-bg rounded-full animate-spin" />
                        Αποστολή...
                      </>
                    ) : (
                      <>
                        Αποστολή Αιτήματος
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                  <p className="font-body text-[11px] text-ag-muted text-center">
                    Θα λάβετε αναλυτική προσφορά εντός 24 ωρών. Χωρίς δέσμευση.
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>
        )}

        {/* SUCCESS STATE */}
        {step === 3 && isSubmitted && (
          <FadeUp>
            <div className="max-w-md mx-auto text-center py-16">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="w-16 h-16 bg-ag-accent/10 border border-ag-accent/20 flex items-center justify-center mx-auto mb-6"
              >
                <Check size={28} className="text-ag-accent" />
              </motion.div>
              <h2 className="font-heading text-2xl font-bold text-ag-text mb-3">Το αίτημά σας καταχωρήθηκε</h2>
              <p className="font-body text-ag-body text-sm mb-2">
                Θα επικοινωνήσουμε στο <span className="text-ag-accent">{contactForm.email}</span> εντός 24 ωρών.
              </p>
              <div className="bg-ag-card border border-ag-border p-4 my-6 inline-block">
                <span className="font-mono text-ag-muted text-xs block mb-1">ΕΚΤΙΜΗΣΗ BUDGET</span>
                <span className="font-heading text-2xl font-bold text-ag-text">€{priceCalc.total.toLocaleString("el-GR")}</span>
                {priceCalc.monthly > 0 && (
                  <span className="font-body text-ag-accent text-xs block mt-1">+ €{priceCalc.monthly}/μήνα</span>
                )}
              </div>
              <div className="flex items-center justify-center gap-4 mt-6">
                <button onClick={handleReset} className="font-body text-ag-body hover:text-ag-text transition-colors text-sm flex items-center gap-1.5" data-cursor="hover">
                  <RefreshCw size={14} />
                  Νέα εκτίμηση
                </button>
                <Link href="/" className="font-body text-ag-accent hover:text-ag-text transition-colors text-sm flex items-center gap-1.5" data-cursor="hover">
                  Αρχική
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </FadeUp>
        )}

        {/* NAVIGATION BUTTONS */}
        {!isSubmitted && (
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-ag-border">
            <button
              onClick={goBack}
              disabled={step === 0}
              className="flex items-center gap-2 font-body text-ag-body hover:text-ag-text transition-colors disabled:opacity-20 disabled:cursor-default text-sm"
              data-cursor="hover"
            >
              <ArrowLeft size={16} />
              Πίσω
            </button>

            <div className="font-mono text-xs text-ag-muted">Βήμα {step + 1} / 4</div>

            {step < 3 && (
              <button
                onClick={goNext}
                disabled={!canProceed()}
                className="flex items-center gap-2 bg-ag-accent text-ag-bg px-5 py-2.5 font-heading font-semibold text-sm transition-opacity hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed"
                data-cursor="hover"
              >
                {step === 2 ? "Σύνοψη" : "Επόμενο"}
                <ChevronRight size={16} />
              </button>
            )}

            {step === 3 && <div className="w-20" />}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-ag-border mt-8">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-6 flex items-center justify-between">
          <p className="font-body text-[11px] text-ag-muted">
            * Ενδεικτικές τιμές χωρίς ΦΠΑ. Η τελική τιμή εξαρτάται από τις ακριβείς απαιτήσεις.
          </p>
          <Link href="/" className="font-mono text-xs text-ag-body hover:text-ag-text transition-colors flex items-center gap-1" data-cursor="hover">
            DigitalFootprint
            <ArrowUpRight size={10} />
          </Link>
        </div>
      </footer>
    </div>
  );
}