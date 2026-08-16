import React from 'react';
import { educationData } from '../data/education';

const Education = () => {
  return (
    <section id="education" className="py-20 relative snap-start scroll-mt-20">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-scientific-teal mb-4">Education</h2>
          <div className="w-12 h-1 bg-scientific-lavender rounded-full mx-auto"></div>
        </div>
        
        <div className="space-y-6">
          {educationData.map((edu, idx) => (
            <div key={idx} className="glass-panel p-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6 border-t-4 border-t-scientific-rose">
              <div>
                <h3 className="text-2xl font-serif text-scientific-teal mb-2">{edu.institution}</h3>
                <p className="text-sm font-medium text-scientific-muted mb-2 uppercase tracking-wide">{edu.location}</p>
                <p className="text-lg text-scientific-teal/90 font-light">{edu.degree}</p>
              </div>
              
              <div className="bg-white/60 px-6 py-4 rounded-xl shadow-sm border border-white/50 text-center">
                <p className="text-xs font-semibold tracking-wide text-scientific-muted uppercase mb-1">Current CGPA</p>
                <p className="text-2xl font-serif text-scientific-teal">{edu.gpa}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
