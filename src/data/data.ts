// ============================================================
//  NexoDevStudio — Datos Centrales
//  Edita este archivo para actualizar proyectos, contacto y chatbot
// ============================================================

// ─── TIPOS ──────────────────────────────────────────────────

export interface Project {
  id: string;
  title: string;
  description: string;
  tag: string;
  imageUrl: string;
  technologies: string[];
  url?: string;
}

export interface ContactInfo {
  whatsapp: string;       // Número internacional sin + ni espacios, ej: 573001234567
  whatsappDisplay: string; // Texto visible, ej: +57 300 123 4567
  instagram: string;      // URL completa del perfil
  instagramHandle: string; // Ej: @nexodevstudio
  email: string;
  phone: string;          // tel: compatible, ej: +573001234567
  phoneDisplay: string;   // Texto visible
  vcardUrl?: string;      // URL o path a archivo .vcf (opcional)
}

export interface ChatStep {
  id: string;
  message: string;
  type: 'message' | 'options' | 'input';
  options?: string[];
  placeholder?: string;
  next?: string;
  optionNextMap?: Record<string, string>;
}

// ─── DATOS DE CONTACTO ──────────────────────────────────────
// ⚠️  Actualiza estos datos con tu información real antes de producción

export const CONTACT: ContactInfo = {
  whatsapp: '573226933654',              // ← Reemplaza con tu número real
  whatsappDisplay: '+57 322 693 3654',   // ← Reemplaza con tu número real
  instagram: 'https://instagram.com/nexodevstudio', // ← Reemplaza con tu perfil real
  instagramHandle: '@nexodevstudio',     // ← Reemplaza con tu handle real
  email: 'contacto@nexodevstudio.com',
  phone: '+573226933654',                // ← Reemplaza con tu número real
  phoneDisplay: '+57 322 693 3654',      // ← Reemplaza con tu número real
};

// ─── PROYECTOS ──────────────────────────────────────────────
// Añade más proyectos aquí siguiendo la misma estructura

export const PROJECTS: Project[] = [
  {
    id: 'giordino',
    title: 'Plataforma Giordino',
    description:
      'Hicimos que comprar en línea fuera tan fácil y agradable como visitar su tienda favorita. Una experiencia pensada para el cliente final.',
    tag: 'TIENDA VIRTUAL CERCANA',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDvo9W1qvR-x2GQ6m695CuteOetrxIAOYIxOCOidXk_oUwwzRYBXKLhlTbHJVAmo01BY80RmoYu7AZnYALvei02ndiJrsc2JXS3y4HfRNqj2MsAMyV84OyltHSKRNQPLY89IbUgsobYn5CBFhSKiR8hOaTNaND_2LIl6-2kTrrs--4PQ6bzK12A45kNNh2H5VpPCc1PLjW4sDmk8KMXnuvA2fXGSFZKKNLOEa1WIIOaqsUNR3YH8bw9R5P9JMuMcQ8VYdTDaoiQHLY',
    technologies: ['ASTRO', 'REACT', 'UX OPTIMIZADA'],
  },
  {
    id: 'suroeste',
    title: 'Ecosistema Suroeste',
    description:
      'Ayudamos a restaurantes locales a llegar a más personas, creando una conexión directa y sencilla con sus clientes desde el primer clic.',
    tag: 'CONECTANDO PERSONAS',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC3WVgqfL7tNHCljH4CFTn0mVpt-tfEWFynfm9stMTLo-2ZtL8JVYrOKWqSRHiQL8s7BuLdrv_6POzha31EZ7UsINEtMT65tx1-BLj5UlfjxpBmO1S9UaTpLou56r-AcMufexVip6qDeO_DVG-n0z2dudU1P2nwAx6ySv7JCRo93nAjL9JHSBTo_fihn9Nx4rxE7-Re0EfAZsxcHrJD9GExWgck353EIZBNFO7cBZKD1LAOfwyh0hDy-WsRnoKhnIQ4uFgSlgUXfQw',
    technologies: ['MOBILE FIRST', 'HUMAN INTERACTION'],
  },
  // Ejemplo para agregar más proyectos:
  // {
  //   id: 'mi-proyecto',
  //   title: 'Nombre del Proyecto',
  //   description: 'Descripción del proyecto...',
  //   tag: 'ETIQUETA',
  //   imageUrl: 'https://url-de-imagen.com/imagen.jpg',
  //   technologies: ['TECH 1', 'TECH 2'],
  //   url: 'https://mi-proyecto.com',  // opcional
  // },
];

// ─── FLUJO DEL CHATBOT ──────────────────────────────────────
// Define las preguntas para agendar una cita

export const CHAT_STEPS: ChatStep[] = [
  {
    id: 'welcome',
    type: 'message',
    message: '👋 ¡Hola! Soy el asistente de NexoDevStudio. Voy a ayudarte a agendar una sesión con nuestro desarrollador. ¿Empezamos?',
    next: 'get_name',
  },
  {
    id: 'get_name',
    type: 'input',
    message: '¿Cómo te llamas o cómo se llama tu empresa/marca?',
    placeholder: 'Tu nombre o el de tu marca...',
    next: 'project_type',
  },
  {
    id: 'project_type',
    type: 'options',
    message: '¡Genial! ¿Qué tipo de proyecto tienes en mente?',
    options: ['🌐 Sitio web / Landing page', '📱 App móvil', '🛒 E-commerce / Tienda online', '⚙️ Sistema / App a medida', '🤔 No estoy seguro aún'],
    optionNextMap: {
      '🌐 Sitio web / Landing page': 'budget',
      '📱 App móvil': 'budget',
      '🛒 E-commerce / Tienda online': 'budget',
      '⚙️ Sistema / App a medida': 'budget',
      '🤔 No estoy seguro aún': 'budget',
    },
  },
  {
    id: 'budget',
    type: 'options',
    message: '¿Tienes una idea del presupuesto que manejas para este proyecto?',
    options: ['💰 Menos de $1.000.000 COP', '💰 $1M - $3M COP', '💰 $3M - $8M COP', '💰 Más de $8M COP', '💬 Prefiero hablarlo en la sesión'],
    next: 'availability',
  },
  {
    id: 'availability',
    type: 'options',
    message: '¿Cuándo te vendría mejor tener una sesión de 30 min con nosotros?',
    options: ['☀️ Mañanas (8am - 12pm)', '🌤️ Tarde (12pm - 5pm)', '🌙 Noche (5pm - 8pm)', '📅 Cualquier momento esta semana'],
    next: 'confirm',
  },
  {
    id: 'confirm',
    type: 'message',
    message: '¡Perfecto! Tengo todo lo que necesito para conectarte con el desarrollador. Haz clic en el botón de abajo para enviar tu solicitud por WhatsApp y coordinar el horario exacto. 🚀',
    next: 'done',
  },
];
