# Real Time Chat Application (Frontend)

## Features

- User authentication (signup, login, logout)
- Real-time messaging
- Online user status
- Responsive design

## Technologies Used

- React
- Zustand (state management)
- React Router
- Tailwind CSS
- DaisyUI
- Socket.IO Client

## Getting Started

### Prerequisites

- Node.js

### Installation

1. Clone the repository:
  ```sh
  git clone https://github.com/adityakkpk/ChatApp.git
  cd real-time-chat/frontend
  ```

2. Install dependencies:
  ```sh
  npm install
  ```

3. Start the development server:
  ```sh
  npm run dev
  ```

### Running the Application

- The frontend development server will run on `http://localhost:5173`.

## Project Structure

```plaintext
.
├── public
├── src
│   ├── components
│   ├── context
│   ├── hooks
│   ├── pages
│   ├── utils
│   └── zustand
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run preview`

Serves the production build from the `dist` folder.
