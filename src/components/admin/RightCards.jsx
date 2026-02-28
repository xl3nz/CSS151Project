import './RightCards.css';

export const RightCards = () => {
  return (
    <div className="admin-right-cards">
      <div className="admin-right-cards-layout">
        <div className="admin-right-mixed-card">
          <div className="admin-right-card-bg-short" />
          <div className="admin-right-title-mixed">Mixed</div>
          <div className="admin-right-content-wrapper"><div className="admin-right-content-fill" /></div>
        </div>

        <div className="admin-right-blood-card">
          <div className="admin-right-card-bg" />
          <div className="admin-right-title-blood">Blood</div>
          <div className="admin-right-card-content"><div className="admin-right-content-fill" /></div>
        </div>

        <div className="admin-right-money-card">
          <div className="admin-right-card-bg-money" />
          <div className="admin-right-content-frame"><div className="admin-right-content-fill" /></div>
          <div className="admin-right-title-money">Money</div>
        </div>

        <div className="admin-right-clothes-card">
          <div className="admin-right-card-bg-clothes" />
          <div className="admin-right-title-clothes">Clothes</div>
          <div className="admin-right-card-content"><div className="admin-right-content-fill" /></div>
        </div>

        <div className="admin-right-food-card">
          <div className="admin-right-card-bg-short" />
          <div className="admin-right-content-frame"><div className="admin-right-content-fill" /></div>
          <div className="admin-right-title-food">Food</div>
        </div>

        <div className="admin-right-items-card">
          <div className="admin-right-card-bg" />
          <div className="admin-right-card-content"><div className="admin-right-content-fill" /></div>
          <div className="admin-right-title-items">Items</div>
        </div>
      </div>
    </div>
  );
};

export default RightCards;
