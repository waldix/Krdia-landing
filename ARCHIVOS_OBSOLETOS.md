# 📦 Archivos Obsoletos y Protegidos

## Estado Actual del Proyecto

**Fecha de última limpieza**: 2026-02-04  
**Framework**: Next.js 15.1.3 + React 19  
**Estado**: ✅ 100% LIMPIO - Sin archivos de Vite

---

## ✅ Proyecto Completamente Migrado a Next.js

Este proyecto ha sido **completamente migrado de Vite/React a Next.js 15 con App Router**. Todos los archivos obsoletos de Vite fueron eliminados.

### Archivos de Vite que FUERON eliminados:

- ❌ `index.html` (entrypoint de Vite)
- ❌ `vite.config.ts` (configuración de Vite)
- ❌ `vite.config.js` (configuración de Vite)
- ❌ `vite-env.d.ts` (tipos de Vite)
- ❌ Todos los componentes duplicados de React/Vite

### Archivos de Next.js activos:

- ✅ `/app/layout.tsx` - Layout principal de Next.js 15
- ✅ `/app/page.tsx` - Página home (entrypoint real)
- ✅ `/app/globals.css` - Estilos globales con sistema de temas
- ✅ `/next.config.js` - Configuración de Next.js
- ✅ `/package.json` - Dependencias de Next.js 15

---

## ⚠️ Archivo de Compatibilidad con Figma Make

### `/App.tsx` (archivo protegido)

**Estado**: ✅ EXISTE (solo para compatibilidad)  
**Propósito**: Figma Make requiere `/App.tsx` como entrypoint, pero Next.js usa `/app/page.tsx`  
**Solución**: `/App.tsx` re-exporta `/app/page.tsx` para mantener compatibilidad

```typescript
/**
 * ESTE ARCHIVO ES SOLO PARA COMPATIBILIDAD CON FIGMA MAKE
 * Next.js 15 con App Router usa /app/page.tsx como entrypoint real.
 */
export { default } from './app/page';
```

**¿Qué hacer?**:
- ✅ **Dentro de Figma Make**: Mantener el archivo tal como está
- ✅ **Fuera de Figma Make** (Git, producción): Puedes eliminarlo si no usas Figma Make
- ✅ **En Next.js**: El verdadero entrypoint es `/app/page.tsx`

---

## 📁 Estructura de Carpetas Correcta

### ✅ Estructura Actual (CORRECTA para Next.js):

```
/
├── app/                    ← Next.js App Router (en la raíz)
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/             ← Componentes (en la raíz)
│   ├── Header.tsx
│   ├── Card3DPhysical.tsx
│   └── ... (11 componentes)
├── public/                 ← Assets estáticos
├── App.tsx                 ← Solo para Figma Make
├── package.json
├── next.config.js
└── tsconfig.json
```

### ❌ Estructura INCORRECTA (NO usar):

```
/
├── src/                    ← ❌ Next.js NO usa src/ por defecto
│   ├── app/
│   └── components/
├── index.html              ← ❌ Archivo de Vite
├── vite.config.ts          ← ❌ Configuración de Vite
└── package.json
```

---

## 🚨 Si Encuentras Archivos de Vite al Descargar

Si al descargar el código desde Figma Make aparecen archivos de Vite o los archivos están en `src/`:

### Paso 1: Eliminar archivos de Vite

```bash
rm index.html
rm vite.config.ts
rm vite.config.js
rm vite-env.d.ts
```

### Paso 2: Mover archivos de src/ a raíz (si es necesario)

```bash
mv src/app ./
mv src/components ./
rm -rf src/
```

### Paso 3: Verificar package.json

Asegúrate de que `package.json` contenga:

```json
{
  "dependencies": {
    "next": "^15.1.3",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  }
}
```

**NO** debe contener:
```json
{
  "dependencies": {
    "vite": "...",  // ❌ ELIMINAR
  }
}
```

### Paso 4: Ejecutar el script de verificación

```bash
chmod +x verify-structure.sh
./verify-structure.sh
```

---

## 📚 Componentes Activos (11 componentes)

Estos son los **únicos componentes en uso** en el proyecto:

1. `/components/Header.tsx` - Header con logo y theme toggle
2. `/components/Card3DPhysical.tsx` - Tarjeta 3D realista
3. `/components/HeroWithPhysicalCard.tsx` - Hero section
4. `/components/WhatIsKrdiaGlass.tsx` - Sección "Qué es Krdia"
5. `/components/BenefitsAnimated.tsx` - Beneficios animados
6. `/components/HowItWorksHorizontal.tsx` - Cómo funciona
7. `/components/UseCasesDynamic.tsx` - Casos de uso
8. `/components/SecurityPremium.tsx` - Seguridad
9. `/components/FinalCTADynamic.tsx` - CTA final
10. `/components/FooterGlass.tsx` - Footer
11. `/components/CursorGlow.tsx` - Efecto de cursor

### Hook Personalizado:
- `/components/hooks/useInView.tsx` - Detectar visibilidad de elementos

---

## 📖 Documentación Disponible

1. **README.md** - Documentación principal del proyecto
2. **INSTRUCCIONES_DESCARGA.md** - Guía detallada de descarga y configuración
3. **VERIFICACION_PROYECTO.md** - Lista de verificación del proyecto
4. **ARCHIVOS_OBSOLETOS.md** - Este archivo
5. **verify-structure.sh** - Script de verificación automática

---

## 🎯 Resumen

- ✅ Proyecto 100% migrado a Next.js 15
- ✅ 0 archivos de Vite
- ✅ 0 archivos en carpeta `src/`
- ✅ 11 componentes activos en uso
- ✅ Estructura correcta de Next.js
- ✅ `/App.tsx` solo para compatibilidad con Figma Make
- ✅ Listo para ejecutar con `npm install && npm run dev`

---

**Si tienes problemas al descargar**, consulta [INSTRUCCIONES_DESCARGA.md](./INSTRUCCIONES_DESCARGA.md)
