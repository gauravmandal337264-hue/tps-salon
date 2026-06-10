import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '../data';
import { Star, MessageSquare, ChevronRight, ChevronLeft, Quote } from 'lucide-react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="relative py-28 bg-luxury-charcoal/10 overflow-hidden border-t border-pearl/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[radial-gradient(circle,rgba(215,175,55,0.015)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <MessageSquare className="w-4 h-4 text-gold" />
            <span className="text-xs uppercase tracking-[0.4em] text-gold font-medium">Testimonials</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl tracking-tight text-white font-extralight mb-5">
            Reflections of <span className="font-serif italic font-normal gold-gradient-text">Absolute Delight</span>
          </h2>
          
          <div className="h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6 w-20" />
          
          <p className="text-pearl/60 text-sm font-light leading-relaxed">
            Read original, uncompromised appraisals from our stellar local clientele in Bongaigaon who choose our certified L'Oréal hair and advanced bridal styling.
          </p>
        </div>

        {/* Carousel Block */}
        <div className="max-w-4xl mx-auto relative px-4 sm:px-12" id="testimonials-carousel-wrapper">
          
          {/* Big quotes icon background decorative */}
          <div className="absolute top-[-40px] left-[-20px] text-gold/5 pointer-events-none z-0">
            <Quote className="w-40 h-40 transform -rotate-12" />
          </div>

          <div className="relative z-10 min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.6 }}
                className="w-full glass-panel p-8 md:p-12 rounded-sm border border-gold/15 shadow-2xl relative"
                id={`testimonial-slide-${activeIndex}`}
              >
                
                {/* Gold sparkle border accents on slide card */}
                <div className="absolute bottom-4 right-4 text-gold/10">
                  <Quote className="w-16 h-16 scale-x-[-1]" />
                </div>

                <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                  {/* Photo spacer */}
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 rounded-full overflow-hidden border border-gold/30 gold-glow bg-luxury-black/50">
                      <img 
                        src={TESTIMONIALS[activeIndex].image} 
                        alt={TESTIMONIALS[activeIndex].name}
                        className="w-full h-full object-cover filter brightness-95 brightness-contrast-[1.05]"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>

                  {/* Testimonial Core */}
                  <div className="flex-1 space-y-4 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start space-x-1">
                      {[...Array(TESTIMONIALS[activeIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                      ))}
                    </div>

                    <p className="text-white/90 text-sm sm:text-base leading-relaxed font-light italic font-serif">
                      "{TESTIMONIALS[activeIndex].text}"
                    </p>

                    <div>
                      <h4 className="text-sm font-semibold tracking-wider text-gold">
                        {TESTIMONIALS[activeIndex].name}
                      </h4>
                      <p className="text-[10px] uppercase tracking-widest text-pearl/50 mt-0.5">
                        {TESTIMONIALS[activeIndex].role || 'Premium Client'}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 sm:left-[-15px] z-20">
            <button 
              onClick={handlePrev}
              className="p-3.5 rounded-full border border-pearl/10 hover:border-gold/50 bg-luxury-black/70 hover:bg-black text-pearl/70 hover:text-gold transition-all"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-4 sm:right-[-15px] z-20">
            <button 
              onClick={handleNext}
              className="p-3.5 rounded-full border border-pearl/10 hover:border-gold/50 bg-luxury-black/70 hover:bg-black text-pearl/70 hover:text-gold transition-all"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots Indicators at bottom */}
          <div className="flex justify-center items-center space-x-2.5 mt-8">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`transition-all duration-300 rounded-full ${
                  activeIndex === idx ? 'w-8 h-[2.5px] bg-gold' : 'w-2 h-2 bg-pearl/20 hover:bg-pearl/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
