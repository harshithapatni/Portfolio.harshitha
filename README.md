# Harshitha Patni — Personal Portfolio Website

A clean, modern, and fully responsive personal developer portfolio website built using **pure HTML5, CSS3, and vanilla JavaScript** (no frameworks, no third-party UI libraries, and no build steps).

Developed by **Harshitha Patni**, Third-year Information Technology student at Walchand Institute of Technology, Solapur and Fullstack Web App Development Intern at Valentius Kryptix.

---

## 🌟 Live Demo & Repository

- **Live Site**: `https://harshithapatni.github.io/portfolio`
- **GitHub Repository**: `https://github.com/harshithapatni/portfolio`

---

## 🚀 Key Features

- **Semantic HTML5 Architecture**: Built with `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` tags for search engine optimization and screen reader clarity.
- **Deep Teal & Marigold Aesthetic**: Designed with a distinctive color palette (deep slate teal backgrounds with warm amber/marigold accents) avoiding generic gradient templates.
- **Dark & Light Mode Toggle**: Smooth theme switching that persists the user's choice across sessions using `localStorage` safely wrapped in `try/catch` error handling.
- **Fully Responsive Layout**:
  - **Mobile (375px)**: Collapsible hamburger menu, single-column cards, full-width touch-friendly buttons.
  - **Tablet (768px)**: Balanced two-column grid layouts with responsive navigation.
  - **Desktop (1280px+)**: Spacious multi-column layouts with micro-interactions and hover elevations.
  - **No horizontal overflow** at any viewport width.
- **Interactive Project Filtering**: Instant filtering by technology category (**All Projects**, **JavaScript**, **HTML & CSS**, and **Java & SQL**) with animated transitions and ARIA attributes.
- **Accessibility (WCAG 2.1 Compliant)**:
  - Accessible "Skip to main content" link for keyboard users.
  - Full keyboard focus rings (`:focus-visible`).
  - ARIA attributes (`aria-expanded`, `aria-controls`, `aria-pressed`, `aria-label`, `role="status"`).
  - High color contrast meeting WCAG AA requirements.
  - Respects user motion preferences (`prefers-reduced-motion`).
- **Interactive Helpers**:
  - One-click "Copy Email" button with real-time visual feedback and screen reader announcements.
  - Smooth scrolling navigation with an active section scroll-spy indicator.
  - Dynamic copyright year auto-updater.

---

## 🛠️ Technologies Used

| Technology | Purpose |
| :--- | :--- |
| **HTML5** | Semantic landmarks, accessible form controls, and structured document hierarchy |
| **Vanilla CSS3** | Custom properties (CSS variables), Flexbox, CSS Grid, media queries, and animations |
| **Vanilla JavaScript (ES6+)** | Theme switching, DOM event listeners, project filtering, and clipboard interaction |
| **Google Fonts** | `Plus Jakarta Sans` (for bold headers) and `Inter` (for readable body text) |
| **SVG Icons** | Embedded vector icons for zero network lag and crisp high-DPI rendering |

---

## 📂 Project Structure

```text
Harshitha Portfolio/
├── index.html                  # Main semantic markup and page structure
├── style.css                   # Responsive styling, color variables, and themes
├── script.js                   # Client-side JavaScript interactions and modules
├── projects/                   # Fully functional interactive live project demos
│   ├── brew-and-bloom/         # Brew & Bloom artisan cafe website
│   ├── edutrack/               # EduTrack student management system
│   └── devweather/             # DevWeather real-time forecast dashboard
└── README.md                   # Comprehensive project documentation
```

---

## 💻 How to Run Locally

You do not need Node.js, npm, or any build setup to run this portfolio.

### Option 1: Double-click (Quickest)
1. Clone or download this repository to your computer.
2. Navigate to the project folder.
3. Double-click `index.html` to open it in your default web browser (Chrome, Edge, Firefox, Safari).

### Option 2: Using VS Code Live Server (Recommended for development)
1. Open the project folder in **Visual Studio Code**:
   ```bash
   code .
   ```
2. Install the **Live Server** extension by *Ritwick Dey* (Extension ID: `ritwickdey.LiveServer`).
3. Right-click on `index.html` in the file explorer and select **"Open with Live Server"** (or click **"Go Live"** in the VS Code bottom status bar).
4. The site will open automatically at `http://127.0.0.1:5500/index.html` with instant live reload on file saves.

### Option 3: Using Python Built-in Server (Terminal)
If you have Python installed:
```bash
# In the project root directory:
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

---

## 🔍 How to Test Responsiveness

1. Open the site in Google Chrome or Mozilla Firefox.
2. Press `F12` or right-click anywhere and select **Inspect**.
3. Click the **Toggle device toolbar** button (`Ctrl + Shift + M` / `Cmd + Shift + M`).
4. Test standard breakpoints:
   - **Mobile**: Select *iPhone SE* or enter **375px** width.
   - **Tablet**: Select *iPad Mini* or enter **768px** width.
   - **Desktop**: Select *Responsive* and set to **1280px** or higher.
5. Check that there is no horizontal scrollbar, typography scales smoothly, and buttons remain accessible.

---

## 👤 Author

- **Harshitha Patni**
- Third-year Information Technology Student, **Walchand Institute of Technology, Solapur**
- Fullstack Web App Development Intern, **Valentius Kryptix**
- Email: [harshithapatni@gmail.com](mailto:harshithapatni@gmail.com)
- GitHub: [github.com/harshithapatni](https://github.com/harshithapatni)
- LinkedIn: [linkedin.com/in/harshithapatni](https://linkedin.com/in/harshithapatni)

---

## 📄 License

This project is open-source and created as part of the internship curriculum at Valentius Kryptix. Feel free to use this codebase as a template for your own developer portfolio.
