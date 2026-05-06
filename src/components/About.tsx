import { motion } from 'motion/react';
import { CheckCircle2, Award, Users, Home } from 'lucide-react';
import { useState, useEffect } from 'react';

const Counter = ({ value, duration = 2 }: { value: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;

    let totalMiliseconds = duration * 1000;
    let incrementTime = totalMiliseconds / end;

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{count}</span>;
};

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1200" 
                alt="Our Design Process" 
                className="w-full h-[600px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-10 -right-10 bg-brand-deep text-white p-8 rounded-2xl shadow-xl z-20">
              <p className="text-5xl font-bold mb-1">12+</p>
              <p className="text-sm font-medium uppercase tracking-widest opacity-80">Years of Luxury</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-medium font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-deep mb-8 leading-tight">
              Crafting Sophisticated <br /> Interiors for the Modern Age
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Founded on the principles of minimalism and luxury, Interior-designer.in has been the leading name in high-end spatial design. We believe that a home is more than just a place to live; it's a reflection of your identity.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-10">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-brand-medium">
                  <Home size={20} />
                  <span className="text-2xl font-bold text-brand-deep"><Counter value={250} />+</span>
                </div>
                <p className="text-gray-500 font-medium">Projects Completed</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-brand-medium">
                  <Users size={20} />
                  <span className="text-2xl font-bold text-brand-deep"><Counter value={180} />+</span>
                </div>
                <p className="text-gray-500 font-medium">Happy Clients</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-brand-medium">
                  <Award size={20} />
                  <span className="text-2xl font-bold text-brand-deep">99%</span>
                </div>
                <p className="text-gray-500 font-medium">Client Satisfaction</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-brand-medium">
                  <CheckCircle2 size={20} />
                  <span className="text-2xl font-bold text-brand-deep">15+</span>
                </div>
                <p className="text-gray-500 font-medium">Design Awards</p>
              </div>
            </div>

            <motion.button
              whileHover={{ x: 10 }}
              className="flex items-center gap-3 text-brand-deep font-bold text-lg group"
            >
              Learn more about our process
              <span className="w-10 h-10 rounded-full border border-brand-deep flex items-center justify-center group-hover:bg-brand-deep group-hover:text-white transition-all">
                →
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
