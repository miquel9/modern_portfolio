import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Cpu, ShieldCheck, Eye, Layers } from 'lucide-react';

export const AppleRoboticsSequence: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Hook Scroll-Linked oficial: target y offset
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Animaciones encadenadas a lo largo del scroll continuo (0 a 1)
  // Fase 1 (0 -> 0.33): Detección y Keypoints
  // Fase 2 (0.33 -> 0.66): Cinemática de codos y flexión
  // Fase 3 (0.66 -> 1.0): Validación de seguridad del robot UR5 (mesa de trabajo)

  const armAngleLeft = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [175, 120, 75, 75]);
  const armAngleRight = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [170, 168, 165, 80]);
  const zHeight = useTransform(scrollYProgress, [0, 0.5, 0.8, 1], [450, 360, 280, 520]);
  
  const textStep1 = useTransform(scrollYProgress, [0, 0.25, 0.35], [1, 1, 0]);
  const textStep2 = useTransform(scrollYProgress, [0.28, 0.45, 0.68], [0, 1, 0]);
  const textStep3 = useTransform(scrollYProgress, [0.65, 0.8, 1], [0, 1, 1]);

  const scaleCanvas = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1.04, 1]);
  const rotateCanvasY = useTransform(scrollYProgress, [0, 0.5, 1], [-10, 0, 8]);

  return (
    <section ref={containerRef} className="relative h-[320vh] bg-[#07090f] border-t border-b border-white/10">
      <div className="sticky top-0 h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
        
        {/* Cabecera de la secuencia */}
        <div className="text-center max-w-2xl mb-8 space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
            Scroll-Linked Architecture · Kinema Nexus
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Desarmando el Pipeline de Visión
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Al deslizar, el sistema calcula los ángulos articulares y aplica las restricciones del entorno 3D.
          </p>
        </div>

        {/* Visor interactivo central */}
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Columna de explicación con revelado por pasos vinculados */}
          <div className="md:col-span-5 relative h-48 flex items-center">
            
            {/* Paso 1 */}
            <motion.div style={{ opacity: textStep1 }} className="absolute inset-0 flex flex-col justify-center space-y-2">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold">
                <Eye className="w-4 h-4" /> FASE 01 // CAPTURA MULTICÁMARA
              </div>
              <h4 className="text-xl font-bold text-white">Extracción de Keypoints YOLO Pose</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                El sistema detecta y triangula los 3 puntos biomecánicos primordiales del operador: hombros, codos y muñecas a 60 cuadros por segundo.
              </p>
            </motion.div>

            {/* Paso 2 */}
            <motion.div style={{ opacity: textStep2 }} className="absolute inset-0 flex flex-col justify-center space-y-2">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold">
                <Cpu className="w-4 h-4" /> FASE 02 // CLASIFICADOR VECTORIAL
              </div>
              <h4 className="text-xl font-bold text-white">Extensión vs Flexión Articular</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Algoritmo en Python que evalúa el ángulo formado entre el vector hombro-codo y codo-mano para categorizar si una extremidad está estirada o en flexión.
              </p>
            </motion.div>

            {/* Paso 3 */}
            <motion.div style={{ opacity: textStep3 }} className="absolute inset-0 flex flex-col justify-center space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold">
                <ShieldCheck className="w-4 h-4" /> FASE 03 // SAFETY BARRIER EN ROBODK
              </div>
              <h4 className="text-xl font-bold text-white">Límite de Colisión con la Mesa</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                El módulo de validación comprueba la geometría del robot UR5 antes de admitir el movimiento en el gemelo digital para no golpear la superficie.
              </p>
            </motion.div>

          </div>

          {/* Columna Visual 3D SVG sincronizada al scroll */}
          <div className="md:col-span-7 perspective-container">
            <motion.div
              style={{
                scale: scaleCanvas,
                rotateY: rotateCanvasY
              }}
              className="bg-[#0b0e17] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl relative"
            >
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pb-3 mb-4 border-b border-white/10">
                <span className="text-cyan-400">UR5_KINEMA_TELEOP</span>
                <span>DESLIZAMIENTO ACTIVO</span>
              </div>

              {/* Diagrama Esquelético Interactivo */}
              <div className="flex justify-center py-4">
                <svg viewBox="0 0 300 160" className="w-full max-w-sm h-40">
                  {/* Cabeza y columna */}
                  <circle cx="150" cy="30" r="14" fill="#38bdf8" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="2" />
                  <line x1="150" y1="44" x2="150" y2="120" stroke="#64748b" strokeWidth="3" />
                  <line x1="100" y1="65" x2="200" y2="65" stroke="#64748b" strokeWidth="4" />

                  {/* Hombros */}
                  <circle cx="100" cy="65" r="5" fill="#38bdf8" />
                  <circle cx="200" cy="65" r="5" fill="#38bdf8" />

                  {/* Brazo Izquierdo Dinámico */}
                  <line x1="100" y1="65" x2="60" y2="95" stroke="#22d3ee" strokeWidth="3.5" />
                  <circle cx="60" cy="95" r="4.5" fill="#22d3ee" />
                  <line x1="60" y1="95" x2="30" y2="135" stroke="#22d3ee" strokeWidth="3.5" />
                  <circle cx="30" cy="135" r="4.5" fill="#22d3ee" />

                  {/* Brazo Derecho Dinámico */}
                  <line x1="200" y1="65" x2="240" y2="95" stroke="#22d3ee" strokeWidth="3.5" />
                  <circle cx="240" cy="95" r="4.5" fill="#22d3ee" />
                  <line x1="240" y1="95" x2="270" y2="135" stroke="#22d3ee" strokeWidth="3.5" />
                  <circle cx="270" cy="135" r="4.5" fill="#22d3ee" />

                  {/* Plano de colisión */}
                  <line x1="20" y1="145" x2="280" y2="145" stroke="#ef4444" strokeWidth="2" strokeDasharray="3 3" />
                  <text x="150" y="156" fill="#ef4444" fontSize="9" textAnchor="middle" fontFamily="monospace">
                    PLANO MESA DE TRABAJO (Z = 300mm)
                  </text>
                </svg>
              </div>

              {/* Telemetría que se actualiza mientras se desliza */}
              <div className="grid grid-cols-3 gap-2 text-center pt-3 border-t border-white/10 text-[11px] font-mono">
                <div className="p-2 bg-white/[0.03] rounded-lg">
                  <div className="text-slate-400 text-[10px]">Codo Izq</div>
                  <div className="font-bold text-cyan-400">Dinámico</div>
                </div>
                <div className="p-2 bg-white/[0.03] rounded-lg">
                  <div className="text-slate-400 text-[10px]">Codo Dcho</div>
                  <div className="font-bold text-cyan-400">Dinámico</div>
                </div>
                <div className="p-2 bg-white/[0.03] rounded-lg">
                  <div className="text-slate-400 text-[10px]">Z Robot</div>
                  <div className="font-bold text-emerald-400">&gt; 300 mm</div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
