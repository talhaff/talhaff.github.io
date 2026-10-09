import React, { useState, useEffect } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import ProjectsSection from './sections/ProjectsSection';
import Skills from './sections/Skills';
import About from './sections/About';
import Contact from './sections/Contact';
import BackgroundEffects from './components/BackgroundEffects';
import CustomCursor from './components/CustomCursor';
import TelemetryHUD from './components/TelemetryHUD';
import CommandPalette from './components/CommandPalette';
import { ThemeProvider, useTheme } from './ThemeContext';
import { LanguageProvider, useLanguage } from './LanguageContext';
import { sound } from './utils/audio';

function MainApp() {
  const { theme } = useTheme();
  const { isEn } = useLanguage();
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  // Global Ctrl+K / Cmd+K Hotkey Listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        sound.playClick();
        setIsTerminalOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div
      className={`relative min-h-screen selection:bg-blue-500/30 font-sans transition-colors duration-500 ${
        theme === 'dark' ? 'selection:text-white bg-[#020617] text-slate-100' : 'selection:text-slate-900 bg-[#f8fafc] text-slate-900'
      }`}
    >
      {/* High-End Magnetic Cursor */}
      <CustomCursor />

      {/* Futuristic Background Mesh & Particles */}
      <BackgroundEffects />

      {/* Global Interactive Navigation */}
      <Navbar onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenTerminal={() => setIsTerminalOpen(true)} />
        <ProjectsSection />
        <Skills />
        <About />
        <Contact onOpenTerminal={() => setIsTerminalOpen(true)} />
      </main>

      {/* Live Telemetry & Quick Action HUD */}
      <TelemetryHUD onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* Developer CLI / Command Palette */}
      <CommandPalette
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />

      {/* Senior Engineer Footer */}
      <footer
        className={`relative z-10 py-16 text-center text-sm border-t backdrop-blur-md transition-colors duration-500 ${
          theme === 'light'
            ? 'bg-white/60 border-slate-200 text-slate-500'
            : 'bg-slate-950/60 border-white/5 text-slate-400'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 font-mono text-xs">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              <span className="font-bold text-slate-700 dark:text-slate-300">Talha Özcan</span>
              <span>— {isEn ? "Computer Engineer" : "Bilgisayar Mühendisi"}</span>
            </div>

            <div className="flex items-center gap-6 text-[11px] text-slate-500">
              <a href="https://github.com/talhaff" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/talha-özcan" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors">LinkedIn</a>
              <button onClick={() => setIsTerminalOpen(true)} className="hover:text-blue-500 transition-colors cursor-pointer">
                {isEn ? "Terminal (⌘K)" : "Terminal (⌘K)"}
              </button>
            </div>
          </div>

          <p className="opacity-60">
            © {new Date().getFullYear()} Talha Özcan. {isEn ? "All Rights Reserved. • High-Performance Web Engineering." : "Tüm Hakları Saklıdır. • High-Performance Web Engineering."}
          </p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}

export default App;