import React from 'react';

interface ProjectCardProps {
  title: string;
  text: string;
  skills?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, text, skills }) => {
  return (
    <div className=" backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg text-white transition-transform hover:scale-105 duration-300">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-sm mb-4 text-gray-300">{text}</p>
      {skills && (
        <div>
          <h3 className="text-sm font-semibold text-purple-400 mb-1">Skills Used:</h3>
          <p className="text-xs">{skills}</p>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
