import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import TicketCreation from './Components/TicketCreation';
import TicketList from './Components/TicketList';
import AdminPanel from './Components/AdminPanel';
import './App.css';
import AdminLogin from './Components/AdminLogin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AdminLogin />} />
        <Route path='/adminlogin' element={<AdminLogin />} />
        {/* <Route path='/' element={<Dashboard />} /> */}
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/create-ticket' element={<TicketCreation />} />
        <Route path='/ticket-list' element={<TicketList />} />
        <Route path='/admin' element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;