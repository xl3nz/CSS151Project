import applelogo1 from '../../assets/login-modal/applelogo 1.png';
import close from '../../assets/login-modal/close.svg';
import facebooklogo1 from '../../assets/login-modal/facebooklogo 1.png';
import googlelogo1 from '../../assets/login-modal/googlelogo 1.png';
import placeholderImg from '../../assets/guest/placeholder_img.jpg';
import './RegisterModal.css';

export const Register = ({ onClose }) => {
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

          <div className="register-modal-last-name-background" />

          <div className="register-modal-email-background" />

          <div className="register-modal-password-background" />

          <div className="register-modal-first-name-background" />

          <div className="register-modal-divider">
            <div className="register-modal-divider-left" />

            <div className="register-modal-divider-label">or</div>

            <div className="register-modal-divider-right" />
          </div>

          <div className="register-modal-submit-group">
            <div className="register-modal-submit-background" />

            <div className="register-modal-submit-label">Sign In</div>

            <div className="register-modal-email-label">Email</div>

            <div className="register-modal-password-label">Password</div>
          </div>

          <div className="register-modal-first-name-label-wrap">
            <div className="register-modal-name-label">First Name</div>
          </div>

          <div className="register-modal-last-name-label-wrap">
            <div className="register-modal-name-label">Last Name</div>
          </div>

          <div className="register-modal-social-block">
            <div className="register-modal-social-label">Sign up with</div>

            <button type="button" className="register-modal-social-btn register-modal-social-btn-apple" aria-label="Sign up with Apple" />

            <button type="button" className="register-modal-social-btn register-modal-social-btn-facebook" aria-label="Sign up with Facebook" />

            <button type="button" className="register-modal-social-btn register-modal-social-btn-google" aria-label="Sign up with Google" />

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
