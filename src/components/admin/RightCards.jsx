import './RightCards.css';
import ManageAnnouncementsModal from './ManageAnnouncementsModal';

export const RightCards = ({ onOpenAnnouncements }) => {
  return (
    <div className="admin-right-cards">
      <div className="admin-right-cards-layout">
        <div className="admin-right-announcement-card">
          <div className="admin-right-announcement-bg" />
          <div className="admin-right-announcement-title">Announcements</div>
          <div className="admin-right-announcement-content">
            <div className="announcements-list-scroll">
              <div className="announcements-header">
                <h3>Recent Announcements</h3>
                <div className="announcements-stats">
                  <span className="stat-item">Total: 4</span>
                  <span className="stat-item">Sent: 2</span>
                  <span className="stat-item">Scheduled: 1</span>
                  <span className="stat-item">Drafts: 1</span>
                </div>
              </div>

              <div className="announcements-list">
                <div className="announcement-card">
                  <div className="announcement-header">
                    <div className="announcement-title">Emergency Alert</div>
                    <div className="announcement-type" style={{ color: '#e74c3c' }}>EMERGENCY</div>
                  </div>
                  
                  <div className="announcement-details">
                    <div className="announcement-row">
                      <span className="detail-label">Audience:</span>
                      <span className="detail-value">All Users</span>
                    </div>
                    
                    <div className="announcement-row">
                      <span className="detail-label">Method:</span>
                      <span className="detail-value">Both</span>
                    </div>
                    
                    <div className="announcement-row">
                      <span className="detail-label">Status:</span>
                      <span className="detail-value status">SENT</span>
                    </div>
                    
                    <div className="announcement-row">
                      <span className="detail-label">Time:</span>
                      <span className="detail-value">March 6, 2024 at 9:00 AM</span>
                    </div>
                  </div>
                  
                  <div className="announcement-preview">
                    <p className="announcement-content">Important announcement about emergency procedures and safety measures that all users should be aware of immediately.</p>
                  </div>
                  
                  <div className="announcement-metrics">
                    <div className="metric">
                      <span className="metric-label">Delivered:</span>
                      <span className="metric-value">1500</span>
                    </div>
                    <div className="metric">
                      <span className="metric-label">Opened:</span>
                      <span className="metric-value">1200</span>
                    </div>
                    <div className="metric">
                      <span className="metric-label">Clicked:</span>
                      <span className="metric-value">300</span>
                    </div>
                  </div>
                </div>

                <div className="announcement-card">
                  <div className="announcement-header">
                    <div className="announcement-title">New Features</div>
                    <div className="announcement-type" style={{ color: '#27ae60' }}>GENERAL</div>
                  </div>
                  
                  <div className="announcement-details">
                    <div className="announcement-row">
                      <span className="detail-label">Audience:</span>
                      <span className="detail-value">All Users</span>
                    </div>
                    
                    <div className="announcement-row">
                      <span className="detail-label">Method:</span>
                      <span className="detail-value">Both</span>
                    </div>
                    
                    <div className="announcement-row">
                      <span className="detail-label">Status:</span>
                      <span className="detail-value status">SENT</span>
                    </div>
                    
                    <div className="announcement-row">
                      <span className="detail-label">Time:</span>
                      <span className="detail-value">March 1, 2024 at 2:30 PM</span>
                    </div>
                  </div>
                  
                  <div className="announcement-preview">
                    <p className="announcement-content">We have added exciting new features to improve your experience on our platform. Check out what is new!</p>
                  </div>
                  
                  <div className="announcement-metrics">
                    <div className="metric">
                      <span className="metric-label">Delivered:</span>
                      <span className="metric-value">2000</span>
                    </div>
                    <div className="metric">
                      <span className="metric-label">Opened:</span>
                      <span className="metric-value">1800</span>
                    </div>
                    <div className="metric">
                      <span className="metric-label">Clicked:</span>
                      <span className="metric-value">450</span>
                    </div>
                  </div>
                </div>

                <div className="announcement-card">
                  <div className="announcement-header">
                    <div className="announcement-title">Donation Drive</div>
                    <div className="announcement-type" style={{ color: '#f39c12' }}>EVENT</div>
                  </div>
                  
                  <div className="announcement-details">
                    <div className="announcement-row">
                      <span className="detail-label">Audience:</span>
                      <span className="detail-value">Donors</span>
                    </div>
                    
                    <div className="announcement-row">
                      <span className="detail-label">Method:</span>
                      <span className="detail-value">Email</span>
                    </div>
                    
                    <div className="announcement-row">
                      <span className="detail-label">Status:</span>
                      <span className="detail-value status">SCHEDULED</span>
                    </div>
                    
                    <div className="announcement-row">
                      <span className="detail-label">Time:</span>
                      <span className="detail-value">March 15, 2024 at 10:00 AM</span>
                    </div>
                  </div>
                  
                  <div className="announcement-preview">
                    <p className="announcement-content">Join our annual donation drive to help those in need. We are collecting food, clothing, and monetary donations.</p>
                  </div>
                  
                  <div className="announcement-metrics">
                    <div className="metric">
                      <span className="metric-label">Delivered:</span>
                      <span className="metric-value">0</span>
                    </div>
                    <div className="metric">
                      <span className="metric-label">Opened:</span>
                      <span className="metric-value">0</span>
                    </div>
                    <div className="metric">
                      <span className="metric-label">Clicked:</span>
                      <span className="metric-value">0</span>
                    </div>
                  </div>
                </div>

                <div className="announcement-card">
                  <div className="announcement-header">
                    <div className="announcement-title">System Maintenance</div>
                    <div className="announcement-type" style={{ color: '#666666' }}>GENERAL</div>
                  </div>
                  
                  <div className="announcement-details">
                    <div className="announcement-row">
                      <span className="detail-label">Audience:</span>
                      <span className="detail-value">All Users</span>
                    </div>
                    
                    <div className="announcement-row">
                      <span className="detail-label">Method:</span>
                      <span className="detail-value">SMS</span>
                    </div>
                    
                    <div className="announcement-row">
                      <span className="detail-label">Status:</span>
                      <span className="detail-value status">DRAFT</span>
                    </div>
                    
                    <div className="announcement-row">
                      <span className="detail-label">Time:</span>
                      <span className="detail-value">Not scheduled</span>
                    </div>
                  </div>
                  
                  <div className="announcement-preview">
                    <p className="announcement-content">Scheduled system maintenance will take place this weekend. The platform will be temporarily unavailable.</p>
                  </div>
                  
                  <div className="announcement-metrics">
                    <div className="metric">
                      <span className="metric-label">Delivered:</span>
                      <span className="metric-value">0</span>
                    </div>
                    <div className="metric">
                      <span className="metric-label">Opened:</span>
                      <span className="metric-value">0</span>
                    </div>
                    <div className="metric">
                      <span className="metric-label">Clicked:</span>
                      <span className="metric-value">0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modal for detailed announcement management */}
      <ManageAnnouncementsModal 
        isOpen={false} 
        onClose={() => {}} 
      />
    </div>
  );
};

export default RightCards;
