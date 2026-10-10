import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { useTheme } from '../ThemeContext';
import { useLanguage } from '../LanguageContext';
import { sound } from '../utils/audio';

const About = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const data = PORTFOLIO_DATA[language] || PORTFOLIO_DATA.tr;

  return (
    <section id="about" className="py-20 md:py-32 relative">
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
              {data.ui.aboutHeaderTag}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight ${
                theme === 'light' ? 'text-slate-950' : 'text-white'
              }`}
            >
              {data.ui.aboutHeading1} <br />
              <span className="text-gradient">{data.ui.aboutHeading2}</span>
            </motion.h2>
          </div>

          <p className={`max-w-md text-sm sm:text-base font-light leading-relaxed ${
            theme === 'light' ? 'text-slate-600' : 'text-slate-400'
          }`}>
            {data.ui.aboutSub}
          </p>
        </div>

        {/* Main 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left: Bio & Engineering Mindset */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`lg:col-span-6 p-6 sm:p-10 rounded-3xl sm:rounded-[2.5rem] glass border ${
              theme === 'light' ? 'border-slate-200/80 bg-white/80' : 'border-white/10 bg-slate-950/80'
            }`}
          >
            {/* Identity Emblem Badge */}
            <div className="flex items-center gap-3.5 mb-6 pb-6 border-b border-slate-400/10">
              <div className="relative group shrink-0">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 rounded-full blur-xs opacity-50 group-hover:opacity-100 transition-opacity" />
                <img
                  src="/Talha-Ozcan-logo.png"
                  alt="Talha Özcan Emblem"
                  className="relative w-12 h-12 rounded-full border-2 border-blue-400/40 object-contain bg-slate-950 shadow-lg"
                />
              </div>
              <div>
                <span className="text-xs font-mono font-bold tracking-wider text-blue-500 dark:text-blue-400 block">
                  TALHA ÖZCAN
                </span>
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  {language === 'en' ? 'Verified Engineering Identity' : 'Mühendislik Kimliği & Mimarisi'}
                </span>
              </div>
            </div>

            <h3 className={`text-2xl sm:text-3xl font-black mb-6 ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
              {data.ui.aboutTitle} <br />
              <span className="text-gradient">{data.ui.aboutTitleGradient}</span>
            </h3>

            <div className={`space-y-4 text-sm sm:text-base leading-relaxed font-light ${
              theme === 'light' ? 'text-slate-600' : 'text-slate-400'
            }`}>
              <p>{data.ui.aboutBio1}</p>
              <p>{data.ui.aboutBio2}</p>
              <p>{data.ui.aboutBio3}</p>
            </div>

            {/* Social Direct Badges */}
            <div className="flex flex-wrap gap-3 sm:gap-4 pt-6 sm:pt-8 mt-6 border-t border-slate-400/10">
              <a
                href={data.personal.github}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playClick()}
                className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl border font-mono text-xs font-bold flex items-center gap-2 transition-all ${
                  theme === 'light'
                    ? 'bg-slate-100 border-slate-200 text-slate-800 hover:border-blue-500'
                    : 'bg-white/5 border-white/10 text-white hover:border-blue-500'
                }`}
              >
                <span>{language === 'en' ? 'GitHub Profile' : 'GitHub Profilim'}</span>
                <span>↗</span>
              </a>

              <a
                href={data.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playClick()}
                className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold flex items-center gap-2 transition-all shadow-[0_4px_20px_rgba(37,99,235,0.3)]"
              >
                <span>{language === 'en' ? 'LinkedIn Connection' : 'LinkedIn Bağlantım'}</span>
                <span>↗</span>
              </a>
            </div>
          </motion.div>

          {/* Right: Career & Academic Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`lg:col-span-6 p-6 sm:p-10 rounded-3xl sm:rounded-[2.5rem] glass border ${
              theme === 'light' ? 'border-slate-200/80 bg-white/80' : 'border-white/10 bg-slate-950/80'
            }`}
          >
            <h3 className={`text-2xl font-black mb-8 ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
              {data.ui.aboutTimelineTitle}
            </h3>

            <div className="space-y-8 relative pl-6 border-l-2 border-blue-500/30">
              
              {/* Item 1: Senkroon (Staj Tamamlandı) */}
              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-slate-950 shadow-[0_0_10px_rgba(37,99,235,0.8)]" />
                <div className="flex justify-between items-center mb-1">
                  <h4 className={`text-base font-bold ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
                    {data.ui.timelineSenkroonRole}
                  </h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 font-bold border border-blue-500/20">
                    {data.ui.timelineSenkroonStatus}
                  </span>
                </div>
                <p className="text-xs font-mono text-blue-500 font-semibold mb-2">{data.ui.timelineSenkroonCompany}</p>
                <p className={`text-xs font-light leading-relaxed ${theme === 'light' ? 'text-slate-600' : 'text-slate-400'}`}>
                  {data.ui.timelineSenkroonDesc}
                </p>
              </div>

              {/* Item 2: İnönü Üniversitesi (Mezun) */}
              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-emerald-500 border-4 border-slate-950 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                <div className="flex justify-between items-center mb-1">
                  <h4 className={`text-base font-bold ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
                    {data.ui.timelineInonuDegree}
                  </h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/20">
                    {data.ui.timelineInonuStatus}
                  </span>
                </div>
                <p className="text-xs font-mono text-emerald-400 font-semibold mb-2">
                  {data.personal.university} • GPA: {data.personal.gpa} / 4.00
                </p>
                <p className={`text-xs font-light leading-relaxed ${theme === 'light' ? 'text-slate-600' : 'text-slate-400'}`}>
                  {data.ui.timelineInonuDesc}
                </p>
              </div>

            </div>
          </motion.div>
        </div>

        {/* Engineering Principles Grid */}
        <div>
          <h3 className={`text-xl font-bold font-mono uppercase tracking-wider mb-6 text-center ${
            theme === 'light' ? 'text-slate-800' : 'text-slate-200'
          }`}>
            {data.ui.principlesTitle}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.principles.map((principle, idx) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className={`p-6 rounded-2xl glass border transition-all hover:border-blue-500/40 ${
                  theme === 'light' ? 'border-slate-200/80 bg-white/60' : 'border-white/5 bg-slate-950/40'
                }`}
              >
                <div className="text-blue-500 font-mono text-xs font-bold mb-2">0{idx + 1}.</div>
                <h4 className={`text-base font-bold mb-2 ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>
                  {principle.title}
                </h4>
                <p className={`text-xs font-light leading-relaxed ${theme === 'light' ? 'text-slate-600' : 'text-slate-400'}`}>
                  {principle.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
