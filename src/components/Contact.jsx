import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-sm font-bold text-secondary uppercase tracking-widest mb-3">Get In Touch</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-8">Contact Sanjeevni Hospital</h3>
            
            <p className="text-gray-600 mb-12 text-lg">
              We are here to help you. Reach out to us for appointments, emergency services, or any healthcare-related queries.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-heading font-semibold text-gray-900 mb-1">Location</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Main Road, Near Railway Station,<br />
                    Anuppur, Madhya Pradesh 484224
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-heading font-semibold text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-600">Emergency: +91 98765 43210</p>
                  <p className="text-gray-600">Reception: +91 98765 43211</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-heading font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">info@sanjeevnihospital.in</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-heading font-semibold text-gray-900 mb-1">Working Hours</h4>
                  <p className="text-gray-600">Emergency: 24/7 Open</p>
                  <p className="text-gray-600">OPD: Mon-Sat, 9:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl overflow-hidden min-h-[400px] relative border border-gray-200">
            {/* Google Map Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center flex-col text-gray-400 bg-gray-50">
              <MapPin className="w-12 h-12 mb-4 text-gray-300" />
              <p className="font-medium text-gray-500">Google Map Placeholder</p>
              <p className="text-sm">Anuppur, Madhya Pradesh</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
