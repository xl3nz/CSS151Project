import React from 'react';
import closeIcon from '../../assets/login-modal/close.svg';
import './MenuBarModal.css';

export default function MenuBarModal({ isOpen, onClose }) {
  const menuItems = [
    {
      id: 'profile',
      title: 'Profile',
      description: 'View and edit your profile',
      icon: '👤',
      action: 'View'
    },
    {
      id: 'notifications',
      title: 'Notifications',
      description: 'Manage your notifications',
      icon: '🔔',
      action: 'Manage'
    },
    {
      id: 'settings',
      title: 'Settings',
      description: 'Application settings',
      icon: '⚙️',
      action: 'Configure'
    },
    {
      id: 'help',
      title: 'Help & Support',
      description: 'Get help and support',
      icon: '❓',
      action: 'Contact'
    },
    {
      id: 'logout',
      title: 'Logout',
      description: 'Sign out of your account',
      icon: '🚪',
      action: 'Sign Out',
      isDanger: true
    }
  ];

  const handleMenuAction = (itemId) => {
    // TODO: Implement menu item actions
    console.log('Menu action:', itemId);
    if (itemId === 'logout') {
      onClose();
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('menu-bar-modal-backdrop')) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="menu-bar-modal" role="dialog" aria-modal="true" aria-label="Menu bar">
      <div className="menu-bar-modal-backdrop" onClick={handleBackdropClick} />

      <div className="menu-bar-modal-shell">
        <div className="menu-bar-modal-shell-surface" />
      </div>

      {/* Close Button - Calendar Event Modal Style */}
      <button className="menu-bar-modal-close" onClick={onClose} type="button">
        <img src={closeIcon} alt="Close" />
      </button>

      <div className="menu-bar-modal-content">
        <div className="menu-items">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className={`menu-item ${item.isDanger ? 'danger-item' : ''}`}
              onClick={() => handleMenuAction(item.id)}
            >
              <div className="menu-item-content">
                <div className="menu-icon">{item.icon}</div>
                <div className="menu-info">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
              <div className="menu-action">
                <span className="action-text">{item.action}</span>
                <span className="arrow">→</span>
              </div>
            </div>
          ))}
        </div>

        <div className="menu-footer">
          <div className="version-info">Version 1.0.0</div>
          <div className="app-name">Donation Management System</div>
        </div>
      </div>
    </div>
  );
}
