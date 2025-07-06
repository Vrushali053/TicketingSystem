import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import TicketCreation from './Components/TicketCreation';
import TicketList from './Components/TicketList';
import AdminPanel from './Components/AdminPanel';
import './App.css';
import AdminLogin from './Components/AdminLogin';
import Client from './Components/Client';
import AddClient from './Components/AddClient';
import Navbar from './Components/Navbar';

function AppWrapper() {
  const [clients, setClients] = useState([]);
  const location = useLocation();

  const hideNavbarPaths = ['/', '/adminlogin'];
  const showNavbar = !hideNavbarPaths.includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path='/' element={<AdminLogin />} />
        <Route path='/adminlogin' element={<AdminLogin />} />
        <Route path='/dashboard' element={<Dashboard clients={clients} />} />
        <Route path='/client' element={<Client clients={clients} />} />
        <Route path='/add-client' element={<AddClient clients={clients} setClients={setClients} />} />
        <Route path='/create-ticket' element={<TicketCreation />} />
        <Route path='/ticket-list' element={<TicketList />} />
        <Route path='/admin' element={<AdminPanel />} />

        {/* ✅ Catch-all 404 route */}
        <Route path="*" element={
          <h2 style={{ textAlign: 'center', marginTop: '50px' }}>
            404 - Page Not Found
          </h2>
        } />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router basename="/">
      <AppWrapper />
    </Router>
  );
}

export default App;
