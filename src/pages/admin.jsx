import { useEffect, useRef, useState } from 'react';
import AdminPage from '../components/admin/AdminPage';
import AddEventModal from '../components/modals/AddEventModal';
import CalendarEventModal from '../components/modals/CalendarEventModal';
import ManageEventListModal from '../components/modals/ManageEventListModal';
import ManageReportsModal from '../components/admin/ManageReportsModal';
import ManageAnnouncementsModal from '../components/admin/ManageAnnouncementsModal';
import { useCalendar } from '../contexts/CalendarContext';

const BASE_WIDTH = 1920;
const BASE_HEIGHT = 1080;

export default function Admin({ onLogout }) {
  const wrapperRef = useRef(null);
  const [scaleX, setScaleX] = useState(1);
  const [scaleY, setScaleY] = useState(1);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [isAddEventModalOpen, setIsAddEventModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isManageEventModalOpen, setIsManageEventModalOpen] = useState(false);
  const [isReportsModalOpen, setIsReportsModalOpen] = useState(false);
  const [isAnnouncementsModalOpen, setIsAnnouncementsModalOpen] = useState(false);
  
  const { events, addEvent, removeEvent } = useCalendar();

  useEffect(() => {
    if (!wrapperRef.current) return undefined;

    const updateScale = () => {
      const { clientWidth } = wrapperRef.current;
      const rect = wrapperRef.current.getBoundingClientRect();
      const visibleHeight = Math.max(0, window.innerHeight - rect.top);
      if (!clientWidth || !visibleHeight) return;

      setViewportHeight(visibleHeight);
      setScaleX(clientWidth / BASE_WIDTH);
      setScaleY(visibleHeight / BASE_HEIGHT);
    };

    updateScale();
    const resizeObserver = new ResizeObserver(updateScale);
    resizeObserver.observe(wrapperRef.current);
    window.addEventListener('resize', updateScale);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateScale);
    };
  }, []);

  const safeScaleX = Number.isFinite(scaleX) ? scaleX : 1;
  const safeScaleY = Number.isFinite(scaleY) ? scaleY : 1;

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleEventModalClose = () => {
    setSelectedDate(null);
  };

  const handleAddEvent = (eventData) => {
    addEvent(eventData);
    setIsAddEventModalOpen(false);
  };

  const handleRemoveEvent = (eventId) => {
    removeEvent(eventId);
  };

  const handleManageEvents = () => {
    setIsManageEventModalOpen(true);
  };

  const handleOpenReports = () => {
    setIsReportsModalOpen(true);
  };

  const handleCloseReports = () => {
    setIsReportsModalOpen(false);
  };

  const handleOpenAnnouncements = () => {
    setIsAnnouncementsModalOpen(true);
  };

  const handleCloseAnnouncements = () => {
    setIsAnnouncementsModalOpen(false);
  };

  return (
    <div className="admin-scale-wrapper" ref={wrapperRef} style={{ height: `${viewportHeight}px` }}>
      <div
        className="admin-stage"
        style={{
          width: `${BASE_WIDTH * safeScaleX}px`,
          height: `${BASE_HEIGHT * safeScaleY}px`,
        }}
      >
        <div className="admin-transform-layer" style={{ transform: `scale(${safeScaleX}, ${safeScaleY})` }}>
          <AdminPage 
            onLogout={onLogout}
            onAddEvent={() => setIsAddEventModalOpen(true)} 
            onDateClick={handleDateClick}
            onRemoveEvent={handleRemoveEvent}
            onManageEvents={handleManageEvents}
            onOpenReports={handleOpenReports}
            onOpenAnnouncements={handleOpenAnnouncements}
          />
        </div>
      </div>

      {/* Add Event Modal */}
      {isAddEventModalOpen && (
        <AddEventModal
          isOpen={isAddEventModalOpen}
          onClose={() => setIsAddEventModalOpen(false)}
          onAddEvent={handleAddEvent}
        />
      )}

      {/* Calendar Event Modal */}
      {selectedDate && (
        <CalendarEventModal
          isOpen={!!selectedDate}
          onClose={handleEventModalClose}
          selectedDate={selectedDate}
        />
      )}

      {/* Manage Event List Modal */}
      {isManageEventModalOpen && (
        <ManageEventListModal
          isOpen={isManageEventModalOpen}
          onClose={() => setIsManageEventModalOpen(false)}
          onRemoveEvent={handleRemoveEvent}
        />
      )}

      {/* Manage Reports Modal */}
      {isReportsModalOpen && (
        <ManageReportsModal
          isOpen={isReportsModalOpen}
          onClose={handleCloseReports}
        />
      )}

      {/* Manage Announcements Modal */}
      {isAnnouncementsModalOpen && (
        <ManageAnnouncementsModal
          isOpen={isAnnouncementsModalOpen}
          onClose={handleCloseAnnouncements}
        />
      )}
    </div>
  );
}
