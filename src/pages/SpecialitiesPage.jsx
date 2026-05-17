import React from 'react';
import { HeartPulse, Stethoscope, Baby, Activity, PlusCircle, Brain, Eye, Bone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const SpecialitiesPage = () => {
  const depts = [
    {
      icon: <HeartPulse className="w-10 h-10" />,
      name: "Cardiology",
      desc: "Comprehensive cardiac care including non-invasive diagnostics like Echo, TMT, and Holter monitoring. We aggressively manage hypertension, heart failure, and acute coronary syndromes with strict protocols.",
      services: ["ECG & Echocardiography", "Treadmill Test (TMT)", "Cardiac ICU", "Preventive Heart Checks"]
    },
    {
      icon: <Bone className="w-10 h-10" />,
      name: "Orthopedics & Joint Replacement",
      desc: "Expert treatment for fractures, joint pains, and complex spinal disorders. We specialize in minimally invasive trauma surgery, arthritis management, and successful knee/hip replacements.",
      services: ["Fracture Fixation", "Knee & Hip Replacement", "Sports Injuries", "Spine Care"]
    },
    {
      icon: <Baby className="w-10 h-10" />,
      name: "Pediatrics & Neonatology",
      desc: "Dedicated compassionate care for infants, children, and adolescents. Our advanced Level-3 NICU ensures premature and critically ill newborns receive the highest level of life-saving care.",
      services: ["Vaccination Clinic", "NICU & PICU", "Childhood Nutrition", "Pediatric Emergencies"]
    },
    {
      icon: <PlusCircle className="w-10 h-10" />,
      name: "Obstetrics & Gynecology",
      desc: "Complete women's healthcare from adolescence to menopause. We support high-risk pregnancies, offer painless delivery options, and perform advanced laparoscopic surgeries.",
      services: ["Maternity Care", "High-Risk Pregnancy", "Laparoscopic Surgeries", "Infertility Counseling"]
    },
    {
      icon: <Stethoscope className="w-10 h-10" />,
      name: "Internal Medicine",
      desc: "Accurate diagnosis and medical management of adult diseases, including diabetes, thyroid disorders, acute fevers, and infectious diseases endemic to the Indian subcontinent.",
      services: ["Diabetes Management", "Infectious Diseases", "Geriatric Care", "Preventive Health"]
    },
    {
      icon: <Brain className="w-10 h-10" />,
      name: "Neurology",
      desc: "Advanced treatment for stroke, epilepsy, severe migraines, and nerve disorders. We utilize a dedicated stroke protocol to ensure immediate and effective intervention.",
      services: ["Stroke Management", "Epilepsy Clinic", "Neuro-Diagnostics", "Headache Clinic"]
    }
  ];

  const containerVar = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVar = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="pt-20 bg-gray-50 min-h-screen overflow-hidden">
      <div className="bg-[#0F4C81] py-24 px-4 relative">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">Centres of Excellence</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-teal-200 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Sanjeevni Hospital offers specialized medical departments providing comprehensive, evidence-based treatments under one roof.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={containerVar}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          {depts.map((dept, index) => (
            <motion.div key={index} variants={itemVar} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start mb-6">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-[#0F4C81] flex-shrink-0 sm:mr-6 mb-4 sm:mb-0 shadow-sm border border-blue-100">
                  {dept.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3">{dept.name}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">{dept.desc}</p>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  Key Treatments & Services
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {dept.services.map((service, i) => (
                    <li key={i} className="flex items-center text-gray-700 text-sm font-medium">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="mt-20 bg-gradient-to-br from-[#0F4C81] to-blue-900 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Stethoscope className="w-48 h-48" />
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl font-heading font-bold mb-4">Need a specific treatment?</h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">Our OPD connects you with renowned specialists across various medical disciplines. Contact our reception to know the doctor availability schedule.</p>
            <Link to="/contact" className="inline-flex items-center bg-teal-500 text-white font-bold py-4 px-10 rounded-full hover:bg-teal-400 transition-colors shadow-lg hover:shadow-teal-500/30">
              Contact Reception <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SpecialitiesPage;
