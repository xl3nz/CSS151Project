import React, { useState } from 'react';
import closeIcon from '../../assets/login-modal/close.svg';
import './ManageAnnouncementsModal.css';

const sampleAnnouncements = [
  {
    id: 'announcement_2001',
    title: 'Emergency Alert',
    content: 'Important announcement about emergency procedures and safety measures that all users should be aware of immediately.',
    type: 'emergency',
    audience: ['all_users'],
    deliveryMethod: 'both',
    status: 'sent',
    scheduledTime: null,
    sentTime: '2024-03-06T09:00:00Z',
    metrics: {
      delivered: 1500,
      opened: 1200,
      clicked: 300
    }
  },
  {
    id: 'announcement_2002',
    title: 'Donation Drive',
    content: 'Join our annual donation drive to help those in need. We are collecting food, clothing, and monetary donations.',
    type: 'event',
    audience: ['donors'],
    deliveryMethod: 'email',
    status: 'scheduled',
    scheduledTime: '2024-03-15T10:00:00Z',
    sentTime: null,
    metrics: {
      delivered: 0,
      opened: 0,
      clicked: 0
    }
  },
  {
    id: 'announcement_2003',
    title: 'System Maintenance',
    content: 'Scheduled system maintenance will take place this weekend. The platform will be temporarily unavailable.',
    type: 'general',
    audience: ['all_users'],
    deliveryMethod: 'sms',
    status: 'draft',
    scheduledTime: null,
    sentTime: null,
    metrics: {
      delivered: 0,
      opened: 0,
      clicked: 0
    }
  },
  {
    id: 'announcement_2004',
    title: 'New Features',
    content: 'We have added exciting new features to improve your experience on our platform. Check out what is new!',
    type: 'general',
    audience: ['all_users'],
    deliveryMethod: 'both',
    status: 'sent',
    scheduledTime: null,
    sentTime: '2024-03-01T14:30:00Z',
    metrics: {
      delivered: 2000,
      opened: 1800,
      clicked: 450
    }
  }
];

const announcementTemplates = [
  {
    name: 'Emergency Alert',
    type: 'emergency',
    content: 'URGENT: [Enter emergency details here]. Please take immediate action and follow the instructions provided.',
    audience: ['all_users'],
    deliveryMethod: 'both'
  },
  {
    name: 'Event Announcement',
    type: 'event',
    content: 'We are excited to announce [Event Name] happening on [Date]. Join us for [Event Details].',
    audience: ['all_users'],
    deliveryMethod: 'email'
  },
  {
    name: 'General Update',
    type: 'general',
    content: 'We have some important updates to share with you. [Enter update details here].',
    audience: ['all_users'],
    deliveryMethod: 'email'
  }
];

