import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, BookOpen, Award, Calendar } from 'lucide-react';
import { doctorsData } from '../../data/hospitalData';

const DoctorList = () => {
  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <div className="bg-[#0F4C81] py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">Our Medical Experts</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-teal-200 text-lg md:text-xl max-w-3xl mx-auto">
            Meet our highly qualified and compassionate team of senior specialists.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {doctorsData.map((doctor, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={doctor.id} 
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col sm:flex-row group hover:shadow-xl transition-shadow duration-300"
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
              <div className="sm:w-3/5 p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-1">{doctor.name}</h3>
                <p className="text-teal-600 font-bold mb-5">{doctor.designation}</p>
                
                <div className="space-y-3 mb-6 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <div className="flex items-start text-sm text-gray-700">
                    <BookOpen className="w-4 h-4 mr-3 mt-0.5 text-[#0F4C81] flex-shrink-0" />
                    <span className="font-medium">{doctor.qualifications}</span>
                  </div>
                  <div className="flex items-start text-sm text-gray-700">
                    <Award className="w-4 h-4 mr-3 mt-0.5 text-[#0F4C81] flex-shrink-0" />
                    <span className="font-medium">{doctor.experience} Experience</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                  <Link to={`/doctors/${doctor.id}`} className="flex-1 text-center px-4 py-3 border-2 border-[#0F4C81] text-[#0F4C81] font-bold rounded-lg hover:bg-[#0F4C81] hover:text-white transition-colors">
                    View Profile
                  </Link>
                  <Link to="/appointment" className="flex-1 flex items-center justify-center px-4 py-3 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700 transition-colors">
                    <Calendar className="w-4 h-4 mr-2" /> Book
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorList;
