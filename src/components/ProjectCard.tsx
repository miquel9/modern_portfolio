import { useState } from 'react';
import { Project } from '../data/projects';
import { NavarreteCalculator } from './interactive/NavarreteCalculator';
import { N8nSimulator } from './interactive/N8nSimulator';
import { RoboticsVisionSimulator } from './interactive/RoboticsVisionSimulator';
import { RunningTrackerSimulator } from './interactive/RunningTrackerSimulator';
import { Terminal, Sparkles, Image as ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<Props> = ({ project }) => {
  const [activeTab, setActiveTab] = useState<'interactive' | 'screenshots'>(
    project.interactiveType ? 'interactive' : 'screenshots'
  );
  const [selectedImgIndex, setSelectedImgIndex] = useState<number>(0);

  const renderSimulator = () => {
    switch (project.interactiveType) {
      case 'navarrete-calc':
        return <NavarreteCalculator />;
      case 'n8n-simulator':
        return <N8nSimulator />;
      case 'robotics-vision':
        return <RoboticsVisionSimulator />;
      case 'running-tracker':
        return <RunningTrackerSimulator />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-3xl bg-[#0c0e15]/80 backdrop-blur-xl border border-slate-800/80 hover:border-slate-700/80 p-6 md:p-8 transition-all duration-300 shadow-2xl hover:shadow-blue-500/5 overflow-hidden"
    >
      {/* Luz ambiental sutil */}
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/15 transition-all" />

      {/* Header del proyecto */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-full">
            {project.badge}
          </span>
          <span className="text-xs text-slate-500 font-mono">{project.period}</span>
        </div>

        {/* Selector de Vista: Simulador interactivo / Capturas Reales */}
        {project.images.length > 0 && (
          <div className="flex items-center bg-[#141824] p-1 rounded-xl border border-slate-800 text-xs">
            <button
              onClick={() => setActiveTab('interactive')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-medium transition-all cursor-pointer ${
                activeTab === 'interactive'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              Simulador Interactivo
            </button>
            <button
              onClick={() => setActiveTab('screenshots')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-medium transition-all cursor-pointer ${
                activeTab === 'screenshots'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              Capturas Reales ({project.images.length})
            </button>
          </div>
        )}
      </div>

      <div className="mb-4">
        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-1">
          {project.title}
        </h3>
        <p className="text-sm font-medium text-blue-300/80">{project.subtitle}</p>
      </div>

      <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-4xl">
        {project.description}
      </p>

      {/* Tags de tecnología */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag: string) => (
          <span
            key={tag}
            className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* ÁREA INTERACTIVA / CAPTURAS */}
      <div className="mt-6 mb-6">
        <AnimatePresence mode="wait">
          {activeTab === 'interactive' ? (
            <motion.div
              key="interactive"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
            >
              {renderSimulator()}
            </motion.div>
          ) : (
            <motion.div
              key="screenshots"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="space-y-4"
            >
              <div className="rounded-2xl overflow-hidden border border-slate-800 bg-[#090b10] shadow-2xl">
                <img
                  src={project.images[selectedImgIndex]}
                  alt={`${project.title} screenshot`}
                  className="w-full h-auto max-h-[500px] object-contain mx-auto"
                />
              </div>

              {project.images.length > 1 && (
                <div className="flex gap-2 justify-center">
                  {project.images.map((img: string, i: number) => (
                    <button
                      key={img}
                      onClick={() => setSelectedImgIndex(i)}
                      className={`h-16 w-28 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                        selectedImgIndex === i
                          ? 'border-blue-500 scale-105'
                          : 'border-slate-800 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Highlights / Puntos clave */}
      <div className="pt-4 border-t border-slate-800/80">
        <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          Hitos Técnicos & Arquitectura
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {project.highlights.map((h: string, i: number) => (
            <div
              key={i}
              className="text-xs text-slate-300/90 bg-slate-900/50 border border-slate-800/60 p-3 rounded-xl flex items-start gap-2"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
              <span>{h}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
