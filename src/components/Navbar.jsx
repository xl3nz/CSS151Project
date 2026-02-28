import React from 'react';
import './Navbar.css';

export default function Navbar({ currentRole, onChangeRole, onHide }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-branding">
          <h2>SendHelp Dashboard</h2>
          <span className="dev-badge">DEV MODE</span>
        </div>
        
        <div className="navbar-tabs">
          <button
            className={`nav-button ${currentRole === 'guest' ? 'active' : ''}`}
            onClick={() => onChangeRole('guest')}
            title="Guest - Public Landing Page"
          >
            👤 Guest
          </button>
          <button
            className={`nav-button ${currentRole === 'user' ? 'active' : ''}`}
            onClick={() => onChangeRole('user')}
            title="User - Logged In Dashboard"
          >
            👨‍💼 User
          </button>
          <button
            className={`nav-button ${currentRole === 'admin' ? 'active' : ''}`}
            onClick={() => onChangeRole('admin')}
            title="Admin - Administration Console"
          >
            ⚙️ Admin
          </button>
        </div>
        
        <div className="navbar-info">
          <span className="current-role">Current Role: <strong>{currentRole.charAt(0).toUpperCase() + currentRole.slice(1)}</strong></span>
          <button className="navbar-hide-button" onClick={onHide} title="Temporarily hide navbar">
            Hide Navbar
          </button>
        </div>
      </div>
    </nav>
  );
}
