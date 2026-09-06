import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Phone, X } from 'lucide-react';
import { site } from '../data/site.js';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Flights', href: '#flights' },
  { label: 'Hotels', href: '#hotels' },
  { label: 'Tours', href: '#india-tours' },
  { label: 'Visa', href: '#visa' },
  { label: 'Services', href: '#why-kewatmark' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy/95 shadow-card backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container-x flex items-center justify-between py-4">
        <a href="#home" onClick={(e) => { e.preventDefault(); handleNav('#home'); }} className="leading-none">
          <span className="block font-display text-xl font-semibold tracking-wide text-white sm:text-2xl">
            KEWATMARK
          </span>
          <span className="block text-[0.65rem] font-semibold tracking-[0.35em] text-gold">
            TRAVELS
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className="focus-ring rounded text-sm font-medium text-white/85 transition-colors hover:text-gold"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:${site.phonePrimaryTel}`} className="btn-primary !px-5 !py-2.5 text-sm">
            <Phone className="h-4 w-4" /> {site.phonePrimary}
          </a>
        </div>

        <button
          className="focus-ring rounded-lg p-2 text-white lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden bg-navy lg:hidden"
          >
            <div className="container-x flex flex-col gap-1 pb-6">
              {links.map((l) => (
                <button
                  key={l.href}
                  onClick={() => handleNav(l.href)}
                  className="focus-ring rounded-lg px-2 py-3 text-left text-white/90 hover:bg-white/5 hover:text-gold"
                >
                  {l.label}
                </button>
              ))}
              <a href={`tel:${site.phonePrimaryTel}`} className="btn-primary mt-2 justify-center">
                <Phone className="h-4 w-4" /> Call Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
