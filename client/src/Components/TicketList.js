// import React from 'react';
// import './TicketList.css';

// function TicketList() {
//   const tickets = [
//     { id: 1, description: 'Login Issue', status: 'Open' },
//     { id: 2, description: 'Payment Failure', status: 'Closed' }
//   ];

//   return (
//     <div className="ticket-list-container">
//       <h2>Ticket List</h2>
//       {tickets.map(ticket => (
//         <div key={ticket.id} className="ticket-card">
//           <p><strong>ID:</strong> {ticket.id}</p>
//           <p><strong>Description:</strong> {ticket.description}</p>
//           <p><strong>Status:</strong> {ticket.status}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default TicketList;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TicketList.css';

function TicketList() {
  const [reply, setReply] = useState('');

  const handleReply = (e) => {
    e.preventDefault();
    if (!reply.trim()) {
      alert('Reply cannot be empty.');
      return;
    }
    alert(`Reply Sent:\n${reply}`);
    setReply('');
  };

  return (
    <div className="ticket-page">
      {/* Navbar */}
      <nav className="dashboard-navbar">
        <div className="logo">CRM</div>
        <div className="nav-links">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/client">Client</Link>
          <Link to="/ticket-list">Ticket</Link>
          <Link to="/">Logout</Link>
        </div>
      </nav>

      {/* Ticket Info */}
      <div className="ticket-details">
        <h2>Tickets Conversation</h2>
        <p><strong>Subject:</strong> Issue with SSL Certificate</p>
        <p><strong>Ticket open:</strong> 28-02-2020</p>
        <p><strong>Status:</strong> Pending Operator Response</p>
      </div>

      {/* Conversation Messages */}
      <div className="message-box">
        <p className="message-meta"><strong>Client Name</strong> | 28-05-2020</p>
        <div className="message-content">
          Hello Team,  
          It seems like we are having some SSL certificate issue. Our customers are having trouble accessing our website.  
          Can you please check and advise us.  
          Thanks  
          <br />Regards, Client
        </div>
      </div>

      <div className="message-box">
        <p className="message-meta"><strong>Operator Name</strong> | 29-05-2020</p>
        <div className="message-content">
          Hello Client,  
          Sorry to hear about your issue. We're currently investigating and will update you as soon as possible.  
          <br />Regards, Operator
        </div>
      </div>

      {/* Reply Box */}
      <div className="reply-section">
        <h3>Reply</h3>
        <textarea
          value={reply}
          onChange={(e) => setReply(e.target.value)}
          placeholder="Type your reply here..."
        />
        <button onClick={handleReply}>Send Reply</button>
      </div>
    </div>
  );
}

export default TicketList;
