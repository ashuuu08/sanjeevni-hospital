import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Phone, User, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';

const AppointmentModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    department: 'General Medicine',
    date: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Trigger modal 5 seconds after load
  useEffect(() => {
    const timer = setTimeout(() => {
      const dismissed = sessionStorage.getItem('sanjeevni_appt_dismissed');
      if (!dismissed) {
        setIsOpen(true);
      }
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    sessionStorage.setItem('sanjeevni_appt_dismissed', 'true');
    setTimeout(() => {
      setIsOpen(false);
      setIsSubmitted(false);
    }, 3500);
  };

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('sanjeevni_appt_dismissed', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-teal-100 overflow-hidden"
          >
            {/* Top Compact Accent Header */}
            <div className="relative bg-gradient-to-r from-[#0F4C81] via-blue-900 to-teal-600 px-6 py-6 text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-xl -mr-16 -mt-16 pointer-events-none"></div>
              
              <button 
                onClick={handleClose}
                className="absolute top-3 right-3 text-white/80 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors focus:outline-none z-10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative z-10 space-y-1.5 pr-6">
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-bold tracking-wider uppercase text-teal-200 border border-white/20">
                  <ShieldCheck className="w-3 h-3" /> Quick Prioritized Booking
                </div>
                <h2 className="text-xl md:text-2xl font-heading font-black tracking-tight leading-tight">
                  Book Doctor Consultation
                </h2>
                <p className="text-xs text-blue-100 font-medium leading-relaxed">
                  Skip the waiting queue. Submit details and get slot confirmation in 15 mins.
                </p>
              </div>
            </div>

            {/* Modal Body / Compact Form */}
            <div className="p-6">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center space-y-3"
                >
                  <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto text-teal-600 border-2 border-teal-200">
                    <CheckCircle2 className="w-8 h-8 animate-bounce" />
                  </div>
                  <h3 className="text-xl font-heading font-black text-gray-900 tracking-tight">
                    Request Received!
                  </h3>
                  <p className="text-gray-600 text-xs max-w-xs mx-auto font-medium leading-relaxed">
                    Thank you, <strong className="text-[#0F4C81]">{formData.name}</strong>. We will call you at <strong className="text-[#0F4C81]">{formData.phone}</strong> shortly to confirm.
                  </p>
                  <p className="text-[11px] text-gray-400 flex items-center justify-center gap-1 pt-1">
                    <Clock className="w-3 h-3" /> Auto-closing window...
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-extrabold uppercase tracking-wider text-gray-700 mb-1">
                      Full Patient Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Patient Full Name"
                        className="w-full pl-9 pr-3 py-2.5 bg-gray-50/80 border border-gray-200 rounded-xl text-xs font-semibold text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/80 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-extrabold uppercase tracking-wider text-gray-700 mb-1">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+91 98765 43210"
                        className="w-full pl-9 pr-3 py-2.5 bg-gray-50/80 border border-gray-200 rounded-xl text-xs font-semibold text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/80 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-gray-700 mb-1">
                        Department
                      </label>
                      <select 
                        value={formData.department}
                        onChange={(e) => setFormData({...formData, department: e.target.value})}
                        className="w-full px-3 py-2.5 bg-gray-50/80 border border-gray-200 rounded-xl text-xs font-semibold text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/80 transition-all"
                      >
                        <option>General Medicine</option>
                        <option>Cardiology</option>
                        <option>Orthopedics & Trauma</option>
                        <option>Pediatrics & NICU</option>
                        <option>Gynecology & OBG</option>
                        <option>General Surgery</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-gray-700 mb-1">
                        Preferred Date <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="date" 
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({...formData, date: e.target.value})}
                        className="w-full px-3 py-2.5 bg-gray-50/80 border border-gray-200 rounded-xl text-xs font-semibold text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/80 transition-all"
                      />
                    </div>
                  </div>

                  <div className="pt-1">
                    <button 
                      type="submit"
                      className="w-full py-3 px-4 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold tracking-wide shadow-md shadow-teal-600/20 hover:shadow-teal-600/30 transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-1.5"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Confirm Prioritized Request</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Modal Bottom Note */}
            <div className="bg-gray-50 border-t border-gray-100 px-6 py-3 flex items-center justify-between text-[11px] font-semibold text-gray-500">
              <span>⚡ Zero Booking Fees</span>
              <span>🔒 100% Secure & Private</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AppointmentModal;
