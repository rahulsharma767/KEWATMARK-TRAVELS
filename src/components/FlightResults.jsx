import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Clock, Plane, SlidersHorizontal } from 'lucide-react';
import { airlines, flightResults, getAirportName } from '../data/flights.js';
import { useApp } from '../context/AppContext.jsx';

const sortOptions = ['Recommended', 'Cheapest', 'Fastest'];

function durationToMinutes(d) {
  const m = d.match(/(\d+)h\s*(\d+)m/);
  if (!m) return 0;
  return Number(m[1]) * 60 + Number(m[2]);
}

export default function FlightResults() {
  const { flightSearch, openBooking } = useApp();
  const [airlineFilter, setAirlineFilter] = useState('All');
  const [stopsFilter, setStopsFilter] = useState('All');
  const [sort, setSort] = useState('Recommended');

  const results = useMemo(() => {
    let list = [...flightResults];
    if (airlineFilter !== 'All') list = list.filter((f) => f.airline.name === airlineFilter);
    if (stopsFilter === 'Non-stop') list = list.filter((f) => f.stops === 'Non-stop');
    if (stopsFilter === '1 Stop') list = list.filter((f) => f.stops.startsWith('1 Stop'));

    if (sort === 'Cheapest') list.sort((a, b) => a.price - b.price);
    if (sort === 'Fastest') list.sort((a, b) => durationToMinutes(a.duration) - durationToMinutes(b.duration));
    return list;
  }, [airlineFilter, stopsFilter, sort]);

  const params = flightSearch.params;

  return (
    <section id="flights" className="section-pad bg-white lg:pt-40">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">Flight search</p>
          <h2 className="h2-display mt-2">
            {params ? `${getAirportName(params.from)} → ${getAirportName(params.to)}` : 'Search flights across India and the world'}
          </h2>
          {params && (
            <p className="mt-2 text-sm text-navy/55">
              {params.tripType} · {params.travellers} traveller(s) · {params.travelClass}
              {params.depart ? ` · Departing ${params.depart}` : ''}
            </p>
          )}
          <p className="mt-3 text-xs text-navy/40">
            Flight details shown below are sample/demo data for illustration purposes only.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3 rounded-2xl bg-mist p-4 shadow-card">
          <SlidersHorizontal className="h-4 w-4 text-navy/50" />
          <FilterSelect
            label="Airline"
            value={airlineFilter}
            onChange={setAirlineFilter}
            options={['All', ...airlines.map((a) => a.name)]}
          />
          <FilterSelect label="Stops" value={stopsFilter} onChange={setStopsFilter} options={['All', 'Non-stop', '1 Stop']} />
          <div className="ml-auto flex items-center gap-2">
            {sortOptions.map((s) => (
              <button
                key={s}
                onClick={() => setSort(s)}
                className={`focus-ring rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  sort === s ? 'bg-navy text-white' : 'bg-white text-navy/60'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 space-y-4">
          {results.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-navy/15 py-16 text-center">
              <p className="font-display text-lg text-navy">No flights match these filters</p>
              <p className="mt-1 text-sm text-navy/55">Try a different airline or stop preference.</p>
            </div>
          ) : (
            results.map((f, i) => (
              <motion.div
                key={f.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: Math.min(i * 0.04, 0.3) }}
                className="card-surface flex flex-col gap-5 p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between"
              >
                <div className="flex items-center gap-4 lg:w-56">
                  <div
                    className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl text-white"
                    style={{ backgroundColor: f.airline.color }}
                  >
                    <Plane className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy">{f.airline.name}</p>
                    <p className="text-xs text-navy/50">{f.class}</p>
                  </div>
                </div>

                <div className="flex flex-1 items-center justify-between gap-4 lg:justify-center lg:gap-10">
                  <div className="text-center">
                    <p className="font-display text-lg text-navy">{f.dep}</p>
                    <p className="text-xs text-navy/50">{f.from}</p>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-navy/40">
                    <Clock className="h-3.5 w-3.5" />
                    <span className="text-[0.7rem]">{f.duration}</span>
                    <span className="h-px w-14 bg-navy/15 lg:w-20" />
                    <span className="text-[0.7rem]">{f.stops}</span>
                  </div>
                  <div className="text-center">
                    <p className="font-display text-lg text-navy">{f.arr}</p>
                    <p className="text-xs text-navy/50">{f.to}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-navy/50 lg:w-48">
                  <Briefcase className="h-3.5 w-3.5" /> {f.baggage}
                </div>

                <div className="flex items-center justify-between gap-4 lg:w-48 lg:flex-col lg:items-end">
                  <div className="text-right">
                    <p className="font-display text-2xl text-royal">Regional Price</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => openBooking(`${getAirportName(f.from)} to ${getAirportName(f.to)} · ${f.airline.name}`)}
                      className="btn-navy !px-4 !py-2 text-xs"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))
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
        className="rounded-lg border border-navy/15 bg-white px-2.5 py-1.5 text-sm font-medium text-navy focus-ring"
      >
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}
