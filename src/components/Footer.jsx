import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { site } from '../data/site.js';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Flights', href: '#flights' },
  { label: 'Hotels', href: '#hotels' },
  { label: 'Tours', href: '#india-tours' },
  { label: 'Visa', href: '#visa' },
  { label: 'Services', href: '#why-kewatmark' },
];

const popularDestinations = ['Dubai', 'Goa', 'Kashmir', 'Maldives', 'Bali', 'Europe'];

const services = [
  'Flight Booking',
  'Hotel Booking',
  'Visa Assistance',
  'Holiday Packages',
  'Corporate Travel',
  'Customized Tours',
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="about" className="bg-navy text-white/80">
      <div className="container-x grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div>
          <p className="font-display text-xl font-semibold text-white">
            KEWATMARK <span className="text-gold">TRAVELS</span>
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
            A Mumbai-based travel partner for domestic and international flights, hotels,
            visa assistance and customized holiday planning.
          </p>
          <p className="mt-4 flex items-center gap-2 text-sm text-white/60">
            <MapPin className="h-4 w-4 shrink-0 text-gold" /> Santacruz West, Mumbai
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white">Quick Links</p>
          <ul className="mt-4 space-y-3 text-sm">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-white/60 transition-colors hover:text-gold">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white">
            Popular Destinations
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            {popularDestinations.map((d) => (
              <li key={d}>
                <a href="#destinations" className="text-white/60 transition-colors hover:text-gold">
                  {d}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white">Services</p>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
            {services.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>

          <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-white">Contact</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={`tel:${site.phonePrimaryTel}`}
                className="flex items-center gap-2 text-white/60 transition-colors hover:text-gold"
              >
                <Phone className="h-4 w-4 shrink-0" /> {site.phonePrimary}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2 text-white/60 transition-colors hover:text-gold"
              >
                <Mail className="h-4 w-4 shrink-0" /> {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>&copy; {year} Kewatmark Travels. All rights reserved.</p>
          <p className="font-display text-sm italic text-white/70">
            &ldquo;{site.tagline}&rdquo;
          </p>
        </div>
      </div>
    </footer>
  );
}
