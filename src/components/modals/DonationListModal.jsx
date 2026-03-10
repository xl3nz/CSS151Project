import React from 'react';
import closeIcon from '../../assets/login-modal/close.svg';
import DonationCard from '../../components/DonationCard';
import './DonationListModal.css';

const sampleDonations = {
  request: [
    {
      id: 1,
      name: "Family of 4 Essentials",
      image: "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?w=200",
      quantity: "Requesting: 20kg rice, 10 cans, 4 jackets",
      description: "Family needs basic food and clothing supplies for winter"
    },
    {
      id: 2,
      name: "Medical Expenses",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=200",
      quantity: "Requesting: ₱15,000",
      description: "Medical treatment for elderly parent"
    },
    {
      id: 3,
      name: "School Supplies",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=200",
      quantity: "Requesting: 5 school kits",
      description: "For 5 children in need of complete school supplies"
    },
    {
      id: 4,
      name: "Home Repair Materials",
      image: "https://images.unsplash.com/photo-1526976675015-3f1a2d7e7073?w=200",
      quantity: "Requesting: Lumber, nails, paint",
      description: "Repairing damaged roof after storm"
    },
    {
      id: 5,
      name: "Baby Care Package",
      image: "https://images.unsplash.com/photo-1511135032425-342401f36c55?w=200",
      quantity: "Requesting: Diapers, formula, clothes",
      description: "Newborn baby needs essential care items"
    }
  ],
  food: [
    {
      id: 1,
      name: "Canned Goods",
      image: "https://images.unsplash.com/photo-1600148015893-6e1d690b8a5e?w=200",
      quantity: "50 cans",
      expiryDate: "2026-04-15",
      description: "Assorted canned vegetables and fruits"
    },
    {
      id: 2,
      name: "Rice",
      image: "https://images.unsplash.com/photo-1607532941433-304659e8198b?w=200",
      quantity: "100 kg",
      expiryDate: "2026-06-30",
      description: "Premium white rice"
    },
    {
      id: 3,
      name: "Pasta",
      image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=200",
      quantity: "30 boxes",
      expiryDate: "2026-05-20",
      description: "Various pasta shapes and sizes"
    },
    {
      id: 4,
      name: "Cereal",
      image: "https://images.unsplash.com/photo-1562967914-01efa7e87832?w=200",
      quantity: "25 boxes",
      expiryDate: "2026-08-15",
      description: "Breakfast cereal varieties"
    },
    {
      id: 5,
      name: "Cooking Oil",
      image: "https://images.unsplash.com/photo-1605870445919-838d190e8e12?w=200",
      quantity: "15 bottles",
      expiryDate: "2026-10-30",
      description: "Vegetable cooking oil"
    }
  ],
  clothing: [
    {
      id: 1,
      name: "Winter Jackets",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200",
      quantity: "25 pieces",
      description: "Warm winter jackets for adults"
    },
    {
      id: 2,
      name: "Children's Clothes",
      image: "https://images.unsplash.com/photo-1507133752784-731f782cc8db?w=200",
      quantity: "50 pieces",
      description: "Various sizes for children"
    },
    {
      id: 3,
      name: "Shoes",
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=200",
      quantity: "30 pairs",
      description: "Various sizes and styles"
    },
    {
      id: 4,
      name: "Socks",
      image: "https://images.unsplash.com/photo-1508107862955-3f4f18dd593d?w=200",
      quantity: "100 pairs",
      description: "Assorted socks for all ages"
    },
    {
      id: 5,
      name: "Hats and Gloves",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200",
      quantity: "40 sets",
      description: "Winter accessories"
    }
  ],
  items: [
    {
      id: 1,
      name: "School Supplies",
      image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=200",
      quantity: "100 sets",
      description: "Complete school supply kits"
    },
    {
      id: 2,
      name: "Toiletries",
      image: "https://images.unsplash.com/photo-1578950435899-d3c36ba53236?w=200",
      quantity: "75 kits",
      description: "Personal hygiene kits"
    },
    {
      id: 3,
      name: "Blankets",
      image: "https://images.unsplash.com/photo-1518843025960-d673f84c1b6f?w=200",
      quantity: "20 pieces",
      description: "Warm winter blankets"
    },
    {
      id: 4,
      name: "Kitchenware",
      image: "https://images.unsplash.com/photo-1584992221001-7e440ddc6c26?w=200",
      quantity: "15 sets",
      description: "Basic kitchen utensils"
    },
    {
      id: 5,
      name: "Books",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=200",
      quantity: "50 books",
      description: "Educational and story books"
    }
  ],
  mixed: [
    {
      id: 1,
      name: "Emergency Kits",
      image: "https://images.unsplash.com/photo-1578950435899-d3c36ba53236?w=200",
      quantity: "20 kits",
      expiryDate: "2026-12-31",
      description: "Mixed emergency supplies"
    },
    {
      id: 2,
      name: "First Aid Kits",
      image: "https://images.unsplash.com/photo-1584917865442-de892c53aa3d?w=200",
      quantity: "15 kits",
      expiryDate: "2026-09-15",
      description: "Complete first aid supplies"
    },
    {
      id: 3,
      name: "Hygiene Packs",
      image: "https://images.unsplash.com/photo-1578950435899-d3c36ba53236?w=200",
      quantity: "30 packs",
      expiryDate: "2026-11-20",
      description: "Personal hygiene essentials"
    },
    {
      id: 4,
      name: "Baby Supplies",
      image: "https://images.unsplash.com/photo-1511135969612-4233101f956c?w=200",
      quantity: "10 sets",
      expiryDate: "2026-07-10",
      description: "Baby care essentials"
    },
    {
      id: 5,
      name: "Cleaning Kits",
      image: "https://images.unsplash.com/photo-1542433817-2144a68f0d50?w=200",
      quantity: "25 kits",
      expiryDate: "2026-05-05",
      description: "Household cleaning supplies"
    }
  ],
  money: [
    {
      id: 1,
      amount: "₱5,000",
      date: "2026-02-15",
      method: "Online Transfer",
      status: "Completed"
    },
    {
      id: 2,
      amount: "₱2,500",
      date: "2026-02-20",
      method: "Face to Face",
      status: "Completed"
    },
    {
      id: 3,
      amount: "₱10,000",
      date: "2026-02-25",
      method: "Online Transfer",
      status: "Completed"
    },
    {
      id: 4,
      amount: "₱7,500",
      date: "2026-02-28",
      method: "GCash",
      status: "Completed"
    },
    {
      id: 5,
      amount: "₱3,200",
      date: "2026-03-01",
      method: "PayMaya",
      status: "Completed"
    },
    {
      id: 6,
      amount: "₱15,000",
      date: "2026-03-02",
      method: "Request",
      status: "Pending"
    },
    {
      id: 7,
      amount: "₱8,000",
      date: "2026-03-03",
      method: "Request",
      status: "Pending"
    },
    {
      id: 8,
      amount: "₱12,500",
      date: "2026-03-04",
      method: "Request",
      status: "Pending"
    }
  ]
};

