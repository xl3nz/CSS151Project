import React, { useState } from 'react';
import closeIcon from '../../assets/login-modal/close.svg';
import { useCalendar } from '../../contexts/CalendarContext';
import './AddEventModal.css';

export default function AddEventModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { addEvent } = useCalendar();
  
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    description: ''
  });
  const [locationType, setLocationType] = useState('Face-to-Face');
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleLocationTypeChange = (type) => {
    setLocationType(type);
    // Clear location error when user changes location type
    if (errors.location) {
      setErrors(prev => ({
        ...prev,
        location: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Event name is required';
    }
    
    if (!formData.date) {
      newErrors.date = 'Date is required';
    }
    
    if (!formData.time) {
      newErrors.time = 'Time is required';
    }
    
    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Create event object
    const eventData = {
      title: formData.title,
      date: formData.date,
      time: formData.time,
      location: `${locationType}: ${formData.location}`,
      description: formData.description
    };

    // Add event to calendar
    addEvent(eventData);
    
    // Reset form
    setFormData({
      title: '',
      date: '',
      time: '',
      location: '',
      description: ''
    });
    setLocationType('Face-to-Face');
    setErrors({});
    
    // Close modal
    onClose();
  };

  return (
    <div className="add-event-modal">
      <div className="add-event-modal-backdrop" />
      
      <div className="add-event-modal-shell">
        <div className="add-event-modal-shell-surface">
          
          {/* Close Button */}
          <button className="add-event-modal-close" onClick={onClose} type="button">
            <img src={closeIcon} alt="Close" />
          </button>

          {/* Header */}
          <div className="add-event-modal-header">
            <div className="add-event-modal-title">Add New Event</div>
          </div>

          {/* Form */}
          <form className="add-event-modal-form" onSubmit={handleSubmit}>
            <div className="add-event-modal-field">
              <label className="add-event-modal-label">Event Name</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className={`add-event-modal-input ${errors.title ? 'error' : ''}`}
                placeholder="Enter event name"
              />
              {errors.title && <span className="add-event-modal-error">{errors.title}</span>}
            </div>

            <div className="add-event-modal-field">
              <label className="add-event-modal-label">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className={`add-event-modal-input ${errors.date ? 'error' : ''}`}
              />
              {errors.date && <span className="add-event-modal-error">{errors.date}</span>}
            </div>

            <div className="add-event-modal-field">
              <label className="add-event-modal-label">Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                className={`add-event-modal-input ${errors.time ? 'error' : ''}`}
              />
              {errors.time && <span className="add-event-modal-error">{errors.time}</span>}
            </div>

            <div className="add-event-modal-field">
              <label className="add-event-modal-label">Location Type</label>
              <div className="add-event-modal-location-types">
                <label className={`add-event-modal-location-type ${locationType === 'Face-to-Face' ? 'active' : ''}`}>
                  <input
                    type="radio"
                    name="locationType"
                    value="Face-to-Face"
                    checked={locationType === 'Face-to-Face'}
                    onChange={() => handleLocationTypeChange('Face-to-Face')}
                  />
                  Face-to-Face
                </label>
                <label className={`add-event-modal-location-type ${locationType === 'Online' ? 'active' : ''}`}>
                  <input
                    type="radio"
                    name="locationType"
                    value="Online"
                    checked={locationType === 'Online'}
                    onChange={() => handleLocationTypeChange('Online')}
                  />
                  Online
                </label>
              </div>
            </div>

            <div className="add-event-modal-field">
              <label className="add-event-modal-label">Location Details</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className={`add-event-modal-input ${errors.location ? 'error' : ''}`}
                placeholder={locationType === 'Face-to-Face' ? "Enter venue name/address" : "Enter platform/link"}
              />
              {errors.location && <span className="add-event-modal-error">{errors.location}</span>}
            </div>

            <div className="add-event-modal-field">
              <label className="add-event-modal-label">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className={`add-event-modal-textarea ${errors.description ? 'error' : ''}`}
                placeholder="Enter event description"
                rows="3"
              />
              {errors.description && <span className="add-event-modal-error">{errors.description}</span>}
            </div>

            <div className="add-event-modal-actions">
              <button type="button" className="add-event-modal-cancel" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="add-event-modal-submit">
                Add Event
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}