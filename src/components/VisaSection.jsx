import React from 'react';
import { FileCheck2, Stamp } from 'lucide-react';
import { visaCountries } from '../data/visa.js';
import { site } from '../data/site.js';
import { useApp } from '../context/AppContext.jsx';

export default function VisaSection() {
  const { openBooking } = useApp();

  return (
    <section id="visa" className="section-pad bg-navy text-white">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow">Visa assistance</p>
            <h2 className="h2-display mt-2 text-white">Your visa journey, simplified</h2>
            <p className="mt-4 max-w-lg text-white/70">
              Get professional guidance for your international travel plans. We help you understand
              documentation, application requirements and the overall visa process.
            </p>

            <div className="mt-6 flex items-start gap-3 rounded-2xl bg-white/5 p-4 text-sm text-white/70">
              <FileCheck2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
              <p>
                We provide visa assistance, application guidance and documentation support. Final approval is
                always at the discretion of the respective embassy or consulate.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={() => openBooking('Visa Assistance')} className="btn-primary">
                <Stamp className="h-4 w-4" /> Talk to a Visa Expert
              </button>
              <a href={`tel:${site.phonePrimaryTel}`} className="btn-outline">
                Call {site.phonePrimary}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {visaCountries.map((c) => (
              <button
                key={c.id}
                onClick={() => openBooking(`Visa — ${c.name}`)}
                className="focus-ring rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-left text-sm font-medium text-white/85 transition-colors hover:border-gold/50 hover:bg-white/10"
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
