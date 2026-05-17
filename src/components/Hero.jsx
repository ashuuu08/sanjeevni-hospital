import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 text-teal-300 text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm border border-secondary/30">
              Welcome to Sanjeevni Hospital
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6">
              Advanced Healthcare <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-white">With Compassion.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-light leading-relaxed">
              Providing world-class medical facilities, expert doctors, and personalized care in the heart of Anuppur, Madhya Pradesh. Your health is our greatest priority.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-md text-white bg-primary hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-primary/30"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </a>
              <a 
                href="tel:+919876543210"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-md text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Emergency Contact
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
