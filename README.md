# Rayan Chentouf - Developer Portfolio

A modern, minimalist developer portfolio website built with React and Tailwind CSS.

## Features

✨ **Modern Design**

- Minimalist and clean UI
- Dark mode support
- Responsive design for all devices
- Smooth animations and transitions

📱 **Responsive Layout**

- Mobile-first design
- Optimized for tablets and desktops
- Touch-friendly navigation

🎨 **Component-Based Architecture**

- Reusable components (Navbar, Footer, ProjectCard, TechBadge)
- Easy to maintain and extend
- Clean code structure

🌙 **Dark Mode**

- System preference detection
- Manual toggle option
- Smooth transitions

## Tech Stack

- **Frontend**: React 18
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Animations**: CSS Tailwind utilities

## Project Structure

```
portfolio/
├── public/
│   └── projects/
│       ├── video-cv-analyzer.png
│       ├── accident-dashboard.png
│       ├── weather-energy-dashboard.png
│       ├── data-streaming-architecture.png
│       ├── moving-company-website.png
│       └── school-ent-system.png
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── TechBadge.jsx
│   │   └── index.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectDetail.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── index.js
│   ├── data/
│   │   └── projects.js
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── tailwind.config.js
├── index.html
├── package.json
├── vite.config.js
├── postcss.config.js
├── tailwind.config.js
└── README.md
```

## Pages

### Home

- Hero section with avatar
- Technical expertise overview
- Featured projects preview
- Call-to-action buttons

### Projects

- Grid view of all projects
- Filter by technology
- Project cards with:
  - Title and description
  - Technology badges
  - GitHub link
  - Screenshot placeholder

### Project Detail

- Full project information
- Detailed description
- Key features list
- Complete technology stack
- GitHub link
- Navigation to previous/next project

### About

- Personal bio
- Technical skills organized by category
- Experience highlights
- Education information
- Call-to-action

### Contact

- Contact form
- Contact information (email, LinkedIn, GitHub)
- Response time information
- Collaboration topics

## Reusable Components

### Navbar

- Logo/branding
- Navigation links
- Dark mode toggle
- Mobile menu

### Footer

- Social links
- Quick navigation
- Copyright information

### ProjectCard

- Project image placeholder
- Title and description
- Technology badges
- GitHub link

### TechBadge

- Technology name display
- Hover effects
- Consistent styling

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:

```bash
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The website will open automatically at `http://localhost:3000`

### Build for Production

Create an optimized production build:

```bash
npm run build
```

View the production build:

```bash
npm run preview
```

## Customization

### Adding Projects

Edit `src/data/projects.js` to add new projects:

```javascript
{
  id: 7,
  title: "Your Project Title",
  shortDescription: "Brief description",
  detailedDescription: "Detailed project description",
  features: ["Feature 1", "Feature 2"],
  technologies: ["Tech1", "Tech2"],
  screenshot: "screenshot.png",
  github: "https://github.com/...",
  color: "from-color1-600 to-color1-400"
}
```

### Adding Project Screenshots

1. Add screenshot images to `public/projects/`
2. Update the `screenshot` field in `src/data/projects.js`

### Styling

- Edit `src/index.css` for global styles
- Modify `tailwind.config.js` for theme customization
- Update `postcss.config.js` if needed

## Color Scheme

- **Primary**: Blue (`#3b82f6`)
- **Secondary**: Cyan (`#06b6d4`)
- **Dark Background**: Gray-950 (`#030712`)
- **Light Background**: White (`#ffffff`)

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Deploy to Netlify

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

## Performance

- Optimized for fast loading
- Lazy loading of images
- Minified CSS and JavaScript
- SEO-friendly meta tags

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contact

- **Email**: rayane.ch2209@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/rayan-chentouf-312249348
- **GitHub**: https://github.com/RayaneCHENTOUF

---

Built with ❤️ using React & Tailwind CSS
