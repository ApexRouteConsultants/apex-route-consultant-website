import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 border-t border-navy-800 text-neutral-400">
      <div className="container mx-auto px-6 lg:px-12 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Brand Column */}
          <div className="col-span-1">
            <div className="flex flex-row mb-6">
              <a href="/"><img className='w-40' src="/images/logo-bg.png" alt="apex-route-logo" /></a>
              <p className="text-white font-serif tracking-wider text-lg pt-3">APEX ROUTE <br /><span className='text-gold-500 text-m tracking-[0.2em] uppercase'>Consultants</span></p>
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
            <h4 className="text-white font-medium uppercase tracking-widest text-xs mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-gold-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-gold-500 transition-colors">About Firm</Link></li>
              <li><Link to="/services" className="hover:text-gold-500 transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-gold-500 transition-colors">Contact</Link></li>                                         
              <li><Link to="/privacy-policy" className="hover:text-gold-500 transition-colors">Privacy Policy</Link></li> 
              <li><Link to="/terms-conditions" className="hover:text-gold-500 transition-colors">Terms & Conditions</Link></li>                                        
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-medium uppercase tracking-widest text-xs mb-6">Office</h4>
            <address className="not-italic text-sm space-y-3">
              <p><i className="fa fa-home mr-2"></i>Office No: LG12A, Big City Plaza</p>
              <p><i className="fas fa-map-marker-alt mr-2"></i>Liberty Roundabout, Gulberg 3, Lahore</p>
              <p><a href="mailto:info@apexrouteconsultants.com" target='_blank' rel='noreferrer'><i className="fas fa-envelope mr-2"></i>info@apexrouteconsultants.com</a></p>
              <p><a href="tel:+923398410100" target='_blank' rel='noreferrer'><i className="fas fa-phone mr-2"></i>+92 339 8410100</a></p>
            </address>
          </div>

        </div>

        <div className="border-t border-navy-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p className="text-white">&copy; {currentYear} Apex Route Consultants. All rights reserved.</p>
          <p className="mt-2 md:mt-0 text-white">Not a government agency. We provide professional consultation.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;