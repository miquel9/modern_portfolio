import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Terminal, Cpu, Sparkles, MoveRight } from 'lucide-react';

interface Props {
  onExploreClick: () => void;
}

export const HeroParallax: React.FC<Props> = ({ onExploreClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  // Apple-style scroll-linked transforms:
  // Mientras bajas, el mock 3D sube, se endereza, rota y hace zoom cinematográfico
  const yText = useTransform(scrollYProgress, [0, 0.6], [0, -100]);
  const opacityText = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  
  const scaleCard = useTransform(scrollYProgress, [0, 0.8], [0.88, 1.05]);
  const rotateX = useTransform(scrollYProgress, [0, 0.7], [22, 0]);
  const yCard = useTransform(scrollYProgress, [0, 0.8], [80, -30]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 0.8], [0.3, 0.7, 0.4]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[160vh] flex flex-col items-center pt-24 px-4 sm:px-6"
    >
      {/* Sticky view holder for the smooth Apple scroll effect */}
      <div className="sticky top-20 w-full max-w-5xl flex flex-col items-center text-center">
        
        {/* Text Header (se desvanece suavemente a medida que el objeto 3D toma el protagonismo) */}
        <motion.div
          style={{ y: yText, opacity: opacityText }}
          className="max-w-3xl mx-auto space-y-4 mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Miquel Navarrete · Software, IA & Robótica</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
            Ingeniería de software con <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
              impacto y movimiento.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
            Estudiante de Ingeniería Informática (UPV) y miembro de Kinema Nexus (DAIDALONIC). 
            Desliza hacia abajo para explorar el ecosistema de proyectos y sistemas en tiempo real.
          </p>

          <div className="flex items-center justify-center gap-2 pt-2 text-xs font-mono text-slate-500">
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-blue-400" />
            <span>Haz scroll para interactuar con el visor cinemático</span>
          </div>
        </motion.div>

        {/* 3D SCROLL-LINKED HERO SHOWCASE (Efecto Apple Keynote) */}
        <div className="w-full perspective-container flex justify-center">
          <motion.div
            style={{
              scale: scaleCard,
              rotateX: rotateX,
              y: yCard
            }}
            className="w-full max-w-4xl bg-[#0d1017] border border-white/15 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden relative"
          >
            {/* Resplandor ambiental sincronizado al scroll */}
            <motion.div
              style={{ opacity: glowOpacity }}
              className="absolute -top-24 left-1/2 -translate-x-1/2 w-[480px] h-[220px] bg-blue-500/30 blur-[90px] pointer-events-none"
            />

            {/* Ventana estilo MacOS / Workbench */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#131722] border-b border-white/10 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 text-slate-300 font-medium hidden sm:inline">
                  workspace/kinema_nexus_yolo_stream.py
                </span>
              </div>
              <div className="flex items-center gap-3 text-[11px]">
                <span className="text-cyan-400">FPS: 60.0</span>
                <span className="text-emerald-400">STATUS: ACTIVE</span>
              </div>
            </div>

            {/* Canvas / Visual de alta fidelidad que se revela */}
            <div className="p-5 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center text-left">
              <div className="md:col-span-5 space-y-3">
                <span className="text-xs font-mono font-bold text-cyan-400 tracking-wider uppercase">
                  Teleoperación UR5 & YOLO
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Percepción Articular & Control Cinemático
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  A medida que desciendes por la página, el pipeline procesa la trayectoria hombro-codo-mano en tiempo real para impedir colisiones físicas del efector del brazo industrial.
                </p>

                <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono">
                  <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
                    Python
                  </span>
                  <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    YOLO Pose
                  </span>
                  <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    RoboDK
                  </span>
                </div>
              </div>

              {/* Esqueleto Dinámico SVG centrado */}
              <div className="md:col-span-7 bg-[#07090e] border border-white/10 rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-center relative overflow-hidden">
                <div className="text-[10px] font-mono text-slate-500 w-full flex justify-between pb-2 border-b border-white/[0.06]">
                  <span>VIRTUAL_RIG_UPV</span>
                  <span className="text-cyan-400">JOINT_LIMITS_OK</span>
                </div>

                <svg viewBox="0 0 320 160" className="w-full max-w-sm h-36 my-2">
                  <circle cx="160" cy="28" r="14" fill="#38bdf8" fillOpacity="0.25" stroke="#38bdf8" strokeWidth="2" />
                  <line x1="160" y1="42" x2="160" y2="120" stroke="#64748b" strokeWidth="3" />
                  <line x1="110" y1="65" x2="210" y2="65" stroke="#64748b" strokeWidth="4" />

                  {/* Articulaciones */}
                  <circle cx="110" cy="65" r="5" fill="#38bdf8" />
                  <circle cx="210" cy="65" r="5" fill="#38bdf8" />

                  {/* Brazos dinámicos */}
                  <line x1="110" y1="65" x2="65" y2="98" stroke="#22d3ee" strokeWidth="3.5" />
                  <circle cx="65" cy="98" r="4.5" fill="#22d3ee" />
                  <line x1="65" y1="98" x2="25" y2="135" stroke="#22d3ee" strokeWidth="3.5" />
                  <circle cx="25" cy="135" r="4.5" fill="#22d3ee" />

                  <line x1="210" y1="65" x2="255" y2="98" stroke="#22d3ee" strokeWidth="3.5" />
                  <circle cx="255" cy="98" r="4.5" fill="#22d3ee" />
                  <line x1="255" y1="98" x2="295" y2="135" stroke="#22d3ee" strokeWidth="3.5" />
                  <circle cx="295" cy="135" r="4.5" fill="#22d3ee" />

                  {/* Mesa de seguridad (Límite Z) */}
                  <line x1="15" y1="145" x2="305" y2="145" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" />
                  <text x="160" y="156" fill="#ef4444" fontSize="9" textAnchor="middle" fontFamily="monospace">
                    PLANO DE SEGURIDAD MESA Z &gt; 300mm
                  </text>
                </svg>

                <div className="w-full flex justify-between text-[10px] font-mono text-slate-400 pt-2 border-t border-white/[0.06]">
                  <span>Ángulo Codo L: 172°</span>
                  <span className="text-emerald-400 font-bold">ESTADO: EXTENDIDO</span>
                  <span>Ángulo Codo R: 168°</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
