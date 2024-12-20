# Real-Time Chat Application

This is a real-time chat application built with a MERN stack (MongoDB, Express, React, Node.js) and Socket.IO for real-time communication. 

Follow the below link for the live application :
https://chat-realtime-1rqe.onrender.com/

## Features

- User authentication (signup, login, logout)
- Real-time messaging
- Online user status
- Responsive design

## Technologies Used

### Backend

- Node.js
- Express
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- Socket.IO

### Frontend

- React
- Zustand (state management)
- React Router
- Tailwind CSS
- DaisyUI
- Socket.IO Client

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
  ```sh
  git clone https://github.com/adityakkpk/ChatApp.git
  cd real-time-chat
  ```

2. Set up environment variables:
  Create a `.env` file in the `backend` directory and add the following:
  ```env
  MONGODB_URI=your_mongodb_uri
  JWT_SECRET=your_jwt_secret
  ```

3. Install dependencies:
  ```sh
  npm install
  npm install --prefix frontend
  ```

4. Build the frontend:
  ```sh
  npm run build
  ```

5. Start the server:
  ```sh
  npm run server
  ```

### Running the Application

- The backend server will run on `http://localhost:8000`.
- The frontend will be served from the `dist` directory.

## Project Structure

```plaintext
.
├── backend
│   ├── controllers
│   ├── db
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── socket
│   ├── utils
│   └── server.js
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── context
│   │   ├── hooks
│   │   ├── pages
│   │   ├── utils
│   │   └── zustand
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
├── .gitignore
├── package.json
└── Readme.md
```