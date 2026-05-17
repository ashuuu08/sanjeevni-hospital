import React from 'react';
import { HeartPulse, Stethoscope, Baby, Activity, PlusCircle, Brain } from 'lucide-react';

const Specialities = () => {
  const specialities = [
    { icon: <HeartPulse className="w-8 h-8" />, name: 'Cardiology', desc: 'Comprehensive heart care and advanced cardiac surgeries.' },
    { icon: <Stethoscope className="w-8 h-8" />, name: 'General Medicine', desc: 'Expert diagnosis and management of adult diseases.' },
    { icon: <Activity className="w-8 h-8" />, name: 'Orthopedics', desc: 'Treatment for bone, joint, and muscle conditions.' },
    { icon: <Baby className="w-8 h-8" />, name: 'Pediatrics', desc: 'Specialized healthcare for infants, children, and adolescents.' },
    { icon: <Brain className="w-8 h-8" />, name: 'Neurology', desc: 'Advanced care for disorders of the nervous system.' },
    { icon: <PlusCircle className="w-8 h-8" />, name: 'Emergency Care', desc: '24/7 rapid response for critical and trauma cases.' },
  ];

  return (
    <section id="specialities" className="py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-widest mb-3">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">Medical Specialities</h3>
          <p className="text-gray-600 text-lg">
            Delivering comprehensive healthcare services across various medical disciplines with state-of-the-art technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {specialities.map((spec, index) => (
            <div key={index} className="group flex items-start space-x-6 p-6 transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 rounded-xl border border-transparent hover:border-gray-100">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-50 text-primary rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {spec.icon}
              </div>
              <div>
                <h4 className="text-xl font-heading font-semibold text-gray-900 mb-2">{spec.name}</h4>
                <p className="text-gray-600 leading-relaxed">{spec.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialities;
