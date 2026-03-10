import React from 'react';
import './DonationCard.css';

const DonationCard = ({ 
  donation, 
  category, 
  onClaim, 
  onDonate, 
  onReport,
  isRequest = false 
}) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleReport = () => {
    if (onReport) {
      onReport(donation.id, donation.name);
    }
  };

  const handleAction = () => {
    if (category === 'money' && donation.status === 'Pending') {
      if (onDonate) onDonate(donation.id);
    } else if (category !== 'money') {
      if (onClaim) onClaim(donation.id);
    }
  };

  return (
    <div className="donation-card">
      {category !== 'money' && (
        <div className="donation-card-image-container">
          <img 
            src={donation.image} 
            alt={donation.name}
            className="donation-card-image"
            onError={(e) => {
              e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMDAgMTAwTDEwMCAxMDBaIiBzdHJva2U9IiM4Qzg1OTIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=';
            }}
          />
        </div>
      )}
      
      <div className="donation-card-details">
        <div className="donation-card-name">{donation.name}</div>
        <div className="donation-card-quantity">Quantity: {donation.quantity}</div>
        
        {category === 'money' ? (
          <>
            <div className="donation-card-amount">Amount: {donation.amount}</div>
            <div className="donation-card-method">Method: {donation.method}</div>
            <div className="donation-card-date">Date: {formatDate(donation.date)}</div>
            <div className={`donation-card-status ${donation.status.toLowerCase()}`}>
              Status: {donation.status}
            </div>
          </>
        ) : (
          <>
            <div className="donation-card-description">{donation.description}</div>
            {donation.expiryDate && (
              <div className="donation-card-expiry">
                Expiry Date: {formatDate(donation.expiryDate)}
              </div>
            )}
          </>
        )}
        
        <div className="donation-card-actions">
          {/* Report Button - Available for all categories */}
          <button 
            className="donation-card-report-button"
            onClick={handleReport}
            title="Report this donation"
          >
            <span className="donation-card-report-icon">🚩</span>
            Report
          </button>
          
          {/* Claim/Donate Button */}
          {category !== 'money' ? (
            <button 
              className="donation-card-claim-button"
              onClick={handleAction}
            >
              {isRequest ? 'Donate to Request' : 'Claim Donation'}
            </button>
          ) : category === 'money' && donation.status === 'Pending' ? (
            <button 
              className="donation-card-donate-button"
              onClick={handleAction}
            >
              Donate Now
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default DonationCard;