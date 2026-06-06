# URL Shortener

![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![Express.js](https://img.shields.io/badge/Express.js-Web_Framework-black)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)
![Mongoose](https://img.shields.io/badge/Mongoose-ODM-red)

## Overview

A full-stack URL shortening application built with Node.js, Express.js, and MongoDB. The application generates unique short URLs, stores mappings in MongoDB, and redirects users to the original destination when a shortened URL is accessed.

This project demonstrates backend development concepts including routing, database integration, URL redirection, and unique identifier generation.

---

## Features

* Generate unique shortened URLs
* Store original and shortened URLs in MongoDB
* Redirect users to the original destination
* Express.js routing
* MongoDB database integration
* Unique short code generation

---

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* HTML
* CSS
* JavaScript

---

## How It Works

1. User enters a URL.
2. Application generates a unique short code.
3. Original URL and short code are stored in MongoDB.
4. A shortened URL is returned to the user.
5. When the shortened URL is visited:

   * The application searches MongoDB.
   * The original URL is retrieved.
   * The user is redirected automatically.

---

## Example

Original URL:

```text
https://www.youtube.com/
```

Generated Short URL:

```text
http://localhost:8000/url/abc123
```

When the short URL is opened, the user is redirected to the original website.

---

## Installation

Install dependencies:

```bash
npm install
```

Start the server:

```bash
npm start
```

Open the application in your browser:

```text
http://localhost:8000
```

---

## Future Improvements

* Custom URL aliases
* Click analytics
* User authentication
* Expiring links
* Cloud deployment

---

## Author

Kumkum Kamthan
