# 🆘 Ayuda Rápida - Krdia Landing Page

## 🚨 ¿ACABAS DE DESCARGAR EL PROYECTO?

**LEE PRIMERO**: [LEER-PRIMERO.md](./LEER-PRIMERO.md)

## 🔧 SOLUCIÓN AUTOMÁTICA (RECOMENDADA)

Si descargaste el proyecto y aparecen archivos de Vite o carpeta `src/`:

```bash
# Comando único que ARREGLA TODO automáticamente:
chmod +x fix-structure.sh && ./fix-structure.sh

# Luego:
npm install
npm run dev
```

**¡Listo!** Abre http://localhost:3000 🚀

---

## 🚀 Inicio Rápido (Todo está bien)

```bash
npm install
npm run dev
```

Abre: http://localhost:3000

---

## ⚠️ Problemas Comunes al Descargar

### ❌ Problema 1: Archivos de Vite presentes

**Síntomas:**
- Existe `index.html` en la raíz
- Existe `vite.config.ts` o `vite.config.js`

**Solución:**
```bash
rm index.html
rm vite.config.ts
rm vite.config.js
rm vite-env.d.ts
```

---

### ❌ Problema 2: Archivos en carpeta `src/`

**Síntomas:**
- Carpeta `src/` existe
- `app/` y `components/` están dentro de `src/`

**Solución:**
```bash
mv src/app ./
mv src/components ./
rm -rf src/
```

---

### ❌ Problema 3: Error "Cannot find module './app/page'"

**Síntomas:**
- Al ejecutar `npm run dev` aparece este error

**Causa:**
- La carpeta `app/` no está en la raíz
- O el archivo `app/page.tsx` no existe

**Solución:**
```bash
# Verificar que app/ esté en la raíz
ls app/page.tsx
# Debería mostrar: app/page.tsx

# Si no existe, descarga nuevamente el proyecto
```

---

### ❌ Problema 4: Dependencias de Vite en package.json

**Síntomas:**
- `package.json` contiene `"vite": "..."`

**Solución:**
Edita `package.json` y asegúrate de que contenga:

```json
{
  "dependencies": {
    "next": "^15.1.3",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "motion": "^11.18.0",
    "lucide-react": "^0.469.0"
  }
}
```

**Elimina** cualquier referencia a `vite` o `@vitejs/...`

---

## 🔍 Verificación Automática

```bash
# Dale permisos de ejecución
chmod +x verify-structure.sh

# Ejecuta el script
./verify-structure.sh
```

Este script verificará:
- ✅ Carpeta `app/` en la raíz
- ✅ Carpeta `components/` en la raíz
- ✅ Archivos principales de Next.js
- ❌ NO existen archivos de Vite
- ❌ NO existe carpeta `src/`

---

## 📚 Documentación Completa

| Archivo | Descripción |
|---------|-------------|
| `README.md` | Documentación principal |
| `INSTRUCCIONES_DESCARGA.md` | Guía detallada paso a paso |
| `VERIFICACION_PROYECTO.md` | Checklist de verificación |
| `ARCHIVOS_OBSOLETOS.md` | Info sobre archivos legacy |
| `ESTADO_PROYECTO.md` | Estado actual del proyecto |
| `RESUMEN.txt` | Resumen visual |
| `AYUDA_RAPIDA.md` | Este archivo |

---

## 🎯 Estructura Correcta

```
krdia-landing/
├── app/                    ← EN LA RAÍZ (NO en src/)
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/             ← EN LA RAÍZ (NO en src/)
│   ├── Header.tsx
│   └── ... (11 componentes)
├── public/
├── App.tsx                 ← Solo para Figma Make
├── package.json
├── next.config.js
└── tsconfig.json
```

---

## 🆘 Necesitas Ayuda?

1. **Ejecuta**: `./verify-structure.sh`
2. **Lee**: `INSTRUCCIONES_DESCARGA.md`
3. **Revisa**: `VERIFICACION_PROYECTO.md`

---

## ✅ Todo Correcto?

```bash
npm install
npm run dev
```

Abre: **http://localhost:3000** 🎉