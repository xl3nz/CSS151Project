import './CenterCards.css';
import ManageReportsModal from './ManageReportsModal';

export const CenterCards = ({ onOpenReports }) => {
  return (
    <div className="admin-center-cards">
      <div className="admin-center-cards-layout">
        <div className="admin-center-reports-card">
          <div className="admin-center-reports-bg" />
          <div className="admin-center-reports-title">Reports</div>
          <div className="admin-center-reports-content">
            <div className="admin-center-reports-content-fill">
              {/* Reports list will be displayed here with scroll functionality */}
              <div className="reports-list-scroll">
                <div className="reports-list-header">
                  <h3>Recent Reports</h3>
                  <div className="reports-stats">
                    <span className="stat-item">Total: 15</span>
                    <span className="stat-item">Pending: 8</span>
                    <span className="stat-item">Resolved: 7</span>
                  </div>
                </div>
                
                <div className="reports-cards">
                  <div className="report-card">
                    <div className="report-card-header">
                      <h4 className="report-card-title">Report #R001</h4>
                      <span className="report-card-id">ID: 1001</span>
                    </div>
                    <div className="report-card-details">
                      <div className="report-card-row">
                        <span className="detail-label">Reason:</span>
                        <span className="detail-value reason">Inappropriate Content</span>
                      </div>
                      <div className="report-card-row">
                        <span className="detail-label">Priority:</span>
                        <span className="detail-value priority">High</span>
                      </div>
                      <div className="report-card-row">
                        <span className="detail-label">Status:</span>
                        <span className="detail-value status">Pending</span>
                      </div>
                      <div className="report-card-row">
                        <span className="detail-label">Reported:</span>
                        <span className="detail-value">2024-03-06</span>
                      </div>
                    </div>
                    <div className="report-card-preview">
                      <img src="https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?w=100" alt="Reported item" className="report-card-image" />
                      <div className="report-card-item-info">
                        <p className="item-title">Family of 4 Essentials</p>
                        <span className="item-category">Request</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="report-card">
                    <div className="report-card-header">
                      <h4 className="report-card-title">Report #R002</h4>
                      <span className="report-card-id">ID: 1002</span>
                    </div>
                    <div className="report-card-details">
                      <div className="report-card-row">
                        <span className="detail-label">Reason:</span>
                        <span className="detail-value reason">Spam</span>
                      </div>
                      <div className="report-card-row">
                        <span className="detail-label">Priority:</span>
                        <span className="detail-value priority">Medium</span>
                      </div>
                      <div className="report-card-row">
                        <span className="detail-label">Status:</span>
                        <span className="detail-value status">Resolved</span>
                      </div>
                      <div className="report-card-row">
                        <span className="detail-label">Reported:</span>
                        <span className="detail-value">2024-03-05</span>
                      </div>
                    </div>
                    <div className="report-card-preview">
                      <img src="https://images.unsplash.com/photo-1600148015893-6e1d690b8a5e?w=100" alt="Reported item" className="report-card-image" />
                      <div className="report-card-item-info">
                        <p className="item-title">Canned Goods</p>
                        <span className="item-category">Food</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="report-card">
                    <div className="report-card-header">
                      <h4 className="report-card-title">Report #R003</h4>
                      <span className="report-card-id">ID: 1003</span>
                    </div>
                    <div className="report-card-details">
                      <div className="report-card-row">
                        <span className="detail-label">Reason:</span>
                        <span className="detail-value reason">Fraudulent</span>
                      </div>
                      <div className="report-card-row">
                        <span className="detail-label">Priority:</span>
                        <span className="detail-value priority">High</span>
                      </div>
                      <div className="report-card-row">
                        <span className="detail-label">Status:</span>
                        <span className="detail-value status">Pending</span>
                      </div>
                      <div className="report-card-row">
                        <span className="detail-label">Reported:</span>
                        <span className="detail-value">2024-03-04</span>
                      </div>
                    </div>
                    <div className="report-card-preview">
                      <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100" alt="Reported item" className="report-card-image" />
                      <div className="report-card-item-info">
                        <p className="item-title">Winter Jackets</p>
                        <span className="item-category">Clothing</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="report-card">
                    <div className="report-card-header">
                      <h4 className="report-card-title">Report #R004</h4>
                      <span className="report-card-id">ID: 1004</span>
                    </div>
                    <div className="report-card-details">
                      <div className="report-card-row">
                        <span className="detail-label">Reason:</span>
                        <span className="detail-value reason">Duplicate</span>
                      </div>
                      <div className="report-card-row">
                        <span className="detail-label">Priority:</span>
                        <span className="detail-value priority">Low</span>
                      </div>
                      <div className="report-card-row">
                        <span className="detail-label">Status:</span>
                        <span className="detail-value status">Resolved</span>
                      </div>
                      <div className="report-card-row">
                        <span className="detail-label">Reported:</span>
                        <span className="detail-value">2024-03-03</span>
                      </div>
                    </div>
                    <div className="report-card-preview">
                      <img src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=100" alt="Reported item" className="report-card-image" />
                      <div className="report-card-item-info">
                        <p className="item-title">School Supplies</p>
                        <span className="item-category">Items</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="report-card">
                    <div className="report-card-header">
                      <h4 className="report-card-title">Report #R005</h4>
                      <span className="report-card-id">ID: 1005</span>
                    </div>
                    <div className="report-card-details">
                      <div className="report-card-row">
                        <span className="detail-label">Reason:</span>
                        <span className="detail-value reason">Inappropriate Content</span>
                      </div>
                      <div className="report-card-row">
                        <span className="detail-label">Priority:</span>
                        <span className="detail-value priority">High</span>
                      </div>
                      <div className="report-card-row">
                        <span className="detail-label">Status:</span>
                        <span className="detail-value status">Pending</span>
                      </div>
                      <div className="report-card-row">
                        <span className="detail-label">Reported:</span>
                        <span className="detail-value">2024-03-02</span>
                      </div>
                    </div>
                    <div className="report-card-preview">
                      <img src="https://images.unsplash.com/photo-1578950435899-d3c36ba53236?w=100" alt="Reported item" className="report-card-image" />
                      <div className="report-card-item-info">
                        <p className="item-title">Emergency Kits</p>
                        <span className="item-category">Mixed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modal for detailed report management */}
      <ManageReportsModal 
        isOpen={false} 
        onClose={() => {}} 
      />
    </div>
  );
};

export default CenterCards;
