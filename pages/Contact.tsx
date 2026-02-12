import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom'; // Using Router Link for navigation
import { COUNTRIES } from '../constants';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({});

  // 1. Move formData to State so the checkbox can access it
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    visaCategory: 'Study Visa Guidance',
    country: '',
    details: '',
    agreed: false
  });

  // 2. Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = (data: typeof formData) => {
    const errors: { [key: string]: string } = {};
    if (!data.firstName) errors.firstName = "First name is required";
    if (!data.lastName) errors.lastName = "Last name is required";
    if (!data.email) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!data.phone) errors.phone = "Phone number is required";
    if (!data.country) errors.country = "Please select a country";
    if (!data.details || data.details.length < 10) {
      errors.details = "Please provide more details (min. 10 characters)";
    }
    if (!data.agreed) { 
      errors.agreed = "You must agree to the terms and conditions";
    }
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setFieldErrors({});

    // Client-side validation using the state
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setFieldErrors(validationErrors);
      setLoading(false);
      return;
    }

    try {
      const API_URL = import.meta.env.VITE_API_URL || '';
      const response = await fetch(`${API_URL}/api/send-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitted(true);
      } else {
        setError(result.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setError('Failed to connect to the server. Please ensure the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20 bg-neutral-100 min-h-screen flex flex-col">
      <div className="bg-navy-900 py-20 text-center rounded-b-[3rem] shadow-xl relative overflow-hidden shrink-0">
        <div className="absolute inset-0 bg-gold-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-4xl font-serif text-white mb-4 animate-fade-in-up">Consultation Request</h1>
          <p className="text-neutral-300 text-lg animate-fade-in-up delay-100">Submit your details to request a professional consultation.</p>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 -mt-16 pb-20 relative z-20 shrink-0">
        <div className="max-w-6xl mx-auto bg-white rounded-[3rem] shadow-2xl flex flex-col lg:flex-row overflow-hidden animate-fade-in-up delay-200">
          
          {/* Info Sidebar */}
          <div className="lg:w-2/5 bg-navy-900 p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none"></div>
            <div className="relative z-10 h-full flex flex-col">
              <h3 className="text-gold-500 uppercase tracking-[0.2em] text-sm font-bold mb-16">Contact Information</h3>
              <div className="space-y-12">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-navy-800 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-navy-900 transition-colors duration-300 shrink-0 shadow-lg border border-white/5">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="pt-1">
                    <p className="font-serif text-xl font-medium text-white mb-2">Headquarters</p>
                    <p className="text-neutral-400 text-base leading-relaxed">
                      Office No: LG12A, Big City Plaza<br />
                      Liberty Roundabout, Gulberg 3, Lahore
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-navy-800 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-navy-900 transition-colors duration-300 shrink-0 shadow-lg border border-white/5">
                    <a href="tel:+923398410100"><Phone className="w-6 h-6" /></a>
                  </div>
                  <div className="pt-1">
                    <p className="font-serif text-xl font-medium text-white mb-2">Phone</p>
                    <p className="text-neutral-400 text-base mb-1">+92 339 8410100</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-navy-800 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-navy-900 transition-colors duration-300 shrink-0 shadow-lg border border-white/5">
                    <a href="mailto:info@apexrouteconsultants.com"><Mail className="w-6 h-6" /></a>
                  </div>
                  <div className="pt-1">
                    <p className="font-serif text-xl font-medium text-white mb-2">Email</p>
                    <p className="text-neutral-400 text-base break-all">info@apexrouteconsultants.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:w-3/5 p-12 md:p-16 bg-white">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in min-h-[400px]">
                <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-green-600 text-4xl">✓</span>
                </div>
                <h3 className="text-3xl font-serif text-navy-900 mb-4">Request Received</h3>
                <p className="text-neutral-600 max-w-sm text-lg">
                  Thank you. A senior consultant will contact you within 24 business hours. Confirmation has been sent to your email.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 px-8 py-3 border border-neutral-200 text-neutral-500 rounded-full hover:bg-navy-900 hover:text-white transition-colors"
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="group">
                    <label className="block text-xs uppercase tracking-wider text-navy-900 font-bold mb-3 ml-4">First Name</label>
                    <input
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full bg-neutral-50 border-2 ${fieldErrors.firstName ? 'border-red-400' : 'border-neutral-200'} px-6 py-4 rounded-full text-navy-900 font-medium focus:outline-none focus:border-gold-500 transition-all`}
                      placeholder="Jonathan"
                    />
                    {fieldErrors.firstName && <span className="text-red-500 text-xs ml-4">{fieldErrors.firstName}</span>}
                  </div>
                  <div className="group">
                    <label className="block text-xs uppercase tracking-wider text-navy-900 font-bold mb-3 ml-4">Last Name</label>
                    <input
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full bg-neutral-50 border-2 ${fieldErrors.lastName ? 'border-red-400' : 'border-neutral-200'} px-6 py-4 rounded-full text-navy-900 font-medium focus:outline-none focus:border-gold-500 transition-all`}
                      placeholder="Doe"
                    />
                    {fieldErrors.lastName && <span className="text-red-500 text-xs ml-4">{fieldErrors.lastName}</span>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="group">
                    <label className="block text-xs uppercase tracking-wider text-navy-900 font-bold mb-3 ml-4">Email Address</label>
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-neutral-50 border-2 ${fieldErrors.email ? 'border-red-400' : 'border-neutral-200'} px-6 py-4 rounded-full text-navy-900 font-medium focus:outline-none focus:border-gold-500 transition-all`}
                      placeholder="name@example.com"
                    />
                    {fieldErrors.email && <span className="text-red-500 text-xs ml-4">{fieldErrors.email}</span>}
                  </div>
                  <div className="group">
                    <label className="block text-xs uppercase tracking-wider text-navy-900 font-bold mb-3 ml-4">Phone Number</label>
                    <input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full bg-neutral-50 border-2 ${fieldErrors.phone ? 'border-red-400' : 'border-neutral-200'} px-6 py-4 rounded-full text-navy-900 font-medium focus:outline-none focus:border-gold-500 transition-all`}
                      placeholder="+92 300 1234567"
                    />
                    {fieldErrors.phone && <span className="text-red-500 text-xs ml-4">{fieldErrors.phone}</span>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-navy-900 font-bold mb-3 ml-4">Visa Category</label>
                    <div className="relative">
                      <select name="visaCategory" value={formData.visaCategory} onChange={handleChange} className="w-full bg-neutral-50 border-2 border-neutral-200 px-6 py-4 rounded-full text-navy-900 font-medium focus:outline-none focus:border-gold-500 appearance-none cursor-pointer">
                        <option>Study Visa Guidance</option>
                        <option>Work Visa Assistance</option>
                        <option>Visit / Tourist Visa</option>
                        <option>Family Sponsorship</option>
                        <option>Business Investment</option>
                        <option>Other Inquiry</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">▼</div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-navy-900 font-bold mb-3 ml-4">Country of Interest</label>
                    <div className="relative">
                      <select name="country" value={formData.country} onChange={handleChange} className={`w-full bg-neutral-50 border-2 ${fieldErrors.country ? 'border-red-400' : 'border-neutral-200'} px-6 py-4 rounded-full text-navy-900 font-medium focus:outline-none focus:border-gold-500 appearance-none cursor-pointer`}>
                        <option value="">Select a Country</option>
                        {COUNTRIES.map(c => (
                          <option key={c.code} value={c.name}>{c.name}</option>
                        ))}
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">▼</div>
                    </div>
                    {fieldErrors.country && <span className="text-red-500 text-xs ml-4">{fieldErrors.country}</span>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-navy-900 font-bold mb-3 ml-4">Case Details</label>
                  <textarea
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full bg-neutral-50 border-2 ${fieldErrors.details ? 'border-red-400' : 'border-neutral-200'} px-6 py-4 rounded-3xl text-navy-900 font-medium focus:outline-none focus:border-gold-500 focus:bg-white transition-all duration-300 resize-none`}
                    placeholder="Briefly describe your situation..."
                  ></textarea>
                  {fieldErrors.details && <span className="text-red-500 text-xs ml-4">{fieldErrors.details}</span>}
                </div>

                {error && (
                  <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm border border-red-100 flex items-center gap-3">
                    <AlertCircle className="w-5 h-5" /> {error}
                  </div>
                )}

                <div className="pt-4">
                  <div className="flex items-start gap-3 mb-6">
                    <input
                      type="checkbox"
                      id="agreed"
                      name="agreed"
                      checked={formData.agreed}
                      onChange={handleChange}
                      className="mt-1 w-5 h-5 accent-navy-900 cursor-pointer"
                    />
                    <label htmlFor="agreed" className="text-sm text-neutral-600 leading-relaxed cursor-pointer">
                      I agree to the 
                      <Link to="/terms-conditions" className="text-navy-900 font-bold hover:text-gold-500 mx-1 underline">Terms & Conditions</Link> 
                      and 
                      <Link to="/privacy-policy" className="text-navy-900 font-bold hover:text-gold-500 mx-1 underline">Privacy Policy</Link>.
                    </label>
                  </div>
                  {fieldErrors.agreed && <p className="text-red-500 text-xs mb-4 ml-8">{fieldErrors.agreed}</p>}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full md:w-auto px-10 py-5 bg-navy-900 text-white font-bold uppercase tracking-widest text-sm hover:bg-gold-500 hover:text-navy-900 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 rounded-full flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                    ) : (
                      <>Submit Request <Send className="w-4 h-4" /></>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;