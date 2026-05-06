import { motion } from 'motion/react';
import { Mail, Phone, Instagram, Facebook, Linkedin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-deep text-white py-20 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <h2 className="text-3xl font-bold mb-6">Interior-designer.in</h2>
            <p className="text-gray-400 max-w-sm leading-relaxed mb-8">
              We create spaces that resonate with your spirit. From luxury residences to minimalist office spaces, we bring excellence and innovation to every project.
            </p>
            <div className="flex gap-6">
              {[Instagram, Facebook, Linkedin].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  whileHover={{ y: -5, color: '#1E5F8C' }}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-brand-medium">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              {['Home', 'Portfolio', 'About Us', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-white transition-colors flex items-center gap-2 group">
                    {item}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-brand-medium">Services</h4>
            <ul className="space-y-4 text-gray-400">
              {['Residential', 'Commercial', 'Kitchen Solutions', 'Outdoor Gardens', 'Wall Art'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <p>© 2024 Interior-designer.in. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-medium/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px]" />
    </footer>
  );
}
