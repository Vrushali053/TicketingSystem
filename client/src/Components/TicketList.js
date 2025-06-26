import React from 'react';
import './TicketList.css';

function TicketList() {
  const tickets = [
    { id: 1, description: 'Login Issue', status: 'Open' },
    { id: 2, description: 'Payment Failure', status: 'Closed' }
  ];

  return (
    <div className="ticket-list-container">
      <h2>Ticket List</h2>
      {tickets.map(ticket => (
        <div key={ticket.id} className="ticket-card">
          <p><strong>ID:</strong> {ticket.id}</p>
          <p><strong>Description:</strong> {ticket.description}</p>
          <p><strong>Status:</strong> {ticket.status}</p>
        </div>
      ))}
    </div>
  );
}

export default TicketList;
