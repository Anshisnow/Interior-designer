import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const CATEGORIES = [
  {
    id: 'kitchen',
    title: 'Kitchen Designs',
    description: 'Modern, functional, and aesthetic culinary spaces.',
    style: 'carousel',
    images: [
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1556909214-319a42144415?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1556912170-453f2c71020d?auto=format&fit=crop&q=80&w=800',
    ]
  },
  {
    id: 'walls',
    title: 'Wall Designs',
    description: 'Creative textures and artistic feature walls.',
    style: 'grid',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1594904351111-a072f80b1a71?auto=format&fit=crop&q=80&w=800',
    ]
  },
  {
    id: 'hall',
    title: 'Hall / Living Room',
    description: 'Luxury halls designed for premium relaxation.',
    style: 'cards',
    images: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1616486029423-aaa47a300dae?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1615876234886-fd9a39faa97f?auto=format&fit=crop&q=80&w=800',
    ]
  },
  {
    id: 'balcony',
    title: 'Balcony Designs',
    description: 'Compact urban sanctuary and outdoor aesthetic.',
    style: 'floating',
    images: [
      'https://images.unsplash.com/photo-1598928636135-d146006ff4be?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1594008658299-cc918f629633?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=800',
    ]
  }
];

export default function Portfolio() {
  const [activeKitchenIdx, setActiveKitchenIdx] = useState(0);

  return (
    <section id="portfolio" className="py-24 bg-brand-light/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-medium font-bold uppercase tracking-[0.2em] text-sm mb-4 block"
          >
            Our Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-brand-deep"
          >
            Spatial Portfolios
          </motion.h2>
        </div>

        {/* Categories */}
        <div className="space-y-32">
          {CATEGORIES.map((cat, catIdx) => (
            <div key={cat.id} className="relative">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-brand-medium/10 pb-8">
                <div>
                  <h3 className="text-3xl font-bold text-brand-deep mb-2">{cat.title}</h3>
                  <p className="text-gray-500">{cat.description}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="text-7xl font-bold text-brand-medium/5 absolute -top-12 right-0">0{catIdx + 1}</span>
                </div>
              </div>

              {cat.style === 'carousel' && (
                <div className="relative overflow-hidden group">
                  <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${activeKitchenIdx * 100}%)` }}>
                    {cat.images.map((img, idx) => (
                      <div key={idx} className="min-w-full px-2">
                        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl">
                          <img 
                            src={img} 
                            alt={`${cat.title} ${idx}`} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-brand-deep/0 group-hover:bg-brand-deep/20 transition-colors flex items-center justify-center">
                            <motion.span 
                               initial={{ opacity: 0, y: 20 }}
                               whileHover={{ opacity: 1, y: 0 }}
                               className="text-white font-bold text-2xl border-b-2 border-white"
                            >
                              Explore Design
                            </motion.span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button 
                    onClick={() => setActiveKitchenIdx(prev => Math.max(0, prev - 1))}
                    className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg text-brand-deep hover:bg-brand-deep hover:text-white transition-all z-10"
                  >
                    <ChevronLeft />
                  </button>
                  <button 
                    onClick={() => setActiveKitchenIdx(prev => Math.min(cat.images.length - 1, prev + 1))}
                    className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg text-brand-deep hover:bg-brand-deep hover:text-white transition-all z-10"
                  >
                    <ChevronRight />
                  </button>
                </div>
              )}

              {cat.style === 'grid' && (
                <div className="grid md:grid-cols-3 gap-8">
                  {cat.images.map((img, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -10 }}
                      className={`relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg ${idx === 1 ? 'md:mt-12' : ''}`}
                    >
                      <img 
                        src={img} 
                        alt={`${cat.title} ${idx}`} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-brand-deep/80 to-transparent text-white opacity-0 hover:opacity-100 transition-opacity">
                        <p className="font-bold text-xl">Modern Texture #{idx + 1}</p>
                        <p className="text-sm opacity-80 uppercase tracking-widest">Minimalist Wall Design</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {cat.style === 'cards' && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {cat.images.map((img, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="group relative h-[500px] rounded-3xl overflow-hidden bg-white shadow-2xl"
                    >
                      <img 
                        src={img} 
                        alt={`${cat.title} ${idx}`} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-brand-deep/40 translate-y-full group-hover:translate-y-0 transition-transform duration-500 p-10 flex flex-col justify-end text-white">
                        <h4 className="text-2xl font-bold mb-2 font-display">Luxury Hall Concept</h4>
                        <p className="opacity-80 mb-6">Experience the blend of comfort and spatial grandeur.</p>
                        <button className="w-full py-4 border border-white rounded-full font-bold hover:bg-white hover:text-brand-deep transition-colors">
                          View Details
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {cat.style === 'floating' && (
                <div className="flex flex-wrap justify-center gap-12">
                   {cat.images.map((img, idx) => (
                    <motion.div
                      key={idx}
                      animate={{ y: [0, -15, 0] }}
                      transition={{ 
                        duration: 4 + idx, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: idx * 0.5
                      }}
                      className="w-full md:w-[calc(33%-1.5rem)] max-w-sm rounded-[40px] overflow-hidden shadow-2xl border-4 border-white"
                    >
                      <img 
                        src={img} 
                        alt={`${cat.title} ${idx}`} 
                        className="w-full aspect-[3/4] object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
