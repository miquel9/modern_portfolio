import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code2, Bot, Layers, Terminal, Sparkles, CheckCircle2, Cpu } from 'lucide-react';

export const AppleSkillsSequence: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Hook Scroll-Linked oficial: target y offset
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Animaciones encadenadas a lo largo del scroll continuo (0 a 1)
  // Fase 1 (0 -> 0.33): Lenguajes de Programación & Core (Java, Python, TS/JS, C#, SQL, C++)
  // Fase 2 (0.33 -> 0.66): Automatización Inteligente & Pipelines con IA (n8n, Gemini, Webhooks)
  // Fase 3 (0.66 -> 1.0): Robótica, Visión Artificial & Sistemas Reales (YOLO Pose, UR5, RoboDK, Desktop Java)

  const textStep1 = useTransform(scrollYProgress, [0, 0.25, 0.35], [1, 1, 0]);
  const textStep2 = useTransform(scrollYProgress, [0.28, 0.45, 0.68], [0, 1, 0]);
  const textStep3 = useTransform(scrollYProgress, [0.65, 0.8, 1], [0, 1, 1]);

  const scaleCanvas = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1.03, 1]);
  const rotateCanvasY = useTransform(scrollYProgress, [0, 0.5, 1], [-8, 0, 8]);

  // Transformaciones de barras y elementos interactivos internos vinculados al scroll
  const codeProgress = useTransform(scrollYProgress, [0, 0.35], ['10%', '95%']);
  const activePill = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], ['Lenguajes', 'Lenguajes', 'Automatización & IA', 'Robótica & Sistemas']);

  return (
    <section ref={containerRef} className="relative h-[320vh] bg-[#07090f] border-t border-b border-white/10">
      <div className="sticky top-0 h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
        
        {/* Cabecera de la secuencia */}
        <div className="text-center max-w-2xl mb-8 space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
            Scroll-Linked Sequence // Lo que sé hacer
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Desglosando mis Habilidades
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            A medida que deslizas, exploras en profundidad mis lenguajes, automatizaciones y proyectos prácticos.
          </p>
        </div>

        {/* Visor interactivo central */}
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Columna de explicación con revelado por pasos vinculados */}
          <div className="md:col-span-5 relative h-56 flex items-center">
            
            {/* Paso 1: Lenguajes & Programación */}
            <motion.div style={{ opacity: textStep1 }} className="absolute inset-0 flex flex-col justify-center space-y-3">
              <div className="flex items-center gap-2 text-blue-400 text-xs font-mono font-bold">
                <Code2 className="w-4 h-4" /> ETAPA 01 // LENGUAJES & BASES
              </div>
              <h4 className="text-2xl font-bold text-white">Dominio Multilenguaje</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Base sólida en programación orientada a objetos con <strong>Java</strong> y <strong>Python</strong>. Desarrollo web moderno con <strong>TypeScript / JavaScript</strong>, <strong>HTML & CSS</strong>, diseño de consultas en <strong>SQL</strong> y nociones prácticas de <strong>C#</strong> y <strong>C/C++</strong> para hardware. Control de versiones diario con <strong>Git & GitHub</strong>.
              </p>
            </motion.div>

            {/* Paso 2: Automatización & IA */}
            <motion.div style={{ opacity: textStep2 }} className="absolute inset-0 flex flex-col justify-center space-y-3">
              <div className="flex items-center gap-2 text-orange-400 text-xs font-mono font-bold">
                <Bot className="w-4 h-4" /> ETAPA 02 // PIPELINES & MODELOS
              </div>
              <h4 className="text-2xl font-bold text-white">Automatizaciones con n8n & LLMs</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Creación de flujos inteligentes que se disparan en segundo plano. Integración de la API de <strong>Google Gemini Flash</strong> para sintetizar noticias RSS matutinas, filtrado con código JavaScript en nodos y despacho instantáneo con bots de <strong>Telegram</strong>.
              </p>
            </motion.div>

            {/* Paso 3: Robótica & Aplicaciones Reales */}
            <motion.div style={{ opacity: textStep3 }} className="absolute inset-0 flex flex-col justify-center space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold">
                <Layers className="w-4 h-4" /> ETAPA 03 // VISIÓN & SISTEMAS REALES
              </div>
              <h4 className="text-2xl font-bold text-white">Robótica (Daidalonic) & Apps Desktop</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Desarrollo en <strong>Kinema Nexus</strong>: teleoperación con brazo robótico UR5 y tracking articular 3D con <strong>YOLO Pose</strong> en Python. Además, desarrollo de software de escritorio en Java (JavaFX / Scene Builder) y apps web en producción para carpinterías locales.
              </p>
            </motion.div>

          </div>

          {/* Columna Visual 3D sincronizada al scroll */}
          <div className="md:col-span-7 perspective-container">
            <motion.div
              style={{
                scale: scaleCanvas,
                rotateY: rotateCanvasY
              }}
              className="bg-[#0b0e17] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl relative"
            >
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pb-3 mb-4 border-b border-white/10">
                <span className="text-cyan-400">DEV_STACK_MONITOR</span>
                <span>DESLIZAMIENTO ACTIVO</span>
              </div>

              {/* Animación interactiva en el panel */}
              <div className="space-y-4 py-2">
                
                {/* Visual dinámico de lenguajes / stack */}
                <div className="bg-[#06080d] p-4 rounded-2xl border border-white/10 space-y-3">
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-slate-300">Nivel de Integración en Proyectos</span>
                    <span className="text-cyan-400 font-bold">Activo</span>
                  </div>

                  {/* Barras de destreza dinámica */}
                  <div className="space-y-2 text-xs">
                    <div>
                      <div className="flex justify-between text-slate-400 text-[11px] mb-1">
                        <span>Java & Python (POO, Visión, Algoritmia)</span>
                        <span className="text-white font-mono">Avanzado</span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 w-[90%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-slate-400 text-[11px] mb-1">
                        <span>TypeScript / JavaScript & React / HTML / CSS</span>
                        <span className="text-white font-mono">Fluido</span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-cyan-400 w-[85%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-slate-400 text-[11px] mb-1">
                        <span>n8n Pipelines & LLM Chains (Gemini API)</span>
                        <span className="text-white font-mono">Especialidad</span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-orange-400 w-[88%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-slate-400 text-[11px] mb-1">
                        <span>SQL, Git/GitHub, C/C++ y C#</span>
                        <span className="text-white font-mono">Práctico</span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-400 w-[80%]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Etiquetas de herramientas en vivo */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['Java', 'Python', 'TypeScript', 'JavaScript', 'SQL', 'C#', 'C/C++', 'n8n', 'Gemini Flash', 'YOLO Pose', 'Git & GitHub', 'JavaFX'].map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/[0.08]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>

              {/* Pie de monitor */}
              <div className="pt-3 border-t border-white/10 flex justify-between items-center text-[11px] font-mono text-slate-500">
                <span>UPV · Informática</span>
                <span className="text-emerald-400">✓ Pruebas en proyectos reales</span>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
