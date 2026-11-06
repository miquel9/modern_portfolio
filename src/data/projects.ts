export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack' | 'AI & Automation' | 'Robotics & CV' | 'Desktop & Java';
  badge: string;
  period: string;
  tags: string[];
  description: string;
  highlights: string[];
  images: string[];
  interactiveType: 'navarrete-calc' | 'n8n-simulator' | 'running-tracker' | 'robotics-vision';
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: 'kinema-nexus-cv',
    title: 'Teleoperación Robótica & Visión por Computador',
    subtitle: 'Brazo UR5 & Detección Cinemática de Pose',
    category: 'Robotics & CV',
    badge: 'DAIDALONIC · UPV (Kinema Nexus)',
    period: '2026 - Presente',
    tags: ['Python', 'YOLO Pose', 'Computer Vision', 'RoboDK', 'UR5 Robot', 'Kinematics'],
    description:
      'Desarrollo de teleoperación robótica para controlar un brazo industrial UR5 mediante visión por computador. Desarrollé e integré con el equipo algoritmos con YOLO Pose para el tracking articular 3D en tiempo real (hombro, codo, muñeca) y algoritmos de clasificación cinemática (brazos extendidos vs flexionados) con límites de seguridad del entorno para prevenir colisiones en la mesa de trabajo.',
    highlights: [
      'Clasificación de flexión/extensión de extremidades en tiempo real mediante vectorización geométrica de keypoints.',
      'Módulo de validación de envolvente espacial para impedir que el efector atraviese la mesa de trabajo.',
      'Integración de pipeline de captura multicámara sincronizada en Python.'
    ],
    images: [],
    interactiveType: 'robotics-vision',
    featured: true
  },
  {
    id: 'n8n-news-ai',
    title: 'Síntesis de Prensa con IA & Bot de Telegram',
    subtitle: 'Pipeline Inteligente Automatizado a las 08:00 AM',
    category: 'AI & Automation',
    badge: 'Producción Diaria',
    period: '2025 - 2026',
    tags: ['n8n', 'Google Gemini Flash', 'Telegram Bot API', 'JavaScript', 'RSS Webhooks'],
    description:
      'Sistema de inteligencia informativa que se ejecuta automáticamente cada mañana a las 08:00 AM. Consume múltiples feeds RSS de prensa nacional e internacional (El País, BBC Mundo, Las Provincias, The New York Times), deduplica y limpia el contenido mediante nodos JavaScript personalizados, y alimenta un LLM (Gemini Flash) para redactar un informe matutino categorizado directo a Telegram.',
    highlights: [
      'Ingesta concurrente de 5+ fuentes de noticias simultáneas.',
      'Deduplicación semántica y filtrado de ruido en tiempo de ejecución.',
      'Entrega formateada en Markdown enriquecido por Telegram Bot con un 99.9% de fiabilidad.'
    ],
    images: ['/assets/projects/n8n-workflow.png'],
    interactiveType: 'n8n-simulator',
    featured: true
  },
  {
    id: 'navarrete-presupuestos',
    title: 'Sistema de Presupuestos & Facturación Automática',
    subtitle: 'Software de Gestión a Medida para Empresa de Carpintería',
    category: 'Full-Stack',
    badge: 'Empresa Real · En Uso',
    period: '2025',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'PDF Generation', 'LocalStorage/IndexedDB'],
    description:
      'Aplicación web completa desarrollada para la empresa local Navarrete Hnos Aluminio. Automatiza el ciclo de cotización y ventas: cálculo paramétrico de precios por medidas (ventanas practicables V-94, series correderas, cristalería, persianas y mano de obra), cálculo de impuestos, base de datos de clientes y expedición de presupuestos/facturas PDF para imprenta.',
    highlights: [
      'Motor de tarificación instantánea según dimensiones y perfiles seleccionados.',
      'Gestión de estados de pedidos (Pendientes, Activos, Archivados) y métricas de facturación.',
      'Generación de documentos PDF vectoriales listos para firma del cliente.'
    ],
    images: [
      '/assets/projects/navarrete-pedidos.png',
      '/assets/projects/navarrete-presupuesto.png'
    ],
    interactiveType: 'navarrete-calc',
    featured: true
  },
  {
    id: 'running-la-safor',
    title: 'Running la Safor - Análisis de Rutas & GPX',
    subtitle: 'Suite Desktop con Visor de Rutas y Telemetría Deportiva',
    category: 'Desktop & Java',
    badge: 'UPV Project',
    period: '2024 - 2025',
    tags: ['Java', 'JavaFX', 'Scene Builder', 'GPX Parsing', 'Telemetry Analysis'],
    description:
      'Software de escritorio para corredores y montañistas desarrollado en Java. Permite cargar y procesar tracks GPX con renderizado cartográfico interactivo, mapa de calor por velocidad, perfiles de elevación altimétrica, cálculo de desniveles acumulados y un dashboard con estimación calórica y objetivos deportivos.',
    highlights: [
      'Parser propio de archivos GPX con cálculo de pendientes, velocidad media y ritmo min/km.',
      'Dashboard analítico con KPIs mensuales, medidores de ritmo y curvas de desnivel.',
      'Interfaz modular desarrollada con JavaFX Scene Builder con soporte de temas claro/oscuro.'
    ],
    images: [
      '/assets/projects/running-gpx-map.jpg',
      '/assets/projects/running-dashboard.jpg'
    ],
    interactiveType: 'running-tracker',
    featured: true
  }
];

export const SKILL_CATEGORIES = [
  {
    name: 'Lenguajes & Core',
    skills: ['Python', 'Java', 'TypeScript', 'JavaScript', 'SQL', 'C/C++', 'C#', 'HTML5 / CSS3']
  },
  {
    name: 'IA & Automatización',
    skills: ['n8n Pipelines', 'Google Gemini API', 'YOLO Pose & Vision', 'LLM Chains', 'REST APIs & Webhooks', 'RoboDK']
  },
  {
    name: 'Frontend & UI Engineering',
    skills: ['React', 'Next.js concepts', 'Tailwind CSS', 'Framer Motion', 'JavaFX / Scene Builder', 'Vite']
  },
  {
    name: 'Herramientas & Entornos',
    skills: ['Git & GitHub', 'Linux / Bash', 'VS Code', 'NetBeans / IntelliJ', 'Postman']
  }
];
