export type Language = 'es' | 'en' | 'va';

export interface ProjectTranslation {
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
  featured: boolean;
}

export interface SkillCategoryTranslation {
  name: string;
  skills: string[];
}

export interface UiTranslations {
  nav: {
    projects: string;
    skills: string;
    experience: string;
    contact: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleGradient: string;
    description: string;
    scrollHint: string;
    statusBadge: string;
    statusAvailable: string;
    colSoftwareTitle: string;
    colSoftwareDesc: string;
    colAiTitle: string;
    colAiDesc: string;
    colRoboticsTitle: string;
    colRoboticsDesc: string;
  };
  projectsShowcase: {
    topBadge: string;
    scrollPrompt: string;
    projectTag: string;
    verifiedTag: string;
    footerTitle: string;
    roboticsCodeTitle: string;
    roboticsCodeDesc: string;
    roboticsActivePill: string;
  };
  skillsSequence: {
    topBadge: string;
    title: string;
    subtitle: string;
    stage1Badge: string;
    stage1Title: string;
    stage1Desc: string;
    stage2Badge: string;
    stage2Title: string;
    stage2Desc: string;
    stage3Badge: string;
    stage3Title: string;
    stage3Desc: string;
    monitorTitle: string;
    levelAdvanced: string;
    levelFluent: string;
    levelSpecialty: string;
    levelPractical: string;
    monitorFooter: string;
  };
  experience: {
    badge: string;
    title: string;
    daidalonicTitle: string;
    daidalonicRole: string;
    daidalonicDesc: string;
    upvTitle: string;
    upvDegree: string;
    upvDesc: string;
    awardTitle: string;
    awardProject: string;
    awardDesc: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    boxBadge: string;
    boxTitle: string;
    boxReplyTime: string;
    interestsLabel: string;
    topics: string[];
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    secureNotice: string;
    sendButton: string;
    successTitle: string;
    successDesc: (email: string, topic: string) => string;
  };
  footer: {
    rights: string;
  };
}

