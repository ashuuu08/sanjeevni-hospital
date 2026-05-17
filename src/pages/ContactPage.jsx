import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, AlertCircle, Send } from 'lucide-react';

const ContactPage = () => (
  <div className="pt-20 lg:pt-[84px] bg-gray-50 min-h-screen">
    <section className="bg-[#0F4C81] py-28 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">Contact Us</motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-teal-200 text-lg max-w-2xl mx-auto">We are here to help. Reach out for appointments, emergencies, or general inquiries.</motion.p>
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* CONTACT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {[
          { icon: Phone, title: 'Reception', info: '+91 98765 43210', sub: 'Available 24/7', color: 'bg-blue-50 text-[#0F4C81]' },
          { icon: AlertCircle, title: 'Emergency', info: '+91 98765 43211', sub: 'Immediate Response', color: 'bg-red-50 text-red-600' },
          { icon: Mail, title: 'Email', info: 'info@sanjeevni.com', sub: 'Response within 24hrs', color: 'bg-teal-50 text-teal-600' },
          { icon: Clock, title: 'OPD Hours', info: '9 AM – 2 PM, 5 – 8 PM', sub: 'Mon – Sat', color: 'bg-orange-50 text-orange-600' },
        ].map((c, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 ${c.color}`}><c.icon className="w-7 h-7" /></div>
            <h3 className="font-heading font-bold text-gray-900 mb-1">{c.title}</h3>
            <p className="text-gray-800 font-medium">{c.info}</p>
            <p className="text-gray-400 text-sm mt-1">{c.sub}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* FORM */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm">
          <h2 className="text-2xl font-heading font-bold text-gray-900 mb-8">Send an Inquiry</h2>
          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input type="text" placeholder="Full Name *" className="w-full px-5 py-4 bg-gray-50 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-teal-500 font-medium" />
              <input type="tel" placeholder="Phone *" className="w-full px-5 py-4 bg-gray-50 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-teal-500 font-medium" />
            </div>
            <input type="email" placeholder="Email Address" className="w-full px-5 py-4 bg-gray-50 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-teal-500 font-medium" />
            <select className="w-full px-5 py-4 bg-gray-50 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-teal-500 font-medium text-gray-600">
              <option>Select Department</option>
              <option>General Medicine</option>
              <option>Cardiology</option>
              <option>Orthopedics</option>
              <option>Pediatrics</option>
              <option>Gynecology</option>
            </select>
            <textarea rows="4" placeholder="Your Message..." className="w-full px-5 py-4 bg-gray-50 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-teal-500 font-medium resize-none"></textarea>
            <button type="button" className="w-full flex items-center justify-center bg-[#0F4C81] text-white py-4 rounded-xl font-bold hover:bg-blue-800 transition-colors shadow-md">
              <Send className="w-5 h-5 mr-2" /> Submit Inquiry
            </button>
          </form>
        </motion.div>

        {/* MAP & ADDRESS */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-8">
          <div className="bg-gray-200 rounded-3xl overflow-hidden aspect-video relative shadow-inner">
            <iframe 
              title="Sanjeevni Hospital Location" 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.5186640605923!2d81.6859346!3d23.102867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3987bf0015555555%3A0x3987bf0015555555!2sAnuppur%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="text-xl font-heading font-bold text-gray-900 mb-4 flex items-center"><MapPin className="w-6 h-6 text-[#0F4C81] mr-2" /> Hospital Address</h3>
            <p className="text-gray-600 leading-relaxed mb-4">Sanjeevni Hospital, Near Bus Stand, Main Road, Anuppur, Madhya Pradesh – 484224</p>
            <p className="text-gray-500 text-sm">Landmarks: Adjacent to District Court, 500m from Railway Station</p>
          </div>
        </motion.div>
      </div>
    </section>
  </div>
);

export default ContactPage;
