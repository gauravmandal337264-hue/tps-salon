import { useState, useRef, PointerEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS, SALON_SPACES_IMAGES } from '../data';
import { Camera, Eye, ArrowRightLeft, Sliders, Play, Maximize2, X, Lock } from 'lucide-react';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<'transformations' | 'spaces'>('transformations');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [sliderVal, setSliderVal] = useState(50); // 0 to 100 for Comparison Sliders
  const [isSliding, setIsSliding] = useState(false);
  const [activeComparisonIdx, setActiveComparisonIdx] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Before & after comparisons using original images
  const comparisons = [
    {
      id: 'comp1',
      title: 'Infallible Setting & Couture Waves',
      desc: 'Our premier styling combo. Slide from L\'Oréal Infallible Setting Mist to the beautiful, voluminous 36-hour hold styling result.',
      before: '/src/assets/images/tps_setting_mist_1781093741251.png',
      after: '/src/assets/images/tps_model_curly_1781093721982.png',
      beforeLabel: 'Infallible 36H Mist',
      afterLabel: 'Couture Curly Waves'
    },
    {
      id: 'comp2',
      title: 'French Caramel Balayage',
      desc: 'Hand-painted warm dimensional light ribbons, color corrected using Metal Detox.',
      before: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&q=80&w=700', // dark flat hair
      after: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=700', // premium vibrant hair
      beforeLabel: 'Original Dark Tone',
      afterLabel: 'French Balayage Glow'
    }
  ];

  // Specific physical salon photos representing exact spaces shown in the attachments
  const salonSpaces = [
    {
      title: 'Backlit Styling Stations',
      description: 'Our signature illuminated LED arches and luxurious ivory cabinets, creating a soft shadowless workspace.',
      image: SALON_SPACES_IMAGES.stylingStations
    },
    {
      title: 'L\'Oréal Professionnel Dispensary',
      description: 'Fully-stocked elite product display casing showing original Parisian color concentrates and care products.',
      image: SALON_SPACES_IMAGES.productDisplay
    },
    {
      title: 'The Shampoo Deck',
      description: 'Dual leather massaging recliners operating black glazed therapeutic sinks over custom teak wood decking.',
      image: SALON_SPACES_IMAGES.shampooStation
    },
    {
      title: 'The Royal Spa Suite',
      description: 'Private facial lounge with aesthetic backlighting, floral wallpaper detailing, and premium treatment beds.',
      image: SALON_SPACES_IMAGES.spaRoom
    },
    {
      title: 'Pedicure & Reflexology Lounge',
      description: 'High-back ergonomic leather spa chairs equipped with integrated foot-spa deep jacuzzis.',
      image: SALON_SPACES_IMAGES.pedicureUnit
    },
    {
      title: 'Couture Reception Lounge',
      description: 'Welcoming space styled with a gorgeous pink velvet sofa, tropical palms, and comfortable seating.',
      image: SALON_SPACES_IMAGES.lounge
    },
    {
      title: 'Architectural Hallways',
      description: 'Elegant corridors showing pristine marble pattern floors and sophisticated wainscoting paneling.',
      image: SALON_SPACES_IMAGES.corridors
    },
    {
      title: 'Glazed Main Façade',
      description: 'Chic glass floor-to-ceiling doors with beautiful gold branding welcome you in absolute luxury.',
      image: SALON_SPACES_IMAGES.entrance
    }
  ];

  const handlePointerDown = (e: PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsSliding(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    updateSliderVal(e.clientX);
  };

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!isSliding) return;
    updateSliderVal(e.clientX);
  };

  const handlePointerUp = (e: PointerEvent<HTMLDivElement>) => {
    setIsSliding(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch (err) {
      // safe fallback
    }
  };

  const updateSliderVal = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderVal(percentage);
  };

  return (
    <section id="gallery" className="relative py-28 bg-luxury-black overflow-hidden border-t border-pearl/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Camera className="w-4 h-4 text-gold" />
            <span className="text-xs uppercase tracking-[0.4em] text-gold font-medium">The Visual Registry</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl tracking-tight text-white font-extralight mb-5">
            TPS Studio <span className="font-serif italic font-normal gold-gradient-text">Lookbook</span>
          </h2>
          
          <div className="h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6 w-20" />
          
          <p className="text-pearl/60 text-sm font-light leading-relaxed">
            Witness our physical work and the spaces where luxury unfolds. Contrast high-fashion transformations or take a look through our newly renovated salon club.
          </p>
        </div>

        {/* Gallery Type Tab switch */}
        <div className="flex justify-center mb-16 space-x-4">
          <button
            onClick={() => setActiveCategory('transformations')}
            className={`px-6 py-3.5 border text-xs font-semibold uppercase tracking-[0.2em] rounded-sm transition-all duration-300 ${
              activeCategory === 'transformations' 
                ? 'bg-gold text-black border-gold shadow-md' 
                : 'bg-transparent text-pearl/70 border-pearl/10 hover:border-gold/45'
            }`}
            id="tab-gallery-transformations"
          >
            Couture Transformations
          </button>
          
          <button
            onClick={() => setActiveCategory('spaces')}
            className={`px-6 py-3.5 border text-xs font-semibold uppercase tracking-[0.2em] rounded-sm transition-all duration-300 ${
              activeCategory === 'spaces' 
                ? 'bg-gold text-black border-gold shadow-md' 
                : 'bg-transparent text-pearl/70 border-pearl/10 hover:border-gold/45'
            }`}
            id="tab-gallery-spaces"
          >
            Our Physical Salon Spaces
          </button>
        </div>

        {/* Category CONTENTS */}
        <AnimatePresence mode="wait">
          {activeCategory === 'transformations' ? (
            <motion.div
              key="transformations"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-16"
              id="gallery-transformations-flow"
            >
              {/* Interactive Before & After comparison block */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Column 1: Explainer */}
                <div className="lg:col-span-5 space-y-6">
                  <span className="text-xs uppercase tracking-[0.3em] text-gold font-mono block">✦ Advanced Comparison</span>
                  <h3 className="text-3xl font-extralight tracking-tight text-white">
                    Slide to view the <br />
                    <span className="font-serif italic font-normal gold-gradient-text block mt-1">Couture Difference</span>
                  </h3>
                  <p className="text-pearl/70 text-sm leading-relaxed font-light">
                    Move your finger or click & absolute drag across our chemical smoothing and dimensional balayage coloring outputs. Observe the mirror shine index and restored structural elasticity of real L'Oréal hair formulations.
                  </p>
                  
                  <div className="flex items-center space-x-3 text-xs text-pearl/40 font-mono">
                    <Sliders className="w-4.5 h-4.5 text-gold" />
                    <span>Click and slide horizontally on the card right</span>
                  </div>

                  <div className="pt-4 flex flex-col space-y-4">
                    {comparisons.map((c, idx) => (
                      <button 
                        key={idx} 
                        onClick={() => setActiveComparisonIdx(idx)}
                        className={`p-4 rounded text-left transition-all duration-300 border ${
                          activeComparisonIdx === idx 
                            ? 'bg-gold/10 border-gold/60 gold-glow shadow-md' 
                            : 'bg-luxury-charcoal/20 border-pearl/5 hover:border-pearl/20 hover:bg-luxury-charcoal/30'
                        }`}
                        id={`comp-btn-${idx}`}
                      >
                        <span className={`text-xs font-semibold block transition-colors duration-300 ${
                          activeComparisonIdx === idx ? 'text-gold' : 'text-pearl/90'
                        }`}>{c.title}</span>
                        <span className="text-xs text-pearl/60 font-light block mt-1">{c.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Column 2: Interactive Before-After Slider */}
                <div className="lg:col-span-7">
                  <div 
                    ref={sliderRef}
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                    onPointerCancel={handlePointerUp}
                    className="relative w-full aspect-[4/3] rounded-sm overflow-hidden border border-gold/25 select-none cursor-ew-resize group gold-glow touch-none"
                    id="interactive-before-after-slider"
                  >
                    {/* BEFORE IMAGE (Default underlying background) */}
                    <img 
                      src={comparisons[activeComparisonIdx].before} 
                      alt="Before hair treatment" 
                      className="absolute inset-0 w-full h-full object-cover pointer-events-none filter brightness-50"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-black/80 text-[10px] uppercase tracking-widest px-2.5 py-1 text-pearl/80 rounded border border-pearl/20 z-20 font-mono">
                      {comparisons[activeComparisonIdx].beforeLabel}
                    </div>

                    {/* AFTER IMAGE (Clipped overlay) */}
                    <div 
                      className="absolute inset-y-0 right-0 left-0 pointer-events-none"
                      style={{ clipPath: `polygon(0 0, ${sliderVal}% 0, ${sliderVal}% 100%, 0 100%)` }}
                    >
                      <img 
                      src={comparisons[activeComparisonIdx].after} 
                        alt="After chemical smoothing" 
                        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 right-4 bg-gold/90 text-[10px] uppercase tracking-widest px-2.5 py-1 text-black font-semibold rounded border border-gold z-20 font-mono">
                        {comparisons[activeComparisonIdx].afterLabel}
                      </div>
                    </div>

                    {/* SLIDABLE LINE DIVIDER */}
                    <div 
                      className="absolute inset-y-0 w-[2px] bg-gold pointer-events-none shadow-[0_0_15px_rgba(212,175,55,1)]"
                      style={{ left: `${sliderVal}%` }}
                    >
                      <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gold border border-black flex items-center justify-center text-black shadow-lg">
                        <ArrowRightLeft className="w-3.5 h-3.5 rotate-90" />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ) : (
            <motion.div
              key="spaces"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              id="gallery-spaces-flow"
            >
              {salonSpaces.map((space, idx) => (
                <div 
                  key={idx}
                  onClick={() => setLightboxIndex(idx)}
                  className="group relative rounded-sm overflow-hidden aspect-square border border-pearl/5 bg-luxury-charcoal/20 hover:border-gold/30 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl"
                  id={`space-tile-${idx}`}
                >
                  {/* Photo itself */}
                  <img 
                    src={space.image} 
                    alt={space.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 filter brightness-[0.75] group-hover:brightness-[0.9]"
                    referrerPolicy="no-referrer"
                  />

                  {/* High-end gradient hover sheet */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5" />

                  {/* Details */}
                  <div className="absolute bottom-5 left-5 right-5 z-20 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span className="text-[9px] uppercase tracking-[0.25em] text-gold font-mono block mb-1">
                      TPS Sanctuary Room {idx + 1}
                    </span>
                    <h4 className="text-base text-white font-medium mb-1 group-hover:text-gold transition-colors">
                      {space.title}
                    </h4>
                    <p className="text-[10px] text-pearl/50 line-clamp-2 font-light opacity-0 group-hover:opacity-100 transition-all duration-300 leading-relaxed">
                      {space.description}
                    </p>
                  </div>

                  {/* Absolute Corner magnifying launcher glass */}
                  <div className="absolute top-4 right-4 w-7 h-7 rounded-sm border border-gold/20 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-350">
                    <Maximize2 className="w-3.5 h-3.5 text-gold" />
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* LIGHTBOX MODAL */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 md:p-8"
              id="lightbox-overlay"
            >
              {/* Top controls bar */}
              <div className="flex items-center justify-between w-full">
                <span className="text-[10px] sm:text-xs text-pearl/40 uppercase tracking-[0.3em] font-mono">
                  TPS Bongaigaon Lookbook • Room {lightboxIndex + 1} of {salonSpaces.length}
                </span>
                
                <button
                  onClick={() => setLightboxIndex(null)}
                  className="p-2 rounded-full border border-pearl/15 hover:border-gold/50 text-pearl/80 hover:text-gold transition-all"
                  aria-label="Close Lightbox"
                >
                  <X className="w-5.5 h-5.5" />
                </button>
              </div>

              {/* Main Photo center content */}
              <div className="max-w-4xl w-full mx-auto aspect-video md:aspect-[16/10] relative flex items-center justify-center">
                
                {/* Previous trigger */}
                <button
                  onClick={() => setLightboxIndex((prev) => (prev! - 1 + salonSpaces.length) % salonSpaces.length)}
                  className="absolute left-0 p-3 rounded-full border border-pearl/10 bg-black/50 text-white hover:text-gold hover:border-gold/40 transition-all z-20"
                  aria-label="Previous salon space image"
                >
                  ‹
                </button>

                <img
                  src={salonSpaces[lightboxIndex].image}
                  alt={salonSpaces[lightboxIndex].title}
                  className="max-h-[70vh] max-w-full object-contain rounded-sm border border-gold/10"
                  referrerPolicy="no-referrer"
                />

                {/* Next trigger */}
                <button
                  onClick={() => setLightboxIndex((prev) => (prev! + 1) % salonSpaces.length)}
                  className="absolute right-0 p-3 rounded-full border border-pearl/10 bg-black/50 text-white hover:text-gold hover:border-gold/40 transition-all z-20"
                  aria-label="Next salon space image"
                >
                  ›
                </button>
              </div>

              {/* Bottom text explanation */}
              <div className="text-center max-w-2xl mx-auto pb-4">
                <h3 className="text-xl sm:text-2xl text-white font-light mb-1.5">
                  {salonSpaces[lightboxIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-pearl/75 font-light leading-relaxed">
                  {salonSpaces[lightboxIndex].description}
                </p>
                <span className="text-[9px] text-gold uppercase tracking-[0.15em] font-mono block mt-3">
                  ✦ TPS Hair & Beauty Studio • Official Certified L'Oréal Salon ✦
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
