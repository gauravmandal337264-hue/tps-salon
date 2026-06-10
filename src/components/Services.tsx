import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HAIR_SERVICES, BEAUTY_SERVICES, BRIDAL_SERVICES } from '../data';
import { Scissors, Sparkles, Heart, Star, Compass, Clock, Check, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Services({ onScrollTo }: ServicesProps) {
  const [activeTab, setActiveTab] = useState<'hair' | 'beauty' | 'bridal'>('hair');
  const [selectedService, setSelectedService] = useState<any | null>(null);

  const tabs = [
    { id: 'hair', label: 'Hair Couture', icon: Scissors, desc: 'Professional L\'Oréal cutting-edge designs, deep moisture treatments and french balayage coloring.' },
    { id: 'beauty', label: 'Beauty & Skin', icon: Heart, desc: 'Rejuvenating skin facials, gentle organic wax grooming and luxury manicure & pedicure therapies.' },
    { id: 'bridal', label: 'Bridal Artistry', icon: Sparkles, desc: 'Flawless camera-ready high-definition makeup, traditional draping and elite bridal hair styling.' },
  ];

  const getServicesByTab = () => {
    switch (activeTab) {
      case 'hair': return HAIR_SERVICES;
      case 'beauty': return BEAUTY_SERVICES;
      case 'bridal': return BRIDAL_SERVICES;
    }
  };

  return (
    <section id="services" className="relative py-28 bg-luxury-black overflow-hidden border-t border-pearl/5">
      {/* Background ambient gold gradient light orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] bg-[radial-gradient(circle,rgba(212,175,55,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center space-x-2 mb-4"
          >
            <Compass className="w-4 h-4 text-gold" />
            <span className="text-xs uppercase tracking-[0.4em] text-gold font-medium">The Service Menu</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl tracking-tight text-white font-extralight mb-5"
          >
            Sophisticated Services <span className="font-serif italic font-normal gold-gradient-text">By L'Oréal</span>
          </motion.h2>
          
          <motion.div
            initial={{ w: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-pearl/60 text-sm sm:text-base font-light tracking-wide leading-relaxed"
          >
            Every service at TPS is executed by highly certified master stylists utilizing exclusive L'Oréal Professionnel Parisian formulas, guaranteeing personalized care of absolute caliber.
          </motion.p>
        </div>

        {/* Tab Selector Nav - High-end gold and charcoal slider */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 mb-16">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as any);
                  setSelectedService(null);
                }}
                className={`w-full md:w-64 relative overflow-hidden py-4 px-6 rounded-sm border transition-all duration-500 flex items-center space-x-3 text-left ${
                  isActive 
                    ? 'border-gold text-black bg-gradient-to-r from-gold via-champagne to-gold shadow-[0_4px_25px_rgba(212,175,55,0.15)]' 
                    : 'border-pearl/10 text-pearl/80 hover:border-gold/45 bg-luxury-charcoal/30 hover:bg-luxury-charcoal/60'
                }`}
                id={`tab-select-${tab.id}`}
              >
                <IconComponent className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-black' : 'text-gold'}`} />
                <div className="flex flex-col">
                  <span className="text-xs font-bold tracking-[0.2em] uppercase">{tab.label}</span>
                  <span className={`text-[9px] mt-0.5 truncate max-w-[150px] ${isActive ? 'text-black/70' : 'text-pearl/40'}`}>
                    {tab.id === 'hair' ? 'Cuts & Styling' : tab.id === 'beauty' ? 'Dermal facials' : 'Brides & Grooms'}
                  </span>
                </div>
                {isActive && (
                  <motion.div 
                    layoutId="tabGlowRing" 
                    className="absolute inset-0 border-2 border-gold pointer-events-none" 
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Tab Description */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-xs tracking-widest text-pearl/50 uppercase font-mono"
            >
              ✦ {tabs.find(t => t.id === activeTab)?.desc}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Services Grid with Framer Motion stagger reveal */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          id="services-items-grid"
        >
          <AnimatePresence mode="popLayout">
            {getServicesByTab().map((service, index) => (
              <motion.div
                layout
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative h-72 rounded-sm p-6 flex flex-col justify-between overflow-hidden border border-pearl/5 bg-luxury-charcoal/20 hover:bg-luxury-charcoal/40 transition-all duration-500 hover:-translate-y-2 cursor-pointer gold-border-glow shadow-md hover:shadow-lg"
                onClick={() => setSelectedService(service)}
                id={`service-card-${service.id}`}
              >
                {/* Micro gold glitter line inside card */}
                <div className="absolute top-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-gold to-rose-gold group-hover:w-full transition-all duration-750 ease-out" />
                
                {/* Background Shimmer Indicator */}
                <div className="absolute -right-16 -bottom-16 w-36 h-36 rounded-full bg-gold/5 blur-2xl group-hover:bg-gold/10 transition-all duration-500" />

                <div>
                  {/* Category Indicator Icon / Details */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[9px] uppercase tracking-[0.25em] text-gold/60 font-mono">
                      {activeTab === 'hair' ? 'L\'Oréal Care' : activeTab === 'beauty' ? 'Skin Sanctuary' : 'Royal Wedding'}
                    </span>
                    <span className="text-[10px] text-pearl/50 flex items-center space-x-1 font-mono">
                      <Clock className="w-3 h-3 text-gold/50" />
                      <span>{service.duration || '60m'}</span>
                    </span>
                  </div>

                  <h3 className="text-xl text-white font-light group-hover:text-gold transition-colors duration-300 line-clamp-2 pr-2">
                    {service.name}
                  </h3>
                  
                  <p className="text-pearl/60 text-[12px] font-light leading-relaxed mt-3 break-words line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-end justify-between pt-4 border-t border-pearl/5">
                  <div className="flex flex-col">
                    <span className="text-[9px] text-pearl/40 uppercase tracking-widest">Starting At</span>
                    <span className="text-sm font-semibold tracking-wide font-mono text-gold">{service.price || '₹1,500'}</span>
                  </div>
                  
                  <span className="text-[10px] text-gold uppercase tracking-[0.2em] font-medium flex items-center group-hover:translate-x-1 transition-transform">
                    <span>View Lux Details</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Detail Modal Panel */}
        <AnimatePresence>
          {selectedService && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
              id="service-modal-overlay"
            >
              <motion.div 
                initial={{ scale: 0.92, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.92, opacity: 0, y: 20 }}
                transition={{ type: 'spring', duration: 0.6 }}
                className="relative max-w-xl w-full rounded-sm glass-panel-heavy p-8 border border-gold/40 shadow-[0_0_50px_rgba(212,175,55,0.15)] md:max-h-[90vh] overflow-y-auto"
                id="service-modal"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 p-1.5 rounded-full border border-pearl/10 hover:border-gold/50 text-pearl/70 hover:text-gold transition-all"
                  aria-label="Close details"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="mb-6">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-gold font-mono block mb-2">
                    Couture {selectedService.category === 'hair' ? 'Hair' : selectedService.category === 'beauty' ? 'Beauty' : 'Bridal'} Menu
                  </span>
                  <h3 className="text-3xl text-white font-light pr-8 leading-tight">
                    {selectedService.name}
                  </h3>
                  <div className="flex items-center space-x-6 mt-3">
                    <div className="text-xs text-pearl/50 flex items-center space-x-1 font-mono">
                      <Clock className="w-3.5 h-3.5 text-gold/60" />
                      <span>{selectedService.duration || '60 mins'}</span>
                    </div>
                    <div className="text-xs text-gold flex items-center space-x-1 font-mono">
                      <span className="text-pearl/50 text-[10px] uppercase tracking-wider mr-1">Price Range:</span>
                      <span className="font-bold">{selectedService.price}</span>
                    </div>
                  </div>
                </div>

                <div className="h-[1px] bg-pearl/10 w-full mb-6" />

                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-[0.2em] text-pearl/50 mb-2 font-mono">Treatment Description</h4>
                  <p className="text-pearl/80 text-sm leading-relaxed font-light break-words">
                    {selectedService.description}
                  </p>
                </div>

                {selectedService.features && selectedService.features.length > 0 && (
                  <div className="mb-8">
                    <h4 className="text-xs uppercase tracking-[0.2em] text-pearl/50 mb-3 font-mono">What Is Included</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedService.features.map((feature: string, fIdx: number) => (
                        <div key={fIdx} className="flex items-start space-x-2 text-xs text-pearl/80">
                          <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <button
                    onClick={() => {
                      setSelectedService(null);
                      onScrollTo('booking');
                    }}
                    className="flex-1 py-3.5 bg-gradient-to-r from-gold via-champagne to-gold text-black text-xs font-bold tracking-[0.2em] uppercase rounded-sm hover:opacity-90 active:scale-95 transition-all text-center"
                  >
                    Select & Reserve
                  </button>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="py-3.5 px-6 border border-pearl/20 hover:border-pearl/50 text-pearl text-xs font-bold tracking-[0.2em] uppercase rounded-sm transition-colors text-center"
                  >
                    Discover More
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

// Inline Close Icon helper for modal
function X({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
