// app/work/page.js
'use client';
import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '@/components/language-provider';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

// ═══════════════════════════════════════
// PROJECT DATA — Prestige Edition
// ═══════════════════════════════════════

const allProjects = [
  {
    id: 1,
    slug: 'flavor-restaurant',
    name: 'Flavor Restaurant',
    category: 'Web Design',
    gradient: 'from-[#1a0a00] via-[#2d1a0a] to-[#1a0f05]',
    accent: '#e8a04a',
    pattern: 'restaurant',
    year: '2024',
    scope: 'Design & Development',
  },
  {
    id: 2,
    slug: 'techstart-platform',
    name: 'TechStart Platform',
    category: 'E-Commerce',
    gradient: 'from-[#0a0a1a] via-[#141428] to-[#0a0a1a]',
    accent: '#E8FF3D',
    pattern: 'ecommerce',
    year: '2024',
    scope: 'Full-Stack Development',
  },
  {
    id: 3,
    slug: 'artisan-coffee',
    name: 'Artisan Coffee Co.',
    category: 'Brand Identity',
    gradient: 'from-[#1a1410] via-[#221a12] to-[#14100a]',
    accent: '#d4a574',
    pattern: 'brand',
    year: '2024',
    scope: 'Branding & Web',
  },
  {
    id: 4,
    slug: 'urban-hotel',
    name: 'Urban Hotel Athens',
    category: 'Hotel',
    gradient: 'from-[#0d1b2a] via-[#1b2838] to-[#0d1520]',
    accent: '#c4a35a',
    pattern: 'hotel',
    year: '2024',
    scope: 'Design & Development',
  },
  {
    id: 5,
    slug: 'olympus-fitness',
    name: 'Olympus Fitness',
    category: 'Corporate',
    gradient: 'from-[#1a1a1a] via-[#262626] to-[#1a1a1a]',
    accent: '#ff4d4d',
    pattern: 'corporate',
    year: '2023',
    scope: 'Corporate Website',
  },
  {
    id: 6,
    slug: 'aegean-wines',
    name: 'Aegean Wines',
    category: 'E-Commerce',
    gradient: 'from-[#1a0a14] via-[#2a1020] to-[#1a0a14]',
    accent: '#c47daa',
    pattern: 'ecommerce',
    year: '2023',
    scope: 'E-Shop & Branding',
  },
  {
    id: 7,
    slug: 'medtech-solutions',
    name: 'MedTech Solutions',
    category: 'Corporate',
    gradient: 'from-[#0a1a1a] via-[#102828] to-[#0a1a1a]',
    accent: '#4dd4c4',
    pattern: 'dashboard',
    year: '2023',
    scope: 'Web Application',
  },
  {
    id: 8,
    slug: 'santorini-suites',
    name: 'Santorini Suites',
    category: 'Hotel',
    gradient: 'from-[#1a1a2e] via-[#16213e] to-[#0f3460]',
    accent: '#f0d68a',
    pattern: 'hotel',
    year: '2023',
    scope: 'Booking & Design',
  },
  {
    id: 9,
    slug: 'olive-stone',
    name: 'Olive & Stone',
    category: 'Brand Identity',
    gradient: 'from-[#141a0a] via-[#1a2010] to-[#0f140a]',
    accent: '#a4c45a',
    pattern: 'brand',
    year: '2023',
    scope: 'Full Branding',
  },
];


// ═══════════════════════════════════════
// MOCK UI PATTERNS — Animated
// ═══════════════════════════════════════

