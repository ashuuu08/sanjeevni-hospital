import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import logo from './assets/Logo.jpg';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';

import DepartmentList from './pages/Departments/DepartmentList';
import DepartmentDetail from './pages/Departments/DepartmentDetail';

import DoctorList from './pages/Doctors/DoctorList';
import DoctorProfile from './pages/Doctors/DoctorProfile';

import FacilitiesPage from './pages/FacilitiesPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

import BlogList from './pages/Media/BlogList';
import BlogDetail from './pages/Media/BlogDetail';

import PatientInformation from './pages/PatientCare/PatientInformation';
import AppointmentPage from './pages/PatientCare/AppointmentPage';

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      
      {/* ════════════════════════════════════════════════════════════════════════
          PREMIUM SPLASH LOADING SCREEN (Cinematic Initializer)
      ════════════════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            key="splash-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
            className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/80 via-white to-teal-50/80 pointer-events-none"></div>
            
            {/* Ambient Background Glow */}
            <div className="absolute w-[500px] h-[500px] rounded-full bg-teal-500/10 blur-3xl animate-pulse pointer-events-none"></div>

            <motion.div 
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 flex flex-col items-center space-y-6 text-center px-4"
            >
              {/* Animated Logo Container */}
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-[#0F4C81]/15 blur-2xl animate-pulse"></div>
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-2 bg-white shadow-2xl border-2 border-teal-500/80 relative z-10 flex items-center justify-center overflow-hidden">
                  <img src={logo} alt="Sanjeevni Hospital Logo" className="w-full h-full object-contain scale-95" />
                </div>
              </div>

              {/* Title & Badge */}
              <div className="space-y-1.5">
                <h1 className="text-3xl md:text-5xl font-heading font-black tracking-tight text-[#0F4C81]">
                  SANJEEVNI
                </h1>
                <p className="text-xs md:text-sm font-extrabold tracking-widest uppercase text-teal-600">
                  Hospital Anuppur
                </p>
              </div>

              {/* Heartbeat Progress Bar */}
              <div className="w-56 md:w-72 h-1.5 bg-gray-100 rounded-full overflow-hidden relative shadow-inner mt-4">
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                  className="w-1/2 h-full bg-gradient-to-r from-teal-500 via-[#0F4C81] to-teal-500 rounded-full"
                ></motion.div>
              </div>

              {/* Loading Status Text */}
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-widest pt-2">
                <Activity className="w-4 h-4 text-teal-600 animate-pulse" />
                <span>Initializing Medical Excellence Ecosystem...</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            
            {/* Departments */}
            <Route path="/departments" element={<DepartmentList />} />
            <Route path="/departments/:id" element={<DepartmentDetail />} />
            
            {/* Doctors */}
            <Route path="/doctors" element={<DoctorList />} />
            <Route path="/doctors/:id" element={<DoctorProfile />} />
            
            {/* Facilities & Media */}
            <Route path="/facilities" element={<FacilitiesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            
            {/* Blogs */}
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            
            {/* Patient Care */}
            <Route path="/patient-care" element={<PatientInformation />} />
            <Route path="/patient-guidelines" element={<PatientInformation />} />
            <Route path="/insurance" element={<PatientInformation />} />
            <Route path="/appointment" element={<AppointmentPage />} />
            
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main