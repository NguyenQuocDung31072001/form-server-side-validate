# Server-Side Form Validation MVP

This project demonstrates server-side form validation using NestJS for the backend and React with Ant Design and Refine.dev for the frontend.

## Project Structure

```
.
├── backend/         # NestJS backend
└── frontend/        # React frontend with Vite
```

## Prerequisites

- Node.js (v20.x or later)
- npm (v9.x or later)

## Setup and Running

### Backend

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run start:dev
   ```

The backend will run on http://localhost:3000

### Frontend

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will run on http://localhost:5173

## Features

- Server-side form validation using class-validator
- Client-side form validation using Ant Design Form
- Error handling and display
- Modern UI with Ant Design components
- Type-safe development with TypeScript

## API Endpoints

### POST /users/register

Register a new user with validation.

Request body:

```json
{
  "username": "string",
  "email": "string",
  "password": "string"
}
```

Validation rules:

- username: required, string
- email: required, valid email format
- password: required, minimum 6 characters
