import React, { useState } from 'react';
import { CalendarContainer } from './CalendarContainer';
import { CenterCards } from './CenterCards';
import { RightCards } from './RightCards';
import hLogo from '../../assets/user/logo.png';
import './AdminPage.css';

export const AdminPage = ({ onLogout, onAddEvent, onDateClick, onRemoveEvent, onManageEvents, onOpenReports, onOpenAnnouncements }) => {
  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
  };

  const handleManageEvents = () => {
    if (onManageEvents) {
      onManageEvents();
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-content-panel">
        <div className="admin-content-overlay" />

        <div className="admin-brand-block">
          <div className="admin-brand-surface" />
          <img 
            className="admin-brand-image" 
            alt="H logo" 
            src={hLogo} 
            onClick={handleLogout}
            style={{ cursor: 'pointer' }}
          />
        </div>


        <RightCards onOpenAnnouncements={onOpenAnnouncements} />
        <CenterCards onOpenReports={onOpenReports} />

        <div className="admin-tab-events" onClick={handleManageEvents} style={{ cursor: 'pointer' }}>
          <div className="admin-tab-events-bg" />
          <div className="admin-tab-events-label">Event</div>
        </div>

        <div className="admin-tab-announcements" onClick={onOpenAnnouncements} style={{ cursor: 'pointer' }}>
          <div className="admin-tab-announcements-bg" />
          <div className="admin-tab-announcements-label">Announcements</div>
        </div>

        <div className="admin-tab-reports" onClick={onOpenReports} style={{ cursor: 'pointer' }}>
          <div className="admin-tab-reports-bg" />
          <div className="admin-tab-reports-label">Reports</div>
        </div>

        <CalendarContainer onAddEvent={onAddEvent} onDateClick={onDateClick} />
      </div>
    </div>
  );
};

export default AdminPage;
