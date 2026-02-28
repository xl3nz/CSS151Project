import bloodImg from '../../assets/user/blood-img.png';
import clothesImg from '../../assets/user/clothes-img.png';
import foodImg from '../../assets/user/food-img.png';
import itemImg from '../../assets/user/item-img.png';
import mixedImg from '../../assets/user/mixed-img.png';
import moneyImg from '../../assets/user/money-img.png';
import './CardSection.css';

export const CardSection = () => {
  return (
    <div className="card-section-box">
      <div className="card-section-layout">
        <div className="card-section-tray">
          <div className="card-section-tray-top" />

          <div className="card-section-tray-bottom" />

          <div className="card-section-tray-side" />
        </div>

        <div className="card-section-title">Donation Categories</div>

        <div className="card-section-cards">
          <div className="donation-card-mixed">
            <div className="donation-card-base" />

            <div className="donation-card-overlay" />

            <div className="donation-card-image-frame" />

            <img className="donation-card-image" alt="Mixed img" src={mixedImg} />

            <div className="donation-card-label">Mixed</div>
          </div>

          <div className="donation-card-money">
            <div className="donation-card-base-alt" />

            <div className="donation-card-overlay-alt" />

            <div className="donation-card-label-money">Money</div>

            <div className="donation-card-image-frame" />

            <img className="donation-card-image" alt="Money img" src={moneyImg} />
          </div>

          <div className="donation-card-clothes">
            <div className="donation-card-base-alt" />

            <div className="donation-card-overlay-alt" />

            <div className="donation-card-label-clothes">Clothes</div>

            <div className="donation-card-image-frame" />

            <img className="donation-card-image" alt="Clothes img" src={clothesImg} />
          </div>

          <div className="donation-card-items">
            <div className="donation-card-base-alt" />

            <div className="donation-card-overlay-alt" />

            <div className="donation-card-label-items">Items</div>

            <div className="donation-card-image-frame" />

            <img className="donation-card-image" alt="Item img" src={itemImg} />
          </div>

          <div className="donation-card-food">
            <div className="donation-card-base-alt" />

            <div className="donation-card-overlay-alt" />

            <div className="donation-card-label-food">Food</div>

            <div className="donation-card-image-frame" />

            <img className="donation-card-image" alt="Food img" src={foodImg} />
          </div>

          <div className="donation-card-blood">
            <div className="donation-card-base-alt" />

            <div className="donation-card-overlay-alt" />

            <div className="donation-card-label-blood">Blood</div>

            <div className="donation-card-image-frame" />

            <img className="donation-card-image" alt="Blood img" src={bloodImg} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardSection;
