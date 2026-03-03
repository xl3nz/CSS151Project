import React, { useState } from 'react';
import closeIcon from '../../assets/login-modal/close.svg';
import './MyClaimsModal.css';

export default function MyClaimsModal({ isOpen, onClose }) {
  const [claims, setClaims] = useState([
    {
      id: 1,
      title: 'Food Donation',
      category: 'Food',
      date: '2024-03-15',
      status: 'Pending',
      quantity: '10',
      location: 'Community Center',
      contact: 'john@example.com',
      image: 'https://via.placeholder.com/150x100'
    },
    {
      id: 2,
      title: 'Clothing Donation',
      category: 'Clothing',
      date: '2024-03-14',
      status: 'Approved',
      quantity: '5',
      location: 'Charity Shop',
      contact: 'jane@example.com',
      image: 'https://via.placeholder.com/150x100'
    },
    {
      id: 3,
      title: 'Money Donation',
      category: 'Money',
      date: '2024-03-13',
      status: 'Completed',
      quantity: '$100',
      location: 'Bank Transfer',
      contact: 'charity@example.com',
      image: 'https://via.placeholder.com/150x100'
    }
  ]);
  const [expandedClaimId, setExpandedClaimId] = useState(null);

  const handleCancelClaim = (claimId) => {
    // TODO: Implement cancel claim logic
    console.log('Cancelling claim:', claimId);
    setClaims(prev => prev.filter(claim => claim.id !== claimId));
  };

  const handleContactDonor = (claim) => {
    // TODO: Implement contact donor logic
    console.log('Contacting donor for claim:', claim.id);
  };

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('my-claims-modal-backdrop')) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const handleToggleExpand = (claimId) => {
    setExpandedClaimId(expandedClaimId === claimId ? null : claimId);
  };

  return (
    <div className="my-claims-modal" role="dialog" aria-modal="true" aria-label="My claims">
      <div className="my-claims-modal-backdrop" onClick={handleBackdropClick} />

      <div className="my-claims-modal-shell">
        <div className="my-claims-modal-shell-surface" />
      </div>

      {/* Close Button - Calendar Event Modal Style */}
      <button className="my-claims-modal-close" onClick={onClose} type="button">
        <img src={closeIcon} alt="Close" />
      </button>

      <div className="my-claims-modal-content">
        <div className="my-claims-modal-header">
          <div className="my-claims-modal-heading">
            <span className="my-claims-modal-heading-my">My</span>
            <span className="my-claims-modal-heading-claims">Claims</span>
          </div>
          <div className="my-claims-modal-subtitle">Your donation claims</div>
        </div>

        <div className="claims-list">
          {claims.length > 0 ? (
            claims.map(claim => (
              <div key={claim.id} className="claim-card">
                <div className="claim-item-header">
                  <div className="claim-item-info">
                    <div className="claim-item-title">
                      <h4>{claim.title}</h4>
                      <span className="claim-item-category">{claim.category}</span>
                    </div>
                    <div className="claim-item-meta">
                      <span className="claim-item-status" style={{
                        backgroundColor: claim.status === 'Pending' ? '#f39c12' :
                                       claim.status === 'Approved' ? '#27ae60' : '#95a5a6'
                      }}>
                        {claim.status}
                      </span>
                      <span className="claim-item-date">Claimed: {claim.date}</span>
                    </div>
                  </div>
                  <button 
                    className="claim-collapse-btn"
                    onClick={() => handleToggleExpand(claim.id)}
                    aria-expanded={expandedClaimId === claim.id}
                    aria-controls={`claim-details-${claim.id}`}
                  >
                    <span className={`collapse-icon ${expandedClaimId === claim.id ? 'expanded' : ''}`}>
                      {expandedClaimId === claim.id ? '▼' : '▶'}
                    </span>
                  </button>
                </div>

                {expandedClaimId === claim.id && (
                  <div 
                    id={`claim-details-${claim.id}`}
                    className="claim-item-details"
                    aria-hidden={expandedClaimId !== claim.id}
                  >
                    <div className="claim-image-section">
                      <img src={claim.image} alt={claim.title} className="claim-item-image" />
                    </div>

                    <div className="claim-details-section">
                      <div className="claim-details">
                        <div className="detail-row">
                          <span className="label">Quantity</span>
                          <span className="value">{claim.quantity}</span>
                        </div>
                        <div className="detail-row">
                          <span className="label">Location</span>
                          <span className="value">{claim.location}</span>
                        </div>
                        <div className="detail-row">
                          <span className="label">Contact</span>
                          <span className="value">{claim.contact}</span>
                        </div>
                      </div>

                      <div className="claim-actions">
                        {claim.status === 'Pending' && (
                          <button
                            className="btn-cancel-claim"
                            onClick={() => handleCancelClaim(claim.id)}
                          >
                            Cancel Claim
                          </button>
                        )}
                        {claim.status === 'Approved' && (
                          <button
                            className="btn-contact"
                            onClick={() => handleContactDonor(claim)}
                          >
                            Contact Donor
                          </button>
                        )}
                        {claim.status === 'Completed' && (
                          <button className="btn-completed" disabled>
                            Completed
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="empty-state">
              <div className="empty-icon">📦</div>
              <h3>No Claims Yet</h3>
              <p>Browse donations to make your first claim!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
