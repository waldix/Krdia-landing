# Krdia – Dispersión de Tarjetas Corporativas

Landing page premium para Krdia, producto fintech B2B de dispersión de tarjetas corporativas. Diseño altamente dinámico con glassmorphism, degradados metálicos, animaciones avanzadas con Motion, y sistema de temas light/dark.

---

## 🚨 IMPORTANTE: Si acabas de descargar desde Figma Make

**El proyecto aparecerá con estructura incorrecta (archivos de Vite y carpeta `src/`)**

### ✅ Solución en 1 comando:

```bash
chmod +x fix-structure.sh && ./fix-structure.sh && npm install && npm run dev
```

**📖 Más información**: Lee [LEER-PRIMERO.md](./LEER-PRIMERO.md) si tienes problemas.

---

## Stack Tecnológico

- **Next.js 15** - Framework React para producción
- **React 19** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Tailwind CSS v4** - Framework de CSS utility-first
- **Motion (Framer Motion)** - Animaciones avanzadas y efectos 3D
- **Lucide React** - Iconos

## Características Principales

- 🎨 **Diseño Premium**: Glassmorphism y degradados metálicos plata/gris
- 🎭 **Dark/Light Mode**: Sistema de temas intercambiable con switch flotante
- 🎴 **Tarjeta 3D Física**: Tarjeta vertical realista con rotación continua automática, volumen visible, y efectos de hover
- ✨ **Animaciones Avanzadas**: Motion para efectos 3D, floating, tilt y reflejos metálicos
- 📱 **Responsive**: Diseño adaptativo para desktop y mobile
- ⚡ **Performance**: Optimizado con Next.js App Router

## Estructura del Proyecto

```
/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página home
│   └── globals.css        # Estilos globales
├── components/            # Componentes React
│   ├── Header.tsx         # Header con logo y theme toggle
│   ├── Card3DPhysical.tsx # Tarjeta 3D realista
│   ├── HeroWithPhysicalCard.tsx
│   ├── WhatIsKrdiaGlass.tsx
│   ├── BenefitsAnimated.tsx
│   ├── HowItWorksHorizontal.tsx
│   ├── UseCasesDynamic.tsx
│   ├── SecurityPremium.tsx
│   ├── FinalCTADynamic.tsx
│   ├── FooterGlass.tsx
│   ├── CursorGlow.tsx
│   └── hooks/            # Custom hooks
│       └── useInView.tsx
├── public/               # Assets estáticos
├── next.config.js        # Configuración de Next.js
├── tailwind.config.ts    # Configuración de Tailwind
└── tsconfig.json         # Configuración de TypeScript
```

## Instalación y Desarrollo

> **⚠️ IMPORTANTE**: Si descargaste el código desde Figma Make y encuentras archivos de Vite o los archivos están en una carpeta `src/`, consulta [INSTRUCCIONES_DESCARGA.md](./INSTRUCCIONES_DESCARGA.md) para resolver el problema.

### Requisitos Previos

- Node.js 18+ 
- npm, yarn, pnpm o bun

### Instalación

```bash
# Clonar el repositorio
git clone <repository-url>

# Instalar dependencias
npm install
# o
yarn install
# o
pnpm install
```

### Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev
# o
yarn dev
# o
pnpm dev

# Abrir http://localhost:3000
```

### Build para Producción

```bash
# Crear build de producción
npm run build

# Iniciar servidor de producción
npm run start
```

### Lint

```bash
npm run lint
```

## Tipografía

Todo el sitio usa la fuente **Inter** con pesos optimizados (400, 500, 600, 700) para contenido fintech, con características tipográficas avanzadas:

- `tabular-nums` para números alineados
- OpenType features activadas para diseño financiero

## Componentes Principales

### Card3DPhysical
Tarjeta 3D vertical realista con:
- Rotación continua automática (loop infinito)
- Ambas caras (frente y reverso) visibles
- Volumen físico con grosor de 3px
- Cantos laterales transparentes/translúcidos
- Efectos de hover con tilt y reflejos metálicos
- Sin marcos blancos ni drop shadows externos

### Sistema de Temas
- Toggle flotante en esquina superior derecha
- Transiciones suaves entre light/dark mode
- Degradados metálicos adaptativos

### Glassmorphism
Todas las secciones utilizan efectos de cristal con:
- Backdrop blur
- Bordes semitransparentes
- Overlays de gradientes

## Configuración de Imágenes

Las imágenes de las tarjetas usan el esquema especial `figma:asset`:

```typescript
import cardFrontImage from 'figma:asset/cd5f83a8b0f85633f582143d392e7009d88e5ddb.png';
```

## Despliegue

### Vercel (Recomendado)

La forma más fácil de desplegar es usando [Vercel](https://vercel.com):

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

### Otras Plataformas

El proyecto puede desplegarse en cualquier plataforma que soporte Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## Licencia

© 2026 Krdia. Todos los derechos reservados.

## Contacto

- Email: hola@krdia.tech
- Website: [krdia.tech](https://krdia.tech)