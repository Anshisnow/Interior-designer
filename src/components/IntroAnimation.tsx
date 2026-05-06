import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export default function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<'slide' | 'morph' | 'fadeOut'>('slide');

  useEffect(() => {
    const slideTimer = setTimeout(() => setPhase('morph'), 1200);
    const morphTimer = setTimeout(() => setPhase('fadeOut'), 2800);
    const completeTimer = setTimeout(() => onComplete(), 3500);

    return () => {
      clearTimeout(slideTimer);
      clearTimeout(morphTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'fadeOut' && (
        <motion.div 
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-white flex items-center justify-center p-6 overflow-hidden"
        >
          <div className="relative">
            {phase === 'slide' && (
              <motion.h1
                initial={{ x: -100, opacity: 0, filter: 'blur(10px)' }}
                animate={{ x: 0, opacity: 1, filter: 'blur(0px)' }}
                className="text-4xl md:text-6xl font-bold tracking-tighter text-brand-deep text-center"
              >
                Interior-designer.in
              </motion.h1>
            )}

            {phase === 'morph' && (
              <div className="flex flex-col items-center gap-4">
                <div className="flex gap-2">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: 45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: i * 0.1 
                      }}
                      className="w-8 h-8 md:w-12 md:h-12 bg-brand-deep rounded-sm"
                      style={{ 
                        borderRadius: i % 2 === 0 ? '4px' : '50% 50% 0 0',
                        opacity: 1 - (i * 0.1)
                      }}
                    />
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-6"
                >
                  <div className="w-48 h-32 border-4 border-brand-medium rounded-t-3xl relative overflow-hidden">
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: '100%' }}
                      transition={{ duration: 1 }}
                      className="absolute bottom-0 w-full bg-brand-medium/10"
                    />
                    <div className="absolute inset-x-4 top-4 h-1 bg-brand-medium/20 rounded-full" />
                    <div className="absolute inset-x-8 top-8 h-1 bg-brand-medium/20 rounded-full" />
                  </div>
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-brand-medium font-medium tracking-widest uppercase text-xs"
                >
                  Building Excellence
                </motion.p>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
