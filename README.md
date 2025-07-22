# 🚚 Delivery Platform

The **Delivery Platform** is a full-stack logistics solution designed to manage and streamline customer pickup requests and delivery partner operations. This monorepo includes:

- 📦 **Customer App** — Customers schedule and manage pickups.
- 🚚 **Partner App** — Delivery partners view assigned pickups and mark them as completed.

---

## ✨ Features

✅ **Customer App**
- Secure OTP login
- Schedule new pickups
- View pickup history
- Beautiful gradient UI
- API integration (`json-server` or your backend)

✅ **Partner App**
- Secure OTP login
- View assigned pickups
- Approve/completed pickups
- View pickup details
- Map link integration for navigation

---

## 🏗️ Folder Structure

```

epicircle-delivery-app
├── customer-app/
│   ├── app/                 # Screens (login, schedule, history)
│   ├── assets/              # Images (truck background)
│   ├── components/          # Reusable UI
│   ├── constants/           # Colors and styles
│   ├── hooks/               # Custom hooks
│   ├── package.json
│   ├── tsconfig.json
│   └── ...
│
├── partner-app/
│   ├── app/                 # Screens (login, assigned pickups)
│   ├── assets/              # Images (truck background)
│   ├── components/          # Reusable UI
│   ├── constants/           # Colors and styles
│   ├── hooks/               # Custom hooks
│   ├── package.json
│   ├── tsconfig.json
│   └── ...
└── README.md

````

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 16
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)

---

## 📲 Running the Apps

### Customer App

```bash
cd customer-app
npm install
npx expo start
````

Open Expo Go and scan the QR code.

---

### Partner App

```bash
cd partner-app
npm install
npx expo start
```

Open Expo Go and scan the QR code.

---

## 🔒 Environment Variables

If you want to use a custom API endpoint, create a `.env` in each app folder:

```
API_URL=http://localhost:3001
```

Then access it:

```ts
process.env.API_URL
```

---

## 🧠 Logic Overview

**Customer App Flow:**

1. **Login:**

   * OTP authentication using `AsyncStorage` to persist session.
2. **Home Screen:**

   * Navigation to Schedule Pickup or Order History.
3. **Schedule Pickup:**

   * Form with address, date, and optional instructions.
   * Sends data to backend (`axios.post`).
4. **History:**

   * Loads past pickups via `axios.get`.
   * Displays in styled cards.

**Partner App Flow:**

1. **Login:**

   * OTP authentication (same `AsyncStorage` logic).
2. **Assigned Pickups:**

   * Fetches pickups with status `Scheduled`.
   * Allows marking pickups as `Completed`.
   * Map link opens Google Maps.
3. **Pickup Details:**

   * Shows all pickup information.

Both apps share:

* TypeScript for type safety
* Expo for development
* React Native Paper for UI components

---

## ✨ Tech Stack

* React Native + Expo
* TypeScript
* React Native Paper
* Axios
* AsyncStorage

---

## 📸 Screenshots

Will update soon!

---

## 🛠️ Scripts

**Customer App:**

* `npm start`

* `npx expo start` — Start dev server
* `npm run lint` — Lint code

**Partner App:**

* `npx expo start` — Start dev server
* `npm run lint` — Lint code

---

## 🧩 JSON Server (Mock API)

To run a mock backend:

1. Install JSON server:

   ```bash
   npm install -g json-server
   ```
2. Create `db.json`:

   ```json
   {
     "pickups": []
   }
   ```
3. Start server:

   ```bash
   json-server --watch db.json --port 3001
   ```

---

## 🛡️ License

This project is open-source under the MIT License.

---

Feel free to contribute!
