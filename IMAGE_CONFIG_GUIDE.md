# Guest Page Image Configuration Guide

## Overview
The guest page images are now centralized in a configuration file for easy management and future admin panel integration.

## Structure

### Configuration File: `src/config/guestImageConfig.js`
All guest page images are defined as variables that can be easily updated:

```javascript
guestImages = {
  logo: ellipse3,                          // Home/Logo section
  featuredEventContainer: rectangle137,    // Featured Event border
  featuredEventBackground: rectangle138,   // Featured Event background (updatable by admins)
  eventListImage: rectangle144,           // Event List image (updatable before publishing)
  donationListImage: rectangle144,        // Donation List image (updatable before publishing)
  loginIcon: primary,                     // Login button icon
}
```

## Usage

### In Components
```jsx
import { guestImages } from '../config/guestImageConfig';

<img src={guestImages.featuredEventBackground} alt="" />
```

### With the Hook (for state management)
```jsx
import { useGuestImages } from '../hooks/useGuestImages';

const MyComponent = () => {
  const { images, updateFeaturedEvent, updateEventList } = useGuestImages();
  
  // Update Featured Event images
  updateFeaturedEvent(newContainerImg, newBackgroundImg);
  
  // Update Event/Donation List images
  updateEventList(newEventImg, newDonationImg);
};
```

## Future Enhancement: Admin Panel Integration

To integrate with an admin panel:

1. **Create an Admin Modal** for uploading images
2. **Call the update functions** from the hook
3. **Example:**
   ```jsx
   const handleAdminImageUpload = async (file, imageType) => {
     const uploadedImageUrl = await uploadToServer(file);
     
     if (imageType === 'featured') {
       updateFeaturedEvent(uploadedImageUrl, backgroundUrl);
     }
   };
   ```

4. **Persist to Backend** (modify `updateGuestImages` to include API call)
   ```jsx
   export const updateGuestImages = async (newImages) => {
     await api.post('/admin/guest-images', newImages);
     Object.assign(guestImages, newImages);
   };
   ```

## Images by Purpose

### Admin-Editable
- **Featured Event Container** (`featuredEventContainer`) - Changes frequently
- **Featured Event Background** (`featuredEventBackground`) - Changes frequently

### Pre-Publishing Editable
- **Event List Image** (`eventListImage`) - Set before release
- **Donation List Image** (`donationListImage`) - Set before release

### Static
- **Logo** (`logo`) - Consistent brand image
- **Login Icon** (`loginIcon`) - UI element
