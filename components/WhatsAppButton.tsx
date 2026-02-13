import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "+923398410100"; // Your professional contact number
  const message = "Hello Apex Route Consultants, I would like to inquire about visa services.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[60] group flex items-center gap-3"
      aria-label="Chat on WhatsApp"
    >
      {/* Tooltip Label - Appears on Hover */}
      <span className="bg-navy-900 text-gold-500 text-xs font-bold py-2 px-4 rounded-full shadow-2xl border border-gold-500/20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 whitespace-nowrap hidden md:block">
        Chat with an Expert
      </span>

      {/* The Actual Button */}
      <div className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 relative">
        {/* Pulsing Ring Effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
        
        <MessageCircle className="w-8 h-8 relative z-10" fill="currentColor" />
      </div>
    </a>
  );
};

export default WhatsAppButton;