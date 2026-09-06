import React from 'react';
import { indiaTourSeries, internationalTourSeries } from '../data/destinations.js';
import TourCard from './TourCard.jsx';

export function IndiaTourSeries() {
  return (
    <section id="india-tours" className="section-pad bg-mist">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">Explore India</p>
          <h2 className="h2-display mt-2">Curated tour series across incredible India</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {indiaTourSeries.map((t) => (
            <TourCard key={t.id} tour={t} kind="india" />
          ))}
        </div>
      </div>
    </section>
  );
}

export function InternationalTourSeries() {
  return (
    <section id="world-tours" className="section-pad bg-navy">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">See the world</p>
          <h2 className="h2-display mt-2 text-white">See the world with Kewatmark</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {internationalTourSeries.map((t) => (
            <TourCard key={t.id} tour={t} kind="world" />
          ))}
        </div>
      </div>
    </section>
  );
}
