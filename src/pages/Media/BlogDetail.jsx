import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ChevronRight, Tag, User } from 'lucide-react';
import { blogsData } from '../../data/hospitalData';

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogsData.find(b => b.id === id);

  if (!blog) {
    return <div className="pt-40 text-center text-2xl font-bold">Article Not Found</div>;
  }

  const relatedBlogs = blogsData.filter(b => b.id !== id).slice(0, 3);

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      {/* BREADCRUMB */}
      <div className="bg-white border-b border-gray-100 py-4 px-4">
        <div className="max-w-4xl mx-auto flex items-center text-sm text-gray-500 font-medium">
          <Link to="/" className="hover:text-[#0F4C81] transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link to="/blog" className="hover:text-[#0F4C81] transition-colors">Blog</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-gray-900 truncate">{blog.title}</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="aspect-[21/9] w-full">
            <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
          </div>
          
          <div className="p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="bg-teal-50 text-teal-600 font-bold px-3 py-1 rounded-full text-sm flex items-center">
                <Tag className="w-4 h-4 mr-2" /> {blog.category}
              </span>
              <span className="text-gray-500 text-sm flex items-center font-medium">
                <Calendar className="w-4 h-4 mr-2" /> {blog.date}
              </span>
              <span className="text-gray-500 text-sm flex items-center font-medium">
                <User className="w-4 h-4 mr-2" /> By Sanjeevni Editorial
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-8 leading-tight">
              {blog.title}
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-xl font-medium text-gray-500 mb-8 border-l-4 border-[#0F4C81] pl-6 italic">
                {blog.excerpt}
              </p>
              
              <div className="space-y-6">
                {/* Simulated markdown/rich text rendering for demo */}
                <p>{blog.content}</p>
                <p>It is strictly advised to consult a certified physician before making any changes to your health routine. At Sanjeevni Hospital, our expert team is available 24/7 to assist you with personalized medical advice.</p>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-100">
              <Link to="/appointment" className="inline-block bg-[#0F4C81] text-white font-bold px-8 py-4 rounded-xl shadow-md hover:bg-blue-800 transition-colors">
                Book a Health Consultation
              </Link>
            </div>
          </div>
        </motion.article>

        {/* RELATED ARTICLES */}
        {relatedBlogs.length > 0 && (
          <div className="mt-20">
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-8">Related Articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedBlogs.map(rb => (
                <Link to={`/blog/${rb.id}`} key={rb.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-4 hover:shadow-md transition-shadow group">
                  <img src={rb.image} alt={rb.title} className="w-24 h-24 rounded-xl object-cover" />
                  <div>
                    <h4 className="font-bold text-gray-900 group-hover:text-[#0F4C81] transition-colors leading-tight mb-2 line-clamp-2">{rb.title}</h4>
                    <span className="text-sm text-teal-600 font-medium">{rb.category}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;
