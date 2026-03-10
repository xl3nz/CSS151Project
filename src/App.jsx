import React, { useState } from 'react';
import './styles/index.css';
import Guest from './pages/guest';
import User from './pages/user';
import Admin from './pages/admin';
import Navbar from './components/Navbar';

function App() {
  const [user, setUser] = useState(null); // { role: 'admin' | 'user' }

  // Hardcoded credentials
  const hardcodedUsers = {
    'admin@example.com': {
      password: 'admin123',
      role: 'admin'
    },
    'user@example.com': {
      password: 'user123',
      role: 'user'
    }
  };

  const handleLogin = (email, password) => {
    const userCredentials = hardcodedUsers[email];
    
    if (userCredentials && userCredentials.password === password) {
      setUser({ role: userCredentials.role });
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setUser(null);
  };

  // State for navbar role switching (for development/testing)
  const [navbarRole, setNavbarRole] = useState('admin');
  
  // State for navbar visibility
  const [navbarVisible, setNavbarVisible] = useState(true);

  // Handle navbar role changes
  const handleNavbarRoleChange = (newRole) => {
    setNavbarRole(newRole);
  };

  // Handle navbar show/hide toggle
  const handleNavbarToggle = () => {
    setNavbarVisible(!navbarVisible);
  };

  // Conditional rendering based on user state
  if (!user) {
    return <Guest onLogin={handleLogin} />;
  }

  if (user.role === 'admin') {
    return (
      <>
        {navbarVisible && (
          <Navbar 
            currentRole={navbarRole} 
            onChangeRole={handleNavbarRoleChange} 
            onHide={handleNavbarToggle} 
          />
        )}
        {!navbarVisible && (
          <div className="show-navbar-container">
            <button className="show-navbar-button" onClick={handleNavbarToggle}>
              🔄 Show Navbar
            </button>
          </div>
        )}
        {navbarRole === 'admin' && <Admin onLogout={handleLogout} />}
        {navbarRole === 'user' && <User onLogout={handleLogout} />}
        {navbarRole === 'guest' && <Guest onLogin={handleLogin} />}
      </>
    );
  }

  if (user.role === 'user') {
    return <User onLogout={handleLogout} />;
  }

  // Fallback (should never reach here)
  return <Guest onLogin={handleLogin} />;
}

export default App;
