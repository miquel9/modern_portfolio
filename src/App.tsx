import React, { useState } from 'react';
import { PROJECTS, SKILL_CATEGORIES } from './data/projects';
import { ProjectItem } from './components/ProjectItem';
import { ContactForm } from './components/ContactForm';
import { ArrowDown, Mail, ArrowUpRight } from 'lucide-react';

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
  return (
    <div className="min-h-screen bg-[#070708] text-[#f2f2f3]">
      {/* 1. NAV (Strict design-taste: fixed, 72px, hairline underneath, clean type) */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#070708]/90 backdrop-blur-md border-b border-white/[0.08]">
        <div className="max-w-[1200px] mx-auto px-6 h-[72px] flex items-center justify-between">
          <a href="#" className="font-medium text-white tracking-tight hover:opacity-80 transition-opacity">
            Miquel Navarrete
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-[#8a8d98]">
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
              className="text-[#8a8d98] hover:text-white transition-colors p-2"
              title="GitHub"
            >
              <GithubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/navarretedelanuza/"
              target="_blank"
              rel="noreferrer"
              className="text-[#8a8d98] hover:text-white transition-colors p-2"
              title="LinkedIn"
            >
              <LinkedinIcon />
            </a>
            <a
              href="#contacto"
              className="btn-taste btn-taste-primary text-xs h-[36px] px-3.5"
            >
              Contactar
            </a>
          </div>
        </div>
      </header>

      {/* 2. BODY CONTAINER */}
      <main className="max-w-[1200px] mx-auto px-6 pt-[140px] pb-24 space-y-32">
        
        {/* HERO: Plain copy, hard facts, zero filler */}
        <section className="max-w-3xl space-y-6">
          <div className="text-xs font-mono text-[#8a8d98]">
            Ingeniería Informática UPV · DAIDALONIC Robotics Member
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-[1.12]">
            Software web para empresas locales, pipelines de IA y robótica aplicada.
          </h1>

          <p className="text-base sm:text-lg text-[#8a8d98] leading-relaxed max-w-2xl">
            Soy Miquel Navarrete de Lanuza. Construyo aplicaciones reales de facturación y presupuestos para negocios locales, desarrollo pipelines automatizados en n8n con Gemini Flash y participo en Kinema Nexus (teleoperación robótica y visión por computador con YOLO Pose).
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a href="#proyectos" className="btn-taste btn-taste-primary">
              Ver proyectos
              <ArrowDown className="w-4 h-4" />
            </a>
            <a href="#contacto" className="btn-taste btn-taste-secondary">
              Escribirme
            </a>
          </div>
        </section>

        {/* PROYECTOS: Grid 2x2 sobrio (tasteskill cards.md spec) */}
        <section id="proyectos" className="space-y-8 scroll-mt-28">
          <div className="border-b border-white/[0.08] pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
              Proyectos seleccionados
            </h2>
            <div className="text-xs font-mono text-[#8a8d98]">
              4 proyectos · Código y aplicaciones en uso
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {PROJECTS.map((project, idx) => (
              <ProjectItem key={project.id} project={project} index={idx} />
            ))}
          </div>
        </section>

        {/* TRAYECTORIA: 3 columnas limpias */}
        <section id="experiencia" className="space-y-8 scroll-mt-28">
          <div className="border-b border-white/[0.08] pb-4">
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
              Trayectoria y experiencia
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="taste-card p-6">
              <div className="text-xs font-mono text-[#8a8d98] mb-2">2026 - Presente</div>
              <h3 className="text-base font-semibold text-white mb-1">DAIDALONIC (Kinema Nexus)</h3>
              <p className="text-xs text-[#8a8d98] mb-4">Robotics & Computer Vision</p>
              <p className="text-xs text-[#d4d4d8] leading-relaxed">
                Teleoperación para brazo industrial UR5 y RoboDK mediante YOLO Pose. Algoritmo cinemático de control de espacio para evitar colisiones contra la mesa de trabajo.
              </p>
            </div>

            <div className="taste-card p-6">
              <div className="text-xs font-mono text-[#8a8d98] mb-2">2024 - 2028</div>
              <h3 className="text-base font-semibold text-white mb-1">Universitat Politècnica de València</h3>
              <p className="text-xs text-[#8a8d98] mb-4">Grado en Ingeniería Informática</p>
              <p className="text-xs text-[#d4d4d8] leading-relaxed">
                Fundamentos de ingeniería del software, algoritmos y estructuras de datos, programación en Java y Python, bases de datos SQL y arquitectura de computadores.
              </p>
            </div>

            <div className="taste-card p-6">
              <div className="text-xs font-mono text-[#8a8d98] mb-2">2024</div>
              <h3 className="text-base font-semibold text-white mb-1">1er Premio Feria Tecnológica UPV</h3>
              <p className="text-xs text-[#8a8d98] mb-4">Mesa Arcade Custom (Arduino)</p>
              <p className="text-xs text-[#d4d4d8] leading-relaxed">
                Modelado 3D en SketchUp, diseño y simulación en Tinkercad y programación en C/C++ embebido en Arduino para clásicos arcade con controles físicos y display LCD.
              </p>
            </div>
          </div>
        </section>

        {/* STACK TÉCNICO */}
        <section id="stack" className="space-y-8 scroll-mt-28">
          <div className="border-b border-white/[0.08] pb-4">
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
              Stack técnico
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {SKILL_CATEGORIES.map((cat) => (
              <div key={cat.name} className="taste-card p-5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8a8d98] mb-3">
                  {cat.name}
                </h4>
                <div className="space-y-1.5 text-xs text-[#d4d4d8]">
                  {cat.skills.map((s) => (
                    <div key={s}>{s}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACTO CON FORMULARIO REAL AL CORREO */}
        <section id="contacto" className="space-y-8 scroll-mt-28">
          <div className="border-b border-white/[0.08] pb-4">
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
              Contacto
            </h2>
            <p className="text-sm text-[#8a8d98] mt-1">
              Para colaboraciones de software, automatización o robótica: puedes usar el formulario o escribir directamente a <a href="mailto:miqnavdel@gmail.com" className="text-white underline">miqnavdel@gmail.com</a>.
            </p>
          </div>

          <ContactForm />
        </section>

        {/* FOOTER */}
        <footer className="pt-12 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8a8d98]">
          <div>
            © {new Date().getFullYear()} Miquel Navarrete de Lanuza.
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/miquel9" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/navarretedelanuza/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="mailto:miqnavdel@gmail.com" className="hover:text-white transition-colors">
              Email
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
