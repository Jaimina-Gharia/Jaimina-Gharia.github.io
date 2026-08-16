import React from 'react';
import { skillsData } from '../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-scientific-blue/10 scroll-mt-32">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-serif text-scientific-teal mb-4">Skills & Expertise</h2>
          <div className="w-12 h-1 bg-scientific-blue rounded-full mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((category, idx) => (
            <div key={idx} className="glass-panel p-8 text-center flex flex-col items-center hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-lg font-serif text-scientific-teal mb-6">
                {category.category}
              </h3>
              
              <ul className="space-y-3 w-full">
                {category.items.map((skill, sIdx) => (
                  <li key={sIdx} className="text-sm font-medium text-scientific-teal/80 bg-white/50 py-2 rounded-lg border border-white/60">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
