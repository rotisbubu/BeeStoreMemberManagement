# BeeStore Member Management

BeeStore Member Management is a CRUD (Create, Read, Update, Delete) application designed to manage customer data efficiently.

## Features
- Create new members
- View member list
- Update member details
- Delete members

## Installation
### Prerequisites
- Node.js
- MySQL

### Backend Setup
1. Navigate to the backend directory:
   cd backend
2. Install dependencies:
   npm install
3. Start the backend server:
   node server.js

### Frontend Setup
1. Open a new terminal and navigate to the frontend directory:
   cd frontend
2. Install dependencies:
   npm install
3. Start the frontend server:
   npm start

## API Endpoints
### Member Routes
| Method | Endpoint               | Description         |
|--------|------------------------|---------------------|
| GET    | `/`                    | Get all members     |
| GET    | `/getMember/:id`       | Get a single member |
| POST   | `/createMember`        | Create a member     |
| PUT    | `/updateMember/:id`    | Update a member     |
| DELETE | `/deleteMember/:id`    | Delete a member     |