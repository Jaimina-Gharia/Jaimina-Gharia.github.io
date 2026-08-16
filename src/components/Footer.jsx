import React from 'react';
import { profileData } from '../data/profile';

const Footer = () => {
  return (
    <footer className="bg-scientific-teal text-white/50 py-10 border-t border-white/10 text-center">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
        <div className="font-serif italic text-2xl text-white/80 mb-2">
          {profileData.name}
        </div>
        <div className="text-xs tracking-wider uppercase mb-6 text-white/40">
          Biotechnology · Research · Neuroscience
        </div>
        <div className="text-xs font-light">
          &copy; {new Date().getFullYear()} Jaimina Gharia. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
