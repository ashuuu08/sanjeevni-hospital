import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Stethoscope } from 'lucide-react';
import { departmentsData } from '../../data/hospitalData';

const DepartmentList = () => {
  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <div className="bg-[#0F4C81] py-24 px-4 relative">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">Centres of Excellence</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-teal-200 text-lg md:text-xl max-w-3xl mx-auto">
            Comprehensive, evidence-based treatments under one roof. Our specialized departments are equipped with modern technology and expert medical professionals.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departmentsData.map((dept, idx) => (
            <motion.div 
              key={dept.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group flex flex-col h-full"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-[#0F4C81] mb-6 group-hover:scale-110 transition-transform">
                <Stethoscope className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3">{dept.name}</h3>
              <p className="text-gray-600 mb-8 flex-grow">{dept.shortDesc}</p>
              
              <Link to={`/departments/${dept.id}`} className="inline-flex items-center text-teal-600 font-bold hover:text-teal-700">
                Explore Department <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DepartmentList;
