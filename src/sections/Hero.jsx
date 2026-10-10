import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { useTheme } from '../ThemeContext';
import { useLanguage } from '../LanguageContext';
import { sound } from '../utils/audio';
import SystemSimulator from '../components/SystemSimulator';

const Hero = ({ onOpenTerminal }) => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const [roleIndex, setRoleIndex] = useState(0);

  const data = PORTFOLIO_DATA[language] || PORTFOLIO_DATA.tr;
  const roles = data.personal.roles;

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [roles.length]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 sm:pt-36 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        
        {/* Main Hero Header Card */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          
          {/* Top Status & Context Pill */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono backdrop-blur-xl transition-all shadow-sm ${
              theme === 'light'
                ? 'bg-white/80 border-slate-200 text-slate-700 shadow-slate-200/50'
                : 'bg-slate-950/80 border-white/10 text-slate-300 shadow-black/40'
            }`}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold">{data.personal.status}</span>
            </div>
          </motion.div>

          {/* Sophisticated Editorial Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h1 className={`text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.12] mb-5 ${
              theme === 'light' ? 'text-slate-950' : 'text-white'
            }`}>
              <span className="block text-xs sm:text-sm md:text-base font-mono font-bold text-blue-500 mb-2.5 tracking-wider uppercase">
                Talha Özcan • {data.personal.shortRole}
              </span>
              {data.ui.heroTitle1} <br />
              <span className="text-gradient">{data.ui.heroTitle2}</span> {data.ui.heroTitle3}
            </h1>

            {/* Dynamic Animated Role Pill */}
            <div className="h-9 flex items-center justify-center mb-6 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${language}-${roleIndex}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs sm:text-sm font-mono font-bold text-blue-500 dark:text-blue-400"
                >
                  <span>⚡</span>
                  <span>{roles[roleIndex] || roles[0]}</span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Concise & Impactful Bio */}
            <p className={`text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light mb-8 px-2 ${
              theme === 'light' ? 'text-slate-600' : 'text-slate-400'
            }`}>
              {data.personal.bio}
            </p>

            {/* Premium CTA Group */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => sound.playClick()}
                href="#projects"
                className="px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-[0_8px_25px_rgba(37,99,235,0.3)] cursor-pointer flex items-center gap-2"
              >
                <span>{data.ui.ctaProjects}</span>
                <span>↓</span>
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  sound.playClick();
                  onOpenTerminal();
                }}
                className={`px-6 py-3.5 glass rounded-2xl font-mono text-xs font-bold tracking-wider border transition-all flex items-center gap-2.5 cursor-pointer ${
                  theme === 'light'
                    ? 'border-slate-200 bg-white/80 text-slate-800 hover:border-blue-400'
                    : 'border-white/10 bg-slate-950/80 text-slate-200 hover:border-blue-500/50'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
                <span>{data.ui.ctaTerminal}</span>
                <kbd className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400 font-sans">⌘K</kbd>
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => sound.playClick()}
                href="#contact"
                className={`px-6 py-3.5 glass rounded-2xl font-mono text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                  theme === 'light'
                    ? 'border-slate-200 text-slate-600 hover:text-slate-900'
                    : 'border-white/5 text-slate-400 hover:text-white'
                }`}
              >
                {data.ui.ctaContact}
              </motion.a>
            </div>

            {/* Compact Engineering Telemetry Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
              {data.personal.stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.08 }}
                  className={`p-3.5 rounded-2xl border text-center transition-all ${
                    theme === 'light'
                      ? 'border-slate-200/90 bg-white/70 shadow-sm'
                      : 'border-white/5 bg-slate-950/50 shadow-md'
                  }`}
                >
                  <div className="text-xl sm:text-2xl font-black font-mono text-gradient mb-0.5">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>

        {/* Live System Architecture & API Flow Simulator Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-5xl mx-auto"
        >
          <SystemSimulator />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
