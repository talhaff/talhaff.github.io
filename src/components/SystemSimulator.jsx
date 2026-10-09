import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { sound } from '../utils/audio';
import { useTheme } from '../ThemeContext';
import { useLanguage } from '../LanguageContext';

const SystemSimulator = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const data = PORTFOLIO_DATA[language] || PORTFOLIO_DATA.tr;

  const endpoints = data.simEndpoints;
  const [activeTab, setActiveTab] = useState(endpoints[0]);
  const [isRunning, setIsRunning] = useState(false);
  const [activeStep, setActiveStep] = useState(3);
  const [responseLog, setResponseLog] = useState(endpoints[0].resPayload);

  // Sync endpoint selection when language changes
  useEffect(() => {
    const matched = endpoints.find(e => e.id === activeTab.id) || endpoints[0];
    setActiveTab(matched);
    setResponseLog(matched.resPayload);
  }, [language]);

  const handleRunSimulation = (endpoint) => {
    sound.playClick();
    setActiveTab(endpoint);
    setIsRunning(true);
    setActiveStep(0);
    setResponseLog(null);

    setTimeout(() => {
      setActiveStep(1);
      sound.playKeypress();
    }, 200);

    setTimeout(() => {
      setActiveStep(2);
      sound.playKeypress();
    }, 450);

    setTimeout(() => {
      setActiveStep(3);
      setIsRunning(false);
      setResponseLog(endpoint.resPayload);
      sound.playSuccess();
    }, 700);
  };

  const isLight = theme === 'light';

  return (
    <div className={`w-full rounded-[2.5rem] border overflow-hidden transition-all duration-500 shadow-2xl relative ${
      isLight
        ? 'border-slate-300/80 bg-white shadow-[0_20px_50px_rgba(59,130,246,0.08)]'
        : 'border-white/10 bg-slate-950/80 shadow-[0_0_60px_rgba(59,130,246,0.12)]'
    }`}>
      
      {/* Simulation Header Bar */}
      <div className={`flex flex-wrap items-center justify-between px-6 py-4 border-b gap-3 transition-colors ${
        isLight
          ? 'border-slate-200 bg-slate-100/90 text-slate-700'
          : 'border-white/10 bg-slate-900/60 text-slate-300'
      }`}>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-sm" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-sm" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-sm" />
          </div>
          <span className={`text-xs font-mono font-bold tracking-wider ml-2 ${
            isLight ? 'text-slate-700' : 'text-slate-300'
          }`}>
            {data.ui.simTitle}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </span>
          <span className="text-[10px] font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">
            Interactive Engine
          </span>
        </div>
      </div>

      {/* Simulator Selector Tabs */}
      <div className={`p-5 border-b transition-colors ${
        isLight
          ? 'border-slate-200 bg-slate-50/80'
          : 'border-white/5 bg-slate-900/30'
      }`}>
        <p className={`text-[11px] font-mono uppercase tracking-wider mb-3 font-semibold ${
          isLight ? 'text-slate-500' : 'text-slate-400'
        }`}>
          {data.ui.simInstruction}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {endpoints.map((ep) => {
            const isSelected = activeTab.id === ep.id;
            return (
              <button
                key={ep.id}
                onClick={() => handleRunSimulation(ep)}
                className={`flex flex-col text-left p-3.5 rounded-2xl border font-mono transition-all active:scale-98 cursor-pointer ${
                  isSelected
                    ? isLight
                      ? 'border-blue-500 bg-blue-50 text-blue-900 shadow-md shadow-blue-500/10'
                      : 'border-blue-500/80 bg-blue-500/15 text-blue-300 shadow-[0_0_20px_rgba(59,130,246,0.2)]'
                    : isLight
                    ? 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-100/50'
                    : 'border-white/5 bg-white/5 text-slate-300 hover:border-white/20 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md ${
                    ep.method === 'WS'
                      ? 'bg-purple-500/15 text-purple-600 dark:text-purple-300'
                      : 'bg-blue-500/15 text-blue-600 dark:text-blue-300'
                  }`}>
                    {ep.method}
                  </span>
                  <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-extrabold">
                    {ep.latency}
                  </span>
                </div>
                <span className={`text-xs font-bold truncate ${
                  isSelected
                    ? isLight ? 'text-blue-900 font-black' : 'text-white font-black'
                    : isLight ? 'text-slate-800' : 'text-slate-200'
                }`}>
                  {ep.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Node Flow Visualization */}
      <div className={`p-6 ${isLight ? 'bg-white' : 'bg-transparent'}`}>
        <div className="mb-4 flex items-center justify-between">
          <span className={`text-[11px] font-mono uppercase tracking-wider font-semibold ${
            isLight ? 'text-slate-600' : 'text-slate-400'
          }`}>
            {data.ui.simPipelineTitle}
          </span>
          <span className="text-[11px] font-mono text-blue-600 dark:text-blue-400 font-bold">
            {isRunning ? data.ui.simProcessing : data.ui.simCompleted}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {activeTab.nodes.map((node, idx) => {
            const isReached = activeStep >= idx;
            const isCurrent = activeStep === idx && isRunning;
            return (
              <motion.div
                key={node}
                animate={{
                  scale: isCurrent ? 1.05 : 1,
                  borderColor: isCurrent
                    ? '#2563eb'
                    : isReached
                    ? isLight ? 'rgba(37, 99, 235, 0.4)' : 'rgba(59, 130, 246, 0.4)'
                    : isLight ? 'rgba(226, 232, 240, 1)' : 'rgba(255, 255, 255, 0.05)'
                }}
                className={`p-3.5 rounded-2xl border text-center font-mono relative overflow-hidden transition-all ${
                  isReached
                    ? isLight
                      ? 'bg-blue-50/80 text-blue-950 font-bold shadow-sm'
                      : 'bg-blue-500/15 text-white font-bold'
                    : isLight
                    ? 'bg-slate-50 text-slate-400'
                    : 'bg-white/5 text-slate-500'
                }`}
              >
                <div className={`text-[9px] uppercase tracking-widest mb-1 font-bold ${
                  isReached ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400'
                }`}>
                  {language === 'en' ? `NODE 0${idx + 1}` : `DÜĞÜM 0${idx + 1}`}
                </div>
                <div className={`text-xs truncate ${
                  isReached
                    ? isLight ? 'text-slate-900 font-black' : 'text-white font-bold'
                    : isLight ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  {node}
                </div>
                {isCurrent && (
                  <div className="absolute inset-0 bg-blue-500/20 animate-pulse pointer-events-none" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* High-Contrast Code Windows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
          {/* Request Stream */}
          <div className="bg-[#0b1120] rounded-2xl p-5 border border-slate-800 shadow-xl text-slate-100">
            <div className="flex justify-between items-center mb-3 pb-2.5 border-b border-white/10 text-[10px]">
              <span className="text-blue-400 font-bold uppercase tracking-wider">{data.ui.simReqTitle}</span>
              <span className="text-slate-400 bg-white/5 px-2 py-0.5 rounded font-mono">{activeTab.path}</span>
            </div>
            <pre className="text-slate-200 text-[11px] overflow-x-auto leading-relaxed font-mono">
              {JSON.stringify(activeTab.reqPayload, null, 2)}
            </pre>
          </div>

          {/* Response Stream */}
          <div className="bg-[#0b1120] rounded-2xl p-5 border border-blue-500/30 shadow-xl text-slate-100 relative">
            <div className="flex justify-between items-center mb-3 pb-2.5 border-b border-white/10 text-[10px]">
              <span className="text-emerald-400 font-bold uppercase tracking-wider">{data.ui.simResTitle}</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold font-mono">
                HTTP {activeTab.status}
              </span>
            </div>
            {isRunning ? (
              <div className="h-32 flex items-center justify-center text-blue-400 animate-pulse text-xs">
                {language === 'en' ? 'Calculating through pipeline...' : 'Pipeline üzerinden veri hesaplanıyor...'}
              </div>
            ) : (
              <pre className="text-emerald-400 text-[11px] overflow-x-auto leading-relaxed font-mono">
                {JSON.stringify(responseLog, null, 2)}
              </pre>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default SystemSimulator;
