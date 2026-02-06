// Resume.tsx
import React from 'react';

const Resume: React.FC = () => {
  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;
  return (
    <div className="w-full h-[400px] md:h-[600px]">
      <object
        data={resumeUrl}
        type="application/pdf"
        width="100%"
        height="100%"
        className="rounded-lg shadow-md"
      >
        <div className="p-4 text-center">
          <p className="mb-2">Unable to display the PDF inline.</p>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="underline text-blue-600"
          >
            Open or download the resume
          </a>
        </div>
      </object>
    </div>
  );
};

export default Resume;
