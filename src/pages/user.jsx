import { useEffect, useRef, useState } from 'react';
import { Calendar } from '../components/user/Calendar';
import { CardSection } from '../components/user/CardSection';
import { FeaturedEvent } from '../components/user/FeaturedEvent';
import CalendarEventModal from '../components/modals/CalendarEventModal';
import CreateDonationModal from '../components/modals/CreateDonationModal';
import ManageDonationModal from '../components/modals/ManageDonationModal';
import MyClaimsModal from '../components/modals/MyClaimsModal';
import MenuBarModal from '../components/modals/MenuBarModal';
import DonationListModal from '../components/modals/DonationListModal';
import DonateMoneyModal from '../components/modals/DonateMoneyModal';
import SearchedItemsModal from '../components/modals/SearchedItemsModal';
import { useCalendar } from '../contexts/CalendarContext';
import manageButton from '../assets/user/ManageButton.png';
import menuButton from '../assets/user/MenuButton.png';
import myClaimsButton from '../assets/user/MyClaimsButton.png';
import newDonatonButton from '../assets/user/NewDonatonButton.png';
import primary from '../assets/Primary.png';
import '../styles/user/user.css';

const BASE_WIDTH = 1920;
const BASE_HEIGHT = 1080;

export const User = ({ onLogout }) => {
  const wrapperRef = useRef(null);
  const [scaleX, setScaleX] = useState(1);
  const [scaleY, setScaleY] = useState(1);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isCalendarEventModalOpen, setIsCalendarEventModalOpen] = useState(false);
  const [isCreateDonationModalOpen, setIsCreateDonationModalOpen] = useState(false);
  const [isManageDonationModalOpen, setIsManageDonationModalOpen] = useState(false);
  const [isMyClaimsModalOpen, setIsMyClaimsModalOpen] = useState(false);
  const [isMenuBarModalOpen, setIsMenuBarModalOpen] = useState(false);
  const [isDonationListModalOpen, setIsDonationListModalOpen] = useState(false);
  const [isDonateMoneyModalOpen, setIsDonateMoneyModalOpen] = useState(false);
  const [isSearchedItemsModalOpen, setIsSearchedItemsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchActive, setIsSearchActive] = useState(false);

  // Use calendar context
  const { events } = useCalendar();

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

  return (
    <div className="user-scale-wrapper" ref={wrapperRef} style={{ height: `${viewportHeight}px` }}>
      <div
        className="user-stage"
        style={{
          width: `${BASE_WIDTH * (Number.isFinite(scaleX) ? scaleX : 1)}px`,
          height: `${BASE_HEIGHT * (Number.isFinite(scaleY) ? scaleY : 1)}px`,
        }}
      >
        <div className="user" style={{ transform: `scale(${Number.isFinite(scaleX) ? scaleX : 1}, ${Number.isFinite(scaleY) ? scaleY : 1})` }}>
          <button
            className="user-new-donation-button"
            onClick={() => setIsCreateDonationModalOpen(true)}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer'
            }}
          >
            <img
              alt="New donation button"
              src={newDonatonButton}
            />
          </button>

          <div className="user-search">
            <div 
              className="user-search-field"
              onClick={() => setIsSearchActive(true)}
            >
              {isSearchActive ? (
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && searchQuery.trim()) {
                      setIsSearchedItemsModalOpen(true);
                    } else if (e.key === 'Escape') {
                      if (!searchQuery.trim()) {
                        setIsSearchActive(false);
                      }
                    }
                  }}
                  placeholder="Search items..."
                  className="user-search-input"
                  autoFocus
                  onBlur={() => {
                    if (!searchQuery.trim()) {
                      setIsSearchActive(false);
                    }
                  }}
                />
              ) : (
                <div className="user-search-label">
                  Search
                </div>
              )}
            </div>

            <div 
              className="user-search-action"
              onClick={() => {
                if (searchQuery.trim()) {
                  setIsSearchedItemsModalOpen(true);
                }
              }}
            />

            <img 
              className="user-search-icon" 
              alt="Primary" 
              src={primary}
              onClick={() => {
                if (searchQuery.trim()) {
                  setIsSearchedItemsModalOpen(true);
                }
              }}
            />
          </div>

          <button
            className="user-manage-button"
            onClick={() => setIsManageDonationModalOpen(true)}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer'
            }}
          >
            <img
              alt="Manage button"
              src={manageButton}
            />
          </button>

          <button
            className="user-my-claims-button"
            onClick={() => setIsMyClaimsModalOpen(true)}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer'
            }}
          >
            <img
              alt="My claims button"
              src={myClaimsButton}
            />
          </button>

          <button
            className="user-menu-button"
            onClick={() => setIsMenuBarModalOpen(true)}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer'
            }}
          >
            <img
              alt="Menu button"
              src={menuButton}
            />
          </button>

          <FeaturedEvent />
          <Calendar 
            events={events}
            onDateClick={(date) => {
              setSelectedDate(date);
              setIsCalendarEventModalOpen(true);
            }} 
          />
          <CardSection onCategoryClick={(category) => {
            setSelectedCategory(category);
            setIsDonationListModalOpen(true);
          }} />

          {/* Calendar Event Modal */}
          {isCalendarEventModalOpen && (
            <CalendarEventModal
              isOpen={isCalendarEventModalOpen}
              onClose={() => setIsCalendarEventModalOpen(false)}
              selectedDate={selectedDate}
            />
          )}

          {/* Create Donation Modal */}
          {isCreateDonationModalOpen && (
            <CreateDonationModal
              isOpen={isCreateDonationModalOpen}
              onClose={() => setIsCreateDonationModalOpen(false)}
              onMoneyCategorySelected={() => {
                setIsCreateDonationModalOpen(false);
                setIsDonateMoneyModalOpen(true);
              }}
            />
          )}

          {/* Manage Donation Modal */}
          {isManageDonationModalOpen && (
            <ManageDonationModal
              isOpen={isManageDonationModalOpen}
              onClose={() => setIsManageDonationModalOpen(false)}
            />
          )}

          {/* My Claims Modal */}
          {isMyClaimsModalOpen && (
            <MyClaimsModal
              isOpen={isMyClaimsModalOpen}
              onClose={() => setIsMyClaimsModalOpen(false)}
            />
          )}

          {/* Menu Bar Modal */}
          {isMenuBarModalOpen && (
            <MenuBarModal
              isOpen={isMenuBarModalOpen}
              onClose={() => setIsMenuBarModalOpen(false)}
              onLogout={onLogout}
            />
          )}

          {/* Donation List Modal */}
          {isDonationListModalOpen && (
            <DonationListModal
              isOpen={isDonationListModalOpen}
              onClose={() => setIsDonationListModalOpen(false)}
              category={selectedCategory}
            />
          )}

          {/* Donate Money Modal */}
          {isDonateMoneyModalOpen && (
            <DonateMoneyModal
              isOpen={isDonateMoneyModalOpen}
              onClose={() => setIsDonateMoneyModalOpen(false)}
              onSuccess={(donationData) => {
                console.log('Money donation successful:', donationData);
                // TODO: Add donation to the money category list
              }}
            />
          )}

          {/* Searched Items Modal */}
          {isSearchedItemsModalOpen && (
            <SearchedItemsModal
              isOpen={isSearchedItemsModalOpen}
              onClose={() => {
                setIsSearchedItemsModalOpen(false);
                setIsSearchActive(false);
                setSearchQuery('');
              }}
              searchQuery={searchQuery}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default User;
