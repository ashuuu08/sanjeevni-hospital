import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronRight, Users, Activity, Settings } from 'lucide-react';
import { departmentsData, doctorsData } from '../../data/hospitalData';

const DepartmentDetail = () => {
  const { id } = useParams();
  const department = departmentsData.find(d => d.id === id);

  if (!department) {
    return <div className="pt-40 text-center text-2xl font-bold">Department Not Found</div>;
  }

  const deptDoctors = doctorsData.filter(doc => department.doctors.includes(doc.id));

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      {/* BREADCRUMB & HEADER */}
      <div className="bg-[#0F4C81] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center text-sm text-teal-200 mb-6 font-medium">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link to="/departments" className="hover:text-white transition-colors">Departments</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white">{department.name}</span>
          </div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Department of {department.name}
          </motion.h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* MAIN CONTENT */}
          <div className="lg:col-span-2 space-y-12">
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Overview</h2>
              <p className="text-lg text-gray-700 leading-relaxed bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                {department.longDesc}
              </p>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6 flex items-center">
                <Activity className="w-8 h-8 text-teal-500 mr-3" /> Services & Treatments
              </h2>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-4">
                {department.services.map((service, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-[#0F4C81] mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6 flex items-center">
                <Settings className="w-8 h-8 text-teal-500 mr-3" /> Advanced Technology
              </h2>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <ul className="space-y-4">
                  {department.tech.map((t, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 font-medium">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mr-4"></div>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.section>
          </div>

          {/* SIDEBAR */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-6 flex items-center">
                <Users className="w-6 h-6 text-[#0F4C81] mr-2" /> Specialist Doctors
              </h3>
              <div className="space-y-6">
                {deptDoctors.map(doc => (
                  <Link to={`/doctors/${doc.id}`} key={doc.id} className="flex items-center group">
                    <img src={doc.image} alt={doc.name} className="w-16 h-16 rounded-full object-cover border-2 border-gray-100 group-hover:border-teal-500 transition-colors" />
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-900 group-hover:text-[#0F4C81] transition-colors">{doc.name}</h4>
                      <p className="text-sm text-gray-500">{doc.qualifications}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0F4C81] to-blue-900 rounded-2xl shadow-lg p-8 text-white">
              <h3 className="text-2xl font-heading font-bold mb-4">Book a Consultation</h3>
              <p className="text-blue-100 mb-6 text-sm">Get expert medical advice from our specialists. We are open for both online and offline consultations.</p>
              <Link to="/appointment" className="block w-full text-center bg-teal-500 hover:bg-teal-400 text-white font-bold py-3 rounded-xl transition-colors">
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentDetail;
