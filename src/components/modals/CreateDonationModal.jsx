import React, { useState } from 'react';
import closeIcon from '../../assets/login-modal/close.svg';
import './CreateDonationModal.css';

// Helper function to get hashtag buttons based on category
const getHashtagButtons = (category) => {
  const hashtagMap = {
    food: ['#food', '#fresh', '#healthy', '#nutritious', '#canned', '#vegetables', '#fruits', '#grains', '#pasta', '#rice'],
    clothing: ['#clothing', '#jackets', '#shoes', '#socks', '#hats', '#gloves', '#winter', '#kids', '#apparel', '#outerwear'],
    items: ['#items', '#school', '#supplies', '#toiletries', '#blankets', '#kitchen', '#books', '#hygiene', '#home', '#essentials'],
    mixed: ['#mixed', '#emergency', '#first-aid', '#baby', '#cleaning', '#survival', '#medical', '#hygiene', '#preparedness', '#care']
  };
  
  return hashtagMap[category] || [];
};

// Helper function to add hashtag to description
const addHashtagToDescription = (hashtag, currentDescription, setDescription) => {
  // Add space if description is not empty and doesn't end with space
  const separator = currentDescription && !currentDescription.endsWith(' ') ? ' ' : '';
  const newDescription = currentDescription + separator + hashtag;
  setDescription(newDescription);
};

