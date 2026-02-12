import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="pt-32 pb-20 bg-neutral-50 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl bg-white p-12 rounded-3xl shadow-xl">
        <h1 className="text-4xl font-serif text-navy-900 mb-8 border-b-2 border-gold-500 pb-4">Privacy Policy</h1>
        
        <p className="text-neutral-500 mb-6 italic">Last Updated: February 2026</p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-navy-900 mb-4">1. Information We Collect</h2>
          <p className="text-neutral-600 mb-4">
            At <strong>Apex Route Consultants</strong>, we collect personal information necessary to provide immigration and visa consulting services. This includes:
          </p>
          <ul className="list-disc pl-6 text-neutral-600 space-y-2">
            <li>Full Name and contact details (Email, Phone Number).</li>
            <li>Passport details and nationality.</li>
            <li>Educational and professional history.</li>
            <li>Case-specific details provided via our consultation forms.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-navy-900 mb-4">2. How We Use Your Data</h2>
          <p className="text-neutral-600">
            Your data is used solely to assess your visa eligibility and communicate with you regarding your application. We do not sell your data to third-party marketing agencies.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-navy-900 mb-4">3. Data Security</h2>
          <p className="text-neutral-600">
            We implement high-level security measures to protect your sensitive documents. Our website uses SSL encryption, and all data submitted via forms is stored securely.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-navy-900 mb-4">4. Your Rights</h2>
          <p className="text-neutral-600">
            You have the right to request a copy of the data we hold about you or request its deletion at any time by contacting us at <strong>info@apexrouteconsultants.com</strong>.
          </p>
        </section>

        <div className="mt-12 pt-8 border-t border-neutral-100 text-center">
          <p className="text-neutral-400 text-sm">© 2026 Apex Route Consultants. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;