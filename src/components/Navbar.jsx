import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = ['About', 'Research', 'Projects', 'Skills', 'Publications', 'Contact'];

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <div className="fixed w-full z-50 top-4 px-4 flex justify-center">
      <nav className="glass-panel px-6 py-3 flex justify-between items-center w-full max-w-5xl">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-lg font-serif italic text-scientific-teal hover:opacity-70 transition-opacity"
        >
          JG
        </button>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-2">
          {links.map(link => (
            <button 
              key={link} 
              onClick={() => scrollTo(link)}
              className="px-4 py-2 text-sm font-medium text-scientific-muted hover:bg-scientific-rose/30 hover:text-scientific-teal rounded-full transition-all"
            >
              {link}
            </button>
          ))}
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-scientific-teal focus:outline-none p-2 hover:bg-scientific-lavender/30 rounded-full transition-colors">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-4 right-4 glass-panel mt-2 p-4">
          <div className="flex flex-col space-y-2">
            {links.map(link => (
              <button 
                key={link} 
                onClick={() => scrollTo(link)}
                className="text-left px-4 py-3 text-sm font-medium text-scientific-teal hover:bg-scientific-rose/30 rounded-xl transition-colors"
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
