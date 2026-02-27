// app/work/page.js
'use client';
import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '@/components/language-provider';
import Link from 'next/link';
import Image from 'next/image';

// ═══════════════════════════════════════
// PROJECT DATA
// ═══════════════════════════════════════

const allProjects = [
  {
    id: 1,
    slug: 'kaiser-omnia',
    name: 'Kaiser Omnia',
    category: 'Web Design',
    image: '/images/projects/kaiser-omnia.jpg',
    accent: '#e8a04a',
    year: '2026',
    scope: 'Design & Development',
    isDemo: true,
    demoUrl: '/kaiser-omnia',
  },
  {
    id: 2,
    slug: 'NyConstruction',
    name: 'NyConstruction',
    category: 'Corporate',
    image: '/images/projects/construction.jpg',
    accent: '#5B8DEF',
    year: '2026',
    scope: 'Full Branding',
    isDemo: true,
    demoUrl: '/NyConstruction',
  },
    {
    id: 3,
    slug: 'Architects',
    name: 'Greek Architects',
    category: 'Brand Identity',
    image: '/images/projects/Architects.jpg',
    accent: '#c4a35a',
    year: '2026',
    demoUrl: '/Architects',
  },
 {
    id: 4,
    slug: 'Clothing',
    name: 'Maison Noire',
    category: 'E-Commerce',
    image: '/images/projects/clothing.jpg',
    accent: '#a35617',
    year: '2026',
    demoUrl: '/Clothing',
  },
    {
    id: 5,
    slug: 'escape-room',
    name: 'Escape Room - No Signal',
    category: 'Brand Identity',
    image: '/images/projects/escape-room.jpg',
    accent: '#ff4d4d',
    year: '2026',
    scope: 'Design & Development',
    isDemo: true,
    demoUrl: '/escape-room',
  },
  {
    id: 6,
    slug: 'EatPlay',
    name: 'Foxhouse Restaurant',
    category: 'Web Design',
    image: '/images/projects/EatPlay.jpg',
    accent: '#64b5f6',
    year: '2026',
    demoUrl: '/EatPlay',
  },
  {
    id: 7,
    slug: 'UltraChamp',
    name: 'UltraChamp Sports Tournament',
    category: 'Sports',
    image: '/images/projects/UltraChamp.png',
    accent: '#ffffff',
    year: '2026',
    demoUrl: '/UltraChamp',
  },
  {
    id: 8,
    slug: 'propertyhall',
    name: 'Property Hall',
    category: 'Web Design',
    image: '/images/projects/propertyhall.png',
    accent: '#2a7de1',
    year: '2026',
    scope: 'Design & Development',
    isDemo: true,
    demoUrl: '/propertyhall',
  },
];


// ═══════════════════════════════════════
// WORK CARD
// ═══════════════════════════════════════

