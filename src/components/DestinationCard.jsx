import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useApp } from '../context/AppContext.jsx';

export default function DestinationCard({ destination }) {
  const { openBooking } = useApp();
  return (
    <div className="group relative h-80 w-64 flex-shrink-0 overflow-hidden rounded-[24px] shadow-card sm:w-72">
      <img
        src={destination.image}
        alt={destination.name}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-gold">{destination.region}</p>
        <h3 className="mt-1 font-display text-2xl text-white">{destination.name}</h3>
        <p className="mt-1.5 line-clamp-2 text-xs text-white/75">{destination.desc}</p>
        <button
          onClick={() => openBooking(destination.name)}
          className="focus-ring mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors group-hover:text-gold"
        >
          Explore
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </div>
  );
}
