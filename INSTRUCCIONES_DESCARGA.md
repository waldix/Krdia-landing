# 📦 Instrucciones de Descarga - Krdia Landing Page

## ⚠️ IMPORTANTE: Compatibilidad Figma Make

Este proyecto está diseñado para **Next.js 15 con App Router**, pero Figma Make requiere un archivo `/App.tsx` como entrypoint.

### Estructura Correcta del Proyecto

Cuando descargues el código, asegúrate de que tenga esta estructura:

```
krdia-landing/
├── app/
│   ├── layout.tsx          ← Layout principal de Next.js
│   ├── page.tsx            ← Página home (entrypoint real)
│   └── globals.css         ← Estilos globales
├── components/
│   ├── Header.tsx
│   ├── Card3DPhysical.tsx
│   ├── HeroWithPhysicalCard.tsx
│   └── ... (resto de componentes)
├── public/
│   └── ... (imágenes y assets)
├── App.tsx                 ← Re-export para Figma Make (ignorar)
├── package.json
├── next.config.js
├── tsconfig.json
└── tailwind.config.ts
```

## 🚀 Instalación y Ejecución

### 1. Descargar el código
Descarga todos los archivos desde Figma Make.

### 2. Verificar estructura
**IMPORTANTE**: Si al descargar aparecen archivos de Vite (`index.html`, `vite.config.ts`) o los archivos de Next.js están dentro de una carpeta `src/`:

#### ❌ Estructura INCORRECTA (NO usar):
```
src/
  ├── app/
  ├── components/
  └── ...
index.html          ← Archivo de Vite (eliminar)
vite.config.ts      ← Archivo de Vite (eliminar)
```

#### ✅ Estructura CORRECTA (usar):
```
app/                ← En la raíz, NO en src/
components/         ← En la raíz, NO en src/
package.json        ← Con dependencias de Next.js
next.config.js      ← Configuración de Next.js
```

### 3. Limpiar archivos de Vite (si existen)
Si encuentras archivos de Vite, elimínalos:
```bash
rm index.html
rm vite.config.ts
rm vite.config.js
```

### 4. Mover archivos de src/ a raíz (si es necesario)
Si los archivos están dentro de `src/`, muévelos:
```bash
mv src/app ./
mv src/components ./
rm -rf src/
```

### 5. Instalar dependencias
```bash
npm install
```

### 6. Ejecutar en desarrollo
```bash
npm run dev
```

### 7. Abrir en navegador
Abre [http://localhost:3000](http://localhost:3000)

## 📝 Notas Técnicas

### Sobre `/App.tsx`
- Este archivo existe **solo para compatibilidad con Figma Make**
- NO es el entrypoint real de Next.js
- El entrypoint real es `/app/page.tsx`
- Puedes ignorar o eliminar `/App.tsx` si trabajas fuera de Figma Make

### Dependencias Principales
- **Next.js 15**: Framework React con App Router
- **React 19**: Biblioteca UI
- **Tailwind CSS 4**: Framework CSS
- **Motion**: Animaciones avanzadas (antes Framer Motion)
- **Lucide React**: Iconos

### Scripts Disponibles
```bash
npm run dev      # Desarrollo (http://localhost:3000)
npm run build    # Build para producción
npm run start    # Servidor producción
npm run lint     # Linter
```

## 🐛 Troubleshooting

### Error: "Cannot find module './app/page'"
**Solución**: Asegúrate de que la carpeta `app/` esté en la raíz del proyecto, no dentro de `src/`.

### Error: "Module not found: Can't resolve 'react'"
**Solución**: Ejecuta `npm install` para instalar todas las dependencias.

### Error: "Invalid configuration object"
**Solución**: Verifica que `next.config.js` exista en la raíz y no tengas `vite.config.ts` presente.

### Los archivos están en src/
**Solución**: Mueve `app/` y `components/` a la raíz:
```bash
mv src/* ./
rmdir src
```

## 📧 Soporte

Si tienes problemas con la descarga o ejecución, verifica:
1. ✅ La carpeta `app/` está en la raíz (no en `src/`)
2. ✅ No existen archivos de Vite (`index.html`, `vite.config.ts`)
3. ✅ `package.json` contiene `"next": "^15.1.3"`
4. ✅ Ejecutaste `npm install` antes de `npm run dev`

---

**Última actualización**: 2026-02-04
**Versión**: Next.js 15.1.3 + React 19
