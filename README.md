# Totality Frontend Challenge

This project is a **property rental platform** built using Next.js and other modern web technologies. It features property listings, a booking management system, and a checkout process, all with responsive design. The platform allows users to browse properties, book them, and manage their bookings seamlessly.

## Challenge Overview

The challenge involves creating a property rental website with the following core features:

- **Property Listings**: Users can browse properties with images, descriptions, and prices, and use filters to refine their search.
- **Booking Management**: Users can book properties, manage their bookings, and view the total cost in real-time.
- **Checkout Process**: Users can finalize their booking by entering personal and payment details.
- **Responsive Design**: The application is optimized for both desktop and mobile devices.

## Tech Stack

- **React.js**: Core front-end framework.
- **Next.js**: Server-side rendering and routing.
- **Tailwind CSS**: Utility-first CSS framework for responsive and modern design.
- **ShadCN UI**: For pre-built and customizable UI components.
- **NextAuth.js**: Authentication system for user registration and login (Optional challenge).
- **MongoDB**: Database to manage property and booking data.
- **TypeScript**: Ensures type safety and better code management (optional).

## Features

### 1. Property Listings
- Display properties with images, titles, descriptions, prices, and a "Book Now" button.
- Implement filters for sorting properties by:
  - Location
  - Price range
  - Number of bedrooms
  - Available amenities

### 2. Booking Management
- Users can book properties by clicking "Book Now."
- A **Cart Section** displays booked properties with details (booking dates, total cost).
- Users can increase, decrease, or remove properties from the cart.
- Real-time updates of total cost and booking count.

### 3. Checkout Process
- A complete **checkout flow** where users provide:
  - Contact information
  - Payment details
  - A final booking summary and total cost

### 4. Responsive Design
- The site works seamlessly on both desktop and mobile devices.
- Layout optimized for multiple screen sizes, ensuring a consistent user experience.

### Additional Features (Optional)
- **User Authentication**: Login and registration for users, with session-based management.
- **User Avatar**: Display logged-in user's name and avatar.
- **Property Reviews**: Users can leave reviews for properties.
- **Favorites List**: Users can save favorite properties for easy access later.

## Approach

- **Property Listings**: Property data is dynamically rendered on the page. Filtering logic is implemented to sort by multiple criteria.
- **State Management**: Used React's `useState` and `useReducer` hooks to manage cart and booking information efficiently.
- **Booking System**: Booking logic updates in real-time, calculating the total cost and number of properties in the cart.
- **Checkout Process**: A multi-step checkout system collects user information and processes bookings.
- **Responsive Design**: Tailwind CSS breakpoints are used to create layouts for mobile and desktop devices.
- **Authentication**: NextAuth.js handles user registration, login, and session management.

## Installation and Setup

### Prerequisites

- Node.js (v12 or higher)
- MongoDB for data storage
- Git

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/totality-frontend-challenge.git
   ```bash
   cd totality-frontend-challenge
   ```bash
   npm install
   ```bash
   npm run dev

