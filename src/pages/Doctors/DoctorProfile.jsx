import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ChevronRight, Award, BookOpen, Clock, CheckCircle2 } from 'lucide-react';
import { doctorsData } from '../../data/hospitalData';

const DoctorProfile = () => {
  const { id } = useParams();
  const doctor = doctorsData.find(d => d.id === id);

  if (!doctor) {
    return <div className="pt-40 text-center text-2xl font-bold">Doctor Not Found</div>;
  }

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      {/* BREADCRUMB */}
      <div className="bg-[#0F4C81] py-8 px-4">
        <div className="max-w-7xl mx-auto flex items-center text-sm text-teal-200 font-medium">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link to="/doctors" className="hover:text-white transition-colors">Doctors</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-white">{doctor.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* DOCTOR CARD SIDEBAR */}
          <div className="lg:col-span-1 space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              <div className="aspect-[4/5] relative">
                <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover object-top" />
              </div>
              <div className="p-8 text-center bg-white">
                <h1 className="text-2xl font-heading font-bold text-gray-900 mb-2">{doctor.name}</h1>
                <p className="text-teal-600 font-bold mb-6">{doctor.designation}</p>
                <Link to="/appointment" className="w-full flex items-center justify-center bg-[#0F4C81] text-white py-4 rounded-xl font-bold hover:bg-blue-800 transition-colors shadow-lg">
                  <Calendar className="w-5 h-5 mr-2" /> Book Appointment
                </Link>
              </div>
            </motion.div>
          </div>

          {/* DOCTOR DETAILS */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">Professional Summary</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">{doctor.bio}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <BookOpen className="w-8 h-8 text-[#0F4C81] mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Qualifications</h4>
                    <p className="text-gray-600">{doctor.qualifications}</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <Award className="w-8 h-8 text-[#0F4C81] mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Experience</h4>
                    <p className="text-gray-600">{doctor.experience}</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <Clock className="w-8 h-8 text-[#0F4C81] mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">OPD Timings</h4>
                    <p className="text-gray-600">{doctor.opdTimings}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">Clinical Expertise</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {doctor.expertise.map((item, idx) => (
                  <div key={idx} className="flex items-center p-3 bg-teal-50 rounded-xl">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 mr-3 flex-shrink-0" />
                    <span className="font-medium text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
