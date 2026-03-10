import React from 'react';
import './ManageEventListModal.css';
import closeIcon from '../../assets/login-modal/close.svg';
import { useCalendar } from '../../contexts/CalendarContext';

const formatDate = (date) => {
  return date.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};

const formatTime = (time) => {
  // Assuming time is in "HH:MM" format
  const [hours, minutes] = time.split(':');
  const date = new Date();
  date.setHours(parseInt(hours, 10));
  date.setMinutes(parseInt(minutes, 10));
  return date.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true 
  });
};

export const ManageEventListModal = ({ isOpen, onClose, onRemoveEvent }) => {
  const { events } = useCalendar();

  if (!isOpen) return null;

  // Group events by date and sort by date
  const eventsByDate = events.reduce((acc, event) => {
    const eventDate = new Date(event.date);
    const dateKey = eventDate.toDateString();
    
    if (!acc[dateKey]) {
      acc[dateKey] = {
        date: eventDate,
        events: []
      };
    }
    acc[dateKey].events.push(event);
    return acc;
  }, {});

  // Sort dates from closest to current date to latest
  const sortedDates = Object.values(eventsByDate).sort((a, b) => {
    return a.date - b.date;
  });

  const handleRemoveEvent = (eventId) => {
    if (onRemoveEvent) {
      onRemoveEvent(eventId);
    }
  };

  return (
    <div className="manage-event-list-modal">
      <div className="manage-event-list-modal-backdrop" />
      <div className="manage-event-list-modal-shell">
        <div className="manage-event-list-modal-shell-surface">
          <button 
            className="manage-event-list-modal-close" 
            onClick={onClose}
            aria-label="Close"
          >
            <img src={closeIcon} alt="Close" />
          </button>

          <div className="manage-event-list-modal-header">
            <div className="manage-event-list-modal-title">Manage Events</div>
          </div>

          <div className="manage-event-list-modal-content">
            {sortedDates.length > 0 ? (
              <div className="manage-event-list-modal-dates-list">
                {sortedDates.map((dateGroup) => (
                  <div key={dateGroup.date.toDateString()} className="manage-event-list-modal-date-section">
                    <div className="manage-event-list-modal-date-header">
                      {formatDate(dateGroup.date)}
                    </div>
                    <div className="manage-event-list-modal-events-list">
                      {dateGroup.events.map((event) => (
                        <div key={event.id} className="manage-event-list-modal-event-card">
                          <div className="manage-event-list-modal-event-info">
                            <div className="manage-event-list-modal-event-title">
                              {event.title}
                            </div>
                            <div className="manage-event-list-modal-event-time">
                              {formatTime(event.time)}
                            </div>
                            <div className="manage-event-list-modal-event-location">
                              {event.location}
                            </div>
                          </div>
                          <button 
                            className="manage-event-list-modal-remove-btn"
                            onClick={() => handleRemoveEvent(event.id)}
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="manage-event-list-modal-no-events">
                No events found
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageEventListModal;