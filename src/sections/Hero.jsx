import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolio';

// İkonları kütüphaneden çekmek yerine direkt buraya tanımlıyoruz (Hata payı SIFIR)
const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-400/20 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-[0.2em] text-blue-600 bg-blue-50 border border-blue-100 rounded-full uppercase">
            {PERSONAL_INFO.university}
          </span>
          
          // Hero.jsx içindeki h1 kısmını bul ve şununla değiştir:

          <h1 className="text-6xl md:text-9xl font-extrabold tracking-tighter text-slate-900 mb-8 leading-tight">
            Tasarla , <span className="text-blue-600">Kodla </span> <br />
            <span className="italic font-light">Yayınla</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed mb-12 font-light">
            Merhaba, ben <span className="text-slate-900 font-semibold">{PERSONAL_INFO.name}</span>. 
            Karmaşık sistemleri basit ve estetik dijital deneyimlere dönüştürüyorum.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects" 
              className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-bold transition-all shadow-2xl hover:shadow-blue-500/20"
            >
              Projeleri İncele
            </motion.a>

            <div className="flex items-center gap-4">
              <motion.a 
                whileHover={{ y: -3 }}
                href={PERSONAL_INFO.github} target="_blank"
                className="p-4 bg-white border border-slate-200 rounded-2xl text-slate-600 hover:text-blue-600 transition-colors shadow-sm"
              >
                <GitHubIcon />
              </motion.a>
              <motion.a 
                whileHover={{ y: -3 }}
                href={PERSONAL_INFO.linkedin} target="_blank"
                className="p-4 bg-white border border-slate-200 rounded-2xl text-slate-600 hover:text-blue-600 transition-colors shadow-sm"
              >
                <LinkedInIcon />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;