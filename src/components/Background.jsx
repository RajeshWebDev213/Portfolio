import { motion } from 'framer-motion';
import { useMemo } from 'react';

export default function Background() {
  const particles = useMemo(() => {
    // Generate 50 particles with random properties
    return Array.from({ length: 50 }).map((_, i) => {
      const size = Math.random() * 4 + 2; // 2px to 6px
      const isBlue = Math.random() > 0.5;
      
      // Random starting positions (0 to 100%)
      const startX = Math.random() * 100;
      const startY = Math.random() * 100;
      
      // Gentle floating range (-30px to +30px)
      const floatX = (Math.random() - 0.5) * 60;
      const floatY = (Math.random() - 0.5) * 60;
      
      const duration = Math.random() * 20 + 20; // 20s to 40s for very slow float
      const pulseDuration = Math.random() * 4 + 3; // 3s to 7s for slow fade in/out
      const delay = Math.random() * -40; // Negative delay to start at different points
      
      const colorClasses = isBlue 
        ? 'bg-blue-600 shadow-[0_0_6px_1px_rgba(37,99,235,0.4)] dark:bg-blue-400 dark:shadow-[0_0_8px_2px_rgba(96,165,250,0.7)]' 
        : 'bg-amber-500 shadow-[0_0_6px_1px_rgba(245,158,11,0.4)] dark:bg-yellow-300 dark:shadow-[0_0_8px_2px_rgba(253,224,71,0.7)]';
        
      return {
        id: i,
        size,
        colorClasses,
        startX,
        startY,
        floatX,
        floatY,
        duration,
        pulseDuration,
        delay
      };
    });
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute rounded-full transition-colors duration-700 ${p.colorClasses}`}
          style={{
            width: p.size,
            height: p.size,
            left: `${p.startX}%`,
            top: `${p.startY}%`,
          }}
          animate={{
            x: [0, p.floatX, 0],
            y: [0, p.floatY, 0],
            opacity: [0.15, 0.85, 0.15],
          }}
          transition={{
            x: {
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
              delay: p.delay
            },
            y: {
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
              delay: p.delay
            },
            opacity: {
              duration: p.pulseDuration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay
            }
          }}
        />
      ))}
    </div>
  );
}
