import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  // Veri güvenliği kontrolü
  if (!project) return null;

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative bg-white border border-slate-200 rounded-[2.5rem] p-8 transition-all hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden"
    >
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors" />

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-blue-50 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600 group-hover:text-blue-600"><path d="M2 11h20"/><path d="M2 17h20"/><path d="m18 8 4 4-4 4"/><path d="M17 5H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"/></svg>
          </div>
          
          <div className="flex gap-3">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
            )}
          </div>
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
          {project.title || "Başlıksız Proje"}
        </h3>
        
        <p className="text-slate-500 mb-6 leading-relaxed font-light">
          {project.description || "Açıklama girilmemiş."}
        </p>

        <div className="flex flex-wrap gap-2">
          {/* HATA BURADAYDI: Optional chaining (?.) ekleyerek güvenli hale getirdik */}
          {project.technologies?.map((tech, idx) => (
            <span 
              key={idx} 
              className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-lg group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;