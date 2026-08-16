import React from 'react';
import { profileData } from '../data/profile';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[95vh] flex items-center justify-center pt-20 overflow-hidden">
      
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
              href={profileData.resumeLink}
              className="px-8 py-3.5 bg-white border border-scientific-teal/20 text-scientific-teal rounded-full font-medium hover:bg-scientific-rose/10 hover:border-scientific-rose transition-all text-center text-sm shadow-sm"
            >
              View CV
            </a>
          </div>
        </div>
        
        {/* Subtle Visual Composition Area */}
        <div className="hidden md:flex justify-center items-center h-full min-h-[400px]">
          <div className="relative w-full max-w-sm aspect-square">
            {/* Elegant abstract shapes to replace missing image and provide visual interest */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-md border border-white/60 rounded-full shadow-lg transform rotate-3 hover:rotate-6 transition-transform duration-700"></div>
            <div className="absolute inset-4 bg-scientific-lavender/30 backdrop-blur-md rounded-full border border-white/50 transform -rotate-3 hover:-rotate-6 transition-transform duration-700"></div>
            <div className="absolute inset-12 bg-scientific-rose/20 rounded-full flex flex-col items-center justify-center text-center p-8 border border-white/40 shadow-inner">
              <span className="font-serif italic text-2xl text-scientific-teal/70 mb-2">Cellular</span>
              <span className="font-serif italic text-2xl text-scientific-teal/70">Signaling</span>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
