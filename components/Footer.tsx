import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 border-t border-navy-800 text-neutral-400">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Brand Column */}
          <div className="col-span-1">
            <div className="flex flex-col mb-6">
              <span className="text-white font-serif tracking-wider text-lg">APEX ROUTE</span>
              <span className="text-gold-500 text-xs tracking-[0.2em] uppercase">Consultants</span>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-neutral-500">
              Providing structured, ethical, and professional visa guidance. We navigate complex immigration systems so you don't have to.
            </p>
            <div className="flex items-center gap-2 text-xs text-gold-600 border border-navy-700 bg-navy-800 px-3 py-2 w-fit">
              <ShieldCheck className="w-4 h-4" />
              <span>Regulated Standards</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium uppercase tracking-widest text-xs mb-6">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-gold-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-gold-500 transition-colors">About Firm</Link></li>
              <li><Link to="/services" className="hover:text-gold-500 transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-gold-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-medium uppercase tracking-widest text-xs mb-6">Office</h4>
            <address className="not-italic text-sm space-y-3">
              <p>Office No: LG12A, Big City Plaza</p>
              <p>Liberty Roundabout, Gulberg 3, Lahore</p>
              <p>info@apexrouteconsultants.com</p>
              <p>+92 339 8410100</p>
            </address>
          </div>

        </div>

        <div className="border-t border-navy-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600">
          <p>&copy; {currentYear} Apex Route Consultants. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Not a government agency. We provide professional consultation.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;