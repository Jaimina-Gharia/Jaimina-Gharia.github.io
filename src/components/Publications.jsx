import React from 'react';
import { publicationsData } from '../data/publications';

const Publications = () => {
  if (!publicationsData || publicationsData.length === 0) return null;

  return (
    <section id="publications" className="py-24 scroll-mt-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-serif text-scientific-teal mb-4">Publications</h2>
          <div className="w-12 h-1 bg-scientific-lavender rounded-full mx-auto"></div>
        </div>
        
        <div className="space-y-8">
          {publicationsData.map((pub, idx) => (
            <div key={idx} className="glass-panel p-8 relative overflow-hidden group">
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-scientific-lavender transition-all group-hover:bg-scientific-rose"></div>
              <div className="text-xs font-bold text-scientific-lavender uppercase tracking-widest mb-3">
                {pub.status}
              </div>
              <h3 className="text-xl md:text-2xl font-serif text-scientific-teal mb-3 leading-snug">
                {pub.title}
              </h3>
              <div className="text-sm text-scientific-teal/80 font-medium italic mb-6">
                {pub.journal}
              </div>
              
              <div className="flex gap-4">
                {pub.doi !== "#" && (
                  <a href={pub.doi} target="_blank" rel="noopener noreferrer" className="px-4 py-1.5 bg-white border border-scientific-teal/10 rounded-full text-xs font-semibold text-scientific-teal shadow-sm hover:bg-scientific-rose/20 transition-colors">
                    DOI ↗
                  </a>
                )}
                {pub.pubmed !== "#" && (
                  <a href={pub.pubmed} target="_blank" rel="noopener noreferrer" className="px-4 py-1.5 bg-white border border-scientific-teal/10 rounded-full text-xs font-semibold text-scientific-teal shadow-sm hover:bg-scientific-rose/20 transition-colors">
                    PubMed ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
