# 🚀 Frontend CRUD App (Next.js)

This is the frontend of a **CRUD (Create, Read, Update, Delete) application** built with **Next.js**. It interacts with a backend API to perform database operations.

## 🌟 Features
✅ User-friendly UI  
✅ Fetch, Add, Edit, and Delete records  
✅ API integration with NestJS backend  
✅ Responsive design  
✅ State management with React hooks  

---

## 🛠️ Tech Stack
- **Next.js** - React framework for server-side rendering (SSR)  
- **Axios** - For API requests  
- **Tailwind CSS** - Styling  
- **React Hook Form** - Form handling  

---

## 🛆 Installation & Setup

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/repo-name.git
cd frontend
```

### **2️⃣ Install Dependencies**
```sh
npm install
# OR
yarn install
```

### **3️⃣ Set Up Environment Variables**
Create a **`.env.local`** file and add:
```ini
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```
(Replace with your actual backend API URL)

### **4️⃣ Run the Development Server**
```sh
npm run dev
# OR
yarn dev
```
🚀 Your app will be live at **`http://localhost:3000`**  

---

## 📌 Folder Structure
```
📦 frontend
 ┣ 📚 components  # Reusable UI components
 ┣ 📚 pages       # Next.js pages (CRUD screens)
 ┣ 📚 styles      # Global styles
 ┣ 📚 utils       # API services, helpers
 ┣ 📝 .env.local  # Environment variables
 ┣ 📝 package.json
 ┣ 📝 README.md
```

---

## ⚪ API Endpoints (Example)
| Action  | Method | Endpoint |
|---------|--------|----------------|
| Get All Users | GET | `/api/users` |
| Get User by ID | GET | `/api/users/:id` |
| Create User | POST | `/api/users` |
| Update User | PUT | `/api/users/:id` |
| Delete User | DELETE | `/api/users/:id` |

---

## 🚀 Deployment
### **To Deploy on Vercel**
```sh
npm run build
vercel deploy
```
---

## 🤝 Contributing
1. Fork the repo  
2. Create a new branch: `git checkout -b feature-branch`  
3. Commit changes: `git commit -m "Added new feature"`  
4. Push: `git push origin feature-branch`  
5. Open a Pull Request  

---

## 📝 License
This project is **MIT licensed**.  

