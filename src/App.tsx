import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { motion, useScroll, useSpring } from 'framer-motion';
import { PROJECTS, SKILL_CATEGORIES } from './data/projects';
import { HeroParallax } from './components/HeroParallax';
import { HorizontalScrollShowcase } from './components/HorizontalScrollShowcase';
import { AppleSkillsSequence } from './components/AppleSkillsSequence';
import { ContactForm } from './components/ContactForm';
import { 
  ArrowDown, 
  ExternalLink, 
  Cpu, 
  Mail, 
  Award, 
  Sparkles,
  Layers,
  Terminal,
  Activity,
  ChevronRight
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
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#050608] text-slate-100 relative selection:bg-blue-600/30 selection:text-blue-300">
      
      {/* Barra de progreso de lectura (Scroll-Linked) */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 origin-left z-50"
        style={{ scaleX }}
      />

      <div className="fixed inset-0 tech-dot-grid opacity-35 pointer-events-none z-0" />

      {/* Header fijo */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#050608]/85 backdrop-blur-md border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 font-bold tracking-tight text-white hover:text-cyan-400 transition-colors">
            <span className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center font-mono text-xs font-bold text-white shadow-md shadow-blue-500/20">
              MN
            </span>
            <span className="text-sm">Miquel Navarrete</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-400">
            <a href="#proyectos" className="hover:text-white transition-colors">Proyectos</a>
            <a href="#habilidades" className="hover:text-white transition-colors">Habilidades (Apple Scroll)</a>
            <a href="#experiencia" className="hover:text-white transition-colors">Trayectoria</a>
            <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/miquel9"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white transition-colors p-1.5"
              title="GitHub"
            >
              <GithubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/navarretedelanuza/"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors p-1.5"
              title="LinkedIn"
            >
              <LinkedinIcon />
            </a>
            <a
              href="#contacto"
              className="text-xs font-semibold bg-white text-slate-950 hover:bg-slate-200 px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              Contactar
            </a>
          </div>
        </div>
      </header>

      {/* 1. HERO PARALLAX: Presentación personal y visión global equilibrada */}
      <HeroParallax onExploreClick={scrollToProjects} />

      {/* 2. HORIZONTAL SCROLL-LINKED SHOWCASE (Tus proyectos en un paseo horizontal interactivo) */}
      <div id="proyectos" ref={projectsRef}>
        <HorizontalScrollShowcase />
      </div>

      {/* 3. APPLE SCROLL SEQUENCE: HABILIDADES, LENGUAJES Y LO QUE SÉ HACER */}
      <div id="habilidades">
        <AppleSkillsSequence />
      </div>

      {/* 4. TRAYECTORIA Y RECONOCIMIENTOS */}
      <section id="experiencia" className="relative z-10 max-w-6xl mx-auto px-6 py-28 border-b border-white/[0.08]">
        <div className="mb-12 border-b border-white/10 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
              Formación & Logros Oficiales
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-1">
              Trayectoria Activa
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#0b0e15] border border-white/10 p-6 rounded-2xl flex flex-col justify-between hover:border-cyan-500/40 transition-colors"
          >
            <div>
              <div className="text-xs font-mono text-cyan-400 mb-2">2026 - Presente</div>
              <h3 className="text-lg font-bold text-white mb-1">DAIDALONIC · Kinema Nexus</h3>
              <p className="text-xs text-slate-400 mb-4 font-medium">Robotics & Computer Vision Member</p>
              <p className="text-xs text-slate-300 leading-relaxed">
                Teleoperación para brazo industrial UR5 en RoboDK con visión artificial en Python. Implementación de tracking articular YOLO Pose y módulo de control espacial para impedir colisiones con la mesa de trabajo.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#0b0e15] border border-white/10 p-6 rounded-2xl flex flex-col justify-between hover:border-blue-500/40 transition-colors"
          >
            <div>
              <div className="text-xs font-mono text-blue-400 mb-2">2024 - 2028 (En curso)</div>
              <h3 className="text-lg font-bold text-white mb-1">Universitat Politècnica de València</h3>
              <p className="text-xs text-slate-400 mb-4 font-medium">Grado en Ingeniería Informática</p>
              <p className="text-xs text-slate-300 leading-relaxed">
                Formación en programación orientada a objetos (Java, Python), estructuras de datos, algoritmia, bases de datos relacionales SQL y diseño de aplicaciones.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#0b0e15] border border-white/10 p-6 rounded-2xl flex flex-col justify-between hover:border-amber-500/40 transition-colors"
          >
            <div>
              <div className="text-xs font-mono text-amber-400 mb-2">2024 · Galardón Oficial</div>
              <h3 className="text-lg font-bold text-white mb-1">1er Premio Feria Tecnológica UPV</h3>
              <p className="text-xs text-slate-400 mb-4 font-medium">Mesa Arcade Custom (Arduino / C++)</p>
              <p className="text-xs text-slate-300 leading-relaxed">
                Modelado 3D en SketchUp, diseño y simulación en Tinkercad y programación embebida en C/C++ sobre Arduino (Snake, Tetris, matriz de LEDs RGB y display LCD).
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. CONTACTO CON FORMULARIO REAL DIRECTO AL CORREO */}
      <section id="contacto" className="relative z-10 max-w-4xl mx-auto px-6 py-28 text-center space-y-8">
        <div className="space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
            Conectemos
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            ¿Tienes un proyecto o reto en mente?
          </h2>
          <p className="text-sm text-slate-400 max-w-md mx-auto">
            Abierto a proyectos de software, desarrollo de automatizaciones con IA o robótica. Rellena el formulario o escribe a <a href="mailto:miqnavdel@gmail.com" className="text-cyan-400 underline">miqnavdel@gmail.com</a>.
          </p>
        </div>

        <ContactForm />
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/[0.08] py-12 px-6 text-xs text-slate-500 font-mono">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} Miquel Navarrete de Lanuza · Portfolio con Scroll-Linked Motion
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
        </div>
      </footer>

    </div>
  );
}

export default App;
