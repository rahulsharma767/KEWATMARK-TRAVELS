import React, { useMemo, useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import { hotelDestinations, hotelTypes, hotels } from '../data/hotels.js';
import HotelCard from './HotelCard.jsx';

const priceTiers = {
  All: Infinity,
  Budget: 8000,
  'Mid-range': 25000,
  Luxury: Infinity,
};

export default function HotelsSection() {
  const [destination, setDestination] = useState('All');
  const [type, setType] = useState('All');
  const [priceTier, setPriceTier] = useState('All');
  const [minRating, setMinRating] = useState(0);

  const filtered = useMemo(() => {
    return hotels.filter((h) => {
      if (destination !== 'All' && h.location !== destination) return false;
      if (type !== 'All' && h.type !== type) return false;
      if (priceTier === 'Budget' && h.price > priceTiers.Budget) return false;
      if (priceTier === 'Mid-range' && (h.price <= priceTiers.Budget || h.price > priceTiers['Mid-range'])) return false;
      if (priceTier === 'Luxury' && h.price <= priceTiers['Mid-range']) return false;
      if (h.rating < minRating) return false;
      return true;
    });
  }, [destination, type, priceTier, minRating]);

  return (
    <section id="hotels" className="section-pad bg-mist">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">Stay somewhere amazing</p>
          <h2 className="h2-display mt-2">From budget-friendly stays to luxury escapes</h2>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3 rounded-2xl bg-white p-4 shadow-card">
          <SlidersHorizontal className="h-4 w-4 text-navy/50" />
          <FilterSelect label="Destination" value={destination} onChange={setDestination} options={['All', ...hotelDestinations]} />
          <FilterSelect label="Hotel Type" value={type} onChange={setType} options={['All', ...hotelTypes]} />
          <FilterSelect
            label="Price Tier"
            value={priceTier}
            onChange={setPriceTier}
            options={['All', 'Budget', 'Mid-range', 'Luxury']}
          />
          <FilterSelect
            label="Min Rating"
            value={String(minRating)}
            onChange={(v) => setMinRating(Number(v))}
            options={['0', '4', '4.5']}
          />
        </div>

        <div className="mt-8">
          {filtered.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {filtered.map((h) => (
                <HotelCard key={h.id} hotel={h} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function FilterSelect({ label, value, onChange, options }) {
  return (
    <label className="flex items-center gap-2 text-sm text-navy/60">
      {label}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-lg border border-navy/15 bg-mist/60 px-2.5 py-1.5 text-sm font-medium text-navy focus-ring"
      >
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}

function EmptyState() {
  return (
    <div className="rounded-3xl border border-dashed border-navy/15 bg-white/60 py-16 text-center">
      <p className="font-display text-lg text-navy">No hotels match these filters</p>
      <p className="mt-1 text-sm text-navy/55">Try adjusting the price tier or hotel type.</p>
    </div>
  );
}