export default function CreateDonationModal({ isOpen, onClose, onMoneyCategorySelected }) {
  const [title, setTitle] = useState('');
  const [donationCategory, setDonationCategory] = useState('');
  const [donationType, setDonationType] = useState('donation');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [location, setLocation] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  
  // Money donation specific fields
  const [paymentMethod, setPaymentMethod] = useState('face-to-face');
  const [paymentOption, setPaymentOption] = useState('');
  const [amount, setAmount] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Determine the actual category based on donation type and category
    const actualCategory = donationType === 'request' ? 'request' : donationCategory;
    
    // Handle money category selection
    if (actualCategory === 'money') {
      const moneyDonationData = {
        category: 'money',
        amount,
        paymentMethod,
        date: new Date().toISOString().split('T')[0],
        status: 'Completed'
      };

      if (paymentMethod === 'face-to-face') {
        moneyDonationData.location = location;
        moneyDonationData.time = contactInfo; // Using contactInfo for time in this context
      } else {
        moneyDonationData.paymentOption = paymentOption;
        moneyDonationData.phoneNumber = phoneNumber;
      }

      console.log('Creating money donation:', moneyDonationData);
      
      if (onMoneyCategorySelected) {
        onMoneyCategorySelected();
      }
      onClose();
      return;
    }
    
    // TODO: Implement donation creation logic for non-money categories
    console.log('Creating donation:', {
      title, category: actualCategory, description, quantity, expiryDate, location, contactInfo, images
    });
    onClose();
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      // Limit to 5 images maximum
      const newFiles = files.slice(0, 5);
      setImages(prev => [...prev, ...newFiles]);
      
      // Generate previews for new files
      newFiles.forEach(file => {
        const reader = new FileReader();
        reader.onload = (e) => {
          setImagePreviews(prev => [...prev, e.target.result]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeImage = (index) => {
    setImages(prev => prev.filter((_, i) => i !== index));
    setImagePreviews(prev => prev.filter((_, i) => i !== index));
  };

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('create-donation-modal-backdrop')) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="create-donation-modal" role="dialog" aria-modal="true" aria-label="Create donation">
      <div className="create-donation-modal-backdrop" onClick={handleBackdropClick} />

      <div className="create-donation-modal-shell">
        <div className="create-donation-modal-shell-surface" />
      </div>

      {/* Close Button - Calendar Event Modal Style */}
      <button className="create-donation-modal-close" onClick={onClose} type="button">
        <img src={closeIcon} alt="Close" />
      </button>

      <div className="create-donation-modal-content">
        <div className="create-donation-modal-header">
          <div className="create-donation-modal-heading">
            <span className="create-donation-modal-heading-create">Create</span>
            <span className="create-donation-modal-heading-donation">Donation</span>
          </div>
          <div className="create-donation-modal-subtitle">Fill in the details</div>
        </div>

          <div className="create-donation-modal-form-container">
          <div className="create-donation-modal-details-section">
            <form onSubmit={handleSubmit} className="donation-form">
              {/* First form row with image section on left and form fields on right */}
              <div className="form-row">
                {/* Image upload section only for non-money categories */}
                {donationCategory !== 'money' && (
                  <div className="create-donation-modal-image-section">
                    <div 
                      className="image-upload-container" 
                      onClick={() => document.getElementById('image').click()}
                    >
                      <input
                        type="file"
                        id="image"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="image-upload-input"
                        multiple
                      />
                      <div className="image-upload-preview">
                        {imagePreviews.length > 0 ? (
                          <div className="image-preview-grid">
                            {imagePreviews.map((preview, index) => (
                              <div key={index} className="image-preview-item">
                                <img src={preview} alt={`Preview ${index + 1}`} className="image-preview" />
                                <button 
                                  type="button" 
                                  className="remove-image-btn"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    removeImage(index);
                                  }}
                                >
                                  ×
                                </button>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="image-upload-placeholder">
                            <div className="upload-icon">📷</div>
                            <div className="upload-text">Click to upload images</div>
                            <div className="upload-hint">Supports JPG, PNG, GIF (up to 5)</div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Form fields on the right side */}
                <div className="form-fields-container">
                  <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                      className="create-donation-modal-input"
                      type="text"
                      id="title"
                      name="title"
                      placeholder="Enter donation title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="donationCategory">Donation Category</label>
                    <select
                      className="create-donation-modal-select"
                      id="donationCategory"
                      name="donationCategory"
                      value={donationCategory}
                      onChange={(e) => setDonationCategory(e.target.value)}
                      required
                    >
                      <option value="">Select donation category</option>
                      <option value="food">Food</option>
                      <option value="clothing">Clothing</option>
                      <option value="money">Money</option>
                      <option value="items">Items</option>
                      <option value="mixed">Mixed</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="donationType">Donation Type</label>
                    <select
                      className="create-donation-modal-select"
                      id="donationType"
                      name="donationType"
                      value={donationType}
                      onChange={(e) => setDonationType(e.target.value)}
                    >
                      <option value="donation">Donation</option>
                      <option value="request">Request</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Regular Donation Form Fields */}
              {donationCategory !== 'money' && (
                <>
                  <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                      className="create-donation-modal-textarea"
                      id="description"
                      name="description"
                      placeholder="Describe what you're donating"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows="3"
                      required
                    />
                  </div>

                  {/* Hashtag buttons for automatic description tagging */}
                  {donationCategory && donationCategory !== 'money' && (
                    <div className="hashtag-section">
                      <label className="hashtag-label">Quick Tags</label>
                      <div className="hashtag-buttons">
                        {getHashtagButtons(donationCategory).map((tag, index) => (
                          <button
                            key={index}
                            type="button"
                            className="hashtag-button"
                            onClick={() => addHashtagToDescription(tag, description, setDescription)}
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="quantity">Quantity</label>
                      <input
                        className="create-donation-modal-input"
                        type="number"
                        id="quantity"
                        name="quantity"
                        placeholder="Enter quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        min="1"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="expiryDate">Expiry Date</label>
                      <input
                        className="create-donation-modal-input"
                        type="date"
                        id="expiryDate"
                        name="expiryDate"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="location">Location</label>
                      <input
                        className="create-donation-modal-input"
                        type="text"
                        id="location"
                        name="location"
                        placeholder="Enter pickup location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="contactInfo">Contact Information</label>
                      <input
                        className="create-donation-modal-input"
                        type="text"
                        id="contactInfo"
                        name="contactInfo"
                        placeholder="Phone number or email"
                        value={contactInfo}
                        onChange={(e) => setContactInfo(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Money Donation Form Fields */}
              {donationCategory === 'money' && (
                <>
                  <div className="form-group">
                    <label htmlFor="amount">Amount</label>
                    <div className="amount-input-container">
                      <span className="currency-symbol">₱</span>
                      <input
                        className="create-donation-modal-input"
                        type="number"
                        id="amount"
                        name="amount"
                        placeholder="0.00"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        min="1"
                        step="0.01"
                        required
                      />
                    </div>
                  </div>

                  <div className="payment-method-section">
                    <div className="payment-method-title">Payment Method</div>
                    <div className="payment-method-options">
                      <div 
                        className={`payment-method-option ${paymentMethod === 'face-to-face' ? 'selected' : ''}`}
                        onClick={() => setPaymentMethod('face-to-face')}
                      >
                        <div className="payment-method-icon">🤝</div>
                        <div className="payment-method-label">
                          <div className="payment-method-name">Face to Face</div>
                          <div className="payment-method-desc">Meet in person to donate</div>
                        </div>
                      </div>
                      
                      <div 
                        className={`payment-method-option ${paymentMethod === 'online' ? 'selected' : ''}`}
                        onClick={() => setPaymentMethod('online')}
                      >
                        <div className="payment-method-icon">💳</div>
                        <div className="payment-method-label">
                          <div className="payment-method-name">Online Payment</div>
                          <div className="payment-method-desc">Digital payment methods</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Face to Face Form */}
                  {paymentMethod === 'face-to-face' && (
                    <div className="face-to-face-form">
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="location">Meeting Location</label>
                          <input
                            className="create-donation-modal-input"
                            type="text"
                            id="location"
                            name="location"
                            placeholder="Enter meeting location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="contactInfo">Preferred Time</label>
                          <input
                            className="create-donation-modal-input"
                            type="time"
                            id="contactInfo"
                            name="contactInfo"
                            value={contactInfo}
                            onChange={(e) => setContactInfo(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Online Payment Form */}
                  {paymentMethod === 'online' && (
                    <div className="online-payment-form">
                      <div className="payment-options-grid">
                        <div className="payment-option-title">Select Payment Method</div>
                        {[
                          { id: 'gcash', name: 'GCash', icon: '📱' },
                          { id: 'paymaya', name: 'PayMaya', icon: '💳' },
                          { id: 'cimb', name: 'CIMB', icon: '🏦' },
                          { id: 'applepay', name: 'Apple Pay', icon: '🍎' },
                          { id: 'paypal', name: 'PayPal', icon: '💲' },
                          { id: 'grabpay', name: 'GrabPay', icon: '🚗' }
                        ].map((option) => (
                          <div
                            key={option.id}
                            className={`payment-option ${paymentOption === option.id ? 'selected' : ''}`}
                            onClick={() => setPaymentOption(option.id)}
                          >
                            <div className="payment-option-icon">{option.icon}</div>
                            <div className="payment-option-name">{option.name}</div>
                            <div className="payment-option-check">✓</div>
                          </div>
                        ))}
                      </div>

                      <div className="form-group">
                        <label htmlFor="phoneNumber">Recipient Phone Number</label>
                        <input
                          className="create-donation-modal-input"
                          type="tel"
                          id="phoneNumber"
                          name="phoneNumber"
                          placeholder="Enter phone number"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          pattern="[0-9]{11}"
                          required
                        />
                      </div>
                    </div>
                  )}
                </>
              )}

              <div className="create-donation-modal-actions">
                <button type="button" className="create-donation-modal-cancel-button" onClick={onClose}>
                  Cancel
                </button>
                <button type="submit" className="create-donation-modal-submit-button">
                  Create Donation
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
