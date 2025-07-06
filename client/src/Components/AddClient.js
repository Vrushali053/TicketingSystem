import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AddClient.css';
import api from '../../src/api'

function AddClient({ clients, setClients }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    status: 'Active',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newClient = { id: clients.length + 1, ...formData };
    setClients([...clients, newClient]);
    alert("Client added successfully!");
    navigate('/client');   // ✅ redirect to client list after add
  };

  return (
    <div className="add-client-container">
      <div style={{ marginBottom: '20px' }}>
        <Link to="/client">
          <button className="back-button">← Back to Client List</button>
        </Link>
      </div>
      <h2>Add New Client</h2>
      <form onSubmit={handleSubmit} className="add-client-form">
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
        {/* <input type="text" name="service" placeholder="Service" value={formData.service} onChange={handleChange} required /> */}
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button type="submit">Add Client</button>
      </form>
    </div>
  );
}

export default AddClient;
