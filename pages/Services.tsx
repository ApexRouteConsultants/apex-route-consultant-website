import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { SERVICES, COUNTRIES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-50 pt-20">
      
      {/* Header */}
      <div className="bg-navy-900 py-20 relative overflow-hidden rounded-b-[3rem]">
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-6 animate-fade-in-up">Our Advisory Services</h1>
          <p className="text-neutral-300 max-w-2xl mx-auto text-lg font-light animate-fade-in-up delay-100">
            Specialized immigration guidance tailored to your specific goals and destination requirements.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-20 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <div 
              key={service.id} 
              className="bg-white p-8 rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex justify-between items-start mb-6">
                 <div className="w-16 h-16 bg-gradient-to-br from-navy-800 to-navy-900 rounded-2xl flex items-center justify-center text-gold-500 shadow-lg">
                    <service.icon className="w-8 h-8" />
                 </div>
                 <span className="px-3 py-1 bg-neutral-100 rounded-full text-xs font-bold text-neutral-500 uppercase tracking-wider">
                   Full Service
                 </span>
              </div>
              
              <h3 className="text-2xl font-serif text-navy-900 mb-3">{service.title}</h3>
              <p className="text-neutral-500 mb-8 leading-relaxed">
                {service.shortDescription}
              </p>
              
              <Link 
                to={`/services/${service.id}`}
                className="w-full py-4 rounded-xl border border-neutral-200 text-navy-900 font-medium hover:bg-gold-500 hover:border-gold-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                View Service Details 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Country Quick Links */}
      <section className="bg-white py-20 border-t border-neutral-100">
         <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-serif text-navy-900 mb-4">Browse by Destination</h2>
               <p className="text-neutral-500">View specific requirements for your country of interest.</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
               {COUNTRIES.map(country => (
                  <Link 
                     key={country.code} 
                     to={`/country/${country.code}`}
                     className="px-6 py-3 rounded-full border border-neutral-200 hover:border-gold-500 hover:bg-gold-500 hover:text-white hover:shadow-lg transition-all duration-300 flex items-center gap-3 group"
                  >
                     <img src={`https://flagcdn.com/w40/${country.code}.png`} className="w-6 h-4 object-cover rounded shadow-sm" alt="" />
                     <span className="font-medium">{country.name}</span>
                  </Link>
               ))}
            </div>
         </div>
      </section>
      
    </div>
  );
};

export default Services;