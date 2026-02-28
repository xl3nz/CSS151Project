import leftArrow from '../../assets/user/left-arrow.png';
import logo from '../../assets/user/logo.png';
import rightArrow from '../../assets/user/right-arrow.png';
import './FeaturedEvent.css';

export const FeaturedEvent = () => {
  return (
    <div className="featured-event-box">
      <div className="featured-event">
        <img className="right-arrow" alt="Right arrow" src={rightArrow} />

        <img className="left-arrow" alt="Left arrow" src={leftArrow} />

        <div className="featured-event-content">
          <div className="featured-event-frame" />

          <div className="featured-event-image-layer" />

          <img className="featured-event-logo" alt="Logo" src={logo} />

          <div className="featured-event-title">Featured Event</div>

          <p className="featured-event-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo
            nisl odio, in dignissim lectus rutrum at. Aliquam erat volutpat.
          </p>

          <div className="featured-event-details">Details -&gt;</div>
        </div>
      </div>
    </div>
  );
};
export default FeaturedEvent;
