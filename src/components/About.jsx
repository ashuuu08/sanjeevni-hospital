import React from 'react';

const About = () => {
  const stats = [
    { value: '15+', label: 'Years of Service' },
    { value: '50k+', label: 'Patients Treated' },
    { value: '50+', label: 'Specialist Doctors' },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Hospital Interior" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-primary text-white p-8 rounded-lg shadow-xl hidden md:block max-w-xs">
              <p className="text-xl font-heading font-semibold mb-2">Committed to Excellence</p>
              <p className="text-blue-100 text-sm">We provide the highest standard of clinical skills and nursing care across a wide range of specialties.</p>
            </div>
          </div>

          <div className="lg:pl-8">
            <h2 className="text-sm font-bold text-secondary uppercase tracking-widest mb-3">About Sanjeevni</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6 leading-tight">
              A Legacy of Trust, Care & <br className="hidden md:block"/> Modern Treatment
            </h3>
            
            <div className="w-20 h-1 bg-secondary mb-8"></div>
            
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Situated in Anuppur, Madhya Pradesh, Sanjeevni Hospital has been a beacon of hope and healing for over a decade. We combine state-of-the-art technology with compassionate care to deliver exceptional healthcare outcomes.
            </p>
            
            <p className="text-gray-600 mb-12 text-lg leading-relaxed">
              Our multidisciplinary team of renowned doctors and dedicated healthcare professionals work tirelessly to ensure that every patient receives personalized attention in a comfortable and safe environment.
            </p>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-100">
              {stats.map((stat, index) => (
                <div key={index}>
                  <p className="text-4xl font-heading font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
