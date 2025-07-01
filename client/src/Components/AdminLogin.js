import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

function AdminLogin() {
  const [adminData, setAdminData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdminData({ ...adminData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!adminData.email || !adminData.password) {
      alert('Please fill in both fields.');
      return;
    }

    // Placeholder for backend authentication
    if (adminData.email === 'admin@example.com' && adminData.password === 'admin123') {
      alert('Login Successful!');
      navigate('/dashboard');
    } else {
      alert('Invalid credentials.');
    }

    setAdminData({ email: '', password: '' });
  };

  return (
    <div className="admin-login-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={adminData.email}
          onChange={handleChange}
          placeholder="Enter admin email"
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={adminData.password}
          onChange={handleChange}
          placeholder="Enter password"
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;
