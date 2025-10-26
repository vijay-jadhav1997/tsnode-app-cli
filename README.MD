# ⚙️ create-tsnode — Express + TypeScript Project Generator CLI

<p align="center">
  <img src="https://img.shields.io/npm/v/tsnode?color=blue&label=version&style=for-the-badge" alt="npm version" />
  <img src="https://img.shields.io/npm/dt/tsnode?color=green&label=downloads&style=for-the-badge" alt="npm downloads" />
  <img src="https://img.shields.io/github/license/vijay-jadhav97/tsnode?style=for-the-badge" alt="license" />
  <img src="https://img.shields.io/github/stars/vijay-jadhav97/tsnode?style=for-the-badge" alt="stars" />
</p>


[![npm version](https://img.shields.io/npm/v/create-tsnode.svg?color=blue)](https://www.npmjs.com/package/create-tsnode)
![license](https://img.shields.io/npm/l/create-tsnode.svg?color=brightgreen)
![downloads](https://img.shields.io/npm/dt/create-tsnode.svg?color=orange)
![node](https://img.shields.io/node/v/create-tsnode.svg?color=yellow)


### 🛠 “Stop setting up boilerplate. 🧗🏻‍♂️ Start building products.”
---

> 🚀 **Zero-config Node.js + TypeScript + MVC Project Generator**  
> Scaffold a complete Express + Mongoose + JWT-ready backend in seconds.
> **create-tsnode** is a modern **CLI tool** that quickly scaffolds a fully configured **Express + TypeScript + Mongoose** project with a pre-built folder structure, `.env`, `tsconfig.json`, `.gitignore`, and boilerplate code to get you started instantly.

---

### 🧩 What is `create-tsnode`?

**`create-tsnode`** is a lightweight, blazing-fast CLI tool built by 👨🏻‍🎓 [Vijay Jadhav](https://vijay-jadhav1997.netlify.app) that scaffolds a ready-to-use **Node.js + TypeScript** project.  
It automatically sets up your project with an **MVC architecture**, basic **authentication routes**, and all the essential dependencies.

Think of it as **Vite for Node.js servers** — instant setup, no configuration headaches.

---

### ✨ Features

✅ **Instant Project Setup** — Creates a new project in seconds  
✅ **TypeScript Ready** — Pre-configured `tsconfig.json`  
✅ **MVC Structure** — Includes `model/`, `controller/`, `router/`, and `app.ts`  
✅ **Authentication APIs** — Ready-to-use `signup` and `login` endpoints  
✅ **Environment Management** — `.env` + `dotenv` setup  
✅ **Secure** — Pre-installed JWT + bcrypt  
✅ **Developer Friendly** — Includes Morgan, CORS, and Express middleware  
✅ **Mongoose Integration** — Pre-configured MongoDB connection  
✅ **Git Ready** — Comes with `.gitignore` and project initialization  

---

### 📦 Installation

**Run without installing  (recommended):**

```bash
> npx create-tsnode
```

**Or install globally:**

```bash
> npm install -g create-tsnode

# Then run:

> create-tsnode
```

### 🧠 Usage:
After running the CLI, you will see a prompt:

```bash
✨ Welcome to the Project Setup CLI by Vijay Jadhav
👉 Enter your project name: (type exit to close)
```

The CLI will:
1. Validate your project name
2. Create a folder with the project name
3. Generates required files.
4. Install dependencies automatically
5. Start the dev server if selected 🚀

### 🗂️ Generated Project Structure

When you run the generator, it creates the following structure:
```bash
my-app/
├── .env
├── package.json
├── tsconfig.json
├── .gitignore
├── src/
│   ├── app.ts
│   ├── controller/
│   │   └── auth.controller.ts
│   ├── model/
│   │   └── auth.model.ts
│   ├── middleware/
│   │   ├── auth.middleware.ts
│   │   └── refreshToken.middleware.ts
│   ├── router/
│   │   └── auth.router.ts
│   ├── interface/
│   │   └── auth.interface.ts
│   └── lib/
│       └── error.ts

```
---

### 🧠 What’s Included:

The generated project includes:
| Package          | Purpose                           |
| ---------------- | --------------------------------- |
| **express**      | Fast and minimalist web framework |
| **mongoose**     | MongoDB ODM for data modeling     |
| **jsonwebtoken** | Secure authentication with JWT    |
| **bcrypt**       | Password hashing                  |
| **dotenv**       | Environment variable management   |
| **cookie-parser**| Parse request header's cookies    |
| **cors**         | Cross-origin resource sharing     |
| **morgan**       | HTTP request logger               |
| **typescript**   | Static typing support             |


### 🔐 Authentication APIs

Built-in ready-to-use routes:
| Method   | Endpoint           | Description                       |
| -------- | ------------------ | --------------------------------- |
| GET | `/` | Project info    |
| POST | `/auth/signup` | Register new users                |
| POST | `/auth/login`  | Authenticate users and return JWT |


### 🧰 Scripts

Inside your generated project, you can use:
```bash
npm run dev       # Start the development server with ts-node-dev
npm run build     # Compile TypeScript to JavaScript
```


### 🛠️ Configuration

The .env file will include keys like:
```bash
PORT=8080
MONGO_URI=mongodb://localhost:27017
DB=project-name
JWT_SECRET=your-secret-key
CLIENT=localhost
```
- Update them according to your environment setup.

---

### 💬 Feedback & Contributions

1. Found a bug or have a feature request?
  Open an issue or PR on GitHub:
  👉 https://github.com/vijay-jadhav/create-tsnode
2. Fork this repo
3. Create a new branch (feature/new-idea)
4. Commit your changes
5. Open a pull request

Contributions are always welcome 🤝

---

### 🧑‍💻 Author
**Vijay Jadhav**
- 💼 Portfolio: [Vijay Jadhav](https://vijay-jadhav1997.netlify.app)
- 🐙 GitHub: [vijay-jadhav1997](https://github.com/vijay-jadhav1997)
- 🐦 Twitter: ['https://x.com/VijayJadha93653'](https://x.com/VijayJadha93653)

---- 

### 📜 License
This project is licensed under the MIT License — see the LICENSE file for details.

### 🌟 Show Your Support
- If you like tsnode, please give it a ⭐ on GitHub!
- It helps others discover this tool and supports further development.


> “Stop setting up boilerplate. Start building products.”