import { Shield, Sparkles, UserCheck, HeartHandshake, Eye, Award } from 'lucide-react';

export default function WhyChooseUs() {
  const credentials = [
    {
      title: 'L\'Oréal Partner Salon',
      desc: 'We are an officially accredited L\'Oréal Professionnel club. Every treatment chemical is sourced from original Parisian labs.',
      icon: Award
    },
    {
      title: 'Certified Master Experts',
      desc: 'Our staff undergo intensive colorimetry and dermatological makeup certs direct from L\'Oréal training academies.',
      icon: UserCheck
    },
    {
      title: 'Pharma-Grade Hygiene',
      desc: 'Absolute state-of-the-art tools sanitation. Medical autoclaves, single-use fabrics, and rigorous workspace disinfection.',
      icon: Shield
    },
    {
      title: 'Personalized Consultations',
      desc: 'No generic formulas. We execute professional macroscopic scalp scans and facial profile analyses before styling.',
      icon: Eye
    },
    {
      title: 'Elite Bridal Specialists',
      desc: 'Spearheaded by Priyanka Sen, we design elite Assamese traditional & contemporary, high-humidity resistant bridal aesthetics.',
      icon: Sparkles
    },
    {
      title: 'Couture Client Experience',
      desc: 'Enjoy curated premium beverage tabs, cozy velvet lounge seating, and soundproof spa sections designed for high serenity.',
      icon: HeartHandshake
    }
  ];

  return (
    <section id="why-us" className="relative py-28 bg-luxury-charcoal/10 overflow-hidden border-t border-pearl/5">
      {/* Background ambient gold light glow orb */}
      <div className="absolute right-1/4 top-1/3 w-[50vw] h-[50vw] bg-[radial-gradient(circle,rgba(212,175,55,0.02)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.4em] text-gold font-medium block mb-4">✦ The Elite Standard</span>
          <h2 className="text-4xl sm:text-5xl font-extralight tracking-tight text-white leading-tight">
            Why Discerning Clients <br />
            Choose <span className="font-serif italic font-normal gold-gradient-text">TPS Studio</span>
          </h2>
          <div className="h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6 w-20 mt-4" />
          <p className="text-pearl/60 text-sm font-light leading-relaxed">
            We are not just a salon; we are Bongaigaon's temple of original L'Oréal couture beauty. Discover the credentials that set our standards worth millions.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="why-us-grid">
          {credentials.map((cred, idx) => {
            const Icon = cred.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-sm bg-luxury-charcoal/20 border border-pearl/5 hover:bg-luxury-charcoal/40 hover:border-gold/30 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500 shadow-md flex flex-col justify-between h-[300px]"
                id={`cred-card-${idx}`}
              >
                {/* Thin gold top line that lights up */}
                <div className="absolute top-0 left-0 w-0 h-[1.5px] bg-gold group-hover:w-full transition-all duration-500 ease-out" />

                <div className="space-y-5">
                  <div className="w-12 h-12 rounded-full border border-gold/25 bg-black flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-colors duration-500 shadow-[0_0_15px_rgba(212,175,55,0.05)]">
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  <h3 className="text-xl text-white font-medium group-hover:text-gold transition-colors block">
                    {cred.title}
                  </h3>
                  
                  <p className="text-pearl/60 text-xs font-light leading-relaxed break-words">
                    {cred.desc}
                  </p>
                </div>

                <span className="text-[10px] text-gold uppercase tracking-[0.15em] font-mono font-medium block pt-3 border-t border-pearl/5 opacity-40 group-hover:opacity-100 transition-opacity">
                  Credential Index 0{idx + 1}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
