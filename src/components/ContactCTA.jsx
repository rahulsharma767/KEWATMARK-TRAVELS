import React from 'react';
import { MessageCircle, Phone, Send } from 'lucide-react';
import { site } from '../data/site.js';
import { useApp } from '../context/AppContext.jsx';

export default function ContactCTA() {
  const { openBooking } = useApp();

  return (
    <section className="section-pad bg-navy-gradient text-white">
      <div className="container-x text-center">
        <h2 className="h2-display mx-auto max-w-2xl text-white">Ready to plan your next journey?</h2>
        <p className="mx-auto mt-3 max-w-xl text-white/75">
          Tell us where you want to go. We&rsquo;ll help you plan the rest.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href={`tel:${site.phonePrimaryTel}`} className="btn-primary">
            <Phone className="h-4 w-4" /> Call {site.phonePrimary}
          </a>
          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline !border-[#25D366]/50 !bg-[#25D366]/15"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp Us
          </a>
          <button onClick={() => openBooking()} className="btn-outline">
            <Send className="h-4 w-4" /> Send Enquiry
          </button>
        </div>
      </div>
    </section>
  );
}
