import React from 'react';

const Gallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1582719478250-c89400bb1536?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1512678080530-7760d81faba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1538108149393-cefb6d0ec116?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1638202993928-7267aad84c31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-widest mb-3">Our Environment</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">Hospital Gallery</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((src, index) => (
            <div key={index} className="aspect-square overflow-hidden group cursor-pointer bg-gray-100">
              <img 
                src={src} 
                alt={`Gallery ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-95 group-hover:brightness-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
