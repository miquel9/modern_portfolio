import React, { useState } from 'react';
import { Project } from '../data/projects';
import { ArrowUpRight, Terminal, Check } from 'lucide-react';
import { NavarreteCalculator } from './interactive/NavarreteCalculator';
import { N8nSimulator } from './interactive/N8nSimulator';
import { RoboticsVisionSimulator } from './interactive/RoboticsVisionSimulator';
import { RunningTrackerSimulator } from './interactive/RunningTrackerSimulator';

interface Props {
  project: Project;
  index: number;
}

export const ProjectItem: React.FC<Props> = ({ project }) => {
  const [showSim, setShowSim] = useState(false);
  const [activeImg, setActiveImg] = useState(0);

  const renderSim = () => {
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
    <article className="taste-card p-6 sm:p-8 flex flex-col justify-between">
      <div>
        {/* Top meta */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06]">
          <span className="text-xs font-mono text-[#8a8d98]">
            {project.badge}
          </span>
          <span className="text-xs font-mono text-[#8a8d98]">
            {project.period}
          </span>
        </div>

        {/* Title and subtitle */}
        <h3 className="text-xl sm:text-2xl font-semibold text-[#f2f2f3] tracking-tight">
          {project.title}
        </h3>
        <p className="text-sm text-[#8a8d98] mt-1 mb-4">
          {project.subtitle}
        </p>

        <p className="text-sm text-[#d4d4d8] leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Visual Showcase: Fotografía real de la app enmarcada a tamaño completo */}
        <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0d0e12] mb-6">
          {project.images.length > 0 ? (
            <div>
              <img
                src={project.images[activeImg]}
                alt={project.title}
                className="w-full h-auto max-h-[380px] object-cover"
              />
              {project.images.length > 1 && (
                <div className="flex gap-2 p-2 bg-[#090a0d] border-t border-white/[0.06] justify-end">
                  {project.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImg(i)}
                      className={`text-[11px] font-mono px-2 py-0.5 rounded cursor-pointer transition-colors ${
                        activeImg === i
                          ? 'bg-white/20 text-white font-medium'
                          : 'text-[#8a8d98] hover:text-white'
                      }`}
                    >
                      Captura {i + 1}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="p-4 bg-[#090a0d]">
              <RoboticsVisionSimulator />
            </div>
          )}
        </div>

        {/* Key bullets */}
        <div className="space-y-2 mb-6">
          {project.highlights.map((h, i) => (
            <div key={i} className="text-xs text-[#8a8d98] flex items-start gap-2">
              <span className="text-white mt-0.5">·</span>
              <span>{h}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06] mb-4">
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono text-[#8a8d98] px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Simulador opcional discreto */}
        {project.interactiveType !== 'robotics-vision' && (
          <button
            onClick={() => setShowSim(!showSim)}
            className="w-full text-xs font-mono text-center text-[#8a8d98] hover:text-white py-2 rounded border border-white/[0.08] hover:border-white/20 transition-all cursor-pointer"
          >
            {showSim ? 'Ocultar prueba simulada' : 'Abrir prueba simulada en vivo'}
          </button>
        )}

        {showSim && (
          <div className="mt-4 pt-4 border-t border-white/[0.06]">
            {renderSim()}
          </div>
        )}
      </div>
    </article>
  );
};
