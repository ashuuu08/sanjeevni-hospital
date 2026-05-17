import React from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-20 pb-10 border-t-4 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-4 mb-6 w-max">
              <div className="bg-white p-2 rounded-xl shadow-lg">
                <img src={logo} alt="Sanjeevni Hospital Logo" className="h-10 w-auto object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-2xl text-white tracking-tight leading-none">SANJEEVNI</span>
                <span className="text-xs text-secondary font-medium tracking-widest uppercase mt-1">Hospital <span className="text-gray-500 font-medium">| Anuppur</span></span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Delivering advanced medical care with compassion and state-of-the-art technology in Anuppur, Madhya Pradesh.
            </p>
            <div className="flex space-x-4">
              {/* Social icons placeholder */}
              <div className="w-8 h-8 rounded-full bg-gray-800 hover:bg-primary cursor-pointer transition-colors"></div>
              <div className="w-8 h-8 rounded-full bg-gray-800 hover:bg-primary cursor-pointer transition-colors"></div>
              <div className="w-8 h-8 rounded-full bg-gray-800 hover:bg-primary cursor-pointer transition-colors"></div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-heading font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="/doctors" className="text-gray-400 hover:text-white transition-colors text-sm">Find a Doctor</Link></li>
              <li><Link to="/patient-guidelines" className="text-gray-400 hover:text-white transition-colors text-sm">Admission Guidelines</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-white transition-colors text-sm">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading font-semibold mb-6">Centres of Excellence</h4>
            <ul className="space-y-3">
              <li><Link to="/departments/cardiology" className="text-gray-400 hover:text-white transition-colors text-sm">Cardiology</Link></li>
              <li><Link to="/departments/orthopedics" className="text-gray-400 hover:text-white transition-colors text-sm">Orthopedics</Link></li>
              <li><Link to="/departments/pediatrics" className="text-gray-400 hover:text-white transition-colors text-sm">Pediatrics & NICU</Link></li>
              <li><Link to="/departments/gynecology" className="text-gray-400 hover:text-white transition-colors text-sm">Gynecology</Link></li>
              <li><Link to="/departments" className="text-teal-500 font-semibold hover:text-white transition-colors text-sm mt-2 block">View All Centres &rarr;</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading font-semibold mb-6">Emergency</h4>
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <p className="text-gray-400 text-sm mb-2">For immediate medical assistance:</p>
              <a href="tel:+919876543210" className="text-2xl font-bold text-white hover:text-secondary transition-colors block mb-4">
                +91 98765 43210
              </a>
              <Link 
                to="/appointment"
                className="inline-block w-full text-center bg-[#0F4C81] hover:bg-blue-600 text-white font-medium py-3 rounded transition-colors text-sm"
              >
                Book Appointment
              </Link>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Sanjeevni Hospital. All rights reserved.
          </p>
          <div className="text-gray-500 text-sm flex flex-wrap items-center justify-center md:justify-end gap-1.5">
            <span>Powered by</span>
            <a href="https://ashbit.in" target="_blank" rel="noreferrer" className="text-teal-400 font-bold hover:underline tracking-wide">ashbit.in</a>
            <span className="mx-2 text-gray-700 hidden sm:inline">|</span>
            <span className="flex items-center">Made with <Heart className="w-3.5 h-3.5 text-red-500 mx-1 flex-shrink-0" /> for Better Healthcare</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