export default function ManageAnnouncementsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [selectedAnnouncement, setSelectedAnnouncement] = useState(sampleAnnouncements[0]);
  const [isCreating, setIsCreating] = useState(false);
  const [newAnnouncement, setNewAnnouncement] = useState({
    title: '',
    content: '',
    type: 'general',
    audience: ['all_users'],
    deliveryMethod: 'email',
    scheduleType: 'immediate',
    scheduleDate: '',
    scheduleTime: ''
  });
  const [previewMode, setPreviewMode] = useState(false);

  const formatDate = (dateString) => {
    if (!dateString) return 'Not scheduled';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getAnnouncementTypeColor = (type) => {
    switch (type) {
      case 'emergency': return '#e74c3c';
      case 'event': return '#f39c12';
      case 'general': return '#27ae60';
      default: return '#666666';
    }
  };

  const getAudienceText = (audience) => {
    if (audience.includes('all_users')) return 'All Users';
    const parts = [];
    if (audience.includes('donors')) parts.push('Donors');
    if (audience.includes('recipients')) parts.push('Recipients');
    return parts.join(', ') || 'No audience selected';
  };

  const handleCreateAnnouncement = () => {
    setIsCreating(true);
    setNewAnnouncement({
      title: '',
      content: '',
      type: 'general',
      audience: ['all_users'],
      deliveryMethod: 'email',
      scheduleType: 'immediate',
      scheduleDate: '',
      scheduleTime: ''
    });
  };

  const handleSaveDraft = () => {
    console.log('Saving draft:', newAnnouncement);
    // Add to sample announcements
    const draft = {
      id: `announcement_${Date.now()}`,
      title: newAnnouncement.title,
      content: newAnnouncement.content,
      type: newAnnouncement.type,
      audience: newAnnouncement.audience,
      deliveryMethod: newAnnouncement.deliveryMethod,
      status: 'draft',
      scheduledTime: null,
      sentTime: null,
      metrics: { delivered: 0, opened: 0, clicked: 0 }
    };
    console.log('Draft created:', draft);
    setIsCreating(false);
    setPreviewMode(false);
  };

  const handleSendAnnouncement = () => {
    console.log('Sending announcement:', newAnnouncement);
    // Create announcement
    const announcement = {
      id: `announcement_${Date.now()}`,
      title: newAnnouncement.title,
      content: newAnnouncement.content,
      type: newAnnouncement.type,
      audience: newAnnouncement.audience,
      deliveryMethod: newAnnouncement.deliveryMethod,
      status: newAnnouncement.scheduleType === 'immediate' ? 'sent' : 'scheduled',
      scheduledTime: newAnnouncement.scheduleType === 'scheduled' 
        ? new Date(`${newAnnouncement.scheduleDate}T${newAnnouncement.scheduleTime}`).toISOString()
        : null,
      sentTime: newAnnouncement.scheduleType === 'immediate' ? new Date().toISOString() : null,
      metrics: { delivered: 0, opened: 0, clicked: 0 }
    };
    console.log('Announcement sent:', announcement);
    setIsCreating(false);
    setPreviewMode(false);
  };

  const handleTemplateSelect = (template) => {
    setNewAnnouncement({
      ...newAnnouncement,
      title: template.name,
      content: template.content,
      type: template.type,
      audience: template.audience,
      deliveryMethod: template.deliveryMethod
    });
  };

  const handleAudienceToggle = (audienceType) => {
    const currentAudience = newAnnouncement.audience;
    let newAudience;
    
    if (audienceType === 'all_users') {
      newAudience = currentAudience.includes('all_users') ? [] : ['all_users'];
    } else {
      if (currentAudience.includes('all_users')) {
        newAudience = [audienceType];
      } else {
        newAudience = currentAudience.includes(audienceType)
          ? currentAudience.filter(a => a !== audienceType)
          : [...currentAudience, audienceType];
      }
    }
    
    setNewAnnouncement({ ...newAnnouncement, audience: newAudience });
  };

  const handleDeliveryMethodChange = (method) => {
    setNewAnnouncement({ ...newAnnouncement, deliveryMethod: method });
  };

  const handleScheduleTypeChange = (type) => {
    setNewAnnouncement({ ...newAnnouncement, scheduleType: type });
  };

  return (
    <div className="manage-announcements-modal">
      <div className="manage-announcements-modal-backdrop" onClick={onClose} />

      <div className="manage-announcements-modal-shell">
        <div className="manage-announcements-modal-shell-surface" />
      </div>

      {/* Close Button */}
      <button className="manage-announcements-modal-close" onClick={onClose} type="button">
        <img src={closeIcon} alt="Close" />
      </button>

      <div className="manage-announcements-modal-content">
        <div className="manage-announcements-modal-header">
          <div className="manage-announcements-modal-heading">
            <span className="manage-announcements-modal-heading-manage">Manage</span>
            <span className="manage-announcements-modal-heading-announcements">Announcements</span>
          </div>
          <div className="manage-announcements-modal-subtitle">
            Create and manage announcements for your users
          </div>
        </div>

        <div className="manage-announcements-modal-body">
          {/* Left Panel: Announcement Management */}
          <div className="manage-announcements-left">
            {/* Create New Section */}
            <div className="create-section">
              <div className="create-header">
                <h3>Create New Announcement</h3>
                <button 
                  className="create-button"
                  onClick={handleCreateAnnouncement}
                >
                  + Create Announcement
                </button>
              </div>
              
              {isCreating && (
                <div className="create-form">
                  {/* Form Fields */}
                  <div className="form-group">
                    <label className="form-label">Title</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Enter announcement title"
                      value={newAnnouncement.title}
                      onChange={(e) => setNewAnnouncement({...newAnnouncement, title: e.target.value})}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Type</label>
                    <select
                      className="form-select"
                      value={newAnnouncement.type}
                      onChange={(e) => setNewAnnouncement({...newAnnouncement, type: e.target.value})}
                    >
                      <option value="general">General Update</option>
                      <option value="emergency">Emergency Alert</option>
                      <option value="event">Event Announcement</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Content</label>
                    <textarea
                      className="form-textarea"
                      placeholder="Enter announcement content"
                      value={newAnnouncement.content}
                      onChange={(e) => setNewAnnouncement({...newAnnouncement, content: e.target.value})}
                      rows={6}
                    />
                  </div>

                  {/* Audience Selection */}
                  <div className="form-group">
                    <label className="form-label">Target Audience</label>
                    <div className="audience-options">
                      <label className="audience-option">
                        <input
                          type="checkbox"
                          checked={newAnnouncement.audience.includes('all_users')}
                          onChange={() => handleAudienceToggle('all_users')}
                        />
                        <span>All Users</span>
                      </label>
                      <label className="audience-option">
                        <input
                          type="checkbox"
                          checked={newAnnouncement.audience.includes('donors')}
                          onChange={() => handleAudienceToggle('donors')}
                          disabled={newAnnouncement.audience.includes('all_users')}
                        />
                        <span>Donors</span>
                      </label>
                      <label className="audience-option">
                        <input
                          type="checkbox"
                          checked={newAnnouncement.audience.includes('recipients')}
                          onChange={() => handleAudienceToggle('recipients')}
                          disabled={newAnnouncement.audience.includes('all_users')}
                        />
                        <span>Recipients</span>
                      </label>
                    </div>
                  </div>

                  {/* Delivery Method */}
                  <div className="form-group">
                    <label className="form-label">Delivery Method</label>
                    <div className="delivery-options">
                      <label className="delivery-option">
                        <input
                          type="radio"
                          value="email"
                          checked={newAnnouncement.deliveryMethod === 'email'}
                          onChange={() => handleDeliveryMethodChange('email')}
                        />
                        <span>Email</span>
                      </label>
                      <label className="delivery-option">
                        <input
                          type="radio"
                          value="sms"
                          checked={newAnnouncement.deliveryMethod === 'sms'}
                          onChange={() => handleDeliveryMethodChange('sms')}
                        />
                        <span>SMS</span>
                      </label>
                      <label className="delivery-option">
                        <input
                          type="radio"
                          value="both"
                          checked={newAnnouncement.deliveryMethod === 'both'}
                          onChange={() => handleDeliveryMethodChange('both')}
                        />
                        <span>Both</span>
                      </label>
                    </div>
                  </div>

                  {/* Scheduling */}
                  <div className="form-group">
                    <label className="form-label">Schedule</label>
                    <div className="schedule-options">
                      <label className="schedule-option">
                        <input
                          type="radio"
                          value="immediate"
                          checked={newAnnouncement.scheduleType === 'immediate'}
                          onChange={() => handleScheduleTypeChange('immediate')}
                        />
                        <span>Send Immediately</span>
                      </label>
                      <label className="schedule-option">
                        <input
                          type="radio"
                          value="scheduled"
                          checked={newAnnouncement.scheduleType === 'scheduled'}
                          onChange={() => handleScheduleTypeChange('scheduled')}
                        />
                        <span>Schedule for Later</span>
                      </label>
                    </div>
                    
                    {newAnnouncement.scheduleType === 'scheduled' && (
                      <div className="schedule-inputs">
                        <input
                          type="date"
                          className="form-input schedule-date"
                          value={newAnnouncement.scheduleDate}
                          onChange={(e) => setNewAnnouncement({...newAnnouncement, scheduleDate: e.target.value})}
                        />
                        <input
                          type="time"
                          className="form-input schedule-time"
                          value={newAnnouncement.scheduleTime}
                          onChange={(e) => setNewAnnouncement({...newAnnouncement, scheduleTime: e.target.value})}
                        />
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="form-actions">
                    <button 
                      className="action-button preview"
                      onClick={() => setPreviewMode(!previewMode)}
                    >
                      Preview
                    </button>
                    <button 
                      className="action-button save"
                      onClick={handleSaveDraft}
                    >
                      Save Draft
                    </button>
                    <button 
                      className="action-button send"
                      onClick={handleSendAnnouncement}
                    >
                      {newAnnouncement.scheduleType === 'immediate' ? 'Send Now' : 'Schedule'}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Templates Section */}
            <div className="templates-section">
              <h3>Templates</h3>
              <div className="templates-list">
                {announcementTemplates.map((template, index) => (
                  <div key={index} className="template-card">
                    <div className="template-header">
                      <span className="template-name">{template.name}</span>
                      <span 
                        className="template-type"
                        style={{ color: getAnnouncementTypeColor(template.type) }}
                      >
                        {template.type.toUpperCase()}
                      </span>
                    </div>
                    <div className="template-content">{template.content}</div>
                    <button 
                      className="template-use-button"
                      onClick={() => handleTemplateSelect(template)}
                    >
                      Use Template
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics Section */}
            <div className="metrics-section">
              <h3>Recent Metrics</h3>
              <div className="metrics-summary">
                <div className="metric-item">
                  <span className="metric-label">Total Sent</span>
                  <span className="metric-value">
                    {sampleAnnouncements.reduce((sum, a) => sum + a.metrics.delivered, 0)}
                  </span>
                </div>
                <div className="metric-item">
                  <span className="metric-label">Total Opened</span>
                  <span className="metric-value">
                    {sampleAnnouncements.reduce((sum, a) => sum + a.metrics.opened, 0)}
                  </span>
                </div>
                <div className="metric-item">
                  <span className="metric-label">Total Clicked</span>
                  <span className="metric-value">
                    {sampleAnnouncements.reduce((sum, a) => sum + a.metrics.clicked, 0)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Announcement Details */}
          <div className="manage-announcements-right">
            <div className="announcements-header">
              <h3>Announcements</h3>
              <div className="announcements-stats">
                <span className="stat-item">Total: {sampleAnnouncements.length}</span>
                <span className="stat-item">Sent: {sampleAnnouncements.filter(a => a.status === 'sent').length}</span>
                <span className="stat-item">Scheduled: {sampleAnnouncements.filter(a => a.status === 'scheduled').length}</span>
              </div>
            </div>

            <div className="announcements-list">
              {sampleAnnouncements.map((announcement) => (
                <div 
                  key={announcement.id} 
                  className={`announcement-card ${selectedAnnouncement.id === announcement.id ? 'selected' : ''}`}
                  onClick={() => setSelectedAnnouncement(announcement)}
                >
                  <div className="announcement-header">
                    <div className="announcement-title">{announcement.title}</div>
                    <div 
                      className="announcement-type"
                      style={{ color: getAnnouncementTypeColor(announcement.type) }}
                    >
                      {announcement.type.toUpperCase()}
                    </div>
                  </div>
                  
                  <div className="announcement-details">
                    <div className="announcement-row">
                      <span className="detail-label">Audience:</span>
                      <span className="detail-value">{getAudienceText(announcement.audience)}</span>
                    </div>
                    
                    <div className="announcement-row">
                      <span className="detail-label">Method:</span>
                      <span className="detail-value">{announcement.deliveryMethod}</span>
                    </div>
                    
                    <div className="announcement-row">
                      <span className="detail-label">Status:</span>
                      <span className="detail-value status">{announcement.status.replace('_', ' ').toUpperCase()}</span>
                    </div>
                    
                    <div className="announcement-row">
                      <span className="detail-label">Time:</span>
                      <span className="detail-value">
                        {announcement.status === 'sent' 
                          ? formatDate(announcement.sentTime)
                          : formatDate(announcement.scheduledTime)
                        }
                      </span>
                    </div>
                  </div>
                  
                  <div className="announcement-preview">
                    <p className="announcement-content">{announcement.content}</p>
                  </div>
                  
                  {announcement.status === 'sent' && (
                    <div className="announcement-metrics">
                      <div className="metric">
                        <span className="metric-label">Delivered:</span>
                        <span className="metric-value">{announcement.metrics.delivered}</span>
                      </div>
                      <div className="metric">
                        <span className="metric-label">Opened:</span>
                        <span className="metric-value">{announcement.metrics.opened}</span>
                      </div>
                      <div className="metric">
                        <span className="metric-label">Clicked:</span>
                        <span className="metric-value">{announcement.metrics.clicked}</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Preview Modal */}
          {previewMode && isCreating && (
            <div className="preview-modal">
              <div className="preview-content">
                <h3>Preview</h3>
                <div className="preview-announcement">
                  <div className="preview-header">
                    <span className="preview-title">{newAnnouncement.title}</span>
                    <span 
                      className="preview-type"
                      style={{ color: getAnnouncementTypeColor(newAnnouncement.type) }}
                    >
                      {newAnnouncement.type.toUpperCase()}
                    </span>
                  </div>
                  <div className="preview-body">
                    <p>{newAnnouncement.content}</p>
                  </div>
                  <div className="preview-footer">
                    <div className="preview-info">
                      <span>Audience: {getAudienceText(newAnnouncement.audience)}</span>
                      <span>Method: {newAnnouncement.deliveryMethod}</span>
                      <span>Schedule: {newAnnouncement.scheduleType === 'immediate' ? 'Immediate' : `Scheduled for ${newAnnouncement.scheduleDate} at ${newAnnouncement.scheduleTime}`}</span>
                    </div>
                  </div>
                </div>
                <button 
                  className="preview-close"
                  onClick={() => setPreviewMode(false)}
                >
                  Close Preview
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}