import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { testimonials } from '../data/visa.js';

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  const go = (dir) => setIndex((i) => (i + dir + testimonials.length) % testimonials.length);
  const current = testimonials[index];

  return (
    <section className="section-pad bg-mist">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Testimonials</p>
          <h2 className="h2-display mt-2">What our travellers say</h2>
          <p className="mt-2 text-xs text-navy/40">Sample testimonials shared for illustration.</p>
        </div>

        <div className="relative mx-auto mt-10 max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35 }}
              className="card-surface p-8 text-center sm:p-10"
            >
              <Quote className="mx-auto h-8 w-8 text-gold/70" />
              <div className="mt-4 flex justify-center gap-1">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-4 font-display text-xl text-navy sm:text-2xl">&ldquo;{current.quote}&rdquo;</p>
              <p className="mt-5 text-sm font-semibold text-navy">{current.name}</p>
              <p className="text-xs text-navy/50">{current.trip}</p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button onClick={() => go(-1)} aria-label="Previous testimonial" className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-navy/15 text-navy hover:bg-white">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${i === index ? 'w-6 bg-royal' : 'w-2 bg-navy/20'}`}
                />
              ))}
            </div>
            <button onClick={() => go(1)} aria-label="Next testimonial" className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-navy/15 text-navy hover:bg-white">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