function WorkCard({ project, viewText }) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [shine, setShine] = useState({ x: 50, y: 50 });

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    cardRef.current.style.transform = `perspective(1000px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg) scale3d(1.02, 1.02, 1.02)`;
    setShine({ x: (x + 0.5) * 100, y: (y + 0.5) * 100 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (cardRef.current) {
      cardRef.current.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
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
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <Link href={project.demoUrl || `/work/${project.slug}`}>
        <div
          ref={cardRef}
          data-cursor="view"
          className="group relative overflow-hidden bg-card border border-border"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
          style={{ transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          
          {/* IMAGE AREA - 16:9 aspect ratio για 1920x1080 */}
          <div className="relative aspect-video overflow-hidden bg-neutral-900">
            
            {/* Image */}
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover object-center transition-all duration-700 ease-out"
              style={{
                transform: isHovered ? 'scale(1.05)' : 'scale(1)',
              }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            {/* Dark overlay on hover */}
            <div 
              className="absolute inset-0 transition-all duration-500 pointer-events-none"
              style={{
                backgroundColor: isHovered ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0)',
              }}
            />

            {/* Shine effect */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-500"
              style={{
                opacity: isHovered ? 0.6 : 0,
                background: `radial-gradient(400px circle at ${shine.x}% ${shine.y}%, ${project.accent}15 0%, transparent 60%)`,
              }}
            />

            {/* Year badge - top left */}
            <div 
              className="absolute top-4 left-4 transition-all duration-500 pointer-events-none"
              style={{
                opacity: isHovered ? 1 : 0,
                transform: isHovered ? 'translateY(0)' : 'translateY(-10px)',
              }}
            >
              <span 
                className="font-mono text-[10px] tracking-[0.2em] px-2 py-1 backdrop-blur-sm"
                style={{
                  color: project.accent,
                  backgroundColor: 'rgba(0,0,0,0.6)',
                  border: `1px solid ${project.accent}40`,
                }}
              >
                {project.year}
              </span>
            </div>

            {/* View Project - center */}
            <div 
              className="absolute inset-0 flex items-center justify-center transition-all duration-500 pointer-events-none"
              style={{
                opacity: isHovered ? 1 : 0,
                transform: isHovered ? 'translateY(0)' : 'translateY(10px)',
              }}
            >
              <span 
                className="font-mono text-xs tracking-wider uppercase px-5 py-2.5 backdrop-blur-sm"
                style={{
                  color: '#fff',
                  backgroundColor: 'rgba(0,0,0,0.6)',
                  border: `1px solid ${project.accent}50`,
                }}
              >
                {viewText}
              </span>
            </div>

            {/* Border glow */}
            <div
              className="absolute inset-0 pointer-events-none transition-all duration-500"
              style={{
                boxShadow: isHovered
                  ? `inset 0 0 0 1px ${project.accent}40`
                  : 'inset 0 0 0 1px transparent',
              }}
            />
          </div>

          {/* Info section */}
          <div className="p-5 relative">
            {/* Accent line */}
            <div 
              className="absolute top-0 left-5 h-[2px] transition-all duration-500"
              style={{
                width: isHovered ? '40px' : '0px',
                backgroundColor: project.accent,
              }}
            />
            
            <h3 className="font-heading font-medium text-lg text-foreground transition-colors duration-300 mt-1">
              {project.name}
            </h3>
            
            <div className="flex items-center justify-between mt-2">
              <span
                className="font-mono text-[11px] uppercase tracking-wider transition-all duration-300"
                style={{
                  color: project.accent,
                  opacity: isHovered ? 1 : 0.6,
                }}
              >
                {project.category}
              </span>
              <span
                className="font-mono text-[10px] tracking-wider text-muted-foreground transition-all duration-300"
                style={{
                  opacity: isHovered ? 0.8 : 0.4,
                }}
              >
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
// WORK PAGE
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
    5: 'Hotel' ,
    6: 'Sports'
  };
  const filterKey = categoryMap[activeFilter] || 'All';
  const filtered = filterKey === 'All' 
    ? allProjects 
    : allProjects.filter((p) => p.category === filterKey);

  return (
    <div className="pt-24 min-h-screen bg-background">
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 md:py-24">
        
        {/* Header */}
        <motion.h1
          key={`title-${langKey}`}
          className="font-heading font-bold text-[44px] md:text-h1 lg:text-display text-foreground mb-8"
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {t('work.title')}
        </motion.h1>

        <motion.p
          key={`sub-${langKey}`}
          className="text-muted-foreground text-lg max-w-[500px] mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {t('work.subtitle')}
        </motion.p>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-3 mb-12 sticky top-20 z-50 bg-background/90 backdrop-blur-md py-4 -mx-6 px-6">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveFilter(idx)}
              className={`px-5 py-2 text-sm font-mono transition-all duration-300 border ${
                activeFilter === idx
                  ? 'bg-foreground text-background border-foreground'
                  : 'border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground'
              }`}
              data-cursor="hover"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <WorkCard
                key={project.id}
                project={project}
                viewText={t('work.viewProject')}
              />
            ))}
          </AnimatePresence>
        </motion.div>
        
      </section>
    </div>
  );
}