import React from 'react';
import { motion } from 'framer-motion';

// Momo SVG component
const MomoSVG: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    className={className}
    width="64" 
    height="64" 
    viewBox="0 0 64 64" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M32 56C45.2548 56 56 45.2548 56 32C56 18.7452 45.2548 8 32 8C18.7452 8 8 18.7452 8 32C8 45.2548 18.7452 56 32 56Z" 
      fill="#F8FAFC"
      stroke="#B91C1C" 
      strokeWidth="2"
    />
    <path 
      d="M32 52C43.0457 52 52 43.0457 52 32C52 20.9543 43.0457 12 32 12C20.9543 12 12 20.9543 12 32C12 43.0457 20.9543 52 32 52Z" 
      fill="#FEF2F2"
    />
    <path 
      d="M32 42C37.5228 42 42 37.5228 42 32C42 26.4772 37.5228 22 32 22C26.4772 22 22 26.4772 22 32C22 37.5228 26.4772 42 32 42Z" 
      fill="#FECACA"
    />
    <path 
      d="M32 10L32 12M10 32L12 32M32 52L32 54M52 32L54 32M16 16L18 18M16 48L18 46M48 16L46 18M48 48L46 46" 
      stroke="#B91C1C" 
      strokeWidth="2" 
      strokeLinecap="round"
    />
    <path 
      d="M32 32L32 32.01" 
      stroke="#B91C1C" 
      strokeWidth="3" 
      strokeLinecap="round"
    />
    <path 
      d="M26 29L26 29.01M38 29L38 29.01M26 35L26 35.01M38 35L38 35.01" 
      stroke="#B91C1C" 
      strokeWidth="2" 
      strokeLinecap="round"
    />
  </svg>
);

// Steam SVG component
const SteamSVG: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    className={className}
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M12 7C12 7 11 9 8 10C5 11 4 14 4 14"
      stroke="white" 
      strokeWidth="2" 
      strokeLinecap="round"
      strokeOpacity="0.5"
    />
    <path 
      d="M12 7C12 7 13 9 16 10C19 11 20 14 20 14"
      stroke="white" 
      strokeWidth="2" 
      strokeLinecap="round"
      strokeOpacity="0.5"
    />
  </svg>
);

export const AnimatedMomos: React.FC = () => {
  // Create an array of momo positions for a more dynamic layout
  const momos = [
    { x: '5%', y: '15%', delay: 0, size: 0.8 },
    { x: '85%', y: '20%', delay: 1.5, size: 1.2 },
    { x: '10%', y: '65%', delay: 0.7, size: 1 },
    { x: '92%', y: '70%', delay: 2.1, size: 0.9 },
    { x: '80%', y: '85%', delay: 1.2, size: 0.7 },
  ];

  const steam = [
    { x: '5%', y: '13%', delay: 0.5, opacity: 0.7 },
    { x: '85%', y: '18%', delay: 2, opacity: 0.6 },
    { x: '10%', y: '63%', delay: 1.2, opacity: 0.8 },
    { x: '92%', y: '68%', delay: 2.6, opacity: 0.7 },
    { x: '80%', y: '83%', delay: 1.7, opacity: 0.6 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {momos.map((momo, index) => (
        <motion.div
          key={`momo-${index}`}
          className="absolute"
          style={{ 
            left: momo.x, 
            top: momo.y, 
            scale: momo.size,
            opacity: 0.2 
          }}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 3,
            delay: momo.delay,
          }}
        >
          <MomoSVG className="opacity-25" />
        </motion.div>
      ))}

      {steam.map((s, index) => (
        <motion.div
          key={`steam-${index}`}
          className="absolute"
          style={{ 
            left: s.x, 
            top: s.y,
            opacity: 0
          }}
          animate={{
            y: [0, -40],
            opacity: [0, s.opacity, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            delay: s.delay,
          }}
        >
          <SteamSVG />
        </motion.div>
      ))}
    </div>
  );
};