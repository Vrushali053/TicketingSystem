import React from 'react';
import './Client.css';

function Client() {
  return (
    <div className="client-container">
      {/* Add New Client Button */}
      <div className="add-button-container">
        <button className="add-client-button">Add New Client</button>
      </div>

      {/* Top Row: Header & Search */}
      <div className="top-bar">
        <h4 className="client-title">Recently added Clients</h4>
        <input type="text" className="client-search" placeholder="client search" />
      </div>

      {/* Table */}
      <table className="client-table">
        {/* <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Service Status</th>
          </tr>
        </thead> */}
        <tbody>
          {/* <tr>
            <td>599</td>
            <td>Newtown Pizza Shop</td>
            <td>Active</td>
          </tr> */}
          {/* Add more rows here */}
        </tbody>
      </table>
    </div>
  );
}

export default Client;
