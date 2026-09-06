import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { packages } from '../data/packages.js';
import { useApp } from '../context/AppContext.jsx';

export default function PackagesSection() {
  const [visible, setVisible] = useState(8);

  return (
    <section id="packages" className="section-pad bg-white">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">Travel packages</p>
          <h2 className="h2-display mt-2">Ready-made packages, refined to your pace</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {packages.slice(0, visible).map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        {visible < packages.length && (
          <div className="mt-10 text-center">
            <button onClick={() => setVisible(packages.length)} className="btn-navy">
              Show More Packages
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function PackageCard({ pkg }) {
  const { openBooking } = useApp();
  return (
    <div className="card-surface group overflow-hidden transition-transform duration-300 hover:-translate-y-1.5">
      <div className="relative h-44 w-full overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-wide text-navy shadow-card">
          {pkg.badge}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-lg text-navy">{pkg.name}</h3>
          <span className="flex items-center gap-1 text-xs font-semibold text-navy/60">
            <Star className="h-3.5 w-3.5 fill-gold text-gold" /> {pkg.rating}
          </span>
        </div>
        <p className="mt-1 text-xs text-navy/50">{pkg.destination}</p>
        <p className="mt-1 text-xs font-semibold text-royal">{pkg.nights}</p>
        <p className="mt-3 text-xs text-navy/55">{pkg.includes.join(' · ')}</p>
        <div className="mt-4 flex items-center justify-between border-t border-navy/10 pt-4">
          <div>
            <p className="font-display text-xl text-navy">Regional Price</p>
          </div>
          <button onClick={() => openBooking(pkg.name)} className="btn-navy !px-4 !py-2 text-xs">
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
}
