import React from 'react';
import closeIcon from '../../assets/login-modal/close.svg';
import './CalendarEventModal.css';

const sampleEvents = [
  {
    id: 1,
    title: "Blood Donation Drive",
    time: "10:00 AM - 2:00 PM",
    location: "Community Center",
    description: "Monthly blood donation event for the community",
    date: "2026-03-15"
  },
  {
    id: 2,
    title: "Food Distribution",
    time: "3:00 PM - 5:00 PM",
    location: "St. Mary's Church",
    description: "Weekly food distribution for families in need",
    date: "2026-03-22"
  }
];

export default function CalendarEventModal({ isOpen, onClose, selectedDate }) {
  if (!isOpen) return null;

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const eventsForDate = sampleEvents.filter(event => {
    const eventDate = new Date(event.date);
    const selectedDateObj = new Date(selectedDate);
    return eventDate.getFullYear() === selectedDateObj.getFullYear() &&
           eventDate.getMonth() === selectedDateObj.getMonth() &&
           eventDate.getDate() === selectedDateObj.getDate();
  });

  return (
    <div className="calendar-event-modal">
      <div className="calendar-event-modal-backdrop" />
      
      <div className="calendar-event-modal-shell">
        <div className="calendar-event-modal-shell-surface">
          
          {/* Close Button */}
          <button className="calendar-event-modal-close" onClick={onClose} type="button">
            <img src={closeIcon} alt="Close" />
          </button>

          {/* Header */}
          <div className="calendar-event-modal-header">
            <div className="calendar-event-modal-date">
              {formatDate(selectedDate)}
            </div>
            <div className="calendar-event-modal-title">Events</div>
          </div>

          {/* Events List */}
          <div className="calendar-event-modal-content">
            {eventsForDate.length > 0 ? (
              <div className="calendar-event-modal-events-list">
                {eventsForDate.map((event) => (
                  <div key={event.id} className="calendar-event-modal-event-card">
                    <div className="calendar-event-modal-event-title">{event.title}</div>
                    <div className="calendar-event-modal-event-time">{event.time}</div>
                    <div className="calendar-event-modal-event-location">{event.location}</div>
                    <div className="calendar-event-modal-event-description">{event.description}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="calendar-event-modal-no-events">
                No events scheduled for this date
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}