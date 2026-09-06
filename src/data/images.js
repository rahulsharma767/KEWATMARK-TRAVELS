// Centralized image configuration.
// All images are royalty-free Unsplash source images.
// Replace any URL below to change an image site-wide.

const u = (id, w = 1600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  hero: [
    u('photo-1436491865332-7a61a109cc05', 2000), // airplane wing above clouds
    u('photo-1544620347-c4fd4a3d5957', 2000), // tropical beach aerial
    u('photo-1502602898657-3e91760cbb34', 2000), // Paris/European city
  ],
  heroPrimary: u('photo-1436491865332-7a61a109cc05', 2200),
  heroSecondary: u('photo-1488646953014-85cb44e25828', 2200), // beach
  cabin: u('photo-1517479149777-5f3b1511d5ad', 1600), // business class cabin
  airport: u('photo-1436491865332-7a61a109cc05', 1600),
  runway: u('photo-1569154941061-e231b4725ef1', 1600),

  destinations: {
    goa: u('photo-1512343879784-a960bf40e7f2'),
    kashmir: u('photo-1566837945700-30057527ade0'),
    kerala: u('photo-1602216056096-3b40cc0c9944'),
    manali: u('photo-1626621341517-bbf3d9990a23'),
    himachal: u('photo-1626621341517-bbf3d9990a23'),
    andaman: u('photo-1586500036706-41963de24d8b'),
    rajasthan: u('photo-1524492412937-b28074a5d7da'),
    jaipur: u('photo-1599661046289-e31897846e41'),
    udaipur: u('photo-1477587458883-47145ed94245'),
    mumbai: u('photo-1567157577867-05ccb1388e66'),
    delhi: u('photo-1587474260584-136574528ed5'),
    sikkim: u('photo-1544634076-a90160ddf22e'),
    northeast: u('photo-1626621341517-bbf3d9990a23'),
    lakshadweep: u('photo-1573843981267-be1999ff37cd'),
    dubai: u('photo-1512453979798-5ea266f8880c'),
    bali: u('photo-1537996194471-e657df975ab4'),
    maldives: u('photo-1514282401047-d79a71a590e8'),
    singapore: u('photo-1525625293386-3f8f99389edd'),
    thailand: u('photo-1552465011-b4e21bf6e79a'),
    europe: u('photo-1467269204594-9661b134dd2b'),
    switzerland: u('photo-1530122037265-a5f1f91d3b99'),
    paris: u('photo-1502602898657-3e91760cbb34'),
    london: u('photo-1513635269975-59663e0ac1ad'),
    azerbaijan: u('photo-1601889924561-6b743aa3aa2a'),
    georgia: u('photo-1565008447742-97f6f38c985c'),
    vietnam: u('photo-1528127269322-539801943592'),
    malaysia: u('photo-1596422846543-75c6fc197f07'),
    australia: u('photo-1523482580672-f109ba8cb9be'),
  },

  hotels: {
    luxuryResort: u('photo-1571003123894-1f0594d2b5d9'),
    beachResort: u('photo-1584132967334-10e028bd69f7'),
    cityHotel: u('photo-1551882547-ff40c63fe5fa'),
    mountainHotel: u('photo-1517320964276-a002fa203177'),
    boutiqueHotel: u('photo-1590490360182-c33d57733427'),
    dubaiHotel: u('photo-1582719478250-c89cae4dc85b'),
    maldivesVilla: u('photo-1573843981267-be1999ff37cd'),
    europeanHotel: u('photo-1445019980597-93fa8acb246c'),
  },

  people: {
    couple: u('photo-1522202176988-66273c2fd55f'),
    family: u('photo-1476514525535-07fb3b4ae5f1'),
    honeymoon: u('photo-1520250497591-112f2f40a3f4'),
    safari: u('photo-1516426122078-c23e76319801'),
    corporate: u('photo-1521737711867-e3b97375f902'),
  },

  agents: {
    expert: u('photo-1519085360753-af0119f7cbe7'),
  },
};

export default images;
