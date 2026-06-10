import { MapPin, Phone, Clock, MessageCircle, Mail, Globe, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  const contactDetails = [
    {
      title: 'Our Sanctuary Address',
      line1: 'TPS Hair & Beauty Studio',
      line2: 'RL Palace, 1st Floor, Near Mayapuri Cinema Hall',
      line3: 'Bongaigaon, Assam 783380, India',
      icon: MapPin,
      cta: 'Get Driving Directions',
      url: 'https://maps.google.com/?q=TPS+Hair+And+Beauty+Studio+Bongaigaon'
    },
    {
      title: 'Direct Concierge Hotlines',
      line1: 'Desk Phone: +91 88220 67755',
      line2: 'Support Phone: +91 97067 52026',
      line3: 'Instant WhatsApp Available',
      icon: Phone,
      cta: 'Call Desk Directly',
      url: 'tel:+918822067755'
    },
    {
      title: 'Luxury Club Hours',
      line1: 'Monday - Sunday: 09:30 AM - 07:30 PM',
      line2: 'Bridal Emergencies: 24/7 Priority Support',
      line3: 'Prior reservation strongly recommended',
      icon: Clock,
      cta: 'View Live availability',
      url: '#booking'
    }
  ];

  return (
    <section id="contact" className="relative py-28 bg-luxury-black overflow-hidden border-t border-pearl/5">
      <div className="absolute right-10 top-10 w-[40vw] h-[40vw] bg-[radial-gradient(circle,rgba(212,175,55,0.02)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.4em] text-gold font-medium block mb-4">✦ The Concierge Desk</span>
          <h2 className="text-4xl sm:text-5xl font-extralight tracking-tight text-white leading-tight">
            Connect With Our <br />
            <span className="font-serif italic font-normal gold-gradient-text">Studio Executive</span>
          </h2>
          <div className="h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6 w-20 mt-4" />
          <p className="text-pearl/60 text-sm font-light leading-relaxed">
            Our luxury studio resides in RL Palace at the heart of Bongaigaon City. Reach out below via telephone, WhatsApp chat, or consult our driving coordinates.
          </p>
        </div>

        {/* Contact info and Map layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="contact-info-grid">
          
          {/* Column 1: Info Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {contactDetails.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-sm bg-luxury-charcoal/20 border border-pearl/5 flex items-start space-x-4 hover:border-gold/20 transition-all duration-300"
                  id={`contact-card-${idx}`}
                >
                  <div className="w-10 h-10 rounded-full bg-gold/5 border border-gold/20 flex items-center justify-center text-gold flex-shrink-0 mt-0.5">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  
                  <div className="flex-1 space-y-1">
                    <h3 className="text-xs uppercase tracking-widest text-pearl/50 font-mono font-medium">
                      {item.title}
                    </h3>
                    <p className="text-sm font-semibold text-white pt-1">{item.line1}</p>
                    <p className="text-xs text-pearl/70 font-light">{item.line2}</p>
                    <p className="text-xs text-gold/80 font-light font-mono">{item.line3}</p>
                    
                    <a
                      href={item.url}
                      className="inline-flex items-center space-x-1 text-[10px] text-gold uppercase tracking-wider font-semibold pt-3 hover:text-white transition-colors"
                    >
                      <span>{item.cta}</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>
              );
            })}

            {/* Micro social bar */}
            <div className="p-4 rounded-sm bg-gold/5 border border-gold/15 flex items-center justify-between text-xs">
              <span className="text-[10px] uppercase font-mono tracking-wider text-gold">Follow Our Daily transformations:</span>
              <div className="flex items-center space-x-4">
                <a href="https://instagram.com" className="text-pearl/60 hover:text-gold transition-colors">
                  <Instagram className="w-4.5 h-4.5" />
                </a>
                <a href="https://facebook.com" className="text-pearl/60 hover:text-gold transition-colors">
                  <Facebook className="w-4.5 h-4.5" />
                </a>
                <a href="https://wa.me/918822067755" className="text-pearl/60 hover:text-gold transition-colors">
                  <MessageCircle className="w-4.5 h-4.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Elegant Interactive Map Frame or vector details */}
          <div className="lg:col-span-7 h-[450px] lg:h-auto rounded-sm overflow-hidden border border-gold/20 shadow-2xl relative">
            {/* Elegant luxury visual map mockup or integrated iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.4678280625345!2d90.56306507624647!3d26.343719076991316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375865239e99c1af%3A0xc39f8fedbf315f60!2sMayapuri%20cinema%20hall!5e0!3m2!1sen!2sin!4v1718021111626!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.2)' }} // Fits black luxury theme beautifully!
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="TPS Hair And Beauty Studio Location Map in Bongaigaon"
              id="google-maps-frame"
            />
            
            {/* Float overlay indicating exact location */}
            <div className="absolute top-4 left-4 p-4 rounded bg-black/85 backdrop-blur border border-gold/25 z-20 shadow-lg hidden sm:block max-w-[280px]">
              <span className="text-[9px] uppercase tracking-wider text-gold font-mono block">✦ EXACT FIND ✦</span>
              <h4 className="text-sm font-semibold text-white mt-1">RL Palace 1st Floor</h4>
              <p className="text-[10px] text-pearl/60 font-light mt-1">
                Located near Mayapuri Cinema Hall. Secure underground parking available for our premium clientele.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
