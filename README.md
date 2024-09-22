# User Management System API with NestJS

This project is a **User Management System API** built using **NestJS** and **MySQL**, with Swagger for API documentation. The system supports user creation, retrieval, authentication, and deletion. The Swagger documentation is auto-generated and provides detailed information about the API endpoints.

## Table of Contents
- [Requirements](#requirements)
- [Project Setup](#project-setup)
- [Database Configuration](#database-configuration)
- [Running the Application](#running-the-application)
- [Swagger Documentation](#swagger-documentation)
- [User API Endpoints](#user-api-endpoints)
- [Data Transfer Objects (DTOs)](#data-transfer-objects-dtos)
- [Entity Examples](#entity-examples)
- [Future Features](#future-features)
- [License](#license)

## Requirements
To run this project, you will need the following:
- [Node.js](https://nodejs.org/) (v16.x or higher)
- [MySQL](https://www.mysql.com/) (v8.x or higher)
- [NestJS CLI](https://docs.nestjs.com/cli/overview) (optional but recommended)
- [TypeScript](https://www.typescriptlang.org/) (comes with NestJS)

## Project Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/user-management-system.git
   cd user-management-system
   ```

2. **Install dependencies:**
   Make sure you have `npm` installed, then run:
   ```bash
   npm install
   ```

## Database Configuration

1. **Create a MySQL database:**
   Log into MySQL and create a new database:
   ```sql
   CREATE DATABASE user_management_db;
   ```

2. **Configure the database connection:**
   Update the `src/config/configuration.ts` file with your MySQL credentials:
   ```typescript
   export default () => ({
     database: {
       host: 'localhost',
       port: 3306,
       username: 'your-mysql-username',
       password: 'your-mysql-password',
       database: 'user_management_db',
     },
   });
   ```

3. **Run migrations** (if applicable):
   If you're using migrations, run the following command:
   ```bash
   npm run typeorm migration:run
   ```

## Running the Application

1. **Start the development server:**
   Run the application using the NestJS development server:
   ```bash
   npm run start:dev
   ```

2. The application will start at `http://localhost:3000`.

## Swagger Documentation

The API is documented using **Swagger**. Once the application is running, you can access the documentation:

- Swagger UI is available at: `http://localhost:3000/api`
- The Swagger documentation provides detailed descriptions of all API endpoints, including request bodies, response formats, and status codes.

## User API Endpoints

### 1. Get All Users
   - **Method**: `GET /users`
   - **Description**: Retrieves a list of all users.

### 2. Get User by ID
   - **Method**: `GET /users/:id`
   - **Description**: Retrieves a specific user by their ID.

### 3. Create a New User
   - **Method**: `POST /users`
   - **Body**: 
     ```json
     {
       "name": "John Doe",
       "email": "john.doe@example.com",
       "password": "password123",
       "phoneNumber": "1234567890",
       "profilePictureUrl": "http://example.com/profile.jpg"
     }
     ```
   - **Description**: Creates a new user with the provided details. The password will be hashed before storing.

### 4. Login a User
   - **Method**: `POST /users/login`
   - **Body**: 
     ```json
     {
       "email": "john.doe@example.com",
       "password": "password123"
     }
     ```
   - **Description**: Authenticates a user with the provided email and password. Returns user details or an authentication token.

### 5. Delete a User
   - **Method**: `DELETE /users/:id`
   - **Description**: Deletes a user by their ID.

## Data Transfer Objects (DTOs)

### CreateUserDto
Used for creating new users:
```typescript
export class CreateUserDto {
  name: string;
  email: string;
  password: string; // Plain text password for hashing
  phoneNumber?: string;
  profilePictureUrl?: string;
}
```

### LoginUserDto
Used for logging in users:
```typescript
export class LoginUserDto {
  email: string;
  password: string; // Plain text password for validation
}
```

## Entity Examples

### User Entity
Represents the user stored in the database:
```typescript
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  encryptedPassword: string; // Hashed password stored here

  @Column({ nullable: true })
  phoneNumber: string;

  @Column({ nullable: true })
  profilePictureUrl: string;
}
```

## Future Features

This project is a work in progress. Below are some features planned for future development:
1. **Rider and Customer Entities**: Extend the user system to support different user types like Riders and Customers.
2. **Car Management**: Add the ability for Riders to manage their cars.
3. **Ride Booking System**: Implement a booking system where customers can book rides.
4. **Verification System**: Add document verification for Riders using a `Verification` entity.
5. **Rating and Messaging**: Introduce a rating and messaging system between users.
6. **Authentication & Authorization**: Integrate a secure authentication system (JWT or OAuth).
