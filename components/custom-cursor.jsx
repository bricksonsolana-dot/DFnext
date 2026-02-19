'use client';
import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

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

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);
    if (isTouch) return;

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
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
  const ringColor = cursorState === 'hover' || cursorState === 'view' ? '#E8FF3D' : 'rgba(255,255,255,0.4)';
  const showDot = cursorState === 'default';

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ x: cursorX, y: cursorY }}
        animate={{ opacity: isVisible && showDot ? 1 : 0, scale: isClicking ? 0.5 : 1 }}
        transition={{ duration: 0.15 }}
      >
        <div className="w-2 h-2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
      </motion.div>

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
              className="text-white text-[11px] font-mono tracking-wider"
            >
              VIEW
            </motion.span>
          )}
        </motion.div>
      </motion.div>
    </>
  );
}
