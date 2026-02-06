import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorBoundary from './components/ErrorBoundary';
import { BookingProvider, useBooking } from './context/BookingContext';
import './App.css';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const Bookings = lazy(() => import('./pages/Bookings'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Team = lazy(() => import('./pages/Team'));
const NotFound = lazy(() => import('./pages/NotFound'));

// ModalWrapper component to consume context and render Modal
const ModalWrapper = () => {
  const { isBookingModalOpen, closeBookingModal } = useBooking();
  return <BookingModal isOpen={isBookingModalOpen} onClose={closeBookingModal} />;
};

function App() {
  return (
    <ErrorBoundary>
      <BookingProvider>
        <div className="app">
          <Navbar />
          <main className="main-content">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/bookings" element={<Bookings />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/team" element={<Team />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <ModalWrapper />
        </div>
      </BookingProvider>
    </ErrorBoundary>
  );
}

export default App;
