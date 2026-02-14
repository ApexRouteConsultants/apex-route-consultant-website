import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Lock, 
  Globe, 
  FileText, 
  ChevronRight, 
  MapPin 
} from 'lucide-react';
import { SERVICES, COUNTRIES } from '../constants';

// Inside your Home component:

const Home: React.FC = () => {
  useEffect(() => {
    // This loops through your countries and tells the browser: 
    // "Start downloading these images now, don't wait for the user to scroll!"
    COUNTRIES.forEach((country) => {
      const img = new Image();
      img.src = country.heroImage;
    });
  }, []);
  return (
    <div className="flex flex-col bg-white">
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center bg-navy-900 overflow-hidden">
        {/* Instant-load CSS Pattern (Replacing external SVG map for speed) */}
        <div 
          className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: `radial-gradient(#c5a059 0.5px, transparent 0.5px)`, 
            backgroundSize: '30px 30px' 
          }}
        ></div>
        
        {/* Deep Navy Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/80 to-transparent"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-20">
          <div className="max-w-4xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-widest mb-8">
              <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
              Official Immigration Advisory
            </div>

            <h1 className="text-4xl md:text-7xl font-serif text-white leading-tight mb-8">
              Clear Visa Routes. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Professional Guidance.</span>
            </h1>

            <p className="text-lg text-neutral-300 font-light mb-10 max-w-xl border-l-4 border-gold-500 pl-6 leading-relaxed">
              Apex Route Consultants provides structured, ethical visa guidance for individuals and families. We navigate the complexities of global immigration with precision.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gold-500 text-navy-900 font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 rounded-full text-center shadow-lg shadow-gold-500/20"
              >
                Request Consultation
              </Link>
              <Link 
                to="/services" 
                className="px-8 py-4 border border-white/30 text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-all duration-300 rounded-full text-center backdrop-blur-sm"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-navy-900 border-t border-navy-800 py-12 relative z-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x divide-navy-700/50">
            <div>
              <p className="text-4xl font-serif text-gold-500 mb-2">1,000+</p>
              <p className="text-white/60 text-[10px] uppercase tracking-widest font-bold">Visa Approvals</p>
            </div>
            <div>
              <p className="text-4xl font-serif text-gold-500 mb-2">98%</p>
              <p className="text-white/60 text-[10px] uppercase tracking-widest font-bold">Success Rate</p>
            </div>
            <div>
              <p className="text-4xl font-serif text-gold-500 mb-2">10+</p>
              <p className="text-white/60 text-[10px] uppercase tracking-widest font-bold">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl font-serif text-gold-500 mb-2">25+</p>
              <p className="text-white/60 text-[10px] uppercase tracking-widest font-bold">Partner Countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="bg-white rounded-full shadow-2xl border border-neutral-100 py-8 px-12 hidden lg:block">
            <div className="grid grid-cols-4 divide-x divide-neutral-200">
              {[
                { icon: FileText, label: "Ethical Consultation" },
                { icon: CheckCircle, label: "Transparent Process" },
                { icon: Globe, label: "Global Visa Routes" },
                { icon: Lock, label: "Confidential Handling" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-center gap-3 text-navy-900">
                  <item.icon className="w-5 h-5 text-gold-500" />
                  <span className="text-xs uppercase tracking-widest font-bold">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE HIGHLIGHT */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl font-serif text-navy-900 mb-4">Our Expertise</h2>
              <div className="w-20 h-1.5 bg-gold-500 rounded-full"></div>
            </div>
            <Link to="/services" className="hidden md:flex items-center text-gold-600 font-bold uppercase tracking-widest text-xs hover:text-navy-900 transition-colors">
              All Services <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {SERVICES.slice(0, 3).map((service) => (
              <Link 
                key={service.id} 
                to={`/services/${service.id}`} 
                className="group bg-neutral-50 p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-neutral-100 hover:border-gold-200 flex flex-col h-full"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-navy-900 transition-colors duration-500">
                  <service.icon className="w-8 h-8 text-navy-900 group-hover:text-gold-500 transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-serif text-navy-900 mb-4">{service.title}</h3>
                <p className="text-neutral-500 text-sm mb-10 flex-grow leading-relaxed">{service.shortDescription}</p>
                <div className="flex items-center justify-between pt-6 border-t border-neutral-200">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 group-hover:text-navy-900 transition-colors">View Details</span>
                  <div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-white transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COUNTRIES SECTION - Removed Lazy Loading to fix last 4 images */}
      <section className="py-24 bg-navy-900 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Countries We Serve</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">Expert guidance for the world's most sought-after destinations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COUNTRIES.map((country) => (
              <Link 
                key={country.code} 
                to={`/country/${country.code}`} 
                className="group relative h-80 rounded-[2.5rem] overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-2"
              >
                {/* No Lazy Loading: Images will fetch immediately */}
                <img 
                  src={country.heroImage} 
                  alt={country.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent opacity-90 transition-opacity group-hover:opacity-70"></div>
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-serif text-white group-hover:text-gold-400 transition-colors">{country.name}</h3>
                  <div className="flex items-center gap-2 text-gold-500 text-[10px] font-bold uppercase tracking-tighter mt-3 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 transition-transform">
                    <MapPin className="w-3 h-3" /> Explore Details
                    <ChevronRight className="w-4 h-4 ml-2 font-bold" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto bg-neutral-50 p-12 md:p-20 rounded-[4rem] border border-neutral-100">
            <h2 className="text-4xl font-serif text-navy-900 mb-6">Ready to Start Your Journey?</h2>
            <p className="text-neutral-500 mb-10 text-lg leading-relaxed">
              Avoid procedural errors and application delays. Speak to a qualified consultant today.
            </p>
            <Link 
              to="/contact" 
              className="inline-block px-12 py-5 bg-navy-900 text-white font-bold tracking-widest uppercase hover:bg-gold-500 hover:text-navy-900 transition-all rounded-full shadow-2xl hover:scale-105"
            >
              Schedule Assessment
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;