export default function DonationListModal({ isOpen, onClose, category, isRequest = false }) {
  if (!isOpen || !category) return null;

  const donations = sampleDonations[category] || [];
  
  // Sort donations: pending items first for money category, otherwise by date
  const sortedDonations = category === 'money' 
    ? [...donations].sort((a, b) => {
        // Pending items first, then completed
        if (a.status === 'Pending' && b.status !== 'Pending') return -1;
        if (a.status !== 'Pending' && b.status === 'Pending') return 1;
        // For same status, sort by date (newest first)
        return new Date(b.date) - new Date(a.date);
      })
    : donations;
  
  const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1);
  const modalTitle = isRequest ? 'Request' : 'Donation';

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleClaim = (donationId) => {
    console.log(`${isRequest ? 'Donating to request' : 'Claiming donation'}: ${donationId}`);
    // TODO: Implement claim functionality
  };

  return (
    <div className="donation-list-modal">
      <div className="donation-list-modal-backdrop" onClick={onClose} />

      <div className="donation-list-modal-shell">
        <div className="donation-list-modal-shell-surface" />
      </div>

      {/* Close Button */}
      <button className="donation-list-modal-close" onClick={onClose} type="button">
        <img src={closeIcon} alt="Close" />
      </button>

      <div className="donation-list-modal-content">
        <div className="donation-list-modal-header">
          <div className="donation-list-modal-heading">
            <span className="donation-list-modal-heading-category">{categoryTitle}</span>
            <span className="donation-list-modal-heading-donations">{isRequest ? 'Requests' : 'Donations'}</span>
          </div>
          <div className="donation-list-modal-subtitle">
            Available {isRequest ? 'requests' : 'donations'} in this category
          </div>
        </div>

        <div className="donation-list-modal-list">
          {sortedDonations.length > 0 ? (
            <div className="donation-list-grid">
              {sortedDonations.map((donation) => (
                <DonationCard
                  key={donation.id}
                  donation={donation}
                  category={category}
                  onClaim={handleClaim}
                  onDonate={handleClaim}
                  onReport={(donationId, donationName) => {
                    console.log(`Reporting donation: ${donationName} (ID: ${donationId})`);
                    // TODO: Implement report functionality
                  }}
                  isRequest={isRequest}
                />
              ))}
            </div>
          ) : (
            <div className="donation-list-empty">
              <div className="donation-list-empty-icon">📦</div>
              <div className="donation-list-empty-title">No donations available</div>
              <div className="donation-list-empty-subtitle">
                Be the first to donate {categoryTitle.toLowerCase()} items to this category
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}