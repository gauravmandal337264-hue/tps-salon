import { motion } from 'motion/react';
import { Award, ShieldCheck, Sparkles, Star, Users } from 'lucide-react';
import { SALON_SPACES_IMAGES } from '../data';

export default function About() {
  const stats = [
    { value: '15+', label: 'Years Design Experience', icon: Award },
    { value: '25k+', label: 'Transformations Completed', icon: Users },
    { value: '8+', label: 'Certified L\'Oréal Artists', icon: ShieldCheck },
    { value: '1,200+', label: 'HD Brides Perfected', icon: Sparkles },
  ];

  return (
    <section id="about" className="relative py-28 bg-luxury-charcoal/10 overflow-hidden border-t border-pearl/5">
      {/* Side visual background noise */}
      <div className="absolute right-0 top-1/4 w-[40vw] h-[40vw] bg-[radial-gradient(circle,rgba(183,110,121,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Column 1: Award-winning Magazine spread of Salon spaces images (Image 4 and Image 6) */}
          <div className="lg:col-span-5 relative">
            <div className="relative space-y-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="relative overflow-hidden rounded-sm aspect-[4/5] border border-gold/15 shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 via-transparent to-transparent z-10" />
                <img 
                  src={SALON_SPACES_IMAGES.productDisplay} 
                  alt="L'Oréal Products Shelf" 
                  className="w-full h-full object-cover transition-transform duration-750 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating caption overlay */}
                <div className="absolute bottom-6 left-6 z-20">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-gold font-mono block">L'Oréal Club Elite</span>
                  <span className="text-sm font-light text-white font-serif">Original Certified Retail Shop</span>
                </div>
              </motion.div>

              {/* Offset Second Image (Salon Seating Waiting Area or Arches mirroring) */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="absolute -right-6 md:-right-10 -bottom-10 w-1/2 md:w-56 overflow-hidden rounded-sm aspect-[3/4] border-2 border-luxury-black bg-luxury-black shadow-2xl hidden sm:block"
              >
                <img 
                  src={SALON_SPACES_IMAGES.stylingStations} 
                  alt="Backlit styling stations" 
                  className="w-full h-full object-cover rounded-sm border border-gold/10"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>

          {/* Column 2: Elegant Narrative Content */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.4em] text-gold font-medium block">✦ Our Philosophy</span>
              <h2 className="text-4xl sm:text-5xl font-extralight tracking-tight text-white leading-tight">
                Where Elite Science <br />
                Meets <span className="font-serif italic font-normal gold-gradient-text">Artistic Grace</span>
              </h2>
              <div className="h-[1px] bg-gradient-to-r from-gold to-transparent w-36 mt-4" />
            </div>

            <div className="space-y-6 text-pearl/80 text-sm sm:text-base font-light tracking-wide leading-relaxed">
              <p>
                Established as the premier aesthetic destination in <span className="text-white font-medium">Bongaigaon, Assam</span>, TPS Hair & Beauty Studio is an official boutique salon powered by the absolute luxury technologies of <span className="text-gold">L'Oréal Professionnel Paris</span>.
              </p>
              <p>
                Under the creative leadership of master stylists <span className="text-white">Tapas Sen and Priyanka Sen</span>, we believe that beauty is a specialized science. Whether it is a flawless, long-lasting Airbrush bridal makeover tailored to local atmospheric humidity, or a Parisian balayage colormelt that preserves the absolute integrity of your hair fiber, every second spent with us is a personalized luxury.
              </p>
              <p>
                We maintain uncompromising pharmaceutical grade hygiene procedures. All equipment undergoes medical autoclave sanitization, and we formulate every single treatment using only official, original, uncompromised L'Oréal products.
              </p>
            </div>

            {/* Custom Interactive Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-3 p-3 rounded bg-luxury-charcoal/20 border border-pearl/5">
                <div className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center bg-black">
                  <span className="text-xs text-gold">L'OP</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-white uppercase tracking-wider">Premium L'Oréal Club</span>
                  <span className="text-[10px] text-pearl/40">100% molecular treatments</span>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 rounded bg-luxury-charcoal/20 border border-pearl/5">
                <div className="w-10 h-10 rounded-full border border-rose-gold/20 flex items-center justify-center bg-black">
                  <span className="text-xs text-rose-gold">BD</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-white uppercase tracking-wider">Assam's Bridal Destination</span>
                  <span className="text-[10px] text-pearl/40">Exclusive HD & Airbrush makeup</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Chrono stats panel (Animated Counters panel with glassmorphism) */}
        <div className="mt-28 py-10 px-6 rounded-sm glass-panel grid grid-cols-2 lg:grid-cols-4 gap-8 text-center shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
          {stats.map((stat, sIdx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={sIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: sIdx * 0.1 }}
                className="space-y-2 flex flex-col items-center"
                id={`stat-block-${sIdx}`}
              >
                <div className="w-10 h-10 rounded-full bg-gold/5 flex items-center justify-center border border-gold/15 mb-2 shadow-[0_0_15px_rgba(212,175,55,0.05)]">
                  <Icon className="w-4.5 h-4.5 text-gold" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-semibold font-mono tracking-tight text-gold">
                  {stat.value}
                </h3>
                <p className="text-[10px] sm:text-xs text-pearl/60 font-light tracking-[0.1em] uppercase max-w-[150px]">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
