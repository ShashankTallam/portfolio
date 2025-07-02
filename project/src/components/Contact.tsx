import React from 'react';
import { Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Get In Touch</h2>
        <div className="w-16 h-1 bg-yellow-400 mb-8"></div>
        <div className="text-center">
          <p className="text-xl text-gray-300 font-light max-w-3xl leading-relaxed mb-12 mx-auto text-justify">
            I'd love to connect and collaborate! Whether you have a project idea, a question, or just want to say hello, feel free to reach out. I am always open to exploring new opportunities, sharing insights, or solving interesting problems together. 
            Let's create something impactful—drop me a message, and I'll get back to you promptly.
          </p>

          {/* Hover effect added here */}
          <div
            className="bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-700 inline-block
                       transition-transform duration-300 hover:scale-[1.03] hover:shadow-yellow-400/50 hover:border-yellow-400 cursor-pointer"
          >
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-black" />
            </div>
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Mail className="w-6 h-6 text-yellow-400" />
              <a
                href="mailto:shashanktj22@gmail.com"
                className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200 font-medium text-xl"
              >
                shashanktj22@gmail.com
              </a>
            </div>
            <a
              href="mailto:shashanktj22@gmail.com"
              className="inline-flex items-center space-x-2 bg-yellow-400 text-black px-8 py-4 rounded-full hover:bg-yellow-300 transition-all duration-300 hover:scale-105 font-medium"
            >
              <Mail className="w-5 h-5" />
              <span>Send Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
