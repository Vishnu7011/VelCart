# 🛒 Velcart

**Velcart** is a modern full-stack e-commerce web application built using the **MERN Stack**. It provides a smooth and user-friendly shopping experience with product browsing, cart management, authentication, orders, payments, and an **AI-powered voice chatbot for website navigation**.

---
## 🚀 Live Demo

Link:
https://velcart-frontendone.onrender.com

## 📌 Project Overview

Velcart is a complete e-commerce platform consisting of three main parts:

- 🛍️ **Frontend** – Customer-facing e-commerce website
- ⚙️ **Backend** – REST APIs, authentication, database, orders and payments
- 🛠️ **Admin** – Admin dashboard for managing products, orders and users

Velcart also includes an **AI-powered voice chatbot navigation assistant**. Users can simply speak their command, and the chatbot understands which page they want to visit and automatically navigates them to the requested page.

For example, users can say:

> 🎤 "Open my cart"

> 🎤 "Show me men's products"

> 🎤 "Take me to my orders"

> 🎤 "Open the contact page"

The chatbot processes the voice command and takes the user directly to the requested page.

---

## ✨ Features

### 🛍️ Customer Website

- Product Browsing
- Product Details
- Add to Cart
- Cart Management
- User Authentication
- User Profile
- Order Placement
- Order Management
- Razorpay Payment Integration
- Responsive Design

### 🤖 AI Voice Chatbot

- Voice-based interaction
- Understands spoken commands
- AI-powered website navigation
- Direct navigation to requested pages

### 🛠️ Admin Dashboard

- Admin Authentication
- Add Products
- Update Products
- Delete Products
- Manage Products
- View Orders
- Manage Orders
- Manage Users

---

## 🛠️ Tech Stack

### Frontend
- React.js
- JavaScript
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- JWT
- REST APIs

### Admin
- React.js
- JavaScript
- Tailwind CSS
- Axios

### Payment
- Razorpay

### AI / Voice
- AI-powered Voice Chatbot
- Voice-based Website Navigation

---

## 📂 Project Structure

```text
Velcart/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── controller/
│   ├── model/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── package.json
│   └── server.js
│
├── admin/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/velcart.git
cd velcart
```

### 2. Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

### 3. Setup Backend

Open a new terminal:

```bash
cd backend
npm install
npm run dev
```

### 4. Setup Admin

Open another terminal:

```bash
cd admin
npm install
npm run dev
```

---

## 🔐 Environment Variables

Create a `.env` file inside the **backend** folder:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
```

> Never commit your `.env` file or secret keys to GitHub.

---

## 🔄 How AI Voice Navigation Works

```text
User
  ↓
Speaks a Command
  ↓
AI Voice Chatbot
  ↓
Understands the Command
  ↓
Finds the Relevant Page
  ↓
Navigates User to That Page
```

---

## 💳 Payment Integration

Velcart uses **Razorpay** for online payment processing, allowing customers to securely complete their purchases.

---

## 🎯 Project Goals

The goal of Velcart is to create a complete and modern e-commerce platform that combines traditional online shopping features with **AI-powered voice navigation** for a more interactive user experience.

---

## 🚀 Future Improvements

- 🎤 Voice-based Product Search
- 🤖 AI Product Recommendations
- 🌐 Multilingual Voice Commands
- 📦 Voice-based Order Tracking
- 💬 AI Shopping Assistant
- 🔍 AI-powered Product Discovery

---

## 👨‍💻 Developer

**Vishnu**

Built with ❤️ using the **MERN Stack + AI-powered Voice Navigation**.
