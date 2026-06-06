#  URL Shortener

![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![Express.js](https://img.shields.io/badge/Express.js-Web_Framework-black)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)
![Mongoose](https://img.shields.io/badge/Mongoose-ODM-red)
![JWT](https://img.shields.io/badge/JWT-Authentication-blue)
![EJS](https://img.shields.io/badge/EJS-Templating-orange)

##  Overview

Authenticated URL Shortener is a full-stack web application that allows users to create and manage shortened URLs securely.

The application includes JWT-based authentication, role-based authorization, URL analytics, and MongoDB integration. Users can generate shortened URLs, view their own links, and track click statistics, while administrators can access all URLs across the system.

---

##  Features

###  Authentication

- User Registration
- User Login
- JWT Authentication
- Cookie-Based Session Management

### Authorization

- Role-Based Access Control (RBAC)
- Admin and Normal User Roles
- Protected Routes

###  URL Management

- Generate Short URLs
- Automatic URL Redirection
- User-Specific URL Storage
- MongoDB Persistence

###  Analytics

- Click Tracking
- Visit History Logging
- Total Click Count

---

##  Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- Cookie Parser
- EJS
- NanoID

---

##  Application Flow

1. User creates an account.
2. User logs into the application.
3. JWT token is generated and stored in browser cookies.
4. User submits a URL.
5. Application generates a unique short code.
6. URL data is stored in MongoDB.
7. User receives a shortened URL.
8. When the shortened URL is accessed, the application redirects to the original destination.
9. Analytics are automatically updated.

---

##  User Roles

### Normal User

- Generate shortened URLs
- View personal URLs
- Track personal URL analytics

### Admin

- View all URLs in the system
- Access administrative URL management features

---

##  Analytics

Each URL visit is recorded and stored in the database.

Tracked information:

- Visit timestamps
- Total click count

---

##  Screenshots

### Login Page

<img width="375" height="276" alt="Login Page" src="https://github.com/user-attachments/assets/511b1317-8d82-4a49-a695-b4d09a4f9e4b" />

### Signup Page

<img width="383" height="302" alt="Signup Page" src="https://github.com/user-attachments/assets/f6cf3e9d-4149-4adf-9b89-0da2ddef3474" />

### URL Dashboard

<img width="542" height="345" alt="Dashboard" src="https://github.com/user-attachments/assets/0d62ad03-d7ae-4e48-99ce-dd955b9ad6f3" />

### Users Stored in Database

<img width="592" height="630" alt="MongoDB Users Collection" src="https://github.com/user-attachments/assets/f2064b08-14af-41e3-85dd-99d574827955" />

---

##  Installation

### Clone the Repository

```bash
git clone <repository-url>
```

### Install Dependencies

```bash
npm install
```

### Create a `.env` File

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Start the Server

```bash
npm start
```

### Open in Browser

```text
http://localhost:8001
```

---

##  Future Improvements

- Password hashing using bcrypt
- Custom URL aliases
- URL expiration
- Search and filtering
- Dashboard improvements
- Cloud deployment

---

##  Author

**Kumkum Kamthan**
