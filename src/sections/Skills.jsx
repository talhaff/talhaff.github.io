import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { useTheme } from '../ThemeContext';
import { useLanguage } from '../LanguageContext';
import { sound } from '../utils/audio';

const Skills = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const data = PORTFOLIO_DATA[language] || PORTFOLIO_DATA.tr;

  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-blue-500 font-mono font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-3 inline-block"
            >
              {data.ui.skillsHeaderTag}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight ${
                theme === 'light' ? 'text-slate-950' : 'text-white'
              }`}
            >
              {data.ui.skillsHeading1} <br />
              <span className="text-gradient">{data.ui.skillsHeading2}</span>
            </motion.h2>
          </div>

          <p className={`max-w-md text-sm sm:text-base font-light leading-relaxed ${
            theme === 'light' ? 'text-slate-600' : 'text-slate-400'
          }`}>
            {data.ui.skillsSub}
          </p>
        </div>

        {/* Global Architecture Pipeline Visualizer */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider font-bold">
              {data.ui.skillsPipelineLabel}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.pipeline.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-5 rounded-2xl glass border relative overflow-hidden transition-all duration-300 hover:border-blue-500/40 ${
                  theme === 'light'
                    ? 'border-slate-200/80 bg-white/60 shadow-sm'
                    : 'border-white/5 bg-slate-950/50 shadow-lg'
                }`}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-mono font-bold text-blue-500 px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20">
                    {language === 'en' ? `LAYER ${item.step}` : `KATMAN ${item.step}`}
                  </span>
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
                </div>
                <h4 className={`text-base font-bold mb-1 ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
                  {item.title}
                </h4>
                <p className="text-xs font-mono text-blue-500/90 dark:text-blue-400 mb-2 font-semibold">
                  {item.tech}
                </p>
                <p className={`text-xs font-light leading-relaxed ${theme === 'light' ? 'text-slate-600' : 'text-slate-400'}`}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Detailed Stack Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Category Tabs */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider font-bold block mb-2">
              {data.ui.skillsSelectDomain}
            </span>
            {data.skills.map((cat, idx) => {
              const isSelected = activeCategoryIndex === idx;
              return (
                <button
                  key={cat.category}
                  onClick={() => {
                    sound.playClick();
                    setActiveCategoryIndex(idx);
                  }}
                  className={`w-full text-left p-4 rounded-2xl border font-mono transition-all duration-300 active:scale-98 cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-blue-600 text-white border-blue-500 shadow-[0_8px_25px_rgba(37,99,235,0.35)]'
                      : theme === 'light'
                      ? 'bg-white/70 border-slate-200 text-slate-700 hover:border-blue-300 hover:bg-white'
                      : 'bg-white/5 border-white/5 text-slate-300 hover:border-white/20 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-bold px-2 py-1 rounded ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-blue-500/10 text-blue-500'
                    }`}>
                      0{idx + 1}
                    </span>
                    <span className="text-sm font-bold">{cat.category}</span>
                  </div>
                  <span className="text-xs">→</span>
                </button>
              );
            })}
          </div>

          {/* Detailed Skill Cards for Active Category */}
          <div className="lg:col-span-8">
            <motion.div
              key={`${language}-${activeCategoryIndex}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className={`p-6 sm:p-8 rounded-[2.5rem] glass border ${
                theme === 'light'
                  ? 'border-slate-200/80 bg-white/80'
                  : 'border-white/10 bg-slate-950/80'
              }`}
            >
              <div className="mb-6 pb-4 border-b border-slate-400/10">
                <h3 className={`text-2xl font-black mb-2 ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
                  {data.skills[activeCategoryIndex].category}
                </h3>
                <p className={`text-sm font-light leading-relaxed ${
                  theme === 'light' ? 'text-slate-600' : 'text-slate-400'
                }`}>
                  {data.skills[activeCategoryIndex].description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.skills[activeCategoryIndex].items.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.02 }}
                    className={`p-4 rounded-2xl border transition-all ${
                      theme === 'light'
                        ? 'bg-slate-50 border-slate-200/80 hover:border-blue-400'
                        : 'bg-slate-900/60 border-white/5 hover:border-blue-500/30'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h4 className={`text-sm font-bold ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
                        {skill.name}
                      </h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-500 dark:text-blue-400 font-bold border border-blue-500/20">
                        {skill.tag}
                      </span>
                    </div>

                    {/* Proficiency Bar */}
                    <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden mt-3">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
