# 🚨 LEER PRIMERO - IMPORTANTE 🚨

## ⚠️ PROBLEMA CONOCIDO AL DESCARGAR DESDE FIGMA MAKE

Cuando descargues este proyecto desde Figma Make, aparecerá con una **estructura INCORRECTA**:

### ❌ Estructura INCORRECTA (como descarga Figma Make):

```
krdia-landing/
├── src/                    ❌ Todo dentro de src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   └── ...
├── index.html              ❌ Archivo de Vite
├── vite.config.ts          ❌ Configuración de Vite
└── package.json
```

### ✅ Estructura CORRECTA (Next.js 15):

```
krdia-landing/
├── app/                    ✅ En la raíz, NO en src/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/             ✅ En la raíz, NO en src/
├── next.config.js          ✅ Configuración de Next.js
└── package.json
```

---

## 🔧 SOLUCIÓN AUTOMÁTICA (RECOMENDADA)

### Opción 1: Script Automático (30 segundos)

```bash
# 1. Abre la terminal en la carpeta del proyecto
cd krdia-landing

# 2. Dale permisos al script
chmod +x fix-structure.sh

# 3. Ejecuta el script
./fix-structure.sh

# 4. El script hará TODO automáticamente:
#    ✅ Elimina archivos de Vite
#    ✅ Mueve app/ de src/ a raíz
#    ✅ Mueve components/ de src/ a raíz
#    ✅ Elimina carpeta src/
#    ✅ Verifica la estructura final

# 5. Instala dependencias y ejecuta
npm install
npm run dev
```

**¡Listo! Tu proyecto estará funcionando en http://localhost:3000**

---

## 🔧 SOLUCIÓN MANUAL (Si prefieres hacerlo paso a paso)

### Paso 1: Eliminar archivos de Vite

```bash
rm index.html
rm vite.config.ts
rm vite.config.js
rm vite-env.d.ts
```

### Paso 2: Mover archivos de src/ a raíz

```bash
mv src/app ./
mv src/components ./
mv src/public ./ 2>/dev/null  # Si existe
mv src/styles ./ 2>/dev/null  # Si existe
```

### Paso 3: Eliminar carpeta src/

```bash
rm -rf src/
```

### Paso 4: Verificar estructura

```bash
# Deberías ver:
ls -la
# app/
# components/
# next.config.js
# package.json
# ...
```

### Paso 5: Instalar y ejecutar

```bash
npm install
npm run dev
```

**Abre http://localhost:3000**

---

## 📋 Checklist de Verificación Rápida

Después de ejecutar el script o hacer los cambios manuales, verifica:

- [ ] ✅ Existe carpeta `app/` **en la raíz**
- [ ] ✅ Existe carpeta `components/` **en la raíz**
- [ ] ✅ **NO** existe carpeta `src/`
- [ ] ✅ **NO** existe `index.html`
- [ ] ✅ **NO** existe `vite.config.ts`
- [ ] ✅ Existe `next.config.js`
- [ ] ✅ `package.json` contiene `"next": "^15.1.3"`

---

## 🆘 ¿Necesitas Más Ayuda?

Si después de ejecutar el script sigues teniendo problemas:

1. **Ejecuta el verificador**:
   ```bash
   chmod +x verify-structure.sh
   ./verify-structure.sh
   ```

2. **Lee la documentación**:
   - `AYUDA_RAPIDA.md` - Soluciones rápidas
   - `INSTRUCCIONES_DESCARGA.md` - Guía detallada
   - `DOCUMENTACION.md` - Índice completo

3. **Estructura final esperada**:
   ```
   krdia-landing/
   ├── app/
   │   ├── layout.tsx
   │   ├── page.tsx
   │   └── globals.css
   ├── components/
   │   ├── Header.tsx
   │   ├── Card3DPhysical.tsx
   │   └── ... (11 componentes)
   ├── public/
   ├── next.config.js
   ├── tailwind.config.ts
   ├── tsconfig.json
   ├── package.json
   └── fix-structure.sh
   ```

---

## 🎯 Resumen Rápido

```bash
# Comando único para reorganizar TODO:
chmod +x fix-structure.sh && ./fix-structure.sh

# Luego:
npm install
npm run dev
```

**¡Eso es todo!** 🚀

---

## 📚 Documentación Completa

Este proyecto incluye **8 archivos de documentación**:

| Archivo | Descripción |
|---------|-------------|
| **LEER-PRIMERO.md** | Este archivo - EMPIEZA AQUÍ |
| **AYUDA_RAPIDA.md** | Soluciones rápidas a problemas |
| **DOCUMENTACION.md** | Índice completo de documentación |
| **INSTRUCCIONES_DESCARGA.md** | Guía detallada paso a paso |
| **README.md** | Documentación principal del proyecto |
| **VERIFICACION_PROYECTO.md** | Checklist completa |
| **ESTADO_PROYECTO.md** | Estado actual del proyecto |
| **ARCHIVOS_OBSOLETOS.md** | Info sobre archivos legacy |

---

## ⚡ TL;DR - Demasiado Largo; No Leí

```bash
chmod +x fix-structure.sh && ./fix-structure.sh && npm install && npm run dev
```

Copia y pega este comando. Ya está. 🎉

---

**Última actualización**: 2026-02-04  
**Framework**: Next.js 15.1.3 + React 19

