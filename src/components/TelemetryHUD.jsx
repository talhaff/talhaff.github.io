import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sound } from '../utils/audio';
import { useTheme } from '../ThemeContext';
import { useLanguage } from '../LanguageContext';

const TelemetryHUD = ({ onOpenTerminal }) => {
  const { theme } = useTheme();
  const { isEn } = useLanguage();
  const [fps, setFps] = useState(60);
  const [ping, setPing] = useState(24);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [uptimeSeconds, setUptimeSeconds] = useState(0);

  // Real FPS Calculation
  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animationFrameId;

    const calcFPS = (currentTime) => {
      frameCount++;
      if (currentTime - lastTime >= 1000) {
        setFps(Math.round((frameCount * 1000) / (currentTime - lastTime)));
        frameCount = 0;
        lastTime = currentTime;
      }
      animationFrameId = requestAnimationFrame(calcFPS);
    };

    animationFrameId = requestAnimationFrame(calcFPS);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Simulating realistic micro-latency jitter
  useEffect(() => {
    const interval = setInterval(() => {
      setPing(Math.floor(18 + Math.random() * 12));
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Session Uptime
  useEffect(() => {
    const timer = setInterval(() => {
      setUptimeSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatUptime = (secs) => {
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = (secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const handleSoundToggle = (e) => {
    e.stopPropagation();
    const newState = sound.toggleSound();
    setSoundEnabled(newState);
    if (newState) {
      sound.playToggle();
    }
  };

  return (
    <div className="fixed bottom-3 left-3 sm:bottom-6 sm:left-6 z-[90] font-mono text-[11px] select-none max-w-[calc(100vw-24px)]">
      <motion.div
        layout
        className={`glass rounded-2xl border transition-all duration-300 shadow-2xl backdrop-blur-xl ${
          theme === 'light'
            ? 'border-slate-200/80 bg-white/80 text-slate-800 shadow-slate-300/40'
            : 'border-white/10 bg-slate-950/80 text-slate-200 shadow-black/80'
        }`}
      >
        {/* Main Bar */}
        <div className="flex items-center gap-3 px-3.5 py-2">
          {/* Status Indicator */}
          <div className="flex items-center gap-1.5">
            <img src="/favicon-32x32.png" alt="Logo" className="w-3.5 h-3.5 rounded-full border border-blue-500/30 shrink-0" />
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-bold text-[10px] tracking-wider text-emerald-500 uppercase">SYS:OK</span>
          </div>

          <div className="h-3 w-[1px] bg-slate-400/20" />

          {/* FPS & Latency */}
          <div className="flex items-center gap-2 text-[10px] text-slate-500 dark:text-slate-400">
            <span>
              <strong className="text-blue-500 font-bold">{fps}</strong> FPS
            </span>
            <span>•</span>
            <span>
              <strong className="text-purple-500 font-bold">{ping}ms</strong>
            </span>
          </div>

          <div className="h-3 w-[1px] bg-slate-400/20" />

          {/* Terminal Launcher */}
          <button
            onClick={() => {
              sound.playClick();
              onOpenTerminal();
            }}
            className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/20 transition-all active:scale-95 cursor-pointer"
            title={isEn ? "Open Developer Terminal (Ctrl + K)" : "Geliştirici Terminalini Aç (Ctrl + K)"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
            <span className="font-bold tracking-wider text-[10px]">CLI</span>
            <kbd className="hidden sm:inline-block px-1 text-[9px] bg-blue-500/20 rounded font-sans">⌘K</kbd>
          </button>

          {/* Sound Mute/Unmute */}
          <button
            onClick={handleSoundToggle}
            className={`p-1.5 rounded-lg border transition-all active:scale-95 cursor-pointer ${
              soundEnabled
                ? 'text-blue-500 border-blue-500/20 bg-blue-500/5 hover:bg-blue-500/15'
                : 'text-slate-400 border-slate-300 dark:border-slate-700 bg-transparent hover:text-slate-600'
            }`}
            title={soundEnabled ? (isEn ? "Mute Sounds" : "Sesleri Kapat") : (isEn ? "Unmute Sounds" : "Sesleri Aç")}
          >
            {soundEnabled ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
            )}
          </button>

          {/* Expand Details Trigger */}
          <button
            onClick={() => {
              sound.playClick();
              setIsExpanded(!isExpanded);
            }}
            className="text-slate-400 hover:text-blue-500 transition-colors p-1 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            >
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </button>
        </div>

        {/* Expanded Panel: Extra Engineering Stats */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-slate-400/10 px-4 py-3 text-[10px] space-y-1.5 text-slate-500 dark:text-slate-400 overflow-hidden"
            >
              <div className="flex justify-between">
                <span>Kernel / Stack:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">React 19 • Vite 8</span>
              </div>
              <div className="flex justify-between">
                <span>Render Engine:</span>
                <span className="font-semibold text-blue-500">Tailwind 4 + Framer</span>
              </div>
              <div className="flex justify-between">
                <span>{isEn ? "Session Time:" : "Oturum Süresi:"}</span>
                <span className="font-semibold text-purple-400">{formatUptime(uptimeSeconds)}</span>
              </div>
              <div className="flex justify-between">
                <span>{isEn ? "Active Status:" : "Aktif Durum:"}</span>
                <span className="font-semibold text-emerald-400">{isEn ? "Open to Opportunities" : "Fırsatlara Açık"}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default TelemetryHUD;
