import { AppProvider } from './context/AppContext.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import FlightResults from './components/FlightResults.jsx';
import WhyKewatmark from './components/WhyKewatmark.jsx';
import PopularDestinations from './components/PopularDestinations.jsx';
import { IndiaTourSeries, InternationalTourSeries } from './components/TourSeries.jsx';
import SpecialOffers from './components/SpecialOffers.jsx';
import HotelsSection from './components/HotelsSection.jsx';
import VisaSection from './components/VisaSection.jsx';
import TripPlanner from './components/TripPlanner.jsx';
import PackagesSection from './components/PackagesSection.jsx';
import TrustStats from './components/TrustStats.jsx';
import TravelExperience from './components/TravelExperience.jsx';
import Testimonials from './components/Testimonials.jsx';
import FAQ from './components/FAQ.jsx';
import ContactCTA from './components/ContactCTA.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import BookingModal from './components/BookingModal.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Toast from './components/Toast.jsx';

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-mist font-body text-navy">
        <Navbar />
        <main>
          <Hero />
          <FlightResults />
          <WhyKewatmark />
          <PopularDestinations />
          <IndiaTourSeries />
          <InternationalTourSeries />
          <SpecialOffers />
          <HotelsSection />
          <VisaSection />
          <TripPlanner />
          <PackagesSection />
          <TrustStats />
          <TravelExperience />
          <Testimonials />
          <FAQ />
          <ContactCTA />
          <Contact />
        </main>
        <Footer />
        <BookingModal />
        <WhatsAppButton />
        <ScrollToTop />
        <Toast />
      </div>
    </AppProvider>
  );
}

export default App;
