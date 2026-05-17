import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Building2, AlertCircle, TestTube, Baby, Pill, MonitorCheck, Syringe, Bed } from 'lucide-react';

const fade = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

const facilities = [
  { icon: Activity, title: 'Level-3 ICU', desc: 'Multi-bed intensive care unit with advanced ventilators, multi-para monitors, central oxygen supply, and 24/7 intensivist coverage for critically ill patients.' },
  { icon: Building2, title: 'Modular Operation Theatres', desc: 'Laminar airflow modular OTs equipped with electro-cautery, C-Arm IITV, and advanced anaesthesia machines for safe and sterile surgical environments.' },
  { icon: Baby, title: 'NICU (Neonatal ICU)', desc: 'Dedicated Level-3 NICU with incubators, phototherapy units, neonatal ventilators, and CPAP machines for premature and critically ill newborns.' },
  { icon: TestTube, title: 'Pathology & Diagnostics Lab', desc: 'Fully automated laboratory with haematology, biochemistry, microbiology, and serology capabilities. Reports available within 2-4 hours for most tests.' },
  { icon: AlertCircle, title: '24/7 Emergency & Ambulance', desc: 'Three fully-equipped emergency response vehicles with oxygen, stretcher, and trained paramedics covering Anuppur, Kotma, Jaithari, and surrounding areas.' },
  { icon: Pill, title: 'In-House Pharmacy', desc: 'Round-the-clock pharmacy stocking all essential and life-saving drugs. Affordable generic alternatives always available for patients.' },
  { icon: MonitorCheck, title: 'Digital X-Ray & Ultrasound', desc: 'Advanced digital radiography and 3D/4D ultrasound imaging for precise and fast diagnostic reporting.' },
  { icon: Bed, title: 'Patient Wards', desc: 'Clean, spacious general and semi-private wards with attached washrooms, nurse call systems, and daily sanitization protocols.' },
];

const FacilitiesPage = () => {
  return (
    <div className="pt-20 lg:pt-[84px] bg-gray-50 min-h-screen">
      <section className="bg-[#0F4C81] py-28 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">Our Facilities</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-teal-200 text-lg max-w-3xl mx-auto">
            State-of-the-art infrastructure designed to deliver the highest standards of patient care, safety, and comfort.
          </motion.p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-10">
        {facilities.map((f, idx) => (
          <motion.div key={idx} variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className={`flex flex-col md:flex-row items-start gap-8 bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-sm ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0">
              <f.icon className="w-10 h-10 text-[#0F4C81]" />
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3">{f.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default FacilitiesPage;
