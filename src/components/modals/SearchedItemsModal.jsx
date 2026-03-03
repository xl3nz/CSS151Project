import React from 'react';
import closeIcon from '../../assets/login-modal/close.svg';
import './SearchedItemsModal.css';

// Sample donation data with hashtags for search functionality
const sampleDonations = [
  // Food category
  {
    id: 1,
    name: "Canned Goods",
    category: "food",
    type: "canned",
    description: "Assorted canned vegetables and fruits",
    hashtags: ["#food", "#canned", "#vegetables", "#fruits", "#canned-goods"],
    image: "https://images.unsplash.com/photo-1600148015893-6e1906a16b8d?w=200"
  },
  {
    id: 2,
    name: "Rice",
    category: "food",
    type: "grains",
    description: "Premium white rice",
    hashtags: ["#food", "#rice", "#grains", "#staple-food"],
    image: "https://images.unsplash.com/photo-1607532941433-304659e8198b?w=200"
  },
  {
    id: 3,
    name: "Pasta",
    category: "food",
    type: "pasta",
    description: "Various pasta shapes and sizes",
    hashtags: ["#food", "#pasta", "#italian", "#noodles", "#carbs"],
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=200"
  },
  {
    id: 4,
    name: "Cereal",
    category: "food",
    type: "breakfast",
    description: "Breakfast cereal varieties",
    hashtags: ["#food", "#cereal", "#breakfast", "#healthy"],
    image: "https://images.unsplash.com/photo-1562967914-01efa7e87832?w=200"
  },
  {
    id: 5,
    name: "Cooking Oil",
    category: "food",
    type: "oil",
    description: "Vegetable cooking oil",
    hashtags: ["#food", "#oil", "#cooking", "#vegetable-oil"],
    image: "https://images.unsplash.com/photo-1605870445919-838d190e8e12?w=200"
  },
  
  // Clothing category
  {
    id: 6,
    name: "Winter Jackets",
    category: "clothing",
    type: "outerwear",
    description: "Warm winter jackets for adults",
    hashtags: ["#clothes", "#clothing", "#jackets", "#winter", "#outerwear", "#warm"],
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200"
  },
  {
    id: 7,
    name: "Children's Clothes",
    category: "clothing",
    type: "kids",
    description: "Various sizes for children",
    hashtags: ["#clothes", "#clothing", "#children", "#kids", "#apparel"],
    image: "https://images.unsplash.com/photo-1507133752784-731f782cc8db?w=200"
  },
  {
    id: 8,
    name: "Shoes",
    category: "clothing",
    type: "footwear",
    description: "Various sizes and styles",
    hashtags: ["#clothes", "#clothing", "#shoes", "#footwear", "#sneakers", "#boots"],
    image: "https://images.unsplash.com/photo-1542272604-731f782cc8db?w=200"
  },
  {
    id: 9,
    name: "Socks",
    category: "clothing",
    type: "accessories",
    description: "Assorted socks for all ages",
    hashtags: ["#clothes", "#clothing", "#socks", "#accessories", "#footwear"],
    image: "https://images.unsplash.com/photo-1508107862955-3f4f18dd593d?w=200"
  },
  {
    id: 10,
    name: "Hats and Gloves",
    category: "clothing",
    type: "accessories",
    description: "Winter accessories",
    hashtags: ["#clothes", "#clothing", "#hats", "#gloves", "#winter", "#accessories"],
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200"
  },
  
  // Items category
  {
    id: 11,
    name: "School Supplies",
    category: "items",
    type: "education",
    description: "Complete school supply kits",
    hashtags: ["#items", "#school", "#supplies", "#education", "#back-to-school"],
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=200"
  },
  {
    id: 12,
    name: "Toiletries",
    category: "items",
    type: "hygiene",
    description: "Personal hygiene kits",
    hashtags: ["#items", "#toiletries", "#hygiene", "#personal-care"],
    image: "https://images.unsplash.com/photo-1578950435899-d3c36ba53236?w=200"
  },
  {
    id: 13,
    name: "Blankets",
    category: "items",
    type: "home",
    description: "Warm winter blankets",
    hashtags: ["#items", "#blankets", "#home", "#warm", "#cozy"],
    image: "https://images.unsplash.com/photo-1518843025960-d673f84c1b6f?w=200"
  },
  {
    id: 14,
    name: "Kitchenware",
    category: "items",
    type: "kitchen",
    description: "Basic kitchen utensils",
    hashtags: ["#items", "#kitchen", "#utensils", "#cookware"],
    image: "https://images.unsplash.com/photo-1584992221001-7e440ddc6c26?w=200"
  },
  {
    id: 15,
    name: "Books",
    category: "items",
    type: "education",
    description: "Educational and story books",
    hashtags: ["#items", "#books", "#education", "#reading", "#literature"],
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=200"
  },
  
  // Mixed category
  {
    id: 16,
    name: "Emergency Kits",
    category: "mixed",
    type: "emergency",
    description: "Mixed emergency supplies",
    hashtags: ["#mixed", "#emergency", "#survival", "#kit", "#preparedness"],
    image: "https://images.unsplash.com/photo-1578950435899-d3c36ba53236?w=200"
  },
  {
    id: 17,
    name: "First Aid Kits",
    category: "mixed",
    type: "medical",
    description: "Complete first aid supplies",
    hashtags: ["#mixed", "#first-aid", "#medical", "#health", "#emergency"],
    image: "https://images.unsplash.com/photo-1584917865442-de892c53aa3d?w=200"
  },
  {
    id: 18,
    name: "Hygiene Packs",
    category: "mixed",
    type: "hygiene",
    description: "Personal hygiene essentials",
    hashtags: ["#mixed", "#hygiene", "#personal-care", "#essentials"],
    image: "https://images.unsplash.com/photo-1578950435899-d3c36ba53236?w=200"
  },
  {
    id: 19,
    name: "Baby Supplies",
    category: "mixed",
    type: "baby",
    description: "Baby care essentials",
    hashtags: ["#mixed", "#baby", "#infant", "#care", "#diapers"],
    image: "https://images.unsplash.com/photo-1511135969612-4233101f956c?w=200"
  },
  {
    id: 20,
    name: "Cleaning Kits",
    category: "mixed",
    type: "cleaning",
    description: "Household cleaning supplies",
    hashtags: ["#mixed", "#cleaning", "#household", "#supplies"],
    image: "https://images.unsplash.com/photo-1542433817-2144a68f0d50?w=200"
  }
];

