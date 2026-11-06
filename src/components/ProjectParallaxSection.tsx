import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Project } from '../data/projects';
import { ExternalLink, Terminal, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface Props {
  project: Project;
  index: number;
}

export const ProjectParallaxSection: React.FC<Props> = ({ project, index }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Vinculamos la animación al avance del scroll en esta sección
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  // Parallax multi-capa:
  // El texto y la imagen se mueven a velocidades y escalas diferentes
  const isEven = index % 2 === 0;
  
  // Transformaciones sincronizadas con el scroll
  const yImage = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const scaleImage = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1.02, 0.96]);
  const opacityImage = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.5]);

  const yText = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const opacityText = useTransform(scrollYProgress, [0, 0.25, 0.85, 1], [0.3, 1, 1, 0.4]);

  return (
    <div
      ref={sectionRef}
      className="relative min-h-[90vh] sm:min-h-[105vh] flex items-center justify-center py-16 px-4 sm:px-8 border-b border-white/[0.06] last:border-b-0 overflow-hidden"
    >
      {/* Luz ambiental sutil de fondo vinculada al índice */}
      <div className={`absolute top-1/2 ${isEven ? 'right-0' : 'left-0'} -translate-y-1/2 w-96 h-96 rounded-full blur-[120px] pointer-events-none opacity-20 ${
        index === 0 ? 'bg-cyan-500' : index === 1 ? 'bg-orange-500' : index === 2 ? 'bg-blue-500' : 'bg-emerald-500'
      }`} />

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        
        {/* Columna de Texto con Parallax y Reveal */}
        <motion.div
          style={{ y: yText, opacity: opacityText }}
          className={`lg:col-span-5 space-y-5 ${
            isEven ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-white/[0.06] text-white border border-white/10">
              0{index + 1}
            </span>
            <span className="text-xs font-mono text-slate-400">
              {project.badge}
            </span>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-[1.15]">
              {project.title}
            </h2>
            <p className="text-sm font-medium text-cyan-300 mt-1">
              {project.subtitle}
            </p>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            {project.description}
          </p>

          {/* Highlights en lista */}
          <div className="space-y-2 pt-2">
            {project.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{h}</span>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="text-xs font-mono px-2.5 py-1 rounded bg-[#10141f] text-slate-300 border border-white/10"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Columna Visual con Parallax de Escala y Desplazamiento */}
        <motion.div
          style={{
            y: yImage,
            scale: scaleImage,
            opacity: opacityImage
          }}
          className={`lg:col-span-7 ${
            isEven ? 'lg:order-2' : 'lg:order-1'
          }`}
        >
          <div className="bg-[#0b0e15] border border-white/15 rounded-2xl sm:rounded-3xl p-2 sm:p-3 shadow-2xl overflow-hidden group">
            {project.images.length > 0 ? (
              <div className="overflow-hidden rounded-xl sm:rounded-2xl bg-[#05070a]">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-auto max-h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {project.images.length > 1 && (
                  <div className="p-3 bg-[#0d1017] border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span>Captura 01 de {project.images.length}</span>
                    <span className="text-cyan-400">Despliegue verificado en producción</span>
                  </div>
                )}
              </div>
            ) : (
              /* En caso del proyecto de Robótica que integra pipeline algorítmico */
              <div className="p-6 bg-[#080b11] rounded-2xl border border-white/10 space-y-4 font-mono text-xs">
                <div className="flex justify-between text-slate-400 pb-2 border-b border-white/10">
                  <span className="text-cyan-400">KINEMA_NEXUS // POSE_CLASSIFIER</span>
                  <span>STATUS: RUNNING</span>
                </div>
                <div className="bg-[#05070c] p-4 rounded-xl border border-white/[0.08] text-slate-300 space-y-2">
                  <div className="text-emerald-400">def check_workspace_boundary(joint_angles, tool_z):</div>
                  <div className="pl-4 text-slate-400"># Prevención de colisión con la mesa de trabajo</div>
                  <div className="pl-4">if tool_z &lt; TABLE_THRESHOLD_Z:</div>
                  <div className="pl-8 text-rose-400">return MotionStatus.COLLISION_RESTRICTED</div>
                  <div className="pl-4 text-cyan-300">return MotionStatus.SAFE_TRAJECTORY</div>
                </div>
                <div className="text-slate-400 text-[11px] flex justify-between items-center">
                  <span>UR5 Industrial Arm Controller</span>
                  <span className="text-emerald-400">✓ Validación cinemática activa</span>
                </div>
              </div>
            )}
          </div>
        </motion.div>

      </div>
    </div>
  );
};
