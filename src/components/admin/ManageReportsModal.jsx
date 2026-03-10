import React, { useState } from 'react';
import closeIcon from '../../assets/login-modal/close.svg';
import './ManageReportsModal.css';

const sampleReports = [
  {
    id: 'report_1001',
    donationId: 'donation_5001',
    donationTitle: 'Children\'s Clothing',
    reason: 'suspicious_activity',
    reasonText: 'Suspicious Activity',
    description: 'This seems like a scam. The donor is asking for personal information.',
    reporterId: 'user_456',
    reporterName: 'Anonymous User',
    timestamp: '2024-03-06T10:30:00Z',
    status: 'pending',
    priority: 'high',
    evidence: ['https://images.unsplash.com/photo-1507133752784-731f782cc8db?w=200'],
    reportedItem: {
      title: 'Children\'s Clothing',
      category: 'Clothing',
      donor: 'John Doe',
      description: 'Various sizes for children aged 5-12',
      image: 'https://images.unsplash.com/photo-1507133752784-731f782cc8db?w=200'
    }
  },
  {
    id: 'report_1002',
    donationId: 'donation_5002',
    donationTitle: 'Food Donation',
    reason: 'duplicate_listing',
    reasonText: 'Duplicate Listing',
    description: 'This item has been listed multiple times by the same user.',
    reporterId: 'user_789',
    reporterName: 'Anonymous User',
    timestamp: '2024-03-06T08:15:00Z',
    status: 'pending',
    priority: 'medium',
    evidence: [],
    reportedItem: {
      title: 'Food Donation',
      category: 'Food',
      donor: 'Jane Smith',
      description: 'Assorted canned goods and rice',
      image: 'https://images.unsplash.com/photo-1600148015893-6e1d690b8a5e?w=200'
    }
  },
  {
    id: 'report_1003',
    donationId: 'donation_5003',
    donationTitle: 'Medical Expenses',
    reason: 'inappropriate_content',
    reasonText: 'Inappropriate Content',
    description: 'The listing contains inappropriate language and images.',
    reporterId: 'user_123',
    reporterName: 'Anonymous User',
    timestamp: '2024-03-05T16:45:00Z',
    status: 'under_review',
    priority: 'high',
    evidence: ['https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=200'],
    reportedItem: {
      title: 'Medical Expenses',
      category: 'Money',
      donor: 'Bob Johnson',
      description: 'Medical treatment for elderly parent',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=200'
    }
  }
];

