import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahul Verma",
      text: "The doctors and staff at Sanjeevni Hospital were incredibly supportive during my father's surgery. The facilities are modern and the care is genuine.",
      role: "Patient Family"
    },
    {
      name: "Priya Sharma",
      text: "I had a wonderful experience during my maternity journey here. The pediatrics and gynecology team ensured absolute comfort and safety.",
      role: "Patient"
    }
  ];

  return (
    <section className="py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-widest mb-3">Patient Stories</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">What People Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 relative">
              <Quote className="absolute top-8 right-8 w-12 h-12 text-blue-50" />
              <p className="text-lg text-gray-600 mb-8 relative z-10 italic leading-relaxed">"{t.text}"</p>
              <div>
                <p className="font-heading font-semibold text-gray-900 text-lg">{t.name}</p>
                <p className="text-sm text-secondary font-medium">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
