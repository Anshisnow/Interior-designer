/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import IntroAnimation from './components/IntroAnimation';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [showMainContent, setShowMainContent] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <AnimatePresence mode="wait">
        {!showMainContent && (
          <IntroAnimation onComplete={() => setShowMainContent(true)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showMainContent && (
          <motion.div
            key="main"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Navbar />
            <main>
              <Hero />
              <About />
              <Portfolio />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
