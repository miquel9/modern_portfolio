import React, { useState } from 'react';
import { Calculator, Download, CheckCircle2, Building, RefreshCw } from 'lucide-react';

interface WindowOption {
  id: string;
  name: string;
  basePrice: number;
  multiplier: number;
}

const OPTIONS: WindowOption[] = [
  { id: 'v94-1h', name: 'Practicable 1 hoja V-94 (120x120cm)', basePrice: 179.0, multiplier: 1.0 },
  { id: 'v94-2h', name: 'Practicable 2 hojas V-94 (120x120cm)', basePrice: 212.0, multiplier: 1.25 },
  { id: 'corr-2h', name: 'Corredera estándar Perfil 70 (150x120cm)', basePrice: 245.0, multiplier: 1.35 },
  { id: 'balcon', name: 'Balconera con rotura puente térmico', basePrice: 320.0, multiplier: 1.6 }
];

export const NavarreteCalculator: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('v94-1h');
  const [width, setWidth] = useState<number>(120);
  const [height, setHeight] = useState<number>(120);
  const [withPersiana, setWithPersiana] = useState<boolean>(true);
  const [withLabor, setWithLabor] = useState<boolean>(true);
  const [clientName, setClientName] = useState<string>('Construcciones Levantinas S.L.');
  const [status, setStatus] = useState<string | null>(null);

  const currentOption = OPTIONS.find((o) => o.id === selectedOption) || OPTIONS[0];

  // Cálculo proporcional a dimensiones (área base 1.44m2)
  const baseArea = (120 * 120) / 10000;
  const currentArea = (width * height) / 10000;
  const areaRatio = Math.max(0.6, currentArea / baseArea);

  const carpinteriaPrice = currentOption.basePrice * areaRatio;
  const persianaPrice = withPersiana ? 45.0 * (width / 100) : 0;
  const laborPrice = withLabor ? 85.0 : 0;

  const subtotal = carpinteriaPrice + persianaPrice + laborPrice;
  const iva = subtotal * 0.21;
  const total = subtotal + iva;

  const handleSimulatePDF = () => {
    setStatus('Generando PDF con membrete fiscal...');
    setTimeout(() => {
      setStatus(`¡Presupuesto #${Math.floor(1000 + Math.random() * 9000)} generado con éxito!`);
      setTimeout(() => setStatus(null), 3500);
    }, 900);
  };

  return (
    <div className="bg-[#0f131c] border border-blue-500/20 rounded-2xl p-5 md:p-6 text-slate-200 shadow-2xl relative overflow-hidden">
      {/* Header simulador */}
      <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs border border-blue-500/30">
            HNOS
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wide flex items-center gap-2">
              Navarrete Hnos · Tarificador Interactivo
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                Demo en Vivo
              </span>
            </h4>
            <p className="text-xs text-slate-400">Prueba el motor de cálculo paramétrico con IVA desglosado</p>
          </div>
        </div>
        <Building className="w-5 h-5 text-slate-500" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Formulario de configuración */}
        <div className="lg:col-span-7 space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1.5">Cliente del Presupuesto</label>
            <input
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full bg-[#161b26] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1.5">Modelo / Serie de Perfil</label>
            <select
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              className="w-full bg-[#161b26] border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-blue-500 transition-colors"
            >
              {OPTIONS.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.name} — Base {opt.basePrice}€
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">
                Ancho ({width} cm)
              </label>
              <input
                type="range"
                min="60"
                max="240"
                step="5"
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
                className="w-full accent-blue-500 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">
                Alto ({height} cm)
              </label>
              <input
                type="range"
                min="60"
                max="220"
                step="5"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full accent-blue-500 h-1.5 bg-slate-800 rounded-lg cursor-pointer"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-1">
            <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={withPersiana}
                onChange={(e) => setWithPersiana(e.target.checked)}
                className="accent-blue-500 rounded"
              />
              Añadir Cajón de Persiana Monoblock
            </label>
            <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={withLabor}
                onChange={(e) => setWithLabor(e.target.checked)}
                className="accent-blue-500 rounded"
              />
              Mano de obra y montaje
            </label>
          </div>
        </div>

        {/* Panel de desglose en vivo */}
        <div className="lg:col-span-5 bg-[#141923] border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 pb-2 border-b border-slate-800 flex justify-between">
              <span>Desglose de Factura</span>
              <span className="text-blue-400">{width}×{height} cm</span>
            </div>

            <div className="space-y-2 py-3 text-xs">
              <div className="flex justify-between text-slate-300">
                <span className="truncate pr-2">Carpintería aluminio:</span>
                <span className="font-mono">{carpinteriaPrice.toFixed(2)}€</span>
              </div>
              {withPersiana && (
                <div className="flex justify-between text-slate-300">
                  <span>Persiana aluminio inyectado:</span>
                  <span className="font-mono">+{persianaPrice.toFixed(2)}€</span>
                </div>
              )}
              {withLabor && (
                <div className="flex justify-between text-slate-300">
                  <span>Instalación & sellado:</span>
                  <span className="font-mono">+{laborPrice.toFixed(2)}€</span>
                </div>
              )}
              <div className="flex justify-between text-slate-400 pt-2 border-t border-slate-800/80">
                <span>Base Imponible:</span>
                <span className="font-mono">{subtotal.toFixed(2)}€</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>IVA (21%):</span>
                <span className="font-mono">{iva.toFixed(2)}€</span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-800">
            <div className="flex items-baseline justify-between mb-3">
              <span className="text-xs text-slate-300 font-medium">TOTAL ESTIMADO:</span>
              <span className="text-2xl font-bold font-mono text-blue-400">{total.toFixed(2)}€</span>
            </div>

            <button
              onClick={handleSimulatePDF}
              className="w-full bg-blue-600 hover:bg-blue-500 active:scale-[0.98] text-white text-xs font-semibold py-2.5 px-3 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/20 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              Emitir Presupuesto Oficial PDF
            </button>

            {status && (
              <div className="mt-2.5 text-[11px] text-center text-emerald-400 font-medium flex items-center justify-center gap-1.5 animate-fade-in">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {status}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
