import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { useTheme } from '../ThemeContext';
import { useLanguage } from '../LanguageContext';
import { sound } from '../utils/audio';

const Contact = ({ onOpenTerminal }) => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const data = PORTFOLIO_DATA[language] || PORTFOLIO_DATA.tr;

  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(data.personal.email);
    setCopied(true);
    sound.playSuccess();
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 max-w-7xl mx-auto relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Impactful Headline */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:col-span-6"
        >
          <span className="text-blue-500 font-mono font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-4 inline-block">
            {data.ui.contactHeaderTag}
          </span>
          <h2 className={`text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.95] mb-6 ${
            theme === 'light' ? 'text-slate-950' : 'text-white'
          }`}>
            {data.ui.contactHeading1} <br />
            <span className="text-gradient">{data.ui.contactHeading2}</span>
          </h2>
          <p className={`text-base sm:text-lg font-light max-w-lg leading-relaxed mb-8 ${
            theme === 'light' ? 'text-slate-600' : 'text-slate-400'
          }`}>
            {data.ui.contactSub}
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => {
                sound.playClick();
                onOpenTerminal();
              }}
              className="px-6 py-3 rounded-2xl glass font-mono text-xs font-bold border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>{data.ui.contactTerminalTrigger}</span>
              <span>⌘K</span>
            </button>
          </div>
        </motion.div>

        {/* Right Side: Interactive Action Blocks */}
        <div className="lg:col-span-6 space-y-4">
          
          {/* Email Card with 1-click copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ x: 6 }}
            className={`group p-6 sm:p-8 rounded-[2rem] glass border transition-all ${
              theme === 'light'
                ? 'border-slate-200/80 bg-white/80 hover:border-blue-400 shadow-sm'
                : 'border-white/10 bg-slate-950/80 hover:border-blue-500/40 shadow-xl'
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-500 mb-1">
                  {data.ui.contactEmailLabel}
                </p>
                <h3 className={`text-xl sm:text-2xl font-bold font-mono ${
                  theme === 'light' ? 'text-slate-900' : 'text-white'
                }`}>
                  {data.personal.email}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyEmail}
                  className={`px-4 py-2.5 rounded-xl font-mono text-xs font-bold border transition-all active:scale-95 cursor-pointer ${
                    copied
                      ? 'bg-emerald-600 text-white border-emerald-500'
                      : theme === 'light'
                      ? 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
                      : 'bg-white/5 hover:bg-white/15 text-slate-200 border-white/10'
                  }`}
                >
                  {copied ? data.ui.contactCopied : data.ui.contactCopy}
                </button>

                <a
                  href={`mailto:${data.personal.email}`}
                  onClick={() => sound.playClick()}
                  className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-all active:scale-95 cursor-pointer"
                  title={language === 'en' ? "Open Mail Client" : "Mail Uygulamasını Aç"}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* LinkedIn Card */}
          <motion.a
            href={data.personal.linkedin}
            target="_blank"
            rel="noreferrer"
            onClick={() => sound.playClick()}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ x: 6 }}
            className={`group block p-6 sm:p-8 rounded-[2rem] glass border transition-all cursor-pointer ${
              theme === 'light'
                ? 'border-slate-200/80 bg-white/80 hover:border-indigo-400 shadow-sm'
                : 'border-white/10 bg-slate-950/80 hover:border-indigo-500/40 shadow-xl'
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-indigo-500 mb-1">
                  {data.ui.contactLinkedInLabel}
                </p>
                <h3 className={`text-xl sm:text-2xl font-bold ${
                  theme === 'light' ? 'text-slate-900 group-hover:text-indigo-600' : 'text-white group-hover:text-indigo-400'
                }`}>
                  LinkedIn
                </h3>
                <p className="text-xs text-slate-500 font-mono mt-0.5">/in/talha-özcan</p>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-indigo-600/10 text-indigo-500 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </div>
            </div>
          </motion.a>

          {/* GitHub Card */}
          <motion.a
            href={data.personal.github}
            target="_blank"
            rel="noreferrer"
            onClick={() => sound.playClick()}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ x: 6 }}
            className={`group block p-6 sm:p-8 rounded-[2rem] glass border transition-all cursor-pointer ${
              theme === 'light'
                ? 'border-slate-200/80 bg-white/80 hover:border-slate-400 shadow-sm'
                : 'border-white/10 bg-slate-950/80 hover:border-white/30 shadow-xl'
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 mb-1">
                  {data.ui.contactGithubLabel}
                </p>
                <h3 className={`text-xl sm:text-2xl font-bold ${
                  theme === 'light' ? 'text-slate-900' : 'text-white'
                }`}>
                  GitHub
                </h3>
                <p className="text-xs text-slate-500 font-mono mt-0.5">github.com/talhaff</p>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-white/5 text-slate-300 flex items-center justify-center group-hover:bg-slate-800 group-hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </div>
            </div>
          </motion.a>

        </div>

      </div>
    </section>
  );
};

export default Contact;
