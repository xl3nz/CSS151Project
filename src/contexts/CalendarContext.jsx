import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

// Create the context
const CalendarContext = createContext();

// Provider component
export const CalendarProvider = ({ children }) => {
  // Load events from localStorage on mount
  const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem('calendarEvents');
    if (savedEvents) {
      try {
        return JSON.parse(savedEvents);
      } catch (error) {
        console.error('Error parsing saved events:', error);
      }
    }
    // Initial sample events if no saved events
    return [
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
  });

  // Add new event
  const addEvent = useCallback((eventData) => {
    const newEvent = {
      id: Date.now(), // Simple ID generation
      ...eventData
    };
    setEvents(prevEvents => [...prevEvents, newEvent]);
    return newEvent;
  }, []);

  // Remove event
  const removeEvent = useCallback((eventId) => {
    setEvents(prevEvents => prevEvents.filter(event => event.id !== eventId));
  }, []);

  // Update event
  const updateEvent = useCallback((eventId, updatedData) => {
    setEvents(prevEvents => 
      prevEvents.map(event => 
        event.id === eventId 
          ? { ...event, ...updatedData }
          : event
      )
    );
  }, []);

  // Save events to localStorage whenever events change
  useEffect(() => {
    localStorage.setItem('calendarEvents', JSON.stringify(events));
  }, [events]);

  const value = {
    events,
    addEvent,
    removeEvent,
    updateEvent
  };

  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  );
};

// Custom hook to use the calendar context
export const useCalendar = () => {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error('useCalendar must be used within a CalendarProvider');
  }
  return context;
};

export default CalendarContext;