# Ajit Kumar Saini — Developer Portfolio (React + Vite)

[![Live Site](https://img.shields.io/badge/Live_Portfolio-Vercel-black?style=for-the-badge&logo=vercel)](https://ajit-kumar-saini-portfolio.vercel.app/)
[![React](https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.js.org/)
[![Vite](https://img.shields.io/badge/Vite_6-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

A modern, high-performance developer portfolio built with **React.js 18**, **Vite 6**, and **Framer Motion**. Features dynamic HTML5 canvas particles, cyber-neon glassmorphism aesthetics, real-time live coding profile synchronization across 5 platforms with 1-click refresh, dark/light theme switching, and an interactive showcase of full-stack MERN projects.

---

## 🚀 Features

- **Real-Time Live Coding Profile Sync**:
  - Live data fetching for **LeetCode** (746+ Solved, Rating 1750), **CodeChef** (2★, Rating 1525), **Codeforces** (Rating 1022, 36 Solved), **GeeksforGeeks** (95 Solved), and **GitHub** (23 Repos, 6 Followers, 20+ Merged PRs in GSSoC 2026).
  - Calculates dynamic **Total DSA Solved (1572+)** across all 4 platforms in real time.
  - Interactive **1-Click Refresh Stats Button** in the Navbar, Achievements banner, and Footer with cache-busting requests and smooth animated counter re-triggering.

- **Modular Architecture (< 100 lines per file)**:
  - Component hierarchy decomposed into organized subdirectories (`Hero/`, `Achievements/`, `Footer/`, `About/`, `Navbar/`, `Contact/`, `Projects/`, `Skills/`, `CertificateCard/`, `CertificateModal/`, `ParticleBackground/`, `CertificationsPage/`).
  - Standardized modern arrow functional components:
    ```jsx
    import React from 'react';
    const ComponentName = (props) => { return (...); };
    export default ComponentName;
    ```

- **Interactive UI & Visual Effects**:
  - **Cyber Particle Background**: Lightweight HTML5 Canvas particle engine that dynamically responds to Dark/Light theme modes.
  - **Framer Motion Physics**: Smooth tilt card interactions, spring scroll progress indicator, and stagger entrance reveals.
  - **Interactive Terminal Preview**: Real-time simulated developer object with 1-click clipboard copy.
  - **Dynamic Typing Engine**: Smooth typing & deleting animation highlighting technical specializations.
  - **Confetti Celebration**: Canvas confetti burst upon successful contact form submission.

- **Full-Stack Project Showcase**:
  - Highlights **CodeTrack** (DSA tracking across 5 platforms with JWT auth & parallel sync scrapers) and other full-stack MERN & frontend applications.
  - Instant category filtering between Full-Stack MERN and Frontend/Web applications.

- **9 Verified Accreditations & Certifications**:
  - Dedicated `/certifications` view with search filtering, modal credential previews, and direct credential verification links.

- **Persistent Theme Switching**:
  - Seamless Dark/Light mode toggle with persistent state saved in `localStorage`.

---

## 🛠️ Tech Stack

- **Frontend Framework**: React.js 18 (Hooks, Context API, Modular Components)
- **Build Tool**: Vite 6 (Fast HMR, optimized production chunks)
- **Animation & Interactions**: Framer Motion, HTML5 Canvas Particle Engine, Canvas Confetti
- **Styling**: Vanilla CSS (Custom Design System, Glassmorphism, CSS Custom Properties)
- **Icons**: Lucide React
- **Live APIs**:
  - Custom Coding Profile Microservice (LeetCode, CodeChef, Codeforces, GFG)
  - Official Codeforces REST API
  - GitHub REST API

---

## 📁 Project Structure

```
src/
├── components/
│   ├── About/                   # About image, bio paragraphs & dynamic highlights
│   ├── Achievements/            # Stats banner, sync bar, LC, CC, CF, GFG & GitHub cards
│   ├── CertificateCard/         # Modular certificate card item & media
│   ├── CertificateModal/        # Certificate preview modal & details
│   ├── Contact/                 # Contact info & validated message form
│   ├── Footer/                  # Brand, navigation links, dynamic socials & bottom bar
│   ├── Hero/                    # Title, typing role, CTA buttons, stats & terminal card
│   ├── Navbar/                  # Brand logo, nav links, theme toggle & refresh action
│   ├── ParticleBackground/      # HTML5 canvas particle background hook & canvas
│   ├── Projects/                # Featured projects grid & category filters
│   ├── Skills/                  # Categorized skills matrix & category cards
│   ├── AnimatedCounter.jsx      # RequestAnimationFrame-driven smooth counter
│   ├── TiltCard.jsx             # 3D perspective tilt wrapper
│   └── ScrollReveal.jsx         # Viewport entrance animation wrapper
├── context/
│   ├── LiveStatsContext.jsx     # Live stats provider & refresh dispatch
│   ├── fallbackStats.js         # Offline cached fallback data baseline
│   └── statsParser.js           # Multi-platform API response normalization
├── data/
│   ├── portfolioData.js         # Personal bio, skills, projects, and FAQs
│   └── certificatesData.js      # Accreditations & verification metadata
├── hooks/
│   └── usePortfolioRouting.js   # Clean URL routing & certificate page handling
├── pages/
│   └── CertificationsPage/      # Dedicated certifications showcase page
├── App.jsx                      # Main app root & layout composition
└── main.jsx                     # Vite DOM entry point
```

---

## 💻 Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ajitkumarsaini02/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```
   Production assets are generated in the `dist/` directory.

5. **Preview production build locally**:
   ```bash
   npm run preview
   ```

---

## 🌐 Deployment

- **Vercel**: Configured for automated continuous deployment from the `main` branch.
- **Netlify**: Configured via `netlify.toml` with client-side URL fallback routing to `index.html`.

---

## 👤 Author

**Ajit Kumar Saini**
- Portfolio: [ajit-kumar-saini-portfolio.vercel.app](https://ajit-kumar-saini-portfolio.vercel.app/)
- LinkedIn: [linkedin.com/in/ajit-kumar-saini-74340932b](https://www.linkedin.com/in/ajit-kumar-saini-74340932b/)
- GitHub: [@ajitkumarsaini02](https://github.com/ajitkumarsaini02)
- LeetCode: [@ajitkumarsaini02](https://leetcode.com/u/ajitkumarsaini02/)
- CodeChef: [@ajitsaini94](https://www.codechef.com/users/ajitsaini94)
