import React from 'react';
import { presentationsData } from '../data/presentations';

const Presentations = () => {
  return (
    <section id="presentations" className="py-24 bg-scientific-rose/5">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-serif text-scientific-teal mb-4">Presentations</h2>
          <div className="w-12 h-1 bg-scientific-rose rounded-full mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {presentationsData.map((pres, idx) => (
            <div key={idx} className="glass-panel p-6 flex flex-col justify-between">
              <div>
                <div className="inline-block px-3 py-1 bg-white rounded-full text-[0.65rem] font-bold text-scientific-teal uppercase tracking-widest mb-4 shadow-sm border border-white/50">
                  {pres.date}
                </div>
                <h3 className="text-lg font-serif text-scientific-teal mb-3 leading-snug">
                  {pres.title}
                </h3>
              </div>
              <div className="text-xs text-scientific-teal/70 font-medium mt-4 pt-4 border-t border-scientific-teal/10">
                {pres.event} <br/> <span className="font-light">{pres.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Presentations;
