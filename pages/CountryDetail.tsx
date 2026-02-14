import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, CreditCard, FileText, CheckCircle, ShieldCheck, Calendar, Info } from 'lucide-react';
import { COUNTRIES } from '../constants';

const CountryDetail: React.FC = () => {
  const { code } = useParams<{ code: string }>();
  const country = COUNTRIES.find(c => c.code === code);

  if (!country) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="bg-neutral-50 min-h-screen">
      
      {/* HERO SECTION */}
      <div className="relative h-[60vh] md:h-[77vh] w-full overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${country.heroImage}')` }}
        >
          <div className="absolute inset-0 bg-navy-900/60 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-50 via-transparent to-navy-900/50"></div>
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
           <div className="container mx-auto px-6 lg:px-12 pt-20">
              <Link to="/" className="inline-flex items-center text-white/80 hover:text-gold-500 transition-colors mb-8 text-sm uppercase tracking-widest font-medium backdrop-blur-md bg-white/5 px-4 py-2 rounded-full border border-white/10">
                 <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
              </Link>
              
              <div className="flex flex-col md:flex-row items-start md:items-end gap-6 animate-fade-in-up">
                 <div className="w-24 h-16 md:w-32 md:h-20 rounded-xl overflow-hidden shadow-2xl border-4 border-white/10 shrink-0">
                    <img 
                      src={`https://flagcdn.com/w320/${country.code}.png`} 
                      alt={`${country.name} Flag`} 
                      className="w-full h-full object-cover"
                    />
                 </div>
                 <div className="mb-2">
                    <span className="text-gold-400 font-bold uppercase tracking-[0.2em] text-sm block ">Immigration Guide</span>
                    <h1 className="text-3xl md:text-6xl font-serif text-white">{country.name}</h1>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* MAIN CONTENT GRID */}
      <div className="container mx-auto px-6 lg:px-12 -mt-24 relative z-10 pb-20">
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* LEFT COLUMN (Details) */}
            <div className="lg:col-span-2 space-y-8 animate-fade-in-up delay-100">
               
               {/* Intro Card */}
               <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl">
                  <h2 className="text-2xl font-serif text-navy-900 mb-4">Overview</h2>
                  <p className="text-neutral-600 leading-relaxed text-lg mb-6">
                    {country.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div className="bg-neutral-50 p-4 rounded-2xl flex items-center gap-3 border border-neutral-100">
                        <div className="w-10 h-10 bg-gold-100 rounded-full flex items-center justify-center text-gold-600">
                           <Clock className="w-5 h-5" />
                        </div>
                        <div>
                           <p className="text-xs text-neutral-400 uppercase tracking-wider font-bold">Processing Time</p>
                           <p className="text-navy-900 font-medium">{country.processingTime}</p>
                        </div>
                     </div>
                     <div className="bg-neutral-50 p-4 rounded-2xl flex items-center gap-3 border border-neutral-100">
                        <div className="w-10 h-10 bg-navy-100 rounded-full flex items-center justify-center text-navy-600">
                           <CreditCard className="w-5 h-5" />
                        </div>
                        <div>
                           <p className="text-xs text-neutral-400 uppercase tracking-wider font-bold">Govt Fees (Est)</p>
                           <p className="text-navy-900 font-medium">{country.fees}</p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Visa Categories */}
               <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl">
                  <h2 className="text-2xl font-serif text-navy-900 mb-8 flex items-center gap-3">
                     <span className="w-8 h-1 bg-gold-500 rounded-full"></span> Visa Categories
                  </h2>
                  <div className="grid gap-6">
                     {country.visaCategories.map((visa, idx) => (
                        <div key={idx} className="group border border-neutral-100 hover:border-gold-500/30 bg-neutral-50 hover:bg-white p-6 rounded-3xl transition-all duration-300">
                           <h3 className="text-lg font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">{visa.title}</h3>
                           <p className="text-neutral-500 text-sm leading-relaxed">{visa.description}</p>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Application Process */}
               <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl">
                   <h2 className="text-2xl font-serif text-navy-900 mb-8 flex items-center gap-3">
                     <span className="w-8 h-1 bg-gold-500 rounded-full"></span> Application Process
                  </h2>
                  <div className="space-y-8">
                     {country.process.map((step, idx) => (
                        <div key={idx} className="flex gap-6 relative">
                           {/* Line */}
                           {idx !== country.process.length - 1 && (
                              <div className="absolute left-[19px] top-10 bottom-[-32px] w-0.5 bg-neutral-200"></div>
                           )}
                           
                           <div className="shrink-0 w-10 h-10 rounded-full bg-navy-900 text-white flex items-center justify-center font-bold font-serif shadow-lg z-10 ring-4 ring-white">
                              {idx + 1}
                           </div>
                           <div className="pt-2">
                              <h4 className="text-lg font-medium text-navy-900 mb-1">{step}</h4>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

            </div>

            {/* RIGHT COLUMN (Sidebar) */}
            <div className="lg:col-span-1 space-y-6 animate-fade-in-up delay-200">
               
               {/* Documents Widget */}
               <div className="bg-navy-900 text-white p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full -mr-16 -mt-16 blur-xl"></div>
                  
                  <h3 className="text-xl font-serif mb-6 flex items-center gap-2">
                     <FileText className="w-5 h-5 text-gold-500" /> Key Documents
                  </h3>
                  <ul className="space-y-4 relative z-10">
                     {country.documents.map((doc, idx) => (
                        <li key={idx} className="flex items-start text-sm text-neutral-300">
                           <CheckCircle className="w-4 h-4 text-gold-500 mr-3 shrink-0 mt-0.5" />
                           {doc}
                        </li>
                     ))}
                  </ul>
                  <div className="mt-8 pt-6 border-t border-white/10 text-xs text-neutral-400 italic flex gap-2">
                     <Info className="w-4 h-4 shrink-0" />
                     Document list varies by specific visa stream.
                  </div>
               </div>

               {/* CTA Widget */}
               <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-neutral-100 text-center">
                  <div className="w-16 h-16 bg-gold-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gold-600">
                     <ShieldCheck className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-serif text-navy-900 mb-3">Expert Assistance</h3>
                  <p className="text-neutral-500 text-sm mb-6">
                     Navigating {country.name}'s immigration law requires precision. Let our experts handle your file.
                  </p>
                  <Link 
                     to="/contact" 
                     className="block w-full py-4 bg-navy-900 text-white font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-gold-500 hover:text-navy-900 transition-colors shadow-lg"
                  >
                     Book Consultation
                  </Link>
               </div>

            </div>
         </div>
      </div>

    </div>
  );
};

export default CountryDetail;