# 🛒 E-Commerce App — Full Stack DevOps Project

<div align="center">

![Uploading ChatGPT Image Feb 23, 2026, 04_01_09 PM.png…]()

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-black?style=for-the-badge&logo=vercel)](https://ecommerce-app.vercel.app)
[![Backend](https://img.shields.io/badge/Backend-Railway-purple?style=for-the-badge&logo=railway)](https://e-commerce-app-production-9339.up.railway.app)
[![Docker](https://img.shields.io/badge/Docker-Containerized-blue?style=for-the-badge&logo=docker)](https://hub.docker.com)
[![Kubernetes](https://img.shields.io/badge/Kubernetes-Orchestrated-326CE5?style=for-the-badge&logo=kubernetes)](https://kubernetes.io)
[![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-2088FF?style=for-the-badge&logo=githubactions)](https://github.com/features/actions)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?style=for-the-badge&logo=mongodb)](https://mongodb.com)

**A production-grade, full-stack e-commerce application built with the MERN stack,
containerized with Docker, orchestrated with Kubernetes, automated with GitHub Actions CI/CD,
and monitored with Prometheus & Grafana.**

[View Demo](https://ecommerce-app.vercel.app) · [Backend API](https://e-commerce-app-production-9339.up.railway.app) · [Report Bug](https://github.com/YOUR_USERNAME/ecommerce-app/issues)

</div>

---

## 📋 Table of Contents

- [About The Project](#-about-the-project)
- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Architecture](#-architecture)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Docker Setup](#-docker-setup)
- [Kubernetes Deployment](#-kubernetes-deployment)
- [CI/CD Pipeline](#-cicd-pipeline)
- [Monitoring](#-monitoring)
- [API Endpoints](#-api-endpoints)
- [Live Deployment](#-live-deployment)
- [Screenshots](#-screenshots)

---

## 🎯 About The Project

This project is a **production-ready e-commerce platform** built to demonstrate a complete DevOps workflow. It covers everything from writing code to deploying, scaling, and monitoring in production.

### What Makes This Special?

| Feature | Description |
|---|---|
| 🏗️ Three-Tier Architecture | Separate Frontend, Backend, and Database layers |
| 🐳 Fully Containerized | Every service runs in its own Docker container |
| ☸️ Kubernetes Orchestrated | Auto-healing, scaling, and rolling deployments |
| 🔄 Automated CI/CD | Zero manual deployment steps |
| 📊 Real-time Monitoring | Live metrics and dashboards |
| 🌐 Cloud Deployed | Live and publicly accessible |

---

## 🛠️ Tech Stack

### Application
| Layer | Technology | Purpose |
|---|---|---|
| **Frontend** | React.js | User interface |
| **Routing** | React Router DOM | Page navigation |
| **State** | Context API | Global state management |
| **HTTP** | Axios | API calls |
| **Backend** | Node.js + Express.js | REST API server |
| **Auth** | JWT + Bcrypt | Authentication & security |
| **Database** | MongoDB + Mongoose | Data storage |
| **Web Server** | Nginx | Serve React + API proxy |

### DevOps
| Tool | Purpose |
|---|---|
| **Docker** | Containerization |
| **Docker Compose** | Local multi-container orchestration |
| **Kubernetes** | Production container orchestration |
| **GitHub Actions** | CI/CD automation |
| **Docker Hub** | Container image registry |
| **Prometheus** | Metrics collection |
| **Grafana** | Metrics visualization |

### Cloud
| Service | Purpose |
|---|---|
| **Vercel** | Frontend hosting (Free) |
| **Railway** | Backend hosting (Free) |
| **MongoDB Atlas** | Cloud database (Free) |

---

## ✨ Features

### 👤 User Features
- ✅ Register & Login with JWT authentication
- ✅ Browse all products with search functionality
- ✅ Add products to cart with quantity management
- ✅ Place orders with one click
- ✅ View order history with real-time status updates

### 👑 Admin Features
- ✅ Add, edit, and delete products
- ✅ View all customer orders
- ✅ Update order status (Pending → Processing → Shipped → Delivered)
- ✅ View customer details on each order

### 🔧 DevOps Features
- ✅ Dockerized all 3 services with optimized images
- ✅ Docker Compose for one-command local setup
- ✅ Kubernetes with 2 replicas for high availability
- ✅ MongoDB StatefulSet with persistent storage
- ✅ GitHub Actions CI/CD pipeline
- ✅ Prometheus + Grafana monitoring

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                     THREE-TIER ARCHITECTURE                      │
│                                                                  │
│   ┌──────────────┐    ┌──────────────┐    ┌──────────────────┐  │
│   │   FRONTEND   │    │   BACKEND    │    │    DATABASE      │  │
│   │              │───▶│              │───▶│                  │  │
│   │  React.js    │    │  Node.js     │    │  MongoDB         │  │
│   │  Port: 80    │    │  Port: 5000  │    │  Port: 27017     │  │
│   │  Nginx       │    │  Express     │    │  Mongoose        │  │
│   └──────────────┘    └──────────────┘    └──────────────────┘  │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                        DEVOPS PIPELINE                           │
│                                                                  │
│  Code Push → GitHub Actions → Docker Build → Docker Hub         │
│                                    ↓                            │
│  Prometheus ← Node.js App ← Kubernetes Deploy ← Docker Pull     │
│       ↓                                                         │
│  Grafana Dashboard                                               │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                    KUBERNETES CLUSTER                            │
│                                                                  │
│  ┌────────────────────┐    ┌────────────────────┐               │
│  │ Frontend Deployment│    │ Backend Deployment │               │
│  │ Replicas: 2        │    │ Replicas: 2        │               │
│  └────────────────────┘    └────────────────────┘               │
│                                                                  │
│  ┌────────────────────┐    ┌────────────────────┐               │
│  │ MongoDB StatefulSet│    │ Services           │               │
│  │ Replicas: 1        │    │ NodePort: 30080    │               │
│  │ PVC: 1Gi           │    │ ClusterIP: backend │               │
│  └────────────────────┘    └────────────────────┘               │
└─────────────────────────────────────────────────────────────────┘
```

---

## 📁 Project Structure

```
ecommerce-app/
│
├── 📂 backend/
│   ├── 📂 config/
│   │   └── db.js                    # MongoDB connection
│   ├── 📂 controllers/
│   │   ├── authController.js        # Register / Login
│   │   ├── productController.js     # Product CRUD
│   │   └── orderController.js       # Order management
│   ├── 📂 middleware/
│   │   └── authMiddleware.js        # JWT + Admin guard
│   ├── 📂 models/
│   │   ├── User.js                  # User schema
│   │   ├── Product.js               # Product schema
│   │   └── Order.js                 # Order schema
│   ├── 📂 routes/
│   │   ├── authRoutes.js            # /api/auth
│   │   ├── productRoutes.js         # /api/products
│   │   └── orderRoutes.js           # /api/orders
│   ├── .env                         # Environment variables
│   ├── Dockerfile                   # Backend Docker image
│   ├── nixpacks.toml                # Railway build config
│   ├── seeder.js                    # Database seeder
│   └── server.js                    # App entry point
│
├── 📂 frontend/
│   ├── 📂 src/
│   │   ├── 📂 components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── 📂 pages/
│   │   │   ├── HomePage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   ├── RegisterPage.jsx
│   │   │   ├── CartPage.jsx
│   │   │   ├── OrdersPage.jsx
│   │   │   └── AdminPage.jsx
│   │   ├── 📂 context/
│   │   │   ├── AuthContext.js
│   │   │   └── CartContext.js
│   │   └── 📂 services/
│   │       └── api.js
│   ├── nginx.conf
│   └── Dockerfile
│
├── 📂 k8s/
│   ├── backend-deployment.yaml
│   ├── frontend-deployment.yaml
│   ├── mongodb-statefulset.yaml
│   └── monitoring.yaml
│
├── 📂 monitoring/
│   ├── prometheus.yml
│   └── 📂 grafana/
│       └── datasources.yml
│
├── 📂 .github/
│   └── 📂 workflows/
│       └── deploy.yml
│
├── docker-compose.yml
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

| Tool | Version | Download |
|---|---|---|
| Node.js | v18+ | [nodejs.org](https://nodejs.org) |
| MongoDB | v6+ | [mongodb.com](https://mongodb.com) |
| Docker Desktop | Latest | [docker.com](https://docker.com) |
| Git | Latest | [git-scm.com](https://git-scm.com) |

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/ecommerce-app.git
cd ecommerce-app
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create `backend/.env`:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_super_secret_key_change_this
```

```bash
npm run dev
# ✅ Server running on port 5000
# ✅ MongoDB Connected: localhost
```

### 3. Setup Frontend

```bash
cd frontend
npm install
npm start
# Opens at http://localhost:3000
```

### 4. Seed the Database

```bash
cd backend
node seeder.js
# ✅ MongoDB Connected
# ✅ Sample products added successfully!
```

### 5. Make Yourself Admin

```bash
mongosh
use ecommerce
db.users.updateOne({ email: "your@email.com" }, { $set: { isAdmin: true } })
```

---

## 🐳 Docker Setup

### Run with One Command

```bash
docker-compose up --build
```

### 5 Containers Started

| Container | Port | Description |
|---|---|---|
| `frontend` | 8080 | React app via Nginx |
| `backend` | 5001 | Node.js REST API |
| `mongodb` | 27017 | MongoDB database |
| `prometheus` | 9090 | Metrics collection |
| `grafana` | 3000 | Monitoring dashboards |

### Access

| Service | URL |
|---|---|
| 🌐 Frontend | http://localhost:8080 |
| 🔧 Backend | http://localhost:5001 |
| 📊 Prometheus | http://localhost:9090 |
| 📈 Grafana | http://localhost:3000 |

### Seed Docker Database

```bash
docker exec -it backend node seeder.js
```

---

## ☸️ Kubernetes Deployment

### Deploy All Services

```bash
kubectl apply -f k8s/mongodb-statefulset.yaml
kubectl apply -f k8s/backend-deployment.yaml
kubectl apply -f k8s/frontend-deployment.yaml
kubectl apply -f k8s/monitoring.yaml
```

### Verify

```bash
kubectl get all
```

```
NAME                            READY   STATUS
pod/backend-xxx                 1/1     Running   ← 2 replicas
pod/backend-xxx                 1/1     Running
pod/frontend-xxx                1/1     Running   ← 2 replicas
pod/frontend-xxx                1/1     Running
pod/mongodb-0                   1/1     Running

deployment.apps/backend         2/2     Running
deployment.apps/frontend        2/2     Running
statefulset.apps/mongodb        1/1     Running
```

### Access

```
🌐 Frontend   → http://localhost:30080
📊 Prometheus → http://localhost:30090
📈 Grafana    → http://localhost:30030
```

### Useful Commands

```bash
kubectl scale deployment backend --replicas=5   # Scale up
kubectl get pods -w                             # Watch pods
kubectl logs <pod-name>                         # View logs
kubectl rollout restart deployment/backend      # Rolling restart
kubectl delete -f k8s/                          # Delete all
```

---

## 🔄 CI/CD Pipeline

### Pipeline Flow

```
Push to main
     ↓
🧪 Test Backend (~10s)
     ↓
🐳 Build Backend Image → Docker Hub (~24s)
🐳 Build Frontend Image → Docker Hub (~1m 6s)
     ↓
☸️ Deploy to Kubernetes (~4s)
     ↓
✅ Live! (Total: ~1m 27s)
```

### Required GitHub Secrets

| Secret | Value |
|---|---|
| `DOCKER_USERNAME` | Docker Hub username |
| `DOCKER_PASSWORD` | Docker Hub password |

---

## 📊 Monitoring

### Prometheus — http://localhost:9090
Scrapes metrics every **15 seconds**

| Metric | Description |
|---|---|
| `http_requests_total` | Requests by method/route/status |
| `http_request_duration_seconds` | Response time histogram |
| `process_cpu_seconds_total` | CPU usage |
| `nodejs_heap_size_total_bytes` | Memory usage |

### Grafana — http://localhost:3000
```
Username: admin
Password: admin123
```
Import Dashboard ID: **11159**

---

## 🔌 API Endpoints

### Auth
| Method | Endpoint | Access |
|---|---|---|
| `POST` | `/api/auth/register` | Public |
| `POST` | `/api/auth/login` | Public |

### Products
| Method | Endpoint | Access |
|---|---|---|
| `GET` | `/api/products` | Public |
| `GET` | `/api/products?search=term` | Public |
| `GET` | `/api/products/:id` | Public |
| `POST` | `/api/products` | Admin |
| `PUT` | `/api/products/:id` | Admin |
| `DELETE` | `/api/products/:id` | Admin |

### Orders
| Method | Endpoint | Access |
|---|---|---|
| `POST` | `/api/orders` | User |
| `GET` | `/api/orders/mine` | User |
| `GET` | `/api/orders/all` | Admin |
| `PUT` | `/api/orders/:id/status` | Admin |

### System
| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/` | Health check |
| `GET` | `/metrics` | Prometheus metrics |

---

## 🌐 Live Deployment

```
User → Vercel (Frontend) → Railway (Backend) → MongoDB Atlas
```

| Service | Platform | URL |
|---|---|---|
| 🌐 Frontend | Vercel | https://ecommerce-app.vercel.app |
| 🔧 Backend | Railway | https://e-commerce-app-production-9339.up.railway.app |
| 🍃 Database | MongoDB Atlas | cluster0.gmiy5yo.mongodb.net |

---

## 📸 Screenshots

> Replace these with actual screenshots from your app

### Homepage
<img width="1890" height="752" alt="image" src="https://github.com/user-attachments/assets/c2e15169-d5a6-4029-8aa6-9a7486102bc9" />

### Admin Panel
<img width="1381" height="727" alt="image" src="https://github.com/user-attachments/assets/e7ada0c9-6a11-43ee-b53f-b4c73c7f05a1" />


### CI/CD Pipeline
<img width="1416" height="368" alt="image" src="https://github.com/user-attachments/assets/9fb2b91f-4b75-4259-a782-0a46195f18ec" />


### Grafana Dashboard
<img width="1550" height="787" alt="image" src="https://github.com/user-attachments/assets/b2a996a2-ef6a-4c25-8b94-ee23936a3584" />


---

## 🔐 Security

- Passwords hashed with **bcryptjs** (10 salt rounds)
- **JWT tokens** expire in 7 days
- All secrets stored in **environment variables**
- `.env` excluded from Git via `.gitignore`
- **Role-based middleware** protects admin routes

---

<div align="center">

### ⭐ Star this repo if you found it helpful!

`React.js` `Node.js` `MongoDB` `Docker` `Kubernetes` `GitHub Actions` `Prometheus` `Grafana`

**Built with ❤️ — Full Stack + DevOps**

</div>



