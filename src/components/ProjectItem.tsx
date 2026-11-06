import React, { useState } from 'react';
import { Project } from '../data/projects';
import { ExternalLink, Terminal, Sparkles, ChevronRight, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Opcional: Mini prueba interactiva accesible bajo demanda
import { NavarreteCalculator } from './interactive/NavarreteCalculator';
import { N8nSimulator } from './interactive/N8nSimulator';
import { RoboticsVisionSimulator } from './interactive/RoboticsVisionSimulator';
import { RunningTrackerSimulator } from './interactive/RunningTrackerSimulator';

interface Props {
  project: Project;
  index: number;
}

export const ProjectItem: React.FC<Props> = ({ project, index }) => {
  const [showDemo, setShowDemo] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const isReverse = index % 2 !== 0;

  const renderMiniSimulator = () => {
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
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="border-b border-white/[0.08] pb-16 md:pb-24 last:border-b-0"
    >
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
        isReverse ? 'lg:grid-flow-dense' : ''
      }`}>
        {/* Columna de Texto y Explicación */}
        <div className={`lg:col-span-5 space-y-4 ${isReverse ? 'lg:col-start-8' : ''}`}>
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-mono font-semibold text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded border border-blue-500/20">
              {project.badge}
            </span>
            <span className="text-xs text-slate-500 font-mono">{project.period}</span>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              {project.title}
            </h3>
            <p className="text-sm font-medium text-slate-400 mt-1">
              {project.subtitle}
            </p>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            {project.description}
          </p>

          {/* Hitos en lista limpia */}
          <ul className="space-y-2 pt-1 text-xs text-slate-400">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          {/* Tecnologías */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="text-xs font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-400 border border-white/[0.06]"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Botón para abrir el simulador si el usuario desea probar */}
          <div className="pt-2">
            <button
              onClick={() => setShowDemo(!showDemo)}
              className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 px-3.5 py-2 rounded-lg transition-colors cursor-pointer"
            >
              <Terminal className="w-3.5 h-3.5" />
              {showDemo ? 'Ocultar Simulador' : 'Probar Simulador en Vivo'}
            </button>
          </div>
        </div>

        {/* Columna Visual: Fotografía / Captura de Alta Fidelidad */}
        <div className={`lg:col-span-7 ${isReverse ? 'lg:col-start-1' : ''}`}>
          <div className="bg-[#10131d] border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative group">
            {project.images.length > 0 ? (
              <div className="relative">
                {/* Visual principal */}
                <div className="overflow-hidden bg-[#0a0c12]">
                  <img
                    src={project.images[activeImageIndex]}
                    alt={project.title}
                    className="w-full h-auto object-cover max-h-[440px] transform transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                {/* Si hay más de una foto, selector elegante en la esquina inferior */}
                {project.images.length > 1 && (
                  <div className="absolute bottom-3 right-3 flex gap-1.5 bg-black/70 backdrop-blur-md p-1 rounded-lg border border-white/10">
                    {project.images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImageIndex(i)}
                        className={`text-[10px] font-mono px-2 py-0.5 rounded transition-all cursor-pointer ${
                          activeImageIndex === i
                            ? 'bg-blue-600 text-white'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Vista 0{i + 1}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              /* En caso de Robótica sin captura externa, mostramos el visual cinemático elegante */
              <div className="p-6 md:p-8 bg-[#0a0d17] min-h-[300px] flex flex-col justify-center items-center text-center">
                <RoboticsVisionSimulator />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mini Simulador desplegable si el usuario pulsa en probarlo */}
      <AnimatePresence>
        {showDemo && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6 overflow-hidden"
          >
            <div className="pt-4 border-t border-white/10">
              {renderMiniSimulator()}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
};