function WorkMockUI({ pattern, accent, isHovered }) {
  const floatStyle = (delay = 0) => ({
    transition: `all 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
    opacity: isHovered ? 1 : 0.5,
  });

  switch (pattern) {
    case 'restaurant':
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[65%] h-[60%] relative">
            {/* Menu layout mockup */}
            <div className="flex justify-between items-center mb-5" style={floatStyle(0)}>
              <div className="w-14 h-[1px]" style={{ backgroundColor: accent, opacity: 0.4 }} />
              <div className="flex gap-3">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-6 h-[1px] bg-white/10" />
                ))}
              </div>
            </div>
            <div className="space-y-3 mb-6">
              <div className="w-[55%] h-[2px]" style={{ ...floatStyle(80), backgroundColor: accent, opacity: isHovered ? 0.4 : 0.2 }} />
              <div className="w-[40%] h-[1px] bg-white/6" style={floatStyle(120)} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="space-y-1.5" style={floatStyle(180 + i * 60)}>
                  <div
                    className="aspect-[4/3] bg-white/[0.02] border border-white/5"
                    style={{ borderColor: isHovered && i === 0 ? `${accent}25` : undefined }}
                  />
                  <div className="w-[60%] h-[1px] bg-white/6" />
                  <div className="w-[35%] h-[1px]" style={{ backgroundColor: accent, opacity: 0.12 }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case 'ecommerce':
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[70%] h-[65%] relative">
            <div className="w-full h-5 border border-white/5 bg-white/[0.02] mb-4 flex items-center px-2" style={floatStyle(0)}>
              <div className="w-2.5 h-2.5 border border-white/10 rounded-full" />
              <div className="w-[35%] h-[1px] bg-white/5 ml-2" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="space-y-1.5" style={floatStyle(80 + i * 60)}>
                  <div className="aspect-square bg-white/[0.025] border border-white/5 relative"
                    style={{ borderColor: isHovered && i === 0 ? `${accent}20` : undefined }}>
                    <div className="absolute bottom-1.5 right-1.5">
                      <div className="w-6 h-2.5 rounded-sm"
                        style={{ backgroundColor: accent, opacity: isHovered ? 0.18 : 0.06, transition: 'opacity 0.6s ease' }} />
                    </div>
                  </div>
                  <div className="w-[65%] h-[1px] bg-white/6" />
                  <div className="flex justify-between">
                    <div className="w-[30%] h-[1px]" style={{ backgroundColor: accent, opacity: 0.12 }} />
                    <div className="w-[18%] h-[1px] bg-white/4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case 'brand':
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="w-16 h-16 md:w-20 md:h-20 border"
              style={{
                borderColor: `${accent}25`,
                transform: isHovered ? 'rotate(50deg) scale(1.06)' : 'rotate(45deg)',
                transition: 'all 1.5s cubic-bezier(0.16, 1, 0.3, 1)',
              }} />
            <div className="absolute inset-0 w-16 h-16 md:w-20 md:h-20 border"
              style={{
                borderColor: `${accent}12`,
                transform: isHovered ? 'rotate(28deg) scale(1.1)' : 'rotate(22.5deg)',
                transition: 'all 1.8s cubic-bezier(0.16, 1, 0.3, 1)',
              }} />
            <div className="absolute inset-0 w-16 h-16 md:w-20 md:h-20 border"
              style={{
                borderColor: `${accent}06`,
                transform: isHovered ? 'rotate(5deg) scale(1.14)' : 'rotate(0deg)',
                transition: 'all 2s cubic-bezier(0.16, 1, 0.3, 1)',
              }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                width: isHovered ? '5px' : '2px', height: isHovered ? '5px' : '2px',
                backgroundColor: accent, opacity: isHovered ? 0.8 : 0.4,
                transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: isHovered ? `0 0 15px ${accent}30` : 'none',
              }} />
          </div>
          <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 space-y-1.5 text-center">
            <div className="h-[1px] mx-auto"
              style={{ width: isHovered ? '50px' : '30px', backgroundColor: accent, opacity: isHovered ? 0.35 : 0.15, transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }} />
            <div className="h-[1px] mx-auto bg-white/6"
              style={{ width: isHovered ? '35px' : '22px', transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 80ms' }} />
          </div>
        </div>
      );

    case 'hotel':
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[65%] h-[60%] relative">
            <div className="flex justify-between items-center mb-5" style={floatStyle(0)}>
              <div className="w-14 h-[1px]" style={{ backgroundColor: accent, opacity: 0.4 }} />
              <div className="flex gap-3">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-6 h-[1px] bg-white/8" />
                ))}
              </div>
              <div className="w-10 h-[1px] bg-white/8" />
            </div>
            <div className="space-y-2.5 mb-6">
              <div className="w-[55%] h-[2px]" style={{ ...floatStyle(80), backgroundColor: accent, opacity: isHovered ? 0.4 : 0.25 }} />
              <div className="w-[40%] h-[1px] bg-white/6" style={floatStyle(120)} />
              <div className="w-[25%] h-[1px] bg-white/4 mt-3" style={floatStyle(160)} />
            </div>
            <div className="grid grid-cols-3 gap-2 mt-auto">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="aspect-[3/4] border bg-white/[0.015]"
                  style={{ ...floatStyle(200 + i * 70), borderColor: isHovered && i === 0 ? `${accent}30` : 'rgba(255,255,255,0.04)' }}>
                  <div className="p-1.5 h-full flex flex-col justify-end">
                    <div className="w-[55%] h-[1px] bg-white/4 mb-0.5" />
                    <div className="w-[35%] h-[1px]" style={{ backgroundColor: accent, opacity: isHovered ? 0.25 : 0.08, transition: 'opacity 0.8s ease' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case 'corporate':
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[70%] h-[60%] relative">
            <div className="flex gap-2 mb-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex-1 h-12 bg-white/[0.025] border border-white/4 p-2" style={floatStyle(i * 60)}>
                  <div className="w-6 h-[1px] bg-white/8 mb-1.5" />
                  <div className="w-10 h-[1.5px]"
                    style={{ backgroundColor: i === 0 ? accent : 'rgba(255,255,255,0.06)', opacity: i === 0 ? (isHovered ? 0.4 : 0.2) : 1, transition: 'opacity 0.6s ease' }} />
                </div>
              ))}
            </div>
            <div className="h-20 bg-white/[0.015] border border-white/4 p-2.5 flex items-end gap-[2px]" style={floatStyle(200)}>
              {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 50, 95].map((h, i) => (
                <div key={i} className="flex-1 rounded-sm"
                  style={{
                    height: isHovered ? `${h}%` : `${h * 0.5}%`,
                    backgroundColor: i >= 10 ? `${accent}40` : 'rgba(255,255,255,0.03)',
                    transition: `height 1s cubic-bezier(0.16, 1, 0.3, 1) ${i * 35}ms`,
                  }} />
              ))}
            </div>
          </div>
        </div>
      );

    case 'dashboard':
      return (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[70%] h-[60%] relative flex gap-3">
            {/* Sidebar */}
            <div className="w-[25%] space-y-2" style={floatStyle(0)}>
              <div className="w-8 h-[1px] mb-3" style={{ backgroundColor: accent, opacity: 0.3 }} />
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-sm" style={{ backgroundColor: i === 0 ? accent : 'rgba(255,255,255,0.06)', opacity: i === 0 ? 0.4 : 1 }} />
                  <div className="w-full h-[1px] bg-white/5" />
                </div>
              ))}
            </div>
            {/* Main content */}
            <div className="flex-1">
              <div className="flex gap-2 mb-3">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex-1 h-14 bg-white/[0.02] border border-white/4 p-2" style={floatStyle(80 + i * 60)}>
                    <div className="w-5 h-[1px] bg-white/6 mb-1" />
                    <div className="w-8 h-[1.5px]" style={{ backgroundColor: i === 0 ? accent : 'rgba(255,255,255,0.05)', opacity: 0.25 }} />
                  </div>
                ))}
              </div>
              <div className="h-16 bg-white/[0.015] border border-white/4 p-2 flex items-end gap-[2px]" style={floatStyle(200)}>
                {[30, 55, 40, 70, 45, 60, 80, 50].map((h, i) => (
                  <div key={i} className="flex-1 rounded-sm"
                    style={{
                      height: isHovered ? `${h}%` : `${h * 0.4}%`,
                      backgroundColor: i >= 6 ? `${accent}35` : 'rgba(255,255,255,0.025)',
                      transition: `height 1s cubic-bezier(0.16, 1, 0.3, 1) ${i * 40}ms`,
                    }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}


// ═══════════════════════════════════════
// WORK CARD — Remove layout prop, keep prestige
// ═══════════════════════════════════════

function WorkCard({ project, viewText, index }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [shine, setShine] = useState({ x: 50, y: 50 });

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    cardRef.current.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg) scale3d(1.015, 1.015, 1.015)`;
    setShine({ x: (x + 0.5) * 100, y: (y + 0.5) * 100 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (cardRef.current) {
      cardRef.current.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
      cardRef.current.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) scale3d(1,1,1)';
    }
    setIsHovered(false);
    setShine({ x: 50, y: 50 });
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (cardRef.current) cardRef.current.style.transition = 'none';
    setIsHovered(true);
  }, []);

  return (
    // ✅ Removed layout prop — this was causing the footer lag
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link href={`/work/${project.slug}`}>
        <div
          ref={cardRef}
          data-cursor="view"
          className="relative overflow-hidden"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
          style={{ transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          {/* Main visual area */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />

            <div className="absolute inset-0 opacity-[0.012]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              }} />

            <div className="absolute inset-0"
              style={{
                opacity: isHovered ? 0.035 : 0.015,
                backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                                  linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
                transition: 'opacity 0.8s ease',
              }} />

            <WorkMockUI pattern={project.pattern} accent={project.accent} isHovered={isHovered} />

            <div className="absolute inset-0"
              style={{
                backgroundColor: isHovered ? 'rgba(0,0,0,0.25)' : 'rgba(0,0,0,0)',
                transition: 'background-color 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
              }} />

            <div className="absolute inset-0 pointer-events-none"
              style={{
                opacity: isHovered ? 1 : 0,
                background: `radial-gradient(600px circle at ${shine.x}% ${shine.y}%, ${project.accent}06 0%, transparent 50%)`,
                transition: 'opacity 0.5s ease',
              }} />

            <div className="absolute top-5 right-5"
              style={{
                opacity: isHovered ? 1 : 0,
                transform: isHovered ? 'translateY(0) rotate(0deg)' : 'translateY(-8px) rotate(-45deg)',
                transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
              }}>
              <div className="w-8 h-8 border flex items-center justify-center"
                style={{ borderColor: `${project.accent}40`, backgroundColor: `${project.accent}08` }}>
                <ArrowUpRight size={14} style={{ color: project.accent, opacity: 0.8 }} />
              </div>
            </div>

            <div className="absolute top-5 left-5">
              <span className="font-mono text-[9px] tracking-[0.2em]"
                style={{
                  color: project.accent,
                  opacity: isHovered ? 0.5 : 0,
                  transform: isHovered ? 'translateY(0)' : 'translateY(-4px)',
                  transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'block',
                }}>
                {project.year}
              </span>
            </div>

            <div className="absolute inset-0 pointer-events-none"
              style={{
                boxShadow: isHovered
                  ? `inset 0 0 0 1px ${project.accent}12, 0 0 30px ${project.accent}04`
                  : 'inset 0 0 0 1px rgba(255,255,255,0.03)',
                transition: 'box-shadow 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
              }} />
          </div>

          {/* Info section */}
          <div className="pt-5 pb-2">
            <div className="h-px mb-4"
              style={{
                width: isHovered ? '32px' : '0px',
                backgroundColor: project.accent,
                opacity: 0.5,
                transition: 'width 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
              }} />

            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-heading font-medium text-lg mb-1"
                  style={{
                    color: isHovered ? '#ffffff' : 'rgba(255,255,255,0.85)',
                    transition: 'color 0.5s ease',
                  }}>
                  {project.name}
                </h3>
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase"
                  style={{
                    color: project.accent,
                    opacity: isHovered ? 0.7 : 0.4,
                    transition: 'opacity 0.5s ease',
                  }}>
                  {project.category}
                </span>
              </div>

              <span className="font-mono text-[10px] tracking-wider text-ag-muted/30 mt-1"
                style={{
                  opacity: isHovered ? 0.5 : 0.2,
                  transition: 'opacity 0.5s ease',
                }}>
                {project.scope}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}


// ═══════════════════════════════════════
// WORK PAGE — Fixed grid (no layout animation on container)
// ═══════════════════════════════════════

export default function WorkPage() {
  const { t, langKey } = useTranslation();
  const [activeFilter, setActiveFilter] = useState(0);

  const categoriesData = t('work.categories');
  const categories = Array.isArray(categoriesData) ? categoriesData : ['All'];
  const categoryMap = {
    0: 'All',
    1: 'Web Design',
    2: 'E-Commerce',
    3: 'Brand Identity',
    4: 'Corporate',
    5: 'Hotel',
  };
  const filterKey = categoryMap[activeFilter] || 'All';
  const filtered = filterKey === 'All'
    ? allProjects
    : allProjects.filter((p) => p.category === filterKey);

  return (
    <div className="pt-24 min-h-screen bg-ag-bg">
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 md:py-24">
        {/* Header */}
        <motion.div
          key={`work-header-${langKey}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="font-mono text-[11px] tracking-[0.2em] uppercase block mb-6"
            style={{ color: '#E8FF3D', opacity: 0.5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.5, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            [ Portfolio ]
          </motion.span>

          <motion.h1
            className="font-heading font-bold text-[44px] md:text-h1 lg:text-display text-white mb-4"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {t('work.title')}
          </motion.h1>

          <motion.p
            className="text-ag-body text-lg max-w-[500px] mb-16 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {t('work.subtitle')}
          </motion.p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          className="flex flex-wrap gap-3 mb-16 sticky top-20 z-50 py-5 -mx-6 px-6"
          style={{
            backgroundColor: 'rgba(10, 10, 10, 0.85)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="absolute bottom-0 left-6 right-6 h-px bg-ag-border/30" />

          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveFilter(idx)}
              className="relative px-5 py-2.5 text-[12px] font-mono tracking-[0.1em] uppercase transition-all duration-500"
              style={{
                color: activeFilter === idx ? '#0A0A0A' : 'rgba(255,255,255,0.4)',
                backgroundColor: activeFilter === idx ? '#E8FF3D' : 'transparent',
                border: activeFilter === idx ? '1px solid #E8FF3D' : '1px solid rgba(255,255,255,0.08)',
              }}
              data-cursor="hover"
            >
              {cat}
            </button>
          ))}

          <div className="flex items-center ml-auto">
            <span className="font-mono text-[10px] tracking-wider text-ag-muted/30">
              {filtered.length} {filtered.length === 1 ? 'project' : 'projects'}
            </span>
          </div>
        </motion.div>

        {/* ✅ Projects Grid — key-based re-render instead of layout animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`grid-${filterKey}`}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {filtered.map((project, index) => (
              <WorkCard
                key={project.id}
                project={project}
                viewText={t('work.viewProject')}
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        <AnimatePresence>
          {filtered.length === 0 && (
            <motion.div
              className="text-center py-24"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <p className="font-mono text-sm text-ag-muted/40 tracking-wider">
                No projects in this category yet.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}