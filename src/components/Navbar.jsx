import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown, Clock, Mail, AlertCircle, Calendar } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Logo.jpg';
import { departmentsData } from '../data/hospitalData';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navItems = [
    { name: 'Home', href: '/' },
    {
      name: 'About Us',
      href: '/about',
      hasDropdown: true,
      items: [
        { name: 'Overview', href: '/about' },
        { name: 'Mission & Vision', href: '/about#mission' },
        { name: 'Director Message', href: '/about#director' },
        { name: 'Infrastructure', href: '/facilities' }
      ]
    },
    {
      name: 'Departments',
      href: '/departments',
      hasDropdown: true,
      isMega: true,
      items: departmentsData.map(d => ({ name: d.name, href: `/departments/${d.id}` }))
    },
    { name: 'Doctors', href: '/doctors' },
    {
      name: 'Patient Care',
      href: '/patient-care',
      hasDropdown: true,
      items: [
        { name: 'Book Appointment', href: '/appointment' },
        { name: 'Patient Guidelines', href: '/patient-guidelines' }
      ]
    },
    { 
      name: 'Media', 
      href: '/blog', 
      hasDropdown: true, 
      items: [
        { name: 'Gallery', href: '/gallery' },
        { name: 'Health Blog', href: '/blog' }
      ] 
    },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* TOP EMERGENCY BAR */}
      <div className={`bg-[#0F4C81] text-white transition-all duration-300 overflow-hidden ${isScrolled ? 'max-h-0 opacity-0 py-0' : 'max-h-16 py-1.5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center sm:justify-between items-center text-xs font-medium h-full">
          <div className="hidden sm:flex items-center space-x-6">
            <span className="hidden md:flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-teal-300 flex-shrink-0" /> 24/7 Emergency Care</span>
            <a href="mailto:info@sanjeevnihospital.com" className="flex items-center gap-1.5 hover:text-teal-200 transition-colors"><Mail className="w-3.5 h-3.5 text-teal-300 flex-shrink-0" /> info@sanjeevnihospital.com</a>
          </div>
          <div className="flex items-center justify-center space-x-6 w-full sm:w-auto">
            <Link to="/patient-guidelines" className="hover:text-teal-300 transition-colors hidden lg:block">Patient Guide</Link>
            <Link to="/contact" className="hover:text-teal-300 transition-colors hidden lg:block">Helpdesk</Link>
            <a href="tel:+919876543210" className="flex items-center justify-center text-yellow-300 font-bold bg-white/15 px-4 py-1 sm:py-1 rounded-full hover:bg-white/20 transition-colors text-center w-full sm:w-auto whitespace-nowrap tracking-wide">
              <AlertCircle className="w-3.5 h-3.5 mr-1.5 animate-pulse text-red-400 flex-shrink-0 inline" /> 
              <span>Emergency Hotline: +91 98765 43210</span>
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav className={`bg-white border-b border-gray-100 transition-shadow duration-300 ${isScrolled ? 'shadow-xl py-2.5' : 'shadow-md py-3.5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* LOGO & BRANDING */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-3">
                <img src={logo} alt="Sanjeevni Hospital" className="h-12 lg:h-14 w-auto object-contain rounded-xl shadow-xs" />
                <div className="flex flex-col border-l-2 border-[#0F4C81]/20 pl-3">
                  <span className="font-heading font-black text-xl lg:text-2xl text-[#0F4C81] tracking-tight leading-none">SANJEEVNI</span>
                  <span className="text-[10px] lg:text-xs text-gray-600 font-bold tracking-wider uppercase mt-1">Hospital <span className="text-teal-600 font-extrabold">Anuppur</span></span>
                </div>
              </Link>
            </div>
            
            {/* DESKTOP NAVIGATION */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-3">
              {navItems.map((link) => {
                const isActive = location.pathname === link.href || (location.pathname.startsWith(link.href + '/') && link.href !== '/');
                return (
                  <div 
                    key={link.name} 
                    className="relative group py-3 px-2"
                    onMouseEnter={() => setActiveDropdown(link.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link 
                      to={link.href}
                      className={`flex items-center text-sm font-bold transition-colors ${isActive ? 'text-[#0F4C81]' : 'text-gray-700 hover:text-[#0F4C81]'}`}
                    >
                      <span>{link.name}</span>
                      {link.hasDropdown && <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180 text-[#0F4C81]' : 'text-gray-400'}`} />}
                    </Link>
                    
                    {/* Hover & Active Underline Indicator */}
                    <div className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-[#0F4C81] transition-all duration-300 rounded-full ${isActive ? 'w-3/4' : 'w-0 group-hover:w-3/4'}`}></div>

                    {/* DROPDOWN / MEGA MENU (Positioned perfectly to eliminate hover gaps) */}
                    {link.hasDropdown && (
                      <div className={`absolute top-full left-0 bg-white shadow-2xl rounded-2xl border border-gray-100 overflow-hidden transition-all duration-200 transform origin-top ${activeDropdown === link.name ? 'opacity-100 scale-100 visible pointer-events-auto' : 'opacity-0 scale-95 invisible pointer-events-none'} ${link.isMega ? 'w-[540px] -left-[180px] p-6 grid grid-cols-2 gap-x-8 gap-y-3' : 'w-60 py-3'}`}>
                        {link.items.map((sub, i) => (
                          <Link 
                            key={i} 
                            to={sub.href}
                            className={`group/sub flex items-center text-sm font-semibold text-gray-700 hover:text-[#0F4C81] transition-colors ${link.isMega ? 'py-1.5' : 'px-6 py-2.5 hover:bg-teal-50/50'}`}
                          >
                            {link.isMega && <div className="w-2 h-2 rounded-full bg-gray-300 group-hover/sub:bg-teal-500 mr-3 transition-colors flex-shrink-0"></div>}
                            <span>{sub.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
              
              <div className="pl-4 ml-2 border-l border-gray-200 flex items-center">
                <Link to="/appointment" className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold rounded-xl text-white bg-teal-600 hover:bg-teal-700 transition-all shadow-md hover:shadow-teal-600/30 transform hover:-translate-y-0.5">
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                </Link>
              </div>
            </div>

            {/* MOBILE TOGGLE BUTTON */}
            <div className="lg:hidden flex items-center">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-[#0F4C81] p-2 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU ACCORDION */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 max-h-[80vh] overflow-y-auto transition-all animate-fadeIn">
            <div className="px-6 py-6 space-y-4">
              {navItems.map((link) => (
                <div key={link.name} className="border-b border-gray-100 pb-3">
                  <div className="flex justify-between items-center">
                    <Link
                      to={link.href}
                      className="block text-lg font-bold text-gray-900 py-1"
                    >
                      {link.name}
                    </Link>
                    {link.hasDropdown && (
                      <button 
                        onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                        className="p-2 text-gray-600 hover:text-[#0F4C81]"
                      >
                        <ChevronDown className={`w-6 h-6 transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180 text-[#0F4C81]' : ''}`} />
                      </button>
                    )}
                  </div>
                  
                  {link.hasDropdown && activeDropdown === link.name && (
                    <div className="pl-4 pt-3 pb-2 space-y-3 bg-gray-50 rounded-xl mt-2 border border-gray-100 px-4">
                      {link.items.map((sub, i) => (
                        <Link
                          key={i}
                          to={sub.href}
                          className="block text-sm font-semibold text-gray-700 hover:text-[#0F4C81] py-2 border-b border-gray-100/50 last:border-0"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-6 space-y-4">
                <Link to="/appointment" className="flex items-center justify-center gap-2 w-full bg-teal-600 hover:bg-teal-700 text-white px-5 py-4 rounded-xl font-bold shadow-md transition-colors">
                  <Calendar className="w-5 h-5" />
                  <span>Book Appointment</span>
                </Link>
                <a href="tel:+919876543210" className="flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-700 text-white px-5 py-4 rounded-xl font-bold shadow-md transition-colors">
                  <Phone className="w-5 h-5 mr-1" />
                  <span>24/7 Emergency Hotline</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
