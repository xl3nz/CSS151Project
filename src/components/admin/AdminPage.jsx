import { CalendarContainer } from './CalendarContainer';
import { CenterCards } from './CenterCards';
import { RightCards } from './RightCards';
import hLogo from '../../assets/user/logo.png';
import primary from '../../assets/Primary.png';
import './AdminPage.css';

export const AdminPage = () => {
  return (
    <div className="admin-page">
      <div className="admin-content-panel">
        <div className="admin-content-overlay" />

        <div className="admin-brand-block">
          <div className="admin-brand-surface" />
          <img className="admin-brand-image" alt="H logo" src={hLogo} />
        </div>

        <div className="admin-search">
          <div className="admin-search-field" />
          <div className="admin-search-action" />
          <img className="admin-search-icon" alt="Primary" src={primary} />
          <div className="admin-search-label">Search</div>
        </div>

        <RightCards />
        <CenterCards />

        <div className="admin-tab-events">
          <div className="admin-tab-events-bg" />
          <div className="admin-tab-events-label">Event</div>
        </div>

        <div className="admin-tab-announcements">
          <div className="admin-tab-announcements-bg" />
          <div className="admin-tab-announcements-label">Announcements</div>
        </div>

        <div className="admin-tab-reports">
          <div className="admin-tab-reports-bg" />
          <div className="admin-tab-reports-label">Reports</div>
        </div>

        <CalendarContainer />
      </div>
    </div>
  );
};

export default AdminPage;
