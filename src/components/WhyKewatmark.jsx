import React from 'react';
import { motion } from 'framer-motion';
import { BadgePercent, Globe2, Hotel, Headset, Stamp, Compass } from 'lucide-react';

const items = [
  {
    icon: BadgePercent,
    title: 'Competitive Airfares',
    desc: 'Smart travel options with great value at every step.',
  },
  {
    icon: Globe2,
    title: 'Domestic + International',
    desc: 'From Mumbai to destinations across India and around the world.',
  },
  {
    icon: Stamp,
    title: 'Visa Assistance',
    desc: 'Guidance and documentation support for your visa application.',
  },
  {
    icon: Hotel,
    title: 'Hotel Booking',
    desc: 'Hotels ranging from comfortable stays to premium properties.',
  },
  {
    icon: Headset,
    title: 'Personalized Service',
    desc: 'Speak directly with a travel expert when you need help.',
  },
  {
    icon: Compass,
    title: 'End-to-End Travel Support',
    desc: 'Flights, hotels, visas and holiday planning under one roof.',
  },
];

export default function WhyKewatmark() {
  return (
    <section id="why-kewatmark" className="section-pad bg-mist">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">Why travel with Kewatmark</p>
          <h2 className="h2-display mt-2">A single, dependable partner for every part of your journey</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: 'easeOut' }}
              className="card-surface group p-7 transition-transform duration-300 hover:-translate-y-1.5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-royal/10 text-royal transition-colors group-hover:bg-gold group-hover:text-navy">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl text-navy">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/60">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
