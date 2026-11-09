# Choco — Handcrafted Artisanal Luxury Chocolate
> Handcrafted chocolate, finished by hand. An exclusive international luxury chocolate brand website inspired by slow sensory craftsmanship and single-origin cocoa.

---

## 🌟 Overview & Features

**Choco** is a multi-page luxury company website built for an artisanal chocolatier. Designed with an unhurried, editorial aesthetic, it showcases small-batch truffles, single-origin cacao philosophy, curated gift services, and an interactive concierge enquiry experience.

### Key Features
- **Strict Luxury Palette**: Deep Espresso (`#160D09`), Champagne Gold (`#D6AD45`), and Warm Ivory (`#F2E8D5`).
- **Editorial Typography**: Didone serif display headings with Champagne Gold italic highlights and clean, wide-tracked sans-serif labels.
- **Atmospheric 3D Parallax & Video**: Real 1080p authentic chocolate film backdrop overlaid with a 60 FPS HTML5 Canvas particle engine simulating organic cocoa powder and shimmering gold dust responding to mouse movements.
- **Signature Product Showcase**: 4-card signature collection with detailed tasting notes and a dedicated 10-flavor curated menu.
- **Interactive Storytelling**: 5-step bean-to-truffle process timeline, numbers counter, customer testimonials, and meet-the-makers kitchen profiles.
- **Service Tier Packages & FAQ Accordion**: 3-tier pricing packages with deep-linked pre-filled enquiries and an accessible 6-question accordion.
- **Accessible Contact Concierge**: Form validation for name, email, phone, subject dropdown, and message with instant success feedback.
- **100% Fluid Responsive Design**: Tailored layouts across mobile (320px–480px), tablet (768px–1024px), and desktop (1280px–1440px+) with zero horizontal overflow.
- **Accessible & SEO Ready**: Unique metadata per page, logical heading hierarchy, alt tags on all visuals, skip-to-content links, and WCAG 2.2 `:focus-visible` styling.

---

## 📄 Pages

- **Home (`index.html`)**: Features the 3D interactive hero, trust strip, 4 signature truffles, "The Choco Difference" pillars, a 3-step creation process, customer testimonials, and closing call-to-action band.
- **About (`about.html`)**: Details the kitchen origins, philosophy pillars, 5-step bean-to-truffle journey, by-the-numbers statistics, meet-the-makers profile cards, and quality promise.
- **Services (`services.html`)**: Outlines 6 core offerings (boxes, hampers, corporate, weddings, tastings, workshops), a 10-flavor menu, 4-step ordering guide, 3 curated packages, and an interactive FAQ accordion.
- **Contact (`contact.html`)**: Provides atelier location details, weekly opening hours, a validated enquiry form with subject selection, Google Maps embed area, and newsletter subscription.

---

## 🛠️ Tech Stack

- **HTML5**: Semantic elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<details>`, `<footer>`), ARIA attributes, and accessible landmarks.
- **CSS3**: Custom properties (CSS variables), Flexbox, multi-column CSS Grid, fluid clamp sizing, custom cubic-bezier transitions, and reduced-motion media query.
- **Vanilla JavaScript (ES6+)**:
  - `js/main.js`: Mobile drawer navigation, sticky blur header, IntersectionObserver scroll-triggered reveals, and video playback optimization.
  - `js/hero-choc-3d.js`: HTML5 Canvas rendering cocoa particles and gold dust with interactive 3D mouse parallax tilt.
  - `js/contact.js`: Real-time client-side form validation, URL query parameter pre-population, dynamic button states, and friendly confirmation handling.

---

## 📁 Folder Structure

```text
week 2/
├── index.html                   # Home page (Hero, Trust Strip, Signature, Testimonials, CTA)
├── about.html                   # About page (Origins, Philosophy, Process, Stats, Makers, Promise)
├── services.html                # Services page (6 Offerings, Flavor Menu, Ordering, Packages, FAQ)
├── contact.html                 # Contact page (Details, Opening Hours, Form, Map, Newsletter)
├── css/
│   ├── style.css                # Master design tokens, typography, layout grids, components
│   └── animations.css           # 3D transforms, particle drifts, shimmer cards, reduced motion
├── js/
│   ├── main.js                  # Navigation drawer, sticky header, scroll reveals
│   ├── hero-choc-3d.js          # Canvas particle physics & mouse tilt parallax
│   └── contact.js               # Contact form validation & query param handler
├── assets/
│   ├── icons/                   # Vector icons (folder, gift, celebration, bespoke, tasting, socials)
│   ├── images/                  # High-res photography, posters, craft illustrations
│   └── videos/                  # 1080p looped chocolate films
├── screenshots/                 # Viewport captures across Desktop, Tablet, and Mobile
├── docs/
│   └── DESIGN_SYSTEM_SPEC.md    # Detailed tokens, color codes, and component specifications
├── DESIGN_DECISIONS.md          # Architectural rationale and UI/UX engineering notes
├── netlify.toml                 # Netlify deployment configuration
├── vercel.json                  # Vercel deployment configuration
├── .gitignore                   # Git exclusion rules
└── README.md                    # Project documentation
```

---

## 🚀 How to Run Locally

No external build tools or package managers are required.

### Using Python Built-in Server (Recommended)
```powershell
# 1. Navigate to the project directory:
cd "c:\pune intern\week 2"

