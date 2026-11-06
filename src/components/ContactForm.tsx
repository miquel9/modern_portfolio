import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Send, 
  CheckCircle2, 
  Mail, 
  User, 
  MessageSquare, 
  Briefcase, 
  Sparkles, 
  Copy, 
  Check,
  Calendar,
  Clock,
  ArrowRight
} from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<string>('Proyecto Web / Software');
  const [message, setMessage] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const topics = [
    'Proyecto Web / Software',
    'Automatización & n8n / IA',
    'Robótica & Visión (Kinema)',
    'Oportunidad Laboral / Prácticas',
    'Otro Asunto'
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('miqnavdel@gmail.com');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    // Disparar confetti festivo interactivo
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.8 },
        colors: ['#38bdf8', '#818cf8', '#34d399', '#f59e0b']
      });
    } catch (err) {
      // Ignorar si no está soportado
    }

    const mailtoUrl = `mailto:miqnavdel@gmail.com?subject=${encodeURIComponent(
      `[${selectedTopic}] Contacto de ${name}`
    )}&body=${encodeURIComponent(
      `Nombre: ${name}\nEmail: ${email}\nInterés: ${selectedTopic}\n\nMensaje:\n${message}\n\n--\nEnviado desde el Portfolio de Miquel Navarrete`
    )}`;

    window.location.href = mailtoUrl;
    setIsSent(true);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Contenedor estilo tarjeta de alta fidelidad con micro-relieve */}
      <div className="bg-[#0b0e17] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden text-left">
        
        {/* Glow sutil ambiental */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[90px] pointer-events-none" />

        {/* Tarjeta rápida de contacto directo */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-white/10 gap-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
              Canal de Comunicación Directo
            </span>
            <h3 className="text-2xl font-extrabold text-white tracking-tight mt-0.5">
              Enviemos un mensaje
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Generalmente respondo en menos de 24 horas.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-[#121624] border border-white/10 px-3.5 py-2 rounded-xl">
            <Mail className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono text-white select-all">miqnavdel@gmail.com</span>
            <button
              onClick={handleCopyEmail}
              type="button"
              className="p-1 rounded hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer ml-1"
              title="Copiar email"
            >
              {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Selector de Chips de Interés / Proyecto */}
          <div>
            <label className="block text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider mb-2.5 flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
              ¿Sobre qué te gustaría hablar?
            </label>
            <div className="flex flex-wrap gap-2">
              {topics.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setSelectedTopic(t)}
                  className={`text-xs px-3.5 py-2 rounded-xl font-medium border transition-all cursor-pointer ${
                    selectedTopic === t
                      ? 'bg-blue-600/25 border-blue-500 text-white shadow-sm shadow-blue-500/20 font-semibold'
                      : 'bg-white/[0.03] border-white/10 text-slate-400 hover:text-white hover:border-white/25'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Campos Nombre y Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-slate-400" />
                Nombre completo
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ej. Carmen Ortiz"
                className="w-full bg-[#121624] border border-white/10 focus:border-cyan-400 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                Tu correo electrónico
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@empresa.com"
                className="w-full bg-[#121624] border border-white/10 focus:border-cyan-400 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Mensaje */}
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5 flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
              Detalles del proyecto o mensaje
            </label>
            <textarea
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Describe brevemente qué necesitas construir, el reto de automatización o si quieres concertar una videollamada..."
              className="w-full bg-[#121624] border border-white/10 focus:border-cyan-400 rounded-xl p-4 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors resize-none"
            />
          </div>

          {/* Botón de Enviar con Feedback */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Conexión cifrada directa a la bandeja de entrada</span>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 hover:opacity-95 text-slate-950 font-bold text-sm px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-cyan-500/25 active:scale-95 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              Enviar Mensaje
            </button>
          </div>

          {isSent && (
            <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-xs text-emerald-300 flex items-center gap-3 animate-fade-in">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <div className="font-bold text-white">¡Mensaje preparado con éxito!</div>
                <div className="text-emerald-400/90 mt-0.5">
                  Se ha generado el despacho hacia <strong>miqnavdel@gmail.com</strong> con el asunto clasificado bajo <em>[{selectedTopic}]</em>.
                </div>
              </div>
            </div>
          )}

        </form>
      </div>
    </div>
  );
};
