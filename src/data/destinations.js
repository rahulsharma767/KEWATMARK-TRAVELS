import { images } from './images';

export const domesticDestinations = [
  { id: 'd-goa', name: 'Goa', region: 'Maharashtra Coast, India', desc: 'Golden beaches, beach shacks and laid-back coastal charm.', image: images.destinations.goa },
  { id: 'd-kashmir', name: 'Kashmir', region: 'Jammu & Kashmir, India', desc: 'Snow-capped valleys, houseboats and alpine meadows.', image: images.destinations.kashmir },
  { id: 'd-kerala', name: 'Kerala', region: 'South India', desc: 'Tranquil backwaters, tea gardens and Ayurvedic retreats.', image: images.destinations.kerala },
  { id: 'd-manali', name: 'Manali', region: 'Himachal Pradesh, India', desc: 'Pine forests, river valleys and Himalayan adventure.', image: images.destinations.manali },
  { id: 'd-himachal', name: 'Himachal Pradesh', region: 'North India', desc: 'Hill stations, apple orchards and mountain drives.', image: images.destinations.himachal },
  { id: 'd-andaman', name: 'Andaman Islands', region: 'Bay of Bengal, India', desc: 'Turquoise lagoons, coral reefs and island getaways.', image: images.destinations.andaman },
  { id: 'd-rajasthan', name: 'Rajasthan', region: 'North India', desc: 'Desert forts, royal palaces and vibrant culture.', image: images.destinations.rajasthan },
  { id: 'd-jaipur', name: 'Jaipur', region: 'Rajasthan, India', desc: 'The Pink City — forts, bazaars and royal heritage.', image: images.destinations.jaipur },
  { id: 'd-udaipur', name: 'Udaipur', region: 'Rajasthan, India', desc: 'City of lakes with palaces and romantic sunsets.', image: images.destinations.udaipur },
  { id: 'd-mumbai', name: 'Mumbai', region: 'Maharashtra, India', desc: 'The city of dreams — culture, coastline and energy.', image: images.destinations.mumbai },
  { id: 'd-delhi', name: 'Delhi', region: 'North India', desc: 'Historic monuments meet a modern capital city.', image: images.destinations.delhi },
  { id: 'd-sikkim', name: 'Sikkim', region: 'Northeast India', desc: 'Himalayan peaks, monasteries and alpine lakes.', image: images.destinations.sikkim },
  { id: 'd-northeast', name: 'Northeast India', region: 'Assam, Meghalaya & beyond', desc: 'Living root bridges, tea estates and misty hills.', image: images.destinations.northeast },
  { id: 'd-lakshadweep', name: 'Lakshadweep', region: 'Arabian Sea, India', desc: 'Coral atolls and some of India\u2019s clearest waters.', image: images.destinations.lakshadweep },
];

export const internationalDestinations = [
  { id: 'i-dubai', name: 'Dubai', region: 'United Arab Emirates', desc: 'Skyscrapers, desert safaris and duty-free shopping.', image: images.destinations.dubai },
  { id: 'i-bali', name: 'Bali', region: 'Indonesia', desc: 'Rice terraces, temples and beach-side serenity.', image: images.destinations.bali },
  { id: 'i-maldives', name: 'Maldives', region: 'Indian Ocean', desc: 'Overwater villas and coral-fringed lagoons.', image: images.destinations.maldives },
  { id: 'i-singapore', name: 'Singapore', region: 'Southeast Asia', desc: 'A dazzling city-state of gardens and gastronomy.', image: images.destinations.singapore },
  { id: 'i-thailand', name: 'Thailand', region: 'Southeast Asia', desc: 'Island beaches, temples and vibrant street life.', image: images.destinations.thailand },
  { id: 'i-europe', name: 'Europe', region: 'Multi-country', desc: 'Historic cities, art and countryside across a continent.', image: images.destinations.europe },
  { id: 'i-switzerland', name: 'Switzerland', region: 'Central Europe', desc: 'Alpine peaks, lakes and scenic rail journeys.', image: images.destinations.switzerland },
  { id: 'i-paris', name: 'Paris', region: 'France', desc: 'Iconic landmarks, cafés and timeless romance.', image: images.destinations.paris },
  { id: 'i-london', name: 'London', region: 'United Kingdom', desc: 'Royal history meets modern city energy.', image: images.destinations.london },
  { id: 'i-azerbaijan', name: 'Azerbaijan', region: 'Caucasus', desc: 'A rising destination of old towns and modern skylines.', image: images.destinations.azerbaijan },
  { id: 'i-georgia', name: 'Georgia', region: 'Caucasus', desc: 'Mountain villages, vineyards and warm hospitality.', image: images.destinations.georgia },
  { id: 'i-vietnam', name: 'Vietnam', region: 'Southeast Asia', desc: 'Limestone bays, street food and rich history.', image: images.destinations.vietnam },
  { id: 'i-malaysia', name: 'Malaysia', region: 'Southeast Asia', desc: 'Rainforests, island beaches and city skylines.', image: images.destinations.malaysia },
  { id: 'i-australia', name: 'Australia', region: 'Oceania', desc: 'Coastal drives, reefs and wide open landscapes.', image: images.destinations.australia },
];

