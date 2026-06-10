import { EXPERTS } from '../data';
import { Camera, Instagram, Smile, Star } from 'lucide-react';

export default function Team() {
  return (
    <section id="team" className="relative py-28 bg-luxury-black overflow-hidden border-t border-pearl/5">
      <div className="absolute left-1/2 top-1/4 -translate-x-1/2 w-[70vw] h-[70vw] bg-[radial-gradient(circle,rgba(183,110,121,0.02)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Star className="w-4 h-4 text-gold" style={{ fill: 'rgba(212,175,55,0.4)' }} />
            <span className="text-xs uppercase tracking-[0.4em] text-gold font-medium">The Artisans</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl tracking-tight text-white font-extralight mb-5">
            The Certified <span className="font-serif italic font-normal gold-gradient-text">Beauty Guild</span>
          </h2>
          
          <div className="h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6 w-20" />
          
          <p className="text-pearl/60 text-sm font-light leading-relaxed">
            Meet the award-winning experts certified directly by L'Oréal Professionnel Academies, committed to bringing global design precision directly to Assam.
          </p>
        </div>

        {/* Experts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="team-experts-grid">
          {EXPERTS.map((expert, idx) => (
            <div
              key={expert.id}
              className="group relative rounded-sm overflow-hidden bg-luxury-charcoal/20 border border-pearl/5 hover:border-gold/20 transition-all duration-500 shadow-md flex flex-col justify-between hover:shadow-2xl"
              id={`team-expert-${expert.id}`}
            >
              
              {/* Photo layer with high-contrast luxury scale and brightness */}
              <div className="relative aspect-square overflow-hidden border-b border-pearl/5">
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent z-10" />
                <img 
                  src={expert.image} 
                  alt={expert.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 filter brightness-[0.8] group-hover:brightness-95 contrast-[1.05]"
                  referrerPolicy="no-referrer"
                />

                {/* Left/Right Floating Social Badges */}
                <div className="absolute bottom-4 right-4 z-20 flex items-center space-x-1.5">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="w-8 h-8 rounded-full border border-gold/25 bg-black/50 text-gold flex items-center justify-center hover:bg-gold hover:text-black transition-all shadow-[0_0_10px_rgba(212,175,55,0.1)]"
                    aria-label={`${expert.name} Instagram profile`}
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>

                {/* Role badge inside photo */}
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="text-[10px] bg-gold/15 text-gold border border-gold/30 rounded px-2.5 py-1 uppercase tracking-widest font-mono">
                    {expert.role.split(' & ')[0]}
                  </span>
                </div>
              </div>

              {/* Text Core details */}
              <div className="p-6 space-y-4 relative bg-luxury-charcoal/10 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-2xl text-white font-light group-hover:text-gold transition-colors block">
                    {expert.name}
                  </h3>
                  <span className="text-[11px] font-medium text-pearl/50 tracking-wider block font-mono">
                    {expert.role}
                  </span>
                  <p className="text-pearl/60 text-xs font-light leading-relaxed pt-2 break-words">
                    {expert.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-pearl/5 space-y-2">
                  <span className="text-[9px] uppercase tracking-widest text-pearl/40 font-mono font-medium block">
                    Specialties:
                  </span>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {expert.specialties.map((spec, sIdx) => (
                      <span 
                        key={sIdx} 
                        className="text-[9px] text-gold-light bg-gold/5 border border-gold/15 px-2.5 py-0.5 rounded-sm uppercase tracking-wide font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
