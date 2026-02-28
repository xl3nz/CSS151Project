# Temporary Development Navigation

## Overview

A temporary navbar has been added to allow testing all three user role pages (Guest, User, Admin) during development.

## Features

✅ **Role Switching** - Click buttons to switch between Guest, User, and Admin views  
✅ **Visual Feedback** - Current role is highlighted and displayed  
✅ **DEV MODE Badge** - Clearly indicates this is a development tool  
✅ **Responsive** - Works on mobile and desktop  
✅ **Icon Indicators** - Emojis help identify each role quickly  

## How to Use

1. **Navigate between pages** by clicking the buttons in the navbar:
   - 👤 **Guest** - Public landing page
   - 👨‍💼 **User** - Logged-in user dashboard
   - ⚙️ **Admin** - Administration console

2. **Monitor current role** - The right side shows which role is currently displayed

3. **Test all features** - Switch roles to test different pages and modals

## Files Modified/Created

- `src/components/Navbar.jsx` - Enhanced navbar component
- `src/components/Navbar.css` - Navbar styling (dev mode theme)
- `src/styles/index.css` - Updated layout styles
- `src/App.jsx` - Already had role-based rendering (no changes needed)

## Removing the Dev Navbar (Before Publishing)

To remove this temporary navbar before publishing, follow these steps:

### Option 1: Hide via CSS
```css
.navbar {
  display: none;
}
```

### Option 2: Remove from App.jsx
In `src/App.jsx`, remove the Navbar component:

```jsx
// Before:
return (
  <>
    <Navbar currentRole={role} onChangeRole={setRole} />
    {role === 'guest' && <Guest />}
    ...
  </>
);

// After:
return (
  <>
    {role === 'guest' && <Guest />}
    ...
  </>
);
```

Then remove the import:
```jsx
// Remove this line:
import Navbar from './components/Navbar';
```

### Option 3: Add Auth-Based Checking
Implement actual authentication and only show role selector in dev mode:

```jsx
const isDev = process.env.NODE_ENV === 'development';

return (
  <>
    {isDev && <Navbar currentRole={role} onChangeRole={setRole} />}
    {role === 'guest' && <Guest />}
    ...
  </>
);
```

## Production Mode

In production, the application will:
1. Authenticate users via backend API
2. Set the role based on authentication token
3. Show only the appropriate page for the authenticated user
4. Remove the role-switching navbar entirely

## Future Enhancement

Consider creating an Admin Settings Panel that allows authorized admins to:
- Screenshot different role views
- Export page layouts
- Manage theme settings
- Debug issues in production

