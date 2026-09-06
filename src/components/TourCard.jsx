import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useApp } from '../context/AppContext.jsx';

export default function TourCard({ tour, kind }) {
  const { openBooking } = useApp();
  return (
    <div className="group relative overflow-hidden rounded-[24px] shadow-card">
      <div className="aspect-[4/5] w-full overflow-hidden">
        <img
          src={tour.image}
          alt={tour.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-gold">
          {kind === 'india' ? 'India Tour' : 'World Tour'}
        </p>
        <h3 className="mt-1 font-display text-lg text-white">{tour.name}</h3>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xs text-white/70">{tour.packages} packages</span>
          <button
            onClick={() => openBooking(tour.name)}
            aria-label={`Explore packages for ${tour.name}`}
            className="focus-ring flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white transition-colors group-hover:bg-gold group-hover:text-navy"
          >
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
