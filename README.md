
---

# 🏏 TSL Cricket League Backend

This is the **backend API** for the TSL (Talhar Super League) Cricket League web application.
It is built with **Node.js, Express, Sequelize ORM, and PostgreSQL** and supports **JWT-based authentication** with role-based access control.

---

## 📦 Features

* User Authentication & Role-based access (`admin` / `user`)
* CRUD operations for:

  * Teams
  * Players
  * Matches
  * Trophies
  * Investors
  * Revenue
* Player-team relationships and auction-style player price updates
* Match results and trophy tracking
* PostgreSQL database with Sequelize ORM

---

## ⚙️ Tech Stack

* Node.js / Express
* PostgreSQL
* Sequelize ORM
* JWT Authentication
* bcrypt for password hashing
* CORS and dotenv for configuration

---

## 🗂 Folder Structure

```
backend/
├── config/
│   └── db.js             # Sequelize Postgres configuration
├── controllers/          # All controller files
│   ├── authController.js
│   ├── teamController.js
│   ├── playerController.js
│   ├── matchController.js
│   ├── trophyController.js
│   ├── investorController.js
│   └── revenueController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   ├── User.js
│   ├── Team.js
│   ├── Player.js
│   ├── Match.js
│   ├── Trophy.js
│   ├── Investor.js
│   └── Revenue.js
├── routes/
│   ├── authRoutes.js
│   ├── teamRoutes.js
│   ├── playerRoutes.js
│   ├── matchRoutes.js
│   ├── trophyRoutes.js
│   ├── investorRoutes.js
│   └── revenueRoutes.js
├── server.js             # Main entry point
├── package.json
└── .env                  # Environment variables
```

---

## ⚡ Installation

1. Clone the repo:

```bash
git clone <your-repo-url>
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root folder:

```env
PORT=5000
DB_NAME=cricket-league
DB_USER=postgres
DB_PASSWORD=postgres
DB_HOST=localhost
JWT_SECRET=your_jwt_secret
```

4. Start the server:

```bash
npm run dev
```

Server should be running at: `http://localhost:5000`

---

## 🔹 API Endpoints

### Auth (Public)

* `POST /auth/register` → Register new user
* `POST /auth/login` → Login and get JWT token

### Users (Admin only)

* `GET /users` → List all users
* `GET /users/:id` → Get single user
* `PUT /users/:id` → Update user
* `DELETE /users/:id` → Delete user

### Teams

* `POST /teams` → Create team
* `GET /teams` → List all teams
* `GET /teams/:id` → Get single team
* `PUT /teams/:id` → Update team
* `DELETE /teams/:id` → Delete team

### Players

* `POST /players` → Create player
* `GET /players` → List all players
* `GET /players/:id` → Get single player
* `PUT /players/:id` → Update player
* `DELETE /players/:id` → Delete player

### Matches

* `POST /matches` → Create match
* `GET /matches` → List all matches
* `GET /matches/:id` → Get single match
* `PUT /matches/:id` → Update match
* `DELETE /matches/:id` → Delete match

### Trophies

* `POST /trophies` → Create trophy
* `GET /trophies` → List all trophies
* `GET /trophies/:id` → Get single trophy
* `PUT /trophies/:id` → Update trophy
* `DELETE /trophies/:id` → Delete trophy

### Investors

* `POST /investors` → Create investor
* `GET /investors` → List all investors
* `GET /investors/:id` → Get single investor
* `PUT /investors/:id` → Update investor
* `DELETE /investors/:id` → Delete investor

### Revenue

* `POST /revenues` → Create revenue record
* `GET /revenues` → List all revenue records
* `GET /revenues/:id` → Get single revenue
* `PUT /revenues/:id` → Update revenue
* `DELETE /revenues/:id` → Delete revenue

> All protected routes require **JWT token** in `Authorization → Bearer Token`.

---

## 🔹 Notes

* Make sure Teams exist before creating Players, Matches, Trophies, or Revenue records (foreign key dependencies).
* Passwords are hashed automatically.
* Role-based access is enforced (`admin` vs `user`).

---

## 🔹 Testing with Postman

1. Register or login user to get JWT token.
2. Set token in Postman **Authorization → Bearer Token**.
3. Test all protected routes.

---


