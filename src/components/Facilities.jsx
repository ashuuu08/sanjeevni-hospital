import React from 'react';

const Facilities = () => {
  const facilities = [
    {
      title: 'Advanced ICU & Critical Care',
      desc: 'Our Intensive Care Unit is equipped with the latest life-support systems, multipara monitors, and ventilators, staffed 24/7 by critical care specialists to handle all complex medical emergencies.',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      reverse: false
    },
    {
      title: 'Modern Operation Theatres',
      desc: 'State-of-the-art modular operation theatres with strict infection control protocols. Equipped for complex open surgeries, minimally invasive procedures, and emergency interventions.',
      image: 'https://images.unsplash.com/photo-1551076805-e18690c5e53b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      reverse: true
    },
    {
      title: '24/7 Diagnostic Laboratory',
      desc: 'Fully automated diagnostic lab offering pathology, biochemistry, microbiology, and modern imaging services like CT scans and X-rays, ensuring quick and accurate diagnosis.',
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      reverse: false
    }
  ];

  return (
    <section id="facilities" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-widest mb-3">Infrastructure</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">World-Class Facilities</h3>
          <p className="text-gray-600 text-lg">
            We provide a comprehensive range of healthcare facilities designed for patient comfort, safety, and optimal clinical outcomes.
          </p>
        </div>

        <div className="space-y-24">
          {facilities.map((fac, index) => (
            <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${fac.reverse ? 'lg:flex-row-reverse' : ''}`}>
              <div className="w-full lg:w-1/2">
                <div className="aspect-video overflow-hidden shadow-lg rounded-sm">
                  <img 
                    src={fac.image} 
                    alt={fac.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2 lg:px-8">
                <h4 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4">{fac.title}</h4>
                <div className="w-12 h-1 bg-secondary mb-6"></div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {fac.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
