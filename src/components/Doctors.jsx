import React from 'react';

const Doctors = () => {
  const doctors = [
    {
      name: 'Dr. Rajesh Sharma',
      speciality: 'Chief Cardiologist',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      degrees: 'MBBS, MD, DM (Cardiology)'
    },
    {
      name: 'Dr. Priya Patel',
      speciality: 'Senior Pediatrician',
      image: 'https://images.unsplash.com/photo-1594824432258-f99f187ee3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      degrees: 'MBBS, MD (Pediatrics)'
    },
    {
      name: 'Dr. Amit Kumar',
      speciality: 'Orthopedic Surgeon',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      degrees: 'MBBS, MS (Ortho)'
    },
    {
      name: 'Dr. Neha Singh',
      speciality: 'Gynecologist',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      degrees: 'MBBS, MD (OBG)'
    }
  ];

  return (
    <section id="doctors" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-secondary uppercase tracking-widest mb-3">Medical Team</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">Our Expert Doctors</h3>
            <p className="text-gray-600 text-lg">
              Meet our team of highly qualified and experienced medical professionals dedicated to your well-being.
            </p>
          </div>
          <button className="text-primary font-semibold hover:text-blue-800 transition-colors whitespace-nowrap hidden md:block">
            View All Doctors &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[3/4] mb-4 bg-gray-100 rounded-sm">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h4 className="text-xl font-heading font-semibold text-gray-900">{doctor.name}</h4>
              <p className="text-secondary font-medium mb-1">{doctor.speciality}</p>
              <p className="text-sm text-gray-500">{doctor.degrees}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
          <button className="text-primary font-semibold hover:text-blue-800 transition-colors">
            View All Doctors &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
