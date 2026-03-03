import React, { useState } from 'react';
import closeIcon from '../../assets/login-modal/close.svg';
import './ManageDonationModal.css';

// Sample donation data
const sampleDonations = [
  {
    id: 1,
    title: 'Food Donation',
    description: 'Fresh fruits and vegetables',
    category: 'Food',
    quantity: '50',
    expiryDate: '2024-03-15',
    location: 'Community Center',
    contactInfo: 'john@example.com',
    image: 'https://via.placeholder.com/300x200'
  },
  {
    id: 2,
    title: 'Clothing Donation',
    description: 'Gently used winter clothes',
    category: 'Clothing',
    quantity: '30',
    expiryDate: '2024-04-01',
    location: 'Charity Shop',
    contactInfo: 'jane@example.com',
    image: 'https://via.placeholder.com/300x200'
  },
  {
    id: 3,
    title: 'Money Donation',
    description: 'Financial assistance for medical bills',
    category: 'Money',
    quantity: '₱15,000',
    expiryDate: '2024-03-31',
    location: 'Bank Transfer',
    contactInfo: 'charity@example.com',
    image: 'https://via.placeholder.com/300x200'
  }
];

export default function ManageDonationModal({ isOpen, onClose }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [expandedDonationId, setExpandedDonationId] = useState(null);
  const [formData, setFormData] = useState(sampleDonations[0]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleSave = () => {
    // TODO: Implement save logic
    console.log('Saving donation:', formData);
    setIsEditMode(false);
  };

  const handleDelete = () => {
    // TODO: Implement delete logic
    console.log('Deleting donation');
    onClose();
  };

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('manage-donation-modal-backdrop')) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const handleToggleExpand = (donationId) => {
    setExpandedDonationId(expandedDonationId === donationId ? null : donationId);
  };

  const handleEditDonation = (donation) => {
    setFormData(donation);
    setIsEditMode(true);
  };

  const handleDeleteDonation = (donationId) => {
    // TODO: Implement delete logic
    console.log('Deleting donation:', donationId);
  };

  return (
    <div className="manage-donation-modal" role="dialog" aria-modal="true" aria-label="Manage donation">
      <div className="manage-donation-modal-backdrop" onClick={handleBackdropClick} />

      <div className="manage-donation-modal-shell">
        <div className="manage-donation-modal-shell-surface" />
      </div>

      {/* Close Button - Calendar Event Modal Style */}
      <button className="manage-donation-modal-close" onClick={onClose} type="button">
        <img src={closeIcon} alt="Close" />
      </button>

      <div className="manage-donation-modal-content">
        <div className="manage-donation-modal-header">
          <div className="manage-donation-modal-heading">
            <span className="manage-donation-modal-heading-manage">Manage</span>
            <span className="manage-donation-modal-heading-donation">Donation</span>
          </div>
          <div className="manage-donation-modal-subtitle">Edit donation details</div>
        </div>

        <div className="manage-donation-modal-list">
          {sampleDonations.map((donation) => (
            <div key={donation.id} className="manage-donation-item">
              <div className="manage-donation-item-header">
                <div className="manage-donation-item-info">
                  <div className="manage-donation-item-title">
                    <h4>{donation.title}</h4>
                    <span className="manage-donation-item-category">{donation.category}</span>
                  </div>
                  <div className="manage-donation-item-meta">
                    <span className="manage-donation-item-quantity">Qty: {donation.quantity}</span>
                    <span className="manage-donation-item-location">{donation.location}</span>
                  </div>
                </div>
                <button 
                  className="manage-donation-collapse-btn"
                  onClick={() => handleToggleExpand(donation.id)}
                  aria-expanded={expandedDonationId === donation.id}
                  aria-controls={`donation-details-${donation.id}`}
                >
                  <span className={`collapse-icon ${expandedDonationId === donation.id ? 'expanded' : ''}`}>
                    {expandedDonationId === donation.id ? '▼' : '▶'}
                  </span>
                </button>
              </div>

              {expandedDonationId === donation.id && (
                <div 
                  id={`donation-details-${donation.id}`}
                  className="manage-donation-item-details"
                  aria-hidden={expandedDonationId !== donation.id}
                >
                  <div className="manage-donation-modal-image-section">
                    <div className="image-display-container">
                      <img src={donation.image} alt={donation.title} className="donation-image" />
                    </div>
                  </div>

                  <div className="manage-donation-modal-details-section">
                    <div className="donation-details">
                      <div className="detail-group">
                        <h4>Title</h4>
                        <p>{donation.title}</p>
                      </div>

                      <div className="detail-group">
                        <h4>Description</h4>
                        <p>{donation.description}</p>
                      </div>

                      <div className="detail-group">
                        <h4>Category</h4>
                        <p>{donation.category}</p>
                      </div>

                      <div className="detail-group">
                        <h4>Quantity</h4>
                        <p>{donation.quantity}</p>
                      </div>

                      <div className="detail-group">
                        <h4>Expiry Date</h4>
                        <p>{donation.expiryDate}</p>
                      </div>

                      <div className="detail-group">
                        <h4>Location</h4>
                        <p>{donation.location}</p>
                      </div>

                      <div className="detail-group">
                        <h4>Contact</h4>
                        <p>{donation.contactInfo}</p>
                      </div>

                      <div className="manage-donation-modal-actions">
                        <button 
                          type="button" 
                          className="manage-donation-modal-edit-button" 
                          onClick={() => handleEditDonation(donation)}
                        >
                          Edit
                        </button>
                        <button 
                          type="button" 
                          className="manage-donation-modal-delete-button" 
                          onClick={() => handleDeleteDonation(donation.id)}
                        >
                          Delete Donation
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
