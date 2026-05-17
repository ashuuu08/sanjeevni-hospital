import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, Award, Heart, Users, Target, Eye, Building2, Stethoscope } from 'lucide-react';
import poster1 from '../assets/poster1.jpg';
import poster2 from '../assets/poster2.jpg';
import poster3 from '../assets/poster3.jpg';

const fade = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const AboutPage = () => {
  return (
    <div className="pt-20 lg:pt-[84px] bg-white">

      {/* HEADER */}
      <section className="relative bg-[#0F4C81] py-28 px-4 overflow-hidden">
        <div className="absolute inset-0"><img src={poster1} alt="" className="w-full h-full object-cover opacity-15" /></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">About Sanjeevni Hospital</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-teal-200 text-lg max-w-3xl mx-auto leading-relaxed">
            A trusted name in healthcare for the people of Anuppur, Shahdol, and central Madhya Pradesh since 2005.
          </motion.p>
        </div>
      </section>

      {/* HISTORY */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <img src={poster3} alt="Hospital Building" className="rounded-3xl shadow-xl w-full max-h-[500px] object-cover" />
          </motion.div>
          <motion.div variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <span className="text-teal-600 font-bold text-sm uppercase tracking-widest">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mt-3 mb-6">From a Small Clinic to a Multi-Speciality Hospital</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Sanjeevni Hospital was founded in 2005 with a simple vision — to bring quality healthcare to the people of Anuppur who were forced to travel hundreds of kilometres for basic medical treatment. What began as a modest 20-bed clinic has now grown into a comprehensive 100+ bed multi-speciality hospital.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Over nearly two decades, we have treated more than 50,000 patients, performed thousands of successful surgeries, and delivered life-saving emergency care around the clock. Our growth has been fuelled by community trust, dedicated staff, and a relentless commitment to medical excellence.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, Sanjeevni stands as the most trusted healthcare provider in the Shahdol division, offering advanced facilities like a Level-3 ICU, modular operation theatres, and NABL-grade diagnostics — ensuring that no family in Anuppur needs to look elsewhere for quality care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* DIRECTOR MESSAGE */}
      <section id="director" className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white p-10 md:p-16 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <img src={poster2} alt="Director" className="w-40 h-40 rounded-2xl object-cover shadow-md flex-shrink-0" />
              <div>
                <span className="text-teal-600 font-bold text-sm uppercase tracking-widest">Director's Message</span>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mt-2 mb-6">Dr. Rajesh Sharma, MBBS, MD</h2>
                <blockquote className="text-gray-600 text-lg leading-relaxed italic border-l-4 border-[#0F4C81] pl-6 mb-6">
                  "Healthcare is not a privilege but a fundamental right. At Sanjeevni Hospital, we work every day to ensure that advanced medical care is accessible, affordable, and delivered with genuine compassion to every patient who walks through our doors."
                </blockquote>
                <p className="text-gray-500 leading-relaxed">
                  Under Dr. Sharma's leadership, the hospital has introduced multiple speciality departments, invested in cutting-edge medical technology, and established life-saving 24/7 emergency and trauma services that have become the backbone of healthcare in the Anuppur region.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section id="mission" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-[#0F4C81] p-10 rounded-3xl text-white">
            <Target className="w-12 h-12 text-teal-300 mb-6" />
            <h3 className="text-3xl font-heading font-bold mb-4">Our Mission</h3>
            <p className="text-blue-100 leading-relaxed text-lg">
              To provide world-class, patient-centred healthcare services that are accessible and affordable to every citizen of Anuppur and surrounding districts. We are committed to clinical excellence, ethical practices, and continuous innovation.
            </p>
          </motion.div>
          <motion.div variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-teal-600 p-10 rounded-3xl text-white">
            <Eye className="w-12 h-12 text-teal-200 mb-6" />
            <h3 className="text-3xl font-heading font-bold mb-4">Our Vision</h3>
            <p className="text-teal-100 leading-relaxed text-lg">
              To become the most trusted centre for healthcare excellence in Madhya Pradesh by 2030, setting benchmarks in patient safety, medical innovation, and community wellness that inspire the next generation of healthcare institutions in rural India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <span className="text-teal-600 font-bold text-sm uppercase tracking-widest">What Guides Us</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mt-3">Our Core Values</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: 'Compassion', desc: 'Every patient is treated with warmth, dignity, and genuine human empathy.' },
              { icon: Award, title: 'Excellence', desc: 'We pursue the highest clinical standards in diagnosis, treatment, and care.' },
              { icon: Users, title: 'Community', desc: 'We are deeply rooted in Anuppur and committed to improving public health.' },
              { icon: CheckCircle2, title: 'Integrity', desc: 'Transparency, ethical practices, and honest communication define us.' },
            ].map((v, i) => (
              <motion.div key={i} variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-8 bg-white rounded-2xl border border-gray-100">
                <v.icon className="w-10 h-10 text-teal-600 mx-auto mb-4" />
                <h3 className="font-heading font-bold text-gray-900 text-lg mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <span className="text-teal-600 font-bold text-sm uppercase tracking-widest">Our Infrastructure</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mt-3">Built for Excellence</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { num: '100+', label: 'Hospital Beds' },
              { num: '5', label: 'Operation Theatres' },
              { num: '20+', label: 'ICU Beds' },
              { num: '10+', label: 'NICU Beds' },
              { num: '3', label: 'Ambulances' },
              { num: '24/7', label: 'Pharmacy & Lab' },
            ].map((s, i) => (
              <motion.div key={i} variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="text-center p-8 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="text-4xl font-black text-[#0F4C81] mb-2">{s.num}</div>
                <div className="text-sm text-gray-500 font-bold uppercase tracking-wider">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-heading font-bold text-white mb-4">Experience the Sanjeevni Difference</h3>
          <p className="text-teal-100 mb-8 max-w-2xl mx-auto">Schedule a visit to our hospital or book an OPD consultation with any of our specialist doctors today.</p>
          <Link to="/appointment" className="bg-white text-teal-700 font-bold px-10 py-4 rounded-lg shadow-lg hover:bg-teal-50 transition-colors">Book Appointment</Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
