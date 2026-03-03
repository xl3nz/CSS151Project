import React, { useState } from 'react';
import applelogo1 from '../../assets/login-modal/applelogo 1.png';
import close from '../../assets/login-modal/close.svg';
import facebooklogo1 from '../../assets/login-modal/facebooklogo 1.png';
import googlelogo1 from '../../assets/login-modal/googlelogo 1.png';
import placeholderImg from '../../assets/guest/placeholder_img.jpg';
import './RegisterModal.css';

export const Register = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration data:', formData);
    // TODO: Implement actual registration logic
    onClose?.();
  };

  const handleSocialLogin = (provider) => {
    console.log(`Social login with ${provider}`);
    // TODO: Implement social login logic
  };

  return (
    <div className="register-modal" role="dialog" aria-modal="true" aria-label="Register">
      <div className="register-modal-backdrop" onClick={onClose} />

      <div className="register-modal-shell">
        <div className="register-modal-shell-surface" />
      </div>

      <div className="register-modal-content">
        <div className="register-modal-image-panel">
          <img className="register-modal-image" alt="Placeholder" src={placeholderImg} />
        </div>

        <div className="register-modal-form">
          <div className="register-modal-title">Create Account</div>

          <form onSubmit={handleSubmit} className="register-modal-form-fields">
            <div className="register-modal-first-name-background" onClick={() => document.getElementById('firstName').focus()}>
              <input
                id="firstName"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name"
                className="register-modal-input"
                required
              />
            </div>

            <div className="register-modal-last-name-background" onClick={() => document.getElementById('lastName').focus()}>
              <input
                id="lastName"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name"
                className="register-modal-input"
                required
              />
            </div>

            <div className="register-modal-email-background" onClick={() => document.getElementById('email').focus()}>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="register-modal-input"
                required
              />
            </div>

            <div className="register-modal-password-background" onClick={() => document.getElementById('password').focus()}>
              <input
                id="password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                className="register-modal-input"
                required
              />
            </div>

            <div className="register-modal-divider">
              <div className="register-modal-divider-left" />
              <div className="register-modal-divider-label">or</div>
              <div className="register-modal-divider-right" />
            </div>

            <div className="register-modal-submit-group">
              <button type="submit" className="register-modal-submit-background">
                Sign Up
              </button>
            </div>
          </form>

          <div className="register-modal-social-block">
            <div className="register-modal-social-label">Sign up with</div>

            <button 
              type="button" 
              className="register-modal-social-btn register-modal-social-btn-apple" 
              aria-label="Sign up with Apple"
              onClick={() => handleSocialLogin('apple')}
            />

            <button 
              type="button" 
              className="register-modal-social-btn register-modal-social-btn-facebook" 
              aria-label="Sign up with Facebook"
              onClick={() => handleSocialLogin('facebook')}
            />

            <button 
              type="button" 
              className="register-modal-social-btn register-modal-social-btn-google" 
              aria-label="Sign up with Google"
              onClick={() => handleSocialLogin('google')}
            />

            <img className="register-modal-social-logo-google" alt="Googlelogo" src={googlelogo1} />
            <img className="register-modal-social-logo-apple" alt="Applelogo" src={applelogo1} />
            <img
              className="register-modal-social-logo-facebook"
              alt="Facebooklogo"
              src={facebooklogo1}
            />
          </div>
        </div>
      </div>

      <img
        className="register-modal-close"
        alt="Close"
        src={close}
        onClick={onClose}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') onClose?.();
        }}
        role="button"
        tabIndex={0}
      />
    </div>
  );
};

export default function RegisterModal({ onClose }) {
  return <Register onClose={onClose} />;
}
