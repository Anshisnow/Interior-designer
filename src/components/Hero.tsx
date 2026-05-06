import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const textY = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-light">
      {/* Parallax Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 opacity-40"
      >
        <img 
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Interior" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white"></div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
           style={{ y: textY }}
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-brand-medium/10 text-brand-medium text-sm font-semibold tracking-wider uppercase mb-6">
            Spatial Excellence
          </span>
          <h1 className="text-6xl md:text-8xl font-bold text-brand-deep mb-6 leading-tight">
            Designing Spaces That <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-deep to-brand-medium">Define Lifestyle</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Modern interiors crafted with precision & creativity. We transform empty structures into warm, functional, and luxury homes.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <motion.a
               href="#portfolio"
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="px-10 py-5 bg-brand-deep text-white rounded-full font-bold text-lg shadow-xl shadow-brand-deep/20 hover:bg-brand-medium transition-colors"
            >
              View Portfolio
            </motion.a>
            <motion.a
               href="#contact"
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="px-10 py-5 bg-white text-brand-deep border-2 border-brand-deep/10 rounded-full font-bold text-lg hover:border-brand-medium transition-all"
            >
              Book Consultation
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-10 w-24 h-24 border border-brand-medium/20 rounded-xl hidden lg:block"
      />
      <motion.div 
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 right-20 w-32 h-32 border border-brand-medium/10 rounded-full hidden lg:block"
      />
    </section>
  );
}
