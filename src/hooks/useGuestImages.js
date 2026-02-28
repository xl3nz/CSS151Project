// Hook for managing guest page images
// This can be expanded to include API calls or admin panel integration

import { useState, useCallback } from 'react';
import { guestImages, updateGuestImages } from '../config/guestImageConfig';

export const useGuestImages = () => {
  const [images, setImages] = useState(guestImages);

  const updateFeaturedEvent = useCallback((containerImage, backgroundImage) => {
    const newImages = {
      ...images,
      featuredEventContainer: containerImage,
      featuredEventBackground: backgroundImage,
    };
    setImages(newImages);
    updateGuestImages(newImages);
  }, [images]);

  const updateEventList = useCallback((eventImage, donationImage) => {
    const newImages = {
      ...images,
      eventListImage: eventImage,
      donationListImage: donationImage,
    };
    setImages(newImages);
    updateGuestImages(newImages);
  }, [images]);

  const updateLogo = useCallback((logoImage) => {
    const newImages = {
      ...images,
      logo: logoImage,
    };
    setImages(newImages);
    updateGuestImages(newImages);
  }, [images]);

  return {
    images,
    updateFeaturedEvent,
    updateEventList,
    updateLogo,
  };
};
