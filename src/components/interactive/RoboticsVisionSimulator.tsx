import React, { useState } from 'react';
import { Eye, ShieldAlert, Cpu, Activity, RotateCcw, CheckCircle2 } from 'lucide-react';

type PoseState = 'both-extended' | 'both-flexed' | 'left-flexed' | 'right-flexed';

export const RoboticsVisionSimulator: React.FC = () => {
  const [currentPose, setCurrentPose] = useState<PoseState>('both-extended');
  const [tableLimitActive, setTableLimitActive] = useState<boolean>(true);

  const getPoseMetrics = () => {
    switch (currentPose) {
      case 'both-extended':
        return {
          leftAngle: 172,
          rightAngle: 168,
          status: 'Brazos Completamente Extendidos',
          stateColor: 'text-emerald-400',
          robotTargetZ: 420,
          motionAllowed: true
        };
      case 'both-flexed':
        return {
          leftAngle: 75,
          rightAngle: 82,
          status: 'Ambos Brazos Flexionados (Retracción)',
          stateColor: 'text-cyan-400',
          robotTargetZ: 580,
          motionAllowed: true
        };
      case 'left-flexed':
        return {
          leftAngle: 68,
          rightAngle: 174,
          status: 'Brazo Izq Flexionado / Dcho Extendido',
          stateColor: 'text-amber-400',
          robotTargetZ: 310,
          motionAllowed: true
        };
      case 'right-flexed':
        return {
          leftAngle: 170,
          rightAngle: 71,
          status: 'Brazo Dcho Flexionado / Izq Extendido',
          stateColor: 'text-purple-400',
          robotTargetZ: 280,
          motionAllowed: true
        };
    }
  };

  const metrics = getPoseMetrics();
  // Simular condición de límite de mesa
  const tableLimitViolation = tableLimitActive && metrics.robotTargetZ < 300;

  return (
    <div className="bg-[#0b101d] border border-cyan-500/20 rounded-2xl p-5 md:p-6 text-slate-200 shadow-2xl relative overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-xs border border-cyan-500/30">
            CV
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wide flex items-center gap-2">
              Daidalonic · Kinema Nexus Teleoperation
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                YOLO Pose Simulator
              </span>
            </h4>
            <p className="text-xs text-slate-400">Tracking de hombro-codo-mano y validación de límites de espacio de trabajo</p>
          </div>
        </div>
        <Cpu className="w-5 h-5 text-cyan-400" />
      </div>

      {/* Selector de posturas */}
      <div className="mb-4">
        <label className="block text-xs font-medium text-slate-400 mb-2">
          Seleccionar postura del operador detectada por cámara:
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {[
            { id: 'both-extended', label: 'Brazos Extendidos' },
            { id: 'both-flexed', label: 'Ambos Flexionados' },
            { id: 'left-flexed', label: 'Izq Flexionado' },
            { id: 'right-flexed', label: 'Dcho Flexionado' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPose(item.id as PoseState)}
              className={`px-3 py-2 rounded-lg text-xs font-medium border transition-all cursor-pointer text-center ${
                currentPose === item.id
                  ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300 font-semibold'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Visualizador esqueleto YOLO */}
        <div className="lg:col-span-7 bg-[#070b14] border border-slate-800 rounded-xl p-4 flex flex-col justify-between relative min-h-[200px]">
          <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
            <span className="flex items-center gap-1.5 text-cyan-400">
              <Eye className="w-3.5 h-3.5" /> Stream YOLO Pose Keypoints
            </span>
            <span>FPS: 45.2 · Latencia: 22ms</span>
          </div>

          {/* SVG Esqueleto Cinemático */}
          <div className="py-4 flex justify-center">
            <svg viewBox="0 0 300 160" className="w-full max-w-sm h-36">
              {/* Torso */}
              <circle cx="150" cy="30" r="14" fill="#38bdf8" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="2" />
              <line x1="150" y1="44" x2="150" y2="120" stroke="#64748b" strokeWidth="3" />
              <line x1="105" y1="65" x2="195" y2="65" stroke="#64748b" strokeWidth="4" />

              {/* Hombros */}
              <circle cx="105" cy="65" r="5" fill="#38bdf8" />
              <circle cx="195" cy="65" r="5" fill="#38bdf8" />

              {/* Brazo Izquierdo (desde perspectiva del espectador) */}
              {currentPose === 'both-extended' || currentPose === 'right-flexed' ? (
                <>
                  <line x1="105" y1="65" x2="60" y2="100" stroke="#22d3ee" strokeWidth="3" />
                  <circle cx="60" cy="100" r="4" fill="#22d3ee" />
                  <line x1="60" y1="100" x2="20" y2="135" stroke="#22d3ee" strokeWidth="3" />
                  <circle cx="20" cy="135" r="4" fill="#22d3ee" />
                </>
              ) : (
                <>
                  <line x1="105" y1="65" x2="65" y2="90" stroke="#f59e0b" strokeWidth="3" />
                  <circle cx="65" cy="90" r="4" fill="#f59e0b" />
                  <line x1="65" y1="90" x2="78" y2="50" stroke="#f59e0b" strokeWidth="3" />
                  <circle cx="78" cy="50" r="4" fill="#f59e0b" />
                </>
              )}

              {/* Brazo Derecho */}
              {currentPose === 'both-extended' || currentPose === 'left-flexed' ? (
                <>
                  <line x1="195" y1="65" x2="240" y2="100" stroke="#22d3ee" strokeWidth="3" />
                  <circle cx="240" cy="100" r="4" fill="#22d3ee" />
                  <line x1="240" y1="100" x2="280" y2="135" stroke="#22d3ee" strokeWidth="3" />
                  <circle cx="280" cy="135" r="4" fill="#22d3ee" />
                </>
              ) : (
                <>
                  <line x1="195" y1="65" x2="235" y2="90" stroke="#a855f7" strokeWidth="3" />
                  <circle cx="235" cy="90" r="4" fill="#a855f7" />
                  <line x1="235" y1="90" x2="222" y2="50" stroke="#a855f7" strokeWidth="3" />
                  <circle cx="222" cy="50" r="4" fill="#a855f7" />
                </>
              )}
            </svg>
          </div>

          <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 bg-slate-900/60 p-2 rounded-lg">
            <span>Ángulo Articular Codo Izq: <b className="text-white">{metrics.leftAngle}°</b></span>
            <span>Ángulo Articular Codo Dcho: <b className="text-white">{metrics.rightAngle}°</b></span>
          </div>
        </div>

        {/* Módulo de Control & Seguridad UR5 */}
        <div className="lg:col-span-5 bg-[#101726] border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[11px] font-mono text-slate-400">
              <span>RoboDK / Kinematics Check</span>
              <span className={metrics.stateColor}>● {metrics.status}</span>
            </div>

            <div className="space-y-2.5 text-xs py-1">
              <div className="flex justify-between text-slate-300">
                <span>Coordenada Z estimada:</span>
                <span className="font-mono font-bold text-white">{metrics.robotTargetZ} mm</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Altura límite plano mesa:</span>
                <span className="font-mono">300 mm</span>
              </div>

              <div className="pt-2">
                <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={tableLimitActive}
                    onChange={(e) => setTableLimitActive(e.target.checked)}
                    className="accent-cyan-500 rounded"
                  />
                  <span>Activar comprobación de colisión de mesa</span>
                </label>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800">
            {tableLimitViolation ? (
              <div className="bg-red-500/10 border border-red-500/40 rounded-lg p-2.5 flex items-center gap-2 text-red-400 text-xs">
                <ShieldAlert className="w-5 h-5 flex-shrink-0" />
                <div>
                  <div className="font-bold">¡Movimiento Bloqueado!</div>
                  <div className="text-[10px] text-red-300">
                    El brazo UR5 atravesaría la mesa ({metrics.robotTargetZ}mm &lt; 300mm). Restricción de seguridad activa.
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-emerald-500/10 border border-emerald-500/40 rounded-lg p-2.5 flex items-center gap-2 text-emerald-400 text-xs">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <div>
                  <div className="font-bold">Trayectoria Segura & Admisible</div>
                  <div className="text-[10px] text-emerald-300">
                    El movimiento respeta el entorno operativo y límites articulares en RoboDK.
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
