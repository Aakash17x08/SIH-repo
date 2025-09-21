import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import LandingPage from './pages/LandingPage';
import AlumniDirectory from './pages/AlumniDirectory';
import EventsPage from './pages/EventsPage';
import MentorshipPage from './pages/MentorshipPage';
import DonationsPage from './pages/DonationsPage';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/directory" element={<AlumniDirectory />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/mentorship" element={<MentorshipPage />} />
              <Route path="/donate" element={<DonationsPage />} />
              <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;