import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Phone, ArrowRight, ShieldCheck, Clock, Stethoscope, Heart, Activity, Baby, 
  Users, Star, CheckCircle2, Calendar, AlertCircle, ChevronRight, MapPin, Mail, 
  Award, Sparkles, Check, FileText, Plus, Shield, Microscope
} from 'lucide-react';
import poster1 from '../assets/poster1.jpg';
import poster2 from '../assets/poster2.jpg';
import poster3 from '../assets/poster3.jpg';
import { departmentsData, doctorsData, blogsData } from '../data/hospitalData';

const fadeUp = { 
  hidden: { opacity: 0, y: 30 }, 
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } 
};

const Home = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  return (
    <div className="pt-20 lg:pt-[92px] bg-white text-gray-800 font-sans antialiased overflow-x-hidden">
      
      {/* ════════════════════════════════════════════════════════════════════════
          1. PREMIUM HERO SECTION (Cinematic Fullscreen Experience)
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[88vh] flex items-center bg-[#0F4C81] overflow-hidden">
        {/* Background Image with Deep Overlay */}
        <div className="absolute inset-0">
          <img 
            src={poster1} 
            alt="Sanjeevni Hospital Excellence" 
            className="w-full h-full object-cover object-center filter saturate-50 scale-105 transform motion-safe:animate-pulse-slow opacity-25" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F4C81] via-[#0F4C81]/95 to-[#0F4C81]/60 backdrop-blur-[1px]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F4C81] via-transparent to-black/30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
            className="lg:col-span-8 space-y-8"
          >
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-teal-300 text-xs md:text-sm font-bold tracking-wide shadow-inner">
              <Sparkles className="w-4 h-4 text-yellow-300 animate-spin-slow flex-shrink-0" />
              <span>Madhya Pradesh's Premier Multi-Speciality Healthcare Destination</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black text-white leading-[1.12] tracking-tight">
              Compassionate Care Backed By <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-200">Advanced Medical Excellence</span>
            </h1>

            <p className="text-blue-100 text-lg md:text-xl font-normal max-w-2xl leading-relaxed opacity-95">
              Sanjeevni Hospital Anuppur combines elite clinical expertise, state-of-the-art Level-3 ICU infrastructure, and a human-centered approach to deliver uncompromising medical care for every family.
            </p>

            <div className="flex flex-wrap gap-5 pt-4">
              <Link 
                to="/appointment" 
                className="bg-teal-500 hover:bg-teal-400 text-white font-bold text-base md:text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-teal-500/30 flex items-center gap-3 transform hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5 flex-shrink-0" />
                <span>Schedule Consultation</span>
              </Link>
              <a 
                href="tel:+919876543210" 
                className="bg-white/15 hover:bg-white text-white hover:text-[#0F4C81] font-bold text-base md:text-lg px-8 py-4 rounded-xl transition-all duration-300 backdrop-blur-md border border-white/30 flex items-center gap-3 shadow-lg"
              >
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                <span>24/7 Emergency Helpline</span>
              </a>
            </div>

            {/* Floating Trust Badges */}
            <div className="pt-8 border-t border-white/15 flex flex-wrap gap-8 text-white/90 text-sm font-semibold tracking-wide">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <span>PM-JAY Ayushman Empaneled</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Activity className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <span>NABL Accredited Diagnostics</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <span>24x7 Trauma & Critical Care</span>
              </div>
            </div>
          </motion.div>

          {/* Floating Hero Visual Graphic */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-4 relative hidden lg:block"
          >
            <div className="relative z-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl p-7 rounded-3xl border border-white/20 shadow-2xl space-y-6 text-white">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                  <span className="font-bold text-sm tracking-wider uppercase">Live OPD Desk</span>
                </div>
                <span className="text-xs bg-teal-500/40 text-teal-200 px-3 py-1 rounded-full font-bold tracking-wider uppercase">Open</span>
              </div>

              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                  <p className="text-xs text-blue-200 font-medium">Current Wait Time</p>
                  <p className="text-2xl font-bold text-teal-300 font-heading">&lt; 15 Mins</p>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                  <p className="text-xs text-blue-200 font-medium">Intensive Care Unit</p>
                  <p className="text-2xl font-bold text-white font-heading">Level-3 Advanced</p>
                </div>
              </div>

              <div className="pt-2 text-center">
                <Link to="/doctors" className="text-xs font-bold text-teal-300 hover:text-white flex items-center justify-center gap-1.5 transition-colors tracking-wide">
                  <span>Browse Specialist Roster</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
            
            {/* Ambient Glow */}
            <div className="absolute -inset-4 bg-teal-500/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/50 text-xs tracking-widest uppercase z-10 pointer-events-none">
          <span>Scroll to Discover</span>
          <div className="w-5 h-8 border-2 border-white/30 rounded-full p-1">
            <div className="w-1.5 h-2 bg-teal-400 rounded-full animate-bounce mx-auto"></div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          2. TRUST INDICATORS SECTION (Horizontal Bar)
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="relative z-20 bg-white shadow-xl border-b border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center divide-x divide-gray-100">
            {[
              { num: "20+", label: "Years of Trust", sub: "Serving M.P. since 2005" },
              { num: "50,000+", label: "Patients Treated", sub: "Successful recoveries" },
              { num: "25+", label: "Expert Doctors", sub: "Senior consultants" },
              { num: "24/7", label: "Emergency Response", sub: "Rapid trauma care" },
              { num: "30+", label: "ICU & NICU Beds", sub: "Critical monitoring" },
              { num: "15 min", label: "Ambulance Dispatch", sub: "GPS tracked fleet" },
            ].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="px-4">
                <p className="text-3xl md:text-4xl font-heading font-black text-[#0F4C81]">{stat.num}</p>
                <p className="text-sm font-bold text-gray-900 mt-1.5">{stat.label}</p>
                <p className="text-xs text-gray-500 mt-0.5">{stat.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          3. ABOUT SANJEEVNI HOSPITAL (Asymmetrical Layout & Storytelling)
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Visual Column */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 aspect-[4/3] z-10 bg-gray-200">
                <img src={poster3} alt="Sanjeevni Hospital Exterior" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-2/3 rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-video hidden md:block z-20 bg-gray-200">
                <img src={poster2} alt="Medical Consultation" className="w-full h-full object-cover object-top" />
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl -z-10"></div>
            </motion.div>

            {/* Content Column */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 space-y-8"
            >
              <div>
                <span className="text-teal-600 font-bold text-xs md:text-sm tracking-widest uppercase bg-teal-50 px-3 py-1 rounded-full border border-teal-100">Institutional Excellence</span>
                <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mt-4 leading-[1.15]">
                  Setting the Benchmark for <span className="text-[#0F4C81]">Regional Healthcare in Anuppur</span>
                </h2>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed font-normal">
                For nearly two decades, Sanjeevni Hospital has been the vanguard of specialized medical care in eastern Madhya Pradesh. Founded on the principle that world-class healthcare should not require traveling across state borders, we have built a comprehensive multi-speciality center right at your doorstep.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-blue-100/60 text-[#0F4C81] flex items-center justify-center flex-shrink-0 font-bold text-xl">01</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Rural Healthcare Mission</h4>
                    <p className="text-xs text-gray-600 leading-relaxed font-normal">Bringing tier-1 medical infrastructure and expert surgeons to central tribal regions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-teal-100/60 text-teal-700 flex items-center justify-center flex-shrink-0 font-bold text-xl">02</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Ethical Clinical Care</h4>
                    <p className="text-xs text-gray-600 leading-relaxed font-normal">Uncompromising transparency in diagnostics, billing, and evidence-based treatments.</p>
                  </div>
                </div>
              </div>

              {/* Founder Quote */}
              <div className="p-7 bg-gradient-to-r from-blue-50/80 to-teal-50/80 rounded-2xl border-l-4 border-[#0F4C81] relative overflow-hidden shadow-xs">
                <blockquote className="italic text-gray-800 leading-relaxed font-medium text-base md:text-lg">
                  "Our hospital is dedicated to every family in Anuppur and Shahdol division. We stand by our promise of providing elite medical excellence with unyielding compassion."
                </blockquote>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-900 text-sm md:text-base">Dr. Rajesh Sharma</p>
                    <p className="text-xs text-teal-700 font-bold uppercase tracking-wider">Managing Director & Chief Consultant</p>
                  </div>
                  <Award className="w-10 h-10 text-[#0F4C81]/15 flex-shrink-0" />
                </div>
              </div>

              <div className="pt-2">
                <Link to="/about" className="inline-flex items-center font-bold text-[#0F4C81] hover:text-teal-600 gap-2 text-lg group transition-colors">
                  <span>Discover Our History & Legacy</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          4. WHY CHOOSE US (Premium Minimalist Feature Grid)
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-[#0F4C81] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F4C81] to-blue-950"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-teal-300 font-bold text-xs md:text-sm tracking-widest uppercase bg-white/10 px-4 py-1.5 rounded-full border border-white/15">Hospital Superiority</span>
            <h2 className="text-3xl md:text-5xl font-heading font-black mt-4 mb-6 leading-tight">Why Sanjeevni is the Trusted Healthcare Partner</h2>
            <p className="text-blue-100 text-lg leading-relaxed font-normal">We adhere to global healthcare standards while tailoring our care specifically for the unique medical needs of central India.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Users, title: 'Experienced Senior Doctors', desc: 'Our specialist faculty comprises veterans from prestigious institutions across India, ensuring impeccable diagnostic accuracy and surgical precision.' },
              { icon: Microscope, title: 'Advanced Technology', desc: 'From Philips color doppler ultrasound to fully automated NABL pathology analyzers, our tech ecosystem leaves no room for diagnostic errors.' },
              { icon: AlertCircle, title: '24/7 Rapid Emergency', desc: 'A dedicated trauma triage protocol with instantaneous intensivist intervention, blood availability, and ICU transport.' },
              { icon: Shield, title: 'Affordable & Transparent', desc: 'Empaneled under Ayushman Bharat PM-JAY and all major health TPAs for hassle-free cashless hospitalization without hidden fees.' },
              { icon: Activity, title: 'Level-3 Modular ICU', desc: 'Highly sterile critical care units with 1:1 nursing ratios, invasive ventilators, defibrillators, and continuous cardiac monitoring.' },
              { icon: Heart, title: 'Patient-Centered Compassion', desc: 'We treat patients, not just diseases. Every attendant is supported by dedicated helpdesk coordinators from admission to discharge.' },
            ].map((feat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-teal-500/20 text-teal-300 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform flex-shrink-0">
                    <feat.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3 text-white">{feat.title}</h3>
                  <p className="text-blue-100/80 leading-relaxed text-sm font-normal">{feat.desc}</p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center text-xs font-bold text-teal-300 group-hover:text-white transition-colors">
                  <span>Standard of Care Verified</span>
                  <Check className="w-4 h-4 ml-2" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          5. DEPARTMENTS PREVIEW (Long Showcase & Deep Navigation)
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-slate-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-2xl">
              <span className="text-teal-600 font-bold text-xs md:text-sm tracking-widest uppercase bg-teal-50 px-3 py-1 rounded-full border border-teal-100">Centres of Excellence</span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mt-4 leading-tight">Specialized Medical Departments</h2>
            </motion.div>
            <Link to="/departments" className="inline-flex items-center font-bold text-[#0F4C81] hover:text-teal-600 gap-2 group transition-colors text-lg">
              <span>View All Departments</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departmentsData.map((dept, idx) => (
              <motion.div 
                key={dept.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link 
                  to={`/departments/${dept.id}`} 
                  className="block bg-white p-8 rounded-3xl border border-gray-100 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-[#0F4C81] group-hover:bg-[#0F4C81] group-hover:text-white transition-all duration-300 shadow-sm flex-shrink-0">
                        <Stethoscope className="w-8 h-8" />
                      </div>
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest group-hover:text-teal-600 transition-colors">Dept 0{idx + 1}</span>
                    </div>

                    <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3 group-hover:text-[#0F4C81] transition-colors">{dept.name}</h3>
                    <p className="text-gray-600 leading-relaxed mb-8 text-sm font-normal">{dept.shortDesc}</p>
                  </div>

                  <div className="pt-6 border-t border-gray-100 flex items-center justify-between text-teal-600 font-bold group-hover:text-[#0F4C81] transition-colors">
                    <span>Explore Treatments & Doctors</span>
                    <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors flex-shrink-0">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          6. EMERGENCY & TRAUMA BANNER (Urgent but Premium)
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-r from-red-700 via-red-600 to-red-800 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="flex items-start gap-6 max-w-3xl">
            <div className="w-16 h-16 rounded-2xl bg-white text-red-600 flex items-center justify-center flex-shrink-0 shadow-lg animate-pulse">
              <AlertCircle className="w-10 h-10" />
            </div>
            <div className="space-y-3">
              <div className="inline-block bg-red-500/50 border border-red-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider font-normal">
                Emergency Triage Active
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-black leading-tight">
                24/7 Emergency & Trauma Care Hotline
              </h2>
              <p className="text-red-100 text-lg leading-relaxed font-normal">
                In a critical medical emergency, every single second dictates the outcome. Sanjeevni Hospital operates an instantaneous cardiac resuscitation and trauma dispatch system.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0 w-full lg:w-auto">
            <a 
              href="tel:+919876543210" 
              className="bg-white hover:bg-yellow-300 text-red-700 font-black text-xl px-10 py-5 rounded-2xl transition-all duration-300 shadow-2xl flex items-center justify-center gap-4 transform hover:scale-105"
            >
              <Phone className="w-7 h-7 flex-shrink-0" />
              <span>+91 98765 43210</span>
            </a>
            <Link 
              to="/contact" 
              className="bg-red-800/80 hover:bg-red-900 text-white font-bold text-lg px-8 py-5 rounded-2xl transition-all duration-300 border border-red-400/30 flex items-center justify-center gap-2 backdrop-blur-sm shadow-md"
            >
              <span>Get Directions</span>
              <MapPin className="w-5 h-5 flex-shrink-0" />
            </Link>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          7. DOCTORS SHOWCASE (Magazine Style Roster)
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-teal-600 font-bold text-xs md:text-sm tracking-widest uppercase bg-teal-50 px-4 py-1.5 rounded-full border border-teal-100">Faculty of Experts</span>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-gray-900 mt-4 mb-6 leading-tight">World-Class Medical Minds</h2>
            <p className="text-gray-600 text-lg leading-relaxed font-normal">Our senior medical team blends decades of clinical research and practical excellence across leading healthcare institutions.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctorsData.map((doc, idx) => (
              <motion.div 
                key={doc.id} 
                initial={{ opacity: 0, y: 40 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
              >
                <div className="aspect-[3/4] relative overflow-hidden bg-gray-200">
                  <img 
                    src={doc.image} 
                    alt={doc.name} 
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#0F4C81] flex items-center gap-1.5 shadow-md">
                    <Award className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
                    <span>{doc.experience}</span>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow justify-between bg-white border-t border-gray-100">
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-gray-900 mb-1 group-hover:text-[#0F4C81] transition-colors">{doc.name}</h3>
                    <p className="text-teal-600 font-bold text-sm mb-4">{doc.designation}</p>
                    <p className="text-gray-600 text-xs leading-relaxed line-clamp-3 mb-6 bg-slate-50 p-4 rounded-xl border border-gray-100 font-normal">{doc.qualifications}</p>
                  </div>

                  <Link 
                    to={`/doctors/${doc.id}`} 
                    className="w-full text-center px-4 py-3.5 bg-gray-900 hover:bg-[#0F4C81] text-white font-bold rounded-xl transition-colors shadow-md flex items-center justify-center gap-2"
                  >
                    <span>View Full Profile</span>
                    <ArrowRight className="w-4 h-4 flex-shrink-0" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link 
              to="/doctors" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#0F4C81] hover:bg-blue-900 text-white font-bold rounded-xl transition-colors shadow-xl text-base md:text-lg"
            >
              <span>Explore Complete Medical Directory</span>
              <Users className="w-5 h-5 flex-shrink-0" />
            </Link>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          8. ADVANCED FACILITIES SECTION (Cinematic Alternating Layouts)
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-slate-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-teal-600 font-bold text-xs md:text-sm tracking-widest uppercase bg-teal-50 px-4 py-1.5 rounded-full border border-teal-100">Elite Infrastructure</span>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-gray-900 mt-4 leading-tight">Uncompromising Clinical Ecosystem</h2>
          </div>

          {/* Facility 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 relative bg-gray-200">
              <img src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Level 3 ICU" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-8">
                <span className="text-white font-bold text-lg bg-teal-600 px-5 py-2.5 rounded-xl shadow-lg">Level-3 Critical Care Unit</span>
              </div>
            </div>
            <div className="lg:col-span-5 space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-blue-100/80 text-[#0F4C81] flex items-center justify-center font-bold text-2xl shadow-sm">01</div>
              <h3 className="text-3xl font-heading font-bold text-gray-900 leading-tight">Advanced Level-3 ICU</h3>
              <p className="text-gray-600 leading-relaxed text-lg font-normal">
                Equipped with invasive and non-invasive ventilators, multi-parameter monitoring, automated syringe pumps, and central medical gas pipeline. Our intensivist team ensures real-time physiological stabilization for critical trauma and post-surgical patients.
              </p>
              <ul className="space-y-3 text-gray-700 font-semibold pt-2">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0" /> 1:1 Nursing Ratio for acute admissions</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0" /> Dual Defibrillator & Triage Backup</li>
              </ul>
            </div>
          </div>

          {/* Facility 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6 lg:order-1 order-2">
              <div className="w-16 h-16 rounded-2xl bg-teal-100/80 text-teal-700 flex items-center justify-center font-bold text-2xl shadow-sm">02</div>
              <h3 className="text-3xl font-heading font-bold text-gray-900 leading-tight">Modular Laminar Flow Operation Theatres</h3>
              <p className="text-gray-600 leading-relaxed text-lg font-normal">
                Constructed to international sterilization protocols, our modular OTs feature zero-bacteria laminar airflow, advanced C-Arm IITV for orthopedic trauma, and high-definition laparoscopic towers for minimally invasive abdominal and gynecological surgeries.
              </p>
              <ul className="space-y-3 text-gray-700 font-semibold pt-2">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#0F4C81] flex-shrink-0" /> Seamless infection control & sterilization</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-[#0F4C81] flex-shrink-0" /> Post-operative ICU step-down recovery</li>
              </ul>
            </div>
            <div className="lg:col-span-7 aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 relative bg-gray-200 lg:order-2 order-1">
              <img src="https://images.pexels.com/photos/4483327/pexels-photo-4483327.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Modular Operation Theatre" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-8">
                <span className="text-white font-bold text-lg bg-[#0F4C81] px-5 py-2.5 rounded-xl shadow-lg">Sterile Surgical Suite</span>
              </div>
            </div>
          </div>

          {/* Facility 3 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 relative bg-gray-200">
              <img src="https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="NABL Pathology Lab" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-8">
                <span className="text-white font-bold text-lg bg-teal-600 px-5 py-2.5 rounded-xl shadow-lg">NABL Standard Laboratory</span>
              </div>
            </div>
            <div className="lg:col-span-5 space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-purple-100/80 text-purple-700 flex items-center justify-center font-bold text-2xl shadow-sm">03</div>
              <h3 className="text-3xl font-heading font-bold text-gray-900 leading-tight">Comprehensive Diagnostics & Radiology</h3>
              <p className="text-gray-600 leading-relaxed text-lg font-normal">
                An exact diagnosis is the precursor to effective medicine. Our in-house diagnostic wing includes computerized digital X-ray, 3D color doppler ultrasonography, and an automated pathology analyzer operating 24 hours a day.
              </p>
              <ul className="space-y-3 text-gray-700 font-semibold pt-2">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" /> Immediate STAT reporting for emergency cases</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" /> Home blood sample collection available</li>
              </ul>
            </div>
          </div>

          <div className="text-center pt-8">
            <Link to="/facilities" className="inline-flex items-center font-bold text-[#0F4C81] hover:text-teal-600 gap-3 text-xl transition-colors">
              <span>View All 12 In-House Hospital Facilities</span>
              <ArrowRight className="w-6 h-6 flex-shrink-0" />
            </Link>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          9. PATIENT EXPERIENCE JOURNEY (Horizontal Flow)
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-white border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-teal-600 font-bold text-xs md:text-sm tracking-widest uppercase bg-teal-50 px-4 py-1.5 rounded-full border border-teal-100">Care Pathway</span>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-gray-900 mt-4 mb-6 leading-tight">Seamless Patient Experience</h2>
            <p className="text-gray-600 text-lg leading-relaxed font-normal">We have streamlined every touchpoint to eliminate anxiety and ensure absolute focus on recovery.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative">
            {[
              { step: '01', title: 'Schedule OPD', desc: 'Secure an instant consultation slot online or via phone.' },
              { step: '02', title: 'Expert Consult', desc: 'Detailed physical examination with senior specialists.' },
              { step: '03', title: 'STAT Diagnostics', desc: 'In-house digital lab & radiology tests completed rapidly.' },
              { step: '04', title: 'Admission/TPA', desc: 'Cashless insurance desk approval within 2 hours.' },
              { step: '05', title: 'Advanced Care', desc: 'Evidence-based surgical or clinical treatment.' },
              { step: '06', title: 'Recovery Follow-up', desc: 'Post-discharge monitoring and rehabilitation guidance.' },
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-7 rounded-3xl border border-gray-100 relative group hover:bg-[#0F4C81] hover:text-white transition-all duration-300 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-4xl font-heading font-black text-teal-600 group-hover:text-teal-300 transition-colors mb-4 block">{item.step}</span>
                  <h4 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-white transition-colors">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-blue-100 transition-colors font-normal">{item.desc}</p>
                </div>
                <div className="mt-8 w-8 h-8 rounded-full bg-white text-[#0F4C81] flex items-center justify-center font-bold text-xs shadow-sm group-hover:bg-teal-400 group-hover:text-gray-900 transition-colors flex-shrink-0">
                  <Check className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          10. HEALTHCARE TECHNOLOGY SECTION (Pristine Medical White & Blue)
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-[#0F4C81]/5 border-b border-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-8">
              <span className="text-teal-700 font-bold text-xs md:text-sm tracking-widest uppercase bg-teal-100/80 px-4 py-1.5 rounded-full border border-teal-200">Digital Medicine</span>
              <h2 className="text-3xl md:text-5xl font-heading font-black text-gray-900 leading-tight">
                Empowering Doctors With <span className="text-[#0F4C81]">Next-Generation Clinical Tech</span>
              </h2>
              <p className="text-gray-700 text-lg font-normal leading-relaxed">
                Modern medicine relies heavily on technological precision. Sanjeevni Hospital has invested consistently in elite medical apparatus to ensure that complex surgeries and diagnoses are executed flawlessly.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm">
                  <div className="w-3 h-3 bg-teal-500 rounded-full animate-ping flex-shrink-0"></div>
                  <div>
                    <p className="font-bold text-gray-900">Central Hemodynamic Monitoring</p>
                    <p className="text-xs text-gray-600 font-normal">Continuous wireless telemetry for cardiac ICU patients.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm">
                  <div className="w-3 h-3 bg-[#0F4C81] rounded-full animate-ping flex-shrink-0"></div>
                  <div>
                    <p className="font-bold text-gray-900">Zero-Lead Radiation X-Ray Diagnostics</p>
                    <p className="text-xs text-gray-600 font-normal">High contrast radiography with minimal patient dosage.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-6">
              <div className="aspect-square rounded-3xl overflow-hidden relative shadow-2xl border border-white bg-gray-200">
                <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80" alt="Tech Monitoring" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-3xl overflow-hidden relative shadow-2xl border border-white bg-gray-200 mt-12">
                <img src="https://images.unsplash.com/photo-1582719478250-c89400bb1536?auto=format&fit=crop&w=800&q=80" alt="Tech Radiology" className="w-full h-full object-cover" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          11. TESTIMONIALS SECTION (Human Stories)
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-teal-600 font-bold text-xs md:text-sm tracking-widest uppercase bg-teal-50 px-4 py-1.5 rounded-full border border-teal-100">Patient Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-gray-900 mt-4 mb-6 leading-tight">Stories of Miraculous Recoveries</h2>
            <p className="text-gray-600 text-lg leading-relaxed font-normal">The truest measure of our institution is the health, joy, and gratitude of the families we return home.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "My father had a sudden severe cardiac chest pain in the middle of the night. We rushed him to Sanjeevni. The emergency doctors stabilized him within 10 minutes. Their Level-3 ICU care is absolutely top-notch.",
                patient: "Rajeshwar Dwivedi",
                location: "Anuppur Town",
                dept: "Cardiology Recovery"
              },
              {
                quote: "We chose Sanjeevni for my sister's high-risk pregnancy. Dr. Neha Singh and the NICU team took exceptional care when the baby was born premature. Today both mother and child are perfectly healthy.",
                patient: "Kavita Sahu",
                location: "Kotma",
                dept: "Obstetrics & NICU"
              },
              {
                quote: "I suffered a complicated femur fracture in a road accident. Dr. Amit Kumar performed an excellent surgery using modular OT implants. I am walking independently again after just 3 months of rehab.",
                patient: "Suresh Prajapati",
                location: "Shahdol",
                dept: "Orthopedic Surgery"
              }
            ].map((t, idx) => (
              <div key={idx} className="bg-slate-50 p-10 rounded-3xl border border-gray-100 shadow-md flex flex-col justify-between relative group hover:-translate-y-2 transition-all duration-300">
                <div className="absolute top-8 right-8 text-gray-200 font-heading font-black text-6xl select-none pointer-events-none group-hover:text-teal-200 transition-colors">"</div>
                <div>
                  <div className="flex items-center gap-1 mb-6 text-yellow-400">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400" />)}
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed italic mb-8 relative z-10 font-normal">"{t.quote}"</p>
                </div>
                <div className="pt-6 border-t border-gray-200 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-gray-900 text-base">{t.patient}</h4>
                    <p className="text-xs text-gray-500 font-semibold">{t.location}</p>
                  </div>
                  <span className="text-xs bg-teal-100/70 text-teal-800 px-3.5 py-1 rounded-full font-bold">{t.dept}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          12. HEALTH PACKAGES (Preventive Health Previews)
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-slate-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#0F4C81] font-bold text-xs md:text-sm tracking-widest uppercase bg-blue-100/80 px-4 py-1.5 rounded-full">Preventive Healthcare</span>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-gray-900 mt-4 mb-6 leading-tight">Comprehensive Master Health Checkups</h2>
            <p className="text-gray-600 text-lg leading-relaxed font-normal">Prevention is vastly better than cure. Choose from our specialized screening packages designed for all age groups.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Basic Swasthya Package', price: '₹1,499', tests: '28 Lab Parameters', icon: FileText, items: ['CBC & ESR', 'Blood Sugar Fasting', 'Lipid Profile', 'ECG & Physician Consult'] },
              { title: 'Cardiac Health Shield', price: '₹2,999', tests: '35 Lab Parameters', icon: Heart, items: ['Complete Lipid Panel', 'TMT (Treadmill Test)', '2D Echocardiography', 'Cardiologist Consultation'], pop: true },
              { title: 'Diabetic Care Master', price: '₹2,199', tests: '30 Lab Parameters', icon: Activity, items: ['HbA1c & Fasting Sugar', 'Renal Function (KFT)', 'Retinopathy Fundus Check', 'Dietician Counseling'] },
              { title: 'Women Wellness Screening', price: '₹3,499', tests: '40 Lab Parameters', icon: Baby, items: ['Pap Smear Test', 'Ultrasound Pelvis & Breast', 'Thyroid Profile (T3,T4,TSH)', 'Gynecology Consultation'] },
            ].map((pkg, i) => (
              <div key={i} className={`bg-white rounded-3xl p-8 border ${pkg.pop ? 'border-teal-500 shadow-2xl relative ring-2 ring-teal-500/20' : 'border-gray-200/80 shadow-sm'} flex flex-col justify-between hover:shadow-xl transition-all`}>
                {pkg.pop && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-teal-600 text-white font-bold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                    Highly Recommended
                  </div>
                )}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold flex-shrink-0 ${pkg.pop ? 'bg-teal-600 text-white' : 'bg-blue-100 text-[#0F4C81]'}`}>
                      <pkg.icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs bg-gray-100 font-bold text-gray-700 px-3.5 py-1 rounded-full">{pkg.tests}</span>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">{pkg.title}</h3>
                  <p className="text-3xl font-heading font-black text-[#0F4C81] mb-6">{pkg.price}</p>

                  <ul className="space-y-3 text-sm text-gray-700 font-medium border-t border-gray-100 pt-6 mb-8">
                    {pkg.items.map((test, ti) => (
                      <li key={ti} className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-teal-600 flex-shrink-0" />
                        <span>{test}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to="/appointment" className={`w-full py-4 text-center rounded-xl font-bold transition-all shadow-md ${pkg.pop ? 'bg-teal-600 hover:bg-teal-700 text-white hover:shadow-teal-600/30' : 'bg-gray-100 hover:bg-[#0F4C81] hover:text-white text-gray-900'}`}>
                  Book This Package
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          13. COMMUNITY HEALTHCARE SECTION (Social Commitment)
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-8">
            <span className="text-teal-600 font-bold text-xs md:text-sm tracking-widest uppercase bg-teal-50 px-4 py-1.5 rounded-full border border-teal-100">Social Responsibility</span>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-gray-900 leading-tight">
              Taking Elite Healthcare To <span className="text-[#0F4C81]">Every Corner of Rural Anuppur</span>
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed font-normal">
              Sanjeevni Hospital actively organizes monthly rural health checkup camps, blood donation drives, and free cataract surgeries for underprivileged senior citizens across remote villages in Shahdol division.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-4 text-center">
              <div className="p-6 bg-slate-50 rounded-2xl border border-gray-100 shadow-xs">
                <p className="text-3xl font-heading font-black text-[#0F4C81]">200+</p>
                <p className="text-xs font-bold text-gray-600 uppercase mt-1.5 tracking-wider font-normal">Free Camps</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-gray-100 shadow-xs">
                <p className="text-3xl font-heading font-black text-teal-600">10k+</p>
                <p className="text-xs font-bold text-gray-600 uppercase mt-1.5 tracking-wider font-normal">Free Consults</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-gray-100 shadow-xs">
                <p className="text-3xl font-heading font-black text-purple-700">5,000+</p>
                <p className="text-xs font-bold text-gray-600 uppercase mt-1.5 tracking-wider font-normal">Eye Screenings</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 relative bg-gray-200">
            <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80" alt="Rural Medical Camp" className="w-full h-full object-cover" />
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20">
              <p className="font-bold text-gray-900">Annual Swasthya Samman Awardee</p>
              <p className="text-xs text-gray-600 mt-1 font-normal">Recognized by state health authorities for exceptional rural healthcare penetration.</p>
            </div>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          14. BLOG & HEALTH ARTICLES (Modern Magazine Roster)
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-slate-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-teal-600 font-bold text-xs md:text-sm tracking-widest uppercase bg-teal-50 px-3 py-1 rounded-full border border-teal-100">Medical Journal</span>
              <h2 className="text-3xl md:text-5xl font-heading font-black text-gray-900 mt-4 leading-tight">Latest Health Insights & Articles</h2>
            </div>
            <Link to="/blog" className="inline-flex items-center font-bold text-[#0F4C81] hover:text-teal-600 gap-2 group transition-colors text-lg">
              <span>Read All Health Articles</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogsData.map((blog) => (
              <div key={blog.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-200/80 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <Link to={`/blog/${blog.id}`} className="block aspect-video relative overflow-hidden bg-gray-200">
                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-bold text-teal-700 shadow-sm">{blog.category}</span>
                  </Link>
                  <div className="p-8">
                    <p className="text-xs text-gray-500 font-bold mb-2">{blog.date}</p>
                    <h3 className="text-xl font-heading font-bold text-gray-900 mb-3 group-hover:text-[#0F4C81] transition-colors leading-tight">
                      <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-6 font-normal">{blog.excerpt}</p>
                  </div>
                </div>
                <div className="px-8 pb-8">
                  <Link to={`/blog/${blog.id}`} className="inline-flex items-center text-teal-600 font-bold text-sm hover:text-[#0F4C81] transition-colors">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 ml-2 flex-shrink-0" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          15. GALLERY SECTION (Preview Masonry Strip)
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-teal-600 font-bold text-xs md:text-sm tracking-widest uppercase bg-teal-50 px-3 py-1 rounded-full border border-teal-100">Visual Tour</span>
              <h2 className="text-3xl md:text-5xl font-heading font-black text-gray-900 mt-4 leading-tight">Sanjeevni Infrastructure Gallery</h2>
            </div>
            <Link to="/gallery" className="inline-flex items-center font-bold text-[#0F4C81] hover:text-teal-600 gap-2 group transition-colors text-lg">
              <span>View Full Gallery</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { src: poster1, title: 'Main OPD Block' },
              { src: poster2, title: 'Dedicated Medical Team' },
              { src: poster3, title: 'Multi-Speciality Building' },
              { src: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Advanced ICU' },
            ].map((img, idx) => (
              <div key={idx} className="aspect-[4/3] rounded-3xl overflow-hidden relative shadow-md group border border-gray-100 bg-gray-200">
                <img src={img.src} alt={img.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-bold">{img.title}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          16. INSURANCE & TPA PARTNERS (Professional Strip)
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#0F4C81] text-white border-t-4 border-teal-400 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase font-extrabold tracking-widest text-teal-300 mb-8">Cashless TPA & Government Health Empanelment</p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-90 text-sm font-black tracking-widest uppercase">
            <span>AYUSHMAN BHARAT PM-JAY</span>
            <span>•</span>
            <span>CGHS EMPANELED</span>
            <span>•</span>
            <span>ECHS HEALTHCARE</span>
            <span>•</span>
            <span>STAR HEALTH</span>
            <span>•</span>
            <span>ICICI LOMBARD</span>
            <span>•</span>
            <span>HDFC ERGO</span>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          17. APPOINTMENT CTA SECTION (High Impact Strip)
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-r from-teal-700 via-teal-600 to-blue-900 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=2000')] bg-cover bg-center opacity-15 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-heading font-black leading-tight">Secure Your Health With Sanjeevni Today</h2>
            <p className="text-teal-100 text-lg leading-relaxed">Book an online appointment to bypass hospital waiting queues or consult our reception desk directly.</p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/appointment" className="bg-white hover:bg-teal-50 text-[#0F4C81] font-black text-xl px-10 py-5 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-105">
              Book OPD Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          18. FAQ SECTION (Accordion)
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-slate-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center">
            <span className="text-teal-600 font-bold text-xs md:text-sm tracking-widest uppercase bg-teal-50 px-4 py-1.5 rounded-full border border-teal-100">Got Questions?</span>
            <h2 className="text-3xl md:text-5xl font-heading font-black text-gray-900 mt-4 mb-4 leading-tight">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg leading-relaxed">Clear and immediate answers regarding admissions, insurance, and emergency triage.</p>
          </div>

          <div className="space-y-4">
            {[
              { q: "Is cashless hospitalization available under Ayushman Bharat PM-JAY?", a: "Yes, Sanjeevni Hospital is fully empaneled under Ayushman Bharat PM-JAY. Eligible citizens can avail 100% cashless medical and surgical treatment upon producing their active PM-JAY card along with Aadhar verification." },
              { q: "What are the standard OPD consultation timings for specialist doctors?", a: "Our General OPD functions Monday through Saturday from 10:00 AM to 02:00 PM in the morning session, and 05:00 PM to 08:00 PM in the evening session. Sunday is reserved strictly for emergency and trauma admissions." },
              { q: "How fast can the emergency response ambulance reach remote villages around Anuppur?", a: "Our GPS-tracked emergency fleet is dispatched within 15 minutes of receiving a trauma call at +91 98765 43210. Each ambulance is equipped with oxygen support and trained emergency medical technicians." },
              { q: "What documents must I carry for scheduled surgical admission?", a: "Please carry all previous medical diagnostic files, doctor prescription slips, valid Government photo ID (Aadhar/Voter ID), and your health insurance/TPA card if seeking cashless pre-authorization." },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-sm transition-all duration-200">
                <button 
                  onClick={() => toggleFaq(idx)} 
                  className="w-full text-left p-6 font-bold text-lg text-gray-900 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full bg-blue-50 text-[#0F4C81] flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${activeFaq === idx ? 'rotate-45 bg-[#0F4C81] text-white' : ''}`}>
                    <Plus className="w-5 h-5 flex-shrink-0" />
                  </div>
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} 
                      animate={{ height: "auto", opacity: 1 }} 
                      exit={{ height: 0, opacity: 0 }} 
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4 font-normal"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          19. CONTACT & LOCATION DIRECTORY
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-teal-600 font-bold text-xs md:text-sm tracking-widest uppercase bg-teal-50 px-3 py-1 rounded-full border border-teal-100">Reach Our Desk</span>
              <h2 className="text-3xl md:text-5xl font-heading font-black text-gray-900 mt-4 mb-6 leading-tight">Sanjeevni Hospital Location & Directory</h2>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-gray-100 shadow-sm">
                <MapPin className="w-8 h-8 text-[#0F4C81] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Main Hospital Campus</h4>
                  <p className="text-gray-600 leading-relaxed text-sm font-normal">Near Bus Stand, Main Road, Anuppur, Madhya Pradesh – 484224</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-gray-100 shadow-sm">
                <Phone className="w-8 h-8 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Direct Help Lines</h4>
                  <p className="text-gray-600 text-sm font-normal">Emergency Triage: +91 98765 43210<br />OPD Reception: +91 98765 43211</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-gray-100 shadow-sm">
                <Mail className="w-8 h-8 text-purple-700 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg mb-1">Official Email Desk</h4>
                  <p className="text-gray-600 text-sm font-normal">info@sanjeevnihospital.com<br />tpa.desk@sanjeevnihospital.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-slate-100 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 aspect-[4/3] relative">
            <iframe 
              title="Sanjeevni Hospital Location" 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.5186640605923!2d81.6859346!3d23.102867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3987bf0015555555%3A0x3987bf0015555555!2sAnuppur%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;
