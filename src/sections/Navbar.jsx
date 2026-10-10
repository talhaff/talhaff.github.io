import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { useTheme } from '../ThemeContext';
import { useLanguage } from '../LanguageContext';
import { sound } from '../utils/audio';

const Navbar = ({ onOpenTerminal }) => {
  const { scrollYProgress, scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, setLanguage, isEn } = useLanguage();

  const currentData = PORTFOLIO_DATA[language] || PORTFOLIO_DATA.tr;

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const handleThemeChange = () => {
    sound.playToggle();
    toggleTheme();
  };

  const handleLanguageChange = (lang) => {
    sound.playClick();
    setLanguage(lang);
  };

  const ThemeToggle = () => (
    <button
      onClick={handleThemeChange}
      className={`flex items-center justify-center w-10 h-10 md:w-11 md:h-11 glass rounded-2xl border transition-all duration-300 active:scale-90 cursor-pointer ${
        theme === 'light'
          ? 'border-slate-200 text-blue-600 hover:bg-slate-100'
          : 'border-white/10 text-yellow-400 hover:bg-white/10'
      }`}
      title={isEn ? "Toggle Theme" : "Tema Değiştir"}
    >
      {theme === 'light' ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
      )}
    </button>
  );

  const LanguageSelector = () => (
    <div className={`flex items-center p-1 rounded-2xl glass border transition-all ${
      theme === 'light' ? 'border-slate-200/90 bg-white/80' : 'border-white/10 bg-slate-950/80'
    }`}>
      <button
        onClick={() => handleLanguageChange('tr')}
        className={`px-2.5 py-1 rounded-xl text-[11px] font-mono font-bold transition-all cursor-pointer ${
          language === 'tr'
            ? 'bg-blue-600 text-white shadow-sm'
            : theme === 'light'
            ? 'text-slate-500 hover:text-slate-900'
            : 'text-slate-400 hover:text-white'
        }`}
      >
        TR
      </button>
      <button
        onClick={() => handleLanguageChange('en')}
        className={`px-2.5 py-1 rounded-xl text-[11px] font-mono font-bold transition-all cursor-pointer ${
          language === 'en'
            ? 'bg-blue-600 text-white shadow-sm'
            : theme === 'light'
            ? 'text-slate-500 hover:text-slate-900'
            : 'text-slate-400 hover:text-white'
        }`}
      >
        EN
      </button>
    </div>
  );

  return (
    <>
      {/* Top Scroll Progress Bar */}
      <motion.div
        style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 z-[150]"
      />

      <motion.nav
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -100, opacity: 0 },
        }}
        animate={hidden ? 'hidden' : 'visible'}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className="fixed top-0 left-0 right-0 z-[100] pointer-events-none"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 sm:py-4 md:py-6 flex items-center justify-between">
          
          {/* Logo & Brand Identity (Mobile-Optimized) */}
          <motion.a
            href="/"
            onClick={() => sound.playClick()}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="pointer-events-auto flex items-center gap-2.5 sm:gap-4 md:gap-5 group relative p-1 sm:p-2 rounded-2xl sm:rounded-3xl transition-all max-w-[65%] sm:max-w-none"
          >
            {/* Ambient Glowing Halo Behind Logo */}
            <div className="relative flex items-center justify-center shrink-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 rounded-full blur-sm opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src="/Talha-Ozcan-logo.png"
                alt="Talha Özcan Logo"
                className={`relative h-11 w-11 sm:h-16 sm:w-16 md:h-20 md:w-20 object-contain rounded-full border-2 transition-all duration-500 group-hover:border-blue-400 ${
                  theme === 'light'
                    ? 'border-slate-300 shadow-md bg-white/90'
                    : 'border-white/20 shadow-xl bg-slate-950/90'
                }`}
              />
            </div>

            {/* Brand Typography */}
            <div className="flex flex-col text-left min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className={`text-base sm:text-2xl md:text-3xl font-black tracking-tight leading-tight transition-colors truncate ${
                  theme === 'light' ? 'text-slate-950' : 'text-white'
                }`}>
                  Talha <span className="text-gradient">Özcan</span>
                </span>
                <span className="hidden lg:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-mono text-blue-400 font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 -ml-2.5" />
                  PRO
                </span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 mt-0.5">
                <span className="text-[10px] sm:text-xs md:text-sm font-mono font-bold tracking-wider text-blue-500 dark:text-blue-400 truncate">
                  {currentData.personal.shortRole}
                </span>
                <span className="hidden sm:inline text-slate-400 text-xs">•</span>
                <span className="hidden md:inline text-[11px] font-mono text-slate-400">
                  Systems & Fullstack
                </span>
              </div>
            </div>
          </motion.a>

          {/* Controls: Language, Theme, Menu */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 md:gap-3 pointer-events-auto shrink-0">
            
            {/* Desktop Navigation Links Pill */}
            <div className={`hidden md:flex items-center glass rounded-2xl px-2 py-1.5 gap-2 border transition-all duration-300 ${
              isScrolled ? 'shadow-2xl' : 'shadow-lg'
            } ${theme === 'light' ? 'border-slate-200/80 bg-white/80' : 'border-white/10 bg-slate-950/80'}`}>
              
              <div className="flex items-center px-4 gap-6">
                {currentData.nav.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => sound.playClick()}
                    className="text-[11px] font-mono font-bold tracking-wider uppercase text-slate-500 hover:text-blue-500 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Terminal CLI Button */}
              <button
                onClick={() => {
                  sound.playClick();
                  onOpenTerminal();
                }}
                className="px-3.5 py-2 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 text-blue-500 dark:text-blue-400 font-mono text-[11px] font-bold border border-blue-500/20 flex items-center gap-1.5 transition-all cursor-pointer"
                title="CLI Terminal (Ctrl+K)"
              >
                <span>CLI</span>
                <kbd className="text-[9px] px-1 bg-blue-500/20 rounded">⌘K</kbd>
              </button>

              {/* Direct Contact Button */}
              <a
                href="#contact"
                onClick={() => sound.playClick()}
                className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-[11px] font-black uppercase tracking-wider transition-all shadow-md active:scale-95"
              >
                {currentData.ui.ctaContact}
              </a>
            </div>

            {/* Language Switcher */}
            <LanguageSelector />

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => {
                sound.playClick();
                setIsOpen(!isOpen);
              }}
              className={`md:hidden flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 glass rounded-2xl border active:scale-90 transition-transform cursor-pointer ${
                theme === 'light' ? 'border-slate-200 text-slate-900 bg-white/80' : 'border-white/10 text-white bg-slate-900/80'
              }`}
              aria-label="Toggle Menu"
            >
              <div className="w-5 h-4 relative flex flex-col justify-between">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  className={`w-full h-[2px] rounded-full origin-center ${
                    theme === 'light' ? 'bg-slate-900' : 'bg-white'
                  }`}
                />
                <motion.span
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  className={`w-full h-[2px] rounded-full ${
                    theme === 'light' ? 'bg-slate-900' : 'bg-white'
                  }`}
                />
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  className={`w-full h-[2px] rounded-full origin-center ${
                    theme === 'light' ? 'bg-slate-900' : 'bg-white'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Fullscreen Overlay with Close Button */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`fixed inset-0 z-[200] flex flex-col items-center justify-center pointer-events-auto backdrop-blur-3xl px-6 ${
                theme === 'light' ? 'bg-slate-50/98 text-slate-900' : 'bg-slate-950/98 text-white'
              }`}
            >
              {/* Close Button Top Right */}
              <button
                onClick={() => {
                  sound.playClick();
                  setIsOpen(false);
                }}
                className={`absolute top-6 right-6 p-3 rounded-2xl glass border active:scale-90 transition-transform ${
                  theme === 'light' ? 'border-slate-300 text-slate-800' : 'border-white/10 text-white'
                }`}
                aria-label="Close Menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>

              <div className="flex flex-col items-center gap-6 text-center w-full max-w-sm">
                {/* Mobile Drawer Brand Logo */}
                <div className="flex flex-col items-center gap-2 mb-2">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 rounded-full blur-md opacity-60" />
                    <img
                      src="/Talha-Ozcan-logo.png"
                      alt="Talha Özcan Logo"
                      className="relative h-20 w-20 object-contain rounded-full border-2 border-blue-400 shadow-2xl bg-slate-950"
                    />
                  </div>
                  <span className={`text-xl font-black tracking-tight ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
                    Talha <span className="text-gradient">Özcan</span>
                  </span>
                  <span className="text-xs font-mono font-bold tracking-wider text-blue-500 dark:text-blue-400">
                    {currentData.personal.shortRole}
                  </span>
                </div>

                {currentData.nav.map((link, index) => (
                  <motion.a
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    key={index}
                    href={link.href}
                    onClick={() => {
                      sound.playClick();
                      setIsOpen(false);
                    }}
                    className={`text-2xl font-black font-mono uppercase tracking-tight py-2 w-full transition-colors ${
                      theme === 'light' ? 'hover:text-blue-600' : 'hover:text-blue-400'
                    }`}
                  >
                    <span className="text-blue-500 text-xs mr-2">0{index + 1}.</span>
                    {link.label}
                  </motion.a>
                ))}

                <div className="w-16 h-[1px] bg-slate-400/20 my-2" />

                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenTerminal();
                  }}
                  className="w-full py-3.5 rounded-2xl bg-blue-500/10 text-blue-500 dark:text-blue-400 font-mono text-xs font-bold border border-blue-500/30 flex items-center justify-center gap-2 active:scale-98"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
                  <span>{isEn ? "Open Terminal (CLI)" : "Terminali Başlat (CLI)"}</span>
                </button>

                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black uppercase text-xs tracking-wider shadow-xl active:scale-98"
                >
                  {currentData.ui.ctaContact}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
