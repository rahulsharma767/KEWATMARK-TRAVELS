// Centralized WhatsApp number for the entire site.
// Do NOT hardcode this number anywhere else — always import it from here.
const whatsappNumber = '919321492164';

/**
 * Build a wa.me click-to-chat link with a custom, URL-encoded message.
 * @param {string} message - Plain text message to prefill in WhatsApp.
 */
function buildWhatsappLink(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const site = {
  name: 'KEWATMARK TRAVELS',
  tagline: 'Your Journey. Our Commitment.',
  phonePrimary: '+91 77189 37742',
  phonePrimaryTel: '+917718937742',
  phoneSecondary: '+91 93214 92164',
  phoneSecondaryTel: '+919321492164',
  phoneSupport: '+91 76780 71519',
  phoneSupportTel: '+917678071519',
  email: 'kewatmarktravels@gmail.com',
  address: {
    line1: 'Shambhoo Sheth Chawl, Gazdhar Bandh Road,',
    line2: 'Gobind Nagar, Santacruz West,',
    line3: 'Mumbai - 400054, Maharashtra, India',
  },
  whatsappNumber,
  buildWhatsappLink,
  // Default link used by simple "WhatsApp us" buttons (no form data attached).
  whatsappLink: buildWhatsappLink('Hello Kewatmark Travels, I would like to plan a trip.'),
};

export default site;
