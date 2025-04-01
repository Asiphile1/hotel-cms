# LE' BEL MOR - Hotel CMS

## Overview
LE' BEL MOR CMS is an admin panel designed to manage hotel accommodations, bookings, and user data efficiently. Built with **React**, **Redux**, and **Firebase**, the CMS provides a seamless way to control the hotel's content, update listings, manage reservations, and handle user interactions.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)

---

## Features
✅ **Admin Authentication**: Secure login for administrators via Firebase Authentication.  
✅ **Accommodation Management**: Add, edit, and delete hotel accommodations.  
✅ **Booking Management**: View, update, and cancel user reservations.  
✅ **User Management**: View and manage registered users.  
✅ **Dashboard Analytics**: Overview of total bookings, revenue, and occupancy rates.  
✅ **Responsive Design**: Optimized for mobile, tablet, and desktop use.  

---

## Technologies Used

### **Frontend**
- **React**: JavaScript library for building UI components.
- **Redux**: State management for efficient data flow.
- **React Router**: Handles navigation and routing.
- **Material-UI (MUI)**: Provides modern UI components.
- **Axios**: HTTP client for API communication.
- **Firebase Authentication**: Secures user authentication.
- **Firebase Firestore**: Stores and manages hotel data.
- **React Hook Form**: Simplifies form handling and validation.

### **Backend**
- **Firebase Functions**: Handles backend logic (if used).

### **Tools & Libraries**
- **npm**: Package manager for dependencies.
- **Webpack**: Module bundler for optimized builds.
- **Babel**: JavaScript compiler.
- **ESLint & Prettier**: Ensures code consistency.

---

## Getting Started

### **Prerequisites**
Ensure you have the following installed:
- **Node.js** (version 14 or higher)
- **npm** (version 6 or higher)

### **Installation**

#### 1. Clone the repository:
```sh
git clone https://github.com/Asiphile1/Hotel-CMS.git
cd Hotel-CMS
```
## 2. Install dependencies:
```sh

npm install
```
Some key dependencies:

```sh

npm install react redux react-redux react-router-dom @mui/material axios firebase react-hook-form
```
## 3. Set up Firebase:
* Create a Firebase project at Firebase Console.

* Enable Authentication and Firestore Database.

* Create a .env file in the root directory and add:

```env

REACT_APP_API_KEY=your_api_key
REACT_APP_AUTH_DOMAIN=your_auth_domain
REACT_APP_PROJECT_ID=your_project_id
REACT_APP_STORAGE_BUCKET=your_storage_bucket
REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_APP_ID=your_app_id
```
## 4. Start the development server:
```sh

npm start
```
The CMS should now be running at http://localhost:3000.

## Project Structure
```bash

/src
  ├── components/          # Reusable UI components
  ├── pages/               # Main pages (Dashboard, Users, Bookings)
  ├── redux/               # State management files
  ├── utils/               # Helper functions
  ├── App.js               # Main app entry point
  ├── index.js             # Renders the application
```
## Available Scripts
* npm start - Runs the development server.

* npm run build - Builds the app for production.

* npm test - Runs tests.

* npm run lint - Lints the code.
