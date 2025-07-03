import React, { useState } from 'react';
import { User } from 'lucide-react';
import Resume from './Resume'; // Make sure resume.pdf is in public/

const About: React.FC = () => {
  const [showResume, setShowResume] = useState(false);

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Introduction
        </h2>
        <div className="w-16 h-1 bg-yellow-400 mb-8"></div>

        {/* Intro Container */}
        <div className="bg-gray-800 rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg border border-gray-700">
          <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
            <User className="w-8 h-8 text-black" />
          </div>

          <p className="text-lg sm:text-xl text-gray-300 font-light leading-relaxed text-center">
            🛠️ Namaste, I'm Shashank, 🎓 a BE student in Information Science at SJBIT,
            with a strong interest in Python and software development.
            I'm eager to kickstart my career, learn from real-world projects,
            and contribute to building useful, efficient tech solutions 🚀.
          </p>

          {/* Resume Toggle Button */}
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowResume(prev => !prev)}
              className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-500 transition-transform duration-300 hover:scale-105 hover:shadow-yellow-400/50 hover:border hover:border-yellow-400"
            >
              {showResume ? 'Hide Resume' : 'View Resume'}
            </button>
          </div>

          {/* Resume Viewer */}
          {showResume && (
            <div
              className="mt-8 p-4 border border-yellow-400 rounded-lg shadow-yellow-400 shadow-md transition-transform duration-300 hover:scale-[1.02]"
            >
              <Resume />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
