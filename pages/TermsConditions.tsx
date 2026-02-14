import React from 'react';

const TermsConditions = () => {
  return (
    <div className="pt-32 pb-20 bg-neutral-50 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl bg-white p-12 rounded-3xl shadow-xl">
        <h1 className="text-4xl font-serif text-navy-900 mb-8 border-b-2 border-gold-500 pb-4">Terms & Conditions</h1>
        
        <p className="text-neutral-500 mb-6 italic">Last Updated: February 2026</p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-navy-900 mb-4">1. Scope of Services</h2>
          <p className="text-neutral-600">
            Apex Route Consultants provides immigration consulting, visa processing guidance, and document assessment. We do not guarantee the issuance of a visa, as this decision rests solely with the respective government authorities.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-navy-900 mb-4">2. Client Responsibilities</h2>
          <p className="text-neutral-600">
            Clients are responsible for providing accurate, truthful, and complete information. Any fraudulent documentation or misrepresentation will result in immediate termination of services without a refund.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-navy-900 mb-4">3. Fees and Payments</h2>
          <p className="text-neutral-600">
            Consultation fees are non-refundable once the assessment process has begun. Government visa application fees are separate and are paid directly to the relevant embassy or department.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-navy-900 mb-4">4. Limitation of Liability</h2>
          <p className="text-neutral-600">
            Apex Route Consultants shall not be held liable for any delays in processing times caused by government backlogs or changes in immigration policies.
          </p>
        </section>

        <div className="mt-12 pt-8 border-t border-neutral-100 text-center">
          <p className="text-neutral-400 text-sm">Agreement to these terms is required for all consultation requests.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;