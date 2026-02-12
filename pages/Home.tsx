import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Lock, Globe, FileText, ChevronRight, MapPin } from 'lucide-react';
import { SERVICES, COUNTRIES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center bg-navy-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-2/3 h-full opacity-10 animate-pulse-slow pointer-events-none">
          <div className="w-full h-full bg-no-repeat bg-right bg-contain" style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')", filter: 'invert(1)' }}></div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/95 to-navy-900/30"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-20">
          <div className="max-w-4xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-medium uppercase tracking-widest mb-8">
              <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
              Official Immigration Advisory
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] mb-8">
              Clear Visa Routes. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Professional Guidance.</span>
            </h1>

            <p className="text-lg text-neutral-300 font-light mb-10 max-w-xl leading-relaxed pl-1 border-l-4 border-gold-500">
              Apex Route Consultants provides structured, ethical visa guidance for individuals and families. We navigate the complexities of global immigration with precision.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                to="/contact"
                className="px-10 py-4 bg-gold-500 text-navy-900 font-semibold tracking-widest uppercase hover:bg-white hover:scale-105 transition-all duration-300 text-center rounded-full shadow-lg shadow-gold-500/20"
              >
                Request Consultation
              </Link>
              <Link
                to="/services"
                className="px-10 py-4 border border-white/30 text-white font-medium tracking-widest uppercase hover:bg-white/10 hover:border-white hover:scale-105 transition-all duration-300 text-center rounded-full backdrop-blur-sm"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION (Trust Building) */}
      <section className="bg-navy-900 border-t border-navy-800 py-12 relative z-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x divide-navy-600/50">
            <div className="p-4">
              <p className="text-4xl md:text-5xl font-serif text-gold-500 mb-2">5,000+</p>
              <p className="text-white/70 text-xs uppercase tracking-[0.2em]">Visa Approvals</p>
            </div>
            <div className="p-4">
              <p className="text-4xl md:text-5xl font-serif text-gold-500 mb-2">98%</p>
              <p className="text-white/70 text-xs uppercase tracking-[0.2em]">Success Rate</p>
            </div>
            <div className="p-4">
              <p className="text-4xl md:text-5xl font-serif text-gold-500 mb-2">12+</p>
              <p className="text-white/70 text-xs uppercase tracking-[0.2em]">Years Experience</p>
            </div>
            <div className="p-4">
              <p className="text-4xl md:text-5xl font-serif text-gold-500 mb-2">25+</p>
              <p className="text-white/70 text-xs uppercase tracking-[0.2em]">Partner Countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto">
          {/* Desktop/Large View */}
          <div className="bg-white rounded-full shadow-2xl border border-neutral-100 py-6 px-12 animate-fade-in-up delay-100 hidden lg:block">
            <div className="grid grid-cols-4 divide-x divide-neutral-200">
              {[
                { icon: FileText, label: "Ethical Consultation" },
                { icon: CheckCircle, label: "Transparent Process" },
                { icon: Globe, label: "Global Visa Routes" },
                { icon: Lock, label: "Confidential Handling" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-center gap-3 text-navy-800">
                  <item.icon className="w-5 h-5 text-gold-500" />
                  <span className="text-xs uppercase tracking-widest font-semibold">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tablet/Mobile View (Grid) */}
          <div className="lg:hidden grid grid-cols-2 md:grid-cols-2 gap-4 animate-fade-in-up delay-100">
            {[
              { icon: FileText, label: "Ethical Consultation" },
              { icon: CheckCircle, label: "Transparent Process" },
              { icon: Globe, label: "Global Visa Routes" },
              { icon: Lock, label: "Confidential Handling" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-4 shadow-lg flex flex-col items-center text-center gap-2 border border-neutral-100">
                <item.icon className="w-6 h-6 text-gold-500" />
                <span className="text-xs uppercase tracking-widest font-semibold text-navy-800">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE HIGHLIGHT */}
      <section className="pb-20 bg-neutral-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-serif text-navy-900 mb-4">Our Expertise</h2>
              <div className="w-20 h-1.5 bg-gold-500 rounded-full mx-auto md:mx-0"></div>
            </div>
            <Link to="/services" className="hidden md:flex items-center text-gold-600 font-medium uppercase tracking-wider hover:text-navy-900 transition-colors">
              View All Services <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          {/* Responsive Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service, index) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="group relative bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-gold-100 hover:-translate-y-2 flex flex-col h-full"
              >
                {/* Top Decoration Line */}
                <div className="absolute top-0 left-10 right-10 h-1 bg-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                {/* Icon */}
                <div className="w-16 h-16 bg-neutral-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-navy-900 transition-colors duration-500">
                  <service.icon className="w-8 h-8 text-navy-900 group-hover:text-gold-500 transition-colors duration-500" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-serif text-navy-900 mb-4">{service.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed mb-10 flex-grow">
                  {service.shortDescription}
                </p>

                {/* Bottom Action Area */}
                <div className="flex items-center justify-between pt-6 border-t border-neutral-100 group-hover:border-transparent transition-colors mt-auto">
                  <span className="text-xs font-bold tracking-widest uppercase text-neutral-400 group-hover:text-navy-900 transition-colors">
                    View Details
                  </span>
                  <div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:bg-gold-500 group-hover:border-gold-500 group-hover:text-white transition-all duration-300 shadow-sm">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link to="/services" className="inline-block px-8 py-3 bg-navy-900 text-white rounded-full uppercase tracking-wider text-sm font-medium">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* GLOBAL REACH - NEW CARD DESIGN */}
      <section className="py-24 bg-navy-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/black-felt.png')] opacity-30"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif mb-6">Countries We Serve</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto text-lg font-light">
              Expert guidance for the world's most sought-after destinations. Select a country to view specific visa requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {COUNTRIES.map((country) => (
              <Link
                key={country.code}
                to={`/country/${country.code}`}
                className="group relative h-80 rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-gold-500/20 transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Background Image - Lazy Loaded */}
                <img
                  src={country.heroImage}
                  alt={country.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/60 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  {/* Top: Flag */}
                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center overflow-hidden">
                      <img
                        src={`https://flagcdn.com/w80/${country.code}.png`}
                        alt={`${country.name} flag`}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Hover Arrow Button - Visible by default on Mobile, Hover on Desktop */}
                    <div className="w-10 h-10 rounded-full bg-gold-500 text-navy-900 flex items-center justify-center shadow-lg transition-all duration-300 transform lg:opacity-0 lg:translate-y-4 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Bottom: Text */}
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-2 mb-2 text-gold-400 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      <MapPin className="w-3 h-3" /> Explore
                    </div>
                    <h3 className="text-2xl font-serif font-medium text-white mb-1 group-hover:text-gold-200 transition-colors">{country.name}</h3>
                    <p className="text-neutral-300 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto transition-all duration-300 delay-75">
                      {country.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 text-gold-500 hover:text-white transition-colors border-b border-gold-500 pb-1 text-sm font-medium uppercase tracking-widest">
              Looking for another destination? Contact Us <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-24 bg-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gold-50 opacity-50 rounded-[3rem] m-4"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif text-navy-900 mb-6">Start Your Application</h2>
          <p className="text-neutral-500 max-w-xl mx-auto mb-10 text-lg">
            Avoid procedural errors. Speak to a qualified consultant today.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-5 bg-navy-900 text-white font-bold tracking-widest uppercase hover:bg-gold-500 hover:text-navy-900 hover:scale-105 hover:shadow-xl transition-all duration-300 rounded-full"
          >
            Schedule Assessment
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;