import React from 'react';
import { profileData } from '../data/profile';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-scientific-teal text-white relative overflow-hidden">
      {/* Background blobs for softness even in the dark section */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-scientific-blue/10 rounded-full mix-blend-screen filter blur-3xl opacity-50 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        <h2 className="text-5xl font-serif mb-6">Let's Connect</h2>
        <div className="w-12 h-1 bg-scientific-rose rounded-full mx-auto mb-10"></div>
        
        <p className="text-lg text-white/80 font-light leading-relaxed max-w-xl mx-auto mb-16">
          Interested in research opportunities, neuroscience, biotechnology, academic collaboration, and future graduate research.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-16">
          <a href={`mailto:${profileData.contact.email}`} className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium transition-colors w-full md:w-auto">
            Email Me
          </a>
          
          {profileData.contact.linkedin !== "#" && (
            <a href={profileData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-scientific-rose text-scientific-teal hover:bg-opacity-90 rounded-full font-bold transition-colors w-full md:w-auto shadow-sm">
              Connect on LinkedIn
            </a>
          )}
        </div>
        
        <div className="text-sm font-light text-white/60 tracking-wide">
          Based in {profileData.contact.location}
        </div>
      </div>
    </section>
  );
};

export default Contact;
