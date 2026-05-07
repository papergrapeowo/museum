# Museum Backend

Authentication backend for Museum Project, built with Next.js and Vercel Postgres.

## Features

- **User Registration** (`POST /api/auth/register`)
- **User Login** (`POST /api/auth/login`)
- **Get Current User** (`GET /api/auth/me`)
- **Database Initialization** (`GET /api/init`)

## Tech Stack

- Next.js 14
- TypeScript
- Vercel Postgres
- JWT Authentication
- Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm
- Vercel account

### Installation

1. **Clone the repository**

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file with:
   ```
   JWT_SECRET=your-secret-key
   ```

4. **Run development server**
   ```bash
   pnpm dev
   ```

## API Endpoints

### POST /api/auth/register

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### POST /api/auth/login

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "token": "jwt-token",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### GET /api/auth/me

**Headers:**
```
Authorization: Bearer jwt-token
```

**Response:**
```json
{
  "success": true,
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "created_at": "2024-01-01T00:00:00Z"
  }
}
```

## Deployment

1. **Push to GitHub**

2. **Deploy to Vercel**
   - Connect your GitHub repository to Vercel
   - Add environment variables:
     - `JWT_SECRET`: Your secret key
   - Add Vercel Postgres database

3. **Initialize Database**
   - After deployment, visit `https://your-vercel-app.vercel.app/api/init` to create the users table

## Frontend Integration

In your frontend project, use the API endpoints for authentication:

```javascript
// Example login function
async function login(email, password) {
  const response = await fetch('https://your-backend.vercel.app/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  
  const data = await response.json();
  if (data.success) {
    localStorage.setItem('token', data.token);
    return data.user;
  }
  throw new Error(data.error);
}

// Example get current user
async function getCurrentUser() {
  const token = localStorage.getItem('token');
  if (!token) return null;
  
  const response = await fetch('https://your-backend.vercel.app/api/auth/me', {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  
  const data = await response.json();
  return data.success ? data.user : null;
}
```