export const TRANSLATIONS: Record<Language, { ui: UiTranslations; projects: ProjectTranslation[]; skills: SkillCategoryTranslation[] }> = {
  es: {
    ui: {
      nav: {
        projects: 'Proyectos',
        skills: 'Habilidades',
        experience: 'Trayectoria',
        contact: 'Contacto'
      },
      hero: {
        badge: 'Hola, soy Miquel Navarrete de Lanuza',
        titleLine1: 'Desarrollo web, pipelines de IA',
        titleGradient: 'y sistemas interactivos.',
        description: 'Estudiante de Informática en la UPV. Combino la creación de aplicaciones prácticas para empresas locales reales con la automatización inteligente de procesos y el trabajo en robótica y visión por computador.',
        scrollHint: 'Desplaza para ver mis áreas y proyectos',
        statusBadge: 'UPV · 3º CURSO',
        statusAvailable: 'DISPONIBLE',
        colSoftwareTitle: 'Software & Web Real',
        colSoftwareDesc: 'Desarrollo de herramientas de gestión y presupuestos para negocios reales (React, TS, Java) con cálculo de impuestos y generación PDF.',
        colAiTitle: 'Automatización & IA',
        colAiDesc: 'Pipelines matutinos en n8n conectados a LLMs (Google Gemini Flash) y mensajería en Telegram para análisis y filtrado de información.',
        colRoboticsTitle: 'Robótica & Visión',
        colRoboticsDesc: 'Miembro de Kinema Nexus (DAIDALONIC UPV): teleoperación de brazo industrial UR5, clasificación de posturas con YOLO Pose y límites espaciales en RoboDK.'
      },
      projectsShowcase: {
        topBadge: 'Ecosistema de Software · Proyectos Seleccionados',
        scrollPrompt: 'Desplaza para avanzar',
        projectTag: 'PROYECTO',
        verifiedTag: 'Despliegue verificado en producción',
        footerTitle: 'Miquel Navarrete · Proyectos',
        roboticsCodeTitle: 'KINEMA_NEXUS // CLASIFICADOR DE POSTURAS',
        roboticsCodeDesc: 'Módulo de visión por computador con YOLO Pose integrado con brazo robótico UR5 y comprobación de límites espaciales en RoboDK.',
        roboticsActivePill: '✓ Clasificación cinemática activa (Extendidos vs Flexionados)'
      },
      skillsSequence: {
        topBadge: 'Especialidades Técnicas // Lo que sé hacer',
        title: 'Desglose de Habilidades',
        subtitle: 'Un recorrido detallado por mis lenguajes de programación, automatizaciones y proyectos prácticos.',
        stage1Badge: 'ETAPA 01 // LENGUAJES & BASES',
        stage1Title: 'Dominio Multilenguaje',
        stage1Desc: 'Base sólida en programación orientada a objetos con Java y Python. Desarrollo web moderno con TypeScript / JavaScript, HTML & CSS, diseño de consultas en SQL y nociones prácticas de C# y C/C++ para hardware. Control de versiones diario con Git & GitHub.',
        stage2Badge: 'ETAPA 02 // PIPELINES & MODELOS',
        stage2Title: 'Automatizaciones con n8n & LLMs',
        stage2Desc: 'Creación de flujos inteligentes que se disparan en segundo plano. Integración de la API de Google Gemini Flash para sintetizar noticias RSS matutinas, filtrado con código JavaScript en nodos y despacho instantáneo con bots de Telegram.',
        stage3Badge: 'ETAPA 03 // VISIÓN & SISTEMAS REALES',
        stage3Title: 'Robótica (Daidalonic) & Apps Desktop',
        stage3Desc: 'Desarrollo en Kinema Nexus: teleoperación con brazo robótico UR5 y tracking articular 3D con YOLO Pose en Python. Además, desarrollo de software de escritorio en Java (JavaFX / Scene Builder) y apps web en producción para carpinterías locales.',
        monitorTitle: 'Nivel de Integración en Proyectos',
        levelAdvanced: 'Avanzado',
        levelFluent: 'Fluido',
        levelSpecialty: 'Especialidad',
        levelPractical: 'Práctico',
        monitorFooter: '✓ Pruebas en proyectos reales'
      },
      experience: {
        badge: 'Formación & Logros Oficiales',
        title: 'Trayectoria Activa',
        daidalonicTitle: 'DAIDALONIC · Kinema Nexus',
        daidalonicRole: 'Robotics & Computer Vision Member',
        daidalonicDesc: 'Teleoperación para brazo industrial UR5 en RoboDK con visión artificial en Python. Implementación de tracking articular YOLO Pose y módulo de control espacial para impedir colisiones con la mesa de trabajo.',
        upvTitle: 'Universitat Politècnica de València',
        upvDegree: 'Grado en Ingeniería Informática (2024 - 2028 en curso)',
        upvDesc: 'Formación en programación orientada a objetos (Java, Python), estructuras de datos, algoritmia, bases de datos relacionales SQL y diseño de aplicaciones.',
        awardTitle: '1er Premio Feria Tecnológica UPV',
        awardProject: 'Mesa Arcade Custom (Arduino / C++) · 2024',
        awardDesc: 'Modelado 3D en SketchUp, diseño y simulación en Tinkercad y programación embebida en C/C++ sobre Arduino (Snake, Tetris, matriz de LEDs RGB y display LCD).'
      },
      contact: {
        badge: 'Canal Directo',
        title: '¿Tienes un proyecto o propuesta en mente?',
        subtitle: 'Abierto a proyectos de software, desarrollo de automatizaciones con IA o robótica.',
        boxBadge: 'Canal de Comunicación Directo',
        boxTitle: 'Enviemos un mensaje',
        boxReplyTime: 'Generalmente respondo en menos de 24 horas.',
        interestsLabel: '¿Sobre qué te gustaría hablar?',
        topics: [
          'Proyecto Web / Software',
          'Automatización & n8n / IA',
          'Robótica & Visión (Kinema)',
          'Oportunidad Laboral / Prácticas',
          'Otro Asunto'
        ],
        nameLabel: 'Nombre completo',
        namePlaceholder: 'Ej. Paula García',
        emailLabel: 'Tu correo electrónico',
        emailPlaceholder: 'tu@empresa.com',
        messageLabel: 'Detalles del proyecto o mensaje',
        messagePlaceholder: 'Describe brevemente qué necesitas construir, el reto de automatización o si quieres concertar una videollamada...',
        secureNotice: 'Conexión directa a la bandeja de entrada',
        sendButton: 'Enviar Mensaje',
        successTitle: '¡Mensaje preparado con éxito!',
        successDesc: (email, topic) => `Se ha generado el despacho hacia ${email} clasificado bajo [${topic}].`
      },
      footer: {
        rights: 'Todos los derechos reservados.'
      }
    },
    projects: [
      {
        id: 'kinema-nexus-cv',
        title: 'Teleoperación Robótica & Visión por Computador',
        subtitle: 'Brazo UR5 & Detección Cinemática de Pose',
        category: 'Robotics & CV',
        badge: 'DAIDALONIC · UPV (Kinema Nexus)',
        period: '2026 - Presente',
        tags: ['Python', 'YOLO Pose', 'Computer Vision', 'RoboDK', 'UR5 Robot'],
        description: 'Desarrollo de teleoperación robótica para controlar un brazo industrial UR5 mediante visión por computador. Detección con YOLO Pose de extremidades (hombro, codo y mano), clasificación de brazos extendidos vs flexionados y módulo de seguridad de espacio para impedir colisiones con la mesa de trabajo.',
        highlights: [
          'Clasificación cinemática en tiempo real mediante vectorización geométrica de keypoints.',
          'Módulo de validación de envolvente espacial para impedir que el efector sobrepase la mesa.',
          'Integración de pipeline multicámara sincronizada en Python.'
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
        description: 'Sistema que se ejecuta cada mañana a las 08:00 AM. Extrae noticias de fuentes principales (El País, BBC Mundo, Las Provincias, The New York Times), desduplica y limpia el contenido en JavaScript y envía el texto estructurado a Google Gemini Flash para redactar un resumen conciso categorizado directo a Telegram.',
        highlights: [
          'Ingesta concurrente de 4 fuentes simultáneas.',
          'Deduplicación semántica y filtrado de ruido en tiempo de ejecución.',
          'Entrega automática formateada en Markdown por canal privado de Telegram.'
        ],
        images: ['/assets/projects/n8n-workflow.png'],
        interactiveType: 'n8n-simulator',
        featured: true
      },
      {
        id: 'navarrete-presupuestos',
        title: 'Sistema de Presupuestos & Facturación Automática',
        subtitle: 'Software a Medida para Navarrete Hnos Aluminio',
        category: 'Full-Stack',
        badge: 'Empresa Real · En Uso',
        period: '2025',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'PDF Generation', 'LocalStorage'],
        description: 'Aplicación web a medida creada para la carpintería local Navarrete Hnos Aluminio. Permite registrar clientes y pedidos, calcular precios según dimensiones y perfilería (ventanas practicables V-94, hojas dobles, persianas, mano de obra), desglosar el IVA (21%) y generar presupuestos y facturas oficiales listas para imprimir.',
        highlights: [
          'Motor de tarificación instantánea según dimensiones y perfiles seleccionados.',
          'Gestión de estados de pedidos (Pendientes, Activos, Archivados) y métricas.',
          'Generación de documentos PDF vectoriales listos para firma del cliente.'
        ],
        images: ['/assets/projects/navarrete-pedidos.png', '/assets/projects/navarrete-presupuesto.png'],
        interactiveType: 'navarrete-calc',
        featured: true
      },
      {
        id: 'running-la-safor',
        title: 'Running la Safor - Análisis de Rutas & GPX',
        subtitle: 'Suite Desktop con Visor de Rutas y Telemetría',
        category: 'Desktop & Java',
        badge: 'Proyecto UPV',
        period: '2024 - 2025',
        tags: ['Java', 'JavaFX', 'Scene Builder', 'GPX Parsing', 'Telemetry'],
        description: 'Aplicación de escritorio para corredores desarrollada en Java con Scene Builder. Permite importar archivos GPX para previsualizar rutas sobre mapas interactivos, visualizando velocidad media, perfiles de desnivel acumulado, estimación de calorías, selector de temas claro/oscuro y gestión de usuarios.',
        highlights: [
          'Parser propio de archivos GPX con cálculo de pendientes y ritmo medio.',
          'Dashboard mensual con KPIs de kilometraje, objetivos y curvas de desnivel.',
          'Interfaz modular en JavaFX con soporte de modo claro y oscuro.'
        ],
        images: ['/assets/projects/running-gpx-map.jpg', '/assets/projects/running-dashboard.jpg'],
        interactiveType: 'running-tracker',
        featured: true
      }
    ],
    skills: [
      { name: 'Lenguajes & Bases', skills: ['Java', 'Python', 'TypeScript', 'JavaScript', 'SQL', 'C#', 'C/C++', 'HTML5 / CSS3'] },
      { name: 'IA & Automatización', skills: ['n8n Pipelines', 'Google Gemini API', 'YOLO Pose & Visión', 'LLM Chains', 'REST APIs', 'RoboDK'] },
      { name: 'Frontend & Aplicaciones', skills: ['React', 'Tailwind CSS', 'JavaFX / Scene Builder', 'Vite', 'Framer Motion'] },
      { name: 'Herramientas', skills: ['Git & GitHub', 'VS Code', 'IntelliJ / NetBeans', 'Linux / Bash', 'Postman'] }
    ]
  },
  en: {
    ui: {
      nav: {
        projects: 'Projects',
        skills: 'Skills',
        experience: 'Experience',
        contact: 'Contact'
      },
      hero: {
        badge: "Hi, I'm Miquel Navarrete de Lanuza",
        titleLine1: 'Web development, AI pipelines',
        titleGradient: 'and interactive systems.',
        description: 'Computer Engineering student at UPV. I combine building practical applications for real local businesses with intelligent process automation and robotics & computer vision research.',
        scrollHint: 'Scroll to explore my fields and projects',
        statusBadge: 'UPV · 3RD YEAR',
        statusAvailable: 'AVAILABLE',
        colSoftwareTitle: 'Real-World Software & Web',
        colSoftwareDesc: 'Custom business management and quote calculating tools (React, TS, Java) with tax breakdown and instant PDF generation.',
        colAiTitle: 'Automation & AI',
        colAiDesc: 'Morning scheduled pipelines in n8n powered by LLMs (Google Gemini Flash) and Telegram messaging for daily executive news synthesis.',
        colRoboticsTitle: 'Robotics & Vision',
        colRoboticsDesc: 'Member of Kinema Nexus (DAIDALONIC UPV): UR5 robotic arm teleoperation, YOLO Pose kinematic classification and workspace safety barriers in RoboDK.'
      },
      projectsShowcase: {
        topBadge: 'Software Ecosystem · Selected Work',
        scrollPrompt: 'Scroll to advance',
        projectTag: 'PROJECT',
        verifiedTag: 'Production-ready deployment',
        footerTitle: 'Miquel Navarrete · Projects',
        roboticsCodeTitle: 'KINEMA_NEXUS // REALTIME POSE CLASSIFIER',
        roboticsCodeDesc: 'Computer vision pipeline with YOLO Pose integrated with UR5 robotic arm and workspace collision restrictions in RoboDK.',
        roboticsActivePill: '✓ Active kinematic classification (Extended vs Flexed)'
      },
      skillsSequence: {
        topBadge: 'Technical Competencies // What I Do',
        title: 'Skills Breakdown',
        subtitle: 'A walkthrough of my programming languages, automation workflows, and real-world projects.',
        stage1Badge: 'STAGE 01 // LANGUAGES & CORE',
        stage1Title: 'Multilingual Proficiency',
        stage1Desc: 'Strong foundation in object-oriented programming with Java and Python. Modern web development with TypeScript/JavaScript, HTML & CSS, relational queries in SQL, and practical knowledge of C# and C/C++ for hardware. Daily version control with Git & GitHub.',
        stage2Badge: 'STAGE 02 // PIPELINES & MODELS',
        stage2Title: 'Automations with n8n & LLMs',
        stage2Desc: 'Designing intelligent background pipelines. Integration of Google Gemini Flash API to digest daily morning RSS feeds, custom JavaScript data cleaning nodes, and instant Markdown delivery to Telegram channels.',
        stage3Badge: 'STAGE 03 // VISION & APPLIED SYSTEMS',
        stage3Title: 'Robotics (Daidalonic) & Desktop Apps',
        stage3Desc: 'Development in Kinema Nexus: teleoperation with industrial UR5 robot and 3D joint tracking with YOLO Pose in Python. Plus Java desktop software (JavaFX / Scene Builder) and production React web apps for local businesses.',
        monitorTitle: 'Project Integration Level',
        levelAdvanced: 'Advanced',
        levelFluent: 'Fluent',
        levelSpecialty: 'Specialty',
        levelPractical: 'Practical',
        monitorFooter: '✓ Verified across real projects'
      },
      experience: {
        badge: 'Education & Official Achievements',
        title: 'Active Background',
        daidalonicTitle: 'DAIDALONIC · Kinema Nexus',
        daidalonicRole: 'Robotics & Computer Vision Member',
        daidalonicDesc: 'Teleoperation for industrial UR5 arm in RoboDK powered by computer vision in Python. Implementation of YOLO Pose joint tracking and workspace restriction algorithms to prevent table collisions.',
        upvTitle: 'Universitat Politècnica de València',
        upvDegree: "Bachelor's Degree in Informatics Engineering (2024 - 2028 ongoing)",
        upvDesc: 'Comprehensive study of object-oriented programming (Java, Python), algorithms and data structures, SQL databases, and software architecture.',
        awardTitle: '1st Prize UPV Technology Fair',
        awardProject: 'Custom Arcade Table (Arduino / C++) · 2024',
        awardDesc: '3D modeling in SketchUp, circuit design in Tinkercad, and embedded C/C++ programming for classic arcade games (Snake, Tetris, RGB LEDs, and LCD display).'
      },
      contact: {
        badge: 'Direct Channel',
        title: 'Have a project or opportunity in mind?',
        subtitle: 'Open to software projects, AI automation pipelines, or computer vision initiatives.',
        boxBadge: 'Direct Communication Channel',
        boxTitle: "Let's send a message",
        boxReplyTime: 'I typically respond within 24 hours.',
        interestsLabel: 'What would you like to discuss?',
        topics: [
          'Web / Software Project',
          'Automation & n8n / AI',
          'Robotics & Vision (Kinema)',
          'Internship / Job Opportunity',
          'Other Inquiries'
        ],
        nameLabel: 'Full name',
        namePlaceholder: 'e.g., Sarah Jenkins',
        emailLabel: 'Email address',
        emailPlaceholder: 'you@company.com',
        messageLabel: 'Project or message details',
        messagePlaceholder: 'Briefly describe what you would like to build or if you would like to schedule a call...',
        secureNotice: 'Direct delivery to primary inbox',
        sendButton: 'Send Message',
        successTitle: 'Message prepared successfully!',
        successDesc: (email, topic) => `Dispatch prepared to ${email} classified under [${topic}].`
      },
      footer: {
        rights: 'All rights reserved.'
      }
    },
    projects: [
      {
        id: 'kinema-nexus-cv',
        title: 'Robotic Teleoperation & Computer Vision',
        subtitle: 'UR5 Industrial Arm & Pose Kinematics',
        category: 'Robotics & CV',
        badge: 'DAIDALONIC · UPV (Kinema Nexus)',
        period: '2026 - Present',
        tags: ['Python', 'YOLO Pose', 'Computer Vision', 'RoboDK', 'UR5 Robot'],
        description: 'Robotic teleoperation system to control an industrial UR5 arm using computer vision. YOLO Pose limb tracking (shoulder, elbow, wrist), classification of extended vs flexed postures, and workspace safety boundary validation to prevent tabletop collisions.',
        highlights: [
          'Real-time kinematic classification using geometric keypoint vectorization.',
          'Spatial boundary validation module to stop the end-effector from hitting the table.',
          'Synchronized multi-camera video capture pipeline in Python.'
        ],
        images: [],
        interactiveType: 'robotics-vision',
        featured: true
      },
      {
        id: 'n8n-news-ai',
        title: 'AI News Digest & Telegram Bot Delivery',
        subtitle: 'Automated Intelligent Pipeline at 08:00 AM',
        category: 'AI & Automation',
        badge: 'Daily Production',
        period: '2025 - 2026',
        tags: ['n8n', 'Google Gemini Flash', 'Telegram Bot API', 'JavaScript', 'RSS Webhooks'],
        description: 'Automated news system firing every morning at 08:00 AM. Scrapes key press RSS feeds (El País, BBC Mundo, Las Provincias, NYT), cleans data via JavaScript nodes, and prompts Google Gemini Flash to synthesize a categorized morning briefing delivered straight to Telegram.',
        highlights: [
          'Concurrent ingestion from 4 major press sources.',
          'Semantic deduplication and noise filtering at runtime.',
          'Markdown formatted automated dispatch to private Telegram channel.'
        ],
        images: ['/assets/projects/n8n-workflow.png'],
        interactiveType: 'n8n-simulator',
        featured: true
      },
      {
        id: 'navarrete-presupuestos',
        title: 'Quote Calculation & Automated Invoicing',
        subtitle: 'Tailor-Made Software for Navarrete Hnos Aluminio',
        category: 'Full-Stack',
        badge: 'Real Business · Live',
        period: '2025',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'PDF Generation', 'LocalStorage'],
        description: 'Custom web application built for local carpentry business Navarrete Hnos Aluminio. Handles client management, parametric quote calculation based on dimensions (V-94 casement windows, double-sashes, shutters, labor), 21% VAT breakdown, and one-click printable PDF invoicing.',
        highlights: [
          'Instant pricing calculation engine based on custom dimensions and profiles.',
          'Order lifecycle management (Pending, Active, Archived) and billing metrics.',
          'Vector PDF invoice and quote generation ready for client signature.'
        ],
        images: ['/assets/projects/navarrete-pedidos.png', '/assets/projects/navarrete-presupuesto.png'],
        interactiveType: 'navarrete-calc',
        featured: true
      },
      {
        id: 'running-la-safor',
        title: 'Running la Safor - Route & GPX Analytics',
        subtitle: 'Desktop Application with Telemetry & Map Viewer',
        category: 'Desktop & Java',
        badge: 'UPV Project',
        period: '2024 - 2025',
        tags: ['Java', 'JavaFX', 'Scene Builder', 'GPX Parsing', 'Telemetry'],
        description: 'Desktop application for runners developed in Java using Scene Builder. Allows importing GPX tracks to inspect routes on interactive maps, elevation profiles, average pace, calorie burn estimates, and light/dark theme support.',
        highlights: [
          'Custom GPX file parser with gradient, speed, and pace analytics.',
          'Monthly telemetry dashboard with distance goals and elevation curves.',
          'Modular JavaFX architecture with dark and light UI modes.'
        ],
        images: ['/assets/projects/running-gpx-map.jpg', '/assets/projects/running-dashboard.jpg'],
        interactiveType: 'running-tracker',
        featured: true
      }
    ],
    skills: [
      { name: 'Languages & Core', skills: ['Java', 'Python', 'TypeScript', 'JavaScript', 'SQL', 'C#', 'C/C++', 'HTML5 / CSS3'] },
      { name: 'AI & Automation', skills: ['n8n Pipelines', 'Google Gemini API', 'YOLO Pose & Vision', 'LLM Chains', 'REST APIs', 'RoboDK'] },
      { name: 'Frontend & App Dev', skills: ['React', 'Tailwind CSS', 'JavaFX / Scene Builder', 'Vite', 'Framer Motion'] },
      { name: 'Developer Tools', skills: ['Git & GitHub', 'VS Code', 'IntelliJ / NetBeans', 'Linux / Bash', 'Postman'] }
    ]
  },
  va: {
    ui: {
      nav: {
        projects: 'Projectes',
        skills: 'Habilitats',
        experience: 'Trajectòria',
        contact: 'Contacte'
      },
      hero: {
        badge: 'Hola, soc Miquel Navarrete de Lanuza',
        titleLine1: "Desenvolupament web, pipelines d'IA",
        titleGradient: 'i sistemes interactius.',
        description: "Estudiant d'Informàtica a la UPV. Combine la creació d'aplicacions pràctiques per a empreses locals reals amb l'automatització intel·ligent de processos i el treball en robòtica i visió per computador.",
        scrollHint: 'Desplaça per a vore les meues àrees i projectes',
        statusBadge: 'UPV · 3r CURS',
        statusAvailable: 'DISPONIBLE',
        colSoftwareTitle: 'Software & Web Real',
        colSoftwareDesc: 'Desenvolupament de ferramentes de gestió i pressupostos per a negocis reals (React, TS, Java) amb càlcul d’impostos i generació PDF.',
        colAiTitle: 'Automatització & IA',
        colAiDesc: "Pipelines matinals en n8n connectats a LLMs (Google Gemini Flash) i missatgeria en Telegram per a filtrat d'informació.",
        colRoboticsTitle: 'Robòtica & Visió',
        colRoboticsDesc: 'Membre de Kinema Nexus (DAIDALONIC UPV): teleoperació de braç industrial UR5, classificació de postures amb YOLO Pose i límits espacials en RoboDK.'
      },
      projectsShowcase: {
        topBadge: 'Ecosistema de Software · Projectes Seleccionats',
        scrollPrompt: 'Desplaça per avançar',
        projectTag: 'PROJECTE',
        verifiedTag: 'Desplegament verificat en producció',
        footerTitle: 'Miquel Navarrete · Projectes',
        roboticsCodeTitle: 'KINEMA_NEXUS // CLASSIFICADOR DE POSTURES',
        roboticsCodeDesc: 'Mòdul de visió per computador amb YOLO Pose integrat amb braç robòtic UR5 i comprovació de límits espacials en RoboDK.',
        roboticsActivePill: '✓ Classificació cinemàtica activa (Estesos vs Flexionats)'
      },
      skillsSequence: {
        topBadge: 'Especialitats Tècniques // El que sé fer',
        title: "Desglossament d'Habilitats",
        subtitle: 'Un recorregut detallat pels meus llenguatges de programació, automatitzacions i projectes pràctics.',
        stage1Badge: 'ETAPA 01 // LLENGUATGES & BASES',
        stage1Title: 'Domini Multillenguatge',
        stage1Desc: "Base sòlida en programació orientada a objectes amb Java i Python. Desenvolupament web modern amb TypeScript / JavaScript, HTML & CSS, consultes en SQL i nocions pràctiques de C# i C/C++ per a hardware. Control de versions diari amb Git & GitHub.",
        stage2Badge: 'ETAPA 02 // PIPELINES & MODELS',
        stage2Title: 'Automatitzacions amb n8n & LLMs',
        stage2Desc: "Creació de fluxos intel·ligents que s'executen en segon pla. Integració de l'API de Google Gemini Flash per a sintetitzar notícies RSS de matí, filtrat amb JavaScript en nodes i enviament immediat amb bots de Telegram.",
        stage3Badge: 'ETAPA 03 // VISIÓ & SISTEMES REALS',
        stage3Title: 'Robòtica (Daidalonic) & Apps Desktop',
        stage3Desc: 'Desenvolupament en Kinema Nexus: teleoperació amb braç robòtic UR5 i tracking articular 3D amb YOLO Pose en Python. A més, software d’escriptori en Java (JavaFX / Scene Builder) i aplicacions web en producció per a fusteries locals.',
        monitorTitle: 'Nivell d’Integració en Projectes',
        levelAdvanced: 'Avançat',
        levelFluent: 'Fluid',
        levelSpecialty: 'Especialitat',
        levelPractical: 'Pràctic',
        monitorFooter: '✓ Proves en projectes reals'
      },
      experience: {
        badge: 'Formació & Reconeixements Oficials',
        title: 'Trajectòria Activa',
        daidalonicTitle: 'DAIDALONIC · Kinema Nexus',
        daidalonicRole: 'Robotics & Computer Vision Member',
        daidalonicDesc: 'Teleoperació per a braç industrial UR5 en RoboDK amb visió artificial en Python. Implementació de tracking articular YOLO Pose i mòdul de control espacial per a impedir col·lisions amb la taula de treball.',
        upvTitle: 'Universitat Politècnica de València',
        upvDegree: "Grau en Enginyeria Informàtica (2024 - 2028 en curs)",
        upvDesc: 'Formació en programació orientada a objectes (Java, Python), estructures de dades, algorísmia, bases de dades relacionals SQL i disseny d’aplicacions.',
        awardTitle: '1r Premi Fira Tecnològica UPV',
        awardProject: 'Taula Arcade Custom (Arduino / C++) · 2024',
        awardDesc: 'Modelat 3D en SketchUp, disseny i simulació en Tinkercad i programació en C/C++ sobre Arduino (Snake, Tetris, matriu de LEDs RGB i pantalla LCD).'
      },
      contact: {
        badge: 'Canal Directe',
        title: 'Tens algun projecte o proposta en ment?',
        subtitle: "Obert a projectes de software, desenvolupament d'automatitzacions amb IA o robòtica.",
        boxBadge: 'Canal de Comunicació Directe',
        boxTitle: 'Enviem un missatge',
        boxReplyTime: 'Normalment respong en menys de 24 hores.',
        interestsLabel: 'Sobre què t’agradaria parlar?',
        topics: [
          'Projecte Web / Software',
          'Automatització & n8n / IA',
          'Robòtica & Visió (Kinema)',
          'Oportunitat Laboral / Pràctiques',
          'Altre Assumpte'
        ],
        nameLabel: 'Nom complet',
        namePlaceholder: 'Ex. Pau Garcia',
        emailLabel: 'El teu correu electrònic',
        emailPlaceholder: 'tu@empresa.com',
        messageLabel: 'Detalls del projecte o missatge',
        messagePlaceholder: 'Descriu breument què necessites construir, el repte d’automatització o si vols concertar una trucada...',
        secureNotice: 'Connexió directa a la safata d’entrada',
        sendButton: 'Enviar Missatge',
        successTitle: 'Missatge preparat amb èxit!',
        successDesc: (email, topic) => `S'ha generat el despatx cap a ${email} classificat sota [${topic}].`
      },
      footer: {
        rights: 'Tots els drets reservats.'
      }
    },
    projects: [
      {
        id: 'kinema-nexus-cv',
        title: 'Teleoperació Robòtica & Visió per Computador',
        subtitle: 'Braç UR5 & Detecció Cinemàtica de Pose',
        category: 'Robotics & CV',
        badge: 'DAIDALONIC · UPV (Kinema Nexus)',
        period: '2026 - Present',
        tags: ['Python', 'YOLO Pose', 'Computer Vision', 'RoboDK', 'UR5 Robot'],
        description: 'Desenvolupament de teleoperació robòtica per a controlar un braç industrial UR5 mitjançant visió per computador. Detecció amb YOLO Pose de membres (muscle, colze i mà), classificació de braços estesos vs flexionats i mòdul de seguretat d’espai per a impedir col·lisions amb la taula de treball.',
        highlights: [
          'Classificació cinemàtica en temps real mitjançant vectorització geomètrica de keypoints.',
          'Mòdul de validació d’envolupant espacial per a impedir que l’efector sobrepasse la taula.',
          'Integració de pipeline multicàmera sincronitzada en Python.'
        ],
        images: [],
        interactiveType: 'robotics-vision',
        featured: true
      },
      {
        id: 'n8n-news-ai',
        title: 'Síntesi de Premsa amb IA & Bot de Telegram',
        subtitle: 'Pipeline Intel·ligent Automatitzat a les 08:00 AM',
        category: 'AI & Automation',
        badge: 'Producció Diària',
        period: '2025 - 2026',
        tags: ['n8n', 'Google Gemini Flash', 'Telegram Bot API', 'JavaScript', 'RSS Webhooks'],
        description: 'Sistema que s’executa cada matí a les 08:00 AM. Extrau notícies de fonts principals (El País, BBC Mundo, Las Provincias, The New York Times), desduplica i neteja el contingut en JavaScript i envia el text estructurat a Google Gemini Flash per a redactar un resum concís classificat directe a Telegram.',
        highlights: [
          'Ingesta concurrent de 4 fonts simultànies.',
          'Deduplicació semàntica i filtrat de soroll en temps d’execució.',
          'Enviament automàtic formatat en Markdown per canal privat de Telegram.'
        ],
        images: ['/assets/projects/n8n-workflow.png'],
        interactiveType: 'n8n-simulator',
        featured: true
      },
      {
        id: 'navarrete-presupuestos',
        title: 'Sistema de Pressupostos & Facturació Automàtica',
        subtitle: 'Software a Mida per a Navarrete Hnos Aluminio',
        category: 'Full-Stack',
        badge: 'Empresa Real · En Ús',
        period: '2025',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'PDF Generation', 'LocalStorage'],
        description: 'Aplicació web a mida creada per a la fusteria local Navarrete Hnos Aluminio. Permet registrar clients i comandes, calcular preus segons dimensions i perfileria (finestres practicables V-94, fulles dobles, persianes, mà d’obra), desglossar l’IVA (21%) i generar pressupostos i factures oficials llestes per a imprimir.',
        highlights: [
          'Motor de tarifació instantània segons dimensions i perfils seleccionats.',
          'Gestió d’estats de comandes (Pendents, Actius, Arxivats) i mètriques.',
          'Generació de documents PDF vectorials llestos per a signatura del client.'
        ],
        images: ['/assets/projects/navarrete-pedidos.png', '/assets/projects/navarrete-presupuesto.png'],
        interactiveType: 'navarrete-calc',
        featured: true
      },
      {
        id: 'running-la-safor',
        title: 'Running la Safor - Anàlisi de Rutes & GPX',
        subtitle: 'Suite Desktop amb Visor de Rutes i Telemetria',
        category: 'Desktop & Java',
        badge: 'Projecte UPV',
        period: '2024 - 2025',
        tags: ['Java', 'JavaFX', 'Scene Builder', 'GPX Parsing', 'Telemetry'],
        description: 'Aplicació d’escriptori per a corredors desenvolupada en Java amb Scene Builder. Permet importar arxius GPX per a previsualitzar rutes sobre mapes interactius, visualitzant velocitat mitjana, perfils de desnivell acumulat, estimació de calories, selector de temes clar/fosc i gestió d’usuaris.',
        highlights: [
          'Parser propi d’arxius GPX amb càlcul de pendents i ritme mitjà.',
          'Dashboard mensual amb KPIs de quilometratge, objectius i corbes de desnivell.',
          'Interfície modular en JavaFX amb suport de mode clar i fosc.'
        ],
        images: ['/assets/projects/running-gpx-map.jpg', '/assets/projects/running-dashboard.jpg'],
        interactiveType: 'running-tracker',
        featured: true
      }
    ],
    skills: [
      { name: 'Llenguatges & Bases', skills: ['Java', 'Python', 'TypeScript', 'JavaScript', 'SQL', 'C#', 'C/C++', 'HTML5 / CSS3'] },
      { name: 'IA & Automatització', skills: ['n8n Pipelines', 'Google Gemini API', 'YOLO Pose & Visió', 'LLM Chains', 'REST APIs', 'RoboDK'] },
      { name: 'Frontend & Aplicacions', skills: ['React', 'Tailwind CSS', 'JavaFX / Scene Builder', 'Vite', 'Framer Motion'] },
      { name: 'Ferramentes', skills: ['Git & GitHub', 'VS Code', 'IntelliJ / NetBeans', 'Linux / Bash', 'Postman'] }
    ]
  }
};
