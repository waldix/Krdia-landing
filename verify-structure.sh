#!/bin/bash

# Script de Verificación - Krdia Landing Page
# Verifica que la estructura del proyecto sea correcta para Next.js

echo "🔍 Verificando estructura del proyecto Krdia..."
echo ""

# Colores
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

errors=0
warnings=0

# Verificar carpeta app/
echo "📁 Verificando carpetas principales..."
if [ -d "app" ]; then
    echo -e "${GREEN}✅ Carpeta app/ existe en la raíz${NC}"
else
    echo -e "${RED}❌ ERROR: Carpeta app/ NO encontrada${NC}"
    errors=$((errors+1))
fi

# Verificar carpeta components/
if [ -d "components" ]; then
    echo -e "${GREEN}✅ Carpeta components/ existe en la raíz${NC}"
else
    echo -e "${RED}❌ ERROR: Carpeta components/ NO encontrada${NC}"
    errors=$((errors+1))
fi

echo ""
echo "📄 Verificando archivos principales de Next.js..."

# Verificar archivos esenciales de Next.js
files=("app/layout.tsx" "app/page.tsx" "app/globals.css" "package.json" "next.config.js" "tsconfig.json")
for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo -e "${GREEN}✅ $file${NC}"
    else
        echo -e "${RED}❌ ERROR: $file NO encontrado${NC}"
        errors=$((errors+1))
    fi
done

echo ""
echo "⚠️  Verificando archivos de Vite (NO deberían existir)..."

# Verificar que NO existan archivos de Vite
vite_files=("index.html" "vite.config.ts" "vite.config.js" "vite-env.d.ts")
vite_found=0
for file in "${vite_files[@]}"; do
    if [ -f "$file" ]; then
        echo -e "${RED}❌ ELIMINAR: $file (archivo de Vite)${NC}"
        vite_found=1
        warnings=$((warnings+1))
    fi
done

if [ $vite_found -eq 0 ]; then
    echo -e "${GREEN}✅ No se encontraron archivos de Vite${NC}"
fi

# Verificar carpeta src/
echo ""
if [ -d "src" ]; then
    echo -e "${YELLOW}⚠️  WARNING: Carpeta src/ encontrada${NC}"
    echo -e "${YELLOW}   Next.js usa app/ en la raíz, NO src/${NC}"
    echo -e "${YELLOW}   Ejecuta: mv src/app ./ && mv src/components ./ && rm -rf src/${NC}"
    warnings=$((warnings+1))
else
    echo -e "${GREEN}✅ No existe carpeta src/ (correcto para Next.js)${NC}"
fi

# Verificar Next.js en package.json
echo ""
echo "📦 Verificando dependencias..."
if [ -f "package.json" ]; then
    if grep -q '"next"' package.json; then
        next_version=$(grep '"next"' package.json | head -1)
        echo -e "${GREEN}✅ Next.js encontrado: $next_version${NC}"
    else
        echo -e "${RED}❌ ERROR: Next.js NO encontrado en package.json${NC}"
        errors=$((errors+1))
    fi
    
    if grep -q '"vite"' package.json; then
        echo -e "${RED}❌ ERROR: Vite encontrado en package.json (eliminar)${NC}"
        warnings=$((warnings+1))
    fi
fi

# Resumen
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📊 RESUMEN DE VERIFICACIÓN"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ $errors -eq 0 ] && [ $warnings -eq 0 ]; then
    echo -e "${GREEN}✅ PROYECTO CORRECTO${NC}"
    echo ""
    echo "El proyecto está configurado correctamente para Next.js 15."
    echo ""
    echo "Próximos pasos:"
    echo "  1. npm install"
    echo "  2. npm run dev"
    echo "  3. Abrir http://localhost:3000"
elif [ $errors -eq 0 ]; then
    echo -e "${YELLOW}⚠️  PROYECTO CON ADVERTENCIAS${NC}"
    echo ""
    echo -e "Errores: ${RED}$errors${NC}"
    echo -e "Advertencias: ${YELLOW}$warnings${NC}"
    echo ""
    echo "El proyecto puede funcionar, pero hay algunas advertencias."
    echo "Consulta INSTRUCCIONES_DESCARGA.md para más información."
else
    echo -e "${RED}❌ PROYECTO CON ERRORES${NC}"
    echo ""
    echo -e "Errores: ${RED}$errors${NC}"
    echo -e "Advertencias: ${YELLOW}$warnings${NC}"
    echo ""
    echo "El proyecto tiene problemas de estructura."
    echo "Consulta INSTRUCCIONES_DESCARGA.md para solucionarlos."
    exit 1
fi

echo ""
echo "Para más información, consulta:"
echo "  - INSTRUCCIONES_DESCARGA.md"
echo "  - VERIFICACION_PROYECTO.md"
echo ""
