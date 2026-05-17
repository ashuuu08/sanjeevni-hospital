import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, FileText, ClipboardList, Clock, CreditCard } from 'lucide-react';

const PatientInformation = () => {
  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <div className="bg-[#0F4C81] py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">Patient Guidelines & Insurance</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-teal-200 text-lg md:text-xl max-w-3xl mx-auto">
            Everything you need to know before visiting Sanjeevni Hospital. We strive to make your admission and discharge process as seamless as possible.
          </motion.p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12">
        
        {/* AYUSHMAN & INSURANCE */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 mr-5">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-heading font-bold text-gray-900">Insurance & Ayushman Bharat</h2>
          </div>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p>
              Sanjeevni Hospital is proudly empaneled under the <strong>Ayushman Bharat PM-JAY</strong> scheme. Eligible citizens can receive cashless treatment for major medical and surgical procedures. 
            </p>
            <p>
              We also have tie-ups with leading TPAs (Third Party Administrators) and corporate health insurance providers. 
            </p>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mt-6">
              <h4 className="font-bold text-gray-900 mb-4">Documents Required for Cashless Admission:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <li className="flex items-center"><FileText className="w-4 h-4 mr-2 text-[#0F4C81]" /> Valid Insurance / TPA ID Card</li>
                <li className="flex items-center"><FileText className="w-4 h-4 mr-2 text-[#0F4C81]" /> Govt. ID (Aadhar / PAN / Voter ID)</li>
                <li className="flex items-center"><FileText className="w-4 h-4 mr-2 text-[#0F4C81]" /> Ayushman PM-JAY Card</li>
                <li className="flex items-center"><FileText className="w-4 h-4 mr-2 text-[#0F4C81]" /> Previous consultation files</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* ADMISSION PROCESS */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
          <div className="flex items-center mb-6">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-[#0F4C81] mr-5">
              <ClipboardList className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-heading font-bold text-gray-900">Admission Process</h2>
          </div>
          <div className="space-y-6 text-gray-600">
            <p className="text-lg">Our admission desk operates 24/7. Upon recommendation by the consulting doctor, please proceed to the main reception for admission formalities.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 border border-gray-100 rounded-2xl hover:border-teal-200 transition-colors">
                <div className="text-2xl font-black text-gray-200 mb-2">01</div>
                <h4 className="font-bold text-gray-900 mb-2">Consultation</h4>
                <p className="text-sm">Doctor advises admission and provides an admission note.</p>
              </div>
              <div className="p-6 border border-gray-100 rounded-2xl hover:border-teal-200 transition-colors">
                <div className="text-2xl font-black text-gray-200 mb-2">02</div>
                <h4 className="font-bold text-gray-900 mb-2">Registration</h4>
                <p className="text-sm">Submit documents and select room category at the front desk.</p>
              </div>
              <div className="p-6 border border-gray-100 rounded-2xl hover:border-teal-200 transition-colors">
                <div className="text-2xl font-black text-gray-200 mb-2">03</div>
                <h4 className="font-bold text-gray-900 mb-2">Admission</h4>
                <p className="text-sm">Deposit initial advance (if non-cashless) and shift to the allotted room.</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* GUIDELINES */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-heading font-bold text-gray-900 mb-4 flex items-center">
              <Clock className="w-6 h-6 text-orange-500 mr-2" /> Visiting Hours
            </h3>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">To ensure our patients get adequate rest and remain safe from infections, we strictly enforce visiting hours.</p>
            <ul className="space-y-3 text-sm font-medium text-gray-700">
              <li className="flex justify-between pb-2 border-b border-gray-50">
                <span>Wards</span>
                <span className="text-[#0F4C81]">4:00 PM - 7:00 PM</span>
              </li>
              <li className="flex justify-between pb-2 border-b border-gray-50">
                <span>ICU / NICU</span>
                <span className="text-[#0F4C81]">5:00 PM - 6:00 PM (1 Attendant)</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-heading font-bold text-gray-900 mb-4 flex items-center">
              <CreditCard className="w-6 h-6 text-green-500 mr-2" /> Billing & Discharge
            </h3>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">The discharge process is initiated only after the doctor's written approval. The entire billing process usually takes 2-3 hours for insurance cases.</p>
            <p className="text-gray-600 text-sm leading-relaxed">We accept Cash, Credit/Debit Cards, UPI, and Demand Drafts. Personal cheques are not accepted.</p>
          </div>
        </motion.section>

      </div>
    </div>
  );
};

export default PatientInformation;
