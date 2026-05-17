import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Phone, Mail, Clock, Send, ShieldCheck, FileText } from 'lucide-react';
import { departmentsData, doctorsData } from '../../data/hospitalData';

const AppointmentPage = () => {
  const [selectedDept, setSelectedDept] = useState('');

  const filteredDoctors = selectedDept 
    ? doctorsData.filter(d => d.departmentId === selectedDept) 
    : doctorsData;

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <div className="bg-[#0F4C81] py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">Book an Appointment</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-teal-200 text-lg md:text-xl max-w-2xl mx-auto">
            Schedule your visit with our expert doctors. Fill out the form below and our reception team will confirm your slot.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 -mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* APPOINTMENT FORM */}
          <div className="lg:col-span-2">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-teal-500 text-white px-6 py-2 rounded-bl-2xl font-bold text-sm flex items-center shadow-md">
                <ShieldCheck className="w-4 h-4 mr-2" /> Secure Booking
              </div>
              
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-8 mt-2">Patient Details</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Patient Name *</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input type="text" className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all font-medium" placeholder="Full name" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Mobile Number *</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input type="tel" className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all font-medium" placeholder="+91 XXXXX XXXXX" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input type="email" className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all font-medium" placeholder="Optional" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Preferred Date *</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input type="date" className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all font-medium text-gray-700" />
                    </div>
                  </div>
                </div>

                <div className="w-full h-px bg-gray-100 my-8"></div>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">Consultation Details</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Select Department *</label>
                    <select 
                      value={selectedDept}
                      onChange={(e) => setSelectedDept(e.target.value)}
                      className="w-full px-5 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all font-medium text-gray-700 cursor-pointer"
                    >
                      <option value="">-- All Departments --</option>
                      {departmentsData.map(dept => (
                        <option key={dept.id} value={dept.id}>{dept.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Select Doctor *</label>
                    <select className="w-full px-5 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all font-medium text-gray-700 cursor-pointer">
                      <option value="">-- Choose Doctor --</option>
                      {filteredDoctors.map(doc => (
                        <option key={doc.id} value={doc.id}>{doc.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Brief Medical History / Symptoms</label>
                  <textarea rows="4" className="w-full px-5 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all font-medium resize-none" placeholder="Describe your symptoms..."></textarea>
                </div>

                <button type="button" className="w-full flex items-center justify-center px-8 py-5 text-lg font-bold rounded-xl text-white bg-[#0F4C81] hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 mt-4">
                  <Send className="w-6 h-6 mr-3" />
                  Confirm Booking Request
                </button>
              </form>
            </motion.div>
          </div>

          {/* SIDE INFO */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-teal-50 p-8 rounded-3xl border border-teal-100">
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-4 flex items-center">
                <Clock className="w-6 h-6 text-teal-600 mr-2" /> OPD Timings
              </h3>
              <ul className="space-y-3 text-gray-700 font-medium">
                <li className="flex justify-between border-b border-teal-200/50 pb-2">
                  <span>Monday - Saturday</span>
                  <span>09:00 AM - 02:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-teal-200/50 pb-2">
                  <span>Evening OPD</span>
                  <span>05:00 PM - 08:00 PM</span>
                </li>
                <li className="flex justify-between pt-1">
                  <span>Sunday</span>
                  <span className="text-red-500 font-bold">Emergency Only</span>
                </li>
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-4 flex items-center">
                <FileText className="w-6 h-6 text-[#0F4C81] mr-2" /> What to bring?
              </h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex items-start"><div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></div> Previous medical records & prescriptions.</li>
                <li className="flex items-start"><div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></div> Valid Govt. ID proof (Aadhar preferred).</li>
                <li className="flex items-start"><div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></div> Ayushman / Insurance card if applicable.</li>
              </ul>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;
