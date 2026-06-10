import { Scissors, MessageCircle, Phone, MapPin, Award, Check } from 'lucide-react';

interface FooterProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Footer({ onScrollTo }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-luxury-black border-t border-gold/15 pt-20 pb-10 relative z-30 overflow-hidden">
      
      {/* Footer background sparkles */}
      <div className="absolute inset-x-0 bottom-0 top-[60%] bg-[radial-gradient(ellipse_at_bottom,rgba(212,175,55,0.035)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-pearl/5">
          
          {/* Logo Brand segment */}
          <div className="lg:col-span-4 space-y-6">
            <div 
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => onScrollTo('hero')}
              id="footer-logo-wrapper"
            >
              <div className="w-9 h-9 rounded-full border border-gold/40 flex items-center justify-center bg-black">
                <Scissors className="w-4.5 h-4.5 text-gold" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-[0.25em] gold-gradient-text uppercase">TPS Studio</span>
                <span className="text-[8px] tracking-[0.45em] text-pearl/50 uppercase">by L'Oréal Paris</span>
              </div>
            </div>

            <p className="text-pearl/60 text-xs font-light leading-relaxed max-w-sm">
              TPS Hair & Beauty Studio is an official accredited L'Oréal Professionnel Salon in Bongaigaon, Assam. We unify high-fashion color correction, elite Airbrush bridal contour, and pharmaceutical and hygienic salon service of gold calibration.
            </p>

            <div className="flex items-center space-x-2 p-2.5 rounded bg-gold/5 border border-gold/15 inline-flex">
              <Award className="w-4 h-4 text-gold flex-shrink-0" />
              <span className="text-[9px] uppercase tracking-wider font-semibold text-gold">Official accredited partner salon</span>
            </div>
          </div>

          {/* Quick links group */}
          <div className="lg:col-span-2.5 space-y-5">
            <h4 className="text-xs uppercase tracking-widest text-gold font-mono font-medium">Navigations</h4>
            <div className="flex flex-col space-y-3 text-xs text-pearl/70 font-light">
              <button onClick={() => onScrollTo('services')} className="hover:text-gold text-left transition-colors">Our Services</button>
              <button onClick={() => onScrollTo('about')} className="hover:text-gold text-left transition-colors">Our Story</button>
              <button onClick={() => onScrollTo('gallery')} className="hover:text-gold text-left transition-colors">Lookbook Look</button>
              <button onClick={() => onScrollTo('why-us')} className="hover:text-gold text-left transition-colors">Credential Index</button>
              <button onClick={() => onScrollTo('packages')} className="hover:text-gold text-left transition-colors">Premium Packages</button>
              <button onClick={() => onScrollTo('booking')} className="hover:text-gold text-left transition-colors">Reserve Slot</button>
            </div>
          </div>

          {/* Main Services quick list */}
          <div className="lg:col-span-2.5 space-y-5">
            <h4 className="text-xs uppercase tracking-widest text-gold font-mono font-medium">Core Catalogues</h4>
            <div className="flex flex-col space-y-3 text-xs text-pearl/70 font-light">
              <span className="hover:text-gold cursor-pointer transition-colors">Couture Balayage</span>
              <span className="hover:text-gold cursor-pointer transition-colors">L'Oréal Extenso Smoothing</span>
              <span className="hover:text-gold cursor-pointer transition-colors">HD Airbrush Bridal</span>
              <span className="hover:text-gold cursor-pointer transition-colors">Glycolic Skin Polish</span>
              <span className="hover:text-gold cursor-pointer transition-colors">Couture Pedicure</span>
              <span className="hover:text-gold cursor-pointer transition-colors">Molecular Spa Care</span>
            </div>
          </div>

          {/* Contact coordinates quick */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-xs uppercase tracking-widest text-gold font-mono font-medium">The Studio Location</h4>
            <div className="space-y-4 text-xs text-pearl/70 font-light">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span className="break-words leading-relaxed text-pearl/70">
                  RL Palace, 1st Floor, Near Mayapuri Cinema Hall, Bongaigaon, Assam 783380, India
                </span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-gold" />
                <span className="font-mono text-pearl/70">+91 88220 67755</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <MessageCircle className="w-4.5 h-4.5 text-gold" />
                <span className="font-mono text-pearl/70">Live Desk WhatsApp Integration</span>
              </div>
            </div>
          </div>

        </div>

        {/* Lower row copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-pearl/40 font-mono">
          <p>© {currentYear} TPS Hair & Beauty Studio. Created in Partnership with L'Oréal Professionnel Paris. All Rights Reserved.</p>
          
          <div className="flex items-center space-x-5 mt-4 md:mt-0 text-[10px]">
            <span className="hover:text-gold cursor-pointer">Privacy Charter</span>
            <span>•</span>
            <span className="hover:text-gold cursor-pointer">Terms & Conditions</span>
            <span>•</span>
            <span className="hover:text-gold cursor-pointer">Bongaigaon, Assam</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
