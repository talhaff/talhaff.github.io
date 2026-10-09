import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { sound } from '../utils/audio';

const CustomCursor = () => {
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasTouch, setHasTouch] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for high-end lag-behind aesthetic
  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const dotConfig = { damping: 40, stiffness: 800, mass: 0.1 };
  const dotX = useSpring(mouseX, dotConfig);
  const dotY = useSpring(mouseY, dotConfig);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      setHasTouch(true);
      return;
    }

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const isInteractive = target.closest('a, button, input, textarea, [role="button"], .interactive, [data-cursor-interactive]');
      
      if (isInteractive) {
        if (!isPointer) {
          setIsPointer(true);
          sound.playHover();
        }
      } else {
        if (isPointer) {
          setIsPointer(false);
        }
      }
    };

    const handleMouseDown = () => {
      setIsClicking(true);
      sound.playClick();
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible, isPointer, mouseX, mouseY]);

  if (hasTouch || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer Magnetic Ring */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicking ? 0.75 : isPointer ? 1.8 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
        className={`w-9 h-9 rounded-full border transition-colors duration-200 backdrop-blur-[1px] ${
          isPointer
            ? 'border-blue-500 bg-blue-500/10 shadow-[0_0_20px_rgba(59,130,246,0.3)]'
            : 'border-blue-400/40 dark:border-white/30 bg-transparent'
        }`}
      />

      {/* Center Precise Dot */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isClicking ? 1.4 : isPointer ? 0.4 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.1, ease: 'easeOut' }}
        className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.8)]"
      />
    </div>
  );
};

export default CustomCursor;
