import React, { useState } from 'react';
import { ArrowLeftRight, Calendar, Hotel as HotelIcon, Map, PlaneTakeoff, Search, Stamp, Users } from 'lucide-react';
import { destinationAirports, getAirportName, originAirports, travelClasses } from '../data/flights.js';
import { useApp } from '../context/AppContext.jsx';

const tabs = [
  { id: 'flights', label: 'Flights', icon: PlaneTakeoff },
  { id: 'hotels', label: 'Hotels', icon: HotelIcon },
  { id: 'tours', label: 'Tours', icon: Map },
  { id: 'visa', label: 'Visa', icon: Stamp },
];

export default function FlightSearch() {
  const [tab, setTab] = useState('flights');
  const { runFlightSearch } = useApp();
  const [tripType, setTripType] = useState('Round Trip');
  const [from, setFrom] = useState('BOM');
  const [to, setTo] = useState('DEL');
  const [depart, setDepart] = useState('');
  const [ret, setRet] = useState('');
  const [travellers, setTravellers] = useState(1);
  const [travelClass, setTravelClass] = useState('Economy');

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    runFlightSearch({ tripType, from, to, depart, ret, travellers, travelClass });
  };

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="w-full rounded-[28px] bg-white/95 p-5 shadow-soft backdrop-blur-xl sm:p-7">
      <div className="flex flex-wrap gap-2 border-b border-navy/10 pb-4">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className={`focus-ring flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              tab === id ? 'bg-navy text-white' : 'text-navy/60 hover:bg-mist'
            }`}
          >
            <Icon className="h-4 w-4" /> {label}
          </button>
        ))}
      </div>

      {tab === 'flights' && (
        <form onSubmit={handleSubmit} className="mt-5">
          <div className="mb-4 flex gap-2">
            {['Round Trip', 'One Way', 'Multi City'].map((t) => (
              <button
                type="button"
                key={t}
                onClick={() => setTripType(t)}
                className={`focus-ring rounded-full border px-4 py-1.5 text-xs font-semibold ${
                  tripType === t
                    ? 'border-royal bg-royal/10 text-royal'
                    : 'border-navy/15 text-navy/50 hover:border-navy/30'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-6">
            <div className="flex items-end gap-2 sm:col-span-2 lg:col-span-2">
              <div className="min-w-0 flex-1">
                <SelectField label="From" value={from} onChange={setFrom} options={originAirports} />
              </div>
              <button
                type="button"
                onClick={swap}
                aria-label="Swap origin and destination"
                className="focus-ring mb-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-navy/15 bg-mist text-royal transition-transform hover:rotate-180"
              >
                <ArrowLeftRight className="h-4 w-4" />
              </button>
              <div className="min-w-0 flex-1">
                <SelectField label="To" value={to} onChange={setTo} options={destinationAirports.filter((d) => d !== from)} />
              </div>
            </div>
            <DateField label="Departure" value={depart} onChange={setDepart} />
            {tripType === 'Round Trip' && <DateField label="Return" value={ret} onChange={setRet} />}
            <NumberField label="Travellers" value={travellers} onChange={setTravellers} icon={Users} />
          </div>

          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <SelectField label="Class" value={travelClass} onChange={setTravelClass} options={travelClasses} />
            <div className="flex items-end">
              <button type="submit" className="btn-primary w-full">
                <Search className="h-4 w-4" /> Search Flights
              </button>
            </div>
          </div>
        </form>
      )}

      {tab === 'hotels' && (
        <div className="mt-5">
          <p className="text-sm text-navy/60">
            Browse curated stays from budget-friendly to luxury, across India and popular international destinations.
          </p>
          <button onClick={() => scrollTo('#hotels')} className="btn-primary mt-4">
            <HotelIcon className="h-4 w-4" /> Explore Hotels
          </button>
        </div>
      )}

      {tab === 'tours' && (
        <div className="mt-5">
          <p className="text-sm text-navy/60">
            Discover curated tour series across India and international destinations, or build a fully custom itinerary.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button onClick={() => scrollTo('#india-tours')} className="btn-primary">
              <Map className="h-4 w-4" /> India Tours
            </button>
            <button onClick={() => scrollTo('#world-tours')} className="btn-navy">
              International Tours
            </button>
          </div>
        </div>
      )}

      {tab === 'visa' && (
        <div className="mt-5">
          <p className="text-sm text-navy/60">
            Get guidance on documentation and the application process for popular international destinations.
          </p>
          <button onClick={() => scrollTo('#visa')} className="btn-primary mt-4">
            <Stamp className="h-4 w-4" /> Visa Assistance
          </button>
        </div>
      )}
    </div>
  );
}

function SelectField({ label, value, onChange, options }) {
  return (
    <label className="block text-left">
      <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-navy/45">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-navy/15 bg-mist/70 px-3 py-2.5 text-sm font-medium text-navy focus-ring focus-visible:border-royal"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o} {getAirportName(o) !== o ? `— ${getAirportName(o)}` : ''}
          </option>
        ))}
      </select>
    </label>
  );
}

function DateField({ label, value, onChange }) {
  return (
    <label className="block text-left">
      <span className="mb-1 flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-navy/45">
        <Calendar className="h-3 w-3" /> {label}
      </span>
      <input
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-navy/15 bg-mist/70 px-3 py-2.5 text-sm font-medium text-navy focus-ring focus-visible:border-royal"
      />
    </label>
  );
}

function NumberField({ label, value, onChange, icon: Icon }) {
  return (
    <label className="block text-left">
      <span className="mb-1 flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-navy/45">
        <Icon className="h-3 w-3" /> {label}
      </span>
      <input
        type="number"
        min={1}
        max={9}
        value={value}
        onChange={(e) => onChange(Math.max(1, Math.min(9, Number(e.target.value) || 1)))}
        className="w-full rounded-xl border border-navy/15 bg-mist/70 px-3 py-2.5 text-sm font-medium text-navy focus-ring focus-visible:border-royal"
      />
    </label>
  );
}
