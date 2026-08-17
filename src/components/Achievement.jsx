import React from 'react';

const Achievement = () => {
  return (
    <section id="achievement" className="py-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="glass-panel p-10 md:p-16 text-center relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute -top-12 -left-12 w-32 h-32 bg-scientific-lavender/30 rounded-full blur-xl pointer-events-none"></div>
          <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-scientific-blue/30 rounded-full blur-xl pointer-events-none"></div>
          
          <div className="relative z-10">
            <h2 className="text-xl font-bold tracking-widest text-scientific-rose uppercase mb-4">Recognition</h2>
            <h3 className="text-4xl font-serif text-scientific-teal mb-2">Student of the Year</h3>
            <div className="text-sm font-semibold tracking-wide text-scientific-teal/70 uppercase mb-6">
              GSFC University · 2025–2026
            </div>
            <p className="text-base text-scientific-teal/80 font-light leading-relaxed max-w-lg mx-auto">
              Conferred in recognition of outstanding academic excellence, consistent curricular and co-curricular achievements, and exemplary discipline.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
