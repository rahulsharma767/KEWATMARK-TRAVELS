import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../data/visa.js';

export default function FAQ() {
  const [open, setOpen] = useState(faqs[0]?.id ?? null);

  return (
    <section id="faq" className="section-pad bg-white">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">FAQ</p>
          <h2 className="h2-display mt-2">Answers to common questions</h2>
        </div>

        <div className="mx-auto mt-10 max-w-2xl divide-y divide-navy/10 rounded-[24px] border border-navy/10">
          {faqs.map((f) => {
            const isOpen = open === f.id;
            return (
              <div key={f.id}>
                <button
                  onClick={() => setOpen(isOpen ? null : f.id)}
                  className="focus-ring flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-navy">{f.q}</span>
                  <ChevronDown className={`h-5 w-5 flex-shrink-0 text-navy/50 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-navy/60">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
