import React from 'react';
import { Link } from 'react-router-dom';
import './Client.css';

function Client({ clients }) {
  return (
    <div className="client-container">
      {/* Add New Client Button */}
      <div className="add-button-container">
        <Link to="/add-client">
          <button className="add-client-button">Add New Client</button>
        </Link>
      </div>

      {/* Top Row: Header & Search */}
      <div className="top-bar">
        <h4 className="client-title">Recently added Clients</h4>
        <input type="text" className="client-search" placeholder="client search" />
      </div>

      {/* Table */}
      <table className="client-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {clients.length === 0 ? (
            <tr>
              <td colSpan="3" style={{ textAlign: 'center' }}>No clients added yet.</td>
            </tr>
          ) : (
            clients.map((client) => (
              <tr key={client.id}>
                <td data-label="Id">{client.id}</td>
                <td data-label="Name">{client.name}</td>
                <td data-label="Status">{client.status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Client;