export default function SearchedItemsModal({ isOpen, onClose, searchQuery }) {
  if (!isOpen || !searchQuery) return null;

  // Search function that matches name, category, type, or hashtags
  const searchResults = sampleDonations.filter(donation => {
    const query = searchQuery.toLowerCase();
    return (
      donation.name.toLowerCase().includes(query) ||
      donation.category.toLowerCase().includes(query) ||
      donation.type.toLowerCase().includes(query) ||
      donation.hashtags.some(tag => tag.toLowerCase().includes(query))
    );
  });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="searched-items-modal">
      <div className="searched-items-modal-backdrop" onClick={onClose} />

      <div className="searched-items-modal-shell">
        <div className="searched-items-modal-shell-surface" />
      </div>

      {/* Close Button */}
      <button className="searched-items-modal-close" onClick={onClose} type="button">
        <img src={closeIcon} alt="Close" />
      </button>

      <div className="searched-items-modal-content">
        <div className="searched-items-modal-header">
          <div className="searched-items-modal-heading">
            <span className="searched-items-modal-heading-search">Search</span>
            <span className="searched-items-modal-heading-query">Results</span>
          </div>
          <div className="searched-items-modal-subtitle">
            Found {searchResults.length} item{searchResults.length !== 1 ? 's' : ''} matching your search
          </div>
        </div>

        <div className="searched-items-modal-list">
          {searchResults.length > 0 ? (
            <div className="searched-items-grid">
              {searchResults.map((donation) => (
                <div key={donation.id} className="searched-items-item">
                  <div className="searched-items-image-container">
                    <img 
                      src={donation.image} 
                      alt={donation.name}
                      className="searched-items-image"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMDAgMTAwTDEwMCAxMDBaIiBzdHJva2U9IiM4Qzg1OTIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=';
                      }}
                    />
                  </div>
                  
                  <div className="searched-items-details">
                    <div className="searched-items-name">{donation.name}</div>
                    <div className="searched-items-category">
                      <span className="category-badge">{donation.category}</span>
                      <span className="type-badge">{donation.type}</span>
                    </div>
                    <div className="searched-items-description">{donation.description}</div>
                    <div className="searched-items-hashtags">
                      {donation.hashtags.map((tag, index) => (
                        <span key={index} className="hashtag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="searched-items-empty">
              <div className="searched-items-empty-icon">🔍</div>
              <div className="searched-items-empty-title">No items found</div>
              <div className="searched-items-empty-subtitle">
                Try searching for:
                <ul>
                  <li>Category names (food, clothing, items, mixed)</li>
                  <li>Item types (pasta, clothes, school, emergency)</li>
                  <li>Hashtag keywords (#food, #winter, #baby)</li>
                  <li>Item names (rice, jackets, books)</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}