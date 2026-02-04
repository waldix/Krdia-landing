'use client';

import { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { HeroWithPhysicalCard } from '../components/HeroWithPhysicalCard';
import { WhatIsKrdiaGlass } from '../components/WhatIsKrdiaGlass';
import { BenefitsAnimated } from '../components/BenefitsAnimated';
import { HowItWorksHorizontal } from '../components/HowItWorksHorizontal';
import { UseCasesDynamic } from '../components/UseCasesDynamic';
import { SecurityPremium } from '../components/SecurityPremium';
import { FinalCTADynamic } from '../components/FinalCTADynamic';
import { FooterGlass } from '../components/FooterGlass';
import { CursorGlow } from '../components/CursorGlow';

export default function HomePage() {
  const [isDark, setIsDark] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-black dark:to-gray-900 text-gray-900 dark:text-gray-100 transition-all duration-700 overflow-x-hidden">
        <CursorGlow mousePosition={mousePosition} />
        
        {/* Ambient background gradients */}
        <div className="fixed inset-0 opacity-30 dark:opacity-25 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-gray-400/30 via-gray-300/15 to-transparent dark:from-gray-600/35 dark:via-gray-700/18 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-gray-300/35 via-gray-200/15 to-transparent dark:from-gray-700/40 dark:via-gray-800/18 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }} />
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-br from-gray-200/25 to-transparent dark:from-gray-600/25 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s' }} />
        </div>

        <div className="relative z-10">
          <Header isDark={isDark} setIsDark={setIsDark} />
          <HeroWithPhysicalCard mousePosition={mousePosition} />
          <WhatIsKrdiaGlass />
          <BenefitsAnimated />
          <HowItWorksHorizontal />
          <UseCasesDynamic />
          <SecurityPremium />
          <FinalCTADynamic />
          <FooterGlass />
        </div>
      </div>
    </div>
  );
}
