# 💬 Chat Module (CRUD Application)

A simple **WhatsApp-style chat module** built using **Node.js, Express, MongoDB, and EJS**.  
This project demonstrates **CRUD operations**, **RESTful routing**, and the use of **method-override** to handle PATCH and DELETE requests from HTML forms.

---

## 🚀 Features

- ➕ Create new chat messages  
- 📋 View all chats  
- ✏️ Edit existing messages  
- 🗑️ Delete chats  
- 🕒 Store message creation time  
- 🔁 RESTful routing structure  

---

## 🛠️ Tech Stack

| Technology | Description |
|----------|-------------|
| Node.js | JavaScript runtime |
| Express.js | Backend framework |
| MongoDB | NoSQL database |
| Mongoose | MongoDB ODM |
| EJS | Template engine |
| method-override | Enable PATCH & DELETE |
| HTML / CSS | Frontend UI |

---

## 📂 Project Structure

```

chat-module/
├── models/
│   └── chat.js
├── public/
│   ├── css/
│   └── images/
├── views/
│   ├── index.ejs
│   ├── create.ejs
│   └── edit.ejs
├── .gitignore
├── index.js
├── init.js
├── package.json
└── README.md

````

---

## 🌐 Routes

| Method | Route | Description |
|------|------|-------------|
| GET | `/chats` | View all chats |
| GET | `/chats/create` | Show create chat form |
| POST | `/chats` | Create a new chat |
| GET | `/chats/:id/edit` | Show edit chat form |
| PATCH | `/chats/:id` | Update chat message |
| DELETE | `/chats/:id` | Delete chat |

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js
- MongoDB (running locally)

---

### Steps

1️⃣ Clone the repository
```bash
git clone https://github.com/nitishyadav108/chat-module.git
````

2️⃣ Navigate to project folder

```bash
cd chat-module
```

3️⃣ Install dependencies

```bash
npm install
```

4️⃣ Start MongoDB
(Make sure MongoDB service is running)

5️⃣ Run the server

```bash
node index.js
```

6️⃣ Open in browser

```
http://localhost:8080/chats
```

---

## 🧠 Learning Outcomes

* Understanding of **CRUD operations**
* Working with **MongoDB & Mongoose**
* Implementing **RESTful routes**
* Handling **PATCH & DELETE** using method-override
* Using **EJS templates** with Express

---

## 👤 Author

**Nitish Yadav**
Aspiring Full Stack Developer 🚀

---

⭐ If you like this project, don’t forget to star the repository!

````
