import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Code2, Bot, Layers, Sparkles, MoveRight } from 'lucide-react';

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
        
        {/* Presentación sobre Miquel */}
        <motion.div
          style={{ y: yText, opacity: opacityText }}
          className="max-w-3xl mx-auto space-y-4 mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Hola, soy Miquel Navarrete de Lanuza</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
            Desarrollo web, pipelines de IA <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
              y sistemas interactivos.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Estudiante de Informática en la UPV. Combino la creación de aplicaciones prácticas para empresas locales reales con la automatización inteligente de procesos y el trabajo en robótica y visión por computador.
          </p>

          <div className="flex items-center justify-center gap-2 pt-2 text-xs font-mono text-slate-500">
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-blue-400" />
            <span>Haz scroll para ver mis áreas y proyectos en movimiento</span>
          </div>
        </motion.div>

        {/* 3D SCROLL-LINKED HERO SHOWCASE (Tarjeta general sobre mi perfil) */}
        <div className="w-full perspective-container flex justify-center">
          <motion.div
            style={{
              scale: scaleCard,
              rotateX: rotateX,
              y: yCard
            }}
            className="w-full max-w-4xl bg-[#0d1017] border border-white/15 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden relative text-left"
          >
            {/* Resplandor ambiental sincronizado */}
            <motion.div
              style={{ opacity: glowOpacity }}
              className="absolute -top-24 left-1/2 -translate-x-1/2 w-[480px] h-[220px] bg-blue-500/25 blur-[90px] pointer-events-none"
            />

            {/* Ventana estilo Workspace */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#131722] border-b border-white/10 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 text-slate-300 font-medium hidden sm:inline">
                  miquel_navarrete // profile_overview.ts
                </span>
              </div>
              <div className="flex items-center gap-3 text-[11px]">
                <span className="text-cyan-400">UPV · 3º CURSO</span>
                <span className="text-emerald-400">DISPONIBLE</span>
              </div>
            </div>

            {/* Contenido general de la tarjeta */}
            <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="bg-[#080b11] p-5 rounded-2xl border border-white/[0.08] space-y-3">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                  <Code2 className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Software & Web Real</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Desarrollo de herramientas de gestión y presupuestos para negocios reales (React, TS, Java) con cálculo de impuestos y generación PDF.
                </p>
              </div>

              <div className="bg-[#080b11] p-5 rounded-2xl border border-white/[0.08] space-y-3">
                <div className="w-9 h-9 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Automatización & IA</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Pipelines matutinos en n8n conectados a LLMs (Google Gemini Flash) y mensajería en Telegram para análisis y filtrado de información.
                </p>
              </div>

              <div className="bg-[#080b11] p-5 rounded-2xl border border-white/[0.08] space-y-3">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Robótica & Visión</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Miembro de Kinema Nexus (DAIDALONIC UPV): teleoperación de brazo industrial UR5, clasificación de posturas con YOLO Pose y límites espaciales en RoboDK.
                </p>
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
