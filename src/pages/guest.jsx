import React, { useEffect, useRef, useState } from 'react';
import LoginModal from '../components/modals/LoginModal';
import RegisterModal from '../components/modals/RegisterModal';
import BrowseDonationsModal from '../components/modals/BrowseDonationsModal';
import '../styles/guest/guest.css';
import { guestImages } from '../config/guestImageConfig';

export default function Guest({ onLogin }) {
  const [openModal, setOpenModal] = useState(null);
  const [scaleX, setScaleX] = useState(1);
  const [scaleY, setScaleY] = useState(1);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const wrapperRef = useRef(null);
  const BASE_WIDTH = 1920;
  const BASE_HEIGHT = 1080;

  useEffect(() => {
    if (!wrapperRef.current) return undefined;

    const updateScale = () => {
      const { clientWidth } = wrapperRef.current;
      const rect = wrapperRef.current.getBoundingClientRect();
      const visibleHeight = Math.max(0, window.innerHeight - rect.top);
      if (!clientWidth || !visibleHeight) return;

      setViewportHeight(visibleHeight);
      setScaleX(clientWidth / BASE_WIDTH);
      setScaleY(visibleHeight / BASE_HEIGHT);
    };

    updateScale();

    const resizeObserver = new ResizeObserver(updateScale);
    resizeObserver.observe(wrapperRef.current);
    window.addEventListener('resize', updateScale);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateScale);
    };
  }, []);

  const close = () => setOpenModal(null);

  const handleLogin = (email, password) => {
    const success = onLogin(email, password);
    if (success) {
      setOpenModal(null);
    }
    return success;
  };

  return (
    <div className="guest-scale-wrapper" ref={wrapperRef} style={{ height: '100vh' }}>
      <div
        className="guest-scale-stage"
        style={{
          width: `${BASE_WIDTH * (Number.isFinite(scaleX) ? scaleX : 1)}px`,
          height: `${BASE_HEIGHT * (Number.isFinite(scaleY) ? scaleY : 1)}px`,
        }}
      >
        <div className="guest" style={{ transform: `scale(${Number.isFinite(scaleX) ? scaleX : 1}, ${Number.isFinite(scaleY) ? scaleY : 1})` }}>
          <div className="guest-logo-badge">
            <div className="guest-logo-ring" />
            <img className="guest-logo-image" src={guestImages.logo} alt="logo" />
          </div>

          <div className="guest-about-section">
            <div className="guest-about-title">About Us</div>
            <p className="guest-about-description">
              SendHelp is a project created to support people who need assistance. Our platform allows users to donate
              money, items, food, and even blood to those who are requesting help.<br /><br />The system connects donors and
              recipients in a clear and organized way. Donors can review and respond to requests, while the platform keeps
              track of donations and claims to ensure everything is recorded properly.<br /><br />SendHelp was built as part
              of our academic project, but its purpose is straightforward: to make it easier for people to give help and for
              others to receive it.
            </p>
          </div>

          <div className="guest-members-section">
            <div className="guest-members-title">Members</div>
            <p className="guest-members-list">
              Citra, Dominic S.<br />Cueva, Xyruz Lee A.<br />Dimalaluan, Alfons Niemrad B.<br />Ticzon, Niccolo Earl R.
            </p>
            <div className="guest-members-dot-1" style={{ backgroundImage: `url(${guestImages.domPfp})` }}>
              <div className="guest-member-tooltip">
                <div className="guest-tooltip-content">
                  <div className="guest-tooltip-name">Citra, Dominic S.</div>
                  <div className="guest-tooltip-email">dominics1008@gmail.com</div>
                  <div className="guest-tooltip-phone">09293835093</div>
                </div>
              </div>
            </div>
            <div className="guest-members-dot-2" style={{ backgroundImage: `url(${guestImages.xyPfp})` }}>
              <div className="guest-member-tooltip">
                <div className="guest-tooltip-content">
                  <div className="guest-tooltip-name">Cueva, Xyruz Lee A.</div>
                  <div className="guest-tooltip-email">xyruz.lee.a.cueva@gmail.com</div>
                  <div className="guest-tooltip-phone">09155880094</div>
                </div>
              </div>
            </div>
            <div className="guest-members-dot-3" style={{ backgroundImage: `url(${guestImages.alfonsPfp})` }}>
              <div className="guest-member-tooltip">
                <div className="guest-tooltip-content">
                  <div className="guest-tooltip-name">Dimalaluan, Alfons Niemrad B.</div>
                  <div className="guest-tooltip-email">alfonsbdimalaluan@gmail.com</div>
                  <div className="guest-tooltip-phone">09282485476</div>
                </div>
              </div>
            </div>
            <div className="guest-members-dot-4" style={{ backgroundImage: `url(${guestImages.nicPfp})` }}>
              <div className="guest-member-tooltip">
                <div className="guest-tooltip-content">
                  <div className="guest-tooltip-name">Ticzon, Niccolo Earl R.</div>
                  <div className="guest-tooltip-email">nicoticzon@gmail.com</div>
                  <div className="guest-tooltip-phone">09162285038</div>
                </div>
              </div>
            </div>
          </div>

          <div className="guest-social-section">
            <div className="guest-social-title">Socials</div>
            <a href="https://www.facebook.com/xyruzlee.cueva" target="_blank" rel="noopener noreferrer" className="guest-social-link">
              <div className="guest-social-dot-1" style={{ backgroundImage: `url(${guestImages.fbIcon})` }} />
            </a>
            <a href="mailto:xlac.archer@gmail.com?subject=Hello&body=Hi%20there!" target="_blank" rel="noopener noreferrer" className="guest-social-link">
              <div className="guest-social-dot-2" style={{ backgroundImage: `url(${guestImages.gmailIcon})` }} />
            </a>
            <a href="https://www.instagram.com/mr._lee05/" target="_blank" rel="noopener noreferrer" className="guest-social-link">
              <div className="guest-social-dot-3" style={{ backgroundImage: `url(${guestImages.instaIcon})` }} />
            </a>
            <a href="https://discord.gg/SVwZPesk" target="_blank" rel="noopener noreferrer" className="guest-social-link">
              <div className="guest-social-dot-4" style={{ backgroundImage: `url(${guestImages.discordIcon})` }} />
            </a>
          </div>

          <div className="guest-featured-event">
            <img className="guest-featured-frame" src={guestImages.featuredEventContainer} alt="" />
            <img className="guest-featured-image" src={guestImages.featuredEventBackground} alt="" />
            <div className="guest-featured-title">Featured Event</div>
            <p className="guest-featured-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo nisl odio, in dignissim lectus rutrum at.
              Aliquam erat volutpat.
            </p>
            <button className="guest-featured-login-button" onClick={() => setOpenModal('login')}>
              <div className="guest-featured-login-button-bg" />
              <div className="guest-featured-login-label">Login</div>
              <img className="guest-featured-login-icon" src={guestImages.loginIcon} alt="" />
            </button>
            <div className="guest-featured-details-link">Details</div>
          </div>

          <div className="guest-mission-card">
            <div className="guest-mission-card-base" />
            <div className="guest-info-card-overlay" />
            <p className="guest-info-card-description">
              <span className="guest-info-card-description-text">SendHelp makes it simple for people to support others who need help. We connect those who want to give with those who need it, quickly and directly. <br /></span>
            </p>
            <div className="guest-info-card-pill" />
            <div className="guest-mission-pill-label">Mission</div>
          </div>

          <div className="guest-event-list-card">
            <div className="guest-list-card-base" />
            <img className="guest-event-list-image" src={guestImages.eventListImage} alt="" />
            <p className="guest-list-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo nisl odio, in dignissim lectus rutrum at.
            </p>
            <div className="guest-list-title">Event List</div>
            <div className="guest-list-view-link">View→</div>
          </div>

          <div className="guest-donation-list-card">
            <div className="guest-list-card-base" />
            <img className="guest-donation-list-image" src={guestImages.donationListImage} alt="" />
            <p className="guest-list-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo nisl odio, in dignissim lectus rutrum at.
            </p>
            <div className="guest-list-title">Donation List</div>
            <div className="guest-list-view-link">View→</div>
          </div>

          <div className="guest-vision-card">
            <div className="guest-vision-card-base" />
            <div className="guest-info-card-overlay" />
            <p className="guest-info-card-description">
              <span className="guest-info-card-description-text">We believe helping someone should never be complicated. Our goal is a world where anyone can offer support with just a few clicks. <br /></span>
            </p>
            <div className="guest-info-card-pill" />
            <div className="guest-vision-pill-label">Vision</div>
          </div>

          {openModal === 'login' && <LoginModal onClose={close} onSignUp={() => setOpenModal('register')} onLogin={handleLogin} />}
          {openModal === 'register' && <RegisterModal onClose={close} />}
          {openModal === 'browse' && <BrowseDonationsModal onClose={close} />}
        </div>
      </div>
    </div>
  );
}
