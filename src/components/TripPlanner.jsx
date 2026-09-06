import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CalendarDays, MapPin, Sparkle, Users } from 'lucide-react';
import { travelStyles } from '../data/packages.js';
import { useApp } from '../context/AppContext.jsx';

export default function TripPlanner() {
  const { openBooking } = useApp();
  const [form, setForm] = useState({
    destination: '',
    date: '',
    travellers: '2',
    style: 'Comfort',
  });
  const [itinerary, setItinerary] = useState(null);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleCreate = (e) => {
    e.preventDefault();
    setItinerary({ ...form });
  };

  return (
    <section id="trip-planner" className="section-pad bg-mist">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">Build your perfect trip</p>
          <h2 className="h2-display mt-2">Tell us your style, we&rsquo;ll shape the plan</h2>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <form onSubmit={handleCreate} className="card-surface space-y-4 p-6 sm:p-8">
            <Field label="Where do you want to go?" icon={MapPin}>
              <input
                className={inputClass}
                value={form.destination}
                onChange={update('destination')}
                placeholder="e.g. Kashmir, Bali, Europe"
                required
              />
            </Field>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Travel date" icon={CalendarDays}>
                <input type="date" className={inputClass} value={form.date} onChange={update('date')} />
              </Field>
              <Field label="Number of travellers" icon={Users}>
                <input
                  type="number"
                  min={1}
                  max={20}
                  className={inputClass}
                  value={form.travellers}
                  onChange={update('travellers')}
                />
              </Field>
            </div>
            <div>
              <span className="mb-2 block text-sm font-medium text-navy/70">Travel style</span>
              <div className="flex flex-wrap gap-2">
                {travelStyles.map((s) => (
                  <button
                    type="button"
                    key={s}
                    onClick={() => setForm((f) => ({ ...f, style: s }))}
                    className={`focus-ring rounded-full border px-4 py-1.5 text-xs font-semibold ${
                      form.style === s ? 'border-royal bg-royal/10 text-royal' : 'border-navy/15 text-navy/50'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <button type="submit" className="btn-primary w-full">
              <Sparkle className="h-4 w-4" /> Create My Trip
            </button>
          </form>

          <div>
            <AnimatePresence mode="wait">
              {itinerary ? (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                  className="card-surface h-full bg-navy-gradient p-7 text-white sm:p-8"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold">Draft itinerary</p>
                  <h3 className="mt-2 font-display text-2xl">
                    {itinerary.destination || 'Your destination'} · {itinerary.style}
                  </h3>
                  <ul className="mt-5 space-y-3 text-sm text-white/80">
                    <li>Day 1 — Arrival, transfer to hotel and a relaxed evening to settle in.</li>
                    <li>Day 2 — Guided sightseeing covering the top highlights of the region.</li>
                    <li>Day 3 — Free day for optional activities, shopping or a spa experience.</li>
                    <li>Day 4 — Departure with an airport transfer included.</li>
                  </ul>
                  <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-white/70">
                    <p><span className="text-white/50">Travellers:</span> {itinerary.travellers}</p>
                    <p><span className="text-white/50">Date:</span> {itinerary.date || 'Flexible'}</p>
                    <p><span className="text-white/50">Style:</span> {itinerary.style}</p>
                  </div>
                  <p className="mt-6 text-xs text-white/50">
                    This is a sample draft. A travel expert will refine it based on availability.
                  </p>
                  <button
                    onClick={() => openBooking(itinerary.destination || 'Custom Trip')}
                    className="btn-primary mt-6 w-full"
                  >
                    Talk to an Expert
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex h-full flex-col items-center justify-center rounded-[26px] border border-dashed border-navy/15 bg-white/60 p-10 text-center"
                >
                  <Sparkle className="h-8 w-8 text-navy/25" />
                  <p className="mt-3 font-display text-lg text-navy">Your itinerary will appear here</p>
                  <p className="mt-1 text-sm text-navy/50">Fill in the form and create your trip to see a draft plan.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

const inputClass = 'w-full rounded-xl border border-navy/15 bg-mist/60 px-4 py-3 text-sm text-navy focus-ring focus-visible:border-royal';

function Field({ label, icon: Icon, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-navy/70">
        <Icon className="h-3.5 w-3.5" /> {label}
      </span>
      {children}
    </label>
  );
}
