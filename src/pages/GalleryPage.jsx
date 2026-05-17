import React from 'react';
import { motion } from 'framer-motion';
import poster1 from '../assets/poster1.jpg';
import poster2 from '../assets/poster2.jpg';
import poster3 from '../assets/poster3.jpg';

const images = [
  { src: poster1, alt: 'Hospital Main Block', span: 'md:col-span-2 md:row-span-2' },
  { src: poster2, alt: 'Dedicated Medical Staff' },
  { src: poster3, alt: 'Infrastructure & Building' },
  { src: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Advanced ICU Unit' },
  { src: 'https://images.pexels.com/photos/4483327/pexels-photo-4483327.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Modular Operation Theatre', span: 'md:col-span-2' },
  { src: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'NABL Diagnostic Laboratory' },
  { src: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80', alt: 'Patient Monitoring Systems' },
  { src: 'https://images.unsplash.com/photo-1582719478250-c89400bb1536?auto=format&fit=crop&w=800&q=80', alt: 'Digital Radiography & X-Ray' },
];

const GalleryPage = () => (
  <div className="pt-20 lg:pt-[84px] bg-gray-50 min-h-screen">
    <section className="bg-[#0F4C81] py-28 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-heading font-black text-white mb-6">Hospital Gallery</motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-teal-200 text-lg max-w-2xl mx-auto font-normal">A visual tour of our infrastructure, advanced clinical equipment, and dedicated medical team.</motion.p>
      </div>
    </section>
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((img, idx) => (
          <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className={`relative group overflow-hidden rounded-3xl shadow-md border border-gray-200/60 bg-gray-200 ${img.span || ''}`}>
            <div className={img.span?.includes('row-span') ? 'h-full min-h-[400px]' : 'aspect-[4/3]'}>
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p className="text-white font-bold text-lg">{img.alt}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default GalleryPage;
