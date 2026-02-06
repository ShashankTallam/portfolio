// Resume.tsx
import React from "react";

const Resume: React.FC = () => {
  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

  return (
    <section className="relative w-full px-4 md:px-0">
      {/* GPU Isolation Wrapper */}
      <div
        className="
          w-full h-[400px] md:h-[600px]
          rounded-lg shadow-md
          bg-white
          overflow-hidden
          isolate
        "
        style={{
          transform: "translateZ(0)",
          willChange: "auto",
          filter: "none",
          backdropFilter: "none",
        }}
      >
        <iframe
          src={resumeUrl}
          title="Resume PDF"
          className="w-full h-full border-none bg-white"
        />
      </div>

      {/* Download Button */}
      <div className="mt-4 text-center">
        <a
          href={resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-block px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Open / Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
