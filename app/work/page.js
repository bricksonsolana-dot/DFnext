'use client';
import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const categories = ['All', 'Web Design', 'E-Commerce', 'Brand Identity', 'Corporate', 'Hotel'];

const allProjects = [
  { id: 1, name: 'Flavor Restaurant', category: 'Web Design', image: 'https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxkYXJrJTIwdGVjaCUyMHdvcmtzcGFjZXxlbnwwfHx8YmxhY2t8MTc3MTUxODk0OXww&ixlib=rb-4.1.0&q=85' },
  { id: 2, name: 'TechStart Platform', category: 'E-Commerce', image: 'https://images.pexels.com/photos/7172646/pexels-photo-7172646.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
  { id: 3, name: 'Artisan Coffee Co.', category: 'Brand Identity', image: 'https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
  { id: 4, name: 'Urban Hotel Athens', category: 'Hotel', image: 'https://images.unsplash.com/photo-1640346876473-f76a73c71539?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHw0fHxhYnN0cmFjdCUyMGdlb21ldHJpYyUyMGRhcmt8ZW58MHx8fGJsYWNrfDE3NzE1MTg5NTN8MA&ixlib=rb-4.1.0&q=85' },
  { id: 5, name: 'Olympus Fitness', category: 'Corporate', image: 'https://images.pexels.com/photos/28428591/pexels-photo-28428591.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
  { id: 6, name: 'Aegean Wines', category: 'E-Commerce', image: 'https://images.pexels.com/photos/28428584/pexels-photo-28428584.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
  { id: 7, name: 'MedTech Solutions', category: 'Corporate', image: 'https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
  { id: 8, name: 'Santorini Suites', category: 'Hotel', image: 'https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxkYXJrJTIwdGVjaCUyMHdvcmtzcGFjZXxlbnwwfHx8YmxhY2t8MTc3MTUxODk0OXww&ixlib=rb-4.1.0&q=85' },
  { id: 9, name: 'Olive & Stone', category: 'Brand Identity', image: 'https://images.pexels.com/photos/7172646/pexels-photo-7172646.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
];

function WorkCard({ project }) {
  const cardRef = useRef(null);
  const shineRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    cardRef.current.style.transform = `perspective(1000px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) scale3d(1.02, 1.02, 1.02)`;
    if (shineRef.current) shineRef.current.style.background = `radial-gradient(circle at ${(x+0.5)*100}% ${(y+0.5)*100}%, rgba(255,255,255,0.06) 0%, transparent 60%)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (cardRef.current) { cardRef.current.style.transition = 'transform 0.5s ease-out'; cardRef.current.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) scale3d(1,1,1)'; }
    setHovered(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (cardRef.current) cardRef.current.style.transition = 'none';
    setHovered(true);
  }, []);

  return (
    <motion.div layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.4 }}>
      <div ref={cardRef} data-cursor="view" className="relative rounded-lg overflow-hidden bg-ag-card border border-ag-border" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} style={{ transition: 'transform 0.5s ease-out' }}>
        <div ref={shineRef} className="absolute inset-0 z-10 pointer-events-none" />
        <div className="relative aspect-[4/3] overflow-hidden">
          <img src={project.image} alt={project.name} className={`w-full h-full object-cover transition-transform duration-500 ${hovered ? 'scale-[1.06]' : 'scale-100'}`} loading="lazy" />
          <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 flex items-center justify-center ${hovered ? 'opacity-100' : 'opacity-0'}`}>
            <span className="font-mono text-xs text-white tracking-wider uppercase">View Project &rarr;</span>
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-heading font-medium text-lg text-white">{project.name}</h3>
          <span className="font-mono text-[11px] text-ag-muted uppercase tracking-wider">{project.category}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filtered = activeFilter === 'All' ? allProjects : allProjects.filter((p) => p.category === activeFilter);

  return (
    <div className="pt-24">
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 md:py-24">
        <motion.h1 className="font-heading font-bold text-[44px] md:text-h1 lg:text-display text-white mb-8" initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          Our Work.
        </motion.h1>
        <motion.p className="text-ag-body text-lg max-w-[500px] mb-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          A selection of projects we&apos;re proud of. Each one crafted with care and attention to detail.
        </motion.p>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-3 mb-12 sticky top-20 z-50 bg-[#0A0A0A]/90 backdrop-blur-md py-4 -mx-6 px-6">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveFilter(cat)} className={`px-5 py-2 rounded-full text-sm font-mono transition-all duration-300 border ${
              activeFilter === cat ? 'bg-ag-accent text-[#0A0A0A] border-ag-accent' : 'border-ag-border text-ag-body hover:text-white hover:border-ag-body'
            }`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <WorkCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
}