export const indiaTourSeries = [
  { id: 'ts-goa', name: 'Goa Series', image: images.destinations.goa, packages: 5 },
  { id: 'ts-kashmir', name: 'Kashmir Series', image: images.destinations.kashmir, packages: 4 },
  { id: 'ts-kerala', name: 'Kerala Series', image: images.destinations.kerala, packages: 6 },
  { id: 'ts-himachal', name: 'Himachal Series', image: images.destinations.himachal, packages: 5 },
  { id: 'ts-rajasthan', name: 'Rajasthan Series', image: images.destinations.rajasthan, packages: 7 },
  { id: 'ts-andaman', name: 'Andaman Series', image: images.destinations.andaman, packages: 4 },
  { id: 'ts-sikkim', name: 'Sikkim Series', image: images.destinations.sikkim, packages: 3 },
  { id: 'ts-lakshadweep', name: 'Lakshadweep Series', image: images.destinations.lakshadweep, packages: 3 },
  { id: 'ts-golden-triangle', name: 'Golden Triangle', image: images.destinations.jaipur, packages: 5 },
];

export const internationalTourSeries = [
  { id: 'is-europe', name: 'Europe Series', image: images.destinations.europe, packages: 8 },
  { id: 'is-dubai', name: 'Dubai Series', image: images.destinations.dubai, packages: 6 },
  { id: 'is-maldives', name: 'Maldives Series', image: images.destinations.maldives, packages: 4 },
  { id: 'is-bali', name: 'Bali Series', image: images.destinations.bali, packages: 5 },
  { id: 'is-thailand', name: 'Thailand Series', image: images.destinations.thailand, packages: 5 },
  { id: 'is-singapore', name: 'Singapore Series', image: images.destinations.singapore, packages: 4 },
  { id: 'is-azerbaijan', name: 'Azerbaijan Series', image: images.destinations.azerbaijan, packages: 3 },
  { id: 'is-georgia', name: 'Georgia Series', image: images.destinations.georgia, packages: 3 },
  { id: 'is-switzerland', name: 'Switzerland Series', image: images.destinations.switzerland, packages: 4 },
  { id: 'is-australia', name: 'Australia Series', image: images.destinations.australia, packages: 4 },
  { id: 'is-vietnam', name: 'Vietnam Series', image: images.destinations.vietnam, packages: 3 },
  { id: 'is-malaysia', name: 'Malaysia Series', image: images.destinations.malaysia, packages: 4 },
];

export const specialOffers = [
  { id: 'so-dubai', title: 'Dubai Escape', duration: '5N / 6D', image: images.destinations.dubai, includes: ['Flight', 'Hotel', 'Transfer'], badge: 'Limited Time' },
  { id: 'so-maldives', title: 'Maldives Luxury', duration: '4N / 5D', image: images.destinations.maldives, includes: ['Flight', 'Hotel', 'Transfer'], badge: 'Limited Time' },
  { id: 'so-europe', title: 'European Summer', duration: '8N / 9D', image: images.destinations.europe, includes: ['Flight', 'Hotel', 'Transfer'], badge: 'Limited Time' },
  { id: 'so-bali', title: 'Bali Paradise', duration: '5N / 6D', image: images.destinations.bali, includes: ['Flight', 'Hotel', 'Transfer'], badge: 'Limited Time' },
  { id: 'so-kashmir', title: 'Kashmir Winter', duration: '5N / 6D', image: images.destinations.kashmir, includes: ['Flight', 'Hotel', 'Transfer'], badge: 'Limited Time' },
  { id: 'so-thailand', title: 'Thailand Explorer', duration: '6N / 7D', image: images.destinations.thailand, includes: ['Flight', 'Hotel', 'Transfer'], badge: 'Limited Time' },
];
