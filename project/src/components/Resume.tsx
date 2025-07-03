// Resume.tsx
import React from 'react';

const Resume: React.FC = () => {
  return (
    <div className="w-full h-[400px] md:h-[600px]">
      <embed
        src="/resume.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
        className="rounded-lg shadow-md"
      />
    </div>
  );
};

export default Resume;
