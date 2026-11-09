# CHOCO — Exclusive Artisanal Luxury Chocolate

> **WeIntern Pvt. Ltd. — Week 2 Full Stack Development Assignment (Task 1: Responsive Company Website)**  
> **Live Demo**: `https://anfas-choco.netlify.app` *(or GitHub Pages / Vercel deployment)*  
> **Reference Benchmark**: [https://ordinary-places-056230.framer.app/](https://ordinary-places-056230.framer.app/)

---

## 🌟 Project Overview

**Choco** is an exclusive, international luxury chocolate brand website crafted with pure **HTML5**, modern **CSS3 (Flexbox & CSS Grid)**, and vanilla **JavaScript (ES6+)**. 

Designed to meet and exceed all requirements of the **Week 2 Full Stack Development Assignment**, the project implements:
- A strict **Three-Color Luxury Design System** (Deep Espresso `#160D09`, Champagne Gold `#D6AD45`, Warm Ivory `#F2E8D5`).
- Four complete, interconnected pages (**Home**, **About**, **Services**, **Contact**).
- Editorial Didone serif typography, authentic 1080p looped chocolate films, and a 60 FPS Canvas particle engine with 3D mouse parallax.
- Fully accessible, interactive client-side form validation with dynamic button feedback, error handling, and generated luxury ticket receipts (`TICKET #CH-XXXXX`).
- 100% fluid responsiveness across **Mobile (320px–480px)**, **Tablet (768px–1024px)**, and **Desktop (1280px–1440px+)**.

---

## 🛠️ Technologies Used

- **HTML5**: Semantic document structure (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<canvas>`), ARIA accessibility roles (`aria-expanded`, `aria-describedby`, `aria-invalid`, `aria-live`), and skip-to-content keyboard links.
- **CSS3**: Custom properties (CSS variables), CSS Flexbox, multi-column CSS Grid, fluid typography via `clamp()`, `text-wrap: balance/pretty`, custom cubic-bezier transitions (`--ease-luxury`), and `@media (prefers-reduced-motion)`.
- **JavaScript (ES6+)**:
  - `js/main.js`: Mobile drawer toggle, sticky backdrop-blur navigation bar, IntersectionObserver video lazy-loading, and viewport reveal triggers.
  - `js/hero-choc-3d.js`: 60 FPS HTML5 Canvas simulating organic floating cocoa powder and shimmering Champagne Gold light dust with mouse parallax tilt physics.
  - `js/contact.js`: Real-time input validation, RFC-compliant email checking, dynamic CTA button state updates, pending submission spinner, and receipt generator.

---

## 🎨 Three-Color Luxury Design System

| Color Token | Hex Code | Applied Elements |
| :--- | :--- | :--- |
| **Deep Espresso** | `#160D09` | Page backdrops, dark surface containers, cards, and input backgrounds. |
| **Champagne Gold** | `#D6AD45` | CTAs, borders, delicate divider lines, active navigation indicators, particles, and italic highlights (`<em>`). |
| **Warm Ivory** | `#F2E8D5` | Editorial serif headings, readable text copy, labels, and iconography. |

---

## 📄 Website Pages & Core Features

### 1. Home Page (`index.html`)
- **Luxury Header & Navigation**: Fixed navigation with backdrop-blur, serif logo, desktop links, and accessible mobile slide-over drawer.
- **Hero Section (Experience 01)**: Balanced two-column layout featuring *"Indulge in pure darkness."*, 1080p chocolate film background, Canvas cocoa/gold particle field, and mouse parallax.
- **The Chocolate Collection**: 3-column micro-batch showcase (Venezuelan Dark Truffles, Madagascar Milk Chocolate, Cold-Pressed White Truffles).
- **The Chocolate Experience (02)**: Reversed storytelling section with spinning milk chocolate bar in warm golden lighting.
- **The Choco Films Gallery**: 3-column video showcase (*Dark truffles*, *Milk chocolate*, *White chocolate truffles*) in sharp, rectangular editorial luxury frames without curved border distortions.
- **The Choco Approach**: 3 core craft pillars (*Texture to savour*, *Flavour to explore*, *Moments to share*).
- **Closing CTA & 4-Column Footer**: Grand invitation and complete footer with company info, quick links, contact info, and social icons.

### 2. About Page (`about.html`)
- **Our Story**: *"Chocolate worth slowing down for."*
- **Philosophy Story Split**: Agroforestry canopies and slow stone conching copy with 2K imagery.
- **Mission & Vision**: Dedicated luxury cards detailing ethical estate sourcing, master crystal tempering, canopy preservation, and conscious luxury commitments.
- **Our Team Disciplines**: 3 atelier disciplines (*Chocolate craft*, *Creative studio*, *Client experience*).

### 3. Services Page (`services.html`)
- **Hero Section**: *"A little luxury. Made personal."*
- **4 Core Offerings (2×2 Grid)**:
  1. *Corporate Gifting* — Milestones, client bespoke boxes, and custom branded sleeves.
  2. *Celebration Favours* — Weddings, banquets, and private milestone celebrations.
  3. *Bespoke Collections* — Tailored single-estate cacao blends and custom packaging.
  4. *Chocolate Experiences* — Sommelier-guided private tasting conversations.
- **3-Step Process Timeline**: `01` Tell us your occasion ➔ `02` Shape your selection ➔ `03` Enjoy the moment.
- **Deep-Link Integration**: Direct links into `contact.html?service=...` automatically pre-filling subject and brief.

### 4. Contact Page (`contact.html`)
- **Hero & Guidance Split**: Bespoke consultation details and direct atelier contact.
- **Accessible Contact Form**:
  - Full Name, Email Address, **Subject**, and Message fields.
  - Live client-side validation on blur and input with `aria-invalid` and `aria-describedby`.
  - Dynamic button updates (*"Check Required Fields"* ➔ *"Send Enquiry"* ➔ *"Submitting Enquiry..."*).
  - Luxury receipt modal with generated ticket number (e.g. `TICKET #CH-84920`) and 24h SLA.
  - Clear client-side demonstration notice.

---

## 📸 Responsive Verification & Screenshots

All 4 pages have been rendered and captured across **Desktop (1440×900)**, **Tablet (768×1024)**, and **Mobile (375×812)** viewports:

| Page | Desktop (1440×900) | Tablet (768×1024) | Mobile (375×812) |
| :--- | :--- | :--- | :--- |
| **Home** | [`desktop-home.png`](screenshots/desktop-home.png) | [`tablet-home.png`](screenshots/tablet-home.png) | [`mobile-home.png`](screenshots/mobile-home.png) |
| **About** | [`desktop-about.png`](screenshots/desktop-about.png) | [`tablet-about.png`](screenshots/tablet-about.png) | [`mobile-about.png`](screenshots/mobile-about.png) |
| **Services** | [`desktop-services.png`](screenshots/desktop-services.png) | [`tablet-services.png`](screenshots/tablet-services.png) | [`mobile-services.png`](screenshots/mobile-services.png) |
| **Contact** | [`desktop-contact.png`](screenshots/desktop-contact.png) | [`tablet-contact.png`](screenshots/tablet-contact.png) | [`mobile-contact.png`](screenshots/mobile-contact.png) |

---

## 🚀 How to Run the Project Locally

No build steps or dependencies required.

### Option 1: Python Built-in Server (Recommended)
```powershell
# Navigate to the workspace directory:
cd "c:\pune intern\week 2"

# Start the local server on port 8000:
python -m http.server 8000
```
Open **[http://localhost:8000](http://localhost:8000)** in your browser.

### Option 2: VS Code Live Server
1. Open the project folder in VS Code.
2. Right-click `index.html` and click **"Open with Live Server"**.

---

## 🚢 Live Deployment Readiness

The project is pre-configured and 100% ready for instant static deployment:

1. **GitHub Pages**:
   - Push repository to GitHub.
   - Go to **Settings > Pages > Branch: main / root > Save**.
2. **Netlify**:
   - Configured with [`netlify.toml`](netlify.toml) including security headers.
   - Connect GitHub repo or drag-and-drop the directory into Netlify.
3. **Vercel**:
   - Configured with [`vercel.json`](vercel.json) with clean URL routing.
   - Run `vercel` or import repo into Vercel Dashboard.

---

## 📖 Design Decisions

For an in-depth breakdown of typographic pairing, motion physics, color contrast compliance, and accessibility considerations, see [`DESIGN_DECISIONS.md`](DESIGN_DECISIONS.md).

---

## ⚖️ License & Assignment Info

Developed for **WeIntern Pvt. Ltd. — Week 2 Full Stack Development Assignment**.  
All design patterns and media assets are curated for educational and portfolio demonstration.
