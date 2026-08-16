import React from 'react';
import { experienceData } from '../data/experience';

const ResearchExperience = () => {
  return (
    <section id="research" className="py-24 bg-scientific-blue/10 snap-start scroll-mt-20">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-serif text-scientific-teal mb-4">Research Experience</h2>
          <div className="w-12 h-1 bg-scientific-rose rounded-full mx-auto"></div>
        </div>
        
        <div className="relative border-l-2 border-scientific-lavender ml-4 md:ml-8 space-y-12 py-4">
          {experienceData.map((exp, index) => (
            <div key={exp.id} className="relative pl-8 md:pl-12">
              {/* Soft timeline marker */}
              <div className="absolute -left-[11px] top-1.5 w-5 h-5 bg-white border-4 border-scientific-lavender rounded-full shadow-sm"></div>
              
              <div className="glass-panel p-6 md:p-8 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-serif text-scientific-teal font-medium">
                    {exp.institution}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-scientific-rose/20 text-scientific-teal text-xs font-semibold rounded-full mt-2 md:mt-0 whitespace-nowrap">
                    {exp.date}
                  </span>
                </div>
                
                <div className="text-sm font-semibold tracking-wide text-scientific-muted uppercase mb-4">
                  {exp.role}
                </div>
                
                <div className="mb-6 space-y-2">
                  {exp.highlights.map((item, idx) => (
                    <p key={idx} className="text-sm text-scientific-teal/90 leading-relaxed font-light">
                      • {item}
                    </p>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-scientific-teal/10 flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <span key={idx} className="text-xs font-medium text-scientific-teal/70 bg-scientific-ivory px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchExperience;
