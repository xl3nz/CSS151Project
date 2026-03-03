import React, { useState } from 'react';
import closeIcon from '../../assets/login-modal/close.svg';
import './DonateMoneyModal.css';

export default function DonateMoneyModal({ isOpen, onClose, onSuccess }) {
  const [paymentMethod, setPaymentMethod] = useState('face-to-face');
  const [amount, setAmount] = useState('');
  const [location, setLocation] = useState('');
  const [time, setTime] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedPaymentOption, setSelectedPaymentOption] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const donationData = {
      method: paymentMethod,
      amount,
      date: new Date().toISOString().split('T')[0],
      status: 'Completed'
    };

    if (paymentMethod === 'face-to-face') {
      donationData.location = location;
      donationData.time = time;
    } else {
      donationData.paymentOption = selectedPaymentOption;
      donationData.phoneNumber = phoneNumber;
    }

    // TODO: Implement actual payment processing
    console.log('Processing donation:', donationData);
    
    if (onSuccess) {
      onSuccess(donationData);
    }
    onClose();
  };

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('donate-money-modal-backdrop')) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="donate-money-modal" role="dialog" aria-modal="true" aria-label="Donate money">
      <div className="donate-money-modal-backdrop" onClick={handleBackdropClick} />

      <div className="donate-money-modal-shell">
        <div className="donate-money-modal-shell-surface" />
      </div>

      {/* Close Button */}
      <button className="donate-money-modal-close" onClick={onClose} type="button">
        <img src={closeIcon} alt="Close" />
      </button>

      <div className="donate-money-modal-content">
        <div className="donate-money-modal-header">
          <div className="donate-money-modal-heading">
            <span className="donate-money-modal-heading-donate">Donate</span>
            <span className="donate-money-modal-heading-money">Money</span>
          </div>
          <div className="donate-money-modal-subtitle">Choose your payment method</div>
        </div>

        <div className="donate-money-modal-form-container">
          <form onSubmit={handleSubmit} className="donate-money-form">
            {/* Payment Method Selection */}
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

            {/* Amount Input */}
            <div className="form-group">
              <label htmlFor="amount">Amount</label>
              <div className="amount-input-container">
                <span className="currency-symbol">₱</span>
                <input
                  className="donate-money-input"
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

            {/* Face to Face Form */}
            {paymentMethod === 'face-to-face' && (
              <div className="face-to-face-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input
                      className="donate-money-input"
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
                    <label htmlFor="time">Preferred Time</label>
                    <input
                      className="donate-money-input"
                      type="time"
                      id="time"
                      name="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
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
                    { id: 'bdo', name: 'BDO Transfer', icon: '🏦' },
                    { id: 'bpi', name: 'BPI Transfer', icon: '🏦' },
                    { id: 'landbank', name: 'Landbank Transfer', icon: '🏦' },
                    { id: 'palawan', name: 'Palawan Express', icon: '📮' }
                  ].map((option) => (
                    <div
                      key={option.id}
                      className={`payment-option ${selectedPaymentOption === option.id ? 'selected' : ''}`}
                      onClick={() => setSelectedPaymentOption(option.id)}
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
                    className="donate-money-input"
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

            <div className="donate-money-actions">
              <button type="button" className="donate-money-cancel-button" onClick={onClose}>
                Cancel
              </button>
              <button 
                type="submit" 
                className="donate-money-submit-button"
                disabled={!amount || (paymentMethod === 'face-to-face' && (!location || !time)) || (paymentMethod === 'online' && (!selectedPaymentOption || !phoneNumber))}
              >
                Donate Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}