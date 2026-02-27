'use client';
import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useTheme } from 'next-themes';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.5 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  const [cursorState, setCursorState] = useState('default');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const [isClicking, setIsClicking] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [accentColor, setAccentColor] = useState('hsl(220 85% 65%)');
  
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Διαβάζει το accent color από το CSS variable
  useEffect(() => {
    if (mounted && typeof window !== 'undefined') {
      const updateAccentColor = () => {
        const root = document.documentElement;
        const computedStyle = getComputedStyle(root);
        const accent = computedStyle.getPropertyValue('--accent').trim();
        if (accent) {
          setAccentColor(`hsl(${accent})`);
        }
      };
      
      updateAccentColor();
      
      // Ξανά-διάβασε όταν αλλάζει το theme
      const observer = new MutationObserver(updateAccentColor);
      observer.observe(document.documentElement, { 
        attributes: true, 
        attributeFilter: ['class'] 
      });
      
      return () => observer.disconnect();
    }
  }, [mounted, theme]);

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);
    if (isTouch) return;

    let rafId = null;
    const handleMouseMove = (e) => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
        setIsVisible(true);
        rafId = null;
      });
    };

    const handleMouseOver = (e) => {
      const viewTarget = e.target.closest('[data-cursor="view"]');
      const hoverTarget = e.target.closest('a, button, [data-cursor="hover"], input, textarea, select, [role="button"]');
      if (viewTarget) {
        setCursorState('view');
      } else if (hoverTarget) {
        setCursorState('hover');
      } else {
        setCursorState('default');
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY]);

  if (isTouchDevice) return null;

  const ringSize = cursorState === 'view' ? 80 : cursorState === 'hover' ? 64 : 40;
  
  const isLight = mounted && theme === 'light';
  
  // Όλα βασισμένα στο theme - ΚΑΝΕΝΑ hardcoded color!
  const defaultRingColor = isLight 
    ? accentColor.replace('hsl(', 'hsla(').replace(')', ', 0.3)')
    : 'rgba(255,255,255,0.4)';
  
  const ringColor = cursorState === 'hover' || cursorState === 'view' 
    ? accentColor 
    : defaultRingColor;
  
  const showDot = cursorState === 'default';

  return (
    <>
      {/* Dot cursor - χρησιμοποιεί Tailwind class */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ x: cursorX, y: cursorY }}
        animate={{ opacity: isVisible && showDot ? 1 : 0, scale: isClicking ? 0.5 : 1 }}
        transition={{ duration: 0.15 }}
      >
        <div className="w-2 h-2 rounded-full -translate-x-1/2 -translate-y-1/2 bg-foreground/80" />
      </motion.div>

      {/* Ring cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ x: ringX, y: ringY }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isClicking ? 0.8 : 1 }}
        transition={{ duration: 0.15 }}
      >
        <motion.div
          className="rounded-full border flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
          animate={{ width: ringSize, height: ringSize, borderColor: ringColor }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          {cursorState === 'view' && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[11px] font-mono tracking-wider text-foreground"
            >
              VIEW
            </motion.span>
          )}
        </motion.div>
      </motion.div>
    </>
  );
}