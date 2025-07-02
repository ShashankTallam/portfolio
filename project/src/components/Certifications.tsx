import React from 'react';
import { BadgeCheck } from 'lucide-react';

const certifications = [
  {
    title: 'Postman API Fundamentals Student Expert',
    issuer: 'Postman',
    year: '2025',
    link: '/certificates/Postman.pdf', // Correct path relative to public folder
  },
  {
    title: 'Docker Essentials',
    issuer: 'IBM Cognitive Class',
    year: '2025',
    link: '/certificates/Docker.pdf',
  },
  {
    title: 'DBMS',
    issuer: 'Swayam',
    year: '2024',
    link: '/certificates/DBMS.pdf',
  },
];

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Certifications</h2>
        <div className="w-16 h-1 bg-yellow-400 mb-8"></div>

        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-6 shadow-md border border-gray-700 cursor-pointer
                         hover:border-yellow-400 hover:shadow-yellow-400/30 hover:scale-[1.03] transition-all duration-300"
            >
              <div className="flex items-center mb-2">
                <BadgeCheck className="text-yellow-400 mr-2" />
                <h3 className="text-xl font-semibold">{cert.title}</h3>
              </div>
              <p className="text-gray-400">{cert.issuer}</p>
              <p className="text-sm text-gray-500">{cert.year}</p>

              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-yellow-300 transition duration-200 font-medium"
                >
                  View Certificate
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
