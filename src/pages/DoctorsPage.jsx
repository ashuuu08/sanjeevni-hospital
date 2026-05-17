import React from 'react';
import { Calendar, Award, BookOpen, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const DoctorsPage = () => {
  const doctors = [
    {
      name: 'Dr. Rajesh Sharma',
      speciality: 'Chief Consultant Physician',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      degrees: 'MBBS, MD (General Medicine)',
      experience: '20+ Years',
      bio: 'Dr. Sharma is a renowned physician in Central India with extensive experience in managing complicated cases of diabetes, severe hypertension, and endemic tropical diseases with a high success rate.'
    },
    {
      name: 'Dr. Priya Patel',
      speciality: 'Senior Pediatrician & Neonatologist',
      image: 'https://images.unsplash.com/photo-1594824432258-f99f187ee3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      degrees: 'MBBS, MD (Pediatrics), Fellowship in Neonatology',
      experience: '15+ Years',
      bio: 'Expert in neonatal intensive care and child development. She has successfully treated numerous critically ill premature newborns in our advanced level-3 NICU facility.'
    },
    {
      name: 'Dr. Amit Kumar',
      speciality: 'Orthopedic & Trauma Surgeon',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      degrees: 'MBBS, MS (Ortho), DNB',
      experience: '12+ Years',
      bio: 'Specializes in complex polytrauma surgeries, total joint replacements, and sports injuries. Known for pioneering minimally invasive surgical techniques ensuring faster patient recovery.'
    },
    {
      name: 'Dr. Neha Singh',
      speciality: 'Obstetrician & Gynecologist',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      degrees: 'MBBS, MS (OBG)',
      experience: '14+ Years',
      bio: 'Deeply dedicated to women\'s health, Dr. Singh has safely managed thousands of high-risk pregnancies and performed highly advanced laparoscopic gynecological surgeries.'
    }
  ];

  return (
    <div className="pt-20 bg-gray-50 min-h-screen overflow-hidden">
      <div className="bg-[#0F4C81] py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">Our Medical Experts</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-teal-200 text-lg md:text-xl max-w-3xl mx-auto">
            Meet our highly qualified and compassionate team of senior specialists. They bring decades of expertise from top Indian medical institutions to serve you better.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {doctors.map((doctor, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index} 
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col sm:flex-row group hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="sm:w-2/5 aspect-square sm:aspect-auto relative overflow-hidden bg-gray-100">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110 filter grayscale-[10%] group-hover:grayscale-0"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg flex items-center shadow-md">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
                  <span className="text-xs font-bold text-gray-800">Top Rated</span>
                </div>
              </div>
              <div className="sm:w-3/5 p-8 flex flex-col justify-center bg-gradient-to-r from-white to-gray-50/50">
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-1">{doctor.name}</h3>
                <p className="text-teal-600 font-bold mb-5 tracking-wide">{doctor.speciality}</p>
                
                <div className="space-y-3 mb-6 bg-blue-50/50 p-4 rounded-xl border border-blue-100/50">
                  <div className="flex items-start text-sm text-gray-700">
                    <BookOpen className="w-4 h-4 mr-3 mt-0.5 text-[#0F4C81] flex-shrink-0" />
                    <span className="font-medium">{doctor.degrees}</span>
                  </div>
                  <div className="flex items-start text-sm text-gray-700">
                    <Award className="w-4 h-4 mr-3 mt-0.5 text-[#0F4C81] flex-shrink-0" />
                    <span className="font-medium">{doctor.experience} Clinical Experience</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-8 italic">
                  "{doctor.bio}"
                </p>

                <button className="flex items-center justify-center w-full sm:w-auto px-6 py-3.5 bg-[#0F4C81] hover:bg-blue-800 text-white text-sm font-bold rounded-lg transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Consultation
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorsPage;