# 2. Start the local HTTP server:
python -m http.server 8000
```
Open **[http://localhost:8000](http://localhost:8000)** in any modern web browser.

### Using VS Code Live Server
1. Open the project folder in VS Code.
2. Right-click `index.html` and choose **"Open with Live Server"**.

---

## 🎨 Customization Notes

### 1. Colors & Design Tokens
All color tokens, fonts, and spacing are defined at the top of [`css/style.css`](css/style.css):
- **Deep Espresso Background**: Change `--color-espresso: #160D09;`
- **Champagne Gold Accents**: Change `--color-gold: #D6AD45;`
- **Warm Ivory Text**: Change `--color-ivory: #F2E8D5;`

### 2. Fonts
Fonts are loaded from Google Fonts in the `<head>` of each HTML file:
- Primary Display Serif: `'Bodoni Moda'`
- Italic Accent: `'Cormorant Garamond'`
- Body & Labels: `'Inter'`

### 3. Contact & Atelier Details
The contact details are configured across the entire website:
- **Atelier Address**: Nattukal P.O., Chittur, Palakkad District, Kerala, PIN - 678554
- **Phone / Call**: `+91 89214 85944` (`tel:+918921485944`)
- **WhatsApp**: Direct chat link via `https://wa.me/918921485944`
- **Email**: `anfasmohammed001@gmail.com` (`mailto:anfasmohammed001@gmail.com`)
- **Google Maps**: Live interactive map pinpointing Nattukal, Chittur, Palakkad with direct directions link.
- **Currency**: Indian Rupee (`₹`) applied to all curated service packages.

### 4. Form Backend Integration
In [`js/contact.js`](js/contact.js), a clear comment indicates where to replace the simulated `setTimeout` submission with a live backend call (e.g. `fetch("https://formspree.io/f/YOUR_ID", { method: "POST", body: new FormData(form) })`).

---

## 📸 Screenshots

| Viewport | Home Page | About Page | Services Page | Contact Page |
| :--- | :--- | :--- | :--- | :--- |
| **Desktop (1440×900)** | [Home Desktop](screenshots/desktop-home.png) | [About Desktop](screenshots/desktop-about.png) | [Services Desktop](screenshots/desktop-services.png) | [Contact Desktop](screenshots/desktop-contact.png) |
| **Tablet (768×1024)** | [Home Tablet](screenshots/tablet-home.png) | [About Tablet](screenshots/tablet-about.png) | [Services Tablet](screenshots/tablet-services.png) | [Contact Tablet](screenshots/tablet-contact.png) |
| **Mobile (375×812)** | [Home Mobile](screenshots/mobile-home.png) | [About Mobile](screenshots/mobile-about.png) | [Services Mobile](screenshots/mobile-services.png) | [Contact Mobile](screenshots/mobile-contact.png) |

---

## ⚖️ License & Credits

- Developed for **WeIntern Pvt. Ltd. — Week 2 Full Stack Development Assignment**.
- Designed and authored by **anfasmohammed001-star**.
- Visual assets and animations curated strictly for educational, portfolio, and demonstration purposes.
