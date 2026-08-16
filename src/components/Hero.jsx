import React from 'react';
import { profileData } from '../data/profile';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[95vh] flex items-center justify-center pt-20 overflow-hidden scroll-mt-32">
      
      {/* Soft floating background elements to bring back the Carrd layered feel */}
      <div className="absolute top-1/4 -right-12 w-64 h-64 bg-scientific-blue rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute -bottom-8 left-1/4 w-72 h-72 bg-scientific-rose rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/3 left-1/3 w-56 h-56 bg-scientific-lavender rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Main Text Column */}
        <div className="flex flex-col justify-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-sm border border-white/40 text-xs font-semibold tracking-wide text-scientific-teal mb-6 self-start shadow-sm">
            Biotechnology · Research
          </div>
          
          <h1 className="text-6xl md:text-7xl font-serif text-scientific-teal leading-[1.1] mb-6">
            Jaimina<br />Gharia
          </h1>
          
          <p className="text-xl md:text-2xl font-light text-scientific-muted leading-relaxed mb-6">
            Biotechnology undergraduate exploring cellular biology, disease research, and neuroscience.
          </p>
          
          <p className="text-sm md:text-base text-scientific-teal/80 leading-relaxed mb-10 max-w-lg">
            My research experience spans mammalian cell culture, molecular biology, metabolomics, mass spectrometry, and computational analysis.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => document.getElementById('research').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3.5 bg-scientific-teal text-scientific-ivory rounded-full font-medium hover:bg-opacity-90 hover:shadow-md transition-all text-center text-sm"
            >
              Explore Research
            </button>
            <a 
              href="/Jaimina_Gharia_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-white border border-scientific-teal/20 text-scientific-teal rounded-full font-medium hover:bg-scientific-rose/10 hover:border-scientific-rose transition-all text-center text-sm shadow-sm"
            >
              View CV
            </a>
          </div>
        </div>
        
        {/* Subtle Visual Composition Area */}
        <div className="flex flex-col items-center justify-center gap-1 md:gap-2 mt-12 md:mt-0 w-full h-full min-h-[400px]">
          
          {/* Top Row */}
          <div className="flex justify-center w-full pl-0 md:-ml-24">
            {/* MOLECULAR BIOLOGY: Second largest */}
            <div className="w-36 h-36 md:w-44 md:h-44 bg-scientific-lavender/40 backdrop-blur-sm border border-white/50 rounded-full shadow-md flex items-center justify-center text-center p-4 transform transition-transform duration-1000 hover:scale-105 animate-float animation-delay-2000">
              <span className="font-sans font-medium text-sm md:text-base text-scientific-teal/90 tracking-wider uppercase">Molecular<br/>Biology</span>
            </div>
          </div>
          
          {/* Middle Row */}
          <div className="flex flex-row justify-center items-center gap-2 md:gap-3 w-full">
            
            {/* CELL BIOLOGY: Medium size */}
            <div className="w-32 h-32 md:w-40 md:h-40 bg-scientific-blue/30 backdrop-blur-sm border border-white/40 rounded-full shadow flex items-center justify-center text-center p-4 transform transition-transform duration-1000 hover:scale-105 animate-float animation-delay-4000">
              <span className="font-sans font-medium text-xs md:text-sm text-scientific-teal/80 tracking-wider uppercase">Cell<br/>Biology</span>
            </div>
            
            {/* NEUROSCIENCE: Largest, most prominent */}
            <div className="w-48 h-48 md:w-64 md:h-64 bg-white/70 backdrop-blur-md border border-white/60 rounded-full shadow-lg flex items-center justify-center text-center p-6 transform transition-transform duration-1000 hover:scale-105 animate-float">
              <span className="font-serif text-xl md:text-2xl text-scientific-teal tracking-wide">Neuroscience</span>
            </div>
            
          </div>
          
          {/* Bottom Row */}
          <div className="flex justify-center w-full pr-0 md:-mr-40">
            {/* ONCOLOGY: Medium size */}
            <div className="w-32 h-32 md:w-40 md:h-40 bg-scientific-rose/30 backdrop-blur-sm border border-white/40 rounded-full shadow flex items-center justify-center text-center p-4 transform transition-transform duration-1000 hover:scale-105 animate-float animation-delay-2000">
              <span className="font-sans font-medium text-xs md:text-sm text-scientific-teal/80 tracking-wider uppercase">Oncology</span>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
