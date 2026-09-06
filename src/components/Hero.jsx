import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, Luggage, Plane, PlaneTakeoff, Building2, Stamp } from 'lucide-react';
import { images } from '../data/images.js';
import { site } from '../data/site.js';
import FlightSearch from './FlightSearch.jsx';
import { useApp } from '../context/AppContext.jsx';

const trustItems = [
  { icon: PlaneTakeoff, label: 'Domestic Flights' },
  { icon: Globe2, label: 'International Flights' },
  { icon: Building2, label: 'Hotels' },
  { icon: Stamp, label: 'Visa Assistance' },
  { icon: Luggage, label: 'Custom Tours' },
];

export default function Hero() {
  const { openBooking } = useApp();

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative">
      <div className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16 sm:pb-20 lg:min-h-[92vh] lg:pb-48">
        <img
          src={images.heroPrimary}
          alt="Airplane wing above clouds at golden hour"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/60 to-navy" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/70 via-transparent to-navy/40" />

        <div className="container-x relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-white/90 backdrop-blur-md">
              <Plane className="h-3.5 w-3.5 text-gold" /> Domestic &amp; International Travel Partner
            </p>
            <h1 className="font-display text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              Flights to anywhere.
              <br />
              <span className="text-gold">Travel experiences you&rsquo;ll love.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/80 sm:text-lg">
              Domestic &amp; international flights, hotels, visas and complete travel assistance — all from one
              trusted travel partner.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button onClick={() => scrollTo('#flights')} className="btn-primary">
                Explore Flights
              </button>
              <button onClick={() => openBooking()} className="btn-outline">
                Plan My Trip
              </button>
              <a
                href={site.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline !border-[#25D366]/50 !bg-[#25D366]/15"
              >
                WhatsApp Us
              </a>
            </div>

            <a href={`tel:${site.phonePrimaryTel}`} className="mt-6 inline-block text-sm text-white/70 hover:text-gold">
              Or call us directly at <span className="font-semibold text-white">{site.phonePrimary}</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Trust strip */}
      <div className="container-x relative z-20 -mt-16 sm:-mt-20">
        <div className="grid grid-cols-2 gap-3 rounded-3xl bg-white/95 p-4 shadow-soft backdrop-blur-md sm:grid-cols-5 sm:p-5">
          {trustItems.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2 rounded-2xl px-2 py-3 text-center sm:flex-row sm:justify-center sm:gap-2.5">
              <Icon className="h-5 w-5 text-royal" />
              <span className="text-xs font-semibold text-navy/80 sm:text-sm">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating search widget */}
      <div className="container-x relative z-20 -mt-2 lg:mt-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-6 sm:mb-8 lg:-mb-32"
        >
          <FlightSearch />
        </motion.div>
      </div>
    </section>
  );
}
