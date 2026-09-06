import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { images } from '../data/images.js';

const points = [
  'Domestic Flights',
  'International Flights',
  'Hotel Reservations',
  'Visa Assistance',
  'Holiday Packages',
  'Customized Itineraries',
];

export default function TravelExperience() {
  return (
    <section className="section-pad bg-white">
      <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-[28px] shadow-soft"
        >
          <img
            src={images.cabin}
            alt="Business class airplane cabin interior"
            className="h-64 w-full object-cover sm:h-80 lg:h-[420px]"
            loading="lazy"
          />
        </motion.div>

        <div>
          <p className="eyebrow">The Kewatmark experience</p>
          <h2 className="h2-display mt-2">More than a ticket. It&rsquo;s your journey.</h2>
          <p className="mt-4 max-w-lg text-navy/60">
            We help travellers plan flights, hotels, tours and international travel requirements with
            personal assistance at every step — from the first enquiry to the day you return home.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm font-medium text-navy/75">
                <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-royal" /> {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
