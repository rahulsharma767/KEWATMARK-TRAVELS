import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import DestinationCard from './DestinationCard.jsx';

export default function DestinationCarousel({ items }) {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-auto scroll-smooth pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((d) => (
          <DestinationCard key={d.id} destination={d} />
        ))}
      </div>
      <div className="mt-4 hidden justify-end gap-2 sm:flex">
        <button
          onClick={() => scroll(-1)}
          aria-label="Scroll left"
          className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-navy/15 text-navy transition-colors hover:bg-navy hover:text-white"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => scroll(1)}
          aria-label="Scroll right"
          className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-navy/15 text-navy transition-colors hover:bg-navy hover:text-white"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
