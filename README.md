# 🌍 Landmark Management Web App

A full-stack dynamic web application for exploring, saving, and managing landmarks, creating visiting plans, and tracking visited locations.

## 🔧 Technologies Used

### Frontend
- HTML5, CSS3, JavaScript
- Leaflet.js for interactive maps
- AWS S3 for static website hosting

### Backend
- Node.js + Express.js
- MongoDB Atlas (Cloud Database)
- JWT Authentication
- Hosted on AWS EC2

## 🚀 Features

### 🗺️ Public Map Interface
- View all landmarks globally (without logging in)
- Click on any point on the map to suggest a new landmark

### 🔐 Authentication
- Secure user registration and login using JWT
- Unique usernames required
- Logout functionality

### 📍 Landmarks
- All landmarks are visible globally
- Only authenticated users can add notes to landmarks
- Landmark data includes name, coordinates, category, and description
- Users can update/delete their personal notes

### 📋 Visiting Plans
- Users can create multiple visiting plans
- Select landmarks and add visit-specific notes
- Update or delete visiting plans anytime

### ✅ Visited Landmarks
- Mark landmarks as visited from any visiting plan
- Automatically logs visit date and username
- View full history of visited locations

### 🔍 Search & Filter
- Search landmarks by name
- Filter landmarks by category

## 🌐 Deployment

### Backend (EC2)
- Deployed to AWS EC2 Ubuntu instance
- Uses MongoDB Atlas cloud-hosted database
- Runs on public port 80

### Frontend (S3)
- Static files hosted via AWS S3 with static website hosting
- API requests point to public EC2 IP

## ⚙️ Installation & Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/Lorstann/web2.git
cd web2
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret-key
```

### 4. Start the server
```bash
node server.js
```

## ✅ Demo

**Frontend:**  
[http://landmarks-frontend.s3-website-eu-central-1.amazonaws.com](http://landmarks-frontend.s3-website-eu-central-1.amazonaws.com)

**Backend API Example:**  
`http://your-ec2-public-ip/api/landmarks`

## 📁 Folder Structure

```
server/
  ├── models/
  ├── routes/
  ├── middleware/
  ├── server.js
index.html (frontend entry point)
```

---

## 📬 Author

**Lorstann**  
Computer Engineering Student 🌍
