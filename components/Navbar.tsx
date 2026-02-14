import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    // Navbar.tsx return:
          <nav
            className={`fixed w-full z-50 transition-all duration-500 ${
              scrolled ? 'bg-navy-900/95 shadow-2xl py-2 backdrop-blur-md' : 'bg-navy-900 py-4'
            }`}
          >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        {/* Logo Area - Image Based */}
        <Link
          to="/"
          className="flex items-center gap-3 group animate-fade-in shrink-0"
        >
          {/* Logo */}
          <div className="flex items-center justify-center rounded-full">
            <img
              src="/images/logo-circle.png"
              alt="Apex Route Logo"
              className="h-12 w-12 rounded-full object-cover shadow-sm transition-transform duration-300 group-hover:scale-105 "
            />
          </div>

          {/* Text */}
          <div className="flex flex-col">
            <span className="text-white font-serif tracking-wider text-lg leading-none group-hover:text-gold-400 transition-colors">
              APEX ROUTE
            </span>
            <span className="text-gold-500 text-[10px] tracking-[0.3em] uppercase font-medium">
              Consultants
            </span>
          </div>
        </Link>


        {/* Desktop Nav - Changed breakpoint to lg for tablet responsiveness */}
        <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 bg-navy-800/50 p-1.5 rounded-full border border-white/5 backdrop-blur-md">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 xl:px-5 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-full ${location.pathname === item.path
                ? 'bg-gold-500 text-navy-900 shadow-lg scale-105'
                : 'text-neutral-300 hover:text-white hover:bg-white/10'
                }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="w-px h-6 bg-white/10 mx-2"></div>
          <Link
            to="/contact"
            className="px-5 xl:px-6 py-2 bg-transparent border border-gold-500 text-gold-500 text-sm font-medium hover:bg-gold-500 hover:text-navy-900 transition-all duration-300 uppercase tracking-wider rounded-full whitespace-nowrap"
          >
            Consultation
          </Link>
        </div>

        {/* Mobile/Tablet Toggle - Changed breakpoint to lg */}
        <button
          className="lg:hidden text-gold-500 p-2 border border-gold-500/30 rounded-full hover:bg-gold-500/10 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile/Tablet Menu */}
      {isOpen && (
        <div className="lg:hidden bg-navy-900 border-t border-navy-700 absolute w-full left-0 top-full shadow-2xl animate-fade-in-up h-screen md:h-auto overflow-y-auto">
          <div className="flex flex-col py-6 px-6 space-y-4 pb-24 md:pb-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-neutral-300 hover:text-gold-500 hover:bg-white/5 px-4 py-3 rounded-xl text-base font-medium uppercase tracking-wide transition-all"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="text-center px-5 py-3 border border-gold-500 text-gold-500 text-base font-medium uppercase mt-4 rounded-full hover:bg-gold-500 hover:text-navy-900 transition-colors"
            >
              Request Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;