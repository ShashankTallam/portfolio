import React from 'react';
import { Github } from 'lucide-react';
import { SiDocker } from 'react-icons/si';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "BOLT – Breaking Obstacles with Lip-reading Technology (Ongoing)",
      description:
        "Built a real-time lip-reading system using Python, OpenCV, MediaPipe, and deep learning (CNN + RNN/CTC), with a Tkinter-based GUI. Applied NLP for grammar correction and enhanced readability. Integrated data augmentation and transfer learning for improved accuracy and future multilingual support.",
      technologies: ["Python", "OpenCV", "Deep Learning", "MediaPipe"],
      githubUrl: "csd",
      Docker: "sac",
      image: "/images/BOLT.jpg",
    },
    {
      title: "Video Transcript Summarizer",
      description:
        "Built a Flask web app that summarizes YouTube video transcripts using NLP techniques, including both extractive (LSA) and abstractive methods. Features include customizable summary options, language detection, and real-time processing for enhanced accessibility and user experience.",
      technologies: ["Python", "Flask", "NLP"],
      githubUrl: "https://github.com/ShashankTallam/Video-Transcript-Summarizer",
      Docker: "https://hub.docker.com/r/shashanktj/video-transcript-summarizer/tags",
      image: "/images/Video Transcript Summarizer.png",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Projects
        </h2>
        <div className="w-16 h-1 bg-yellow-400 mb-8"></div>
       
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-10">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl shadow-lg border border-gray-700 hover:border-yellow-400 transition-all duration-300 hover:shadow-yellow-400/30 hover:scale-[1.03] flex flex-col h-full"
            >
              {/* Project Image */}
              {project.image && (
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="rounded-t-2xl w-full object-cover h-48 border-b border-gray-700"
                />
              )}

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>

                <p className="text-gray-300 flex-grow font-light leading-relaxed mb-6 text-justify">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700 text-yellow-400 rounded-full text-sm font-semibold border border-yellow-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap justify-center gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 font-semibold transition-colors"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <Github className="w-5 h-5" />
                      <span>Code</span>
                    </a>
                  )}

                  {project.Docker && (
                    <a
                      href={project.Docker}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 font-semibold transition-colors"
                      aria-label={`${project.title} Docker image`}
                    >
                      <SiDocker className="w-5 h-5" />
                      <span>Docker</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
