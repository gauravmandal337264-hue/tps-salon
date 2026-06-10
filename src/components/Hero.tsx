import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, ArrowRight, Play, Pause } from 'lucide-react';

interface HeroProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Hero({ onScrollTo }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Scenic slideshow mapped to the actual physical features of the salon
  const slides = [
    {
      image: '/src/assets/images/tps_reception_fixed_1781093054695.png',
      tagline: "WELCOME TO THE PREMIER L'ORÉAL SALON",
      title: "TPS Salon Bongaigaon",
      highlight: "& L'Oréal Professionnel"
    },
    {
      image: '/src/assets/images/tps_styling_fixed_1781093074186.png',
      tagline: "ARTISANAL ARCH STYLING ARCS",
      title: "Couture Hair Cuts & Stylings",
      highlight: "& French Balayage"
    },
    {
      image: '/src/assets/images/tps_spa_1781092072917.png',
      tagline: "SERENE SKINCARE SANCTUARY",
      title: "Gold Radiance Treatments",
      highlight: "& Dermal Cleanups"
    },
    {
      image: '/src/assets/images/tps_pedicure_1781092088004.png',
      tagline: "LUXURIOUS FOOT REJUVENATION SPA",
      title: "Couture Pedicure Wellness",
      highlight: "& Quilted Recliners"
    },
    {
      image: '/src/assets/images/tps_hallway_1781092098082.png',
      tagline: "CHIC WAINSCOTED CORRIDORS",
      title: "Flawless Bridal Styling Suites",
      highlight: "& High Fashion Makeovers"
    },
    {
      image: '/src/assets/images/tps_display_1781092109864.png',
      tagline: "L'ORÉAL EXPERT RETAIL GALLERY",
      title: "Molecular Hair Spa Formulas",
      highlight: "& Professional Take-Home Care"
    },
    {
      image: '/src/assets/images/tps_shampoo_1781092123942.png',
      tagline: "ULTIMATE RELAXATION LOUNGE",
      title: "Therapeutic Shampoo Wash",
      highlight: "& Active Scalp Care"
    }
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);



  return (
    <section 
      id="hero" 
      className="relative w-full h-screen overflow-hidden bg-luxury-black flex items-center justify-center"
    >
      {/* Cinematic Slide Backgrounds */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ 
              opacity: currentSlide === idx ? 1 : 0,
              scale: currentSlide === idx ? 1 : 1.08
            }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            {/* The Image is layered with a strong luxury cinematic overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-luxury-black via-luxury-black/65 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-luxury-black/30 z-10" />
            <img 
              src={slide.image} 
              alt={slide.title}
              className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.1]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        ))}
      </div>

      {/* Ambient Sparkles Particles Layer */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-gold/45 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.4, 0.8],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* Floating Gold Light Streaks */}
      <div className="absolute inset-o pointer-events-none z-10 overflow-hidden">
        <motion.div 
          className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06)_0%,transparent_60%)]"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Main Luxury Content Card */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center h-full pt-20">
        <div className="max-w-3xl text-left">
          
          {/* Tagline Badge */}
          <motion.div
            key={`tag-${currentSlide}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center space-x-2.5 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/25 shadow-[0_0_15px_rgba(212,175,55,0.1)] mb-6"
            id="hero-tagline-wrapper"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-gold">
              {slides[currentSlide].tagline}
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extralight tracking-tight text-white mb-6 leading-[1.1]"
            id="hero-title"
          >
            {slides[currentSlide].title} <br />
            <span className="font-serif italic gold-gradient-text font-normal block mt-2">
              {slides[currentSlide].highlight}
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            key={`desc-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="text-pearl/80 text-sm sm:text-lg tracking-wide font-light max-w-xl mb-10 leading-relaxed"
            id="hero-subheadline"
          >
            Experience couture bridal makeovers, Parisian hair coloring treatments, and luxurious skin therapy with the certified experts of <span className="text-gold font-medium">TPS Studio by L'Oréal Professionnel</span> in Bongaigaon, Assam.
          </motion.p>

          {/* Interactive CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-5"
            id="hero-action-buttons"
          >
            {/* Primary Booking Button with magnetic-shimmer hover */}
            <button
              onClick={() => onScrollTo('booking')}
              className="relative overflow-hidden px-8 py-4 rounded-sm bg-gradient-to-r from-gold via-champagne to-gold text-black text-xs font-bold tracking-[0.25em] uppercase shadow-[0_4px_30px_rgba(212,175,55,0.3)] hover:shadow-[0_4px_40px_rgba(212,175,55,0.55)] transition-all duration-300 flex items-center justify-center space-x-2.5 group cursor-pointer"
              id="cta-book"
            >
              <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              <Calendar className="w-4.5 h-4.5" />
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>

            {/* Secondary Interactive Button with transparent gold borders */}
            <button
              onClick={() => onScrollTo('services')}
              className="relative overflow-hidden px-8 py-4 rounded-sm border border-pearl/20 hover:border-gold bg-transparent text-pearl text-xs font-bold tracking-[0.25em] uppercase hover:text-gold transition-colors duration-500 flex items-center justify-center space-x-2 group cursor-pointer"
              id="cta-explore"
            >
              <span>Explore Services</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Slide Navigators */}
      <div className="absolute bottom-10 left-4 sm:left-10 z-20 flex items-center space-x-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className="group relative flex items-center py-2"
            aria-label={`Go to slide ${idx + 1}`}
          >
            <div className={`h-[2px] transition-all duration-500 ${currentSlide === idx ? 'w-10 bg-gold' : 'w-4 bg-pearl/30 group-hover:bg-pearl/60'}`} />
          </button>
        ))}

        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="ml-4 p-2 rounded-full border border-pearl/10 hover:border-gold/50 bg-black/40 text-pearl/80 hover:text-gold transition-all duration-300"
          title={isPlaying ? "Pause autoplay" : "Play autoplay"}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Floating Side Info Panel (editorial detail) */}
      <div className="hidden xl:flex absolute right-10 bottom-10 z-20 flex-col space-y-2 text-right">
        <span className="text-[10px] tracking-[0.4em] text-gold uppercase font-serif">L'Oréal Salon Club</span>
        <span className="text-[11px] tracking-[0.2em] text-white/50 uppercase font-mono">Bongaigaon • Assam</span>
      </div>

      {/* Elegant Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer opacity-70 hover:opacity-100 transition-opacity" onClick={() => onScrollTo('services')}>
        <span className="text-[9px] tracking-[0.3em] uppercase text-pearl/50 mb-2">Scroll to Discover</span>
        <motion.div 
          className="w-[1.5px] h-10 bg-gradient-to-b from-gold to-transparent"
          animate={{
            scaleY: [0, 1, 0],
            originY: [0, 0, 0]
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  );
}
