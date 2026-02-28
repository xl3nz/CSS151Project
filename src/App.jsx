import React, { useState } from 'react';
import './styles/index.css';
import Navbar from './components/Navbar';
import Guest from './pages/guest';
import User from './pages/user';
import Admin from './pages/admin';

function App() {
  const [role, setRole] = useState('guest');
  const [navbarVisible, setNavbarVisible] = useState(true);

  return (
    <>
      {navbarVisible && (
        <Navbar
          currentRole={role}
          onChangeRole={setRole}
          onHide={() => setNavbarVisible(false)}
        />
      )}
      {!navbarVisible && (
        <button
          className="show-navbar-button"
          onClick={() => setNavbarVisible(true)}
          title="Show development navbar"
        >
          Show Navbar
        </button>
      )}
      {role === 'guest' && <Guest />}
      {role === 'user' && <User />}
      {role === 'admin' && <Admin />}
    </>
  );
}

export default App;
