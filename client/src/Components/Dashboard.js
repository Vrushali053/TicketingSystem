import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h2>Welcome to Dashboard</h2>
      <Link to="/create-ticket">Create Ticket</Link>
      <Link to="/ticket-list">View Tickets</Link>
      <Link to="/admin">Admin Panel</Link>
    </div>
  );
}

export default Dashboard;
