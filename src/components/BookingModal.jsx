import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, MessageCircle } from 'lucide-react';
import { useApp } from '../context/AppContext.jsx';
import { site } from '../data/site.js';

const initialForm = {
  name: '',
  phone: '',
  email: '',
  destination: '',
  date: '',
  travellers: '1',
  message: '',
};

export default function BookingModal() {
  const { booking, closeBooking, showToast } = useApp();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (booking.open) {
      document.body.style.overflow = 'hidden';
      setForm((f) => ({ ...initialForm, destination: booking.context || '' }));
      setErrors({});
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [booking.open, booking.context]);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your name';
    if (!/^[0-9+\s-]{8,15}$/.test(form.phone.trim())) next.phone = 'Enter a valid mobile number';
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Enter a valid email';
    if (!form.destination.trim()) next.destination = 'Please enter a destination';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const formatDate = (value) => {
    if (!value) return 'Not provided';
    const [year, month, day] = value.split('-');
    return year && month && day ? `${day}-${month}-${year}` : value;
  };

  const buildEnquiryMessage = () => {
    const lines = [
      'Hello Kewatmark Travels,',
      '',
      'I would like to plan a trip.',
      '',
      '━━━━━━━━━━━━━━━━',
      'TRIP ENQUIRY',
      '━━━━━━━━━━━━━━━━',
      '',
      `Full Name: ${form.name.trim() || 'Not provided'}`,
      `Mobile Number: ${form.phone.trim() || 'Not provided'}`,
      `Email: ${form.email.trim() || 'Not provided'}`,
      '',
      `Destination: ${form.destination.trim() || 'Not provided'}`,
      `Travel Date: ${formatDate(form.date)}`,
      `Number of Travellers: ${form.travellers || 'Not provided'}`,
      '',
      'Message:',
      form.message.trim() || 'Not provided',
      '',
      'Please contact me regarding this enquiry.',
      '',
      'Thank you,',
      'Kewatmark Travels',
    ];
    return lines.join('\n');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    window.open(site.buildWhatsappLink(buildEnquiryMessage()), '_blank', 'noopener,noreferrer');
    closeBooking();
    showToast('Thank you! Redirecting you to WhatsApp to complete your enquiry.');
  };

  return (
    <AnimatePresence>
      {booking.open && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-navy/70 px-4 py-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(e) => e.target === e.currentTarget && closeBooking()}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="relative max-h-[85dvh] w-full max-w-lg overflow-y-auto rounded-[28px] bg-white p-6 shadow-soft sm:p-8"
          >
            <button
              onClick={closeBooking}
              aria-label="Close"
              className="focus-ring absolute right-5 top-5 rounded-full p-1.5 text-navy/60 hover:bg-mist hover:text-navy"
            >
              <X className="h-5 w-5" />
            </button>

            <p className="eyebrow">Plan My Trip</p>
            <h3 className="mt-1 font-display text-2xl text-navy sm:text-3xl">Tell us about your trip</h3>
            <p className="mt-2 text-sm text-navy/60">
              Share a few details and a travel expert will reach out with the right options for you.
            </p>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full Name" error={errors.name}>
                  <input
                    className={inputClass(errors.name)}
                    value={form.name}
                    onChange={update('name')}
                    placeholder="Your name"
                  />
                </Field>
                <Field label="Mobile Number" error={errors.phone}>
                  <input
                    className={inputClass(errors.phone)}
                    value={form.phone}
                    onChange={update('phone')}
                    placeholder="+91 00000 00000"
                  />
                </Field>
              </div>

              <Field label="Email (optional)" error={errors.email}>
                <input
                  className={inputClass(errors.email)}
                  value={form.email}
                  onChange={update('email')}
                  placeholder="you@example.com"
                />
              </Field>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Destination" error={errors.destination}>
                  <input
                    className={inputClass(errors.destination)}
                    value={form.destination}
                    onChange={update('destination')}
                    placeholder="Where do you want to go?"
                  />
                </Field>
                <Field label="Travel Date">
                  <input type="date" className={inputClass()} value={form.date} onChange={update('date')} />
                </Field>
              </div>

              <Field label="Number of Travellers">
                <select className={inputClass()} value={form.travellers} onChange={update('travellers')}>
                  {[1, 2, 3, 4, 5, 6, '7+'].map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </Field>

              <Field label="Message (optional)">
                <textarea
                  rows={3}
                  className={inputClass()}
                  value={form.message}
                  onChange={update('message')}
                  placeholder="Tell us anything else that helps us plan your trip"
                />
              </Field>

              <div className="pt-2">
                <button type="submit" className="btn-primary w-full !bg-[#128C7E] hover:!bg-[#0f7a6d]">
                  <MessageCircle className="h-4 w-4" /> Send Enquiry on WhatsApp
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({ label, error, children }) {
  return (
    <label className="block text-left">
      <span className="mb-1.5 block text-sm font-medium text-navy/70">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-500">{error}</span>}
    </label>
  );
}

function inputClass(error) {
  return `w-full rounded-xl border ${error ? 'border-red-400' : 'border-navy/15'} bg-mist/60 px-4 py-3 text-sm text-navy placeholder:text-navy/35 focus-ring focus-visible:border-royal`;
}
