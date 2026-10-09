import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { useTheme } from '../ThemeContext';
import { useLanguage } from '../LanguageContext';
import { sound } from '../utils/audio';
import ProjectCard from '../components/ProjectCard';

const ProjectsSection = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const data = PORTFOLIO_DATA[language] || PORTFOLIO_DATA.tr;

  const [selectedCategory, setSelectedCategory] = useState(data.categories[0]);

  // If language changed and selected category is out of bounds, reset to all
  const activeCategories = data.categories;
  const currentCategory = activeCategories.includes(selectedCategory)
    ? selectedCategory
    : activeCategories[0];

  const filteredProjects =
    currentCategory === activeCategories[0]
      ? data.projects
      : data.projects.filter((p) => p.category === currentCategory);

  const handleCategoryChange = (cat) => {
    sound.playClick();
    setSelectedCategory(cat);
  };

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-blue-500 font-mono font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-3 inline-block"
            >
              {data.ui.projectsHeaderTag}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight ${
                theme === 'light' ? 'text-slate-950' : 'text-white'
              }`}
            >
              {data.ui.projectsHeading1} <br />
              <span className="text-gradient">{data.ui.projectsHeading2}</span>
            </motion.h2>
          </div>

          <p className={`max-w-md text-sm sm:text-base font-light leading-relaxed ${
            theme === 'light' ? 'text-slate-600' : 'text-slate-400'
          }`}>
            {data.ui.projectsSub}
          </p>
        </div>

        {/* Category Filters (Touch-scrollable on mobile) */}
        <div className="flex gap-2 mb-10 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {activeCategories.map((cat, idx) => {
            const isSelected = currentCategory === cat;
            const count =
              idx === 0
                ? data.projects.length
                : data.projects.filter((p) => p.category === cat).length;

            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all active:scale-95 cursor-pointer flex items-center gap-2 border shrink-0 ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-500 shadow-[0_4px_20px_rgba(37,99,235,0.3)]'
                    : theme === 'light'
                    ? 'bg-white/80 border-slate-200 text-slate-600 hover:border-blue-300'
                    : 'bg-white/5 border-white/10 text-slate-300 hover:border-white/20'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-slate-400/20 text-slate-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default ProjectsSection;
