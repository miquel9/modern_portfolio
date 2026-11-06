import { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS, SKILL_CATEGORIES } from './data/projects';
import { ProjectCard } from './components/ProjectCard';
import { 
  Mail, 
  Code2, 
  ChevronDown, 
  Award,
  Boxes
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
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filteredProjects = selectedFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedFilter);

  const categories = [
    { id: 'all', label: 'Todos los Proyectos' },
    { id: 'Robotics & CV', label: 'Robótica & Visión' },
    { id: 'AI & Automation', label: 'IA & Automatización' },
    { id: 'Full-Stack', label: 'Web & Full-Stack' },
    { id: 'Desktop & Java', label: 'Java Desktop' }
  ];

  return (
    <div className="min-h-screen bg-[#08090d] text-slate-100 selection:bg-blue-500/30 selection:text-blue-300 relative">
      {/* Background Grid Pattern & Ambient Gradients */}
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-600/15 via-purple-600/5 to-transparent blur-[140px] pointer-events-none z-0" />

      {/* Floating Header */}
      <header className="sticky top-4 z-50 max-w-5xl mx-auto px-4">
        <nav className="bg-[#0e111a]/85 backdrop-blur-md border border-slate-800/80 rounded-2xl px-5 py-3 flex items-center justify-between shadow-2xl shadow-black/50">
          <a href="#" className="flex items-center gap-2.5 font-bold tracking-tight text-white hover:text-blue-400 transition-colors">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center font-mono text-sm text-slate-950 font-black shadow-lg shadow-blue-500/20">
              MN
            </div>
            <span className="text-sm">Miquel Navarrete</span>
          </a>

          <div className="hidden sm:flex items-center gap-6 text-xs font-medium text-slate-400">
            <a href="#proyectos" className="hover:text-white transition-colors">Proyectos</a>
            <a href="#stack" className="hover:text-white transition-colors">Habilidades</a>
            <a href="#experiencia" className="hover:text-white transition-colors">Trayectoria</a>
            <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/miquel9"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/60 transition-all border border-transparent hover:border-slate-700"
              title="GitHub de Miquel"
            >
              <GithubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/navarretedelanuza/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl text-slate-400 hover:text-cyan-400 hover:bg-slate-800/60 transition-all border border-transparent hover:border-slate-700"
              title="LinkedIn de Miquel"
            >
              <LinkedinIcon />
            </a>
            <a
              href="#contacto"
              className="hidden sm:inline-flex text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white px-3.5 py-1.5 rounded-xl transition-all shadow-lg shadow-blue-600/20 cursor-pointer"
            >
              Contactar
            </a>
          </div>
        </nav>
      </header>

      <main className="relative z-10 max-w-6xl mx-auto px-4 pt-16 pb-28 space-y-28 md:space-y-36">
        {/* HERO SECTION */}
        <section className="text-center pt-8 md:pt-14 max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/60 text-xs text-slate-300 font-mono shadow-inner"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-emerald-400 font-bold">DAIDALONIC</span> · Kinema Nexus Robotics & CV
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]"
          >
            Construyendo soluciones de software,{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
              IA & automatizaciones
            </span>{' '}
            con impacto real.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto"
          >
            Soy <strong className="text-white font-semibold">Miquel Navarrete de Lanuza</strong>, estudiante de{' '}
            <span className="text-blue-300">Ingeniería Informática en la UPV</span>. Especializado en diseño de
            pipelines inteligentes en <span className="text-orange-400 font-medium">n8n con LLMs</span>, desarrollo
            de software a medida para <span className="text-white font-medium">empresas locales reales</span>, y visión
            por computador con <span className="text-cyan-400 font-medium">YOLO Pose</span> para robótica.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 pt-2"
          >
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold text-sm px-6 py-3 rounded-2xl shadow-xl shadow-blue-500/25 transition-all active:scale-95 cursor-pointer"
            >
              Explorar Proyectos & Simuladores
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </a>
            <a
              href="https://github.com/miquel9/modern_portfolio"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white font-medium text-sm px-5 py-3 rounded-2xl border border-slate-700/80 transition-all cursor-pointer"
            >
              <GithubIcon />
              Ver Código en GitHub
            </a>
          </motion.div>

          {/* Key Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-8 border-t border-slate-800/80 max-w-3xl mx-auto text-left">
            <div className="bg-[#0e111a]/60 border border-slate-800 p-3.5 rounded-2xl">
              <div className="text-2xl font-mono font-bold text-white">UPV</div>
              <div className="text-xs text-slate-400">Ingeniería Informática</div>
            </div>
            <div className="bg-[#0e111a]/60 border border-slate-800 p-3.5 rounded-2xl">
              <div className="text-2xl font-mono font-bold text-cyan-400">Kinema</div>
              <div className="text-xs text-slate-400">Daidalonic Robotics Team</div>
            </div>
            <div className="bg-[#0e111a]/60 border border-slate-800 p-3.5 rounded-2xl">
              <div className="text-2xl font-mono font-bold text-orange-400">08:00 AM</div>
              <div className="text-xs text-slate-400">Pipeline n8n diario activo</div>
            </div>
            <div className="bg-[#0e111a]/60 border border-slate-800 p-3.5 rounded-2xl">
              <div className="text-2xl font-mono font-bold text-emerald-400">Producción</div>
              <div className="text-xs text-slate-400">Software para empresa real</div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="proyectos" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-slate-800">
            <div>
              <div className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-1 flex items-center gap-2">
                <Boxes className="w-4 h-4" /> Catálogo de Proyectos
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Software con Pruebas Interactivas
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Puedes probar directamente el funcionamiento de cada aplicación o inspeccionar sus capturas reales de producción.
              </p>
            </div>

            {/* Categorías de Filtro */}
            <div className="flex flex-wrap gap-1.5 bg-[#0f131f] p-1.5 rounded-2xl border border-slate-800">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedFilter(cat.id)}
                  className={`text-xs px-3 py-1.5 rounded-xl font-medium transition-all cursor-pointer ${
                    selectedFilter === cat.id
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        </section>

        {/* TECH STACK & SKILLS */}
        <section id="stack" className="space-y-8 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center justify-center gap-2">
              <Code2 className="w-4 h-4" /> Stack Técnico
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Lenguajes, Frameworks & Arquitecturas
            </h2>
            <p className="text-sm text-slate-400">
              Herramientas con las que diseño sistemas automatizados, aplicaciones full-stack y algoritmos de percepción.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-[#0e111a]/80 border border-slate-800 p-5 rounded-2xl hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-sm font-semibold text-white mb-3 pb-2 border-b border-slate-800/80">
                    {cat.name}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((s) => (
                      <span
                        key={s}
                        className="text-xs px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-mono"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* TRAYECTORIA & FORMACIÓN */}
        <section id="experiencia" className="space-y-8 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider flex items-center justify-center gap-2">
              <Award className="w-4 h-4" /> Trayectoria
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Educación & Experiencia Práctica
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-[#0e111a]/70 border border-cyan-500/20 p-6 rounded-2xl relative overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-md border border-cyan-500/20">
                  DAIDALONIC · Kinema Nexus Team
                </span>
                <span className="text-xs text-slate-500 font-mono">2026 - Actualidad</span>
              </div>
              <h4 className="text-lg font-bold text-white">Robotics & Computer Vision Developer</h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Desarrollo en equipo de una plataforma de teleoperación para brazo robótico industrial UR5 integrada con RoboDK y visión artificial en Python. Implementación de algoritmos de clasificación cinemática de extremidades y validación geométrica de trayectorias.
              </p>
            </div>

            <div className="bg-[#0e111a]/70 border border-slate-800 p-6 rounded-2xl">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono font-bold text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded-md border border-blue-500/20">
                  Universitat Politècnica de València (UPV)
                </span>
                <span className="text-xs text-slate-500 font-mono">2024 - 2028 (En curso)</span>
              </div>
              <h4 className="text-lg font-bold text-white">Grado en Ingeniería Informática</h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Formación integral en fundamentos de ingeniería de software, estructuras de datos y algoritmos, arquitecturas computacionales, bases de datos y desarrollo orientado a objetos con Java y Python.
              </p>
            </div>

            <div className="bg-[#0e111a]/70 border border-slate-800 p-6 rounded-2xl">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-md border border-amber-500/20">
                  1er Premio Feria Tecnológica UPV 2024
                </span>
                <span className="text-xs text-slate-500 font-mono">2024</span>
              </div>
              <h4 className="text-lg font-bold text-white">Diseño & Fabricación de Mesa Arcade Custom</h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Modelado 3D en SketchUp, diseño y simulación circuital en Tinkercad y programación embebida en C/C++ para Arduino (Snake, Tetris, tiras LED RGB y pantalla LCD).
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER & CONTACT */}
        <section id="contacto" className="text-center pt-10 border-t border-slate-800/80 space-y-6">
          <div className="max-w-xl mx-auto space-y-3">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">¿Tienes un proyecto o reto en mente?</h3>
            <p className="text-sm text-slate-400">
              Abierto a nuevas colaboraciones en ingeniería de software, desarrollo de automatizaciones o proyectos de robótica y visión por computador.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:miqnavdel@gmail.com"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-5 py-3 rounded-xl transition-all shadow-lg shadow-blue-600/20 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              miqnavdel@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/navarretedelanuza/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#121824] hover:bg-[#1a2335] text-slate-200 border border-slate-700 text-xs font-medium px-5 py-3 rounded-xl transition-all cursor-pointer"
            >
              <LinkedinIcon />
              Conectar en LinkedIn
            </a>
            <a
              href="https://github.com/miquel9"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#121824] hover:bg-[#1a2335] text-slate-200 border border-slate-700 text-xs font-medium px-5 py-3 rounded-xl transition-all cursor-pointer"
            >
              <GithubIcon />
              github.com/miquel9
            </a>
          </div>

          <div className="pt-12 text-xs text-slate-500 font-mono">
            © {new Date().getFullYear()} Miquel Navarrete de Lanuza · Diseñado con precisión y taste anti-plantilla
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
