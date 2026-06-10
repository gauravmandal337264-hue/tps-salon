import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Scissors, Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Navbar({ onScrollTo }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { id: 'hero', label: 'Couture' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'Our Story' },
    { id: 'gallery', label: 'Transformations' },
    { id: 'why-us', label: 'The Salon' },
    { id: 'packages', label: 'Premium Packages' },
    { id: 'booking', label: 'Book' },
    { id: 'contact', label: 'Location' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Track scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      } else {
        setScrollProgress(0);
      }

      // Detect active section
      const scrollPosition = window.scrollY + 120;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onScrollTo(id);
  };

  return (
    <>
      <motion.nav
        id="navbar"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'glass-panel-heavy py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)] border-b border-gold/15' 
            : 'bg-gradient-to-b from-black/80 to-transparent py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Salon Brand Logo */}
            <div 
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => handleLinkClick('hero')}
              id="nav-logo"
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-full border border-gold/40 bg-luxury-black/80 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                <Scissors className="w-5 h-5 text-gold" />
                <motion.div 
                  className="absolute inset-0 rounded-full border border-gold/15"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-[0.25em] gold-gradient-text">
                  TPS STUDIO
                </span>
                <span className="text-[8px] tracking-[0.45em] text-pearl/60 uppercase">
                  by L'Oréal Professionnel
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-[11px] font-medium tracking-[0.2em] uppercase transition-all duration-300 relative py-2 ${
                    activeSection === link.id
                      ? 'text-gold'
                      : 'text-pearl/70 hover:text-pearl'
                  }`}
                  id={`navlink-${link.id}`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activeNavLine"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-gold via-champagne to-rose-gold"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Book Now Button */}
            <div className="hidden sm:flex items-center space-x-4">
              <a 
                href="tel:+918822067755" 
                className="text-pearl/80 hover:text-gold transition-colors duration-300 flex items-center space-x-1.5 text-xs tracking-wider"
              >
                <Phone className="w-3.5 h-3.5 text-gold animate-pulse" />
                <span className="font-mono">+91 88220 67755</span>
              </a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleLinkClick('booking')}
                className="relative overflow-hidden px-5 py-2.5 rounded-sm border border-gold bg-transparent text-[11px] font-semibold tracking-[0.2em] uppercase text-gold hover:text-black transition-colors duration-500 shadow-[0_0_15px_rgba(212,175,55,0.1)] group"
                id="btn-nav-book"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-gold via-champagne to-rose-gold translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
                <span className="relative z-10">Reserve Elite</span>
              </motion.button>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex lg:hidden items-center space-x-4">
              <a href="tel:+918822067755" className="sm:hidden text-gold">
                <Phone className="w-4.5 h-4.5" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1 rounded-sm border border-pearl/10 focus:outline-none"
                id="btn-mobile-menu"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-gold" /> : <Menu className="w-6 h-6 text-pearl" />}
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-pearl/5">
          <motion.div 
            className="h-full bg-gradient-to-r from-gold via-rose-gold to-gold"
            style={{
              width: `${scrollProgress}%`
            }}
          />
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[60px] z-45 glass-panel-heavy overflow-y-auto px-6 py-8 flex flex-col space-y-6 md:hidden max-h-[calc(100vh-60px)]"
            id="mobile-nav-panel"
          >
            <div className="flex flex-col space-y-4">
              <span className="text-[10px] tracking-[0.3em] text-gold uppercase border-b border-gold/10 pb-2">
                Luxury Menu
              </span>
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-left text-lg font-light tracking-[0.15em] py-2 border-b border-pearl/5 uppercase ${
                    activeSection === link.id ? 'text-gold pl-2 font-medium' : 'text-pearl/80'
                  } transition-all duration-300`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-6 flex flex-col space-y-4 border-t border-pearl/5">
              <div className="flex items-center justify-between text-xs tracking-wider text-pearl/60 font-mono">
                <span>Direct Concierge:</span>
                <a href="tel:+918822067755" className="text-gold font-bold">
                  +91 88220 67755
                </a>
              </div>
              <button
                onClick={() => handleLinkClick('booking')}
                className="w-full py-3.5 bg-gradient-to-r from-gold via-champagne to-rose-gold text-black rounded-sm text-center text-xs font-bold tracking-[0.35em] uppercase hover:opacity-90 transition-opacity"
              >
                Instant Reservation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
