import { PACKAGES } from '../data';
import { Check, Star, Sparkles, Zap } from 'lucide-react';

interface PackagesProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Packages({ onScrollTo }: PackagesProps) {
  return (
    <section id="packages" className="relative py-28 bg-luxury-black overflow-hidden border-t border-pearl/5">
      {/* Visual background atmospheric mesh */}
      <div className="absolute left-1/4 top-1/4 w-[60vw] h-[60vw] bg-[radial-gradient(circle,rgba(212,175,55,0.03)_0%,transparent_70%)] pointer-events-none animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Zap className="w-4 h-4 text-gold" />
            <span className="text-xs uppercase tracking-[0.4em] text-gold font-medium">The Absolute Deals</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl tracking-tight text-white font-extralight mb-5">
            TPS Signature <span className="font-serif italic font-normal gold-gradient-text">Club Packages</span>
          </h2>
          
          <div className="h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6 w-20" />
          
          <p className="text-pearl/60 text-sm font-light leading-relaxed">
            Unify your luxury treatments with curated full-salon suites at pricing that honors your dedication to elite self care. Perfect for brides, special events, or consistent upkeep.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="packages-cards-grid">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-sm p-8 bg-luxury-charcoal/20 border flex flex-col justify-between h-[520px] transition-all duration-500 hover:-translate-y-2 group shadow-lg ${
                pkg.isFeatured 
                  ? 'border-gold/60 shadow-[0_0_40px_rgba(212,175,55,0.15)] bg-luxury-charcoal/40 scale-[1.03]' 
                  : 'border-pearl/5 hover:border-gold/30'
              }`}
              id={`package-card-${pkg.id}`}
            >
              {/* Highlight top indicator bar */}
              {pkg.isFeatured ? (
                <div className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-gold via-champagne to-rose-gold rounded-t-sm" />
              ) : (
                <div className="absolute top-0 inset-x-0 h-[1.5px] bg-transparent group-hover:bg-gold/40 transition-all duration-500 rounded-t-sm" />
              )}

              {/* Shimmer light effect inside featured card */}
              {pkg.isFeatured && (
                <div className="absolute inset-0 bg-gradient-to-b from-gold/5 via-transparent to-transparent opacity-50 z-0 pointer-events-none rounded-sm" />
              )}

              <div className="relative z-10">
                {/* Header Info */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[9px] uppercase tracking-[0.2em] font-mono text-pearl/50">
                    {pkg.category === 'hair' ? 'Precision Hair' : pkg.category === 'beauty' ? 'Deep Dermal' : pkg.category === 'bridal' ? 'Royal Bridal' : 'Elite Makeover'}
                  </span>
                  
                  {pkg.isFeatured && (
                    <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-gold text-[8px] font-bold text-black uppercase tracking-wider animate-pulse">
                      <Star className="w-2.5 h-2.5 fill-current" />
                      <span>Best Choice</span>
                    </span>
                  )}
                </div>

                <h3 className="text-2xl text-white font-light group-hover:text-gold transition-colors block mb-2 leading-tight">
                  {pkg.title}
                </h3>
                
                <p className="text-pearl/60 text-xs font-light leading-relaxed mb-6 break-words h-12 overflow-hidden line-clamp-3">
                  {pkg.description}
                </p>

                <div className="h-[1px] bg-pearl/10 w-full mb-6" />

                {/* Services List inside card */}
                <ul className="space-y-3">
                  {pkg.services.map((service, sIdx) => (
                    <li key={sIdx} className="flex items-start space-x-2 text-xs text-pearl/80">
                      <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      <span className="break-words line-clamp-2">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action pricing box at bottom */}
              <div className="relative z-10 pt-6 mt-6 border-t border-pearl/5">
                <div className="flex items-baseline justify-between mb-4">
                  <span className="text-[10px] text-pearl/40 uppercase tracking-widest font-mono">Special Value</span>
                  <span className="text-2xl font-bold font-mono text-gold">{pkg.price}</span>
                </div>

                <button
                  onClick={() => onScrollTo('booking')}
                  className={`w-full py-3 text-xs font-bold tracking-[0.2em] uppercase rounded-sm transition-all duration-300 ${
                    pkg.isFeatured
                      ? 'bg-gradient-to-r from-gold via-champagne to-gold hover:opacity-90 active:scale-95 text-black font-extrabold shadow-md'
                      : 'border border-pearl/20 hover:border-gold hover:text-gold text-pearl'
                  }`}
                  id={`pkg-cta-${pkg.id}`}
                >
                  Reserve Package
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
