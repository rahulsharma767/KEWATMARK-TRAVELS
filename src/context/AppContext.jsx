import React, { createContext, useCallback, useContext, useState } from 'react';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [booking, setBooking] = useState({ open: false, context: '' });
  const [toast, setToast] = useState(null);
  const [flightSearch, setFlightSearch] = useState({ submitted: false, params: null });
  const toastTimerRef = React.useRef(null);

  const openBooking = useCallback((context = '') => {
    setBooking({ open: true, context });
  }, []);

  const closeBooking = useCallback(() => {
    setBooking((b) => ({ ...b, open: false }));
  }, []);

  const showToast = useCallback((message) => {
    setToast(message);
    window.clearTimeout(toastTimerRef.current);
    toastTimerRef.current = window.setTimeout(() => setToast(null), 3800);
  }, []);

  const runFlightSearch = useCallback((params) => {
    setFlightSearch({ submitted: true, params });
    window.requestAnimationFrame(() => {
      const el = document.querySelector('#flights');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, []);

  return (
    <AppContext.Provider
      value={{ booking, openBooking, closeBooking, toast, showToast, flightSearch, runFlightSearch }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
