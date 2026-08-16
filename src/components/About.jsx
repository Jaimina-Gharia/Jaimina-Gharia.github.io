import React from 'react';
import { profileData } from '../data/profile';

const About = () => {
  const focusAreas = [
    "Molecular Biology",
    "Cell Biology",
    "Cancer Biology",
    "Metabolomics",
    "Bioinformatics",
    "Neuroscience"
  ];

  return (
    <section id="about" className="py-24 relative scroll-mt-32">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="glass-panel p-8 md:p-12 relative overflow-hidden">
          {/* Subtle background gradient inside the panel */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-scientific-blue/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <h2 className="text-4xl font-serif text-scientific-teal mb-4">About</h2>
              <div className="w-12 h-1 bg-scientific-rose rounded-full mb-6"></div>
              <p className="text-lg font-medium text-scientific-teal/80 leading-snug">
                Building toward neuroscience through biotechnology.
              </p>
            </div>
            
            <div className="md:w-2/3">
              <p className="text-base text-scientific-teal/90 leading-relaxed mb-8 font-light">
                {profileData.about}
              </p>
              
              <div className="bg-white/50 rounded-xl p-6 border border-white/60 shadow-sm">
                <h3 className="text-sm font-semibold tracking-wide text-scientific-teal uppercase mb-4">
                  Research Focus
                </h3>
                <div className="flex flex-wrap gap-2">
                  {focusAreas.map((area, idx) => (
                    <span key={idx} className="px-4 py-2 bg-scientific-ivory border border-scientific-teal/10 rounded-full text-xs font-medium text-scientific-teal shadow-sm">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
