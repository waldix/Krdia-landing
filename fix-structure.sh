#!/bin/bash

# ═══════════════════════════════════════════════════════════════════════════
# Script de Reorganización Automática - Krdia Landing Page
# ═══════════════════════════════════════════════════════════════════════════
# Este script convierte la estructura de Vite (generada por Figma Make)
# en una estructura correcta de Next.js 15
# ═══════════════════════════════════════════════════════════════════════════

echo "╔═══════════════════════════════════════════════════════════════════════════╗"
echo "║                KRDIA - Script de Reorganización Automática               ║"
echo "║                      De Vite/src/ a Next.js 15                            ║"
echo "╚═══════════════════════════════════════════════════════════════════════════╝"
echo ""

# Colores
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

errors=0
changes=0

echo -e "${CYAN}🔍 Analizando estructura del proyecto...${NC}"
echo ""

# ═══════════════════════════════════════════════════════════════════════════
# PASO 1: Verificar si hay archivos de Vite
# ═══════════════════════════════════════════════════════════════════════════

echo -e "${BLUE}━━━ PASO 1: Eliminar archivos de Vite ━━━${NC}"

vite_files=("index.html" "vite.config.ts" "vite.config.js" "vite-env.d.ts")
vite_found=0

for file in "${vite_files[@]}"; do
    if [ -f "$file" ]; then
        echo -e "${YELLOW}🗑️  Eliminando: $file${NC}"
        rm "$file"
        vite_found=1
        changes=$((changes+1))
    fi
done

if [ $vite_found -eq 0 ]; then
    echo -e "${GREEN}✅ No se encontraron archivos de Vite${NC}"
else
    echo -e "${GREEN}✅ Archivos de Vite eliminados${NC}"
fi

echo ""

# ═══════════════════════════════════════════════════════════════════════════
# PASO 2: Mover archivos de src/ a raíz
# ═══════════════════════════════════════════════════════════════════════════

echo -e "${BLUE}━━━ PASO 2: Reorganizar carpetas (src/ → raíz) ━━━${NC}"

