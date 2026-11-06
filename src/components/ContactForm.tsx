import React, { useState } from 'react';
import { Send, CheckCircle2, Mail, User, MessageSquare } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    // Abrir cliente de correo preformateado directo a miqnavdel@gmail.com
    const mailtoUrl = `mailto:miqnavdel@gmail.com?subject=${encodeURIComponent(
      subject || `Contacto Portfolio de ${name}`
    )}&body=${encodeURIComponent(
      `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`
    )}`;

    window.location.href = mailtoUrl;
    setIsSent(true);
    setTimeout(() => setIsSent(false), 8000);
  };

  return (
    <div className="bg-[#11141e] border border-white/10 rounded-2xl p-6 md:p-8 max-w-xl mx-auto shadow-2xl relative">
      <div className="absolute top-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-slate-400" />
              Tu nombre
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ej. Paula García"
              className="w-full bg-[#161a27] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              Tu correo
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              className="w-full bg-[#161a27] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5">
            Asunto o propuesta
          </label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Ej. Proyecto de Automatización / Colaboración"
            className="w-full bg-[#161a27] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5 flex items-center gap-1.5">
            <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
            Mensaje
          </label>
          <textarea
            required
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Cuéntame en qué estás pensando o qué necesitas desarrollar..."
            className="w-full bg-[#161a27] border border-white/10 rounded-lg p-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-500 active:scale-[0.99] text-white font-medium text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/20 cursor-pointer"
        >
          <Send className="w-4 h-4" />
          Enviar Mensaje Directo a miqnavdel@gmail.com
        </button>

        {isSent && (
          <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-xs text-emerald-300 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Abriendo tu gestor de correo con el mensaje listo para el envío inmediato.</span>
          </div>
        )}
      </form>
    </div>
  );
};
