// Guest Page Image Configuration
// These can be updated by admins or from a backend API

import ellipse3 from '../assets/guest/ellipse-3.png';
import rectangle137 from '../assets/guest/rectangle-137.svg';
import rectangle138 from '../assets/guest/rectangle-138.png';
import placeholderImg from '../assets/guest/placeholder_img.jpg';
import primary from '../assets/guest/primary.svg';

export const guestImages = {
  // Logo/Home section
  logo: ellipse3,

  // Featured Event section (updatable by admins)
  featuredEventContainer: rectangle137,
  featuredEventBackground: rectangle138,

  // Event List (updatable before publishing)
  eventListImage: placeholderImg,

  // Donation List (updatable before publishing)
  donationListImage: placeholderImg,

  // Icons
  loginIcon: primary,
};

// Export individual getters for easy updates
export const getGuestImages = () => guestImages;

// This function can be updated to fetch from API in the future
export const updateGuestImages = (newImages) => {
  Object.assign(guestImages, newImages);
};
