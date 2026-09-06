import React from 'react';
import { Star } from 'lucide-react';
import { useApp } from '../context/AppContext.jsx';

export default function HotelCard({ hotel }) {
  const { openBooking } = useApp();
  return (
    <div className="card-surface group overflow-hidden">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={hotel.image}
          alt={hotel.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <span className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-navy shadow-card">
          <Star className="h-3.5 w-3.5 fill-gold text-gold" /> {hotel.rating}
        </span>
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-royal">{hotel.type}</p>
        <h3 className="mt-1 font-display text-lg text-navy">{hotel.name}</h3>
        <p className="text-sm text-navy/55">{hotel.location}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {hotel.amenities.slice(0, 3).map((a) => (
            <span key={a} className="rounded-full bg-mist px-2.5 py-1 text-[0.7rem] text-navy/65">
              {a}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-navy/10 pt-4">
          <div>
            <p className="font-display text-lg text-navy">Regional Price</p>
          </div>
          <button onClick={() => openBooking(hotel.name)} className="btn-navy !px-4 !py-2 text-sm">
            View Hotel
          </button>
        </div>
      </div>
    </div>
  );
}
