import React from 'react';
import { projectsData } from '../data/projects';

const ProjectCard = ({ project, index }) => {
  const isVisualLeft = index % 2 !== 0;

  // If there's an image, we use the beautiful split layout.
  if (project.image) {
    return (
      <div className="glass-panel p-6 flex flex-col md:flex-row gap-8 items-stretch overflow-hidden">
        {/* Content Column */}
        <div className={`w-full md:w-1/2 flex flex-col justify-center p-4 ${isVisualLeft ? 'md:order-2' : 'md:order-1'}`}>
          <div className="inline-block px-3 py-1 bg-scientific-blue/30 text-scientific-teal text-[0.65rem] font-semibold uppercase tracking-wider rounded-full self-start mb-4">
            {project.category}
          </div>
          
          <h3 className="text-2xl font-serif text-scientific-teal mb-4">
            {project.title}
          </h3>
          
          <p className="text-sm text-scientific-teal/80 font-light leading-relaxed mb-6">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="px-2.5 py-1 bg-white border border-scientific-teal/10 rounded text-xs text-scientific-teal/70 font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Visual Column */}
        <div className={`w-full md:w-1/2 rounded-xl overflow-hidden ${isVisualLeft ? 'md:order-1' : 'md:order-2'}`}>
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover min-h-[250px]"
          />
        </div>
      </div>
    );
  }

  // Text-only layout for when there is NO image.
  // We do NOT render a blank box or placeholder.
  return (
    <div className="glass-panel p-8 md:p-10 relative overflow-hidden">
      {/* A very subtle soft gradient shape in the background to make it feel designed, not empty */}
      <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-scientific-rose/20 rounded-full blur-2xl pointer-events-none"></div>
      
      <div className="relative z-10 max-w-3xl">
        <div className="inline-block px-3 py-1 bg-scientific-lavender/40 text-scientific-teal text-[0.65rem] font-semibold uppercase tracking-wider rounded-full mb-4">
          {project.category}
        </div>
        
        <h3 className="text-3xl font-serif text-scientific-teal mb-4">
          {project.title}
        </h3>
        
        <p className="text-base text-scientific-teal/80 font-light leading-relaxed mb-8">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, idx) => (
            <span key={idx} className="px-3 py-1.5 bg-white shadow-sm border border-white/50 rounded-md text-xs text-scientific-teal/80 font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 snap-start scroll-mt-20">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-serif text-scientific-teal mb-4">Selected Projects</h2>
          <div className="w-12 h-1 bg-scientific-blue rounded-full mx-auto"></div>
        </div>
        
        <div className="flex flex-col space-y-10">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
