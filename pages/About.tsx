import React from 'react';
import { Scale, Users, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20 bg-white min-h-screen">
      
      {/* Header */}
      <div className="bg-navy-900 py-24 text-center rounded-b-[3rem] relative overflow-hidden">
        <div className="absolute inset-0 bg-gold-500/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4 animate-fade-in-up">Firm Profile</h1>
          <p className="text-gold-500 uppercase tracking-[0.3em] text-sm animate-fade-in-up delay-100">Apex Route Consultants</p>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-20 max-w-5xl">
        
        <section className="mb-20 text-center max-w-3xl mx-auto animate-fade-in-up delay-200">
          <h2 className="text-3xl font-serif text-navy-900 mb-8">Who We Are</h2>
          <p className="text-neutral-600 leading-relaxed mb-6 text-lg">
            Apex Route Consultants is a specialized advisory firm focused on international mobility, visa acquisition, and immigration strategy. Unlike general travel agencies, we operate with a rigorous adherence to legal frameworks and procedural correctness.
          </p>
          <p className="text-neutral-600 leading-relaxed text-lg">
            Our team consists of senior consultants with deep expertise in the legislative requirements of North American, European, and Australasian jurisdictions. We serve individuals, families, and corporations requiring error-free immigration outcomes.
          </p>
        </section>

        <section className="mb-20">
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {[
               { icon: Scale, title: "Legislative Accuracy", desc: "We interpret immigration policy strictly, ensuring your application aligns with current laws." },
               { icon: Shield, title: "Ethical Integrity", desc: "We provide honest feasibility assessments. We do not support fraudulent documentation." },
               { icon: Users, title: "Client Confidentiality", desc: "Your personal data and documents are handled with the highest level of security." }
             ].map((item, idx) => (
                <div key={idx} className="bg-neutral-50 p-8 rounded-[2rem] hover:bg-white hover:shadow-xl transition-all duration-300 border border-neutral-100 text-center group">
                    <div className="w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-navy-900 transition-colors duration-500 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-8 h-8 text-navy-800 group-hover:text-gold-500 transition-colors duration-500 " />
                    </div>
                    <h3 className="text-xl font-medium text-navy-900 mb-3">{item.title}</h3>
                    <p className="text-neutral-500 leading-relaxed">{item.desc}</p>
                </div>
             ))}
           </div>
        </section>

        <section className="bg-navy-900 rounded-[3rem] p-12 text-center relative overflow-hidden text-white shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/black-felt.png')] opacity-50"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
             <h3 className="text-2xl font-serif mb-6 text-gold-400">Professional Commitment</h3>
             <p className="text-xl font-light italic mb-8 leading-relaxed">
                "Apex Route Consultants operates with transparency, accuracy, and respect for immigration regulations. We view every client file as a matter of significant personal importance."
             </p>
             <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full"></div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;