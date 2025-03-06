
# 75 Hard Tracker App Documentation

## Overview
This is a simple application built to help users track their daily habits. The primary goal of developing this app was to learn React from scratch while implementing core frontend development concepts.

### Features
- Track daily habit progress
- Store data using local storage
- View progress over time
- Minimalist and user-friendly UI

## Installation & Setup

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/en)
- [Git](https://git-scm.com/)

### Steps to Run the App
1. Clone the repository:
```
git clone https://github.com/pacfie/75_hard_tracker
```
2. Navigate to the project folder:
```
cd 75_hard_tracker
```
3. Install dependencies:
```
npm install
```
4. Start the development server:
```
npm run dev
```
5. Open the app in your browser:
```
http://localhost:3000
```

## Usage Guide
- Customize the challenge by selecting the starting date and length.
- Mark habits as completed each day.
- Provide additional info of your diet, workouts and book. (optional)
- View progress updates on the navbar.

## Technical Details
### Tech Stack
- Frontend: React (with hooks and state management)
- Routing: Next.js (App router)
- Storage: Local Storage
- Styling: Material Design principles

### Folder Structure
```
75_hard_tracker/
│── src/app/
│   │── components/    # Reusable UI components
│   │── pages/         # Main pages of the app
│   │── utils/         # Helper functions, custom hooks
│   │── globals.css    # Main styling
│   │── page.js        # Main app component
│   │── layout.js      # Entry point
│── public/
│── package.json
│── next.config.js    # Next.js configuration
```

### Challenges & Learning Experience
- Implementing local storage for persistence
- Managing state effectively using React hooks
- Understanding Next.js routing
- Designing a clean, simple and responsive UI

### Future Improvements
- Add authentication for user accounts
- Sync data with a backend database
- Introduce _Feeling_ field and statistics
- Possibility to upload progress photo

## Conclusion
This habit tracker app served as a practical project to gain hands-on experience with React (and Next.js). Future iterations will improve functionality and expand features to enhance user engagement.
