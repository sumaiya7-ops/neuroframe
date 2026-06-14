# 🧠 NeuroFrame — AI Image Generation Platform

NeuroFrame is a modern AI-powered image generation and gallery web application built with **React + TypeScript + Tailwind CSS**.  
It allows users to explore AI-generated art, filter by categories, view details, and simulate authentication with a clean SaaS-style UI.

---

## 🚀 Live Features

- ✨ **AI-Style Gallery System** — Explore curated AI art styles.
- 🎨 **Category Filters** — Sci-fi, Fantasy, Cyberpunk, Pixel Art, Surreal, Vaporwave, Realistic, Minimal, Steampunk.
- ❤️ **Interactive Like System** — Real-time UI interaction for liking images.
- ⬇️ **Image Download Feature** — One-click download functionality.
- 👁 **Protected Views** — Smart route guarding that redirects to login for premium content.
- 🔐 **Authentication UI** — Full Sign-In / Sign-Up forms with 8+ character validation.
- 👤 **Fake Auth System** — Simulated session persistence and user profile handling.
- 💳 **SaaS Pricing Page** — Tiered membership plans (Basic, Pro, Ultra).
- 📱 **Responsive Design** — Fully optimized for mobile, tablet, and desktop screens.

---

## 🎨 UI Theme

NeuroFrame uses a **premium light SaaS aesthetic**:

- 🤍 **Rice Maroon Background:** `#f3e7e9`  
- 🍷 **Soft Maroon Text:** `#7a2e3a`  
- 🟣 **Indigo Accent:** `#4f46e5`  

Clean, minimal, and Apple-inspired UI system.

---

## 🛠️ Tech Stack

- ⚛️ **React** — Component-based UI creation
- ⚡ **Vite** — Ultra-fast development server and bundler
- 📘 **TypeScript** — Static typing for robust code
- 🎨 **Tailwind CSS** — Utility-first styling framework
- 🧠 **React Router DOM** — Client-side declarative routing

---

## 📁 Project Structure

```text
src/
├── components/     # Reusable UI elements (Buttons, Inputs, Navbar, Footer)
├── pages/          # Page views (Home, Photos, Pricing, Profile, Auth)
├── data/           # Static assets, mock data, and image information
├── context/        # React Context API for global state management (Auth)
├── App.tsx         # Main router and layout wrapper
└── main.tsx        # Application entry point
```

---

## 🔐 Authentication Flow

- Fake authentication system built using React Context API.
- Login state is globally accessible across all views.
- Protected "View Image" routes trigger an automatic redirect to the Sign In page.
- Logout action clears user session and resets application state.

---

## 📸 Pages Overview

### 🏠 Home
Hero section featuring modern AI branding and dynamic Call-To-Action (CTA) buttons.

### 🖼 Photos
Dynamic grid gallery equipped with category filtering tab navigation and responsive image cards.

### 💳 Pricing
SaaS-style pricing tiers highlighting features, price points, and premium conversion triggers.

### 👤 Profile
Secured route displaying active session details and user-specific stats.

### 🔐 Sign In / Sign Up
Interactive forms featuring robust client-side validation rules.

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

```bash
# 1. Clone the repository
git clone https://github.com/sumaiya-7ops/neuroframe.git

# 2. Navigate to the project directory
cd neuroframe

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

### 📦 Production Build

To build the project for production, run:

```bash
npm run build
```

---

## 🌟 Future Improvements

- 🔥 Real AI image generation API integration (OpenAI / Stable Diffusion)
- 🔐 Secure authentication using Firebase or Supabase
- 💳 Active payment gateway simulator via Stripe API
- 🗄️ Persistent storage backend using Node.js and MongoDB
- 🎬 Fluid micro-interactions powered by Framer Motion
- 🌍 Production deployment configuration for Vercel / Netlify

---

## 👨‍💻 Developer Notes

This project is designed specifically as a portfolio-grade SaaS UI/UX application. The core focus lies in demonstrating clean folder architecture, highly reusable components, type-safe data handling, and professional CSS layouts.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## ⭐ Show Support

If you like this project, please consider giving it a ⭐ on GitHub!

*Built with ❤️ using React, TypeScript, and Tailwind CSS.*
