import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ShieldCheck, ArrowLeft, FileText, Calendar, CheckCircle } from 'lucide-react';
import { SERVICES } from '../constants';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find(s => s.id === id);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = service.icon;

  return (
    <div className="pt-20 bg-neutral-50 min-h-screen pb-24">
      {/* Header Bar */}
      <div className="bg-navy-900 text-white py-16 rounded-b-[3rem] relative overflow-hidden">
        <div className="absolute inset-0 bg-gold-500/5"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <Link to="/services" className="inline-flex items-center text-gold-500 text-xs uppercase tracking-widest mb-8 hover:text-white transition-colors bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
            <ArrowLeft className="w-3 h-3 mr-2" /> Back to Services
          </Link>
          <div className="flex flex-col md:flex-row md:items-center gap-6 animate-fade-in-up">
            <div className="w-16 h-16 bg-gold-500 rounded-2xl flex items-center justify-center shadow-lg text-navy-900">
              <Icon className="w-8 h-8" />
            </div>
            <h1 className="text-3xl md:text-5xl font-serif">{service.title}</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 -mt-12 relative z-20">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden max-w-5xl mx-auto animate-fade-in-up delay-100">

          {/* Main Content */}
          <div className="p-8 md:p-12 lg:p-16">

            <section className="mb-12">
              <h2 className="text-sm font-bold text-navy-900 uppercase tracking-wider mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-gold-500"></span> Overview
              </h2>
              <p className="text-neutral-600 leading-relaxed text-lg">
                {service.fullDescription}
              </p>
            </section>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <section className="bg-neutral-50 p-8 rounded-3xl">
                <h2 className="text-sm font-bold text-navy-900 uppercase tracking-wider mb-6 flex items-center gap-3">
                  <span className="w-2 h-2 bg-gold-500 rounded-full"></span> Eligibility
                </h2>
                <ul className="space-y-4">
                  {service.eligibility.map((item, idx) => (
                    <li key={idx} className="flex items-start text-neutral-600 font-medium">
                      <span className="w-6 h-6 rounded-full bg-white border border-gold-200 flex items-center justify-center text-gold-500 text-xs mr-3 shadow-sm flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="bg-neutral-50 p-8 rounded-3xl">
                <h2 className="text-sm font-bold text-navy-900 uppercase tracking-wider mb-6 flex items-center gap-3">
                  <span className="w-2 h-2 bg-navy-500 rounded-full"></span> Documents
                </h2>
                <ul className="space-y-4">
                  {service.documents.map((doc, idx) => (
                    <li key={idx} className="flex items-start text-neutral-600 font-medium">
                      <FileText className="w-5 h-5 text-navy-400 mr-3 flex-shrink-0" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Trust Building / Commitment Box */}
            <div className="bg-navy-900 text-white p-8 rounded-3xl flex flex-col md:flex-row items-start gap-5 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gold-500/10 rounded-full -mr-20 -mt-20 blur-xl"></div>
              <ShieldCheck className="w-8 h-8 text-gold-500 flex-shrink-0 mt-1 relative z-10" />
              <div className="relative z-10 w-full">
                <h4 className="text-gold-500 font-serif text-lg mb-3">Commitment to Excellence</h4>
                <p className="text-neutral-300 text-base leading-relaxed mb-4">
                  We maintain an industry-leading success rate by adhering to a rigorous, multi-stage audit process. While final decisions rest with government authorities, our precise legal structuring minimizes rejection risks and ensures your case is presented with the highest probability of approval.
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-white/80">
                  <span className="flex items-center gap-2 whitespace-nowrap"><CheckCircle className="w-4 h-4 text-green-400" /> 98% Success Rate</span>
                  <span className="flex items-center gap-2 whitespace-nowrap"><CheckCircle className="w-4 h-4 text-green-400" /> Authorized Consultants</span>
                </div>
              </div>
            </div>

          </div>

          {/* Action Footer within card */}
          <div className="bg-neutral-100 p-10 flex flex-col md:flex-row justify-between items-center gap-8 text-navy-900 relative overflow-hidden border-t border-neutral-200">
            <div className="relative z-10">
              <p className="text-xl font-serif mb-2">Ready to proceed with this visa?</p>
              <p className="text-neutral-500">Book a detailed assessment with a senior consultant.</p>
            </div>
            <Link
              to="/contact"
              className="relative z-10 px-8 py-4 bg-gold-500 text-navy-900 font-bold rounded-full uppercase tracking-widest hover:bg-navy-900 hover:text-white hover:scale-105 transition-all duration-300 shadow-lg w-full md:w-auto text-center flex items-center justify-center gap-3"
            >
              <Calendar className="w-4 h-4" /> Book Assessment
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;