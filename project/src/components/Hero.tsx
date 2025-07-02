import React from 'react';
import { Github, Linkedin,  } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 bg-black relative pt-20 overflow-hidden">
      {/* Animated Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gray-700 transform rotate-45 animate-float-slow opacity-60"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gray-600 rounded-full animate-float-medium opacity-50"></div>
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-gray-800 transform rotate-12 animate-float-fast opacity-40"></div>
        <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-gray-500 transform rotate-45 animate-float-slow opacity-70"></div>
        
        {/* Medium shapes */}
        <div className="absolute top-1/2 left-1/6 w-16 h-16 bg-gray-600 transform rotate-45 animate-float-medium opacity-50"></div>
        <div className="absolute top-3/4 right-1/6 w-12 h-12 bg-gray-700 rounded-full animate-float-fast opacity-60"></div>
        <div className="absolute top-1/6 right-1/2 w-28 h-28 bg-gray-800 transform rotate-12 animate-float-slow opacity-40"></div>
        
        {/* Small shapes */}
        <div className="absolute top-2/3 left-1/12 w-8 h-8 bg-gray-500 transform rotate-45 animate-float-fast opacity-70"></div>
        <div className="absolute bottom-1/6 right-1/12 w-10 h-10 bg-gray-600 rounded-full animate-float-medium opacity-50"></div>
        <div className="absolute top-1/12 left-2/3 w-14 h-14 bg-gray-700 transform rotate-45 animate-float-slow opacity-60"></div>
        
        {/* Triangle shapes */}
        <div className="absolute bottom-1/4 right-1/6 w-0 h-0 border-l-[30px] border-r-[30px] border-b-[52px] border-l-transparent border-r-transparent border-b-gray-600 animate-float-medium opacity-50"></div>
        <div className="absolute top-1/3 left-1/12 w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-gray-700 animate-float-fast opacity-60"></div>
        <div className="absolute bottom-1/2 right-2/3 w-0 h-0 border-l-[25px] border-r-[25px] border-b-[43px] border-l-transparent border-r-transparent border-b-gray-500 animate-float-slow opacity-70"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-8 text-center">
          {/* Multi-language Greeting */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-yellow-400">Hello, I'm</span>{' '}
              <span className="text-white"> Shashank</span>
            </h1>
            </div>
            <div className="space-y-3 text-lg md:text-xl text-gray-300">
              <p className="font-light">
                🙏  • <span className="text-blue-400">ನಮಸ್ಕಾರ</span> • <span className="text-yellow-400">Namaste</span> • <span className="text-green-400">Hello</span>
              </p>
              <p className="text-gray-400 font-light">
                Welcome to my digital space
              </p>
            </div>
          

          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
          
          {/* <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
            Enthusiastic <span className="text-yellow-400 font-medium"> Python developer</span> with a solid grasp of programming fundamentals. 
             Eager to begin a career in software development, with a quick learning ability and strong communication skills to thrive in team environments."
          </p> */}
        </div>

        <div className="flex justify-center space-x-8 mb-16">
          <a
            href="https://github.com/ShashankTallam"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors duration-300 group"
          >
            <Github className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-medium">GitHub</span>
          </a>
          
          <a
            href="https://www.linkedin.com/in/tjshashank/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-300 group"
          >
            <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-medium">LinkedIn</span>
          </a>
        </div>
      </div>

      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </div> */}
    </section>
  );
};

export default Hero;