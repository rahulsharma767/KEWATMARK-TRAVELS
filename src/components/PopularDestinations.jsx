import React, { useState } from 'react';
import { domesticDestinations, internationalDestinations } from '../data/destinations.js';
import DestinationCarousel from './DestinationCarousel.jsx';

export default function PopularDestinations() {
  const [view, setView] = useState('domestic');

  return (
    <section id="destinations" className="section-pad bg-white">
      <div className="container-x">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Popular destinations</p>
            <h2 className="h2-display mt-2">Places our travellers love</h2>
          </div>
          <div className="flex gap-2 self-start rounded-full border border-navy/10 bg-mist p-1">
            {['domestic', 'international'].map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`focus-ring rounded-full px-4 py-2 text-sm font-semibold capitalize transition-colors ${
                  view === v ? 'bg-navy text-white' : 'text-navy/60'
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <DestinationCarousel items={view === 'domestic' ? domesticDestinations : internationalDestinations} />
        </div>
      </div>
    </section>
  );
}
