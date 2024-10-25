
# JWT User Authentication API

This is a Node.js API for basic user authentication built with JWT (JSON Web Tokens). It includes endpoints for user registration, login, and logout, along with a user dashboard that fetches user details from the database.

## Overview

This project includes endpoints for:
- User registration
- User login
- JWT-based session management
- User dashboard for viewing profile details

Technologies used include:
- Node.js
- Express.js
- MongoDB (for user data storage)
- JSON Web Tokens (JWT) for authentication

---

## Requirements

Before running this application, make sure you have the following installed:
- Node.js
- MongoDB
- A MongoDB URI for connection (required in `.env`)

---

## Setup

1. Clone the repository.
   ```bash
   git clone https://github.com/username/repo-name.git
   cd repo-name
   ```
2. Install the dependencies.
   ```bash
   npm install
   ```
3. Set up the environment variables in `.env`.
   ```env
   PORT="8000"
   MONGO_URI="your_mongodb_uri"
   JWT_SECRET="your_jwt_secret_key"
   SALT="your_salt_in_number"
   NODE_ENV=development/production"
   ```
4. Start the server.
   ```bash
   npm start
   ```

---

## API Endpoints

### Authentication Routes

- **POST /api/register** - Register a new user. Requires fields: `name`, `username`, `email`, `password`.
- **POST /api/login** - Login an existing user. Requires fields: `username`, `password`.
- **GET /api/logout** - Log out the current user, invalidating the token.

### User Dashboard

- **GET /api/users/dashboard** - Fetch user details. Requires a valid JWT in cookies. Returns fields like `id`, `createdAt`, `name`, `username`, and `email`.

---

## Error Handling

Errors are handled with descriptive messages. Each response includes a status code and message.

Example:
```json
{
  "status": "error",
  "message": "Invalid credentials"
}
```

---

## Usage

### Registering a User
```bash
curl -X POST http://localhost:8000/api/register -H "Content-Type: application/json" -d '{"name":"John Doe", "username":"johnd", "email":"john@example.com", "password":"password123"}'
```

### Logging In
```bash
curl -X POST http://localhost:8000/api/login -H "Content-Type: application/json" -d '{"username":"johnd", "password":"password123"}'
```

Upon successful login, a JWT token is returned and stored in an HttpOnly cookie.

### Accessing the User Dashboard
```bash
curl -X GET http://localhost:8000/api/users/dashboard -H "Authorization: Bearer your_jwt_token"
```

---

## Security Measures

- Passwords are hashed using bcrypt.
- JWT tokens are signed and verified with a secret.
- Tokens are stored in HttpOnly cookies for protection against XSS.

---

## License

This project is licensed under the MIT License.
