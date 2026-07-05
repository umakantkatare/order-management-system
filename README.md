# 📦 Order Management System

![Node.js](https://img.shields.io/badge/Node.js-22.x-green?logo=node.js)
![Express.js](https://img.shields.io/badge/Express.js-5.x-black?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?logo=mongodb)
![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-7-purple?logo=vite)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-Scheduler-blue?logo=githubactions)

A full-stack Order Management System built using the **MERN Stack** that automatically manages order lifecycle transitions using a scheduled background process.

The application allows users to create orders, monitor order status, and automatically update order states based on predefined business rules.

This project was developed as part of a **Full Stack Developer Assignment**.

## 📖 Project Overview

The Order Management System is designed to simulate an e-commerce order workflow.

The backend exposes REST APIs for creating and managing orders, while a scheduler automatically updates order statuses after fixed time intervals.

A React dashboard provides an interface to monitor all orders, filter them by status, and manually refresh data.

The scheduler is protected using a secret key and is automatically triggered every 5 minutes using GitHub Actions.

## ✨ Features

### Backend

- Create new orders
- Fetch all orders
- Filter orders by status
- Automatic order status transition
- Scheduler execution logs
- Order status history
- MongoDB transactions
- Repository-Service architecture
- Environment variable configuration
- Secure scheduler endpoint

### Frontend

- Responsive dashboard
- Order table
- Status filter
- Refresh button
- Loading state
- Empty state
- Error handling

### DevOps

- Backend deployed on Render
- Frontend deployed on Vercel
- GitHub Actions scheduler
- Postman API collection

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- Axios
- Tailwind CSS

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

### Automation

- GitHub Actions (Scheduler)

### Deployment

- Render (Backend)
- Vercel (Frontend)

### API Testing

- Postman

## 🏗️ System Architecture

`````text
                React Dashboard
                       │
                       ▼
              Express REST API
                       │
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
   Controllers      Services     Middleware
                       │
                       ▼
                Repository Layer
                       │
                       ▼
                  MongoDB Atlas


---

# Section 4: Project Structure

````md
## 📁 Project Structure

```text
order-management-system
│
├── .github
│   └── workflows
│       └── scheduler.yml
│
├── backend
│   ├── src
│   │   ├── config
│   │   ├── constants
│   │   ├── controllers
│   │   ├── cron
│   │   ├── middlewares
│   │   ├── models
│   │   ├── repositories
│   │   ├── routes
│   │   ├── services
│   │   ├── utils
│   │   ├── validations
│   │   └── app.js
│   │
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── api
│   │   ├── assets
│   │   ├── components
│   │   ├── constants
│   │   ├── hooks
│   │   ├── pages
│   │   ├── utils
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── .gitignore
└── README.md

---

# Section 5: Database Design

````md
## 🗄️ Database Design

The application uses three MongoDB collections.

### 1. Orders

Stores all customer orders.

```text
Order
│
├── orderId
├── customerName
├── phone
├── productName
├── amount
├── paymentStatus
├── status
├── createdAt
└── updatedAt
```

### 2. Order Status History

Tracks every order status transition.

```text
OrderStatusHistory
│
├── order
├── previousStatus
├── currentStatus
├── changedBy
└── createdAt
```

### 3. Scheduler Logs

Stores scheduler execution history.

```text
SchedulerLog
│
├── startedAt
├── endedAt
├── totalOrdersChecked
├── totalOrdersUpdated
├── executionStatus
└── message
```

## 🔄 Order Lifecycle

The scheduler automatically updates order status based on the following business rules:

```text
PLACED
   │
   │  After 10 Minutes
   ▼
PROCESSING
   │
   │  After 20 Minutes
   ▼
READY_TO_SHIP
```

### Business Rules

- Orders remain in **PLACED** status for the first **10 minutes**.
- After 10 minutes, the scheduler updates the status to **PROCESSING**.
- Orders remain in **PROCESSING** for the next **20 minutes**.
- After 20 minutes, the scheduler updates the status to **READY_TO_SHIP**.
- Every status transition is recorded in the **OrderStatusHistory** collection.

## ⏰ Scheduler Workflow

The scheduler is exposed as a protected API endpoint.

GitHub Actions automatically triggers the scheduler every **5 minutes**.

```text
GitHub Actions
        │
        ▼
POST /api/v1/scheduler/run
        │
        ▼
Scheduler Controller
        │
        ▼
Scheduler Service
        │
        ▼
MongoDB Transaction
        │
 ┌──────┴─────────┐
 ▼                ▼
Update Order   Save History
        │
        ▼
 Save Scheduler Log
```

### Scheduler Responsibilities

- Find eligible orders
- Update order status
- Create order status history
- Store scheduler execution logs
- Execute updates using MongoDB transactions

## 📡 API Endpoints

### Orders

| Method | Endpoint                       | Description             |
| ------ | ------------------------------ | ----------------------- |
| POST   | `/api/v1/orders`               | Create a new order      |
| GET    | `/api/v1/orders`               | Get all orders          |
| GET    | `/api/v1/orders?status=PLACED` | Filter orders by status |

---

### Scheduler

| Method | Endpoint                | Description                |
| ------ | ----------------------- | -------------------------- |
| POST   | `/api/v1/scheduler/run` | Execute scheduler manually |

---

### Scheduler Authentication

The scheduler endpoint is protected using a custom request header.

```http
x-secret-key: YOUR_SCHEDULER_SECRET
```

## 📦 Sample Response

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Orders fetched successfully.",
  "data": {
    "count": 8,
    "orders": []
  }
}
```

## ⚙️ Environment Variables

### Backend

Create a `.env` file inside the `backend` directory.

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

CLIENT_URL=http://localhost:5173

SCHEDULER_SECRET=your_secret_key
```

### Frontend

Create a `.env` file inside the `frontend` directory.

```env
VITE_API_BASE_URL=http://localhost:5000/api/v1
```

## 🚀 Getting Started

### Clone Repository

```bash
git clone https://github.com/umakantkatare/order-management-system.git
```

### Backend Setup

```bash
cd backend

npm install

npm run dev
```

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

## 🌐 Live Demo

### Frontend

https://order-management-system-silk.vercel.app

### Backend

https://order-management-system-xv05.onrender.com

## 🤖 Scheduler Automation

The scheduler is executed automatically every **5 minutes** using **GitHub Actions**.

The workflow securely calls the scheduler endpoint using GitHub Repository Secrets.

### GitHub Secrets

- `SCHEDULER_URL`
- `SCHEDULER_SECRET`

The scheduler endpoint is protected using the `x-secret-key` request header.

## 🧪 API Testing

A complete Postman Collection is included with this project.

The collection contains:

- Create Order
- Get All Orders
- Filter Orders by Status
- Run Scheduler

All requests include automated Postman tests for response validation.

## 👨‍💻 Author

**Umakant Katare**

- GitHub: https://github.com/umakantkatare
- LinkedIn: https://linkedin.com/in/umakant-katare
````
