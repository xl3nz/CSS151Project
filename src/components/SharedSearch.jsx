import React from 'react';
import primary from '../assets/Primary.png';
import './SharedSearch.css';

export default function SharedSearch({ className = '', onClick }) {
  return (
    <div className={`shared-search ${className}`.trim()} onClick={onClick} role="button" tabIndex={0} onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') onClick?.();
    }}>
      <div className="shared-search-shell">
        <div className="shared-search-field" />
        <div className="shared-search-action" />
        <img className="shared-search-icon" alt="Primary" src={primary} />
        <div className="shared-search-label">Search</div>
      </div>
    </div>
  );
}
