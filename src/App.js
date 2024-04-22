import React from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing Routes from react-router-dom
import Tickets from './pages/Tickets';
import VendorPage from './pages/VendorPage';
import Partner from './components/Partner';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import RegistrationPage from './components/RegistrationPage';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/vendor" element={<VendorPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/vote" element={<Partner />} />
        <Route path="/RegistrationPage" element={<RegistrationPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
