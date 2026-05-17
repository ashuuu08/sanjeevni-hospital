import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import { blogsData } from '../../data/hospitalData';

const BlogList = () => {
  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <div className="bg-[#0F4C81] py-24 px-4 relative">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">Health Insights</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-teal-200 text-lg md:text-xl max-w-2xl mx-auto">
            Read the latest health articles, tips, and medical updates from our expert doctors.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogsData.map((blog, idx) => (
            <motion.article 
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow group flex flex-col"
            >
              <Link to={`/blog/${blog.id}`} className="block relative aspect-video overflow-hidden">
                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-teal-600 flex items-center shadow-sm">
                  <Tag className="w-3 h-3 mr-1" /> {blog.category}
                </div>
              </Link>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="w-4 h-4 mr-2" /> {blog.date}
                </div>
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-3 group-hover:text-[#0F4C81] transition-colors leading-tight">
                  <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                </h2>
                <p className="text-gray-600 mb-6 flex-grow line-clamp-3">{blog.excerpt}</p>
                <Link to={`/blog/${blog.id}`} className="inline-flex items-center text-teal-600 font-bold hover:text-teal-700 mt-auto">
                  Read Full Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
