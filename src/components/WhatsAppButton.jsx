import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { site } from '../data/site.js';

export default function WhatsAppButton() {
  return (
    <div className="bottom-safe fixed right-5 z-40 flex flex-col-reverse items-end gap-3 sm:flex-col">
      <a
        href={`tel:${site.phonePrimaryTel}`}
        aria-label="Call Kewatmark Travels"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-white shadow-soft transition-transform hover:scale-105 sm:order-2"
      >
        <Phone className="h-5 w-5" />
      </a>
      <a
        href={site.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition-transform hover:scale-105 sm:order-1"
      >
        <MessageCircle className="h-6 w-6" fill="white" />
      </a>
    </div>
  );
}