export default function ManageReportsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [selectedReport, setSelectedReport] = useState(sampleReports[0]);
  const [adminComment, setAdminComment] = useState('');
  const [actionHistory, setActionHistory] = useState([
    {
      action: 'reviewed',
      adminId: 'admin_001',
      adminName: 'Admin User',
      timestamp: '2024-03-06T11:00:00Z',
      notes: 'Initial review completed'
    }
  ]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleDecision = (decision) => {
    console.log(`Admin decision: ${decision} for report ${selectedReport.id}`);
    console.log(`Comment: ${adminComment}`);
    
    // Add to action history
    const newAction = {
      action: decision,
      adminId: 'admin_001',
      adminName: 'Admin User',
      timestamp: new Date().toISOString(),
      notes: adminComment || 'No additional notes'
    };
    
    setActionHistory([...actionHistory, newAction]);
    setAdminComment('');
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return '#e74c3c';
      case 'medium': return '#f39c12';
      case 'low': return '#27ae60';
      default: return '#666666';
    }
  };

  const getReasonColor = (reason) => {
    switch (reason) {
      case 'suspicious_activity': return '#e74c3c';
      case 'duplicate_listing': return '#f39c12';
      case 'inappropriate_content': return '#e74c3c';
      case 'spam': return '#9b59b6';
      default: return '#666666';
    }
  };

  return (
    <div className="manage-reports-modal">
      <div className="manage-reports-modal-backdrop" onClick={onClose} />

      <div className="manage-reports-modal-shell">
        <div className="manage-reports-modal-shell-surface" />
      </div>

      {/* Close Button */}
      <button className="manage-reports-modal-close" onClick={onClose} type="button">
        <img src={closeIcon} alt="Close" />
      </button>

      <div className="manage-reports-modal-content">
        <div className="manage-reports-modal-header">
          <div className="manage-reports-modal-heading">
            <span className="manage-reports-modal-heading-manage">Manage</span>
            <span className="manage-reports-modal-heading-reports">Reports</span>
          </div>
          <div className="manage-reports-modal-subtitle">
            Review and take action on reported donation items
          </div>
        </div>

        <div className="manage-reports-modal-body">
          {/* Reports List */}
          <div className="manage-reports-list">
            <div className="manage-reports-list-header">
              <h3>Reported Items</h3>
              <div className="manage-reports-stats">
                <span className="stat-item">Total: {sampleReports.length}</span>
                <span className="stat-item">Pending: {sampleReports.filter(r => r.status === 'pending').length}</span>
                <span className="stat-item">High Priority: {sampleReports.filter(r => r.priority === 'high').length}</span>
              </div>
            </div>
            
            <div className="manage-reports-cards">
              {sampleReports.map((report) => (
                <div 
                  key={report.id} 
                  className={`manage-reports-card ${selectedReport.id === report.id ? 'selected' : ''}`}
                  onClick={() => setSelectedReport(report)}
                >
                  <div className="report-card-header">
                    <div className="report-card-title">{report.donationTitle}</div>
                    <div className="report-card-id">Report #{report.id.split('_')[1]}</div>
                  </div>
                  
                  <div className="report-card-details">
                    <div className="report-card-row">
                      <span className="detail-label">Reason:</span>
                      <span 
                        className="detail-value reason"
                        style={{ color: getReasonColor(report.reason) }}
                      >
                        {report.reasonText}
                      </span>
                    </div>
                    
                    <div className="report-card-row">
                      <span className="detail-label">Priority:</span>
                      <span 
                        className="detail-value priority"
                        style={{ color: getPriorityColor(report.priority) }}
                      >
                        {report.priority.toUpperCase()}
                      </span>
                    </div>
                    
                    <div className="report-card-row">
                      <span className="detail-label">Status:</span>
                      <span className="detail-value status">{report.status.replace('_', ' ').toUpperCase()}</span>
                    </div>
                    
                    <div className="report-card-row">
                      <span className="detail-label">Time:</span>
                      <span className="detail-value">{formatDate(report.timestamp)}</span>
                    </div>
                  </div>
                  
                  <div className="report-card-preview">
                    <img 
                      src={report.reportedItem.image} 
                      alt={report.reportedItem.title}
                      className="report-card-image"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0zMDMwTDMwIDMwWkkiIHN0cm9rZT0iIzhDODU5MiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==';
                      }}
                    />
                    <div className="report-card-item-info">
                      <div className="item-title">{report.reportedItem.title}</div>
                      <div className="item-category">{report.reportedItem.category}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Report Details */}
          <div className="manage-reports-details">
            <div className="manage-reports-details-header">
              <h3>Report Details</h3>
              <div className="report-id">Report #{selectedReport.id.split('_')[1]}</div>
            </div>

            {/* Report Information */}
            <div className="report-section">
              <h4>Report Information</h4>
              <div className="report-info-grid">
                <div className="info-item">
                  <span className="info-label">Reported Item:</span>
                  <span className="info-value">{selectedReport.donationTitle}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Category:</span>
                  <span className="info-value">{selectedReport.reportedItem.category}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Reason:</span>
                  <span 
                    className="info-value reason"
                    style={{ color: getReasonColor(selectedReport.reason) }}
                  >
                    {selectedReport.reasonText}
                  </span>
                </div>
                <div className="info-item">
                  <span className="info-label">Priority:</span>
                  <span 
                    className="info-value priority"
                    style={{ color: getPriorityColor(selectedReport.priority) }}
                  >
                    {selectedReport.priority.toUpperCase()}
                  </span>
                </div>
                <div className="info-item">
                  <span className="info-label">Status:</span>
                  <span className="info-value status">{selectedReport.status.replace('_', ' ').toUpperCase()}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Reported:</span>
                  <span className="info-value">{formatDate(selectedReport.timestamp)}</span>
                </div>
              </div>
              
              <div className="report-description">
                <span className="description-label">Description:</span>
                <p className="description-text">{selectedReport.description}</p>
              </div>
            </div>

            {/* Reported Item Preview */}
            <div className="report-section">
              <h4>Reported Item Preview</h4>
              <div className="reported-item-preview">
                <img 
                  src={selectedReport.reportedItem.image} 
                  alt={selectedReport.reportedItem.title}
                  className="reported-item-image"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik02MCA2MEw2MCA2MFoiIHN0cm9rZT0iIzhDODU5MiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==';
                  }}
                />
                <div className="reported-item-details">
                  <div className="item-detail-row">
                    <span className="detail-label">Title:</span>
                    <span className="detail-value">{selectedReport.reportedItem.title}</span>
                  </div>
                  <div className="item-detail-row">
                    <span className="detail-label">Category:</span>
                    <span className="detail-value">{selectedReport.reportedItem.category}</span>
                  </div>
                  <div className="item-detail-row">
                    <span className="detail-label">Donor:</span>
                    <span className="detail-value">{selectedReport.reportedItem.donor}</span>
                  </div>
                  <div className="item-detail-row">
                    <span className="detail-label">Description:</span>
                    <span className="detail-value">{selectedReport.reportedItem.description}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Admin Actions */}
            <div className="report-section">
              <h4>Admin Actions</h4>
              <div className="admin-actions">
                <div className="action-buttons">
                  <button 
                    className="action-button false-report"
                    onClick={() => handleDecision('false_report')}
                  >
                    False Report
                  </button>
                  <button 
                    className="action-button warning"
                    onClick={() => handleDecision('warning')}
                  >
                    Valid Report - Warning
                  </button>
                  <button 
                    className="action-button remove"
                    onClick={() => handleDecision('remove_listing')}
                  >
                    Valid Report - Remove Listing
                  </button>
                </div>
                
                <div className="admin-comment">
                  <label htmlFor="adminComment" className="comment-label">Admin Comments (Optional):</label>
                  <textarea
                    id="adminComment"
                    className="comment-input"
                    placeholder="Add any additional notes or comments about this decision..."
                    value={adminComment}
                    onChange={(e) => setAdminComment(e.target.value)}
                    rows={4}
                  />
                </div>
              </div>
            </div>

            {/* Action History */}
            <div className="report-section">
              <h4>Action History</h4>
              <div className="action-history">
                {actionHistory.map((action, index) => (
                  <div key={index} className="history-item">
                    <div className="history-header">
                      <span className="history-action">{action.action.replace('_', ' ').toUpperCase()}</span>
                      <span className="history-admin">by {action.adminName}</span>
                    </div>
                    <div className="history-time">{formatDate(action.timestamp)}</div>
                    <div className="history-notes">{action.notes}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}