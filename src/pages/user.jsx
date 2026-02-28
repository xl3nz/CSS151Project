import { useEffect, useRef, useState } from 'react';
import { Calendar } from '../components/user/Calendar';
import { CardSection } from '../components/user/CardSection';
import { FeaturedEvent } from '../components/user/FeaturedEvent';
import manageButton from '../assets/user/ManageButton.png';
import menuButton from '../assets/user/MenuButton.png';
import myClaimsButton from '../assets/user/MyClaimsButton.png';
import newDonatonButton from '../assets/user/NewDonatonButton.png';
import primary from '../assets/Primary.png';
import '../styles/user/user.css';

const BASE_WIDTH = 1920;
const BASE_HEIGHT = 1080;

export const User = () => {
  const wrapperRef = useRef(null);
  const [scaleX, setScaleX] = useState(1);
  const [scaleY, setScaleY] = useState(1);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

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

  return (
    <div className="user-scale-wrapper" ref={wrapperRef} style={{ height: `${viewportHeight}px` }}>
      <div
        className="user-stage"
        style={{
          width: `${BASE_WIDTH * (Number.isFinite(scaleX) ? scaleX : 1)}px`,
          height: `${BASE_HEIGHT * (Number.isFinite(scaleY) ? scaleY : 1)}px`,
        }}
      >
        <div className="user" style={{ transform: `scale(${Number.isFinite(scaleX) ? scaleX : 1}, ${Number.isFinite(scaleY) ? scaleY : 1})` }}>
          <img
            className="user-new-donation-button"
            alt="New donaton button"
            src={newDonatonButton}
          />

          <div className="user-search">
            <div className="user-search-field" />

            <div className="user-search-action" />

            <img className="user-search-icon" alt="Primary" src={primary} />

            <div className="user-search-label">Search</div>
          </div>

          <img className="user-manage-button" alt="Manage button" src={manageButton} />

          <img
            className="user-my-claims-button"
            alt="My claims button"
            src={myClaimsButton}
          />

          <img className="user-menu-button" alt="Menu button" src={menuButton} />

          <FeaturedEvent />
          <Calendar />
          <CardSection />
        </div>
      </div>
    </div>
  );
};

export default User;
