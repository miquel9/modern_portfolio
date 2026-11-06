import React, { useState } from 'react';
import { MapPin, Navigation, TrendingUp, Flame, Moon, Sun, Clock, Compass } from 'lucide-react';

export const RunningTrackerSimulator: React.FC = () => {
  const [selectedRoute, setSelectedRoute] = useState<'olocau' | 'safor'>('olocau');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  const routeData = {
    olocau: {
      name: 'Olocau Carrera Trail',
      distance: '10.17 km',
      avgPace: '7:40 min/km',
      avgSpeed: '7.74 km/h',
      elevationGain: '+418 m',
      elevationLoss: '-414 m',
      calories: '840 kcal',
      points: 1240
    },
    safor: {
      name: 'Ruta La Safor Express',
      distance: '16.99 km',
      avgPace: '6:58 min/km',
      avgSpeed: '8.60 km/h',
      elevationGain: '+505 m',
      elevationLoss: '-484 m',
      calories: '1604 kcal',
      points: 2180
    }
  };

  const current = routeData[selectedRoute];

  return (
    <div className={`rounded-2xl p-5 md:p-6 shadow-2xl transition-all border ${
      isDarkMode 
        ? 'bg-[#121115] border-amber-500/20 text-slate-200' 
        : 'bg-slate-100 border-slate-300 text-slate-800'
    }`}>
      {/* Header JavaFX Desktop Mockup */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-700/50">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold text-xs border border-orange-500/30">
            GPX
          </div>
          <div>
            <h4 className="text-sm font-semibold tracking-wide flex items-center gap-2">
              Running La Safor · JavaFX Desktop
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                Java & Scene Builder
              </span>
            </h4>
            <p className="text-xs text-slate-400">Análisis telemétrico, parsing GPX y renderizado de perfil de desnivel</p>
          </div>
        </div>

        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-1.5 rounded-lg border border-slate-700 hover:bg-slate-800 transition-colors cursor-pointer"
          title="Alternar modo Claro/Oscuro de la app"
        >
          {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
        </button>
      </div>

      {/* Selector de GPX */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setSelectedRoute('olocau')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
            selectedRoute === 'olocau'
              ? 'bg-orange-500/20 border-orange-500 text-orange-300'
              : 'bg-slate-900/40 border-slate-700 text-slate-400'
          }`}
        >
          GPX 1: Marines a Olocau (10.17 km)
        </button>
        <button
          onClick={() => setSelectedRoute('safor')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
            selectedRoute === 'safor'
              ? 'bg-orange-500/20 border-orange-500 text-orange-300'
              : 'bg-slate-900/40 border-slate-700 text-slate-400'
          }`}
        >
          GPX 2: Resumen Mensual (16.99 km)
        </button>
      </div>

      {/* Grid de telemetría y perfil */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Métricas */}
        <div className="md:col-span-6 grid grid-cols-2 gap-2.5">
          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="text-[10px] text-slate-400 flex items-center gap-1 mb-1">
              <Navigation className="w-3 h-3 text-orange-400" /> Distancia
            </div>
            <div className="text-xl font-bold font-mono text-white">{current.distance}</div>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="text-[10px] text-slate-400 flex items-center gap-1 mb-1">
              <Clock className="w-3 h-3 text-cyan-400" /> Ritmo Medio
            </div>
            <div className="text-xl font-bold font-mono text-white">{current.avgPace}</div>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="text-[10px] text-slate-400 flex items-center gap-1 mb-1">
              <TrendingUp className="w-3 h-3 text-emerald-400" /> Desnivel (+ / -)
            </div>
            <div className="text-sm font-bold font-mono text-emerald-400">
              {current.elevationGain} / <span className="text-rose-400">{current.elevationLoss}</span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="text-[10px] text-slate-400 flex items-center gap-1 mb-1">
              <Flame className="w-3 h-3 text-amber-400" /> Calorías
            </div>
            <div className="text-xl font-bold font-mono text-amber-400">{current.calories}</div>
          </div>
        </div>

        {/* Gráfico Altimétrico SVG */}
        <div className="md:col-span-6 p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
          <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono mb-2">
            <span>Perfil Altimétrico GPX</span>
            <span className="text-orange-400">{current.points} waypoints</span>
          </div>

          <svg viewBox="0 0 280 90" className="w-full h-24 stroke-orange-500 fill-orange-500/10">
            {selectedRoute === 'olocau' ? (
              <>
                <polyline
                  fill="url(#gradOlocau)"
                  stroke="#f97316"
                  strokeWidth="2.5"
                  points="10,80 30,70 60,45 90,55 120,30 150,15 170,25 200,60 230,40 270,80"
                />
                <defs>
                  <linearGradient id="gradOlocau" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f97316" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#f97316" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
              </>
            ) : (
              <>
                <polyline
                  fill="url(#gradSafor)"
                  stroke="#38bdf8"
                  strokeWidth="2.5"
                  points="10,75 40,60 80,30 120,40 160,20 190,50 220,35 250,55 270,75"
                />
                <defs>
                  <linearGradient id="gradSafor" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
              </>
            )}
          </svg>

          <div className="flex justify-between text-[9px] text-slate-500 font-mono mt-1">
            <span>Inicio: 288m</span>
            <span>Cima: 611m</span>
            <span>Meta: 10.17km</span>
          </div>
        </div>
      </div>
    </div>
  );
};
