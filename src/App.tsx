/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import WhyChooseUs from './components/WhyChooseUs';
import Packages from './components/Packages';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import BookingForm from './components/BookingForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GoldFireflies from './components/GoldFireflies';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offset for navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-luxury-black text-pearl select-none selection:bg-gold selection:text-black overflow-x-hidden">
      
      {/* 1. Ambient Golden Fireflies Effect (Spans fixed viewport backdrop) */}
      <GoldFireflies />

      {/* 2. Top Banner (Urgent bridal notification or high-end news flash) */}
      <div className="bg-gradient-to-r from-luxury-black via-gold/15 to-luxury-black py-2 text-center text-[10px] tracking-[0.3em] uppercase text-gold font-medium border-b border-gold/10 relative z-50">
        <span className="inline-flex items-center space-x-1">
          <Sparkles className="w-3 h-3 text-gold animate-spin" />
          <span>Awarded Official L'Oréal Salon Club of Excellence • Bongaigaon, Assam</span>
        </span>
      </div>

      {/* 3. Sticky Glassmorphic Navbar */}
      <Navbar onScrollTo={scrollToSection} />

      {/* 4. Cinematic full-screen Hero section */}
      <Hero onScrollTo={scrollToSection} />

      {/* 5. Services section tabs and item cards */}
      <Services onScrollTo={scrollToSection} />

      {/* 6. Magazine spread About section with statistics */}
      <About />

      {/* 7. Transformation comparison slider Lookbook */}
      <Gallery />

      {/* 8. Credentials validation panel info cards */}
      <WhyChooseUs />

      {/* 9. Elite packages select board cards */}
      <Packages onScrollTo={scrollToSection} />

      {/* 10. Reviews slider carousels */}
      <Testimonials />

      {/* 11. Professionals roster portraits */}
      <Team />

      {/* 12. Instant WhatsApp appointment planner */}
      <BookingForm />

      {/* 13. Map visual geolocation card details */}
      <Contact />

      {/* 14. Luxury footer module */}
      <Footer onScrollTo={scrollToSection} />

      {/* 15. Back to top float action button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.7, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1.05 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-40 p-3 bg-black/80 hover:bg-black rounded-full border border-gold/40 text-gold shadow-[0_4px_20px_rgba(0,0,0,0.5)] cursor-pointer"
            id="btn-back-to-top"
            aria-label="Back to top"
          >
            ▲
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
