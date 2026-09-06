import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useApp } from '../context/AppContext.jsx';

export default function Toast() {
  const { toast } = useApp();

  return (
    <div className="bottom-safe pointer-events-none fixed inset-x-0 z-[100] flex justify-center px-4">
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="pointer-events-auto flex max-w-md items-start gap-3 rounded-2xl bg-navy px-5 py-4 text-white shadow-soft"
            role="status"
          >
            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
            <p className="text-sm leading-snug">{toast}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
