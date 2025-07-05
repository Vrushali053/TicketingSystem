import React from 'react';
import './Dashboard.css';

function Dashboard({ clients }) {
  const totalClients = clients.length;
  const totalTickets = 500;
  const pendingTickets = totalTickets - totalClients;

  return (
    <div className="dashboard-content">
      <h2>Dashboard</h2>
      <div className="dashboard-stats">
        <div className="stat-card">
          <p>Total Clients = {totalClients}</p>
        </div>
        <div className="stat-card">
          <p>Total Tickets = {totalTickets}</p>
        </div>
        <div className="stat-card">
          <p>Pending Tickets = {pendingTickets}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
