import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { PROJECTS, SKILL_CATEGORIES } from './data/projects';
import { ProjectItem } from './components/ProjectItem';
import { ContactForm } from './components/ContactForm';
import { 
  ArrowDown, 
  Mail, 
  ExternalLink, 
  Code2, 
  Award, 
  Send,
  Boxes,
  Cpu,
  Layers
} from 'lucide-react';

const GithubIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-[#08090d] text-slate-100 relative selection:bg-blue-600/30 selection:text-blue-300">
      {/* Barra de progreso de lectura ultra-fina estilo Stripe/Linear */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Grid discreto técnico */}
      <div className="fixed inset-0 tech-grid opacity-50 pointer-events-none z-0" />

      {/* Header sobrio y fijo */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#08090d]/80 backdrop-blur-md border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 font-semibold text-white tracking-tight hover:text-blue-400 transition-colors">
            <span className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center font-mono text-xs text-white font-bold">
              MN
            </span>
            <span>Miquel Navarrete</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#proyectos" className="hover:text-white transition-colors">Proyectos</a>
            <a href="#experiencia" className="hover:text-white transition-colors">Trayectoria</a>
            <a href="#stack" className="hover:text-white transition-colors">Stack</a>
            <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/miquel9"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white transition-colors p-2"
              title="GitHub"
            >
              <GithubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/navarretedelanuza/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors p-2"
              title="LinkedIn"
            >
              <LinkedinIcon />
            </a>
            <a
              href="#contacto"
              className="hidden sm:inline-flex text-xs font-semibold bg-white text-slate-950 hover:bg-slate-200 px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              Hablemos
            </a>
          </div>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-28 sm:pt-36 space-y-28 md:space-y-40">
        
        {/* HERO SECTION - Plain Copy, Directo y Elegante */}
        <section className="min-h-[75vh] flex flex-col justify-center max-w-3xl space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2.5 text-xs font-mono text-slate-400"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Valencia, España · UPV Ingeniería Informática</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.12]"
          >
            Software web a medida, automatizaciones con IA y robótica aplicada.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl"
          >
            Hola, soy <strong className="text-white font-medium">Miquel Navarrete de Lanuza</strong>. 
            Desarrollo aplicaciones de facturación y gestión utilizadas por empresas reales, 
            diseño flujos autónomos en <strong className="text-slate-200">n8n con Gemini</strong> y formo parte del equipo 
            de visión por computador y teleoperación robótica <strong className="text-cyan-400">Kinema Nexus (DAIDALONIC)</strong>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-blue-600/20 cursor-pointer"
            >
              Ver Proyectos Destacados
              <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white border border-white/10 text-sm font-medium px-5 py-2.5 rounded-xl transition-all cursor-pointer"
            >
              Enviar Mensaje
            </a>
          </motion.div>
        </section>

        {/* PROYECTOS - FOTOGRAFÍAS REALES & EXPLICACIÓN LIMPIA */}
        <section id="proyectos" className="space-y-16 scroll-mt-24">
          <div className="border-b border-white/[0.08] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-400">
                Selección de Trabajos
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mt-1">
                Proyectos Realizados
              </h2>
            </div>
            <p className="text-sm text-slate-400 max-w-md">
              Sistemas en producción, automatizaciones diarias y desarrollos académicos con código e interfaz funcional.
            </p>
          </div>

          <div className="space-y-16">
            {PROJECTS.map((project, idx) => (
              <ProjectItem key={project.id} project={project} index={idx} />
            ))}
          </div>
        </section>

        {/* TRAYECTORIA & LOGROS */}
        <section id="experiencia" className="space-y-12 scroll-mt-24">
          <div className="border-b border-white/[0.08] pb-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">
              Formación & Experiencia
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mt-1">
              Trayectoria Activa
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#10131d] border border-white/10 p-6 rounded-2xl flex flex-col justify-between smooth-hover">
              <div>
                <div className="text-xs font-mono text-cyan-400 mb-2">2026 - Presente</div>
                <h3 className="text-lg font-bold text-white mb-1">DAIDALONIC (Kinema Nexus)</h3>
                <div className="text-xs text-slate-400 mb-4 font-medium">Robotics & Computer Vision Member</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Integración de visión por computador con YOLO Pose para teleoperación de brazo robótico industrial UR5 y RoboDK. Clasificación cinemática y algoritmo de control de espacio para evitar colisiones con la mesa de trabajo.
                </p>
              </div>
            </div>

            <div className="bg-[#10131d] border border-white/10 p-6 rounded-2xl flex flex-col justify-between smooth-hover">
              <div>
                <div className="text-xs font-mono text-blue-400 mb-2">2024 - 2028</div>
                <h3 className="text-lg font-bold text-white mb-1">Universitat Politècnica de València</h3>
                <div className="text-xs text-slate-400 mb-4 font-medium">Grado en Ingeniería Informática</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Bases sólidas de algoritmia, estructuras de datos, programación orientada a objetos (Java, Python), bases de datos relacionales y diseño de sistemas distribuidos.
                </p>
              </div>
            </div>

            <div className="bg-[#10131d] border border-white/10 p-6 rounded-2xl flex flex-col justify-between smooth-hover">
              <div>
                <div className="text-xs font-mono text-amber-400 mb-2">2024 · Galardón</div>
                <h3 className="text-lg font-bold text-white mb-1">1er Premio Feria Tecnológica UPV</h3>
                <div className="text-xs text-slate-400 mb-4 font-medium">Mesa Arcade Custom (Arduino / C++)</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Diseño integral de hardware y software: modelado 3D en SketchUp, diseño de circuitos en Tinkercad y programación en C/C++ de juegos clásicos (Tetris, Snake) sobre microcontrolador con pantalla LCD y controles analógicos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* STACK TECNOLÓGICO */}
        <section id="stack" className="space-y-8 scroll-mt-24">
          <div className="border-b border-white/[0.08] pb-6">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400">
              Habilidades & Herramientas
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mt-1">
              Stack Técnico
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SKILL_CATEGORIES.map((cat) => (
              <div key={cat.name} className="bg-[#10131d] border border-white/10 p-5 rounded-2xl">
                <h4 className="text-sm font-semibold text-white mb-3 pb-2 border-b border-white/[0.08]">
                  {cat.name}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACTO & FORMULARIO AL CORREO */}
        <section id="contacto" className="space-y-8 scroll-mt-24 text-center">
          <div className="max-w-xl mx-auto space-y-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-400">
              ¿Hablamos?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Contacto Directo
            </h2>
            <p className="text-sm text-slate-400">
              Rellena el siguiente formulario o escribe directamente a{' '}
              <a href="mailto:miqnavdel@gmail.com" className="text-blue-400 hover:underline">
                miqnavdel@gmail.com
              </a>. Responderé con la mayor brevedad.
            </p>
          </div>

          <ContactForm />
        </section>

        {/* FOOTER */}
        <footer className="pt-16 pb-12 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} Miquel Navarrete de Lanuza.
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/miquel9" target="_blank" rel="noreferrer" className="hover:text-slate-300 transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/navarretedelanuza/" target="_blank" rel="noreferrer" className="hover:text-slate-300 transition-colors">
              LinkedIn
            </a>
            <a href="mailto:miqnavdel@gmail.com" className="hover:text-slate-300 transition-colors">
              Email
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
