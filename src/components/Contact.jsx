import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { site } from '../data/site.js';
import { useApp } from '../context/AppContext.jsx';

const initialForm = { name: '', phone: '', email: '', destination: '', date: '', message: '' };

export default function Contact() {
  const { showToast } = useApp();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your name';
    if (!/^[0-9+\s-]{8,15}$/.test(form.phone.trim())) next.phone = 'Enter a valid mobile number';
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) next.email = 'Enter a valid email';
    if (!form.message.trim()) next.message = 'Please add a short message';
    setErrors(next);
    return Object.keys(next).length === 0;
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
      `Travel Date: ${form.date || 'Not provided'}`,
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
    setForm(initialForm);
    showToast('Thank you! Redirecting you to WhatsApp to complete your enquiry.');
  };

  return (
    <section id="contact" className="section-pad bg-mist">
      <div className="container-x grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <p className="eyebrow">Contact us</p>
          <h2 className="h2-display mt-2">{site.name}</h2>
          <p className="mt-2 text-sm font-medium text-gold-dark">{site.tagline}</p>

          <div className="mt-8 space-y-5 text-sm text-navy/70">
            <a href={`tel:${site.phonePrimaryTel}`} className="flex items-start gap-3 hover:text-royal">
              <Phone className="mt-0.5 h-4 w-4 text-royal" />
              <span>
                {site.phonePrimary}
                <br />
                {site.phoneSecondary}
                <br />
                {site.phoneSupport}
              </span>
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-royal">
              <Mail className="h-4 w-4 text-royal" /> {site.email}
            </a>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-royal" />
              <address className="not-italic leading-relaxed">
                {site.address.line1}
                <br />
                {site.address.line2}
                <br />
                {site.address.line3}
              </address>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate className="card-surface space-y-4 p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" error={errors.name}>
              <input className={inputClass(errors.name)} value={form.name} onChange={update('name')} placeholder="Your name" />
            </Field>
            <Field label="Phone" error={errors.phone}>
              <input className={inputClass(errors.phone)} value={form.phone} onChange={update('phone')} placeholder="+91 00000 00000" />
            </Field>
          </div>
          <Field label="Email" error={errors.email}>
            <input className={inputClass(errors.email)} value={form.email} onChange={update('email')} placeholder="you@example.com" />
          </Field>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Travel Destination">
              <input className={inputClass()} value={form.destination} onChange={update('destination')} placeholder="Where are you headed?" />
            </Field>
            <Field label="Travel Date">
              <input type="date" className={inputClass()} value={form.date} onChange={update('date')} />
            </Field>
          </div>
          <Field label="Message" error={errors.message}>
            <textarea rows={4} className={inputClass(errors.message)} value={form.message} onChange={update('message')} placeholder="How can we help?" />
          </Field>
          <button type="submit" className="btn-primary w-full !bg-[#128C7E] hover:!bg-[#0f7a6d]">
            <Send className="h-4 w-4" /> Send on WhatsApp
          </button>
        </form>
      </div>
    </section>
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
