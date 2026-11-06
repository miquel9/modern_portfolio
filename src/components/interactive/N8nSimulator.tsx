import React, { useState } from 'react';
import { Play, Sparkles, Send, CheckCircle2, Bot, Newspaper, ArrowRight } from 'lucide-react';

interface NewsItem {
  source: string;
  headline: string;
  category: string;
}

const SAMPLE_NEWS: NewsItem[] = [
  { source: 'El País', headline: 'La IA impulsa la eficiencia en cadenas logísticas y de producción europea.', category: 'Tecnología' },
  { source: 'The New York Times', headline: 'Global climate summit targets new investments in solar infrastructure.', category: 'Internacional' },
  { source: 'BBC Mundo', headline: 'Avances en robótica médica asisten en cirugías complejas de alta precisión.', category: 'Ciencia' },
  { source: 'Las Provincias VLC', headline: 'Valencia se consolida como polo de atracción para talento tech e ingeniería.', category: 'Economía' }
];

export const N8nSimulator: React.FC = () => {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [telegramDelivered, setTelegramDelivered] = useState<boolean>(false);

  const steps = [
    { name: 'Cron 08:00 AM', desc: 'Disparador programado' },
    { name: 'RSS Ingestion', desc: '4 fuentes procesadas' },
    { name: 'JS Deduplication', desc: 'Filtrado de duplicados' },
    { name: 'Gemini Flash LLM', desc: 'Redacción de síntesis' },
    { name: 'Telegram Bot API', desc: 'Despacho al canal' }
  ];

  const runPipeline = () => {
    if (isRunning) return;
    setIsRunning(true);
    setTelegramDelivered(false);
    setActiveStep(1);

    const stepIntervals = [800, 1500, 2400, 3400];
    stepIntervals.forEach((delay, idx) => {
      setTimeout(() => {
        setActiveStep(idx + 2);
        if (idx === stepIntervals.length - 1) {
          setIsRunning(false);
          setTelegramDelivered(true);
        }
      }, delay);
    });
  };

  return (
    <div className="bg-[#0c1017] border border-orange-500/20 rounded-2xl p-5 md:p-6 text-slate-200 shadow-2xl relative overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold text-xs border border-orange-500/30">
            n8n
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wide flex items-center gap-2">
              Pipeline n8n + Gemini Flash
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-orange-500/20 text-orange-400 border border-orange-500/30">
                Simulador del Flujo
              </span>
            </h4>
            <p className="text-xs text-slate-400">Ejecuta el ciclo de extracción, síntesis con IA y entrega en Telegram</p>
          </div>
        </div>

        <button
          onClick={runPipeline}
          disabled={isRunning}
          className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
            isRunning
              ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
              : 'bg-orange-500 hover:bg-orange-400 text-slate-950 font-bold shadow-lg shadow-orange-500/20'
          }`}
        >
          <Play className={`w-3.5 h-3.5 ${isRunning ? 'animate-spin' : ''}`} />
          {isRunning ? 'Ejecutando nodos...' : 'Disparar Pipeline'}
        </button>
      </div>

      {/* Flujo de nodos interactivo */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-6">
        {steps.map((st, i) => {
          const stepNum = i + 1;
          const isCurrent = activeStep === stepNum;
          const isDone = activeStep > stepNum || telegramDelivered;

          return (
            <div
              key={st.name}
              className={`p-3 rounded-xl border text-center transition-all ${
                isCurrent
                  ? 'bg-orange-500/10 border-orange-500 scale-105 shadow-lg shadow-orange-500/10'
                  : isDone
                  ? 'bg-slate-900/80 border-emerald-500/50 text-slate-300'
                  : 'bg-slate-900/40 border-slate-800 text-slate-500'
              }`}
            >
              <div className="flex items-center justify-center mb-1.5">
                {isDone ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                ) : (
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                    isCurrent ? 'bg-orange-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'
                  }`}>
                    0{stepNum}
                  </span>
                )}
              </div>
              <div className="text-[11px] font-semibold text-slate-200 truncate">{st.name}</div>
              <div className="text-[9px] text-slate-400 truncate mt-0.5">{st.desc}</div>
            </div>
          );
        })}
      </div>

      {/* Vista previa: Salida simulada de Telegram */}
      <div className="bg-[#121824] border border-slate-800/80 rounded-xl p-4">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs">
          <div className="flex items-center gap-2 text-cyan-400 font-medium">
            <Bot className="w-4 h-4" />
            Canal Telegram: <span>@Miquel_Daily_Briefing</span>
          </div>
          <span className="text-[10px] font-mono text-slate-500">Hoy · 08:00 AM</span>
        </div>

        {telegramDelivered ? (
          <div className="space-y-3 animate-fade-in text-xs">
            <div className="bg-slate-900/90 border border-slate-700/60 rounded-lg p-3 space-y-2">
              <div className="flex items-center gap-1.5 text-amber-400 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                SÍNTESIS EJECUTIVA MATUTINA (Google Gemini Flash)
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                Buenos días. Resumen procesado tras analizar 28 titulares de fuentes nacionales e internacionales:
              </p>

              <div className="space-y-1.5 pt-1 text-[11px]">
                {SAMPLE_NEWS.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 text-slate-300">
                    <span className="text-orange-400 font-mono">[{item.category}]</span>
                    <span className="text-slate-200 font-medium">{item.source}:</span>
                    <span className="text-slate-400">{item.headline}</span>
                  </div>
                ))}
              </div>

              <div className="text-[10px] text-slate-500 pt-2 border-t border-slate-800 flex justify-between items-center">
                <span>Tokens consumidos: 482 · Latencia: 1.14s</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> 100% Automatizado
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="py-6 text-center text-slate-500 text-xs flex flex-col items-center justify-center gap-2">
            <Newspaper className="w-7 h-7 text-slate-600 animate-pulse" />
            <span>Presiona "Disparar Pipeline" arriba para observar la ejecución y despacho en tiempo real.</span>
          </div>
        )}
      </div>
    </div>
  );
};
