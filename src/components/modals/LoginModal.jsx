import { useState } from 'react';
import applelogo1 from '../../assets/login-modal/applelogo 1.png';
import close from '../../assets/login-modal/close.svg';
import facebooklogo1 from '../../assets/login-modal/facebooklogo 1.png';
import googlelogo1 from '../../assets/login-modal/googlelogo 1.png';
import placeholderImg from '../../assets/guest/placeholder_img.jpg';
import './LoginModal.css';

export const LogIn = ({ onClose, onSignUp, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    const success = onLogin(email, password);
    
    if (!success) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-modal" role="dialog" aria-modal="true" aria-label="Log in">
      <div className="login-modal-backdrop" onClick={onClose} />

      <div className="login-modal-shell">
        <div className="login-modal-shell-surface" />
      </div>

      <div className="login-modal-content">
        <div className="login-modal-image-panel">
          <img className="login-modal-image" alt="Placeholder" src={placeholderImg} />
        </div>

        <p className="login-modal-heading">
          <span className="login-modal-heading-welcome">Welcome</span>
          <span className="login-modal-heading-back">Back</span>
        </p>

        <div className="login-modal-subtitle">Enter your details</div>

        {error && (
          <div className="login-modal-error" role="alert">
            {error}
          </div>
        )}

        <div className="login-modal-social-title">Log in with</div>

        <p className="login-modal-signup-row">
          Don't have an account?&nbsp;
          <button
            type="button"
            className="login-modal-signup-link"
            onClick={onSignUp}
          >
            Sign up
          </button>
        </p>

        <div className="login-modal-divider-label">or</div>

        <button className="login-modal-social-btn login-modal-social-btn-apple" type="button" aria-label="Login with Apple">
          <img className="login-modal-social-icon" alt="Applelogo" src={applelogo1} />
        </button>

        <button className="login-modal-social-btn login-modal-social-btn-google" type="button" aria-label="Login with Google">
          <img className="login-modal-social-icon" alt="Googlelogo" src={googlelogo1} />
        </button>

        <button className="login-modal-social-btn login-modal-social-btn-facebook" type="button" aria-label="Login with Facebook">
          <img className="login-modal-social-icon" alt="Facebooklogo" src={facebooklogo1} />
        </button>

        <div className="login-modal-submit-background" />

        <div className="login-modal-password-background" />

        <div className="login-modal-email-background" />

        <div className="login-modal-divider-left" />

        <div className="login-modal-divider-right" />

        <form onSubmit={handleSubmit}>
          <input
            className="login-modal-email-input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            className="login-modal-password-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label className="login-modal-remember-row">
            <input
              className="login-modal-remember-checkbox"
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <span className="login-modal-remember-label">Remember for 30 days</span>
          </label>

          <button type="submit" className="login-modal-submit-button">
            Log In
          </button>
        </form>
      </div>

      <img
        className="login-modal-close"
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

export default function LoginModal({ onClose, onSignUp, onLogin }) {
  return <LogIn onClose={onClose} onSignUp={onSignUp} onLogin={onLogin} />;
}
