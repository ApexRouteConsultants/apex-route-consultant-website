import React from 'react';
import { Link } from 'react-router-dom';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      
      {/* Header */}
      <div className="bg-navy-900 py-20 relative overflow-hidden rounded-b-[3rem]">
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-6 animate-fade-in-up">The Consultation Process</h1>
          <p className="text-neutral-300 max-w-2xl mx-auto text-lg font-light animate-fade-in-up delay-100">
             Our methodology is designed to minimize error and maximize clarity. We treat every application as a legal project with strict milestones.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-24">
         <div className="max-w-4xl mx-auto">
             {PROCESS_STEPS.map((step, idx) => (
               <div key={step.number} className="flex flex-col md:flex-row gap-8 mb-16 relative group animate-fade-in-up" style={{ animationDelay: `${idx * 150}ms` }}>
                  {/* Connector Line */}
                  {idx !== PROCESS_STEPS.length - 1 && (
                    <div className="absolute left-[2.2rem] top-16 bottom-[-4rem] w-0.5 bg-neutral-200 md:block hidden"></div>
                  )}
                  
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-white border-4 border-gold-500 flex items-center justify-center shadow-xl z-10 relative group-hover:scale-110 transition-transform duration-300">
                       <span className="text-2xl font-serif font-bold text-navy-900">{step.number}</span>
                    </div>
                  </div>
                  
                  <div className="bg-neutral-50 p-8 rounded-[2rem] flex-grow border border-neutral-100 hover:border-gold-300 transition-colors shadow-sm hover:shadow-md">
                     <h3 className="text-2xl font-serif text-navy-900 mb-3">{step.title}</h3>
                     <p className="text-neutral-600 leading-relaxed text-lg">{step.description}</p>
                  </div>
               </div>
             ))}
         </div>

         <div className="text-center mt-12 animate-fade-in-up delay-500">
           <Link to="/contact" className="inline-block px-12 py-5 bg-navy-900 text-white font-bold rounded-full uppercase tracking-widest hover:bg-gold-500 hover:text-navy-900 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              Start This Process
           </Link>
         </div>
      </div>
    </div>
  );
};

export default Process;