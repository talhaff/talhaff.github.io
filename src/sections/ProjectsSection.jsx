import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../data/portfolio';
import ProjectCard from "../components/ProjectCard";

const ProjectsSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-20">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-blue-600 font-bold tracking-widest uppercase text-sm">
            Seçilmiş İşler
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-extrabold mt-4 text-slate-900 tracking-tight">
            Mühendislik Çözümleri & <br /> Dijital Ürünler
          </motion.h2>
        </div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div key={index} variants={item}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;