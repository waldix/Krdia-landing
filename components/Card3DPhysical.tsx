'use client';

import { motion, useSpring } from 'motion/react';
import { useState, useRef, useEffect } from 'react';

// Static asset paths from public folder
const cardFrontImage = '/assets/cd5f83a8b0f85633f582143d392e7009d88e5ddb.png';
const cardBackImage = '/assets/ededb0bc548037fefbd36703c127438f2bf69d60.png';

interface Card3DPhysicalProps {
  mousePosition: { x: number; y: number };
}

export function Card3DPhysical({ mousePosition }: Card3DPhysicalProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [localMouse, setLocalMouse] = useState({ x: 0, y: 0 });

  // Mouse-based tilt with smooth spring animation
  const springConfig = { damping: 25, stiffness: 200 };
  const tiltX = useSpring(0, springConfig);
  const tiltY = useSpring(0, springConfig);

  useEffect(() => {
    if (!cardRef.current || !isHovered) {
      tiltX.set(0);
      tiltY.set(0);
      return;
    }

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const percentX = (localMouse.x - centerX) / (rect.width / 2);
    const percentY = (localMouse.y - centerY) / (rect.height / 2);

    // Very subtle tilt on hover (max 8 degrees)
    tiltY.set(percentX * 8);
    tiltX.set(-percentY * 8);
  }, [localMouse, isHovered]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isHovered) {
      setLocalMouse({ x: e.clientX, y: e.clientY });
    }
  };

  // Calculate specular highlight position
  const getSpecularPosition = () => {
    if (!cardRef.current || !isHovered) return { x: 50, y: 50 };
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((localMouse.x - rect.left) / rect.width) * 100;
    const y = ((localMouse.y - rect.top) / rect.height) * 100;
    
    return { x, y };
  };

  const specularPos = getSpecularPosition();

  // VERTICAL card dimensions - exact proportion from Figma design
  // Responsive sizing based on viewport
  const [cardWidth, setCardWidth] = useState(340);
  
  useEffect(() => {
    const updateCardSize = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setCardWidth(220); // Mobile small
      } else if (width < 640) {
        setCardWidth(260); // Mobile large
      } else if (width < 1024) {
        setCardWidth(300); // Tablet
      } else {
        setCardWidth(340); // Desktop
      }
    };
    
    updateCardSize();
    window.addEventListener('resize', updateCardSize);
    return () => window.removeEventListener('resize', updateCardSize);
  }, []);
  
  const cardHeight = cardWidth * (869 / 548); // 1.586 ratio
  
  // Corner radius: Original 36px on 548px base → scaled proportionally
  const cornerRadius = (36 / 548) * cardWidth;
  
  // Thickness: Very thin like a real physical card
  const cardThickness = 3; // Ultra-thin realistic card thickness

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div 
        ref={cardRef}
        className="relative"
        style={{ 
          perspective: '2000px',
          perspectiveOrigin: '50% 50%',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
      >
        <motion.div
          className="relative"
          style={{
            width: `${cardWidth}px`,
            height: `${cardHeight}px`,
            transformStyle: 'preserve-3d',
            rotateX: tiltX,
            rotateY: tiltY,
          }}
          animate={{
            // Continuous rotation on Y axis
            rotateY: [0, 360],
            // Very subtle floating
            y: [0, -8, 0],
            // Minimal orbital rotation
            rotateX: [1, -1, 1],
          }}
          transition={{
            rotateY: {
              duration: 22,
              repeat: Infinity,
              ease: 'linear',
            },
            y: {
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            rotateX: {
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        >
          {/* FRONT FACE - with exact corner radius and subtle edge definition */}
          <motion.div
            className="absolute inset-0 overflow-hidden"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: `${cornerRadius}px`,
              transform: `translateZ(${cardThickness / 2}px)`,
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden',
              boxShadow: 'inset 0 0 0 0.5px rgba(255,255,255,0.1)', // Subtle inner glow for edge definition
            }}
          >
            <img 
              src={cardFrontImage}
              alt="Tarjeta Krdia - Frente"
              className="w-full h-full object-cover select-none"
              draggable="false"
              style={{ borderRadius: `${cornerRadius}px` }}
            />
            
            {/* Very subtle continuous metallic light sweep */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{ borderRadius: `${cornerRadius}px` }}
              animate={{
                background: [
                  'linear-gradient(135deg, transparent 0%, transparent 35%, rgba(255,255,255,0.2) 50%, transparent 65%, transparent 100%)',
                  'linear-gradient(135deg, transparent 60%, transparent 68%, rgba(255,255,255,0.2) 76%, transparent 85%, transparent 100%)',
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            
            {/* Enhanced specular highlight on hover */}
            {isHovered && (
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                  borderRadius: `${cornerRadius}px`,
                  background: `radial-gradient(circle at ${specularPos.x}% ${specularPos.y}%, rgba(255,255,255,0.35) 0%, transparent 50%)`,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            )}
            
            {/* Minimal shimmer */}
            <motion.div
              className="absolute inset-0 opacity-12 mix-blend-overlay pointer-events-none"
              style={{ borderRadius: `${cornerRadius}px` }}
              animate={{
                background: [
                  'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), transparent 60%)',
                  'radial-gradient(circle at 70% 70%, rgba(255,255,255,0.4), transparent 60%)',
                  'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), transparent 60%)',
                ],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>

          {/* BACK FACE - with exact corner radius and subtle edge definition */}
          <motion.div
            className="absolute inset-0 overflow-hidden"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: `${cornerRadius}px`,
              transform: `translateZ(-${cardThickness / 2}px) rotateY(180deg)`,
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden',
              boxShadow: 'inset 0 0 0 0.5px rgba(255,255,255,0.1)',
            }}
          >
            <img 
              src={cardBackImage}
              alt="Tarjeta Krdia - Reverso"
              className="w-full h-full object-cover select-none"
              draggable="false"
              style={{ borderRadius: `${cornerRadius}px` }}
            />
            
            {/* Subtle metallic light sweep */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{ borderRadius: `${cornerRadius}px` }}
              animate={{
                background: [
                  'linear-gradient(135deg, transparent 0%, transparent 35%, rgba(255,255,255,0.18) 50%, transparent 65%, transparent 100%)',
                  'linear-gradient(135deg, transparent 60%, transparent 68%, rgba(255,255,255,0.18) 76%, transparent 85%, transparent 100%)',
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'linear',
                delay: 2,
              }}
            />
          </motion.div>

          {/* TOP EDGE - Transparent/translucent, curved, barely visible */}
          <div
            className="absolute left-0 right-0 top-0"
            style={{
              width: '100%',
              height: `${cardThickness}px`,
              background: 'linear-gradient(to bottom, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 50%, rgba(255,255,255,0.02) 100%)',
              transform: `rotateX(90deg) translateY(-${cardThickness / 2}px)`,
              transformStyle: 'preserve-3d',
              transformOrigin: 'top center',
              borderTopLeftRadius: `${cornerRadius}px`,
              borderTopRightRadius: `${cornerRadius}px`,
              backdropFilter: 'blur(0.5px)',
            }}
          />

          {/* BOTTOM EDGE - Transparent/translucent, curved */}
          <div
            className="absolute left-0 right-0 bottom-0"
            style={{
              width: '100%',
              height: `${cardThickness}px`,
              background: 'linear-gradient(to top, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 50%, rgba(255,255,255,0.02) 100%)',
              transform: `rotateX(-90deg) translateY(${cardThickness / 2}px)`,
              transformStyle: 'preserve-3d',
              transformOrigin: 'bottom center',
              borderBottomLeftRadius: `${cornerRadius}px`,
              borderBottomRightRadius: `${cornerRadius}px`,
              backdropFilter: 'blur(0.5px)',
            }}
          />

          {/* LEFT EDGE - Transparent/translucent, curved, light refraction */}
          <div
            className="absolute top-0 bottom-0 left-0"
            style={{
              width: `${cardThickness}px`,
              height: '100%',
              background: 'linear-gradient(to right, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 50%, rgba(255,255,255,0.01) 100%)',
              transform: `rotateY(-90deg) translateX(-${cardThickness / 2}px)`,
              transformStyle: 'preserve-3d',
              transformOrigin: 'left center',
              borderTopLeftRadius: `${cornerRadius}px`,
              borderBottomLeftRadius: `${cornerRadius}px`,
              backdropFilter: 'blur(0.5px)',
            }}
          />

          {/* RIGHT EDGE - Transparent/translucent, curved, light refraction */}
          <div
            className="absolute top-0 bottom-0 right-0"
            style={{
              width: `${cardThickness}px`,
              height: '100%',
              background: 'linear-gradient(to left, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 50%, rgba(255,255,255,0.01) 100%)',
              transform: `rotateY(90deg) translateX(${cardThickness / 2}px)`,
              transformStyle: 'preserve-3d',
              transformOrigin: 'right center',
              borderTopRightRadius: `${cornerRadius}px`,
              borderBottomRightRadius: `${cornerRadius}px`,
              backdropFilter: 'blur(0.5px)',
            }}
          />
        </motion.div>

        {/* Minimal ambient occlusion beneath card - very subtle */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-[280px] h-[70px] bg-gradient-to-br from-gray-900/3 via-gray-800/5 to-gray-900/3 dark:from-black/5 dark:via-gray-900/7 dark:to-black/5 rounded-full blur-[28px] -z-10 pointer-events-none"
          style={{
            transform: 'translate(-50%, 0) translateY(300px)',
          }}
          animate={{
            opacity: [0.12, 0.2, 0.12],
            scale: [0.96, 1.01, 0.96],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Minimal environmental lighting - very subtle 3D space simulation */}
        <motion.div
          className="absolute -inset-24 bg-gradient-radial from-gray-300/2 via-gray-400/1 to-transparent dark:from-gray-600/3 dark:via-gray-700/1 dark:to-transparent rounded-full blur-3xl -z-20 pointer-events-none"
          animate={{
            scale: [1, 1.04, 1],
            opacity: [0.06, 0.1, 0.06],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </div>
  );
}
