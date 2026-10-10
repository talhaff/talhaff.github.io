import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sound } from '../utils/audio';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { useTheme } from '../ThemeContext';
import { useLanguage } from '../LanguageContext';

const CommandPalette = ({ isOpen, onClose }) => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, isEn } = useLanguage();
  const data = PORTFOLIO_DATA[language] || PORTFOLIO_DATA.tr;

  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    {
      type: 'system',
      content: isEn
        ? 'Talha Özcan Terminal v2.5.0 (x86_64-talha-cloud)\nType "help" for a list of commands or click recommendation chips below.'
        : 'Talha Özcan Terminal v2.5.0 (x86_64-talha-cloud)\nKomut listesi için "help" yazın veya aşağıdaki butonlara tıklayın.',
    },
  ]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const terminalEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      sound.playSuccess();
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdText) => {
    const trimmed = cmdText.trim();
    if (!trimmed) return;

    sound.playClick();
    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    const newHistory = [...history, { type: 'user', content: `$ ${trimmed}` }];
    const parts = trimmed.split(' ');
    const mainCmd = parts[0].toLowerCase();
    const arg = parts.slice(1).join(' ').toLowerCase();

    switch (mainCmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          content: isEn
            ? `  help                 : List all available commands\n  projects             : Display engineering projects & architectures\n  skills               : Detail technical stack and domain matrix\n  about                : Education, journey and background overview\n  contact              : Direct email and social networks\n  cat resume.json      : Print structured JSON resume payload\n  sudo hire talha      : Initiate recruitment / project dispatch\n  lang [tr|en]         : Switch website language dynamically\n  theme [dark|light]   : Toggle dark/light theme\n  clear                : Clear terminal screen\n  exit                 : Close terminal window`
            : `  help                 : Mevcut tüm komutları listeler\n  projects             : Tüm mühendislik projelerini ve mimarilerini gösterir\n  skills               : Teknoloji yığınını ve araç setini detaylandırır\n  about                : Talha Özcan hakkında eğitim ve kariyer dökümü verir\n  contact              : İletişim kanallarını ve doğrudan e-posta linkini listeler\n  cat resume.json      : Yapılandırılmış JSON CV özetini ekrana döker\n  sudo hire talha      : Özel teklif sürecini başlatır\n  lang [tr|en]         : Site dilini dinamik olarak değiştirir\n  theme [dark|light]   : Site temasını dinamik değiştirir\n  clear                : Terminal ekranını temizler\n  exit                 : Terminali kapatır`,
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          content: data.projects.map(
            (p) => `[${p.id}] ${p.title}\n    Tech: ${p.tags.join(', ')}\n    Repo: ${p.github || 'Private'}\n    Desc: ${p.description}\n`
          ).join('\n'),
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          content: data.skills.map(
            (s) => `• ${s.category.toUpperCase()}:\n   ${s.items.map(i => i.name).join('  |  ')}`
          ).join('\n\n'),
        });
        break;

      case 'about':
        newHistory.push({
          type: 'output',
          content: isEn
            ? `Name      : ${data.personal.name}\nTitle     : ${data.personal.title}\nEducation : ${data.personal.university} (GPA: ${data.personal.gpa} - Graduated)\nExperience: Senkroon Software (Software Developer Intern - Completed)\nStatus    : Open to Full-time / Remote opportunities\nSummary   : ${data.personal.bio}`
            : `İsim      : ${data.personal.name}\nÜnvan     : ${data.personal.title}\nEğitim    : ${data.personal.university} (GPA: ${data.personal.gpa} - Mezun)\nDeneyim   : Senkroon Yazılım (Staj Tamamlandı)\nDurum     : Yeni fırsatlara ve projelere açık\nÖzet      : ${data.personal.bio}`,
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          content: `Email    : ${data.personal.email}\nLinkedIn : ${data.personal.linkedin}\nGitHub   : ${data.personal.github}`,
        });
        break;

      case 'cat':
        if (arg === 'resume.json' || arg === 'resume') {
          newHistory.push({
            type: 'json',
            content: JSON.stringify(
              {
                developer: data.personal.name,
                role: data.personal.title,
                status: "Open to Full-Time / Remote Opportunities",
                education: {
                  school: data.personal.university,
                  degree: "Computer Engineering (B.Sc.)",
                  gpa: "3.25 / 4.00",
                  status: "Graduated",
                },
                internship_experience: {
                  company: 'Senkroon Software',
                  role: 'Software Developer Intern (Completed)',
                  focus: ['Industrial ERP Systems', 'Cost Analysis Platform', 'Fullstack Architecture'],
                },
                core_competencies: [
                  'Distributed Systems',
                  'Spring Boot & Node.js Backends',
                  'React & React Native',
                  'PostgreSQL / Query Optimization',
                ],
                contact: {
                  email: data.personal.email,
                  github: data.personal.github,
                  linkedin: data.personal.linkedin,
                },
              },
              null,
              2
            ),
          });
        } else {
          newHistory.push({
            type: 'error',
            content: isEn ? `cat: ${arg}: File not found. Try: "cat resume.json"` : `cat: ${arg}: Dosya bulunamadı. Deneyin: "cat resume.json"`,
          });
        }
        break;

      case 'sudo':
        if (arg.includes('hire')) {
          newHistory.push({
            type: 'success',
            content: isEn
              ? `[ACCESS GRANTED] Great move! Let's connect with Talha Özcan.\n👉 Direct Email: ${data.personal.email}\n👉 LinkedIn: ${data.personal.linkedin}`
              : `[ACCESS GRANTED] Tebrikler! Talha Özcan ile tanışmak ve ekibinize katmak için harika bir adım.\n👉 Doğrudan e-posta gönderin: ${data.personal.email}\n👉 LinkedIn üzerinden yazın: ${data.personal.linkedin}`,
          });
        } else {
          newHistory.push({
            type: 'output',
            content: isEn ? `sudo: ${arg}: permission granted but command undefined. Try 'sudo hire talha'.` : `sudo: ${arg}: yetki onaylandı ancak komut tanımlı değil. 'sudo hire talha' deneyin.`,
          });
        }
        break;

      case 'lang':
        if (arg === 'en' || arg === 'tr') {
          setLanguage(arg);
          newHistory.push({ type: 'success', content: `Language switched to ${arg.toUpperCase()}.` });
        } else {
          const next = language === 'tr' ? 'en' : 'tr';
          setLanguage(next);
          newHistory.push({ type: 'success', content: `Language toggled to ${next.toUpperCase()}.` });
        }
        break;

      case 'theme':
        if (arg === 'dark' || arg === 'light') {
          if (theme !== arg) toggleTheme();
          newHistory.push({ type: 'success', content: `Theme set to "${arg}".` });
        } else {
          toggleTheme();
          newHistory.push({ type: 'success', content: 'Theme toggled.' });
        }
        break;

      case 'ping':
        newHistory.push({
          type: 'output',
          content: `PING senkroon.talha-cloud.internal (10.0.4.21): 56 data bytes\n64 bytes from 10.0.4.21: icmp_seq=0 ttl=64 time=18.42 ms\n64 bytes from 10.0.4.21: icmp_seq=1 ttl=64 time=21.15 ms\n--- ping statistics ---\n2 packets transmitted, 2 received, 0% packet loss, avg = 19.78ms`,
        });
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        return;

      default:
        newHistory.push({
          type: 'error',
          content: isEn
            ? `Command not found: "${trimmed}". Type "help" for a list of commands.`
            : `Komut bulunamadı: "${trimmed}". Tüm komutları görmek için "help" yazın.`,
        });
        break;
    }

    setHistory(newHistory);
    setInput('');
  };

  const handleKeyDown = (e) => {
    sound.playKeypress();

    if (e.key === 'Enter') {
      handleCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIndex);
        setInput(commandHistory[nextIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIndex = historyIndex + 1;
        if (nextIndex < commandHistory.length) {
          setHistoryIndex(nextIndex);
          setInput(commandHistory[nextIndex]);
        } else {
          setHistoryIndex(-1);
          setInput('');
        }
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl"
          />

          {/* Terminal Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl max-h-[85vh] flex flex-col rounded-3xl overflow-hidden border border-blue-500/30 bg-slate-950/95 text-slate-100 shadow-[0_0_80px_rgba(59,130,246,0.2)] font-mono z-10"
          >
            {/* Window Header */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-slate-900/90 border-b border-white/10 select-none">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <button onClick={onClose} className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="ml-3 flex items-center gap-2">
                  <img src="/favicon-32x32.png" alt="Logo" className="w-4 h-4 rounded-full border border-blue-400/40" />
                  <span className="text-xs font-bold text-slate-400 tracking-wider">talha@cloud-dev: ~</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[10px] text-slate-400">
                <span className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-white/5 border border-white/10">{isEn ? 'ESC = Close' : 'ESC = Kapat'}</span>
                <span className="px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30 font-bold">CLI v2.5 [{language.toUpperCase()}]</span>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="flex-1 p-5 overflow-y-auto space-y-3 text-xs sm:text-sm leading-relaxed scrollbar-thin scrollbar-thumb-blue-500/20">
              {history.map((item, index) => (
                <div key={index} className="space-y-1">
                  {item.type === 'user' ? (
                    <p className="text-emerald-400 font-bold">{item.content}</p>
                  ) : item.type === 'error' ? (
                    <p className="text-red-400 whitespace-pre-wrap">{item.content}</p>
                  ) : item.type === 'success' ? (
                    <p className="text-emerald-300 font-semibold whitespace-pre-wrap">{item.content}</p>
                  ) : item.type === 'json' ? (
                    <pre className="text-blue-300 bg-blue-950/40 p-3 rounded-xl border border-blue-500/20 overflow-x-auto text-[11px]">
                      {item.content}
                    </pre>
                  ) : (
                    <pre className="text-slate-300 whitespace-pre-wrap font-mono text-xs">{item.content}</pre>
                  )}
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* Quick Action Chips (Touch-friendly horizontal scroll on mobile) */}
            <div className="px-4 sm:px-5 py-2.5 bg-slate-900/60 border-t border-white/5 flex gap-2 text-[11px] items-center overflow-x-auto scrollbar-none">
              <span className="text-slate-500 text-[10px] uppercase font-bold tracking-wider shrink-0">{isEn ? 'Quick Chips:' : 'Öneriler:'}</span>
              {['help', 'projects', 'cat resume.json', 'sudo hire talha', 'skills', 'contact'].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => handleCommand(cmd)}
                  className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-blue-500/20 text-slate-300 hover:text-blue-300 border border-white/10 hover:border-blue-500/30 transition-all cursor-pointer shrink-0"
                >
                  {cmd}
                </button>
              ))}
            </div>

            {/* Input Line (16px base font on mobile to prevent iOS Safari auto-zoom) */}
            <div className="flex items-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 bg-slate-900/90 border-t border-white/10">
              <span className="text-emerald-400 font-bold text-sm">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={isEn ? "Type a command (e.g. projects, help)..." : "Komut yazın (örn: projects, help)..."}
                className="flex-1 bg-transparent text-white placeholder-slate-500 focus:outline-none font-mono text-base sm:text-sm"
              />
              <button
                onClick={() => handleCommand(input)}
                className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-lg transition-all active:scale-95 cursor-pointer shrink-0"
              >
                {isEn ? "Execute" : "Çalıştır"}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
