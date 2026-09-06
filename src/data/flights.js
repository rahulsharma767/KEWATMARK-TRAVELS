// Mock flight data — for demo purposes only. Not live fares.

export const airlines = [
  { code: 'AI', name: 'Air India', color: '#D8A83E' },
  { code: 'UK', name: 'Vistara', color: '#5B2A86' },
  { code: '6E', name: 'IndiGo', color: '#0B5FA5' },
  { code: 'SG', name: 'SpiceJet', color: '#E4572E' },
  { code: 'EK', name: 'Emirates', color: '#B71C1C' },
  { code: 'QR', name: 'Qatar Airways', color: '#5A1F2A' },
  { code: 'SQ', name: 'Singapore Airlines', color: '#1B4F72' },
  { code: 'TG', name: 'Thai Airways', color: '#5D2E8C' },
];

const airportName = {
  BOM: 'Mumbai',
  DEL: 'Delhi',
  GOI: 'Goa',
  BLR: 'Bengaluru',
  SXR: 'Srinagar',
  COK: 'Kochi',
  DXB: 'Dubai',
  SIN: 'Singapore',
  BKK: 'Bangkok',
  MLE: 'Male',
  LHR: 'London',
  CDG: 'Paris',
};

export const flightResults = [
  { id: 'FL01', airline: airlines[2], from: 'BOM', to: 'DEL', dep: '06:15', arr: '08:25', duration: '2h 10m', stops: 'Non-stop', baggage: '15kg check-in + 7kg cabin', price: 4899, class: 'Economy' },
  { id: 'FL02', airline: airlines[0], from: 'BOM', to: 'GOI', dep: '09:40', arr: '11:00', duration: '1h 20m', stops: 'Non-stop', baggage: '20kg check-in + 7kg cabin', price: 3299, class: 'Economy' },
  { id: 'FL03', airline: airlines[1], from: 'DEL', to: 'BLR', dep: '13:05', arr: '15:50', duration: '2h 45m', stops: 'Non-stop', baggage: '20kg check-in + 7kg cabin', price: 6450, class: 'Premium Economy' },
  { id: 'FL04', airline: airlines[3], from: 'BOM', to: 'SXR', dep: '05:30', arr: '08:10', duration: '2h 40m', stops: '1 Stop · DEL', baggage: '15kg check-in + 7kg cabin', price: 7199, class: 'Economy' },
  { id: 'FL05', airline: airlines[4], from: 'BOM', to: 'DXB', dep: '02:20', arr: '04:10', duration: '3h 20m', stops: 'Non-stop', baggage: '30kg check-in + 7kg cabin', price: 15999, class: 'Economy' },
  { id: 'FL06', airline: airlines[5], from: 'DEL', to: 'DXB', dep: '23:50', arr: '02:05', duration: '3h 45m', stops: 'Non-stop', baggage: '25kg check-in + 7kg cabin', price: 17250, class: 'Business' },
  { id: 'FL07', airline: airlines[6], from: 'BOM', to: 'SIN', dep: '01:10', arr: '09:40', duration: '6h 30m', stops: 'Non-stop', baggage: '30kg check-in + 7kg cabin', price: 24999, class: 'Economy' },
  { id: 'FL08', airline: airlines[7], from: 'DEL', to: 'BKK', dep: '10:15', arr: '15:55', duration: '4h 10m', stops: '1 Stop · BOM', baggage: '25kg check-in + 7kg cabin', price: 19899, class: 'Economy' },
  { id: 'FL09', airline: airlines[4], from: 'BOM', to: 'MLE', dep: '11:30', arr: '13:20', duration: '3h 50m', stops: '1 Stop · DXB', baggage: '30kg check-in + 7kg cabin', price: 28499, class: 'Business' },
  { id: 'FL10', airline: airlines[1], from: 'DEL', to: 'LHR', dep: '04:05', arr: '09:15', duration: '9h 40m', stops: 'Non-stop', baggage: '30kg check-in + 7kg cabin', price: 42999, class: 'Economy' },
  { id: 'FL11', airline: airlines[0], from: 'BOM', to: 'CDG', dep: '20:15', arr: '05:45', duration: '9h 30m', stops: 'Non-stop', baggage: '30kg check-in + 7kg cabin', price: 45999, class: 'Premium Economy' },
  { id: 'FL12', airline: airlines[2], from: 'BLR', to: 'COK', dep: '07:00', arr: '08:15', duration: '1h 15m', stops: 'Non-stop', baggage: '15kg check-in + 7kg cabin', price: 2799, class: 'Economy' },
];

export const getAirportName = (code) => airportName[code] || code;

export const originAirports = ['BOM', 'DEL', 'BLR', 'COK'];
export const destinationAirports = Object.keys(airportName);

export const travelClasses = ['Economy', 'Premium Economy', 'Business', 'First'];
