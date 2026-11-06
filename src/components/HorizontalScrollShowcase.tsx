import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PROJECTS } from '../data/projects';
import { ExternalLink, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

export const HorizontalScrollShowcase: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  // Hook Scroll-Linked oficial de Framer Motion
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end']
  });

  // Vinculación scroll vertical -> traslación horizontal (-0% a -75%)
  // Conforme el usuario hace scroll vertical por esta sección de 400vh, la galería se mueve de lado a lado
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%']);

  // Animaciones adicionales vinculadas al scroll
  const progressBar = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const counterText = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], ['01 / 04', '02 / 04', '03 / 04', '04 / 04']);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-[#050608]">
      {/* Sticky viewport que se bloquea en pantalla mientras el scroll alimenta el avance */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* HUD superior fijo del showcase horizontal */}
        <div className="absolute top-8 left-8 right-8 z-30 flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Ecosistema de Software · Recorrido Cinemático
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-cyan-400 font-bold">
              Desplaza para avanzar lateralmente
            </span>
            <div className="w-32 h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                style={{ width: progressBar }}
                className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
              />
            </div>
          </div>
        </div>

        {/* Franja horizontal con los proyectos moviéndose en el eje X */}
        <motion.div style={{ x }} className="flex gap-12 px-12 pt-12 items-center">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className="relative h-[78vh] w-[85vw] max-w-[1050px] flex-shrink-0 bg-[#0a0d14] border border-white/15 rounded-3xl p-6 sm:p-10 flex flex-col justify-between shadow-2xl overflow-hidden group"
            >
              {/* Resplandor ambiental de tarjeta */}
              <div className="absolute -top-32 -right-32 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-blue-500/20 transition-colors" />

              {/* Cabecera de la tarjeta */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-white bg-white/10 px-2.5 py-1 rounded">
                    PROYECTO 0{index + 1}
                  </span>
                  <span className="text-xs font-mono text-cyan-400 font-semibold">
                    {project.badge}
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-500">
                  {project.period}
                </span>
              </div>

              {/* Contenido principal en 2 columnas */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-4 my-auto">
                {/* Texto */}
                <div className="lg:col-span-5 space-y-4 text-left">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-cyan-300">
                    {project.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/[0.08]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Imagen del proyecto / Captura enmarcada */}
                <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-white/15 bg-[#05070a] shadow-inner">
                  {project.images.length > 0 ? (
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-auto max-h-[380px] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="p-8 text-center space-y-3 font-mono text-xs">
                      <div className="text-cyan-400 font-bold">KINEMA_NEXUS // REALTIME POSE CLASSIFIER</div>
                      <p className="text-slate-400 max-w-sm mx-auto">
                        Módulo de visión por computador con YOLO Pose integrado con brazo robótico UR5 y comprobación de límites de espacio en RoboDK.
                      </p>
                      <div className="p-3 bg-white/[0.03] rounded-lg text-emerald-400 text-[11px]">
                        ✓ Clasificación cinemática activa (Extendidos vs Flexionados)
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Pie de tarjeta con indicador */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>Miquel Navarrete · Portfolio Engineering</span>
                <span className="text-slate-400">0{index + 1} / 04</span>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
