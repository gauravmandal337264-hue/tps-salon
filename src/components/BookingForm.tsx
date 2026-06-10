import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ALL_SERVICES, PACKAGES } from '../data';
import { Calendar, Clock, User, Phone, MessageSquare, Sparkles, Check, ChevronRight } from 'lucide-react';

export default function BookingForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceCategory: 'hair',
    serviceSelectedId: ALL_SERVICES[0].id,
    packageSelectedId: 'none',
    date: '',
    timeSlot: '11:00 AM',
    notes: ''
  });
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const timeSlots = [
    '09:30 AM', '10:30 AM', '11:30 AM', '12:30 PM',
    '01:30 PM', '02:30 PM', '03:30 PM', '04:30 PM',
    '05:30 PM', '06:30 PM'
  ];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormData((prev) => {
      let updated = { ...prev, [name]: value };
      
      // If category changes, update the default selected service
      if (name === 'serviceCategory') {
        const filtered = ALL_SERVICES.filter(s => s.category === value);
        if (filtered.length > 0) {
          updated.serviceSelectedId = filtered[0].id;
        }
        updated.packageSelectedId = 'none';
      }
      
      return updated;
    });
  };

  const getSelectedServiceOrPackageName = () => {
    if (formData.packageSelectedId && formData.packageSelectedId !== 'none') {
      const pkg = PACKAGES.find(p => p.id === formData.packageSelectedId);
      return pkg ? `Premium Package: ${pkg.title}` : '';
    }
    const service = ALL_SERVICES.find(s => s.id === formData.serviceSelectedId);
    return service ? service.name : 'Custom Luxury Consultation';
  };

  // Submit and route to WhatsApp
  const handleWhatsAppBooking = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date) {
      alert("Please specify your name, contact phone, and desired reservation date.");
      return;
    }

    const targetService = getSelectedServiceOrPackageName();
    
    // Construct premium WhatsApp message
    const waText = `✦ *TPS HAIR & BEAUTY STUDIO RESERVATION* ✦\n\n` +
      `*Client:* ${formData.name}\n` +
      `*Phone Contact:* ${formData.phone}\n` +
      `*Category Requested:* ${formData.serviceCategory.toUpperCase()}\n` +
      `*Service / Package:* ${targetService}\n` +
      `*Desired Date:* ${formData.date}\n` +
      `*Time Slot:* ${formData.timeSlot}\n` +
      `*Special Notes:* ${formData.notes || 'None'}\n\n` +
      `_Please confirm slot availability for this elite appointment._`;

    const encodedText = encodeURIComponent(waText);
    const waURL = `https://wa.me/918822067755?text=${encodedText}`;
    
    setBookingConfirmed(true);
    
    // Smooth transition opening WhatsApp
    setTimeout(() => {
      window.open(waURL, '_blank');
    }, 1200);
  };

  const activeFilteredServices = ALL_SERVICES.filter(s => s.category === formData.serviceCategory);

  return (
    <section id="booking" className="relative py-28 bg-luxury-charcoal/10 overflow-hidden border-t border-pearl/5">
      {/* Background visual orb */}
      <div className="absolute top-1/2 left-10 w-[45vw] h-[45vw] bg-[radial-gradient(circle,rgba(212,175,55,0.025)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Calendar className="w-4 h-4 text-gold animate-bounce" />
            <span className="text-xs uppercase tracking-[0.4em] text-gold font-medium">Reservation Portal</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl tracking-tight text-white font-extralight mb-5">
            Book Your <span className="font-serif italic font-normal gold-gradient-text">Elite Transformation</span>
          </h2>
          
          <div className="h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6 w-20" />
          
          <p className="text-pearl/60 text-sm font-light leading-relaxed">
            Specify your preferences below. Your request will pre-format an immediate instant WhatsApp reservation request dispatched directly to our salon desk manager.
          </p>
        </div>

        {/* Wizard Multi-step Container */}
        <div className="glass-panel p-8 md:p-12 rounded-sm border border-gold/20 shadow-[0_4px_40px_rgba(0,0,0,0.6)]" id="booking-wizard">
          <AnimatePresence mode="wait">
            {!bookingConfirmed ? (
              <motion.form
                key="booking-form-step"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                onSubmit={handleWhatsAppBooking}
                className="space-y-8"
              >
                {/* Step indicator tracker bar */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-pearl/5">
                  <span className="text-[10px] tracking-wider text-pearl/40 uppercase font-mono">STEP {step} OF 2</span>
                  <div className="flex items-center space-x-2">
                    <span className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[8px] font-mono ${step >= 1 ? 'bg-gold text-black font-bold' : 'bg-pearl/10 text-pearl/50'}`}>1</span>
                    <span className="h-[1px] bg-pearl/10 w-6" />
                    <span className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[8px] font-mono ${step >= 2 ? 'bg-gold text-black font-bold' : 'bg-pearl/10 text-pearl/50'}`}>2</span>
                  </div>
                </div>

                {/* STEP 1: Categories and Service selections */}
                {step === 1 && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-6"
                    id="step-1-content"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                      {/* Selection 1: Category */}
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-pearl/60 font-mono block">1. Category of Care</label>
                        <select
                          name="serviceCategory"
                          value={formData.serviceCategory}
                          onChange={handleInputChange}
                          className="w-full bg-luxury-black/60 border border-pearl/15 rounded-sm p-3.5 text-xs text-pearl focus:border-gold outline-none tracking-widest uppercase transition-colors"
                          id="select-category"
                        >
                          <option value="hair">L'Oréal Hair Care</option>
                          <option value="beauty">Facial Beauty & Skin</option>
                          <option value="bridal">Signature Bridal Art</option>
                        </select>
                      </div>

                      {/* Selection 2: Service Selection */}
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-pearl/60 font-mono block">2. Select Specific Care</label>
                        <select
                          name="serviceSelectedId"
                          value={formData.serviceSelectedId}
                          onChange={handleInputChange}
                          className="w-full bg-luxury-black/60 border border-pearl/15 rounded-sm p-3.5 text-xs text-pearl focus:border-gold outline-none transition-colors"
                          id="select-service"
                        >
                          {activeFilteredServices.map((subS) => (
                            <option key={subS.id} value={subS.id}>
                              {subS.name} ({subS.price})
                            </option>
                          ))}
                        </select>
                      </div>

                    </div>

                    {/* Quick Package override option */}
                    <div className="p-4 bg-gold/5 rounded border border-gold/15 space-y-3">
                      <span className="text-[10px] tracking-wider uppercase text-gold font-mono font-medium block">
                        ✦ Or combine treatments with a premium club package:
                      </span>
                      <select
                        name="packageSelectedId"
                        value={formData.packageSelectedId}
                        onChange={handleInputChange}
                        className="w-full bg-luxury-black border border-gold/25 rounded-sm p-2 text-xs text-pearl focus:border-gold outline-none"
                        id="select-package-override"
                      >
                        <option value="none">No package (Keep specific service selected above)</option>
                        {PACKAGES.map((pkg) => (
                          <option key={pkg.id} value={pkg.id}>
                            {pkg.title} ({pkg.price})
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Step Navigation */}
                    <div className="pt-6 flex justify-end">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="px-8 py-3.5 bg-gradient-to-r from-gold via-champagne to-gold text-black hover:opacity-90 transition-all text-xs font-bold tracking-[0.25em] uppercase rounded-sm flex items-center justify-center space-x-2"
                        id="btn-step-1-next"
                      >
                        <span>Schedule Appointment</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: Time, Date, Details */}
                {step === 2 && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-6"
                    id="step-2-content"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                      {/* Selection: Date */}
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-pearl/60 font-mono block">3. Desired Date</label>
                        <div className="relative">
                          <input
                            type="date"
                            name="date"
                            required
                            min={new Date().toISOString().split('T')[0]} // prevent past dates
                            value={formData.date}
                            onChange={handleInputChange}
                            className="w-full bg-luxury-black/60 border border-pearl/15 rounded-sm p-3.5 text-xs text-pearl focus:border-gold outline-none transition-colors"
                            id="input-date"
                          />
                        </div>
                      </div>

                      {/* Selection: Preferred Time Slot */}
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-pearl/60 font-mono block">4. Preferred Slot</label>
                        <select
                          name="timeSlot"
                          value={formData.timeSlot}
                          onChange={handleInputChange}
                          className="w-full bg-luxury-black/60 border border-pearl/15 rounded-sm p-3.5 text-xs text-pearl focus:border-gold outline-none transition-colors"
                          id="select-timeslot"
                        >
                          {timeSlots.map((ts) => (
                            <option key={ts} value={ts}>{ts}</option>
                          ))}
                        </select>
                      </div>

                    </div>

                    <div className="h-[1px] bg-pearl/10 w-full my-6" />

                    {/* Customer Inputs */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      
                      {/* Name */}
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-pearl/60 font-mono flex items-center space-x-1">
                          <User className="w-3 h-3 text-gold" />
                          <span>Full Name</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Your Premium Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-luxury-black/60 border border-pearl/15 rounded-sm p-3 text-xs text-white focus:border-gold outline-none placeholder:text-pearl/30 transition-colors"
                          id="input-name"
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-pearl/60 font-mono flex items-center space-x-1">
                          <Phone className="w-3 h-3 text-gold" />
                          <span>Active Mobile Contact</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder="e.g. +91 88220..."
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full bg-luxury-black/60 border border-pearl/15 rounded-sm p-3 text-xs text-white focus:border-gold outline-none placeholder:text-pearl/30 transition-colors"
                          id="input-phone"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-pearl/60 font-mono block">Email Address (Optional)</label>
                        <input
                          type="email"
                          name="email"
                          placeholder="your.email@gmail.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-luxury-black/60 border border-pearl/15 rounded-sm p-3 text-xs text-white focus:border-gold outline-none placeholder:text-pearl/30 transition-colors"
                          id="input-email"
                        />
                      </div>

                    </div>

                    {/* Special Notes */}
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-pearl/60 font-mono block">Special Requirements / Notes (Optional)</label>
                      <textarea
                        name="notes"
                        rows={3}
                        placeholder="Detail any allergies, custom wedding theme requests, or hair length specifications..."
                        value={formData.notes}
                        onChange={handleInputChange}
                        className="w-full bg-luxury-black/60 border border-pearl/15 rounded-sm p-3.5 text-xs text-white focus:border-gold outline-none placeholder:text-pearl/30 transition-colors resize-none"
                        id="input-notes"
                      />
                    </div>

                    {/* Step Navigation Back/Submit */}
                    <div className="pt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="px-6 py-3.5 border border-pearl/20 hover:border-gold hover:text-gold text-pearl text-xs font-bold tracking-[0.2em] uppercase rounded-sm transition-colors text-center"
                        id="btn-step-2-back"
                      >
                        Back to Selections
                      </button>

                      <button
                        type="submit"
                        className="px-8 py-4 bg-gradient-to-r from-gold via-champagne to-gold text-black text-xs font-bold tracking-[0.25em] uppercase rounded-sm shadow-[0_0_30px_rgba(212,175,55,0.25)] hover:shadow-[0_0_40px_rgba(212,175,55,0.45)] transition-all flex items-center justify-center space-x-2.5 cursor-pointer"
                        id="btn-submit-booking"
                      >
                        <MessageSquare className="w-4 h-4 fill-current" />
                        <span>Confirm & Dispatch WhatsApp</span>
                      </button>
                    </div>
                  </motion.div>
                )}

              </motion.form>
            ) : (
              <motion.div
                key="booking-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-6"
                id="booking-success-indicator"
              >
                <div className="w-16 h-16 rounded-full bg-gold/10 border-2 border-gold mx-auto flex items-center justify-center text-gold shadow-[0_0_30px_rgba(212,175,55,0.25)]">
                  <Check className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] tracking-[0.3em] uppercase font-mono text-gold block">✦ RESERVATION DISPATCHED ✦</span>
                  <h3 className="text-3xl text-white font-light font-serif">Thank You, {formData.name}</h3>
                  <p className="text-pearl/70 text-sm font-light max-w-md mx-auto leading-relaxed">
                    We have compiled your booking file and dispatched it to the TPS Desk Manager on WhatsApp. Please check your browser's WhatsApp tab to complete verification.
                  </p>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => {
                      setBookingConfirmed(false);
                      setStep(1);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        serviceCategory: 'hair',
                        serviceSelectedId: ALL_SERVICES[0].id,
                        packageSelectedId: 'none',
                        date: '',
                        timeSlot: '11:00 AM',
                        notes: ''
                      });
                    }}
                    className="px-6 py-3 border border-gold text-gold hover:bg-gold hover:text-black uppercase text-[10px] tracking-widest font-semibold rounded-sm transition-all"
                  >
                    Schedule Another Session
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
