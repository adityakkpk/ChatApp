# Backend for Real-Time Chat Application

This is the backend for a real-time chat application built with Node.js, Express, MongoDB, and Socket.IO.

## Features

- User authentication (signup, login, logout)
- Real-time messaging
- Online user status
- Secure routes with JWT authentication

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- Socket.IO

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
  ```sh
  git clone https://github.com/adityakkpk/ChatApp.git
  cd real-time-chat/backend
  ```

2. Set up environment variables:
  Create a `.env` file in the `backend` directory and add the following:
  ```env
  PORT=8000
  MONGODB_URI=your_mongodb_uri
  JWT_SECRET=your_jwt_secret
  ```

3. Install dependencies:
  ```sh
  npm install
  ```

4. Start the server:
  ```sh
  npm run server
  ```

### Running the Application

- The backend server will run on `http://localhost:8000`.

## Project Structure

```plaintext
.
├── controllers
│   ├── authControllers.js
│   ├── messageController.js
│   └── userController.js
├── db
│   └── connectDb.js
├── middleware
│   └── protectRoute.js
├── models
│   ├── conversationModel.js
│   ├── messageModel.js
│   └── userModel.js
├── routes
│   ├── authRoutes.js
│   ├── messageRoutes.js
│   └── userRoutes.js
├── socket
│   └── socket.js
├── utils
│   └── generateToken.js
├── .env.sample
├── .gitignore
├── package.json
└── server.js
```

## Available Scripts

In the project directory, you can run:

### `npm run server`

Runs the backend server in development mode using nodemon.

### `npm start`

Runs the backend server in production mode.

### `npm run build`

Installs dependencies and builds the frontend.

## API Endpoints

### Authentication

- `POST /api/auth/signup` - User signup
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Messages

- `GET /api/messages/:id` - Get messages for a conversation
- `POST /api/messages/send/:id` - Send a message

### Users

- `GET /api/users` - Get users for the sidebar

## License

This project is licensed under the MIT License.