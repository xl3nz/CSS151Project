import './CenterCards.css';

export const CenterCards = () => {
  return (
    <div className="admin-center-cards">
      <div className="admin-center-cards-layout">
        <div className="admin-center-reports-card">
          <div className="admin-center-reports-bg" />
          <div className="admin-center-reports-title">Reports</div>
          <div className="admin-center-reports-content"><div className="admin-center-reports-content-fill" /></div>
        </div>

        <div className="admin-center-announcement-card">
          <div className="admin-center-announcement-bg" />
          <div className="admin-center-announcement-title">Announcements</div>
          <div className="admin-center-announcement-content" />
        </div>

        <div className="admin-center-announcement-card duplicate">
          <div className="admin-center-announcement-bg" />
          <div className="admin-center-announcement-title">Announcements</div>
          <div className="admin-center-announcement-content" />
        </div>
      </div>
    </div>
  );
};

export default CenterCards;
