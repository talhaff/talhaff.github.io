import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { useTheme } from '../ThemeContext';
import { useLanguage } from '../LanguageContext';
import { sound } from '../utils/audio';

const ProjectCard = ({ project }) => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const data = PORTFOLIO_DATA[language] || PORTFOLIO_DATA.tr;

  if (!project) return null;

  const [activeTab, setActiveTab] = useState('overview');

  // 3D Tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { damping: 20, stiffness: 200 });
  const mouseYSpring = useSpring(y, { damping: 20, stiffness: 200 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7deg', '-7deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7deg', '7deg']);

  // Dynamic Spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={`group relative h-full glass rounded-3xl sm:rounded-[2.5rem] p-5 sm:p-8 overflow-hidden transition-all duration-500 border flex flex-col justify-between ${
        theme === 'light'
          ? 'border-slate-200/80 bg-white/70 hover:shadow-[0_20px_50px_rgba(59,130,246,0.1)] hover:border-blue-300'
          : 'border-white/10 bg-slate-950/70 hover:border-blue-500/40 hover:shadow-[0_0_50px_rgba(59,130,246,0.15)]'
      }`}
    >
      {/* Dynamic Cursor Spotlight */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([cx, cy]) =>
              `radial-gradient(500px circle at ${cx}px ${cy}px, ${
                theme === 'light' ? 'rgba(59, 130, 246, 0.08)' : 'rgba(59, 130, 246, 0.12)'
              }, transparent 60%)`
          ),
        }}
      />

      <div style={{ transform: 'translateZ(30px)' }} className="relative z-10 flex flex-col h-full">
        {/* Top Bar: Category badge & Links */}
        <div className="flex justify-between items-center mb-6">
          <span className="px-3.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20">
            {project.category}
          </span>

          <div className="flex items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playClick()}
                className={`p-2.5 rounded-xl border transition-all ${
                  theme === 'light'
                    ? 'bg-slate-100 border-slate-200 text-slate-600 hover:text-blue-600 hover:bg-slate-200'
                    : 'bg-white/5 border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
                }`}
                title={language === 'en' ? 'Source / Live Link' : 'Kaynak Kod / Canlı Link'}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
            )}
          </div>
        </div>

        {/* Project Title */}
        <h3 className={`text-2xl font-black tracking-tight mb-3 transition-colors duration-300 ${
          theme === 'light' ? 'text-slate-900 group-hover:text-blue-600' : 'text-white group-hover:text-blue-400'
        }`}>
          {project.title}
        </h3>

        {/* Sub-tabs for deep engineering view */}
        <div className={`flex gap-1.5 p-1 rounded-2xl border mb-5 font-mono text-[10px] transition-colors ${
          theme === 'light'
            ? 'bg-slate-100/90 border-slate-200'
            : 'bg-slate-900/60 border-white/5'
        }`}>
          {[
            { id: 'overview', label: data.ui.tabOverview },
            { id: 'arch', label: data.ui.tabArch },
            { id: 'metrics', label: data.ui.tabMetrics },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  sound.playClick();
                  setActiveTab(tab.id);
                }}
                className={`flex-1 py-1.5 px-2 rounded-xl font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                    : theme === 'light'
                    ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="min-h-[140px] mb-6 flex flex-col justify-center">
          {activeTab === 'overview' && (
            <p className={`text-sm leading-relaxed font-light ${
              theme === 'light' ? 'text-slate-600' : 'text-slate-400'
            }`}>
              {project.description}
            </p>
          )}

          {activeTab === 'arch' && (
            <div className="space-y-3 text-xs font-mono">
              <div className={`p-3 rounded-2xl border ${
                theme === 'light'
                  ? 'bg-blue-50/90 border-blue-200/80 text-blue-950 font-semibold'
                  : 'bg-blue-500/10 border-blue-500/20 text-blue-300'
              }`}>
                <span className={`font-bold block text-[10px] uppercase mb-1 ${
                  theme === 'light' ? 'text-blue-700' : 'text-blue-400'
                }`}>
                  {data.ui.archStackLabel}
                </span>
                {project.architecture}
              </div>
              {project.highlights && (
                <ul className={`space-y-1.5 text-[11px] ${
                  theme === 'light' ? 'text-slate-600' : 'text-slate-400'
                }`}>
                  {project.highlights.map((hl, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-blue-500 font-bold">▹</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {activeTab === 'metrics' && (
            <div className="grid grid-cols-1 gap-2 font-mono text-xs">
              {project.metrics ? (
                Object.entries(project.metrics).map(([key, val]) => (
                  <div
                    key={key}
                    className={`p-2.5 rounded-xl border flex justify-between items-center ${
                      theme === 'light'
                        ? 'bg-slate-50 border-slate-200'
                        : 'bg-slate-900/50 border-white/5'
                    }`}
                  >
                    <span className={`text-[10px] uppercase font-semibold ${
                      theme === 'light' ? 'text-slate-500' : 'text-slate-400'
                    }`}>
                      {key}:
                    </span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">{val}</span>
                  </div>
                ))
              ) : (
                <div className="text-slate-500 text-xs">Verified...</div>
              )}
            </div>
          )}
        </div>

        {/* Tags footer */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-slate-400/10">
          {project.tags?.map((tag, idx) => (
            <span
              key={idx}
              className={`px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider rounded-lg border transition-all ${
                theme === 'light'
                  ? 'bg-slate-100 text-slate-700 border-slate-200 group-hover:border-blue-300'
                  : 'bg-white/5 text-slate-300 border-white/5 group-hover:border-blue-500/30'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
