import React from 'react';
import { Sparkles } from 'lucide-react';
import { specialOffers } from '../data/destinations.js';
import { useApp } from '../context/AppContext.jsx';

export default function SpecialOffers() {
  const { openBooking } = useApp();

  return (
    <section id="offers" className="section-pad bg-white">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">Special offers</p>
          <h2 className="h2-display mt-2">Handpicked deals, valid for a limited time</h2>
          <p className="mt-3 text-sm text-navy/55">
            Sample offers shown for illustration — final details depend on travel dates and availability.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {specialOffers.map((offer) => (
            <div key={offer.id} className="card-surface group overflow-hidden">
              <div className="relative h-52 w-full overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-gold px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-navy shadow-gold">
                  <Sparkles className="h-3 w-3" /> {offer.badge}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl text-navy">{offer.title}</h3>
                  <span className="text-xs font-semibold text-navy/50">{offer.duration}</span>
                </div>
                <p className="mt-2 text-sm text-navy/60">
                  {offer.includes.join(' · ')}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="font-display text-2xl text-royal">Regional Price</p>
                  </div>
                  <button onClick={() => openBooking(offer.title)} className="btn-navy !px-5 !py-2.5 text-sm">
                    View Package
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
