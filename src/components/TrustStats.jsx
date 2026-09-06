import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 10, suffix: '+', label: 'Travel Destinations' },
  { value: 100, suffix: '+', label: 'Travel Options' },
  { value: 2, suffix: '', label: 'Domestic + International Coverage', isText: true },
  { value: 1, suffix: '', label: 'Personal Travel Assistance', isText: true },
];

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame;
    const duration = 1200;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplay(Math.floor(progress * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-4xl text-gold sm:text-5xl">
      {display}{suffix}
    </span>
  );
}

export default function TrustStats() {
  return (
    <section id="about" className="section-pad bg-navy text-white">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">Why choose us</p>
          <h2 className="h2-display mt-2 text-white">Built on trust, not on empty promises</h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
            >
              {s.isText ? (
                <span className="font-display text-2xl text-gold">✓</span>
              ) : (
                <Counter value={s.value} suffix={s.suffix} />
              )}
              <p className="mt-2 text-sm text-white/70">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
