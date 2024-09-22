# User Management System API

This project is a User Management System API built with NestJS and MySQL. It provides endpoints for user management, including creation, retrieval, and deletion of users. The API is documented using Swagger.

## Table of Contents
- [Requirements](#requirements)
- [Setup](#setup)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Requirements
- **Node.js** (v16.x or higher)
- **MySQL** (v8.x or higher)

## Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/user-management-system.git
   cd user-management-system
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## Configuration

1. **Create a MySQL database:**
   ```sql
   CREATE DATABASE myRide;
   ```

2. **Set environment variables:**
   Create a `.env` file in the root directory:
   ```env
   DB_HOST=localhost
   DB_PORT=3306
   DB_USERNAME=new_user
   DB_PASSWORD=password
   DB_NAME=myRide
   ```

## Running the Application

1. **Start the development server:**
   ```bash
   npm run start:dev
   ```

2. The application will run at `http://localhost:3000`.

3. Access Swagger documentation at `http://localhost:3000/api`.

## API Endpoints

- **GET /users**: Retrieve a list of all users.
- **GET /users/:id**: Retrieve a specific user by ID.
- **POST /users**: Create a new user.
- **DELETE /users/:id**: Delete a user by ID.
