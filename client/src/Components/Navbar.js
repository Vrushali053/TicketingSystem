import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="dashboard-navbar">
      <div className="logo">CRM</div>
      <div className="nav-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/client">Client</Link>
        <Link to="/ticket-list">Ticket</Link>
        <Link to="/">Logout</Link>
      </div>
    </nav>
  );
}

export default Navbar;