if [ -d "src" ]; then
    echo -e "${YELLOW}📦 Carpeta src/ encontrada. Reorganizando...${NC}"
    
    # Mover app/ si existe en src/
    if [ -d "src/app" ]; then
        echo -e "${CYAN}  → Moviendo src/app/ a ./app/${NC}"
        if [ -d "app" ]; then
            echo -e "${YELLOW}    ⚠️  Carpeta app/ ya existe en raíz, eliminándola primero${NC}"
            rm -rf app
        fi
        mv src/app ./
        changes=$((changes+1))
        echo -e "${GREEN}  ✅ app/ movida${NC}"
    fi
    
    # Mover components/ si existe en src/
    if [ -d "src/components" ]; then
        echo -e "${CYAN}  → Moviendo src/components/ a ./components/${NC}"
        if [ -d "components" ]; then
            echo -e "${YELLOW}    ⚠️  Carpeta components/ ya existe en raíz, eliminándola primero${NC}"
            rm -rf components
        fi
        mv src/components ./
        changes=$((changes+1))
        echo -e "${GREEN}  ✅ components/ movida${NC}"
    fi
    
    # Mover public/ si existe en src/
    if [ -d "src/public" ]; then
        echo -e "${CYAN}  → Moviendo src/public/ a ./public/${NC}"
        if [ -d "public" ]; then
            echo -e "${YELLOW}    ⚠️  Carpeta public/ ya existe en raíz, fusionándola${NC}"
            cp -r src/public/* public/ 2>/dev/null
        else
            mv src/public ./
        fi
        changes=$((changes+1))
        echo -e "${GREEN}  ✅ public/ movida${NC}"
    fi
    
    # Mover styles/ si existe en src/
    if [ -d "src/styles" ]; then
        echo -e "${CYAN}  → Moviendo src/styles/ a ./styles/${NC}"
        if [ -d "styles" ]; then
            echo -e "${YELLOW}    ⚠️  Carpeta styles/ ya existe en raíz, eliminándola primero${NC}"
            rm -rf styles
        fi
        mv src/styles ./
        changes=$((changes+1))
        echo -e "${GREEN}  ✅ styles/ movida${NC}"
    fi
    
    # Mover cualquier otro archivo de src/ a raíz (excepto node_modules)
    echo -e "${CYAN}  → Verificando otros archivos en src/...${NC}"
    if [ "$(ls -A src/ 2>/dev/null | grep -v node_modules | wc -l)" -gt 0 ]; then
        for item in src/*; do
            if [ "$(basename "$item")" != "node_modules" ]; then
                itemname=$(basename "$item")
                echo -e "${CYAN}  → Moviendo src/$itemname a ./$itemname${NC}"
                if [ -e "$itemname" ]; then
                    echo -e "${YELLOW}    ⚠️  $itemname ya existe en raíz, eliminándolo primero${NC}"
                    rm -rf "$itemname"
                fi
                mv "$item" ./
                changes=$((changes+1))
            fi
        done
    fi
    
    # Eliminar carpeta src/ vacía
    echo -e "${CYAN}  → Eliminando carpeta src/ vacía...${NC}"
    rm -rf src/
    changes=$((changes+1))
    echo -e "${GREEN}✅ Carpeta src/ eliminada${NC}"
else
    echo -e "${GREEN}✅ No existe carpeta src/ (estructura correcta)${NC}"
fi

echo ""

# ═══════════════════════════════════════════════════════════════════════════
# PASO 3: Verificar y crear archivos de Next.js si faltan
# ═══════════════════════════════════════════════════════════════════════════

echo -e "${BLUE}━━━ PASO 3: Verificar archivos de configuración ━━━${NC}"

config_ok=1

# Verificar next.config.js
if [ ! -f "next.config.js" ]; then
    echo -e "${RED}❌ next.config.js no encontrado${NC}"
    config_ok=0
else
    echo -e "${GREEN}✅ next.config.js${NC}"
fi

# Verificar package.json con Next.js
if [ -f "package.json" ]; then
    if grep -q '"next"' package.json; then
        echo -e "${GREEN}✅ package.json (Next.js encontrado)${NC}"
    else
        echo -e "${RED}❌ package.json NO contiene Next.js${NC}"
        config_ok=0
    fi
else
    echo -e "${RED}❌ package.json no encontrado${NC}"
    config_ok=0
fi

# Verificar tsconfig.json
if [ ! -f "tsconfig.json" ]; then
    echo -e "${RED}❌ tsconfig.json no encontrado${NC}"
    config_ok=0
else
    echo -e "${GREEN}✅ tsconfig.json${NC}"
fi

echo ""

# ═══════════════════════════════════════════════════════════════════════════
# PASO 4: Verificar estructura final
# ═══════════════════════════════════════════════════════════════════════════

echo -e "${BLUE}━━━ PASO 4: Verificación Final ━━━${NC}"

final_ok=1

# Verificar app/
if [ -d "app" ] && [ -f "app/layout.tsx" ] && [ -f "app/page.tsx" ]; then
    echo -e "${GREEN}✅ Carpeta app/ correcta (layout.tsx + page.tsx)${NC}"
else
    echo -e "${RED}❌ Carpeta app/ incompleta o no existe${NC}"
    final_ok=0
fi

# Verificar components/
if [ -d "components" ]; then
    comp_count=$(find components -maxdepth 1 -name "*.tsx" | wc -l)
    echo -e "${GREEN}✅ Carpeta components/ ($comp_count componentes)${NC}"
else
    echo -e "${RED}❌ Carpeta components/ no existe${NC}"
    final_ok=0
fi

# Verificar que NO exista src/
if [ -d "src" ]; then
    echo -e "${RED}❌ Carpeta src/ todavía existe (debería estar eliminada)${NC}"
    final_ok=0
else
    echo -e "${GREEN}✅ NO existe carpeta src/ (correcto)${NC}"
fi

# Verificar que NO existan archivos de Vite
vite_check_ok=1
for file in "${vite_files[@]}"; do
    if [ -f "$file" ]; then
        echo -e "${RED}❌ Archivo de Vite encontrado: $file${NC}"
        vite_check_ok=0
        final_ok=0
    fi
done
if [ $vite_check_ok -eq 1 ]; then
    echo -e "${GREEN}✅ NO existen archivos de Vite (correcto)${NC}"
fi

echo ""

# ═══════════════════════════════════════════════════════════════════════════
# RESUMEN FINAL
# ═══════════════════════════════════════════════════════════════════════════

echo "╔═══════════════════════════════════════════════════════════════════════════╗"
echo "║                          RESUMEN DE REORGANIZACIÓN                        ║"
echo "╚═══════════════════════════════════════════════════════════════════════════╝"
echo ""

echo -e "Cambios realizados: ${CYAN}$changes${NC}"
echo ""

if [ $final_ok -eq 1 ] && [ $config_ok -eq 1 ]; then
    echo -e "${GREEN}╔═══════════════════════════════════════════════════════════════════════════╗${NC}"
    echo -e "${GREEN}║                     ✅ PROYECTO REORGANIZADO CORRECTAMENTE                 ║${NC}"
    echo -e "${GREEN}╚═══════════════════════════════════════════════════════════════════════════╝${NC}"
    echo ""
    echo -e "${GREEN}🎉 ¡Todo listo! El proyecto ahora tiene la estructura correcta de Next.js.${NC}"
    echo ""
    echo -e "${CYAN}Próximos pasos:${NC}"
    echo ""
    echo -e "  1️⃣  ${CYAN}npm install${NC}          (instalar dependencias)"
    echo -e "  2️⃣  ${CYAN}npm run dev${NC}          (iniciar servidor de desarrollo)"
    echo -e "  3️⃣  Abrir ${CYAN}http://localhost:3000${NC}"
    echo ""
    echo -e "${GREEN}═══════════════════════════════════════════════════════════════════════════${NC}"
    exit 0
else
    echo -e "${RED}╔═══════════════════════════════════════════════════════════════════════════╗${NC}"
    echo -e "${RED}║                      ⚠️  PROYECTO CON PROBLEMAS                            ║${NC}"
    echo -e "${RED}╚═══════════════════════════════════════════════════════════════════════════╝${NC}"
    echo ""
    echo -e "${YELLOW}⚠️  La reorganización se completó pero hay problemas de configuración.${NC}"
    echo ""
    echo -e "${CYAN}Qué hacer:${NC}"
    echo ""
    echo -e "  1️⃣  Lee ${CYAN}INSTRUCCIONES_DESCARGA.md${NC}"
    echo -e "  2️⃣  Verifica manualmente la estructura del proyecto"
    echo -e "  3️⃣  Asegúrate de que ${CYAN}app/layout.tsx${NC} y ${CYAN}app/page.tsx${NC} existan"
    echo ""
    echo -e "${RED}═══════════════════════════════════════════════════════════════════════════${NC}"
    exit 1
fi
