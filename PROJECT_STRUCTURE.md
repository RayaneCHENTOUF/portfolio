```
portfolio/
│
├── 📁 public/
│   └── 📁 projects/
│       ├── video-cv-analyzer.png (📸 Screenshot placeholder)
│       ├── accident-dashboard.png
│       ├── weather-energy-dashboard.png
│       ├── data-streaming-architecture.png
│       ├── moving-company-website.png
│       └── school-ent-system.png
│
├── 📁 src/
│   ├── 📁 components/          (Reusable UI Components)
│   │   ├── Navbar.jsx          (Navigation with dark mode toggle)
│   │   ├── Footer.jsx          (Footer with social links)
│   │   ├── ProjectCard.jsx     (Project display card)
│   │   ├── TechBadge.jsx       (Technology badge)
│   │   └── index.js            (Component exports)
│   │
│   ├── 📁 pages/               (Page Components)
│   │   ├── Home.jsx            (Landing page with hero section)
│   │   ├── Projects.jsx        (Projects grid with filters)
│   │   ├── ProjectDetail.jsx   (Individual project page)
│   │   ├── About.jsx           (About & skills section)
│   │   ├── Contact.jsx         (Contact form & info)
│   │   └── index.js            (Page exports)
│   │
│   ├── 📁 data/                (Static Data)
│   │   └── projects.js         (All 6 projects data)
│   │
│   ├── App.jsx                 (Main app component with routing)
│   ├── main.jsx                (React entry point)
│   └── index.css               (Global styles & Tailwind imports)
│
├── 📄 index.html               (HTML entry point)
├── 📄 package.json             (Dependencies & scripts)
├── 📄 vite.config.js           (Vite build configuration)
├── 📄 postcss.config.js        (PostCSS configuration)
├── 📄 tailwind.config.js       (Tailwind theme configuration)
├── 📄 .gitignore               (Git ignore rules)
├── 📄 .env.example             (Environment variables template)
├── 📄 README.md                (Project documentation)
└── 📄 SETUP_GUIDE.md           (Setup & deployment guide)
```

## Component Hierarchy

```
App
├── Navbar
│   ├── Navigation Links
│   ├── Dark Mode Toggle
│   └── Mobile Menu
│
├── Routes
│   ├── Home
│   │   ├── Hero Section
│   │   ├── Skills Overview
│   │   └── Featured Projects
│   │
│   ├── Projects
│   │   ├── Filter Controls
│   │   └── ProjectCard (×6)
│   │       ├── Screenshot Placeholder
│   │       ├── Project Title
│   │       ├── Description
│   │       ├── TechBadges
│   │       └── GitHub Link
│   │
│   ├── ProjectDetail (/:id)
│   │   ├── Screenshot Placeholder
│   │   ├── Project Title
│   │   ├── Overview
│   │   ├── Features List
│   │   ├── Tech Stack
│   │   └── Navigation (prev/next)
│   │
│   ├── About
│   │   ├── Bio Section
│   │   ├── Skills Grid
│   │   ├── Experience Highlights
│   │   └── Education
│   │
│   └── Contact
│       ├── Contact Form
│       ├── Contact Info
│       └── Additional Info
│
└── Footer
    ├── Footer Links
    ├── Quick Navigation
    └── Social Links
```

## Data Flow

```
App.jsx (Routes)
    ↓
Pages (Home, Projects, About, Contact, ProjectDetail)
    ↓
Components (Navbar, Footer, ProjectCard, TechBadge)
    ↓
Data (projects.js)
```

## Styling Architecture

```
Tailwind CSS
├── Base Styles (index.css)
├── Component Styles (Tailwind classes)
├── Layer Components
│   ├── section-container
│   ├── section-heading
│   ├── gradient-text
│   ├── card-hover
│   ├── btn-primary
│   └── btn-secondary
└── Custom Animations
    ├── fadeIn
    ├── slideUp
    └── pulse
```

## Project Data Structure

Each project in `projects.js` contains:

```javascript
{
  id: 1,                          // Unique identifier
  title: "Project Name",
  shortDescription: "Brief...",
  detailedDescription: "Long...",
  features: ["Feature 1", "..."],
  technologies: ["Tech1", "..."],
  screenshot: "filename.png",
  github: "https://github.com/...",
  color: "from-color-600 to-color-400"
}
```

## File Size Overview

- **React Dependencies**: ~200KB
- **Tailwind CSS**: ~100KB (minified)
- **Project Code**: ~50KB
- **Total Bundle**: ~350KB (gzipped: ~100KB)

## Key Features by Page

### Home

- Hero section with CTA buttons
- Quick skills overview
- Featured projects preview
- Benefits highlight

### Projects

- Full project grid (3 columns on desktop)
- Technology filter system
- Project count display
- No results handling

### ProjectDetail

- Full project showcase
- Detailed description
- Key features with icons
- Complete tech stack
- Previous/next navigation

### About

- Personal bio with avatar
- 4 skill categories
- 4 experience highlights
- Education section

### Contact

- Email contact form
- 3 quick contact methods
- Collaboration topics
- Location information

## Dark Mode Implementation

- System preference detection on load
- Manual toggle button in navbar
- Smooth transitions
- All components styled for both themes
- Uses Tailwind's `dark:` utilities

## Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md)
- **Desktop**: > 1024px (lg)

All components are mobile-first design approach.
