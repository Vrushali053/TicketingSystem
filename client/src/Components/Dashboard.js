
import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-page">
      {/* Top Navbar */}
      <nav className="dashboard-navbar">
        <div className="logo">CRM</div>
        <div className="nav-links">
          <Link to="/dashboard">Dashboard</Link>
           <li><Link to="/client">Client</Link></li>
          <Link to="/ticket-list">Ticket</Link>
          <Link to="/">Logout</Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="dashboard-content">
        <h2>Dashboard</h2>
        <div className="dashboard-stats">
          <div className="stat-card">
            <p>Total Clients = 500</p>
          </div>
          <div className="stat-card">
            <p>Total Tickets = 500</p>
          </div>
          <div className="stat-card">
            <p>Pending Tickets = 500</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
