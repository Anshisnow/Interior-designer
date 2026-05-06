import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 3.5 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className={`text-2xl font-bold tracking-tighter transition-colors ${
          isScrolled ? 'text-brand-deep' : 'text-brand-deep'
        }`}>
          Interior-designer<span className="text-brand-medium">.in</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-deep hover:text-brand-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-3 bg-brand-deep text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-medium transition-colors shadow-lg shadow-brand-deep/10"
          >
            Start Project
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-deep" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? 'auto' : 0
        }}
        className="md:hidden bg-white overflow-hidden"
      >
        <div className="px-6 py-10 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-bold text-brand-deep"
            >
              {link.name}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}
